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


public class JSDocGenerator implements MemberVisitor<Void> {
  
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
    MemberVisitor<Void> instanceVisitor = new InstanceSideVisitor<Void>(this);
    for (JQueryMember member : members) {
        member.accept(instanceVisitor);
    }
    
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

  static boolean isJQueryObject(String owner) {
    return JQueryMember.JQUERY_OBJECT.equals(owner);
  }

  static boolean isJQueryStatic(String owner) {
    return "jQuery".equals(owner);
  }

  @Override
  public Void visitFuntion(Function function) {
    String owner = function.getOwner();
    boolean isStatic = isJQueryStatic(owner);
    boolean isObject = isJQueryObject(owner);
    boolean writeDoc = isStatic || isObject;

    if (writeDoc) {
      writeFunction(function, owner, "jQuery");
      if (!this.noConflict && isStatic) {
        writeFunction(function, owner, "$");
      }
    } else {
      System.out.println(owner);
    }

    return null;
  }

  private void writeFunction(Function function, String owner, String jQueryGlobalObjectName) {
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
        this.writeSignature(function.getName(), signature, null);
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
      writeIdentifier(owner, jQueryGlobalObjectName);
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

  private void writeIdentifier(String owner, String jQueryGlobalObjectName) {
    if (isJQueryObject(owner)) {
      this.write(JQueryMember.JQUERY_OBJECT);
      this.write(".");
    } else if(isJQueryStatic(owner)) {
      this.write(jQueryGlobalObjectName);
      this.write(".");
    } else {
      throw new RuntimeException("unknown owner: " + owner);
    }
  }

  private void writeSignature(String methodName, FunctionSignature signature, String suffix) {
    Version added = signature.getAdded();
    this.writeTag("since", added.toString());
    //    this.writeTag("name", methodName + StringUtils.defaultString(suffix));

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

  @Override
  public Void visitProperty(Property property) {
    if (!property.isIncludedIn(this.maximumVersion)) {
      return null;
    }
    String owner = property.getOwner();
    boolean isStatic = isJQueryStatic(owner);
    boolean isObject = isJQueryObject(owner);
    boolean writeDoc = isStatic || isObject;

    if (writeDoc) {
      writeProperty(property, owner, "jQuery");
      if (!this.noConflict && isStatic) {
        writeProperty(property, owner, "$");
      }
    } else {
      System.out.println(owner);
    }
    return null;
  }

  private void writeProperty(Property property, String owner, String jQueryGlobalObjectName) {


    this.writeStart();
    this.writeCommentLine(property.getDescription());
    String returnType = property.getReturnType();
    if (!StringUtils.isEmpty(returnType)) {
      this.writeTag("type", '{' + fixPropertyTypes(returnType) + '}');
    }
    this.writeEnd();

    writeIdentifier(owner, jQueryGlobalObjectName);
    this.write(property.getName());
    this.write(" = ");

    String defaultValue = DEFAULT_VALUES.get(returnType);
    if (defaultValue == null) {
      throw new RuntimeException("no known default type for: " + returnType);
    } else {
      this.write(defaultValue);
    }

    this.write(";");
    this.writeNewLine();
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
  
  static final class ClassSideVisitor<P> implements MemberVisitor<P> {
      
    private final MemberVisitor<P>  delegate;

    ClassSideVisitor(MemberVisitor<P> delegate) {
      this.delegate = delegate;
    }

    @Override
    public P visitFuntion(Function function) {
      if (isJQueryStatic(function.getOwner())) {
        return this.delegate.visitFuntion(function); 
      } else {
        return null;
      }
    }

    @Override
    public P visitProperty(Property property) {
      if (isJQueryStatic(property.getOwner())) {
        return this.delegate.visitProperty(property);
      } else {
        return null;
      }
    }
      
  }
  
  static final class InstanceSideVisitor<P> implements MemberVisitor<P> {
      
      private final MemberVisitor<P>  delegate;
      
      InstanceSideVisitor(MemberVisitor<P> delegate) {
        this.delegate = delegate;
      }
      
      @Override
      public P visitFuntion(Function function) {
        if (isJQueryObject(function.getOwner())) {
          return this.delegate.visitFuntion(function);
        } else {
            return null;
        }
      }
      
      @Override
      public P visitProperty(Property property) {
        if (isJQueryObject(property.getOwner())) {
           return this.delegate.visitProperty(property);
         } else {
           return null;
         }
      }
      
  }

}
