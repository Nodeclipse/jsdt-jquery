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
package org.eclipselabs.jsdt.jquery.api.infer;

import org.eclipse.wst.jsdt.core.ast.ASTVisitor;
import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.InferOptions;
import org.eclipse.wst.jsdt.internal.compiler.ast.CompilationUnitDeclaration;


public class JQueryEventInferEngine implements IInferEngine {

  private final JQueryCallbackMethods callbackMethods;
  private final boolean noConflict;
  private CompilationUnitDeclaration compilationUnit;
  private InferOptions options;

  public JQueryEventInferEngine(JQueryCallbackMethods callbackMethods, boolean noConflict) {
    this.callbackMethods = callbackMethods;
    this.noConflict = noConflict;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public void doInfer() {
    ASTVisitor inferer = new JQueryEventInferer(this.callbackMethods, noConflict);
    this.compilationUnit.traverse(inferer);

  }

  /**
   * {@inheritDoc}
   */
  @Override
  public void initialize() {
    // nothing yet
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public void initializeOptions(InferOptions inferOptions) {
    this.options = inferOptions;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public void setCompilationUnit(CompilationUnitDeclaration parsedUnit) {
    this.compilationUnit = parsedUnit;

  }

}
