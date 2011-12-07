package org.eclipselabs.jsdt.jquery.api.infer;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class JQueryCallbackMethods {

  public static final int NO_CALLBACK = -1;
  
  private final Map<CallbackLocator, Integer> callbackFunctions;
  private final Set<String> callbackSelectors;
  
  public JQueryCallbackMethods() {
    this.callbackFunctions = new ConcurrentHashMap<CallbackLocator, Integer>();
    // REVIEW ConcurrentHashSet?
    this.callbackSelectors = new HashSet<String>();
  }

  public void addCallbackMethod(String selector, int argumentAcount, int eventIndex) {
    this.callbackSelectors.add(selector);
    this.callbackFunctions.put(new CallbackLocator(selector, argumentAcount), eventIndex);
  }
  

  public boolean isEventCallback(String selector, int index) {
    return this.callbackFunctions.containsKey(new CallbackLocator(selector, index));
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
