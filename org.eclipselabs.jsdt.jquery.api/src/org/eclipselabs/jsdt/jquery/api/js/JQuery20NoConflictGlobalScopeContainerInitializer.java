package org.eclipselabs.jsdt.jquery.api.js;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;

public class JQuery20NoConflictGlobalScopeContainerInitializer  extends
JQueryGlobalScopeContainerInitializer {

  public JQuery20NoConflictGlobalScopeContainerInitializer() {
    super(SimpleVersion.fromString("2.0"), true);
  }

}
