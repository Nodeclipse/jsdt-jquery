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
