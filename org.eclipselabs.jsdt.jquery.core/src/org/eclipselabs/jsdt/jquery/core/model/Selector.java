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

import org.eclipselabs.jsdt.jquery.core.api.DocumentationEntryVisitor;



public class Selector extends DocumentationEntry {

  private final String sample;

  Selector(String name,
      String description,
      String longDescription,
      Collection<Example> examples,
      Set<String> categories,
      String sample,
      String deprecated,
      String removed) {
    super(name, description, longDescription, examples, categories, deprecated, removed);
    this.sample = sample;
  }

  @Override
  public <P> P accept(DocumentationEntryVisitor<P> visitor) {
    return visitor.visitSelector(this);
  }

}
