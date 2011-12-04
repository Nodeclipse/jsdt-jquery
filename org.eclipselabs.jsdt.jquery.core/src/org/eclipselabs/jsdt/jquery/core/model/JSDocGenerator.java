/*
 * *****************************************************************************
 * Copyright (c) 2011 Philippe Marschall and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Philippe Marschall
 * *****************************************************************************
 *
 */
package org.eclipselabs.jsdt.jquery.core.model;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.eclipselabs.jsdt.jquery.api.SimpleVersion;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;
import org.eclipselabs.jsdt.jquery.core.api.JQueryDocumentation;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;
import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;


public class JSDocGenerator {
  
  private static final String JQUERY_EVENT_PROTOTYPE = JQueryMember.JQUERY_EVENT + ".prototype";

private static final Map<String, String> DEFAULT_VALUES;
  
  static {
      DEFAULT_VALUES = new HashMap<String, String>();
      DEFAULT_VALUES.put("String", "\"\"");
      DEFAULT_VALUES.put("Object", "{}");
      DEFAULT_VALUES.put("Map", "{}");
      DEFAULT_VALUES.put("Boolean", "true");
      DEFAULT_VALUES.put("Number", "1");
      DEFAULT_VALUES.put("Element", "null");
      DEFAULT_VALUES.put("Anything", "{}");
  }
  
  private static final Version VERSION_WITH_DEFERRED = SimpleVersion.fromString("1.5");

  private Writer output;

  private boolean noConflict;

  private Version maximumVersion;

  public void write(Collection<JQueryMember> members, boolean noConflict, Writer output, Version maximumVersion) throws IOException {
    try {
      this.writeProtected(members, noConflict, output, maximumVersion);
    } finally {
      output.close();
    }
  }

  private void writeProtected(Collection<JQueryMember> members, boolean noConflict, Writer output, Version maximumVersion) {
    this.noConflict = noConflict;
    this.output = output;
    this.maximumVersion = maximumVersion;
    
    this.writeJQueryObject();
    this.visitAll(members, Filters.INSTANCE_SIDE, new JQueryInstanceSideWriter());
    
    this.writeJQueryEvent();
    this.visitAll(members, Filters.EVENT, new JQueryEventWriter());
    
    Function constructor = this.findConstructor(members);
    this.writeConstructor(constructor);
    // waiting for the following bug to be fixed
    // https://bugs.eclipse.org/bugs/show_bug.cgi?id=362403
//    this.writeDeferredConsturctor();
//    MemberVisitor<Void> classVisitor = new ClassSideVisitor<Void>(this);
//    for (JQueryMember member : members) {
//      member.accept(classVisitor);
//    }
  }
  
  private void visitAll(Collection<JQueryMember> members, Predicate predicate, MemberVisitor<Void> visistor) {
    MemberVisitor<Void> filteredVisitor = new FilteredVisitor<Void>(predicate, visistor);
    for (JQueryMember member : members) {
      member.accept(filteredVisitor);
    }
  }

  private Function findConstructor(Collection<JQueryMember> members) {
    MemberVisitor<Function> finder = new ConstructorFinder();
    for (JQueryMember member : members) {
      Function constructor = member.accept(finder);
      if (constructor != null) {
        return constructor;
      }
    }
    throw new RuntimeException("no constructor found");
  }

  public static void main(String[] args) throws IOException {
    long start = System.currentTimeMillis();
    DocumentationParser parser = new DocumentationParser();
    InputStream input = DocumentationParser.class.getClassLoader().getResourceAsStream("api.xml");
    JQueryDocumentation documentation;
    try {
      documentation = parser.parse(input);
    } catch (DocumentationParseException e) {
      e.printStackTrace(System.err);
      return;
    }

    JSDocGenerator generator = new JSDocGenerator();

    File parent = new File(new File(new File(".."), "org.eclipselabs.jsdt.jquery.api"), "libraries");
    for (Version version : documentation.getAllVersions()) {
      OutputStream outputStream = new FileOutputStream(new File(parent, "jquery-doc-" + version.toString() + ".js"));
      OutputStream buffered = new BufferedOutputStream(outputStream);
      generator.write(documentation.getMembers(), false, new OutputStreamWriter(buffered, "US-ASCII"), version);

      outputStream = new FileOutputStream(new File(parent, "jquery-doc-noconflict-" + version.toString() + ".js"));
      buffered = new BufferedOutputStream(outputStream);
      generator.write(documentation.getMembers(), true, new OutputStreamWriter(buffered, "US-ASCII"), version);
    }

    long end = System.currentTimeMillis();
    System.out.printf("finished generating documentation in %dms%n", end - start);
  }

  static final class ConstructorFinder implements MemberVisitor<Function> {

    @Override
    public Function visitFuntion(Function function) {
      String owner = function.getOwner();
      if (JQueryMember.JQUERY_OBJECT.equals(owner)
          && "jQuery".equals(function.getName())
          && "jQuery".equals(function.getReturnType())) {
        return function;
      }
      return null;
    }

    @Override
    public Function visitProperty(Property property) {
      return null;
    }

  }

  private void writeConstructor(Function constructor) {
    this.writeConstructor(constructor, "jQuery");
    if (!this.noConflict) {
      this.writeConstructor(constructor, "$");
    }
  }

  private void writeConstructor(Function constructor, String globalVariableName) {
      
    this.writeStart();
    this.writeCommentLine(constructor.getDescription());
    this.writeTag("returns", '{' + JQueryMember.JQUERY_OBJECT + '}');
    this.writeEnd();
    
    this.writeLine("function " + globalVariableName + "() {};");
  }
  
  private void writeJQueryObject() {
      this.writeLine("var " + JQueryMember.JQUERY_OBJECT + " = { };");
  }
  
  private void writeJQueryEvent() {
      this.writeLine("function " + JQueryMember.JQUERY_EVENT + "(){};");
      this.writeLine(JQueryMember.JQUERY_EVENT + " = new Object();");
  }
  

  private void writeDeferredConsturctor() {
    if (this.maximumVersion.compareTo(VERSION_WITH_DEFERRED) >= 0) {
      this.writeDeferredConsturctor("jQuery");
      if (!this.noConflict) {
        this.writeDeferredConsturctor("$");
      }
    }
  }

  private void writeDeferredConsturctor(String globalVariableName) {
    this.writeStart();
    this.writeTag("returns", "{Promise}");
    this.writeEnd();
    this.writeLine(globalVariableName + ".Deferred = function() {};");
  }

  static boolean isJQueryObject(DocumentedMember member) {
    return isJQueryObject(member.getOwner());
  }

  static boolean isJQueryObject(String owner) {
    return JQueryMember.JQUERY_OBJECT.equals(owner);
  }

  static boolean isJQueryStatic(DocumentedMember member) {
    return isJQueryStatic(member.getOwner());
  }

  static boolean isJQueryStatic(String owner) {
    return "jQuery".equals(owner);
  }

  static boolean isJQueryEvent(DocumentedMember member) {
    return isJQueryEvent(member.getOwner());
  }

  static boolean isJQueryEvent(String owner) {
    return "event".equals(owner);
  }
  
  final class JQueryEventWriter implements MemberVisitor<Void> {

    @Override
    public Void visitFuntion(Function function) {
        visitJQueryEventFunction(function);
        return null;
    }

    @Override
    public Void visitProperty(Property property) {
        visitJQueryEventeProperty(property);
        return null;
    }
      
  }
  
  final class JQueryInstanceSideWriter implements MemberVisitor<Void> {
      
      @Override
      public Void visitFuntion(Function function) {
          visitJQueryInstanceSideFunction(function);
          return null;
      }
      
      @Override
      public Void visitProperty(Property property) {
          visitJQueryInstanceSideProperty(property);
          return null;
      }
      
  }
  
  final class JQueryClassSideWriter implements MemberVisitor<Void> {
      
      private final String jQueryGlobal;
      
      JQueryClassSideWriter(String jQueryGlobal) {
        this.jQueryGlobal = jQueryGlobal;
    }

    @Override
      public Void visitFuntion(Function function) {
        visitJQueryClassSideFunction(function, this.jQueryGlobal);
          return null;
      }
      
      @Override
      public Void visitProperty(Property property) {
          visitJQueryClassSideProperty(property, this.jQueryGlobal);
          return null;
      }
      
  }
  
  void visitJQueryEventFunction(Function function) {
      writeFunction(function, JQUERY_EVENT_PROTOTYPE);
  }
  
  void visitJQueryEventeProperty(Property property) {
      writeProperty(property, JQUERY_EVENT_PROTOTYPE);
  }
  
  void visitJQueryInstanceSideFunction(Function function) {
      writeFunction(function, JQueryMember.JQUERY_OBJECT);
  }
  
  void visitJQueryInstanceSideProperty(Property property) {
      writeProperty(property, JQueryMember.JQUERY_OBJECT);
  }
  
  void visitJQueryClassSideFunction(Function function, String jQueryGlobal) {
      writeFunction(function, jQueryGlobal);
  }
  
  void visitJQueryClassSideProperty(Property property, String jQueryGlobal) {
      writeProperty(property, jQueryGlobal);
  }
  
  private void writeFunction(Function function, String owner) {
      List<FunctionSignature> signatures = function.getSignaturesInVersion(this.maximumVersion);
      if (!signatures.isEmpty()) {
          this.writeStart();
          this.writeCommentLine(function.getDescription());
          String returnType = function.getReturnType();
          if (!signatures.isEmpty()) {
              //String prefix;
              //if (signatures.size() > 1) {
              //  prefix = "^1";
              //} else {
              //  prefix = null;
              //}
              FunctionSignature signature = signatures.get(0);
              this.writeSignature(function, signature, null);
          }
          if (!StringUtils.isEmpty(returnType)) {
              this.writeTag("returns", '{' + fixReturnTypes(returnType) + '}');
          }
          this.writeEnd();
          //if (signatures.size() > 1) {
          //  int i = 2;
          //  for (MethodSignature signature : signatures.subList(1, signatures.size())) {
          //    String suffix = "^" + i;
          //    this.writeStart();
          //    this.writeSignature(method.getName(), signature, suffix);
          //    this.writeEnd();
          //    i += 1;
          //  }
          //}
          writeIdentifier(owner);
          this.write(function.getName());
          this.write(" = function(");
          if (!signatures.isEmpty()) {
              FunctionSignature signature = signatures.get(0);
              boolean first = true;
              for (FunctionArgument argument : signature.getArguments()) {
                  if (!first) {
                      write(", ");
                  }
                  first = false;
                  write(argument.getName());
              }
          }
          this.write(") {};");
          this.writeNewLine();
      }
  }

  private void writeIdentifier(String owner) {
      this.write(owner);
      this.write('.');
  }

  private void writeSignature(Function function, FunctionSignature signature, String suffix) {
    Version added = signature.getAdded();
    this.writeTag("since", added.toString());
    
    if (function.isDeprecatedIn(this.maximumVersion)) {
      this.writeTag("deprecated", function.getDeprecated());
    } else {
      if (signature.isDeprecatedIn(this.maximumVersion)) {
        this.writeTag("deprecated", signature.getDeprecated());
      }
    }
    //this.writeTag("name", methodName + StringUtils.defaultString(suffix));

    for (JQueryArgument argument : signature.getArguments()) {
      writeArgument(argument, null);
    }
  }

  private void writeArgument(JQueryArgument argument, String prefix) {
    StringBuilder buffer = new StringBuilder();

    //type
    String type = argument.getType();
    if (!StringUtils.isEmpty(type)) {
      buffer.append('{');
      //buffer.append(StringUtils.replaceChars(type, ',', '|')); // different types may be allowed eg. String,Number
      int commaIndex = type.indexOf(',');
      if (commaIndex == -1) {
        buffer.append(type);
      } else {
        //FIXME hax for JSDT bug, can't have multiple types
        buffer.append(type.substring(0, commaIndex));
      }
      buffer.append('}');
      buffer.append(' ');
    }

    // name, optional, default
    boolean optional = argument.isOptional();
    if (optional) {
      buffer.append('[');
    }

    if (!StringUtils.isEmpty(prefix)) {
      buffer.append(prefix);
    }
    buffer.append(argument.getName());
    if (optional) {
      String defaultValue = argument.getDefaultValue();
      if (!StringUtils.isEmpty(defaultValue)) {
        buffer.append('=');
        buffer.append(defaultValue);
      }
    }
    if (optional) {
      buffer.append(']');
    }
    buffer.append(' ');
    buffer.append(argument.getDescription());

    this.writeTag("param", buffer.toString());

    if ("Map".equals(type)) {
      Collection<? extends JQueryArgument> options = argument.getOptions();
      if (!options.isEmpty()) {
        String subPrefix = argument.getName() + '.';
        for (JQueryArgument option : options) {
          this.writeArgument(option, subPrefix);
        }
      }
    }
  }
  
  private String fixPropertyTypes(String type) {
    return fixMultipleTypes(type);
  }
  
  private String fixReturnTypes(String type) {
      if ("jQuery".equals(type)) {
          return JQueryMember.JQUERY_OBJECT;
      } else {
          return fixMultipleTypes(type);
      } 
  }

  private String fixMultipleTypes(String type) {
    //buffer.append(StringUtils.replaceChars(type, ',', '|')); // different types may be allowed eg. String,Number
    int commaIndex = type.indexOf(',');
    if (commaIndex == -1) {
      return type;
    } else {
      String[] types = StringUtils.split(type, ',');
      for (int i = 0; i < types.length; ++i) {
        types[i] = StringUtils.trim(types[i]);
      }
      return StringUtils.join(types, '|');
    }
  }
  
  private void writeProperty(Property property, String owner) {
      
      
      this.writeStart();
      this.writeCommentLine(property.getDescription());
      
      this.writeDeprecated(property);
      
      String returnType = property.getReturnType();
      if (!StringUtils.isEmpty(returnType)) {
          this.writeTag("type", '{' + fixPropertyTypes(returnType) + '}');
      }
      this.writeEnd();
      
      writeIdentifier(owner);
      this.write(property.getName());
      this.write(" = ");
      
      String defaultValue = DEFAULT_VALUES.get(returnType);
      if (defaultValue == null) {
          throw new RuntimeException("no known default type for: " + returnType);
      } else {
          this.write(defaultValue);
      }
      
      this.write(';');
      this.writeNewLine();
  }

  private void writeDeprecated(Property property) {
    if (property.isDeprecatedIn(this.maximumVersion)) {
      this.writeTag("deprecated", property.getDeprecated());
    } else {
      Collection<PropertySignature> signatures = property.getSignatures();
      if (!signatures.isEmpty()) {
        PropertySignature signature = signatures.iterator().next();
        if (signature.isDeprecatedIn(this.maximumVersion)) {
          this.writeTag("deprecated", signature.getDeprecated());
        }
      }
    }
  }

  private void writeStart() {
    try {
      this.output.write("/**");
      writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }
  
  private void write(String s) {
      try {
          this.output.write(s);
      } catch (IOException e) {
          throw new RuntimeException("output failed", e);
      }
  }

  private void write(char c) {
    try {
      this.output.write(c);
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeLine(String line) {
    try {
      this.output.write(line);
      writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeCommentLine(String line) {
    try {
      writeStartLine();
      this.output.write(line);
      writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeStartLine() {
    try {
      this.output.write(" * ");
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeNewLine() {
    try {
      this.output.write('\n');
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeTag(String tag, String content) {
    try {
      writeStartLine();
      this.output.write('@');
      this.output.write(tag);
      this.output.write(' ');
      this.output.write(content);
      writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeEnd() {
    try {
      this.output.write(" */");
      writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }
  
  interface Predicate {
    
    boolean isTrue(Function function);
    
    boolean isTrue(Property property);
    
  }
  
  
  static final class FilteredVisitor<P> implements MemberVisitor<P> {
      
    private final MemberVisitor<P>  delegate;
    private final Predicate predicate;

    FilteredVisitor(Predicate predicate, MemberVisitor<P> delegate) {
      this.predicate = predicate;
      this.delegate = delegate;
    }

    @Override
    public P visitFuntion(Function function) {
      if (this.predicate.isTrue(function)) {
        return this.delegate.visitFuntion(function); 
      } else {
        return null;
      }
    }

    @Override
    public P visitProperty(Property property) {
      if (this.predicate.isTrue(property)) {
        return this.delegate.visitProperty(property);
      } else {
        return null;
      }
    }
      
  }
  
  enum Filters implements Predicate {
    
    CLASS_SIDE {

      @Override
      public boolean isTrue(Function function) {
        return isJQueryStatic(function);
      }

      @Override
      public boolean isTrue(Property property) {
        return isJQueryStatic(property);
      }
      
    },
    
    INSTANCE_SIDE {

      @Override
      public boolean isTrue(Function function) {
        return isJQueryObject(function);
      }

      @Override
      public boolean isTrue(Property property) {
        return isJQueryObject(property);
      }
      
    },
    
    EVENT {

      @Override
      public boolean isTrue(Function function) {
        return isJQueryEvent(function);
      }

      @Override
      public boolean isTrue(Property property) {
        return isJQueryEvent(property);
      }
      
    }
    
  }
  
}
