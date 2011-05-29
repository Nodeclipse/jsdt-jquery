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

import org.eclipse.core.runtime.Assert;


public class SimpleVersion implements Version {
  
  private final int minor;
  
  SimpleVersion(int minor) {
    this.minor = minor;
  }

  private int getMinor() {
    return this.minor;
  }
  
  private int getMajor() {
    return 1;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public int compareTo(Version other) {
    if (other instanceof SimpleVersion) {
      return this.minor - ((SimpleVersion) other).minor;
    } else {
      throw new IllegalArgumentException();
    }
  }
  
  @Override
  public String toString() {
    return this.getMajor() + "." + this.getMinor();
  }
  
  public static Version fromString(String s) {
    Assert.isNotNull(s);
    Assert.isTrue(s.charAt(0) == '1');
    Assert.isTrue(s.length() >= 3);
    Assert.isTrue(s.charAt(1) == '.');
    return JQueryApiPlugin.ALL_VERSIONS.get(JQueryApiPlugin.MAX_MINOR + '0' - s.charAt(2));
  }

}
