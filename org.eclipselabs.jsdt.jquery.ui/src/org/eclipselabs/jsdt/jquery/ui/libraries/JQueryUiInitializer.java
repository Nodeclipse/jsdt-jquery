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
