package org.eclipselabs.jsdt.jquery.core.model;

import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;

enum Filters implements Predicate {
      
      
    
    FUNCTION {
        
        @Override
        public boolean isTrue(Function function) {
            return true;
        }
        
        @Override
        public boolean isTrue(Property property) {
            return false;
        }
        
    },
    
    PROPERTY {
        
        @Override
        public boolean isTrue(Function function) {
            return false;
        }
        
        @Override
        public boolean isTrue(Property property) {
            return true;
        }
        
    },

    CLASS_SIDE {

      @Override
      public boolean isTrue(Function function) {
        return isJQueryStatic(function);
      }

      @Override
      public boolean isTrue(Property property) {
        return isJQueryStatic(property);
      }

    },

    INSTANCE_SIDE {

      @Override
      public boolean isTrue(Function function) {
        return isJQueryObject(function);
      }

      @Override
      public boolean isTrue(Property property) {
        return isJQueryObject(property);
      }

    },

    EVENT {

      @Override
      public boolean isTrue(Function function) {
        return isJQueryEvent(function);
      }

      @Override
      public boolean isTrue(Property property) {
        return isJQueryEvent(property);
      }

    };


    static boolean isJQueryObject(DocumentedMember member) {
      return isJQueryObject(member.getOwner());
    }

    static boolean isJQueryObject(String owner) {
      return JQueryMember.JQUERY_OBJECT.equals(owner);
    }

    static boolean isJQueryStatic(DocumentedMember member) {
      return isJQueryStatic(member.getOwner());
    }

    static boolean isJQueryStatic(String owner) {
      return "jQuery".equals(owner);
    }

    static boolean isJQueryEvent(DocumentedMember member) {
      return isJQueryEvent(member.getOwner());
    }

    static boolean isJQueryEvent(String owner) {
      return "event".equals(owner);
    }

    
    

  }