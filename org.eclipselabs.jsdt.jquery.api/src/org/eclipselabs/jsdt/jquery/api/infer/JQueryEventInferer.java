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
import org.eclipse.wst.jsdt.core.ast.IArgument;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.IFunctionDeclaration;
import org.eclipse.wst.jsdt.core.ast.ISingleNameReference;


public class JQueryEventInferer extends ASTVisitor {
  
  @Override
  public boolean visit(IFunctionCall functionCall) {
    
    IExpression receiver = functionCall.getReceiver();
    if (receiver instanceof ISingleNameReference) {
      ISingleNameReference reference = (ISingleNameReference) receiver;
      boolean jQuery = this.isJQuery(reference.getToken());
      if (jQuery) {
        char[] selector = functionCall.getSelector();
      }
    }
    
    return super.visit(functionCall);
  }
  
  private boolean isJQueryObject(IExpression expression) {
    //TODO check inferred type
    IExpression current = expression;
    while (current instanceof IFunctionCall) {
      IFunctionCall call = (IFunctionCall) current;
      if (isJQuery(call.getSelector())) {
        return true;
      } else {
        current = call.getReceiver();
      }
    }
    return false;
  }
  
  private boolean isJQueryEventSelector(char[] selector) {
    return new String(selector).equals("submit");
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
  
  @Override
  public boolean visit(IFunctionDeclaration functionDeclaration) {
    
    IArgument[] arguments = functionDeclaration.getArguments();
    
    return super.visit(functionDeclaration);
  }
  
  static class IsJQueryVisitor extends ASTVisitor {
    
    private boolean isQuery;
    
    IsJQueryVisitor() {
      this.isQuery = false;
    }
    
    @Override
    public boolean visit(ISingleNameReference singleNameReference) {
      // TODO Auto-generated method stub
      return super.visit(singleNameReference);
    }
    
  }

}
