package org.eclipselabs.jsdt.jquery.core.api;

import java.util.Collection;

import org.eclipselabs.jsdt.jquery.api.JQuerySupport;
import org.eclipselabs.jsdt.jquery.core.model.Selector;



public interface JQueryDocumentation extends JQuerySupport {

  Collection<JQueryMember> getMembers();

  Collection<Selector> getSelectors();

}
