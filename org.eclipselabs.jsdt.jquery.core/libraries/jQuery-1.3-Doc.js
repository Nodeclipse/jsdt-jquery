/** 
 * jQuery JSDoc file for Eclipse Web Tools Platform
 * 
 * Author: o_O Tync, ICQ# 1227-700
 * Date: 30.01.2009
 * jQuery: 1.3.1
 * Enjoy!
 */

/** jQuery $().* functions */
function jQuery() {}
jQuery.prototype = new Array;

/** jQuery $.* functions */
function jQueryStatic() {}


/** (Core/$) Elements handling
 * <br><u>1:</u> $(html) Create DOM elements on-the-fly from the provided String of raw HTML. 
 * <br><u>2:</u> $(elements) Wrap jQuery functionality around a single or multiple DOM Element(s), Window, or XML.
 * <br><u>3:</u> $(callback) A shorthand for $(document).ready().
 * <br><u>3:</u> $(expr,context) This function accepts a string containing a CSS selector which is then used to match a set of elements.
 * @see jQuery.find For the list of selectors
 * @param expression String A CSS Selector used to match a set of elements
 * @param context {Document|Node|jQuery} Context to be used for matching. Default is the current document. Can be used for parsing XML from ajax.
 * @param html String A string of HTML to create on the fly. Slashes must be escaped!
 * @param elements {Node|jQuery} DOM Elements to be encapsulated by a jQuery object.
 * @param callback Function Function to execute when the DOM is ready.
 * 		<br> The function is chainable: You can have as many $(document).ready events on your page as you like.
 * @return jQuery
 * @type jQuery
 */
function $(html$elements$callback$expr, context$) {}
$.prototype = new jQuery;
var $ = new jQueryStatic;

/* ====== jQuery Object Accessors ====== */

/** (Core/Accessors) Execute a function within the context of every matched element.
 * <br>The 'this' keyword points to the specific DOM element.
 * <br>Additionally, the function, when executed, is passed a single argument representing the position of the element in the matched set (integer, zero-index).
 * @param callback Function The callback to execute for each matched element. `this` = the element
 * 		<br>Return `false` to stop the loop (break).
 * 		<br>Return `true` to skip the iteration (continue).
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.each = function(callback) {};

/** (Core/Accessors) Reduce the set of matched elements to a single element.
 * <br>The position of the element in the set of matched elements starts at 0 and goes to length - 1.
 * @param position Number The index of the element to select
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.eq = function(position) {};

/** (Core/Accessors)  Access all matched DOM elements
 * @param index Number [optional] The index of the element to select. Then the function will return one Node
 * @return Array(Node)
 * @type Array
 */
jQuery.prototype.get = function() {};

/** (Core/Accessors) Searches every matched element for the object and returns the index of the element, if found, starting with zero.
 * @param subject Node The DOMNode to search within the current collection
 * @return Number Index of the found element, -1 on not found
 * @type Number
 */
jQuery.prototype.index = function(subject) {};

//jQuery.prototype.length = 0; - {Array}

/** (Core/Accessors) The number of elements in the jQuery object.
 * @return Number Same value as the `length` property
 * @type Number
 */
jQuery.prototype.size = function() {};

/* ====== Plugins ====== */

//jQuery.prototype.extend = function(object) {};
//jQuery.fn.prototype.extend = function(object) {};

/* ====== Interoperability ====== */

/** (Core/Interoperability) Run this function to give control of the $ variable back to whichever library first implemented it.
 * <br>This helps to make sure that jQuery doesn't conflict with the $ object of other libraries.
 * <br> By using this function, you will only be able to access jQuery using the 'jQuery' variable. For example, where you used to do $("div p"), you now must do jQuery("div p").
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.noConflict = function() {};

/* ====== Attributes ====== */

/** (Attributes/Attr) Access an attribute
 * <br><u>1:</u> attr(name) Access a property on the first matched element. If the element does not have an attribute with such a name, undefined is returned.
 * <br><u>2:</u> attr(properties) Set a key/value object as properties to all matched elements.
 * <br><u>3:</u> attr(name, value) Set a single property to a value, on all matched elements.
 * <br><u>4:</u> attr(name, fn) Set a single property to a computed value, on all matched elements.
 * @param name String 
 * 		<br><u>1:</u> The name of the property to get from the first matched element.
 * 		<br><u>3,4:</u> The name of the property to set on all matched elements
 * @param properties Object <u>2:</u> Set a key/value object as properties to all matched elements.
 * 		<br>NOTE: To modify a 'class' property - use 'className' key.
 * @param value Object <u>3:</u> The value to set the property to.
 * @param fn Function <u>4:</u> A function(index) returning the value to set. `this` stands for the current element.
 * 		
 * @return <u>1:</u> Attr, <u>2,3,4:</u> jQuery
 * @type jQuery
 */
jQuery.prototype.attr = function(name$properties, value$fn$) {};

/** (Attributes/Attr) Remove an attribute from each of the matched elements.
 * @param name String The name of the property to remove
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.removeAttr = function(name) {};

/** (Attributes/Class) Adds the specified class(es) to each of the set of matched elements.
 * @param className String One or more space-separated CSS classes to add to the elements.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.addClass = function(className) {};

/** (Attributes/Class) Removes all or the specified class(es) from the set of matched elements.
 * <br><u>1:</u>removeClass() Remove all classes
 * <br><u>2:</u>removeClass(className) Remove some classes
 * @param className One or more space-separated CSS classes to remove from the elements.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.removeClass = function(className$) {};

/** (Attributes/Class) Adds the specified class if it is not present, removes the specified class if it is present.
 * @param className A CSS class to toggle on the elements
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.toggleClass = function(className) {};

/** (Attributes/HTML) Get/Set HTML Contents
 * <br>This property is not available on XML documents (although it will work for XHTML documents).
 * <br><u>1:</u> html() Get the contents (innerHTML) of the first matched element.
 * <br><u>2:</u> html(value) Set the html contents of every matched element.
 * @param value String The new HTML contents.
 * @return <u>1:</u> String, <u>2:</u> jQuery
 * @type jQuery
 */
jQuery.prototype.html = function(value$) {};

/** (Attributes/Text) Get/Set TEXT Contents. Wors for XML and HTML documents.
 * <br><u>1:</u> text() Get the combined text contents of all matched elements.
 * <br><u>2:</u> text(value) Set the text contents of all matched elements. Similar to html(), but escapes HTML.
 * @param value String The text value to set the contents of the element to
 * @return <u>1:</u> String, <u>2:</u> jQuery
 * @type jQuery
 */
jQuery.prototype.text = function(value$) {};

/** (Attributes/Value) Get/Set the content of the value attribute.
 * <br><u>1:</u> val() Get the content of the value attribute of the first matched element. For multiple selects an array of values is returned.
 * <br><u>2:</u> val(value)
 * @param value {String|Array} Set the value attribute of every matched element. Array sets values to check/select.
 * @return <u>1:</u> String, <u>2:</u> jQuery
 * @type jQuery
 */
jQuery.prototype.val = function(value$) {};

/* ====== Traversing ====== */

/** (Traversing/Filtering) Reduce the set of matched elements to a single element.
 * @param index Number The index of the element to select
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.eq = function(index) {};

/** (Traversing/Filtering) Removes all elements from the set of matched elements that do not match the specified string/fcallback filter. 
 * @param expr String An expression to pass into the filter. ','-separated list to apply multiple filters at once.
 * @param callback Function Callback that can return `false` to delete an element.
 * 		<br>`this` stands for the current element.
 * 		<br>ARG(index): index of the current element
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.filter = function(expr$callback) {};

/** (Traversing/Filtering) Checks the current selection against a class and returns true, if at least one element of the selection has the given class.
 * <br>This is an alternative to is("." + class).
 * @param className String The class to match
 * @return Boolean
 * @type Boolean
 */
jQuery.prototype.hasClass = function(className) {};

/** (Traversing/Filtering) Checks the current selection against an expression and returns true, if at least one element of the selection fits the given expression.
 * <br>If no element fits, or the expression is not valid, then the response will be 'false'.
 * @param expr String The expression with which to filter
 * @return Boolean
 * @type Boolean
 */
jQuery.prototype.is = function(expr) {};

/** (Traversing/Filtering) Translate a set of elements in the jQuery object into another set of values in an array (which may, or may not, be elements).
 * @param callback	A callback(index, domElement), that can return an element's replacement, `null` to delete, Array() to insert.
 * 					<br>`this` is also a DOM Element
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.map = function(callback) {};

/** (Traversing/Filtering) Removes elements matching the specified expression from the set of matched elements.
 * @param expr {String|Node|jQuery} An Expression with which to remove matching elements, an element to remove from the set or a set of elements to remove from the jQuery set of matched elements.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.not = function(expr) {};

// jQuery.prototype.slice = function(start, end) - Array

/** (Traversing/Finding) Adds more elements, matched by the given expression, to the set of matched elements.
 * @param expr {String|Node|jQuery} An expression whose matched elements are added
 * 		<br>String: a string of HTML to create on the fly
 * 		<br>Node, jQuery: elements to add
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.add = function(expr) {};

/** (Traversing/Finding) Get a set of elements containing all of the unique immediate children of each of the matched set of elements.
 * <br>Note: while parents() will look at all ancestors, children() will only consider immediate child elements.
 * @param expr String [optional] An expression to filter the child elements with
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.children = function(expr$) {};

/** (Traversing/Finding) Find all the child nodes inside the matched elements (including text nodes), or the content document, if the element is an iframe.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.contents = function() {};

/** (Traversing/Finding) Searches for all elements that match the specified expression. This method is a good way to find additional descendant elements with which to process.
 * <br>This creates a new selection. Use `andSelf()` and `end()` to merge / destroy them
 * <br>All searching is done using a jQuery expression. The expression can be written using CSS 1-3 Selector syntax:
 * 
 * <br><b>---SELECTORS---</b>
 * <br><u>Basics:</u>
 * <dl compact>
 * 	<dt>*</dt>
 * 		<dd>Matches all elements. Most useful when combined with a context to search in.</dd>
 * 	<dt>.class</dt>
 * 		<dd>Matches all elements with the given class.</dd>
 * 	<dt>element</dt>
 * 		<dd>Matches all elements with the given name.</dd>
 * 	<dt>#id</dt>
 * 		<dd>Matches a single element with the given id attribute.
 * 			<br>'.', ';', etc are escaped with a backslash</dd>
 * 	<dt>selector1, selector2, ...</dt>
 * 		<dd>Matches the combined results of all the specified selectors. The order is undefined..</dd>
 * </dl>
 * 
 * <br><u>Hierarchy:</u>
 * <dl compact>
 * 	<dt>parent > child</dt>
 * 		<dd>Matches all child elements specified by "child" of elements specified by "parent".</dd>
 * 	<dt>ancestor descendant</dt>
 * 		<dd>Matches all descendant elements specified by "descendant" of elements specified by "ancestor".</dd>
 * 	<dt>prev + next</dt>
 * 		<dd>Matches all next elements specified by "next" that are next to elements specified by "prev".</dd>
 * 	<dt>prev ~ siblings</dt>
 * 		<dd>Matches all sibling elements after the "prev" element that match the filtering "siblings" selector.</dd>
 * </dl>
 * 
 * <br><u>Basic Filters:</u>
 * <dl compact>
 * 	<dt>:animated</dt>
 * 		<dd>Matches all elements that are currently being animated.</dd>
 * 	<dt>:eq(index)</dt>
 * 		<dd>Matches a single element by its index in the collection.</dd>
 * 	<dt>:even</dt>
 * 		<dd>Matches even elements, zero-indexed.</dd>
 * 	<dt>:first</dt>
 * 		<dd>Matches the first selected element.</dd>
 * 	<dt>:gt(index)</dt>
 * 		<dd>Matches all elements with an index above the given one.</dd>
 * 	<dt>:header</dt>
 * 		<dd>Matches all elements that are headers, like h1, h2, h3 and so on.</dd>
 * 	<dt>:last</dt>
 * 		<dd>Matches the last selected element.</dd>
 * 	<dt>:lt(index)</dt>
 * 		<dd>Matches all elements with an index below the given one.</dd>
 * 	<dt>:not(selector)</dt>
 * 		<dd>Filters out all elements matching the given selector.</dd>
 * 	<dt>:odd</dt>
 * 		<dd>Matches odd elements, zero-indexed.</dd>
 * </dl>
 * 
 * <br><u>Content Filters:</u>
 * <dl compact>
 * 	<dt>:contains(text)</dt>
 * 		<dd>Matches elements which contain the given text.</dd>
 * 	<dt>:empty</dt>
 * 		<dd>Matches all elements that have no children (including text nodes).</dd>
 * 	<dt>:has(selector)</dt>
 * 		<dd>Matches elements which contain at least one element that matches the specified selector.</dd>
 * 	<dt>:parent</dt>
 * 		<dd>Matches all elements that are parents - they have child elements, including text.</dd>
 * </dl>
 * 
 * <br><u>Visibility Filters:</u>
 * <dl compact>
 * 	<dt>:hidden</dt>
 * 		<dd>Matches all elements that are hidden, or input elements of type "hidden".</dd>
 * 	<dt>:visible</dt>
 * 		<dd>Matches all elements that are visible.</dd>
 * </dl>
 * 
 * <br><u>Attribute Filters:</u>
 * <dl compact>
 * 	<dt>[attribute*=value]</dt>
 * 		<dd>Matches elements that have the specified attribute and it contains a certain value.</dd>
 * 	<dt>[attribute$=value]</dt>
 * 		<dd>Matches elements that have the specified attribute and it ends with a certain value.</dd>
 * 	<dt>[attribute=value]</dt>
 * 		<dd>Matches elements that have the specified attribute with a certain value.</dd>
 * 	<dt>[attribute]</dt>
 * 		<dd>Matches elements that have the specified attribute.</dd>
 * 	<dt>[selector1][selector2][selectorN]</dt>
 * 		<dd>Matches elements that have the specified attribute and it contains a certain value.</dd>
 * 	<dt>[attribute!=value]</dt>
 * 		<dd>Matches elements that don't have the specified attribute with a certain value.</dd>
 * 	<dt>[attribute^=value]</dt>
 * 		<dd>Matches elements that have the specified attribute and it starts with a certain value.</dd>
 * </dl>
 * 
 * <br><u>Child Filters:</u>
 * <dl compact>
 * 	<dt>:first-child</dt>
 * 		<dd>Matches the first child of its parent.<br>While :first matches only a single element, this matches more then one: One for each parent.</dd>
 * 	<dt>:last-child</dt>
 * 		<dd>Matches the last child of its parent.<br>While :last matches only a single element, this matches more then one: One for each parent.</dd>
 * 	<dt>:nth-child(index/even/odd/equation)</dt>
 * 		<dd>Matches the nth-child of its parent or all its even or odd children.
 * 			<br>While :eq(index) matches only a single element, this matches more then one: One for each parent with index. Multiple for each parent with even, odd, or equation.
 * 			<br>The specified index is one-indexed, in contrast to :eq() which starts at zero.</dd>
 * 	<dt>:only-child</dt>
 * 		<dd></dd>
 * </dl>
 * 
 * <br><u>Forms:</u>
 * <dl compact>
 * 	<dt>:button</dt>
 * 		<dd>Matches all input elements of type button.</dd>
 * 	<dt>:checkbox</dt>
 * 		<dd>Matches all input elements of type checkbox.</dd>
 * 	<dt>:file</dt>
 * 		<dd>Matches all input elements of type file.</dd>
 * 	<dt>:hidden</dt>
 * 		<dd>Matches all elements that are hidden, or input elements of type "hidden".</dd>
 * 	<dt>:image</dt>
 * 		<dd>Matches all input elements of type image.</dd>
 * 	<dt>:input</dt>
 * 		<dd>Matches all input, textarea, select and button elements.</dd>
 * 	<dt>:password</dt>
 * 		<dd>Matches all input elements of type password.</dd>
 * 	<dt>:radio</dt>
 * 		<dd>Matches all input elements of type password.</dd>
 * 	<dt>:reset</dt>
 * 		<dd>Matches all input elements of type reset.</dd>
 * 	<dt>:submit</dt>
 * 		<dd>Matches all input elements of type submit.</dd>
 * 	<dt>:text</dt>
 * 		<dd>Matches all input elements of type text.</dd>
 * </dl>
 * 
 * <br><u>Form Filters:</u>
 * <dl compact>
 * 	<dt>:checked</dt>
 * 		<dd>Matches all elements that are checked.</dd>
 * 	<dt>:disabled</dt>
 * 		<dd>Matches all elements that are disabled.</dd>
 * 	<dt>:enabled</dt>
 * 		<dd>Matches all elements that are enabled.</dd>
 * 	<dt>:selected</dt>
 * 		<dd>Matches all elements that are selected.</dd>
 * </dl>
 * 
 * @param expr
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.find = function(expr) {};

/** (Traversing/Finding) Get a set of elements containing the unique next siblings of each of the given set of elements.
 * <br>`Next` only returns the very next sibling for each element, not all next siblings (see nextAll).
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.next = function(expr$) {};

/** (Traversing/Finding) Find all sibling elements after the current element.
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.nextAll = function(expr$) {};

/** (Traversing/Finding) Get a set of elements containing the unique parents of the matched set of elements.
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.parent = function(expr$) {};

/** (Traversing/Finding) Get a set of elements containing the unique ancestors of the matched set of elements (except for the root element).
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.parents = function(expr$) {};

/** (Traversing/Finding) Get a set of elements containing the unique previous siblings of each of the matched set of elements.
 * <br>Only the immediately previous sibling is returned, not all previous siblings. 
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.prev = function(expr$) {};

/** (Traversing/Finding) Find all sibling elements before the current element.
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.prevAll = function(expr$) {};

/** (Traversing/Finding) Get a set of elements containing all of the unique siblings of each of the matched set of elements.
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.siblings = function(expr$) {};

/** (Traversing/Chaining) Add the previous selection to the current selection.
 * <br>Useful for traversing elements, and then adding something that was matched before the last traversion.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.andSelf = function() {};

/** (Traversing/Chaining) Revert the most recent 'destructive' operation, changing the set of matched elements to its previous state (right before the destructive operation).
 * <br>A 'destructive' operation is any operation that changes the set of matched jQuery elements, which means any Traversing function that returns a jQuery object - including
 * 	add, andSelf, children, filter, find, map, next, nextAll, not, parent, parents, prev, prevAll, siblings, slice, and clone functions.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.end = function() {};

/* ====== Manipulation ====== */

/** (Manipulation/Inserting Inside) Append content to the inside of every matched element.
 * <br>This operation is similar to doing an appendChild to all the specified elements, adding them into the document.
 * @param content {String|Node|jQuery} Content to append to the target
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.append = function(content) {};

/** (Manipulation/Inserting Inside) Append all of the matched elements to another, specified, set of elements.
 * <br>This operation is, essentially, the reverse of doing a regular $(A).append(B), in that instead of appending B to A, you're appending A to B.
 * @param expr String Target to which the content will be appended.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.appendTo = function(expr) {};


/** (Manipulation/Inserting Inside) Prepend content to the inside of every matched element.
 * <br>This operation is the best way to insert elements inside, at the beginning, of all matched elements.
 * @param content {String|Node|jQuery} Content to prepend to the target
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.prepend = function(content) {};

/** (Manipulation/Inserting Inside) Prepend all of the matched elements to another, specified, set of elements.
 * <br>This operation is, essentially, the reverse of doing a regular $(A).prepend(B), in that instead of prepending B to A, you're prepending A to B.
 * @param expr String Target to which the content will be prepended.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.prependTo = function(expr) {};

/** (Manipulation/Inserting Outside) Insert content after each of the matched elements.
 * @param content {String|Node|jQuery} Content to insert after each target.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.after = function(content) {};

/** (Manipulation/Inserting Outside) Insert content before each of the matched elements.
 * @param content {String|Node|jQuery} Content to insert before each target.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.before = function(content) {};


/** (Manipulation/Inserting Outside) nsert all of the matched elements after another, specified, set of elements.
 * @param expr String Target after which the selected elements will be inserted
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.insertAfter = function(expr) {};

/** (Manipulation/Inserting Outside) Insert content before each of the matched elements.
 * @param expr String Target before which the selected elements will be inserted
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.insertBefore = function(expr) {};

/** (Manipulation/Inserting Around) Wrap all matched elements with a structure of other elements.
 * <br>This works by going through the first element provided (which is generated, on the fly, from the provided HTML) and finds the deepest ancestor element within its structure -- it is that element that will enwrap everything else.
 * <br>This does not work with elements that contain text. Any necessary text must be added after the wrapping is done.
 * @param html String A string of HTML that will be created on the fly and wrapped around the target
 * @param elem Node A DOM element that will be wrapped around the target.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.wrap = function(html$elem) {};

/** (Manipulation/Inserting Around) Wrap all the elements in the matched set into a single wrapper element.
 * <br>This is different from wrap() where each element in the matched set would get wrapped with an element.
 * @param html String A string of HTML that will be created on the fly and wrapped around the target
 * @param elem Node A DOM element that will be wrapped around the target.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.wrapAll = function(html$elem) {};

/** (Manipulation/Inserting Around) Wrap the inner child contents of each matched element (including text nodes) with an HTML structure.
 * @param html String A string of HTML that will be created on the fly and wrapped around the target
 * @param elem Node A DOM element that will be wrapped around the target.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.wrapInner = function(html$elem) {};

/** (Manipulation/Replacing) Replaces the elements matched by the specified selector with the collection.
 * <br>This function is the complement to replaceWith() which does the same task with the parameters reversed.
 * @param expr String Target that will be replaced with the collection
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.replaceAll = function(expr) {};

/** (Manipulation/Replacing) Replaces all matched elements with the specified HTML or DOM elements.
 * @param content {String|Node|jQuery} Replacement for the collection.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.replaceWith = function(content) {};

/** (Manipulation/Removing) Remove all child nodes from nodes in the collection.
 * <br>Will also remove all event handlers and internally cached data.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.empty = function() {};


/** (Manipulation/Removing) Removes all matched elements from the DOM.
 * <br>Will also remove all event handlers and internally cached data.
 * <br>This does NOT remove them from the jQuery object, allowing you to use the matched elements further. 
 * @param expr String [optional] An expression with which to filter the returned set.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.remove = function(expr$) {};

/** (Manipulation/Copying) Clone matched DOM Elements and select the clones.
 * @param with_events Boolean [optional] `true` will enable cloning the event handlers
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.clone = function(with_events$) {};

/* ====== CSS ====== */

/** (CSS/CSS) Get/Set style properties.
 * <br><u>1:</u> css(name) Returns a style property on the first matched element.
 * <br><u>2:</u> css(name, value) Sets a single style property to a value on all matched elements.
 * <br><u>3:</u> css(properties) Sets a key/value object as style properties to all matched elements.
 * @param name String The name of the property to get/set
 * @param value {String|Number} The value to set property to.
 * 		<br>If a number is provided, it is automatically converted into a pixel value.
 * @param properties Object Key/Value pairs to set as style properties
 * @return <u>1:</u> String, <u>2,3:</u> jQuery
 * @type jQuery
 */
jQuery.prototype.css = function(name$properties, value$) {};

/** (CSS/positioning) Get the current offset of the first matched element relative to the viewport.
 * <br>Works only with visible elements.
 * @return Object{top, left}
 * @type Object
 */
jQuery.prototype.offset = function() {};

/** Get/Set the element's height
 * <br><u>1:</u> height() Get the current computed, pixel, height of the first matched element (Node, Window, Document)
 * <br><u>2:</u> height(value) Set the CSS height of every matched element.
 * @param value {String|Number} The new CSS 'height' property.
 * 	<br>If no explicit unit was specified (like 'em' or '%') then "px" is concatenated to the value.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.height = function(value$) {};

/** Get/Set the element's width
 * <br><u>1:</u> height() Get the current computed, pixel, width of the first matched element (Node, Window, Document)
 * <br><u>2:</u> height(value) Set the CSS width of every matched element.
 * @param value {String|Number} The new CSS 'width' property.
 * 	<br>If no explicit unit was specified (like 'em' or '%') then "px" is concatenated to the value.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.width = function(value$) {};

/* ====== EVENTS ====== */

/** (Events/Page Load) Binds a function to be executed whenever the DOM is ready to be traversed and manipulated
 * <br>This is a solid replacement for using window.onload, and attaching a function to that.
 * <br>Please ensure you have no code in your <body> onload event handler, otherwise $(document).ready() may not fire.
 * <br>The callbacks are chained.
 * @param callback Function(jQueryFunc) The function to be executed when the DOM is ready. `this` is the document.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ready = function(callback) {};

/** (Events/Handling) Binds a handler to a particular event (like click) for each matched element. Can also bind custom events.
 * <br>The event handler is passed an event object that you can use to prevent default behaviour. To stop both default action and event bubbling, your handler has to return false. Note that this will prevent handlers on parent elements from running but not other jQuery handlers on the same element.
 * <br><u>1:</u> bind(type, callback)
 * <br><u>2:</u> bind(type, data, callback)
 * @param type String An event type: "click", "dblclick", "submit", etc. Custom event names may be trigger()ed.
 * @param data Object [optional] Additional data passed to the event handler as `event.data`.
 * @param callback Function(eventObject) A function to bind to the event on each of the set of matched elements. `this` is the DOM element triggered.
 * @return jQuery
 * @type jQuery
 * 
 * @example	$("p").bind("click", function(e){ $("span").text("Click happened! " + "( " + e.pageX + ", " + e.pageY + " )"); });
 * @example CustomEvent:
 * 		<br>$("p").bind("myCustomEvent", function(e, myName){ $(this).text(myName + ", hi there!"); });
 * 		<br>$("button").click(function () { $("p").trigger("myCustomEvent", [ "John" ]);  });
 */
jQuery.prototype.bind = function(type, data$, callback) {};

/** (Events/Handling) Binds a handler to a particular event to be executed <i>once</i> for each matched element.
 * @see jQuery.bind
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.one = function(type, data$, callback) {};

/** (Events/Handling) Trigger a type of event on every matched element.
 * <br>This will also cause the default action of the browser with the same name (if one exists) to be executed. For example, passing 'submit' to the trigger() function will also cause the browser to submit the form. This default action can be prevented by returning false from one of the functions bound to the event.
 * <br>You can also trigger custom events registered with bind.
 * @param type String An event type to trigger
 * @param data Array Additional data to pass as arguments (after the event object) to the event handler.
 * @see jQuery.bind
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.trigger = function(type, data) {};

/** (Events/Handling) This particular method triggers all bound event handlers on an element (for a specific event type) WITHOUT executing the browsers default actions.
 * @param type String An event type to trigger
 * @param data Array Additional data to pass as arguments (after the event object) to the event handler.
 * @see jQuery.bind
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.triggerHandler = function(type, data) {};

/** (Events/Handling) Removes bound events from each of the matched elements.
 * <br>Without any arguments, all bound events are removed.
 * <br>If the type is provided, all bound events of that type are removed.
 * @param type String [optional] A particular event type to unbind
 * @param callback Function [optional] A particular function to exclude from the Node's handlers
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.unbind = function(type$, callback$) {};

/** (Events/Interaction Helpers) Shortcut to assign handlers for mouse moving on and off an object.
 * <br>Additionally, checks are in place to see if the mouse is still within the specified element itself (for example, an image inside of a div), and if it is, it will continue to 'hover', and not move out (a common error in using a mouseout event handler).
 * @param over Function(eventObject) Fired when the mouse is moved on an object. `this` is the DOM Node
 * @param out Function(eventObject) Fired when the mouse is moved off an object. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.hover = function(over, out) {};

/** (Events/Interaction) Toggle between two function calls every other click.
 * <br> On every click: 1(), 2(), 1(), 2(), ...
 * <br>Use unbind("click") to remove.
 * <br><b>WITHOUT ARGUMENTS</b> this is a show()/hide() toggler!!!
 * @param callback1 Function(eventObject) Fired when the mouse is moved on an object. `this` is the DOM Node
 * @param callback2 Function(eventObject) Fired when the mouse is moved off an object. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.toggle = function(callback1, callback2) {};


/** (Events/Helpers) Bind/Fire the 'blur' event: when an element looses focus (mouse, tab).
 * <br><u>1:</u> blur() Triggers the 'blur' event of each matched element.
 * <br><u>2:</u> blur(callback) Bind a function to the 'blur' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.blur = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'change' event: when a control loses the input focus and its value has been modified since gaining focus.
 * <br><u>1:</u> change() Triggers the 'change' event of each matched element.
 * <br><u>2:</u> change(callback) Bind a function to the 'change' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.change = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'click' event: when the pointing device button is clicked over an element. A click is defined as a mousedown and mouseup over the same screen location: mousedown(), mouseup(), click()
 * <br><u>1:</u> click() Triggers the 'click' event of each matched element.
 * <br><u>2:</u> click(callback) Bind a function to the 'click' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.click = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'dblclick' event: when the pointing device button is double clicked over an element
 * <br><u>1:</u> dblclick() Triggers the 'dblclick' event of each matched element.
 * <br><u>2:</u> dblclick(callback) Bind a function to the 'dblclick' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.dblclick = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'error' event: a non-standart error. For document - is triggered when a JS error occurs. For images - on 404 image/broken data.
 * <br><u>1:</u> error() Triggers the 'error' event of each matched element.
 * <br><u>2:</u> error(callback) Bind a function to the 'error' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.error = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'focus' event: when an element receives focus either via the pointing device or by tab navigation.
 * <br><u>1:</u> focus() Triggers the 'focus' event of each matched element.
 * <br><u>2:</u> focus(callback) Bind a function to the 'focus' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.focus = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'keydown' event: when a key on the keyboard is pressed.
 * <br><u>1:</u> keydown() Triggers the 'keydown' event of each matched element.
 * <br><u>2:</u> keydown(callback) Bind a function to the 'keydown' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 *		<br>`eventObject.keyCode` is the code. There's a mess with it, see <a href="http://unixpapa.com/js/key.html">http://unixpapa.com/js/key.html</a>
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.keydown = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'keypress' event: when a key on the keyboard is "clicked": keydown, keyup, keypress
 * <br><u>1:</u> keypress() Triggers the 'keypress' event of each matched element.
 * <br><u>2:</u> keypress(callback) Bind a function to the 'keypress' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 *		<br>`eventObject.which` is the key code
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.keypress = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'keyup' event: when a key on the keyboard is released.
 * <br><u>1:</u> keyup() Triggers the 'keyup' event of each matched element.
 * <br><u>2:</u> keyup(callback) Bind a function to the 'keyup' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.keyup = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'select' event: when a user selects some text in a text field, including input and textarea.
 * <br><u>1:</u> select() Triggers the 'select' event of each matched element.
 * <br><u>2:</u> select(callback) Bind a function to the 'select' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.select = function(callback$) {};

/** (Events/Helpers) Bind/Fire the 'submit' event: when a form is submitted
 * <br><u>1:</u> submit() Triggers the 'submit' event of each matched element.
 * <br><u>2:</u> submit(callback) Bind a function to the 'submit' event of each matched element.
 * @param callback Function(eventObject) [optional] A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.submit = function(callback$) {};


/** (Events/Helpers) Fire the 'load' event: When bound to the window element, the event fires when the user agent finishes loading all content within a document, including window, frames, objects and images. For elements, it fires when the target element and all of its content has finished loading.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.load = function(callback) {};

/** (Events/Helpers) Fire the 'mousedown' event: when the pointing device button is pressed over an element.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.mousedown = function(callback) {};

/** (Events/Helpers) Fire the 'mousemove' event: when the pointing device is moved while it is over an element.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * 		<br>eventObject: pageX, pageY, clientX, clientY are the coords
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.mousemove = function(callback) {};

/** (Events/Helpers) Fire the 'mouseout' event: when the pointing device is moved away from an element.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * 		<br>eventObject: pageX, pageY, clientX, clientY are the coords
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.mouseout = function(callback) {};

/** (Events/Helpers) Fire the 'mouseover' event: when the pointing device is moved onto an element.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * 		<br>eventObject: pageX, pageY, clientX, clientY are the coords
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.mouseover = function(callback) {};

/** (Events/Helpers) Fire the 'mouseup' event: when the pointing device button is released over an element.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.mouseup = function(callback) {};

/** (Events/Helpers) Fire the 'resize' event: when a document view is resized
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.resize = function(callback) {};

/** (Events/Helpers) Fire the 'scroll' event: when a document view is scrolled.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.scroll = function(callback) {};

/** (Events/Helpers) Fire the 'unload' event: when an element is unloaded: e.g. page is closed, image is destroyed.
 * @param callback Function(eventObject) A function to bind to the event. `this` is the DOM Node.
 * 		<br>Return `false` to prevent calling the browser's default handler.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.unload = function(callback) {};

/* ====== EFFECTS ====== */

/** (Effects/Basics) Hides each of the set of matched elements if they are shown.
 * @param speed {String|Number} [optional] When specified - uses graceful animation to hide: number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.hide = function(speed$, callback$) {};

/** (Effects/Basics) Displays each of the set of matched elements if they are hidden.
 * @param speed {String|Number} [optional] When specified - uses graceful animation to display: number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.show = function(speed$, callback$) {};

/** (Effects/Basics) Toggles each of the set of matched elements.
 * <br>If they are shown, toggle makes them hidden. If they are hidden, toggle makes them shown.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.toggle = function() {};

/** (Effects/Sliding) Reveal all matched elements by adjusting their height and firing an optional callback after completion.
 * <br>Only the height is adjusted for this animation, causing all matched elements to be revealed in a "sliding" manner.
 * @param speed {String|Number} number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.slideDown = function(speed, callback$) {};

/** (Effects/Sliding) Hide all matched elements by adjusting their height and firing an optional callback after completion.
 * <br>Only the height is adjusted for this animation, causing all matched elements to be hidden in a "sliding" manner.
 * @param speed {String|Number} number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.slideUp = function(speed, callback$) {};

/** (Effects/Sliding) Toggle the visibility of all matched elements by adjusting their height and firing an optional callback after completion.
 * <br>Only the height is adjusted for this animation, causing all matched elements to be hidden or shown in a "sliding" manner.
 * @param speed {String|Number} number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.slideToggle = function(speed, callback$) {};

/** (Effects/Fading) Fade in all matched elements by adjusting their opacity and firing an optional callback after completion.
 * <br>Only the opacity is adjusted for this animation, meaning that all of the matched elements should already have some form of height and width associated with them.
 * @param speed {String|Number} number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.fadeIn = function(speed, callback$) {};

/** (Effects/Fading) Fade out all matched elements by adjusting their opacity and firing an optional callback after completion.
 * <br>Only the opacity is adjusted for this animation, meaning that all of the matched elements should already have some form of height and width associated with them.
 * @param speed {String|Number} number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.fadeOut = function(speed, callback$) {};

/** (Effects/Fading) Fade the opacity of all matched elements to a specified opacity and firing an optional callback after completion.
 * <br>Only the opacity is adjusted for this animation, meaning that all of the matched elements should already have some form of height and width associated with them.
 * @param speed {String|Number} number of msec to run the animation, or one of "slow", "normal", "fast"
 * @param opacity Number The opacity to fade to (a number [0,1])
 * @param callback Function() [optional] A function to be executed when the animation completes. Executes once for each animated element. `this` is the DOM Node
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.fadeTo = function(speed, opacity, callback$) {};

/** (Effects/Custom) A function for making your own, custom animations.
 * <br>The key aspect of this function is the object of style properties that will be animated, and to what end. Each key within the object represents a style property that will also be animated (for example: "height", "top", or "opacity").
 * <br><u>1:</u> animate(params, options)
 * <br><u>2:</u> animate(params, duration, easing, callback)
 * @param params Object A set of style attributes with wanted final values, animated from the current ones. e.g. { fontSize:"24px" }
 * 		<br>Names: Properties should be specified using camel case: e.g. marginLeft.
 * 		<br>Values: A number animates the style property as a transition from its current state to that new number. A string "hide", "show", or "toggle" constructs a default animation for that property.
 * 		<br>Relative animations: specify a "+=" or "-=" in front of the property value.
 * @param options Object A set of options to configure the animation.
 * 		<dl>
 * 		<dt>duration: String,Number = "normal"</dt>
 * 			<dd>A string representing one of the three predefined speeds ("slow", "normal", or "fast") or the number of milliseconds to run the animation (e.g. 1000).</dd>
 * 		<dt>easing: String = "swing"</dt>
 * 			<dd>The name of the easing effect that you want to use (Plugin Required). There are two built-in values, "linear" and "swing".</dd>
 * 		<dt>complete: Function()"</dt>
 * 			<dd>A function to be executed whenever the animation completes, executes once for each element animated against.</dd>
 * 		<dt>step: Function()</dt>
 * 			<dd>(?) A function to be executed on every animation step starts? this.options.step.call( this.elem, this.now, this );</dd>
 * 		<dt>queue: Boolean = true</dt>
 * 			<dd>Setting this to false will make the animation skip the queue and will begin running immediately.</dd>
 * 		</dl>
 * @param duration {String|Number}
 * @param easing String
 * @param complete Function
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.animate = function(params, options$duration, easing$, complete$) {};

/** (Effects/Custom) Removes a queued function from the front of the queue and executes it.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.dequeue = function(params, options) {};

/** (Effects/Custom) 
 * <br><u>1:</u> queue() Returns a reference to the first element's queue (which is an array of functions).
 * <br><u>2:</u> queue(callback) Adds a new function, to be executed, onto the end of the queue of all matched elements.
 * <br><u>3:</u> queue(queue) Replaces the queue of all matched element with this new queue (the array of functions).
 * @param callback Function() The function to add to the queue. `this` is the DOM Node. `jQuery(this).dequeue()` to continue the queue.
 * @param queue Array(Function) The queue to replace all the queues with. The functions have the same params and this value as queue(callback)
 * @return <u>1:</u> Array(Function), <u>2,3:</u> jQuery
 * @type jQuery
 */
jQuery.prototype.queue = function(callback$queue$) {};

/** (Effects/Custom)  Stops all the currently running animations on all the specified elements.  If any animations are queued to run, then they will begin immediately.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.stop = function() {};

/* ====== AJAX ====== */

/** (Ajax/Requests) Load a remote page using an HTTP request.
 * <br>This is a low-level function without much functionality, such as errors & callbacks;
 * 
 * <br><u>WARNING:</u> All 'POST' are converted to 'GET' when `script` is the `dataType` (because it loads script as a dom script tag)
 * <br><u>NOTE:</u> When specifyint the `dataType`, make sure the MIME responce is correct (text/xml, etc). Sending wrong MIME type may lead to strange problems.
 * 
 * <br><u>FEATURE:</u> JSON data can be loaded from another domain using a JSONP callback: "myurl?callback=?" ('?' is auto-replaced with the correct callback), or a `dataType`="jsonp".
 * 		see <a href="http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/">JSONP website</a>
 * 
 * @param options Object Key/Value pairs that are used to initialize and handle the request.
 * 		<dl>
 * 			<dt>type: String = "GET"</dt>
 * 				<dd>The type of request to make: "POST", "GET". Other can be used, but not supported by some browsers.</dd>
 * 			<dt>url: String = [the current page]</dt>
 * 				<dd>The URL to request.</dd>
 * 			<dt>data: Object|String</dt>
 * 				<dd>Data to be sent to the server.
 * 					<br>It is converted to a query string, if not already a string. It's appended to the url for GET-requests. (See `processData` option to prevent this automatic processing)
 * 					<br>Object must be Key/Value pairs.
 * 					<br>If value is an Array, jQuery serializes multiple values with same key i.e. {foo:["bar1", "bar2"]} becomes '&foo=bar1&foo=bar2'.</dd>
 * 			<dt>dataType: String="xml|html" (guessed)</dt>
 * 				<dd>The type of data that you're expecting back from the server.
 * 					<br>If none is specified, jQuery will intelligently pass either responseXML or responseText to your success callback, based on the MIME type of the response.
 * 					<br>"xml": Returns a XML document that can be processed via jQuery
 * 					<br>"html": Returns HTML as plain text (<u>NOTE:</u> the script tags are evaluated).
 * 					<br>"script": Evaluates the response as JavaScript and returns it as plain text. (<u>NOTE:</u> will turn POST into GET! Disables caching unless option "cache" is used)
 * 					<br>"json": Evaluates the response as JSON and returns a JavaScript Object
 * 					<br>"jsonp": Loads in a JSON block using JSONP. (Will add an extra "?callback=?" to the end of your URL to specify the callback). "callback=" string can be overriden by the `jsonp` option.
 * 					<br>"text": A plain text string.</dd>
 * 			<dt>processData: Boolean = true</dt>
 * 				<dd>Set false to disable the data reprocessing, when it's not a string: when you want to send an unprocessed DOM Document</dd>
 * 			<dt>beforeSend: Function(XMLHttpRequest)</dt>
 * 				<dd>A pre-call to modify the XMLHttpRequest object before it is sent. Can set custom headers, etc.</dd>
 * 			<dt>error: Function(XMLHttpRequest, textStatus, errorThrown)</dt>
 * 				<dd>A function to be called if the request fails. errorThrown is an exception object, if any</dd>
 * 			<dt>success: Function(data, textStatus)</dt>
 * 				<dd>A function to be called if the request succeeds. `data` is formatted according to `dataType` parameter.</dd>
 * 			<dt>complete: Function(XMLHttpRequest, textStatus)</dt>
 * 				<dd>A function to be called when the request finishes (ok,fail - whatever).</dd>
 * 			<dt>async: Boolean = true</dt>
 * 				<dd>Whether you need asynchronous requests. Sync blocks the code, and also may lock the browser!!!</dd>
 * 			<dt>timeout: Number</dt>
 * 				<dd>Set a local timeout in ms for the request. This will override the global timeout, if one is set via $.ajaxSetup</dd>
 * 			<dt>cache: Boolean = true</dt>
 * 				<dd>False will force the pages that you request not to be cached by the browser.</dd>
 * 			<dt>global: Boolean = true</dt>
 * 				<dd>Whether to trigger global AJAX event handlers for this request.
 * 					<br>`false` will prevent the global handlers like ajaxStart or ajaxStop from being triggered.</dd>
 * 			<dt>jsonp: Boolean = true</dt>
 * 				<dd>Override the callback function name in a jsonp request. This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url for a GET or the data for a POST.</dd>
 * 			<dt>contentType: String = "application/x-www-form-urlencoded"</dt>
 * 				<dd>When sending data to the server, use this content-type.</dd>
 * 			<dt>ifModified: Boolean = false</dt>
 * 				<dd>Allow the request to be successful only if the response has changed since the last request. This checks the 'Last-Modified' header.</dd>
 * 		</dl>
 * @return XMLHttpRequest that it creates. No need to work with it directly, but it's possible.
 * @type XMLHttpRequest
 */
jQueryStatic.prototype.ajax = function(options) {};

/** (Ajax/Requests) Load a remote page using an HTTP GET request.
 * @param url String The URL of the page to load.
 * @param data Object Key/Value pairs to send to the server.
 * @param callback Function(data, textStatus) Will be executed when the data is loaded successfully. `this` is the options for the request.
 * @return XMLHttpRequest
 * @type XMLHttpRequest
 */
jQueryStatic.prototype.get = function(url, data, callback) {};

/** (Ajax/Requests) Load a remote page using an HTTP POST request.
 * @param url String The URL of the page to load.
 * @param data Object Key/Value pairs to send to the server.
 * @param callback Function(data, textStatus) Will be executed when the data is loaded successfully. `this` is the options for the request.
 * @return XMLHttpRequest
 * @type XMLHttpRequest
 */
jQueryStatic.prototype.post = function(url, data, callback) {};

/** (Ajax/Requests) Load JSON data using an HTTP GET request.
 * <br>Here you must specify the JSONP callback, which can be done like so: "myurl?callback=?". jQuery automatically replaces the ? with the correct method name to call, calling your specified callback.
 * @see <a href="http://bob.pythonmac.org/archives/2005/12/05/remote-json-jsonp/">JSONP</a>
 * @param url String The URL of the page to load.
 * @param data Object Key/Value pairs to send to the server.
 * @param callback Function(data, textStatus) Will be executed when the data is loaded successfully. `this` is the options for the request.
 * @return XMLHttpRequest
 * @type XMLHttpRequest
 */
jQueryStatic.prototype.getJSON = function(url, data, callback) {};

/** (Ajax/Requests) Loads, and executes, a JavaScript file <u>from any domain</u> using an HTTP GET request.
 * <br><u>WARNING:</u> Safari 2 and older is unable to evaluate scripts in a global context synchronously. If you load functions via getScript, make sure to call them after a delay.
 * @param url String The URL of the page to load.
 * @param callback Function(data, textStatus) Will be executed when the data is loaded successfully. `this` is the options for the request.
 * @return XMLHttpRequest
 * @type XMLHttpRequest
 */
jQueryStatic.prototype.getScript = function(url, callback) {};

/** (Ajax/Requests) Load HTML from a remote file and inject it into the DOM.
 * <br>A GET request will be performed by default - but if you pass in any extra parameters then a POST will occur.
 * @param url String The URL of the HTML page to load.
 * 		<br>You can now specify a jQuery selector in the URL: will filter the incoming HTML document, only injecting the elements that match the selector.
 * 		<br>The syntax looks something like "url #some > selector".
 * @param data Object Key/Value pairs to send to the server.
 * @param callback Function(data, textStatus, XMLHttpRequest) Will be executed when the data is loaded successfully. `this` is the current DOM Node.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.load = function(url, data, callback) {};

/** (Ajax/Events) Attach a function to be executed whenever an AJAX request completes.
 * @param callback Function(event, XMLHttpRequest, ajaxOptions) The function to execute. `this` is a DOM Node listening.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ajaxComplete = function(callback) {};

/** (Ajax/Events) Attach a function to be executed whenever an AJAX request fails.
 * @param callback Function(event, XMLHttpRequest, ajaxOptions, thrownError) The function to execute. `this` is a DOM Node listening. `thrownError` is an exception object, if any,
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ajaxError = function(callback) {};

/** (Ajax/Events) Attach a function to be executed before an AJAX request is sent.
 * @param callback Function(event, XMLHttpRequest, ajaxOptions) The function to execute. `this` is a DOM Node listening.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ajaxSend = function(callback) {};

/** (Ajax/Events) Attach a function to be executed whenever an AJAX request begins and there is none already active. 
 * @param callback Function() The function to execute. `this` is a DOM Node listening.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ajaxStart = function(callback) {};

/** (Ajax/Events) Attach a function to be executed whenever all AJAX requests have ended.
 * @param callback Function() The function to execute. `this` is a DOM Node listening.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ajaxStop = function(callback) {};

/** (Ajax/Events) Attach a function to be executed whenever an AJAX request completes successfully. 
 * @param callback Function(event, XMLHttpRequest, ajaxOptions) The function to execute. `this` is a DOM Node listening.
 * @return jQuery
 * @type jQuery
 */
jQuery.prototype.ajaxSuccess = function(callback) {};

/** (Ajax/Misc) Setup global settings for AJAX requests.
 * @see $.ajax for a description of all available options.
 * @param options Object Key/Value pairs that are used to initialize and handle the request.
 */
jQueryStatic.prototype.ajaxSetup = function(options) {};

/** (Ajax/Misc) Serializes a set of input elements into a string of data. This will serialize all given elements.
 * @example Serialize a form to a query string, that could be sent to a server in an Ajax request.
 * 	<br>var str = $("form").serialize(); 
 * @return String
 * @type String
 */
jQuery.prototype.serialize = function() {};

/** (Ajax/Misc) Serializes all forms and form elements (like $().serialize), but returns a JSON data structure for you to work with.
 * @example var fields = $(":input").serializeArray(); 
 * @return Object
 * @type Object
 */
jQuery.prototype.serializeArray = function() {};

/* ====== UTILITIES ====== */

/** (Utilities/User Agent) States if the current page, in the user's browser, is being rendered using the 
 * @type Boolean
 */
jQueryStatic.prototype.boxModel = false;

/** (Utilities/User Agent) Contains flags for the useragent, read from navigator.userAgent.
 * This property is available before the DOM is ready, therefore you can use it to add ready events only for certain browsers.
 * @type Object
 */
jQueryStatic.prototype.browser = {version: "0.0", safari: false, opera: false, msie:false, mozilla: false};

/** (Utilities/Array&Object Operations) A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
 * @param object {Object|Array} The object to iterate
 * @param callback Function(index, element) The function that will be executed on every element.
 * 		<br>`this` is the value of an element
 * 		<br>return `false` to delete it, `true` to save.
 * @return Object
 * @type Object
 */
jQueryStatic.prototype.each = function(object, callback) {};

/** (Utilities/Array&Object Operations) Extend one object with one or more others, returning the original, modified, object.
 * <br>This is a great utility for simple inheritance.
 * @param target Object The object to extend
 * @param objectN Object A number of objects that will be merged into the first.
 * @return Object
 * @type Object
 */
jQueryStatic.prototype.extend = function(target, object1, objectN) {};

/** (Utilities/Array&Object Operations) Filter items out of an array, by using a filter function.
 * @param array Array The array to find items in.
 * @param callback Function(element, index) The function to process each element against. 
 * 		<br>return `true` to keep the element, `false` to delete it.
 * 		<br>The `callback` param can be a 'lambda'-function: "a>0" , with 'a' the element, and 'i' the index.
 * @param invert Boolean [optional] When `true` - the array returns deleted elements, otherwise (`false` or skipped) - returnes the new array of saved elements.
 * @return Array
 * @type Array
 */
jQueryStatic.prototype.grep = function(array, callback, invert) {};

/** (Utilities/Array&Object Operations) Determine the index of the first parameter in the Array (-1 if not found).
 * @param value Any Value to see if it exists in the array
 * @param array Array To look thru for the value.
 * @return Number
 * @type Number
 */
jQueryStatic.prototype.inArray = function(value, array) {};

/** (Utilities/Array&Object Operations) Turns an array-like object into a true array.
 * <br>Array-like objects have a length property and its properties are numbered from 0 to length - 1. Typically it will be unnecessary to use this function if you are using jQuery which uses this function internally.
 * @param obj Object Array-like object to turn into an actual array.
 * @return Array
 * @type Array
 */
jQueryStatic.prototype.makeArray = function(obj) {};

/** (Utilities/Array&Object Operations) Translate all items in an array to another array of items.
 * <br>The translation function that is provided to this method is called for each item in the array and is passed one argument: The item to be translated.
 * @param array Array The array to translate
 * @param callback Function(element, index) The function to process each element against. 
 * 		<br>Returns the new value. Return `null` to remove the item
 * 		<br>The `callback` param can be a 'lambda'-function: "a>0" , with 'a' the element, and 'i' the index.
 * @return Array
 * @type Array
 */
jQueryStatic.prototype.map = function(array, callback) {};

/** (Utilities/Array&Object Operations) Remove all duplicate elements from an array of elements.
 * @param array Array The array to translate
 * @return Array
 * @type Array
 */
jQueryStatic.prototype.unique = function(array) {};

/** (Utilities/Test Operations) Determine if the parameter passed is a function.
 * @param obj Object Object to test whether is a function.
 * @return Array
 * @type Array
 */
jQueryStatic.prototype.isFunction = function(obj) {};

/** (Utilities/Test Operations) Remove the whitespace from the beginning and end of a string.
 * @param str String The string to trim.
 * @return Array
 * @type Array
 */
jQueryStatic.prototype.trim = function(str) {};

/* ====== INTERNALS ====== */

/** (Internals/Data Cache) Data storage. This function can be useful for attaching data to elements without having to create a new expando. It also isn't limited to a string. The value can be any format.
 * <br>To avoid conflicts in plugins, it is usually effective to store one object using the plugin name and put all the necessary information in that object.
 * <br><u>1:</u> data(elem) Returns a unique ID for the element.
 * <br><u>2:</u> data(elem, name) Returns value at named data store for the element.
 * <br><u>3:</u> data(elem, name, value) Stores the value in the named spot and also returns the value.
 * @param elem Node DOM Element of interest
 * @param name String [optional] Name of the data to store.
 * @param value Any [optional] Value to be stored
 * @return <u>1:</u> Number, <u>2,3:</u> Any
 * @type Object
 */
jQueryStatic.prototype.data = function(elem, name$, value$) {};

/** (Internals/Data Cache) Data removal
 * <br><u>1:</u> removeData(elem) Remove the expando attribute that allows data storage on an element.
 * <br><u>2:</u> removeData(elem, name) Removes just this one named data store.
 * @param elem Node The element to delete data in.
 * @param name String [optional] The name of the data store property to remove
 */
jQueryStatic.prototype.removeData = function(elem, name$) {};

/** (Internals/Ajax) Serializes an array of form elements or an object
 * @param obj {Object|Array|jQuery} An object by key/value pairs.
 * @return String
 * @type String
 */
jQueryStatic.prototype.param = function(obj) {};
