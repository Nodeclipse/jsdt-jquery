package org.eclipselabs.jsdt.jquery.api;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;

/*
 * @(#) $CVSHeader:  $
 *
 * Copyright (C) 2011 by Netcetera AG.
 * All rights reserved.
 *
 * The copyright to the computer program(s) herein is the property of
 * Netcetera AG, Switzerland.  The program(s) may be used and/or copied
 * only with the written permission of Netcetera AG or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the program(s) have been supplied.
 *
 * @(#) $Id: codetemplates.xml,v 1.5 2004/06/29 12:49:49 hagger Exp $
 */

public final class JQueryContainer {
  
  private static final char SEPARATOR = '_';

  private static final String NO_CONFLICT_CONTAINER_PREFIX = "org.eclipselabs.jsdt.jquery.core.NoCoflictLibrary";
  
  private static final String CONFLICT_CONTAINER_PREFIX = "org.eclipselabs.jsdt.jquery.core.CoflictLibrary";
  
  public static boolean isQueryContainer(String containerId) {
    return isContainer(containerId, CONFLICT_CONTAINER_PREFIX)
        || isContainer(containerId, NO_CONFLICT_CONTAINER_PREFIX);
  }
  
  private static boolean isContainer(String containerId, String expectedContainerId) {
    return containerId.startsWith(expectedContainerId)
        && containerId.length() > expectedContainerId.length()
        && containerId.charAt(expectedContainerId.length()) == SEPARATOR;
  }
  
  public static Version extractVersion(IPath path) {
    String container = path.segment(0);
    int separatorIndex = container.indexOf(SEPARATOR);
    String versionString = container.substring(separatorIndex + 1); // skip separator
    return SimpleVersion.fromString(versionString);
  }
  
  public static boolean extractNoConflict(IPath path) {
    String container = path.segment(0);
    int separatorIndex = container.indexOf(SEPARATOR);
    return NO_CONFLICT_CONTAINER_PREFIX.equals(container.substring(0, separatorIndex));
  }
  
  public static IPath createIncludePath(Version version, boolean noConflict) {
    return new Path(createContainerId(version, noConflict));
  }
  
  private static String createContainerId(Version version, boolean noConflict) {
    if (noConflict) {
      return NO_CONFLICT_CONTAINER_PREFIX + SEPARATOR + version.toString();
    } else {
      return CONFLICT_CONTAINER_PREFIX + SEPARATOR + version.toString();
    }
  }
  
}
