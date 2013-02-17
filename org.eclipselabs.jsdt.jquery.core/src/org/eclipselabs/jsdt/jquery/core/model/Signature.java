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
package org.eclipselabs.jsdt.jquery.core.model;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;
import org.eclipselabs.jsdt.jquery.api.Version;


public class Signature {

  private final Version added;
  
  private final Version removed;

  private final String deprecated;

  Signature(String added, String removed, String deprecated) {
    this.added = SimpleVersion.fromString(added);
    this.removed = toVersionSafe(removed);
    this.deprecated = deprecated;
  }
  
  private static Version toVersionSafe(String s) {
    if (s == null) {
      return null;
    } else {
      return SimpleVersion.fromString(s);
    }
  }

  public Version getAdded() {
    return this.added;
  }

  public boolean isDeprecatedIn(Version version) {
    if (this.deprecated == null) {
      return false;
    } else if (SimpleVersion.isVersionString(this.deprecated)) {
      return version.compareTo(SimpleVersion.fromString(this.deprecated)) >= 0;
    } else {
      return true;
    }
  }

  public String getDeprecated() {
    return this.deprecated;
  }

  boolean isIncludedIn(Version version) {
    boolean isAddes = this.added == null || this.added.compareTo(version) <= 0;
    boolean isRemoved = this.removed != null && this.removed.compareTo(version) <= 0;
    return isAddes && !isRemoved;
  }

}
