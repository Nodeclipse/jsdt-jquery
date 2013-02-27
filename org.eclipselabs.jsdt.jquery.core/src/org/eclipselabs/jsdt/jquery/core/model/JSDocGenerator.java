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

import java.io.IOException;
import java.io.Writer;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;
import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;


public class JSDocGenerator extends WriterSupport {

  private static final String JQUERY_OBJECT_PROTOTYPE = JQueryMember.JQUERY_OBJECT + ".prototype";

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

  final class JQueryEventWriter implements MemberVisitor<Void> {

    @Override
    public Void visitFuntion(Function function) {
      JSDocGenerator.this.visitJQueryEventFunction(function);
      return null;
    }

    @Override
    public Void visitProperty(Property property) {
      JSDocGenerator.this.visitJQueryEventeProperty(property);
      return null;
    }

  }

  final class JQueryInstanceSideWriter implements MemberVisitor<Void> {

    @Override
    public Void visitFuntion(Function function) {
      JSDocGenerator.this.visitJQueryInstanceSideFunction(function);
      return null;
    }

    @Override
    public Void visitProperty(Property property) {
      JSDocGenerator.this.visitJQueryInstanceSideProperty(property);
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
      JSDocGenerator.this.visitJQueryClassSideFunction(function, this.jQueryGlobal);
      return null;
    }

    @Override
    public Void visitProperty(Property property) {
      JSDocGenerator.this.visitJQueryClassSideProperty(property, this.jQueryGlobal);
      return null;
    }

  }

  void visitJQueryEventFunction(Function function) {
    this.writeFunction(function, JQUERY_EVENT_PROTOTYPE);
  }

  void visitJQueryEventeProperty(Property property) {
    this.writeProperty(property, JQUERY_EVENT_PROTOTYPE);
  }

  void visitJQueryInstanceSideFunction(Function function) {
    this.writeFunction(function, JQUERY_OBJECT_PROTOTYPE);
  }

  void visitJQueryInstanceSideProperty(Property property) {
    this.writeProperty(property, JQUERY_OBJECT_PROTOTYPE);
  }

  void visitJQueryClassSideFunction(Function function, String jQueryGlobal) {
    this.writeFunction(function, jQueryGlobal);
  }

  void visitJQueryClassSideProperty(Property property, String jQueryGlobal) {
    this.writeProperty(property, jQueryGlobal);
  }

  private void writeFunction(Function function, String owner) {
    if (!function.isPresentIn(this.maximumVersion)) {
      return;
    }
    
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
      if (!isEmpty(returnType)) {
        this.writeTag("returns", '{' + this.fixReturnTypes(returnType) + '}');
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
      this.writeIdentifier(owner);
      this.write(function.getName());
      this.write(" = function(");
      if (!signatures.isEmpty()) {
        FunctionSignature signature = signatures.get(0);
        boolean first = true;
        for (FunctionArgument argument : signature.getArguments()) {
          if (!first) {
            this.write(", ");
          }
          first = false;
          String argumentName = extractArgumentName(argument);
          this.write(argumentName);
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
      this.writeArgument(argument, null);
    }
  }

  private void writeArgument(JQueryArgument argument, String prefix) {
    StringBuilder buffer = new StringBuilder();

    //type
    Set<String> types = argument.getTypes();
    if (!types.isEmpty()) {
      buffer.append('{');
      //FIXME hax for JSDT bug, can't have multiple types
      buffer.append(types.iterator().next());
      buffer.append('}');
      buffer.append(' ');
    }

    // name, optional, default
    boolean optional = argument.isOptional();
    if (optional) {
      buffer.append('[');
    }

    if (!isEmpty(prefix)) {
      buffer.append(prefix);
    }
    String argumentName = extractArgumentName(argument);
    buffer.append(argumentName);
    if (optional) {
      String defaultValue = argument.getDefaultValue();
      if (!isEmpty(defaultValue)) {
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

    if (types.contains("Map")) {
      Collection<? extends JQueryArgument> options = argument.getOptions();
      if (!options.isEmpty()) {
        String subPrefix = argumentName + '.';
        for (JQueryArgument option : options) {
          this.writeArgument(option, subPrefix);
        }
      }
    }
  }


  private static String extractArgumentName(JQueryArgument argument) {

    String nameWithArguments = argument.getName();
    if (!argument.getTypes().contains("Function")) {
      return nameWithArguments;
    }
    int parenIndex = nameWithArguments.indexOf('(');
    if (parenIndex == -1) {
      return safeFunctionName(nameWithArguments);
    } else {
      String substring = nameWithArguments.substring(0, parenIndex);
      return safeFunctionName(substring);
    }
  }

  private static String safeFunctionName(String functionName) {
    //HAX for function()
    if ("function".equals(functionName)) {
      return "func";
    } else {
      return functionName;
    }
  }

  private String fixPropertyTypes(String type) {
    return this.fixMultipleTypes(type);
  }

  private String fixReturnTypes(String type) {
    if ("jQuery".equals(type)) {
      return JQueryMember.JQUERY_OBJECT;
    } else {
      return this.fixMultipleTypes(type);
    }
  }

  private String fixMultipleTypes(String type) {
    //buffer.append(StringUtils.replaceChars(type, ',', '|')); // different types may be allowed eg. String,Number
    int commaIndex = type.indexOf(',');
    if (commaIndex == -1) {
      return type;
    } else {
      String[] types = type.split(",");
      for (int i = 0; i < types.length; ++i) {
        types[i] = types[i].trim();
      }
      return join(types, '|');
    }
  }

  private void writeProperty(Property property, String owner) {
    if (!property.isPresentIn(this.maximumVersion)) {
      return;
    }

    this.writeStart();
    this.writeCommentLine(property.getDescription());

    this.writeDeprecated(property);

    String returnType = property.getReturnType();
    if (!isEmpty(returnType)) {
      this.writeTag("type", '{' + this.fixPropertyTypes(returnType) + '}');
    }
    this.writeEnd();

    this.writeIdentifier(owner);
    this.write(property.getName());
    this.write(" = ");

    String defaultValue = DEFAULT_VALUES.get(returnType);
    if (defaultValue == null) {
      if (property.getName().equals("data") && property.getOwner().endsWith("event")) {
        defaultValue = DEFAULT_VALUES.get("Object");
      } else {
        throw new RuntimeException("no known default type for: " + returnType);
      }
    }
    this.write(defaultValue);

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
      this.writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  private void writeCommentLine(String line) {
    try {
      this.writeStartLine();
      StringTokenizer tokenizer = new StringTokenizer(line, "\n");
      while (tokenizer.hasMoreTokens()) {
        this.output.write(tokenizer.nextToken());
      }
      this.writeNewLine();
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

  private void writeTag(String tag, String content) {
    try {
      this.writeStartLine();
      this.output.write('@');
      this.output.write(tag);
      this.output.write(' ');
      this.output.write(content);
      this.writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }
  
  private static boolean isEmpty(String s) {
    return s == null || s.isEmpty(); 
  }

  private static String join(String[] strings, char delimeter) {
    if (strings.length == 0) {
      return "";
    }
    int size = strings.length - 1;
    for (String string : strings) {
      size += string.length();
    }
    StringBuilder buffer = new StringBuilder(size);
    boolean first = true;
    for (String string : strings) {
      if (!first) {
        buffer.append(delimeter);
      }
      buffer.append(string);
      first = false;
    }
    return buffer.toString();
  }

  private void writeEnd() {
    try {
      this.output.write(" */");
      this.writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

}
