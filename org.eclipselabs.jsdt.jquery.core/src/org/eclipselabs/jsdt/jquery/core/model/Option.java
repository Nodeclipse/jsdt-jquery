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
import java.util.Collections;
import java.util.Set;

import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;



// TODO rename to property
class Option extends Argument {

  private final String added;

  Option(String name, Set<String> types, String added, String defaultValue, String description) {
    super(name, types, description, defaultValue);
    this.added = added;
  }

  public String getAdded() {
    return this.added;
  }

  @Override
  public boolean isOptional() {
    return true;
  }

  @Override
  public Collection<? extends JQueryArgument> getOptions() {
    return Collections.emptyList();
  }

}
