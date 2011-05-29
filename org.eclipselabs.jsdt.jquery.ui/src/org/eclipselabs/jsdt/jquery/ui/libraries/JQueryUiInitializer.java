package org.eclipselabs.jsdt.jquery.ui.libraries;

import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.internal.ui.IJsGlobalScopeContainerInitializerExtension;


/**
 * Sets the icon of the jQuery library in the JavaScript include path settings
 * of the project.
 */
public class JQueryUiInitializer implements IJsGlobalScopeContainerInitializerExtension {

  @Override
  public ImageDescriptor getImage(IPath containerPath, String element, IJavaScriptProject project) {
    return ImageDescriptor.createFromFile(this.getClass(), "favicon.ico");
  }

}
