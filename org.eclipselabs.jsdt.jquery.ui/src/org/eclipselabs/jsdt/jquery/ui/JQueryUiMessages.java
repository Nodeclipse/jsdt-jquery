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
package org.eclipselabs.jsdt.jquery.ui;

import org.eclipse.osgi.util.NLS;

public class JQueryUiMessages extends NLS {

  private static final String BUNDLE_NAME = "org.eclipselabs.jsdt.jquery.ui.messages"; //$NON-NLS-1$
  
  public static String jQueryLibraryWizardPage_title;

  public static String jQueryLibraryWizardPage_jQueryLibraryAdded;

  public static String jQueryLibraryWizardPage_BrowserSupport;

  public static String jQueryLibraryWizardPage_noConflict;

  public static String jQueryLibraryWizardPage_version;

  static {
    // initialize resource bundle
    NLS.initializeMessages(BUNDLE_NAME, JQueryUiMessages.class);
  }

  private JQueryUiMessages() {
  }
}
