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

import org.eclipse.core.runtime.AssertionFailedException;


public class SimpleVersion implements Version {

  private final int major;
  private final int minor;

  SimpleVersion(int major, int minor) {
    this.major = major;
    this.minor = minor;
  }

  private int getMajor() {
    return this.major;
  }

  private int getMinor() {
    return this.minor;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public int compareTo(Version other) {
    if (other instanceof SimpleVersion) {
      SimpleVersion otherVersion = (SimpleVersion) other;
      int majorDiff = this.major - otherVersion.major;
      if (majorDiff != 0) {
        return majorDiff;
      } else {
        return this.minor - otherVersion.minor;
      }
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
        && (s.charAt(0) == '1' || s.charAt(0) == '2')
        && s.charAt(1) == '.';
  }

  public static Version fromString(String s) {
    String versionString = s;
    if (versionString.length() > 3) {
      // 1.3.2 -> 1.3
      versionString = versionString.substring(0, 3);
    }
    Version version = JQueryApiPlugin.ALL_VERSIONS_MAP.get(versionString);
    if (version == null) {
      throw new AssertionFailedException("not version found for: " + s);
    }
    return version;
  }

}
