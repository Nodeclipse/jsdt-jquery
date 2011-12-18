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
 */
package org.eclipselabs.jsdt.jquery.core.model;

import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;

final class FilteredVisitor<P> implements MemberVisitor<P> {

  private final MemberVisitor<P>  delegate;
  private final Predicate predicate;

  FilteredVisitor(Predicate predicate, MemberVisitor<P> delegate) {
    this.predicate = predicate;
    this.delegate = delegate;
  }

  @Override
  public P visitFuntion(Function function) {
    if (this.predicate.isTrue(function)) {
      return this.delegate.visitFuntion(function);
    } else {
      return null;
    }
  }

  @Override
  public P visitProperty(Property property) {
    if (this.predicate.isTrue(property)) {
      return this.delegate.visitProperty(property);
    } else {
      return null;
    }
  }

}