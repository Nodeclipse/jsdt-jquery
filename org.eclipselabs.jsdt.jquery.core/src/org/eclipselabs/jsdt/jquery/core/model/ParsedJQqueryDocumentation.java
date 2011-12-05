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
import java.util.List;

import org.eclipselabs.jsdt.jquery.api.JQueryApiPlugin;
import org.eclipselabs.jsdt.jquery.api.JQuerySupport;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.core.api.JQueryDocumentation;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;



final class ParsedJQqueryDocumentation implements JQueryDocumentation {

  private final Collection<JQueryMember> members;
  private final Collection<Selector> selectors;
  private final JQuerySupport support;

  ParsedJQqueryDocumentation(Collection<JQueryMember> members, Collection<Selector> selectors) {
    this.members = members;
    this.selectors = selectors;
    this.support = JQueryApiPlugin.getJQuerySupport();
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public Collection<JQueryMember> getMembers() {
    return this.members;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public Collection<Selector> getSelectors() {
    return this.selectors;
  }


  /**
   * {@inheritDoc}
   */
  @Override
  public List<Version> getAllVersions() {
    return this.support.getAllVersions();
  }

}
