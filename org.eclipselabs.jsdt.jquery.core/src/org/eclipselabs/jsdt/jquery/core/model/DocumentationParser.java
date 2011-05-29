package org.eclipselabs.jsdt.jquery.core.model;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;


import org.eclipse.core.runtime.Assert;
import org.eclipselabs.jsdt.jquery.core.api.DocumentationEntryVisitor;
import org.eclipselabs.jsdt.jquery.core.api.JQueryDocumentation;
import org.eclipselabs.jsdt.jquery.core.api.JQueryMember;

import static javax.xml.stream.XMLInputFactory.IS_NAMESPACE_AWARE;
import static javax.xml.stream.XMLInputFactory.IS_REPLACING_ENTITY_REFERENCES;
import static javax.xml.stream.XMLInputFactory.IS_SUPPORTING_EXTERNAL_ENTITIES;
import static javax.xml.stream.XMLInputFactory.IS_VALIDATING;
import static javax.xml.stream.XMLInputFactory.SUPPORT_DTD;
import static javax.xml.stream.XMLStreamConstants.CDATA;
import static javax.xml.stream.XMLStreamConstants.CHARACTERS;
import static javax.xml.stream.XMLStreamConstants.END_ELEMENT;
import static javax.xml.stream.XMLStreamConstants.START_ELEMENT;


public class DocumentationParser {

  public JQueryDocumentation parse(InputStream input) throws DocumentationParseException {
    Assert.isNotNull(input, "parse input");
    try {
      return this.parseProtected(input);
    } catch (IOException e) {
      throw new DocumentationParseException("io error while parsing documentation", e);
    } catch (XMLStreamException e) {
      throw new DocumentationParseException("error while parsing documentation", e);
    } catch (DocumentationValidationException e) {
      throw new DocumentationParseException("validation error while parsing documentation", e);
    }
  }


  private JQueryDocumentation parseProtected(InputStream input) throws XMLStreamException, IOException {
    try {
      XMLInputFactory factory = this.createInputFactory();
      InputStream bufferedInput = new BufferedInputStream(input);
      if (input instanceof BufferedInputStream) {
        bufferedInput = input;
      } else {
        bufferedInput = new BufferedInputStream(input);
      }
      Collection<DocumentationEntry> entries = this.parseProtected(factory.createXMLStreamReader(bufferedInput));
      Collection<Selector> selectors = this.extractSelectors(entries);
      Collection<JQueryMember> members = this.extractMembers(entries);
      return new ParsedJQqueryDocumentation(members, selectors);
    } finally {
      input.close();
    }
  }
  
  private Collection<JQueryMember> extractMembers(Collection<DocumentationEntry> entries) {
    Collection<JQueryMember> members = new ArrayList<JQueryMember>();
    DocumentationEntryVisitor<?> visitor = new MemberExtractorVisitor(members);
    for (DocumentationEntry entry : entries) {
      entry.accept(visitor);
    }
    return members;
  }
  
  private Collection<Selector> extractSelectors(Collection<DocumentationEntry> entries) {
    Collection<Selector> selectors = new ArrayList<Selector>();
    DocumentationEntryVisitor<?> visitor = new SelectorExtractorVisitor(selectors);
    for (DocumentationEntry entry : entries) {
      entry.accept(visitor);
    }
    return selectors;
  }
  
  final class MemberExtractorVisitor implements DocumentationEntryVisitor<Void> {
    
    private final Collection<JQueryMember> members;
    
    MemberExtractorVisitor(Collection<JQueryMember> members) {
      this.members = members;
    }
    
    @Override
    public Void visitMethod(Function method) {
      this.addMember(method);
      return null;
    }
    
    private void addMember(JQueryMember member) {
      this.members.add(member);
    }
    
    @Override
    public Void visitProperty(Property property) {
      this.addMember(property);
      return null;
    }
    
    @Override
    public Void visitSelector(Selector selector) {
      return null;
    }
    
  }
  
  final class SelectorExtractorVisitor implements DocumentationEntryVisitor<Void> {
    
    private final Collection<Selector> selectors;
    
    SelectorExtractorVisitor(Collection<Selector> selectors) {
      this.selectors = selectors;
    }

    @Override
    public Void visitMethod(Function method) {
      return null;
    }

    @Override
    public Void visitProperty(Property property) {
      return null;
    }

    @Override
    public Void visitSelector(Selector selector) {
      this.selectors.add(selector);
      return null;
    }
    
  }

  private Collection<DocumentationEntry> parseProtected(XMLStreamReader reader) throws XMLStreamException, IOException {
    try {
      this.expectNextElement("api", reader);
      this.expectNextElement("categories", reader);
      this.consumeCategories(reader);
      this.expectNextElement("entries", reader);
      return this.consumeEntries(reader);
    } finally {
      reader.close();
    }
  }

  private Collection<DocumentationEntry> consumeEntries(XMLStreamReader reader) throws XMLStreamException {
    Collection<DocumentationEntry> entries = new ArrayList<DocumentationEntry>();
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        if ("entry".equals(localName)) {
          entries.add(this.parseEntry(reader));
        }
      } else if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if ("entries".equals(localName)) {
          return entries;
        }
      }
    }
    
    throw new DocumentationValidationException("expected end of \"entries\" element");
  }

  private DocumentationEntry parseEntry(XMLStreamReader reader) throws XMLStreamException {
    int attributeCount = reader.getAttributeCount();
    String name = null, type = null, returnType = null;
    for (int i = 0; i < attributeCount; ++i) {
      String attributeName = reader.getAttributeLocalName(i);
      if ("type".equals(attributeName)) {
        type = reader.getAttributeValue(i);
      } else if ("return".equals(attributeName)) {
        returnType = reader.getAttributeValue(i);
      }  else if ("name".equals(attributeName)) {
        name = reader.getAttributeValue(i);
      }
    }

    String sample = null, longDescription = null, description = null;
    Set<String> categories = new HashSet<String>();
    //TODO optimize
    List<SignatureInfo> signatures = new ArrayList<SignatureInfo>();
    //TODO optimize
    Collection<Example> examples = new ArrayList<Example>();
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        if ("sample".equals(localName)) {
          // only for selectors
          sample = this.parseStringContent("sample", reader);
        } else if ("example".equals(localName)) {
          examples.add(this.parseExample(reader));
        } else if ("desc".equals(localName)) {
          description = this.parseStringContent("desc", reader);
        } else if ("longdesc".equals(localName)) {
          longDescription = this.parseStringContent("longdesc", reader);
        } else if ("category".equals(localName)) {
          categories.add(this.parseCategory(reader));
        } else if ("signature".equals(localName)) {
          signatures.add(this.parseSignature(reader));
        }

      } else if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if ("entry".equals(localName)) {
          DocumentationEntryInstantiator instantiator = DocumentationEntryInstantiator.forType(type);
          return instantiator.instantiate(name, returnType, description, longDescription, signatures, sample, examples, categories);
        }
      }
    }

    throw new DocumentationValidationException("expected end of \"entry\" element");
  }
  
  enum DocumentationEntryInstantiator {
    
    
    METHOD("method") {
      DocumentationEntry instantiate(String name,
          String returnType,
          String description,
          String longDescription,
          List<SignatureInfo> signatures,
          String sample,
          Collection<Example> examples,
          Set<String> categories) {
        return new Function(name, description, longDescription, examples, categories, toMethodSignatures(signatures), returnType);
      }
      
      
      private List<FunctionSignature> toMethodSignatures(List<SignatureInfo> signatures) {
        List<FunctionSignature> methodSignatures = new ArrayList<FunctionSignature>(signatures.size());
        for (SignatureInfo each : signatures) {
          methodSignatures.add(new FunctionSignature(each.added, each.arguments));
        }
        return methodSignatures;
      }
      
    },
    
    PROPERTY("property") {
      DocumentationEntry instantiate(String name,
          String returnType,
          String description,
          String longDescription,
          List<SignatureInfo> signatures,
          String sample,
          Collection<Example> examples,
          Set<String> categories) {
        return new Property(name, description, longDescription, examples, categories,
            toPropertySignatures(signatures), returnType);
      }
      
      
      private List<PropertySignature> toPropertySignatures(List<SignatureInfo> signatures) {
        List<PropertySignature> propertySignatures = new ArrayList<PropertySignature>(signatures.size());
        for (SignatureInfo each : signatures) {
          propertySignatures.add(new PropertySignature(each.added));
        }
        return propertySignatures;
      }
      
    },
    
    SELECTOR("selector") {
      DocumentationEntry instantiate(String name,
          String returnType,
          String description,
          String longDescription,
          List<SignatureInfo> signatures,
          String sample,
          Collection<Example> examples,
          Set<String> categories) {
        return new Selector(name, description, longDescription, examples, categories, sample);
      }
    };
    
    private static final Map<String, DocumentationEntryInstantiator> REGISTRY;
    
    static {
      REGISTRY = new HashMap<String, DocumentationEntryInstantiator>(3);
      for (DocumentationEntryInstantiator each : values()) {
        REGISTRY.put(each.type, each);
      }
    }
    
    static DocumentationEntryInstantiator forType(String type) {
      DocumentationEntryInstantiator instantiator = REGISTRY.get(type);
      if (instantiator != null) {
        return instantiator;
      } else {
        throw new NoSuchElementException("no instantiator for type: " + type);
      }
    }
    
    abstract DocumentationEntry instantiate(String name,
        String returnType,
        String description,
        String longDescription,
        List<SignatureInfo> signatures,
        String sample,
        Collection<Example> examples,
        Set<String> categories);

    private final String type;

    private DocumentationEntryInstantiator(String type) {
      this.type = type;
    }
    
  }

  private SignatureInfo parseSignature(XMLStreamReader reader) throws XMLStreamException {
    String added = null;
    //TODO optimize
    List<FunctionArgument> arguments = new ArrayList<FunctionArgument>();
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        if ("added".equals(localName)) {
          added = this.parseStringContent("added", reader);
        } else if ("argument".equals(localName)) {
          arguments.add(this.parseArgument(reader));
        } else {
          String message = "unexpected element \"" + localName + "\" expected one of: "
              +" \"added\", \"argument\"";
          throw new DocumentationValidationException(message);
        }
      } else if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if (!"signature".equals(localName)) {
          String message = "unexpected end element \"" + localName + "\" expected: \"signature\"";
          throw new DocumentationValidationException(message);
        }
        return new SignatureInfo(added, arguments);
      }
    }
    throw new DocumentationValidationException("end element missing for \"example\"");
  }

  private FunctionArgument parseArgument(XMLStreamReader reader) throws XMLStreamException {
    String name = null, type = null, defaultValue = null;
    boolean optional = false;
    for (int i = 0; i < reader.getAttributeCount(); i++) {
      String attributeName = reader.getAttributeLocalName(i);
      String attributeValue = reader.getAttributeValue(i);
      if ("name".equals(attributeName)) {
        name = attributeValue;
      } else if ("type".equals(attributeName)) {
        type = attributeValue;
      } else if ("optional".equals(attributeName)) {
        optional = Boolean.parseBoolean(attributeValue);
      } else if ("default".equals(attributeName)) {
        defaultValue = attributeValue;
      } else {
        String message = "unexpected attribute \"" + attributeName + "\" expected one of: "
            +" \"name\", \"type\", \"optional\", \"default\"";
        throw new DocumentationValidationException(message);
      }
    }

    String description = null;
    // TODO optimize
    Collection<Option> options = new ArrayList<Option>();
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        if ("desc".equals(localName)) {
          description = this.parseStringContent("desc", reader);
        } else if ("option".equals(localName)) {
          options.add(this.parseOption(reader));
        } else {
          String message = "unexpected start of element \"" + localName +  "\" "
              + " expected one of: \"desc\", \"option\"";
          throw new DocumentationValidationException(message);
        }
      } else if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if ("argument".equals(localName)) {
          return new FunctionArgument(name, type, description, optional, defaultValue, options);
        } else {
          String message = "unexpected start of element \"" + localName +  "\" "
              + " expected: \"argument\"";
          throw new DocumentationValidationException(message);
        }

      }
    }
    String message = "missing end of element \"argument\"";
    throw new DocumentationValidationException(message);
  }
  
  private Option parseOption(XMLStreamReader reader) throws XMLStreamException {
    String name = null, type = null, added = null, defaultValue = null, description = null;
    for (int i = 0; i < reader.getAttributeCount(); ++i) {
      String attributeName = reader.getAttributeLocalName(i);
      String attributeValue = reader.getAttributeValue(i);
      if ("name".equals(attributeName)) {
        name = attributeValue;
      } else if("type".equals(attributeName)) {
        type = attributeValue;
      } else if("default".equals(attributeName)) {
        defaultValue = attributeValue;
      } else if("added".equals(attributeName)) {
        added = attributeValue;
      } else {
        String message = "unexpected attribute \"" + attributeName +  "\" "
            + " expected one of: \"name\", \"type\", \"default\", \"added\"";
        throw new DocumentationValidationException(message);
      }
    }
    
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        if ("desc".equals(localName)) {
          description = this.parseStringContent("desc", reader);
        } else {
          String message = "unexpected start of element \"" + localName +  "\" "
              + " expected: \"desc\"";
          throw new DocumentationValidationException(message);
        }
      } else if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if ("option".equals(localName)) {
          return new Option(name, type, added, defaultValue, description);
        } else {
          String message = "unexpected end of element \"" + localName +  "\" "
              + " expected: \"category\"";
          throw new DocumentationValidationException(message);
        }
      }
    }
    String message = "missing end of element \"option\"";
    throw new DocumentationValidationException(message);
    
    
  }

  private String parseCategory(XMLStreamReader reader) throws XMLStreamException {
    String name = null;
    for (int i = 0; i < reader.getAttributeCount(); i++) {
      String attributeName = reader.getAttributeLocalName(i);
      if ("name".equals(attributeName)) {
        name = reader.getAttributeValue(i);
      }
    }

    while (reader.hasNext()) {
      int event = reader.next();
      if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if ("category".equals(localName)) {
          if (name != null) {
            return name;
          } else {
            String message = "unexpected attribute \"name\"";
            throw new DocumentationValidationException(message);
          }
        } else {
          String message = "unexpected end of element \"" + localName +  "\" "
              + " expected: \"category\"";
          throw new DocumentationValidationException(message);
        }
      }
    }

    String message = "missing end of element: \"category\"";
    throw new DocumentationValidationException(message);


  }

  private Example parseExample(XMLStreamReader reader) throws XMLStreamException {
    String description = null, code = null, html = null, css = null, results = null;
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        if ("desc".equals(localName)) {
          description = this.parseStringContent("desc", reader);
        } else if ("code".equals(localName)) {
          code = this.parseStringContent("code", reader);
        } else if ("html".equals(localName)) {
          html = this.parseStringContent("html", reader);
        } else if ("css".equals(localName)) {
          css = this.parseStringContent("css", reader);
        } else if ("results".equals(localName)) {
          css = this.parseStringContent("results", reader);
        } else if ("height".equals(localName)) {
          // we don't care about height for now
          this.consumeElement("height", reader);
        } else {
          String message = "unexpected element \"" + localName + "\" expected one of: "
              +" \"desc\", \"code\", \"html\", \"css\", \"results\"";
          throw new DocumentationValidationException(message);
        }
      } else if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if (!"example".equals(localName)) {
          String message = "unexpected end element \"" + localName + "\" expected: \"example\"";
          throw new DocumentationValidationException(message);
        }
        return new Example(description, code, css, html, results);
      }
    }
    throw new DocumentationValidationException("end element missing for \"example\"");
  }

  private String parseStringContent(String elementName, XMLStreamReader reader) throws XMLStreamException {
    StringBuilder builder = new StringBuilder();
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if (localName.equals(elementName)) {
          return builder.toString();
        } else {
          builder.append("</").append(localName).append('>');
        }
      } else if (event == CHARACTERS || event == CDATA) {
        builder.append(reader.getText());
      } else if (event == START_ELEMENT) {
        String localName = reader.getLocalName();
        builder.append("<").append(localName);
        for (int i = 0; ++i < reader.getAttributeCount(); ++i) {
          String attributeName = reader.getAttributeLocalName(i);
          String attributeValue = reader.getAttributeValue(i);
          builder.append(' ').append(attributeName)
          .append("=\"").append(attributeValue).append('"');
        }
        builder.append('>');
      }
    }
    throw new DocumentationValidationException("expected end of \"" + elementName + "\" element");
  }

  private void consumeElement(String elementName, XMLStreamReader reader) throws XMLStreamException {
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == END_ELEMENT) {
        String localName = reader.getLocalName();
        if (elementName.equals(localName)) {
          return;
        }
      }
    }
  }

  private void consumeCategories(XMLStreamReader reader) throws XMLStreamException {
    consumeElement("categories", reader);
  }

  private void expectNextElement(String expectedName, XMLStreamReader reader) throws XMLStreamException {
    String elementName = this.nextElementName(reader);
    if (!expectedName.equals(elementName)) {
      String message = "expected element \"" + expectedName + "\" but got \"" + elementName + '"';
      throw new DocumentationValidationException(message);
    }
  }

  private String nextElementName(XMLStreamReader reader) throws XMLStreamException {
    while (reader.hasNext()) {
      int event = reader.next();
      if (event == START_ELEMENT) {
        return reader.getLocalName();
      }
    }
    throw new DocumentationValidationException("found no furhter elements");
  }

  private XMLInputFactory createInputFactory() {
    XMLInputFactory factory = XMLInputFactory.newInstance();
    //disable various features that we don't need and just cost performance
    factory.setProperty(IS_VALIDATING, Boolean.FALSE);
    factory.setProperty(IS_NAMESPACE_AWARE, Boolean.FALSE);
    factory.setProperty(IS_REPLACING_ENTITY_REFERENCES, Boolean.FALSE);
    factory.setProperty(IS_SUPPORTING_EXTERNAL_ENTITIES, Boolean.FALSE);
    factory.setProperty(SUPPORT_DTD, Boolean.FALSE);
    return factory;
  }


  public static void main(String[] args) {
    long start = System.currentTimeMillis();
    DocumentationParser parser = new DocumentationParser();
    InputStream input = DocumentationParser.class.getClassLoader().getResourceAsStream("api.xml");
    try {
      parser.parse(input);
    } catch (DocumentationParseException e) {
      e.printStackTrace();
    }
    long end = System.currentTimeMillis();
    System.out.printf("finished after %dms%n", end - start);
  }
  
  static final class SignatureInfo {
    
    final String added;
    
    final List<FunctionArgument> arguments;

    SignatureInfo(String added, List<FunctionArgument> arguments) {
      this.added = added;
      this.arguments = arguments;
    }
    
  }
  

  static final class DocumentationValidationException extends RuntimeException {

    DocumentationValidationException(String message) {
      super(message);
    }

  }

}
