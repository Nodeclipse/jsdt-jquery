/*
 * @(#) $CVSHeader:  $
 *
 * Copyright (C) 2011 by Netcetera AG.
 * All rights reserved.
 *
 * The copyright to the computer program(s) herein is the property of
 * Netcetera AG, Switzerland.  The program(s) may be used and/or copied
 * only with the written permission of Netcetera AG or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the program(s) have been supplied.
 *
 * @(#) $Id: codetemplates.xml,v 1.5 2004/06/29 12:49:49 hagger Exp $
 */
package org.eclipselabs.jsdt.jquery.api.infer;

import org.eclipse.wst.jsdt.core.ast.ASTVisitor;
import org.eclipse.wst.jsdt.core.ast.IASTNode;
import org.eclipse.wst.jsdt.core.ast.IArgument;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.IFunctionExpression;
import org.eclipse.wst.jsdt.core.infer.InferredType;


public class JQueryEventInferer extends ASTVisitor {

  private static final InferredType jQueryEvent;
  
  private final JQueryCallbackMethods callbackMethods;

  static {
    char[] selector = "jQueryEvent".toCharArray();
    jQueryEvent = new InferredType(selector);
  }

  public JQueryEventInferer(JQueryCallbackMethods callbackMethods) {
    this.callbackMethods = callbackMethods;
  }

  @Override
  public boolean visit(IFunctionCall functionCall) {

    IExpression receiver = functionCall.getReceiver();
    if (this.isJQueryObject(receiver)) {
      String selector = new String(functionCall.getSelector());
      if (this.isJQueryEventSelector(selector)) {
        IExpression[] functionCallArguments = functionCall.getArguments();
        if (functionCallArguments != null) {
          for (int i = 0; i < functionCallArguments.length; ++i) {
            IExpression expression = functionCallArguments[i];
            if (expression.getASTType() == IASTNode.FUNCTION_EXPRESSION && this.isEventCallback(selector, i)) {
              IFunctionExpression functionExpression = (IFunctionExpression) expression;
              IArgument[] functionExpressionArguments = functionExpression.getMethodDeclaration().getArguments();
              if (functionExpressionArguments != null) {
                for (IArgument argument : functionExpressionArguments) {
                  argument.setInferredType(jQueryEvent);
                }
              }
            }
          }
        }
      }
    }

    return super.visit(functionCall);
  }

  private boolean isEventCallback(String selector, int i) {
    return this.callbackMethods.isEventCallback(selector, i);
  }

  private boolean isJQueryObject(IExpression expression) {
    //TODO check inferred type
    IExpression current = expression;
    while (current != null && current.getASTType() == IASTNode.FUNCTION_CALL) {
      IFunctionCall call = (IFunctionCall) current;
      if (this.isJQuery(call.getSelector())) {
        return true;
      } else {
        current = call.getReceiver();
      }
    }
    return false;
  }

  private boolean isJQueryEventSelector(String selector) {
    return this.callbackMethods.isEventSelector(selector);
  }

  private boolean isJQuery(char[] token) {
    if (token.length == 1) {
      return token[0] == '$';
    } else if (token.length == 6) {
      return token[0] == 'j'
          && token[1] == 'Q'
          && token[2] == 'u'
          && token[3] == 'e'
          && token[4] == 'r'
          && token[5] == 'y';
    } else {
      return false;
    }
  }

}
