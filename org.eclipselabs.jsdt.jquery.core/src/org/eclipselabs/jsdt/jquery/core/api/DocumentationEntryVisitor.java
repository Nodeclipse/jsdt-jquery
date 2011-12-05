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

import org.eclipselabs.jsdt.jquery.core.model.Function;
import org.eclipselabs.jsdt.jquery.core.model.Property;
import org.eclipselabs.jsdt.jquery.core.model.Selector;


public interface DocumentationEntryVisitor<P> {

  P visitMethod(Function method);
  P visitProperty(Property property);
  P visitSelector(Selector selector);

}
