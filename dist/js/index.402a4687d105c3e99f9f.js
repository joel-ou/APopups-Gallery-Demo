/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/babel-loader/lib!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib??vue-loader-options!./index/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'popups-gallery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "App",
    components: {
        gallery: !(function webpackMissingModule() { var e = new Error("Cannot find module 'popups-gallery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    data() {
        return {
            imageData: [[__webpack_require__(/*! @/imgs/animal-3.jpg */ "../imgs/animal-3.jpg"), __webpack_require__(/*! @/imgs/animal-1.jpg */ "../imgs/animal-1.jpg"), __webpack_require__(/*! @/imgs/animal-2.jpg */ "../imgs/animal-2.jpg"), __webpack_require__(/*! @/imgs/person-2.jpg */ "../imgs/person-2.jpg"), __webpack_require__(/*! @/imgs/person-1.jpg */ "../imgs/person-1.jpg"), __webpack_require__(/*! @/imgs/1.jpg */ "../imgs/1.jpg"), __webpack_require__(/*! @/imgs/2.jpg */ "../imgs/2.jpg"), __webpack_require__(/*! @/imgs/3.jpg */ "../imgs/3.jpg"), __webpack_require__(/*! @/imgs/4.jpg */ "../imgs/4.jpg")], []],
            galleryDatas: [],
            isShow: false
        };
    },
    methods: {
        showGallery(index) {
            this.galleryDatas = this.imageData[index];
            this.isShow = true;
        }
    },
    computed: {}
});

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js?!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/css-loader!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/sass-loader/lib/loader.js??ref--3-2!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib??vue-loader-options!./index/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhtml, body {\n  font-size: 13px;\n  margin: 0 0;\n  height: 100%;\n  width: 100%;\n  line-height: 1.6rem;\n  text-size-adjust: 100%;\n  background-color: #eaeaea;\n}\nul, ol {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\nul, ol, p {\n  padding: 0;\n  margin: 0;\n}\na:visited, a {\n  color: #009fff;\n}\na {\n  text-decoration: none;\n}\ninput[type=button], input[type=submit], input[type=text], input[type=password] {\n  -webkit-appearance: none;\n  outline: none;\n}\n@media screen and (orientation: landscape) {\nhtml, body {\n    padding-top: constant(safe-area-inset-top);\n    padding-top: env(safe-area-inset-top);\n    padding-left: constant(safe-area-inset-left);\n    padding-left: env(safe-area-inset-left);\n    padding-right: constant(safe-area-inset-right);\n    padding-right: env(safe-area-inset-right);\n}\n}\n.top {\n  width: 85%;\n  margin: 2rem auto;\n}\n.top .log {\n    font-weight: bold;\n    font-size: 2rem;\n}\n.top p {\n    color: #dd3c3c;\n    padding: 1rem 0;\n}\n.content {\n  margin-top: 1rem;\n}\n.content .image-list {\n    margin: auto;\n    border-bottom: 0.1rem solid #c5c5c50a;\n    margin-top: 2rem;\n    text-align: center;\n}\n.content .image-list .image-div {\n      margin: 1rem 0;\n      max-height: 20rem;\n      overflow: hidden;\n}\n.content .image-list .image-div img {\n        display: block;\n        width: 100%;\n}\n.doc {\n  max-width: 1200px;\n  background-color: white;\n  padding: 1rem 1rem;\n  margin: auto;\n}\n.doc pre {\n    background-color: #e4e4e4;\n    overflow: auto;\n    padding: 1rem;\n}\n.doc table td {\n    padding: 0.5rem 1rem;\n}\n.doc table td:nth-of-type(1) {\n      font-weight: bold;\n}\n.bootom {\n  padding: 2rem;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*****************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/css-loader/lib/css-base.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!*********************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/process/browser.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!*******************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/setimmediate/setImmediate.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function (handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function (event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function (handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function (handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function (handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function (handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!****************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/timers-browserify/main.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=template&id=4a49fab7&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib??vue-loader-options!./index/index.vue?vue&type=template&id=4a49fab7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content" },
      [
        _c("div", { staticClass: "image-list" }, [
          _c("img", {
            attrs: { src: __webpack_require__(/*! @/imgs/thumbnail-1.jpg */ "../imgs/thumbnail-1.jpg") },
            on: {
              click: function($event) {
                _vm.showGallery(0)
              }
            }
          }),
          _vm._v(" "),
          _c("p", [_vm._v("tap this picture")])
        ]),
        _vm._v(" "),
        _c("gallery", {
          attrs: { mediaDatas: _vm.galleryDatas, index: 0, show: _vm.isShow },
          on: {
            onClose: function($event) {
              _vm.isShow = false
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "top" }, [
      _c("div", { staticClass: "log" }, [
        _vm._v("\n            APopups-Gallery\n        ")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Current version: 1.0.0 beta")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "doc" }, [
      _c("div", { staticClass: "warning" }, [
        _c("h2", [_vm._v("Before starting")]),
        _vm._v("\n            Before using, you need to know about "),
        _c("span", { staticStyle: { color: "red" } }, [_vm._v("vuejs")]),
        _vm._v(" and "),
        _c("span", { staticStyle: { color: "red" } }, [
          _vm._v("vue's single-file component")
        ]),
        _vm._v(" development\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "getting-started" }, [
        _c("h2", [_vm._v("Getting started")]),
        _vm._v(" "),
        _c("h4", [_vm._v("Step1: install by npm")]),
        _vm._v(" "),
        _c("p", [
          _c("pre", [_c("code", [_vm._v("npm install popups-gallery-vue")])])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Step2: import gallery vue component")]),
        _vm._v(" "),
        _c("p", [
          _c("pre", [
            _c("code", [
              _vm._v('import gallery from "popups-gallery";'),
              _c("br")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Step3: Add to vuejs components")]),
        _vm._v(" "),
        _c("p", [
          _c("pre", [_c("code", [_vm._v("components: { gallery }"), _c("br")])])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Step4: useing gallery component on your vue page")]),
        _vm._v(" "),
        _c("p", [
          _c("pre", [
            _c("code", [
              _vm._v(
                '<gallery :imageDatas="imageDatas" :index="0" :show="isShow" @onClose="isShow=false"></gallery>'
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Parameter:")]),
        _vm._v(" "),
        _c("table", [
          _c("thead", [
            _c("th", [_vm._v("Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Type")]),
            _vm._v(" "),
            _c("th", [_vm._v("Required")]),
            _vm._v(" "),
            _c("th", [_vm._v("Description")])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("imageDatas")]),
              _vm._v(" "),
              _c("td", [_vm._v("array")]),
              _vm._v(" "),
              _c("td", [_vm._v("true")]),
              _vm._v(" "),
              _c("td", [_vm._v("The images you want to show")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("index")]),
              _vm._v(" "),
              _c("td", [_vm._v("number")]),
              _vm._v(" "),
              _c("td", [_vm._v("false")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("The index of the images shown starts at 0. "),
                _c("span", { staticStyle: { color: "red" } }, [
                  _vm._v("defualt: 0")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("show")]),
              _vm._v(" "),
              _c("td", [_vm._v("boolean")]),
              _vm._v(" "),
              _c("td", [_vm._v("true")]),
              _vm._v(" "),
              _c("td", [_vm._v("Display and close flags")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("onClose")]),
              _vm._v(" "),
              _c("td", [_vm._v("function")]),
              _vm._v(" "),
              _c("td", [_vm._v("true")]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  "You must change the show value to false inside the function"
                )
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bootom" }, [
      _vm._v("\n        License: MIT "),
      _c("a", { staticStyle: { "margin-left": "2rem" } }, [_vm._v("Github")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticStyle: { "margin-left": "2rem" },
          attrs: { href: "mailto:8019893@qq.com" }
        },
        [_vm._v("8019893@qq.com")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!************************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js?!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-style-loader!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/css-loader!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/sass-loader/lib/loader.js??ref--3-2!/Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-loader/lib??vue-loader-options!./index/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--3-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js?!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "../../node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5aa450a0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "../../node_modules/vue-style-loader/lib/addStylesClient.js":
/*!******************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "../../node_modules/vue-style-loader/lib/listToStyles.js");
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_listToStyles__WEBPACK_IMPORTED_MODULE_0__);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = _listToStyles__WEBPACK_IMPORTED_MODULE_0___default()(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = _listToStyles__WEBPACK_IMPORTED_MODULE_0___default()(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "../../node_modules/vue-style-loader/lib/listToStyles.js":
/*!***************************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
}

/***/ }),

/***/ "../../node_modules/vue/dist/vue.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** /Users/ouwei/Desktop/APopups-Gallery-Demo/node_modules/vue/dist/vue.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}

/**
 * Check if value is primitive
 */
function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' ||
  // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 */
function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop(a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) {
  return false;
};

/**
 * Return same value
 */
var identity = function (_) {
  return _;
};

/**
 * Generate a static keys string from compiler modules.
 */

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

/**
 * Ensure a function is called only once.
 */
function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = ['component', 'directive', 'filter'];

var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = {}.watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check
var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) {
        res += str;
      }
      if (n > 1) {
        str += str;
      }
      n >>= 1;
    }
    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned;
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;
    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    // notify change
    ob.dep.notify();
    return result;
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment(target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive(obj, key, val, customSetter, shallow) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set(target, key, val) {
  if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
  if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }
  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */
strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) {
    extend(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Validate component names
 */
function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps(options, vm) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject(options, vm) {
  var inject = options.inject;
  if (!inject) {
    return;
  }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

/*  */

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 */
function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}

/*  */

function handleError(err, vm, info) {
  if (vm) {
    var cur = vm;
    while (cur = cur.$parent) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) {
              return;
            }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
// PhantomJS
MessageChannel.toString() === '[object MessageChannelConstructor]')) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) {
      setTimeout(noop);
    }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask(fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res;
  });
}

function nextTick(cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

/*  */

function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }
  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node;
}

function resolveAsyncComponent(factory, baseCtor, context) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : undefined);
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}

/*  */

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

/*  */

function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

/*  */

/*  */

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm;
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break;
        }
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, "event handler for \"" + event + "\"");
        }
      }
    }
    return vm;
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}

function resolveScopedSlots(fns, // see flow/vnode
res) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res;
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle(vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
      , vm.$options._parentElm, vm.$options._refElm);
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  parentVnode.data.scopedSlots || // has new scoped slots
  vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value;
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);
  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }
      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (true) {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

/*  */

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
      /* istanbul ignore next */
      return Object.getOwnPropertyDescriptor(inject, key).enumerable;
    }) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }
    return result;
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    ret._isVList = true;
  }
  return ret;
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

/*  */

function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }
  return data;
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree;
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data;
}

/*  */

function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    return resolveSlots(children, parent);
  };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }
    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },

  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent, // activeInstance in lifecycle state
parentElm, refElm) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  }
  // warn against non-primitive key
  if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }
    if (isDef(data)) {
      registerDeepBindings(data);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender(vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode;
  };
}

/*  */

var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue(options) {
  if ("development" !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this;
  };
}

/*  */

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}

/*  */

function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

/*  */

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted() {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },

  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
      // not included
      include && (!name || !matches(include, name)) ||
      // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
      // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive

  /*  */

};function initGlobalAPI(Vue) {
  // config
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};

/*  */

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */
  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }
      res += key;
    }
  }
  return res;
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

/*  */

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove() {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope(vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true /* hydrating */);
      }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false;
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(vnode, insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];

/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs

  /*  */

};function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass

  /*  */

  /*  */

  // add a raw attr (use this in preTransforms)


  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */

  /*  */

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
};var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler(handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler() {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
}

function add$1(event, handler, once$$1, capture, passive) {
  handler = withMacroTask(handler);
  if (once$$1) {
    handler = createOnceHandler(handler, event, capture);
  }
  target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners

  /*  */

};function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}
  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false;
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps

  /*  */

};var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
};function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition(def) {
  if (!def) {
    return;
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res;
  } else if (typeof def === 'string') {
    return autoCssTransition(def);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

/*  */

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return;
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

};var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return;
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) {
      return c.tag || isAsyncPlaceholder(c);
    });
    /* istanbul ignore if */
    if (!children.length) {
      return;
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
    // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave;
        var performLeave = function () {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

};var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    // force removing pass
    this.__patch__(this._vnode, this.kept, false, // hydrating
    true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove;
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup

  /*  */

  // install platform specific utils
};Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if ("development" !== 'production' && "development" !== 'test' && isChrome) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
    if ("development" !== 'production' && "development" !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "../imgs/1.jpg":
/*!*********************!*\
  !*** ../imgs/1.jpg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/fba734e0a4306df3e979997611351c49.jpg";

/***/ }),

/***/ "../imgs/2.jpg":
/*!*********************!*\
  !*** ../imgs/2.jpg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/0490971dc8a28391a69f114755298dac.jpg";

/***/ }),

/***/ "../imgs/3.jpg":
/*!*********************!*\
  !*** ../imgs/3.jpg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/b99c7664631c1308c84ba999644729a5.jpg";

/***/ }),

/***/ "../imgs/4.jpg":
/*!*********************!*\
  !*** ../imgs/4.jpg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/9aea93f1c3cb18404b9c44ba0aa36bde.jpg";

/***/ }),

/***/ "../imgs/animal-1.jpg":
/*!****************************!*\
  !*** ../imgs/animal-1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/651f27f321246163f6bcd433e36dba59.jpg";

/***/ }),

/***/ "../imgs/animal-2.jpg":
/*!****************************!*\
  !*** ../imgs/animal-2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/69106d33f9f298fba6c8ad9a7989a2d8.jpg";

/***/ }),

/***/ "../imgs/animal-3.jpg":
/*!****************************!*\
  !*** ../imgs/animal-3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/f74fdd1c93811cceca0c83128300b8a6.jpg";

/***/ }),

/***/ "../imgs/person-1.jpg":
/*!****************************!*\
  !*** ../imgs/person-1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/10da7f8fb943f4c43670e5f776a233c3.jpg";

/***/ }),

/***/ "../imgs/person-2.jpg":
/*!****************************!*\
  !*** ../imgs/person-2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/02140c3a61fb6855ec3ce038fe5ef674.jpg";

/***/ }),

/***/ "../imgs/thumbnail-1.jpg":
/*!*******************************!*\
  !*** ../imgs/thumbnail-1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "imgs/aa490c2b3566075a63e8c6331657dc6e.jpg";

/***/ }),

/***/ "./index/index.js":
/*!************************!*\
  !*** ./index/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue */ "./index/index.vue");



new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: "#app",
    components: { Index: _index_vue__WEBPACK_IMPORTED_MODULE_1__["default"] },
    render(h) {
        return h('Index');
    }
});

/***/ }),

/***/ "./index/index.vue":
/*!*************************!*\
  !*** ./index/index.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4a49fab7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4a49fab7& */ "./index/index.vue?vue&type=template&id=4a49fab7&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./index/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./index/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4a49fab7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4a49fab7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./index/index.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./index/index.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./index/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************!*\
  !*** ./index/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js??ref--3-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js?!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_3_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./index/index.vue?vue&type=template&id=4a49fab7&":
/*!********************************************************!*\
  !*** ./index/index.vue?vue&type=template&id=4a49fab7& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a49fab7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4a49fab7& */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./index/index.vue?vue&type=template&id=4a49fab7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a49fab7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4a49fab7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2luZGV4L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9pbmRleC9pbmRleC52dWU/ZjU4OSIsIndlYnBhY2s6Ly8vL1VzZXJzL291d2VpL0Rlc2t0b3AvQVBvcHVwcy1HYWxsZXJ5LURlbW8vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8vVXNlcnMvb3V3ZWkvRGVza3RvcC9BUG9wdXBzLUdhbGxlcnktRGVtby9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8vVXNlcnMvb3V3ZWkvRGVza3RvcC9BUG9wdXBzLUdhbGxlcnktRGVtby9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL291d2VpL0Rlc2t0b3AvQVBvcHVwcy1HYWxsZXJ5LURlbW8vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgvaW5kZXgudnVlPzVlOWQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9vdXdlaS9EZXNrdG9wL0FQb3B1cHMtR2FsbGVyeS1EZW1vL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgvaW5kZXgudnVlPzRhYWYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9vdXdlaS9EZXNrdG9wL0FQb3B1cHMtR2FsbGVyeS1EZW1vL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9vdXdlaS9EZXNrdG9wL0FQb3B1cHMtR2FsbGVyeS1EZW1vL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9vdXdlaS9EZXNrdG9wL0FQb3B1cHMtR2FsbGVyeS1EZW1vL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vaW1ncy8xLmpwZyIsIndlYnBhY2s6Ly8vLi4vaW1ncy8yLmpwZyIsIndlYnBhY2s6Ly8vLi4vaW1ncy8zLmpwZyIsIndlYnBhY2s6Ly8vLi4vaW1ncy80LmpwZyIsIndlYnBhY2s6Ly8vLi4vaW1ncy9hbmltYWwtMS5qcGciLCJ3ZWJwYWNrOi8vLy4uL2ltZ3MvYW5pbWFsLTIuanBnIiwid2VicGFjazovLy8uLi9pbWdzL2FuaW1hbC0zLmpwZyIsIndlYnBhY2s6Ly8vLi4vaW1ncy9wZXJzb24tMS5qcGciLCJ3ZWJwYWNrOi8vLy4uL2ltZ3MvcGVyc29uLTIuanBnIiwid2VicGFjazovLy8uLi9pbWdzL3RodW1ibmFpbC0xLmpwZyIsIndlYnBhY2s6Ly8vLi9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgvaW5kZXgudnVlP2JhMGIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgvaW5kZXgudnVlP2YyYTUiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgvaW5kZXgudnVlPzQwZmEiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInByb2Nlc3MiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsIkVycm9yIiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZ2xvYmFsIiwidW5kZWZpbmVkIiwic2V0SW1tZWRpYXRlIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJkb2N1bWVudCIsInJlZ2lzdGVySW1tZWRpYXRlIiwiY2FsbGJhY2siLCJGdW5jdGlvbiIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImhhbmRsZSIsInJ1bklmUHJlc2VudCIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwiY2FuVXNlUG9zdE1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4IiwiTWF0aCIsInJhbmRvbSIsIm9uR2xvYmFsTWVzc2FnZSIsImV2ZW50IiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwic2VsZiIsInNjb3BlIiwid2luZG93IiwiVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwicmVxdWlyZSIsImxpc3RUb1N0eWxlcyIsInBhcmVudElkIiwic3R5bGVzIiwibmV3U3R5bGVzIiwiY3NzIiwibWVkaWEiLCJwYXJ0IiwicGFydHMiLCJlbXB0eU9iamVjdCIsImZyZWV6ZSIsImlzVW5kZWYiLCJ2IiwiaXNEZWYiLCJpc1RydWUiLCJpc0ZhbHNlIiwiaXNQcmltaXRpdmUiLCJ2YWx1ZSIsImlzT2JqZWN0Iiwib2JqIiwiX3RvU3RyaW5nIiwidG9SYXdUeXBlIiwiaXNQbGFpbk9iamVjdCIsImlzUmVnRXhwIiwiaXNWYWxpZEFycmF5SW5kZXgiLCJ2YWwiLCJuIiwicGFyc2VGbG9hdCIsIlN0cmluZyIsImZsb29yIiwiaXNGaW5pdGUiLCJ0b051bWJlciIsImlzTmFOIiwibWFrZU1hcCIsInN0ciIsImV4cGVjdHNMb3dlckNhc2UiLCJjcmVhdGUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiaXNCdWlsdEluVGFnIiwiaXNSZXNlcnZlZEF0dHJpYnV0ZSIsInJlbW92ZSIsImFyciIsImluZGV4Iiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJrZXkiLCJjYWNoZWQiLCJmbiIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwiXyIsImMiLCJ0b1VwcGVyQ2FzZSIsImNhcGl0YWxpemUiLCJjaGFyQXQiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInBvbHlmaWxsQmluZCIsImN0eCIsImJvdW5kRm4iLCJhIiwibCIsIl9sZW5ndGgiLCJuYXRpdmVCaW5kIiwiYmluZCIsInRvQXJyYXkiLCJzdGFydCIsInJldCIsImV4dGVuZCIsInRvIiwiX2Zyb20iLCJ0b09iamVjdCIsInJlcyIsImIiLCJubyIsImlkZW50aXR5IiwibG9vc2VFcXVhbCIsImlzT2JqZWN0QSIsImlzT2JqZWN0QiIsImlzQXJyYXlBIiwiaXNBcnJheSIsImlzQXJyYXlCIiwiZXZlcnkiLCJrZXlzQSIsImtleXMiLCJrZXlzQiIsImxvb3NlSW5kZXhPZiIsImNhbGxlZCIsIlNTUl9BVFRSIiwiQVNTRVRfVFlQRVMiLCJMSUZFQ1lDTEVfSE9PS1MiLCJjb25maWciLCJvcHRpb25NZXJnZVN0cmF0ZWdpZXMiLCJzaWxlbnQiLCJwcm9kdWN0aW9uVGlwIiwiZGV2dG9vbHMiLCJwZXJmb3JtYW5jZSIsImVycm9ySGFuZGxlciIsIndhcm5IYW5kbGVyIiwiaWdub3JlZEVsZW1lbnRzIiwia2V5Q29kZXMiLCJpc1Jlc2VydmVkVGFnIiwiaXNSZXNlcnZlZEF0dHIiLCJpc1Vua25vd25FbGVtZW50IiwiZ2V0VGFnTmFtZXNwYWNlIiwicGFyc2VQbGF0Zm9ybVRhZ05hbWUiLCJtdXN0VXNlUHJvcCIsIl9saWZlY3ljbGVIb29rcyIsImlzUmVzZXJ2ZWQiLCJjaGFyQ29kZUF0IiwiZGVmIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJiYWlsUkUiLCJwYXJzZVBhdGgiLCJwYXRoIiwidGVzdCIsInNlZ21lbnRzIiwiaGFzUHJvdG8iLCJpbkJyb3dzZXIiLCJpbldlZXgiLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJ3ZWV4UGxhdGZvcm0iLCJVQSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzSUUiLCJpc0lFOSIsImlzRWRnZSIsImlzQW5kcm9pZCIsImlzSU9TIiwiaXNDaHJvbWUiLCJuYXRpdmVXYXRjaCIsIndhdGNoIiwic3VwcG9ydHNQYXNzaXZlIiwib3B0cyIsImdldCIsIl9pc1NlcnZlciIsImlzU2VydmVyUmVuZGVyaW5nIiwiVlVFX0VOViIsIl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJpc05hdGl2ZSIsIkN0b3IiLCJoYXNTeW1ib2wiLCJTeW1ib2wiLCJSZWZsZWN0Iiwib3duS2V5cyIsIl9TZXQiLCJTZXQiLCJzZXQiLCJoYXMiLCJhZGQiLCJjbGVhciIsIndhcm4iLCJ0aXAiLCJnZW5lcmF0ZUNvbXBvbmVudFRyYWNlIiwiZm9ybWF0Q29tcG9uZW50TmFtZSIsImhhc0NvbnNvbGUiLCJjb25zb2xlIiwiY2xhc3NpZnlSRSIsImNsYXNzaWZ5IiwibXNnIiwidm0iLCJ0cmFjZSIsImVycm9yIiwiaW5jbHVkZUZpbGUiLCIkcm9vdCIsIm9wdGlvbnMiLCJjaWQiLCJfaXNWdWUiLCIkb3B0aW9ucyIsImNvbnN0cnVjdG9yIiwiX2NvbXBvbmVudFRhZyIsImZpbGUiLCJfX2ZpbGUiLCJtYXRjaCIsInJlcGVhdCIsIiRwYXJlbnQiLCJ0cmVlIiwiY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlIiwibGFzdCIsInVpZCIsIkRlcCIsInN1YnMiLCJhZGRTdWIiLCJzdWIiLCJyZW1vdmVTdWIiLCJkZXBlbmQiLCJ0YXJnZXQiLCJhZGREZXAiLCJub3RpZnkiLCJ1cGRhdGUiLCJ0YXJnZXRTdGFjayIsInB1c2hUYXJnZXQiLCJfdGFyZ2V0IiwicG9wVGFyZ2V0IiwicG9wIiwiVk5vZGUiLCJ0YWciLCJjaGlsZHJlbiIsInRleHQiLCJlbG0iLCJjb250ZXh0IiwiY29tcG9uZW50T3B0aW9ucyIsImFzeW5jRmFjdG9yeSIsIm5zIiwiZm5Db250ZXh0IiwiZm5PcHRpb25zIiwiZm5TY29wZUlkIiwiY29tcG9uZW50SW5zdGFuY2UiLCJwYXJlbnQiLCJyYXciLCJpc1N0YXRpYyIsImlzUm9vdEluc2VydCIsImlzQ29tbWVudCIsImlzQ2xvbmVkIiwiaXNPbmNlIiwiYXN5bmNNZXRhIiwiaXNBc3luY1BsYWNlaG9sZGVyIiwicHJvdG90eXBlQWNjZXNzb3JzIiwiY2hpbGQiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY3JlYXRlRW1wdHlWTm9kZSIsIm5vZGUiLCJjcmVhdGVUZXh0Vk5vZGUiLCJjbG9uZVZOb2RlIiwidm5vZGUiLCJjbG9uZWQiLCJhcnJheVByb3RvIiwiYXJyYXlNZXRob2RzIiwibWV0aG9kc1RvUGF0Y2giLCJmb3JFYWNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJtdXRhdG9yIiwicmVzdWx0Iiwib2IiLCJfX29iX18iLCJpbnNlcnRlZCIsIm9ic2VydmVBcnJheSIsImRlcCIsImFycmF5S2V5cyIsImdldE93blByb3BlcnR5TmFtZXMiLCJzaG91bGRPYnNlcnZlIiwidG9nZ2xlT2JzZXJ2aW5nIiwiT2JzZXJ2ZXIiLCJ2bUNvdW50IiwiYXVnbWVudCIsInByb3RvQXVnbWVudCIsImNvcHlBdWdtZW50Iiwid2FsayIsImRlZmluZVJlYWN0aXZlIiwiaXRlbXMiLCJvYnNlcnZlIiwic3JjIiwiX19wcm90b19fIiwiYXNSb290RGF0YSIsImlzRXh0ZW5zaWJsZSIsImN1c3RvbVNldHRlciIsInNoYWxsb3ciLCJwcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldHRlciIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsImRlcGVuZEFycmF5IiwicmVhY3RpdmVTZXR0ZXIiLCJuZXdWYWwiLCJtYXgiLCJkZWwiLCJzdHJhdHMiLCJlbCIsInByb3BzRGF0YSIsImRlZmF1bHRTdHJhdCIsIm1lcmdlRGF0YSIsImZyb20iLCJ0b1ZhbCIsImZyb21WYWwiLCJtZXJnZURhdGFPckZuIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJtZXJnZWREYXRhRm4iLCJtZXJnZWRJbnN0YW5jZURhdGFGbiIsImluc3RhbmNlRGF0YSIsImRlZmF1bHREYXRhIiwibWVyZ2VIb29rIiwiaG9vayIsIm1lcmdlQXNzZXRzIiwiYXNzZXJ0T2JqZWN0VHlwZSIsInR5cGUiLCJrZXkkMSIsInByb3BzIiwibWV0aG9kcyIsImluamVjdCIsImNvbXB1dGVkIiwicHJvdmlkZSIsImNoZWNrQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJ2YWxpZGF0ZUNvbXBvbmVudE5hbWUiLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZUluamVjdCIsIm5vcm1hbGl6ZWQiLCJub3JtYWxpemVEaXJlY3RpdmVzIiwiZGlycyIsImRpcmVjdGl2ZXMiLCJtZXJnZU9wdGlvbnMiLCJleHRlbmRzRnJvbSIsImV4dGVuZHMiLCJtaXhpbnMiLCJtZXJnZUZpZWxkIiwic3RyYXQiLCJyZXNvbHZlQXNzZXQiLCJ3YXJuTWlzc2luZyIsImFzc2V0cyIsImNhbWVsaXplZElkIiwiUGFzY2FsQ2FzZUlkIiwidmFsaWRhdGVQcm9wIiwicHJvcE9wdGlvbnMiLCJwcm9wIiwiYWJzZW50IiwiYm9vbGVhbkluZGV4IiwiZ2V0VHlwZUluZGV4IiwiQm9vbGVhbiIsInN0cmluZ0luZGV4IiwiZ2V0UHJvcERlZmF1bHRWYWx1ZSIsInByZXZTaG91bGRPYnNlcnZlIiwiYXNzZXJ0UHJvcCIsImRlZmF1bHQiLCJfcHJvcHMiLCJnZXRUeXBlIiwicmVxdWlyZWQiLCJ2YWxpZCIsImV4cGVjdGVkVHlwZXMiLCJhc3NlcnRlZFR5cGUiLCJhc3NlcnRUeXBlIiwiZXhwZWN0ZWRUeXBlIiwidmFsaWRhdG9yIiwic2ltcGxlQ2hlY2tSRSIsInQiLCJpc1NhbWVUeXBlIiwiaGFuZGxlRXJyb3IiLCJlcnIiLCJpbmZvIiwiY3VyIiwiaG9va3MiLCJlcnJvckNhcHR1cmVkIiwiY2FwdHVyZSIsImdsb2JhbEhhbmRsZUVycm9yIiwibG9nRXJyb3IiLCJjYWxsYmFja3MiLCJwZW5kaW5nIiwiZmx1c2hDYWxsYmFja3MiLCJjb3BpZXMiLCJtaWNyb1RpbWVyRnVuYyIsIm1hY3JvVGltZXJGdW5jIiwidXNlTWFjcm9UYXNrIiwicG9ydCIsIlByb21pc2UiLCJwIiwicmVzb2x2ZSIsInRoZW4iLCJ3aXRoTWFjcm9UYXNrIiwiX3dpdGhUYXNrIiwiY2IiLCJfcmVzb2x2ZSIsImluaXRQcm94eSIsImFsbG93ZWRHbG9iYWxzIiwid2Fybk5vblByZXNlbnQiLCJoYXNQcm94eSIsIlByb3h5IiwiaXNCdWlsdEluTW9kaWZpZXIiLCJoYXNIYW5kbGVyIiwiaXNBbGxvd2VkIiwiZ2V0SGFuZGxlciIsImhhbmRsZXJzIiwicmVuZGVyIiwiX3dpdGhTdHJpcHBlZCIsIl9yZW5kZXJQcm94eSIsInNlZW5PYmplY3RzIiwidHJhdmVyc2UiLCJfdHJhdmVyc2UiLCJzZWVuIiwiaXNBIiwiaXNGcm96ZW4iLCJkZXBJZCIsIm1hcmsiLCJtZWFzdXJlIiwicGVyZiIsImNsZWFyTWFya3MiLCJjbGVhck1lYXN1cmVzIiwic3RhcnRUYWciLCJlbmRUYWciLCJub3JtYWxpemVFdmVudCIsInBhc3NpdmUiLCJvbmNlJCQxIiwiY3JlYXRlRm5JbnZva2VyIiwiZm5zIiwiaW52b2tlciIsImFyZ3VtZW50cyQxIiwidXBkYXRlTGlzdGVuZXJzIiwib2xkT24iLCJyZW1vdmUkJDEiLCJvbGQiLCJwYXJhbXMiLCJtZXJnZVZOb2RlSG9vayIsImhvb2tLZXkiLCJvbGRIb29rIiwid3JhcHBlZEhvb2siLCJtZXJnZWQiLCJleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIiwiYXR0cnMiLCJhbHRLZXkiLCJrZXlJbkxvd2VyQ2FzZSIsImNoZWNrUHJvcCIsImhhc2giLCJwcmVzZXJ2ZSIsInNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVBcnJheUNoaWxkcmVuIiwiaXNUZXh0Tm9kZSIsIm5lc3RlZEluZGV4IiwibGFzdEluZGV4Iiwic2hpZnQiLCJfaXNWTGlzdCIsImVuc3VyZUN0b3IiLCJjb21wIiwiYmFzZSIsIl9fZXNNb2R1bGUiLCJ0b1N0cmluZ1RhZyIsImNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIiLCJmYWN0b3J5IiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50IiwiYmFzZUN0b3IiLCJlcnJvckNvbXAiLCJyZXNvbHZlZCIsImxvYWRpbmciLCJsb2FkaW5nQ29tcCIsImNvbnRleHRzIiwic3luYyIsImZvcmNlUmVuZGVyIiwiJGZvcmNlVXBkYXRlIiwicmVqZWN0IiwicmVhc29uIiwiY29tcG9uZW50IiwiZGVsYXkiLCJnZXRGaXJzdENvbXBvbmVudENoaWxkIiwiaW5pdEV2ZW50cyIsIl9ldmVudHMiLCJfaGFzSG9va0V2ZW50IiwiX3BhcmVudExpc3RlbmVycyIsInVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyIsIiRvbmNlIiwiJG9uIiwicmVtb3ZlJDEiLCIkb2ZmIiwib2xkTGlzdGVuZXJzIiwiZXZlbnRzTWl4aW4iLCJWdWUiLCJob29rUkUiLCJ0aGlzJDEiLCJjYnMiLCJpJDEiLCIkZW1pdCIsImxvd2VyQ2FzZUV2ZW50IiwicmVzb2x2ZVNsb3RzIiwic2xvdHMiLCJzbG90IiwibmFtZSQxIiwiaXNXaGl0ZXNwYWNlIiwicmVzb2x2ZVNjb3BlZFNsb3RzIiwiYWN0aXZlSW5zdGFuY2UiLCJpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQiLCJpbml0TGlmZWN5Y2xlIiwiYWJzdHJhY3QiLCIkY2hpbGRyZW4iLCIkcmVmcyIsIl93YXRjaGVyIiwiX2luYWN0aXZlIiwiX2RpcmVjdEluYWN0aXZlIiwiX2lzTW91bnRlZCIsIl9pc0Rlc3Ryb3llZCIsIl9pc0JlaW5nRGVzdHJveWVkIiwibGlmZWN5Y2xlTWl4aW4iLCJfdXBkYXRlIiwiaHlkcmF0aW5nIiwiY2FsbEhvb2siLCJwcmV2RWwiLCIkZWwiLCJwcmV2Vm5vZGUiLCJfdm5vZGUiLCJwcmV2QWN0aXZlSW5zdGFuY2UiLCJfX3BhdGNoX18iLCJfcGFyZW50RWxtIiwiX3JlZkVsbSIsIl9fdnVlX18iLCIkdm5vZGUiLCIkZGVzdHJveSIsInRlYXJkb3duIiwiX3dhdGNoZXJzIiwiX2RhdGEiLCJtb3VudENvbXBvbmVudCIsInRlbXBsYXRlIiwidXBkYXRlQ29tcG9uZW50IiwiX25hbWUiLCJfdWlkIiwiX3JlbmRlciIsIldhdGNoZXIiLCJ1cGRhdGVDaGlsZENvbXBvbmVudCIsInBhcmVudFZub2RlIiwicmVuZGVyQ2hpbGRyZW4iLCJoYXNDaGlsZHJlbiIsIl9yZW5kZXJDaGlsZHJlbiIsInNjb3BlZFNsb3RzIiwiJHNjb3BlZFNsb3RzIiwiX3BhcmVudFZub2RlIiwiJGF0dHJzIiwiJGxpc3RlbmVycyIsInByb3BLZXlzIiwiX3Byb3BLZXlzIiwiJHNsb3RzIiwiaXNJbkluYWN0aXZlVHJlZSIsImFjdGl2YXRlQ2hpbGRDb21wb25lbnQiLCJkaXJlY3QiLCJkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQiLCJqIiwiTUFYX1VQREFURV9DT1VOVCIsImFjdGl2YXRlZENoaWxkcmVuIiwiY2lyY3VsYXIiLCJ3YWl0aW5nIiwiZmx1c2hpbmciLCJyZXNldFNjaGVkdWxlclN0YXRlIiwiZmx1c2hTY2hlZHVsZXJRdWV1ZSIsIndhdGNoZXIiLCJzb3J0IiwidXNlciIsImV4cHJlc3Npb24iLCJhY3RpdmF0ZWRRdWV1ZSIsInVwZGF0ZWRRdWV1ZSIsImNhbGxBY3RpdmF0ZWRIb29rcyIsImNhbGxVcGRhdGVkSG9va3MiLCJxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCIsInF1ZXVlV2F0Y2hlciIsInVpZCQxIiwiZXhwT3JGbiIsImlzUmVuZGVyV2F0Y2hlciIsImRlZXAiLCJsYXp5IiwiZGlydHkiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImNsZWFudXBEZXBzIiwidG1wIiwib2xkVmFsdWUiLCJldmFsdWF0ZSIsInNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiIsInByb3h5Iiwic291cmNlS2V5IiwicHJveHlHZXR0ZXIiLCJwcm94eVNldHRlciIsImluaXRTdGF0ZSIsImluaXRQcm9wcyIsImluaXRNZXRob2RzIiwiaW5pdERhdGEiLCJpbml0Q29tcHV0ZWQiLCJpbml0V2F0Y2giLCJwcm9wc09wdGlvbnMiLCJpc1Jvb3QiLCJsb29wIiwiaHlwaGVuYXRlZEtleSIsImdldERhdGEiLCJjb21wdXRlZFdhdGNoZXJPcHRpb25zIiwid2F0Y2hlcnMiLCJfY29tcHV0ZWRXYXRjaGVycyIsImlzU1NSIiwidXNlckRlZiIsImRlZmluZUNvbXB1dGVkIiwiJGRhdGEiLCJzaG91bGRDYWNoZSIsImNyZWF0ZUNvbXB1dGVkR2V0dGVyIiwiY29tcHV0ZWRHZXR0ZXIiLCJoYW5kbGVyIiwiY3JlYXRlV2F0Y2hlciIsIiR3YXRjaCIsInN0YXRlTWl4aW4iLCJkYXRhRGVmIiwicHJvcHNEZWYiLCJuZXdEYXRhIiwiJHNldCIsIiRkZWxldGUiLCJpbW1lZGlhdGUiLCJ1bndhdGNoRm4iLCJpbml0UHJvdmlkZSIsIl9wcm92aWRlZCIsImluaXRJbmplY3Rpb25zIiwicmVzb2x2ZUluamVjdCIsImZpbHRlciIsInByb3ZpZGVLZXkiLCJwcm92aWRlRGVmYXVsdCIsInJlbmRlckxpc3QiLCJyZW5kZXJTbG90IiwiZmFsbGJhY2siLCJiaW5kT2JqZWN0Iiwic2NvcGVkU2xvdEZuIiwibm9kZXMiLCJzbG90Tm9kZXMiLCJfcmVuZGVyZWQiLCIkY3JlYXRlRWxlbWVudCIsInJlc29sdmVGaWx0ZXIiLCJpc0tleU5vdE1hdGNoIiwiZXhwZWN0IiwiYWN0dWFsIiwiY2hlY2tLZXlDb2RlcyIsImV2ZW50S2V5Q29kZSIsImJ1aWx0SW5LZXlDb2RlIiwiZXZlbnRLZXlOYW1lIiwiYnVpbHRJbktleU5hbWUiLCJtYXBwZWRLZXlDb2RlIiwiYmluZE9iamVjdFByb3BzIiwiYXNQcm9wIiwiaXNTeW5jIiwiZG9tUHJvcHMiLCIkZXZlbnQiLCJyZW5kZXJTdGF0aWMiLCJpc0luRm9yIiwiX3N0YXRpY1RyZWVzIiwic3RhdGljUmVuZGVyRm5zIiwibWFya1N0YXRpYyIsIm1hcmtPbmNlIiwibWFya1N0YXRpY05vZGUiLCJiaW5kT2JqZWN0TGlzdGVuZXJzIiwiZXhpc3RpbmciLCJvdXJzIiwiaW5zdGFsbFJlbmRlckhlbHBlcnMiLCJfbyIsIl9uIiwiX3MiLCJfbCIsIl90IiwiX3EiLCJfaSIsIl9tIiwiX2YiLCJfayIsIl9iIiwiX3YiLCJfZSIsIl91IiwiX2ciLCJGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCIsImNvbnRleHRWbSIsIl9vcmlnaW5hbCIsImlzQ29tcGlsZWQiLCJfY29tcGlsZWQiLCJuZWVkTm9ybWFsaXphdGlvbiIsImluamVjdGlvbnMiLCJfc2NvcGVJZCIsIl9jIiwiZCIsImNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQiLCJtZXJnZVByb3BzIiwicmVuZGVyQ29udGV4dCIsImNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQiLCJ2bm9kZXMiLCJjbG9uZSIsImNvbXBvbmVudFZOb2RlSG9va3MiLCJpbml0IiwicGFyZW50RWxtIiwicmVmRWxtIiwia2VlcEFsaXZlIiwibW91bnRlZE5vZGUiLCJwcmVwYXRjaCIsImNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUiLCIkbW91bnQiLCJvbGRWbm9kZSIsImluc2VydCIsImRlc3Ryb3kiLCJob29rc1RvTWVyZ2UiLCJjcmVhdGVDb21wb25lbnQiLCJfYmFzZSIsInJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMiLCJtb2RlbCIsInRyYW5zZm9ybU1vZGVsIiwiZnVuY3Rpb25hbCIsIm5hdGl2ZU9uIiwiaW5zdGFsbENvbXBvbmVudEhvb2tzIiwiX2lzQ29tcG9uZW50IiwiaW5saW5lVGVtcGxhdGUiLCJTSU1QTEVfTk9STUFMSVpFIiwiQUxXQVlTX05PUk1BTElaRSIsIm5vcm1hbGl6YXRpb25UeXBlIiwiYWx3YXlzTm9ybWFsaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJpcyIsImFwcGx5TlMiLCJyZWdpc3RlckRlZXBCaW5kaW5ncyIsImZvcmNlIiwic3R5bGUiLCJjbGFzcyIsImluaXRSZW5kZXIiLCJwYXJlbnREYXRhIiwicmVuZGVyTWl4aW4iLCIkbmV4dFRpY2siLCJyZW5kZXJFcnJvciIsInVpZCQzIiwiaW5pdE1peGluIiwiX2luaXQiLCJpbml0SW50ZXJuYWxDb21wb25lbnQiLCJfc2VsZiIsInZub2RlQ29tcG9uZW50T3B0aW9ucyIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiY2FjaGVkU3VwZXJPcHRpb25zIiwibW9kaWZpZWRPcHRpb25zIiwicmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJtb2RpZmllZCIsImxhdGVzdCIsImV4dGVuZGVkIiwic2VhbGVkIiwic2VhbGVkT3B0aW9ucyIsImRlZHVwZSIsImluaXRVc2UiLCJ1c2UiLCJwbHVnaW4iLCJpbnN0YWxsZWRQbHVnaW5zIiwiX2luc3RhbGxlZFBsdWdpbnMiLCJ1bnNoaWZ0IiwiaW5zdGFsbCIsImluaXRNaXhpbiQxIiwibWl4aW4iLCJpbml0RXh0ZW5kIiwiU3VwZXIiLCJTdXBlcklkIiwiY2FjaGVkQ3RvcnMiLCJfQ3RvciIsIlN1YiIsIlZ1ZUNvbXBvbmVudCIsImluaXRQcm9wcyQxIiwiaW5pdENvbXB1dGVkJDEiLCJDb21wIiwiaW5pdEFzc2V0UmVnaXN0ZXJzIiwiZGVmaW5pdGlvbiIsImdldENvbXBvbmVudE5hbWUiLCJtYXRjaGVzIiwicGF0dGVybiIsInBydW5lQ2FjaGUiLCJrZWVwQWxpdmVJbnN0YW5jZSIsImNhY2hlZE5vZGUiLCJwcnVuZUNhY2hlRW50cnkiLCJjdXJyZW50IiwiY2FjaGVkJCQxIiwicGF0dGVyblR5cGVzIiwiUmVnRXhwIiwiS2VlcEFsaXZlIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJOdW1iZXIiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwibW91bnRlZCIsInJlZiQxIiwicGFyc2VJbnQiLCJidWlsdEluQ29tcG9uZW50cyIsImluaXRHbG9iYWxBUEkiLCJjb25maWdEZWYiLCJ1dGlsIiwiZGVsZXRlIiwic3NyQ29udGV4dCIsImFjY2VwdFZhbHVlIiwiYXR0ciIsImlzRW51bWVyYXRlZEF0dHIiLCJpc0Jvb2xlYW5BdHRyIiwieGxpbmtOUyIsImlzWGxpbmsiLCJnZXRYbGlua1Byb3AiLCJpc0ZhbHN5QXR0clZhbHVlIiwiZ2VuQ2xhc3NGb3JWbm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJtZXJnZUNsYXNzRGF0YSIsInJlbmRlckNsYXNzIiwic3RhdGljQ2xhc3MiLCJkeW5hbWljQ2xhc3MiLCJzdHJpbmdpZnlDbGFzcyIsInN0cmluZ2lmeUFycmF5Iiwic3RyaW5naWZ5T2JqZWN0Iiwic3RyaW5naWZpZWQiLCJuYW1lc3BhY2VNYXAiLCJzdmciLCJtYXRoIiwiaXNIVE1MVGFnIiwiaXNTVkciLCJ1bmtub3duRWxlbWVudENhY2hlIiwiSFRNTFVua25vd25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1RleHRJbnB1dFR5cGUiLCJxdWVyeSIsInNlbGVjdGVkIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQkMSIsInRhZ05hbWUiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWVzcGFjZSIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlQ29tbWVudCIsImluc2VydEJlZm9yZSIsIm5ld05vZGUiLCJyZWZlcmVuY2VOb2RlIiwibmV4dFNpYmxpbmciLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50Iiwic2V0U3R5bGVTY29wZSIsInNjb3BlSWQiLCJub2RlT3BzIiwicmVnaXN0ZXJSZWYiLCJpc1JlbW92YWwiLCJyZWZzIiwicmVmSW5Gb3IiLCJlbXB0eU5vZGUiLCJzYW1lVm5vZGUiLCJzYW1lSW5wdXRUeXBlIiwidHlwZUEiLCJ0eXBlQiIsImNyZWF0ZUtleVRvT2xkSWR4IiwiYmVnaW5JZHgiLCJlbmRJZHgiLCJjcmVhdGVQYXRjaEZ1bmN0aW9uIiwiYmFja2VuZCIsImVtcHR5Tm9kZUF0IiwiY3JlYXRlUm1DYiIsImNoaWxkRWxtIiwicmVtb3ZlTm9kZSIsImlzVW5rbm93bkVsZW1lbnQkJDEiLCJpblZQcmUiLCJzb21lIiwiaWdub3JlIiwiY3JlYXRpbmdFbG1JblZQcmUiLCJjcmVhdGVFbG0iLCJpbnNlcnRlZFZub2RlUXVldWUiLCJuZXN0ZWQiLCJvd25lckFycmF5IiwicHJlIiwic2V0U2NvcGUiLCJjcmVhdGVDaGlsZHJlbiIsImludm9rZUNyZWF0ZUhvb2tzIiwiaXNSZWFjdGl2YXRlZCIsImluaXRDb21wb25lbnQiLCJyZWFjdGl2YXRlQ29tcG9uZW50IiwicGVuZGluZ0luc2VydCIsImlzUGF0Y2hhYmxlIiwiaW5uZXJOb2RlIiwidHJhbnNpdGlvbiIsImFjdGl2YXRlIiwicmVmJCQxIiwiY2hlY2tEdXBsaWNhdGVLZXlzIiwiYW5jZXN0b3IiLCJhZGRWbm9kZXMiLCJzdGFydElkeCIsImludm9rZURlc3Ryb3lIb29rIiwicmVtb3ZlVm5vZGVzIiwiY2giLCJyZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rIiwicm0iLCJ1cGRhdGVDaGlsZHJlbiIsIm9sZENoIiwibmV3Q2giLCJyZW1vdmVPbmx5Iiwib2xkU3RhcnRJZHgiLCJuZXdTdGFydElkeCIsIm9sZEVuZElkeCIsIm9sZFN0YXJ0Vm5vZGUiLCJvbGRFbmRWbm9kZSIsIm5ld0VuZElkeCIsIm5ld1N0YXJ0Vm5vZGUiLCJuZXdFbmRWbm9kZSIsIm9sZEtleVRvSWR4IiwiaWR4SW5PbGQiLCJ2bm9kZVRvTW92ZSIsImNhbk1vdmUiLCJwYXRjaFZub2RlIiwiZmluZElkeEluT2xkIiwic2VlbktleXMiLCJlbmQiLCJoeWRyYXRlIiwicG9zdHBhdGNoIiwiaW52b2tlSW5zZXJ0SG9vayIsImluaXRpYWwiLCJoeWRyYXRpb25CYWlsZWQiLCJpc1JlbmRlcmVkTW9kdWxlIiwiYXNzZXJ0Tm9kZU1hdGNoIiwiaGFzQ2hpbGROb2RlcyIsImlubmVySFRNTCIsImNoaWxkcmVuTWF0Y2giLCJmaXJzdENoaWxkIiwiY2hpbGROb2RlcyIsImZ1bGxJbnZva2UiLCJub2RlVHlwZSIsInBhdGNoIiwiaXNJbml0aWFsUGF0Y2giLCJpc1JlYWxFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib2xkRWxtIiwicGFyZW50RWxtJDEiLCJfbGVhdmVDYiIsInBhdGNoYWJsZSIsImkkMiIsInVwZGF0ZURpcmVjdGl2ZXMiLCJ1bmJpbmREaXJlY3RpdmVzIiwiaXNDcmVhdGUiLCJpc0Rlc3Ryb3kiLCJvbGREaXJzIiwibm9ybWFsaXplRGlyZWN0aXZlcyQxIiwibmV3RGlycyIsImRpcnNXaXRoSW5zZXJ0IiwiZGlyc1dpdGhQb3N0cGF0Y2giLCJvbGREaXIiLCJjYWxsSG9vayQxIiwiY29tcG9uZW50VXBkYXRlZCIsImNhbGxJbnNlcnQiLCJlbXB0eU1vZGlmaWVycyIsIm1vZGlmaWVycyIsImdldFJhd0Rpck5hbWUiLCJyYXdOYW1lIiwiYmFzZU1vZHVsZXMiLCJ1cGRhdGVBdHRycyIsImluaGVyaXRBdHRycyIsIm9sZEF0dHJzIiwic2V0QXR0ciIsInJlbW92ZUF0dHJpYnV0ZU5TIiwiYmFzZVNldEF0dHIiLCJzZXRBdHRyaWJ1dGVOUyIsIl9faWVwaCIsImJsb2NrZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXBkYXRlQ2xhc3MiLCJvbGREYXRhIiwiY2xzIiwidHJhbnNpdGlvbkNsYXNzIiwiX3RyYW5zaXRpb25DbGFzc2VzIiwiX3ByZXZDbGFzcyIsImtsYXNzIiwiUkFOR0VfVE9LRU4iLCJDSEVDS0JPWF9SQURJT19UT0tFTiIsIm5vcm1hbGl6ZUV2ZW50cyIsImNoYW5nZSIsInRhcmdldCQxIiwiY3JlYXRlT25jZUhhbmRsZXIiLCJvbmNlSGFuZGxlciIsInJlbW92ZSQyIiwiYWRkJDEiLCJ1cGRhdGVET01MaXN0ZW5lcnMiLCJldmVudHMiLCJ1cGRhdGVET01Qcm9wcyIsIm9sZFByb3BzIiwiX3ZhbHVlIiwic3RyQ3VyIiwic2hvdWxkVXBkYXRlVmFsdWUiLCJjaGVja1ZhbCIsImNvbXBvc2luZyIsImlzTm90SW5Gb2N1c0FuZERpcnR5IiwiaXNEaXJ0eVdpdGhNb2RpZmllcnMiLCJub3RJbkZvY3VzIiwiYWN0aXZlRWxlbWVudCIsIl92TW9kaWZpZXJzIiwibnVtYmVyIiwidHJpbSIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsIm5vcm1hbGl6ZVN0eWxlRGF0YSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsInN0YXRpY1N0eWxlIiwiYmluZGluZ1N0eWxlIiwiZ2V0U3R5bGUiLCJjaGVja0NoaWxkIiwic3R5bGVEYXRhIiwiY3NzVmFyUkUiLCJpbXBvcnRhbnRSRSIsInNldFByb3AiLCJzZXRQcm9wZXJ0eSIsIm5vcm1hbGl6ZWROYW1lIiwibm9ybWFsaXplIiwidmVuZG9yTmFtZXMiLCJlbXB0eVN0eWxlIiwiY2FwTmFtZSIsInVwZGF0ZVN0eWxlIiwib2xkU3RhdGljU3R5bGUiLCJvbGRTdHlsZUJpbmRpbmciLCJub3JtYWxpemVkU3R5bGUiLCJvbGRTdHlsZSIsIm5ld1N0eWxlIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlc29sdmVUcmFuc2l0aW9uIiwiYXV0b0Nzc1RyYW5zaXRpb24iLCJlbnRlckNsYXNzIiwiZW50ZXJUb0NsYXNzIiwiZW50ZXJBY3RpdmVDbGFzcyIsImxlYXZlQ2xhc3MiLCJsZWF2ZVRvQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiaGFzVHJhbnNpdGlvbiIsIlRSQU5TSVRJT04iLCJBTklNQVRJT04iLCJ0cmFuc2l0aW9uUHJvcCIsInRyYW5zaXRpb25FbmRFdmVudCIsImFuaW1hdGlvblByb3AiLCJhbmltYXRpb25FbmRFdmVudCIsIm9udHJhbnNpdGlvbmVuZCIsIm9ud2Via2l0dHJhbnNpdGlvbmVuZCIsIm9uYW5pbWF0aW9uZW5kIiwib253ZWJraXRhbmltYXRpb25lbmQiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJuZXh0RnJhbWUiLCJhZGRUcmFuc2l0aW9uQ2xhc3MiLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsInJlbW92ZVRyYW5zaXRpb25DbGFzcyIsIndoZW5UcmFuc2l0aW9uRW5kcyIsImdldFRyYW5zaXRpb25JbmZvIiwicHJvcENvdW50IiwiZW5kZWQiLCJvbkVuZCIsInRyYW5zZm9ybVJFIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheXMiLCJ0cmFuc2l0aW9uRHVyYXRpb25zIiwidHJhbnNpdGlvblRpbWVvdXQiLCJnZXRUaW1lb3V0IiwiYW5pbWF0aW9uRGVsYXlzIiwiYW5pbWF0aW9uRHVyYXRpb25zIiwiYW5pbWF0aW9uVGltZW91dCIsImhhc1RyYW5zZm9ybSIsImRlbGF5cyIsImR1cmF0aW9ucyIsInRvTXMiLCJzIiwiZW50ZXIiLCJ0b2dnbGVEaXNwbGF5IiwiY2FuY2VsbGVkIiwiX2VudGVyQ2IiLCJhcHBlYXJDbGFzcyIsImFwcGVhclRvQ2xhc3MiLCJhcHBlYXJBY3RpdmVDbGFzcyIsImJlZm9yZUVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJkdXJhdGlvbiIsInRyYW5zaXRpb25Ob2RlIiwiaXNBcHBlYXIiLCJzdGFydENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0b0NsYXNzIiwiYmVmb3JlRW50ZXJIb29rIiwiZW50ZXJIb29rIiwiYWZ0ZXJFbnRlckhvb2siLCJlbnRlckNhbmNlbGxlZEhvb2siLCJleHBsaWNpdEVudGVyRHVyYXRpb24iLCJjaGVja0R1cmF0aW9uIiwiZXhwZWN0c0NTUyIsInVzZXJXYW50c0NvbnRyb2wiLCJnZXRIb29rQXJndW1lbnRzTGVuZ3RoIiwic2hvdyIsInBlbmRpbmdOb2RlIiwiX3BlbmRpbmciLCJpc1ZhbGlkRHVyYXRpb24iLCJsZWF2ZSIsImJlZm9yZUxlYXZlIiwiYWZ0ZXJMZWF2ZSIsImxlYXZlQ2FuY2VsbGVkIiwiZGVsYXlMZWF2ZSIsImV4cGxpY2l0TGVhdmVEdXJhdGlvbiIsInBlcmZvcm1MZWF2ZSIsImludm9rZXJGbnMiLCJfZW50ZXIiLCJwbGF0Zm9ybU1vZHVsZXMiLCJ2bW9kZWwiLCJ0cmlnZ2VyIiwiZGlyZWN0aXZlIiwiX3ZPcHRpb25zIiwic2V0U2VsZWN0ZWQiLCJnZXRWYWx1ZSIsIm9uQ29tcG9zaXRpb25TdGFydCIsIm9uQ29tcG9zaXRpb25FbmQiLCJwcmV2T3B0aW9ucyIsImN1ck9wdGlvbnMiLCJvIiwibmVlZFJlc2V0IiwiaGFzTm9NYXRjaGluZ09wdGlvbiIsImFjdHVhbGx5U2V0U2VsZWN0ZWQiLCJpc011bHRpcGxlIiwib3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImxvY2F0ZU5vZGUiLCJ0cmFuc2l0aW9uJCQxIiwib3JpZ2luYWxEaXNwbGF5IiwiX192T3JpZ2luYWxEaXNwbGF5IiwiZGlzcGxheSIsInVuYmluZCIsInBsYXRmb3JtRGlyZWN0aXZlcyIsInRyYW5zaXRpb25Qcm9wcyIsIm1vZGUiLCJnZXRSZWFsQ2hpbGQiLCJjb21wT3B0aW9ucyIsImV4dHJhY3RUcmFuc2l0aW9uRGF0YSIsInBsYWNlaG9sZGVyIiwiaCIsInJhd0NoaWxkIiwiaGFzUGFyZW50VHJhbnNpdGlvbiIsImlzU2FtZUNoaWxkIiwib2xkQ2hpbGQiLCJUcmFuc2l0aW9uIiwiX2xlYXZpbmciLCJvbGRSYXdDaGlsZCIsImRlbGF5ZWRMZWF2ZSIsIm1vdmVDbGFzcyIsIlRyYW5zaXRpb25Hcm91cCIsInByZXZDaGlsZHJlbiIsInJhd0NoaWxkcmVuIiwidHJhbnNpdGlvbkRhdGEiLCJrZXB0IiwicmVtb3ZlZCIsImMkMSIsInBvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJlZm9yZVVwZGF0ZSIsInVwZGF0ZWQiLCJoYXNNb3ZlIiwiY2FsbFBlbmRpbmdDYnMiLCJyZWNvcmRQb3NpdGlvbiIsImFwcGx5VHJhbnNsYXRpb24iLCJfcmVmbG93IiwiYm9keSIsIm9mZnNldEhlaWdodCIsIm1vdmVkIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiX21vdmVDYiIsInByb3BlcnR5TmFtZSIsIl9oYXNNb3ZlIiwiY2xvbmVOb2RlIiwibmV3UG9zIiwib2xkUG9zIiwiZHgiLCJsZWZ0IiwiZHkiLCJ0b3AiLCJwbGF0Zm9ybUNvbXBvbmVudHMiLCJnIiwiZXZhbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFJLDJDQUFKLENBQVE7QUFDSi8zQixRQUFJLE1BREE7QUFFSjBCLGdCQUFZLEVBQUMseURBQUQsRUFGUjtBQUdKOEUsV0FBUTR1QixDQUFSLEVBQVc7QUFDVCxlQUFPQSxFQUFFLE9BQUYsQ0FBUDtBQUNEO0FBTEcsQ0FBUixFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7QUFDYzs7O0FBR2xFO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTJLLENBQWdCLHlPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9MO0FBQUE7QUFBQTtBQUFBO0FBQXdWLENBQWdCLHdYQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9pbmRleC40MDJhNDY4N2QxMDVjM2U5OWY5Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgvaW5kZXguanNcIik7XG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgQVBvcHVwcy1HYWxsZXJ5XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5DdXJyZW50IHZlcnNpb246IDEuMC4wIGJldGE8L3A+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxhPkRvYzwvYT4gfCA8YT5HaXRodWI8L2E+IHwgPGE+RmVlZGJhY2s8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2ltZ3MvdGh1bWJuYWlsLTEuanBnXCIgQGNsaWNrPVwic2hvd0dhbGxlcnkoMClcIj5cclxuICAgICAgICAgICAgICAgIDxwPnRhcCB0aGlzIHBpY3R1cmU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Z2FsbGVyeSA6bWVkaWFEYXRhcz0nZ2FsbGVyeURhdGFzJyA6aW5kZXg9XCIwXCIgOnNob3c9XCJpc1Nob3dcIiBAb25DbG9zZT1cImlzU2hvdz1mYWxzZVwiPjwvZ2FsbGVyeT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZG9jXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+QmVmb3JlIHN0YXJ0aW5nPC9oMj5cclxuICAgICAgICAgICAgICAgIEJlZm9yZSB1c2luZywgeW91IG5lZWQgdG8ga25vdyBhYm91dCA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj52dWVqczwvc3Bhbj4gYW5kIDxzcGFuIHN0eWxlPVwiY29sb3I6cmVkO1wiPnZ1ZSdzIHNpbmdsZS1maWxlIGNvbXBvbmVudDwvc3Bhbj4gZGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZXR0aW5nLXN0YXJ0ZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGg0PlN0ZXAxOiBpbnN0YWxsIGJ5IG5wbTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlPm5wbSBpbnN0YWxsIHBvcHVwcy1nYWxsZXJ5LXZ1ZTwvY29kZT48L3ByZT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxoND5TdGVwMjogaW1wb3J0IGdhbGxlcnkgdnVlIGNvbXBvbmVudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlPmltcG9ydCBnYWxsZXJ5IGZyb20gXCJwb3B1cHMtZ2FsbGVyeVwiOzxici8+PC9jb2RlPjwvcHJlPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0PlN0ZXAzOiBBZGQgdG8gdnVlanMgY29tcG9uZW50czwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlPmNvbXBvbmVudHM6IHsgZ2FsbGVyeSB9PGJyLz48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDQ+U3RlcDQ6IHVzZWluZyBnYWxsZXJ5IGNvbXBvbmVudCBvbiB5b3VyIHZ1ZSBwYWdlPC9oND5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwcmU+PGNvZGU+JiM2MDtnYWxsZXJ5IDppbWFnZURhdGFzPVwiaW1hZ2VEYXRhc1wiIDppbmRleD1cIjBcIiA6c2hvdz1cImlzU2hvd1wiIEBvbkNsb3NlPVwiaXNTaG93PWZhbHNlXCI+JiM2MDsvZ2FsbGVyeT48L2NvZGU+PC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDQ+UGFyYW1ldGVyOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlcXVpcmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmltYWdlRGF0YXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmFycmF5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50cnVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UaGUgaW1hZ2VzIHlvdSB3YW50IHRvIHNob3c8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+aW5kZXg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPm51bWJlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZmFsc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRoZSBpbmRleCBvZiB0aGUgaW1hZ2VzIHNob3duIHN0YXJ0cyBhdCAwLiA8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj5kZWZ1YWx0OiAwPC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5zaG93PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5ib29sZWFuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50cnVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EaXNwbGF5IGFuZCBjbG9zZSBmbGFnczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5vbkNsb3NlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5mdW5jdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+dHJ1ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+WW91IG11c3QgY2hhbmdlIHRoZSBzaG93IHZhbHVlIHRvIGZhbHNlIGluc2lkZSB0aGUgZnVuY3Rpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdG9tXCI+XHJcbiAgICAgICAgICAgIExpY2Vuc2U6IE1JVCA8YSBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAycmVtO1wiPkdpdGh1YjwvYT4gPGEgaHJlZj1cIm1haWx0bzo4MDE5ODkzQHFxLmNvbVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDJyZW07XCI+ODAxOTg5M0BxcS5jb208L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGdhbGxlcnkgZnJvbSBcInBvcHVwcy1nYWxsZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGdhbGxlcnlcclxuICAgIH0sXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpbWFnZURhdGE6IFtbXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvYW5pbWFsLTMuanBnYCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvYW5pbWFsLTEuanBnYCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvYW5pbWFsLTIuanBnYCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvcGVyc29uLTIuanBnYCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvcGVyc29uLTEuanBnYCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvMS5qcGdgKSxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmUoYEAvaW1ncy8yLmpwZ2ApLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZShgQC9pbWdzLzMuanBnYCksXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlKGBAL2ltZ3MvNC5qcGdgKVxyXG4gICAgICAgICAgICBdLFtcclxuICAgICAgICAgICAgXV0sXHJcbiAgICAgICAgICAgIGdhbGxlcnlEYXRhczogW10sXHJcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNob3dHYWxsZXJ5KGluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5RGF0YXMgPSB0aGlzLmltYWdlRGF0YVtpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgICBAaW1wb3J0ICdjb21tb24uc2Nzcyc7XHJcbiAgICAudG9wIHtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIG1hcmdpbjoycmVtIGF1dG87XHJcbiAgICAgICAgLmxvZyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDIyMSwgNjAsIDYwKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIC5pbWFnZS1saXN0e1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjYzVjNWM1MGE7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLmltYWdlLWRpdiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZG9jIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHByZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib290b20ge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbCwgYm9keSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBtYXJnaW46IDAgMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xcbn1cXG51bCwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbnVsLCBvbCwgcCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5hOnZpc2l0ZWQsIGEge1xcbiAgY29sb3I6ICMwMDlmZmY7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG5odG1sLCBib2R5IHtcXG4gICAgcGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xcbiAgICBwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcXG4gICAgcGFkZGluZy1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcXG59XFxufVxcbi50b3Age1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG4udG9wIC5sb2cge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4udG9wIHAge1xcbiAgICBjb2xvcjogI2RkM2MzYztcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG4uY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uY29udGVudCAuaW1hZ2UtbGlzdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNjNWM1YzUwYTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29udGVudCAuaW1hZ2UtbGlzdCAuaW1hZ2UtZGl2IHtcXG4gICAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgICBtYXgtaGVpZ2h0OiAyMHJlbTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29udGVudCAuaW1hZ2UtbGlzdCAuaW1hZ2UtZGl2IGltZyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uZG9jIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5kb2MgcHJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5kb2MgdGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuLmRvYyB0YWJsZSB0ZDpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ib290b20ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZS1saXN0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvaW1ncy90aHVtYm5haWwtMS5qcGdcIikgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd0dhbGxlcnkoMClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJ0YXAgdGhpcyBwaWN0dXJlXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZ2FsbGVyeVwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgbWVkaWFEYXRhczogX3ZtLmdhbGxlcnlEYXRhcywgaW5kZXg6IDAsIHNob3c6IF92bS5pc1Nob3cgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5pc1Nob3cgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgxKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgyKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQVBvcHVwcy1HYWxsZXJ5XFxuICAgICAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQ3VycmVudCB2ZXJzaW9uOiAxLjAuMCBiZXRhXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRvY1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2FybmluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiQmVmb3JlIHN0YXJ0aW5nXCIpXSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIEJlZm9yZSB1c2luZywgeW91IG5lZWQgdG8ga25vdyBhYm91dCBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiIH0gfSwgW192bS5fdihcInZ1ZWpzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBhbmQgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJ2dWUncyBzaW5nbGUtZmlsZSBjb21wb25lbnRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBkZXZlbG9wbWVudFxcbiAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdldHRpbmctc3RhcnRlZFwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiR2V0dGluZyBzdGFydGVkXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlN0ZXAxOiBpbnN0YWxsIGJ5IG5wbVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwicHJlXCIsIFtfYyhcImNvZGVcIiwgW192bS5fdihcIm5wbSBpbnN0YWxsIHBvcHVwcy1nYWxsZXJ5LXZ1ZVwiKV0pXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlN0ZXAyOiBpbXBvcnQgZ2FsbGVyeSB2dWUgY29tcG9uZW50XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJwcmVcIiwgW1xuICAgICAgICAgICAgX2MoXCJjb2RlXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KCdpbXBvcnQgZ2FsbGVyeSBmcm9tIFwicG9wdXBzLWdhbGxlcnlcIjsnKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiU3RlcDM6IEFkZCB0byB2dWVqcyBjb21wb25lbnRzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJwcmVcIiwgW19jKFwiY29kZVwiLCBbX3ZtLl92KFwiY29tcG9uZW50czogeyBnYWxsZXJ5IH1cIiksIF9jKFwiYnJcIildKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJTdGVwNDogdXNlaW5nIGdhbGxlcnkgY29tcG9uZW50IG9uIHlvdXIgdnVlIHBhZ2VcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcInByZVwiLCBbXG4gICAgICAgICAgICBfYyhcImNvZGVcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgJzxnYWxsZXJ5IDppbWFnZURhdGFzPVwiaW1hZ2VEYXRhc1wiIDppbmRleD1cIjBcIiA6c2hvdz1cImlzU2hvd1wiIEBvbkNsb3NlPVwiaXNTaG93PWZhbHNlXCI+PC9nYWxsZXJ5PidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiUGFyYW1ldGVyOlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUeXBlXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUmVxdWlyZWRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEZXNjcmlwdGlvblwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJpbWFnZURhdGFzXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcImFycmF5XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcInRydWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiVGhlIGltYWdlcyB5b3Ugd2FudCB0byBzaG93XCIpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJpbmRleFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJudW1iZXJcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiZmFsc2VcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiVGhlIGluZGV4IG9mIHRoZSBpbWFnZXMgc2hvd24gc3RhcnRzIGF0IDAuIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlZnVhbHQ6IDBcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcInNob3dcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiYm9vbGVhblwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJ0cnVlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkRpc3BsYXkgYW5kIGNsb3NlIGZsYWdzXCIpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJvbkNsb3NlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcImZ1bmN0aW9uXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcInRydWVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBjaGFuZ2UgdGhlIHNob3cgdmFsdWUgdG8gZmFsc2UgaW5zaWRlIHRoZSBmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvb3RvbVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICAgICAgTGljZW5zZTogTUlUIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCIycmVtXCIgfSB9LCBbX3ZtLl92KFwiR2l0aHViXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjJyZW1cIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOjgwMTk4OTNAcXEuY29tXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiODAxOTg5M0BxcS5jb21cIildXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVhYTQ1MGEwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIi8qIVxuICogVnVlLmpzIHYyLjUuMTdcbiAqIChjKSAyMDE0LTIwMTggRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuLyogICovXG5cbnZhciBlbXB0eU9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuXG4vLyB0aGVzZSBoZWxwZXJzIHByb2R1Y2VzIGJldHRlciB2bSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nXG5mdW5jdGlvbiBpc1VuZGVmICh2KSB7XG4gIHJldHVybiB2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZiAodikge1xuICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNUcnVlICh2KSB7XG4gIHJldHVybiB2ID09PSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzRmFsc2UgKHYpIHtcbiAgcmV0dXJuIHYgPT09IGZhbHNlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgcHJpbWl0aXZlXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSBlLmcuIFtvYmplY3QgT2JqZWN0XVxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogdHlwZW9mIHZhbCA9PT0gJ29iamVjdCdcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkodmFsLCBudWxsLCAyKVxuICAgICAgOiBTdHJpbmcodmFsKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQuLi4gZS5nLlxuICogUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHkgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmUgc2luY2UgbmF0aXZlIGJpbmQgaXNcbiAqIG5vdyBtb3JlIHBlcmZvcm1hbnQgaW4gbW9zdCBicm93c2VycywgYnV0IHJlbW92aW5nIGl0IHdvdWxkIGJlIGJyZWFraW5nIGZvclxuICogY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpbiBQaGFudG9tSlMgMS54LCBzbyB0aGlzIG11c3QgYmUga2VwdCBmb3JcbiAqIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKVxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyoqXG4gKiBSZXR1cm4gc2FtZSB2YWx1ZVxuICovXG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiAoXykgeyByZXR1cm4gXzsgfTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0YXRpYyBrZXlzIHN0cmluZyBmcm9tIGNvbXBpbGVyIG1vZHVsZXMuXG4gKi9cblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKCFpc0FycmF5QSAmJiAhaXNBcnJheUIpIHtcbiAgICAgICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMoYSk7XG4gICAgICAgIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICByZXR1cm4ga2V5c0EubGVuZ3RoID09PSBrZXlzQi5sZW5ndGggJiYga2V5c0EuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGFba2V5XSwgYltrZXldKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIGlmICghaXNPYmplY3RBICYmICFpc09iamVjdEIpIHtcbiAgICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgU1NSX0FUVFIgPSAnZGF0YS1zZXJ2ZXItcmVuZGVyZWQnO1xuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJ1xuXTtcblxuLyogICovXG5cbnZhciBjb25maWcgPSAoe1xuICAvKipcbiAgICogT3B0aW9uIG1lcmdlIHN0cmF0ZWdpZXMgKHVzZWQgaW4gY29yZS91dGlsL29wdGlvbnMpXG4gICAqL1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgb3B0aW9uTWVyZ2VTdHJhdGVnaWVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHN1cHByZXNzIHdhcm5pbmdzLlxuICAgKi9cbiAgc2lsZW50OiBmYWxzZSxcblxuICAvKipcbiAgICogU2hvdyBwcm9kdWN0aW9uIG1vZGUgdGlwIG1lc3NhZ2Ugb24gYm9vdD9cbiAgICovXG4gIHByb2R1Y3Rpb25UaXA6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZW5hYmxlIGRldnRvb2xzXG4gICAqL1xuICBkZXZ0b29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byByZWNvcmQgcGVyZlxuICAgKi9cbiAgcGVyZm9ybWFuY2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBFcnJvciBoYW5kbGVyIGZvciB3YXRjaGVyIGVycm9yc1xuICAgKi9cbiAgZXJyb3JIYW5kbGVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBXYXJuIGhhbmRsZXIgZm9yIHdhdGNoZXIgd2FybnNcbiAgICovXG4gIHdhcm5IYW5kbGVyOiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZ25vcmUgY2VydGFpbiBjdXN0b20gZWxlbWVudHNcbiAgICovXG4gIGlnbm9yZWRFbGVtZW50czogW10sXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB1c2VyIGtleSBhbGlhc2VzIGZvciB2LW9uXG4gICAqL1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAga2V5Q29kZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHJlZ2lzdGVyZWQgYXMgYVxuICAgKiBjb21wb25lbnQuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkVGFnOiBubyxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIHJlc2VydmVkIHNvIHRoYXQgaXQgY2Fubm90IGJlIHVzZWQgYXMgYSBjb21wb25lbnRcbiAgICogcHJvcC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRBdHRyOiBubyxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgYW4gdW5rbm93biBlbGVtZW50LlxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAqL1xuICBpc1Vua25vd25FbGVtZW50OiBubyxcblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lc3BhY2Ugb2YgYW4gZWxlbWVudFxuICAgKi9cbiAgZ2V0VGFnTmFtZXNwYWNlOiBub29wLFxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgcmVhbCB0YWcgbmFtZSBmb3IgdGhlIHNwZWNpZmljIHBsYXRmb3JtLlxuICAgKi9cbiAgcGFyc2VQbGF0Zm9ybVRhZ05hbWU6IGlkZW50aXR5LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgbXVzdCBiZSBib3VuZCB1c2luZyBwcm9wZXJ0eSwgZS5nLiB2YWx1ZVxuICAgKiBQbGF0Zm9ybS1kZXBlbmRlbnQuXG4gICAqL1xuICBtdXN0VXNlUHJvcDogbm8sXG5cbiAgLyoqXG4gICAqIEV4cG9zZWQgZm9yIGxlZ2FjeSByZWFzb25zXG4gICAqL1xuICBfbGlmZWN5Y2xlSG9va3M6IExJRkVDWUNMRV9IT09LU1xufSlcblxuLyogICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gL1teXFx3LiRdLztcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xuXG4vLyBGaXJlZm94IGhhcyBhIFwid2F0Y2hcIiBmdW5jdGlvbiBvbiBPYmplY3QucHJvdG90eXBlLi4uXG52YXIgbmF0aXZlV2F0Y2ggPSAoe30pLndhdGNoO1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5pZiAoaW5Ccm93c2VyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCAoe1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4vLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxudmFyIF9pc1NlcnZlcjtcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZGV0ZWN0IHByZXNlbmNlIG9mIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgYW5kIGF2b2lkXG4gICAgICAvLyBXZWJwYWNrIHNoaW1taW5nIHRoZSBwcm9jZXNzXG4gICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pc1NlcnZlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2lzU2VydmVyXG59O1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoQ3Rvci50b1N0cmluZygpKVxufVxuXG52YXIgaGFzU3ltYm9sID1cbiAgdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU3ltYm9sKSAmJlxuICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcblxudmFyIF9TZXQ7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldDtcbn0gZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICByZXR1cm4gJzxSb290PidcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgOiB2bS5faXNWdWVcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgIDogdm0gfHwge307XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwudnVlJC8pO1xuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgKVxuICB9O1xuXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgaWYgKG4gPiAxKSB7IHN0ciArPSBzdHI7IH1cbiAgICAgIG4gPj49IDE7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgaWYgKHZtLl9pc1Z1ZSAmJiB2bS4kcGFyZW50KSB7XG4gICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICB3aGlsZSAodm0pIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG5cbnZhciB1aWQgPSAwO1xuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqL1xudmFyIERlcCA9IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrKztcbiAgdGhpcy5zdWJzID0gW107XG59O1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIGFkZFN1YiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIHJlbW92ZVN1YiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yik7XG59O1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgRGVwLnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIHRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIHRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb25seSBvbmVcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGw7XG52YXIgdGFyZ2V0U3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gcHVzaFRhcmdldCAoX3RhcmdldCkge1xuICBpZiAoRGVwLnRhcmdldCkgeyB0YXJnZXRTdGFjay5wdXNoKERlcC50YXJnZXQpOyB9XG4gIERlcC50YXJnZXQgPSBfdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0U3RhY2sucG9wKCk7XG59XG5cbi8qICAqL1xuXG52YXIgVk5vZGUgPSBmdW5jdGlvbiBWTm9kZSAoXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGVsbSxcbiAgY29udGV4dCxcbiAgY29tcG9uZW50T3B0aW9ucyxcbiAgYXN5bmNGYWN0b3J5XG4pIHtcbiAgdGhpcy50YWcgPSB0YWc7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgdGhpcy5lbG0gPSBlbG07XG4gIHRoaXMubnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMuZm5Db250ZXh0ID0gdW5kZWZpbmVkO1xuICB0aGlzLmZuT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mblNjb3BlSWQgPSB1bmRlZmluZWQ7XG4gIHRoaXMua2V5ID0gZGF0YSAmJiBkYXRhLmtleTtcbiAgdGhpcy5jb21wb25lbnRPcHRpb25zID0gY29tcG9uZW50T3B0aW9ucztcbiAgdGhpcy5jb21wb25lbnRJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG4gIHRoaXMucmF3ID0gZmFsc2U7XG4gIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgdGhpcy5pc1Jvb3RJbnNlcnQgPSB0cnVlO1xuICB0aGlzLmlzQ29tbWVudCA9IGZhbHNlO1xuICB0aGlzLmlzQ2xvbmVkID0gZmFsc2U7XG4gIHRoaXMuaXNPbmNlID0gZmFsc2U7XG4gIHRoaXMuYXN5bmNGYWN0b3J5ID0gYXN5bmNGYWN0b3J5O1xuICB0aGlzLmFzeW5jTWV0YSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5pc0FzeW5jUGxhY2Vob2xkZXIgPSBmYWxzZTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGNoaWxkOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbi8vIERFUFJFQ0FURUQ6IGFsaWFzIGZvciBjb21wb25lbnRJbnN0YW5jZSBmb3IgYmFja3dhcmRzIGNvbXBhdC5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5wcm90b3R5cGVBY2Nlc3NvcnMuY2hpbGQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jb21wb25lbnRJbnN0YW5jZVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZOb2RlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBjcmVhdGVFbXB0eVZOb2RlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgaWYgKCB0ZXh0ID09PSB2b2lkIDAgKSB0ZXh0ID0gJyc7XG5cbiAgdmFyIG5vZGUgPSBuZXcgVk5vZGUoKTtcbiAgbm9kZS50ZXh0ID0gdGV4dDtcbiAgbm9kZS5pc0NvbW1lbnQgPSB0cnVlO1xuICByZXR1cm4gbm9kZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlICh2YWwpIHtcbiAgcmV0dXJuIG5ldyBWTm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcodmFsKSlcbn1cblxuLy8gb3B0aW1pemVkIHNoYWxsb3cgY2xvbmVcbi8vIHVzZWQgZm9yIHN0YXRpYyBub2RlcyBhbmQgc2xvdCBub2RlcyBiZWNhdXNlIHRoZXkgbWF5IGJlIHJldXNlZCBhY3Jvc3Ncbi8vIG11bHRpcGxlIHJlbmRlcnMsIGNsb25pbmcgdGhlbSBhdm9pZHMgZXJyb3JzIHdoZW4gRE9NIG1hbmlwdWxhdGlvbnMgcmVseVxuLy8gb24gdGhlaXIgZWxtIHJlZmVyZW5jZS5cbmZ1bmN0aW9uIGNsb25lVk5vZGUgKHZub2RlKSB7XG4gIHZhciBjbG9uZWQgPSBuZXcgVk5vZGUoXG4gICAgdm5vZGUudGFnLFxuICAgIHZub2RlLmRhdGEsXG4gICAgdm5vZGUuY2hpbGRyZW4sXG4gICAgdm5vZGUudGV4dCxcbiAgICB2bm9kZS5lbG0sXG4gICAgdm5vZGUuY29udGV4dCxcbiAgICB2bm9kZS5jb21wb25lbnRPcHRpb25zLFxuICAgIHZub2RlLmFzeW5jRmFjdG9yeVxuICApO1xuICBjbG9uZWQubnMgPSB2bm9kZS5ucztcbiAgY2xvbmVkLmlzU3RhdGljID0gdm5vZGUuaXNTdGF0aWM7XG4gIGNsb25lZC5rZXkgPSB2bm9kZS5rZXk7XG4gIGNsb25lZC5pc0NvbW1lbnQgPSB2bm9kZS5pc0NvbW1lbnQ7XG4gIGNsb25lZC5mbkNvbnRleHQgPSB2bm9kZS5mbkNvbnRleHQ7XG4gIGNsb25lZC5mbk9wdGlvbnMgPSB2bm9kZS5mbk9wdGlvbnM7XG4gIGNsb25lZC5mblNjb3BlSWQgPSB2bm9kZS5mblNjb3BlSWQ7XG4gIGNsb25lZC5pc0Nsb25lZCA9IHRydWU7XG4gIHJldHVybiBjbG9uZWRcbn1cblxuLypcbiAqIG5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBwbGF5IHdlbGwgd2l0aFxuICogZHluYW1pY2FsbHkgYWNjZXNzaW5nIG1ldGhvZHMgb24gQXJyYXkgcHJvdG90eXBlXG4gKi9cblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKTtcblxudmFyIG1ldGhvZHNUb1BhdGNoID0gW1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xubWV0aG9kc1RvUGF0Y2guZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fO1xuICAgIHZhciBpbnNlcnRlZDtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIHsgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKTsgfVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KTtcbn0pO1xuXG4vKiAgKi9cblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogSW4gc29tZSBjYXNlcyB3ZSBtYXkgd2FudCB0byBkaXNhYmxlIG9ic2VydmF0aW9uIGluc2lkZSBhIGNvbXBvbmVudCdzXG4gKiB1cGRhdGUgY29tcHV0YXRpb24uXG4gKi9cbnZhciBzaG91bGRPYnNlcnZlID0gdHJ1ZTtcblxuZnVuY3Rpb24gdG9nZ2xlT2JzZXJ2aW5nICh2YWx1ZSkge1xuICBzaG91bGRPYnNlcnZlID0gdmFsdWU7XG59XG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBpcyBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0aGUgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoIHVwZGF0ZXMuXG4gKi9cbnZhciBPYnNlcnZlciA9IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICB0aGlzLnZtQ291bnQgPSAwO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFyIGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnQ7XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpO1xuICB9XG59O1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqL1xuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiB3YWxrIChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWZpbmVSZWFjdGl2ZShvYmosIGtleXNbaV0pO1xuICB9XG59O1xuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gb2JzZXJ2ZUFycmF5IChpdGVtcykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pO1xuICB9XG59O1xuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqL1xuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgaWYgKCFnZXR0ZXIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG4gIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRlcGVuZEFycmF5KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjdXN0b21TZXR0ZXIpIHtcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcm9tKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XTtcbiAgICBpZiAoIWhhc093bih0bywga2V5KSkge1xuICAgICAgc2V0KHRvLCBrZXksIGZyb21WYWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiYgaXNQbGFpbk9iamVjdChmcm9tVmFsKSkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgcmV0dXJuIGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbFxufVxuXG5MSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG59KTtcblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VBc3NldHMgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICBpZiAoY2hpbGRWYWwpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgIHJldHVybiBleHRlbmQocmVzLCBjaGlsZFZhbClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIFdhdGNoZXJzLlxuICpcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxuICBpZiAocGFyZW50VmFsID09PSBuYXRpdmVXYXRjaCkgeyBwYXJlbnRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkgeyBjaGlsZFZhbCA9IHVuZGVmaW5lZDsgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSB7fTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZm9yICh2YXIga2V5JDEgaW4gY2hpbGRWYWwpIHtcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXkkMV07XG4gICAgaWYgKHBhcmVudCAmJiAhQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcbiAgICB9XG4gICAgcmV0W2tleSQxXSA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXTtcbiAgfVxuICByZXR1cm4gcmV0XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cbnN0cmF0cy5wcm9wcyA9XG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuaW5qZWN0ID1cbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIGlmIChjaGlsZFZhbCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cbiAgcmV0dXJuIHJldFxufTtcbnN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcblxuLyoqXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxuICovXG52YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcbiAgICA/IHBhcmVudFZhbFxuICAgIDogY2hpbGRWYWxcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50cyAob3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lIChuYW1lKSB7XG4gIGlmICghL15bYS16QS1aXVtcXHctXSokLy50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnY2FuIG9ubHkgY29udGFpbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbmQgdGhlIGh5cGhlbiwgJyArXG4gICAgICAnYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4nXG4gICAgKTtcbiAgfVxuICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGNvbmZpZy5pc1Jlc2VydmVkVGFnKG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgJ2lkOiAnICsgbmFtZVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzIChvcHRpb25zLCB2bSkge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGksIHZhbCwgbmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUocHJvcHMpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIG9wdGlvbnMucHJvcHMgPSByZXM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJbmplY3QgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcbiAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgdmFyIG5vcm1hbGl6ZWQgPSBvcHRpb25zLmluamVjdCA9IHt9O1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3QpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vcm1hbGl6ZWRbaW5qZWN0W2ldXSA9IHsgZnJvbTogaW5qZWN0W2ldIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGtleSBpbiBpbmplY3QpIHtcbiAgICAgIHZhciB2YWwgPSBpbmplY3Rba2V5XTtcbiAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IGV4dGVuZCh7IGZyb206IGtleSB9LCB2YWwpXG4gICAgICAgIDogeyBmcm9tOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiaW5qZWN0XFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKGluamVjdCkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICB2YXIgZGVmID0gZGlyc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYsIHVwZGF0ZTogZGVmIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9iamVjdFR5cGUgKG5hbWUsIHZhbHVlLCB2bSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IGV4cGVjdGVkIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICovXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICB2bVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2tDb21wb25lbnRzKGNoaWxkKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjaGlsZCA9IGNoaWxkLm9wdGlvbnM7XG4gIH1cblxuICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICBub3JtYWxpemVJbmplY3QoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG4gIHZhciBleHRlbmRzRnJvbSA9IGNoaWxkLmV4dGVuZHM7XG4gIGlmIChleHRlbmRzRnJvbSkge1xuICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGV4dGVuZHNGcm9tLCB2bSk7XG4gIH1cbiAgaWYgKGNoaWxkLm1peGlucykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgfVxuICB9XG4gIHZhciBvcHRpb25zID0ge307XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXQ7XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICovXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxuICBvcHRpb25zLFxuICB0eXBlLFxuICBpZCxcbiAgd2Fybk1pc3Npbmdcbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTtcbiAgLy8gY2hlY2sgbG9jYWwgcmVnaXN0cmF0aW9uIHZhcmlhdGlvbnMgZmlyc3RcbiAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XG4gIHZhciBjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIGNhbWVsaXplZElkKSkgeyByZXR1cm4gYXNzZXRzW2NhbWVsaXplZElkXSB9XG4gIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIFBhc2NhbENhc2VJZCkpIHsgcmV0dXJuIGFzc2V0c1tQYXNjYWxDYXNlSWRdIH1cbiAgLy8gZmFsbGJhY2sgdG8gcHJvdG90eXBlIGNoYWluXG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSAmJiBpc09iamVjdCh2YWx1ZSkgJiYgKCdAYmluZGluZycgaW4gdmFsdWUpKVxuICApIHtcbiAgICBhc3NlcnRQcm9wKHByb3AsIGtleSwgdmFsdWUsIHZtLCBhYnNlbnQpO1xuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhIHByb3AuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BEZWZhdWx0VmFsdWUgKHZtLCBwcm9wLCBrZXkpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG4gIHZhciBkZWYgPSBwcm9wLmRlZmF1bHQ7XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNPYmplY3QoZGVmKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIGtleSArICdcIjogJyArXG4gICAgICAnUHJvcHMgd2l0aCB0eXBlIE9iamVjdC9BcnJheSBtdXN0IHVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlLicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gdGhlIHJhdyBwcm9wIHZhbHVlIHdhcyBhbHNvIHVuZGVmaW5lZCBmcm9tIHByZXZpb3VzIHJlbmRlcixcbiAgLy8gcmV0dXJuIHByZXZpb3VzIGRlZmF1bHQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgd2F0Y2hlciB0cmlnZ2VyXG4gIGlmICh2bSAmJiB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgJiZcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGFba2V5XSA9PT0gdW5kZWZpbmVkICYmXG4gICAgdm0uX3Byb3BzW2tleV0gIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gdm0uX3Byb3BzW2tleV1cbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICAvLyBhIHZhbHVlIGlzIEZ1bmN0aW9uIGlmIGl0cyBwcm90b3R5cGUgaXMgZnVuY3Rpb24gZXZlbiBhY3Jvc3MgZGlmZmVyZW50IGV4ZWN1dGlvbiBjb250ZXh0XG4gIHJldHVybiB0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGdldFR5cGUocHJvcC50eXBlKSAhPT0gJ0Z1bmN0aW9uJ1xuICAgID8gZGVmLmNhbGwodm0pXG4gICAgOiBkZWZcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByb3AgKFxuICBwcm9wLFxuICBuYW1lLFxuICB2YWx1ZSxcbiAgdm0sXG4gIGFic2VudFxuKSB7XG4gIGlmIChwcm9wLnJlcXVpcmVkICYmIGFic2VudCkge1xuICAgIHdhcm4oXG4gICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiBcIicgKyBuYW1lICsgJ1wiJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhcHJvcC5yZXF1aXJlZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gcHJvcC50eXBlO1xuICB2YXIgdmFsaWQgPSAhdHlwZSB8fCB0eXBlID09PSB0cnVlO1xuICB2YXIgZXhwZWN0ZWRUeXBlcyA9IFtdO1xuICBpZiAodHlwZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZSA9IFt0eXBlXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlLmxlbmd0aCAmJiAhdmFsaWQ7IGkrKykge1xuICAgICAgdmFyIGFzc2VydGVkVHlwZSA9IGFzc2VydFR5cGUodmFsdWUsIHR5cGVbaV0pO1xuICAgICAgZXhwZWN0ZWRUeXBlcy5wdXNoKGFzc2VydGVkVHlwZS5leHBlY3RlZFR5cGUgfHwgJycpO1xuICAgICAgdmFsaWQgPSBhc3NlcnRlZFR5cGUudmFsaWQ7XG4gICAgfVxuICB9XG4gIGlmICghdmFsaWQpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgICAgXCIgRXhwZWN0ZWQgXCIgKyAoZXhwZWN0ZWRUeXBlcy5tYXAoY2FwaXRhbGl6ZSkuam9pbignLCAnKSkgK1xuICAgICAgXCIsIGdvdCBcIiArICh0b1Jhd1R5cGUodmFsdWUpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBwcm9wLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yIHByb3AgXCInICsgbmFtZSArICdcIi4nLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHNpbXBsZUNoZWNrUkUgPSAvXihTdHJpbmd8TnVtYmVyfEJvb2xlYW58RnVuY3Rpb258U3ltYm9sKSQvO1xuXG5mdW5jdGlvbiBhc3NlcnRUeXBlICh2YWx1ZSwgdHlwZSkge1xuICB2YXIgdmFsaWQ7XG4gIHZhciBleHBlY3RlZFR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICBpZiAoc2ltcGxlQ2hlY2tSRS50ZXN0KGV4cGVjdGVkVHlwZSkpIHtcbiAgICB2YXIgdCA9IHR5cGVvZiB2YWx1ZTtcbiAgICB2YWxpZCA9IHQgPT09IGV4cGVjdGVkVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIGZvciBwcmltaXRpdmUgd3JhcHBlciBvYmplY3RzXG4gICAgaWYgKCF2YWxpZCAmJiB0ID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ09iamVjdCcpIHtcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gJ0FycmF5Jykge1xuICAgIHZhbGlkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB2YWxpZDogdmFsaWQsXG4gICAgZXhwZWN0ZWRUeXBlOiBleHBlY3RlZFR5cGVcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBmdW5jdGlvbiBzdHJpbmcgbmFtZSB0byBjaGVjayBidWlsdC1pbiB0eXBlcyxcbiAqIGJlY2F1c2UgYSBzaW1wbGUgZXF1YWxpdHkgY2hlY2sgd2lsbCBmYWlsIHdoZW4gcnVubmluZ1xuICogYWNyb3NzIGRpZmZlcmVudCB2bXMgLyBpZnJhbWVzLlxuICovXG5mdW5jdGlvbiBnZXRUeXBlIChmbikge1xuICB2YXIgbWF0Y2ggPSBmbiAmJiBmbi50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVR5cGUgKGEsIGIpIHtcbiAgcmV0dXJuIGdldFR5cGUoYSkgPT09IGdldFR5cGUoYilcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUluZGV4ICh0eXBlLCBleHBlY3RlZFR5cGVzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFR5cGVzKSkge1xuICAgIHJldHVybiBpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXMsIHR5cGUpID8gMCA6IC0xXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV4cGVjdGVkVHlwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzW2ldLCB0eXBlKSkge1xuICAgICAgcmV0dXJuIGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAodm0pIHtcbiAgICB2YXIgY3VyID0gdm07XG4gICAgd2hpbGUgKChjdXIgPSBjdXIuJHBhcmVudCkpIHtcbiAgICAgIHZhciBob29rcyA9IGN1ci4kb3B0aW9ucy5lcnJvckNhcHR1cmVkO1xuICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGNhcHR1cmUpIHsgcmV0dXJuIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBnbG9iYWxIYW5kbGVFcnJvcihlLCBjdXIsICdlcnJvckNhcHR1cmVkIGhvb2snKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChjb25maWcuZXJyb3JIYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xuICAgIH1cbiAgfVxuICBsb2dFcnJvcihlcnIsIHZtLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKChpbkJyb3dzZXIgfHwgaW5XZWV4KSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cblxuLyogICovXG4vKiBnbG9iYWxzIE1lc3NhZ2VDaGFubmVsICovXG5cbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBwZW5kaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzICgpIHtcbiAgcGVuZGluZyA9IGZhbHNlO1xuICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICBjYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb3BpZXNbaV0oKTtcbiAgfVxufVxuXG4vLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIGJvdGggbWljcm90YXNrcyBhbmQgKG1hY3JvKSB0YXNrcy5cbi8vIEluIDwgMi40IHdlIHVzZWQgbWljcm90YXNrcyBldmVyeXdoZXJlLCBidXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zIHdoZXJlXG4vLyBtaWNyb3Rhc2tzIGhhdmUgdG9vIGhpZ2ggYSBwcmlvcml0eSBhbmQgZmlyZSBpbiBiZXR3ZWVuIHN1cHBvc2VkbHlcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCkgb3IgZXZlbiBiZXR3ZWVuIGJ1YmJsaW5nIG9mIHRoZSBzYW1lXG4vLyBldmVudCAoIzY1NjYpLiBIb3dldmVyLCB1c2luZyAobWFjcm8pIHRhc2tzIGV2ZXJ5d2hlcmUgYWxzbyBoYXMgc3VidGxlIHByb2JsZW1zXG4vLyB3aGVuIHN0YXRlIGlzIGNoYW5nZWQgcmlnaHQgYmVmb3JlIHJlcGFpbnQgKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4vLyBIZXJlIHdlIHVzZSBtaWNyb3Rhc2sgYnkgZGVmYXVsdCwgYnV0IGV4cG9zZSBhIHdheSB0byBmb3JjZSAobWFjcm8pIHRhc2sgd2hlblxuLy8gbmVlZGVkIChlLmcuIGluIGV2ZW50IGhhbmRsZXJzIGF0dGFjaGVkIGJ5IHYtb24pLlxudmFyIG1pY3JvVGltZXJGdW5jO1xudmFyIG1hY3JvVGltZXJGdW5jO1xudmFyIHVzZU1hY3JvVGFzayA9IGZhbHNlO1xuXG4vLyBEZXRlcm1pbmUgKG1hY3JvKSB0YXNrIGRlZmVyIGltcGxlbWVudGF0aW9uLlxuLy8gVGVjaG5pY2FsbHkgc2V0SW1tZWRpYXRlIHNob3VsZCBiZSB0aGUgaWRlYWwgY2hvaWNlLCBidXQgaXQncyBvbmx5IGF2YWlsYWJsZVxuLy8gaW4gSUUuIFRoZSBvbmx5IHBvbHlmaWxsIHRoYXQgY29uc2lzdGVudGx5IHF1ZXVlcyB0aGUgY2FsbGJhY2sgYWZ0ZXIgYWxsIERPTVxuLy8gZXZlbnRzIHRyaWdnZXJlZCBpbiB0aGUgc2FtZSBsb29wIGlzIGJ5IHVzaW5nIE1lc3NhZ2VDaGFubmVsLlxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoc2V0SW1tZWRpYXRlKSkge1xuICBtYWNyb1RpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJbW1lZGlhdGUoZmx1c2hDYWxsYmFja3MpO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTWVzc2FnZUNoYW5uZWwpIHx8XG4gIC8vIFBoYW50b21KU1xuICBNZXNzYWdlQ2hhbm5lbC50b1N0cmluZygpID09PSAnW29iamVjdCBNZXNzYWdlQ2hhbm5lbENvbnN0cnVjdG9yXSdcbikpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgdmFyIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoQ2FsbGJhY2tzO1xuICBtYWNyb1RpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBwb3J0LnBvc3RNZXNzYWdlKDEpO1xuICB9O1xufSBlbHNlIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgbWFjcm9UaW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dChmbHVzaENhbGxiYWNrcywgMCk7XG4gIH07XG59XG5cbi8vIERldGVybWluZSBtaWNyb3Rhc2sgZGVmZXIgaW1wbGVtZW50YXRpb24uXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCwgJGZsb3ctZGlzYWJsZS1saW5lICovXG5pZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb21pc2UpKSB7XG4gIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIG1pY3JvVGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHAudGhlbihmbHVzaENhbGxiYWNrcyk7XG4gICAgLy8gaW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgLy8gaXQgY2FuIGdldCBzdHVjayBpbiBhIHdlaXJkIHN0YXRlIHdoZXJlIGNhbGxiYWNrcyBhcmUgcHVzaGVkIGludG8gdGhlXG4gICAgLy8gbWljcm90YXNrIHF1ZXVlIGJ1dCB0aGUgcXVldWUgaXNuJ3QgYmVpbmcgZmx1c2hlZCwgdW50aWwgdGhlIGJyb3dzZXJcbiAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAvLyBcImZvcmNlXCIgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBmbHVzaGVkIGJ5IGFkZGluZyBhbiBlbXB0eSB0aW1lci5cbiAgICBpZiAoaXNJT1MpIHsgc2V0VGltZW91dChub29wKTsgfVxuICB9O1xufSBlbHNlIHtcbiAgLy8gZmFsbGJhY2sgdG8gbWFjcm9cbiAgbWljcm9UaW1lckZ1bmMgPSBtYWNyb1RpbWVyRnVuYztcbn1cblxuLyoqXG4gKiBXcmFwIGEgZnVuY3Rpb24gc28gdGhhdCBpZiBhbnkgY29kZSBpbnNpZGUgdHJpZ2dlcnMgc3RhdGUgY2hhbmdlLFxuICogdGhlIGNoYW5nZXMgYXJlIHF1ZXVlZCB1c2luZyBhIChtYWNybykgdGFzayBpbnN0ZWFkIG9mIGEgbWljcm90YXNrLlxuICovXG5mdW5jdGlvbiB3aXRoTWFjcm9UYXNrIChmbikge1xuICByZXR1cm4gZm4uX3dpdGhUYXNrIHx8IChmbi5fd2l0aFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdXNlTWFjcm9UYXNrID0gdHJ1ZTtcbiAgICB2YXIgcmVzID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB1c2VNYWNyb1Rhc2sgPSBmYWxzZTtcbiAgICByZXR1cm4gcmVzXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrIChjYiwgY3R4KSB7XG4gIHZhciBfcmVzb2x2ZTtcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCBjdHgsICduZXh0VGljaycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlKGN0eCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgaWYgKHVzZU1hY3JvVGFzaykge1xuICAgICAgbWFjcm9UaW1lckZ1bmMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWljcm9UaW1lckZ1bmMoKTtcbiAgICB9XG4gIH1cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoIFByb3h5ICovXG5cbnZhciBpbml0UHJveHk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXG4gICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgK1xuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsJyArXG4gICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgKTtcblxuICB2YXIgd2Fybk5vblByZXNlbnQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xuICAgICAgJ3JlZmVyZW5jZWQgZHVyaW5nIHJlbmRlci4gTWFrZSBzdXJlIHRoYXQgdGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgJyArXG4gICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvcmVhY3Rpdml0eS5odG1sI0RlY2xhcmluZy1SZWFjdGl2ZS1Qcm9wZXJ0aWVzLicsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciBoYXNQcm94eSA9XG4gICAgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm94eSk7XG5cbiAgaWYgKGhhc1Byb3h5KSB7XG4gICAgdmFyIGlzQnVpbHRJbk1vZGlmaWVyID0gbWFrZU1hcCgnc3RvcCxwcmV2ZW50LHNlbGYsY3RybCxzaGlmdCxhbHQsbWV0YSxleGFjdCcpO1xuICAgIGNvbmZpZy5rZXlDb2RlcyA9IG5ldyBQcm94eShjb25maWcua2V5Q29kZXMsIHtcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQnVpbHRJbk1vZGlmaWVyKGtleSkpIHtcbiAgICAgICAgICB3YXJuKChcIkF2b2lkIG92ZXJ3cml0aW5nIGJ1aWx0LWluIG1vZGlmaWVyIGluIGNvbmZpZy5rZXlDb2RlczogLlwiICsga2V5KSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFzSGFuZGxlciA9IHtcbiAgICBoYXM6IGZ1bmN0aW9uIGhhcyAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIHZhciBoYXMgPSBrZXkgaW4gdGFyZ2V0O1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IGFsbG93ZWRHbG9iYWxzKGtleSkgfHwga2V5LmNoYXJBdCgwKSA9PT0gJ18nO1xuICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzIHx8ICFpc0FsbG93ZWRcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldEhhbmRsZXIgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKHRhcmdldCwga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKTtcbiAgICB9O1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgbmFtZSA9IG9uY2UkJDEgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb25jZTogb25jZSQkMSxcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjbG9uZWRbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzJDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgcmV0dXJuIGZucy5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG4gIGludm9rZXIuZm5zID0gZm5zO1xuICByZXR1cm4gaW52b2tlclxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0ZW5lcnMgKFxuICBvbixcbiAgb2xkT24sXG4gIGFkZCxcbiAgcmVtb3ZlJCQxLFxuICB2bVxuKSB7XG4gIHZhciBuYW1lLCBkZWYsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgZGVmID0gY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50Lm9uY2UsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbWVyZ2VWTm9kZUhvb2sgKGRlZiwgaG9va0tleSwgaG9vaykge1xuICBpZiAoZGVmIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICBkZWYgPSBkZWYuZGF0YS5ob29rIHx8IChkZWYuZGF0YS5ob29rID0ge30pO1xuICB9XG4gIHZhciBpbnZva2VyO1xuICB2YXIgb2xkSG9vayA9IGRlZltob29rS2V5XTtcblxuICBmdW5jdGlvbiB3cmFwcGVkSG9vayAoKSB7XG4gICAgaG9vay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGltcG9ydGFudDogcmVtb3ZlIG1lcmdlZCBob29rIHRvIGVuc3VyZSBpdCdzIGNhbGxlZCBvbmx5IG9uY2VcbiAgICAvLyBhbmQgcHJldmVudCBtZW1vcnkgbGVha1xuICAgIHJlbW92ZShpbnZva2VyLmZucywgd3JhcHBlZEhvb2spO1xuICB9XG5cbiAgaWYgKGlzVW5kZWYob2xkSG9vaykpIHtcbiAgICAvLyBubyBleGlzdGluZyBob29rXG4gICAgaW52b2tlciA9IGNyZWF0ZUZuSW52b2tlcihbd3JhcHBlZEhvb2tdKTtcbiAgfSBlbHNlIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNEZWYob2xkSG9vay5mbnMpICYmIGlzVHJ1ZShvbGRIb29rLm1lcmdlZCkpIHtcbiAgICAgIC8vIGFscmVhZHkgYSBtZXJnZWQgaW52b2tlclxuICAgICAgaW52b2tlciA9IG9sZEhvb2s7XG4gICAgICBpbnZva2VyLmZucy5wdXNoKHdyYXBwZWRIb29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhpc3RpbmcgcGxhaW4gaG9va1xuICAgICAgaW52b2tlciA9IGNyZWF0ZUZuSW52b2tlcihbb2xkSG9vaywgd3JhcHBlZEhvb2tdKTtcbiAgICB9XG4gIH1cblxuICBpbnZva2VyLm1lcmdlZCA9IHRydWU7XG4gIGRlZltob29rS2V5XSA9IGludm9rZXI7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnXG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBrZXlJbkxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ICE9PSBrZXlJbkxvd2VyQ2FzZSAmJlxuICAgICAgICAgIGF0dHJzICYmIGhhc093bihhdHRycywga2V5SW5Mb3dlckNhc2UpXG4gICAgICAgICkge1xuICAgICAgICAgIHRpcChcbiAgICAgICAgICAgIFwiUHJvcCBcXFwiXCIgKyBrZXlJbkxvd2VyQ2FzZSArIFwiXFxcIiBpcyBwYXNzZWQgdG8gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHRhZyB8fCBDdG9yKSkgKyBcIiwgYnV0IHRoZSBkZWNsYXJlZCBwcm9wIG5hbWUgaXNcIiArXG4gICAgICAgICAgICBcIiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgY2FtZWxDYXNlZCBcIiArXG4gICAgICAgICAgICBcInByb3BzIG5lZWQgdG8gdXNlIHRoZWlyIGtlYmFiLWNhc2UgZXF1aXZhbGVudHMgd2hlbiB1c2luZyBpbi1ET00gXCIgK1xuICAgICAgICAgICAgXCJ0ZW1wbGF0ZXMuIFlvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIGFsdEtleSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGtleSArIFwiXFxcIi5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcCAoXG4gIHJlcyxcbiAgaGFzaCxcbiAga2V5LFxuICBhbHRLZXksXG4gIHByZXNlcnZlXG4pIHtcbiAgaWYgKGlzRGVmKGhhc2gpKSB7XG4gICAgaWYgKGhhc093bihoYXNoLCBrZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChoYXNPd24oaGFzaCwgYWx0S2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2FsdEtleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2FsdEtleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyogICovXG5cbi8vIFRoZSB0ZW1wbGF0ZSBjb21waWxlciBhdHRlbXB0cyB0byBtaW5pbWl6ZSB0aGUgbmVlZCBmb3Igbm9ybWFsaXphdGlvbiBieVxuLy8gc3RhdGljYWxseSBhbmFseXppbmcgdGhlIHRlbXBsYXRlIGF0IGNvbXBpbGUgdGltZS5cbi8vXG4vLyBGb3IgcGxhaW4gSFRNTCBtYXJrdXAsIG5vcm1hbGl6YXRpb24gY2FuIGJlIGNvbXBsZXRlbHkgc2tpcHBlZCBiZWNhdXNlIHRoZVxuLy8gZ2VuZXJhdGVkIHJlbmRlciBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIHJldHVybiBBcnJheTxWTm9kZT4uIFRoZXJlIGFyZVxuLy8gdHdvIGNhc2VzIHdoZXJlIGV4dHJhIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkOlxuXG4vLyAxLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb21wb25lbnRzIC0gYmVjYXVzZSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4vLyBtYXkgcmV0dXJuIGFuIEFycmF5IGluc3RlYWQgb2YgYSBzaW5nbGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBqdXN0IGEgc2ltcGxlXG4vLyBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAtIGlmIGFueSBjaGlsZCBpcyBhbiBBcnJheSwgd2UgZmxhdHRlbiB0aGUgd2hvbGVcbi8vIHRoaW5nIHdpdGggQXJyYXkucHJvdG90eXBlLmNvbmNhdC4gSXQgaXMgZ3VhcmFudGVlZCB0byBiZSBvbmx5IDEtbGV2ZWwgZGVlcFxuLy8gYmVjYXVzZSBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYWxyZWFkeSBub3JtYWxpemUgdGhlaXIgb3duIGNoaWxkcmVuLlxuZnVuY3Rpb24gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGlsZHJlbilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbi8vIDIuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbnN0cnVjdHMgdGhhdCBhbHdheXMgZ2VuZXJhdGVkIG5lc3RlZCBBcnJheXMsXG4vLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcbi8vIHdpdGggaGFuZC13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMgLyBKU1guIEluIHN1Y2ggY2FzZXMgYSBmdWxsIG5vcm1hbGl6YXRpb25cbi8vIGlzIG5lZWRlZCB0byBjYXRlciB0byBhbGwgcG9zc2libGUgdHlwZXMgb2YgY2hpbGRyZW4gdmFsdWVzLlxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIHJldHVybiBpc1ByaW1pdGl2ZShjaGlsZHJlbilcbiAgICA/IFtjcmVhdGVUZXh0Vk5vZGUoY2hpbGRyZW4pXVxuICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgID8gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjaGlsZHJlbilcbiAgICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzVGV4dE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIGlzRGVmKG5vZGUpICYmIGlzRGVmKG5vZGUudGV4dCkgJiYgaXNGYWxzZShub2RlLmlzQ29tbWVudClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGksIGMsIGxhc3RJbmRleCwgbGFzdDtcbiAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChpc1VuZGVmKGMpIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHsgY29udGludWUgfVxuICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xuICAgIGxhc3QgPSByZXNbbGFzdEluZGV4XTtcbiAgICAvLyAgbmVzdGVkXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICAgIGlmIChjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYyA9IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oYywgKChuZXN0ZWRJbmRleCB8fCAnJykgKyBcIl9cIiArIGkpKTtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICBpZiAoaXNUZXh0Tm9kZShjWzBdKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgKGNbMF0pLnRleHQpO1xuICAgICAgICAgIGMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIGMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUoYykpIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIFNTUiBoeWRyYXRpb24gYmVjYXVzZSB0ZXh0IG5vZGVzIGFyZVxuICAgICAgICAvLyBlc3NlbnRpYWxseSBtZXJnZWQgd2hlbiByZW5kZXJlZCB0byBIVE1MIHN0cmluZ3NcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYyk7XG4gICAgICB9IGVsc2UgaWYgKGMgIT09ICcnKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgIHJlcy5wdXNoKGNyZWF0ZVRleHRWTm9kZShjKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGMpICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjLnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVmYXVsdCBrZXkgZm9yIG5lc3RlZCBhcnJheSBjaGlsZHJlbiAobGlrZWx5IGdlbmVyYXRlZCBieSB2LWZvcilcbiAgICAgICAgaWYgKGlzVHJ1ZShjaGlsZHJlbi5faXNWTGlzdCkgJiZcbiAgICAgICAgICBpc0RlZihjLnRhZykgJiZcbiAgICAgICAgICBpc1VuZGVmKGMua2V5KSAmJlxuICAgICAgICAgIGlzRGVmKG5lc3RlZEluZGV4KSkge1xuICAgICAgICAgIGMua2V5ID0gXCJfX3ZsaXN0XCIgKyBuZXN0ZWRJbmRleCArIFwiX1wiICsgaSArIFwiX19cIjtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvcixcbiAgY29udGV4dFxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChpc0RlZihmYWN0b3J5LmNvbnRleHRzKSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3RvcnkuY29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY29udGV4dHMgPSBmYWN0b3J5LmNvbnRleHRzID0gW2NvbnRleHRdO1xuICAgIHZhciBzeW5jID0gdHJ1ZTtcblxuICAgIHZhciBmb3JjZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY29udGV4dHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnRleHRzW2ldLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICBpZiAodHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKHJlcy5jb21wb25lbnQpICYmIHR5cGVvZiByZXMuY29tcG9uZW50LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5lcnJvcikpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yQ29tcCA9IGVuc3VyZUN0b3IocmVzLmVycm9yLCBiYXNlQ3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLmxvYWRpbmcpKSB7XG4gICAgICAgICAgZmFjdG9yeS5sb2FkaW5nQ29tcCA9IGVuc3VyZUN0b3IocmVzLmxvYWRpbmcsIGJhc2VDdG9yKTtcbiAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xuICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVzLmRlbGF5IHx8IDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy50aW1lb3V0KSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICAgICAgICAgICAgICAgID8gKFwidGltZW91dCAoXCIgKyAocmVzLnRpbWVvdXQpICsgXCJtcylcIilcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcbiAgICAvLyByZXR1cm4gaW4gY2FzZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ1xuICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICA6IGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNBc3luY1BsYWNlaG9sZGVyIChub2RlKSB7XG4gIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZtLl9oYXNIb29rRXZlbnQgPSBmYWxzZTtcbiAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICB9XG59XG5cbnZhciB0YXJnZXQ7XG5cbmZ1bmN0aW9uIGFkZCAoZXZlbnQsIGZuLCBvbmNlKSB7XG4gIGlmIChvbmNlKSB7XG4gICAgdGFyZ2V0LiRvbmNlKGV2ZW50LCBmbik7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQxIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIChcbiAgdm0sXG4gIGxpc3RlbmVycyxcbiAgb2xkTGlzdGVuZXJzXG4pIHtcbiAgdGFyZ2V0ID0gdm07XG4gIHVwZGF0ZUxpc3RlbmVycyhsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyB8fCB7fSwgYWRkLCByZW1vdmUkMSwgdm0pO1xuICB0YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgdmFyIGhvb2tSRSA9IC9eaG9vazovO1xuICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzJDEuJG9uKGV2ZW50W2ldLCBmbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICh2bS5fZXZlbnRzW2V2ZW50XSB8fCAodm0uX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pO1xuICAgICAgLy8gb3B0aW1pemUgaG9vazpldmVudCBjb3N0IGJ5IHVzaW5nIGEgYm9vbGVhbiBmbGFnIG1hcmtlZCBhdCByZWdpc3RyYXRpb25cbiAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgaWYgKGhvb2tSRS50ZXN0KGV2ZW50KSkge1xuICAgICAgICB2bS5faGFzSG9va0V2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgIHZtLiRvZmYoZXZlbnQsIG9uKTtcbiAgICAgIGZuLmFwcGx5KHZtLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBvbi5mbiA9IGZuO1xuICAgIHZtLiRvbihldmVudCwgb24pO1xuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMkMS4kb2ZmKGV2ZW50W2ldLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFjYnMpIHtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKGZuKSB7XG4gICAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgICB2YXIgY2I7XG4gICAgICB2YXIgaSQxID0gY2JzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpJDEtLSkge1xuICAgICAgICBjYiA9IGNic1tpJDFdO1xuICAgICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICAgIGNicy5zcGxpY2UoaSQxLCAxKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICB0aXAoXG4gICAgICAgICAgXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgeW91IGNhbm5vdCB1c2UgXCIgK1xuICAgICAgICAgIFwidi1vbiB0byBsaXN0ZW4gdG8gY2FtZWxDYXNlIGV2ZW50cyB3aGVuIHVzaW5nIGluLURPTSB0ZW1wbGF0ZXMuIFwiICtcbiAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2JzW2ldLmFwcGx5KHZtLCBhcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCAoXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG59XG5cbi8qICAqL1xuXG5cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIHJhdyBjaGlsZHJlbiBWTm9kZXMgaW50byBhIHNsb3Qgb2JqZWN0LlxuICovXG5mdW5jdGlvbiByZXNvbHZlU2xvdHMgKFxuICBjaGlsZHJlbixcbiAgY29udGV4dFxuKSB7XG4gIHZhciBzbG90cyA9IHt9O1xuICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHNsb3RzXG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICB2YXIgZGF0YSA9IGNoaWxkLmRhdGE7XG4gICAgLy8gcmVtb3ZlIHNsb3QgYXR0cmlidXRlIGlmIHRoZSBub2RlIGlzIHJlc29sdmVkIGFzIGEgVnVlIHNsb3Qgbm9kZVxuICAgIGlmIChkYXRhICYmIGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy5zbG90KSB7XG4gICAgICBkZWxldGUgZGF0YS5hdHRycy5zbG90O1xuICAgIH1cbiAgICAvLyBuYW1lZCBzbG90cyBzaG91bGQgb25seSBiZSByZXNwZWN0ZWQgaWYgdGhlIHZub2RlIHdhcyByZW5kZXJlZCBpbiB0aGVcbiAgICAvLyBzYW1lIGNvbnRleHQuXG4gICAgaWYgKChjaGlsZC5jb250ZXh0ID09PSBjb250ZXh0IHx8IGNoaWxkLmZuQ29udGV4dCA9PT0gY29udGV4dCkgJiZcbiAgICAgIGRhdGEgJiYgZGF0YS5zbG90ICE9IG51bGxcbiAgICApIHtcbiAgICAgIHZhciBuYW1lID0gZGF0YS5zbG90O1xuICAgICAgdmFyIHNsb3QgPSAoc2xvdHNbbmFtZV0gfHwgKHNsb3RzW25hbWVdID0gW10pKTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgc2xvdC5wdXNoLmFwcGx5KHNsb3QsIGNoaWxkLmNoaWxkcmVuIHx8IFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsb3QucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlc1xuKSB7XG4gIHJlcyA9IHJlcyB8fCB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnNbaV0pKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoZm5zW2ldLCByZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNbZm5zW2ldLmtleV0gPSBmbnNbaV0uZm47XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBhY3RpdmVJbnN0YW5jZSA9IG51bGw7XG52YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNNb3VudGVkKSB7XG4gICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgIH1cbiAgICB2YXIgcHJldkVsID0gdm0uJGVsO1xuICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICAgIGFjdGl2ZUluc3RhbmNlID0gdm07XG4gICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgLy8gVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gaXMgaW5qZWN0ZWQgaW4gZW50cnkgcG9pbnRzXG4gICAgLy8gYmFzZWQgb24gdGhlIHJlbmRlcmluZyBiYWNrZW5kIHVzZWQuXG4gICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18oXG4gICAgICAgIHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyxcbiAgICAgICAgdm0uJG9wdGlvbnMuX3BhcmVudEVsbSxcbiAgICAgICAgdm0uJG9wdGlvbnMuX3JlZkVsbVxuICAgICAgKTtcbiAgICAgIC8vIG5vIG5lZWQgZm9yIHRoZSByZWYgbm9kZXMgYWZ0ZXIgaW5pdGlhbCBwYXRjaFxuICAgICAgLy8gdGhpcyBwcmV2ZW50cyBrZWVwaW5nIGEgZGV0YWNoZWQgRE9NIHRyZWUgaW4gbWVtb3J5ICgjNTg1MSlcbiAgICAgIHZtLiRvcHRpb25zLl9wYXJlbnRFbG0gPSB2bS4kb3B0aW9ucy5fcmVmRWxtID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlc1xuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHByZXZWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICBhY3RpdmVJbnN0YW5jZSA9IHByZXZBY3RpdmVJbnN0YW5jZTtcbiAgICAvLyB1cGRhdGUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gdm07XG4gICAgfVxuICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICBpZiAodm0uJHZub2RlICYmIHZtLiRwYXJlbnQgJiYgdm0uJHZub2RlID09PSB2bS4kcGFyZW50Ll92bm9kZSkge1xuICAgICAgdm0uJHBhcmVudC4kZWwgPSB2bS4kZWw7XG4gICAgfVxuICAgIC8vIHVwZGF0ZWQgaG9vayBpcyBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlciB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBhcmVcbiAgICAvLyB1cGRhdGVkIGluIGEgcGFyZW50J3MgdXBkYXRlZCBob29rLlxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci51cGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudFxuICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdm0uJG9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAgIHJlbW92ZShwYXJlbnQuJGNoaWxkcmVuLCB2bSk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgaSA9IHZtLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHZtLl9kYXRhLl9fb2JfXykge1xuICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICB9XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyBpbnZva2UgZGVzdHJveSBob29rcyBvbiBjdXJyZW50IHJlbmRlcmVkIHRyZWVcbiAgICB2bS5fX3BhdGNoX18odm0uX3Zub2RlLCBudWxsKTtcbiAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHZtLiRvZmYoKTtcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIC8vIHJlbGVhc2UgY2lyY3VsYXIgcmVmZXJlbmNlICgjNjc1OSlcbiAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICB2bS4kdm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50IChcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICB2bS4kZWwgPSBlbDtcbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICgodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHx8XG4gICAgICAgIHZtLiRvcHRpb25zLmVsIHx8IGVsKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCBvZiBWdWUgd2hlcmUgdGhlIHRlbXBsYXRlICcgK1xuICAgICAgICAgICdjb21waWxlciBpcyBub3QgYXZhaWxhYmxlLiBFaXRoZXIgcHJlLWNvbXBpbGUgdGhlIHRlbXBsYXRlcyBpbnRvICcgK1xuICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IHZtLl9uYW1lO1xuICAgICAgdmFyIGlkID0gdm0uX3VpZDtcbiAgICAgIHZhciBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyBpZDtcbiAgICAgIHZhciBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArIGlkO1xuXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgIHZhciB2bm9kZSA9IHZtLl9yZW5kZXIoKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHJlbmRlclwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG5cbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgdm0uX3VwZGF0ZSh2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHBhdGNoXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICAgIH07XG4gIH1cblxuICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXG4gIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIG51bGwsIHRydWUgLyogaXNSZW5kZXJXYXRjaGVyICovKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG5cbiAgLy8gbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSwgY2FsbCBtb3VudGVkIG9uIHNlbGZcbiAgLy8gbW91bnRlZCBpcyBjYWxsZWQgZm9yIHJlbmRlci1jcmVhdGVkIGNoaWxkIGNvbXBvbmVudHMgaW4gaXRzIGluc2VydGVkIGhvb2tcbiAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XG4gICAgdm0uX2lzTW91bnRlZCA9IHRydWU7XG4gICAgY2FsbEhvb2sodm0sICdtb3VudGVkJyk7XG4gIH1cbiAgcmV0dXJuIHZtXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgdm0sXG4gIHByb3BzRGF0YSxcbiAgbGlzdGVuZXJzLFxuICBwYXJlbnRWbm9kZSxcbiAgcmVuZGVyQ2hpbGRyZW5cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cbiAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW5cbiAgdmFyIGhhc0NoaWxkcmVuID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzIHx8IC8vIGhhcyBuZXcgc2NvcGVkIHNsb3RzXG4gICAgdm0uJHNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAvLyBoYXMgb2xkIHNjb3BlZCBzbG90c1xuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcbiAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gIH1cbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG5cbiAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAvLyB1c2VkIHRoZW0gZHVyaW5nIHJlbmRlclxuICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAvLyBrZWVwIGEgY29weSBvZiByYXcgcHJvcHNEYXRhXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhID0gcHJvcHNEYXRhO1xuICB9XG5cbiAgLy8gdXBkYXRlIGxpc3RlbmVyc1xuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZhciBvbGRMaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycywgb2xkTGlzdGVuZXJzKTtcblxuICAvLyByZXNvbHZlIHNsb3RzICsgZm9yY2UgdXBkYXRlIGlmIGhhcyBjaGlsZHJlblxuICBpZiAoaGFzQ2hpbGRyZW4pIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgaWYgKGhhbmRsZXJzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGhhbmRsZXJzW2ldLmNhbGwodm0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKGhvb2sgKyBcIiBob29rXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH1cbiAgcG9wVGFyZ2V0KCk7XG59XG5cbi8qICAqL1xuXG5cbnZhciBNQVhfVVBEQVRFX0NPVU5UID0gMTAwO1xuXG52YXIgcXVldWUgPSBbXTtcbnZhciBhY3RpdmF0ZWRDaGlsZHJlbiA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgaW5kZXggPSAwO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gcmVzZXRTY2hlZHVsZXJTdGF0ZSAoKSB7XG4gIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgaGFzID0ge307XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2lyY3VsYXIgPSB7fTtcbiAgfVxuICB3YWl0aW5nID0gZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgdmFyIHdhdGNoZXIsIGlkO1xuXG4gIC8vIFNvcnQgcXVldWUgYmVmb3JlIGZsdXNoLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdDpcbiAgLy8gMS4gQ29tcG9uZW50cyBhcmUgdXBkYXRlZCBmcm9tIHBhcmVudCB0byBjaGlsZC4gKGJlY2F1c2UgcGFyZW50IGlzIGFsd2F5c1xuICAvLyAgICBjcmVhdGVkIGJlZm9yZSB0aGUgY2hpbGQpXG4gIC8vIDIuIEEgY29tcG9uZW50J3MgdXNlciB3YXRjaGVycyBhcmUgcnVuIGJlZm9yZSBpdHMgcmVuZGVyIHdhdGNoZXIgKGJlY2F1c2VcbiAgLy8gICAgdXNlciB3YXRjaGVycyBhcmUgY3JlYXRlZCBiZWZvcmUgdGhlIHJlbmRlciB3YXRjaGVyKVxuICAvLyAzLiBJZiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQgZHVyaW5nIGEgcGFyZW50IGNvbXBvbmVudCdzIHdhdGNoZXIgcnVuLFxuICAvLyAgICBpdHMgd2F0Y2hlcnMgY2FuIGJlIHNraXBwZWQuXG4gIHF1ZXVlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcblxuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHF1ZXVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHdhdGNoZXIgPSBxdWV1ZVtpbmRleF07XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQpIHtcbiAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFF1ZXVlIGEga2VwdC1hbGl2ZSBjb21wb25lbnQgdGhhdCB3YXMgYWN0aXZhdGVkIGR1cmluZyBwYXRjaC5cbiAqIFRoZSBxdWV1ZSB3aWxsIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgZW50aXJlIHRyZWUgaGFzIGJlZW4gcGF0Y2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVBY3RpdmF0ZWRDb21wb25lbnQgKHZtKSB7XG4gIC8vIHNldHRpbmcgX2luYWN0aXZlIHRvIGZhbHNlIGhlcmUgc28gdGhhdCBhIHJlbmRlciBmdW5jdGlvbiBjYW5cbiAgLy8gcmVseSBvbiBjaGVja2luZyB3aGV0aGVyIGl0J3MgaW4gYW4gaW5hY3RpdmUgdHJlZSAoZS5nLiByb3V0ZXItdmlldylcbiAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gIGFjdGl2YXRlZENoaWxkcmVuLnB1c2godm0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQWN0aXZhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQocXVldWVbaV0sIHRydWUgLyogdHJ1ZSAqLyk7XG4gIH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICogSm9icyB3aXRoIGR1cGxpY2F0ZSBJRHMgd2lsbCBiZSBza2lwcGVkIHVubGVzcyBpdCdzXG4gKiBwdXNoZWQgd2hlbiB0aGUgcXVldWUgaXMgYmVpbmcgZmx1c2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVXYXRjaGVyICh3YXRjaGVyKSB7XG4gIHZhciBpZCA9IHdhdGNoZXIuaWQ7XG4gIGlmIChoYXNbaWRdID09IG51bGwpIHtcbiAgICBoYXNbaWRdID0gdHJ1ZTtcbiAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBhbHJlYWR5IGZsdXNoaW5nLCBzcGxpY2UgdGhlIHdhdGNoZXIgYmFzZWQgb24gaXRzIGlkXG4gICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxuICAgICAgdmFyIGkgPSBxdWV1ZS5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKGkgPiBpbmRleCAmJiBxdWV1ZVtpXS5pZCA+IHdhdGNoZXIuaWQpIHtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgICAgcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB3YXRjaGVyKTtcbiAgICB9XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICAgIG5leHRUaWNrKGZsdXNoU2NoZWR1bGVyUXVldWUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIHVpZCQxID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqL1xudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGNiLFxuICBvcHRpb25zLFxuICBpc1JlbmRlcldhdGNoZXJcbikge1xuICB0aGlzLnZtID0gdm07XG4gIGlmIChpc1JlbmRlcldhdGNoZXIpIHtcbiAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XG4gIH1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcyk7XG4gIC8vIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZXAgPSAhIW9wdGlvbnMuZGVlcDtcbiAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICB0aGlzLmxhenkgPSAhIW9wdGlvbnMubGF6eTtcbiAgICB0aGlzLnN5bmMgPSAhIW9wdGlvbnMuc3luYztcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlZXAgPSB0aGlzLnVzZXIgPSB0aGlzLmxhenkgPSB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQxOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5leHByZXNzaW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgID8gZXhwT3JGbi50b1N0cmluZygpXG4gICAgOiAnJztcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGbjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKTtcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgZGVwID0gdGhpcyQxLmRlcHNbaV07XG4gICAgaWYgKCF0aGlzJDEubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMkMSk7XG4gICAgfVxuICB9XG4gIHZhciB0bXAgPSB0aGlzLmRlcElkcztcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkcztcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKCk7XG4gIHRtcCA9IHRoaXMuZGVwcztcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzO1xuICB0aGlzLm5ld0RlcHMgPSB0bXA7XG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgICB0aGlzLnJ1bigpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2hlZHVsZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIHJ1biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkLlxuICAgICAgaXNPYmplY3QodmFsdWUpIHx8XG4gICAgICB0aGlzLmRlZXBcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB0aGlzLnZtLCAoXCJjYWxsYmFjayBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gZXZhbHVhdGUgKCkge1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzJDEuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMkMS5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzJDEpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2bS4kcGFyZW50ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhIHByb3AgZGlyZWN0bHkgc2luY2UgdGhlIHZhbHVlIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcGFyZW50IGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcIkluc3RlYWQsIHVzZSBhIGRhdGEgb3IgY29tcHV0ZWQgcHJvcGVydHkgYmFzZWQgb24gdGhlIHByb3AncyBcIiArXG4gICAgICAgICAgICBcInZhbHVlLiBQcm9wIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmaW5lUmVhY3RpdmUocHJvcHMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICAvLyBzdGF0aWMgcHJvcHMgYXJlIGFscmVhZHkgcHJveGllZCBvbiB0aGUgY29tcG9uZW50J3MgcHJvdG90eXBlXG4gICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAvLyBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgcHJveHkodm0sIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xuICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICB2YXIgZGF0YSA9IHZtLiRvcHRpb25zLmRhdGE7XG4gIGRhdGEgPSB2bS5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nXG4gICAgPyBnZXREYXRhKGRhdGEsIHZtKVxuICAgIDogZGF0YSB8fCB7fTtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdkYXRhIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIG9iamVjdDpcXG4nICtcbiAgICAgICdodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9jb21wb25lbnRzLmh0bWwjZGF0YS1NdXN0LUJlLWEtRnVuY3Rpb24nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgZGF0YSBwcm9wZXJ0eS5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIlRoZSBkYXRhIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlY2xhcmVkIGFzIGEgcHJvcC4gXCIgK1xuICAgICAgICBcIlVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC5cIixcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICBwcm94eSh2bSwgXCJfZGF0YVwiLCBrZXkpO1xuICAgIH1cbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhIChkYXRhLCB2bSkge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgZGF0YSBnZXR0ZXJzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGF0YS5jYWxsKHZtLCB2bSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcImRhdGEoKVwiKTtcbiAgICByZXR1cm4ge31cbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG52YXIgY29tcHV0ZWRXYXRjaGVyT3B0aW9ucyA9IHsgbGF6eTogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtLCBjb21wdXRlZCkge1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBqdXN0IGdldHRlcnMgZHVyaW5nIFNTUlxuICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZ2V0dGVyID09IG51bGwpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkdldHRlciBpcyBtaXNzaW5nIGZvciBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU1NSKSB7XG4gICAgICAvLyBjcmVhdGUgaW50ZXJuYWwgd2F0Y2hlciBmb3IgdGhlIGNvbXB1dGVkIHByb3BlcnR5LlxuICAgICAgd2F0Y2hlcnNba2V5XSA9IG5ldyBXYXRjaGVyKFxuICAgICAgICB2bSxcbiAgICAgICAgZ2V0dGVyIHx8IG5vb3AsXG4gICAgICAgIG5vb3AsXG4gICAgICAgIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgIC8vIGNvbXBvbmVudCBwcm90b3R5cGUuIFdlIG9ubHkgbmVlZCB0byBkZWZpbmUgY29tcHV0ZWQgcHJvcGVydGllcyBkZWZpbmVkXG4gICAgLy8gYXQgaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIGRlZmluZUNvbXB1dGVkKHZtLCBrZXksIHVzZXJEZWYpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGtleSBpbiB2bS4kZGF0YSkge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGluIGRhdGEuXCIpLCB2bSk7XG4gICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLnByb3BzICYmIGtleSBpbiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFzIGEgcHJvcC5cIiksIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxuICB0YXJnZXQsXG4gIGtleSxcbiAgdXNlckRlZlxuKSB7XG4gIHZhciBzaG91bGRDYWNoZSA9ICFpc1NlcnZlclJlbmRlcmluZygpO1xuICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gc2hvdWxkQ2FjaGVcbiAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgOiB1c2VyRGVmO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBub29wO1xuICB9IGVsc2Uge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgPyBzaG91bGRDYWNoZSAmJiB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgICAgOiB1c2VyRGVmLmdldFxuICAgICAgOiBub29wO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgPyB1c2VyRGVmLnNldFxuICAgICAgOiBub29wO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID09PSBub29wKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgYXNzaWduZWQgdG8gYnV0IGl0IGhhcyBubyBzZXR0ZXIuXCIpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEdldHRlciAoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB0aGlzLl9jb21wdXRlZFdhdGNoZXJzICYmIHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnNba2V5XTtcbiAgICBpZiAod2F0Y2hlcikge1xuICAgICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgd2F0Y2hlci5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbiB1bmRlZmluZWQgdmFsdWUgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV0gPT0gbnVsbCA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgaGFuZGxlcixcbiAgb3B0aW9uc1xuKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XG4gIC8vIGZsb3cgc29tZWhvdyBoYXMgcHJvYmxlbXMgd2l0aCBkaXJlY3RseSBkZWNsYXJlZCBkZWZpbml0aW9uIG9iamVjdFxuICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICB2YXIgZGF0YURlZiA9IHt9O1xuICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgdmFyIHByb3BzRGVmID0ge307XG4gIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Byb3BzIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHJlcGxhY2luZyBpbnN0YW5jZSByb290ICRkYXRhLiAnICtcbiAgICAgICAgJ1VzZSBuZXN0ZWQgZGF0YSBwcm9wZXJ0aWVzIGluc3RlYWQuJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICAgIHByb3BzRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXCIkcHJvcHMgaXMgcmVhZG9ubHkuXCIsIHRoaXMpO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckZGF0YScsIGRhdGFEZWYpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRwcm9wcycsIHByb3BzRGVmKTtcblxuICBWdWUucHJvdG90eXBlLiRzZXQgPSBzZXQ7XG4gIFZ1ZS5wcm90b3R5cGUuJGRlbGV0ZSA9IGRlbDtcblxuICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChcbiAgICBleHBPckZuLFxuICAgIGNiLFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoaXNQbGFpbk9iamVjdChjYikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucylcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy51c2VyID0gdHJ1ZTtcbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgICBjYi5jYWxsKHZtLCB3YXRjaGVyLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbiAoKSB7XG4gICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFByb3ZpZGUgKHZtKSB7XG4gIHZhciBwcm92aWRlID0gdm0uJG9wdGlvbnMucHJvdmlkZTtcbiAgaWYgKHByb3ZpZGUpIHtcbiAgICB2bS5fcHJvdmlkZWQgPSB0eXBlb2YgcHJvdmlkZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBwcm92aWRlLmNhbGwodm0pXG4gICAgICA6IHByb3ZpZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEluamVjdGlvbnMgKHZtKSB7XG4gIHZhciByZXN1bHQgPSByZXNvbHZlSW5qZWN0KHZtLiRvcHRpb25zLmluamVjdCwgdm0pO1xuICBpZiAocmVzdWx0KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlKHZtLCBrZXksIHJlc3VsdFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYW4gaW5qZWN0ZWQgdmFsdWUgZGlyZWN0bHkgc2luY2UgdGhlIGNoYW5nZXMgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwcm92aWRlZCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJpbmplY3Rpb24gYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUodm0sIGtleSwgcmVzdWx0W2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5qZWN0IChpbmplY3QsIHZtKSB7XG4gIGlmIChpbmplY3QpIHtcbiAgICAvLyBpbmplY3QgaXMgOmFueSBiZWNhdXNlIGZsb3cgaXMgbm90IHNtYXJ0IGVub3VnaCB0byBmaWd1cmUgb3V0IGNhY2hlZFxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgICA/IFJlZmxlY3Qub3duS2V5cyhpbmplY3QpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGluamVjdCwga2V5KS5lbnVtZXJhYmxlXG4gICAgICB9KVxuICAgICAgOiBPYmplY3Qua2V5cyhpbmplY3QpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIHZhciBwcm92aWRlS2V5ID0gaW5qZWN0W2tleV0uZnJvbTtcbiAgICAgIHZhciBzb3VyY2UgPSB2bTtcbiAgICAgIHdoaWxlIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5fcHJvdmlkZWQgJiYgaGFzT3duKHNvdXJjZS5fcHJvdmlkZWQsIHByb3ZpZGVLZXkpKSB7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSBzb3VyY2UuX3Byb3ZpZGVkW3Byb3ZpZGVLZXldO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgc291cmNlID0gc291cmNlLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICBpZiAoJ2RlZmF1bHQnIGluIGluamVjdFtrZXldKSB7XG4gICAgICAgICAgdmFyIHByb3ZpZGVEZWZhdWx0ID0gaW5qZWN0W2tleV0uZGVmYXVsdDtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHR5cGVvZiBwcm92aWRlRGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBwcm92aWRlRGVmYXVsdC5jYWxsKHZtKVxuICAgICAgICAgICAgOiBwcm92aWRlRGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybigoXCJJbmplY3Rpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIG5vdCBmb3VuZFwiKSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwpO1xuICAgIGZvciAoaSA9IDA7IGkgPCB2YWw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKGkgKyAxLCBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGkpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNEZWYocmV0KSkge1xuICAgIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgPHNsb3Q+XG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNsb3QgKFxuICBuYW1lLFxuICBmYWxsYmFjayxcbiAgcHJvcHMsXG4gIGJpbmRPYmplY3Rcbikge1xuICB2YXIgc2NvcGVkU2xvdEZuID0gdGhpcy4kc2NvcGVkU2xvdHNbbmFtZV07XG4gIHZhciBub2RlcztcbiAgaWYgKHNjb3BlZFNsb3RGbikgeyAvLyBzY29wZWQgc2xvdFxuICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc09iamVjdChiaW5kT2JqZWN0KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdzbG90IHYtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0JyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgfVxuICAgIG5vZGVzID0gc2NvcGVkU2xvdEZuKHByb3BzKSB8fCBmYWxsYmFjaztcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xvdE5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV07XG4gICAgLy8gd2FybiBkdXBsaWNhdGUgc2xvdCB1c2FnZVxuICAgIGlmIChzbG90Tm9kZXMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNsb3ROb2Rlcy5fcmVuZGVyZWQpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIkR1cGxpY2F0ZSBwcmVzZW5jZSBvZiBzbG90IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgZm91bmQgaW4gdGhlIHNhbWUgcmVuZGVyIHRyZWUgXCIgK1xuICAgICAgICAgIFwiLSB0aGlzIHdpbGwgbGlrZWx5IGNhdXNlIHJlbmRlciBlcnJvcnMuXCIsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc2xvdE5vZGVzLl9yZW5kZXJlZCA9IHRydWU7XG4gICAgfVxuICAgIG5vZGVzID0gc2xvdE5vZGVzIHx8IGZhbGxiYWNrO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHByb3BzICYmIHByb3BzLnNsb3Q7XG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7IHNsb3Q6IHRhcmdldCB9LCBub2RlcylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUZpbHRlciAoaWQpIHtcbiAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNLZXlOb3RNYXRjaCAoZXhwZWN0LCBhY3R1YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXhwZWN0KSkge1xuICAgIHJldHVybiBleHBlY3QuaW5kZXhPZihhY3R1YWwpID09PSAtMVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHBlY3QgIT09IGFjdHVhbFxuICB9XG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIGNoZWNraW5nIGtleUNvZGVzIGZyb20gY29uZmlnLlxuICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXG4gKiBwYXNzaW5nIGluIGV2ZW50S2V5TmFtZSBhcyBsYXN0IGFyZ3VtZW50IHNlcGFyYXRlbHkgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAqL1xuZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXG4gIGV2ZW50S2V5Q29kZSxcbiAga2V5LFxuICBidWlsdEluS2V5Q29kZSxcbiAgZXZlbnRLZXlOYW1lLFxuICBidWlsdEluS2V5TmFtZVxuKSB7XG4gIHZhciBtYXBwZWRLZXlDb2RlID0gY29uZmlnLmtleUNvZGVzW2tleV0gfHwgYnVpbHRJbktleUNvZGU7XG4gIGlmIChidWlsdEluS2V5TmFtZSAmJiBldmVudEtleU5hbWUgJiYgIWNvbmZpZy5rZXlDb2Rlc1trZXldKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2goYnVpbHRJbktleU5hbWUsIGV2ZW50S2V5TmFtZSlcbiAgfSBlbHNlIGlmIChtYXBwZWRLZXlDb2RlKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2gobWFwcGVkS2V5Q29kZSwgZXZlbnRLZXlDb2RlKVxuICB9IGVsc2UgaWYgKGV2ZW50S2V5TmFtZSkge1xuICAgIHJldHVybiBoeXBoZW5hdGUoZXZlbnRLZXlOYW1lKSAhPT0ga2V5XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAqL1xuZnVuY3Rpb24gYmluZE9iamVjdFByb3BzIChcbiAgZGF0YSxcbiAgdGFnLFxuICB2YWx1ZSxcbiAgYXNQcm9wLFxuICBpc1N5bmNcbikge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgaGFzaDtcbiAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcbiAgICAgICAgICBrZXkgPT09ICdzdHlsZScgfHxcbiAgICAgICAgICBpc1Jlc2VydmVkQXR0cmlidXRlKGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaGFzaCA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcbiAgICAgICAgICBoYXNoID0gYXNQcm9wIHx8IGNvbmZpZy5tdXN0VXNlUHJvcCh0YWcsIHR5cGUsIGtleSlcbiAgICAgICAgICAgID8gZGF0YS5kb21Qcm9wcyB8fCAoZGF0YS5kb21Qcm9wcyA9IHt9KVxuICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGtleSBpbiBoYXNoKSkge1xuICAgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlW2tleV07XG5cbiAgICAgICAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAgICAgICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICAgICAgICAgICAgb25bKFwidXBkYXRlOlwiICsga2V5KV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhbHVlW2tleV0gPSAkZXZlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSBsb29wKCBrZXkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyBzdGF0aWMgdHJlZXMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclN0YXRpYyAoXG4gIGluZGV4LFxuICBpc0luRm9yXG4pIHtcbiAgdmFyIGNhY2hlZCA9IHRoaXMuX3N0YXRpY1RyZWVzIHx8ICh0aGlzLl9zdGF0aWNUcmVlcyA9IFtdKTtcbiAgdmFyIHRyZWUgPSBjYWNoZWRbaW5kZXhdO1xuICAvLyBpZiBoYXMgYWxyZWFkeS1yZW5kZXJlZCBzdGF0aWMgdHJlZSBhbmQgbm90IGluc2lkZSB2LWZvcixcbiAgLy8gd2UgY2FuIHJldXNlIHRoZSBzYW1lIHRyZWUuXG4gIGlmICh0cmVlICYmICFpc0luRm9yKSB7XG4gICAgcmV0dXJuIHRyZWVcbiAgfVxuICAvLyBvdGhlcndpc2UsIHJlbmRlciBhIGZyZXNoIHRyZWUuXG4gIHRyZWUgPSBjYWNoZWRbaW5kZXhdID0gdGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbaW5kZXhdLmNhbGwoXG4gICAgdGhpcy5fcmVuZGVyUHJveHksXG4gICAgbnVsbCxcbiAgICB0aGlzIC8vIGZvciByZW5kZXIgZm5zIGdlbmVyYXRlZCBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgdGVtcGxhdGVzXG4gICk7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAqIEVmZmVjdGl2ZWx5IGl0IG1lYW5zIG1hcmtpbmcgdGhlIG5vZGUgYXMgc3RhdGljIHdpdGggYSB1bmlxdWUga2V5LlxuICovXG5mdW5jdGlvbiBtYXJrT25jZSAoXG4gIHRyZWUsXG4gIGluZGV4LFxuICBrZXlcbikge1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyAoXCJfXCIgKyBrZXkpIDogXCJcIikpLCB0cnVlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpYyAoXG4gIHRyZWUsXG4gIGtleSxcbiAgaXNPbmNlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBtYXJrU3RhdGljTm9kZSh0cmVlW2ldLCAoa2V5ICsgXCJfXCIgKyBpKSwgaXNPbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xuICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgbm9kZS5rZXkgPSBrZXk7XG4gIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZE9iamVjdExpc3RlbmVycyAoZGF0YSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9uID0gZGF0YS5vbiA9IGRhdGEub24gPyBleHRlbmQoe30sIGRhdGEub24pIDoge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gb25ba2V5XTtcbiAgICAgICAgdmFyIG91cnMgPSB2YWx1ZVtrZXldO1xuICAgICAgICBvbltrZXldID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIG91cnMpIDogb3VycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluc3RhbGxSZW5kZXJIZWxwZXJzICh0YXJnZXQpIHtcbiAgdGFyZ2V0Ll9vID0gbWFya09uY2U7XG4gIHRhcmdldC5fbiA9IHRvTnVtYmVyO1xuICB0YXJnZXQuX3MgPSB0b1N0cmluZztcbiAgdGFyZ2V0Ll9sID0gcmVuZGVyTGlzdDtcbiAgdGFyZ2V0Ll90ID0gcmVuZGVyU2xvdDtcbiAgdGFyZ2V0Ll9xID0gbG9vc2VFcXVhbDtcbiAgdGFyZ2V0Ll9pID0gbG9vc2VJbmRleE9mO1xuICB0YXJnZXQuX20gPSByZW5kZXJTdGF0aWM7XG4gIHRhcmdldC5fZiA9IHJlc29sdmVGaWx0ZXI7XG4gIHRhcmdldC5fayA9IGNoZWNrS2V5Q29kZXM7XG4gIHRhcmdldC5fYiA9IGJpbmRPYmplY3RQcm9wcztcbiAgdGFyZ2V0Ll92ID0gY3JlYXRlVGV4dFZOb2RlO1xuICB0YXJnZXQuX2UgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICB0YXJnZXQuX3UgPSByZXNvbHZlU2NvcGVkU2xvdHM7XG4gIHRhcmdldC5fZyA9IGJpbmRPYmplY3RMaXN0ZW5lcnM7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCAoXG4gIGRhdGEsXG4gIHByb3BzLFxuICBjaGlsZHJlbixcbiAgcGFyZW50LFxuICBDdG9yXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuICB2YXIgY29udGV4dFZtO1xuICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgIGNvbnRleHRWbSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjb250ZXh0IHZtIHBhc3NlZCBpbiBpcyBhIGZ1bmN0aW9uYWwgY29udGV4dCBhcyB3ZWxsLlxuICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxuICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICBjb250ZXh0Vm0gPSBwYXJlbnQ7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcGFyZW50ID0gcGFyZW50Ll9vcmlnaW5hbDtcbiAgfVxuICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gIHZhciBuZWVkTm9ybWFsaXphdGlvbiA9ICFpc0NvbXBpbGVkO1xuXG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5saXN0ZW5lcnMgPSBkYXRhLm9uIHx8IGVtcHR5T2JqZWN0O1xuICB0aGlzLmluamVjdGlvbnMgPSByZXNvbHZlSW5qZWN0KG9wdGlvbnMuaW5qZWN0LCBwYXJlbnQpO1xuICB0aGlzLnNsb3RzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBwYXJlbnQpOyB9O1xuXG4gIC8vIHN1cHBvcnQgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAvLyBleHBvc2luZyAkb3B0aW9ucyBmb3IgcmVuZGVyU3RhdGljKClcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG4gICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgdGhpcy4kc2NvcGVkU2xvdHMgPSBkYXRhLnNjb3BlZFNsb3RzIHx8IGVtcHR5T2JqZWN0O1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuX3Njb3BlSWQpIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgIHZhciB2bm9kZSA9IGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7XG4gICAgICBpZiAodm5vZGUgJiYgIUFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHZub2RlLmZuU2NvcGVJZCA9IG9wdGlvbnMuX3Njb3BlSWQ7XG4gICAgICAgIHZub2RlLmZuQ29udGV4dCA9IHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pOyB9O1xuICB9XG59XG5cbmluc3RhbGxSZW5kZXJIZWxwZXJzKEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0LnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQgKFxuICBDdG9yLFxuICBwcm9wc0RhdGEsXG4gIGRhdGEsXG4gIGNvbnRleHRWbSxcbiAgY2hpbGRyZW5cbikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBwcm9wT3B0aW9ucyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmIChpc0RlZihwcm9wT3B0aW9ucykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEuYXR0cnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEucHJvcHMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEucHJvcHMpOyB9XG4gIH1cblxuICB2YXIgcmVuZGVyQ29udGV4dCA9IG5ldyBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChcbiAgICBkYXRhLFxuICAgIHByb3BzLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbnRleHRWbSxcbiAgICBDdG9yXG4gICk7XG5cbiAgdmFyIHZub2RlID0gb3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCByZW5kZXJDb250ZXh0Ll9jLCByZW5kZXJDb250ZXh0KTtcblxuICBpZiAodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVybiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2RlLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucylcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHZhciB2bm9kZXMgPSBub3JtYWxpemVDaGlsZHJlbih2bm9kZSkgfHwgW107XG4gICAgdmFyIHJlcyA9IG5ldyBBcnJheSh2bm9kZXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzW2ldID0gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZXNbaV0sIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQgKHZub2RlLCBkYXRhLCBjb250ZXh0Vm0sIG9wdGlvbnMpIHtcbiAgLy8gIzc4MTcgY2xvbmUgbm9kZSBiZWZvcmUgc2V0dGluZyBmbkNvbnRleHQsIG90aGVyd2lzZSBpZiB0aGUgbm9kZSBpcyByZXVzZWRcbiAgLy8gKGUuZy4gaXQgd2FzIGZyb20gYSBjYWNoZWQgbm9ybWFsIHNsb3QpIHRoZSBmbkNvbnRleHQgY2F1c2VzIG5hbWVkIHNsb3RzXG4gIC8vIHRoYXQgc2hvdWxkIG5vdCBiZSBtYXRjaGVkIHRvIG1hdGNoLlxuICB2YXIgY2xvbmUgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgY2xvbmUuZm5Db250ZXh0ID0gY29udGV4dFZtO1xuICBjbG9uZS5mbk9wdGlvbnMgPSBvcHRpb25zO1xuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cblxuXG5cbi8vIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgaG9vayB0byB3ZWV4IG5hdGl2ZSByZW5kZXIgZW5naW5lLlxuLy8gVGhlIGhvb2sgd2lsbCBiZSB0cmlnZ2VyZWQgYnkgbmF0aXZlLCBub3QgamF2YXNjcmlwdC5cblxuXG4vLyBVcGRhdGVzIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IHRvIHdlZXggbmF0aXZlIHJlbmRlciBlbmdpbmUuXG5cbi8qICAqL1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vSGFua3MxMDEwMC93ZWV4LW5hdGl2ZS1kaXJlY3RpdmUvdHJlZS9tYXN0ZXIvY29tcG9uZW50XG5cbi8vIGxpc3RlbmluZyBvbiBuYXRpdmUgY2FsbGJhY2tcblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbmxpbmUgaG9va3MgdG8gYmUgaW52b2tlZCBvbiBjb21wb25lbnQgVk5vZGVzIGR1cmluZyBwYXRjaFxudmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQgKFxuICAgIHZub2RlLFxuICAgIGh5ZHJhdGluZyxcbiAgICBwYXJlbnRFbG0sXG4gICAgcmVmRWxtXG4gICkge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZSxcbiAgICAgICAgcGFyZW50RWxtLFxuICAgICAgICByZWZFbG1cbiAgICAgICk7XG4gICAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxuICAgICAgY2hpbGQsXG4gICAgICBvcHRpb25zLnByb3BzRGF0YSwgLy8gdXBkYXRlZCBwcm9wc1xuICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgb3B0aW9ucy5jaGlsZHJlbiAvLyBuZXcgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xuICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdtb3VudGVkJyk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAvLyB2dWUtcm91dGVyIzEyMTJcbiAgICAgICAgLy8gRHVyaW5nIHVwZGF0ZXMsIGEga2VwdC1hbGl2ZSBjb21wb25lbnQncyBjaGlsZCBjb21wb25lbnRzIG1heVxuICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgLy8gb24gaW5jb3JyZWN0IGNoaWxkcmVuLiBJbnN0ZWFkIHdlIHB1c2ggdGhlbSBpbnRvIGEgcXVldWUgd2hpY2ggd2lsbFxuICAgICAgICAvLyBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHdob2xlIHBhdGNoIHByb2Nlc3MgZW5kZWQuXG4gICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAoXG4gIEN0b3IsXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICBpZiAoaXNVbmRlZihDdG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJhc2VDdG9yID0gY29udGV4dC4kb3B0aW9ucy5fYmFzZTtcblxuICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgfVxuXG4gIC8vIGlmIGF0IHRoaXMgc3RhZ2UgaXQncyBub3QgYSBjb25zdHJ1Y3RvciBvciBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeSxcbiAgLy8gcmVqZWN0LlxuICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYXN5bmMgY29tcG9uZW50XG4gIHZhciBhc3luY0ZhY3Rvcnk7XG4gIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgIGFzeW5jRmFjdG9yeSA9IEN0b3I7XG4gICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChhc3luY0ZhY3RvcnksIGJhc2VDdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAvLyBhcyBhIGNvbW1lbnQgbm9kZSBidXQgcHJlc2VydmVzIGFsbCB0aGUgcmF3IGluZm9ybWF0aW9uIGZvciB0aGUgbm9kZS5cbiAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGFzeW5jIHNlcnZlci1yZW5kZXJpbmcgYW5kIGh5ZHJhdGlvbi5cbiAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKFxuICAgICAgICBhc3luY0ZhY3RvcnksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0YWdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyByZXNvbHZlIGNvbnN0cnVjdG9yIG9wdGlvbnMgaW4gY2FzZSBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkIGFmdGVyXG4gIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpO1xuXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBkYXRhIGludG8gcHJvcHMgJiBldmVudHNcbiAgaWYgKGlzRGVmKGRhdGEubW9kZWwpKSB7XG4gICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgfVxuXG4gIC8vIGV4dHJhY3QgcHJvcHNcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnKTtcblxuICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KEN0b3IsIHByb3BzRGF0YSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pXG4gIH1cblxuICAvLyBleHRyYWN0IGxpc3RlbmVycywgc2luY2UgdGhlc2UgbmVlZHMgdG8gYmUgdHJlYXRlZCBhc1xuICAvLyBjaGlsZCBjb21wb25lbnQgbGlzdGVuZXJzIGluc3RlYWQgb2YgRE9NIGxpc3RlbmVyc1xuICB2YXIgbGlzdGVuZXJzID0gZGF0YS5vbjtcbiAgLy8gcmVwbGFjZSB3aXRoIGxpc3RlbmVycyB3aXRoIC5uYXRpdmUgbW9kaWZpZXJcbiAgLy8gc28gaXQgZ2V0cyBwcm9jZXNzZWQgZHVyaW5nIHBhcmVudCBjb21wb25lbnQgcGF0Y2guXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xuXG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmFic3RyYWN0KSkge1xuICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAvLyBvdGhlciB0aGFuIHByb3BzICYgbGlzdGVuZXJzICYgc2xvdFxuXG4gICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgIHZhciBzbG90ID0gZGF0YS5zbG90O1xuICAgIGRhdGEgPSB7fTtcbiAgICBpZiAoc2xvdCkge1xuICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpO1xuXG4gIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICB2YXIgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgKFwidnVlLWNvbXBvbmVudC1cIiArIChDdG9yLmNpZCkgKyAobmFtZSA/IChcIi1cIiArIG5hbWUpIDogJycpKSxcbiAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxuICAgIHsgQ3RvcjogQ3RvciwgcHJvcHNEYXRhOiBwcm9wc0RhdGEsIGxpc3RlbmVyczogbGlzdGVuZXJzLCB0YWc6IHRhZywgY2hpbGRyZW46IGNoaWxkcmVuIH0sXG4gICAgYXN5bmNGYWN0b3J5XG4gICk7XG5cbiAgLy8gV2VleCBzcGVjaWZpYzogaW52b2tlIHJlY3ljbGUtbGlzdCBvcHRpbWl6ZWQgQHJlbmRlciBmdW5jdGlvbiBmb3JcbiAgLy8gZXh0cmFjdGluZyBjZWxsLXNsb3QgdGVtcGxhdGUuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9IYW5rczEwMTAwL3dlZXgtbmF0aXZlLWRpcmVjdGl2ZS90cmVlL21hc3Rlci9jb21wb25lbnRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlIChcbiAgdm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICBwYXJlbnQsIC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuICBwYXJlbnRFbG0sXG4gIHJlZkVsbVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIF9wYXJlbnRFbG06IHBhcmVudEVsbSB8fCBudWxsLFxuICAgIF9yZWZFbG06IHJlZkVsbSB8fCBudWxsXG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICBob29rc1trZXldID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICB9XG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCc7KGRhdGEucHJvcHMgfHwgKGRhdGEucHJvcHMgPSB7fSkpW3Byb3BdID0gZGF0YS5tb2RlbC52YWx1ZTtcbiAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgaWYgKGlzRGVmKG9uW2V2ZW50XSkpIHtcbiAgICBvbltldmVudF0gPSBbZGF0YS5tb2RlbC5jYWxsYmFja10uY29uY2F0KG9uW2V2ZW50XSk7XG4gIH0gZWxzZSB7XG4gICAgb25bZXZlbnRdID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xudmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyO1xuXG4vLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxuLy8gd2l0aG91dCBnZXR0aW5nIHllbGxlZCBhdCBieSBmbG93XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGUsXG4gIGFsd2F5c05vcm1hbGl6ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzUHJpbWl0aXZlKGRhdGEpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBjaGlsZHJlbjtcbiAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoaXNUcnVlKGFsd2F5c05vcm1hbGl6ZSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KGNvbnRleHQsIHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlXG4pIHtcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKChkYXRhKS5fX29iX18pKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgY29udGV4dFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmlzKSkge1xuICAgIHRhZyA9IGRhdGEuaXM7XG4gIH1cbiAgaWYgKCF0YWcpIHtcbiAgICAvLyBpbiBjYXNlIG9mIGNvbXBvbmVudCA6aXMgc2V0IHRvIGZhbHN5IHZhbHVlXG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tcHJpbWl0aXZlIGtleVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEua2V5KSAmJiAhaXNQcmltaXRpdmUoZGF0YS5rZXkpXG4gICkge1xuICAgIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCB1c2luZyBub24tcHJpbWl0aXZlIHZhbHVlIGFzIGtleSwgJyArXG4gICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHN1cHBvcnQgc2luZ2xlIGZ1bmN0aW9uIGNoaWxkcmVuIGFzIGRlZmF1bHQgc2NvcGVkIHNsb3RcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7IGRlZmF1bHQ6IGNoaWxkcmVuWzBdIH07XG4gICAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IEFMV0FZU19OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9XG4gIHZhciB2bm9kZSwgbnM7XG4gIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgIHZhciBDdG9yO1xuICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgLy8gY29tcG9uZW50XG4gICAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdW5rbm93biBvciB1bmxpc3RlZCBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xuICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICB0YWcsIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZGlyZWN0IGNvbXBvbmVudCBvcHRpb25zIC8gY29uc3RydWN0b3JcbiAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICBpZiAoaXNEZWYobnMpKSB7IGFwcGx5TlModm5vZGUsIG5zKTsgfVxuICAgIGlmIChpc0RlZihkYXRhKSkgeyByZWdpc3RlckRlZXBCaW5kaW5ncyhkYXRhKTsgfVxuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5TICh2bm9kZSwgbnMsIGZvcmNlKSB7XG4gIHZub2RlLm5zID0gbnM7XG4gIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIHVzZSBkZWZhdWx0IG5hbWVzcGFjZSBpbnNpZGUgZm9yZWlnbk9iamVjdFxuICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICBpc1VuZGVmKGNoaWxkLm5zKSB8fCAoaXNUcnVlKGZvcmNlKSAmJiBjaGlsZC50YWcgIT09ICdzdmcnKSkpIHtcbiAgICAgICAgYXBwbHlOUyhjaGlsZCwgbnMsIGZvcmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gcmVmICM1MzE4XG4vLyBuZWNlc3NhcnkgdG8gZW5zdXJlIHBhcmVudCByZS1yZW5kZXIgd2hlbiBkZWVwIGJpbmRpbmdzIGxpa2UgOnN0eWxlIGFuZFxuLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyRGVlcEJpbmRpbmdzIChkYXRhKSB7XG4gIGlmIChpc09iamVjdChkYXRhLnN0eWxlKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICB9XG4gIGlmIChpc09iamVjdChkYXRhLmNsYXNzKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UmVuZGVyICh2bSkge1xuICB2bS5fdm5vZGUgPSBudWxsOyAvLyB0aGUgcm9vdCBvZiB0aGUgY2hpbGQgdHJlZVxuICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gIHZhciBwYXJlbnRWbm9kZSA9IHZtLiR2bm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlOyAvLyB0aGUgcGxhY2Vob2xkZXIgbm9kZSBpbiBwYXJlbnQgdHJlZVxuICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiwgcmVuZGVyQ29udGV4dCk7XG4gIHZtLiRzY29wZWRTbG90cyA9IGVtcHR5T2JqZWN0O1xuICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cbiAgLy8gYXJncyBvcmRlcjogdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUsIGFsd2F5c05vcm1hbGl6ZVxuICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICB2bS5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCBmYWxzZSk7IH07XG4gIC8vIG5vcm1hbGl6YXRpb24gaXMgYWx3YXlzIGFwcGxpZWQgZm9yIHRoZSBwdWJsaWMgdmVyc2lvbiwgdXNlZCBpblxuICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XG5cbiAgLy8gJGF0dHJzICYgJGxpc3RlbmVycyBhcmUgZXhwb3NlZCBmb3IgZWFzaWVyIEhPQyBjcmVhdGlvbi5cbiAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICB2YXIgcGFyZW50RGF0YSA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmRhdGE7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5lUmVhY3RpdmUodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICAvLyByZXNldCBfcmVuZGVyZWQgZmxhZyBvbiBzbG90cyBmb3IgZHVwbGljYXRlIHNsb3QgY2hlY2tcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgZm9yICh2YXIga2V5IGluIHZtLiRzbG90cykge1xuICAgICAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICAgICAgdm0uJHNsb3RzW2tleV0uX3JlbmRlcmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9wYXJlbnRWbm9kZSkge1xuICAgICAgdm0uJHNjb3BlZFNsb3RzID0gX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMgfHwgZW1wdHlPYmplY3Q7XG4gICAgfVxuXG4gICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHRoZSBkYXRhIG9uIHRoZSBwbGFjZWhvbGRlciBub2RlLlxuICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTtcbiAgICAvLyByZW5kZXIgc2VsZlxuICAgIHZhciB2bm9kZTtcbiAgICB0cnkge1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHZtLiRvcHRpb25zLnJlbmRlckVycm9yKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZub2RlID0gdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50LCBlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSB2bm9kZSBpbiBjYXNlIHRoZSByZW5kZXIgZnVuY3Rpb24gZXJyb3JlZCBvdXRcbiAgICBpZiAoISh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnTXVsdGlwbGUgcm9vdCBub2RlcyByZXR1cm5lZCBmcm9tIHJlbmRlciBmdW5jdGlvbi4gUmVuZGVyIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudFxuICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICByZXR1cm4gdm5vZGVcbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcbiAgb3B0cy5fcGFyZW50RWxtID0gb3B0aW9ucy5fcGFyZW50RWxtO1xuICBvcHRzLl9yZWZFbG0gPSBvcHRpb25zLl9yZWZFbG07XG5cbiAgdmFyIHZub2RlQ29tcG9uZW50T3B0aW9ucyA9IHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIG9wdHMucHJvcHNEYXRhID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnByb3BzRGF0YTtcbiAgb3B0cy5fcGFyZW50TGlzdGVuZXJzID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmxpc3RlbmVycztcbiAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW47XG4gIG9wdHMuX2NvbXBvbmVudFRhZyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWc7XG5cbiAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XG4gICAgb3B0cy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIGlmIChDdG9yLnN1cGVyKSB7XG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgdmFyIGNhY2hlZFN1cGVyT3B0aW9ucyA9IEN0b3Iuc3VwZXJPcHRpb25zO1xuICAgIGlmIChzdXBlck9wdGlvbnMgIT09IGNhY2hlZFN1cGVyT3B0aW9ucykge1xuICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAvLyBuZWVkIHRvIHJlc29sdmUgbmV3IG9wdGlvbnMuXG4gICAgICBDdG9yLnN1cGVyT3B0aW9ucyA9IHN1cGVyT3B0aW9ucztcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgIHZhciBtb2RpZmllZE9wdGlvbnMgPSByZXNvbHZlTW9kaWZpZWRPcHRpb25zKEN0b3IpO1xuICAgICAgLy8gdXBkYXRlIGJhc2UgZXh0ZW5kIG9wdGlvbnNcbiAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKEN0b3IuZXh0ZW5kT3B0aW9ucywgbW9kaWZpZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbb3B0aW9ucy5uYW1lXSA9IEN0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RpZmllZE9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG1vZGlmaWVkO1xuICB2YXIgbGF0ZXN0ID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgZXh0ZW5kZWQgPSBDdG9yLmV4dGVuZE9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBkZWR1cGUobGF0ZXN0W2tleV0sIGV4dGVuZGVkW2tleV0sIHNlYWxlZFtrZXldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIGRlZHVwZSAobGF0ZXN0LCBleHRlbmRlZCwgc2VhbGVkKSB7XG4gIC8vIGNvbXBhcmUgbGF0ZXN0IGFuZCBzZWFsZWQgdG8gZW5zdXJlIGxpZmVjeWNsZSBob29rcyB3b24ndCBiZSBkdXBsaWNhdGVkXG4gIC8vIGJldHdlZW4gbWVyZ2VzXG4gIGlmIChBcnJheS5pc0FycmF5KGxhdGVzdCkpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgc2VhbGVkID0gQXJyYXkuaXNBcnJheShzZWFsZWQpID8gc2VhbGVkIDogW3NlYWxlZF07XG4gICAgZXh0ZW5kZWQgPSBBcnJheS5pc0FycmF5KGV4dGVuZGVkKSA/IGV4dGVuZGVkIDogW2V4dGVuZGVkXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGVzdC5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gcHVzaCBvcmlnaW5hbCBvcHRpb25zIGFuZCBub3Qgc2VhbGVkIG9wdGlvbnMgdG8gZXhjbHVkZSBkdXBsaWNhdGVkIG9wdGlvbnNcbiAgICAgIGlmIChleHRlbmRlZC5pbmRleE9mKGxhdGVzdFtpXSkgPj0gMCB8fCBzZWFsZWQuaW5kZXhPZihsYXRlc3RbaV0pIDwgMCkge1xuICAgICAgICByZXMucHVzaChsYXRlc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxhdGVzdFxuICB9XG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzJDEuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzJDEuY2FjaGUsIGtleSwgdGhpcyQxLmtleXMpO1xuICAgIH1cbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuJHdhdGNoKCdpbmNsdWRlJywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdleGNsdWRlJywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgIHZhciB2bm9kZSA9IGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoc2xvdCk7XG4gICAgdmFyIGNvbXBvbmVudE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIGlmIChjb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAvLyBjaGVjayBwYXR0ZXJuXG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgIHZhciBpbmNsdWRlID0gcmVmLmluY2x1ZGU7XG4gICAgICB2YXIgZXhjbHVkZSA9IHJlZi5leGNsdWRlO1xuICAgICAgaWYgKFxuICAgICAgICAvLyBub3QgaW5jbHVkZWRcbiAgICAgICAgKGluY2x1ZGUgJiYgKCFuYW1lIHx8ICFtYXRjaGVzKGluY2x1ZGUsIG5hbWUpKSkgfHxcbiAgICAgICAgLy8gZXhjbHVkZWRcbiAgICAgICAgKGV4Y2x1ZGUgJiYgbmFtZSAmJiBtYXRjaGVzKGV4Y2x1ZGUsIG5hbWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVmJDEgPSB0aGlzO1xuICAgICAgdmFyIGNhY2hlID0gcmVmJDEuY2FjaGU7XG4gICAgICB2YXIga2V5cyA9IHJlZiQxLmtleXM7XG4gICAgICB2YXIga2V5ID0gdm5vZGUua2V5ID09IG51bGxcbiAgICAgICAgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcbiAgICAgICAgLy8gc28gY2lkIGFsb25lIGlzIG5vdCBlbm91Z2ggKCMzMjY5KVxuICAgICAgICA/IGNvbXBvbmVudE9wdGlvbnMuQ3Rvci5jaWQgKyAoY29tcG9uZW50T3B0aW9ucy50YWcgPyAoXCI6OlwiICsgKGNvbXBvbmVudE9wdGlvbnMudGFnKSkgOiAnJylcbiAgICAgICAgOiB2bm9kZS5rZXk7XG4gICAgICBpZiAoY2FjaGVba2V5XSkge1xuICAgICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNhY2hlW2tleV0uY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgIC8vIG1ha2UgY3VycmVudCBrZXkgZnJlc2hlc3RcbiAgICAgICAgcmVtb3ZlKGtleXMsIGtleSk7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IHZub2RlO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgLy8gcHJ1bmUgb2xkZXN0IGVudHJ5XG4gICAgICAgIGlmICh0aGlzLm1heCAmJiBrZXlzLmxlbmd0aCA+IHBhcnNlSW50KHRoaXMubWF4KSkge1xuICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5c1swXSwga2V5cywgdGhpcy5fdm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlIHx8IChzbG90ICYmIHNsb3RbMF0pXG4gIH1cbn1cblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi41LjE3JztcblxuLyogICovXG5cbi8vIHRoZXNlIGFyZSByZXNlcnZlZCBmb3Igd2ViIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgY29tcGlsZWQgYXdheVxuLy8gZHVyaW5nIHRlbXBsYXRlIGNvbXBpbGF0aW9uXG52YXIgaXNSZXNlcnZlZEF0dHIgPSBtYWtlTWFwKCdzdHlsZSxjbGFzcycpO1xuXG4vLyBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIHVzaW5nIHByb3BzIGZvciBiaW5kaW5nXG52YXIgYWNjZXB0VmFsdWUgPSBtYWtlTWFwKCdpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzJyk7XG52YXIgbXVzdFVzZVByb3AgPSBmdW5jdGlvbiAodGFnLCB0eXBlLCBhdHRyKSB7XG4gIHJldHVybiAoXG4gICAgKGF0dHIgPT09ICd2YWx1ZScgJiYgYWNjZXB0VmFsdWUodGFnKSkgJiYgdHlwZSAhPT0gJ2J1dHRvbicgfHxcbiAgICAoYXR0ciA9PT0gJ3NlbGVjdGVkJyAmJiB0YWcgPT09ICdvcHRpb24nKSB8fFxuICAgIChhdHRyID09PSAnY2hlY2tlZCcgJiYgdGFnID09PSAnaW5wdXQnKSB8fFxuICAgIChhdHRyID09PSAnbXV0ZWQnICYmIHRhZyA9PT0gJ3ZpZGVvJylcbiAgKVxufTtcblxudmFyIGlzRW51bWVyYXRlZEF0dHIgPSBtYWtlTWFwKCdjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2snKTtcblxudmFyIGlzQm9vbGVhbkF0dHIgPSBtYWtlTWFwKFxuICAnYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSwnICtcbiAgJ2RlZmF1bHQsZGVmYXVsdGNoZWNrZWQsZGVmYXVsdG11dGVkLGRlZmF1bHRzZWxlY3RlZCxkZWZlcixkaXNhYmxlZCwnICtcbiAgJ2VuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsJyArXG4gICdtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LCcgK1xuICAncmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNvcnRhYmxlLHRyYW5zbGF0ZSwnICtcbiAgJ3RydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGUnXG4pO1xuXG52YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcblxudmFyIGlzWGxpbmsgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5jaGFyQXQoNSkgPT09ICc6JyAmJiBuYW1lLnNsaWNlKDAsIDUpID09PSAneGxpbmsnXG59O1xuXG52YXIgZ2V0WGxpbmtQcm9wID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGlzWGxpbmsobmFtZSkgPyBuYW1lLnNsaWNlKDYsIG5hbWUubGVuZ3RoKSA6ICcnXG59O1xuXG52YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2Vcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZW5DbGFzc0ZvclZub2RlICh2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKGlzRGVmKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgIGlmIChjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShjaGlsZE5vZGUuZGF0YSwgZGF0YSk7XG4gICAgfVxuICB9XG4gIHdoaWxlIChpc0RlZihwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5kYXRhKSB7XG4gICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoZGF0YSwgcGFyZW50Tm9kZS5kYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbmRlckNsYXNzKGRhdGEuc3RhdGljQ2xhc3MsIGRhdGEuY2xhc3MpXG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NEYXRhIChjaGlsZCwgcGFyZW50KSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGljQ2xhc3M6IGNvbmNhdChjaGlsZC5zdGF0aWNDbGFzcywgcGFyZW50LnN0YXRpY0NsYXNzKSxcbiAgICBjbGFzczogaXNEZWYoY2hpbGQuY2xhc3MpXG4gICAgICA/IFtjaGlsZC5jbGFzcywgcGFyZW50LmNsYXNzXVxuICAgICAgOiBwYXJlbnQuY2xhc3NcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXG4gIHN0YXRpY0NsYXNzLFxuICBkeW5hbWljQ2xhc3Ncbikge1xuICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICByZXR1cm4gY29uY2F0KHN0YXRpY0NsYXNzLCBzdHJpbmdpZnlDbGFzcyhkeW5hbWljQ2xhc3MpKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSlcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheSAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgc3RyaW5naWZpZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgbmFtZXNwYWNlTWFwID0ge1xuICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gIG1hdGg6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJ1xufTtcblxudmFyIGlzSFRNTFRhZyA9IG1ha2VNYXAoXG4gICdodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSwnICtcbiAgJ2FkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbiwnICtcbiAgJ2RpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLCcgK1xuICAnYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LCcgK1xuICAncyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sJyArXG4gICdlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucywnICtcbiAgJ2NhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLCcgK1xuICAnYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbiwnICtcbiAgJ291dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsJyArXG4gICdkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksJyArXG4gICdjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlLGJsb2NrcXVvdGUsaWZyYW1lLHRmb290J1xuKTtcblxuLy8gdGhpcyBtYXAgaXMgaW50ZW50aW9uYWxseSBzZWxlY3RpdmUsIG9ubHkgY292ZXJpbmcgU1ZHIGVsZW1lbnRzIHRoYXQgbWF5XG4vLyBjb250YWluIGNoaWxkIGVsZW1lbnRzLlxudmFyIGlzU1ZHID0gbWFrZU1hcChcbiAgJ3N2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQtZmFjZSwnICtcbiAgJ2ZvcmVpZ25PYmplY3QsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLCcgK1xuICAncG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2UsdmlldycsXG4gIHRydWVcbik7XG5cblxuXG52YXIgaXNSZXNlcnZlZFRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgcmV0dXJuIGlzSFRNTFRhZyh0YWcpIHx8IGlzU1ZHKHRhZylcbn07XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWVzcGFjZSAodGFnKSB7XG4gIGlmIChpc1NWRyh0YWcpKSB7XG4gICAgcmV0dXJuICdzdmcnXG4gIH1cbiAgLy8gYmFzaWMgc3VwcG9ydCBmb3IgTWF0aE1MXG4gIC8vIG5vdGUgaXQgZG9lc24ndCBzdXBwb3J0IG90aGVyIE1hdGhNTCBlbGVtZW50cyBiZWluZyBjb21wb25lbnQgcm9vdHNcbiAgaWYgKHRhZyA9PT0gJ21hdGgnKSB7XG4gICAgcmV0dXJuICdtYXRoJ1xuICB9XG59XG5cbnZhciB1bmtub3duRWxlbWVudENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGlzVW5rbm93bkVsZW1lbnQgKHRhZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChpc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB0YWcgPSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gIT0gbnVsbCkge1xuICAgIHJldHVybiB1bmtub3duRWxlbWVudENhY2hlW3RhZ11cbiAgfVxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmICh0YWcuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODIxMDM2NC8xMDcwMjQ0XG4gICAgcmV0dXJuICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gPSAoXG4gICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxVbmtub3duRWxlbWVudCB8fFxuICAgICAgZWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5IVE1MRWxlbWVudFxuICAgICkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gPSAvSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KGVsLnRvU3RyaW5nKCkpKVxuICB9XG59XG5cbnZhciBpc1RleHRJbnB1dFR5cGUgPSBtYWtlTWFwKCd0ZXh0LG51bWJlcixwYXNzd29yZCxzZWFyY2gsZW1haWwsdGVsLHVybCcpO1xuXG4vKiAgKi9cblxuLyoqXG4gKiBRdWVyeSBhbiBlbGVtZW50IHNlbGVjdG9yIGlmIGl0J3Mgbm90IGFuIGVsZW1lbnQgYWxyZWFkeS5cbiAqL1xuZnVuY3Rpb24gcXVlcnkgKGVsKSB7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnQ2Fubm90IGZpbmQgZWxlbWVudDogJyArIGVsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50JDEgKHRhZ05hbWUsIHZub2RlKSB7XG4gIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBpZiAodGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcbiAgICByZXR1cm4gZWxtXG4gIH1cbiAgLy8gZmFsc2Ugb3IgbnVsbCB3aWxsIHJlbW92ZSB0aGUgYXR0cmlidXRlIGJ1dCB1bmRlZmluZWQgd2lsbCBub3RcbiAgaWYgKHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS5hdHRycyAmJiB2bm9kZS5kYXRhLmF0dHJzLm11bHRpcGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbG0uc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuICB9XG4gIHJldHVybiBlbG1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TIChuYW1lc3BhY2UsIHRhZ05hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VNYXBbbmFtZXNwYWNlXSwgdGFnTmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUgKHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQgKHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dClcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlIChwYXJlbnROb2RlLCBuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZCAobm9kZSwgY2hpbGQpIHtcbiAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkIChub2RlLCBjaGlsZCkge1xuICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50Tm9kZSAobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlXG59XG5cbmZ1bmN0aW9uIG5leHRTaWJsaW5nIChub2RlKSB7XG4gIHJldHVybiBub2RlLm5leHRTaWJsaW5nXG59XG5cbmZ1bmN0aW9uIHRhZ05hbWUgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZVxufVxuXG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudCAobm9kZSwgdGV4dCkge1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVTY29wZSAobm9kZSwgc2NvcGVJZCkge1xuICBub2RlLnNldEF0dHJpYnV0ZShzY29wZUlkLCAnJyk7XG59XG5cblxudmFyIG5vZGVPcHMgPSBPYmplY3QuZnJlZXplKHtcblx0Y3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCQxLFxuXHRjcmVhdGVFbGVtZW50TlM6IGNyZWF0ZUVsZW1lbnROUyxcblx0Y3JlYXRlVGV4dE5vZGU6IGNyZWF0ZVRleHROb2RlLFxuXHRjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuXHRpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcblx0cmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuXHRhcHBlbmRDaGlsZDogYXBwZW5kQ2hpbGQsXG5cdHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG5cdG5leHRTaWJsaW5nOiBuZXh0U2libGluZyxcblx0dGFnTmFtZTogdGFnTmFtZSxcblx0c2V0VGV4dENvbnRlbnQ6IHNldFRleHRDb250ZW50LFxuXHRzZXRTdHlsZVNjb3BlOiBzZXRTdHlsZVNjb3BlXG59KTtcblxuLyogICovXG5cbnZhciByZWYgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlIChfLCB2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGlmIChvbGRWbm9kZS5kYXRhLnJlZiAhPT0gdm5vZGUuZGF0YS5yZWYpIHtcbiAgICAgIHJlZ2lzdGVyUmVmKG9sZFZub2RlLCB0cnVlKTtcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgcmVnaXN0ZXJSZWYodm5vZGUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUmVmICh2bm9kZSwgaXNSZW1vdmFsKSB7XG4gIHZhciBrZXkgPSB2bm9kZS5kYXRhLnJlZjtcbiAgaWYgKCFpc0RlZihrZXkpKSB7IHJldHVybiB9XG5cbiAgdmFyIHZtID0gdm5vZGUuY29udGV4dDtcbiAgdmFyIHJlZiA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlIHx8IHZub2RlLmVsbTtcbiAgdmFyIHJlZnMgPSB2bS4kcmVmcztcbiAgaWYgKGlzUmVtb3ZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZnNba2V5XSkpIHtcbiAgICAgIHJlbW92ZShyZWZzW2tleV0sIHJlZik7XG4gICAgfSBlbHNlIGlmIChyZWZzW2tleV0gPT09IHJlZikge1xuICAgICAgcmVmc1trZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodm5vZGUuZGF0YS5yZWZJbkZvcikge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlZnNba2V5XSkpIHtcbiAgICAgICAgcmVmc1trZXldID0gW3JlZl07XG4gICAgICB9IGVsc2UgaWYgKHJlZnNba2V5XS5pbmRleE9mKHJlZikgPCAwKSB7XG4gICAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgICByZWZzW2tleV0ucHVzaChyZWYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZzW2tleV0gPSByZWY7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVmlydHVhbCBET00gcGF0Y2hpbmcgYWxnb3JpdGhtIGJhc2VkIG9uIFNuYWJiZG9tIGJ5XG4gKiBTaW1vbiBGcmlpcyBWaW5kdW0gKEBwYWxkZXBpbmQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxkZXBpbmQvc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIG1vZGlmaWVkIGJ5IEV2YW4gWW91IChAeXl4OTkwODAzKVxuICpcbiAqIE5vdCB0eXBlLWNoZWNraW5nIHRoaXMgYmVjYXVzZSB0aGlzIGZpbGUgaXMgcGVyZi1jcml0aWNhbCBhbmQgdGhlIGNvc3RcbiAqIG9mIG1ha2luZyBmbG93IHVuZGVyc3RhbmQgaXQgaXMgbm90IHdvcnRoIGl0LlxuICovXG5cbnZhciBlbXB0eU5vZGUgPSBuZXcgVk5vZGUoJycsIHt9LCBbXSk7XG5cbnZhciBob29rcyA9IFsnY3JlYXRlJywgJ2FjdGl2YXRlJywgJ3VwZGF0ZScsICdyZW1vdmUnLCAnZGVzdHJveSddO1xuXG5mdW5jdGlvbiBzYW1lVm5vZGUgKGEsIGIpIHtcbiAgcmV0dXJuIChcbiAgICBhLmtleSA9PT0gYi5rZXkgJiYgKFxuICAgICAgKFxuICAgICAgICBhLnRhZyA9PT0gYi50YWcgJiZcbiAgICAgICAgYS5pc0NvbW1lbnQgPT09IGIuaXNDb21tZW50ICYmXG4gICAgICAgIGlzRGVmKGEuZGF0YSkgPT09IGlzRGVmKGIuZGF0YSkgJiZcbiAgICAgICAgc2FtZUlucHV0VHlwZShhLCBiKVxuICAgICAgKSB8fCAoXG4gICAgICAgIGlzVHJ1ZShhLmlzQXN5bmNQbGFjZWhvbGRlcikgJiZcbiAgICAgICAgYS5hc3luY0ZhY3RvcnkgPT09IGIuYXN5bmNGYWN0b3J5ICYmXG4gICAgICAgIGlzVW5kZWYoYi5hc3luY0ZhY3RvcnkuZXJyb3IpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmZ1bmN0aW9uIHNhbWVJbnB1dFR5cGUgKGEsIGIpIHtcbiAgaWYgKGEudGFnICE9PSAnaW5wdXQnKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGk7XG4gIHZhciB0eXBlQSA9IGlzRGVmKGkgPSBhLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gIHZhciB0eXBlQiA9IGlzRGVmKGkgPSBiLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gIHJldHVybiB0eXBlQSA9PT0gdHlwZUIgfHwgaXNUZXh0SW5wdXRUeXBlKHR5cGVBKSAmJiBpc1RleHRJbnB1dFR5cGUodHlwZUIpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVRvT2xkSWR4IChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICB2YXIgaSwga2V5O1xuICB2YXIgbWFwID0ge307XG4gIGZvciAoaSA9IGJlZ2luSWR4OyBpIDw9IGVuZElkeDsgKytpKSB7XG4gICAga2V5ID0gY2hpbGRyZW5baV0ua2V5O1xuICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxuICB9XG4gIHJldHVybiBtYXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0Y2hGdW5jdGlvbiAoYmFja2VuZCkge1xuICB2YXIgaSwgajtcbiAgdmFyIGNicyA9IHt9O1xuXG4gIHZhciBtb2R1bGVzID0gYmFja2VuZC5tb2R1bGVzO1xuICB2YXIgbm9kZU9wcyA9IGJhY2tlbmQubm9kZU9wcztcblxuICBmb3IgKGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyArK2kpIHtcbiAgICBjYnNbaG9va3NbaV1dID0gW107XG4gICAgZm9yIChqID0gMDsgaiA8IG1vZHVsZXMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChpc0RlZihtb2R1bGVzW2pdW2hvb2tzW2ldXSkpIHtcbiAgICAgICAgY2JzW2hvb2tzW2ldXS5wdXNoKG1vZHVsZXNbal1baG9va3NbaV1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbXB0eU5vZGVBdCAoZWxtKSB7XG4gICAgcmV0dXJuIG5ldyBWTm9kZShub2RlT3BzLnRhZ05hbWUoZWxtKS50b0xvd2VyQ2FzZSgpLCB7fSwgW10sIHVuZGVmaW5lZCwgZWxtKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUm1DYiAoY2hpbGRFbG0sIGxpc3RlbmVycykge1xuICAgIGZ1bmN0aW9uIHJlbW92ZSAoKSB7XG4gICAgICBpZiAoLS1yZW1vdmUubGlzdGVuZXJzID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU5vZGUoY2hpbGRFbG0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZW1vdmUubGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgIHJldHVybiByZW1vdmVcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUgKGVsKSB7XG4gICAgdmFyIHBhcmVudCA9IG5vZGVPcHMucGFyZW50Tm9kZShlbCk7XG4gICAgLy8gZWxlbWVudCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBkdWUgdG8gdi1odG1sIC8gdi10ZXh0XG4gICAgaWYgKGlzRGVmKHBhcmVudCkpIHtcbiAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCQkMSAodm5vZGUsIGluVlByZSkge1xuICAgIHJldHVybiAoXG4gICAgICAhaW5WUHJlICYmXG4gICAgICAhdm5vZGUubnMgJiZcbiAgICAgICEoXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMuc29tZShmdW5jdGlvbiAoaWdub3JlKSB7XG4gICAgICAgICAgcmV0dXJuIGlzUmVnRXhwKGlnbm9yZSlcbiAgICAgICAgICAgID8gaWdub3JlLnRlc3Qodm5vZGUudGFnKVxuICAgICAgICAgICAgOiBpZ25vcmUgPT09IHZub2RlLnRhZ1xuICAgICAgICB9KVxuICAgICAgKSAmJlxuICAgICAgY29uZmlnLmlzVW5rbm93bkVsZW1lbnQodm5vZGUudGFnKVxuICAgIClcbiAgfVxuXG4gIHZhciBjcmVhdGluZ0VsbUluVlByZSA9IDA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxtIChcbiAgICB2bm9kZSxcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgcGFyZW50RWxtLFxuICAgIHJlZkVsbSxcbiAgICBuZXN0ZWQsXG4gICAgb3duZXJBcnJheSxcbiAgICBpbmRleFxuICApIHtcbiAgICBpZiAoaXNEZWYodm5vZGUuZWxtKSAmJiBpc0RlZihvd25lckFycmF5KSkge1xuICAgICAgLy8gVGhpcyB2bm9kZSB3YXMgdXNlZCBpbiBhIHByZXZpb3VzIHJlbmRlciFcbiAgICAgIC8vIG5vdyBpdCdzIHVzZWQgYXMgYSBuZXcgbm9kZSwgb3ZlcndyaXRpbmcgaXRzIGVsbSB3b3VsZCBjYXVzZVxuICAgICAgLy8gcG90ZW50aWFsIHBhdGNoIGVycm9ycyBkb3duIHRoZSByb2FkIHdoZW4gaXQncyB1c2VkIGFzIGFuIGluc2VydGlvblxuICAgICAgLy8gcmVmZXJlbmNlIG5vZGUuIEluc3RlYWQsIHdlIGNsb25lIHRoZSBub2RlIG9uLWRlbWFuZCBiZWZvcmUgY3JlYXRpbmdcbiAgICAgIC8vIGFzc29jaWF0ZWQgRE9NIGVsZW1lbnQgZm9yIGl0LlxuICAgICAgdm5vZGUgPSBvd25lckFycmF5W2luZGV4XSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgIH1cblxuICAgIHZub2RlLmlzUm9vdEluc2VydCA9ICFuZXN0ZWQ7IC8vIGZvciB0cmFuc2l0aW9uIGVudGVyIGNoZWNrXG4gICAgaWYgKGNyZWF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnByZSkge1xuICAgICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGNyZWF0aW5nRWxtSW5WUHJlKSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtIGRpZCB5b3UgJyArXG4gICAgICAgICAgICAncmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBjb3JyZWN0bHk/IEZvciByZWN1cnNpdmUgY29tcG9uZW50cywgJyArXG4gICAgICAgICAgICAnbWFrZSBzdXJlIHRvIHByb3ZpZGUgdGhlIFwibmFtZVwiIG9wdGlvbi4nLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZWxtID0gdm5vZGUubnNcbiAgICAgICAgPyBub2RlT3BzLmNyZWF0ZUVsZW1lbnROUyh2bm9kZS5ucywgdGFnKVxuICAgICAgICA6IG5vZGVPcHMuY3JlYXRlRWxlbWVudCh0YWcsIHZub2RlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICB7XG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlLS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSkge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVDb21tZW50KHZub2RlLnRleHQpO1xuICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pIHtcbiAgICB2YXIgaSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICB2YXIgaXNSZWFjdGl2YXRlZCA9IGlzRGVmKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSAmJiBpLmtlZXBBbGl2ZTtcbiAgICAgIGlmIChpc0RlZihpID0gaS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkge1xuICAgICAgICBpKHZub2RlLCBmYWxzZSAvKiBoeWRyYXRpbmcgKi8sIHBhcmVudEVsbSwgcmVmRWxtKTtcbiAgICAgIH1cbiAgICAgIC8vIGFmdGVyIGNhbGxpbmcgdGhlIGluaXQgaG9vaywgaWYgdGhlIHZub2RlIGlzIGEgY2hpbGQgY29tcG9uZW50XG4gICAgICAvLyBpdCBzaG91bGQndmUgY3JlYXRlZCBhIGNoaWxkIGluc3RhbmNlIGFuZCBtb3VudGVkIGl0LiB0aGUgY2hpbGRcbiAgICAgIC8vIGNvbXBvbmVudCBhbHNvIGhhcyBzZXQgdGhlIHBsYWNlaG9sZGVyIHZub2RlJ3MgZWxtLlxuICAgICAgLy8gaW4gdGhhdCBjYXNlIHdlIGNhbiBqdXN0IHJldHVybiB0aGUgZWxlbWVudCBhbmQgYmUgZG9uZS5cbiAgICAgIGlmIChpc0RlZih2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaWYgKGlzVHJ1ZShpc1JlYWN0aXZhdGVkKSkge1xuICAgICAgICAgIHJlYWN0aXZhdGVDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdENvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGlmIChpc0RlZih2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQpKSB7XG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaC5hcHBseShpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCk7XG4gICAgICB2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQgPSBudWxsO1xuICAgIH1cbiAgICB2bm9kZS5lbG0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kZWw7XG4gICAgaWYgKGlzUGF0Y2hhYmxlKHZub2RlKSkge1xuICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVtcHR5IGNvbXBvbmVudCByb290LlxuICAgICAgLy8gc2tpcCBhbGwgZWxlbWVudC1yZWxhdGVkIG1vZHVsZXMgZXhjZXB0IGZvciByZWYgKCMzNDU1KVxuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGludm9rZSB0aGUgaW5zZXJ0IGhvb2tcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFjdGl2YXRlQ29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgIHZhciBpO1xuICAgIC8vIGhhY2sgZm9yICM0MzM5OiBhIHJlYWN0aXZhdGVkIGNvbXBvbmVudCB3aXRoIGlubmVyIHRyYW5zaXRpb25cbiAgICAvLyBkb2VzIG5vdCB0cmlnZ2VyIGJlY2F1c2UgdGhlIGlubmVyIG5vZGUncyBjcmVhdGVkIGhvb2tzIGFyZSBub3QgY2FsbGVkXG4gICAgLy8gYWdhaW4uIEl0J3Mgbm90IGlkZWFsIHRvIGludm9sdmUgbW9kdWxlLXNwZWNpZmljIGxvZ2ljIGluIGhlcmUgYnV0XG4gICAgLy8gdGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGEgYmV0dGVyIHdheSB0byBkbyBpdC5cbiAgICB2YXIgaW5uZXJOb2RlID0gdm5vZGU7XG4gICAgd2hpbGUgKGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgaW5uZXJOb2RlID0gaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICAgIGlmIChpc0RlZihpID0gaW5uZXJOb2RlLmRhdGEpICYmIGlzRGVmKGkgPSBpLnRyYW5zaXRpb24pKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuYWN0aXZhdGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjYnMuYWN0aXZhdGVbaV0oZW1wdHlOb2RlLCBpbm5lck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKGlubmVyTm9kZSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVubGlrZSBhIG5ld2x5IGNyZWF0ZWQgY29tcG9uZW50LFxuICAgIC8vIGEgcmVhY3RpdmF0ZWQga2VlcC1hbGl2ZSBjb21wb25lbnQgZG9lc24ndCBpbnNlcnQgaXRzZWxmXG4gICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0IChwYXJlbnQsIGVsbSwgcmVmJCQxKSB7XG4gICAgaWYgKGlzRGVmKHBhcmVudCkpIHtcbiAgICAgIGlmIChpc0RlZihyZWYkJDEpKSB7XG4gICAgICAgIGlmIChyZWYkJDEucGFyZW50Tm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50LCBlbG0sIHJlZiQkMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQocGFyZW50LCBlbG0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcmVuICh2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY3JlYXRlRWxtKGNoaWxkcmVuW2ldLCBpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmVsbSwgbnVsbCwgdHJ1ZSwgY2hpbGRyZW4sIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUodm5vZGUudGV4dCkpIHtcbiAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQodm5vZGUuZWxtLCBub2RlT3BzLmNyZWF0ZVRleHROb2RlKFN0cmluZyh2bm9kZS50ZXh0KSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGF0Y2hhYmxlICh2bm9kZSkge1xuICAgIHdoaWxlICh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgdm5vZGUgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgfVxuICAgIHJldHVybiBpc0RlZih2bm9kZS50YWcpXG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VDcmVhdGVIb29rcyAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xuICAgICAgY2JzLmNyZWF0ZVtpJDFdKGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICBpID0gdm5vZGUuZGF0YS5ob29rOyAvLyBSZXVzZSB2YXJpYWJsZVxuICAgIGlmIChpc0RlZihpKSkge1xuICAgICAgaWYgKGlzRGVmKGkuY3JlYXRlKSkgeyBpLmNyZWF0ZShlbXB0eU5vZGUsIHZub2RlKTsgfVxuICAgICAgaWYgKGlzRGVmKGkuaW5zZXJ0KSkgeyBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXQgc2NvcGUgaWQgYXR0cmlidXRlIGZvciBzY29wZWQgQ1NTLlxuICAvLyB0aGlzIGlzIGltcGxlbWVudGVkIGFzIGEgc3BlY2lhbCBjYXNlIHRvIGF2b2lkIHRoZSBvdmVyaGVhZFxuICAvLyBvZiBnb2luZyB0aHJvdWdoIHRoZSBub3JtYWwgYXR0cmlidXRlIHBhdGNoaW5nIHByb2Nlc3MuXG4gIGZ1bmN0aW9uIHNldFNjb3BlICh2bm9kZSkge1xuICAgIHZhciBpO1xuICAgIGlmIChpc0RlZihpID0gdm5vZGUuZm5TY29wZUlkKSkge1xuICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlO1xuICAgICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChpc0RlZihpID0gYW5jZXN0b3IuY29udGV4dCkgJiYgaXNEZWYoaSA9IGkuJG9wdGlvbnMuX3Njb3BlSWQpKSB7XG4gICAgICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZvciBzbG90IGNvbnRlbnQgdGhleSBzaG91bGQgYWxzbyBnZXQgdGhlIHNjb3BlSWQgZnJvbSB0aGUgaG9zdCBpbnN0YW5jZS5cbiAgICBpZiAoaXNEZWYoaSA9IGFjdGl2ZUluc3RhbmNlKSAmJlxuICAgICAgaSAhPT0gdm5vZGUuY29udGV4dCAmJlxuICAgICAgaSAhPT0gdm5vZGUuZm5Db250ZXh0ICYmXG4gICAgICBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZClcbiAgICApIHtcbiAgICAgIG5vZGVPcHMuc2V0U3R5bGVTY29wZSh2bm9kZS5lbG0sIGkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZub2RlcyAocGFyZW50RWxtLCByZWZFbG0sIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgY3JlYXRlRWxtKHZub2Rlc1tzdGFydElkeF0sIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0sIGZhbHNlLCB2bm9kZXMsIHN0YXJ0SWR4KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayAodm5vZGUpIHtcbiAgICB2YXIgaSwgajtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkuZGVzdHJveSkpIHsgaSh2bm9kZSk7IH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkgeyBjYnMuZGVzdHJveVtpXSh2bm9kZSk7IH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jaGlsZHJlbikpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICBpbnZva2VEZXN0cm95SG9vayh2bm9kZS5jaGlsZHJlbltqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVm5vZGVzIChwYXJlbnRFbG0sIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIHZhciBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XG4gICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhjaCk7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICByZW1vdmVOb2RlKGNoLmVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rICh2bm9kZSwgcm0pIHtcbiAgICBpZiAoaXNEZWYocm0pIHx8IGlzRGVmKHZub2RlLmRhdGEpKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICBpZiAoaXNEZWYocm0pKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgYSByZWN1cnNpdmVseSBwYXNzZWQgZG93biBybSBjYWxsYmFja1xuICAgICAgICAvLyBpbmNyZWFzZSB0aGUgbGlzdGVuZXJzIGNvdW50XG4gICAgICAgIHJtLmxpc3RlbmVycyArPSBsaXN0ZW5lcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3RseSByZW1vdmluZ1xuICAgICAgICBybSA9IGNyZWF0ZVJtQ2Iodm5vZGUuZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgICAgLy8gcmVjdXJzaXZlbHkgaW52b2tlIGhvb2tzIG9uIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGlzRGVmKGkgPSBpLl92bm9kZSkgJiYgaXNEZWYoaS5kYXRhKSkge1xuICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGksIHJtKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNicy5yZW1vdmVbaV0odm5vZGUsIHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5yZW1vdmUpKSB7XG4gICAgICAgIGkodm5vZGUsIHJtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU5vZGUodm5vZGUuZWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgIHZhciBvbGRTdGFydElkeCA9IDA7XG4gICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIHZub2RlVG9Nb3ZlLCByZWZFbG07XG5cbiAgICAvLyByZW1vdmVPbmx5IGlzIGEgc3BlY2lhbCBmbGFnIHVzZWQgb25seSBieSA8dHJhbnNpdGlvbi1ncm91cD5cbiAgICAvLyB0byBlbnN1cmUgcmVtb3ZlZCBlbGVtZW50cyBzdGF5IGluIGNvcnJlY3QgcmVsYXRpdmUgcG9zaXRpb25zXG4gICAgLy8gZHVyaW5nIGxlYXZpbmcgdHJhbnNpdGlvbnNcbiAgICB2YXIgY2FuTW92ZSA9ICFyZW1vdmVPbmx5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhuZXdDaCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgIGlmIChpc1VuZGVmKG9sZFN0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgaGFzIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZEVuZFZub2RlKSkge1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgcmlnaHRcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBub2RlT3BzLm5leHRTaWJsaW5nKG9sZEVuZFZub2RlLmVsbSkpO1xuICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7IC8vIFZub2RlIG1vdmVkIGxlZnRcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZEVuZFZub2RlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzVW5kZWYob2xkS2V5VG9JZHgpKSB7IG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpOyB9XG4gICAgICAgIGlkeEluT2xkID0gaXNEZWYobmV3U3RhcnRWbm9kZS5rZXkpXG4gICAgICAgICAgPyBvbGRLZXlUb0lkeFtuZXdTdGFydFZub2RlLmtleV1cbiAgICAgICAgICA6IGZpbmRJZHhJbk9sZChuZXdTdGFydFZub2RlLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZub2RlVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgIGlmIChzYW1lVm5vZGUodm5vZGVUb01vdmUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaFZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIHZub2RlVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzYW1lIGtleSBidXQgZGlmZmVyZW50IGVsZW1lbnQuIHRyZWF0IGFzIG5ldyBlbGVtZW50XG4gICAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgIHJlZkVsbSA9IGlzVW5kZWYobmV3Q2hbbmV3RW5kSWR4ICsgMV0pID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIHJlZkVsbSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlS2V5cyAoY2hpbGRyZW4pIHtcbiAgICB2YXIgc2VlbktleXMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXk7XG4gICAgICBpZiAoaXNEZWYoa2V5KSkge1xuICAgICAgICBpZiAoc2VlbktleXNba2V5XSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1wiICsga2V5ICsgXCInLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuXCIpLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VlbktleXNba2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWR4SW5PbGQgKG5vZGUsIG9sZENoLCBzdGFydCwgZW5kKSB7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHZhciBjID0gb2xkQ2hbaV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgc2FtZVZub2RlKG5vZGUsIGMpKSB7IHJldHVybiBpIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaFZub2RlIChvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBlbG0gPSB2bm9kZS5lbG0gPSBvbGRWbm9kZS5lbG07XG5cbiAgICBpZiAoaXNUcnVlKG9sZFZub2RlLmlzQXN5bmNQbGFjZWhvbGRlcikpIHtcbiAgICAgIGlmIChpc0RlZih2bm9kZS5hc3luY0ZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgIGh5ZHJhdGUob2xkVm5vZGUuZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlLmlzQXN5bmNQbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyByZXVzZSBlbGVtZW50IGZvciBzdGF0aWMgdHJlZXMuXG4gICAgLy8gbm90ZSB3ZSBvbmx5IGRvIHRoaXMgaWYgdGhlIHZub2RlIGlzIGNsb25lZCAtXG4gICAgLy8gaWYgdGhlIG5ldyBub2RlIGlzIG5vdCBjbG9uZWQgaXQgbWVhbnMgdGhlIHJlbmRlciBmdW5jdGlvbnMgaGF2ZSBiZWVuXG4gICAgLy8gcmVzZXQgYnkgdGhlIGhvdC1yZWxvYWQtYXBpIGFuZCB3ZSBuZWVkIHRvIGRvIGEgcHJvcGVyIHJlLXJlbmRlci5cbiAgICBpZiAoaXNUcnVlKHZub2RlLmlzU3RhdGljKSAmJlxuICAgICAgaXNUcnVlKG9sZFZub2RlLmlzU3RhdGljKSAmJlxuICAgICAgdm5vZGUua2V5ID09PSBvbGRWbm9kZS5rZXkgJiZcbiAgICAgIChpc1RydWUodm5vZGUuaXNDbG9uZWQpIHx8IGlzVHJ1ZSh2bm9kZS5pc09uY2UpKVxuICAgICkge1xuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkucHJlcGF0Y2gpKSB7XG4gICAgICBpKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgfVxuXG4gICAgdmFyIG9sZENoID0gb2xkVm5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGNoID0gdm5vZGUuY2hpbGRyZW47XG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzUGF0Y2hhYmxlKHZub2RlKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy51cGRhdGUubGVuZ3RoOyArK2kpIHsgY2JzLnVwZGF0ZVtpXShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkudXBkYXRlKSkgeyBpKG9sZFZub2RlLCB2bm9kZSk7IH1cbiAgICB9XG4gICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcbiAgICAgIGlmIChpc0RlZihvbGRDaCkgJiYgaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChvbGRDaCAhPT0gY2gpIHsgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaCwgY2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSk7IH1cbiAgICAgIH0gZWxzZSBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkgeyBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpOyB9XG4gICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIGNoLCAwLCBjaC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRDaCkpIHtcbiAgICAgICAgcmVtb3ZlVm5vZGVzKGVsbSwgb2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkge1xuICAgICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wb3N0cGF0Y2gpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUluc2VydEhvb2sgKHZub2RlLCBxdWV1ZSwgaW5pdGlhbCkge1xuICAgIC8vIGRlbGF5IGluc2VydCBob29rcyBmb3IgY29tcG9uZW50IHJvb3Qgbm9kZXMsIGludm9rZSB0aGVtIGFmdGVyIHRoZVxuICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXG4gICAgaWYgKGlzVHJ1ZShpbml0aWFsKSAmJiBpc0RlZih2bm9kZS5wYXJlbnQpKSB7XG4gICAgICB2bm9kZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gcXVldWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcXVldWVbaV0uZGF0YS5ob29rLmluc2VydChxdWV1ZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGh5ZHJhdGlvbkJhaWxlZCA9IGZhbHNlO1xuICAvLyBsaXN0IG9mIG1vZHVsZXMgdGhhdCBjYW4gc2tpcCBjcmVhdGUgaG9vayBkdXJpbmcgaHlkcmF0aW9uIGJlY2F1c2UgdGhleVxuICAvLyBhcmUgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgY2xpZW50IG9yIGhhcyBubyBuZWVkIGZvciBpbml0aWFsaXphdGlvblxuICAvLyBOb3RlOiBzdHlsZSBpcyBleGNsdWRlZCBiZWNhdXNlIGl0IHJlbGllcyBvbiBpbml0aWFsIGNsb25lIGZvciBmdXR1cmVcbiAgLy8gZGVlcCB1cGRhdGVzICgjNzA2MykuXG4gIHZhciBpc1JlbmRlcmVkTW9kdWxlID0gbWFrZU1hcCgnYXR0cnMsY2xhc3Msc3RhdGljQ2xhc3Msc3RhdGljU3R5bGUsa2V5Jyk7XG5cbiAgLy8gTm90ZTogdGhpcyBpcyBhIGJyb3dzZXItb25seSBmdW5jdGlvbiBzbyB3ZSBjYW4gYXNzdW1lIGVsbXMgYXJlIERPTSBub2Rlcy5cbiAgZnVuY3Rpb24gaHlkcmF0ZSAoZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICBpblZQcmUgPSBpblZQcmUgfHwgKGRhdGEgJiYgZGF0YS5wcmUpO1xuICAgIHZub2RlLmVsbSA9IGVsbTtcblxuICAgIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSAmJiBpc0RlZih2bm9kZS5hc3luY0ZhY3RvcnkpKSB7XG4gICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gYXNzZXJ0IG5vZGUgbWF0Y2hcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFhc3NlcnROb2RlTWF0Y2goZWxtLCB2bm9kZSwgaW5WUHJlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHsgaSh2bm9kZSwgdHJ1ZSAvKiBoeWRyYXRpbmcgKi8pOyB9XG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICAvLyBjaGlsZCBjb21wb25lbnQuIGl0IHNob3VsZCBoYXZlIGh5ZHJhdGVkIGl0cyBvd24gdHJlZS5cbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgIGlmIChpc0RlZihjaGlsZHJlbikpIHtcbiAgICAgICAgLy8gZW1wdHkgZWxlbWVudCwgYWxsb3cgY2xpZW50IHRvIHBpY2sgdXAgYW5kIHBvcHVsYXRlIGNoaWxkcmVuXG4gICAgICAgIGlmICghZWxtLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB2LWh0bWwgYW5kIGRvbVByb3BzOiBpbm5lckhUTUxcbiAgICAgICAgICBpZiAoaXNEZWYoaSA9IGRhdGEpICYmIGlzRGVmKGkgPSBpLmRvbVByb3BzKSAmJiBpc0RlZihpID0gaS5pbm5lckhUTUwpKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gZWxtLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGh5ZHJhdGlvbkJhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2ZXIgaW5uZXJIVE1MOiAnLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2NsaWVudCBpbm5lckhUTUw6ICcsIGVsbS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpdGVyYXRlIGFuZCBjb21wYXJlIGNoaWxkcmVuIGxpc3RzXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5NYXRjaCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gZWxtLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgIGlmICghY2hpbGROb2RlIHx8ICFoeWRyYXRlKGNoaWxkTm9kZSwgY2hpbGRyZW5baSQxXSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgY2hpbGROb2RlIGlzIG5vdCBudWxsLCBpdCBtZWFucyB0aGUgYWN0dWFsIGNoaWxkTm9kZXMgbGlzdCBpc1xuICAgICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIHZpcnR1YWwgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5NYXRjaCB8fCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzbWF0Y2hpbmcgY2hpbGROb2RlcyB2cy4gVk5vZGVzOiAnLCBlbG0uY2hpbGROb2RlcywgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgIHZhciBmdWxsSW52b2tlID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgaWYgKCFpc1JlbmRlcmVkTW9kdWxlKGtleSkpIHtcbiAgICAgICAgICAgIGZ1bGxJbnZva2UgPSB0cnVlO1xuICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZ1bGxJbnZva2UgJiYgZGF0YVsnY2xhc3MnXSkge1xuICAgICAgICAgIC8vIGVuc3VyZSBjb2xsZWN0aW5nIGRlcHMgZm9yIGRlZXAgY2xhc3MgYmluZGluZ3MgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgICAgdHJhdmVyc2UoZGF0YVsnY2xhc3MnXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsbS5kYXRhICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICBlbG0uZGF0YSA9IHZub2RlLnRleHQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnROb2RlTWF0Y2ggKG5vZGUsIHZub2RlLCBpblZQcmUpIHtcbiAgICBpZiAoaXNEZWYodm5vZGUudGFnKSkge1xuICAgICAgcmV0dXJuIHZub2RlLnRhZy5pbmRleE9mKCd2dWUtY29tcG9uZW50JykgPT09IDAgfHwgKFxuICAgICAgICAhaXNVbmtub3duRWxlbWVudCQkMSh2bm9kZSwgaW5WUHJlKSAmJlxuICAgICAgICB2bm9kZS50YWcudG9Mb3dlckNhc2UoKSA9PT0gKG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09ICh2bm9kZS5pc0NvbW1lbnQgPyA4IDogMylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSwgaHlkcmF0aW5nLCByZW1vdmVPbmx5LCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgIGlmIChpc1VuZGVmKHZub2RlKSkge1xuICAgICAgaWYgKGlzRGVmKG9sZFZub2RlKSkgeyBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7IH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBpc0luaXRpYWxQYXRjaCA9IGZhbHNlO1xuICAgIHZhciBpbnNlcnRlZFZub2RlUXVldWUgPSBbXTtcblxuICAgIGlmIChpc1VuZGVmKG9sZFZub2RlKSkge1xuICAgICAgLy8gZW1wdHkgbW91bnQgKGxpa2VseSBhcyBjb21wb25lbnQpLCBjcmVhdGUgbmV3IHJvb3QgZWxlbWVudFxuICAgICAgaXNJbml0aWFsUGF0Y2ggPSB0cnVlO1xuICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlzUmVhbEVsZW1lbnQgPSBpc0RlZihvbGRWbm9kZS5ub2RlVHlwZSk7XG4gICAgICBpZiAoIWlzUmVhbEVsZW1lbnQgJiYgc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgLy8gcGF0Y2ggZXhpc3Rpbmcgcm9vdCBub2RlXG4gICAgICAgIHBhdGNoVm5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzUmVhbEVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBtb3VudGluZyB0byBhIHJlYWwgZWxlbWVudFxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQgYW5kIGlmIHdlIGNhbiBwZXJmb3JtXG4gICAgICAgICAgLy8gYSBzdWNjZXNzZnVsIGh5ZHJhdGlvbi5cbiAgICAgICAgICBpZiAob2xkVm5vZGUubm9kZVR5cGUgPT09IDEgJiYgb2xkVm5vZGUuaGFzQXR0cmlidXRlKFNTUl9BVFRSKSkge1xuICAgICAgICAgICAgb2xkVm5vZGUucmVtb3ZlQXR0cmlidXRlKFNTUl9BVFRSKTtcbiAgICAgICAgICAgIGh5ZHJhdGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1RydWUoaHlkcmF0aW5nKSkge1xuICAgICAgICAgICAgaWYgKGh5ZHJhdGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpKSB7XG4gICAgICAgICAgICAgIGludm9rZUluc2VydEhvb2sodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBvbGRWbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgJ1RoZSBjbGllbnQtc2lkZSByZW5kZXJlZCB2aXJ0dWFsIERPTSB0cmVlIGlzIG5vdCBtYXRjaGluZyAnICtcbiAgICAgICAgICAgICAgICAnc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQuIFRoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBpbmNvcnJlY3QgJyArXG4gICAgICAgICAgICAgICAgJ0hUTUwgbWFya3VwLCBmb3IgZXhhbXBsZSBuZXN0aW5nIGJsb2NrLWxldmVsIGVsZW1lbnRzIGluc2lkZSAnICtcbiAgICAgICAgICAgICAgICAnPHA+LCBvciBtaXNzaW5nIDx0Ym9keT4uIEJhaWxpbmcgaHlkcmF0aW9uIGFuZCBwZXJmb3JtaW5nICcgK1xuICAgICAgICAgICAgICAgICdmdWxsIGNsaWVudC1zaWRlIHJlbmRlci4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVpdGhlciBub3Qgc2VydmVyLXJlbmRlcmVkLCBvciBoeWRyYXRpb24gZmFpbGVkLlxuICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBub2RlIGFuZCByZXBsYWNlIGl0XG4gICAgICAgICAgb2xkVm5vZGUgPSBlbXB0eU5vZGVBdChvbGRWbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXBsYWNpbmcgZXhpc3RpbmcgZWxlbWVudFxuICAgICAgICB2YXIgb2xkRWxtID0gb2xkVm5vZGUuZWxtO1xuICAgICAgICB2YXIgcGFyZW50RWxtJDEgPSBub2RlT3BzLnBhcmVudE5vZGUob2xkRWxtKTtcblxuICAgICAgICAvLyBjcmVhdGUgbmV3IG5vZGVcbiAgICAgICAgY3JlYXRlRWxtKFxuICAgICAgICAgIHZub2RlLFxuICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICAgICAgICAvLyBleHRyZW1lbHkgcmFyZSBlZGdlIGNhc2U6IGRvIG5vdCBpbnNlcnQgaWYgb2xkIGVsZW1lbnQgaXMgaW4gYVxuICAgICAgICAgIC8vIGxlYXZpbmcgdHJhbnNpdGlvbi4gT25seSBoYXBwZW5zIHdoZW4gY29tYmluaW5nIHRyYW5zaXRpb24gK1xuICAgICAgICAgIC8vIGtlZXAtYWxpdmUgKyBIT0NzLiAoIzQ1OTApXG4gICAgICAgICAgb2xkRWxtLl9sZWF2ZUNiID8gbnVsbCA6IHBhcmVudEVsbSQxLFxuICAgICAgICAgIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRWxtKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgcGxhY2Vob2xkZXIgbm9kZSBlbGVtZW50LCByZWN1cnNpdmVseVxuICAgICAgICBpZiAoaXNEZWYodm5vZGUucGFyZW50KSkge1xuICAgICAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlLnBhcmVudDtcbiAgICAgICAgICB2YXIgcGF0Y2hhYmxlID0gaXNQYXRjaGFibGUodm5vZGUpO1xuICAgICAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXShhbmNlc3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmNlc3Rvci5lbG0gPSB2bm9kZS5lbG07XG4gICAgICAgICAgICBpZiAocGF0Y2hhYmxlKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xuICAgICAgICAgICAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIGFuY2VzdG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyAjNjUxM1xuICAgICAgICAgICAgICAvLyBpbnZva2UgaW5zZXJ0IGhvb2tzIHRoYXQgbWF5IGhhdmUgYmVlbiBtZXJnZWQgYnkgY3JlYXRlIGhvb2tzLlxuICAgICAgICAgICAgICAvLyBlLmcuIGZvciBkaXJlY3RpdmVzIHRoYXQgdXNlcyB0aGUgXCJpbnNlcnRlZFwiIGhvb2suXG4gICAgICAgICAgICAgIHZhciBpbnNlcnQgPSBhbmNlc3Rvci5kYXRhLmhvb2suaW5zZXJ0O1xuICAgICAgICAgICAgICBpZiAoaW5zZXJ0Lm1lcmdlZCkge1xuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGF0IGluZGV4IDEgdG8gYXZvaWQgcmUtaW52b2tpbmcgY29tcG9uZW50IG1vdW50ZWQgaG9va1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkMiA9IDE7IGkkMiA8IGluc2VydC5mbnMubGVuZ3RoOyBpJDIrKykge1xuICAgICAgICAgICAgICAgICAgaW5zZXJ0LmZuc1tpJDJdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWdpc3RlclJlZihhbmNlc3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXN0cm95IG9sZCBub2RlXG4gICAgICAgIGlmIChpc0RlZihwYXJlbnRFbG0kMSkpIHtcbiAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtJDEsIFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGlzSW5pdGlhbFBhdGNoKTtcbiAgICByZXR1cm4gdm5vZGUuZWxtXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBkaXJlY3RpdmVzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIHVwZGF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcbiAgICB1cGRhdGVEaXJlY3RpdmVzKHZub2RlLCBlbXB0eU5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURpcmVjdGl2ZXMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAob2xkVm5vZGUuZGF0YS5kaXJlY3RpdmVzIHx8IHZub2RlLmRhdGEuZGlyZWN0aXZlcykge1xuICAgIF91cGRhdGUob2xkVm5vZGUsIHZub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXBkYXRlIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIGlzQ3JlYXRlID0gb2xkVm5vZGUgPT09IGVtcHR5Tm9kZTtcbiAgdmFyIGlzRGVzdHJveSA9IHZub2RlID09PSBlbXB0eU5vZGU7XG4gIHZhciBvbGREaXJzID0gbm9ybWFsaXplRGlyZWN0aXZlcyQxKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcywgb2xkVm5vZGUuY29udGV4dCk7XG4gIHZhciBuZXdEaXJzID0gbm9ybWFsaXplRGlyZWN0aXZlcyQxKHZub2RlLmRhdGEuZGlyZWN0aXZlcywgdm5vZGUuY29udGV4dCk7XG5cbiAgdmFyIGRpcnNXaXRoSW5zZXJ0ID0gW107XG4gIHZhciBkaXJzV2l0aFBvc3RwYXRjaCA9IFtdO1xuXG4gIHZhciBrZXksIG9sZERpciwgZGlyO1xuICBmb3IgKGtleSBpbiBuZXdEaXJzKSB7XG4gICAgb2xkRGlyID0gb2xkRGlyc1trZXldO1xuICAgIGRpciA9IG5ld0RpcnNba2V5XTtcbiAgICBpZiAoIW9sZERpcikge1xuICAgICAgLy8gbmV3IGRpcmVjdGl2ZSwgYmluZFxuICAgICAgY2FsbEhvb2skMShkaXIsICdiaW5kJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuaW5zZXJ0ZWQpIHtcbiAgICAgICAgZGlyc1dpdGhJbnNlcnQucHVzaChkaXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBleGlzdGluZyBkaXJlY3RpdmUsIHVwZGF0ZVxuICAgICAgZGlyLm9sZFZhbHVlID0gb2xkRGlyLnZhbHVlO1xuICAgICAgY2FsbEhvb2skMShkaXIsICd1cGRhdGUnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5jb21wb25lbnRVcGRhdGVkKSB7XG4gICAgICAgIGRpcnNXaXRoUG9zdHBhdGNoLnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhJbnNlcnQubGVuZ3RoKSB7XG4gICAgdmFyIGNhbGxJbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhJbnNlcnRbaV0sICdpbnNlcnRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNDcmVhdGUpIHtcbiAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgY2FsbEluc2VydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxJbnNlcnQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhQb3N0cGF0Y2gubGVuZ3RoKSB7XG4gICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdwb3N0cGF0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhQb3N0cGF0Y2hbaV0sICdjb21wb25lbnRVcGRhdGVkJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNDcmVhdGUpIHtcbiAgICBmb3IgKGtleSBpbiBvbGREaXJzKSB7XG4gICAgICBpZiAoIW5ld0RpcnNba2V5XSkge1xuICAgICAgICAvLyBubyBsb25nZXIgcHJlc2VudCwgdW5iaW5kXG4gICAgICAgIGNhbGxIb29rJDEob2xkRGlyc1trZXldLCAndW5iaW5kJywgb2xkVm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZW1wdHlNb2RpZmllcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzJDEgKFxuICBkaXJzLFxuICB2bVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIWRpcnMpIHtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgdmFyIGksIGRpcjtcbiAgZm9yIChpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICBkaXIgPSBkaXJzW2ldO1xuICAgIGlmICghZGlyLm1vZGlmaWVycykge1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBkaXIubW9kaWZpZXJzID0gZW1wdHlNb2RpZmllcnM7XG4gICAgfVxuICAgIHJlc1tnZXRSYXdEaXJOYW1lKGRpcildID0gZGlyO1xuICAgIGRpci5kZWYgPSByZXNvbHZlQXNzZXQodm0uJG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyLm5hbWUsIHRydWUpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldFJhd0Rpck5hbWUgKGRpcikge1xuICByZXR1cm4gZGlyLnJhd05hbWUgfHwgKChkaXIubmFtZSkgKyBcIi5cIiArIChPYmplY3Qua2V5cyhkaXIubW9kaWZpZXJzIHx8IHt9KS5qb2luKCcuJykpKVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayQxIChkaXIsIGhvb2ssIHZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KSB7XG4gIHZhciBmbiA9IGRpci5kZWYgJiYgZGlyLmRlZltob29rXTtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKHZub2RlLmVsbSwgZGlyLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm5vZGUuY29udGV4dCwgKFwiZGlyZWN0aXZlIFwiICsgKGRpci5uYW1lKSArIFwiIFwiICsgaG9vayArIFwiIGhvb2tcIikpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgYmFzZU1vZHVsZXMgPSBbXG4gIHJlZixcbiAgZGlyZWN0aXZlc1xuXVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gdXBkYXRlQXR0cnMgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgb3B0cyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChpc0RlZihvcHRzKSAmJiBvcHRzLkN0b3Iub3B0aW9ucy5pbmhlcml0QXR0cnMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5hdHRycykgJiYgaXNVbmRlZih2bm9kZS5kYXRhLmF0dHJzKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBrZXksIGN1ciwgb2xkO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkQXR0cnMgPSBvbGRWbm9kZS5kYXRhLmF0dHJzIHx8IHt9O1xuICB2YXIgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzIHx8IHt9O1xuICAvLyBjbG9uZSBvYnNlcnZlZCBvYmplY3RzLCBhcyB0aGUgdXNlciBwcm9iYWJseSB3YW50cyB0byBtdXRhdGUgaXRcbiAgaWYgKGlzRGVmKGF0dHJzLl9fb2JfXykpIHtcbiAgICBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGF0dHJzKTtcbiAgfVxuXG4gIGZvciAoa2V5IGluIGF0dHJzKSB7XG4gICAgY3VyID0gYXR0cnNba2V5XTtcbiAgICBvbGQgPSBvbGRBdHRyc1trZXldO1xuICAgIGlmIChvbGQgIT09IGN1cikge1xuICAgICAgc2V0QXR0cihlbG0sIGtleSwgY3VyKTtcbiAgICB9XG4gIH1cbiAgLy8gIzQzOTE6IGluIElFOSwgc2V0dGluZyB0eXBlIGNhbiByZXNldCB2YWx1ZSBmb3IgaW5wdXRbdHlwZT1yYWRpb11cbiAgLy8gIzY2NjY6IElFL0VkZ2UgZm9yY2VzIHByb2dyZXNzIHZhbHVlIGRvd24gdG8gMSBiZWZvcmUgc2V0dGluZyBhIG1heFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKChpc0lFIHx8IGlzRWRnZSkgJiYgYXR0cnMudmFsdWUgIT09IG9sZEF0dHJzLnZhbHVlKSB7XG4gICAgc2V0QXR0cihlbG0sICd2YWx1ZScsIGF0dHJzLnZhbHVlKTtcbiAgfVxuICBmb3IgKGtleSBpbiBvbGRBdHRycykge1xuICAgIGlmIChpc1VuZGVmKGF0dHJzW2tleV0pKSB7XG4gICAgICBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0VudW1lcmF0ZWRBdHRyKGtleSkpIHtcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoZWwudGFnTmFtZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgIGJhc2VTZXRBdHRyKGVsLCBrZXksIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyKGtleSkpIHtcbiAgICAvLyBzZXQgYXR0cmlidXRlIGZvciBibGFuayB2YWx1ZVxuICAgIC8vIGUuZy4gPG9wdGlvbiBkaXNhYmxlZD5TZWxlY3Qgb25lPC9vcHRpb24+XG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGVjaG5pY2FsbHkgYWxsb3dmdWxsc2NyZWVuIGlzIGEgYm9vbGVhbiBhdHRyaWJ1dGUgZm9yIDxpZnJhbWU+LFxuICAgICAgLy8gYnV0IEZsYXNoIGV4cGVjdHMgYSB2YWx1ZSBvZiBcInRydWVcIiB3aGVuIHVzZWQgb24gPGVtYmVkPiB0YWdcbiAgICAgIHZhbHVlID0ga2V5ID09PSAnYWxsb3dmdWxsc2NyZWVuJyAmJiBlbC50YWdOYW1lID09PSAnRU1CRUQnXG4gICAgICAgID8gJ3RydWUnXG4gICAgICAgIDoga2V5O1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0VudW1lcmF0ZWRBdHRyKGtleSkpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJyA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICB9IGVsc2UgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2VTZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAjNzEzODogSUUxMCAmIDExIGZpcmVzIGlucHV0IGV2ZW50IHdoZW4gc2V0dGluZyBwbGFjZWhvbGRlciBvblxuICAgIC8vIDx0ZXh0YXJlYT4uLi4gYmxvY2sgdGhlIGZpcnN0IGlucHV0IGV2ZW50IGFuZCByZW1vdmUgdGhlIGJsb2NrZXJcbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoXG4gICAgICBpc0lFICYmICFpc0lFOSAmJlxuICAgICAgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJlxuICAgICAga2V5ID09PSAncGxhY2Vob2xkZXInICYmICFlbC5fX2llcGhcbiAgICApIHtcbiAgICAgIHZhciBibG9ja2VyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIH07XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJsb2NrZXIpO1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBlbC5fX2llcGggPSB0cnVlOyAvKiBJRSBwbGFjZWhvbGRlciBwYXRjaGVkICovXG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfVxufVxuXG52YXIgYXR0cnMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gIHVwZGF0ZTogdXBkYXRlQXR0cnNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcbiAgaWYgKFxuICAgIGlzVW5kZWYoZGF0YS5zdGF0aWNDbGFzcykgJiZcbiAgICBpc1VuZGVmKGRhdGEuY2xhc3MpICYmIChcbiAgICAgIGlzVW5kZWYob2xkRGF0YSkgfHwgKFxuICAgICAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljQ2xhc3MpICYmXG4gICAgICAgIGlzVW5kZWYob2xkRGF0YS5jbGFzcylcbiAgICAgIClcbiAgICApXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNscyA9IGdlbkNsYXNzRm9yVm5vZGUodm5vZGUpO1xuXG4gIC8vIGhhbmRsZSB0cmFuc2l0aW9uIGNsYXNzZXNcbiAgdmFyIHRyYW5zaXRpb25DbGFzcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcztcbiAgaWYgKGlzRGVmKHRyYW5zaXRpb25DbGFzcykpIHtcbiAgICBjbHMgPSBjb25jYXQoY2xzLCBzdHJpbmdpZnlDbGFzcyh0cmFuc2l0aW9uQ2xhc3MpKTtcbiAgfVxuXG4gIC8vIHNldCB0aGUgY2xhc3NcbiAgaWYgKGNscyAhPT0gZWwuX3ByZXZDbGFzcykge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbHMpO1xuICAgIGVsLl9wcmV2Q2xhc3MgPSBjbHM7XG4gIH1cbn1cblxudmFyIGtsYXNzID0ge1xuICBjcmVhdGU6IHVwZGF0ZUNsYXNzLFxuICB1cGRhdGU6IHVwZGF0ZUNsYXNzXG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuXG5cblxuXG5cblxuXG5cbi8vIGFkZCBhIHJhdyBhdHRyICh1c2UgdGhpcyBpbiBwcmVUcmFuc2Zvcm1zKVxuXG5cblxuXG5cblxuXG5cbi8vIG5vdGU6IHRoaXMgb25seSByZW1vdmVzIHRoZSBhdHRyIGZyb20gdGhlIEFycmF5IChhdHRyc0xpc3QpIHNvIHRoYXQgaXRcbi8vIGRvZXNuJ3QgZ2V0IHByb2Nlc3NlZCBieSBwcm9jZXNzQXR0cnMuXG4vLyBCeSBkZWZhdWx0IGl0IGRvZXMgTk9UIHJlbW92ZSBpdCBmcm9tIHRoZSBtYXAgKGF0dHJzTWFwKSBiZWNhdXNlIHRoZSBtYXAgaXNcbi8vIG5lZWRlZCBkdXJpbmcgY29kZWdlbi5cblxuLyogICovXG5cbi8qKlxuICogQ3Jvc3MtcGxhdGZvcm0gY29kZSBnZW5lcmF0aW9uIGZvciBjb21wb25lbnQgdi1tb2RlbFxuICovXG5cblxuLyoqXG4gKiBDcm9zcy1wbGF0Zm9ybSBjb2RlZ2VuIGhlbHBlciBmb3IgZ2VuZXJhdGluZyB2LW1vZGVsIHZhbHVlIGFzc2lnbm1lbnQgY29kZS5cbiAqL1xuXG4vKiAgKi9cblxuLy8gaW4gc29tZSBjYXNlcywgdGhlIGV2ZW50IHVzZWQgaGFzIHRvIGJlIGRldGVybWluZWQgYXQgcnVudGltZVxuLy8gc28gd2UgdXNlZCBzb21lIHJlc2VydmVkIHRva2VucyBkdXJpbmcgY29tcGlsZS5cbnZhciBSQU5HRV9UT0tFTiA9ICdfX3InO1xudmFyIENIRUNLQk9YX1JBRElPX1RPS0VOID0gJ19fYyc7XG5cbi8qICAqL1xuXG4vLyBub3JtYWxpemUgdi1tb2RlbCBldmVudCB0b2tlbnMgdGhhdCBjYW4gb25seSBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWUuXG4vLyBpdCdzIGltcG9ydGFudCB0byBwbGFjZSB0aGUgZXZlbnQgYXMgdGhlIGZpcnN0IGluIHRoZSBhcnJheSBiZWNhdXNlXG4vLyB0aGUgd2hvbGUgcG9pbnQgaXMgZW5zdXJpbmcgdGhlIHYtbW9kZWwgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgYmVmb3JlXG4vLyB1c2VyLWF0dGFjaGVkIGhhbmRsZXJzLlxuZnVuY3Rpb24gbm9ybWFsaXplRXZlbnRzIChvbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRGVmKG9uW1JBTkdFX1RPS0VOXSkpIHtcbiAgICAvLyBJRSBpbnB1dFt0eXBlPXJhbmdlXSBvbmx5IHN1cHBvcnRzIGBjaGFuZ2VgIGV2ZW50XG4gICAgdmFyIGV2ZW50ID0gaXNJRSA/ICdjaGFuZ2UnIDogJ2lucHV0JztcbiAgICBvbltldmVudF0gPSBbXS5jb25jYXQob25bUkFOR0VfVE9LRU5dLCBvbltldmVudF0gfHwgW10pO1xuICAgIGRlbGV0ZSBvbltSQU5HRV9UT0tFTl07XG4gIH1cbiAgLy8gVGhpcyB3YXMgb3JpZ2luYWxseSBpbnRlbmRlZCB0byBmaXggIzQ1MjEgYnV0IG5vIGxvbmdlciBuZWNlc3NhcnlcbiAgLy8gYWZ0ZXIgMi41LiBLZWVwaW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0IHdpdGggZ2VuZXJhdGVkIGNvZGUgZnJvbSA8IDIuNFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRGVmKG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXSkpIHtcbiAgICBvbi5jaGFuZ2UgPSBbXS5jb25jYXQob25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dLCBvbi5jaGFuZ2UgfHwgW10pO1xuICAgIGRlbGV0ZSBvbltDSEVDS0JPWF9SQURJT19UT0tFTl07XG4gIH1cbn1cblxudmFyIHRhcmdldCQxO1xuXG5mdW5jdGlvbiBjcmVhdGVPbmNlSGFuZGxlciAoaGFuZGxlciwgZXZlbnQsIGNhcHR1cmUpIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQkMTsgLy8gc2F2ZSBjdXJyZW50IHRhcmdldCBlbGVtZW50IGluIGNsb3N1cmVcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZSQyKGV2ZW50LCBvbmNlSGFuZGxlciwgY2FwdHVyZSwgX3RhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZCQxIChcbiAgZXZlbnQsXG4gIGhhbmRsZXIsXG4gIG9uY2UkJDEsXG4gIGNhcHR1cmUsXG4gIHBhc3NpdmVcbikge1xuICBoYW5kbGVyID0gd2l0aE1hY3JvVGFzayhoYW5kbGVyKTtcbiAgaWYgKG9uY2UkJDEpIHsgaGFuZGxlciA9IGNyZWF0ZU9uY2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCBjYXB0dXJlKTsgfVxuICB0YXJnZXQkMS5hZGRFdmVudExpc3RlbmVyKFxuICAgIGV2ZW50LFxuICAgIGhhbmRsZXIsXG4gICAgc3VwcG9ydHNQYXNzaXZlXG4gICAgICA/IHsgY2FwdHVyZTogY2FwdHVyZSwgcGFzc2l2ZTogcGFzc2l2ZSB9XG4gICAgICA6IGNhcHR1cmVcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlJDIgKFxuICBldmVudCxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgX3RhcmdldFxuKSB7XG4gIChfdGFyZ2V0IHx8IHRhcmdldCQxKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIGV2ZW50LFxuICAgIGhhbmRsZXIuX3dpdGhUYXNrIHx8IGhhbmRsZXIsXG4gICAgY2FwdHVyZVxuICApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVET01MaXN0ZW5lcnMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLm9uKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEub24pKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9uID0gdm5vZGUuZGF0YS5vbiB8fCB7fTtcbiAgdmFyIG9sZE9uID0gb2xkVm5vZGUuZGF0YS5vbiB8fCB7fTtcbiAgdGFyZ2V0JDEgPSB2bm9kZS5lbG07XG4gIG5vcm1hbGl6ZUV2ZW50cyhvbik7XG4gIHVwZGF0ZUxpc3RlbmVycyhvbiwgb2xkT24sIGFkZCQxLCByZW1vdmUkMiwgdm5vZGUuY29udGV4dCk7XG4gIHRhcmdldCQxID0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnRzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURPTUxpc3RlbmVycyxcbiAgdXBkYXRlOiB1cGRhdGVET01MaXN0ZW5lcnNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVByb3BzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5kb21Qcm9wcykgJiYgaXNVbmRlZih2bm9kZS5kYXRhLmRvbVByb3BzKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBrZXksIGN1cjtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihwcm9wcy5fX29iX18pKSB7XG4gICAgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzID0gZXh0ZW5kKHt9LCBwcm9wcyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBvbGRQcm9wcykge1xuICAgIGlmIChpc1VuZGVmKHByb3BzW2tleV0pKSB7XG4gICAgICBlbG1ba2V5XSA9ICcnO1xuICAgIH1cbiAgfVxuICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgIGN1ciA9IHByb3BzW2tleV07XG4gICAgLy8gaWdub3JlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyB0ZXh0Q29udGVudCBvciBpbm5lckhUTUwsXG4gICAgLy8gYXMgdGhlc2Ugd2lsbCB0aHJvdyBhd2F5IGV4aXN0aW5nIERPTSBub2RlcyBhbmQgY2F1c2UgcmVtb3ZhbCBlcnJvcnNcbiAgICAvLyBvbiBzdWJzZXF1ZW50IHBhdGNoZXMgKCMzMzYwKVxuICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcgfHwga2V5ID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgaWYgKHZub2RlLmNoaWxkcmVuKSB7IHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9IDA7IH1cbiAgICAgIGlmIChjdXIgPT09IG9sZFByb3BzW2tleV0pIHsgY29udGludWUgfVxuICAgICAgLy8gIzY2MDEgd29yayBhcm91bmQgQ2hyb21lIHZlcnNpb24gPD0gNTUgYnVnIHdoZXJlIHNpbmdsZSB0ZXh0Tm9kZVxuICAgICAgLy8gcmVwbGFjZWQgYnkgaW5uZXJIVE1ML3RleHRDb250ZW50IHJldGFpbnMgaXRzIHBhcmVudE5vZGUgcHJvcGVydHlcbiAgICAgIGlmIChlbG0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAndmFsdWUnKSB7XG4gICAgICAvLyBzdG9yZSB2YWx1ZSBhcyBfdmFsdWUgYXMgd2VsbCBzaW5jZVxuICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxuICAgICAgZWxtLl92YWx1ZSA9IGN1cjtcbiAgICAgIC8vIGF2b2lkIHJlc2V0dGluZyBjdXJzb3IgcG9zaXRpb24gd2hlbiB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgdmFyIHN0ckN1ciA9IGlzVW5kZWYoY3VyKSA/ICcnIDogU3RyaW5nKGN1cik7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlVmFsdWUoZWxtLCBzdHJDdXIpKSB7XG4gICAgICAgIGVsbS52YWx1ZSA9IHN0ckN1cjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxtW2tleV0gPSBjdXI7XG4gICAgfVxuICB9XG59XG5cbi8vIGNoZWNrIHBsYXRmb3Jtcy93ZWIvdXRpbC9hdHRycy5qcyBhY2NlcHRWYWx1ZVxuXG5cbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZVZhbHVlIChlbG0sIGNoZWNrVmFsKSB7XG4gIHJldHVybiAoIWVsbS5jb21wb3NpbmcgJiYgKFxuICAgIGVsbS50YWdOYW1lID09PSAnT1BUSU9OJyB8fFxuICAgIGlzTm90SW5Gb2N1c0FuZERpcnR5KGVsbSwgY2hlY2tWYWwpIHx8XG4gICAgaXNEaXJ0eVdpdGhNb2RpZmllcnMoZWxtLCBjaGVja1ZhbClcbiAgKSlcbn1cblxuZnVuY3Rpb24gaXNOb3RJbkZvY3VzQW5kRGlydHkgKGVsbSwgY2hlY2tWYWwpIHtcbiAgLy8gcmV0dXJuIHRydWUgd2hlbiB0ZXh0Ym94ICgubnVtYmVyIGFuZCAudHJpbSkgbG9zZXMgZm9jdXMgYW5kIGl0cyB2YWx1ZSBpc1xuICAvLyBub3QgZXF1YWwgdG8gdGhlIHVwZGF0ZWQgdmFsdWVcbiAgdmFyIG5vdEluRm9jdXMgPSB0cnVlO1xuICAvLyAjNjE1N1xuICAvLyB3b3JrIGFyb3VuZCBJRSBidWcgd2hlbiBhY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbiBhbiBpZnJhbWVcbiAgdHJ5IHsgbm90SW5Gb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsbTsgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIG5vdEluRm9jdXMgJiYgZWxtLnZhbHVlICE9PSBjaGVja1ZhbFxufVxuXG5mdW5jdGlvbiBpc0RpcnR5V2l0aE1vZGlmaWVycyAoZWxtLCBuZXdWYWwpIHtcbiAgdmFyIHZhbHVlID0gZWxtLnZhbHVlO1xuICB2YXIgbW9kaWZpZXJzID0gZWxtLl92TW9kaWZpZXJzOyAvLyBpbmplY3RlZCBieSB2LW1vZGVsIHJ1bnRpbWVcbiAgaWYgKGlzRGVmKG1vZGlmaWVycykpIHtcbiAgICBpZiAobW9kaWZpZXJzLmxhenkpIHtcbiAgICAgIC8vIGlucHV0cyB3aXRoIGxhenkgc2hvdWxkIG9ubHkgYmUgdXBkYXRlZCB3aGVuIG5vdCBpbiBmb2N1c1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XG4gICAgICByZXR1cm4gdG9OdW1iZXIodmFsdWUpICE9PSB0b051bWJlcihuZXdWYWwpXG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKSAhPT0gbmV3VmFsLnRyaW0oKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWUgIT09IG5ld1ZhbFxufVxuXG52YXIgZG9tUHJvcHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NUHJvcHMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NUHJvcHNcbn1cblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbWVyZ2Ugc3RhdGljIGFuZCBkeW5hbWljIHN0eWxlIGRhdGEgb24gdGhlIHNhbWUgdm5vZGVcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlRGF0YSAoZGF0YSkge1xuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoZGF0YS5zdHlsZSk7XG4gIC8vIHN0YXRpYyBzdHlsZSBpcyBwcmUtcHJvY2Vzc2VkIGludG8gYW4gb2JqZWN0IGR1cmluZyBjb21waWxhdGlvblxuICAvLyBhbmQgaXMgYWx3YXlzIGEgZnJlc2ggb2JqZWN0LCBzbyBpdCdzIHNhZmUgdG8gbWVyZ2UgaW50byBpdFxuICByZXR1cm4gZGF0YS5zdGF0aWNTdHlsZVxuICAgID8gZXh0ZW5kKGRhdGEuc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgIDogc3R5bGVcbn1cblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qKlxuICogcGFyZW50IGNvbXBvbmVudCBzdHlsZSBzaG91bGQgYmUgYWZ0ZXIgY2hpbGQnc1xuICogc28gdGhhdCBwYXJlbnQgY29tcG9uZW50J3Mgc3R5bGUgY291bGQgb3ZlcnJpZGUgaXRcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUgKHZub2RlLCBjaGVja0NoaWxkKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIHN0eWxlRGF0YTtcblxuICBpZiAoY2hlY2tDaGlsZCkge1xuICAgIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEgJiZcbiAgICAgICAgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShjaGlsZE5vZGUuZGF0YSkpXG4gICAgICApIHtcbiAgICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YSh2bm9kZS5kYXRhKSkpIHtcbiAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICB9XG5cbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUuZGF0YSAmJiAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHBhcmVudE5vZGUuZGF0YSkpKSB7XG4gICAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgY3NzVmFyUkUgPSAvXi0tLztcbnZhciBpbXBvcnRhbnRSRSA9IC9cXHMqIWltcG9ydGFudCQvO1xudmFyIHNldFByb3AgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGNzc1ZhclJFLnRlc3QobmFtZSkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwpO1xuICB9IGVsc2UgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbC5yZXBsYWNlKGltcG9ydGFudFJFLCAnJyksICdpbXBvcnRhbnQnKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemUobmFtZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgLy8gU3VwcG9ydCB2YWx1ZXMgYXJyYXkgY3JlYXRlZCBieSBhdXRvcHJlZml4ZXIsIGUuZy5cbiAgICAgIC8vIHtkaXNwbGF5OiBbXCItd2Via2l0LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiZmxleFwiXX1cbiAgICAgIC8vIFNldCB0aGVtIG9uZSBieSBvbmUsIGFuZCB0aGUgYnJvd3NlciB3aWxsIG9ubHkgc2V0IHRob3NlIGl0IGNhbiByZWNvZ25pemVcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWwuc3R5bGVbbm9ybWFsaXplZE5hbWVdID0gdmFsW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgdmVuZG9yTmFtZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXTtcblxudmFyIGVtcHR5U3R5bGU7XG52YXIgbm9ybWFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChwcm9wKSB7XG4gIGVtcHR5U3R5bGUgPSBlbXB0eVN0eWxlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICBwcm9wID0gY2FtZWxpemUocHJvcCk7XG4gIGlmIChwcm9wICE9PSAnZmlsdGVyJyAmJiAocHJvcCBpbiBlbXB0eVN0eWxlKSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cbiAgdmFyIGNhcE5hbWUgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gdmVuZG9yTmFtZXNbaV0gKyBjYXBOYW1lO1xuICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcblxuICBpZiAoaXNVbmRlZihkYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKGRhdGEuc3R5bGUpICYmXG4gICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKG9sZERhdGEuc3R5bGUpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGN1ciwgbmFtZTtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkU3RhdGljU3R5bGUgPSBvbGREYXRhLnN0YXRpY1N0eWxlO1xuICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkRGF0YS5ub3JtYWxpemVkU3R5bGUgfHwgb2xkRGF0YS5zdHlsZSB8fCB7fTtcblxuICAvLyBpZiBzdGF0aWMgc3R5bGUgZXhpc3RzLCBzdHlsZWJpbmRpbmcgYWxyZWFkeSBtZXJnZWQgaW50byBpdCB3aGVuIGRvaW5nIG5vcm1hbGl6ZVN0eWxlRGF0YVxuICB2YXIgb2xkU3R5bGUgPSBvbGRTdGF0aWNTdHlsZSB8fCBvbGRTdHlsZUJpbmRpbmc7XG5cbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHZub2RlLmRhdGEuc3R5bGUpIHx8IHt9O1xuXG4gIC8vIHN0b3JlIG5vcm1hbGl6ZWQgc3R5bGUgdW5kZXIgYSBkaWZmZXJlbnQga2V5IGZvciBuZXh0IGRpZmZcbiAgLy8gbWFrZSBzdXJlIHRvIGNsb25lIGl0IGlmIGl0J3MgcmVhY3RpdmUsIHNpbmNlIHRoZSB1c2VyIGxpa2VseSB3YW50c1xuICAvLyB0byBtdXRhdGUgaXQuXG4gIHZub2RlLmRhdGEubm9ybWFsaXplZFN0eWxlID0gaXNEZWYoc3R5bGUuX19vYl9fKVxuICAgID8gZXh0ZW5kKHt9LCBzdHlsZSlcbiAgICA6IHN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9IGdldFN0eWxlKHZub2RlLCB0cnVlKTtcblxuICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICBpZiAoaXNVbmRlZihuZXdTdHlsZVtuYW1lXSkpIHtcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsICcnKTtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG5ld1N0eWxlKSB7XG4gICAgY3VyID0gbmV3U3R5bGVbbmFtZV07XG4gICAgaWYgKGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gICAgICBzZXRQcm9wKGVsLCBuYW1lLCBjdXIgPT0gbnVsbCA/ICcnIDogY3VyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHN0eWxlID0ge1xuICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICB1cGRhdGU6IHVwZGF0ZVN0eWxlXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgfVxuICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgaWYgKGN1cikge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uIChkZWYpIHtcbiAgaWYgKCFkZWYpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIGRlZiA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgaWYgKGRlZi5jc3MgIT09IGZhbHNlKSB7XG4gICAgICBleHRlbmQocmVzLCBhdXRvQ3NzVHJhbnNpdGlvbihkZWYubmFtZSB8fCAndicpKTtcbiAgICB9XG4gICAgZXh0ZW5kKHJlcywgZGVmKTtcbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYXV0b0Nzc1RyYW5zaXRpb24oZGVmKVxuICB9XG59XG5cbnZhciBhdXRvQ3NzVHJhbnNpdGlvbiA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGVudGVyQ2xhc3M6IChuYW1lICsgXCItZW50ZXJcIiksXG4gICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxuICAgIGxlYXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmVcIiksXG4gICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxuICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXG4gIH1cbn0pO1xuXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiAhaXNJRTk7XG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbmlmIChoYXNUcmFuc2l0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAod2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgfVxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBhbmltYXRpb25Qcm9wID0gJ1dlYmtpdEFuaW1hdGlvbic7XG4gICAgYW5pbWF0aW9uRW5kRXZlbnQgPSAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgfVxufVxuXG4vLyBiaW5kaW5nIHRvIHdpbmRvdyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBob3QgcmVsb2FkIHdvcmsgaW4gSUUgaW4gc3RyaWN0IG1vZGVcbnZhciByYWYgPSBpbkJyb3dzZXJcbiAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dFxuICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfTtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICByYWYoZnVuY3Rpb24gKCkge1xuICAgIHJhZihmbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgdmFyIHRyYW5zaXRpb25DbGFzc2VzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSk7XG4gIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgdHJhbnNpdGlvbkNsYXNzZXMucHVzaChjbHMpO1xuICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgcmVtb3ZlKGVsLl90cmFuc2l0aW9uQ2xhc3NlcywgY2xzKTtcbiAgfVxuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcbiAgZWwsXG4gIGV4cGVjdGVkVHlwZSxcbiAgY2Jcbikge1xuICB2YXIgcmVmID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XG4gIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xuICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxuICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gIHZhciBlbmRlZCA9IDA7XG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICAgIGNiKCk7XG4gIH07XG4gIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH0sIHRpbWVvdXQgKyAxKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xufVxuXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddLnNwbGl0KCcsICcpO1xuICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9ucyA9IHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddLnNwbGl0KCcsICcpO1xuICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gc3R5bGVzW2FuaW1hdGlvblByb3AgKyAnRGVsYXknXS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10uc3BsaXQoJywgJyk7XG4gIHZhciBhbmltYXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dChhbmltYXRpb25EZWxheXMsIGFuaW1hdGlvbkR1cmF0aW9ucyk7XG5cbiAgdmFyIHR5cGU7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgdmFyIHByb3BDb3VudCA9IDA7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZXhwZWN0ZWRUeXBlID09PSBUUkFOU0lUSU9OKSB7XG4gICAgaWYgKHRyYW5zaXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgdHlwZSA9IFRSQU5TSVRJT047XG4gICAgICB0aW1lb3V0ID0gdHJhbnNpdGlvblRpbWVvdXQ7XG4gICAgICBwcm9wQ291bnQgPSB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBBTklNQVRJT04pIHtcbiAgICBpZiAoYW5pbWF0aW9uVGltZW91dCA+IDApIHtcbiAgICAgIHR5cGUgPSBBTklNQVRJT047XG4gICAgICB0aW1lb3V0ID0gYW5pbWF0aW9uVGltZW91dDtcbiAgICAgIHByb3BDb3VudCA9IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRpbWVvdXQgPSBNYXRoLm1heCh0cmFuc2l0aW9uVGltZW91dCwgYW5pbWF0aW9uVGltZW91dCk7XG4gICAgdHlwZSA9IHRpbWVvdXQgPiAwXG4gICAgICA/IHRyYW5zaXRpb25UaW1lb3V0ID4gYW5pbWF0aW9uVGltZW91dFxuICAgICAgICA/IFRSQU5TSVRJT05cbiAgICAgICAgOiBBTklNQVRJT05cbiAgICAgIDogbnVsbDtcbiAgICBwcm9wQ291bnQgPSB0eXBlXG4gICAgICA/IHR5cGUgPT09IFRSQU5TSVRJT05cbiAgICAgICAgPyB0cmFuc2l0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgICA6IGFuaW1hdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgIDogMDtcbiAgfVxuICB2YXIgaGFzVHJhbnNmb3JtID1cbiAgICB0eXBlID09PSBUUkFOU0lUSU9OICYmXG4gICAgdHJhbnNmb3JtUkUudGVzdChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnUHJvcGVydHknXSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgIHByb3BDb3VudDogcHJvcENvdW50LFxuICAgIGhhc1RyYW5zZm9ybTogaGFzVHJhbnNmb3JtXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZW91dCAoZGVsYXlzLCBkdXJhdGlvbnMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgd2hpbGUgKGRlbGF5cy5sZW5ndGggPCBkdXJhdGlvbnMubGVuZ3RoKSB7XG4gICAgZGVsYXlzID0gZGVsYXlzLmNvbmNhdChkZWxheXMpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGR1cmF0aW9ucy5tYXAoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICByZXR1cm4gdG9NcyhkKSArIHRvTXMoZGVsYXlzW2ldKVxuICB9KSlcbn1cblxuZnVuY3Rpb24gdG9NcyAocykge1xuICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpKSAqIDEwMDBcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVudGVyICh2bm9kZSwgdG9nZ2xlRGlzcGxheSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG5cbiAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2xlYXZlQ2IoKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcbiAgaWYgKGlzVW5kZWYoZGF0YSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcbiAgdmFyIGVudGVyVG9DbGFzcyA9IGRhdGEuZW50ZXJUb0NsYXNzO1xuICB2YXIgZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcbiAgdmFyIGFwcGVhckNsYXNzID0gZGF0YS5hcHBlYXJDbGFzcztcbiAgdmFyIGFwcGVhclRvQ2xhc3MgPSBkYXRhLmFwcGVhclRvQ2xhc3M7XG4gIHZhciBhcHBlYXJBY3RpdmVDbGFzcyA9IGRhdGEuYXBwZWFyQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVFbnRlciA9IGRhdGEuYmVmb3JlRW50ZXI7XG4gIHZhciBlbnRlciA9IGRhdGEuZW50ZXI7XG4gIHZhciBhZnRlckVudGVyID0gZGF0YS5hZnRlckVudGVyO1xuICB2YXIgZW50ZXJDYW5jZWxsZWQgPSBkYXRhLmVudGVyQ2FuY2VsbGVkO1xuICB2YXIgYmVmb3JlQXBwZWFyID0gZGF0YS5iZWZvcmVBcHBlYXI7XG4gIHZhciBhcHBlYXIgPSBkYXRhLmFwcGVhcjtcbiAgdmFyIGFmdGVyQXBwZWFyID0gZGF0YS5hZnRlckFwcGVhcjtcbiAgdmFyIGFwcGVhckNhbmNlbGxlZCA9IGRhdGEuYXBwZWFyQ2FuY2VsbGVkO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIC8vIGFjdGl2ZUluc3RhbmNlIHdpbGwgYWx3YXlzIGJlIHRoZSA8dHJhbnNpdGlvbj4gY29tcG9uZW50IG1hbmFnaW5nIHRoaXNcbiAgLy8gdHJhbnNpdGlvbi4gT25lIGVkZ2UgY2FzZSB0byBjaGVjayBpcyB3aGVuIHRoZSA8dHJhbnNpdGlvbj4gaXMgcGxhY2VkXG4gIC8vIGFzIHRoZSByb290IG5vZGUgb2YgYSBjaGlsZCBjb21wb25lbnQuIEluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIGNoZWNrXG4gIC8vIDx0cmFuc2l0aW9uPidzIHBhcmVudCBmb3IgYXBwZWFyIGNoZWNrLlxuICB2YXIgY29udGV4dCA9IGFjdGl2ZUluc3RhbmNlO1xuICB2YXIgdHJhbnNpdGlvbk5vZGUgPSBhY3RpdmVJbnN0YW5jZS4kdm5vZGU7XG4gIHdoaWxlICh0cmFuc2l0aW9uTm9kZSAmJiB0cmFuc2l0aW9uTm9kZS5wYXJlbnQpIHtcbiAgICB0cmFuc2l0aW9uTm9kZSA9IHRyYW5zaXRpb25Ob2RlLnBhcmVudDtcbiAgICBjb250ZXh0ID0gdHJhbnNpdGlvbk5vZGUuY29udGV4dDtcbiAgfVxuXG4gIHZhciBpc0FwcGVhciA9ICFjb250ZXh0Ll9pc01vdW50ZWQgfHwgIXZub2RlLmlzUm9vdEluc2VydDtcblxuICBpZiAoaXNBcHBlYXIgJiYgIWFwcGVhciAmJiBhcHBlYXIgIT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3RhcnRDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckNsYXNzXG4gICAgPyBhcHBlYXJDbGFzc1xuICAgIDogZW50ZXJDbGFzcztcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA/IGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgdG9DbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhclRvQ2xhc3NcbiAgICA/IGFwcGVhclRvQ2xhc3NcbiAgICA6IGVudGVyVG9DbGFzcztcblxuICB2YXIgYmVmb3JlRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChiZWZvcmVBcHBlYXIgfHwgYmVmb3JlRW50ZXIpXG4gICAgOiBiZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAodHlwZW9mIGFwcGVhciA9PT0gJ2Z1bmN0aW9uJyA/IGFwcGVhciA6IGVudGVyKVxuICAgIDogZW50ZXI7XG4gIHZhciBhZnRlckVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYWZ0ZXJBcHBlYXIgfHwgYWZ0ZXJFbnRlcilcbiAgICA6IGFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZEhvb2sgPSBpc0FwcGVhclxuICAgID8gKGFwcGVhckNhbmNlbGxlZCB8fCBlbnRlckNhbmNlbGxlZClcbiAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gIHZhciBleHBsaWNpdEVudGVyRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24uZW50ZXJcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBleHBsaWNpdEVudGVyRHVyYXRpb24gIT0gbnVsbCkge1xuICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uLCAnZW50ZXInLCB2bm9kZSk7XG4gIH1cblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgoZW50ZXJIb29rKTtcblxuICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJFbnRlckhvb2sgJiYgYWZ0ZXJFbnRlckhvb2soZWwpO1xuICAgIH1cbiAgICBlbC5fZW50ZXJDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmICghdm5vZGUuZGF0YS5zaG93KSB7XG4gICAgLy8gcmVtb3ZlIHBlbmRpbmcgbGVhdmUgZWxlbWVudCBvbiBlbnRlciBieSBpbmplY3RpbmcgYW4gaW5zZXJ0IGhvb2tcbiAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHBlbmRpbmdOb2RlID0gcGFyZW50ICYmIHBhcmVudC5fcGVuZGluZyAmJiBwYXJlbnQuX3BlbmRpbmdbdm5vZGUua2V5XTtcbiAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxuICAgICAgICBwZW5kaW5nTm9kZS50YWcgPT09IHZub2RlLnRhZyAmJlxuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2JcbiAgICAgICkge1xuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2IoKTtcbiAgICAgIH1cbiAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHN0YXJ0IGVudGVyIHRyYW5zaXRpb25cbiAgYmVmb3JlRW50ZXJIb29rICYmIGJlZm9yZUVudGVySG9vayhlbCk7XG4gIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodm5vZGUuZGF0YS5zaG93KSB7XG4gICAgdG9nZ2xlRGlzcGxheSAmJiB0b2dnbGVEaXNwbGF5KCk7XG4gICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICB9XG5cbiAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgY2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWF2ZSAodm5vZGUsIHJtKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpKSB7XG4gICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fZW50ZXJDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBybSgpXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNzcyA9IGRhdGEuY3NzO1xuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XG4gIHZhciBsZWF2ZVRvQ2xhc3MgPSBkYXRhLmxlYXZlVG9DbGFzcztcbiAgdmFyIGxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVMZWF2ZSA9IGRhdGEuYmVmb3JlTGVhdmU7XG4gIHZhciBsZWF2ZSA9IGRhdGEubGVhdmU7XG4gIHZhciBhZnRlckxlYXZlID0gZGF0YS5hZnRlckxlYXZlO1xuICB2YXIgbGVhdmVDYW5jZWxsZWQgPSBkYXRhLmxlYXZlQ2FuY2VsbGVkO1xuICB2YXIgZGVsYXlMZWF2ZSA9IGRhdGEuZGVsYXlMZWF2ZTtcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgobGVhdmUpO1xuXG4gIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24ubGVhdmVcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24sICdsZWF2ZScsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5fcGVuZGluZykge1xuICAgICAgZWwucGFyZW50Tm9kZS5fcGVuZGluZ1t2bm9kZS5rZXldID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICB9XG4gICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwpO1xuICAgIH1cbiAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmIChkZWxheUxlYXZlKSB7XG4gICAgZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xuICB9IGVsc2Uge1xuICAgIHBlcmZvcm1MZWF2ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlICgpIHtcbiAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHJlY29yZCBsZWF2aW5nIGVsZW1lbnRcbiAgICBpZiAoIXZub2RlLmRhdGEuc2hvdykge1xuICAgICAgKGVsLnBhcmVudE5vZGUuX3BlbmRpbmcgfHwgKGVsLnBhcmVudE5vZGUuX3BlbmRpbmcgPSB7fSkpWyh2bm9kZS5rZXkpXSA9IHZub2RlO1xuICAgIH1cbiAgICBiZWZvcmVMZWF2ZSAmJiBiZWZvcmVMZWF2ZShlbCk7XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQWN0aXZlQ2xhc3MpO1xuICAgICAgbmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlVG9DbGFzcyk7XG4gICAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZER1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRMZWF2ZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdoZW5UcmFuc2l0aW9uRW5kcyhlbCwgdHlwZSwgY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGxlYXZlICYmIGxlYXZlKGVsLCBjYik7XG4gICAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICBjYigpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBvbmx5IHVzZWQgaW4gZGV2IG1vZGVcbmZ1bmN0aW9uIGNoZWNrRHVyYXRpb24gKHZhbCwgbmFtZSwgdm5vZGUpIHtcbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdudW1iZXInKSB7XG4gICAgd2FybihcbiAgICAgIFwiPHRyYW5zaXRpb24+IGV4cGxpY2l0IFwiICsgbmFtZSArIFwiIGR1cmF0aW9uIGlzIG5vdCBhIHZhbGlkIG51bWJlciAtIFwiICtcbiAgICAgIFwiZ290IFwiICsgKEpTT04uc3RyaW5naWZ5KHZhbCkpICsgXCIuXCIsXG4gICAgICB2bm9kZS5jb250ZXh0XG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc05hTih2YWwpKSB7XG4gICAgd2FybihcbiAgICAgIFwiPHRyYW5zaXRpb24+IGV4cGxpY2l0IFwiICsgbmFtZSArIFwiIGR1cmF0aW9uIGlzIE5hTiAtIFwiICtcbiAgICAgICd0aGUgZHVyYXRpb24gZXhwcmVzc2lvbiBtaWdodCBiZSBpbmNvcnJlY3QuJyxcbiAgICAgIHZub2RlLmNvbnRleHRcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWREdXJhdGlvbiAodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHRyYW5zaXRpb24gaG9vaydzIGFyZ3VtZW50IGxlbmd0aC4gVGhlIGhvb2sgbWF5IGJlOlxuICogLSBhIG1lcmdlZCBob29rIChpbnZva2VyKSB3aXRoIHRoZSBvcmlnaW5hbCBpbiAuZm5zXG4gKiAtIGEgd3JhcHBlZCBjb21wb25lbnQgbWV0aG9kIChjaGVjayAuX2xlbmd0aClcbiAqIC0gYSBwbGFpbiBmdW5jdGlvbiAoLmxlbmd0aClcbiAqL1xuZnVuY3Rpb24gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aCAoZm4pIHtcbiAgaWYgKGlzVW5kZWYoZm4pKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdmFyIGludm9rZXJGbnMgPSBmbi5mbnM7XG4gIGlmIChpc0RlZihpbnZva2VyRm5zKSkge1xuICAgIC8vIGludm9rZXJcbiAgICByZXR1cm4gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChcbiAgICAgIEFycmF5LmlzQXJyYXkoaW52b2tlckZucylcbiAgICAgICAgPyBpbnZva2VyRm5zWzBdXG4gICAgICAgIDogaW52b2tlckZuc1xuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGZuLl9sZW5ndGggfHwgZm4ubGVuZ3RoKSA+IDFcbiAgfVxufVxuXG5mdW5jdGlvbiBfZW50ZXIgKF8sIHZub2RlKSB7XG4gIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcbiAgICBlbnRlcih2bm9kZSk7XG4gIH1cbn1cblxudmFyIHRyYW5zaXRpb24gPSBpbkJyb3dzZXIgPyB7XG4gIGNyZWF0ZTogX2VudGVyLFxuICBhY3RpdmF0ZTogX2VudGVyLFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSQkMSAodm5vZGUsIHJtKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodm5vZGUuZGF0YS5zaG93ICE9PSB0cnVlKSB7XG4gICAgICBsZWF2ZSh2bm9kZSwgcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBybSgpO1xuICAgIH1cbiAgfVxufSA6IHt9XG5cbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXG4gIGF0dHJzLFxuICBrbGFzcyxcbiAgZXZlbnRzLFxuICBkb21Qcm9wcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb25cbl1cblxuLyogICovXG5cbi8vIHRoZSBkaXJlY3RpdmUgbW9kdWxlIHNob3VsZCBiZSBhcHBsaWVkIGxhc3QsIGFmdGVyIGFsbFxuLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cbnZhciBtb2R1bGVzID0gcGxhdGZvcm1Nb2R1bGVzLmNvbmNhdChiYXNlTW9kdWxlcyk7XG5cbnZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xuXG4vKipcbiAqIE5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBsaWtlIGF0dGFjaGluZ1xuICogcHJvcGVydGllcyB0byBFbGVtZW50cy5cbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChpc0lFOSkge1xuICAvLyBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L2ludGVybmV0LWV4cGxvcmVyLTktb25pbnB1dC9cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGVsICYmIGVsLnZtb2RlbCkge1xuICAgICAgdHJpZ2dlcihlbCwgJ2lucHV0Jyk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGRpcmVjdGl2ZSA9IHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIGluc2VydGVkIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIC8vICM2OTAzXG4gICAgICBpZiAob2xkVm5vZGUuZWxtICYmICFvbGRWbm9kZS5lbG0uX3ZPcHRpb25zKSB7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpcmVjdGl2ZS5jb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgfVxuICAgICAgZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodm5vZGUudGFnID09PSAndGV4dGFyZWEnIHx8IGlzVGV4dElucHV0VHlwZShlbC50eXBlKSkge1xuICAgICAgZWwuX3ZNb2RpZmllcnMgPSBiaW5kaW5nLm1vZGlmaWVycztcbiAgICAgIGlmICghYmluZGluZy5tb2RpZmllcnMubGF6eSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLy8gU2FmYXJpIDwgMTAuMiAmIFVJV2ViVmlldyBkb2Vzbid0IGZpcmUgY29tcG9zaXRpb25lbmQgd2hlblxuICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXG4gICAgICAgIC8vIHRoaXMgYWxzbyBmaXhlcyB0aGUgaXNzdWUgd2hlcmUgc29tZSBicm93c2VycyBlLmcuIGlPUyBDaHJvbWVcbiAgICAgICAgLy8gZmlyZXMgXCJjaGFuZ2VcIiBpbnN0ZWFkIG9mIFwiaW5wdXRcIiBvbiBhdXRvY29tcGxldGUuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGlzSUU5KSB7XG4gICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgLy8gaW4gY2FzZSB0aGUgb3B0aW9ucyByZW5kZXJlZCBieSB2LWZvciBoYXZlIGNoYW5nZWQsXG4gICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHZhbHVlIGlzIG91dC1vZi1zeW5jIHdpdGggdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgICAvLyBkZXRlY3Qgc3VjaCBjYXNlcyBhbmQgZmlsdGVyIG91dCB2YWx1ZXMgdGhhdCBubyBsb25nZXIgaGFzIGEgbWF0Y2hpbmdcbiAgICAgIC8vIG9wdGlvbiBpbiB0aGUgRE9NLlxuICAgICAgdmFyIHByZXZPcHRpb25zID0gZWwuX3ZPcHRpb25zO1xuICAgICAgdmFyIGN1ck9wdGlvbnMgPSBlbC5fdk9wdGlvbnMgPSBbXS5tYXAuY2FsbChlbC5vcHRpb25zLCBnZXRWYWx1ZSk7XG4gICAgICBpZiAoY3VyT3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCBwcmV2T3B0aW9uc1tpXSk7IH0pKSB7XG4gICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IGlmXG4gICAgICAgIC8vIG5vIG1hdGNoaW5nIG9wdGlvbiBmb3VuZCBmb3IgYXQgbGVhc3Qgb25lIHZhbHVlXG4gICAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZVxuICAgICAgICAgID8gYmluZGluZy52YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiBoYXNOb01hdGNoaW5nT3B0aW9uKHYsIGN1ck9wdGlvbnMpOyB9KVxuICAgICAgICAgIDogYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSAmJiBoYXNOb01hdGNoaW5nT3B0aW9uKGJpbmRpbmcudmFsdWUsIGN1ck9wdGlvbnMpO1xuICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTZWxlY3RlZCAoZWwsIGJpbmRpbmcsIHZtKSB7XG4gIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0lFIHx8IGlzRWRnZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYWN0dWFsbHlTZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm0pO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdHVhbGx5U2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICB2YXIgdmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICB2YXIgaXNNdWx0aXBsZSA9IGVsLm11bHRpcGxlO1xuICBpZiAoaXNNdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIjxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD1cXFwiXCIgKyAoYmluZGluZy5leHByZXNzaW9uKSArIFwiXFxcIj4gXCIgK1xuICAgICAgXCJleHBlY3RzIGFuIEFycmF5IHZhbHVlIGZvciBpdHMgYmluZGluZywgYnV0IGdvdCBcIiArIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHNlbGVjdGVkLCBvcHRpb247XG4gIGZvciAodmFyIGkgPSAwLCBsID0gZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvcHRpb24gPSBlbC5vcHRpb25zW2ldO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBzZWxlY3RlZCA9IGxvb3NlSW5kZXhPZih2YWx1ZSwgZ2V0VmFsdWUob3B0aW9uKSkgPiAtMTtcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobG9vc2VFcXVhbChnZXRWYWx1ZShvcHRpb24pLCB2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGVsLnNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICBlbC5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCB2YWx1ZSk7IH0pXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlIChvcHRpb24pIHtcbiAgcmV0dXJuICdfdmFsdWUnIGluIG9wdGlvblxuICAgID8gb3B0aW9uLl92YWx1ZVxuICAgIDogb3B0aW9uLnZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydCAoZSkge1xuICBlLnRhcmdldC5jb21wb3NpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kIChlKSB7XG4gIC8vIHByZXZlbnQgdHJpZ2dlcmluZyBhbiBpbnB1dCBldmVudCBmb3Igbm8gcmVhc29uXG4gIGlmICghZS50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybiB9XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICBlLmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKTtcbiAgZWwuZGlzcGF0Y2hFdmVudChlKTtcbn1cblxuLyogICovXG5cbi8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgcG9zc2libGUgdHJhbnNpdGlvbiBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHJvb3RcbmZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XG4gIHJldHVybiB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJiAoIXZub2RlLmRhdGEgfHwgIXZub2RlLmRhdGEudHJhbnNpdGlvbilcbiAgICA/IGxvY2F0ZU5vZGUodm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKVxuICAgIDogdm5vZGVcbn1cblxudmFyIHNob3cgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgPVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJycgOiBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIGlmICh2YWx1ZSAmJiB0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IG9yaWdpbmFsRGlzcGxheTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBvcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcbiAgICB2YXIgb2xkVmFsdWUgPSByZWYub2xkVmFsdWU7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXZhbHVlID09PSAhb2xkVmFsdWUpIHsgcmV0dXJuIH1cbiAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xuICAgIHZhciB0cmFuc2l0aW9uJCQxID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLnRyYW5zaXRpb247XG4gICAgaWYgKHRyYW5zaXRpb24kJDEpIHtcbiAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IGVsLl9fdk9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKFxuICAgIGVsLFxuICAgIGJpbmRpbmcsXG4gICAgdm5vZGUsXG4gICAgb2xkVm5vZGUsXG4gICAgaXNEZXN0cm95XG4gICkge1xuICAgIGlmICghaXNEZXN0cm95KSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgIH1cbiAgfVxufVxuXG52YXIgcGxhdGZvcm1EaXJlY3RpdmVzID0ge1xuICBtb2RlbDogZGlyZWN0aXZlLFxuICBzaG93OiBzaG93XG59XG5cbi8qICAqL1xuXG4vLyBQcm92aWRlcyB0cmFuc2l0aW9uIHN1cHBvcnQgZm9yIGEgc2luZ2xlIGVsZW1lbnQvY29tcG9uZW50LlxuLy8gc3VwcG9ydHMgdHJhbnNpdGlvbiBtb2RlIChvdXQtaW4gLyBpbi1vdXQpXG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSB7XG4gIG5hbWU6IFN0cmluZyxcbiAgYXBwZWFyOiBCb29sZWFuLFxuICBjc3M6IEJvb2xlYW4sXG4gIG1vZGU6IFN0cmluZyxcbiAgdHlwZTogU3RyaW5nLFxuICBlbnRlckNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJUb0NsYXNzOiBTdHJpbmcsXG4gIGxlYXZlVG9DbGFzczogU3RyaW5nLFxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICBkdXJhdGlvbjogW051bWJlciwgU3RyaW5nLCBPYmplY3RdXG59O1xuXG4vLyBpbiBjYXNlIHRoZSBjaGlsZCBpcyBhbHNvIGFuIGFic3RyYWN0IGNvbXBvbmVudCwgZS5nLiA8a2VlcC1hbGl2ZT5cbi8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG5mdW5jdGlvbiBnZXRSZWFsQ2hpbGQgKHZub2RlKSB7XG4gIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICByZXR1cm4gZ2V0UmVhbENoaWxkKGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoY29tcE9wdGlvbnMuY2hpbGRyZW4pKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUcmFuc2l0aW9uRGF0YSAoY29tcCkge1xuICB2YXIgZGF0YSA9IHt9O1xuICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XG4gIC8vIHByb3BzXG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLnByb3BzRGF0YSkge1xuICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcbiAgfVxuICAvLyBldmVudHMuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xuICB2YXIgbGlzdGVuZXJzID0gb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBmb3IgKHZhciBrZXkkMSBpbiBsaXN0ZW5lcnMpIHtcbiAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVyIChoLCByYXdDaGlsZCkge1xuICBpZiAoL1xcZC1rZWVwLWFsaXZlJC8udGVzdChyYXdDaGlsZC50YWcpKSB7XG4gICAgcmV0dXJuIGgoJ2tlZXAtYWxpdmUnLCB7XG4gICAgICBwcm9wczogcmF3Q2hpbGQuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhcmVudFRyYW5zaXRpb24gKHZub2RlKSB7XG4gIHdoaWxlICgodm5vZGUgPSB2bm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHZub2RlLmRhdGEudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTYW1lQ2hpbGQgKGNoaWxkLCBvbGRDaGlsZCkge1xuICByZXR1cm4gb2xkQ2hpbGQua2V5ID09PSBjaGlsZC5rZXkgJiYgb2xkQ2hpbGQudGFnID09PSBjaGlsZC50YWdcbn1cblxudmFyIFRyYW5zaXRpb24gPSB7XG4gIG5hbWU6ICd0cmFuc2l0aW9uJyxcbiAgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCB0ZXh0IG5vZGVzIChwb3NzaWJsZSB3aGl0ZXNwYWNlcylcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50YWcgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpOyB9KTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2FybiBtdWx0aXBsZSBlbGVtZW50c1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICc8dHJhbnNpdGlvbj4gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHNpbmdsZSBlbGVtZW50LiBVc2UgJyArXG4gICAgICAgICc8dHJhbnNpdGlvbi1ncm91cD4gZm9yIGxpc3RzLicsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgbW9kZSA9IHRoaXMubW9kZTtcblxuICAgIC8vIHdhcm4gaW52YWxpZCBtb2RlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIG1vZGUgJiYgbW9kZSAhPT0gJ2luLW91dCcgJiYgbW9kZSAhPT0gJ291dC1pbidcbiAgICApIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAnICsgbW9kZSxcbiAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xuXG4gICAgLy8gaWYgdGhpcyBpcyBhIGNvbXBvbmVudCByb290IG5vZGUgYW5kIHRoZSBjb21wb25lbnQnc1xuICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxuICAgIGlmIChoYXNQYXJlbnRUcmFuc2l0aW9uKHRoaXMuJHZub2RlKSkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdHJhbnNpdGlvbiBkYXRhIHRvIGNoaWxkXG4gICAgLy8gdXNlIGdldFJlYWxDaGlsZCgpIHRvIGlnbm9yZSBhYnN0cmFjdCBjb21wb25lbnRzIGUuZy4ga2VlcC1hbGl2ZVxuICAgIHZhciBjaGlsZCA9IGdldFJlYWxDaGlsZChyYXdDaGlsZCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xlYXZpbmcpIHtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgYSBrZXkgdGhhdCBpcyB1bmlxdWUgdG8gdGhlIHZub2RlIHR5cGUgYW5kIHRvIHRoaXMgdHJhbnNpdGlvblxuICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcbiAgICAvLyBkdXJpbmcgZW50ZXJpbmcuXG4gICAgdmFyIGlkID0gXCJfX3RyYW5zaXRpb24tXCIgKyAodGhpcy5fdWlkKSArIFwiLVwiO1xuICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXG4gICAgICA/IGNoaWxkLmlzQ29tbWVudFxuICAgICAgICA/IGlkICsgJ2NvbW1lbnQnXG4gICAgICAgIDogaWQgKyBjaGlsZC50YWdcbiAgICAgIDogaXNQcmltaXRpdmUoY2hpbGQua2V5KVxuICAgICAgICA/IChTdHJpbmcoY2hpbGQua2V5KS5pbmRleE9mKGlkKSA9PT0gMCA/IGNoaWxkLmtleSA6IGlkICsgY2hpbGQua2V5KVxuICAgICAgICA6IGNoaWxkLmtleTtcblxuICAgIHZhciBkYXRhID0gKGNoaWxkLmRhdGEgfHwgKGNoaWxkLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG4gICAgdmFyIG9sZFJhd0NoaWxkID0gdGhpcy5fdm5vZGU7XG4gICAgdmFyIG9sZENoaWxkID0gZ2V0UmVhbENoaWxkKG9sZFJhd0NoaWxkKTtcblxuICAgIC8vIG1hcmsgdi1zaG93XG4gICAgLy8gc28gdGhhdCB0aGUgdHJhbnNpdGlvbiBtb2R1bGUgY2FuIGhhbmQgb3ZlciB0aGUgY29udHJvbCB0byB0aGUgZGlyZWN0aXZlXG4gICAgaWYgKGNoaWxkLmRhdGEuZGlyZWN0aXZlcyAmJiBjaGlsZC5kYXRhLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSAnc2hvdyc7IH0pKSB7XG4gICAgICBjaGlsZC5kYXRhLnNob3cgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG9sZENoaWxkICYmXG4gICAgICBvbGRDaGlsZC5kYXRhICYmXG4gICAgICAhaXNTYW1lQ2hpbGQoY2hpbGQsIG9sZENoaWxkKSAmJlxuICAgICAgIWlzQXN5bmNQbGFjZWhvbGRlcihvbGRDaGlsZCkgJiZcbiAgICAgIC8vICM2Njg3IGNvbXBvbmVudCByb290IGlzIGEgY29tbWVudCBub2RlXG4gICAgICAhKG9sZENoaWxkLmNvbXBvbmVudEluc3RhbmNlICYmIG9sZENoaWxkLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZS5pc0NvbW1lbnQpXG4gICAgKSB7XG4gICAgICAvLyByZXBsYWNlIG9sZCBjaGlsZCB0cmFuc2l0aW9uIGRhdGEgd2l0aCBmcmVzaCBvbmVcbiAgICAgIC8vIGltcG9ydGFudCBmb3IgZHluYW1pYyB0cmFuc2l0aW9ucyFcbiAgICAgIHZhciBvbGREYXRhID0gb2xkQ2hpbGQuZGF0YS50cmFuc2l0aW9uID0gZXh0ZW5kKHt9LCBkYXRhKTtcbiAgICAgIC8vIGhhbmRsZSB0cmFuc2l0aW9uIG1vZGVcbiAgICAgIGlmIChtb2RlID09PSAnb3V0LWluJykge1xuICAgICAgICAvLyByZXR1cm4gcGxhY2Vob2xkZXIgbm9kZSBhbmQgcXVldWUgdXBkYXRlIHdoZW4gbGVhdmUgZmluaXNoZXNcbiAgICAgICAgdGhpcy5fbGVhdmluZyA9IHRydWU7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdhZnRlckxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMkMS5fbGVhdmluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMkMS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2luLW91dCcpIHtcbiAgICAgICAgaWYgKGlzQXN5bmNQbGFjZWhvbGRlcihjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkUmF3Q2hpbGRcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsYXllZExlYXZlO1xuICAgICAgICB2YXIgcGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKCkgeyBkZWxheWVkTGVhdmUoKTsgfTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2FmdGVyRW50ZXInLCBwZXJmb3JtTGVhdmUpO1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhkYXRhLCAnZW50ZXJDYW5jZWxsZWQnLCBwZXJmb3JtTGVhdmUpO1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhvbGREYXRhLCAnZGVsYXlMZWF2ZScsIGZ1bmN0aW9uIChsZWF2ZSkgeyBkZWxheWVkTGVhdmUgPSBsZWF2ZTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhd0NoaWxkXG4gIH1cbn1cblxuLyogICovXG5cbi8vIFByb3ZpZGVzIHRyYW5zaXRpb24gc3VwcG9ydCBmb3IgbGlzdCBpdGVtcy5cbi8vIHN1cHBvcnRzIG1vdmUgdHJhbnNpdGlvbnMgdXNpbmcgdGhlIEZMSVAgdGVjaG5pcXVlLlxuXG4vLyBCZWNhdXNlIHRoZSB2ZG9tJ3MgY2hpbGRyZW4gdXBkYXRlIGFsZ29yaXRobSBpcyBcInVuc3RhYmxlXCIgLSBpLmUuXG4vLyBpdCBkb2Vzbid0IGd1YXJhbnRlZSB0aGUgcmVsYXRpdmUgcG9zaXRpb25pbmcgb2YgcmVtb3ZlZCBlbGVtZW50cyxcbi8vIHdlIGZvcmNlIHRyYW5zaXRpb24tZ3JvdXAgdG8gdXBkYXRlIGl0cyBjaGlsZHJlbiBpbnRvIHR3byBwYXNzZXM6XG4vLyBpbiB0aGUgZmlyc3QgcGFzcywgd2UgcmVtb3ZlIGFsbCBub2RlcyB0aGF0IG5lZWQgdG8gYmUgcmVtb3ZlZCxcbi8vIHRyaWdnZXJpbmcgdGhlaXIgbGVhdmluZyB0cmFuc2l0aW9uOyBpbiB0aGUgc2Vjb25kIHBhc3MsIHdlIGluc2VydC9tb3ZlXG4vLyBpbnRvIHRoZSBmaW5hbCBkZXNpcmVkIHN0YXRlLiBUaGlzIHdheSBpbiB0aGUgc2Vjb25kIHBhc3MgcmVtb3ZlZFxuLy8gbm9kZXMgd2lsbCByZW1haW4gd2hlcmUgdGhleSBzaG91bGQgYmUuXG5cbnZhciBwcm9wcyA9IGV4dGVuZCh7XG4gIHRhZzogU3RyaW5nLFxuICBtb3ZlQ2xhc3M6IFN0cmluZ1xufSwgdHJhbnNpdGlvblByb3BzKTtcblxuZGVsZXRlIHByb3BzLm1vZGU7XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSB7XG4gIHByb3BzOiBwcm9wcyxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0YWcgPSB0aGlzLnRhZyB8fCB0aGlzLiR2bm9kZS5kYXRhLnRhZyB8fCAnc3Bhbic7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHByZXZDaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICB2YXIgcmF3Q2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgdHJhbnNpdGlvbkRhdGEgPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IHJhd0NoaWxkcmVuW2ldO1xuICAgICAgaWYgKGMudGFnKSB7XG4gICAgICAgIGlmIChjLmtleSAhPSBudWxsICYmIFN0cmluZyhjLmtleSkuaW5kZXhPZignX192bGlzdCcpICE9PSAwKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjKTtcbiAgICAgICAgICBtYXBbYy5rZXldID0gY1xuICAgICAgICAgIDsoYy5kYXRhIHx8IChjLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSBjLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICAgICAgdmFyIG5hbWUgPSBvcHRzID8gKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcgfHwgJycpIDogYy50YWc7XG4gICAgICAgICAgd2FybigoXCI8dHJhbnNpdGlvbi1ncm91cD4gY2hpbGRyZW4gbXVzdCBiZSBrZXllZDogPFwiICsgbmFtZSArIFwiPlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldkNoaWxkcmVuKSB7XG4gICAgICB2YXIga2VwdCA9IFtdO1xuICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IHByZXZDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgIHZhciBjJDEgPSBwcmV2Q2hpbGRyZW5baSQxXTtcbiAgICAgICAgYyQxLmRhdGEudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICBjJDEuZGF0YS5wb3MgPSBjJDEuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAobWFwW2MkMS5rZXldKSB7XG4gICAgICAgICAga2VwdC5wdXNoKGMkMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGMkMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMua2VwdCA9IGgodGFnLCBudWxsLCBrZXB0KTtcbiAgICAgIHRoaXMucmVtb3ZlZCA9IHJlbW92ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBjaGlsZHJlbilcbiAgfSxcblxuICBiZWZvcmVVcGRhdGU6IGZ1bmN0aW9uIGJlZm9yZVVwZGF0ZSAoKSB7XG4gICAgLy8gZm9yY2UgcmVtb3ZpbmcgcGFzc1xuICAgIHRoaXMuX19wYXRjaF9fKFxuICAgICAgdGhpcy5fdm5vZGUsXG4gICAgICB0aGlzLmtlcHQsXG4gICAgICBmYWxzZSwgLy8gaHlkcmF0aW5nXG4gICAgICB0cnVlIC8vIHJlbW92ZU9ubHkgKCFpbXBvcnRhbnQsIGF2b2lkcyB1bm5lY2Vzc2FyeSBtb3ZlcylcbiAgICApO1xuICAgIHRoaXMuX3Zub2RlID0gdGhpcy5rZXB0O1xuICB9LFxuXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQgKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuO1xuICAgIHZhciBtb3ZlQ2xhc3MgPSB0aGlzLm1vdmVDbGFzcyB8fCAoKHRoaXMubmFtZSB8fCAndicpICsgJy1tb3ZlJyk7XG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMuaGFzTW92ZShjaGlsZHJlblswXS5lbG0sIG1vdmVDbGFzcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdlIGRpdmlkZSB0aGUgd29yayBpbnRvIHRocmVlIGxvb3BzIHRvIGF2b2lkIG1peGluZyBET00gcmVhZHMgYW5kIHdyaXRlc1xuICAgIC8vIGluIGVhY2ggaXRlcmF0aW9uIC0gd2hpY2ggaGVscHMgcHJldmVudCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIGNoaWxkcmVuLmZvckVhY2goY2FsbFBlbmRpbmdDYnMpO1xuICAgIGNoaWxkcmVuLmZvckVhY2gocmVjb3JkUG9zaXRpb24pO1xuICAgIGNoaWxkcmVuLmZvckVhY2goYXBwbHlUcmFuc2xhdGlvbik7XG5cbiAgICAvLyBmb3JjZSByZWZsb3cgdG8gcHV0IGV2ZXJ5dGhpbmcgaW4gcG9zaXRpb25cbiAgICAvLyBhc3NpZ24gdG8gdGhpcyB0byBhdm9pZCBiZWluZyByZW1vdmVkIGluIHRyZWUtc2hha2luZ1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHRoaXMuX3JlZmxvdyA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgaWYgKGMuZGF0YS5tb3ZlZCkge1xuICAgICAgICB2YXIgZWwgPSBjLmVsbTtcbiAgICAgICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGVsLl9tb3ZlQ2IgPSBmdW5jdGlvbiBjYiAoZSkge1xuICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBjYik7XG4gICAgICAgICAgICBlbC5fbW92ZUNiID0gbnVsbDtcbiAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYXNNb3ZlOiBmdW5jdGlvbiBoYXNNb3ZlIChlbCwgbW92ZUNsYXNzKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFzVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHRoaXMuX2hhc01vdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01vdmVcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCB3aGV0aGVyIGFuIGVsZW1lbnQgd2l0aCB0aGUgbW92ZSBjbGFzcyBhcHBsaWVkIGhhc1xuICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zLiBTaW5jZSB0aGUgZWxlbWVudCBtYXkgYmUgaW5zaWRlIGFuIGVudGVyaW5nXG4gICAgICAvLyB0cmFuc2l0aW9uIGF0IHRoaXMgdmVyeSBtb21lbnQsIHdlIG1ha2UgYSBjbG9uZSBvZiBpdCBhbmQgcmVtb3ZlXG4gICAgICAvLyBhbGwgb3RoZXIgdHJhbnNpdGlvbiBjbGFzc2VzIGFwcGxpZWQgdG8gZW5zdXJlIG9ubHkgdGhlIG1vdmUgY2xhc3NcbiAgICAgIC8vIGlzIGFwcGxpZWQuXG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUoKTtcbiAgICAgIGlmIChlbC5fdHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICAgICAgZWwuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykgeyByZW1vdmVDbGFzcyhjbG9uZSwgY2xzKTsgfSk7XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyhjbG9uZSwgbW92ZUNsYXNzKTtcbiAgICAgIGNsb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLiRlbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB2YXIgaW5mbyA9IGdldFRyYW5zaXRpb25JbmZvKGNsb25lKTtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgIHJldHVybiAodGhpcy5faGFzTW92ZSA9IGluZm8uaGFzVHJhbnNmb3JtKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsUGVuZGluZ0NicyAoYykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGMuZWxtLl9tb3ZlQ2IpIHtcbiAgICBjLmVsbS5fbW92ZUNiKCk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjLmVsbS5fZW50ZXJDYikge1xuICAgIGMuZWxtLl9lbnRlckNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjb3JkUG9zaXRpb24gKGMpIHtcbiAgYy5kYXRhLm5ld1BvcyA9IGMuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuXG5mdW5jdGlvbiBhcHBseVRyYW5zbGF0aW9uIChjKSB7XG4gIHZhciBvbGRQb3MgPSBjLmRhdGEucG9zO1xuICB2YXIgbmV3UG9zID0gYy5kYXRhLm5ld1BvcztcbiAgdmFyIGR4ID0gb2xkUG9zLmxlZnQgLSBuZXdQb3MubGVmdDtcbiAgdmFyIGR5ID0gb2xkUG9zLnRvcCAtIG5ld1Bvcy50b3A7XG4gIGlmIChkeCB8fCBkeSkge1xuICAgIGMuZGF0YS5tb3ZlZCA9IHRydWU7XG4gICAgdmFyIHMgPSBjLmVsbS5zdHlsZTtcbiAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyBkeCArIFwicHgsXCIgKyBkeSArIFwicHgpXCI7XG4gICAgcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xuICB9XG59XG5cbnZhciBwbGF0Zm9ybUNvbXBvbmVudHMgPSB7XG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIFRyYW5zaXRpb25Hcm91cDogVHJhbnNpdGlvbkdyb3VwXG59XG5cbi8qICAqL1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHNwZWNpZmljIHV0aWxzXG5WdWUuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWcgPSBpc1Jlc2VydmVkVGFnO1xuVnVlLmNvbmZpZy5pc1Jlc2VydmVkQXR0ciA9IGlzUmVzZXJ2ZWRBdHRyO1xuVnVlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2UgPSBnZXRUYWdOYW1lc3BhY2U7XG5WdWUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQgPSBpc1Vua25vd25FbGVtZW50O1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbmV4dGVuZChWdWUub3B0aW9ucy5kaXJlY3RpdmVzLCBwbGF0Zm9ybURpcmVjdGl2ZXMpO1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIHBsYXRmb3JtQ29tcG9uZW50cyk7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gaW5Ccm93c2VyID8gcGF0Y2ggOiBub29wO1xuXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXG5WdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIGVsID0gZWwgJiYgaW5Ccm93c2VyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gbW91bnRDb21wb25lbnQodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbi8vIGRldnRvb2xzIGdsb2JhbCBob29rXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGluQnJvd3Nlcikge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29uZmlnLmRldnRvb2xzKSB7XG4gICAgICBpZiAoZGV2dG9vbHMpIHtcbiAgICAgICAgZGV2dG9vbHMuZW1pdCgnaW5pdCcsIFZ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgaXNDaHJvbWVcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgICAnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBleHRlbnNpb24gZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArXG4gICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtZGV2dG9vbHMnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICBjb25maWcucHJvZHVjdGlvblRpcCAhPT0gZmFsc2UgJiZcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXG4gICAgICAgIFwiWW91IGFyZSBydW5uaW5nIFZ1ZSBpbiBkZXZlbG9wbWVudCBtb2RlLlxcblwiICtcbiAgICAgICAgXCJNYWtlIHN1cmUgdG8gdHVybiBvbiBwcm9kdWN0aW9uIG1vZGUgd2hlbiBkZXBsb3lpbmcgZm9yIHByb2R1Y3Rpb24uXFxuXCIgK1xuICAgICAgICBcIlNlZSBtb3JlIHRpcHMgYXQgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZGVwbG95bWVudC5odG1sXCJcbiAgICAgICk7XG4gICAgfVxuICB9LCAwKTtcbn1cblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL2ZiYTczNGUwYTQzMDZkZjNlOTc5OTk3NjExMzUxYzQ5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvMDQ5MDk3MWRjOGEyODM5MWE2OWYxMTQ3NTUyOThkYWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy9iOTljNzY2NDYzMWMxMzA4Yzg0YmE5OTk2NDQ3MjlhNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzLzlhZWE5M2YxYzNjYjE4NDA0YjljNDRiYTBhYTM2YmRlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvNjUxZjI3ZjMyMTI0NjE2M2Y2YmNkNDMzZTM2ZGJhNTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy82OTEwNmQzM2Y5ZjI5OGZiYTZjOGFkOWE3OTg5YTJkOC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL2Y3NGZkZDFjOTM4MTFjY2VjYTBjODMxMjgzMDBiOGE2LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZ3MvMTBkYTdmOGZiOTQzZjRjNDM2NzBlNWY3NzZhMjMzYzMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1ncy8wMjE0MGMzYTYxZmI2ODU1ZWMzY2UwMzhmZTVlZjY3NC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL2FhNDkwYzJiMzU2NjA3NWE2M2U4YzYzMzE2NTdkYzZlLmpwZ1wiOyIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgSW5kZXggZnJvbSBcIi4vaW5kZXgudnVlXCI7XHJcblxyXG5uZXcgVnVlKHtcclxuICAgIGVsOiBcIiNhcHBcIixcclxuICAgIGNvbXBvbmVudHM6IHtJbmRleH0sXHJcbiAgICByZW5kZXIgKGgpIHtcclxuICAgICAgcmV0dXJuIGgoJ0luZGV4JylcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE0OWZhYjcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvb3V3ZWkvRGVza3RvcC9BUG9wdXBzLUdhbGxlcnktRGVtby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGE0OWZhYjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGE0OWZhYjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQ5ZmFiNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTQ5ZmFiNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQ5ZmFiNyZcIiJdLCJzb3VyY2VSb290IjoiIn0=