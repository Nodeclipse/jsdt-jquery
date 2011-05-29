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


class Example {
  
  private final String description;
  private final String code;
  private final String css;
  private final String html;
  private final String results;
  
  
  Example(String description, String code, String css, String html, String results) {
    this.description = description;
    this.code = code;
    this.css = css;
    this.html = html;
    this.results = results;
  }
  
  

}
