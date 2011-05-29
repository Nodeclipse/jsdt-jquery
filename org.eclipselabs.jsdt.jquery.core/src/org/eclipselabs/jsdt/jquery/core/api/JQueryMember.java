package org.eclipselabs.jsdt.jquery.core.api;


public interface JQueryMember {
  
  String JQUERY_OBJECT = "jQueryObject";
  
  public String getName();
  
  public String getOwner();
  
  public <P> P accept(MemberVisitor<P> member);

}
