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

import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;



class FunctionArgument extends Argument {

  private final boolean optional;
  private final Collection<Option> options;

  FunctionArgument(String name, String type, String description, boolean optional, String defaultValue, Collection<Option> options) {
    super(name, type, description, defaultValue);
    this.optional = optional;
    this.options = options;
  }

  @Override
  public boolean isOptional() {
    return this.optional;
  }

  @Override
  public Collection<? extends JQueryArgument> getOptions() {
    return this.options;
  }

}
