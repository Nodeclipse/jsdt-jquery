package org.eclipselabs.jsdt.jquery.core.model;

final class And implements Predicate {
    
    private final Predicate first;
    private final Predicate second;
    
    And(Predicate first, Predicate second) {
        this.first = first;
        this.second = second;
    }

    @Override
    public boolean isTrue(Function function) {
        return this.first.isTrue(function) && this.second.isTrue(function);
    }

    @Override
    public boolean isTrue(Property property) {
        return this.first.isTrue(property) && this.second.isTrue(property);
    }

}
