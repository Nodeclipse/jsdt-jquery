package org.eclipselabs.jsdt.jquery.core.api;

import java.util.Collection;


public interface JQueryArgument {

  String getType();

  boolean isOptional();

  String getName();

  String getDefaultValue();

  String getDescription();

  Collection<? extends JQueryArgument> getOptions();

}
