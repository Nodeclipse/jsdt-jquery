package org.eclipselabs.jsdt.jquery.core.api;

import org.eclipselabs.jsdt.jquery.core.model.Function;
import org.eclipselabs.jsdt.jquery.core.model.Property;


public interface MemberVisitor<P> {
  
  P visitFuntion(Function function);
  P visitProperty(Property property);

}
