package org.eclipselabs.jsdt.jquery.core.model;

import java.util.Collection;
import java.util.Collections;

import org.eclipselabs.jsdt.jquery.core.api.JQueryArgument;



class Option extends Argument {

  private final String added;
  
  Option(String name, String type, String added, String defaultValue, String description) {
    super(name, type, description, defaultValue);
    this.added = added;
  }
  
  public String getAdded() {
    return this.added;
  }
  
  @Override
  public boolean isOptional() {
    return true;
  }
  
  @Override
  public Collection<? extends JQueryArgument> getOptions() {
    return Collections.emptyList();
  }

}
