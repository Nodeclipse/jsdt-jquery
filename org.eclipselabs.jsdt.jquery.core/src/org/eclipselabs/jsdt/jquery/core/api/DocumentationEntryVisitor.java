package org.eclipselabs.jsdt.jquery.core.api;

import org.eclipselabs.jsdt.jquery.core.model.Function;
import org.eclipselabs.jsdt.jquery.core.model.Property;
import org.eclipselabs.jsdt.jquery.core.model.Selector;


public interface DocumentationEntryVisitor<P> {
  
  P visitMethod(Function method);
  P visitProperty(Property property);
  P visitSelector(Selector selector);

}
