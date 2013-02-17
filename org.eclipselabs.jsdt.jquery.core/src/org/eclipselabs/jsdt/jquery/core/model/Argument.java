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

import java.util.HashSet;
import java.util.Set;

import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;


abstract class Argument implements JQueryArgument {

  private final String name;
  private final Set<String> types;
  private final String description;
  private final String defaultValue;


  Argument(String name, Set<String> types, String description, String defaultValue) {
    this.types = fixTypes(types);
    this.name = name;
    this.description = description;
    this.defaultValue = defaultValue;
  }
  
  private static Set<String> fixTypes(Set<String> s) {
     // TODO optimize
      Set<String> fixed = new HashSet<String>(s.size());
      for (String each : s) {
          fixed.add(fixType(each));
      }
      return fixed;
  }

  private static String fixType(String s) {
    if ("boolean".equals(s)) {
      return "Boolean";
    } else {
      return s;
    }
  }

  @Override
  public String getName() {
    return this.name;
  }

  @Override
  public Set<String> getTypes() {
    return this.types;
  }

  @Override
  public String getDescription() {
    return this.description;
  }

  @Override
  public String getDefaultValue() {
    return this.defaultValue;
  }

}
