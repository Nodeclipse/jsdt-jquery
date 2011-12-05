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
package org.eclipselabs.jsdt.jquery.api;

import org.eclipse.osgi.util.NLS;

public class JQueryApiMessages extends NLS {

  private static final String BUNDLE_NAME = "org.eclipselabs.jsdt.jquery.api.messages"; //$NON-NLS-1$
  public static String container_genericDescription;
  public static String container_conflictDescription;
  public static String container_noConflictDescription;
  static {
    // initialize resource bundle
    NLS.initializeMessages(BUNDLE_NAME, JQueryApiMessages.class);
  }

  private JQueryApiMessages() {
  }

}
