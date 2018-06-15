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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(1));

var _emojiPickerUmd = _interopRequireDefault(__webpack_require__(6));

var _ExampleComponent = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.use(_emojiPickerUmd.default);

_vue.default.component('ExampleComponent', _ExampleComponent.default);

var app = new _vue.default({
  el: '#app'
});
var _default = app;
exports.default = _default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
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
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
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
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
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
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
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
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
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
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
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
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
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

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
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
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
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
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
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
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
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
    get: function reactiveGetter () {
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
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
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
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
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
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
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
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
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
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
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
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
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

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
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
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
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
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
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
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
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
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
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
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
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
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
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
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
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
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
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
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
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

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
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

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
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
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
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
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
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
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
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
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
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
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
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
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
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
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
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
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
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

function lifecycleMixin (Vue) {
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
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
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
      return
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

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
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
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
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
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
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

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
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

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
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
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
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
  queue.sort(function (a, b) { return a.id - b.id; });

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
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
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

function callUpdatedHooks (queue) {
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
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
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
function queueWatcher (watcher) {
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
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
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
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
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
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
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
Watcher.prototype.cleanupDeps = function cleanupDeps () {
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
Watcher.prototype.update = function update () {
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
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
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
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
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

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
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
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
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

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
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
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
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

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
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
  this.slots = function () { return resolveSlots(children, parent); };

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
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
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
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
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

  destroy: function destroy (vnode) {
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

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
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
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
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
    return createFunctionalComponent(Ctor, propsData, data, context, children)
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
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
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
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
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
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
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
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
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
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    {
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
      {
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
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
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
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
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
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
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

function resolveConstructorOptions (Ctor) {
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
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
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
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
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

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
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
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
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
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
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
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
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
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
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

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
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

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
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
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
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
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
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
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
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
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
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
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

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

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
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

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
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
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
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

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
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
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
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

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
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
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
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

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
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
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
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

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
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

    {
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
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
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

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
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
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
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
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
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
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
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
            break
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
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
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
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
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
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

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
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
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

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
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
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
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

function setAttr (el, key, value) {
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
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
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

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
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
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
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
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
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

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
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
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
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
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
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


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
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
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
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
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

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
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
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
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
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

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
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
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
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

function getTransitionInfo (el, expectedType) {
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
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
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
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

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
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
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

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
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

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

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

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
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
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

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
  inserted: function inserted (el, binding, vnode, oldVnode) {
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

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
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
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
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

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
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
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
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
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
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
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
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

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
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
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
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

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
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
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
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
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
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
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
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
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(3).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 4 */
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
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
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
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
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
        registerImmediate = function(handle) {
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
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(5)))

/***/ }),
/* 5 */
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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(typeof self !== 'undefined' ? self : void 0, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "+xUi");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "+rLv":
      /***/
      function rLv(module, exports, __webpack_require__) {
        var document = __webpack_require__("dyZX").document;

        module.exports = document && document.documentElement;
        /***/
      },

      /***/
      "+sFo":
      /***/
      function sFo(module) {
        module.exports = [{
          "emoji": "👍",
          "description": "thumbs up",
          "category": "Frequently Used",
          "aliases": ["+1", "thumbsup"],
          "tags": ["approve", "ok"],
          "unicode_version": "6.0",
          "ios_version": "6.0"
        }, {
          "emoji": "👌",
          "description": "OK hand",
          "category": "Frequently Used",
          "aliases": ["ok_hand"],
          "tags": [],
          "unicode_version": "6.0",
          "ios_version": "6.0"
        }, {
          "emoji": "🍻",
          "description": "clinking beer mugs",
          "category": "Frequently Used",
          "aliases": ["beers"],
          "tags": ["drinks"],
          "unicode_version": "6.0",
          "ios_version": "6.0"
        }, {
          "emoji": "😄",
          "description": "smiling face with open mouth & smiling eyes",
          "category": "Frequently Used",
          "aliases": ["smile"],
          "tags": ["happy", "joy", "laugh", "pleased"],
          "unicode_version": "6.0",
          "ios_version": "6.0"
        }, {
          "emoji": "☹️",
          "description": "frowning face",
          "category": "Frequently Used",
          "aliases": ["Frequently Used"],
          "tags": [],
          "unicode_version": "",
          "ios_version": "9.1"
        }, {
          "emoji": "🍾",
          "description": "bottle with popping cork",
          "category": "Frequently Used",
          "aliases": ["champagne"],
          "tags": ["bottle", "bubbly", "celebration"],
          "unicode_version": "8.0",
          "ios_version": "9.1"
        }, {
          "emoji": "🤔",
          "description": "thinking face",
          "category": "Frequently Used",
          "aliases": ["thinking"],
          "tags": [],
          "unicode_version": "8.0",
          "ios_version": "9.1"
        }, {
          "emoji": "🍅",
          "description": "tomato",
          "category": "Frequently Used",
          "aliases": ["tomato"],
          "tags": [],
          "unicode_version": "6.0",
          "ios_version": "6.0"
        }, {
          "emoji": "🍷",
          "description": "wine glass",
          "category": "Frequently Used",
          "aliases": ["wine_glass"],
          "tags": [],
          "unicode_version": "6.0",
          "ios_version": "6.0"
        }];
        /***/
      },

      /***/
      "+xUi":
      /***/
      function xUi(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js


        var setPublicPath = __webpack_require__("HrLf"); // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js


        var es6_function_name = __webpack_require__("f3/d"); // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/zaichaopan/Desktop/code/emoji-picker/node_modules/.cache/vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker.vue?vue&type=template&id=0003c6a8


        var render = function render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('click-outside', {
            attrs: {
              "do": _vm.close
            }
          }, [_c('div', {
            staticClass: "emoji-picker"
          }, [_c('div', {
            ref: "emojiInvoker",
            staticClass: "emoji-invoker"
          }, [_c('span', {
            ref: "emojiInvokerIcon",
            staticClass: "invoker-icon pointer",
            on: {
              "click": _vm.toggleDropdown
            }
          }, [_vm.isInvokerHovered || _vm.show ? _c('span', {
            domProps: {
              "innerHTML": _vm._s(_vm.emojiInvokerOpen)
            },
            on: {
              "mouseleave": function mouseleave($event) {
                _vm.isInvokerHovered = false;
              }
            }
          }) : _c('span', {
            staticClass: "show",
            domProps: {
              "innerHTML": _vm._s(_vm.emojiInvokerClose)
            },
            on: {
              "mouseenter": function mouseenter($event) {
                _vm.isInvokerHovered = true;
              }
            }
          }, [_vm._v(";\n                ")])])]), _c('div', {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }],
            ref: "emojiDropdown",
            staticClass: "emoji-dropdown"
          }, [_c('div', {
            staticClass: "header"
          }, _vm._l(_vm.categories, function (val, key) {
            return _c('span', {
              key: key,
              staticClass: "pointer",
              class: {
                active: key === _vm.scrolledTo
              },
              attrs: {
                "title": val
              },
              domProps: {
                "innerHTML": _vm._s(val)
              },
              on: {
                "click": function click($event) {
                  _vm.scrollToCategory(key);
                }
              }
            });
          })), _c('div', {
            staticClass: "search"
          }, [_c('span', {
            staticClass: "search-icon",
            domProps: {
              "innerHTML": _vm._s(_vm.searchSVG)
            }
          }), _c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }],
            attrs: {
              "type": "text",
              "placeholder": "Search"
            },
            domProps: {
              "value": _vm.search
            },
            on: {
              "input": function input($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.search = $event.target.value;
              }
            }
          })]), Object.keys(_vm.emojis).length === 0 ? _c('div', {
            ref: "emojis",
            staticClass: "emojis"
          }, [_c('span', {
            staticClass: "result-info"
          }, [_vm._v("No emojis found.")])]) : _c('div', {
            ref: "emojis",
            staticClass: "emojis"
          }, _vm._l(_vm.emojis, function (items, category) {
            return _c('div', {
              key: category
            }, [_c('div', {
              ref: _vm.getCategoryRef(category),
              refInFor: true,
              staticClass: "category"
            }, [_vm._v(_vm._s(category) + "\n                    ")]), _c('div', {
              staticClass: "emoji-list"
            }, _vm._l(items, function (item, index) {
              return _c('span', {
                key: index,
                staticClass: "emoji pointer",
                attrs: {
                  "title": item.aliases
                },
                on: {
                  "click": function click($event) {
                    _vm.selectEmoji(item);
                  },
                  "mouseleave": _vm.handleMouseLeaveEmoji,
                  "mouseenter": function mouseenter($event) {
                    _vm.handleMouseEnterEmoji(item);
                  }
                }
              }, [_vm._v("\n                            " + _vm._s(item.emoji) + "\n                        ")]);
            }))]);
          })), _c('div', {
            staticClass: "footer",
            on: {
              "mouseleave": _vm.handleMouseLeaveFooter
            }
          }, [_vm.hoveredEmoji === null ? _c('div', {
            staticClass: "title"
          }, [_vm._v("\n                    Emoji Deluxe\n                ")]) : _c('div', {
            staticClass: "emoji-preview"
          }, [_c('div', {
            staticClass: "emoji"
          }, [_vm._v("\n                        " + _vm._s(_vm.hoveredEmoji.emoji) + "\n                    ")]), _c('div', {
            staticClass: "alias-container"
          }, [_c('div', {
            staticClass: "title"
          }, [_vm._v("\n                             " + _vm._s(_vm.hoveredEmoji.aliases[0]) + "  \n                        ")]), _c('div', {
            staticClass: "alias"
          }, [_vm._v("\n                            " + _vm._s(":" + _vm.hoveredEmoji.aliases[0] + ":") + "\n                        ")])])]), _c('div', {
            staticClass: "ton-picker"
          }, [_c('div', {
            staticClass: "hands-container"
          }, [_c('div', {
            staticClass: "hands"
          }, _vm._l(_vm.getToneHands(), function (item, index) {
            return item.name === _vm.getDefaultSkinTon().name || _vm.showSkinTonPickers ? _c('span', {
              key: index,
              staticClass: "hand",
              on: {
                "click": function click($event) {
                  _vm.setDefaultSkinTon(item);
                }
              }
            }, [_vm._v("\n                                " + _vm._s(item.emoji) + "\n                            ")]) : _vm._e();
          })), _vm.showSkinTonPickers ? _c('div', {
            staticClass: "tip"
          }, [_vm._v("\n                            Choose you defualt skin ton\n                        ")]) : _vm._e()])])])])])]);
        };

        var staticRenderFns = []; // CONCATENATED MODULE: ./src/components/EmojiPicker.vue?vue&type=template&id=0003c6a8
        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js


        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }));
            }

            ownKeys.forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          }

          return target;
        } // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js


        var es6_array_sort = __webpack_require__("Vd3H"); // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js


        var es6_regexp_split = __webpack_require__("KKXr"); // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js


        var es6_array_iterator = __webpack_require__("yt8O"); // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js


        var es6_object_keys = __webpack_require__("RW0V"); // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js


        var web_dom_iterable = __webpack_require__("rGqo"); // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithHoles.js


        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArrayLimit.js


        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableRest.js


        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js


        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js


        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }

            return arr2;
          }
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js


        function _iterableToArray(iter) {
          if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js


        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        } // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js


        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
        } // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js


        var es6_regexp_search = __webpack_require__("OG14"); // EXTERNAL MODULE: ./node_modules/skin-tone/index.js


        var skin_tone = __webpack_require__("q6hk");

        var skin_tone_default =
        /*#__PURE__*/
        __webpack_require__.n(skin_tone); // EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js


        var popper = __webpack_require__("8L3F"); // CONCATENATED MODULE: ./data/svg.js


        var categories = {
          frequently_used: "\n  <svg style=\"fill:grey; max-height:18px\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 219.15 219.15\"  xml:space=\"preserve\" width=\"24\" height=\"24\"><path d=\"M109.575,0C49.156,0,0.001,49.155,0.001,109.574c0,60.42,49.154,109.576,109.573,109.576 c60.42,0,109.574-49.156,109.574-109.576C219.149,49.155,169.995,0,109.575,0z M109.575,204.15 c-52.148,0-94.573-42.427-94.573-94.576C15.001,57.426,57.427,15,109.575,15c52.148,0,94.574,42.426,94.574,94.574 C204.149,161.724,161.723,204.15,109.575,204.15z\"/><path d=\"M166.112,108.111h-52.051V51.249c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v64.362c0,4.142,3.358,7.5,7.5,7.5 h59.551c4.143,0,7.5-3.358,7.5-7.5C173.612,111.469,170.254,108.111,166.112,108.111z\"/>\n  </svg>",
          people: "\n  <svg style=\"fill:grey; max-height:18px;\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 106.059 106.059\"><path d=\"M90.544,90.542c20.687-20.684,20.685-54.341,0.002-75.024C69.858-5.171,36.199-5.171,15.515,15.512 C-5.173,36.199-5.171,69.858,15.517,90.546C36.199,111.23,69.858,111.23,90.544,90.542z M21.302,21.3 C38.796,3.807,67.261,3.805,84.759,21.302c17.494,17.494,17.492,45.963-0.002,63.455c-17.494,17.494-45.96,17.496-63.455,0.003 C3.804,67.262,3.806,38.794,21.302,21.3z M27,69.865c0,0-2.958-11.438,6.705-8.874c0,0,17.144,9.295,38.651,0 c9.662-2.563,6.705,8.874,6.705,8.874c-5.522,16.959-26.031,15.579-26.031,15.579S32.521,86.824,27,69.865z M33.24,38.671 c0-3.424,2.777-6.201,6.201-6.201c3.423,0,6.2,2.777,6.2,6.201c0,3.426-2.777,6.203-6.2,6.203 C36.017,44.874,33.24,42.096,33.24,38.671z M61.357,38.671c0-3.424,2.779-6.201,6.203-6.201c3.423,0,6.2,2.777,6.2,6.201 c0,3.426-2.776,6.203-6.2,6.203S61.357,42.096,61.357,38.671z\"/></svg>",
          foods: "<svg style=\"fill:grey; max-height:18px\" width=\"24\" height=\"24\" version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.999 511.999\"  xml:space=\"preserve\"><g><g><path d=\"M413.949,155.583c-0.46-0.46-0.97-0.87-1.52-1.24c-0.54-0.36-1.12-0.67-1.72-0.92c-0.61-0.25-1.24-0.44-1.87-0.57 c-3.25-0.66-6.701,0.41-9.03,2.73c-1.86,1.87-2.93,4.44-2.93,7.07c0,0.66,0.07,1.31,0.2,1.96c0.13,0.64,0.32,1.27,0.57,1.87 c0.25,0.6,0.56,1.18,0.92,1.73c0.36,0.54,0.779,1.05,1.24,1.52c1.86,1.86,4.44,2.93,7.07,2.93c0.65,0,1.31-0.07,1.96-0.2 c0.63-0.13,1.26-0.32,1.87-0.57c0.6-0.25,1.18-0.56,1.72-0.92c0.55-0.37,1.06-0.78,1.52-1.24c0.47-0.47,0.88-0.98,1.25-1.52 c0.361-0.55,0.67-1.13,0.92-1.73c0.25-0.6,0.44-1.23,0.57-1.87c0.13-0.65,0.19-1.3,0.19-1.96 C416.879,160.025,415.819,157.444,413.949,155.583z\"/></g></g><g><g> <path d=\"M115.289,385.873c-0.12-0.64-0.32-1.27-0.57-1.87c-0.25-0.6-0.55-1.18-0.91-1.73c-0.37-0.54-0.79-1.06-1.25-1.52 c-0.46-0.46-0.97-0.88-1.52-1.24c-0.54-0.36-1.12-0.67-1.72-0.92c-0.61-0.25-1.24-0.44-1.88-0.57c-1.29-0.26-2.61-0.26-3.9,0 c-0.64,0.13-1.27,0.32-1.87,0.57c-0.61,0.25-1.19,0.56-1.73,0.92c-0.55,0.36-1.06,0.78-1.52,1.24c-0.46,0.46-0.88,0.98-1.24,1.52 c-0.36,0.55-0.67,1.13-0.92,1.73c-0.25,0.6-0.45,1.23-0.57,1.87c-0.13,0.651-0.2,1.3-0.2,1.96c0,0.65,0.07,1.3,0.2,1.95 c0.12,0.64,0.32,1.27,0.57,1.87c0.25,0.6,0.56,1.18,0.92,1.73c0.36,0.54,0.78,1.06,1.24,1.52c0.46,0.46,0.97,0.88,1.52,1.24 c0.54,0.36,1.12,0.67,1.73,0.92c0.6,0.25,1.23,0.44,1.87,0.57s1.3,0.2,1.95,0.2c0.65,0,1.31-0.07,1.95-0.2 c0.64-0.13,1.27-0.32,1.88-0.57c0.6-0.25,1.18-0.56,1.72-0.92c0.55-0.36,1.059-0.78,1.52-1.24c0.46-0.46,0.88-0.98,1.25-1.52 c0.36-0.55,0.66-1.13,0.91-1.73c0.25-0.6,0.45-1.23,0.57-1.87c0.13-0.65,0.2-1.3,0.2-1.95 C115.489,387.173,115.419,386.523,115.289,385.873z\"/> </g> </g> <g> <g> <path d=\"M511.999,222.726c0-14.215-9.228-26.315-22.007-30.624c-1.628-74.155-62.456-133.978-136.994-133.978H159.002 c-74.538,0-135.366,59.823-136.994,133.978C9.228,196.411,0,208.51,0,222.726c0,5.429,1.386,10.626,3.847,15.203 c-0.528,2.767-0.795,5.585-0.795,8.427v0.708c0,14.06,6.519,26.625,16.693,34.833c-10.178,8.275-16.693,20.891-16.693,35.001 c0,15.114,7.475,28.515,18.921,36.702v26.668c0,40.588,33.021,73.608,73.608,73.608h320.836c40.588,0,73.608-33.021,73.608-73.608 v-26.668c11.446-8.186,18.921-21.587,18.921-36.702c0-13.852-6.354-26.385-16.361-34.702c9.983-8.212,16.361-20.656,16.361-34.562 v-0.708c0-2.985-0.294-5.944-0.877-8.845C510.582,233.466,511.999,228.214,511.999,222.726z M44.033,173.229h322.441 c5.523,0,10-4.477,10-10c0-5.523-4.477-10-10-10H49.737c16.896-43.883,59.503-75.106,109.265-75.106h193.996 c62.942,0,114.438,49.953,116.934,112.295H42.068C42.302,184.57,42.968,178.83,44.033,173.229z M23.052,316.896 c0-13.837,11.257-25.094,25.094-25.094h117.298l55.346,50.188H48.146C34.309,341.99,23.052,330.734,23.052,316.896z M24.028,253.951c0.422,0.111,0.847,0.215,1.275,0.309c7.421,1.634,14.68,8.002,22.365,14.744 c1.045,0.917,2.113,1.854,3.206,2.799h-3.081C36.54,271.802,27.019,264.252,24.028,253.951z M332.755,343.703l57.233-51.899 l49.904,0.57l-81.871,74.24L332.755,343.703z M340.616,377.829H295.12l17.467-15.839h10.563L340.616,377.829z M360.215,291.802 l-82.499,74.811l-82.499-74.811H360.215z M300.686,271.802c0.849-0.842,1.677-1.675,2.49-2.493 c9.531-9.587,17.059-17.16,32.89-17.16c15.832,0,23.359,7.573,32.89,17.162c0.812,0.817,1.64,1.65,2.489,2.491H300.686z M140.556,271.802c0.848-0.841,1.677-1.675,2.489-2.492c9.531-9.588,17.059-17.161,32.89-17.161 c15.83,0,23.358,7.573,32.888,17.16c0.813,0.818,1.641,1.651,2.49,2.493H140.556z M416.418,433.875H95.582 c-29.56,0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467,15.839H145.897c-5.523,0-10,4.477-10,10s4.477,10,10,10H467.07 C459.782,418.789,439.828,433.875,416.418,433.875z M470.026,377.829h-94.6l17.467-15.839h77.133V377.829z M463.852,341.992 h-48.906l54.624-49.533c11.135,2.604,19.376,12.665,19.376,24.439C488.946,330.734,477.689,341.992,463.852,341.992z M461.124,271.802c0.087-0.076,0.175-0.151,0.262-0.227c0.034-0.029,0.067-0.058,0.101-0.087c0.114-0.099,0.228-0.199,0.342-0.298 c0.848-0.738,1.682-1.469,2.501-2.187c4.105-3.601,8.089-7.095,12.04-9.819c3.446-2.375,6.868-4.164,10.326-4.925 c0.12-0.027,0.24-0.054,0.359-0.081c0.013-0.003,0.027-0.006,0.04-0.01c0.106-0.025,0.212-0.05,0.317-0.076 c0.022-0.005,0.044-0.011,0.065-0.016c0.094-0.023,0.187-0.046,0.28-0.07c0.047-0.012,0.093-0.024,0.14-0.037 c0.065-0.017,0.131-0.034,0.196-0.052c0.017-0.003,0.032-0.007,0.048-0.012c-2.433,9.276-10.129,16.443-19.691,18.102 c-0.655-0.135-1.33-0.205-2.016-0.205H461.124z M482.395,234.729c-1.555,0.343-3.066,0.773-4.536,1.281 c-10.109,3.489-18.327,10.602-26.283,17.58c-0.145,0.127-0.289,0.254-0.434,0.381c-9.178,8.052-17.923,15.723-29.033,17.834 h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591c-10.213-10.275-22.923-23.062-47.074-23.062 c-24.15,0-36.86,12.786-47.074,23.06c-7.992,8.04-14.576,14.663-25.829,16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593 c-10.213-10.274-22.923-23.06-47.072-23.06c-24.151,0-36.861,12.787-47.074,23.062c-7.991,8.039-14.574,14.661-25.824,16.591 h-7.065c-14.134,0-24.325-8.939-35.113-18.404c-9.248-8.112-18.81-16.501-31.252-19.241c-2.779-0.612-5.274-2.193-7.025-4.453 c-0.352-0.454-0.738-0.872-1.153-1.252c-0.914-1.727-1.428-3.684-1.428-5.727c-0.001-6.788,5.52-12.309,12.307-12.309h447.384 c6.787,0,12.308,5.521,12.308,12.308C492,228.456,487.961,233.503,482.395,234.729z\"/> </g> </g> </svg>",
          nature: "\n  <svg style=\"fill:grey; max-height:18px;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"  xml:space=\"preserve\"  width=\"24\" height=\"24\"><g> <path d=\"M490.815,3.784C480.082,5.7,227.049,51.632,148.477,130.203c-39.153,39.153-64.259,87.884-70.694,137.218 c-5.881,45.081,4.347,85.929,28.878,116.708L0.001,490.789L21.212,512l106.657-106.657 c33.094,26.378,75.092,34.302,116.711,28.874c49.334-6.435,98.065-31.541,137.218-70.695 C460.368,284.951,506.3,31.918,508.216,21.185L511.999,0L490.815,3.784z M447.512,43.277L309.407,181.383l-7.544-98.076 C348.249,67.434,399.682,53.892,447.512,43.277z M272.593,93.917l8.877,115.402l-78.119,78.119l-11.816-153.606 C211.482,120.364,238.718,106.957,272.593,93.917z M163.312,158.036l12.103,157.338l-47.36,47.36 C88.809,309.842,103.234,222.849,163.312,158.036z M220.425,405.885c-26.548-0.001-51.267-7.176-71.161-21.938l47.363-47.363 l157.32,12.102C313.515,386.161,264.459,405.887,220.425,405.885z M378.168,320.464l-153.605-11.816l78.118-78.118l115.403,8.877 C405.044,273.283,391.636,300.518,378.168,320.464z M428.694,210.138l-98.076-7.544L468.725,64.485 C458.136,112.202,444.578,163.717,428.694,210.138z\"/></g></svg>",
          activity: "\n  <svg style=\"fill:grey; max-height:18px\" width=\"24\" height=\"24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 303.6 303.6\" xml:space=\"preserve\"> <g> <g> <path d=\"M291.503,11.6c-10.4-10.4-37.2-11.6-48.4-11.6c-50.4,0-122.4,18.4-173.6,69.6c-77.2,76.8-78.4,201.6-58.4,222 c10.8,10.4,35.6,12,49.2,12c49.6,0,121.2-18.4,173.2-70C309.903,157.2,313.903,34,291.503,11.6z M60.303,288.8 c-24.4,0-36-4.8-38.8-7.6c-5.2-5.2-8.4-24.4-6.8-49.6l57.2,56.8C67.903,288.8,63.903,288.8,60.303,288.8z M223.103,222.8 c-38.8,38.8-90.4,57.2-132.4,63.6l-74-73.6c6-42,24-94,63.2-133.2c38-38,88-56.4,130.8-62.8l75.6,75.6 C280.303,133.2,261.903,184,223.103,222.8z M288.303,74l-58.8-59.2c4.8-0.4,9.2-0.4,13.6-0.4c24.4,0,35.6,4.8,38,7.2 C286.703,27.2,290.303,47.2,288.303,74z\"/></g></g><g><g><path d=\"M215.103,139.6l-20.8-20.8l13.2-13.2c2.8-2.8,2.8-7.6,0-10.4s-7.6-2.8-10.4,0l-13.2,13.6l-20.8-20.8 c-2.8-2.8-7.6-2.8-10.4,0c-2.8,2.8-2.8,7.6,0,10.4l20.8,20.8l-22,22l-20.8-20.8c-2.8-2.8-7.6-2.8-10.4,0s-2.8,7.6,0,10.4 l20.8,20.8l-22,22l-20.8-20.8c-2.8-2.8-7.6-2.8-10.4,0s-2.8,7.6,0,10.4l20.8,20.8l-13.2,13.2c-2.8,2.8-2.8,7.6,0,10.4 c1.6,1.6,3.2,2,5.2,2s3.6-0.8,5.2-2l13.2-13.2l20.8,20.8c1.6,1.6,3.2,2,5.2,2s3.6-0.8,5.2-2c2.8-2.8,2.8-7.6,0-10.4l-20.8-21.2 l22-22l20.8,20.8c1.6,1.6,3.2,2,5.2,2s3.6-0.8,5.2-2c2.8-2.8,2.8-7.6,0-10.4l-20.8-20.8l22-22l20.8,20.8c1.6,1.6,3.2,2,5.2,2 s3.6-0.8,5.2-2C217.903,147.2,217.903,142.4,215.103,139.6z\"/> </g> </g><g> <g> <path d=\"M169.103,47.6c-1.2-4-5.2-6-9.2-4.8c-3.2,1.2-80.8,25.6-110.4,98c-1.6,4,0,8.4,4,9.6c0.8,0.4,2,0.4,2.8,0.4 c2.8,0,5.6-1.6,6.8-4.4c27.2-66,100.4-89.6,101.2-89.6C168.303,55.6,170.303,51.6,169.103,47.6z\"/> </g></g></svg>",
          places: "\n  <svg style=\"fill:grey; max-height:18px\" version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 611.999 611.998\" xml:space=\"preserve\"><g><path d=\"M596.583,15.454c-10.357-10.23-23.229-14.931-38.16-14.931c-15.597,0-31.901,4.906-49.452,14.599 c-17.296,9.551-32.851,20.574-46.458,32.524h-0.665c-2.655,2.322-10.953,10.287-25.219,24.553 c-14.272,14.272-26.217,26.223-35.845,36.51L112.401,26.406c-6.896-1.968-12.928,0.014-17.593,4.645L46.687,78.839 c-4.326,4.297-5.805,9.268-4.977,15.597c0.829,6.287,3.979,10.627,9.629,13.607L280.32,228.839L161.514,347.978l-95.91,3.32 c-4.645,0.164-8.637,1.643-12.276,5.311L5.872,404.397c-4.312,4.34-6.641,9.289-5.643,16.262 c1.657,6.967,5.31,11.611,11.618,13.602l117.142,48.787l48.787,117.148c2.421,5.812,6.634,9.621,13.607,11.279h3.313 c4.977,0,9.296-1.658,12.942-5.311l47.456-47.457c3.653-3.645,5.494-7.965,5.643-12.275l3.32-95.91l118.807-118.807l121.128,228.99 c2.988,5.643,7.32,8.793,13.607,9.621c6.329,0.836,11.271-1.316,15.597-5.643l47.456-47.457c4.978-4.977,6.945-10.697,4.978-17.586 l-82.296-288.389l59.732-59.739c10.287-10.287,21.699-24.149,33.183-45.134c5.777-10.542,10.032-20.886,12.942-31.194 C614.913,54.966,612.449,31.114,596.583,15.454z M537.183,125.63l-67.039,67.372c-5.628,5.657-6.811,11.122-4.977,17.586 l81.637,288.388l-22.563,22.238L403.438,292.89c-2.98-5.643-7.299-8.963-12.941-9.621c-6.301-1.331-11.611,0.325-16.263,4.977 l-141.37,141.37c-2.987,2.986-4.644,6.973-5.643,11.949l-3.32,95.904l-22.896,23.236l-41.48-98.566 c-1.331-4.645-4.553-8.184-9.629-10.287L51.338,411.03l23.229-22.895l95.578-3.654c5.643-0.99,9.622-2.654,12.276-5.309 l141.37-141.371c4.651-4.645,6.308-9.954,4.984-16.262c-0.666-5.643-3.986-9.954-9.629-12.942L90.829,87.47l22.231-22.238 l288.389,81.637c6.464,1.833,11.951,0.666,17.587-4.977l28.545-28.539l26.217-25.884l11.278-11.285l1.331-0.666 c27.873-23.895,55.088-38.16,72.016-38.16c5.969,0,9.954,1.324,11.611,3.979C588.951,59.922,548.935,113.821,537.183,125.63z\"/> </g> </svg>",
          objects: "\n  <svg style=\"fill:grey; max-height:18px\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 792 792\" xml:space=\"preserve\"><g><g> <path d=\"M425.512,741.214H365.58c-14.183,0-25.164,11.439-25.164,25.622S351.397,792,365.58,792h59.932 c15.101,0,26.54-10.981,26.54-25.164S440.612,741.214,425.512,741.214z\"/> <path d=\"M472.638,671.209H319.821c-14.183,0-26.081,10.98-26.081,25.163s11.898,25.164,26.081,25.164h152.817 c14.183,0,25.164-10.981,25.164-25.164S486.82,671.209,472.638,671.209z\"/> <path d=\"M639.188,138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526,12.621,446.566,0,395.771,0 C320.28,0,247.19,31.684,197.205,81.445c-49.761,49.527-81.904,121.24-81.904,196.282c0,33.861,7.779,68.629,22.879,103.866 c15.1,35.228,38.565,78.614,70.005,130.396c7.448,12.269,15.764,31.205,25.623,56.271c12.104,30.757,22.87,51.713,31.566,63.602 c5.027,6.872,11.899,10.063,20.596,10.063h228.766c9.605,0,16.359-4.188,21.504-11.898c6.754-10.132,13.987-27.516,22.42-51.693 c8.951-25.691,16.838-43.982,23.329-55.364c30.571-53.587,54.446-99.747,70.464-137.717 c16.018-37.979,24.246-74.124,24.246-107.526C676.699,227.849,664.352,181.182,639.188,138.634z M603.492,371.071 c-15.012,34.348-36.398,76.974-65.427,126.736c-9.41,16.125-18.458,37.003-26.989,63.592c-3.367,10.474-7.32,20.596-11.439,30.2 H300.153c-6.862-11.439-12.26-25.837-18.761-42.089c-12.718-31.801-23.338-52.621-30.2-64.061 c-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718,106.13-228.991,229.674-226.941 c41.631,0.693,80.527,10.063,115.765,30.659c35.227,20.586,63.134,48.043,83.729,82.812 c20.586,34.768,31.108,72.748,31.108,113.47C626.372,305.175,618.681,336.322,603.492,371.071z\"/> </g></g></svg>",
          symbols: "\n  <svg style=\"fill:grey; max-height:18px\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24\" height=\"24\" viewBox=\"0 0 511.626 511.626\" xml:space=\"preserve\"><g><path d=\"M475.366,71.949c-24.175-23.606-57.575-35.404-100.215-35.404c-11.8,0-23.843,2.046-36.117,6.136 c-12.279,4.093-23.702,9.615-34.256,16.562c-10.568,6.945-19.65,13.467-27.269,19.556c-7.61,6.091-14.845,12.564-21.696,19.414 c-6.854-6.85-14.087-13.323-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556c-10.564-6.95-21.985-12.468-34.261-16.562 c-12.275-4.089-24.316-6.136-36.116-6.136c-42.637,0-76.039,11.801-100.211,35.404C12.087,95.55,0,128.286,0,170.16 c0,12.753,2.24,25.891,6.711,39.398c4.471,13.514,9.566,25.031,15.275,34.546c5.708,9.514,12.181,18.792,19.414,27.834 c7.233,9.041,12.519,15.272,15.846,18.698c3.33,3.426,5.948,5.903,7.851,7.427L243.25,469.938 c3.427,3.426,7.614,5.144,12.562,5.144s9.138-1.718,12.563-5.144l177.87-171.31c43.588-43.58,65.38-86.406,65.38-128.472 C511.626,128.279,499.54,95.546,475.366,71.949z M421.405,271.795L255.813,431.391L89.938,271.507 C54.344,235.922,36.55,202.133,36.55,170.156c0-15.415,2.046-29.026,6.136-40.824c4.093-11.8,9.327-21.177,15.703-28.124 c6.377-6.949,14.132-12.607,23.268-16.988c9.141-4.377,18.086-7.328,26.84-8.85c8.754-1.52,18.079-2.281,27.978-2.281 c9.896,0,20.557,2.424,31.977,7.279c11.418,4.853,21.934,10.944,31.545,18.271c9.613,7.332,17.845,14.183,24.7,20.557 c6.851,6.38,12.559,12.229,17.128,17.559c3.424,4.189,8.091,6.283,13.989,6.283c5.9,0,10.562-2.094,13.99-6.283 c4.568-5.33,10.28-11.182,17.131-17.559c6.852-6.374,15.085-13.222,24.694-20.557c9.613-7.327,20.129-13.418,31.553-18.271 c11.416-4.854,22.08-7.279,31.977-7.279s19.219,0.761,27.977,2.281c8.757,1.521,17.702,4.473,26.84,8.85 c9.137,4.38,16.892,10.042,23.267,16.988c6.376,6.947,11.612,16.324,15.705,28.124c4.086,11.798,6.132,25.409,6.132,40.824 C475.078,202.133,457.19,236.016,421.405,271.795z\"/> </g> </svg> ",
          flags: "\n  <svg  style=\"fill:grey; max-height:18px\" width=\"24\" height=\"24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <g> <g> <path d=\"M472.928,34.72c-4.384-2.944-9.984-3.52-14.912-1.568c-1.088,0.448-106.528,42.176-195.168,0.384 C186.752-2.4,102.944,14.4,64,25.76V16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v480c0,8.832,7.168,16,16,16 c8.832,0,16-7.168,16-16V315.296c28.352-9.248,112.384-31.232,185.184,3.168c34.592,16.352,70.784,21.792,103.648,21.792 c63.2,0,114.016-20.128,117.184-21.408c6.016-2.464,9.984-8.32,9.984-14.848V48C480,42.688,477.344,37.728,472.928,34.72z M448,292.672c-28.512,9.248-112.512,31.136-185.184-3.168C186.752,253.6,102.944,270.4,64,281.76V59.328 c28.352-9.248,112.384-31.232,185.184,3.168c76,35.872,159.872,19.104,198.816,7.712V292.672z\"/> </g> </g> </svg>"
        };
        var emojiInvokerClose = "\n<svg  style=\"fill:grey; max-height:18px\" width=\"24\" height=\"24\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 106.059 106.059\" xml:space=\"preserve\"> <g> <path d=\"M90.546,15.518C69.858-5.172,36.199-5.172,15.515,15.513C-5.173,36.198-5.171,69.858,15.517,90.547 c20.682,20.684,54.341,20.684,75.027-0.004C111.23,69.858,111.229,36.2,90.546,15.518z M84.757,84.758 c-17.494,17.494-45.96,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.796,3.807,67.261,3.805,84.759,21.302 C102.253,38.796,102.251,67.265,84.757,84.758z M78.546,61.065c0.266,0.403,0.31,0.913,0.118,1.356 c-4.284,9.903-14.318,16.304-25.563,16.304c-11.486,0-21.58-6.431-25.714-16.382c-0.184-0.443-0.135-0.949,0.132-1.348 c0.266-0.397,0.713-0.637,1.192-0.637c0,0,0.001,0,0.002,0l48.637,0.061C77.832,60.42,78.281,60.662,78.546,61.065z M33.24,38.671 c0-3.424,2.777-6.201,6.201-6.201c3.423,0,6.2,2.776,6.2,6.201c0,3.426-2.777,6.202-6.2,6.202 C36.017,44.873,33.24,42.097,33.24,38.671z M61.357,38.671c0-3.424,2.779-6.201,6.203-6.201c3.423,0,6.2,2.776,6.2,6.201 c0,3.426-2.776,6.202-6.2,6.202S61.357,42.097,61.357,38.671z\"/> </g> </svg> ";
        var emojiInvokerOpen = "\n<svg style=\"max-height:18px\" width=\"24\" height=\"24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 473.931 473.931\" xml:space=\"preserve\"> <circle style=\"fill:#FFC10E;\" cx=\"236.966\" cy=\"236.966\" r=\"236.966\"/> <path style=\"fill:#FFFFFF;\" d=\"M392.518,237.123c0,85.915-69.653,155.56-155.567,155.56c-85.911,0-155.56-69.645-155.56-155.56 L392.518,237.123L392.518,237.123z\"/> <g> <circle style=\"fill:#333333;\" cx=\"164.937\" cy=\"155.227\" r=\"37.216\"/> <circle style=\"fill:#333333;\" cx=\"305.664\" cy=\"155.227\" r=\"37.216\"/> </g> </svg>";
        var emojiInvokerFaceSVG = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\" style=\"max-width:18px;padding-right:5px\" width=\"424\" height=\"24\">\n    <linearGradient gradientUnits=\"userSpaceOnUse\" x1=\"-29.9375\" y1=\"613.3125\" x2=\"-29.9375\" y2=\"643.3125\" gradientTransform=\"matrix(16 0 0 -16 735 10309)\"> <stop offset=\"0\" style=\"stop-color:#FFB533\" /> <stop offset=\"1\" style=\"stop-color:#FFFF33\" />\n    </linearGradient> <circle style=\"fill:url(#SVGID_1_);\" cx=\"256\" cy=\"256\" r=\"240\" />\n    <path id=\"SVGCleanerId_0\" style=\"fill:#CC7B29;\" d=\"M256,0C114.608,0,0,114.608,0,256s114.608,255.984,256,256 c141.392,0,255.984-114.608,256-256C511.984,114.608,397.392,0,256,0z M414.384,414.384c-40.576,40.56-96.48,65.6-158.384,65.616 c-61.904-0.016-117.808-25.056-158.4-65.616C57.04,373.808,32,317.904,32,256S57.04,138.192,97.6,97.6 C138.192,57.04,194.096,32,256,32s117.808,25.04,158.384,65.6c40.56,40.592,65.6,96.496,65.616,158.4 C479.984,317.904,454.944,373.808,414.384,414.384z\" /> <path id=\"SVGCleanerId_1\" style=\"fill:#FFFFFF;\" d=\"M113.616,272c8.08,71.808,68.448,128,142.384,128s134.304-56.192,142.384-128 H113.616z\" /> <path id=\"SVGCleanerId_2\" style=\"fill:#805540;\" d=\"M97.712,273.792C106.672,353.52,173.728,415.968,256,416 c82.272-0.032,149.328-62.48,158.288-142.208L416.272,256H95.712L97.712,273.792z M378.8,288c-14.272,55.056-63.488,96.032-122.8,96 c-59.312,0.032-108.528-40.944-122.8-96H378.8z\" /> <g> <circle style=\"fill:#805540;\" cx=\"160\" cy=\"160\" r=\"32\" /> <circle style=\"fill:#805540;\" cx=\"352\" cy=\"160\" r=\"32\" /> </g> <linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"-29.9375\" y1=\"613.3125\" x2=\"-29.9375\" y2=\"643.3125\" gradientTransform=\"matrix(16 0 0 -16 735 10309)\"> <stop offset=\"0\" style=\"stop-color:#FFB533\" /> <stop offset=\"1\" style=\"stop-color:#FFFF33\" /> </linearGradient> <circle style=\"fill:url(#SVGID_2_);\" cx=\"256\" cy=\"256\" r=\"240\" /> <linearGradient id=\"SVGID_3_\" gradientUnits=\"userSpaceOnUse\" x1=\"-29.938\" y1=\"634.3125\" x2=\"-29.938\" y2=\"642.3125\" gradientTransform=\"matrix(16 0 0 -16 735 10309)\"> <stop offset=\"0\" style=\"stop-color:#FAFBFB;stop-opacity:0\" /> <stop offset=\"1\" style=\"stop-color:#FAFBFB\" /> </linearGradient> <path style=\"fill:url(#SVGID_3_);\" d=\"M256,32c-61.904,0-117.808,27.392-158.4,67.952C80.816,116.736,66.896,144,56.096,160h399.792 c-10.8-16-24.72-43.248-41.504-60.048C373.808,59.392,317.904,32,256,32z\" /> <g> <path id=\"SVGCleanerId_0_1_\" style=\"fill:#CC7B29;\" d=\"M256,0C114.608,0,0,114.608,0,256s114.608,255.984,256,256 c141.392,0,255.984-114.608,256-256C511.984,114.608,397.392,0,256,0z M414.384,414.384c-40.576,40.56-96.48,65.6-158.384,65.616 c-61.904-0.016-117.808-25.056-158.4-65.616C57.04,373.808,32,317.904,32,256S57.04,138.192,97.6,97.6 C138.192,57.04,194.096,32,256,32s117.808,25.04,158.384,65.6c40.56,40.592,65.6,96.496,65.616,158.4 C479.984,317.904,454.944,373.808,414.384,414.384z\" /> </g> <g> <path id=\"SVGCleanerId_1_1_\" style=\"fill:#FFFFFF;\" d=\"M113.616,272c8.08,71.808,68.448,128,142.384,128 s134.304-56.192,142.384-128H113.616z\" /> </g> <g> <path id=\"SVGCleanerId_2_1_\" style=\"fill:#805540;\" d=\"M97.712,273.792C106.672,353.52,173.728,415.968,256,416 c82.272-0.032,149.328-62.48,158.288-142.208L416.272,256H95.712L97.712,273.792z M378.8,288 c-14.272,55.056-63.488,96.032-122.8,96c-59.312,0.032-108.528-40.944-122.8-96H378.8z\" /></g><g><circle style=\"fill:#805540;\" cx=\"160\" cy=\"160\" r=\"32\" /> <circle style=\"fill:#805540;\" cx=\"352\" cy=\"160\" r=\"32\" /></g></svg>";
        var searchSVG = "\n <svg style=\"fill:grey; max-height:18px\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" with=\"24\" height=\"24\"> <g> <path d=\"M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z\" /></g></svg>"; // EXTERNAL MODULE: ./data/frequently-used.json

        var frequently_used = __webpack_require__("+sFo"); // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ClickOutside.vue?vue&type=script&lang=js

        /* harmony default export */


        var ClickOutsidevue_type_script_lang_js = {
          props: {
            do: {
              type: Function,
              default: function _default() {
                return function () {};
              }
            }
          },
          methods: {
            handleClickOutside: function handleClickOutside(e) {
              if (e.target === this.$el || this.$el.contains(e.target)) {
                return;
              }

              this.do();
            }
          },
          mounted: function mounted() {
            var _this = this;

            document.addEventListener('click', this.handleClickOutside);
            this.$once('hook:beforeDestroy', function () {
              document.removeEventListener('click', _this.handleClickOutside);
            });
          },
          render: function render(createElement) {
            return this.$slots.default[0];
          }
        }; // CONCATENATED MODULE: ./src/components/ClickOutside.vue?vue&type=script&lang=js

        /* harmony default export */

        var components_ClickOutsidevue_type_script_lang_js = ClickOutsidevue_type_script_lang_js; // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js

        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.

        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
        /* server only */
        shadowMode
        /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          } // functional template


          if (functionalTemplate) {
            options.functional = true;
          } // scopedId


          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }

          var hook;

          if (moduleIdentifier) {
            // server build
            hook = function hook(context) {
              // 2.3 injection
              context = context || // cached call
              this.$vnode && this.$vnode.ssrContext || // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true

              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              } // inject component styles


              if (injectStyles) {
                injectStyles.call(this, context);
              } // register component module identifier for async chunk inferrence


              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            }; // used by ssr in case component is cached and beforeCreate
            // never gets called


            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook; // register for functioal component in vue file

              var originalRender = options.render;

              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }

          return {
            exports: scriptExports,
            options: options
          };
        } // CONCATENATED MODULE: ./src/components/ClickOutside.vue


        var ClickOutside_render, ClickOutside_staticRenderFns;
        /* normalize component */

        var component = normalizeComponent(components_ClickOutsidevue_type_script_lang_js, ClickOutside_render, ClickOutside_staticRenderFns, false, null, null, null);
        /* harmony default export */

        var ClickOutside = component.exports; // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmojiPicker.vue?vue&type=script&lang=js
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

        var skinToneNames = [{
          name: 'NONE'
        }, {
          name: 'WHITE'
        }, {
          name: 'CREAM_WHITE'
        }, {
          name: 'LIGHT_BROWN'
        }, {
          name: 'BROWN'
        }, {
          name: 'DARK_BROWN'
        }];
        /* harmony default export */

        var EmojiPickervue_type_script_lang_js = {
          name: 'EmojiPicker',
          components: {
            ClickOutside: ClickOutside
          },
          props: {
            data: {
              type: Array,
              required: true
            }
          },
          data: function data() {
            return {
              show: false,
              isInvokerHovered: false,
              search: '',
              emojiInvokerIcon: null,
              emojiInvoker: null,
              emojiDropdown: null,
              selectedEmoji: null,
              searchSVG: searchSVG,
              initEmojis: {},
              emojiInvokerClose: emojiInvokerClose,
              emojiInvokerOpen: emojiInvokerOpen,
              categories: categories,
              scrolledTo: 'frequently_used',
              skinTonPickers: [],
              showSkinTonPickers: false,
              hoveredEmoji: null,
              popper: null
            };
          },
          watch: {
            search: function search() {
              if (this.search !== '') {
                this.scrolledTo = 'frequently_used';
              }
            },
            show: function show() {
              var _this = this;

              if (!this.show) {
                this.search = '';
              }

              this.$nextTick(function () {
                _this.setupPopper();
              });
            }
          },
          computed: {
            emojis: function emojis() {
              return this.search ? this.filteredEmojis() : this.initEmojis;
            }
          },
          methods: {
            open: function open() {
              this.show = true;
            },
            close: function close() {
              this.show = false;
            },
            toggleDropdown: function toggleDropdown() {
              if (this.show) {
                this.close();
              } else {
                this.open();
              }
            },
            setFrequentUsedEmoji: function setFrequentUsedEmoji(emojiObj) {
              var key = 'Frequently Used';
              var maxLength = 9;
              var frequentUsedEmojis = this.getFrequentUsedEmojis().filter(function (item) {
                return item.description !== emojiObj.description;
              });
              emojiObj.category = key;
              frequentUsedEmojis = _toConsumableArray(frequentUsedEmojis).concat([emojiObj]);

              if (frequentUsedEmojis.length > maxLength) {
                frequentUsedEmojis.shift();
              }

              localStorage.setItem('frequently_used_emojis', JSON.stringify(frequentUsedEmojis));
              this.initEmojis[key] = frequentUsedEmojis;
            },
            getFrequentUsedEmojis: function getFrequentUsedEmojis() {
              var frequentUsedEmojis = localStorage.getItem('frequently_used_emojis');

              if (frequentUsedEmojis === null) {
                frequentUsedEmojis = frequently_used;
              }

              if (!Array.isArray(frequentUsedEmojis)) {
                frequentUsedEmojis = JSON.parse(frequentUsedEmojis);
              }

              return frequentUsedEmojis;
            },
            selectEmoji: function selectEmoji(emojiObj) {
              this.$emit('emoji:picked', emojiObj.emoji);
              this.setFrequentUsedEmoji(emojiObj);
              this.show = false;
            },
            scrollToCategory: function scrollToCategory(category) {
              var _this$$refs$category = _slicedToArray(this.$refs[category], 1),
                  element = _this$$refs$category[0];

              element && element.scrollIntoView(true);
            },
            handleScroll: function handleScroll() {
              var _this2 = this;

              var emojis = this.$refs.emojis;
              emojis.addEventListener('scroll', function (e) {
                if (!_this2.search) {
                  Object.keys(_this2.categories).forEach(function (category) {
                    var _this2$$refs$_this2$g = _slicedToArray(_this2.$refs[_this2.getCategoryRef(category)], 1),
                        element = _this2$$refs$_this2$g[0];

                    if (element && emojis.scrollTop >= element.offsetTop) {
                      _this2.scrolledTo = category;
                    }
                  });
                }
              });
            },
            filteredEmojis: function filteredEmojis() {
              var _this3 = this;

              var filteredEmojis = {};

              var _loop = function _loop(category) {
                _this3.initEmojis[category].forEach(function (emoji) {
                  if (~emoji.description.toLowerCase().indexOf(_this3.search.toLowerCase())) {
                    if (!filteredEmojis.hasOwnProperty(category)) {
                      filteredEmojis[category] = [];
                    }

                    filteredEmojis[category] = _toConsumableArray(filteredEmojis[category]).concat([emoji]);
                  }
                });
              };

              for (var category in this.initEmojis) {
                _loop(category);
              }

              return filteredEmojis;
            },
            getCategoryRef: function getCategoryRef(category) {
              return category.toLowerCase().split(' ').join('_');
            },
            categorizeEmojis: function categorizeEmojis() {
              var categorizedEmojis = {};

              var allEmojis = _toConsumableArray(this.getFrequentUsedEmojis()).concat(_toConsumableArray(this.data));

              var _this$getDefaultSkinT = this.getDefaultSkinTon(),
                  tone = _this$getDefaultSkinT.name;

              allEmojis.forEach(function (emojiObj) {
                if (!categorizedEmojis.hasOwnProperty(emojiObj.category)) {
                  categorizedEmojis[emojiObj.category] = [];
                }

                emojiObj.emoji = skin_tone_default()(emojiObj.emoji, skin_tone_default.a[tone]);
                categorizedEmojis[emojiObj.category] = _toConsumableArray(categorizedEmojis[emojiObj.category]).concat([emojiObj]);
              });
              return categorizedEmojis;
            },
            getDefaultSkinTon: function getDefaultSkinTon() {
              var defaultSkinTon = localStorage.getItem('default_skin_ton');
              return defaultSkinTon === null ? {
                name: 'NONE',
                emoji: '✋'
              } : JSON.parse(defaultSkinTon);
            },
            setDefaultSkinTon: function setDefaultSkinTon(skinTon) {
              this.showSkinTonPickers = !this.showSkinTonPickers;
              localStorage.setItem('default_skin_ton', JSON.stringify(skinTon));
              this.resetInitEmojis(skinTon.name);
            },
            resetInitEmojis: function resetInitEmojis(tone) {
              for (var categroy in this.initEmojis) {
                this.initEmojis[categroy].forEach(function (emojiObj) {
                  emojiObj.emoji = skin_tone_default()(emojiObj.emoji, skin_tone_default.a[tone]);
                });
              }
            },
            getToneHands: function getToneHands() {
              return skinToneNames.map(function (item) {
                return _objectSpread({}, item, {
                  emoji: skin_tone_default()('✋', skin_tone_default.a[item.name])
                });
              }).sort(this.sortToneHands);
            },
            sortToneHands: function sortToneHands(a, b) {
              return a.name === this.getDefaultSkinTon().name ? 1 : 0;
            },
            handleMouseLeaveFooter: function handleMouseLeaveFooter() {
              if (this.showSkinTonPickers) {
                this.showSkinTonPickers = false;
              }

              if (this.hoveredEmoji !== null) {
                this.hoveredEmoji = null;
              }
            },
            handleMouseEnterEmoji: function handleMouseEnterEmoji(emoji) {
              if (this.showSkinTonPickers) {
                this.showSkinTonPickers = false;
              }

              this.hoveredEmoji = emoji;
            },
            handleMouseLeaveEmoji: function handleMouseLeaveEmoji(emoji) {
              this.hoveredEmoji = null;
            },
            setupPopper: function setupPopper() {
              if (this.popper === null) {
                this.popper = new popper["a"
                /* default */
                ](this.emojiInvoker, this.emojiDropdown, {
                  placement: 'bottom-end'
                });
              } else {
                this.popper.scheduleUpdate();
              }
            }
          },
          mounted: function mounted() {
            this.skinTonPickers = this.getToneHands();
            this.initEmojis = this.categorizeEmojis();
            this.emojiDropdown = this.$refs.emojiDropdown;
            this.emojiInvoker = this.$refs.emojiInvoker;
            this.emojiInvokerIcon = this.$refs.emojiInvokerIcon;
            this.handleScroll();
          }
        }; // CONCATENATED MODULE: ./src/components/EmojiPicker.vue?vue&type=script&lang=js

        /* harmony default export */

        var components_EmojiPickervue_type_script_lang_js = EmojiPickervue_type_script_lang_js; // EXTERNAL MODULE: ./src/components/EmojiPicker.vue?vue&type=style&index=0&lang=scss&style=scope

        var EmojiPickervue_type_style_index_0_lang_scss_style_scope = __webpack_require__("yY3l"); // CONCATENATED MODULE: ./src/components/EmojiPicker.vue

        /* normalize component */


        var EmojiPicker_component = normalizeComponent(components_EmojiPickervue_type_script_lang_js, render, staticRenderFns, false, null, null, null);
        /* harmony default export */

        var EmojiPicker = EmojiPicker_component.exports; // CONCATENATED MODULE: ./src/index.js

        var src_plugin = {
          install: function install(Vue, options) {
            Vue.component(EmojiPicker.name, EmojiPicker);
          }
        };
        /* harmony default export */

        var src = src_plugin; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

        /* harmony default export */

        var entry_lib = __webpack_exports__["default"] = src;
        /***/
      },

      /***/
      "0/R4":
      /***/
      function R4(module, exports) {
        module.exports = function (it) {
          return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
        };
        /***/

      },

      /***/
      "0L20":
      /***/
      function L20(module, exports) {
        // Generated using `npm run build`. Do not edit!
        module.exports = new Set([0x261D, 0x26F9, 0x270A, 0x270B, 0x270C, 0x270D, 0x1F385, 0x1F3C3, 0x1F3C4, 0x1F3CA, 0x1F3CB, 0x1F442, 0x1F443, 0x1F446, 0x1F447, 0x1F448, 0x1F449, 0x1F44A, 0x1F44B, 0x1F44C, 0x1F44D, 0x1F44E, 0x1F44F, 0x1F450, 0x1F466, 0x1F467, 0x1F468, 0x1F469, 0x1F46E, 0x1F470, 0x1F471, 0x1F472, 0x1F473, 0x1F474, 0x1F475, 0x1F476, 0x1F477, 0x1F478, 0x1F47C, 0x1F481, 0x1F482, 0x1F483, 0x1F485, 0x1F486, 0x1F487, 0x1F4AA, 0x1F575, 0x1F57A, 0x1F590, 0x1F595, 0x1F596, 0x1F645, 0x1F646, 0x1F647, 0x1F64B, 0x1F64C, 0x1F64D, 0x1F64E, 0x1F64F, 0x1F6A3, 0x1F6B4, 0x1F6B5, 0x1F6B6, 0x1F6C0, 0x1F918, 0x1F919, 0x1F91A, 0x1F91B, 0x1F91C, 0x1F91D, 0x1F91E, 0x1F926, 0x1F930, 0x1F933, 0x1F934, 0x1F935, 0x1F936, 0x1F937, 0x1F938, 0x1F939, 0x1F93C, 0x1F93D, 0x1F93E]);
        /***/
      },

      /***/
      "1TsA":
      /***/
      function TsA(module, exports) {
        module.exports = function (done, value) {
          return {
            value: value,
            done: !!done
          };
        };
        /***/

      },

      /***/
      "2OiF":
      /***/
      function OiF(module, exports) {
        module.exports = function (it) {
          if (typeof it != 'function') throw TypeError(it + ' is not a function!');
          return it;
        };
        /***/

      },

      /***/
      "4R4u":
      /***/
      function R4u(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
        /***/
      },

      /***/
      "8L3F":
      /***/
      function L3F(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */

        (function (global) {
          /**!
          * @fileOverview Kickass library to create and place poppers near their reference elements.
          * @version 1.14.3
          * @license
          * Copyright (c) 2016 Federico Zivolo and contributors
          *
          * Permission is hereby granted, free of charge, to any person obtaining a copy
          * of this software and associated documentation files (the "Software"), to deal
          * in the Software without restriction, including without limitation the rights
          * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          * copies of the Software, and to permit persons to whom the Software is
          * furnished to do so, subject to the following conditions:
          *
          * The above copyright notice and this permission notice shall be included in all
          * copies or substantial portions of the Software.
          *
          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          * SOFTWARE.
          */
          var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
          var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
          var timeoutDuration = 0;

          for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
            if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
              timeoutDuration = 1;
              break;
            }
          }

          function microtaskDebounce(fn) {
            var called = false;
            return function () {
              if (called) {
                return;
              }

              called = true;
              window.Promise.resolve().then(function () {
                called = false;
                fn();
              });
            };
          }

          function taskDebounce(fn) {
            var scheduled = false;
            return function () {
              if (!scheduled) {
                scheduled = true;
                setTimeout(function () {
                  scheduled = false;
                  fn();
                }, timeoutDuration);
              }
            };
          }

          var supportsMicroTasks = isBrowser && window.Promise;
          /**
          * Create a debounced version of a method, that's asynchronously deferred
          * but called in the minimum time possible.
          *
          * @method
          * @memberof Popper.Utils
          * @argument {Function} fn
          * @returns {Function}
          */

          var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
          /**
           * Check if the given variable is a function
           * @method
           * @memberof Popper.Utils
           * @argument {Any} functionToCheck - variable to check
           * @returns {Boolean} answer to: is a function?
           */

          function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
          }
          /**
           * Get CSS computed property of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Eement} element
           * @argument {String} property
           */


          function getStyleComputedProperty(element, property) {
            if (element.nodeType !== 1) {
              return [];
            } // NOTE: 1 DOM access here


            var css = getComputedStyle(element, null);
            return property ? css[property] : css;
          }
          /**
           * Returns the parentNode or the host of the element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} parent
           */


          function getParentNode(element) {
            if (element.nodeName === 'HTML') {
              return element;
            }

            return element.parentNode || element.host;
          }
          /**
           * Returns the scrolling parent of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} scroll parent
           */


          function getScrollParent(element) {
            // Return body, `getScroll` will take care to get the correct `scrollTop` from it
            if (!element) {
              return document.body;
            }

            switch (element.nodeName) {
              case 'HTML':
              case 'BODY':
                return element.ownerDocument.body;

              case '#document':
                return element.body;
            } // Firefox want us to check `-x` and `-y` variations as well


            var _getStyleComputedProp = getStyleComputedProperty(element),
                overflow = _getStyleComputedProp.overflow,
                overflowX = _getStyleComputedProp.overflowX,
                overflowY = _getStyleComputedProp.overflowY;

            if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
              return element;
            }

            return getScrollParent(getParentNode(element));
          }

          var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
          var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
          /**
           * Determines if the browser is Internet Explorer
           * @method
           * @memberof Popper.Utils
           * @param {Number} version to check
           * @returns {Boolean} isIE
           */

          function isIE(version) {
            if (version === 11) {
              return isIE11;
            }

            if (version === 10) {
              return isIE10;
            }

            return isIE11 || isIE10;
          }
          /**
           * Returns the offset parent of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} offset parent
           */


          function getOffsetParent(element) {
            if (!element) {
              return document.documentElement;
            }

            var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

            var offsetParent = element.offsetParent; // Skip hidden elements which don't have an offsetParent

            while (offsetParent === noOffsetParent && element.nextElementSibling) {
              offsetParent = (element = element.nextElementSibling).offsetParent;
            }

            var nodeName = offsetParent && offsetParent.nodeName;

            if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
              return element ? element.ownerDocument.documentElement : document.documentElement;
            } // .offsetParent will return the closest TD or TABLE in case
            // no offsetParent is present, I hate this job...


            if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
              return getOffsetParent(offsetParent);
            }

            return offsetParent;
          }

          function isOffsetContainer(element) {
            var nodeName = element.nodeName;

            if (nodeName === 'BODY') {
              return false;
            }

            return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
          }
          /**
           * Finds the root node (document, shadowDOM root) of the given element
           * @method
           * @memberof Popper.Utils
           * @argument {Element} node
           * @returns {Element} root node
           */


          function getRoot(node) {
            if (node.parentNode !== null) {
              return getRoot(node.parentNode);
            }

            return node;
          }
          /**
           * Finds the offset parent common to the two provided nodes
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element1
           * @argument {Element} element2
           * @returns {Element} common offset parent
           */


          function findCommonOffsetParent(element1, element2) {
            // This check is needed to avoid errors in case one of the elements isn't defined for any reason
            if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
              return document.documentElement;
            } // Here we make sure to give as "start" the element that comes first in the DOM


            var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
            var start = order ? element1 : element2;
            var end = order ? element2 : element1; // Get common ancestor container

            var range = document.createRange();
            range.setStart(start, 0);
            range.setEnd(end, 0);
            var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

            if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
              if (isOffsetContainer(commonAncestorContainer)) {
                return commonAncestorContainer;
              }

              return getOffsetParent(commonAncestorContainer);
            } // one of the nodes is inside shadowDOM, find which one


            var element1root = getRoot(element1);

            if (element1root.host) {
              return findCommonOffsetParent(element1root.host, element2);
            } else {
              return findCommonOffsetParent(element1, getRoot(element2).host);
            }
          }
          /**
           * Gets the scroll value of the given element in the given side (top and left)
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @argument {String} side `top` or `left`
           * @returns {number} amount of scrolled pixels
           */


          function getScroll(element) {
            var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
            var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
            var nodeName = element.nodeName;

            if (nodeName === 'BODY' || nodeName === 'HTML') {
              var html = element.ownerDocument.documentElement;
              var scrollingElement = element.ownerDocument.scrollingElement || html;
              return scrollingElement[upperSide];
            }

            return element[upperSide];
          }
          /*
           * Sum or subtract the element scroll values (left and top) from a given rect object
           * @method
           * @memberof Popper.Utils
           * @param {Object} rect - Rect object you want to change
           * @param {HTMLElement} element - The element from the function reads the scroll values
           * @param {Boolean} subtract - set to true if you want to subtract the scroll values
           * @return {Object} rect - The modifier rect object
           */


          function includeScroll(rect, element) {
            var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            var modifier = subtract ? -1 : 1;
            rect.top += scrollTop * modifier;
            rect.bottom += scrollTop * modifier;
            rect.left += scrollLeft * modifier;
            rect.right += scrollLeft * modifier;
            return rect;
          }
          /*
           * Helper to detect borders of a given element
           * @method
           * @memberof Popper.Utils
           * @param {CSSStyleDeclaration} styles
           * Result of `getStyleComputedProperty` on the given element
           * @param {String} axis - `x` or `y`
           * @return {number} borders - The borders size of the given axis
           */


          function getBordersSize(styles, axis) {
            var sideA = axis === 'x' ? 'Left' : 'Top';
            var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
            return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
          }

          function getSize(axis, body, html, computedStyle) {
            return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
          }

          function getWindowSizes() {
            var body = document.body;
            var html = document.documentElement;
            var computedStyle = isIE(10) && getComputedStyle(html);
            return {
              height: getSize('Height', body, html, computedStyle),
              width: getSize('Width', body, html, computedStyle)
            };
          }

          var classCallCheck = function classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          };

          var createClass = function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            return function (Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();

          var defineProperty = function defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          };

          var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };
          /**
           * Given element offsets, generate an output similar to getBoundingClientRect
           * @method
           * @memberof Popper.Utils
           * @argument {Object} offsets
           * @returns {Object} ClientRect like output
           */


          function getClientRect(offsets) {
            return _extends({}, offsets, {
              right: offsets.left + offsets.width,
              bottom: offsets.top + offsets.height
            });
          }
          /**
           * Get bounding client rect of given element
           * @method
           * @memberof Popper.Utils
           * @param {HTMLElement} element
           * @return {Object} client rect
           */


          function getBoundingClientRect(element) {
            var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
            // considered in DOM in some circumstances...
            // This isn't reproducible in IE10 compatibility mode of IE11

            try {
              if (isIE(10)) {
                rect = element.getBoundingClientRect();
                var scrollTop = getScroll(element, 'top');
                var scrollLeft = getScroll(element, 'left');
                rect.top += scrollTop;
                rect.left += scrollLeft;
                rect.bottom += scrollTop;
                rect.right += scrollLeft;
              } else {
                rect = element.getBoundingClientRect();
              }
            } catch (e) {}

            var result = {
              left: rect.left,
              top: rect.top,
              width: rect.right - rect.left,
              height: rect.bottom - rect.top
            }; // subtract scrollbar size from sizes

            var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
            var width = sizes.width || element.clientWidth || result.right - result.left;
            var height = sizes.height || element.clientHeight || result.bottom - result.top;
            var horizScrollbar = element.offsetWidth - width;
            var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
            // we make this check conditional for performance reasons

            if (horizScrollbar || vertScrollbar) {
              var styles = getStyleComputedProperty(element);
              horizScrollbar -= getBordersSize(styles, 'x');
              vertScrollbar -= getBordersSize(styles, 'y');
              result.width -= horizScrollbar;
              result.height -= vertScrollbar;
            }

            return getClientRect(result);
          }

          function getOffsetRectRelativeToArbitraryNode(children, parent) {
            var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var isIE10 = isIE(10);
            var isHTML = parent.nodeName === 'HTML';
            var childrenRect = getBoundingClientRect(children);
            var parentRect = getBoundingClientRect(parent);
            var scrollParent = getScrollParent(children);
            var styles = getStyleComputedProperty(parent);
            var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
            var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

            if (fixedPosition && parent.nodeName === 'HTML') {
              parentRect.top = Math.max(parentRect.top, 0);
              parentRect.left = Math.max(parentRect.left, 0);
            }

            var offsets = getClientRect({
              top: childrenRect.top - parentRect.top - borderTopWidth,
              left: childrenRect.left - parentRect.left - borderLeftWidth,
              width: childrenRect.width,
              height: childrenRect.height
            });
            offsets.marginTop = 0;
            offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
            // we do this only on HTML because it's the only element that behaves
            // differently when margins are applied to it. The margins are included in
            // the box of the documentElement, in the other cases not.

            if (!isIE10 && isHTML) {
              var marginTop = parseFloat(styles.marginTop, 10);
              var marginLeft = parseFloat(styles.marginLeft, 10);
              offsets.top -= borderTopWidth - marginTop;
              offsets.bottom -= borderTopWidth - marginTop;
              offsets.left -= borderLeftWidth - marginLeft;
              offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

              offsets.marginTop = marginTop;
              offsets.marginLeft = marginLeft;
            }

            if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
              offsets = includeScroll(offsets, parent);
            }

            return offsets;
          }

          function getViewportOffsetRectRelativeToArtbitraryNode(element) {
            var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var html = element.ownerDocument.documentElement;
            var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
            var width = Math.max(html.clientWidth, window.innerWidth || 0);
            var height = Math.max(html.clientHeight, window.innerHeight || 0);
            var scrollTop = !excludeScroll ? getScroll(html) : 0;
            var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
            var offset = {
              top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
              left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
              width: width,
              height: height
            };
            return getClientRect(offset);
          }
          /**
           * Check if the given element is fixed or is inside a fixed parent
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @argument {Element} customContainer
           * @returns {Boolean} answer to "isFixed?"
           */


          function isFixed(element) {
            var nodeName = element.nodeName;

            if (nodeName === 'BODY' || nodeName === 'HTML') {
              return false;
            }

            if (getStyleComputedProperty(element, 'position') === 'fixed') {
              return true;
            }

            return isFixed(getParentNode(element));
          }
          /**
           * Finds the first parent of an element that has a transformed property defined
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Element} first transformed parent or documentElement
           */


          function getFixedPositionOffsetParent(element) {
            // This check is needed to avoid errors in case one of the elements isn't defined for any reason
            if (!element || !element.parentElement || isIE()) {
              return document.documentElement;
            }

            var el = element.parentElement;

            while (el && getStyleComputedProperty(el, 'transform') === 'none') {
              el = el.parentElement;
            }

            return el || document.documentElement;
          }
          /**
           * Computed the boundaries limits and return them
           * @method
           * @memberof Popper.Utils
           * @param {HTMLElement} popper
           * @param {HTMLElement} reference
           * @param {number} padding
           * @param {HTMLElement} boundariesElement - Element used to define the boundaries
           * @param {Boolean} fixedPosition - Is in fixed position mode
           * @returns {Object} Coordinates of the boundaries
           */


          function getBoundaries(popper, reference, padding, boundariesElement) {
            var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

            var boundaries = {
              top: 0,
              left: 0
            };
            var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

            if (boundariesElement === 'viewport') {
              boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
            } else {
              // Handle other cases based on DOM element used as boundaries
              var boundariesNode = void 0;

              if (boundariesElement === 'scrollParent') {
                boundariesNode = getScrollParent(getParentNode(reference));

                if (boundariesNode.nodeName === 'BODY') {
                  boundariesNode = popper.ownerDocument.documentElement;
                }
              } else if (boundariesElement === 'window') {
                boundariesNode = popper.ownerDocument.documentElement;
              } else {
                boundariesNode = boundariesElement;
              }

              var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

              if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
                var _getWindowSizes = getWindowSizes(),
                    height = _getWindowSizes.height,
                    width = _getWindowSizes.width;

                boundaries.top += offsets.top - offsets.marginTop;
                boundaries.bottom = height + offsets.top;
                boundaries.left += offsets.left - offsets.marginLeft;
                boundaries.right = width + offsets.left;
              } else {
                // for all the other DOM elements, this one is good
                boundaries = offsets;
              }
            } // Add paddings


            boundaries.left += padding;
            boundaries.top += padding;
            boundaries.right -= padding;
            boundaries.bottom -= padding;
            return boundaries;
          }

          function getArea(_ref) {
            var width = _ref.width,
                height = _ref.height;
            return width * height;
          }
          /**
           * Utility used to transform the `auto` placement to the placement with more
           * available space.
           * @method
           * @memberof Popper.Utils
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
            var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            if (placement.indexOf('auto') === -1) {
              return placement;
            }

            var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
            var rects = {
              top: {
                width: boundaries.width,
                height: refRect.top - boundaries.top
              },
              right: {
                width: boundaries.right - refRect.right,
                height: boundaries.height
              },
              bottom: {
                width: boundaries.width,
                height: boundaries.bottom - refRect.bottom
              },
              left: {
                width: refRect.left - boundaries.left,
                height: boundaries.height
              }
            };
            var sortedAreas = Object.keys(rects).map(function (key) {
              return _extends({
                key: key
              }, rects[key], {
                area: getArea(rects[key])
              });
            }).sort(function (a, b) {
              return b.area - a.area;
            });
            var filteredAreas = sortedAreas.filter(function (_ref2) {
              var width = _ref2.width,
                  height = _ref2.height;
              return width >= popper.clientWidth && height >= popper.clientHeight;
            });
            var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
            var variation = placement.split('-')[1];
            return computedPlacement + (variation ? '-' + variation : '');
          }
          /**
           * Get offsets to the reference element
           * @method
           * @memberof Popper.Utils
           * @param {Object} state
           * @param {Element} popper - the popper element
           * @param {Element} reference - the reference element (the popper will be relative to this)
           * @param {Element} fixedPosition - is in fixed position mode
           * @returns {Object} An object containing the offsets which will be applied to the popper
           */


          function getReferenceOffsets(state, popper, reference) {
            var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
            return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
          }
          /**
           * Get the outer sizes of the given element (offset size + margins)
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element
           * @returns {Object} object containing width and height properties
           */


          function getOuterSizes(element) {
            var styles = getComputedStyle(element);
            var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
            var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
            var result = {
              width: element.offsetWidth + y,
              height: element.offsetHeight + x
            };
            return result;
          }
          /**
           * Get the opposite placement of the given one
           * @method
           * @memberof Popper.Utils
           * @argument {String} placement
           * @returns {String} flipped placement
           */


          function getOppositePlacement(placement) {
            var hash = {
              left: 'right',
              right: 'left',
              bottom: 'top',
              top: 'bottom'
            };
            return placement.replace(/left|right|bottom|top/g, function (matched) {
              return hash[matched];
            });
          }
          /**
           * Get offsets to the popper
           * @method
           * @memberof Popper.Utils
           * @param {Object} position - CSS position the Popper will get applied
           * @param {HTMLElement} popper - the popper element
           * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
           * @param {String} placement - one of the valid placement options
           * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
           */


          function getPopperOffsets(popper, referenceOffsets, placement) {
            placement = placement.split('-')[0]; // Get popper node sizes

            var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

            var popperOffsets = {
              width: popperRect.width,
              height: popperRect.height
            }; // depending by the popper placement we have to compute its offsets slightly differently

            var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
            var mainSide = isHoriz ? 'top' : 'left';
            var secondarySide = isHoriz ? 'left' : 'top';
            var measurement = isHoriz ? 'height' : 'width';
            var secondaryMeasurement = !isHoriz ? 'height' : 'width';
            popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

            if (placement === secondarySide) {
              popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
            } else {
              popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
            }

            return popperOffsets;
          }
          /**
           * Mimics the `find` method of Array
           * @method
           * @memberof Popper.Utils
           * @argument {Array} arr
           * @argument prop
           * @argument value
           * @returns index or -1
           */


          function find(arr, check) {
            // use native find if supported
            if (Array.prototype.find) {
              return arr.find(check);
            } // use `filter` to obtain the same behavior of `find`


            return arr.filter(check)[0];
          }
          /**
           * Return the index of the matching object
           * @method
           * @memberof Popper.Utils
           * @argument {Array} arr
           * @argument prop
           * @argument value
           * @returns index or -1
           */


          function findIndex(arr, prop, value) {
            // use native findIndex if supported
            if (Array.prototype.findIndex) {
              return arr.findIndex(function (cur) {
                return cur[prop] === value;
              });
            } // use `find` + `indexOf` if `findIndex` isn't supported


            var match = find(arr, function (obj) {
              return obj[prop] === value;
            });
            return arr.indexOf(match);
          }
          /**
           * Loop trough the list of modifiers and run them in order,
           * each of them will then edit the data object.
           * @method
           * @memberof Popper.Utils
           * @param {dataObject} data
           * @param {Array} modifiers
           * @param {String} ends - Optional modifier name used as stopper
           * @returns {dataObject}
           */


          function runModifiers(modifiers, data, ends) {
            var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
            modifiersToRun.forEach(function (modifier) {
              if (modifier['function']) {
                // eslint-disable-line dot-notation
                console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
              }

              var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

              if (modifier.enabled && isFunction(fn)) {
                // Add properties to offsets to make them a complete clientRect object
                // we do this before each modifier to make sure the previous one doesn't
                // mess with these values
                data.offsets.popper = getClientRect(data.offsets.popper);
                data.offsets.reference = getClientRect(data.offsets.reference);
                data = fn(data, modifier);
              }
            });
            return data;
          }
          /**
           * Updates the position of the popper, computing the new offsets and applying
           * the new style.<br />
           * Prefer `scheduleUpdate` over `update` because of performance reasons.
           * @method
           * @memberof Popper
           */


          function update() {
            // if popper is destroyed, don't perform any further update
            if (this.state.isDestroyed) {
              return;
            }

            var data = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: false,
              offsets: {}
            }; // compute reference element offsets

            data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
            // modifiers will be able to edit `placement` if needed
            // and refer to originalPlacement to know the original value

            data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

            data.originalPlacement = data.placement;
            data.positionFixed = this.options.positionFixed; // compute the popper offsets

            data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
            data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

            data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
            // the other ones will call `onUpdate` callback

            if (!this.state.isCreated) {
              this.state.isCreated = true;
              this.options.onCreate(data);
            } else {
              this.options.onUpdate(data);
            }
          }
          /**
           * Helper used to know if the given modifier is enabled.
           * @method
           * @memberof Popper.Utils
           * @returns {Boolean}
           */


          function isModifierEnabled(modifiers, modifierName) {
            return modifiers.some(function (_ref) {
              var name = _ref.name,
                  enabled = _ref.enabled;
              return enabled && name === modifierName;
            });
          }
          /**
           * Get the prefixed supported property name
           * @method
           * @memberof Popper.Utils
           * @argument {String} property (camelCase)
           * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
           */


          function getSupportedPropertyName(property) {
            var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
            var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

            for (var i = 0; i < prefixes.length; i++) {
              var prefix = prefixes[i];
              var toCheck = prefix ? '' + prefix + upperProp : property;

              if (typeof document.body.style[toCheck] !== 'undefined') {
                return toCheck;
              }
            }

            return null;
          }
          /**
           * Destroy the popper
           * @method
           * @memberof Popper
           */


          function destroy() {
            this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

            if (isModifierEnabled(this.modifiers, 'applyStyle')) {
              this.popper.removeAttribute('x-placement');
              this.popper.style.position = '';
              this.popper.style.top = '';
              this.popper.style.left = '';
              this.popper.style.right = '';
              this.popper.style.bottom = '';
              this.popper.style.willChange = '';
              this.popper.style[getSupportedPropertyName('transform')] = '';
            }

            this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
            // do not use `remove` because IE11 doesn't support it

            if (this.options.removeOnDestroy) {
              this.popper.parentNode.removeChild(this.popper);
            }

            return this;
          }
          /**
           * Get the window associated with the element
           * @argument {Element} element
           * @returns {Window}
           */


          function getWindow(element) {
            var ownerDocument = element.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView : window;
          }

          function attachToScrollParents(scrollParent, event, callback, scrollParents) {
            var isBody = scrollParent.nodeName === 'BODY';
            var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
            target.addEventListener(event, callback, {
              passive: true
            });

            if (!isBody) {
              attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
            }

            scrollParents.push(target);
          }
          /**
           * Setup needed event listeners used to update the popper position
           * @method
           * @memberof Popper.Utils
           * @private
           */


          function setupEventListeners(reference, options, state, updateBound) {
            // Resize event listener on window
            state.updateBound = updateBound;
            getWindow(reference).addEventListener('resize', state.updateBound, {
              passive: true
            }); // Scroll event listener on scroll parents

            var scrollElement = getScrollParent(reference);
            attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
            state.scrollElement = scrollElement;
            state.eventsEnabled = true;
            return state;
          }
          /**
           * It will add resize/scroll events and start recalculating
           * position of the popper element when they are triggered.
           * @method
           * @memberof Popper
           */


          function enableEventListeners() {
            if (!this.state.eventsEnabled) {
              this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
            }
          }
          /**
           * Remove event listeners used to update the popper position
           * @method
           * @memberof Popper.Utils
           * @private
           */


          function removeEventListeners(reference, state) {
            // Remove resize event listener on window
            getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

            state.scrollParents.forEach(function (target) {
              target.removeEventListener('scroll', state.updateBound);
            }); // Reset state

            state.updateBound = null;
            state.scrollParents = [];
            state.scrollElement = null;
            state.eventsEnabled = false;
            return state;
          }
          /**
           * It will remove resize/scroll events and won't recalculate popper position
           * when they are triggered. It also won't trigger onUpdate callback anymore,
           * unless you call `update` method manually.
           * @method
           * @memberof Popper
           */


          function disableEventListeners() {
            if (this.state.eventsEnabled) {
              cancelAnimationFrame(this.scheduleUpdate);
              this.state = removeEventListeners(this.reference, this.state);
            }
          }
          /**
           * Tells if a given input is a number
           * @method
           * @memberof Popper.Utils
           * @param {*} input to check
           * @return {Boolean}
           */


          function isNumeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
          }
          /**
           * Set the style to the given popper
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element - Element to apply the style to
           * @argument {Object} styles
           * Object with a list of properties and values which will be applied to the element
           */


          function setStyles(element, styles) {
            Object.keys(styles).forEach(function (prop) {
              var unit = ''; // add unit if the value is numeric and is one of the following

              if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
                unit = 'px';
              }

              element.style[prop] = styles[prop] + unit;
            });
          }
          /**
           * Set the attributes to the given popper
           * @method
           * @memberof Popper.Utils
           * @argument {Element} element - Element to apply the attributes to
           * @argument {Object} styles
           * Object with a list of properties and values which will be applied to the element
           */


          function setAttributes(element, attributes) {
            Object.keys(attributes).forEach(function (prop) {
              var value = attributes[prop];

              if (value !== false) {
                element.setAttribute(prop, attributes[prop]);
              } else {
                element.removeAttribute(prop);
              }
            });
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} data.styles - List of style properties - values to apply to popper element
           * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The same data object
           */


          function applyStyle(data) {
            // any property present in `data.styles` will be applied to the popper,
            // in this way we can make the 3rd party modifiers add custom styles to it
            // Be aware, modifiers could override the properties defined in the previous
            // lines of this modifier!
            setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
            // they will be set as HTML attributes of the element

            setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

            if (data.arrowElement && Object.keys(data.arrowStyles).length) {
              setStyles(data.arrowElement, data.arrowStyles);
            }

            return data;
          }
          /**
           * Set the x-placement attribute before everything else because it could be used
           * to add margins to the popper margins needs to be calculated to get the
           * correct popper offsets.
           * @method
           * @memberof Popper.modifiers
           * @param {HTMLElement} reference - The reference element used to position the popper
           * @param {HTMLElement} popper - The HTML element used as popper
           * @param {Object} options - Popper.js options
           */


          function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
            // compute reference element offsets
            var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
            // modifiers will be able to edit `placement` if needed
            // and refer to originalPlacement to know the original value

            var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
            popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
            // without the position applied we can't guarantee correct computations

            setStyles(popper, {
              position: options.positionFixed ? 'fixed' : 'absolute'
            });
            return options;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function computeStyle(data, options) {
            var x = options.x,
                y = options.y;
            var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

            var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
              return modifier.name === 'applyStyle';
            }).gpuAcceleration;

            if (legacyGpuAccelerationOption !== undefined) {
              console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
            }

            var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
            var offsetParent = getOffsetParent(data.instance.popper);
            var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

            var styles = {
              position: popper.position
            }; // Avoid blurry text by using full pixel integers.
            // For pixel-perfect positioning, top/bottom prefers rounded
            // values, while left/right prefers floored values.

            var offsets = {
              left: Math.floor(popper.left),
              top: Math.round(popper.top),
              bottom: Math.round(popper.bottom),
              right: Math.floor(popper.right)
            };
            var sideA = x === 'bottom' ? 'top' : 'bottom';
            var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
            //  we use `translate3d` to apply the position to the popper we
            // automatically use the supported prefixed version if needed

            var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
            // If the content of the popper grows once it's been positioned, it
            // may happen that the popper gets misplaced because of the new content
            // overflowing its reference element
            // To avoid this problem, we provide two options (x and y), which allow
            // the consumer to define the offset origin.
            // If we position a popper on top of a reference element, we can set
            // `x` to `top` to make the popper grow towards its top instead of
            // its bottom.

            var left = void 0,
                top = void 0;

            if (sideA === 'bottom') {
              top = -offsetParentRect.height + offsets.bottom;
            } else {
              top = offsets.top;
            }

            if (sideB === 'right') {
              left = -offsetParentRect.width + offsets.right;
            } else {
              left = offsets.left;
            }

            if (gpuAcceleration && prefixedProperty) {
              styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
              styles[sideA] = 0;
              styles[sideB] = 0;
              styles.willChange = 'transform';
            } else {
              // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
              var invertTop = sideA === 'bottom' ? -1 : 1;
              var invertLeft = sideB === 'right' ? -1 : 1;
              styles[sideA] = top * invertTop;
              styles[sideB] = left * invertLeft;
              styles.willChange = sideA + ', ' + sideB;
            } // Attributes


            var attributes = {
              'x-placement': data.placement
            }; // Update `data` attributes, styles and arrowStyles

            data.attributes = _extends({}, attributes, data.attributes);
            data.styles = _extends({}, styles, data.styles);
            data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
            return data;
          }
          /**
           * Helper used to know if the given modifier depends from another one.<br />
           * It checks if the needed modifier is listed and enabled.
           * @method
           * @memberof Popper.Utils
           * @param {Array} modifiers - list of modifiers
           * @param {String} requestingName - name of requesting modifier
           * @param {String} requestedName - name of requested modifier
           * @returns {Boolean}
           */


          function isModifierRequired(modifiers, requestingName, requestedName) {
            var requesting = find(modifiers, function (_ref) {
              var name = _ref.name;
              return name === requestingName;
            });
            var isRequired = !!requesting && modifiers.some(function (modifier) {
              return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
            });

            if (!isRequired) {
              var _requesting = '`' + requestingName + '`';

              var requested = '`' + requestedName + '`';
              console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
            }

            return isRequired;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function arrow(data, options) {
            var _data$offsets$arrow; // arrow depends on keepTogether in order to work


            if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
              return data;
            }

            var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

            if (typeof arrowElement === 'string') {
              arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

              if (!arrowElement) {
                return data;
              }
            } else {
              // if the arrowElement isn't a query selector we must check that the
              // provided DOM node is child of its popper node
              if (!data.instance.popper.contains(arrowElement)) {
                console.warn('WARNING: `arrow.element` must be child of its popper element!');
                return data;
              }
            }

            var placement = data.placement.split('-')[0];
            var _data$offsets = data.offsets,
                popper = _data$offsets.popper,
                reference = _data$offsets.reference;
            var isVertical = ['left', 'right'].indexOf(placement) !== -1;
            var len = isVertical ? 'height' : 'width';
            var sideCapitalized = isVertical ? 'Top' : 'Left';
            var side = sideCapitalized.toLowerCase();
            var altSide = isVertical ? 'left' : 'top';
            var opSide = isVertical ? 'bottom' : 'right';
            var arrowElementSize = getOuterSizes(arrowElement)[len]; //
            // extends keepTogether behavior making sure the popper and its
            // reference have enough pixels in conjuction
            //
            // top/left side

            if (reference[opSide] - arrowElementSize < popper[side]) {
              data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
            } // bottom/right side


            if (reference[side] + arrowElementSize > popper[opSide]) {
              data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
            }

            data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

            var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
            // take popper margin in account because we don't have this info available

            var css = getStyleComputedProperty(data.instance.popper);
            var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
            var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
            var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

            sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
            data.arrowElement = arrowElement;
            data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
            return data;
          }
          /**
           * Get the opposite placement variation of the given one
           * @method
           * @memberof Popper.Utils
           * @argument {String} placement variation
           * @returns {String} flipped placement variation
           */


          function getOppositeVariation(variation) {
            if (variation === 'end') {
              return 'start';
            } else if (variation === 'start') {
              return 'end';
            }

            return variation;
          }
          /**
           * List of accepted placements to use as values of the `placement` option.<br />
           * Valid placements are:
           * - `auto`
           * - `top`
           * - `right`
           * - `bottom`
           * - `left`
           *
           * Each placement can have a variation from this list:
           * - `-start`
           * - `-end`
           *
           * Variations are interpreted easily if you think of them as the left to right
           * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
           * is right.<br />
           * Vertically (`left` and `right`), `start` is top and `end` is bottom.
           *
           * Some valid examples are:
           * - `top-end` (on top of reference, right aligned)
           * - `right-start` (on right of reference, top aligned)
           * - `bottom` (on bottom, centered)
           * - `auto-right` (on the side with more space available, alignment depends by placement)
           *
           * @static
           * @type {Array}
           * @enum {String}
           * @readonly
           * @method placements
           * @memberof Popper
           */


          var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

          var validPlacements = placements.slice(3);
          /**
           * Given an initial placement, returns all the subsequent placements
           * clockwise (or counter-clockwise).
           *
           * @method
           * @memberof Popper.Utils
           * @argument {String} placement - A valid placement (it accepts variations)
           * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
           * @returns {Array} placements including their variations
           */

          function clockwise(placement) {
            var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var index = validPlacements.indexOf(placement);
            var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
            return counter ? arr.reverse() : arr;
          }

          var BEHAVIORS = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
          };
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */

          function flip(data, options) {
            // if `inner` modifier is enabled, we can't use the `flip` modifier
            if (isModifierEnabled(data.instance.modifiers, 'inner')) {
              return data;
            }

            if (data.flipped && data.placement === data.originalPlacement) {
              // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
              return data;
            }

            var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
            var placement = data.placement.split('-')[0];
            var placementOpposite = getOppositePlacement(placement);
            var variation = data.placement.split('-')[1] || '';
            var flipOrder = [];

            switch (options.behavior) {
              case BEHAVIORS.FLIP:
                flipOrder = [placement, placementOpposite];
                break;

              case BEHAVIORS.CLOCKWISE:
                flipOrder = clockwise(placement);
                break;

              case BEHAVIORS.COUNTERCLOCKWISE:
                flipOrder = clockwise(placement, true);
                break;

              default:
                flipOrder = options.behavior;
            }

            flipOrder.forEach(function (step, index) {
              if (placement !== step || flipOrder.length === index + 1) {
                return data;
              }

              placement = data.placement.split('-')[0];
              placementOpposite = getOppositePlacement(placement);
              var popperOffsets = data.offsets.popper;
              var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

              var floor = Math.floor;
              var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
              var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
              var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
              var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
              var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
              var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

              var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
              var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

              if (overlapsRef || overflowsBoundaries || flippedVariation) {
                // this boolean to detect any flip loop
                data.flipped = true;

                if (overlapsRef || overflowsBoundaries) {
                  placement = flipOrder[index + 1];
                }

                if (flippedVariation) {
                  variation = getOppositeVariation(variation);
                }

                data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
                // any additional property we may add in the future

                data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
                data = runModifiers(data.instance.modifiers, data, 'flip');
              }
            });
            return data;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function keepTogether(data) {
            var _data$offsets = data.offsets,
                popper = _data$offsets.popper,
                reference = _data$offsets.reference;
            var placement = data.placement.split('-')[0];
            var floor = Math.floor;
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
            var side = isVertical ? 'right' : 'bottom';
            var opSide = isVertical ? 'left' : 'top';
            var measurement = isVertical ? 'width' : 'height';

            if (popper[side] < floor(reference[opSide])) {
              data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
            }

            if (popper[opSide] > floor(reference[side])) {
              data.offsets.popper[opSide] = floor(reference[side]);
            }

            return data;
          }
          /**
           * Converts a string containing value + unit into a px value number
           * @function
           * @memberof {modifiers~offset}
           * @private
           * @argument {String} str - Value + unit string
           * @argument {String} measurement - `height` or `width`
           * @argument {Object} popperOffsets
           * @argument {Object} referenceOffsets
           * @returns {Number|String}
           * Value in pixels, or original string if no values were extracted
           */


          function toValue(str, measurement, popperOffsets, referenceOffsets) {
            // separate value from unit
            var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
            var value = +split[1];
            var unit = split[2]; // If it's not a number it's an operator, I guess

            if (!value) {
              return str;
            }

            if (unit.indexOf('%') === 0) {
              var element = void 0;

              switch (unit) {
                case '%p':
                  element = popperOffsets;
                  break;

                case '%':
                case '%r':
                default:
                  element = referenceOffsets;
              }

              var rect = getClientRect(element);
              return rect[measurement] / 100 * value;
            } else if (unit === 'vh' || unit === 'vw') {
              // if is a vh or vw, we calculate the size based on the viewport
              var size = void 0;

              if (unit === 'vh') {
                size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
              } else {
                size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
              }

              return size / 100 * value;
            } else {
              // if is an explicit pixel unit, we get rid of the unit and keep the value
              // if is an implicit unit, it's px, and we return just the value
              return value;
            }
          }
          /**
           * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
           * @function
           * @memberof {modifiers~offset}
           * @private
           * @argument {String} offset
           * @argument {Object} popperOffsets
           * @argument {Object} referenceOffsets
           * @argument {String} basePlacement
           * @returns {Array} a two cells array with x and y offsets in numbers
           */


          function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
            var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
            // in this way the first offset will use an axis and the second one
            // will use the other one

            var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
            // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

            var fragments = offset.split(/(\+|\-)/).map(function (frag) {
              return frag.trim();
            }); // Detect if the offset string contains a pair of values or a single one
            // they could be separated by comma or space

            var divider = fragments.indexOf(find(fragments, function (frag) {
              return frag.search(/,|\s/) !== -1;
            }));

            if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
              console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
            } // If divider is found, we divide the list of values and operands to divide
            // them by ofset X and Y.


            var splitRegex = /\s*,\s*|\s+/;
            var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

            ops = ops.map(function (op, index) {
              // Most of the units rely on the orientation of the popper
              var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
              var mergeWithPrevious = false;
              return op // This aggregates any `+` or `-` sign that aren't considered operators
              // e.g.: 10 + +5 => [10, +, +5]
              .reduce(function (a, b) {
                if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
                  a[a.length - 1] = b;
                  mergeWithPrevious = true;
                  return a;
                } else if (mergeWithPrevious) {
                  a[a.length - 1] += b;
                  mergeWithPrevious = false;
                  return a;
                } else {
                  return a.concat(b);
                }
              }, []) // Here we convert the string values into number values (in px)
              .map(function (str) {
                return toValue(str, measurement, popperOffsets, referenceOffsets);
              });
            }); // Loop trough the offsets arrays and execute the operations

            ops.forEach(function (op, index) {
              op.forEach(function (frag, index2) {
                if (isNumeric(frag)) {
                  offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
                }
              });
            });
            return offsets;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @argument {Number|String} options.offset=0
           * The offset value as described in the modifier description
           * @returns {Object} The data object, properly modified
           */


          function offset(data, _ref) {
            var offset = _ref.offset;
            var placement = data.placement,
                _data$offsets = data.offsets,
                popper = _data$offsets.popper,
                reference = _data$offsets.reference;
            var basePlacement = placement.split('-')[0];
            var offsets = void 0;

            if (isNumeric(+offset)) {
              offsets = [+offset, 0];
            } else {
              offsets = parseOffset(offset, popper, reference, basePlacement);
            }

            if (basePlacement === 'left') {
              popper.top += offsets[0];
              popper.left -= offsets[1];
            } else if (basePlacement === 'right') {
              popper.top += offsets[0];
              popper.left += offsets[1];
            } else if (basePlacement === 'top') {
              popper.left += offsets[0];
              popper.top -= offsets[1];
            } else if (basePlacement === 'bottom') {
              popper.left += offsets[0];
              popper.top += offsets[1];
            }

            data.popper = popper;
            return data;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function preventOverflow(data, options) {
            var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
            // go one step up and use the next offsetParent as reference to
            // avoid to make this modifier completely useless and look like broken

            if (data.instance.reference === boundariesElement) {
              boundariesElement = getOffsetParent(boundariesElement);
            } // NOTE: DOM access here
            // resets the popper's position so that the document size can be calculated excluding
            // the size of the popper element itself


            var transformProp = getSupportedPropertyName('transform');
            var popperStyles = data.instance.popper.style; // assignment to help minification

            var top = popperStyles.top,
                left = popperStyles.left,
                transform = popperStyles[transformProp];
            popperStyles.top = '';
            popperStyles.left = '';
            popperStyles[transformProp] = '';
            var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
            // restores the original style properties after the offsets have been computed

            popperStyles.top = top;
            popperStyles.left = left;
            popperStyles[transformProp] = transform;
            options.boundaries = boundaries;
            var order = options.priority;
            var popper = data.offsets.popper;
            var check = {
              primary: function primary(placement) {
                var value = popper[placement];

                if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
                  value = Math.max(popper[placement], boundaries[placement]);
                }

                return defineProperty({}, placement, value);
              },
              secondary: function secondary(placement) {
                var mainSide = placement === 'right' ? 'left' : 'top';
                var value = popper[mainSide];

                if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
                  value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
                }

                return defineProperty({}, mainSide, value);
              }
            };
            order.forEach(function (placement) {
              var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
              popper = _extends({}, popper, check[side](placement));
            });
            data.offsets.popper = popper;
            return data;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function shift(data) {
            var placement = data.placement;
            var basePlacement = placement.split('-')[0];
            var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

            if (shiftvariation) {
              var _data$offsets = data.offsets,
                  reference = _data$offsets.reference,
                  popper = _data$offsets.popper;
              var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
              var side = isVertical ? 'left' : 'top';
              var measurement = isVertical ? 'width' : 'height';
              var shiftOffsets = {
                start: defineProperty({}, side, reference[side]),
                end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
              };
              data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
            }

            return data;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by update method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function hide(data) {
            if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
              return data;
            }

            var refRect = data.offsets.reference;
            var bound = find(data.instance.modifiers, function (modifier) {
              return modifier.name === 'preventOverflow';
            }).boundaries;

            if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
              // Avoid unnecessary DOM access if visibility hasn't changed
              if (data.hide === true) {
                return data;
              }

              data.hide = true;
              data.attributes['x-out-of-boundaries'] = '';
            } else {
              // Avoid unnecessary DOM access if visibility hasn't changed
              if (data.hide === false) {
                return data;
              }

              data.hide = false;
              data.attributes['x-out-of-boundaries'] = false;
            }

            return data;
          }
          /**
           * @function
           * @memberof Modifiers
           * @argument {Object} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {Object} The data object, properly modified
           */


          function inner(data) {
            var placement = data.placement;
            var basePlacement = placement.split('-')[0];
            var _data$offsets = data.offsets,
                popper = _data$offsets.popper,
                reference = _data$offsets.reference;
            var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
            var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
            popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
            data.placement = getOppositePlacement(placement);
            data.offsets.popper = getClientRect(popper);
            return data;
          }
          /**
           * Modifier function, each modifier can have a function of this type assigned
           * to its `fn` property.<br />
           * These functions will be called on each update, this means that you must
           * make sure they are performant enough to avoid performance bottlenecks.
           *
           * @function ModifierFn
           * @argument {dataObject} data - The data object generated by `update` method
           * @argument {Object} options - Modifiers configuration and options
           * @returns {dataObject} The data object, properly modified
           */

          /**
           * Modifiers are plugins used to alter the behavior of your poppers.<br />
           * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
           * needed by the library.
           *
           * Usually you don't want to override the `order`, `fn` and `onLoad` props.
           * All the other properties are configurations that could be tweaked.
           * @namespace modifiers
           */


          var modifiers = {
            /**
             * Modifier used to shift the popper on the start or end of its reference
             * element.<br />
             * It will read the variation of the `placement` property.<br />
             * It can be one either `-end` or `-start`.
             * @memberof modifiers
             * @inner
             */
            shift: {
              /** @prop {number} order=100 - Index used to define the order of execution */
              order: 100,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: shift
            },

            /**
             * The `offset` modifier can shift your popper on both its axis.
             *
             * It accepts the following units:
             * - `px` or unitless, interpreted as pixels
             * - `%` or `%r`, percentage relative to the length of the reference element
             * - `%p`, percentage relative to the length of the popper element
             * - `vw`, CSS viewport width unit
             * - `vh`, CSS viewport height unit
             *
             * For length is intended the main axis relative to the placement of the popper.<br />
             * This means that if the placement is `top` or `bottom`, the length will be the
             * `width`. In case of `left` or `right`, it will be the height.
             *
             * You can provide a single value (as `Number` or `String`), or a pair of values
             * as `String` divided by a comma or one (or more) white spaces.<br />
             * The latter is a deprecated method because it leads to confusion and will be
             * removed in v2.<br />
             * Additionally, it accepts additions and subtractions between different units.
             * Note that multiplications and divisions aren't supported.
             *
             * Valid examples are:
             * ```
             * 10
             * '10%'
             * '10, 10'
             * '10%, 10'
             * '10 + 10%'
             * '10 - 5vh + 3%'
             * '-10px + 5vh, 5px - 6%'
             * ```
             * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
             * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
             * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
             *
             * @memberof modifiers
             * @inner
             */
            offset: {
              /** @prop {number} order=200 - Index used to define the order of execution */
              order: 200,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: offset,

              /** @prop {Number|String} offset=0
               * The offset value as described in the modifier description
               */
              offset: 0
            },

            /**
             * Modifier used to prevent the popper from being positioned outside the boundary.
             *
             * An scenario exists where the reference itself is not within the boundaries.<br />
             * We can say it has "escaped the boundaries" — or just "escaped".<br />
             * In this case we need to decide whether the popper should either:
             *
             * - detach from the reference and remain "trapped" in the boundaries, or
             * - if it should ignore the boundary and "escape with its reference"
             *
             * When `escapeWithReference` is set to`true` and reference is completely
             * outside its boundaries, the popper will overflow (or completely leave)
             * the boundaries in order to remain attached to the edge of the reference.
             *
             * @memberof modifiers
             * @inner
             */
            preventOverflow: {
              /** @prop {number} order=300 - Index used to define the order of execution */
              order: 300,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: preventOverflow,

              /**
               * @prop {Array} [priority=['left','right','top','bottom']]
               * Popper will try to prevent overflow following these priorities by default,
               * then, it could overflow on the left and on top of the `boundariesElement`
               */
              priority: ['left', 'right', 'top', 'bottom'],

              /**
               * @prop {number} padding=5
               * Amount of pixel used to define a minimum distance between the boundaries
               * and the popper this makes sure the popper has always a little padding
               * between the edges of its container
               */
              padding: 5,

              /**
               * @prop {String|HTMLElement} boundariesElement='scrollParent'
               * Boundaries used by the modifier, can be `scrollParent`, `window`,
               * `viewport` or any DOM element.
               */
              boundariesElement: 'scrollParent'
            },

            /**
             * Modifier used to make sure the reference and its popper stay near eachothers
             * without leaving any gap between the two. Expecially useful when the arrow is
             * enabled and you want to assure it to point to its reference element.
             * It cares only about the first axis, you can still have poppers with margin
             * between the popper and its reference element.
             * @memberof modifiers
             * @inner
             */
            keepTogether: {
              /** @prop {number} order=400 - Index used to define the order of execution */
              order: 400,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: keepTogether
            },

            /**
             * This modifier is used to move the `arrowElement` of the popper to make
             * sure it is positioned between the reference element and its popper element.
             * It will read the outer size of the `arrowElement` node to detect how many
             * pixels of conjuction are needed.
             *
             * It has no effect if no `arrowElement` is provided.
             * @memberof modifiers
             * @inner
             */
            arrow: {
              /** @prop {number} order=500 - Index used to define the order of execution */
              order: 500,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: arrow,

              /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
              element: '[x-arrow]'
            },

            /**
             * Modifier used to flip the popper's placement when it starts to overlap its
             * reference element.
             *
             * Requires the `preventOverflow` modifier before it in order to work.
             *
             * **NOTE:** this modifier will interrupt the current update cycle and will
             * restart it if it detects the need to flip the placement.
             * @memberof modifiers
             * @inner
             */
            flip: {
              /** @prop {number} order=600 - Index used to define the order of execution */
              order: 600,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: flip,

              /**
               * @prop {String|Array} behavior='flip'
               * The behavior used to change the popper's placement. It can be one of
               * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
               * placements (with optional variations).
               */
              behavior: 'flip',

              /**
               * @prop {number} padding=5
               * The popper will flip if it hits the edges of the `boundariesElement`
               */
              padding: 5,

              /**
               * @prop {String|HTMLElement} boundariesElement='viewport'
               * The element which will define the boundaries of the popper position,
               * the popper will never be placed outside of the defined boundaries
               * (except if keepTogether is enabled)
               */
              boundariesElement: 'viewport'
            },

            /**
             * Modifier used to make the popper flow toward the inner of the reference element.
             * By default, when this modifier is disabled, the popper will be placed outside
             * the reference element.
             * @memberof modifiers
             * @inner
             */
            inner: {
              /** @prop {number} order=700 - Index used to define the order of execution */
              order: 700,

              /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
              enabled: false,

              /** @prop {ModifierFn} */
              fn: inner
            },

            /**
             * Modifier used to hide the popper when its reference element is outside of the
             * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
             * be used to hide with a CSS selector the popper when its reference is
             * out of boundaries.
             *
             * Requires the `preventOverflow` modifier before it in order to work.
             * @memberof modifiers
             * @inner
             */
            hide: {
              /** @prop {number} order=800 - Index used to define the order of execution */
              order: 800,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: hide
            },

            /**
             * Computes the style that will be applied to the popper element to gets
             * properly positioned.
             *
             * Note that this modifier will not touch the DOM, it just prepares the styles
             * so that `applyStyle` modifier can apply it. This separation is useful
             * in case you need to replace `applyStyle` with a custom implementation.
             *
             * This modifier has `850` as `order` value to maintain backward compatibility
             * with previous versions of Popper.js. Expect the modifiers ordering method
             * to change in future major versions of the library.
             *
             * @memberof modifiers
             * @inner
             */
            computeStyle: {
              /** @prop {number} order=850 - Index used to define the order of execution */
              order: 850,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: computeStyle,

              /**
               * @prop {Boolean} gpuAcceleration=true
               * If true, it uses the CSS 3d transformation to position the popper.
               * Otherwise, it will use the `top` and `left` properties.
               */
              gpuAcceleration: true,

              /**
               * @prop {string} [x='bottom']
               * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
               * Change this if your popper should grow in a direction different from `bottom`
               */
              x: 'bottom',

              /**
               * @prop {string} [x='left']
               * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
               * Change this if your popper should grow in a direction different from `right`
               */
              y: 'right'
            },

            /**
             * Applies the computed styles to the popper element.
             *
             * All the DOM manipulations are limited to this modifier. This is useful in case
             * you want to integrate Popper.js inside a framework or view library and you
             * want to delegate all the DOM manipulations to it.
             *
             * Note that if you disable this modifier, you must make sure the popper element
             * has its position set to `absolute` before Popper.js can do its work!
             *
             * Just disable this modifier and define you own to achieve the desired effect.
             *
             * @memberof modifiers
             * @inner
             */
            applyStyle: {
              /** @prop {number} order=900 - Index used to define the order of execution */
              order: 900,

              /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
              enabled: true,

              /** @prop {ModifierFn} */
              fn: applyStyle,

              /** @prop {Function} */
              onLoad: applyStyleOnLoad,

              /**
               * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
               * @prop {Boolean} gpuAcceleration=true
               * If true, it uses the CSS 3d transformation to position the popper.
               * Otherwise, it will use the `top` and `left` properties.
               */
              gpuAcceleration: undefined
            }
          };
          /**
           * The `dataObject` is an object containing all the informations used by Popper.js
           * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
           * @name dataObject
           * @property {Object} data.instance The Popper.js instance
           * @property {String} data.placement Placement applied to popper
           * @property {String} data.originalPlacement Placement originally defined on init
           * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
           * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
           * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
           * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
           * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
           * @property {Object} data.boundaries Offsets of the popper boundaries
           * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
           * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
           * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
           * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
           */

          /**
           * Default options provided to Popper.js constructor.<br />
           * These can be overriden using the `options` argument of Popper.js.<br />
           * To override an option, simply pass as 3rd argument an object with the same
           * structure of this object, example:
           * ```
           * new Popper(ref, pop, {
           *   modifiers: {
           *     preventOverflow: { enabled: false }
           *   }
           * })
           * ```
           * @type {Object}
           * @static
           * @memberof Popper
           */

          var Defaults = {
            /**
             * Popper's placement
             * @prop {Popper.placements} placement='bottom'
             */
            placement: 'bottom',

            /**
             * Set this to true if you want popper to position it self in 'fixed' mode
             * @prop {Boolean} positionFixed=false
             */
            positionFixed: false,

            /**
             * Whether events (resize, scroll) are initially enabled
             * @prop {Boolean} eventsEnabled=true
             */
            eventsEnabled: true,

            /**
             * Set to true if you want to automatically remove the popper when
             * you call the `destroy` method.
             * @prop {Boolean} removeOnDestroy=false
             */
            removeOnDestroy: false,

            /**
             * Callback called when the popper is created.<br />
             * By default, is set to no-op.<br />
             * Access Popper.js instance with `data.instance`.
             * @prop {onCreate}
             */
            onCreate: function onCreate() {},

            /**
             * Callback called when the popper is updated, this callback is not called
             * on the initialization/creation of the popper, but only on subsequent
             * updates.<br />
             * By default, is set to no-op.<br />
             * Access Popper.js instance with `data.instance`.
             * @prop {onUpdate}
             */
            onUpdate: function onUpdate() {},

            /**
             * List of modifiers used to modify the offsets before they are applied to the popper.
             * They provide most of the functionalities of Popper.js
             * @prop {modifiers}
             */
            modifiers: modifiers
          };
          /**
           * @callback onCreate
           * @param {dataObject} data
           */

          /**
           * @callback onUpdate
           * @param {dataObject} data
           */
          // Utils
          // Methods

          var Popper = function () {
            /**
             * Create a new Popper.js instance
             * @class Popper
             * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
             * @param {HTMLElement} popper - The HTML element used as popper.
             * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
             * @return {Object} instance - The generated Popper.js instance
             */
            function Popper(reference, popper) {
              var _this = this;

              var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
              classCallCheck(this, Popper);

              this.scheduleUpdate = function () {
                return requestAnimationFrame(_this.update);
              }; // make update() debounced, so that it only runs at most once-per-tick


              this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

              this.options = _extends({}, Popper.Defaults, options); // init state

              this.state = {
                isDestroyed: false,
                isCreated: false,
                scrollParents: []
              }; // get reference and popper elements (allow jQuery wrappers)

              this.reference = reference && reference.jquery ? reference[0] : reference;
              this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

              this.options.modifiers = {};
              Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
                _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
              }); // Refactoring modifiers' list (Object => Array)

              this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
                return _extends({
                  name: name
                }, _this.options.modifiers[name]);
              }) // sort the modifiers by order
              .sort(function (a, b) {
                return a.order - b.order;
              }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
              // such code is executed in the same order of its modifier
              // they could add new properties to their options configuration
              // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

              this.modifiers.forEach(function (modifierOptions) {
                if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
                  modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
                }
              }); // fire the first update to position the popper in the right place

              this.update();
              var eventsEnabled = this.options.eventsEnabled;

              if (eventsEnabled) {
                // setup event listeners, they will take care of update the position in specific situations
                this.enableEventListeners();
              }

              this.state.eventsEnabled = eventsEnabled;
            } // We can't use class properties because they don't get listed in the
            // class prototype and break stuff like Sinon stubs


            createClass(Popper, [{
              key: 'update',
              value: function update$$1() {
                return update.call(this);
              }
            }, {
              key: 'destroy',
              value: function destroy$$1() {
                return destroy.call(this);
              }
            }, {
              key: 'enableEventListeners',
              value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
              }
            }, {
              key: 'disableEventListeners',
              value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
              }
              /**
               * Schedule an update, it will run on the next UI update available
               * @method scheduleUpdate
               * @memberof Popper
               */

              /**
               * Collection of utilities useful when writing custom modifiers.
               * Starting from version 1.7, this method is available only if you
               * include `popper-utils.js` before `popper.js`.
               *
               * **DEPRECATION**: This way to access PopperUtils is deprecated
               * and will be removed in v2! Use the PopperUtils module directly instead.
               * Due to the high instability of the methods contained in Utils, we can't
               * guarantee them to follow semver. Use them at your own risk!
               * @static
               * @private
               * @type {Object}
               * @deprecated since version 1.8
               * @member Utils
               * @memberof Popper
               */

            }]);
            return Popper;
          }();
          /**
           * The `referenceObject` is an object that provides an interface compatible with Popper.js
           * and lets you use it as replacement of a real DOM node.<br />
           * You can use this method to position a popper relatively to a set of coordinates
           * in case you don't have a DOM node to use as reference.
           *
           * ```
           * new Popper(referenceObject, popperNode);
           * ```
           *
           * NB: This feature isn't supported in Internet Explorer 10
           * @name referenceObject
           * @property {Function} data.getBoundingClientRect
           * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
           * @property {number} data.clientWidth
           * An ES6 getter that will return the width of the virtual reference element.
           * @property {number} data.clientHeight
           * An ES6 getter that will return the height of the virtual reference element.
           */


          Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
          Popper.placements = placements;
          Popper.Defaults = Defaults;
          /* harmony default export */

          __webpack_exports__["a"] = Popper;
          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__("yLpj"));
        /***/
      },

      /***/
      "Afnz":
      /***/
      function Afnz(module, exports, __webpack_require__) {
        "use strict";

        var LIBRARY = __webpack_require__("LQAc");

        var $export = __webpack_require__("XKFU");

        var redefine = __webpack_require__("KroJ");

        var hide = __webpack_require__("Mukb");

        var Iterators = __webpack_require__("hPIQ");

        var $iterCreate = __webpack_require__("QaDb");

        var setToStringTag = __webpack_require__("fyDq");

        var getPrototypeOf = __webpack_require__("OP3Y");

        var ITERATOR = __webpack_require__("K0xU")('iterator');

        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function returnThis() {
          return this;
        };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);

          var getMethod = function getMethod(kind) {
            if (!BUGGY && kind in proto) return proto[kind];

            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };

              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }

            return function entries() {
              return new Constructor(this, kind);
            };
          };

          var TAG = NAME + ' Iterator';
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype; // Fix native

          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
            }
          } // fix Array#{values, @@iterator}.name in V8 / FF


          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;

            $default = function values() {
              return $native.call(this);
            };
          } // Define iterator


          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          } // Plug for library


          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;

          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED) for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }

          return methods;
        };
        /***/

      },

      /***/
      "DVgA":
      /***/
      function DVgA(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__("zhAb");

        var enumBugKeys = __webpack_require__("4R4u");

        module.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };
        /***/

      },

      /***/
      "FJW5":
      /***/
      function FJW5(module, exports, __webpack_require__) {
        var dP = __webpack_require__("hswa");

        var anObject = __webpack_require__("y3w9");

        var getKeys = __webpack_require__("DVgA");

        module.exports = __webpack_require__("nh4g") ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i = 0;
          var P;

          while (length > i) {
            dP.f(O, P = keys[i++], Properties[P]);
          }

          return O;
        };
        /***/
      },

      /***/
      "HrLf":
      /***/
      function HrLf(module, exports, __webpack_require__) {
        // This file is imported into lib/wc client bundles.
        if (typeof window !== 'undefined') {
          var i;

          if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
            __webpack_require__.p = i[1]; // eslint-disable-line
          }
        }
        /***/

      },

      /***/
      "IU+Z":
      /***/
      function IUZ(module, exports, __webpack_require__) {
        "use strict";

        var hide = __webpack_require__("Mukb");

        var redefine = __webpack_require__("KroJ");

        var fails = __webpack_require__("eeVq");

        var defined = __webpack_require__("vhPU");

        var wks = __webpack_require__("K0xU");

        module.exports = function (KEY, length, exec) {
          var SYMBOL = wks(KEY);
          var fns = exec(defined, SYMBOL, ''[KEY]);
          var strfn = fns[0];
          var rxfn = fns[1];

          if (fails(function () {
            var O = {};

            O[SYMBOL] = function () {
              return 7;
            };

            return ''[KEY](O) != 7;
          })) {
            redefine(String.prototype, KEY, strfn);
            hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) {
              return rxfn.call(string, this, arg);
            } // 21.2.5.6 RegExp.prototype[@@match](string)
            // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) {
              return rxfn.call(string, this);
            });
          }
        };
        /***/

      },

      /***/
      "Iw71":
      /***/
      function Iw71(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("0/R4");

        var document = __webpack_require__("dyZX").document; // typeof document.createElement is 'object' in old IE


        var is = isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return is ? document.createElement(it) : {};
        };
        /***/

      },

      /***/
      "K0xU":
      /***/
      function K0xU(module, exports, __webpack_require__) {
        var store = __webpack_require__("VTer")('wks');

        var uid = __webpack_require__("ylqs");

        var _Symbol = __webpack_require__("dyZX").Symbol;

        var USE_SYMBOL = typeof _Symbol == 'function';

        var $exports = module.exports = function (name) {
          return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;
        /***/
      },

      /***/
      "KKXr":
      /***/
      function KKXr(module, exports, __webpack_require__) {
        // @@split logic
        __webpack_require__("IU+Z")('split', 2, function (defined, SPLIT, $split) {
          'use strict';

          var isRegExp = __webpack_require__("quPj");

          var _split = $split;
          var $push = [].push;
          var $SPLIT = 'split';
          var LENGTH = 'length';
          var LAST_INDEX = 'lastIndex';

          if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
            var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
            // based on es5-shim implementation, need to rework it

            $split = function $split(separator, limit) {
              var string = String(this);
              if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

              if (!isRegExp(separator)) return _split.call(string, separator, limit);
              var output = [];
              var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
              var lastLastIndex = 0;
              var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

              var separatorCopy = new RegExp(separator.source, flags + 'g');
              var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

              if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

              while (match = separatorCopy.exec(string)) {
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0][LENGTH];

                if (lastIndex > lastLastIndex) {
                  output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
                  // eslint-disable-next-line no-loop-func

                  if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
                    for (i = 1; i < arguments[LENGTH] - 2; i++) {
                      if (arguments[i] === undefined) match[i] = undefined;
                    }
                  });
                  if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                  lastLength = match[0][LENGTH];
                  lastLastIndex = lastIndex;
                  if (output[LENGTH] >= splitLimit) break;
                }

                if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
              }

              if (lastLastIndex === string[LENGTH]) {
                if (lastLength || !separatorCopy.test('')) output.push('');
              } else output.push(string.slice(lastLastIndex));

              return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
            }; // Chakra, V8

          } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
            $split = function $split(separator, limit) {
              return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
            };
          } // 21.1.3.17 String.prototype.split(separator, limit)


          return [function split(separator, limit) {
            var O = defined(this);
            var fn = separator == undefined ? undefined : separator[SPLIT];
            return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
          }, $split];
        });
        /***/

      },

      /***/
      "KroJ":
      /***/
      function KroJ(module, exports, __webpack_require__) {
        var global = __webpack_require__("dyZX");

        var hide = __webpack_require__("Mukb");

        var has = __webpack_require__("aagx");

        var SRC = __webpack_require__("ylqs")('src');

        var TO_STRING = 'toString';
        var $toString = Function[TO_STRING];
        var TPL = ('' + $toString).split(TO_STRING);

        __webpack_require__("g3g5").inspectSource = function (it) {
          return $toString.call(it);
        };

        (module.exports = function (O, key, val, safe) {
          var isFunction = typeof val == 'function';
          if (isFunction) has(val, 'name') || hide(val, 'name', key);
          if (O[key] === val) return;
          if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

          if (O === global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            hide(O, key, val);
          } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

        })(Function.prototype, TO_STRING, function toString() {
          return typeof this == 'function' && this[SRC] || $toString.call(this);
        });
        /***/
      },

      /***/
      "Kuth":
      /***/
      function Kuth(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__("y3w9");

        var dPs = __webpack_require__("FJW5");

        var enumBugKeys = __webpack_require__("4R4u");

        var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');

        var Empty = function Empty() {
          /* empty */
        };

        var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

        var _createDict = function createDict() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__("Iw71")('iframe');

          var i = enumBugKeys.length;
          var lt = '<';
          var gt = '>';
          var iframeDocument;
          iframe.style.display = 'none';

          __webpack_require__("+rLv").appendChild(iframe);

          iframe.src = 'javascript:'; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);

          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
          iframeDocument.close();
          _createDict = iframeDocument.F;

          while (i--) {
            delete _createDict[PROTOTYPE][enumBugKeys[i]];
          }

          return _createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
          var result;

          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

            result[IE_PROTO] = O;
          } else result = _createDict();

          return Properties === undefined ? result : dPs(result, Properties);
        };
        /***/

      },

      /***/
      "LQAc":
      /***/
      function LQAc(module, exports) {
        module.exports = false;
        /***/
      },

      /***/
      "LZWt":
      /***/
      function LZWt(module, exports) {
        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };
        /***/

      },

      /***/
      "LyE8":
      /***/
      function LyE8(module, exports, __webpack_require__) {
        "use strict";

        var fails = __webpack_require__("eeVq");

        module.exports = function (method, arg) {
          return !!method && fails(function () {
            // eslint-disable-next-line no-useless-call
            arg ? method.call(null, function () {
              /* empty */
            }, 1) : method.call(null);
          });
        };
        /***/

      },

      /***/
      "Mukb":
      /***/
      function Mukb(module, exports, __webpack_require__) {
        var dP = __webpack_require__("hswa");

        var createDesc = __webpack_require__("RjD/");

        module.exports = __webpack_require__("nh4g") ? function (object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };
        /***/
      },

      /***/
      "OG14":
      /***/
      function OG14(module, exports, __webpack_require__) {
        // @@search logic
        __webpack_require__("IU+Z")('search', 1, function (defined, SEARCH, $search) {
          // 21.1.3.15 String.prototype.search(regexp)
          return [function search(regexp) {
            'use strict';

            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[SEARCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
          }, $search];
        });
        /***/

      },

      /***/
      "OP3Y":
      /***/
      function OP3Y(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__("aagx");

        var toObject = __webpack_require__("S/j/");

        var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');

        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];

          if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
          }

          return O instanceof Object ? ObjectProto : null;
        };
        /***/

      },

      /***/
      "QaDb":
      /***/
      function QaDb(module, exports, __webpack_require__) {
        "use strict";

        var create = __webpack_require__("Kuth");

        var descriptor = __webpack_require__("RjD/");

        var setToStringTag = __webpack_require__("fyDq");

        var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

        __webpack_require__("Mukb")(IteratorPrototype, __webpack_require__("K0xU")('iterator'), function () {
          return this;
        });

        module.exports = function (Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
          });
          setToStringTag(Constructor, NAME + ' Iterator');
        };
        /***/

      },

      /***/
      "RW0V":
      /***/
      function RW0V(module, exports, __webpack_require__) {
        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__("S/j/");

        var $keys = __webpack_require__("DVgA");

        __webpack_require__("Xtr8")('keys', function () {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });
        /***/

      },

      /***/
      "RYi7":
      /***/
      function RYi7(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;

        module.exports = function (it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
        /***/

      },

      /***/
      "RjD/":
      /***/
      function RjD(module, exports) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };
        /***/

      },

      /***/
      "S/j/":
      /***/
      function SJ(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__("vhPU");

        module.exports = function (it) {
          return Object(defined(it));
        };
        /***/

      },

      /***/
      "VTer":
      /***/
      function VTer(module, exports, __webpack_require__) {
        var core = __webpack_require__("g3g5");

        var global = __webpack_require__("dyZX");

        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});
        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: core.version,
          mode: __webpack_require__("LQAc") ? 'pure' : 'global',
          copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
        });
        /***/
      },

      /***/
      "Vd3H":
      /***/
      function Vd3H(module, exports, __webpack_require__) {
        "use strict";

        var $export = __webpack_require__("XKFU");

        var aFunction = __webpack_require__("2OiF");

        var toObject = __webpack_require__("S/j/");

        var fails = __webpack_require__("eeVq");

        var $sort = [].sort;
        var test = [1, 2, 3];
        $export($export.P + $export.F * (fails(function () {
          // IE8-
          test.sort(undefined);
        }) || !fails(function () {
          // V8 bug
          test.sort(null); // Old WebKit
        }) || !__webpack_require__("LyE8")($sort)), 'Array', {
          // 22.1.3.25 Array.prototype.sort(comparefn)
          sort: function sort(comparefn) {
            return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
          }
        });
        /***/
      },

      /***/
      "XKFU":
      /***/
      function XKFU(module, exports, __webpack_require__) {
        var global = __webpack_require__("dyZX");

        var core = __webpack_require__("g3g5");

        var hide = __webpack_require__("Mukb");

        var redefine = __webpack_require__("KroJ");

        var ctx = __webpack_require__("m0Pp");

        var PROTOTYPE = 'prototype';

        var $export = function $export(type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
          var key, own, out, exp;
          if (IS_GLOBAL) source = name;

          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

            out = (own ? target : source)[key]; // bind timers to global for call from export context

            exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

            if (target) redefine(target, key, out, type & $export.U); // export

            if (exports[key] != out) hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
          }
        };

        global.core = core; // type bitmap

        $export.F = 1; // forced

        $export.G = 2; // global

        $export.S = 4; // static

        $export.P = 8; // proto

        $export.B = 16; // bind

        $export.W = 32; // wrap

        $export.U = 64; // safe

        $export.R = 128; // real proto method for `library`

        module.exports = $export;
        /***/
      },

      /***/
      "Xtr8":
      /***/
      function Xtr8(module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__("XKFU");

        var core = __webpack_require__("g3g5");

        var fails = __webpack_require__("eeVq");

        module.exports = function (KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY];
          var exp = {};
          exp[KEY] = exec(fn);
          $export($export.S + $export.F * fails(function () {
            fn(1);
          }), 'Object', exp);
        };
        /***/

      },

      /***/
      "YTvA":
      /***/
      function YTvA(module, exports, __webpack_require__) {
        var shared = __webpack_require__("VTer")('keys');

        var uid = __webpack_require__("ylqs");

        module.exports = function (key) {
          return shared[key] || (shared[key] = uid(key));
        };
        /***/

      },

      /***/
      "Ymqv":
      /***/
      function Ymqv(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__("LZWt"); // eslint-disable-next-line no-prototype-builtins


        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
          return cof(it) == 'String' ? it.split('') : Object(it);
        };
        /***/
      },

      /***/
      "aCFj":
      /***/
      function aCFj(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__("Ymqv");

        var defined = __webpack_require__("vhPU");

        module.exports = function (it) {
          return IObject(defined(it));
        };
        /***/

      },

      /***/
      "aagx":
      /***/
      function aagx(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };
        /***/

      },

      /***/
      "apmT":
      /***/
      function apmT(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__("0/R4"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string


        module.exports = function (it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
          if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          throw TypeError("Can't convert object to primitive value");
        };
        /***/

      },

      /***/
      "d/Gc":
      /***/
      function dGc(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__("RYi7");

        var max = Math.max;
        var min = Math.min;

        module.exports = function (index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };
        /***/

      },

      /***/
      "dyZX":
      /***/
      function dyZX(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
        : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

        /***/
      },

      /***/
      "eeVq":
      /***/
      function eeVq(module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
        /***/

      },

      /***/
      "f3/d":
      /***/
      function f3D(module, exports, __webpack_require__) {
        var dP = __webpack_require__("hswa").f;

        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name'; // 19.2.4.2 name

        NAME in FProto || __webpack_require__("nh4g") && dP(FProto, NAME, {
          configurable: true,
          get: function get() {
            try {
              return ('' + this).match(nameRE)[1];
            } catch (e) {
              return '';
            }
          }
        });
        /***/
      },

      /***/
      "fyDq":
      /***/
      function fyDq(module, exports, __webpack_require__) {
        var def = __webpack_require__("hswa").f;

        var has = __webpack_require__("aagx");

        var TAG = __webpack_require__("K0xU")('toStringTag');

        module.exports = function (it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
            configurable: true,
            value: tag
          });
        };
        /***/

      },

      /***/
      "g3g5":
      /***/
      function g3g5(module, exports) {
        var core = module.exports = {
          version: '2.5.7'
        };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

        /***/
      },

      /***/
      "hPIQ":
      /***/
      function hPIQ(module, exports) {
        module.exports = {};
        /***/
      },

      /***/
      "hswa":
      /***/
      function hswa(module, exports, __webpack_require__) {
        var anObject = __webpack_require__("y3w9");

        var IE8_DOM_DEFINE = __webpack_require__("xpql");

        var toPrimitive = __webpack_require__("apmT");

        var dP = Object.defineProperty;
        exports.f = __webpack_require__("nh4g") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
          } catch (e) {
            /* empty */
          }
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };
        /***/
      },

      /***/
      "m0Pp":
      /***/
      function m0Pp(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__("2OiF");

        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;

          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };

            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };

            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }

          return function ()
          /* ...args */
          {
            return fn.apply(that, arguments);
          };
        };
        /***/

      },

      /***/
      "nGyu":
      /***/
      function nGyu(module, exports, __webpack_require__) {
        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__("K0xU")('unscopables');

        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("Mukb")(ArrayProto, UNSCOPABLES, {});

        module.exports = function (key) {
          ArrayProto[UNSCOPABLES][key] = true;
        };
        /***/

      },

      /***/
      "ne8i":
      /***/
      function ne8i(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__("RYi7");

        var min = Math.min;

        module.exports = function (it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };
        /***/

      },

      /***/
      "nh4g":
      /***/
      function nh4g(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__("eeVq")(function () {
          return Object.defineProperty({}, 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });
        /***/
      },

      /***/
      "q6hk":
      /***/
      function q6hk(module, exports, __webpack_require__) {
        "use strict";

        var emojiModifierBase = __webpack_require__("0L20");

        var skinTones = [{
          name: 'NONE',
          color: ''
        }, {
          name: 'WHITE',
          color: '🏻'
        }, {
          name: 'CREAM_WHITE',
          color: '🏼'
        }, {
          name: 'LIGHT_BROWN',
          color: '🏽'
        }, {
          name: 'BROWN',
          color: '🏾'
        }, {
          name: 'DARK_BROWN',
          color: '🏿'
        }];

        module.exports = function (emoji, type) {
          if (type > 5 || type < 0) {
            throw new TypeError("Expected `type` to be a number between 0 and 5, got ".concat(type));
          } // TODO: Use this instead when targeting Node.js 6
          // emoji = emoji.replace(/[\u{1f3fb}-\u{1f3ff}]/u, '');


          skinTones.forEach(function (x) {
            emoji = emoji.replace(x.color, '');
          });

          if (emojiModifierBase.has(emoji.codePointAt(0)) && type !== 0) {
            emoji += skinTones[type].color;
          }

          return emoji;
        };

        skinTones.forEach(function (x, i) {
          Object.defineProperty(module.exports, x.name, {
            value: i,
            enumerable: true
          });
        });
        /***/
      },

      /***/
      "quPj":
      /***/
      function quPj(module, exports, __webpack_require__) {
        // 7.2.8 IsRegExp(argument)
        var isObject = __webpack_require__("0/R4");

        var cof = __webpack_require__("LZWt");

        var MATCH = __webpack_require__("K0xU")('match');

        module.exports = function (it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };
        /***/

      },

      /***/
      "rGqo":
      /***/
      function rGqo(module, exports, __webpack_require__) {
        var $iterators = __webpack_require__("yt8O");

        var getKeys = __webpack_require__("DVgA");

        var redefine = __webpack_require__("KroJ");

        var global = __webpack_require__("dyZX");

        var hide = __webpack_require__("Mukb");

        var Iterators = __webpack_require__("hPIQ");

        var wks = __webpack_require__("K0xU");

        var ITERATOR = wks('iterator');
        var TO_STRING_TAG = wks('toStringTag');
        var ArrayValues = Iterators.Array;
        var DOMIterables = {
          CSSRuleList: true,
          // TODO: Not spec compliant, should be false.
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true,
          // TODO: Not spec compliant, should be false.
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true,
          // TODO: Not spec compliant, should be false.
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false
        };

        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
          var NAME = collections[i];
          var explicit = DOMIterables[NAME];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          var key;

          if (proto) {
            if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
            if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = ArrayValues;
            if (explicit) for (key in $iterators) {
              if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
          }
        }
        /***/

      },

      /***/
      "vV15":
      /***/
      function vV15(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "vhPU":
      /***/
      function vhPU(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };
        /***/

      },

      /***/
      "w2a5":
      /***/
      function w2a5(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__("aCFj");

        var toLength = __webpack_require__("ne8i");

        var toAbsoluteIndex = __webpack_require__("d/Gc");

        module.exports = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value; // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare

            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++]; // eslint-disable-next-line no-self-compare

              if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
            }
            return !IS_INCLUDES && -1;
          };
        };
        /***/

      },

      /***/
      "xpql":
      /***/
      function xpql(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__("nh4g") && !__webpack_require__("eeVq")(function () {
          return Object.defineProperty(__webpack_require__("Iw71")('div'), 'a', {
            get: function get() {
              return 7;
            }
          }).a != 7;
        });
        /***/
      },

      /***/
      "y3w9":
      /***/
      function y3w9(module, exports, __webpack_require__) {
        var isObject = __webpack_require__("0/R4");

        module.exports = function (it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!');
          return it;
        };
        /***/

      },

      /***/
      "yLpj":
      /***/
      function yLpj(module, exports) {
        var g; // This works in non-strict mode

        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
          // This works if the window reference is available
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}


        module.exports = g;
        /***/
      },

      /***/
      "yY3l":
      /***/
      function yY3l(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_lang_scss_style_scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vV15");
        /* harmony import */


        var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_lang_scss_style_scope__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_lang_scss_style_scope__WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /* unused harmony default export */


        var _unused_webpack_default_export = _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiPicker_vue_vue_type_style_index_0_lang_scss_style_scope__WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/
      },

      /***/
      "ylqs":
      /***/
      function ylqs(module, exports) {
        var id = 0;
        var px = Math.random();

        module.exports = function (key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };
        /***/

      },

      /***/
      "yt8O":
      /***/
      function yt8O(module, exports, __webpack_require__) {
        "use strict";

        var addToUnscopables = __webpack_require__("nGyu");

        var step = __webpack_require__("1TsA");

        var Iterators = __webpack_require__("hPIQ");

        var toIObject = __webpack_require__("aCFj"); // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()


        module.exports = __webpack_require__("Afnz")(Array, 'Array', function (iterated, kind) {
          this._t = toIObject(iterated); // target

          this._i = 0; // next index

          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;

          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }

          if (kind == 'keys') return step(0, index);
          if (kind == 'values') return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

        Iterators.Arguments = Iterators.Array;
        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');
        /***/
      },

      /***/
      "zhAb":
      /***/
      function zhAb(module, exports, __webpack_require__) {
        var has = __webpack_require__("aagx");

        var toIObject = __webpack_require__("aCFj");

        var arrayIndexOf = __webpack_require__("w2a5")(false);

        var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');

        module.exports = function (object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;

          for (key in O) {
            if (key != IE_PROTO) has(O, key) && result.push(key);
          } // Don't enum bug & hidden keys


          while (names.length > i) {
            if (has(O, key = names[i++])) {
              ~arrayIndexOf(result, key) || result.push(key);
            }
          }

          return result;
        };
        /***/

      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_1a21668e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_1a21668e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_1a21668e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_1a21668e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_1a21668e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_1a21668e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "message" }, [
    _c("div", {
      ref: "textarea",
      staticClass: "rich-editor-container",
      attrs: { contenteditable: "true", placeholder: "Type a message..." },
      on: {
        keypress: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          $event.preventDefault()
        },
        input: function($event) {
          _vm.updateBody($event.target.innerHTML)
        },
        click: _vm.handleEditorClick
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "message-emoji" },
      [
        _c("emoji-picker", {
          attrs: { data: _vm.emojis },
          on: { "emoji:picked": _vm.handleEmojiPicked }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emojis = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _default = {
  data: function data() {
    return {
      emojis: _emojis.default,
      body: ''
    };
  },
  methods: {
    updateBody: function updateBody(text) {
      this.body = text;
    },
    handleEmojiPicked: function handleEmojiPicked(emoji) {
      this.$refs.textarea.innerHTML = "".concat(this.$refs.textarea.innerHTML, " ").concat(emoji);
      this.updateBody(this.$refs.textarea.innerHTML);
    },
    handleEditorClick: function handleEditorClick() {
      this.focusEditor();
    },
    focusEditor: function focusEditor() {
      this.$refs.textarea.focus();
    }
  },
  mounted: function mounted() {
    this.focusEditor();
  }
};
exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = [{"emoji":"😀","description":"grinning face","category":"People","aliases":["grinning"],"tags":["smile","happy"],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😃","description":"smiling face with open mouth","category":"People","aliases":["smiley"],"tags":["happy","joy","haha"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😄","description":"smiling face with open mouth & smiling eyes","category":"People","aliases":["smile"],"tags":["happy","joy","laugh","pleased"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😁","description":"grinning face with smiling eyes","category":"People","aliases":["grin"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😆","description":"smiling face with open mouth & closed eyes","category":"People","aliases":["laughing","satisfied"],"tags":["happy","haha"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😅","description":"smiling face with open mouth & cold sweat","category":"People","aliases":["sweat_smile"],"tags":["hot"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😂","description":"face with tears of joy","category":"People","aliases":["joy"],"tags":["tears"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤣","description":"rolling on the floor laughing","category":"People","aliases":["rofl"],"tags":["lol","laughing"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"☺️","description":"smiling face","category":"People","aliases":["relaxed"],"tags":["blush","pleased"],"unicode_version":"","ios_version":"6.0"},{"emoji":"😊","description":"smiling face with smiling eyes","category":"People","aliases":["blush"],"tags":["proud"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😇","description":"smiling face with halo","category":"People","aliases":["innocent"],"tags":["angel"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙂","description":"slightly smiling face","category":"People","aliases":["slightly_smiling_face"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🙃","description":"upside-down face","category":"People","aliases":["upside_down_face"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"😉","description":"winking face","category":"People","aliases":["wink"],"tags":["flirt"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😌","description":"relieved face","category":"People","aliases":["relieved"],"tags":["whew"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😍","description":"smiling face with heart-eyes","category":"People","aliases":["heart_eyes"],"tags":["love","crush"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😘","description":"face blowing a kiss","category":"People","aliases":["kissing_heart"],"tags":["flirt"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😗","description":"kissing face","category":"People","aliases":["kissing"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😙","description":"kissing face with smiling eyes","category":"People","aliases":["kissing_smiling_eyes"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😚","description":"kissing face with closed eyes","category":"People","aliases":["kissing_closed_eyes"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😋","description":"face savouring delicious food","category":"People","aliases":["yum"],"tags":["tongue","lick"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😜","description":"face with stuck-out tongue & winking eye","category":"People","aliases":["stuck_out_tongue_winking_eye"],"tags":["prank","silly"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😝","description":"face with stuck-out tongue & closed eyes","category":"People","aliases":["stuck_out_tongue_closed_eyes"],"tags":["prank"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😛","description":"face with stuck-out tongue","category":"People","aliases":["stuck_out_tongue"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"🤑","description":"money-mouth face","category":"People","aliases":["money_mouth_face"],"tags":["rich"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤗","description":"hugging face","category":"People","aliases":["hugs"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤓","description":"nerd face","category":"People","aliases":["nerd_face"],"tags":["geek","glasses"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"😎","description":"smiling face with sunglasses","category":"People","aliases":["sunglasses"],"tags":["cool"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤡","description":"clown face","category":"People","aliases":["clown_face"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤠","description":"cowboy hat face","category":"People","aliases":["cowboy_hat_face"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"😏","description":"smirking face","category":"People","aliases":["smirk"],"tags":["smug"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😒","description":"unamused face","category":"People","aliases":["unamused"],"tags":["meh"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😞","description":"disappointed face","category":"People","aliases":["disappointed"],"tags":["sad"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😔","description":"pensive face","category":"People","aliases":["pensive"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😟","description":"worried face","category":"People","aliases":["worried"],"tags":["nervous"],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😕","description":"confused face","category":"People","aliases":["confused"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"🙁","description":"slightly frowning face","category":"People","aliases":["slightly_frowning_face"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"☹️","description":"frowning face","category":"People","aliases":["frowning_face"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"😣","description":"persevering face","category":"People","aliases":["persevere"],"tags":["struggling"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😖","description":"confounded face","category":"People","aliases":["confounded"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😫","description":"tired face","category":"People","aliases":["tired_face"],"tags":["upset","whine"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😩","description":"weary face","category":"People","aliases":["weary"],"tags":["tired"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😤","description":"face with steam from nose","category":"People","aliases":["triumph"],"tags":["smug"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😠","description":"angry face","category":"People","aliases":["angry"],"tags":["mad","annoyed"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😡","description":"pouting face","category":"People","aliases":["rage","pout"],"tags":["angry"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😶","description":"face without mouth","category":"People","aliases":["no_mouth"],"tags":["mute","silence"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😐","description":"neutral face","category":"People","aliases":["neutral_face"],"tags":["meh"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😑","description":"expressionless face","category":"People","aliases":["expressionless"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😯","description":"hushed face","category":"People","aliases":["hushed"],"tags":["silence","speechless"],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😦","description":"frowning face with open mouth","category":"People","aliases":["frowning"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😧","description":"anguished face","category":"People","aliases":["anguished"],"tags":["stunned"],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😮","description":"face with open mouth","category":"People","aliases":["open_mouth"],"tags":["surprise","impressed","wow"],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"😲","description":"astonished face","category":"People","aliases":["astonished"],"tags":["amazed","gasp"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😵","description":"dizzy face","category":"People","aliases":["dizzy_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😳","description":"flushed face","category":"People","aliases":["flushed"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😱","description":"face screaming in fear","category":"People","aliases":["scream"],"tags":["horror","shocked"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😨","description":"fearful face","category":"People","aliases":["fearful"],"tags":["scared","shocked","oops"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😰","description":"face with open mouth & cold sweat","category":"People","aliases":["cold_sweat"],"tags":["nervous"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😢","description":"crying face","category":"People","aliases":["cry"],"tags":["sad","tear"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😥","description":"disappointed but relieved face","category":"People","aliases":["disappointed_relieved"],"tags":["phew","sweat","nervous"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤤","description":"drooling face","category":"People","aliases":["drooling_face"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"😭","description":"loudly crying face","category":"People","aliases":["sob"],"tags":["sad","cry","bawling"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😓","description":"face with cold sweat","category":"People","aliases":["sweat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😪","description":"sleepy face","category":"People","aliases":["sleepy"],"tags":["tired"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😴","description":"sleeping face","category":"People","aliases":["sleeping"],"tags":["zzz"],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"🙄","description":"face with rolling eyes","category":"People","aliases":["roll_eyes"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤔","description":"thinking face","category":"People","aliases":["thinking"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤥","description":"lying face","category":"People","aliases":["lying_face"],"tags":["liar"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"😬","description":"grimacing face","category":"People","aliases":["grimacing"],"tags":[],"unicode_version":"6.1","ios_version":"6.0"},{"emoji":"🤐","description":"zipper-mouth face","category":"People","aliases":["zipper_mouth_face"],"tags":["silence","hush"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤢","description":"nauseated face","category":"People","aliases":["nauseated_face"],"tags":["sick","barf","disgusted"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤧","description":"sneezing face","category":"People","aliases":["sneezing_face"],"tags":["achoo","sick"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"😷","description":"face with medical mask","category":"People","aliases":["mask"],"tags":["sick","ill"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤒","description":"face with thermometer","category":"People","aliases":["face_with_thermometer"],"tags":["sick"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤕","description":"face with head-bandage","category":"People","aliases":["face_with_head_bandage"],"tags":["hurt"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"😈","description":"smiling face with horns","category":"People","aliases":["smiling_imp"],"tags":["devil","evil","horns"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👿","description":"angry face with horns","category":"People","aliases":["imp"],"tags":["angry","devil","evil","horns"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👹","description":"ogre","category":"People","aliases":["japanese_ogre"],"tags":["monster"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👺","description":"goblin","category":"People","aliases":["japanese_goblin"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💩","description":"pile of poo","category":"People","aliases":["hankey","poop","shit"],"tags":["crap"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👻","description":"ghost","category":"People","aliases":["ghost"],"tags":["halloween"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💀","description":"skull","category":"People","aliases":["skull"],"tags":["dead","danger","poison"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☠️","description":"skull and crossbones","category":"People","aliases":["skull_and_crossbones"],"tags":["danger","pirate"],"unicode_version":"","ios_version":"9.1"},{"emoji":"👽","description":"alien","category":"People","aliases":["alien"],"tags":["ufo"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👾","description":"alien monster","category":"People","aliases":["space_invader"],"tags":["game","retro"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤖","description":"robot face","category":"People","aliases":["robot"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🎃","description":"jack-o-lantern","category":"People","aliases":["jack_o_lantern"],"tags":["halloween"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😺","description":"smiling cat face with open mouth","category":"People","aliases":["smiley_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😸","description":"grinning cat face with smiling eyes","category":"People","aliases":["smile_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😹","description":"cat face with tears of joy","category":"People","aliases":["joy_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😻","description":"smiling cat face with heart-eyes","category":"People","aliases":["heart_eyes_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😼","description":"cat face with wry smile","category":"People","aliases":["smirk_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😽","description":"kissing cat face with closed eyes","category":"People","aliases":["kissing_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙀","description":"weary cat face","category":"People","aliases":["scream_cat"],"tags":["horror"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😿","description":"crying cat face","category":"People","aliases":["crying_cat_face"],"tags":["sad","tear"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"😾","description":"pouting cat face","category":"People","aliases":["pouting_cat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👐","description":"open hands","category":"People","aliases":["open_hands"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙌","description":"raising hands","category":"People","aliases":["raised_hands"],"tags":["hooray"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👏","description":"clapping hands","category":"People","aliases":["clap"],"tags":["praise","applause"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙏","description":"folded hands","category":"People","aliases":["pray"],"tags":["please","hope","wish"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤝","description":"handshake","category":"People","aliases":["handshake"],"tags":["deal"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"👍","description":"thumbs up","category":"People","aliases":["+1","thumbsup"],"tags":["approve","ok"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👎","description":"thumbs down","category":"People","aliases":["-1","thumbsdown"],"tags":["disapprove","bury"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👊","description":"oncoming fist","category":"People","aliases":["fist_oncoming","facepunch","punch"],"tags":["attack"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✊","description":"raised fist","category":"People","aliases":["fist_raised","fist"],"tags":["power"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤛","description":"left-facing fist","category":"People","aliases":["fist_left"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤜","description":"right-facing fist","category":"People","aliases":["fist_right"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤞","description":"crossed fingers","category":"People","aliases":["crossed_fingers"],"tags":["luck","hopeful"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"✌️","description":"victory hand","category":"People","aliases":["v"],"tags":["victory","peace"],"unicode_version":"","ios_version":"6.0"},{"emoji":"🤘","description":"sign of the horns","category":"People","aliases":["metal"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"👌","description":"OK hand","category":"People","aliases":["ok_hand"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👈","description":"backhand index pointing left","category":"People","aliases":["point_left"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👉","description":"backhand index pointing right","category":"People","aliases":["point_right"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👆","description":"backhand index pointing up","category":"People","aliases":["point_up_2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👇","description":"backhand index pointing down","category":"People","aliases":["point_down"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☝️","description":"index pointing up","category":"People","aliases":["point_up"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"✋","description":"raised hand","category":"People","aliases":["hand","raised_hand"],"tags":["highfive","stop"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤚","description":"raised back of hand","category":"People","aliases":["raised_back_of_hand"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🖐","description":"raised hand with fingers splayed","category":"People","aliases":["raised_hand_with_fingers_splayed"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖖","description":"vulcan salute","category":"People","aliases":["vulcan_salute"],"tags":["prosper","spock"],"unicode_version":"7.0","ios_version":"8.3"},{"emoji":"👋","description":"waving hand","category":"People","aliases":["wave"],"tags":["goodbye"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤙","description":"call me hand","category":"People","aliases":["call_me_hand"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"💪","description":"flexed biceps","category":"People","aliases":["muscle"],"tags":["flex","bicep","strong","workout"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🖕","description":"middle finger","category":"People","aliases":["middle_finger","fu"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"✍️","description":"writing hand","category":"People","aliases":["writing_hand"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"🤳","description":"selfie","category":"People","aliases":["selfie"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"💅","description":"nail polish","category":"People","aliases":["nail_care"],"tags":["beauty","manicure"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💍","description":"ring","category":"People","aliases":["ring"],"tags":["wedding","marriage","engaged"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💄","description":"lipstick","category":"People","aliases":["lipstick"],"tags":["makeup"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💋","description":"kiss mark","category":"People","aliases":["kiss"],"tags":["lipstick"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👄","description":"mouth","category":"People","aliases":["lips"],"tags":["kiss"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👅","description":"tongue","category":"People","aliases":["tongue"],"tags":["taste"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👂","description":"ear","category":"People","aliases":["ear"],"tags":["hear","sound","listen"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👃","description":"nose","category":"People","aliases":["nose"],"tags":["smell"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👣","description":"footprints","category":"People","aliases":["footprints"],"tags":["feet","tracks"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👁","description":"eye","category":"People","aliases":["eye"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"👀","description":"eyes","category":"People","aliases":["eyes"],"tags":["look","see","watch"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗣","description":"speaking head","category":"People","aliases":["speaking_head"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"👤","description":"bust in silhouette","category":"People","aliases":["bust_in_silhouette"],"tags":["user"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👥","description":"busts in silhouette","category":"People","aliases":["busts_in_silhouette"],"tags":["users","group","team"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👶","description":"baby","category":"People","aliases":["baby"],"tags":["child","newborn"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👦","description":"boy","category":"People","aliases":["boy"],"tags":["child"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👧","description":"girl","category":"People","aliases":["girl"],"tags":["child"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👨","description":"man","category":"People","aliases":["man"],"tags":["mustache","father","dad"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👩","description":"woman","category":"People","aliases":["woman"],"tags":["girls"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👱‍♀","description":"blond-haired woman","category":"People","aliases":["blonde_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👱","description":"blond-haired person","category":"People","aliases":["blonde_man","person_with_blond_hair"],"tags":["boy"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👴","description":"old man","category":"People","aliases":["older_man"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👵","description":"old woman","category":"People","aliases":["older_woman"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👲","description":"man with Chinese cap","category":"People","aliases":["man_with_gua_pi_mao"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👳‍♀","description":"woman wearing turban","category":"People","aliases":["woman_with_turban"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👳","description":"person wearing turban","category":"People","aliases":["man_with_turban"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👮‍♀","description":"woman police officer","category":"People","aliases":["policewoman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👮","description":"police officer","category":"People","aliases":["policeman","cop"],"tags":["police","law"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👷‍♀","description":"woman construction worker","category":"People","aliases":["construction_worker_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👷","description":"construction worker","category":"People","aliases":["construction_worker_man","construction_worker"],"tags":["helmet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💂‍♀","description":"woman guard","category":"People","aliases":["guardswoman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"💂","description":"guard","category":"People","aliases":["guardsman"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕵️‍♀️","description":"woman detective","category":"People","aliases":["female_detective"],"tags":["sleuth"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🕵","description":"detective","category":"People","aliases":["male_detective","detective"],"tags":["sleuth"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"👩‍⚕","description":"woman health worker","category":"People","aliases":["woman_health_worker"],"tags":["doctor","nurse"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍⚕","description":"man health worker","category":"People","aliases":["man_health_worker"],"tags":["doctor","nurse"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🌾","description":"woman farmer","category":"People","aliases":["woman_farmer"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🌾","description":"man farmer","category":"People","aliases":["man_farmer"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🍳","description":"woman cook","category":"People","aliases":["woman_cook"],"tags":["chef"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🍳","description":"man cook","category":"People","aliases":["man_cook"],"tags":["chef"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🎓","description":"woman student","category":"People","aliases":["woman_student"],"tags":["graduation"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🎓","description":"man student","category":"People","aliases":["man_student"],"tags":["graduation"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🎤","description":"woman singer","category":"People","aliases":["woman_singer"],"tags":["rockstar"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🎤","description":"man singer","category":"People","aliases":["man_singer"],"tags":["rockstar"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🏫","description":"woman teacher","category":"People","aliases":["woman_teacher"],"tags":["school","professor"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🏫","description":"man teacher","category":"People","aliases":["man_teacher"],"tags":["school","professor"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🏭","description":"woman factory worker","category":"People","aliases":["woman_factory_worker"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🏭","description":"man factory worker","category":"People","aliases":["man_factory_worker"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍💻","description":"woman technologist","category":"People","aliases":["woman_technologist"],"tags":["coder"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍💻","description":"man technologist","category":"People","aliases":["man_technologist"],"tags":["coder"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍💼","description":"woman office worker","category":"People","aliases":["woman_office_worker"],"tags":["business"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍💼","description":"man office worker","category":"People","aliases":["man_office_worker"],"tags":["business"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🔧","description":"woman mechanic","category":"People","aliases":["woman_mechanic"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🔧","description":"man mechanic","category":"People","aliases":["man_mechanic"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🔬","description":"woman scientist","category":"People","aliases":["woman_scientist"],"tags":["research"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🔬","description":"man scientist","category":"People","aliases":["man_scientist"],"tags":["research"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🎨","description":"woman artist","category":"People","aliases":["woman_artist"],"tags":["painter"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🎨","description":"man artist","category":"People","aliases":["man_artist"],"tags":["painter"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🚒","description":"woman firefighter","category":"People","aliases":["woman_firefighter"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🚒","description":"man firefighter","category":"People","aliases":["man_firefighter"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍✈","description":"woman pilot","category":"People","aliases":["woman_pilot"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍✈","description":"man pilot","category":"People","aliases":["man_pilot"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍🚀","description":"woman astronaut","category":"People","aliases":["woman_astronaut"],"tags":["space"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍🚀","description":"man astronaut","category":"People","aliases":["man_astronaut"],"tags":["space"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👩‍⚖","description":"woman judge","category":"People","aliases":["woman_judge"],"tags":["justice"],"unicode_version":"","ios_version":"10.2"},{"emoji":"👨‍⚖","description":"man judge","category":"People","aliases":["man_judge"],"tags":["justice"],"unicode_version":"","ios_version":"10.2"},{"emoji":"🤶","description":"Mrs. Claus","category":"People","aliases":["mrs_claus"],"tags":["santa"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🎅","description":"Santa Claus","category":"People","aliases":["santa"],"tags":["christmas"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👸","description":"princess","category":"People","aliases":["princess"],"tags":["blonde","crown","royal"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤴","description":"prince","category":"People","aliases":["prince"],"tags":["crown","royal"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"👰","description":"bride with veil","category":"People","aliases":["bride_with_veil"],"tags":["marriage","wedding"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤵","description":"man in tuxedo","category":"People","aliases":["man_in_tuxedo"],"tags":["groom","marriage","wedding"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"👼","description":"baby angel","category":"People","aliases":["angel"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤰","description":"pregnant woman","category":"People","aliases":["pregnant_woman"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🙇‍♀","description":"woman bowing","category":"People","aliases":["bowing_woman"],"tags":["respect","thanks"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🙇","description":"person bowing","category":"People","aliases":["bowing_man","bow"],"tags":["respect","thanks"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💁","description":"person tipping hand","category":"People","aliases":["tipping_hand_woman","information_desk_person","sassy_woman"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💁‍♂","description":"man tipping hand","category":"People","aliases":["tipping_hand_man","sassy_man"],"tags":["information"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🙅","description":"person gesturing NO","category":"People","aliases":["no_good_woman","no_good","ng_woman"],"tags":["stop","halt"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙅‍♂","description":"man gesturing NO","category":"People","aliases":["no_good_man","ng_man"],"tags":["stop","halt"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🙆","description":"person gesturing OK","category":"People","aliases":["ok_woman"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙆‍♂","description":"man gesturing OK","category":"People","aliases":["ok_man"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🙋","description":"person raising hand","category":"People","aliases":["raising_hand_woman","raising_hand"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙋‍♂","description":"man raising hand","category":"People","aliases":["raising_hand_man"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🤦‍♀","description":"woman facepalming","category":"People","aliases":["woman_facepalming"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤦‍♂","description":"man facepalming","category":"People","aliases":["man_facepalming"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤷‍♀","description":"woman shrugging","category":"People","aliases":["woman_shrugging"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤷‍♂","description":"man shrugging","category":"People","aliases":["man_shrugging"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🙎","description":"person pouting","category":"People","aliases":["pouting_woman","person_with_pouting_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙎‍♂","description":"man pouting","category":"People","aliases":["pouting_man"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🙍","description":"person frowning","category":"People","aliases":["frowning_woman","person_frowning"],"tags":["sad"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙍‍♂","description":"man frowning","category":"People","aliases":["frowning_man"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"💇","description":"person getting haircut","category":"People","aliases":["haircut_woman","haircut"],"tags":["beauty"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💇‍♂","description":"man getting haircut","category":"People","aliases":["haircut_man"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"💆","description":"person getting massage","category":"People","aliases":["massage_woman","massage"],"tags":["spa"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💆‍♂","description":"man getting massage","category":"People","aliases":["massage_man"],"tags":["spa"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🕴","description":"man in business suit levitating","category":"People","aliases":["business_suit_levitating"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💃","description":"woman dancing","category":"People","aliases":["dancer"],"tags":["dress"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕺","description":"man dancing","category":"People","aliases":["man_dancing"],"tags":["dancer"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"👯","description":"people with bunny ears partying","category":"People","aliases":["dancing_women","dancers"],"tags":["bunny"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👯‍♂","description":"men with bunny ears partying","category":"People","aliases":["dancing_men"],"tags":["bunny"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🚶‍♀","description":"woman walking","category":"People","aliases":["walking_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🚶","description":"person walking","category":"People","aliases":["walking_man","walking"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏃‍♀","description":"woman running","category":"People","aliases":["running_woman"],"tags":["exercise","workout","marathon"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🏃","description":"person running","category":"People","aliases":["running_man","runner","running"],"tags":["exercise","workout","marathon"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👫","description":"man and woman holding hands","category":"People","aliases":["couple"],"tags":["date"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👭","description":"two women holding hands","category":"People","aliases":["two_women_holding_hands"],"tags":["couple","date"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👬","description":"two men holding hands","category":"People","aliases":["two_men_holding_hands"],"tags":["couple","date"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💑","description":"couple with heart","category":"People","aliases":["couple_with_heart_woman_man","couple_with_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👩‍❤️‍👩","description":"couple with heart: woman, woman","category":"People","aliases":["couple_with_heart_woman_woman"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍❤️‍👨","description":"couple with heart: man, man","category":"People","aliases":["couple_with_heart_man_man"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"💏","description":"kiss","category":"People","aliases":["couplekiss_man_woman"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👩‍❤️‍💋‍👩","description":"kiss: woman, woman","category":"People","aliases":["couplekiss_woman_woman"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍❤️‍💋‍👨","description":"kiss: man, man","category":"People","aliases":["couplekiss_man_man"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👪","description":"family","category":"People","aliases":["family_man_woman_boy","family"],"tags":["home","parents","child"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👨‍👩‍👧","description":"family: man, woman, girl","category":"People","aliases":["family_man_woman_girl"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👩‍👧‍👦","description":"family: man, woman, girl, boy","category":"People","aliases":["family_man_woman_girl_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👩‍👦‍👦","description":"family: man, woman, boy, boy","category":"People","aliases":["family_man_woman_boy_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👩‍👧‍👧","description":"family: man, woman, girl, girl","category":"People","aliases":["family_man_woman_girl_girl"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👩‍👩‍👦","description":"family: woman, woman, boy","category":"People","aliases":["family_woman_woman_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👩‍👩‍👧","description":"family: woman, woman, girl","category":"People","aliases":["family_woman_woman_girl"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👩‍👩‍👧‍👦","description":"family: woman, woman, girl, boy","category":"People","aliases":["family_woman_woman_girl_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👩‍👩‍👦‍👦","description":"family: woman, woman, boy, boy","category":"People","aliases":["family_woman_woman_boy_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👩‍👩‍👧‍👧","description":"family: woman, woman, girl, girl","category":"People","aliases":["family_woman_woman_girl_girl"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👨‍👦","description":"family: man, man, boy","category":"People","aliases":["family_man_man_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👨‍👧","description":"family: man, man, girl","category":"People","aliases":["family_man_man_girl"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👨‍👧‍👦","description":"family: man, man, girl, boy","category":"People","aliases":["family_man_man_girl_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👨‍👦‍👦","description":"family: man, man, boy, boy","category":"People","aliases":["family_man_man_boy_boy"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👨‍👨‍👧‍👧","description":"family: man, man, girl, girl","category":"People","aliases":["family_man_man_girl_girl"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"👩‍👦","description":"family: woman, boy","category":"People","aliases":["family_woman_boy"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👩‍👧","description":"family: woman, girl","category":"People","aliases":["family_woman_girl"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👩‍👧‍👦","description":"family: woman, girl, boy","category":"People","aliases":["family_woman_girl_boy"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👩‍👦‍👦","description":"family: woman, boy, boy","category":"People","aliases":["family_woman_boy_boy"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👩‍👧‍👧","description":"family: woman, girl, girl","category":"People","aliases":["family_woman_girl_girl"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👨‍👦","description":"family: man, boy","category":"People","aliases":["family_man_boy"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👨‍👧","description":"family: man, girl","category":"People","aliases":["family_man_girl"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👨‍👧‍👦","description":"family: man, girl, boy","category":"People","aliases":["family_man_girl_boy"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👨‍👦‍👦","description":"family: man, boy, boy","category":"People","aliases":["family_man_boy_boy"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👨‍👧‍👧","description":"family: man, girl, girl","category":"People","aliases":["family_man_girl_girl"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"👚","description":"woman’s clothes","category":"People","aliases":["womans_clothes"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👕","description":"t-shirt","category":"People","aliases":["shirt","tshirt"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👖","description":"jeans","category":"People","aliases":["jeans"],"tags":["pants"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👔","description":"necktie","category":"People","aliases":["necktie"],"tags":["shirt","formal"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👗","description":"dress","category":"People","aliases":["dress"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👙","description":"bikini","category":"People","aliases":["bikini"],"tags":["beach"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👘","description":"kimono","category":"People","aliases":["kimono"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👠","description":"high-heeled shoe","category":"People","aliases":["high_heel"],"tags":["shoe"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👡","description":"woman’s sandal","category":"People","aliases":["sandal"],"tags":["shoe"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👢","description":"woman’s boot","category":"People","aliases":["boot"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👞","description":"man’s shoe","category":"People","aliases":["mans_shoe","shoe"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👟","description":"running shoe","category":"People","aliases":["athletic_shoe"],"tags":["sneaker","sport","running"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👒","description":"woman’s hat","category":"People","aliases":["womans_hat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎩","description":"top hat","category":"People","aliases":["tophat"],"tags":["hat","classy"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎓","description":"graduation cap","category":"People","aliases":["mortar_board"],"tags":["education","college","university","graduation"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👑","description":"crown","category":"People","aliases":["crown"],"tags":["king","queen","royal"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⛑","description":"rescue worker’s helmet","category":"People","aliases":["rescue_worker_helmet"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🎒","description":"school backpack","category":"People","aliases":["school_satchel"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👝","description":"clutch bag","category":"People","aliases":["pouch"],"tags":["bag"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👛","description":"purse","category":"People","aliases":["purse"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👜","description":"handbag","category":"People","aliases":["handbag"],"tags":["bag"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💼","description":"briefcase","category":"People","aliases":["briefcase"],"tags":["business"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👓","description":"glasses","category":"People","aliases":["eyeglasses"],"tags":["glasses"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕶","description":"sunglasses","category":"People","aliases":["dark_sunglasses"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌂","description":"closed umbrella","category":"People","aliases":["closed_umbrella"],"tags":["weather","rain"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☂️","description":"umbrella","category":"People","aliases":["open_umbrella"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"🐶","description":"dog face","category":"Nature","aliases":["dog"],"tags":["pet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐱","description":"cat face","category":"Nature","aliases":["cat"],"tags":["pet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐭","description":"mouse face","category":"Nature","aliases":["mouse"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐹","description":"hamster face","category":"Nature","aliases":["hamster"],"tags":["pet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐰","description":"rabbit face","category":"Nature","aliases":["rabbit"],"tags":["bunny"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦊","description":"fox face","category":"Nature","aliases":["fox_face"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐻","description":"bear face","category":"Nature","aliases":["bear"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐼","description":"panda face","category":"Nature","aliases":["panda_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐨","description":"koala","category":"Nature","aliases":["koala"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐯","description":"tiger face","category":"Nature","aliases":["tiger"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦁","description":"lion face","category":"Nature","aliases":["lion"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🐮","description":"cow face","category":"Nature","aliases":["cow"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐷","description":"pig face","category":"Nature","aliases":["pig"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐽","description":"pig nose","category":"Nature","aliases":["pig_nose"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐸","description":"frog face","category":"Nature","aliases":["frog"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐵","description":"monkey face","category":"Nature","aliases":["monkey_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙈","description":"see-no-evil monkey","category":"Nature","aliases":["see_no_evil"],"tags":["monkey","blind","ignore"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙉","description":"hear-no-evil monkey","category":"Nature","aliases":["hear_no_evil"],"tags":["monkey","deaf"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🙊","description":"speak-no-evil monkey","category":"Nature","aliases":["speak_no_evil"],"tags":["monkey","mute","hush"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐒","description":"monkey","category":"Nature","aliases":["monkey"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐔","description":"chicken","category":"Nature","aliases":["chicken"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐧","description":"penguin","category":"Nature","aliases":["penguin"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐦","description":"bird","category":"Nature","aliases":["bird"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐤","description":"baby chick","category":"Nature","aliases":["baby_chick"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐣","description":"hatching chick","category":"Nature","aliases":["hatching_chick"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐥","description":"front-facing baby chick","category":"Nature","aliases":["hatched_chick"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦆","description":"duck","category":"Nature","aliases":["duck"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🦅","description":"eagle","category":"Nature","aliases":["eagle"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🦉","description":"owl","category":"Nature","aliases":["owl"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🦇","description":"bat","category":"Nature","aliases":["bat"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐺","description":"wolf face","category":"Nature","aliases":["wolf"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐗","description":"boar","category":"Nature","aliases":["boar"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐴","description":"horse face","category":"Nature","aliases":["horse"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦄","description":"unicorn face","category":"Nature","aliases":["unicorn"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🐝","description":"honeybee","category":"Nature","aliases":["bee","honeybee"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐛","description":"bug","category":"Nature","aliases":["bug"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦋","description":"butterfly","category":"Nature","aliases":["butterfly"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐌","description":"snail","category":"Nature","aliases":["snail"],"tags":["slow"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐚","description":"spiral shell","category":"Nature","aliases":["shell"],"tags":["sea","beach"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐞","description":"lady beetle","category":"Nature","aliases":["beetle"],"tags":["bug"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐜","description":"ant","category":"Nature","aliases":["ant"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕷","description":"spider","category":"Nature","aliases":["spider"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🕸","description":"spider web","category":"Nature","aliases":["spider_web"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🐢","description":"turtle","category":"Nature","aliases":["turtle"],"tags":["slow"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐍","description":"snake","category":"Nature","aliases":["snake"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦎","description":"lizard","category":"Nature","aliases":["lizard"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🦂","description":"scorpion","category":"Nature","aliases":["scorpion"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🦀","description":"crab","category":"Nature","aliases":["crab"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🦑","description":"squid","category":"Nature","aliases":["squid"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐙","description":"octopus","category":"Nature","aliases":["octopus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦐","description":"shrimp","category":"Nature","aliases":["shrimp"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐠","description":"tropical fish","category":"Nature","aliases":["tropical_fish"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐟","description":"fish","category":"Nature","aliases":["fish"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐡","description":"blowfish","category":"Nature","aliases":["blowfish"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐬","description":"dolphin","category":"Nature","aliases":["dolphin","flipper"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦈","description":"shark","category":"Nature","aliases":["shark"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐳","description":"spouting whale","category":"Nature","aliases":["whale"],"tags":["sea"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐋","description":"whale","category":"Nature","aliases":["whale2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐊","description":"crocodile","category":"Nature","aliases":["crocodile"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐆","description":"leopard","category":"Nature","aliases":["leopard"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐅","description":"tiger","category":"Nature","aliases":["tiger2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐃","description":"water buffalo","category":"Nature","aliases":["water_buffalo"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐂","description":"ox","category":"Nature","aliases":["ox"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐄","description":"cow","category":"Nature","aliases":["cow2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦌","description":"deer","category":"Nature","aliases":["deer"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐪","description":"camel","category":"Nature","aliases":["dromedary_camel"],"tags":["desert"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐫","description":"two-hump camel","category":"Nature","aliases":["camel"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐘","description":"elephant","category":"Nature","aliases":["elephant"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦏","description":"rhinoceros","category":"Nature","aliases":["rhinoceros"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🦍","description":"gorilla","category":"Nature","aliases":["gorilla"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🐎","description":"horse","category":"Nature","aliases":["racehorse"],"tags":["speed"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐖","description":"pig","category":"Nature","aliases":["pig2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐐","description":"goat","category":"Nature","aliases":["goat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐏","description":"ram","category":"Nature","aliases":["ram"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐑","description":"sheep","category":"Nature","aliases":["sheep"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐕","description":"dog","category":"Nature","aliases":["dog2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐩","description":"poodle","category":"Nature","aliases":["poodle"],"tags":["dog"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐈","description":"cat","category":"Nature","aliases":["cat2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐓","description":"rooster","category":"Nature","aliases":["rooster"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🦃","description":"turkey","category":"Nature","aliases":["turkey"],"tags":["thanksgiving"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🕊","description":"dove","category":"Nature","aliases":["dove"],"tags":["peace"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🐇","description":"rabbit","category":"Nature","aliases":["rabbit2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐁","description":"mouse","category":"Nature","aliases":["mouse2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐀","description":"rat","category":"Nature","aliases":["rat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐿","description":"chipmunk","category":"Nature","aliases":["chipmunk"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🐾","description":"paw prints","category":"Nature","aliases":["feet","paw_prints"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐉","description":"dragon","category":"Nature","aliases":["dragon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🐲","description":"dragon face","category":"Nature","aliases":["dragon_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌵","description":"cactus","category":"Nature","aliases":["cactus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎄","description":"Christmas tree","category":"Nature","aliases":["christmas_tree"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌲","description":"evergreen tree","category":"Nature","aliases":["evergreen_tree"],"tags":["wood"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌳","description":"deciduous tree","category":"Nature","aliases":["deciduous_tree"],"tags":["wood"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌴","description":"palm tree","category":"Nature","aliases":["palm_tree"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌱","description":"seedling","category":"Nature","aliases":["seedling"],"tags":["plant"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌿","description":"herb","category":"Nature","aliases":["herb"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☘️","description":"shamrock","category":"Nature","aliases":["shamrock"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🍀","description":"four leaf clover","category":"Nature","aliases":["four_leaf_clover"],"tags":["luck"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎍","description":"pine decoration","category":"Nature","aliases":["bamboo"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎋","description":"tanabata tree","category":"Nature","aliases":["tanabata_tree"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍃","description":"leaf fluttering in wind","category":"Nature","aliases":["leaves"],"tags":["leaf"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍂","description":"fallen leaf","category":"Nature","aliases":["fallen_leaf"],"tags":["autumn"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍁","description":"maple leaf","category":"Nature","aliases":["maple_leaf"],"tags":["canada"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍄","description":"mushroom","category":"Nature","aliases":["mushroom"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌾","description":"sheaf of rice","category":"Nature","aliases":["ear_of_rice"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💐","description":"bouquet","category":"Nature","aliases":["bouquet"],"tags":["flowers"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌷","description":"tulip","category":"Nature","aliases":["tulip"],"tags":["flower"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌹","description":"rose","category":"Nature","aliases":["rose"],"tags":["flower"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥀","description":"wilted flower","category":"Nature","aliases":["wilted_flower"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🌻","description":"sunflower","category":"Nature","aliases":["sunflower"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌼","description":"blossom","category":"Nature","aliases":["blossom"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌸","description":"cherry blossom","category":"Nature","aliases":["cherry_blossom"],"tags":["flower","spring"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌺","description":"hibiscus","category":"Nature","aliases":["hibiscus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌎","description":"globe showing Americas","category":"Nature","aliases":["earth_americas"],"tags":["globe","world","international"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌍","description":"globe showing Europe-Africa","category":"Nature","aliases":["earth_africa"],"tags":["globe","world","international"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌏","description":"globe showing Asia-Australia","category":"Nature","aliases":["earth_asia"],"tags":["globe","world","international"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌕","description":"full moon","category":"Nature","aliases":["full_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌖","description":"waning gibbous moon","category":"Nature","aliases":["waning_gibbous_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌗","description":"last quarter moon","category":"Nature","aliases":["last_quarter_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌘","description":"waning crescent moon","category":"Nature","aliases":["waning_crescent_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌑","description":"new moon","category":"Nature","aliases":["new_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌒","description":"waxing crescent moon","category":"Nature","aliases":["waxing_crescent_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌓","description":"first quarter moon","category":"Nature","aliases":["first_quarter_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌔","description":"waxing gibbous moon","category":"Nature","aliases":["moon","waxing_gibbous_moon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌚","description":"new moon face","category":"Nature","aliases":["new_moon_with_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌝","description":"full moon with face","category":"Nature","aliases":["full_moon_with_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌞","description":"sun with face","category":"Nature","aliases":["sun_with_face"],"tags":["summer"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌛","description":"first quarter moon with face","category":"Nature","aliases":["first_quarter_moon_with_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌜","description":"last quarter moon with face","category":"Nature","aliases":["last_quarter_moon_with_face"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌙","description":"crescent moon","category":"Nature","aliases":["crescent_moon"],"tags":["night"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💫","description":"dizzy","category":"Nature","aliases":["dizzy"],"tags":["star"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⭐️","description":"white medium star","category":"Nature","aliases":["star"],"tags":[],"unicode_version":"5.1","ios_version":"6.0"},{"emoji":"🌟","description":"glowing star","category":"Nature","aliases":["star2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✨","description":"sparkles","category":"Nature","aliases":["sparkles"],"tags":["shiny"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚡️","description":"high voltage","category":"Nature","aliases":["zap"],"tags":["lightning","thunder"],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"🔥","description":"fire","category":"Nature","aliases":["fire"],"tags":["burn"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💥","description":"collision","category":"Nature","aliases":["boom","collision"],"tags":["explode"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☄","description":"comet","category":"Nature","aliases":["comet"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"☀️","description":"sun","category":"Nature","aliases":["sunny"],"tags":["weather"],"unicode_version":"","ios_version":"6.0"},{"emoji":"🌤","description":"sun behind small cloud","category":"Nature","aliases":["sun_behind_small_cloud"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛅️","description":"sun behind cloud","category":"Nature","aliases":["partly_sunny"],"tags":["weather","cloud"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🌥","description":"sun behind large cloud","category":"Nature","aliases":["sun_behind_large_cloud"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌦","description":"sun behind rain cloud","category":"Nature","aliases":["sun_behind_rain_cloud"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌈","description":"rainbow","category":"Nature","aliases":["rainbow"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☁️","description":"cloud","category":"Nature","aliases":["cloud"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🌧","description":"cloud with rain","category":"Nature","aliases":["cloud_with_rain"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛈","description":"cloud with lightning and rain","category":"Nature","aliases":["cloud_with_lightning_and_rain"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🌩","description":"cloud with lightning","category":"Nature","aliases":["cloud_with_lightning"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌨","description":"cloud with snow","category":"Nature","aliases":["cloud_with_snow"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"☃️","description":"snowman","category":"Nature","aliases":["snowman_with_snow"],"tags":["winter","christmas"],"unicode_version":"","ios_version":"9.1"},{"emoji":"⛄️","description":"snowman without snow","category":"Nature","aliases":["snowman"],"tags":["winter"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"❄️","description":"snowflake","category":"Nature","aliases":["snowflake"],"tags":["winter","cold","weather"],"unicode_version":"","ios_version":"6.0"},{"emoji":"🌬","description":"wind face","category":"Nature","aliases":["wind_face"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💨","description":"dashing away","category":"Nature","aliases":["dash"],"tags":["wind","blow","fast"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌪","description":"tornado","category":"Nature","aliases":["tornado"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌫","description":"fog","category":"Nature","aliases":["fog"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌊","description":"water wave","category":"Nature","aliases":["ocean"],"tags":["sea"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💧","description":"droplet","category":"Nature","aliases":["droplet"],"tags":["water"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💦","description":"sweat droplets","category":"Nature","aliases":["sweat_drops"],"tags":["water","workout"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☔️","description":"umbrella with rain drops","category":"Nature","aliases":["umbrella"],"tags":["rain","weather"],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"🍏","description":"green apple","category":"Foods","aliases":["green_apple"],"tags":["fruit"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍎","description":"red apple","category":"Foods","aliases":["apple"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍐","description":"pear","category":"Foods","aliases":["pear"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍊","description":"tangerine","category":"Foods","aliases":["tangerine","orange","mandarin"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍋","description":"lemon","category":"Foods","aliases":["lemon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍌","description":"banana","category":"Foods","aliases":["banana"],"tags":["fruit"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍉","description":"watermelon","category":"Foods","aliases":["watermelon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍇","description":"grapes","category":"Foods","aliases":["grapes"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍓","description":"strawberry","category":"Foods","aliases":["strawberry"],"tags":["fruit"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍈","description":"melon","category":"Foods","aliases":["melon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍒","description":"cherries","category":"Foods","aliases":["cherries"],"tags":["fruit"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍑","description":"peach","category":"Foods","aliases":["peach"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍍","description":"pineapple","category":"Foods","aliases":["pineapple"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥝","description":"kiwi fruit","category":"Foods","aliases":["kiwi_fruit"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥑","description":"avocado","category":"Foods","aliases":["avocado"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍅","description":"tomato","category":"Foods","aliases":["tomato"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍆","description":"eggplant","category":"Foods","aliases":["eggplant"],"tags":["aubergine"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥒","description":"cucumber","category":"Foods","aliases":["cucumber"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥕","description":"carrot","category":"Foods","aliases":["carrot"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🌽","description":"ear of corn","category":"Foods","aliases":["corn"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌶","description":"hot pepper","category":"Foods","aliases":["hot_pepper"],"tags":["spicy"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🥔","description":"potato","category":"Foods","aliases":["potato"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍠","description":"roasted sweet potato","category":"Foods","aliases":["sweet_potato"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌰","description":"chestnut","category":"Foods","aliases":["chestnut"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥜","description":"peanuts","category":"Foods","aliases":["peanuts"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍯","description":"honey pot","category":"Foods","aliases":["honey_pot"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥐","description":"croissant","category":"Foods","aliases":["croissant"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍞","description":"bread","category":"Foods","aliases":["bread"],"tags":["toast"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥖","description":"baguette bread","category":"Foods","aliases":["baguette_bread"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🧀","description":"cheese wedge","category":"Foods","aliases":["cheese"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥚","description":"egg","category":"Foods","aliases":["egg"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍳","description":"cooking","category":"Foods","aliases":["fried_egg"],"tags":["breakfast"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥓","description":"bacon","category":"Foods","aliases":["bacon"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥞","description":"pancakes","category":"Foods","aliases":["pancakes"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍤","description":"fried shrimp","category":"Foods","aliases":["fried_shrimp"],"tags":["tempura"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍗","description":"poultry leg","category":"Foods","aliases":["poultry_leg"],"tags":["meat","chicken"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍖","description":"meat on bone","category":"Foods","aliases":["meat_on_bone"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍕","description":"pizza","category":"Foods","aliases":["pizza"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌭","description":"hot dog","category":"Foods","aliases":["hotdog"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🍔","description":"hamburger","category":"Foods","aliases":["hamburger"],"tags":["burger"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍟","description":"french fries","category":"Foods","aliases":["fries"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥙","description":"stuffed flatbread","category":"Foods","aliases":["stuffed_flatbread"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🌮","description":"taco","category":"Foods","aliases":["taco"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🌯","description":"burrito","category":"Foods","aliases":["burrito"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥗","description":"green salad","category":"Foods","aliases":["green_salad"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥘","description":"shallow pan of food","category":"Foods","aliases":["shallow_pan_of_food"],"tags":["paella","curry"],"unicode_version":"","ios_version":"10.2"},{"emoji":"🍝","description":"spaghetti","category":"Foods","aliases":["spaghetti"],"tags":["pasta"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍜","description":"steaming bowl","category":"Foods","aliases":["ramen"],"tags":["noodle"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍲","description":"pot of food","category":"Foods","aliases":["stew"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍥","description":"fish cake with swirl","category":"Foods","aliases":["fish_cake"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍣","description":"sushi","category":"Foods","aliases":["sushi"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍱","description":"bento box","category":"Foods","aliases":["bento"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍛","description":"curry rice","category":"Foods","aliases":["curry"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍚","description":"cooked rice","category":"Foods","aliases":["rice"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍙","description":"rice ball","category":"Foods","aliases":["rice_ball"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍘","description":"rice cracker","category":"Foods","aliases":["rice_cracker"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍢","description":"oden","category":"Foods","aliases":["oden"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍡","description":"dango","category":"Foods","aliases":["dango"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍧","description":"shaved ice","category":"Foods","aliases":["shaved_ice"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍨","description":"ice cream","category":"Foods","aliases":["ice_cream"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍦","description":"soft ice cream","category":"Foods","aliases":["icecream"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍰","description":"shortcake","category":"Foods","aliases":["cake"],"tags":["dessert"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎂","description":"birthday cake","category":"Foods","aliases":["birthday"],"tags":["party"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍮","description":"custard","category":"Foods","aliases":["custard"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍭","description":"lollipop","category":"Foods","aliases":["lollipop"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍬","description":"candy","category":"Foods","aliases":["candy"],"tags":["sweet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍫","description":"chocolate bar","category":"Foods","aliases":["chocolate_bar"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍿","description":"popcorn","category":"Foods","aliases":["popcorn"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🍩","description":"doughnut","category":"Foods","aliases":["doughnut"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍪","description":"cookie","category":"Foods","aliases":["cookie"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥛","description":"glass of milk","category":"Foods","aliases":["milk_glass"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍼","description":"baby bottle","category":"Foods","aliases":["baby_bottle"],"tags":["milk"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☕️","description":"hot beverage","category":"Foods","aliases":["coffee"],"tags":["cafe","espresso"],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"🍵","description":"teacup without handle","category":"Foods","aliases":["tea"],"tags":["green","breakfast"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍶","description":"sake","category":"Foods","aliases":["sake"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍺","description":"beer mug","category":"Foods","aliases":["beer"],"tags":["drink"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍻","description":"clinking beer mugs","category":"Foods","aliases":["beers"],"tags":["drinks"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥂","description":"clinking glasses","category":"Foods","aliases":["clinking_glasses"],"tags":["cheers","toast"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍷","description":"wine glass","category":"Foods","aliases":["wine_glass"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥃","description":"tumbler glass","category":"Foods","aliases":["tumbler_glass"],"tags":["whisky"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍸","description":"cocktail glass","category":"Foods","aliases":["cocktail"],"tags":["drink"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍹","description":"tropical drink","category":"Foods","aliases":["tropical_drink"],"tags":["summer","vacation"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍾","description":"bottle with popping cork","category":"Foods","aliases":["champagne"],"tags":["bottle","bubbly","celebration"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥄","description":"spoon","category":"Foods","aliases":["spoon"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🍴","description":"fork and knife","category":"Foods","aliases":["fork_and_knife"],"tags":["cutlery"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🍽","description":"fork and knife with plate","category":"Foods","aliases":["plate_with_cutlery"],"tags":["dining","dinner"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⚽️","description":"soccer ball","category":"Activity","aliases":["soccer"],"tags":["sports"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🏀","description":"basketball","category":"Activity","aliases":["basketball"],"tags":["sports"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏈","description":"american football","category":"Activity","aliases":["football"],"tags":["sports"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚾️","description":"baseball","category":"Activity","aliases":["baseball"],"tags":["sports"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🎾","description":"tennis","category":"Activity","aliases":["tennis"],"tags":["sports"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏐","description":"volleyball","category":"Activity","aliases":["volleyball"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏉","description":"rugby football","category":"Activity","aliases":["rugby_football"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎱","description":"pool 8 ball","category":"Activity","aliases":["8ball"],"tags":["pool","billiards"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏓","description":"ping pong","category":"Activity","aliases":["ping_pong"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏸","description":"badminton","category":"Activity","aliases":["badminton"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥅","description":"goal net","category":"Activity","aliases":["goal_net"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🏒","description":"ice hockey","category":"Activity","aliases":["ice_hockey"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏑","description":"field hockey","category":"Activity","aliases":["field_hockey"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏏","description":"cricket","category":"Activity","aliases":["cricket"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"⛳️","description":"flag in hole","category":"Activity","aliases":["golf"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🏹","description":"bow and arrow","category":"Activity","aliases":["bow_and_arrow"],"tags":["archery"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🎣","description":"fishing pole","category":"Activity","aliases":["fishing_pole_and_fish"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥊","description":"boxing glove","category":"Activity","aliases":["boxing_glove"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥋","description":"martial arts uniform","category":"Activity","aliases":["martial_arts_uniform"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"⛸","description":"ice skate","category":"Activity","aliases":["ice_skate"],"tags":["skating"],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🎿","description":"skis","category":"Activity","aliases":["ski"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⛷","description":"skier","category":"Activity","aliases":["skier"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🏂","description":"snowboarder","category":"Activity","aliases":["snowboarder"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏋️‍♀️","description":"woman lifting weights","category":"Activity","aliases":["weight_lifting_woman"],"tags":["gym","workout"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🏋","description":"person lifting weights","category":"Activity","aliases":["weight_lifting_man"],"tags":["gym","workout"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🤺","description":"person fencing","category":"Activity","aliases":["person_fencing"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤼‍♀","description":"women wrestling","category":"Activity","aliases":["women_wrestling"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤼‍♂","description":"men wrestling","category":"Activity","aliases":["men_wrestling"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤸‍♀","description":"woman cartwheeling","category":"Activity","aliases":["woman_cartwheeling"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"🤸‍♂","description":"man cartwheeling","category":"Activity","aliases":["man_cartwheeling"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"⛹️‍♀️","description":"woman bouncing ball","category":"Activity","aliases":["basketball_woman"],"tags":[],"unicode_version":"7.0","ios_version":"10.0"},{"emoji":"⛹","description":"person bouncing ball","category":"Activity","aliases":["basketball_man"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🤾‍♀","description":"woman playing handball","category":"Activity","aliases":["woman_playing_handball"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤾‍♂","description":"man playing handball","category":"Activity","aliases":["man_playing_handball"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🏌️‍♀️","description":"woman golfing","category":"Activity","aliases":["golfing_woman"],"tags":[],"unicode_version":"","ios_version":"10.0"},{"emoji":"🏌","description":"person golfing","category":"Activity","aliases":["golfing_man"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏄‍♀","description":"woman surfing","category":"Activity","aliases":["surfing_woman"],"tags":[],"unicode_version":"7.0","ios_version":"10.0"},{"emoji":"🏄","description":"person surfing","category":"Activity","aliases":["surfing_man","surfer"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏊‍♀","description":"woman swimming","category":"Activity","aliases":["swimming_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🏊","description":"person swimming","category":"Activity","aliases":["swimming_man","swimmer"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤽‍♀","description":"woman playing water polo","category":"Activity","aliases":["woman_playing_water_polo"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤽‍♂","description":"man playing water polo","category":"Activity","aliases":["man_playing_water_polo"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🚣‍♀","description":"woman rowing boat","category":"Activity","aliases":["rowing_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🚣","description":"person rowing boat","category":"Activity","aliases":["rowing_man","rowboat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏇","description":"horse racing","category":"Activity","aliases":["horse_racing"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚴‍♀","description":"woman biking","category":"Activity","aliases":["biking_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🚴","description":"person biking","category":"Activity","aliases":["biking_man","bicyclist"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚵‍♀","description":"woman mountain biking","category":"Activity","aliases":["mountain_biking_woman"],"tags":[],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🚵","description":"person mountain biking","category":"Activity","aliases":["mountain_biking_man","mountain_bicyclist"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎽","description":"running shirt","category":"Activity","aliases":["running_shirt_with_sash"],"tags":["marathon"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏅","description":"sports medal","category":"Activity","aliases":["medal_sports"],"tags":["gold","winner"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎖","description":"military medal","category":"Activity","aliases":["medal_military"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🥇","description":"1st place medal","category":"Activity","aliases":["1st_place_medal"],"tags":["gold"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥈","description":"2nd place medal","category":"Activity","aliases":["2nd_place_medal"],"tags":["silver"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🥉","description":"3rd place medal","category":"Activity","aliases":["3rd_place_medal"],"tags":["bronze"],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🏆","description":"trophy","category":"Activity","aliases":["trophy"],"tags":["award","contest","winner"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏵","description":"rosette","category":"Activity","aliases":["rosette"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎗","description":"reminder ribbon","category":"Activity","aliases":["reminder_ribbon"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎫","description":"ticket","category":"Activity","aliases":["ticket"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎟","description":"admission tickets","category":"Activity","aliases":["tickets"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎪","description":"circus tent","category":"Activity","aliases":["circus_tent"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🤹‍♀","description":"woman juggling","category":"Activity","aliases":["woman_juggling"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🤹‍♂","description":"man juggling","category":"Activity","aliases":["man_juggling"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🎭","description":"performing arts","category":"Activity","aliases":["performing_arts"],"tags":["theater","drama"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎨","description":"artist palette","category":"Activity","aliases":["art"],"tags":["design","paint"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎬","description":"clapper board","category":"Activity","aliases":["clapper"],"tags":["film"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎤","description":"microphone","category":"Activity","aliases":["microphone"],"tags":["sing"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎧","description":"headphone","category":"Activity","aliases":["headphones"],"tags":["music","earphones"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎼","description":"musical score","category":"Activity","aliases":["musical_score"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎹","description":"musical keyboard","category":"Activity","aliases":["musical_keyboard"],"tags":["piano"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🥁","description":"drum","category":"Activity","aliases":["drum"],"tags":[],"unicode_version":"","ios_version":"10.2"},{"emoji":"🎷","description":"saxophone","category":"Activity","aliases":["saxophone"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎺","description":"trumpet","category":"Activity","aliases":["trumpet"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎸","description":"guitar","category":"Activity","aliases":["guitar"],"tags":["rock"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎻","description":"violin","category":"Activity","aliases":["violin"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎲","description":"game die","category":"Activity","aliases":["game_die"],"tags":["dice","gambling"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎯","description":"direct hit","category":"Activity","aliases":["dart"],"tags":["target"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎳","description":"bowling","category":"Activity","aliases":["bowling"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎮","description":"video game","category":"Activity","aliases":["video_game"],"tags":["play","controller","console"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎰","description":"slot machine","category":"Activity","aliases":["slot_machine"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚗","description":"automobile","category":"Places","aliases":["car","red_car"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚕","description":"taxi","category":"Places","aliases":["taxi"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚙","description":"sport utility vehicle","category":"Places","aliases":["blue_car"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚌","description":"bus","category":"Places","aliases":["bus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚎","description":"trolleybus","category":"Places","aliases":["trolleybus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏎","description":"racing car","category":"Places","aliases":["racing_car"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚓","description":"police car","category":"Places","aliases":["police_car"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚑","description":"ambulance","category":"Places","aliases":["ambulance"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚒","description":"fire engine","category":"Places","aliases":["fire_engine"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚐","description":"minibus","category":"Places","aliases":["minibus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚚","description":"delivery truck","category":"Places","aliases":["truck"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚛","description":"articulated lorry","category":"Places","aliases":["articulated_lorry"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚜","description":"tractor","category":"Places","aliases":["tractor"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛴","description":"kick scooter","category":"Places","aliases":["kick_scooter"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🚲","description":"bicycle","category":"Places","aliases":["bike"],"tags":["bicycle"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛵","description":"motor scooter","category":"Places","aliases":["motor_scooter"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🏍","description":"motorcycle","category":"Places","aliases":["motorcycle"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚨","description":"police car light","category":"Places","aliases":["rotating_light"],"tags":["911","emergency"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚔","description":"oncoming police car","category":"Places","aliases":["oncoming_police_car"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚍","description":"oncoming bus","category":"Places","aliases":["oncoming_bus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚘","description":"oncoming automobile","category":"Places","aliases":["oncoming_automobile"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚖","description":"oncoming taxi","category":"Places","aliases":["oncoming_taxi"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚡","description":"aerial tramway","category":"Places","aliases":["aerial_tramway"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚠","description":"mountain cableway","category":"Places","aliases":["mountain_cableway"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚟","description":"suspension railway","category":"Places","aliases":["suspension_railway"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚃","description":"railway car","category":"Places","aliases":["railway_car"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚋","description":"tram car","category":"Places","aliases":["train"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚞","description":"mountain railway","category":"Places","aliases":["mountain_railway"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚝","description":"monorail","category":"Places","aliases":["monorail"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚄","description":"high-speed train","category":"Places","aliases":["bullettrain_side"],"tags":["train"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚅","description":"high-speed train with bullet nose","category":"Places","aliases":["bullettrain_front"],"tags":["train"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚈","description":"light rail","category":"Places","aliases":["light_rail"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚂","description":"locomotive","category":"Places","aliases":["steam_locomotive"],"tags":["train"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚆","description":"train","category":"Places","aliases":["train2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚇","description":"metro","category":"Places","aliases":["metro"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚊","description":"tram","category":"Places","aliases":["tram"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚉","description":"station","category":"Places","aliases":["station"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚁","description":"helicopter","category":"Places","aliases":["helicopter"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛩","description":"small airplane","category":"Places","aliases":["small_airplane"],"tags":["flight"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"✈️","description":"airplane","category":"Places","aliases":["airplane"],"tags":["flight"],"unicode_version":"","ios_version":"6.0"},{"emoji":"🛫","description":"airplane departure","category":"Places","aliases":["flight_departure"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛬","description":"airplane arrival","category":"Places","aliases":["flight_arrival"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚀","description":"rocket","category":"Places","aliases":["rocket"],"tags":["ship","launch"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛰","description":"satellite","category":"Places","aliases":["artificial_satellite"],"tags":["orbit","space"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💺","description":"seat","category":"Places","aliases":["seat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛶","description":"canoe","category":"Places","aliases":["canoe"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"⛵️","description":"sailboat","category":"Places","aliases":["boat","sailboat"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🛥","description":"motor boat","category":"Places","aliases":["motor_boat"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚤","description":"speedboat","category":"Places","aliases":["speedboat"],"tags":["ship"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛳","description":"passenger ship","category":"Places","aliases":["passenger_ship"],"tags":["cruise"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛴","description":"ferry","category":"Places","aliases":["ferry"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🚢","description":"ship","category":"Places","aliases":["ship"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚓️","description":"anchor","category":"Places","aliases":["anchor"],"tags":["ship"],"unicode_version":"4.1","ios_version":"6.0"},{"emoji":"🚧","description":"construction","category":"Places","aliases":["construction"],"tags":["wip"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⛽️","description":"fuel pump","category":"Places","aliases":["fuelpump"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🚏","description":"bus stop","category":"Places","aliases":["busstop"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚦","description":"vertical traffic light","category":"Places","aliases":["vertical_traffic_light"],"tags":["semaphore"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚥","description":"horizontal traffic light","category":"Places","aliases":["traffic_light"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗺","description":"world map","category":"Places","aliases":["world_map"],"tags":["travel"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗿","description":"moai","category":"Places","aliases":["moyai"],"tags":["stone"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗽","description":"Statue of Liberty","category":"Places","aliases":["statue_of_liberty"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⛲️","description":"fountain","category":"Places","aliases":["fountain"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🗼","description":"Tokyo tower","category":"Places","aliases":["tokyo_tower"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏰","description":"castle","category":"Places","aliases":["european_castle"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏯","description":"Japanese castle","category":"Places","aliases":["japanese_castle"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏟","description":"stadium","category":"Places","aliases":["stadium"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎡","description":"ferris wheel","category":"Places","aliases":["ferris_wheel"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎢","description":"roller coaster","category":"Places","aliases":["roller_coaster"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎠","description":"carousel horse","category":"Places","aliases":["carousel_horse"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⛱","description":"umbrella on ground","category":"Places","aliases":["parasol_on_ground"],"tags":["beach_umbrella"],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🏖","description":"beach with umbrella","category":"Places","aliases":["beach_umbrella"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏝","description":"desert island","category":"Places","aliases":["desert_island"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛰","description":"mountain","category":"Places","aliases":["mountain"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🏔","description":"snow-capped mountain","category":"Places","aliases":["mountain_snow"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗻","description":"mount fuji","category":"Places","aliases":["mount_fuji"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌋","description":"volcano","category":"Places","aliases":["volcano"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏜","description":"desert","category":"Places","aliases":["desert"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏕","description":"camping","category":"Places","aliases":["camping"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛺️","description":"tent","category":"Places","aliases":["tent"],"tags":["camping"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🛤","description":"railway track","category":"Places","aliases":["railway_track"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛣","description":"motorway","category":"Places","aliases":["motorway"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏗","description":"building construction","category":"Places","aliases":["building_construction"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏭","description":"factory","category":"Places","aliases":["factory"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏠","description":"house","category":"Places","aliases":["house"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏡","description":"house with garden","category":"Places","aliases":["house_with_garden"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏘","description":"house","category":"Places","aliases":["houses"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏚","description":"derelict house","category":"Places","aliases":["derelict_house"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏢","description":"office building","category":"Places","aliases":["office"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏬","description":"department store","category":"Places","aliases":["department_store"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏣","description":"Japanese post office","category":"Places","aliases":["post_office"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏤","description":"post office","category":"Places","aliases":["european_post_office"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏥","description":"hospital","category":"Places","aliases":["hospital"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏦","description":"bank","category":"Places","aliases":["bank"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏨","description":"hotel","category":"Places","aliases":["hotel"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏪","description":"convenience store","category":"Places","aliases":["convenience_store"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏫","description":"school","category":"Places","aliases":["school"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏩","description":"love hotel","category":"Places","aliases":["love_hotel"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💒","description":"wedding","category":"Places","aliases":["wedding"],"tags":["marriage"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏛","description":"classical building","category":"Places","aliases":["classical_building"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛪️","description":"church","category":"Places","aliases":["church"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🕌","description":"mosque","category":"Places","aliases":["mosque"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🕍","description":"synagogue","category":"Places","aliases":["synagogue"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🕋","description":"kaaba","category":"Places","aliases":["kaaba"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"⛩","description":"shinto shrine","category":"Places","aliases":["shinto_shrine"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🗾","description":"map of Japan","category":"Places","aliases":["japan"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎑","description":"moon viewing ceremony","category":"Places","aliases":["rice_scene"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏞","description":"national park","category":"Places","aliases":["national_park"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌅","description":"sunrise","category":"Places","aliases":["sunrise"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌄","description":"sunrise over mountains","category":"Places","aliases":["sunrise_over_mountains"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌠","description":"shooting star","category":"Places","aliases":["stars"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎇","description":"sparkler","category":"Places","aliases":["sparkler"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎆","description":"fireworks","category":"Places","aliases":["fireworks"],"tags":["festival","celebration"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌇","description":"sunset","category":"Places","aliases":["city_sunrise"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌆","description":"cityscape at dusk","category":"Places","aliases":["city_sunset"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏙","description":"cityscape","category":"Places","aliases":["cityscape"],"tags":["skyline"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌃","description":"night with stars","category":"Places","aliases":["night_with_stars"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌌","description":"milky way","category":"Places","aliases":["milky_way"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌉","description":"bridge at night","category":"Places","aliases":["bridge_at_night"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌁","description":"foggy","category":"Places","aliases":["foggy"],"tags":["karl"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⌚️","description":"watch","category":"Objects","aliases":["watch"],"tags":["time"],"unicode_version":"","ios_version":"6.0"},{"emoji":"📱","description":"mobile phone","category":"Objects","aliases":["iphone"],"tags":["smartphone","mobile"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📲","description":"mobile phone with arrow","category":"Objects","aliases":["calling"],"tags":["call","incoming"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💻","description":"laptop computer","category":"Objects","aliases":["computer"],"tags":["desktop","screen"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⌨️","description":"keyboard","category":"Objects","aliases":["keyboard"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"🖥","description":"desktop computer","category":"Objects","aliases":["desktop_computer"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖨","description":"printer","category":"Objects","aliases":["printer"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖱","description":"computer mouse","category":"Objects","aliases":["computer_mouse"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖲","description":"trackball","category":"Objects","aliases":["trackball"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🕹","description":"joystick","category":"Objects","aliases":["joystick"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗜","description":"clamp","category":"Objects","aliases":["clamp"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💽","description":"computer disk","category":"Objects","aliases":["minidisc"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💾","description":"floppy disk","category":"Objects","aliases":["floppy_disk"],"tags":["save"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💿","description":"optical disk","category":"Objects","aliases":["cd"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📀","description":"dvd","category":"Objects","aliases":["dvd"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📼","description":"videocassette","category":"Objects","aliases":["vhs"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📷","description":"camera","category":"Objects","aliases":["camera"],"tags":["photo"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📸","description":"camera with flash","category":"Objects","aliases":["camera_flash"],"tags":["photo"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📹","description":"video camera","category":"Objects","aliases":["video_camera"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎥","description":"movie camera","category":"Objects","aliases":["movie_camera"],"tags":["film","video"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📽","description":"film projector","category":"Objects","aliases":["film_projector"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎞","description":"film frames","category":"Objects","aliases":["film_strip"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📞","description":"telephone receiver","category":"Objects","aliases":["telephone_receiver"],"tags":["phone","call"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☎️","description":"telephone","category":"Objects","aliases":["phone","telephone"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"📟","description":"pager","category":"Objects","aliases":["pager"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📠","description":"fax machine","category":"Objects","aliases":["fax"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📺","description":"television","category":"Objects","aliases":["tv"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📻","description":"radio","category":"Objects","aliases":["radio"],"tags":["podcast"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎙","description":"studio microphone","category":"Objects","aliases":["studio_microphone"],"tags":["podcast"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎚","description":"level slider","category":"Objects","aliases":["level_slider"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎛","description":"control knobs","category":"Objects","aliases":["control_knobs"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏱","description":"stopwatch","category":"Objects","aliases":["stopwatch"],"tags":[],"unicode_version":"6.0","ios_version":"9.1"},{"emoji":"⏲","description":"timer clock","category":"Objects","aliases":["timer_clock"],"tags":[],"unicode_version":"6.0","ios_version":"9.1"},{"emoji":"⏰","description":"alarm clock","category":"Objects","aliases":["alarm_clock"],"tags":["morning"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕰","description":"mantelpiece clock","category":"Objects","aliases":["mantelpiece_clock"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⌛️","description":"hourglass","category":"Objects","aliases":["hourglass"],"tags":["time"],"unicode_version":"","ios_version":"6.0"},{"emoji":"⏳","description":"hourglass with flowing sand","category":"Objects","aliases":["hourglass_flowing_sand"],"tags":["time"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📡","description":"satellite antenna","category":"Objects","aliases":["satellite"],"tags":["signal"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔋","description":"battery","category":"Objects","aliases":["battery"],"tags":["power"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔌","description":"electric plug","category":"Objects","aliases":["electric_plug"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💡","description":"light bulb","category":"Objects","aliases":["bulb"],"tags":["idea","light"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔦","description":"flashlight","category":"Objects","aliases":["flashlight"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕯","description":"candle","category":"Objects","aliases":["candle"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗑","description":"wastebasket","category":"Objects","aliases":["wastebasket"],"tags":["trash"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛢","description":"oil drum","category":"Objects","aliases":["oil_drum"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💸","description":"money with wings","category":"Objects","aliases":["money_with_wings"],"tags":["dollar"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💵","description":"dollar banknote","category":"Objects","aliases":["dollar"],"tags":["money"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💴","description":"yen banknote","category":"Objects","aliases":["yen"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💶","description":"euro banknote","category":"Objects","aliases":["euro"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💷","description":"pound banknote","category":"Objects","aliases":["pound"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💰","description":"money bag","category":"Objects","aliases":["moneybag"],"tags":["dollar","cream"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💳","description":"credit card","category":"Objects","aliases":["credit_card"],"tags":["subscription"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💎","description":"gem stone","category":"Objects","aliases":["gem"],"tags":["diamond"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚖️","description":"balance scale","category":"Objects","aliases":["balance_scale"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🔧","description":"wrench","category":"Objects","aliases":["wrench"],"tags":["tool"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔨","description":"hammer","category":"Objects","aliases":["hammer"],"tags":["tool"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚒","description":"hammer and pick","category":"Objects","aliases":["hammer_and_pick"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🛠","description":"hammer and wrench","category":"Objects","aliases":["hammer_and_wrench"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛏","description":"pick","category":"Objects","aliases":["pick"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🔩","description":"nut and bolt","category":"Objects","aliases":["nut_and_bolt"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚙️","description":"gear","category":"Objects","aliases":["gear"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"⛓","description":"chains","category":"Objects","aliases":["chains"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🔫","description":"pistol","category":"Objects","aliases":["gun"],"tags":["shoot","weapon"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💣","description":"bomb","category":"Objects","aliases":["bomb"],"tags":["boom"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔪","description":"kitchen knife","category":"Objects","aliases":["hocho","knife"],"tags":["cut","chop"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗡","description":"dagger","category":"Objects","aliases":["dagger"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⚔️","description":"crossed swords","category":"Objects","aliases":["crossed_swords"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🛡","description":"shield","category":"Objects","aliases":["shield"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚬","description":"cigarette","category":"Objects","aliases":["smoking"],"tags":["cigarette"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚰️","description":"coffin","category":"Objects","aliases":["coffin"],"tags":["funeral"],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"⚱️","description":"funeral urn","category":"Objects","aliases":["funeral_urn"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🏺","description":"amphora","category":"Objects","aliases":["amphora"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🔮","description":"crystal ball","category":"Objects","aliases":["crystal_ball"],"tags":["fortune"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📿","description":"prayer beads","category":"Objects","aliases":["prayer_beads"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"💈","description":"barber pole","category":"Objects","aliases":["barber"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚗️","description":"alembic","category":"Objects","aliases":["alembic"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🔭","description":"telescope","category":"Objects","aliases":["telescope"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔬","description":"microscope","category":"Objects","aliases":["microscope"],"tags":["science","laboratory","investigate"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕳","description":"hole","category":"Objects","aliases":["hole"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💊","description":"pill","category":"Objects","aliases":["pill"],"tags":["health","medicine"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💉","description":"syringe","category":"Objects","aliases":["syringe"],"tags":["health","hospital","needle"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌡","description":"thermometer","category":"Objects","aliases":["thermometer"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚽","description":"toilet","category":"Objects","aliases":["toilet"],"tags":["wc"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚰","description":"potable water","category":"Objects","aliases":["potable_water"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚿","description":"shower","category":"Objects","aliases":["shower"],"tags":["bath"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛁","description":"bathtub","category":"Objects","aliases":["bathtub"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛀","description":"person taking bath","category":"Objects","aliases":["bath"],"tags":["shower"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛎","description":"bellhop bell","category":"Objects","aliases":["bellhop_bell"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🔑","description":"key","category":"Objects","aliases":["key"],"tags":["lock","password"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗝","description":"old key","category":"Objects","aliases":["old_key"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚪","description":"door","category":"Objects","aliases":["door"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛋","description":"couch and lamp","category":"Objects","aliases":["couch_and_lamp"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛏","description":"bed","category":"Objects","aliases":["bed"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛌","description":"person in bed","category":"Objects","aliases":["sleeping_bed"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖼","description":"framed picture","category":"Objects","aliases":["framed_picture"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛍","description":"shopping bags","category":"Objects","aliases":["shopping"],"tags":["bags"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛒","description":"shopping cart","category":"Objects","aliases":["shopping_cart"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"🎁","description":"wrapped gift","category":"Objects","aliases":["gift"],"tags":["present","birthday","christmas"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎈","description":"balloon","category":"Objects","aliases":["balloon"],"tags":["party","birthday"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎏","description":"carp streamer","category":"Objects","aliases":["flags"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎀","description":"ribbon","category":"Objects","aliases":["ribbon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎊","description":"confetti ball","category":"Objects","aliases":["confetti_ball"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎉","description":"party popper","category":"Objects","aliases":["tada"],"tags":["hooray","party"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎎","description":"Japanese dolls","category":"Objects","aliases":["dolls"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏮","description":"red paper lantern","category":"Objects","aliases":["izakaya_lantern","lantern"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎐","description":"wind chime","category":"Objects","aliases":["wind_chime"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✉️","description":"envelope","category":"Objects","aliases":["email","envelope"],"tags":["letter"],"unicode_version":"","ios_version":"6.0"},{"emoji":"📩","description":"envelope with arrow","category":"Objects","aliases":["envelope_with_arrow"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📨","description":"incoming envelope","category":"Objects","aliases":["incoming_envelope"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📧","description":"e-mail","category":"Objects","aliases":["e-mail"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💌","description":"love letter","category":"Objects","aliases":["love_letter"],"tags":["email","envelope"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📥","description":"inbox tray","category":"Objects","aliases":["inbox_tray"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📤","description":"outbox tray","category":"Objects","aliases":["outbox_tray"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📦","description":"package","category":"Objects","aliases":["package"],"tags":["shipping"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏷","description":"label","category":"Objects","aliases":["label"],"tags":["tag"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📪","description":"closed mailbox with lowered flag","category":"Objects","aliases":["mailbox_closed"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📫","description":"closed mailbox with raised flag","category":"Objects","aliases":["mailbox"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📬","description":"open mailbox with raised flag","category":"Objects","aliases":["mailbox_with_mail"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📭","description":"open mailbox with lowered flag","category":"Objects","aliases":["mailbox_with_no_mail"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📮","description":"postbox","category":"Objects","aliases":["postbox"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📯","description":"postal horn","category":"Objects","aliases":["postal_horn"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📜","description":"scroll","category":"Objects","aliases":["scroll"],"tags":["document"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📃","description":"page with curl","category":"Objects","aliases":["page_with_curl"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📄","description":"page facing up","category":"Objects","aliases":["page_facing_up"],"tags":["document"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📑","description":"bookmark tabs","category":"Objects","aliases":["bookmark_tabs"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📊","description":"bar chart","category":"Objects","aliases":["bar_chart"],"tags":["stats","metrics"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📈","description":"chart increasing","category":"Objects","aliases":["chart_with_upwards_trend"],"tags":["graph","metrics"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📉","description":"chart decreasing","category":"Objects","aliases":["chart_with_downwards_trend"],"tags":["graph","metrics"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗒","description":"spiral notepad","category":"Objects","aliases":["spiral_notepad"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗓","description":"spiral calendar","category":"Objects","aliases":["spiral_calendar"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📆","description":"tear-off calendar","category":"Objects","aliases":["calendar"],"tags":["schedule"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📅","description":"calendar","category":"Objects","aliases":["date"],"tags":["calendar","schedule"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📇","description":"card index","category":"Objects","aliases":["card_index"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗃","description":"card file box","category":"Objects","aliases":["card_file_box"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗳","description":"ballot box with ballot","category":"Objects","aliases":["ballot_box"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗄","description":"file cabinet","category":"Objects","aliases":["file_cabinet"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📋","description":"clipboard","category":"Objects","aliases":["clipboard"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📁","description":"file folder","category":"Objects","aliases":["file_folder"],"tags":["directory"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📂","description":"open file folder","category":"Objects","aliases":["open_file_folder"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗂","description":"card index dividers","category":"Objects","aliases":["card_index_dividers"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗞","description":"rolled-up newspaper","category":"Objects","aliases":["newspaper_roll"],"tags":["press"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📰","description":"newspaper","category":"Objects","aliases":["newspaper"],"tags":["press"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📓","description":"notebook","category":"Objects","aliases":["notebook"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📔","description":"notebook with decorative cover","category":"Objects","aliases":["notebook_with_decorative_cover"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📒","description":"ledger","category":"Objects","aliases":["ledger"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📕","description":"closed book","category":"Objects","aliases":["closed_book"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📗","description":"green book","category":"Objects","aliases":["green_book"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📘","description":"blue book","category":"Objects","aliases":["blue_book"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📙","description":"orange book","category":"Objects","aliases":["orange_book"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📚","description":"books","category":"Objects","aliases":["books"],"tags":["library"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📖","description":"open book","category":"Objects","aliases":["book","open_book"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔖","description":"bookmark","category":"Objects","aliases":["bookmark"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔗","description":"link","category":"Objects","aliases":["link"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📎","description":"paperclip","category":"Objects","aliases":["paperclip"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🖇","description":"linked paperclips","category":"Objects","aliases":["paperclips"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📐","description":"triangular ruler","category":"Objects","aliases":["triangular_ruler"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📏","description":"straight ruler","category":"Objects","aliases":["straight_ruler"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📌","description":"pushpin","category":"Objects","aliases":["pushpin"],"tags":["location"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📍","description":"round pushpin","category":"Objects","aliases":["round_pushpin"],"tags":["location"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✂️","description":"scissors","category":"Objects","aliases":["scissors"],"tags":["cut"],"unicode_version":"","ios_version":"6.0"},{"emoji":"🖊","description":"pen","category":"Objects","aliases":["pen"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖋","description":"fountain pen","category":"Objects","aliases":["fountain_pen"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"✒️","description":"black nib","category":"Objects","aliases":["black_nib"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🖌","description":"paintbrush","category":"Objects","aliases":["paintbrush"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖍","description":"crayon","category":"Objects","aliases":["crayon"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📝","description":"memo","category":"Objects","aliases":["memo","pencil"],"tags":["document","note"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✏️","description":"pencil","category":"Objects","aliases":["pencil2"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🔍","description":"left-pointing magnifying glass","category":"Objects","aliases":["mag"],"tags":["search","zoom"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔎","description":"right-pointing magnifying glass","category":"Objects","aliases":["mag_right"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔏","description":"locked with pen","category":"Objects","aliases":["lock_with_ink_pen"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔐","description":"locked with key","category":"Objects","aliases":["closed_lock_with_key"],"tags":["security"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔒","description":"locked","category":"Objects","aliases":["lock"],"tags":["security","private"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔓","description":"unlocked","category":"Objects","aliases":["unlock"],"tags":["security"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❤️","description":"red heart","category":"Symbols","aliases":["heart"],"tags":["love"],"unicode_version":"","ios_version":"6.0"},{"emoji":"💛","description":"yellow heart","category":"Symbols","aliases":["yellow_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💚","description":"green heart","category":"Symbols","aliases":["green_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💙","description":"blue heart","category":"Symbols","aliases":["blue_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💜","description":"purple heart","category":"Symbols","aliases":["purple_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🖤","description":"black heart","category":"Symbols","aliases":["black_heart"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"💔","description":"broken heart","category":"Symbols","aliases":["broken_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❣️","description":"heavy heart exclamation","category":"Symbols","aliases":["heavy_heart_exclamation"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"💕","description":"two hearts","category":"Symbols","aliases":["two_hearts"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💞","description":"revolving hearts","category":"Symbols","aliases":["revolving_hearts"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💓","description":"beating heart","category":"Symbols","aliases":["heartbeat"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💗","description":"growing heart","category":"Symbols","aliases":["heartpulse"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💖","description":"sparkling heart","category":"Symbols","aliases":["sparkling_heart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💘","description":"heart with arrow","category":"Symbols","aliases":["cupid"],"tags":["love","heart"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💝","description":"heart with ribbon","category":"Symbols","aliases":["gift_heart"],"tags":["chocolates"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💟","description":"heart decoration","category":"Symbols","aliases":["heart_decoration"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☮️","description":"peace symbol","category":"Symbols","aliases":["peace_symbol"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"✝️","description":"latin cross","category":"Symbols","aliases":["latin_cross"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"☪️","description":"star and crescent","category":"Symbols","aliases":["star_and_crescent"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"🕉","description":"om","category":"Symbols","aliases":["om"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"☸️","description":"wheel of dharma","category":"Symbols","aliases":["wheel_of_dharma"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"✡️","description":"star of David","category":"Symbols","aliases":["star_of_david"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"🔯","description":"dotted six-pointed star","category":"Symbols","aliases":["six_pointed_star"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕎","description":"menorah","category":"Symbols","aliases":["menorah"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"☯️","description":"yin yang","category":"Symbols","aliases":["yin_yang"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"☦️","description":"orthodox cross","category":"Symbols","aliases":["orthodox_cross"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"🛐","description":"place of worship","category":"Symbols","aliases":["place_of_worship"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"⛎","description":"Ophiuchus","category":"Symbols","aliases":["ophiuchus"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"♈️","description":"Aries","category":"Symbols","aliases":["aries"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♉️","description":"Taurus","category":"Symbols","aliases":["taurus"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♊️","description":"Gemini","category":"Symbols","aliases":["gemini"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♋️","description":"Cancer","category":"Symbols","aliases":["cancer"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♌️","description":"Leo","category":"Symbols","aliases":["leo"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♍️","description":"Virgo","category":"Symbols","aliases":["virgo"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♎️","description":"Libra","category":"Symbols","aliases":["libra"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♏️","description":"Scorpius","category":"Symbols","aliases":["scorpius"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♐️","description":"Sagittarius","category":"Symbols","aliases":["sagittarius"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♑️","description":"Capricorn","category":"Symbols","aliases":["capricorn"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♒️","description":"Aquarius","category":"Symbols","aliases":["aquarius"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♓️","description":"Pisces","category":"Symbols","aliases":["pisces"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🆔","description":"ID button","category":"Symbols","aliases":["id"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚛️","description":"atom symbol","category":"Symbols","aliases":["atom_symbol"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🉑","description":"Japanese “acceptable” button","category":"Symbols","aliases":["accept"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"☢️","description":"radioactive","category":"Symbols","aliases":["radioactive"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"☣️","description":"biohazard","category":"Symbols","aliases":["biohazard"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"📴","description":"mobile phone off","category":"Symbols","aliases":["mobile_phone_off"],"tags":["mute","off"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📳","description":"vibration mode","category":"Symbols","aliases":["vibration_mode"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈶","description":"Japanese “not free of charge” button","category":"Symbols","aliases":["u6709"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈚️","description":"Japanese “free of charge” button","category":"Symbols","aliases":["u7121"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🈸","description":"Japanese “application” button","category":"Symbols","aliases":["u7533"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈺","description":"Japanese “open for business” button","category":"Symbols","aliases":["u55b6"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈷️","description":"Japanese “monthly amount” button","category":"Symbols","aliases":["u6708"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✴️","description":"eight-pointed star","category":"Symbols","aliases":["eight_pointed_black_star"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🆚","description":"VS button","category":"Symbols","aliases":["vs"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💮","description":"white flower","category":"Symbols","aliases":["white_flower"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🉐","description":"Japanese “bargain” button","category":"Symbols","aliases":["ideograph_advantage"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"㊙️","description":"Japanese “secret” button","category":"Symbols","aliases":["secret"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"㊗️","description":"Japanese “congratulations” button","category":"Symbols","aliases":["congratulations"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🈴","description":"Japanese “passing grade” button","category":"Symbols","aliases":["u5408"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈵","description":"Japanese “no vacancy” button","category":"Symbols","aliases":["u6e80"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈹","description":"Japanese “discount” button","category":"Symbols","aliases":["u5272"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈲","description":"Japanese “prohibited” button","category":"Symbols","aliases":["u7981"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🅰️","description":"A button (blood type)","category":"Symbols","aliases":["a"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🅱️","description":"B button (blood type)","category":"Symbols","aliases":["b"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆎","description":"AB button (blood type)","category":"Symbols","aliases":["ab"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆑","description":"CL button","category":"Symbols","aliases":["cl"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🅾️","description":"O button (blood type)","category":"Symbols","aliases":["o2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆘","description":"SOS button","category":"Symbols","aliases":["sos"],"tags":["help","emergency"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❌","description":"cross mark","category":"Symbols","aliases":["x"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⭕️","description":"heavy large circle","category":"Symbols","aliases":["o"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🛑","description":"stop sign","category":"Symbols","aliases":["stop_sign"],"tags":[],"unicode_version":"9.0","ios_version":"10.2"},{"emoji":"⛔️","description":"no entry","category":"Symbols","aliases":["no_entry"],"tags":["limit"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"📛","description":"name badge","category":"Symbols","aliases":["name_badge"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚫","description":"prohibited","category":"Symbols","aliases":["no_entry_sign"],"tags":["block","forbidden"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💯","description":"hundred points","category":"Symbols","aliases":["100"],"tags":["score","perfect"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💢","description":"anger symbol","category":"Symbols","aliases":["anger"],"tags":["angry"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"♨️","description":"hot springs","category":"Symbols","aliases":["hotsprings"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🚷","description":"no pedestrians","category":"Symbols","aliases":["no_pedestrians"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚯","description":"no littering","category":"Symbols","aliases":["do_not_litter"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚳","description":"no bicycles","category":"Symbols","aliases":["no_bicycles"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚱","description":"non-potable water","category":"Symbols","aliases":["non-potable_water"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔞","description":"no one under eighteen","category":"Symbols","aliases":["underage"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📵","description":"no mobile phones","category":"Symbols","aliases":["no_mobile_phones"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚭","description":"no smoking","category":"Symbols","aliases":["no_smoking"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❗️","description":"exclamation mark","category":"Symbols","aliases":["exclamation","heavy_exclamation_mark"],"tags":["bang"],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"❕","description":"white exclamation mark","category":"Symbols","aliases":["grey_exclamation"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❓","description":"question mark","category":"Symbols","aliases":["question"],"tags":["confused"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❔","description":"white question mark","category":"Symbols","aliases":["grey_question"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"‼️","description":"double exclamation mark","category":"Symbols","aliases":["bangbang"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"⁉️","description":"exclamation question mark","category":"Symbols","aliases":["interrobang"],"tags":[],"unicode_version":"3.0","ios_version":"6.0"},{"emoji":"🔅","description":"dim button","category":"Symbols","aliases":["low_brightness"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔆","description":"bright button","category":"Symbols","aliases":["high_brightness"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"〽️","description":"part alternation mark","category":"Symbols","aliases":["part_alternation_mark"],"tags":[],"unicode_version":"3.2","ios_version":"6.0"},{"emoji":"⚠️","description":"warning","category":"Symbols","aliases":["warning"],"tags":["wip"],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"🚸","description":"children crossing","category":"Symbols","aliases":["children_crossing"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔱","description":"trident emblem","category":"Symbols","aliases":["trident"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚜️","description":"fleur-de-lis","category":"Symbols","aliases":["fleur_de_lis"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🔰","description":"Japanese symbol for beginner","category":"Symbols","aliases":["beginner"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"♻️","description":"recycling symbol","category":"Symbols","aliases":["recycle"],"tags":["environment","green"],"unicode_version":"3.2","ios_version":"6.0"},{"emoji":"✅","description":"white heavy check mark","category":"Symbols","aliases":["white_check_mark"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈯️","description":"Japanese “reserved” button","category":"Symbols","aliases":["u6307"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"💹","description":"chart increasing with yen","category":"Symbols","aliases":["chart"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"❇️","description":"sparkle","category":"Symbols","aliases":["sparkle"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"✳️","description":"eight-spoked asterisk","category":"Symbols","aliases":["eight_spoked_asterisk"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"❎","description":"cross mark button","category":"Symbols","aliases":["negative_squared_cross_mark"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🌐","description":"globe with meridians","category":"Symbols","aliases":["globe_with_meridians"],"tags":["world","global","international"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💠","description":"diamond with a dot","category":"Symbols","aliases":["diamond_shape_with_a_dot_inside"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"Ⓜ️","description":"circled M","category":"Symbols","aliases":["m"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🌀","description":"cyclone","category":"Symbols","aliases":["cyclone"],"tags":["swirl"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💤","description":"zzz","category":"Symbols","aliases":["zzz"],"tags":["sleeping"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏧","description":"ATM sign","category":"Symbols","aliases":["atm"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚾","description":"water closet","category":"Symbols","aliases":["wc"],"tags":["toilet","restroom"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"♿️","description":"wheelchair symbol","category":"Symbols","aliases":["wheelchair"],"tags":["accessibility"],"unicode_version":"4.1","ios_version":"6.0"},{"emoji":"🅿️","description":"P button","category":"Symbols","aliases":["parking"],"tags":[],"unicode_version":"5.2","ios_version":"6.0"},{"emoji":"🈳","description":"Japanese “vacancy” button","category":"Symbols","aliases":["u7a7a"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈂️","description":"Japanese “service charge” button","category":"Symbols","aliases":["sa"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛂","description":"passport control","category":"Symbols","aliases":["passport_control"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛃","description":"customs","category":"Symbols","aliases":["customs"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛄","description":"baggage claim","category":"Symbols","aliases":["baggage_claim"],"tags":["airport"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🛅","description":"left luggage","category":"Symbols","aliases":["left_luggage"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚹","description":"men’s room","category":"Symbols","aliases":["mens"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚺","description":"women’s room","category":"Symbols","aliases":["womens"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚼","description":"baby symbol","category":"Symbols","aliases":["baby_symbol"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚻","description":"restroom","category":"Symbols","aliases":["restroom"],"tags":["toilet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚮","description":"litter in bin sign","category":"Symbols","aliases":["put_litter_in_its_place"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎦","description":"cinema","category":"Symbols","aliases":["cinema"],"tags":["film","movie"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📶","description":"antenna bars","category":"Symbols","aliases":["signal_strength"],"tags":["wifi"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🈁","description":"Japanese “here” button","category":"Symbols","aliases":["koko"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔣","description":"input symbols","category":"Symbols","aliases":["symbols"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"ℹ️","description":"information","category":"Symbols","aliases":["information_source"],"tags":[],"unicode_version":"3.0","ios_version":"6.0"},{"emoji":"🔤","description":"input latin letters","category":"Symbols","aliases":["abc"],"tags":["alphabet"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔡","description":"input latin lowercase","category":"Symbols","aliases":["abcd"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔠","description":"input latin uppercase","category":"Symbols","aliases":["capital_abcd"],"tags":["letters"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆖","description":"NG button","category":"Symbols","aliases":["ng"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆗","description":"OK button","category":"Symbols","aliases":["ok"],"tags":["yes"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆙","description":"UP! button","category":"Symbols","aliases":["up"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆒","description":"COOL button","category":"Symbols","aliases":["cool"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆕","description":"NEW button","category":"Symbols","aliases":["new"],"tags":["fresh"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🆓","description":"FREE button","category":"Symbols","aliases":["free"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"0️⃣","description":"keycap: 0","category":"Symbols","aliases":["zero"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"1️⃣","description":"keycap: 1","category":"Symbols","aliases":["one"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"2️⃣","description":"keycap: 2","category":"Symbols","aliases":["two"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"3️⃣","description":"keycap: 3","category":"Symbols","aliases":["three"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"4️⃣","description":"keycap: 4","category":"Symbols","aliases":["four"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"5️⃣","description":"keycap: 5","category":"Symbols","aliases":["five"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"6️⃣","description":"keycap: 6","category":"Symbols","aliases":["six"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"7️⃣","description":"keycap: 7","category":"Symbols","aliases":["seven"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"8️⃣","description":"keycap: 8","category":"Symbols","aliases":["eight"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"9️⃣","description":"keycap: 9","category":"Symbols","aliases":["nine"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🔟","description":"keycap 10","category":"Symbols","aliases":["keycap_ten"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔢","description":"input numbers","category":"Symbols","aliases":["1234"],"tags":["numbers"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"#️⃣","description":"keycap: #","category":"Symbols","aliases":["hash"],"tags":["number"],"unicode_version":"","ios_version":"6.0"},{"emoji":"*️⃣","description":"keycap: *","category":"Symbols","aliases":["asterisk"],"tags":[],"unicode_version":"","ios_version":"9.1"},{"emoji":"▶️","description":"play button","category":"Symbols","aliases":["arrow_forward"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"⏸","description":"pause button","category":"Symbols","aliases":["pause_button"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏯","description":"play or pause button","category":"Symbols","aliases":["play_or_pause_button"],"tags":[],"unicode_version":"6.0","ios_version":"9.1"},{"emoji":"⏹","description":"stop button","category":"Symbols","aliases":["stop_button"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏺","description":"record button","category":"Symbols","aliases":["record_button"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏭","description":"next track button","category":"Symbols","aliases":["next_track_button"],"tags":[],"unicode_version":"6.0","ios_version":"9.1"},{"emoji":"⏮","description":"last track button","category":"Symbols","aliases":["previous_track_button"],"tags":[],"unicode_version":"6.0","ios_version":"9.1"},{"emoji":"⏩","description":"fast-forward button","category":"Symbols","aliases":["fast_forward"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⏪","description":"fast reverse button","category":"Symbols","aliases":["rewind"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⏫","description":"fast up button","category":"Symbols","aliases":["arrow_double_up"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⏬","description":"fast down button","category":"Symbols","aliases":["arrow_double_down"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"◀️","description":"reverse button","category":"Symbols","aliases":["arrow_backward"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🔼","description":"up button","category":"Symbols","aliases":["arrow_up_small"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔽","description":"down button","category":"Symbols","aliases":["arrow_down_small"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"➡️","description":"right arrow","category":"Symbols","aliases":["arrow_right"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"⬅️","description":"left arrow","category":"Symbols","aliases":["arrow_left"],"tags":[],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"⬆️","description":"up arrow","category":"Symbols","aliases":["arrow_up"],"tags":[],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"⬇️","description":"down arrow","category":"Symbols","aliases":["arrow_down"],"tags":[],"unicode_version":"4.0","ios_version":"6.0"},{"emoji":"↗️","description":"up-right arrow","category":"Symbols","aliases":["arrow_upper_right"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↘️","description":"down-right arrow","category":"Symbols","aliases":["arrow_lower_right"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↙️","description":"down-left arrow","category":"Symbols","aliases":["arrow_lower_left"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↖️","description":"up-left arrow","category":"Symbols","aliases":["arrow_upper_left"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↕️","description":"up-down arrow","category":"Symbols","aliases":["arrow_up_down"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↔️","description":"left-right arrow","category":"Symbols","aliases":["left_right_arrow"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↪️","description":"left arrow curving right","category":"Symbols","aliases":["arrow_right_hook"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"↩️","description":"right arrow curving left","category":"Symbols","aliases":["leftwards_arrow_with_hook"],"tags":["return"],"unicode_version":"","ios_version":"6.0"},{"emoji":"⤴️","description":"right arrow curving up","category":"Symbols","aliases":["arrow_heading_up"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"⤵️","description":"right arrow curving down","category":"Symbols","aliases":["arrow_heading_down"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🔀","description":"shuffle tracks button","category":"Symbols","aliases":["twisted_rightwards_arrows"],"tags":["shuffle"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔁","description":"repeat button","category":"Symbols","aliases":["repeat"],"tags":["loop"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔂","description":"repeat single button","category":"Symbols","aliases":["repeat_one"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔄","description":"anticlockwise arrows button","category":"Symbols","aliases":["arrows_counterclockwise"],"tags":["sync"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔃","description":"clockwise vertical arrows","category":"Symbols","aliases":["arrows_clockwise"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎵","description":"musical note","category":"Symbols","aliases":["musical_note"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎶","description":"musical notes","category":"Symbols","aliases":["notes"],"tags":["music"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"➕","description":"heavy plus sign","category":"Symbols","aliases":["heavy_plus_sign"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"➖","description":"heavy minus sign","category":"Symbols","aliases":["heavy_minus_sign"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"➗","description":"heavy division sign","category":"Symbols","aliases":["heavy_division_sign"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✖️","description":"heavy multiplication x","category":"Symbols","aliases":["heavy_multiplication_x"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"💲","description":"heavy dollar sign","category":"Symbols","aliases":["heavy_dollar_sign"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💱","description":"currency exchange","category":"Symbols","aliases":["currency_exchange"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"™️","description":"trade mark","category":"Symbols","aliases":["tm"],"tags":["trademark"],"unicode_version":"","ios_version":"6.0"},{"emoji":"©️","description":"copyright","category":"Symbols","aliases":["copyright"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"®️","description":"registered","category":"Symbols","aliases":["registered"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"〰️","description":"wavy dash","category":"Symbols","aliases":["wavy_dash"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"➰","description":"curly loop","category":"Symbols","aliases":["curly_loop"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"➿","description":"double curly loop","category":"Symbols","aliases":["loop"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔚","description":"END arrow","category":"Symbols","aliases":["end"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔙","description":"BACK arrow","category":"Symbols","aliases":["back"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔛","description":"ON! arrow","category":"Symbols","aliases":["on"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔝","description":"TOP arrow","category":"Symbols","aliases":["top"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔜","description":"SOON arrow","category":"Symbols","aliases":["soon"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"✔️","description":"heavy check mark","category":"Symbols","aliases":["heavy_check_mark"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"☑️","description":"ballot box with check","category":"Symbols","aliases":["ballot_box_with_check"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🔘","description":"radio button","category":"Symbols","aliases":["radio_button"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"⚪️","description":"white circle","category":"Symbols","aliases":["white_circle"],"tags":[],"unicode_version":"4.1","ios_version":"6.0"},{"emoji":"⚫️","description":"black circle","category":"Symbols","aliases":["black_circle"],"tags":[],"unicode_version":"4.1","ios_version":"6.0"},{"emoji":"🔴","description":"red circle","category":"Symbols","aliases":["red_circle"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔵","description":"blue circle","category":"Symbols","aliases":["large_blue_circle"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔺","description":"red triangle pointed up","category":"Symbols","aliases":["small_red_triangle"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔻","description":"red triangle pointed down","category":"Symbols","aliases":["small_red_triangle_down"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔸","description":"small orange diamond","category":"Symbols","aliases":["small_orange_diamond"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔹","description":"small blue diamond","category":"Symbols","aliases":["small_blue_diamond"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔶","description":"large orange diamond","category":"Symbols","aliases":["large_orange_diamond"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔷","description":"large blue diamond","category":"Symbols","aliases":["large_blue_diamond"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔳","description":"white square button","category":"Symbols","aliases":["white_square_button"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔲","description":"black square button","category":"Symbols","aliases":["black_square_button"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"▪️","description":"black small square","category":"Symbols","aliases":["black_small_square"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"▫️","description":"white small square","category":"Symbols","aliases":["white_small_square"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"◾️","description":"black medium-small square","category":"Symbols","aliases":["black_medium_small_square"],"tags":[],"unicode_version":"3.2","ios_version":"6.0"},{"emoji":"◽️","description":"white medium-small square","category":"Symbols","aliases":["white_medium_small_square"],"tags":[],"unicode_version":"3.2","ios_version":"6.0"},{"emoji":"◼️","description":"black medium square","category":"Symbols","aliases":["black_medium_square"],"tags":[],"unicode_version":"3.2","ios_version":"6.0"},{"emoji":"◻️","description":"white medium square","category":"Symbols","aliases":["white_medium_square"],"tags":[],"unicode_version":"3.2","ios_version":"6.0"},{"emoji":"⬛️","description":"black large square","category":"Symbols","aliases":["black_large_square"],"tags":[],"unicode_version":"5.1","ios_version":"6.0"},{"emoji":"⬜️","description":"white large square","category":"Symbols","aliases":["white_large_square"],"tags":[],"unicode_version":"5.1","ios_version":"6.0"},{"emoji":"🔈","description":"speaker low volume","category":"Symbols","aliases":["speaker"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔇","description":"muted speaker","category":"Symbols","aliases":["mute"],"tags":["sound","volume"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔉","description":"speaker medium volume","category":"Symbols","aliases":["sound"],"tags":["volume"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔊","description":"speaker high volume","category":"Symbols","aliases":["loud_sound"],"tags":["volume"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔔","description":"bell","category":"Symbols","aliases":["bell"],"tags":["sound","notification"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🔕","description":"bell with slash","category":"Symbols","aliases":["no_bell"],"tags":["volume","off"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📣","description":"megaphone","category":"Symbols","aliases":["mega"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"📢","description":"loudspeaker","category":"Symbols","aliases":["loudspeaker"],"tags":["announcement"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"👁‍🗨","description":"eye in speech bubble","category":"Symbols","aliases":["eye_speech_bubble"],"tags":[],"unicode_version":"6.0","ios_version":"9.1"},{"emoji":"💬","description":"speech balloon","category":"Symbols","aliases":["speech_balloon"],"tags":["comment"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"💭","description":"thought balloon","category":"Symbols","aliases":["thought_balloon"],"tags":["thinking"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🗯","description":"right anger bubble","category":"Symbols","aliases":["right_anger_bubble"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"♠️","description":"spade suit","category":"Symbols","aliases":["spades"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♣️","description":"club suit","category":"Symbols","aliases":["clubs"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♥️","description":"heart suit","category":"Symbols","aliases":["hearts"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"♦️","description":"diamond suit","category":"Symbols","aliases":["diamonds"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🃏","description":"joker","category":"Symbols","aliases":["black_joker"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎴","description":"flower playing cards","category":"Symbols","aliases":["flower_playing_cards"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🀄️","description":"mahjong red dragon","category":"Symbols","aliases":["mahjong"],"tags":[],"unicode_version":"","ios_version":"6.0"},{"emoji":"🕐","description":"one o’clock","category":"Symbols","aliases":["clock1"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕑","description":"two o’clock","category":"Symbols","aliases":["clock2"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕒","description":"three o’clock","category":"Symbols","aliases":["clock3"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕓","description":"four o’clock","category":"Symbols","aliases":["clock4"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕔","description":"five o’clock","category":"Symbols","aliases":["clock5"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕕","description":"six o’clock","category":"Symbols","aliases":["clock6"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕖","description":"seven o’clock","category":"Symbols","aliases":["clock7"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕗","description":"eight o’clock","category":"Symbols","aliases":["clock8"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕘","description":"nine o’clock","category":"Symbols","aliases":["clock9"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕙","description":"ten o’clock","category":"Symbols","aliases":["clock10"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕚","description":"eleven o’clock","category":"Symbols","aliases":["clock11"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕛","description":"twelve o’clock","category":"Symbols","aliases":["clock12"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕜","description":"one-thirty","category":"Symbols","aliases":["clock130"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕝","description":"two-thirty","category":"Symbols","aliases":["clock230"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕞","description":"three-thirty","category":"Symbols","aliases":["clock330"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕟","description":"four-thirty","category":"Symbols","aliases":["clock430"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕠","description":"five-thirty","category":"Symbols","aliases":["clock530"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕡","description":"six-thirty","category":"Symbols","aliases":["clock630"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕢","description":"seven-thirty","category":"Symbols","aliases":["clock730"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕣","description":"eight-thirty","category":"Symbols","aliases":["clock830"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕤","description":"nine-thirty","category":"Symbols","aliases":["clock930"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕥","description":"ten-thirty","category":"Symbols","aliases":["clock1030"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕦","description":"eleven-thirty","category":"Symbols","aliases":["clock1130"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🕧","description":"twelve-thirty","category":"Symbols","aliases":["clock1230"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏳️","description":"white flag","category":"Flags","aliases":["white_flag"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏴","description":"black flag","category":"Flags","aliases":["black_flag"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏁","description":"chequered flag","category":"Flags","aliases":["checkered_flag"],"tags":["milestone","finish"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🚩","description":"triangular flag","category":"Flags","aliases":["triangular_flag_on_post"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🏳️‍🌈","description":"rainbow flag","category":"Flags","aliases":["rainbow_flag"],"tags":["pride"],"unicode_version":"6.0","ios_version":"10.0"},{"emoji":"🇦🇫","description":"Afghanistan","category":"Flags","aliases":["afghanistan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇽","description":"Åland Islands","category":"Flags","aliases":["aland_islands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇦🇱","description":"Albania","category":"Flags","aliases":["albania"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇩🇿","description":"Algeria","category":"Flags","aliases":["algeria"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇸","description":"American Samoa","category":"Flags","aliases":["american_samoa"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇩","description":"Andorra","category":"Flags","aliases":["andorra"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇴","description":"Angola","category":"Flags","aliases":["angola"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇮","description":"Anguilla","category":"Flags","aliases":["anguilla"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇶","description":"Antarctica","category":"Flags","aliases":["antarctica"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇦🇬","description":"Antigua & Barbuda","category":"Flags","aliases":["antigua_barbuda"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇷","description":"Argentina","category":"Flags","aliases":["argentina"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇲","description":"Armenia","category":"Flags","aliases":["armenia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇼","description":"Aruba","category":"Flags","aliases":["aruba"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇺","description":"Australia","category":"Flags","aliases":["australia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇹","description":"Austria","category":"Flags","aliases":["austria"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇿","description":"Azerbaijan","category":"Flags","aliases":["azerbaijan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇸","description":"Bahamas","category":"Flags","aliases":["bahamas"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇭","description":"Bahrain","category":"Flags","aliases":["bahrain"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇩","description":"Bangladesh","category":"Flags","aliases":["bangladesh"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇧","description":"Barbados","category":"Flags","aliases":["barbados"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇾","description":"Belarus","category":"Flags","aliases":["belarus"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇪","description":"Belgium","category":"Flags","aliases":["belgium"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇿","description":"Belize","category":"Flags","aliases":["belize"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇯","description":"Benin","category":"Flags","aliases":["benin"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇲","description":"Bermuda","category":"Flags","aliases":["bermuda"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇹","description":"Bhutan","category":"Flags","aliases":["bhutan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇴","description":"Bolivia","category":"Flags","aliases":["bolivia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇶","description":"Caribbean Netherlands","category":"Flags","aliases":["caribbean_netherlands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇧🇦","description":"Bosnia & Herzegovina","category":"Flags","aliases":["bosnia_herzegovina"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇼","description":"Botswana","category":"Flags","aliases":["botswana"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇷","description":"Brazil","category":"Flags","aliases":["brazil"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇴","description":"British Indian Ocean Territory","category":"Flags","aliases":["british_indian_ocean_territory"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇻🇬","description":"British Virgin Islands","category":"Flags","aliases":["british_virgin_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇳","description":"Brunei","category":"Flags","aliases":["brunei"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇬","description":"Bulgaria","category":"Flags","aliases":["bulgaria"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇫","description":"Burkina Faso","category":"Flags","aliases":["burkina_faso"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇮","description":"Burundi","category":"Flags","aliases":["burundi"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇻","description":"Cape Verde","category":"Flags","aliases":["cape_verde"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇭","description":"Cambodia","category":"Flags","aliases":["cambodia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇲","description":"Cameroon","category":"Flags","aliases":["cameroon"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇦","description":"Canada","category":"Flags","aliases":["canada"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇨","description":"Canary Islands","category":"Flags","aliases":["canary_islands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇰🇾","description":"Cayman Islands","category":"Flags","aliases":["cayman_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇫","description":"Central African Republic","category":"Flags","aliases":["central_african_republic"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇩","description":"Chad","category":"Flags","aliases":["chad"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇨🇱","description":"Chile","category":"Flags","aliases":["chile"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇳","description":"China","category":"Flags","aliases":["cn"],"tags":["china"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇨🇽","description":"Christmas Island","category":"Flags","aliases":["christmas_island"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇨🇨","description":"Cocos (Keeling) Islands","category":"Flags","aliases":["cocos_islands"],"tags":["keeling"],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇨🇴","description":"Colombia","category":"Flags","aliases":["colombia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇲","description":"Comoros","category":"Flags","aliases":["comoros"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇬","description":"Congo - Brazzaville","category":"Flags","aliases":["congo_brazzaville"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇩","description":"Congo - Kinshasa","category":"Flags","aliases":["congo_kinshasa"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇰","description":"Cook Islands","category":"Flags","aliases":["cook_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇷","description":"Costa Rica","category":"Flags","aliases":["costa_rica"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇮","description":"Côte d’Ivoire","category":"Flags","aliases":["cote_divoire"],"tags":["ivory"],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇭🇷","description":"Croatia","category":"Flags","aliases":["croatia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇺","description":"Cuba","category":"Flags","aliases":["cuba"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇼","description":"Curaçao","category":"Flags","aliases":["curacao"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇾","description":"Cyprus","category":"Flags","aliases":["cyprus"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇿","description":"Czech Republic","category":"Flags","aliases":["czech_republic"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇩🇰","description":"Denmark","category":"Flags","aliases":["denmark"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇩🇯","description":"Djibouti","category":"Flags","aliases":["djibouti"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇩🇲","description":"Dominica","category":"Flags","aliases":["dominica"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇩🇴","description":"Dominican Republic","category":"Flags","aliases":["dominican_republic"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇨","description":"Ecuador","category":"Flags","aliases":["ecuador"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇬","description":"Egypt","category":"Flags","aliases":["egypt"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇻","description":"El Salvador","category":"Flags","aliases":["el_salvador"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇶","description":"Equatorial Guinea","category":"Flags","aliases":["equatorial_guinea"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇷","description":"Eritrea","category":"Flags","aliases":["eritrea"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇪","description":"Estonia","category":"Flags","aliases":["estonia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇹","description":"Ethiopia","category":"Flags","aliases":["ethiopia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇺","description":"European Union","category":"Flags","aliases":["eu","european_union"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇫🇰","description":"Falkland Islands","category":"Flags","aliases":["falkland_islands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇫🇴","description":"Faroe Islands","category":"Flags","aliases":["faroe_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇫🇯","description":"Fiji","category":"Flags","aliases":["fiji"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇫🇮","description":"Finland","category":"Flags","aliases":["finland"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇫🇷","description":"France","category":"Flags","aliases":["fr"],"tags":["france","french"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇬🇫","description":"French Guiana","category":"Flags","aliases":["french_guiana"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇫","description":"French Polynesia","category":"Flags","aliases":["french_polynesia"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇹🇫","description":"French Southern Territories","category":"Flags","aliases":["french_southern_territories"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇦","description":"Gabon","category":"Flags","aliases":["gabon"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇲","description":"Gambia","category":"Flags","aliases":["gambia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇪","description":"Georgia","category":"Flags","aliases":["georgia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇩🇪","description":"Germany","category":"Flags","aliases":["de"],"tags":["flag","germany"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇬🇭","description":"Ghana","category":"Flags","aliases":["ghana"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇮","description":"Gibraltar","category":"Flags","aliases":["gibraltar"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇷","description":"Greece","category":"Flags","aliases":["greece"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇱","description":"Greenland","category":"Flags","aliases":["greenland"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇬🇩","description":"Grenada","category":"Flags","aliases":["grenada"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇵","description":"Guadeloupe","category":"Flags","aliases":["guadeloupe"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇬🇺","description":"Guam","category":"Flags","aliases":["guam"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇹","description":"Guatemala","category":"Flags","aliases":["guatemala"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇬","description":"Guernsey","category":"Flags","aliases":["guernsey"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇬🇳","description":"Guinea","category":"Flags","aliases":["guinea"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇼","description":"Guinea-Bissau","category":"Flags","aliases":["guinea_bissau"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇾","description":"Guyana","category":"Flags","aliases":["guyana"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇭🇹","description":"Haiti","category":"Flags","aliases":["haiti"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇭🇳","description":"Honduras","category":"Flags","aliases":["honduras"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇭🇰","description":"Hong Kong SAR China","category":"Flags","aliases":["hong_kong"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇭🇺","description":"Hungary","category":"Flags","aliases":["hungary"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇸","description":"Iceland","category":"Flags","aliases":["iceland"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇳","description":"India","category":"Flags","aliases":["india"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇩","description":"Indonesia","category":"Flags","aliases":["indonesia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇷","description":"Iran","category":"Flags","aliases":["iran"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇶","description":"Iraq","category":"Flags","aliases":["iraq"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇪","description":"Ireland","category":"Flags","aliases":["ireland"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇲","description":"Isle of Man","category":"Flags","aliases":["isle_of_man"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇮🇱","description":"Israel","category":"Flags","aliases":["israel"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇮🇹","description":"Italy","category":"Flags","aliases":["it"],"tags":["italy"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇯🇲","description":"Jamaica","category":"Flags","aliases":["jamaica"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇯🇵","description":"Japan","category":"Flags","aliases":["jp"],"tags":["japan"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🎌","description":"crossed flags","category":"Flags","aliases":["crossed_flags"],"tags":[],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇯🇪","description":"Jersey","category":"Flags","aliases":["jersey"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇯🇴","description":"Jordan","category":"Flags","aliases":["jordan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇿","description":"Kazakhstan","category":"Flags","aliases":["kazakhstan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇪","description":"Kenya","category":"Flags","aliases":["kenya"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇮","description":"Kiribati","category":"Flags","aliases":["kiribati"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇽🇰","description":"Kosovo","category":"Flags","aliases":["kosovo"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇼","description":"Kuwait","category":"Flags","aliases":["kuwait"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇬","description":"Kyrgyzstan","category":"Flags","aliases":["kyrgyzstan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇦","description":"Laos","category":"Flags","aliases":["laos"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇻","description":"Latvia","category":"Flags","aliases":["latvia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇧","description":"Lebanon","category":"Flags","aliases":["lebanon"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇸","description":"Lesotho","category":"Flags","aliases":["lesotho"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇷","description":"Liberia","category":"Flags","aliases":["liberia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇾","description":"Libya","category":"Flags","aliases":["libya"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇮","description":"Liechtenstein","category":"Flags","aliases":["liechtenstein"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇹","description":"Lithuania","category":"Flags","aliases":["lithuania"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇺","description":"Luxembourg","category":"Flags","aliases":["luxembourg"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇴","description":"Macau SAR China","category":"Flags","aliases":["macau"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇰","description":"Macedonia","category":"Flags","aliases":["macedonia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇬","description":"Madagascar","category":"Flags","aliases":["madagascar"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇼","description":"Malawi","category":"Flags","aliases":["malawi"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇾","description":"Malaysia","category":"Flags","aliases":["malaysia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇻","description":"Maldives","category":"Flags","aliases":["maldives"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇱","description":"Mali","category":"Flags","aliases":["mali"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇹","description":"Malta","category":"Flags","aliases":["malta"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇭","description":"Marshall Islands","category":"Flags","aliases":["marshall_islands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇲🇶","description":"Martinique","category":"Flags","aliases":["martinique"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇲🇷","description":"Mauritania","category":"Flags","aliases":["mauritania"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇺","description":"Mauritius","category":"Flags","aliases":["mauritius"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇾🇹","description":"Mayotte","category":"Flags","aliases":["mayotte"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇲🇽","description":"Mexico","category":"Flags","aliases":["mexico"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇫🇲","description":"Micronesia","category":"Flags","aliases":["micronesia"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇲🇩","description":"Moldova","category":"Flags","aliases":["moldova"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇨","description":"Monaco","category":"Flags","aliases":["monaco"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇲🇳","description":"Mongolia","category":"Flags","aliases":["mongolia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇪","description":"Montenegro","category":"Flags","aliases":["montenegro"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇸","description":"Montserrat","category":"Flags","aliases":["montserrat"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇦","description":"Morocco","category":"Flags","aliases":["morocco"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇿","description":"Mozambique","category":"Flags","aliases":["mozambique"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇲🇲","description":"Myanmar (Burma)","category":"Flags","aliases":["myanmar"],"tags":["burma"],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇦","description":"Namibia","category":"Flags","aliases":["namibia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇷","description":"Nauru","category":"Flags","aliases":["nauru"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇳🇵","description":"Nepal","category":"Flags","aliases":["nepal"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇱","description":"Netherlands","category":"Flags","aliases":["netherlands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇨","description":"New Caledonia","category":"Flags","aliases":["new_caledonia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇿","description":"New Zealand","category":"Flags","aliases":["new_zealand"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇮","description":"Nicaragua","category":"Flags","aliases":["nicaragua"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇪","description":"Niger","category":"Flags","aliases":["niger"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇬","description":"Nigeria","category":"Flags","aliases":["nigeria"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇺","description":"Niue","category":"Flags","aliases":["niue"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇫","description":"Norfolk Island","category":"Flags","aliases":["norfolk_island"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇲🇵","description":"Northern Mariana Islands","category":"Flags","aliases":["northern_mariana_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇰🇵","description":"North Korea","category":"Flags","aliases":["north_korea"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇳🇴","description":"Norway","category":"Flags","aliases":["norway"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇴🇲","description":"Oman","category":"Flags","aliases":["oman"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇰","description":"Pakistan","category":"Flags","aliases":["pakistan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇼","description":"Palau","category":"Flags","aliases":["palau"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇸","description":"Palestinian Territories","category":"Flags","aliases":["palestinian_territories"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇦","description":"Panama","category":"Flags","aliases":["panama"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇬","description":"Papua New Guinea","category":"Flags","aliases":["papua_new_guinea"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇾","description":"Paraguay","category":"Flags","aliases":["paraguay"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇪","description":"Peru","category":"Flags","aliases":["peru"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇭","description":"Philippines","category":"Flags","aliases":["philippines"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇳","description":"Pitcairn Islands","category":"Flags","aliases":["pitcairn_islands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇵🇱","description":"Poland","category":"Flags","aliases":["poland"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇹","description":"Portugal","category":"Flags","aliases":["portugal"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇷","description":"Puerto Rico","category":"Flags","aliases":["puerto_rico"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇶🇦","description":"Qatar","category":"Flags","aliases":["qatar"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇷🇪","description":"Réunion","category":"Flags","aliases":["reunion"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇷🇴","description":"Romania","category":"Flags","aliases":["romania"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇷🇺","description":"Russia","category":"Flags","aliases":["ru"],"tags":["russia"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇷🇼","description":"Rwanda","category":"Flags","aliases":["rwanda"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇧🇱","description":"St. Barthélemy","category":"Flags","aliases":["st_barthelemy"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇸🇭","description":"St. Helena","category":"Flags","aliases":["st_helena"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇰🇳","description":"St. Kitts & Nevis","category":"Flags","aliases":["st_kitts_nevis"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇱🇨","description":"St. Lucia","category":"Flags","aliases":["st_lucia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇵🇲","description":"St. Pierre & Miquelon","category":"Flags","aliases":["st_pierre_miquelon"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇻🇨","description":"St. Vincent & Grenadines","category":"Flags","aliases":["st_vincent_grenadines"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇼🇸","description":"Samoa","category":"Flags","aliases":["samoa"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇲","description":"San Marino","category":"Flags","aliases":["san_marino"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇹","description":"São Tomé & Príncipe","category":"Flags","aliases":["sao_tome_principe"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇦","description":"Saudi Arabia","category":"Flags","aliases":["saudi_arabia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇳","description":"Senegal","category":"Flags","aliases":["senegal"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇷🇸","description":"Serbia","category":"Flags","aliases":["serbia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇨","description":"Seychelles","category":"Flags","aliases":["seychelles"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇱","description":"Sierra Leone","category":"Flags","aliases":["sierra_leone"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇬","description":"Singapore","category":"Flags","aliases":["singapore"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇽","description":"Sint Maarten","category":"Flags","aliases":["sint_maarten"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇰","description":"Slovakia","category":"Flags","aliases":["slovakia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇮","description":"Slovenia","category":"Flags","aliases":["slovenia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇧","description":"Solomon Islands","category":"Flags","aliases":["solomon_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇴","description":"Somalia","category":"Flags","aliases":["somalia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇿🇦","description":"South Africa","category":"Flags","aliases":["south_africa"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇸","description":"South Georgia & South Sandwich Islands","category":"Flags","aliases":["south_georgia_south_sandwich_islands"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇰🇷","description":"South Korea","category":"Flags","aliases":["kr"],"tags":["korea"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇸🇸","description":"South Sudan","category":"Flags","aliases":["south_sudan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇪🇸","description":"Spain","category":"Flags","aliases":["es"],"tags":["spain"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇱🇰","description":"Sri Lanka","category":"Flags","aliases":["sri_lanka"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇩","description":"Sudan","category":"Flags","aliases":["sudan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇷","description":"Suriname","category":"Flags","aliases":["suriname"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇿","description":"Swaziland","category":"Flags","aliases":["swaziland"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇪","description":"Sweden","category":"Flags","aliases":["sweden"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇨🇭","description":"Switzerland","category":"Flags","aliases":["switzerland"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇸🇾","description":"Syria","category":"Flags","aliases":["syria"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇼","description":"Taiwan","category":"Flags","aliases":["taiwan"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇹🇯","description":"Tajikistan","category":"Flags","aliases":["tajikistan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇿","description":"Tanzania","category":"Flags","aliases":["tanzania"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇭","description":"Thailand","category":"Flags","aliases":["thailand"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇱","description":"Timor-Leste","category":"Flags","aliases":["timor_leste"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇬","description":"Togo","category":"Flags","aliases":["togo"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇰","description":"Tokelau","category":"Flags","aliases":["tokelau"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇹🇴","description":"Tonga","category":"Flags","aliases":["tonga"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇹","description":"Trinidad & Tobago","category":"Flags","aliases":["trinidad_tobago"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇳","description":"Tunisia","category":"Flags","aliases":["tunisia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇷","description":"Turkey","category":"Flags","aliases":["tr"],"tags":["turkey"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🇹🇲","description":"Turkmenistan","category":"Flags","aliases":["turkmenistan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇨","description":"Turks & Caicos Islands","category":"Flags","aliases":["turks_caicos_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇹🇻","description":"Tuvalu","category":"Flags","aliases":["tuvalu"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇺🇬","description":"Uganda","category":"Flags","aliases":["uganda"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇺🇦","description":"Ukraine","category":"Flags","aliases":["ukraine"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇦🇪","description":"United Arab Emirates","category":"Flags","aliases":["united_arab_emirates"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇬🇧","description":"United Kingdom","category":"Flags","aliases":["gb","uk"],"tags":["flag","british"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇺🇸","description":"United States","category":"Flags","aliases":["us"],"tags":["flag","united","america"],"unicode_version":"6.0","ios_version":"6.0"},{"emoji":"🇻🇮","description":"U.S. Virgin Islands","category":"Flags","aliases":["us_virgin_islands"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇺🇾","description":"Uruguay","category":"Flags","aliases":["uruguay"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇺🇿","description":"Uzbekistan","category":"Flags","aliases":["uzbekistan"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇻🇺","description":"Vanuatu","category":"Flags","aliases":["vanuatu"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇻🇦","description":"Vatican City","category":"Flags","aliases":["vatican_city"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇻🇪","description":"Venezuela","category":"Flags","aliases":["venezuela"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇻🇳","description":"Vietnam","category":"Flags","aliases":["vietnam"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇼🇫","description":"Wallis & Futuna","category":"Flags","aliases":["wallis_futuna"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇪🇭","description":"Western Sahara","category":"Flags","aliases":["western_sahara"],"tags":[],"unicode_version":"6.0","ios_version":"9.0"},{"emoji":"🇾🇪","description":"Yemen","category":"Flags","aliases":["yemen"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇿🇲","description":"Zambia","category":"Flags","aliases":["zambia"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"},{"emoji":"🇿🇼","description":"Zimbabwe","category":"Flags","aliases":["zimbabwe"],"tags":[],"unicode_version":"6.0","ios_version":"8.3"}];

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(16);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(19)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports
exports.i(__webpack_require__(18), "");

// module
exports.push([module.i, "\n.message {\n  margin-top: 150px;\n  position: relative;\n  display: flex;\n  width: 80%;\n}\n.message .rich-editor-container {\n    width: 100%;\n    height: 2rem;\n    border: 1px solid #ddd;\n    border-radius: 9999px;\n    padding: 5px 40px 5px 15px;\n    line-height: 2rem;\n}\n.message .rich-editor-container:focus {\n      outline: none;\n}\n.message .message-emoji {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n}\n.message [contenteditable=\"true\"]:empty:before {\n    content: attr(placeholder);\n    color: grey;\n}\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".emoji-picker{position:relative}.emoji-picker .emoji-invoker{position:relative;text-align:right}.emoji-picker .emoji-invoker .invoker-icon{font-size:28px}.emoji-picker .emoji-invoker .invoker-icon .show{font-size:20px}.emoji-picker .emoji-dropdown{width:295px;margin:10px 0;border:1px solid #dae1e7;border-radius:5px;padding:0 4px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.emoji-picker .emoji-dropdown .header{border-bottom:1px solid #dddd;width:100%;margin-bottom:10px;padding:10px 4px 0;display:-webkit-box;display:-ms-flexbox;display:flex;background:#f8fafc;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top-right-radius:5px;border-top-left-radius:5px}.emoji-picker .emoji-dropdown .search{position:relative;width:100%}.emoji-picker .emoji-dropdown .search input{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 8px 5px 30px;margin-bottom:10px;border:1px solid #dae1e7;font-size:14px;border-radius:9999px}.emoji-picker .emoji-dropdown .search input:focus{outline:none}.emoji-picker .emoji-dropdown .search .search-icon{position:absolute;left:8px;top:5px}.emoji-picker .emoji-dropdown .emojis{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:180px;width:100%;overflow-y:scroll;overflow-x:hidden;position:relative}.emoji-picker .emoji-dropdown .emojis .category{text-transform:capitalize;padding:6px;color:#3d4852;position:-webkit-sticky;position:sticky;z-index:2;top:0;background:#fff}.emoji-picker .emoji-dropdown .emojis::-webkit-scrollbar{width:6px;background-color:#f5f5f5;border-radius:5px}.emoji-picker .emoji-dropdown .emojis::-webkit-scrollbar-thumb{background-color:hsla(0,2%,78%,.867);border-radius:5px}.emoji-picker .emoji-dropdown .emojis .emoji-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.emoji-picker .emoji-dropdown .emojis .emoji{padding:3px;font-size:1.5em}.emoji-picker .emoji-dropdown .result-info{font-size:1rem;margin:auto;text-align:center;color:grey}.emoji-picker .active{border-bottom:2px solid green}.emoji-picker .pointer{cursor:pointer}.emoji-picker svg{fill:currentColor;max-height:18px}.emoji-picker .footer{padding:10px 4px;width:100%;height:2.5rem;border-top:1px solid #ddd;background:#f9f9f9;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.emoji-picker .footer,.emoji-picker .footer .emoji-preview{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.emoji-picker .footer .emoji-preview .emoji{font-size:2rem;margin-right:.5rem}.emoji-picker .footer .emoji-preview .alias-container{font-size:.9rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.emoji-picker .footer .emoji-preview .alias-container .title{color:#3d4852}.emoji-picker .footer .emoji-preview .alias-container .alias{color:grey}.emoji-picker .footer .title{padding-left:6px;color:grey}.emoji-picker .footer .ton-picker{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 6px}.emoji-picker .footer .ton-picker,.emoji-picker .footer .ton-picker .hands-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.emoji-picker .footer .ton-picker .hands-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.emoji-picker .footer .ton-picker .hands-container .hands{font-size:1.3rem;display:-webkit-box;display:-ms-flexbox;display:flex}.emoji-picker .footer .ton-picker .hands-container .hands .hand{cursor:pointer}.emoji-picker .footer .ton-picker .hands-container .tip{font-size:.8rem;color:grey}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 21 */
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


/***/ })
/******/ ]);