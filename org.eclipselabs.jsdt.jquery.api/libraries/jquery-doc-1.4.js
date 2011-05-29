/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 */
function jQuery() {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 */
function $() {};
/**
 * Return a number representing the current time.
 * @since 1.4
 * @returns {Number}
 */
jQuery.now = function() {};
/**
 * Return a number representing the current time.
 * @since 1.4
 * @returns {Number}
 */
$.now = function() {};
/**
 * A string containing the jQuery version number.
 * @type {String}
 */
jQuery.prototype.jquery = "";
/**
 * A string containing the jQuery version number.
 * @type {String}
 */
$.prototype.jquery = "";
/**
 * Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients.
 * @type {Object}
 */
jQuery.cssHooks = {};
/**
 * Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients.
 * @type {Object}
 */
$.cssHooks = {};
/**
 * Display or hide the matched elements by animating their opacity.
 * @since 1.4
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.fadeToggle = function(duration, easing, callback) {};
/**
 * Display or hide the matched elements by animating their opacity.
 * @since 1.4
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.fadeToggle = function(duration, easing, callback) {};
/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @since 1.4
 * @param {Object} obj Object to get the internal JavaScript [[Class]] of.
 * @returns {String}
 */
jQuery.type = function(obj) {};
/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @since 1.4
 * @param {Object} obj Object to get the internal JavaScript [[Class]] of.
 * @returns {String}
 */
$.type = function(obj) {};
/**
 * Determine whether the argument is a window.
 * @since 1.4
 * @param {Object} obj Object to test whether or not it is a window.
 * @returns {Boolean}
 */
jQuery.isWindow = function(obj) {};
/**
 * Determine whether the argument is a window.
 * @since 1.4
 * @param {Object} obj Object to test whether or not it is a window.
 * @returns {Boolean}
 */
$.isWindow = function(obj) {};
/**
 * Bind two or more handlers to the matched elements, to be executed on alternate clicks.
 * @since 1.0
 * @param {Function} handler A function to execute every even time the element is clicked.
 * @param {Function} handler A function to execute every odd time the element is clicked.
 * @param {Function} [handler] Additional handlers to cycle through after clicks.
 * @returns {jQuery}
 */
jQuery.prototype.toggle = function(handler, handler, handler) {};
/**
 * Bind two or more handlers to the matched elements, to be executed on alternate clicks.
 * @since 1.0
 * @param {Function} handler A function to execute every even time the element is clicked.
 * @param {Function} handler A function to execute every odd time the element is clicked.
 * @param {Function} [handler] Additional handlers to cycle through after clicks.
 * @returns {jQuery}
 */
$.prototype.toggle = function(handler, handler, handler) {};
/**
 * Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.undelegate = function() {};
/**
 * Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
 * @since 1.4
 * @returns {jQuery}
 */
$.prototype.undelegate = function() {};
/**
 * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
 * @since 1.4
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {String} eventType A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.delegate = function(selector, eventType, handler) {};
/**
 * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
 * @since 1.4
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {String} eventType A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.delegate = function(selector, eventType, handler) {};
/**
 * Takes a string and throws an exception containing it.
 * @since 1.4
 * @param {String} message The message to send out.
 */
jQuery.error = function(message) {};
/**
 * Takes a string and throws an exception containing it.
 * @since 1.4
 * @param {String} message The message to send out.
 */
$.error = function(message) {};
/**
 * Takes a well-formed JSON string and returns the resulting JavaScript object.
 * @since 1.4
 * @param {String} json The JSON string to parse.
 * @returns {Object}
 */
jQuery.parseJSON = function(json) {};
/**
 * Takes a well-formed JSON string and returns the resulting JavaScript object.
 * @since 1.4
 * @param {String} json The JSON string to parse.
 * @returns {Object}
 */
$.parseJSON = function(json) {};
/**
 * Takes a function and returns a new one that will always have a particular context.
 * @since 1.4
 * @param {Function} func The function whose context will be changed.
 * @param {Object} context The object to which the context (<code>this</code>) of the function should be set.
 * @returns {Function}
 */
jQuery.proxy = function(func, context) {};
/**
 * Takes a function and returns a new one that will always have a particular context.
 * @since 1.4
 * @param {Function} func The function whose context will be changed.
 * @param {Object} context The object to which the context (<code>this</code>) of the function should be set.
 * @returns {Function}
 */
$.proxy = function(func, context) {};
/**
 * Bind an event handler to the "focusout" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.focusout = function(handler) {};
/**
 * Bind an event handler to the "focusout" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.focusout = function(handler) {};
/**
 * Bind an event handler to the "focusin" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.focusin = function(handler) {};
/**
 * Bind an event handler to the "focusin" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.focusin = function(handler) {};
/**
 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
 * @since 1.4
 * @param {String} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.has = function(selector) {};
/**
 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
 * @since 1.4
 * @param {String} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.has = function(selector) {};
/**
 * Check to see if a DOM node is within another DOM node.
 * @since 1.4
 * @param {Element} container The DOM element that may contain the other element.
 * @param {Element} contained The DOM node that may be contained by the other element.
 * @returns {Boolean}
 */
jQuery.contains = function(container, contained) {};
/**
 * Check to see if a DOM node is within another DOM node.
 * @since 1.4
 * @param {Element} container The DOM element that may contain the other element.
 * @param {Element} contained The DOM node that may be contained by the other element.
 * @returns {Boolean}
 */
$.contains = function(container, contained) {};
/**
 * An empty function.
 * @since 1.4
 * @returns {Function}
 */
jQuery.noop = function() {};
/**
 * An empty function.
 * @since 1.4
 * @returns {Function}
 */
$.noop = function() {};
/**
 * Set a timer to delay execution of subsequent items in the queue.
 * @since 1.4
 * @param {Integer} duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.prototype.delay = function(duration, queueName) {};
/**
 * Set a timer to delay execution of subsequent items in the queue.
 * @since 1.4
 * @param {Integer} duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
$.prototype.delay = function(duration, queueName) {};
/**
 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching ancestor elements.
 * @returns {jQuery}
 */
jQuery.prototype.parentsUntil = function(selector) {};
/**
 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching ancestor elements.
 * @returns {jQuery}
 */
$.prototype.parentsUntil = function(selector) {};
/**
 * Get all preceding siblings of each element up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching preceding sibling elements.
 * @returns {jQuery}
 */
jQuery.prototype.prevUntil = function(selector) {};
/**
 * Get all preceding siblings of each element up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching preceding sibling elements.
 * @returns {jQuery}
 */
$.prototype.prevUntil = function(selector) {};
/**
 * Get all following siblings of each element up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching following sibling elements.
 * @returns {jQuery}
 */
jQuery.prototype.nextUntil = function(selector) {};
/**
 * Get all following siblings of each element up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching following sibling elements.
 * @returns {jQuery}
 */
$.prototype.nextUntil = function(selector) {};
/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * @since 1.0
 * @param {Function} func A function to execute for each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.each = function(func) {};
/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * @since 1.0
 * @param {Function} func A function to execute for each matched element.
 * @returns {jQuery}
 */
$.prototype.each = function(func) {};
/**
 * Add a collection of DOM elements onto the jQuery stack.
 * @since 1.0
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @returns {jQuery}
 */
jQuery.prototype.pushStack = function(elements) {};
/**
 * Add a collection of DOM elements onto the jQuery stack.
 * @since 1.0
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @returns {jQuery}
 */
$.prototype.pushStack = function(elements) {};
/**
 * Execute some JavaScript code globally.
 * @since 1.0
 * @param {String} code The JavaScript code to execute.
 */
jQuery.globalEval = function(code) {};
/**
 * Execute some JavaScript code globally.
 * @since 1.0
 * @param {String} code The JavaScript code to execute.
 */
$.globalEval = function(code) {};
/**
 * Check to see if a DOM node is within an XML document (or is an XML document).
 * @since 1.1
 * @param {Element} node The DOM node that will be checked to see if it's in an XML document.
 * @returns {Boolean}
 */
jQuery.isXMLDoc = function(node) {};
/**
 * Check to see if a DOM node is within an XML document (or is an XML document).
 * @since 1.1
 * @param {Element} node The DOM node that will be checked to see if it's in an XML document.
 * @returns {Boolean}
 */
$.isXMLDoc = function(node) {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {Element} element A DOM element from which to remove data.
 * @param {String} [name] A string naming the piece of data to remove.
 * @returns {jQuery}
 */
jQuery.removeData = function(element, name) {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {Element} element A DOM element from which to remove data.
 * @param {String} [name] A string naming the piece of data to remove.
 * @returns {jQuery}
 */
$.removeData = function(element, name) {};
/**
 * Store arbitrary data associated with the specified element. Returns the value that was set.
 * @since 1.2
 * @param {Element} element The DOM element to associate with the data.
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value.
 * @returns {Object}
 */
jQuery.data = function(element, key, value) {};
/**
 * Store arbitrary data associated with the specified element. Returns the value that was set.
 * @since 1.2
 * @param {Element} element The DOM element to associate with the data.
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value.
 * @returns {Object}
 */
$.data = function(element, key, value) {};
/**
 * Returns value at named data store for the element, as set by <code>jQuery.data(element, name, value)</code>, or the full data store for the element.
 * @since 1.2
 * @param {Element} element The DOM element to query for the data.
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
jQuery.data = function(element, key) {};
/**
 * Returns value at named data store for the element, as set by <code>jQuery.data(element, name, value)</code>, or the full data store for the element.
 * @since 1.2
 * @param {Element} element The DOM element to query for the data.
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
$.data = function(element, key) {};
/**
 * Execute the next function on the queue for the matched element.
 * @since 1.3
 * @param {Element} element A DOM element from which to remove and execute a queued function.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.dequeue = function(element, queueName) {};
/**
 * Execute the next function on the queue for the matched element.
 * @since 1.3
 * @param {Element} element A DOM element from which to remove and execute a queued function.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
$.dequeue = function(element, queueName) {};
/**
 * Show the queue of functions to be executed on the matched element.
 * @since 1.3
 * @param {Element} element A DOM element to inspect for an attached queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
jQuery.queue = function(element, queueName) {};
/**
 * Show the queue of functions to be executed on the matched element.
 * @since 1.3
 * @param {Element} element A DOM element to inspect for an attached queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
$.queue = function(element, queueName) {};
/**
 * Manipulate the queue of functions to be executed on the matched element.
 * @since 1.3
 * @param {Element} element A DOM element where the array of queued functions is attached.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * @returns {jQuery}
 */
jQuery.queue = function(element, queueName, newQueue) {};
/**
 * Manipulate the queue of functions to be executed on the matched element.
 * @since 1.3
 * @param {Element} element A DOM element where the array of queued functions is attached.
 * @param {String} queueName A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * @returns {jQuery}
 */
$.queue = function(element, queueName, newQueue) {};
/**
 * Remove from the queue all items that have not yet been run.
 * @since 1.4
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.prototype.clearQueue = function(queueName) {};
/**
 * Remove from the queue all items that have not yet been run.
 * @since 1.4
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
$.prototype.clearQueue = function(queueName) {};
/**
 * Retrieve all the DOM elements contained in the jQuery set, as an array.
 * @since 1.4
 * @returns {Array}
 */
jQuery.prototype.toArray = function() {};
/**
 * Retrieve all the DOM elements contained in the jQuery set, as an array.
 * @since 1.4
 * @returns {Array}
 */
$.prototype.toArray = function() {};
/**
 * Check to see if an object is empty (contains no properties).
 * @since 1.4
 * @param {Object} object The object that will be checked to see if it's empty.
 * @returns {Boolean}
 */
jQuery.isEmptyObject = function(object) {};
/**
 * Check to see if an object is empty (contains no properties).
 * @since 1.4
 * @param {Object} object The object that will be checked to see if it's empty.
 * @returns {Boolean}
 */
$.isEmptyObject = function(object) {};
/**
 * Check to see if an object is a plain object (created using "{}" or "new Object").
 * @since 1.4
 * @param {Object} object The object that will be checked to see if it's a plain object.
 * @returns {Boolean}
 */
jQuery.isPlainObject = function(object) {};
/**
 * Check to see if an object is a plain object (created using "{}" or "new Object").
 * @since 1.4
 * @param {Object} object The object that will be checked to see if it's a plain object.
 * @returns {Boolean}
 */
$.isPlainObject = function(object) {};
/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.keydown = function(handler) {};
/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.keydown = function(handler) {};
/**
 * Search for a given element from among the matched elements.
 * @since 1.4
 * @returns {Number}
 */
jQuery.prototype.index = function() {};
/**
 * Search for a given element from among the matched elements.
 * @since 1.4
 * @returns {Number}
 */
$.prototype.index = function() {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {String} [name] A string naming the piece of data to delete.
 * @returns {jQuery}
 */
jQuery.prototype.removeData = function(name) {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {String} [name] A string naming the piece of data to delete.
 * @returns {jQuery}
 */
$.prototype.removeData = function(name) {};
/**
 * Store arbitrary data associated with the matched elements.
 * @since 1.2
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value; it can be any Javascript type including Array or Object.
 * @returns {jQuery}
 */
jQuery.prototype.data = function(key, value) {};
/**
 * Store arbitrary data associated with the matched elements.
 * @since 1.2
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value; it can be any Javascript type including Array or Object.
 * @returns {jQuery}
 */
$.prototype.data = function(key, value) {};
/**
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * @since 1.2
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
jQuery.prototype.data = function(key) {};
/**
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * @since 1.2
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
$.prototype.data = function(key) {};
/**
 * Retrieve the DOM elements matched by the jQuery object.
 * @since 1.0
 * @param {Number} [index] A zero-based integer indicating which element to retrieve.
 * @returns {Element|Array}
 */
jQuery.prototype.get = function(index) {};
/**
 * Retrieve the DOM elements matched by the jQuery object.
 * @since 1.0
 * @param {Number} [index] A zero-based integer indicating which element to retrieve.
 * @returns {Element|Array}
 */
$.prototype.get = function(index) {};
/**
 * Return the number of elements in the jQuery object.
 * @since 1.0
 * @returns {Number}
 */
jQuery.prototype.size = function() {};
/**
 * Return the number of elements in the jQuery object.
 * @since 1.0
 * @returns {Number}
 */
$.prototype.size = function() {};
/**
 * Relinquish jQuery's control of the <code>$</code> variable.
 * @since 1.0
 * @param {Boolean} [removeAll] A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
 * @returns {Object}
 */
jQuery.noConflict = function(removeAll) {};
/**
 * Relinquish jQuery's control of the <code>$</code> variable.
 * @since 1.0
 * @param {Boolean} [removeAll] A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
 * @returns {Object}
 */
$.noConflict = function(removeAll) {};
/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.scroll = function(handler) {};
/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.scroll = function(handler) {};
/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.resize = function(handler) {};
/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.resize = function(handler) {};
/**
 * Execute the next function on the queue for the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.prototype.dequeue = function(queueName) {};
/**
 * Execute the next function on the queue for the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
$.prototype.dequeue = function(queueName) {};
/**
 * Show the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
jQuery.prototype.queue = function(queueName) {};
/**
 * Show the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
$.prototype.queue = function(queueName) {};
/**
 * Manipulate the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * @returns {jQuery}
 */
jQuery.prototype.queue = function(queueName, newQueue) {};
/**
 * Manipulate the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * @returns {jQuery}
 */
$.prototype.queue = function(queueName, newQueue) {};
/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.keyup = function(handler) {};
/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.keyup = function(handler) {};
/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.keypress = function(handler) {};
/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.keypress = function(handler) {};
/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.submit = function(handler) {};
/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.submit = function(handler) {};
/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.select = function(handler) {};
/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.select = function(handler) {};
/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.change = function(handler) {};
/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.change = function(handler) {};
/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.blur = function(handler) {};
/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.blur = function(handler) {};
/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.focus = function(handler) {};
/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.focus = function(handler) {};
/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mousemove = function(handler) {};
/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mousemove = function(handler) {};
/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * @since 1.0
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * @returns {jQuery}
 */
jQuery.prototype.hover = function(handlerIn, handlerOut) {};
/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * @since 1.0
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * @returns {jQuery}
 */
$.prototype.hover = function(handlerIn, handlerOut) {};
/**
 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
 * @since 1.4
 * @param {Function} handlerInOut A function to execute when the mouse pointer enters or leaves the element.
 * @returns {jQuery}
 */
jQuery.prototype.hover = function(handlerInOut) {};
/**
 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
 * @since 1.4
 * @param {Function} handlerInOut A function to execute when the mouse pointer enters or leaves the element.
 * @returns {jQuery}
 */
$.prototype.hover = function(handlerInOut) {};
/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseleave = function(handler) {};
/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mouseleave = function(handler) {};
/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseenter = function(handler) {};
/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mouseenter = function(handler) {};
/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseout = function(handler) {};
/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mouseout = function(handler) {};
/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseover = function(handler) {};
/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mouseover = function(handler) {};
/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.dblclick = function(handler) {};
/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.dblclick = function(handler) {};
/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.click = function(handler) {};
/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.click = function(handler) {};
/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseup = function(handler) {};
/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mouseup = function(handler) {};
/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mousedown = function(handler) {};
/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.mousedown = function(handler) {};
/**
 * Bind an event handler to the "error" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.error = function(handler) {};
/**
 * Bind an event handler to the "error" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
$.prototype.error = function(handler) {};
/**
 * Bind an event handler to the "unload" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.unload = function(handler) {};
/**
 * Bind an event handler to the "unload" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
$.prototype.unload = function(handler) {};
/**
 * Bind an event handler to the "load" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.load = function(handler) {};
/**
 * Bind an event handler to the "load" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
$.prototype.load = function(handler) {};
/**
 * Specify a function to execute when the DOM is fully loaded.
 * @since 1.0
 * @param {Function} handler A function to execute after the DOM is ready.
 * @returns {jQuery}
 */
jQuery.prototype.ready = function(handler) {};
/**
 * Specify a function to execute when the DOM is fully loaded.
 * @since 1.0
 * @param {Function} handler A function to execute after the DOM is ready.
 * @returns {jQuery}
 */
$.prototype.ready = function(handler) {};
/**
 * Remove all event handlers previously attached using <code>.live()</code> from the elements.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.die = function() {};
/**
 * Remove all event handlers previously attached using <code>.live()</code> from the elements.
 * @since 1.4
 * @returns {jQuery}
 */
$.prototype.die = function() {};
/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * @since 1.3
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>keydown</code>.
 * @param {String} [handler] The function that is no longer to be executed.
 * @returns {jQuery}
 */
jQuery.prototype.die = function(eventType, handler) {};
/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * @since 1.3
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>keydown</code>.
 * @param {String} [handler] The function that is no longer to be executed.
 * @returns {jQuery}
 */
$.prototype.die = function(eventType, handler) {};
/**
 * Contains flags for the useragent, read from navigator.userAgent. <strong>We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery.</strong> 
 * @type {Map}
 */
jQuery.browser = {};
/**
 * Contains flags for the useragent, read from navigator.userAgent. <strong>We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery.</strong> 
 * @type {Map}
 */
$.browser = {};
/**
 * Attach a handler to the event for all elements which match the current selector, now and in the future.
 * @since 1.3
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names, as well.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.live = function(eventType, handler) {};
/**
 * Attach a handler to the event for all elements which match the current selector, now and in the future.
 * @since 1.3
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names, as well.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.live = function(eventType, handler) {};
/**
 * Execute all handlers attached to an element for an event.
 * @since 1.2
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {Object}
 */
jQuery.prototype.triggerHandler = function(eventType, extraParameters) {};
/**
 * Execute all handlers attached to an element for an event.
 * @since 1.2
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {Object}
 */
$.prototype.triggerHandler = function(eventType, extraParameters) {};
/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {jQuery}
 */
jQuery.prototype.trigger = function(eventType, extraParameters) {};
/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {jQuery}
 */
$.prototype.trigger = function(eventType, extraParameters) {};
/**
 * Register a handler to be called when Ajax requests complete. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxComplete = function(handler) {};
/**
 * Register a handler to be called when Ajax requests complete. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
$.prototype.ajaxComplete = function(handler) {};
/**
 * Attach a handler to an event for the elements. The handler is executed at most once per element.
 * @since 1.1
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} [eventData] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.one = function(eventType, eventData, handler) {};
/**
 * Attach a handler to an event for the elements. The handler is executed at most once per element.
 * @since 1.1
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} [eventData] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.one = function(eventType, eventData, handler) {};
/**
 * Encode a set of form elements as an array of names and values.
 * @since 1.2
 * @returns {Array}
 */
jQuery.prototype.serializeArray = function() {};
/**
 * Encode a set of form elements as an array of names and values.
 * @since 1.2
 * @returns {Array}
 */
$.prototype.serializeArray = function() {};
/**
 * Encode a set of form elements as a string for submission.
 * @since 1.0
 * @returns {String}
 */
jQuery.prototype.serialize = function() {};
/**
 * Encode a set of form elements as a string for submission.
 * @since 1.0
 * @returns {String}
 */
$.prototype.serialize = function() {};
/**
 * Set default values for future Ajax requests.
 * @since 1.1
 * @param {Options} options A set of key/value pairs that configure the default Ajax request. All options are optional. 
 */
jQuery.ajaxSetup = function(options) {};
/**
 * Set default values for future Ajax requests.
 * @since 1.1
 * @param {Options} options A set of key/value pairs that configure the default Ajax request. All options are optional. 
 */
$.ajaxSetup = function(options) {};
/**
 * Attach a function to be executed whenever an Ajax request completes successfully. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxSuccess = function(handler) {};
/**
 * Attach a function to be executed whenever an Ajax request completes successfully. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
$.prototype.ajaxSuccess = function(handler) {};
/**
 * Register a handler to be called when all Ajax requests have completed. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxStop = function(handler) {};
/**
 * Register a handler to be called when all Ajax requests have completed. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
$.prototype.ajaxStop = function(handler) {};
/**
 * Register a handler to be called when the first Ajax request begins. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxStart = function(handler) {};
/**
 * Register a handler to be called when the first Ajax request begins. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
$.prototype.ajaxStart = function(handler) {};
/**
 * Attach a function to be executed before an Ajax request is sent. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxSend = function(handler) {};
/**
 * Attach a function to be executed before an Ajax request is sent. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
$.prototype.ajaxSend = function(handler) {};
/**
 * Register a handler to be called when Ajax requests complete with an error. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxError = function(handler) {};
/**
 * Register a handler to be called when Ajax requests complete with an error. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
$.prototype.ajaxError = function(handler) {};
/**
 * Remove a previously-attached event handler from the elements.
 * @since 1.0
 * @param {String} [eventType] A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} [handler] The function that is to be no longer executed.
 * @returns {jQuery}
 */
jQuery.prototype.unbind = function(eventType, handler) {};
/**
 * Remove a previously-attached event handler from the elements.
 * @since 1.0
 * @param {String} [eventType] A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} [handler] The function that is to be no longer executed.
 * @returns {jQuery}
 */
$.prototype.unbind = function(eventType, handler) {};
/**
 * Attach a handler to an event for the elements.
 * @since 1.0
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} [eventData] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.bind = function(eventType, eventData, handler) {};
/**
 * Attach a handler to an event for the elements.
 * @since 1.0
 * @param {String} eventType A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} [eventData] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
$.prototype.bind = function(eventType, eventData, handler) {};
/**
 * Reduce the set of matched elements to the first in the set.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.first = function() {};
/**
 * Reduce the set of matched elements to the first in the set.
 * @since 1.4
 * @returns {jQuery}
 */
$.prototype.first = function() {};
/**
 * Reduce the set of matched elements to the final one in the set.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.last = function() {};
/**
 * Reduce the set of matched elements to the final one in the set.
 * @since 1.4
 * @returns {jQuery}
 */
$.prototype.last = function() {};
/**
 * Reduce the set of matched elements to a subset specified by a range of indices.
 * @since 1.1
 * @param {Integer} start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
 * @param {Integer} [end] An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
 * @returns {jQuery}
 */
jQuery.prototype.slice = function(start, end) {};
/**
 * Reduce the set of matched elements to a subset specified by a range of indices.
 * @since 1.1
 * @param {Integer} start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
 * @param {Integer} [end] An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
 * @returns {jQuery}
 */
$.prototype.slice = function(start, end) {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @since 1.0
 * @param {selector} selector A string containing a selector expression
 * @param {Element} [context] A DOM Element, Document, or jQuery to use as context
 * @returns {jQuery}
 */
jQuery.prototype.jQuery = function(selector, context) {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @since 1.0
 * @param {selector} selector A string containing a selector expression
 * @param {Element} [context] A DOM Element, Document, or jQuery to use as context
 * @returns {jQuery}
 */
$.prototype.jQuery = function(selector, context) {};
/**
 * Creates DOM elements on the fly from the provided string of raw HTML.
 * @since 1.0
 * @param {String} html A string of HTML to create on the fly. Note that this parses HTML, <strong>not</strong> XML.
 * @param {document} [ownerDocument] A document in which the new elements will be created
 * @returns {jQuery}
 */
jQuery.prototype.jQuery = function(html, ownerDocument) {};
/**
 * Creates DOM elements on the fly from the provided string of raw HTML.
 * @since 1.0
 * @param {String} html A string of HTML to create on the fly. Note that this parses HTML, <strong>not</strong> XML.
 * @param {document} [ownerDocument] A document in which the new elements will be created
 * @returns {jQuery}
 */
$.prototype.jQuery = function(html, ownerDocument) {};
/**
 * Binds a function to be executed when the DOM has finished loading.
 * @since 1.0
 * @param {Function} callback The function to execute when the DOM is ready.
 * @returns {jQuery}
 */
jQuery.prototype.jQuery = function(callback) {};
/**
 * Binds a function to be executed when the DOM has finished loading.
 * @since 1.0
 * @param {Function} callback The function to execute when the DOM is ready.
 * @returns {jQuery}
 */
$.prototype.jQuery = function(callback) {};
/**
 * Stop the currently-running animation on the matched elements.
 * @since 1.2
 * @param {Boolean} [clearQueue] A Boolean indicating whether to remove queued animation as well. Defaults to <code>false</code>.
 * @param {Boolean} [jumpToEnd] A Boolean indicating whether to complete the current animation immediately. Defaults to <code>false</code>.
 * @returns {jQuery}
 */
jQuery.prototype.stop = function(clearQueue, jumpToEnd) {};
/**
 * Stop the currently-running animation on the matched elements.
 * @since 1.2
 * @param {Boolean} [clearQueue] A Boolean indicating whether to remove queued animation as well. Defaults to <code>false</code>.
 * @param {Boolean} [jumpToEnd] A Boolean indicating whether to complete the current animation immediately. Defaults to <code>false</code>.
 * @returns {jQuery}
 */
$.prototype.stop = function(clearQueue, jumpToEnd) {};
/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.end = function() {};
/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * @since 1.0
 * @returns {jQuery}
 */
$.prototype.end = function() {};
/**
 * Add the previous set of elements on the stack to the current set.
 * @since 1.2
 * @returns {jQuery}
 */
jQuery.prototype.andSelf = function() {};
/**
 * Add the previous set of elements on the stack to the current set.
 * @since 1.2
 * @returns {jQuery}
 */
$.prototype.andSelf = function() {};
/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.siblings = function(selector) {};
/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.siblings = function(selector) {};
/**
 * Perform a custom animation of a set of CSS properties.
 * @since 1.0
 * @param {Map} properties A map of CSS properties that the animation will move toward.
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.animate = function(properties, duration, easing, complete) {};
/**
 * Perform a custom animation of a set of CSS properties.
 * @since 1.0
 * @param {Map} properties A map of CSS properties that the animation will move toward.
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.animate = function(properties, duration, easing, complete) {};
/**
 * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.prevAll = function(selector) {};
/**
 * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.prevAll = function(selector) {};
/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.prev = function(selector) {};
/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.prev = function(selector) {};
/**
 * Adjust the opacity of the matched elements.
 * @since 1.0
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.fadeTo = function(duration, opacity, callback) {};
/**
 * Adjust the opacity of the matched elements.
 * @since 1.0
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.fadeTo = function(duration, opacity, callback) {};
/**
 * Hide the matched elements by fading them to transparent.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.fadeOut = function(duration, callback) {};
/**
 * Hide the matched elements by fading them to transparent.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.fadeOut = function(duration, callback) {};
/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.parents = function(selector) {};
/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.parents = function(selector) {};
/**
 * Display the matched elements by fading them to opaque.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.fadeIn = function(duration, callback) {};
/**
 * Display the matched elements by fading them to opaque.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.fadeIn = function(duration, callback) {};
/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.parent = function(selector) {};
/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.parent = function(selector) {};
/**
 * Get the closest ancestor element that is positioned.
 * @since 1.2
 * @returns {jQuery}
 */
jQuery.prototype.offsetParent = function() {};
/**
 * Get the closest ancestor element that is positioned.
 * @since 1.2
 * @returns {jQuery}
 */
$.prototype.offsetParent = function() {};
/**
 * Display or hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.slideToggle = function(duration, callback) {};
/**
 * Display or hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.slideToggle = function(duration, callback) {};
/**
 * Load data from the server using a HTTP POST request.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [data] A map or string that is sent to the server with the request.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @param {String} [dataType] The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * @returns {jqXHR}
 */
jQuery.post = function(url, data, success, dataType) {};
/**
 * Load data from the server using a HTTP POST request.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [data] A map or string that is sent to the server with the request.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @param {String} [dataType] The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * @returns {jqXHR}
 */
$.post = function(url, data, success, dataType) {};
/**
 * Hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.slideUp = function(duration, callback) {};
/**
 * Hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.slideUp = function(duration, callback) {};
/**
 * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {String} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.nextAll = function(selector) {};
/**
 * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {String} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.nextAll = function(selector) {};
/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.next = function(selector) {};
/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.next = function(selector) {};
/**
 * Display the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.slideDown = function(duration, callback) {};
/**
 * Display the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.slideDown = function(duration, callback) {};
/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.find = function(selector) {};
/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.find = function(selector) {};
/**
 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @returns {XMLHttpRequest}
 */
jQuery.getScript = function(url, success) {};
/**
 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @returns {XMLHttpRequest}
 */
$.getScript = function(url, success) {};
/**
 * Get the children of each element in the set of matched elements, including text and comment nodes.
 * @since 1.2
 * @returns {jQuery}
 */
jQuery.prototype.contents = function() {};
/**
 * Get the children of each element in the set of matched elements, including text and comment nodes.
 * @since 1.2
 * @returns {jQuery}
 */
$.prototype.contents = function() {};
/**
 * Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * @since 1.3
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.closest = function(selector) {};
/**
 * Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * @since 1.3
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.closest = function(selector) {};
/**
 * Gets an array of all the elements and selectors matched against the current element up through the DOM tree.
 * @since 1.4
 * @param {Array} selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
 * @param {Element} [context] A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
 * @returns {Array}
 */
jQuery.prototype.closest = function(selectors, context) {};
/**
 * Gets an array of all the elements and selectors matched against the current element up through the DOM tree.
 * @since 1.4
 * @param {Array} selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
 * @param {Element} [context] A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
 * @returns {Array}
 */
$.prototype.closest = function(selectors, context) {};
/**
 * Load JSON-encoded data from the server using a GET HTTP request.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [data] A map or string that is sent to the server with the request.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @returns {jqXHR}
 */
jQuery.getJSON = function(url, data, success) {};
/**
 * Load JSON-encoded data from the server using a GET HTTP request.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [data] A map or string that is sent to the server with the request.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @returns {jqXHR}
 */
$.getJSON = function(url, data, success) {};
/**
 * Load data from the server using a HTTP GET request.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [data] A map or string that is sent to the server with the request.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @param {String} [dataType] The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * @returns {jqXHR}
 */
jQuery.get = function(url, data, success, dataType) {};
/**
 * Load data from the server using a HTTP GET request.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [data] A map or string that is sent to the server with the request.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @param {String} [dataType] The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
 * @returns {jqXHR}
 */
$.get = function(url, data, success, dataType) {};
/**
 * Load data from the server and place the returned HTML into the matched element.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} [complete] A callback function that is executed when the request completes.
 * @returns {jQuery}
 */
jQuery.prototype.load = function(url, data, complete) {};
/**
 * Load data from the server and place the returned HTML into the matched element.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} [complete] A callback function that is executed when the request completes.
 * @returns {jQuery}
 */
$.prototype.load = function(url, data, complete) {};
/**
 * Perform an asynchronous HTTP (Ajax) request.
 * @since 1.0
 * @param {Map} settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with <a>$.ajaxSetup()</a>.
 * @param {Map} [settings.accepts=depends on DataType] The content type sent in the request header that tells the server what kind of response it will accept in return. If the <code>accepts</code> setting needs modification, it is recommended to do so once in the <code>$.ajaxSetup()</code> method
 * @param {Boolean} [settings.async=true] By default, all requests are sent asynchronously (i.e. this is set to <code>true</code> by default). If you need synchronous requests, set this option to <code>false</code>. Cross-domain requests and <code>dataType: "jsonp"</code> requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active.
 * @param {Function} [settings.beforeSend] A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and settings maps are passed as arguments. This is an <a>Ajax Event</a>. Returning <code>false</code> in the <code>beforeSend</code> function will cancel the request. <strong>As of jQuery 1.5</strong>, the <code>beforeSend</code> option will be called regardless of the type of request.
 * @param {Boolean} [settings.cache=true, false for dataType 'script' and 'jsonp'] If set to <code>false</code>, it will force requested pages not to be cached by the browser.
 * @param {Function} [settings.complete(jqXHR, textStatus)] A function to be called when the request finishes (after <code>success</code> and <code>error</code> callbacks are executed). The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a string categorizing the status of the request (<code>"success"</code>, <code>"notmodified"</code>, <code>"error"</code>, <code>"timeout"</code>, <code>"abort"</code>, or <code>"parsererror"</code>). <strong>As of jQuery 1.5</strong>, the <code>complete</code> setting can accept an array of functions. Each function will be called in turn. This is an <a>Ajax Event</a>.
 * @param {Map} [settings.contents] A map of string/regular-expression pairs that determine how jQuery will parse the response, given its content type.
 * @param {String} [settings.contentType='application/x-www-form-urlencoded'] When sending data to the server, use this content-type. Default is "application/x-www-form-urlencoded", which is fine for most cases. If you explicitly pass in a content-type to <code>$.ajax()</code> then it'll always be sent to the server (even if no data is sent). Data will always be transmitted to the server using UTF-8 charset; you must decode this appropriately on the server side.
 * @param {Object} [settings.context] This object will be made the context of all Ajax-related callbacks. For example specifying a DOM element as the context will make that the context for the <code>complete</code> callback of a request, like so: <pre>$.ajax({
  url: "test.html",
  context: document.body,
  success: function(){
    $(this).addClass("done");
  }
});</pre>
 * @param {Map} [settings.converters={"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML}] A map of dataType-to-dataType converters. Each converter's value is a function that returns the transformed value of the response
 * @param [settings.crossDomain=false for same-domain requests, true for cross-domain requests] If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to <code>true</code>. This allows, for example, server-side redirection to another domain
 * @param {Object} [settings.data] Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the <code>traditional</code> setting (described below).
 * @param {Function} [settings.dataFilter] A function to be used to handle the raw response data of XMLHttpRequest.This is a pre-filtering function to sanitize the response. You should return the sanitized data. The function accepts two arguments: The raw data returned from the server and the 'dataType' parameter.
 * @param {String} [settings.dataType=Intelligent Guess (xml, json, script, or html)] The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string). The available types (and the result passed as the first argument to your success callback) are:
          <ul>
            <li>"xml": Returns a XML document that can be processed via jQuery.</li>
            <li>"html": Returns HTML as plain text; included script tags are evaluated when inserted in the DOM.</li>
            <li>"script": Evaluates the response as JavaScript and returns it as plain text. Disables caching unless option "cache" is used. <strong>Note:</strong> This will turn POSTs into GETs for remote-domain requests.</li>
            <li>"json": Evaluates the response as JSON and returns a JavaScript object. In jQuery 1.4 the JSON data is parsed in a strict manner; any malformed JSON is rejected and a parse error is thrown. (See <a>json.org</a> for more information on proper JSON formatting.)</li>
            <li>"jsonp": Loads in a JSON block using <a>JSONP</a>. Will add an extra "?callback=?" to the end of your URL to specify the callback.  </li>
            <li>"text": A plain text string.</li>
            <li>multiple, space-separated values: <strong>As of jQuery 1.5</strong>, jQuery can convert a dataType from what it received in the Content-Type header to what you require. For example, if you want a text response to be treated as XML, use "text xml" for the dataType. You can also make a JSONP request, have it received as text, and interpreted by jQuery as XML: "jsonp text xml." Similarly, a shorthand string such as "jsonp xml" will first attempt to convert from jsonp to xml, and, failing that, convert from jsonp to text, and then from text to xml.
            </li>
          </ul>
 * @param {Function} [settings.error] A function to be called if the request fails. The function receives three arguments: The jqXHR (in jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an optional exception object, if one occurred. Possible values for the second argument (besides <code>null</code>) are <code>"timeout"</code>, <code>"error"</code>, <code>"abort"</code>, and <code>"parsererror"</code>. When an HTTP error occurs, <code>errorThrown</code> receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."  <strong>As of jQuery 1.5</strong>, the <code>error</code> setting can accept an array of functions. Each function will be called in turn.  <strong>Note:</strong> <em>This handler is not called for cross-domain script and JSONP requests.</em> This is an <a>Ajax Event</a>. 
 * @param {Boolean} [settings.global=true] Whether to trigger global Ajax event handlers for this request. The default is <code>true</code>. Set to <code>false</code> to prevent the global handlers like <code>ajaxStart</code> or <code>ajaxStop</code> from being triggered. This can be used to control various <a>Ajax Events</a>.
 * @param {Map} [settings.headers={}] A map of additional header key/value pairs to send along with the request. This setting is set before the <code>beforeSend</code> function is called; therefore, any values in the headers setting can be overwritten from within the <code>beforeSend</code> function.
 * @param {Boolean} [settings.ifModified=false] Allow the request to be successful only if the response has changed since the last request. This is done by checking the Last-Modified header. Default value is <code>false</code>, ignoring the header. In jQuery 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
 * @param {Boolean} [settings.isLocal=depends on current location protocol] Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery does not recognize it as such by default. The following protocols are currently recognized as local: <code>file</code>, <code>*-extension</code>, and <code>widget</code>. If the <code>isLocal</code> setting needs modification, it is recommended to do so once in the <code>$.ajaxSetup()</code> method.  
 * @param {String} [settings.jsonp] Override the callback function name in a jsonp request.  This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url.  So <code>{jsonp:'onJSONPLoad'}</code> would result in <code>'onJSONPLoad=?'</code> passed to the server. <strong>As of jQuery 1.5</strong>, setting the <code>jsonp</code> option to <code>false</code> prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for transformation. In this case, you should also explicitly set the <code>jsonpCallback</code> setting. For example, <code>{ jsonp: false, jsonpCallback: "callbackName" }</code>
 * @param {String} [settings.jsonpCallback] Specify the callback function name for a JSONP request.  This value will be used instead of the random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name as it'll make it easier to manage the requests and provide callbacks and error handling. You may want to specify the callback when you want to enable better browser caching of GET requests. <strong>As of jQuery 1.5</strong>, you can also use a function for this setting, in which case the value of <code>jsonpCallback</code> is set to the return value of that function. 
 * @param {String} [settings.mimeType] A mime type to override the <abbr>XHR</abbr> mime type.
 * @param {String} [settings.password] A password to be used in response to an HTTP access authentication request.
 * @param {Boolean} [settings.processData=true] By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to <code>false</code>.
 * @param {String} [settings.scriptCharset] Only for requests with "jsonp" or "script" dataType and "GET" type. Forces the request to be interpreted as a certain charset. Only needed for charset differences between the remote and local content.
 * @param {Map} [settings.statusCode={}] 
            <p>A map of numeric HTTP codes and functions to be called when the response has the corresponding code. For example, the following will alert when the response status is a 404:</p>
<pre>$.ajax({
  statusCode: {
    404: function() {
      alert('page not found');
    }
  }
});</pre>
            <p>If the request is successful, the status code functions take the same parameters as the success callback; if it results in an error, they take the same parameters as the <code>error</code> callback.</p>
          
 * @param {Function} [settings.success(data, textStatus, jqXHR)] A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the <code>dataType</code> parameter; a string describing the status; and the <code>jqXHR</code> (in jQuery 1.4.x, XMLHttpRequest) object. <strong>As of jQuery 1.5</strong>, <em>the success setting can accept an array of functions. Each function will be called in turn.</em> This is an <a>Ajax Event</a>.
 * @param {Number} [settings.timeout] Set a local timeout (in milliseconds) for the request. This will override the global timeout, if one is set with <a>$.ajaxSetup()</a>. For example, you could use this property to give a single request a longer timeout than all other requests that you've set to time out in one second. See <code><a>$.ajaxSetup()</a></code> for global timeouts.
 * @param {Boolean} [settings.traditional] Set this to <code>true</code> if you wish to use the traditional style of <a>param serialization</a>.
 * @param {String} [settings.type='GET'] The type of request to make ("POST" or "GET"), default is "GET". <strong>Note:</strong> Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
 * @param {String} [settings.url=The current page]  A string containing the URL to which the request is sent.
 * @param {String} [settings.username] A username to be used in response to an HTTP access authentication request.
 * @param {Function} [settings.xhr=ActiveXObject when available (IE), the XMLHttpRequest otherwise] Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE), the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or enhancements to the factory.
 * @param {Map} [settings.xhrFields] A map of fieldName-fieldValue pairs to set on the native <code><abbr>XHR</abbr></code> object. For example, you can use it to set <code>withCredentials</code> to <code>true</code> for cross-domain requests if needed.
 * @returns {jqXHR}
 */
jQuery.ajax = function(settings) {};
/**
 * Perform an asynchronous HTTP (Ajax) request.
 * @since 1.0
 * @param {Map} settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with <a>$.ajaxSetup()</a>.
 * @param {Map} [settings.accepts=depends on DataType] The content type sent in the request header that tells the server what kind of response it will accept in return. If the <code>accepts</code> setting needs modification, it is recommended to do so once in the <code>$.ajaxSetup()</code> method
 * @param {Boolean} [settings.async=true] By default, all requests are sent asynchronously (i.e. this is set to <code>true</code> by default). If you need synchronous requests, set this option to <code>false</code>. Cross-domain requests and <code>dataType: "jsonp"</code> requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active.
 * @param {Function} [settings.beforeSend] A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and settings maps are passed as arguments. This is an <a>Ajax Event</a>. Returning <code>false</code> in the <code>beforeSend</code> function will cancel the request. <strong>As of jQuery 1.5</strong>, the <code>beforeSend</code> option will be called regardless of the type of request.
 * @param {Boolean} [settings.cache=true, false for dataType 'script' and 'jsonp'] If set to <code>false</code>, it will force requested pages not to be cached by the browser.
 * @param {Function} [settings.complete(jqXHR, textStatus)] A function to be called when the request finishes (after <code>success</code> and <code>error</code> callbacks are executed). The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a string categorizing the status of the request (<code>"success"</code>, <code>"notmodified"</code>, <code>"error"</code>, <code>"timeout"</code>, <code>"abort"</code>, or <code>"parsererror"</code>). <strong>As of jQuery 1.5</strong>, the <code>complete</code> setting can accept an array of functions. Each function will be called in turn. This is an <a>Ajax Event</a>.
 * @param {Map} [settings.contents] A map of string/regular-expression pairs that determine how jQuery will parse the response, given its content type.
 * @param {String} [settings.contentType='application/x-www-form-urlencoded'] When sending data to the server, use this content-type. Default is "application/x-www-form-urlencoded", which is fine for most cases. If you explicitly pass in a content-type to <code>$.ajax()</code> then it'll always be sent to the server (even if no data is sent). Data will always be transmitted to the server using UTF-8 charset; you must decode this appropriately on the server side.
 * @param {Object} [settings.context] This object will be made the context of all Ajax-related callbacks. For example specifying a DOM element as the context will make that the context for the <code>complete</code> callback of a request, like so: <pre>$.ajax({
  url: "test.html",
  context: document.body,
  success: function(){
    $(this).addClass("done");
  }
});</pre>
 * @param {Map} [settings.converters={"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML}] A map of dataType-to-dataType converters. Each converter's value is a function that returns the transformed value of the response
 * @param [settings.crossDomain=false for same-domain requests, true for cross-domain requests] If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to <code>true</code>. This allows, for example, server-side redirection to another domain
 * @param {Object} [settings.data] Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the <code>traditional</code> setting (described below).
 * @param {Function} [settings.dataFilter] A function to be used to handle the raw response data of XMLHttpRequest.This is a pre-filtering function to sanitize the response. You should return the sanitized data. The function accepts two arguments: The raw data returned from the server and the 'dataType' parameter.
 * @param {String} [settings.dataType=Intelligent Guess (xml, json, script, or html)] The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string). The available types (and the result passed as the first argument to your success callback) are:
          <ul>
            <li>"xml": Returns a XML document that can be processed via jQuery.</li>
            <li>"html": Returns HTML as plain text; included script tags are evaluated when inserted in the DOM.</li>
            <li>"script": Evaluates the response as JavaScript and returns it as plain text. Disables caching unless option "cache" is used. <strong>Note:</strong> This will turn POSTs into GETs for remote-domain requests.</li>
            <li>"json": Evaluates the response as JSON and returns a JavaScript object. In jQuery 1.4 the JSON data is parsed in a strict manner; any malformed JSON is rejected and a parse error is thrown. (See <a>json.org</a> for more information on proper JSON formatting.)</li>
            <li>"jsonp": Loads in a JSON block using <a>JSONP</a>. Will add an extra "?callback=?" to the end of your URL to specify the callback.  </li>
            <li>"text": A plain text string.</li>
            <li>multiple, space-separated values: <strong>As of jQuery 1.5</strong>, jQuery can convert a dataType from what it received in the Content-Type header to what you require. For example, if you want a text response to be treated as XML, use "text xml" for the dataType. You can also make a JSONP request, have it received as text, and interpreted by jQuery as XML: "jsonp text xml." Similarly, a shorthand string such as "jsonp xml" will first attempt to convert from jsonp to xml, and, failing that, convert from jsonp to text, and then from text to xml.
            </li>
          </ul>
 * @param {Function} [settings.error] A function to be called if the request fails. The function receives three arguments: The jqXHR (in jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an optional exception object, if one occurred. Possible values for the second argument (besides <code>null</code>) are <code>"timeout"</code>, <code>"error"</code>, <code>"abort"</code>, and <code>"parsererror"</code>. When an HTTP error occurs, <code>errorThrown</code> receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."  <strong>As of jQuery 1.5</strong>, the <code>error</code> setting can accept an array of functions. Each function will be called in turn.  <strong>Note:</strong> <em>This handler is not called for cross-domain script and JSONP requests.</em> This is an <a>Ajax Event</a>. 
 * @param {Boolean} [settings.global=true] Whether to trigger global Ajax event handlers for this request. The default is <code>true</code>. Set to <code>false</code> to prevent the global handlers like <code>ajaxStart</code> or <code>ajaxStop</code> from being triggered. This can be used to control various <a>Ajax Events</a>.
 * @param {Map} [settings.headers={}] A map of additional header key/value pairs to send along with the request. This setting is set before the <code>beforeSend</code> function is called; therefore, any values in the headers setting can be overwritten from within the <code>beforeSend</code> function.
 * @param {Boolean} [settings.ifModified=false] Allow the request to be successful only if the response has changed since the last request. This is done by checking the Last-Modified header. Default value is <code>false</code>, ignoring the header. In jQuery 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
 * @param {Boolean} [settings.isLocal=depends on current location protocol] Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery does not recognize it as such by default. The following protocols are currently recognized as local: <code>file</code>, <code>*-extension</code>, and <code>widget</code>. If the <code>isLocal</code> setting needs modification, it is recommended to do so once in the <code>$.ajaxSetup()</code> method.  
 * @param {String} [settings.jsonp] Override the callback function name in a jsonp request.  This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url.  So <code>{jsonp:'onJSONPLoad'}</code> would result in <code>'onJSONPLoad=?'</code> passed to the server. <strong>As of jQuery 1.5</strong>, setting the <code>jsonp</code> option to <code>false</code> prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for transformation. In this case, you should also explicitly set the <code>jsonpCallback</code> setting. For example, <code>{ jsonp: false, jsonpCallback: "callbackName" }</code>
 * @param {String} [settings.jsonpCallback] Specify the callback function name for a JSONP request.  This value will be used instead of the random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name as it'll make it easier to manage the requests and provide callbacks and error handling. You may want to specify the callback when you want to enable better browser caching of GET requests. <strong>As of jQuery 1.5</strong>, you can also use a function for this setting, in which case the value of <code>jsonpCallback</code> is set to the return value of that function. 
 * @param {String} [settings.mimeType] A mime type to override the <abbr>XHR</abbr> mime type.
 * @param {String} [settings.password] A password to be used in response to an HTTP access authentication request.
 * @param {Boolean} [settings.processData=true] By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to <code>false</code>.
 * @param {String} [settings.scriptCharset] Only for requests with "jsonp" or "script" dataType and "GET" type. Forces the request to be interpreted as a certain charset. Only needed for charset differences between the remote and local content.
 * @param {Map} [settings.statusCode={}] 
            <p>A map of numeric HTTP codes and functions to be called when the response has the corresponding code. For example, the following will alert when the response status is a 404:</p>
<pre>$.ajax({
  statusCode: {
    404: function() {
      alert('page not found');
    }
  }
});</pre>
            <p>If the request is successful, the status code functions take the same parameters as the success callback; if it results in an error, they take the same parameters as the <code>error</code> callback.</p>
          
 * @param {Function} [settings.success(data, textStatus, jqXHR)] A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the <code>dataType</code> parameter; a string describing the status; and the <code>jqXHR</code> (in jQuery 1.4.x, XMLHttpRequest) object. <strong>As of jQuery 1.5</strong>, <em>the success setting can accept an array of functions. Each function will be called in turn.</em> This is an <a>Ajax Event</a>.
 * @param {Number} [settings.timeout] Set a local timeout (in milliseconds) for the request. This will override the global timeout, if one is set with <a>$.ajaxSetup()</a>. For example, you could use this property to give a single request a longer timeout than all other requests that you've set to time out in one second. See <code><a>$.ajaxSetup()</a></code> for global timeouts.
 * @param {Boolean} [settings.traditional] Set this to <code>true</code> if you wish to use the traditional style of <a>param serialization</a>.
 * @param {String} [settings.type='GET'] The type of request to make ("POST" or "GET"), default is "GET". <strong>Note:</strong> Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
 * @param {String} [settings.url=The current page]  A string containing the URL to which the request is sent.
 * @param {String} [settings.username] A username to be used in response to an HTTP access authentication request.
 * @param {Function} [settings.xhr=ActiveXObject when available (IE), the XMLHttpRequest otherwise] Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE), the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or enhancements to the factory.
 * @param {Map} [settings.xhrFields] A map of fieldName-fieldValue pairs to set on the native <code><abbr>XHR</abbr></code> object. For example, you can use it to set <code>withCredentials</code> to <code>true</code> for cross-domain requests if needed.
 * @returns {jqXHR}
 */
$.ajax = function(settings) {};
/**
 * The number of elements in the jQuery object.
 * @type {Number}
 */
jQuery.prototype.length = 1;
/**
 * The number of elements in the jQuery object.
 * @type {Number}
 */
$.prototype.length = 1;
/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.children = function(selector) {};
/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.children = function(selector) {};
/**
 * A selector representing selector originally passed to jQuery().
 * @type {String}
 */
jQuery.prototype.selector = "";
/**
 * A selector representing selector originally passed to jQuery().
 * @type {String}
 */
$.prototype.selector = "";
/**
 * Add elements to the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.add = function(selector) {};
/**
 * Add elements to the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @returns {jQuery}
 */
$.prototype.add = function(selector) {};
/**
 * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
 * @type {Element}
 */
jQuery.prototype.context = null;
/**
 * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
 * @type {Element}
 */
$.prototype.context = null;
/**
 * Remove elements from the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.not = function(selector) {};
/**
 * Remove elements from the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
$.prototype.not = function(selector) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding and border.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
jQuery.prototype.outerWidth = function(includeMargin) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding and border.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
$.prototype.outerWidth = function(includeMargin) {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
jQuery.prototype.outerHeight = function(includeMargin) {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
$.prototype.outerHeight = function(includeMargin) {};
/**
 * Display or hide the matched elements.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.toggle = function(duration, callback) {};
/**
 * Display or hide the matched elements.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
$.prototype.toggle = function(duration, callback) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.innerWidth = function() {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
$.prototype.innerWidth = function() {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.innerHeight = function() {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
$.prototype.innerHeight = function() {};
/**
 * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request. 
 * @since 1.2
 * @param {Array} obj An array or object to serialize.
 * @returns {String}
 */
jQuery.param = function(obj) {};
/**
 * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request. 
 * @since 1.2
 * @param {Array} obj An array or object to serialize.
 * @returns {String}
 */
$.param = function(obj) {};
/**
 * Hide the matched elements.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.hide = function() {};
/**
 * Hide the matched elements.
 * @since 1.0
 * @returns {jQuery}
 */
$.prototype.hide = function() {};
/**
 * Get the current computed width for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQuery.prototype.width = function() {};
/**
 * Get the current computed width for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
$.prototype.width = function() {};
/**
 * Set the CSS width of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * @returns {jQuery}
 */
jQuery.prototype.width = function(value) {};
/**
 * Set the CSS width of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * @returns {jQuery}
 */
$.prototype.width = function(value) {};
/**
 * Get the current computed height for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQuery.prototype.height = function() {};
/**
 * Get the current computed height for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
$.prototype.height = function() {};
/**
 * Set the CSS height of every matched element.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * @returns {jQuery}
 */
jQuery.prototype.height = function(value) {};
/**
 * Set the CSS height of every matched element.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * @returns {jQuery}
 */
$.prototype.height = function(value) {};
/**
 * Display the matched elements.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.show = function() {};
/**
 * Display the matched elements.
 * @since 1.0
 * @returns {jQuery}
 */
$.prototype.show = function() {};
/**
 * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.scrollLeft = function() {};
/**
 * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
$.prototype.scrollLeft = function() {};
/**
 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQuery}
 */
jQuery.prototype.scrollLeft = function(value) {};
/**
 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQuery}
 */
$.prototype.scrollLeft = function(value) {};
/**
 * Remove the whitespace from the beginning and end of a string.
 * @since 1.0
 * @param {String} str The string to trim.
 * @returns {String}
 */
jQuery.trim = function(str) {};
/**
 * Remove the whitespace from the beginning and end of a string.
 * @since 1.0
 * @param {String} str The string to trim.
 * @returns {String}
 */
$.trim = function(str) {};
/**
 * Determine if the argument passed is a Javascript function object. 
 * @since 1.2
 * @param {Object} obj Object to test whether or not it is a function.
 * @returns {Boolean}
 */
jQuery.isFunction = function(obj) {};
/**
 * Determine if the argument passed is a Javascript function object. 
 * @since 1.2
 * @param {Object} obj Object to test whether or not it is a function.
 * @returns {Boolean}
 */
$.isFunction = function(obj) {};
/**
 * Determine whether the argument is an array.
 * @since 1.3
 * @param {Object} obj Object to test whether or not it is an array.
 * @returns {Boolean}
 */
jQuery.isArray = function(obj) {};
/**
 * Determine whether the argument is an array.
 * @since 1.3
 * @param {Object} obj Object to test whether or not it is an array.
 * @returns {Boolean}
 */
$.isArray = function(obj) {};
/**
 * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
 * @since 1.1
 * @param {Array} array The Array of DOM elements.
 * @returns {Array}
 */
jQuery.unique = function(array) {};
/**
 * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
 * @since 1.1
 * @param {Array} array The Array of DOM elements.
 * @returns {Array}
 */
$.unique = function(array) {};
/**
 * Merge the contents of two arrays together into the first array. 
 * @since 1.0
 * @param {Array} first The first array to merge, the elements of second added.
 * @param {Array} second The second array to merge into the first, unaltered.
 * @returns {Array}
 */
jQuery.merge = function(first, second) {};
/**
 * Merge the contents of two arrays together into the first array. 
 * @since 1.0
 * @param {Array} first The first array to merge, the elements of second added.
 * @param {Array} second The second array to merge into the first, unaltered.
 * @returns {Array}
 */
$.merge = function(first, second) {};
/**
 * Search for a specified value within an array and return its index (or -1 if not found).
 * @since 1.2
 * @param {Any} value The value to search for.
 * @param {Array} array An array through which to search.
 * @returns {Number}
 */
jQuery.inArray = function(value, array) {};
/**
 * Search for a specified value within an array and return its index (or -1 if not found).
 * @since 1.2
 * @param {Any} value The value to search for.
 * @param {Array} array An array through which to search.
 * @returns {Number}
 */
$.inArray = function(value, array) {};
/**
 * Translate all items in an array or object to new array of items.
 * @since 1.0
 * @param {Array} array The Array to translate.
 * @param {Function} callback The function to process each item against.  The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, <code>this</code> refers to the global (window) object.
 * @returns {Array}
 */
jQuery.map = function(array, callback) {};
/**
 * Translate all items in an array or object to new array of items.
 * @since 1.0
 * @param {Array} array The Array to translate.
 * @param {Function} callback The function to process each item against.  The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, <code>this</code> refers to the global (window) object.
 * @returns {Array}
 */
$.map = function(array, callback) {};
/**
 * Convert an array-like object into a true JavaScript array.
 * @since 1.2
 * @param {Object} obj Any object to turn into a native Array.
 * @returns {Array}
 */
jQuery.makeArray = function(obj) {};
/**
 * Convert an array-like object into a true JavaScript array.
 * @since 1.2
 * @param {Object} obj Any object to turn into a native Array.
 * @returns {Array}
 */
$.makeArray = function(obj) {};
/**
 * Finds the elements of an array which satisfy a filter function. The original array is not affected.
 * @since 1.0
 * @param {Array} array The array to search through.
 * @param {Function} func The function to process each item against.  The first argument to the function is the item, and the second argument is the index.  The function should return a Boolean value.  <code>this</code> will be the global window object.
 * @param {Boolean} [invert] If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true.  If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
 * @returns {Array}
 */
jQuery.grep = function(array, func, invert) {};
/**
 * Finds the elements of an array which satisfy a filter function. The original array is not affected.
 * @since 1.0
 * @param {Array} array The array to search through.
 * @param {Function} func The function to process each item against.  The first argument to the function is the item, and the second argument is the index.  The function should return a Boolean value.  <code>this</code> will be the global window object.
 * @param {Boolean} [invert] If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true.  If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
 * @returns {Array}
 */
$.grep = function(array, func, invert) {};
/**
 * Merge the contents of two or more objects together into the first object.
 * @since 1.0
 * @param {Object} target  An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
 * @param {Object} [object1] An object containing additional properties to merge in.
 * @param {Object} [objectN] Additional objects containing properties to merge in.
 * @returns {Object}
 */
jQuery.extend = function(target, object1, objectN) {};
/**
 * Merge the contents of two or more objects together into the first object.
 * @since 1.0
 * @param {Object} target  An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
 * @param {Object} [object1] An object containing additional properties to merge in.
 * @param {Object} [objectN] Additional objects containing properties to merge in.
 * @returns {Object}
 */
$.extend = function(target, object1, objectN) {};
/**
 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
 * @since 1.0
 * @param {Object} collection The object or array to iterate over.
 * @param {Function} callback The function that will be executed on every object.
 * @returns {Object}
 */
jQuery.each = function(collection, callback) {};
/**
 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
 * @since 1.0
 * @param {Object} collection The object or array to iterate over.
 * @param {Function} callback The function that will be executed on every object.
 * @returns {Object}
 */
$.each = function(collection, callback) {};
/**
 * <strong>Deprecated in jQuery 1.3 (see <a>jQuery.support</a>)</strong>. States if the current page, in the user's browser, is being rendered using the <a>W3C CSS Box Model</a>.
 * @type {Boolean}
 */
jQuery.boxModel = true;
/**
 * <strong>Deprecated in jQuery 1.3 (see <a>jQuery.support</a>)</strong>. States if the current page, in the user's browser, is being rendered using the <a>W3C CSS Box Model</a>.
 * @type {Boolean}
 */
$.boxModel = true;
/**
 * Get the current vertical position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.scrollTop = function() {};
/**
 * Get the current vertical position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
$.prototype.scrollTop = function() {};
/**
 * Set the current vertical position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQuery}
 */
jQuery.prototype.scrollTop = function(value) {};
/**
 * Set the current vertical position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQuery}
 */
$.prototype.scrollTop = function(value) {};
/**
 * A collection of properties that represent the presence of different browser features or bugs.
 * @type {Object}
 */
jQuery.support = {};
/**
 * A collection of properties that represent the presence of different browser features or bugs.
 * @type {Object}
 */
$.support = {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 * @since 1.2
 * @returns {Object}
 */
jQuery.prototype.position = function() {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 * @since 1.2
 * @returns {Object}
 */
$.prototype.position = function() {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 * @since 1.2
 * @returns {Object}
 */
jQuery.prototype.offset = function() {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 * @since 1.2
 * @returns {Object}
 */
$.prototype.offset = function() {};
/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * @since 1.4
 * @param {Object} coordinates An object containing the properties <code>top</code> and <code>left</code>, which are integers indicating the new top and left coordinates for the elements.
 * @returns {jQuery}
 */
jQuery.prototype.offset = function(coordinates) {};
/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * @since 1.4
 * @param {Object} coordinates An object containing the properties <code>top</code> and <code>left</code>, which are integers indicating the new top and left coordinates for the elements.
 * @returns {jQuery}
 */
$.prototype.offset = function(coordinates) {};
/**
 * Get the value of a style property for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property.
 * @returns {String}
 */
jQuery.prototype.css = function(propertyName) {};
/**
 * Get the value of a style property for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property.
 * @returns {String}
 */
$.prototype.css = function(propertyName) {};
/**
 * Set one or more CSS properties for the  set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property name.
 * @param {String} value A value to set for the property.
 * @returns {jQuery}
 */
jQuery.prototype.css = function(propertyName, value) {};
/**
 * Set one or more CSS properties for the  set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property name.
 * @param {String} value A value to set for the property.
 * @returns {jQuery}
 */
$.prototype.css = function(propertyName, value) {};
/**
 * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.unwrap = function() {};
/**
 * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
 * @since 1.4
 * @returns {jQuery}
 */
$.prototype.unwrap = function() {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.4
 * @param {Selector} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQuery}
 */
jQuery.prototype.detach = function(selector) {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.4
 * @param {Selector} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQuery}
 */
$.prototype.detach = function(selector) {};
/**
 * Create a deep copy of the set of matched elements.
 * @since 1.0
 * @param {Boolean} [withDataAndEvents=false] A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * @returns {jQuery}
 */
jQuery.prototype.clone = function(withDataAndEvents) {};
/**
 * Create a deep copy of the set of matched elements.
 * @since 1.0
 * @param {Boolean} [withDataAndEvents=false] A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * @returns {jQuery}
 */
$.prototype.clone = function(withDataAndEvents) {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.0
 * @param {String} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQuery}
 */
jQuery.prototype.remove = function(selector) {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.0
 * @param {String} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQuery}
 */
$.prototype.remove = function(selector) {};
/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.empty = function() {};
/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * @since 1.0
 * @returns {jQuery}
 */
$.prototype.empty = function() {};
/**
 * Replace each target element with the set of matched elements.
 * @since 1.2
 * @param {Selector} target A selector expression indicating which element(s) to replace.
 * @returns {jQuery}
 */
jQuery.prototype.replaceAll = function(target) {};
/**
 * Replace each target element with the set of matched elements.
 * @since 1.2
 * @param {Selector} target A selector expression indicating which element(s) to replace.
 * @returns {jQuery}
 */
$.prototype.replaceAll = function(target) {};
/**
 * Replace each element in the set of matched elements with the provided new content.
 * @since 1.2
 * @param {String} newContent The content to insert. May be an HTML string, DOM element, or jQuery object.
 * @returns {jQuery}
 */
jQuery.prototype.replaceWith = function(newContent) {};
/**
 * Replace each element in the set of matched elements with the provided new content.
 * @since 1.2
 * @param {String} newContent The content to insert. May be an HTML string, DOM element, or jQuery object.
 * @returns {jQuery}
 */
$.prototype.replaceWith = function(newContent) {};
/**
 * Wrap an HTML structure around the content of each element in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.wrapInner = function(wrappingElement) {};
/**
 * Wrap an HTML structure around the content of each element in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
 * @returns {jQuery}
 */
$.prototype.wrapInner = function(wrappingElement) {};
/**
 * Wrap an HTML structure around all elements in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.wrapAll = function(wrappingElement) {};
/**
 * Wrap an HTML structure around all elements in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQuery}
 */
$.prototype.wrapAll = function(wrappingElement) {};
/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * @since 1.0
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.wrap = function(wrappingElement) {};
/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * @since 1.0
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQuery}
 */
$.prototype.wrap = function(wrappingElement) {};
/**
 * Insert every element in the set of matched elements before the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.insertBefore = function(target) {};
/**
 * Insert every element in the set of matched elements before the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * @returns {jQuery}
 */
$.prototype.insertBefore = function(target) {};
/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.before = function(content, content) {};
/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * @returns {jQuery}
 */
$.prototype.before = function(content, content) {};
/**
 * Insert every element in the set of matched elements after the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.insertAfter = function(target) {};
/**
 * Insert every element in the set of matched elements after the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * @returns {jQuery}
 */
$.prototype.insertAfter = function(target) {};
/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.after = function(content, content) {};
/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * @returns {jQuery}
 */
$.prototype.after = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.prependTo = function(target) {};
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * @returns {jQuery}
 */
$.prototype.prependTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.prepend = function(content, content) {};
/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * @returns {jQuery}
 */
$.prototype.prepend = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the end of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.appendTo = function(target) {};
/**
 * Insert every element in the set of matched elements to the end of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * @returns {jQuery}
 */
$.prototype.appendTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.append = function(content, content) {};
/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * @returns {jQuery}
 */
$.prototype.append = function(content, content) {};
/**
 * Get the current value of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String|Array}
 */
jQuery.prototype.val = function() {};
/**
 * Get the current value of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String|Array}
 */
$.prototype.val = function() {};
/**
 * Set the value of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * @returns {jQuery}
 */
jQuery.prototype.val = function(value) {};
/**
 * Set the value of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * @returns {jQuery}
 */
$.prototype.val = function(value) {};
/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * @since 1.0
 * @returns {String}
 */
jQuery.prototype.text = function() {};
/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * @since 1.0
 * @returns {String}
 */
$.prototype.text = function() {};
/**
 * Set the content of each element in the set of matched elements to the specified text.
 * @since 1.0
 * @param {String} textString A string of text to set as the content of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.text = function(textString) {};
/**
 * Set the content of each element in the set of matched elements to the specified text.
 * @since 1.0
 * @param {String} textString A string of text to set as the content of each matched element.
 * @returns {jQuery}
 */
$.prototype.text = function(textString) {};
/**
 * Get the HTML contents of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String}
 */
jQuery.prototype.html = function() {};
/**
 * Get the HTML contents of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String}
 */
$.prototype.html = function() {};
/**
 * Set the HTML contents of each element in the set of matched elements.
 * @since 1.0
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.html = function(htmlString) {};
/**
 * Set the HTML contents of each element in the set of matched elements.
 * @since 1.0
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * @returns {jQuery}
 */
$.prototype.html = function(htmlString) {};
/**
 * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
 * @since 1.2
 * @param {Function} callback A function object that will be invoked for each element in the current set.
 * @returns {jQuery}
 */
jQuery.prototype.map = function(callback) {};
/**
 * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
 * @since 1.2
 * @param {Function} callback A function object that will be invoked for each element in the current set.
 * @returns {jQuery}
 */
$.prototype.map = function(callback) {};
/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {Boolean}
 */
jQuery.prototype.is = function(selector) {};
/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {Boolean}
 */
$.prototype.is = function(selector) {};
/**
 * Reduce the set of matched elements to the one at the specified index.
 * @since 1.1
 * @param {Integer} index An integer indicating the 0-based position of the element. 
 * @returns {jQuery}
 */
jQuery.prototype.eq = function(index) {};
/**
 * Reduce the set of matched elements to the one at the specified index.
 * @since 1.1
 * @param {Integer} index An integer indicating the 0-based position of the element. 
 * @returns {jQuery}
 */
$.prototype.eq = function(index) {};
/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * @returns {jQuery}
 */
jQuery.prototype.filter = function(selector) {};
/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * @returns {jQuery}
 */
$.prototype.filter = function(selector) {};
/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * @since 1.0
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @returns {jQuery}
 */
jQuery.prototype.toggleClass = function(className) {};
/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * @since 1.0
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @returns {jQuery}
 */
$.prototype.toggleClass = function(className) {};
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @since 1.0
 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.removeClass = function(className) {};
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @since 1.0
 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
 * @returns {jQuery}
 */
$.prototype.removeClass = function(className) {};
/**
 * Determine whether any of the matched elements are assigned the given class.
 * @since 1.2
 * @param {String} className The class name to search for.
 * @returns {Boolean}
 */
jQuery.prototype.hasClass = function(className) {};
/**
 * Determine whether any of the matched elements are assigned the given class.
 * @since 1.2
 * @param {String} className The class name to search for.
 * @returns {Boolean}
 */
$.prototype.hasClass = function(className) {};
/**
 * Remove an attribute from each element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName An attribute to remove.
 * @returns {jQuery}
 */
jQuery.prototype.removeAttr = function(attributeName) {};
/**
 * Remove an attribute from each element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName An attribute to remove.
 * @returns {jQuery}
 */
$.prototype.removeAttr = function(attributeName) {};
/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to get.
 * @returns {String}
 */
jQuery.prototype.attr = function(attributeName) {};
/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to get.
 * @returns {String}
 */
$.prototype.attr = function(attributeName) {};
/**
 * Set one or more attributes for the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to set.
 * @param {String} value A value to set for the attribute.
 * @returns {jQuery}
 */
jQuery.prototype.attr = function(attributeName, value) {};
/**
 * Set one or more attributes for the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to set.
 * @param {String} value A value to set for the attribute.
 * @returns {jQuery}
 */
$.prototype.attr = function(attributeName, value) {};
/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @since 1.0
 * @param {String} className One or more class names to be added to the class attribute of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.addClass = function(className) {};
/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @since 1.0
 * @param {String} className One or more class names to be added to the class attribute of each matched element.
 * @returns {jQuery}
 */
$.prototype.addClass = function(className) {};
