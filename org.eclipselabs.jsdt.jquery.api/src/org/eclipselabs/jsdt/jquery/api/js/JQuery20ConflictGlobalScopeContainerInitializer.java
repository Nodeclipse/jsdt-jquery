package org.eclipselabs.jsdt.jquery.api.js;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;

public class JQuery20ConflictGlobalScopeContainerInitializer extends
    JQueryGlobalScopeContainerInitializer {

  public JQuery20ConflictGlobalScopeContainerInitializer() {
    super(SimpleVersion.fromString("2.0"), false);
  }

}
