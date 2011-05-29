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

import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;


abstract class Argument implements JQueryArgument {
  
  private final String name;
  private final String type;
  private final String description;
  private final String defaultValue;
  
  
  Argument(String name, String type, String description, String defaultValue) {
    this.type = fixType(type);
    if ("Function".equals(type)) {
      this.name = extractFunctionName(name);
    } else {
      this.name = name;
    }
    this.description = description;
    this.defaultValue = defaultValue;
  }
  
  private static String fixType(String s) {
    if ("boolean".equals(s)) {
      return "Boolean";
    } else {
      return s;
    }
  }
  
  private static String extractFunctionName(String nameWithArguments) {
    int parenIndex = nameWithArguments.indexOf('(');
    if (parenIndex == -1) {
      return safeFunctionName(nameWithArguments);
    } else {
      String substring = nameWithArguments.substring(0, parenIndex);
      return safeFunctionName(substring);
    }
  }
  
  private static String safeFunctionName(String functionName) {
    //HAX for function()
    if ("function".equals(functionName)) {
      return "func";
    } else {
      return functionName;
    }
  }
  

  public String getName() {
    return this.name;
  }
  
  public String getType() {
    return this.type;
  }
  
  public String getDescription() {
    return this.description;
  }

  public String getDefaultValue() {
    return this.defaultValue;
  }

}
