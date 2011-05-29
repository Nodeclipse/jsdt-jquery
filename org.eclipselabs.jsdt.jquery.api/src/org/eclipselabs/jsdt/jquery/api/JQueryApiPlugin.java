package org.eclipselabs.jsdt.jquery.api;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

public final class JQueryApiPlugin extends Plugin {
  
  static final int MAX_MINOR = 6;
  
  static final List<Version> ALL_VERSIONS;
  
  public static final Version MAX_VERSION;
  
  static {
    List<Version> versions = new ArrayList<Version>(MAX_MINOR + 1);
    for (int i = MAX_MINOR; i >= 0; --i) {
      versions.add(new SimpleVersion(i));
    }
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
