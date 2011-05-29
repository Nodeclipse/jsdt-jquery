package org.eclipselabs.jsdt.jquery.core.model;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;
import org.eclipselabs.jsdt.jquery.api.Version;


public class Signature {
  
  private final Version added;
  
  Signature(String added) {
    this.added = SimpleVersion.fromString(added);
  }
  
  public Version getAdded() {
    return this.added;
  }
  
  boolean isIncludedIn(Version version) {
    return this.added == null || this.added.compareTo(version) <= 0;
  }

}
