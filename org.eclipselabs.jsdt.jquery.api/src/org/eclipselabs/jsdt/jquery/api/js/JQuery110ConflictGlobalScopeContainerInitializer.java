package org.eclipselabs.jsdt.jquery.api.js;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;

public class JQuery110ConflictGlobalScopeContainerInitializer extends
    JQueryGlobalScopeContainerInitializer {

  public JQuery110ConflictGlobalScopeContainerInitializer() {
    super(SimpleVersion.fromString("1.10"), false);
  }

}
