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