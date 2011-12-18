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
 */
package org.eclipselabs.jsdt.jquery.api.infer;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class JQueryCallbackMethods {

  public static final int NO_CALLBACK = -1;

  private final Map<CallbackLocator, Set<Integer>> callbackFunctions;
  private final Set<String> callbackSelectors;

  public JQueryCallbackMethods() {
    this.callbackFunctions = new ConcurrentHashMap<CallbackLocator, Set<Integer>>();
    // REVIEW ConcurrentHashSet?
    this.callbackSelectors = new HashSet<String>();
  }

  public void addCallbackMethod(String selector, int argumentAcount, int eventIndex) {
    this.callbackSelectors.add(selector);
    CallbackLocator key = new CallbackLocator(selector, argumentAcount);
    Set<Integer> indices = this.callbackFunctions.get(key);
    if (indices == null) {
      indices = new HashSet<Integer>(3);
      this.callbackFunctions.put(key, indices);
    }
    indices.add(eventIndex);
  }

  public Set<Integer> getCallbackIndices(String selector, int argumentCount) {
    CallbackLocator key = new CallbackLocator(selector, argumentCount);
    return this.callbackFunctions.get(key);
  }

  public boolean isEventSelector(String selector) {
    return this.callbackSelectors.contains(selector);
  }

  static final class CallbackLocator {

    final String selector;
    final int argmentCount;

    CallbackLocator(String selector, int argmentCount) {
      super();
      this.selector = selector;
      this.argmentCount = argmentCount;
    }

    @Override
    public String toString() {
      return this.selector + ":(" + this.argmentCount + ')';
    }

    @Override
    public int hashCode() {
      return this.selector.hashCode() ^ this.argmentCount;
    }

    @Override
    public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      }
      if (!(obj instanceof CallbackLocator)) {
        return false;
      }
      CallbackLocator other = (CallbackLocator) obj;
      return this.selector.equals(other.selector)
          && this.argmentCount == other.argmentCount;
    }

  }

}
