/*
 * *****************************************************************************
 * Copyright (c) 2011 Philippe Marschall and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Philippe Marschall
 * *****************************************************************************
 *
 */
package org.eclipselabs.jsdt.jquery.core.api;

import java.util.Collection;

import org.eclipselabs.jsdt.jquery.api.JQuerySupport;
import org.eclipselabs.jsdt.jquery.core.model.Selector;



public interface JQueryDocumentation extends JQuerySupport {

  Collection<JQueryMember> getMembers();

  Collection<Selector> getSelectors();

}
