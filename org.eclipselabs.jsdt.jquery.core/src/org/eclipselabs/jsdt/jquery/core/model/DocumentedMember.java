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

import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;



abstract class DocumentedMember extends DocumentationEntry implements JQueryMember {

  private final String owner;
  private final String returnType;

  DocumentedMember(String name,
      String description,
      String longDescription,
      Collection<Example> examples,
      Set<String> categories,
      String returnType,
      String deprecated,
      String removed) {
    super(extractName(name), description, longDescription, examples, categories, deprecated, removed);
    this.owner = extractOwner(name);
    this.returnType = fixType(returnType);
  }

  private static String extractName(String s) {
    int dotIndex = s.lastIndexOf('.');
    if (dotIndex != -1) {
      return s.substring(dotIndex + 1);
    } else {
      return s;
    }
  }

  private static String extractOwner(String s) {
    int dotIndex = s.lastIndexOf('.');
    if (dotIndex != -1) {
      return s.substring(0, dotIndex);
    } else {
      return JQUERY_OBJECT;
    }
  }

  private static String fixType(String s) {
    if ("boolean".equals(s)) {
      return "Boolean";
    } else {
      return s;
    }
  }

  @Override
  public String getOwner() {
    return this.owner;
  }


  public String getReturnType() {
    return this.returnType;
  }


}
