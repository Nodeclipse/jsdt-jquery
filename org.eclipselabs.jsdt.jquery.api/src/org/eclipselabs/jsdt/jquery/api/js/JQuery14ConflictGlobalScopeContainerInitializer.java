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
package org.eclipselabs.jsdt.jquery.api.js;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;


public final class JQuery14ConflictGlobalScopeContainerInitializer extends
JQueryGlobalScopeContainerInitializer {

  public JQuery14ConflictGlobalScopeContainerInitializer() {
    super(SimpleVersion.fromString("1.4"), false);
  }


}
