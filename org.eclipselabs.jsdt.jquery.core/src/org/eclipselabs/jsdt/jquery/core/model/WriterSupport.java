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
package org.eclipselabs.jsdt.jquery.core.model;

import java.io.IOException;
import java.io.Writer;
import java.util.Collection;

import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;
import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;

class WriterSupport {

  protected Writer output;

  protected void write(String s) {
    try {
      this.output.write(s);
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  protected void write(char c) {
    try {
      this.output.write(c);
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  protected void writeLine(String line) {
    try {
      this.output.write(line);
      this.writeNewLine();
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }


  void writeNewLine() {
    try {
      this.output.write('\n');
    } catch (IOException e) {
      throw new RuntimeException("output failed", e);
    }
  }

  protected void visitAll(Collection<JQueryMember> members, Predicate predicate, MemberVisitor<Void> visistor) {
    MemberVisitor<Void> filteredVisitor = new FilteredVisitor<Void>(predicate, visistor);
    for (JQueryMember member : members) {
      member.accept(filteredVisitor);
    }
  }

}