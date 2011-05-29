package org.eclipselabs.jsdt.jquery.core.model;

import java.util.List;


class FunctionSignature extends Signature {
  
  private final List<FunctionArgument> arguments;
  
  FunctionSignature(String added, List<FunctionArgument> arguments) {
    super(added);
    this.arguments = arguments;
  }

  
  List<FunctionArgument> getArguments() {
    return this.arguments;
  }
  
}
