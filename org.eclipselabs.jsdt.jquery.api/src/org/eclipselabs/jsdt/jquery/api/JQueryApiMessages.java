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
