package org.eclipselabs.jsdt.jquery.core.model;

import java.util.Collection;
import java.util.Set;

import org.eclipselabs.jsdt.jquery.core.api.DocumentationEntryVisitor;



public class Selector extends DocumentationEntry {
  
  private final String sample;

  Selector(String name,
      String description,
      String longDescription,
      Collection<Example> examples,
      Set<String> categories,
      String sample) {
    super(name, description, longDescription, examples, categories);
    this.sample = sample;
  }
  
  @Override
  public <P> P accept(DocumentationEntryVisitor<P> visitor) {
    return visitor.visitSelector(this);
  }

}
