package org.eclipselabs.jsdt.jquery.core.model;

import java.io.IOException;
import java.io.Writer;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.eclipselabs.jsdt.jquery.api.JQueryApiPlugin;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;
import org.eclipselabs.jsdt.jquery.core.api.MemberVisitor;

public class CallbackMethodGenerator extends WriterSupport {
    
    public void write(Collection<JQueryMember> members, Writer output) throws IOException {
        try {
          this.writeProtected(members, output);
        } finally {
          output.close();
        }
      }

      private void writeProtected(Collection<JQueryMember> members, Writer output) {
          this.output = output;
          
          writeHeader();
          Predicate eventFunction = new And(Filters.FUNCTION, Filters.EVENT);
          visitAll(members, eventFunction, new CallbackWirter());
          writeTrailer();
      }
      
      void writeMember(Function function) {
      
          List<FunctionSignature> signatures = function.getSignaturesInVersion(JQueryApiPlugin.MAX_VERSION);
          for (FunctionSignature signature : signatures) {
            
        }
          
      }
      
      final class CallbackWirter implements MemberVisitor<Void> {

          /**
           * {@inheritDoc}
           */
        @Override
        public Void visitFuntion(Function function) {
            writeMember(function);
            return null;
        }

        /**
         * {@inheritDoc}
         */
        @Override
        public Void visitProperty(Property property) {
            throw new AssertionError("should never be called");
        }
          
      }
      
      

    private void writeTrailer() {
        this.writeLine("   return callbacks;");
          this.writeLine(" }");
          this.writeNewLine();
          this.writeLine("}");
    }

    private void writeHeader() {
        this.writeLine("package org.eclipselabs.jsdt.jquery.api.infer;");
          this.writeNewLine();
          this.writeLine("public class JQueryCallbackMethodsGenerator {");
          this.writeNewLine();
          this.writeLine(" public JQueryCallbackMethods createCallbackMethods() {");
          this.writeLine("   JQueryCallbackMethods callbacks = new JQueryCallbackMethods();");
    }

}
