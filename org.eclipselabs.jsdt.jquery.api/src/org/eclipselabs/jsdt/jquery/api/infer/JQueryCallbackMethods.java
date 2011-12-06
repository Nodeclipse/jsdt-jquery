package org.eclipselabs.jsdt.jquery.api.infer;

public class JQueryCallbackMethods {

    public static final int NO_CALLBACK = -1;
    
    public void addCallbackMethod(String selector, int argumentAcount, int eventIndex) {
        throw new RuntimeException("not yet implemented");
    }
    
    public int getCallbackIndex(String selector, int argumentCount) {
        throw new RuntimeException("not yet implemented");
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
