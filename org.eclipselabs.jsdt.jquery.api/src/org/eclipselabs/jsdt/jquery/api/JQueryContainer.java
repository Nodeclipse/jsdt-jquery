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

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;

public final class JQueryContainer {

  private static final char SEPARATOR = '_';

  //REVIEW
  //these two constants contain a typo
  //fixing it would break every existing project
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

  public static boolean isQueryConflict(IPath path) {
    return isContainer(path, CONFLICT_CONTAINER_PREFIX);
  }

  public static boolean isQueryNoConflict(IPath path) {
    return isContainer(path, NO_CONFLICT_CONTAINER_PREFIX);
  }

  private static boolean isContainer(IPath path, String containerId) {
    if (path == null) {
      return false;
    }
    if (path.segmentCount() != 1) {
      return false;
    }
    String segment = path.segment(0);
    return segment.startsWith(containerId);
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
