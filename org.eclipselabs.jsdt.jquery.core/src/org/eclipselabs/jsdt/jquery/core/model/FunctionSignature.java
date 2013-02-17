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
package org.eclipselabs.jsdt.jquery.core.model;

import java.util.ArrayList;
import java.util.List;


class FunctionSignature extends Signature {

  private final List<FunctionArgument> arguments;

  FunctionSignature(String added, String removed, String deprecated, List<FunctionArgument> arguments) {
    super(added, removed, deprecated);
    this.arguments = arguments;
  }


  List<FunctionArgument> getArguments() {
    return this.arguments;
  }

  List<List<FunctionArgument>> getArgumentCombinations() {
    List<List<FunctionArgument>> combinations = new ArrayList<List<FunctionArgument>>(1);
    combinations.add(this.arguments);
    for (int i = this.arguments.size() - 1; i >= 0; --i) {
      if (this.arguments.get(i).isOptional()) {
        List<FunctionArgument> last = combinations.get(combinations.size() - 1);
        List<FunctionArgument> current = new ArrayList<FunctionArgument>(last);
        current.remove(i);
        combinations.add(current);
      }
    }
    return combinations;
  }

}
