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
package org.eclipselabs.jsdt.jquery.api.js;


import org.eclipse.core.runtime.IPath;
import org.eclipse.osgi.util.NLS;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IJsGlobalScopeContainerInitializer;
import org.eclipse.wst.jsdt.core.JsGlobalScopeContainerInitializer;
import org.eclipse.wst.jsdt.core.compiler.libraries.LibraryLocation;
import org.eclipse.wst.jsdt.core.compiler.libraries.SystemLibraryLocation;
import org.eclipselabs.jsdt.jquery.api.JQueryApiMessages;
import org.eclipselabs.jsdt.jquery.api.JQueryApiPlugin;
import org.eclipselabs.jsdt.jquery.api.Version;


abstract class JQueryGlobalScopeContainerInitializer extends JsGlobalScopeContainerInitializer
implements IJsGlobalScopeContainerInitializer {

  private final Version version;
  private final boolean noConflict;
  private final LibraryLocation libraryLocation;
  private final char[][] libraryFileNames;

  JQueryGlobalScopeContainerInitializer(Version version, boolean noConflict) {
    this.version = version;
    this.noConflict = noConflict;
    this.libraryFileNames = new char[][]{getLibraryFileName(version, noConflict).toCharArray()};
    this.libraryLocation = new JQueryLibraryLocation();
  }

  private static String getLibraryFileName(Version version, boolean noConflict) {
    if (noConflict) {
      return "jquery-doc-noconflict-" + version + ".js";
    } else {
      return "jquery-doc-" + version + ".js";
    }
  }

  @Override
  public String getDescription() {
    if (this.noConflict) {
      return NLS.bind(JQueryApiMessages.container_noConflictDescription, this.version.toString());
    } else {
      return NLS.bind(JQueryApiMessages.container_conflictDescription, this.version.toString());
    }
  }

  @Override
  public LibraryLocation getLibraryLocation() {
    return this.libraryLocation;
  }

  @Override
  public boolean allowAttachJsDoc() {
    return false;
  }

  @Override
  public boolean canUpdateJsGlobalScopeContainer(IPath containerPath, IJavaScriptProject project) {
    return true;
  }


  final class JQueryLibraryLocation extends SystemLibraryLocation {


    /**
     * {@inheritDoc}
     */
    @Override
    public char[][] getLibraryFileNames() {
      // this method is called from the super constructor!
      // that's why we can't make this an instance variable in this class
      return JQueryGlobalScopeContainerInitializer.this.libraryFileNames;
    }


    /**
     * {@inheritDoc}
     */
    @Override
    protected String getPluginId() {
      return JQueryApiPlugin.getDefault().getBundle().getSymbolicName();
    }

  }



}
