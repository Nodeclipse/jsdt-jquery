package org.eclipselabs.jsdt.jquery.api.infer;

import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.IInferenceFile;
import org.eclipse.wst.jsdt.core.infer.InferrenceProvider;
import org.eclipse.wst.jsdt.core.infer.RefactoringSupport;
import org.eclipse.wst.jsdt.core.infer.ResolutionConfiguration;

public class JQueryEventInferenceProvider implements InferrenceProvider {

  private static final String ID = JQueryEventInferenceProvider.class.getName();
  
  private final JQueryCallbackMethods callbackMethods;
  
  public JQueryEventInferenceProvider() {
    this.callbackMethods = new JQueryCallbackMethodsGenerator().createCallbackMethods();
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public IInferEngine getInferEngine() {
    return new JQueryEventInferEngine(this.callbackMethods);
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public int applysTo(IInferenceFile scriptFile) {
    // TODO fix
    return InferrenceProvider.MAYBE_THIS;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public String getID() {
    return ID;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public ResolutionConfiguration getResolutionConfiguration() {
    return new ResolutionConfiguration();
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public RefactoringSupport getRefactoringSupport() {
    return null;
  }

}
