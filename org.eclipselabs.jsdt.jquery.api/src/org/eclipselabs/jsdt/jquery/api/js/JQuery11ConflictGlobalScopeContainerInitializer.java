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

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;


public final class JQuery11ConflictGlobalScopeContainerInitializer extends
    JQueryGlobalScopeContainerInitializer {

  public JQuery11ConflictGlobalScopeContainerInitializer() {
    super(SimpleVersion.fromString("1.1"), false);
  }
  
  
}
