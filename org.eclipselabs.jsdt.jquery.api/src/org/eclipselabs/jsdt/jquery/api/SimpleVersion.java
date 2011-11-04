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
  
  public static boolean isVersionString(String s) {
     return s != null
       && s.length() >= 3
       && s.charAt(0) == '1'
       && s.charAt(1) == '.';
  }
  
  public static Version fromString(String s) {
    Assert.isTrue(isVersionString(s));
    return JQueryApiPlugin.ALL_VERSIONS.get(JQueryApiPlugin.MAX_MINOR + '0' - s.charAt(2));
  }

}
