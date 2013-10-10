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

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

public final class JQueryApiPlugin extends Plugin {

  static final int MAX_MINOR_1 = 10;
  
  static final int MAX_MINOR_2 = 0;

  static final List<Version> ALL_VERSIONS;
  
  static final Map<String, Version> ALL_VERSIONS_MAP;

  public static final Version MAX_VERSION;

  static {
    List<Version> versions = new ArrayList<Version>(MAX_MINOR_1 + 1 + MAX_MINOR_2 + 1);
    for (int i = MAX_MINOR_2; i >= 0; --i) {
      versions.add(new SimpleVersion(2, i));
    }
    for (int i = MAX_MINOR_1; i >= 0; --i) {
      versions.add(new SimpleVersion(1, i));
    }
    Map<String, Version> map = new HashMap<String, Version>(versions.size());
    for (Version version : versions) {
      map.put(version.toString(), version);
    }
    ALL_VERSIONS_MAP = Collections.unmodifiableMap(map);
    ALL_VERSIONS = Collections.unmodifiableList(versions);
    MAX_VERSION = ALL_VERSIONS.get(0);
  }

  private static volatile JQueryApiPlugin instance;


  /**
   * {@inheritDoc}
   */
  @Override
  public void start(BundleContext context) throws Exception {
    super.start(context);
    instance = this;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public void stop(BundleContext context) throws Exception {
    instance = null;
    super.stop(context);
  }

  public static JQueryApiPlugin getDefault() {
    return instance;
  }

  private static final JQuerySupport SUPPORT = new SimpleJQuerySupport();

  public static JQuerySupport getJQuerySupport() {
    return SUPPORT;
  }


}
