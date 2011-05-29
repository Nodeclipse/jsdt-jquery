/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 */
function jQuery() {};
/**
 *  Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished. 
 * @since 1.6
 * @param {String} [type=fx]  The type of queue that needs to be observed. 
 * @param {Object} [target] Object onto which the promise methods have to be attached
 * @returns {Promise}
 */
jQuery.prototype.promise = function(type, target) {};
/**
 * Remove a property for the set of matched elements.
 * @since 1.6
 * @param {String} propertyName The name of the property to set.
 * @param {String} value A value to set for the property.
 * @returns {jQuery}
 */
jQuery.prototype.removeProp = function(propertyName, value) {};
/**
 * Get the value of a property for the first element in the set of matched elements.
 * @since 1.6
 * @param {String} propertyName The name of the property to get.
 * @returns {String}
 */
jQuery.prototype.prop = function(propertyName) {};
/**
 * Set one or more properties for the set of matched elements.
 * @since 1.6
 * @param {String} propertyName The name of the property to set.
 * @param {String} value A value to set for the property.
 * @returns {jQuery}
 */
jQuery.prototype.prop = function(propertyName, value) {};
/**
 * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by <code>$.ajax()</code>.
 * @since 1.5
 * @param {String} [dataTypes] An optional string containing one or more space-separated dataTypes
 * @param {Function} handler A handler to set default values for future Ajax requests.
 * @returns {undefined}
 */
jQuery.ajaxPrefilter = function(dataTypes, handler) {};
/**
 * Holds or releases the execution of jQuery's ready event.
 * @since 1.6
 * @param {Boolean} hold Indicates whether the ready hold is being requested or released
 * @returns {Boolean}
 */
jQuery.holdReady = function(hold) {};
/**
 * Determine whether an element has any jQuery data associated with it.
 * @since 1.5
 * @param {Element} element A DOM element to be checked for data.
 * @returns {Boolean}
 */
jQuery.hasData = function(element) {};
/**
 * Return a number representing the current time.
 * @since 1.4
 * @returns {Number}
 */
jQuery.now = function() {};
/**
 * A string containing the jQuery version number.
 * @type {String}
 */
jQuery.prototype.jquery = "";
/**
 * Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients.
 * @type {Object}
 */
jQuery.cssHooks = {};
/**
 * Parses a string into an XML document.
 * @since 1.5
 * @param {String} data a well-formed XML string to be parsed
 * @returns {XMLDocument}
 */
jQuery.parseXML = function(data) {};
/**
 * Provides a way to execute callback functions based on one or more objects, usually <a>Deferred</a> objects that represent asynchronous events.
 * @since 1.5
 * @param {Deferred} deferreds One or more Deferred objects, or plain JavaScript objects.
 * @returns {Promise}
 */
jQuery.when = function(deferreds) {};
/**
 * Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.
 * @since 1.5
 * @returns {jQuery}
 */
jQuery.sub = function() {};
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
 * Determine the internal JavaScript [[Class]] of an object.
 * @since 1.4
 * @param {Object} obj Object to get the internal JavaScript [[Class]] of.
 * @returns {String}
 */
jQuery.type = function(obj) {};
/**
 * Determine whether the argument is a window.
 * @since 1.4
 * @param {Object} obj Object to test whether or not it is a window.
 * @returns {Boolean}
 */
jQuery.isWindow = function(obj) {};
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
 * Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.undelegate = function() {};
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
 * Takes a string and throws an exception containing it.
 * @since 1.4
 * @param {String} message The message to send out.
 */
jQuery.error = function(message) {};
/**
 * Takes a well-formed JSON string and returns the resulting JavaScript object.
 * @since 1.4
 * @param {String} json The JSON string to parse.
 * @returns {Object}
 */
jQuery.parseJSON = function(json) {};
/**
 * Takes a function and returns a new one that will always have a particular context.
 * @since 1.4
 * @param {Function} func The function whose context will be changed.
 * @param {Object} context The object to which the context (<code>this</code>) of the function should be set.
 * @returns {Function}
 */
jQuery.proxy = function(func, context) {};
/**
 * Bind an event handler to the "focusout" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.focusout = function(handler) {};
/**
 * Bind an event handler to the "focusin" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.focusin = function(handler) {};
/**
 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
 * @since 1.4
 * @param {String} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.has = function(selector) {};
/**
 * Check to see if a DOM node is within another DOM node.
 * @since 1.4
 * @param {Element} container The DOM element that may contain the other element.
 * @param {Element} contained The DOM node that may be contained by the other element.
 * @returns {Boolean}
 */
jQuery.contains = function(container, contained) {};
/**
 * An empty function.
 * @since 1.4
 * @returns {Function}
 */
jQuery.noop = function() {};
/**
 * Set a timer to delay execution of subsequent items in the queue.
 * @since 1.4
 * @param {Integer} duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.prototype.delay = function(duration, queueName) {};
/**
 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching ancestor elements.
 * @returns {jQuery}
 */
jQuery.prototype.parentsUntil = function(selector) {};
/**
 * Get all preceding siblings of each element up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching preceding sibling elements.
 * @returns {jQuery}
 */
jQuery.prototype.prevUntil = function(selector) {};
/**
 * Get all following siblings of each element up to but not including the element matched by the selector.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching following sibling elements.
 * @returns {jQuery}
 */
jQuery.prototype.nextUntil = function(selector) {};
/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * @since 1.0
 * @param {Function} func A function to execute for each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.each = function(func) {};
/**
 * Add a collection of DOM elements onto the jQuery stack.
 * @since 1.0
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @returns {jQuery}
 */
jQuery.prototype.pushStack = function(elements) {};
/**
 * Execute some JavaScript code globally.
 * @since 1.0
 * @param {String} code The JavaScript code to execute.
 */
jQuery.globalEval = function(code) {};
/**
 * Check to see if a DOM node is within an XML document (or is an XML document).
 * @since 1.1
 * @param {Element} node The DOM node that will be checked to see if it's in an XML document.
 * @returns {Boolean}
 */
jQuery.isXMLDoc = function(node) {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {Element} element A DOM element from which to remove data.
 * @param {String} [name] A string naming the piece of data to remove.
 * @returns {jQuery}
 */
jQuery.removeData = function(element, name) {};
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
 * Returns value at named data store for the element, as set by <code>jQuery.data(element, name, value)</code>, or the full data store for the element.
 * @since 1.2
 * @param {Element} element The DOM element to query for the data.
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
jQuery.data = function(element, key) {};
/**
 * Execute the next function on the queue for the matched element.
 * @since 1.3
 * @param {Element} element A DOM element from which to remove and execute a queued function.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.dequeue = function(element, queueName) {};
/**
 * Show the queue of functions to be executed on the matched element.
 * @since 1.3
 * @param {Element} element A DOM element to inspect for an attached queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
jQuery.queue = function(element, queueName) {};
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
 * Remove from the queue all items that have not yet been run.
 * @since 1.4
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.prototype.clearQueue = function(queueName) {};
/**
 * Retrieve all the DOM elements contained in the jQuery set, as an array.
 * @since 1.4
 * @returns {Array}
 */
jQuery.prototype.toArray = function() {};
/**
 * Check to see if an object is empty (contains no properties).
 * @since 1.4
 * @param {Object} object The object that will be checked to see if it's empty.
 * @returns {Boolean}
 */
jQuery.isEmptyObject = function(object) {};
/**
 * Check to see if an object is a plain object (created using "{}" or "new Object").
 * @since 1.4
 * @param {Object} object The object that will be checked to see if it's a plain object.
 * @returns {Boolean}
 */
jQuery.isPlainObject = function(object) {};
/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.keydown = function(handler) {};
/**
 * Search for a given element from among the matched elements.
 * @since 1.4
 * @returns {Number}
 */
jQuery.prototype.index = function() {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {String} [name] A string naming the piece of data to delete.
 * @returns {jQuery}
 */
jQuery.prototype.removeData = function(name) {};
/**
 * Store arbitrary data associated with the matched elements.
 * @since 1.2
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value; it can be any Javascript type including Array or Object.
 * @returns {jQuery}
 */
jQuery.prototype.data = function(key, value) {};
/**
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * @since 1.2
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
jQuery.prototype.data = function(key) {};
/**
 * Retrieve the DOM elements matched by the jQuery object.
 * @since 1.0
 * @param {Number} [index] A zero-based integer indicating which element to retrieve.
 * @returns {Element|Array}
 */
jQuery.prototype.get = function(index) {};
/**
 * Return the number of elements in the jQuery object.
 * @since 1.0
 * @returns {Number}
 */
jQuery.prototype.size = function() {};
/**
 * Relinquish jQuery's control of the <code>$</code> variable.
 * @since 1.0
 * @param {Boolean} [removeAll] A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
 * @returns {Object}
 */
jQuery.noConflict = function(removeAll) {};
/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.scroll = function(handler) {};
/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.resize = function(handler) {};
/**
 * Execute the next function on the queue for the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQuery}
 */
jQuery.prototype.dequeue = function(queueName) {};
/**
 * Show the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
jQuery.prototype.queue = function(queueName) {};
/**
 * Manipulate the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * @returns {jQuery}
 */
jQuery.prototype.queue = function(queueName, newQueue) {};
/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.keyup = function(handler) {};
/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.keypress = function(handler) {};
/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.submit = function(handler) {};
/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.select = function(handler) {};
/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.change = function(handler) {};
/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.blur = function(handler) {};
/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.focus = function(handler) {};
/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mousemove = function(handler) {};
/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * @since 1.0
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * @returns {jQuery}
 */
jQuery.prototype.hover = function(handlerIn, handlerOut) {};
/**
 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
 * @since 1.4
 * @param {Function} handlerInOut A function to execute when the mouse pointer enters or leaves the element.
 * @returns {jQuery}
 */
jQuery.prototype.hover = function(handlerInOut) {};
/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseleave = function(handler) {};
/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseenter = function(handler) {};
/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseout = function(handler) {};
/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseover = function(handler) {};
/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.dblclick = function(handler) {};
/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.click = function(handler) {};
/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mouseup = function(handler) {};
/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.mousedown = function(handler) {};
/**
 * Bind an event handler to the "error" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.error = function(handler) {};
/**
 * Bind an event handler to the "unload" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.unload = function(handler) {};
/**
 * Bind an event handler to the "load" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.load = function(handler) {};
/**
 * Specify a function to execute when the DOM is fully loaded.
 * @since 1.0
 * @param {Function} handler A function to execute after the DOM is ready.
 * @returns {jQuery}
 */
jQuery.prototype.ready = function(handler) {};
/**
 * Remove all event handlers previously attached using <code>.live()</code> from the elements.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.die = function() {};
/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * @since 1.3
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>keydown</code>.
 * @param {String} [handler] The function that is no longer to be executed.
 * @returns {jQuery}
 */
jQuery.prototype.die = function(eventType, handler) {};
/**
 * Contains flags for the useragent, read from navigator.userAgent. <strong>We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery.</strong> 
 * @type {Map}
 */
jQuery.browser = {};
/**
 * Attach a handler to the event for all elements which match the current selector, now and in the future.
 * @since 1.3
 * @param {String} eventType A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names, as well.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQuery}
 */
jQuery.prototype.live = function(eventType, handler) {};
/**
 * Execute all handlers attached to an element for an event.
 * @since 1.2
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {Object}
 */
jQuery.prototype.triggerHandler = function(eventType, extraParameters) {};
/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {jQuery}
 */
jQuery.prototype.trigger = function(eventType, extraParameters) {};
/**
 * Register a handler to be called when Ajax requests complete. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxComplete = function(handler) {};
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
 * Encode a set of form elements as an array of names and values.
 * @since 1.2
 * @returns {Array}
 */
jQuery.prototype.serializeArray = function() {};
/**
 * Encode a set of form elements as a string for submission.
 * @since 1.0
 * @returns {String}
 */
jQuery.prototype.serialize = function() {};
/**
 * Set default values for future Ajax requests.
 * @since 1.1
 * @param {Options} options A set of key/value pairs that configure the default Ajax request. All options are optional. 
 */
jQuery.ajaxSetup = function(options) {};
/**
 * Attach a function to be executed whenever an Ajax request completes successfully. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxSuccess = function(handler) {};
/**
 * Register a handler to be called when all Ajax requests have completed. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxStop = function(handler) {};
/**
 * Register a handler to be called when the first Ajax request begins. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxStart = function(handler) {};
/**
 * Attach a function to be executed before an Ajax request is sent. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxSend = function(handler) {};
/**
 * Register a handler to be called when Ajax requests complete with an error. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQuery}
 */
jQuery.prototype.ajaxError = function(handler) {};
/**
 * Remove a previously-attached event handler from the elements.
 * @since 1.0
 * @param {String} [eventType] A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} [handler] The function that is to be no longer executed.
 * @returns {jQuery}
 */
jQuery.prototype.unbind = function(eventType, handler) {};
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
 * Reduce the set of matched elements to the first in the set.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.first = function() {};
/**
 * Reduce the set of matched elements to the final one in the set.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.last = function() {};
/**
 * Reduce the set of matched elements to a subset specified by a range of indices.
 * @since 1.1
 * @param {Integer} start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
 * @param {Integer} [end] An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
 * @returns {jQuery}
 */
jQuery.prototype.slice = function(start, end) {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @since 1.0
 * @param {selector} selector A string containing a selector expression
 * @param {Element} [context] A DOM Element, Document, or jQuery to use as context
 * @returns {jQuery}
 */
jQuery.prototype.jQuery = function(selector, context) {};
/**
 * Creates DOM elements on the fly from the provided string of raw HTML.
 * @since 1.0
 * @param {String} html A string of HTML to create on the fly. Note that this parses HTML, <strong>not</strong> XML.
 * @param {document} [ownerDocument] A document in which the new elements will be created
 * @returns {jQuery}
 */
jQuery.prototype.jQuery = function(html, ownerDocument) {};
/**
 * Binds a function to be executed when the DOM has finished loading.
 * @since 1.0
 * @param {Function} callback The function to execute when the DOM is ready.
 * @returns {jQuery}
 */
jQuery.prototype.jQuery = function(callback) {};
/**
 * Stop the currently-running animation on the matched elements.
 * @since 1.2
 * @param {Boolean} [clearQueue] A Boolean indicating whether to remove queued animation as well. Defaults to <code>false</code>.
 * @param {Boolean} [jumpToEnd] A Boolean indicating whether to complete the current animation immediately. Defaults to <code>false</code>.
 * @returns {jQuery}
 */
jQuery.prototype.stop = function(clearQueue, jumpToEnd) {};
/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.end = function() {};
/**
 * Add the previous set of elements on the stack to the current set.
 * @since 1.2
 * @returns {jQuery}
 */
jQuery.prototype.andSelf = function() {};
/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.siblings = function(selector) {};
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
 * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.prevAll = function(selector) {};
/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.prev = function(selector) {};
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
 * Hide the matched elements by fading them to transparent.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.fadeOut = function(duration, callback) {};
/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.parents = function(selector) {};
/**
 * Display the matched elements by fading them to opaque.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.fadeIn = function(duration, callback) {};
/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.parent = function(selector) {};
/**
 * Get the closest ancestor element that is positioned.
 * @since 1.2
 * @returns {jQuery}
 */
jQuery.prototype.offsetParent = function() {};
/**
 * Display or hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.slideToggle = function(duration, callback) {};
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
 * Hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.slideUp = function(duration, callback) {};
/**
 * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {String} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.nextAll = function(selector) {};
/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.next = function(selector) {};
/**
 * Display the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.slideDown = function(duration, callback) {};
/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.find = function(selector) {};
/**
 * Load a JavaScript file from the server using a GET HTTP request, then execute it.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Function} [success] A callback function that is executed if the request succeeds.
 * @returns {XMLHttpRequest}
 */
jQuery.getScript = function(url, success) {};
/**
 * Get the children of each element in the set of matched elements, including text and comment nodes.
 * @since 1.2
 * @returns {jQuery}
 */
jQuery.prototype.contents = function() {};
/**
 * Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * @since 1.3
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.closest = function(selector) {};
/**
 * Gets an array of all the elements and selectors matched against the current element up through the DOM tree.
 * @since 1.4
 * @param {Array} selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
 * @param {Element} [context] A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
 * @returns {Array}
 */
jQuery.prototype.closest = function(selectors, context) {};
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
 * Load data from the server and place the returned HTML into the matched element.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} [complete] A callback function that is executed when the request completes.
 * @returns {jQuery}
 */
jQuery.prototype.load = function(url, data, complete) {};
/**
 * Perform an asynchronous HTTP (Ajax) request.
 * @since 1.5
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} [settings] A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with <a>$.ajaxSetup()</a>. See <a>jQuery.ajax( settings )</a> below for a complete list of all settings. 
 * @returns {jqXHR}
 */
jQuery.ajax = function(url, settings) {};
/**
 * The number of elements in the jQuery object.
 * @type {Number}
 */
jQuery.prototype.length = 1;
/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.children = function(selector) {};
/**
 * A selector representing selector originally passed to jQuery().
 * @type {String}
 */
jQuery.prototype.selector = "";
/**
 * Add elements to the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.add = function(selector) {};
/**
 * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
 * @type {Element}
 */
jQuery.prototype.context = null;
/**
 * Remove elements from the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQuery}
 */
jQuery.prototype.not = function(selector) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding and border.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
jQuery.prototype.outerWidth = function(includeMargin) {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
jQuery.prototype.outerHeight = function(includeMargin) {};
/**
 * Display or hide the matched elements.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQuery}
 */
jQuery.prototype.toggle = function(duration, callback) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.innerWidth = function() {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.innerHeight = function() {};
/**
 * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request. 
 * @since 1.2
 * @param {Array} obj An array or object to serialize.
 * @returns {String}
 */
jQuery.param = function(obj) {};
/**
 * Hide the matched elements.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.hide = function() {};
/**
 * Get the current computed width for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQuery.prototype.width = function() {};
/**
 * Set the CSS width of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * @returns {jQuery}
 */
jQuery.prototype.width = function(value) {};
/**
 * Get the current computed height for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQuery.prototype.height = function() {};
/**
 * Set the CSS height of every matched element.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * @returns {jQuery}
 */
jQuery.prototype.height = function(value) {};
/**
 * Display the matched elements.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.show = function() {};
/**
 * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.scrollLeft = function() {};
/**
 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQuery}
 */
jQuery.prototype.scrollLeft = function(value) {};
/**
 * Remove the whitespace from the beginning and end of a string.
 * @since 1.0
 * @param {String} str The string to trim.
 * @returns {String}
 */
jQuery.trim = function(str) {};
/**
 * Determine if the argument passed is a Javascript function object. 
 * @since 1.2
 * @param {Object} obj Object to test whether or not it is a function.
 * @returns {Boolean}
 */
jQuery.isFunction = function(obj) {};
/**
 * Determine whether the argument is an array.
 * @since 1.3
 * @param {Object} obj Object to test whether or not it is an array.
 * @returns {Boolean}
 */
jQuery.isArray = function(obj) {};
/**
 * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
 * @since 1.1
 * @param {Array} array The Array of DOM elements.
 * @returns {Array}
 */
jQuery.unique = function(array) {};
/**
 * Merge the contents of two arrays together into the first array. 
 * @since 1.0
 * @param {Array} first The first array to merge, the elements of second added.
 * @param {Array} second The second array to merge into the first, unaltered.
 * @returns {Array}
 */
jQuery.merge = function(first, second) {};
/**
 * Search for a specified value within an array and return its index (or -1 if not found).
 * @since 1.2
 * @param {Any} value The value to search for.
 * @param {Array} array An array through which to search.
 * @returns {Number}
 */
jQuery.inArray = function(value, array) {};
/**
 * Translate all items in an array or object to new array of items.
 * @since 1.0
 * @param {Array} array The Array to translate.
 * @param {Function} callback The function to process each item against.  The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, <code>this</code> refers to the global (window) object.
 * @returns {Array}
 */
jQuery.map = function(array, callback) {};
/**
 * Convert an array-like object into a true JavaScript array.
 * @since 1.2
 * @param {Object} obj Any object to turn into a native Array.
 * @returns {Array}
 */
jQuery.makeArray = function(obj) {};
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
 * Merge the contents of two or more objects together into the first object.
 * @since 1.0
 * @param {Object} target  An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
 * @param {Object} [object1] An object containing additional properties to merge in.
 * @param {Object} [objectN] Additional objects containing properties to merge in.
 * @returns {Object}
 */
jQuery.extend = function(target, object1, objectN) {};
/**
 * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
 * @since 1.0
 * @param {Object} collection The object or array to iterate over.
 * @param {Function} callback The function that will be executed on every object.
 * @returns {Object}
 */
jQuery.each = function(collection, callback) {};
/**
 * <strong>Deprecated in jQuery 1.3 (see <a>jQuery.support</a>)</strong>. States if the current page, in the user's browser, is being rendered using the <a>W3C CSS Box Model</a>.
 * @type {Boolean}
 */
jQuery.boxModel = true;
/**
 * Get the current vertical position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
jQuery.prototype.scrollTop = function() {};
/**
 * Set the current vertical position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQuery}
 */
jQuery.prototype.scrollTop = function(value) {};
/**
 * A collection of properties that represent the presence of different browser features or bugs.
 * @type {Object}
 */
jQuery.support = {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 * @since 1.2
 * @returns {Object}
 */
jQuery.prototype.position = function() {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 * @since 1.2
 * @returns {Object}
 */
jQuery.prototype.offset = function() {};
/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * @since 1.4
 * @param {Object} coordinates An object containing the properties <code>top</code> and <code>left</code>, which are integers indicating the new top and left coordinates for the elements.
 * @returns {jQuery}
 */
jQuery.prototype.offset = function(coordinates) {};
/**
 * Get the value of a style property for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property.
 * @returns {String}
 */
jQuery.prototype.css = function(propertyName) {};
/**
 * Set one or more CSS properties for the  set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property name.
 * @param {String} value A value to set for the property.
 * @returns {jQuery}
 */
jQuery.prototype.css = function(propertyName, value) {};
/**
 * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
 * @since 1.4
 * @returns {jQuery}
 */
jQuery.prototype.unwrap = function() {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.4
 * @param {Selector} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQuery}
 */
jQuery.prototype.detach = function(selector) {};
/**
 * Create a deep copy of the set of matched elements.
 * @since 1.0
 * @param {Boolean} [withDataAndEvents=false] A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * @returns {jQuery}
 */
jQuery.prototype.clone = function(withDataAndEvents) {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.0
 * @param {String} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQuery}
 */
jQuery.prototype.remove = function(selector) {};
/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * @since 1.0
 * @returns {jQuery}
 */
jQuery.prototype.empty = function() {};
/**
 * Replace each target element with the set of matched elements.
 * @since 1.2
 * @param {Selector} target A selector expression indicating which element(s) to replace.
 * @returns {jQuery}
 */
jQuery.prototype.replaceAll = function(target) {};
/**
 * Replace each element in the set of matched elements with the provided new content.
 * @since 1.2
 * @param {String} newContent The content to insert. May be an HTML string, DOM element, or jQuery object.
 * @returns {jQuery}
 */
jQuery.prototype.replaceWith = function(newContent) {};
/**
 * Wrap an HTML structure around the content of each element in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.wrapInner = function(wrappingElement) {};
/**
 * Wrap an HTML structure around all elements in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.wrapAll = function(wrappingElement) {};
/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * @since 1.0
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.wrap = function(wrappingElement) {};
/**
 * Insert every element in the set of matched elements before the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.insertBefore = function(target) {};
/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.before = function(content, content) {};
/**
 * Insert every element in the set of matched elements after the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.insertAfter = function(target) {};
/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.after = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.prependTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.prepend = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the end of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * @returns {jQuery}
 */
jQuery.prototype.appendTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * @returns {jQuery}
 */
jQuery.prototype.append = function(content, content) {};
/**
 * Get the current value of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String|Array}
 */
jQuery.prototype.val = function() {};
/**
 * Set the value of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * @returns {jQuery}
 */
jQuery.prototype.val = function(value) {};
/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * @since 1.0
 * @returns {String}
 */
jQuery.prototype.text = function() {};
/**
 * Set the content of each element in the set of matched elements to the specified text.
 * @since 1.0
 * @param {String} textString A string of text to set as the content of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.text = function(textString) {};
/**
 * Get the HTML contents of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String}
 */
jQuery.prototype.html = function() {};
/**
 * Set the HTML contents of each element in the set of matched elements.
 * @since 1.0
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.html = function(htmlString) {};
/**
 * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
 * @since 1.2
 * @param {Function} callback A function object that will be invoked for each element in the current set.
 * @returns {jQuery}
 */
jQuery.prototype.map = function(callback) {};
/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {Boolean}
 */
jQuery.prototype.is = function(selector) {};
/**
 * Reduce the set of matched elements to the one at the specified index.
 * @since 1.1
 * @param {Integer} index An integer indicating the 0-based position of the element. 
 * @returns {jQuery}
 */
jQuery.prototype.eq = function(index) {};
/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * @returns {jQuery}
 */
jQuery.prototype.filter = function(selector) {};
/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * @since 1.0
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @returns {jQuery}
 */
jQuery.prototype.toggleClass = function(className) {};
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @since 1.0
 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.removeClass = function(className) {};
/**
 * Determine whether any of the matched elements are assigned the given class.
 * @since 1.2
 * @param {String} className The class name to search for.
 * @returns {Boolean}
 */
jQuery.prototype.hasClass = function(className) {};
/**
 * Remove an attribute from each element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName An attribute to remove.
 * @returns {jQuery}
 */
jQuery.prototype.removeAttr = function(attributeName) {};
/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to get.
 * @returns {String}
 */
jQuery.prototype.attr = function(attributeName) {};
/**
 * Set one or more attributes for the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to set.
 * @param {String} value A value to set for the attribute.
 * @returns {jQuery}
 */
jQuery.prototype.attr = function(attributeName, value) {};
/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @since 1.0
 * @param {String} className One or more class names to be added to the class attribute of each matched element.
 * @returns {jQuery}
 */
jQuery.prototype.addClass = function(className) {};
