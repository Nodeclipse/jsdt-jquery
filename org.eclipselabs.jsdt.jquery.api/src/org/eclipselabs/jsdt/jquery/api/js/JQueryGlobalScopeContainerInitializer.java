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
    if (noConflict) {
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
    public char[][] getLibraryFileNames() {
      // this method is called from the super constructor!
      // that's why we can't make this an instance variable in this class 
      return libraryFileNames;
    }


    /**
     * {@inheritDoc}
     */
    protected String getPluginId() {
      return JQueryApiPlugin.getDefault().getBundle().getSymbolicName();
    }
    
  }
  
  

}
