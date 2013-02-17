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
package org.eclipselabs.jsdt.jquery.core.model;

import java.util.Collection;
import java.util.Set;

import org.eclipselabs.jsdt.jquery.api.SimpleVersion;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.core.api.DocumentationEntryVisitor;
import org.eclipselabs.jsdt.jquery.core.api.Documented;



abstract class DocumentationEntry implements Documented {

  private final String description;
  private final String longDescription;
  private final Collection<Example> examples;
  private final Set<String> categories;
  private final String name;
  private final String deprecated;
  private final String removed;

  DocumentationEntry(String name,
      String description,
      String longDescription,
      Collection<Example> examples,
      Set<String> categories,
      String deprecated,
      String removed) {
    this.name = name;
    this.description = description;
    this.longDescription = longDescription;
    this.examples = examples;
    this.categories = categories;
    this.deprecated = deprecated;
    this.removed = removed;
  }

  @Override
  public String getDescription() {
    return this.description;
  }

  @Override
  public boolean isDeprecatedIn(Version version) {
    if (this.deprecated == null) {
      return false;
    } else if (SimpleVersion.isVersionString(this.deprecated)) {
      return version.compareTo(SimpleVersion.fromString(this.deprecated)) >= 0;
    } else {
      return true;
    }
  }
  
  @Override
  public boolean isPresentIn(Version version) {
    if (this.removed == null) {
      return true;
    } else if (SimpleVersion.isVersionString(this.removed)) {
      return version.compareTo(SimpleVersion.fromString(this.removed)) < 0;
    } else {
      return true;
    }
  }

  @Override
  public String getDeprecated() {
    return this.deprecated;
  }


  public String getName() {
    return this.name;
  }

  public abstract <P> P accept(DocumentationEntryVisitor<P> visitor);

}
