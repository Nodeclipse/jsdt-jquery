package org.eclipselabs.jsdt.jquery.core.model;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collection;
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
          Predicate instanceFunction = new And(Filters.FUNCTION, Filters.INSTANCE_SIDE);
          visitAll(members, instanceFunction, new CallbackWirter());
          writeTrailer();
      }
      
      void writeMember(Function function) {
      
          List<FunctionSignature> signatures = function.getSignaturesInVersion(JQueryApiPlugin.MAX_VERSION);
          for (FunctionSignature signature : signatures) {
              
              List<Integer> callbackIndices = null;
            List<FunctionArgument> functionArguments = signature.getArguments();
            int argumentCount = functionArguments.size();
            for (int i = 0; i < argumentCount; ++i) {
                FunctionArgument argument = functionArguments.get(i);
                if (this.isEventCallback(argument)) {
                    if (callbackIndices == null) {
                        callbackIndices = new ArrayList<Integer>(3);
                    }
                    callbackIndices.add(i);
                }
            }
            if (callbackIndices != null) {
                for (Integer callbackIndex : callbackIndices) {
                    writeLine("    callbacks.addCallbackMethod(\"" + function.getName() + "\", " + argumentCount + ", " + callbackIndex + ");");
                }
            }
        }
          
      }
      
      private boolean isEventCallback(FunctionArgument argument) {
          return "Function".equals(argument.getType())
                  && "handler(eventObject)".equals(argument.getName());
      }
      
      static final class CallbackArgument {
          private final String selector;
          private final int argumentAcount;
          private final int eventIndex;
          
        CallbackArgument(String selector, int argumentAcount, int eventIndex) {
            this.selector = selector;
            this.argumentAcount = argumentAcount;
            this.eventIndex = eventIndex;
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
