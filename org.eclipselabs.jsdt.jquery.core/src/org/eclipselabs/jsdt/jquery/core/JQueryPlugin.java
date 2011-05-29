package org.eclipselabs.jsdt.jquery.core;
import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;


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

public class JQueryPlugin extends Plugin {
  
  private static volatile JQueryPlugin instance;
  
  /**
   * {@inheritDoc}
   */
  @Override
  public void start(BundleContext context) throws Exception {
    super.start(context);
    instance = this;
  }
  
  @Override
  public void stop(BundleContext context) throws Exception {
    instance = null;
    super.stop(context);
  }
  
  public static JQueryPlugin getDefault() {
    return instance;
  }

}
