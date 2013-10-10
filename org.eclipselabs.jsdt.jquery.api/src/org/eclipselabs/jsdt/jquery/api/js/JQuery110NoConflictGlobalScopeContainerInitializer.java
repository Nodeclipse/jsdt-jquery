package org.eclipselabs.jsdt.jquery.api.js;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;

public class JQuery110NoConflictGlobalScopeContainerInitializer extends
JQueryGlobalScopeContainerInitializer {

  public JQuery110NoConflictGlobalScopeContainerInitializer() {
    super(SimpleVersion.fromString("1.10"), true);
  }

}
