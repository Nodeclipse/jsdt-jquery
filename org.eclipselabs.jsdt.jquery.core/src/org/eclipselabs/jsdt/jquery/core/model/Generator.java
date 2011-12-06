package org.eclipselabs.jsdt.jquery.core.model;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;

import org.eclipselabs.jsdt.jquery.api.JQueryContainer;
import org.eclipselabs.jsdt.jquery.api.Version;
import org.eclipselabs.jsdt.jquery.core.api.JQueryDocumentation;

public class Generator {
    

    public static void main(String[] args) throws IOException {
      long start = System.currentTimeMillis();
      DocumentationParser parser = new DocumentationParser();
      InputStream input = DocumentationParser.class.getClassLoader().getResourceAsStream("api.xml");
      JQueryDocumentation documentation;
      try {
        documentation = parser.parse(input);
      } catch (DocumentationParseException e) {
        e.printStackTrace(System.err);
        return;
      }

      
//      writeJsDoc(documentation);
      writeCallbackMethods(documentation);

      long end = System.currentTimeMillis();
      System.out.printf("finished generating documentation in %dms%n", end - start);
    }

    static void writeCallbackMethods(JQueryDocumentation documentation) throws IOException {
        CallbackMethodGenerator generator = new CallbackMethodGenerator();
          File parent = new File(new File(new File(new File(new File(new File(new File(new File(new File(".."), "org.eclipselabs.jsdt.jquery.api"), "src"), "org"), "eclipselabs"), "jsdt"), "jquery"), "api"), "infer");
          OutputStream outputStream = new FileOutputStream(new File(parent, "JQueryCallbackMethodsGenerator.java"));
          OutputStream buffered = new BufferedOutputStream(outputStream);
          generator.write(documentation.getMembers(), new OutputStreamWriter(buffered, "US-ASCII"));
    }

    static void writeJsDoc(JQueryDocumentation documentation) throws IOException {
        JSDocGenerator generator = new JSDocGenerator();

          File parent = new File(new File(new File(".."), "org.eclipselabs.jsdt.jquery.api"), "libraries");
          for (Version version : documentation.getAllVersions()) {
            OutputStream outputStream = new FileOutputStream(new File(parent, "jquery-doc-" + version.toString() + ".js"));
            OutputStream buffered = new BufferedOutputStream(outputStream);
            generator.write(documentation.getMembers(), false, new OutputStreamWriter(buffered, "US-ASCII"), version);

            outputStream = new FileOutputStream(new File(parent, "jquery-doc-noconflict-" + version.toString() + ".js"));
            buffered = new BufferedOutputStream(outputStream);
            generator.write(documentation.getMembers(), true, new OutputStreamWriter(buffered, "US-ASCII"), version);
          }
    }

}
