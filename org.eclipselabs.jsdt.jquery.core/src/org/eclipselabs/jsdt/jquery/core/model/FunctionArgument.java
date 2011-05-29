package org.eclipselabs.jsdt.jquery.core.model;

import java.util.Collection;

import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;



class FunctionArgument extends Argument {
  
  private final boolean optional;
  private final Collection<Option> options;
  
  FunctionArgument(String name, String type, String description, boolean optional, String defaultValue, Collection<Option> options) {
    super(name, type, description, defaultValue);
    this.optional = optional;
    this.options = options;
  }
  
  @Override
  public boolean isOptional() {
    return this.optional;
  }

  public Collection<? extends JQueryArgument> getOptions() {
    return this.options;
  }
  
}
