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
 */
package org.eclipselabs.jsdt.jquery.core.model;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipselabs.jsdt.jquery.api.JQueryApiPlugin;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;
import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;

public class CallbackMethodGenerator extends WriterSupport {

  public void write(Collection<JQueryMember> members, Writer output) throws IOException {
    try {
      this.writeProtected(members, output);
    } finally {
      output.close();
    }
  }

  private void writeProtected(Collection<JQueryMember> members, Writer output) {
    this.output = output;

    this.writeHeader();
    Predicate instanceFunction = new And(Filters.FUNCTION, Filters.INSTANCE_SIDE);
    this.visitAll(members, instanceFunction, new CallbackWirter());
    this.writeTrailer();
  }

  void writeMember(Function function) {

    List<FunctionSignature> signatures = function.getSignaturesInVersion(JQueryApiPlugin.MAX_VERSION);
    for (FunctionSignature signature : signatures) {

      List<Integer> callbackIndices = null;
      List<FunctionArgument> functionArguments = signature.getArguments();
      int argumentCount = functionArguments.size();
      for (int i = 0; i < argumentCount; ++i) {
        FunctionArgument argument = functionArguments.get(i);
        if (this.isEventCallback(argument)) {
          if (callbackIndices == null) {
            callbackIndices = new ArrayList<Integer>(3);
          }
          callbackIndices.add(i);
        }
      }
      if (callbackIndices != null) {
        for (Integer callbackIndex : callbackIndices) {
          this.writeLine("    callbacks.addCallbackMethod(\"" + function.getName() + "\", " + argumentCount + ", " + callbackIndex + ");");
        }
      }
    }

  }

  private boolean isEventCallback(FunctionArgument argument) {
    return "Function".equals(argument.getType())
        && "handler(eventObject)".equals(argument.getName());
  }

  static final class CallbackArgument {
    private final String selector;
    private final int argumentAcount;
    private final int eventIndex;

    CallbackArgument(String selector, int argumentAcount, int eventIndex) {
      this.selector = selector;
      this.argumentAcount = argumentAcount;
      this.eventIndex = eventIndex;
    }


  }

  final class CallbackWirter implements MemberVisitor<Void> {

    /**
     * {@inheritDoc}
     */
    @Override
    public Void visitFuntion(Function function) {
      CallbackMethodGenerator.this.writeMember(function);
      return null;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Void visitProperty(Property property) {
      throw new AssertionError("should never be called");
    }

  }


  private void writeHeader() {
    // TODO read file instead of hard code
    this.writeLine("/*"); 
    this.writeLine(" * *****************************************************************************"); 
    this.writeLine(" * Copyright (c) 2011 Philippe Marschall and others.");
    this.writeLine(" * All rights reserved. This program and the accompanying materials"); 
    this.writeLine(" * are made available under the terms of the Eclipse Public License v1.0"); 
    this.writeLine(" * which accompanies this distribution, and is available at");
    this.writeLine(" * http://www.eclipse.org/legal/epl-v10.html");
    this.writeLine(" *");
    this.writeLine(" * Contributors:"); 
    this.writeLine(" *     Philippe Marschall"); 
    this.writeLine(" * *****************************************************************************"); 
    this.writeLine(" */");
    this.writeLine("package org.eclipselabs.jsdt.jquery.api.infer;");
    this.writeNewLine();
    this.writeLine("import javax.annotation.Generated;");
    this.writeNewLine();
    this.writeLine("@Generated(\"" + this.getClass().getName() + "\")");
    this.writeLine("public class JQueryCallbackMethodsGenerator {");
    this.writeNewLine();
    this.writeLine(" public JQueryCallbackMethods createCallbackMethods() {");
    this.writeLine("   JQueryCallbackMethods callbacks = new JQueryCallbackMethods();");
  }


  private void writeTrailer() {
    this.writeLine("   return callbacks;");
    this.writeLine(" }");
    this.writeNewLine();
    this.writeLine("}");
  }

}
