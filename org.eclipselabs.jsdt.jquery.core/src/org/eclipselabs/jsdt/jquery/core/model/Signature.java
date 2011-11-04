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
  
  private final String deprecated;
  
  Signature(String added, String deprecated) {
    this.added = SimpleVersion.fromString(added);
    this.deprecated = deprecated;
  }
  
  public Version getAdded() {
    return this.added;
  }
  
  public boolean isDeprecated() {
    return this.deprecated != null;
  }
  
  public String getDeprecated() {
    return this.deprecated;
  }
  
  boolean isIncludedIn(Version version) {
    return this.added == null || this.added.compareTo(version) <= 0;
  }

}
