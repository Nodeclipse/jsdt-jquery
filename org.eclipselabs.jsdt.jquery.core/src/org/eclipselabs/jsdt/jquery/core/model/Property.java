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

import org.eclipselabs.jsdt.jquery.api.JQueryApiPlugin;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.core.api.DocumentationEntryVisitor;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;
import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;



public class Property extends DocumentedMember implements JQueryMember {

  private final Collection<PropertySignature> signatures;

  Property(String name,
      String description,
      String longDescription,
      Collection<Example> examples,
      Set<String> categories,
      Collection<PropertySignature> signatures,
      String returnType,
      String deprecated,
      String removed) {
    super(name, description, longDescription, examples, categories, returnType, deprecated, removed);
    this.signatures = signatures;
  }

  @Override
  public <P> P accept(MemberVisitor<P> visitor) {
    return visitor.visitProperty(this);
  }

  @Override
  public <P> P accept(DocumentationEntryVisitor<P> visitor) {
    return visitor.visitProperty(this);
  }

  Collection<PropertySignature> getSignatures() {
    return this.signatures;
  }

  boolean isIncludedIn(Version version) {
    for (Signature signature : this.signatures) {
      if (signature.isIncludedIn(version)) {
        return true;
      }
    }
    return false;
  }

}
