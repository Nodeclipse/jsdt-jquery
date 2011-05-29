package org.eclipselabs.jsdt.jquery.core.model;

import java.util.Collection;
import java.util.Set;

import org.eclipselabs.jsdt.jquery.core.api.DocumentationEntryVisitor;
import org.eclipselabs.jsdt.jquery.core.api.Documented;



abstract class DocumentationEntry implements Documented {
  
  private final String description;
  private final String longDescription;
  private final Collection<Example> examples;
  private final Set<String> categories;
  private final String name;
  
  DocumentationEntry(String name,
      String description,
      String longDescription,
      Collection<Example> examples,
      Set<String> categories) {
    this.name = name;
    this.description = description;
    this.longDescription = longDescription;
    this.examples = examples;
    this.categories = categories;
  }
  
  @Override
  public String getDescription() {
    return this.description;
  }
  
  
  public String getName() {
    return this.name;
  }
  
  public abstract <P> P accept(DocumentationEntryVisitor<P> visitor);
  
  
  
}
