(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node2 of mutation.addedNodes) {
        if (node2.tagName === "LINK" && node2.rel === "modulepreload")
          processPreload(node2);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const index = "";
const markdown = "";
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = z$2 && a2[z$2] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$2 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
var H$2 = G$2.prototype = new F$1();
H$2.constructor = G$2;
C$2(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$2, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$2(a2, b2) {
  return { $$typeof: l$2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$2;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$2 = /\/+/g;
function Q$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$2:
          case n$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$2, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$2(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$2(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$2(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a2, b2, e2) {
  if (null == a2)
    return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$2(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status)
    return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
  S$2(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$1, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$1, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$2, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$2 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$1, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a2();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.2.0";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react);
const React = /* @__PURE__ */ getDefaultExportFromCjs(react.exports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = react.exports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2)
    m$2.call(a2, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
var eventemitter3 = { exports: {} };
(function(module) {
  var has2 = Object.prototype.hasOwnProperty, prefix2 = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__)
      prefix2 = false;
  }
  function EE(fn2, context, once) {
    this.fn = fn2;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn2, context, once) {
    if (typeof fn2 !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn2, context || emitter, once), evt = prefix2 ? prefix2 + event : event;
    if (!emitter._events[evt])
      emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn)
      emitter._events[evt].push(listener);
    else
      emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0)
      emitter._events = new Events();
    else
      delete emitter._events[evt];
  }
  function EventEmitter2() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter2.prototype.eventNames = function eventNames() {
    var names = [], events, name2;
    if (this._eventsCount === 0)
      return names;
    for (name2 in events = this._events) {
      if (has2.call(events, name2))
        names.push(prefix2 ? name2.slice(1) : name2);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter2.prototype.listeners = function listeners(event) {
    var evt = prefix2 ? prefix2 + event : event, handlers = this._events[evt];
    if (!handlers)
      return [];
    if (handlers.fn)
      return [handlers.fn];
    for (var i2 = 0, l2 = handlers.length, ee2 = new Array(l2); i2 < l2; i2++) {
      ee2[i2] = handlers[i2].fn;
    }
    return ee2;
  };
  EventEmitter2.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix2 ? prefix2 + event : event, listeners = this._events[evt];
    if (!listeners)
      return 0;
    if (listeners.fn)
      return 1;
    return listeners.length;
  };
  EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix2 ? prefix2 + event : event;
    if (!this._events[evt])
      return false;
    var listeners = this._events[evt], len = arguments.length, args, i2;
    if (listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i2 = 1, args = new Array(len - 1); i2 < len; i2++) {
        args[i2 - 1] = arguments[i2];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length2 = listeners.length, j2;
      for (i2 = 0; i2 < length2; i2++) {
        if (listeners[i2].once)
          this.removeListener(event, listeners[i2].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i2].fn.call(listeners[i2].context);
            break;
          case 2:
            listeners[i2].fn.call(listeners[i2].context, a1);
            break;
          case 3:
            listeners[i2].fn.call(listeners[i2].context, a1, a2);
            break;
          case 4:
            listeners[i2].fn.call(listeners[i2].context, a1, a2, a3);
            break;
          default:
            if (!args)
              for (j2 = 1, args = new Array(len - 1); j2 < len; j2++) {
                args[j2 - 1] = arguments[j2];
              }
            listeners[i2].fn.apply(listeners[i2].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter2.prototype.on = function on2(event, fn2, context) {
    return addListener(this, event, fn2, context, false);
  };
  EventEmitter2.prototype.once = function once(event, fn2, context) {
    return addListener(this, event, fn2, context, true);
  };
  EventEmitter2.prototype.removeListener = function removeListener(event, fn2, context, once) {
    var evt = prefix2 ? prefix2 + event : event;
    if (!this._events[evt])
      return this;
    if (!fn2) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn2 && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i2 = 0, events = [], length2 = listeners.length; i2 < length2; i2++) {
        if (listeners[i2].fn !== fn2 || once && !listeners[i2].once || context && listeners[i2].context !== context) {
          events.push(listeners[i2]);
        }
      }
      if (events.length)
        this._events[evt] = events.length === 1 ? events[0] : events;
      else
        clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix2 ? prefix2 + event : event;
      if (this._events[evt])
        clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
  EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
  EventEmitter2.prefixed = prefix2;
  EventEmitter2.EventEmitter = EventEmitter2;
  {
    module.exports = EventEmitter2;
  }
})(eventemitter3);
const EventEmitter = eventemitter3.exports;
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q$1];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (null === r2)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!n2.constructor[L$1] || s(n2) || v$1(n2));
}
function e(t2) {
  return r(t2) || n(23, t2), t2[Q$1].t;
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v$1(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X$1 && n2 instanceof Map;
}
function v$1(n2) {
  return q && n2 instanceof Set;
}
function p$1(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$1];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return void 0 === e2 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$1), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true), n2);
}
function h$1() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m$1(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U$1;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O$1(n2) {
  g(n2), n2.p.forEach(S$1), n2.p = null;
}
function g(n2) {
  n2 === U$1 && (U$1 = n2.l);
}
function w(n2) {
  return U$1 = { p: [], l: U$1, h: n2, m: true, _: 0 };
}
function S$1(n2) {
  var r2 = n2[Q$1];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.O = true;
}
function P$1(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q$1].P && (O$1(e2), n(4)), t(r2) && (r2 = M$1(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M$1(e2, i2, []), O$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$1 ? r2 : void 0;
}
function M$1(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q$1];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A$1(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o;
    i(3 === e2.i ? new Set(o2) : o2, function(r3, i2) {
      return A$1(n2, e2, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$1(e2, i2, o2, a2, c2, s2) {
  if (r(c2)) {
    var v2 = M$1(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2))
      return;
    e2.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M$1(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}
function z$1(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$1(t2) : n2)[r2];
}
function I$1(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E$1(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R$1(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").N(r2, t2) : v$1(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
function D$1(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q$1], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F(r2, c2), u2.I = false;
    } else
      e3 = F(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function N$1() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q$1];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q$1];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q$1];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q$1) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q$1];
        if (s3 ? s3.t !== a3 : !c(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q$1];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m$1("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q$1];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, D: {}, l: r2, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q$1, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r(t3) && t3[Q$1].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q$1];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.D, c2 = t4.i;
          if (4 === c2)
            i(o4, function(r3) {
              r3 !== Q$1 && (void 0 !== e3[r3] || u(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k(t4)));
            }), i(e3, function(n4) {
              void 0 !== o4[n4] || u(o4, n4) || (f2[n4] = false, k(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), void 0 === f2[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
function T$1() {
  function e2(n2) {
    if (!t(n2))
      return n2;
    if (Array.isArray(n2))
      return n2.map(e2);
    if (s(n2))
      return new Map(Array.from(n2.entries()).map(function(n3) {
        return [n3[0], e2(n3[1])];
      }));
    if (v$1(n2))
      return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));
    for (var i2 in n2)
      r2[i2] = e2(n2[i2]);
    return u(n2, L$1) && (r2[L$1] = n2[L$1]), r2;
  }
  function f2(n2) {
    return r(n2) ? e2(n2) : n2;
  }
  var c2 = "add";
  m$1("Patches", { $: function(r2, t2) {
    return t2.forEach(function(t3) {
      for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
        var v2 = o(f3), p2 = "" + i2[s2];
        0 !== v2 && 1 !== v2 || "__proto__" !== p2 && "constructor" !== p2 || n(24), "function" == typeof f3 && "prototype" === p2 && n(24), "object" != typeof (f3 = a(f3, p2)) && n(15, i2.join("/"));
      }
      var l2 = o(f3), d2 = e2(t3.value), h2 = i2[i2.length - 1];
      switch (u2) {
        case "replace":
          switch (l2) {
            case 2:
              return f3.set(h2, d2);
            case 3:
              n(16);
            default:
              return f3[h2] = d2;
          }
        case c2:
          switch (l2) {
            case 1:
              return "-" === h2 ? f3.push(d2) : f3.splice(h2, 0, d2);
            case 2:
              return f3.set(h2, d2);
            case 3:
              return f3.add(d2);
            default:
              return f3[h2] = d2;
          }
        case "remove":
          switch (l2) {
            case 1:
              return f3.splice(h2, 1);
            case 2:
              return f3.delete(h2);
            case 3:
              return f3.delete(t3.value);
            default:
              return delete f3[h2];
          }
        default:
          n(17, u2);
      }
    }), r2;
  }, R: function(n2, r2, t2, e3) {
    switch (n2.i) {
      case 0:
      case 4:
      case 2:
        return function(n3, r3, t3, e4) {
          var o2 = n3.t, s2 = n3.o;
          i(n3.D, function(n4, i2) {
            var v2 = a(o2, n4), p2 = a(s2, n4), l2 = i2 ? u(o2, n4) ? "replace" : c2 : "remove";
            if (v2 !== p2 || "replace" !== l2) {
              var d2 = r3.concat(n4);
              t3.push("remove" === l2 ? { op: l2, path: d2 } : { op: l2, path: d2, value: p2 }), e4.push(l2 === c2 ? { op: "remove", path: d2 } : "remove" === l2 ? { op: c2, path: d2, value: f2(v2) } : { op: "replace", path: d2, value: f2(v2) });
            }
          });
        }(n2, r2, t2, e3);
      case 5:
      case 1:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.D, u2 = n3.o;
          if (u2.length < i2.length) {
            var a2 = [u2, i2];
            i2 = a2[0], u2 = a2[1];
            var s2 = [e4, t3];
            t3 = s2[0], e4 = s2[1];
          }
          for (var v2 = 0; v2 < i2.length; v2++)
            if (o2[v2] && u2[v2] !== i2[v2]) {
              var p2 = r3.concat([v2]);
              t3.push({ op: "replace", path: p2, value: f2(u2[v2]) }), e4.push({ op: "replace", path: p2, value: f2(i2[v2]) });
            }
          for (var l2 = i2.length; l2 < u2.length; l2++) {
            var d2 = r3.concat([l2]);
            t3.push({ op: c2, path: d2, value: f2(u2[l2]) });
          }
          i2.length < u2.length && e4.push({ op: "replace", path: r3.concat(["length"]), value: i2.length });
        }(n2, r2, t2, e3);
      case 3:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.o, u2 = 0;
          i2.forEach(function(n4) {
            if (!o2.has(n4)) {
              var i3 = r3.concat([u2]);
              t3.push({ op: "remove", path: i3, value: n4 }), e4.unshift({ op: c2, path: i3, value: n4 });
            }
            u2++;
          }), u2 = 0, o2.forEach(function(n4) {
            if (!i2.has(n4)) {
              var o3 = r3.concat([u2]);
              t3.push({ op: c2, path: o3, value: n4 }), e4.unshift({ op: "remove", path: o3, value: n4 });
            }
            u2++;
          });
        }(n2, r2, t2, e3);
    }
  }, M: function(n2, r2, t2, e3) {
    t2.push({ op: "replace", path: [], value: r2 === H$1 ? void 0 : r2 }), e3.push({ op: "replace", path: [], value: n2 });
  } });
}
function C$1() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }
    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2());
  }
  function e2(n2) {
    n2.o || (n2.D = /* @__PURE__ */ new Map(), n2.o = new Map(n2.t));
  }
  function o2(n2) {
    n2.o || (n2.o = /* @__PURE__ */ new Set(), n2.t.forEach(function(r3) {
      if (t(r3)) {
        var e3 = R$1(n2.A.h, r3, n2);
        n2.p.set(r3, e3), n2.o.add(e3);
      } else
        n2.o.add(r3);
    }));
  }
  function u2(r3) {
    r3.O && n(3, JSON.stringify(p$1(r3)));
  }
  var a2 = function(n2, r3) {
    return (a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r4) {
      n3.__proto__ = r4;
    } || function(n3, r4) {
      for (var t2 in r4)
        r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  }, f2 = function() {
    function n2(n3, r3) {
      return this[Q$1] = { i: 2, l: r3, A: r3 ? r3.A : _(), P: false, I: false, o: void 0, D: void 0, t: n3, k: this, C: false, O: false }, this;
    }
    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", { get: function() {
      return p$1(this[Q$1]).size;
    } }), o3.has = function(n3) {
      return p$1(this[Q$1]).has(n3);
    }, o3.set = function(n3, r3) {
      var t2 = this[Q$1];
      return u2(t2), p$1(t2).has(n3) && p$1(t2).get(n3) === r3 || (e2(t2), k(t2), t2.D.set(n3, true), t2.o.set(n3, r3), t2.D.set(n3, true)), this;
    }, o3.delete = function(n3) {
      if (!this.has(n3))
        return false;
      var r3 = this[Q$1];
      return u2(r3), e2(r3), k(r3), r3.t.has(n3) ? r3.D.set(n3, false) : r3.D.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function() {
      var n3 = this[Q$1];
      u2(n3), p$1(n3).size && (e2(n3), k(n3), n3.D = /* @__PURE__ */ new Map(), i(n3.t, function(r3) {
        n3.D.set(r3, false);
      }), n3.o.clear());
    }, o3.forEach = function(n3, r3) {
      var t2 = this;
      p$1(this[Q$1]).forEach(function(e3, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      });
    }, o3.get = function(n3) {
      var r3 = this[Q$1];
      u2(r3);
      var i2 = p$1(r3).get(n3);
      if (r3.I || !t(i2))
        return i2;
      if (i2 !== r3.t.get(n3))
        return i2;
      var o4 = R$1(r3.A.h, i2, r3);
      return e2(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function() {
      return p$1(this[Q$1]).keys();
    }, o3.values = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V$1] = function() {
        return r3.values();
      }, n3.next = function() {
        var n4 = t2.next();
        return n4.done ? n4 : { done: false, value: r3.get(n4.value) };
      }, n3;
    }, o3.entries = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V$1] = function() {
        return r3.entries();
      }, n3.next = function() {
        var n4 = t2.next();
        if (n4.done)
          return n4;
        var e3 = r3.get(n4.value);
        return { done: false, value: [n4.value, e3] };
      }, n3;
    }, o3[V$1] = function() {
      return this.entries();
    }, n2;
  }(), c2 = function() {
    function n2(n3, r3) {
      return this[Q$1] = { i: 3, l: r3, A: r3 ? r3.A : _(), P: false, I: false, o: void 0, t: n3, k: this, p: /* @__PURE__ */ new Map(), O: false, C: false }, this;
    }
    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", { get: function() {
      return p$1(this[Q$1]).size;
    } }), t2.has = function(n3) {
      var r3 = this[Q$1];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function(n3) {
      var r3 = this[Q$1];
      return u2(r3), this.has(n3) || (o2(r3), k(r3), r3.o.add(n3)), this;
    }, t2.delete = function(n3) {
      if (!this.has(n3))
        return false;
      var r3 = this[Q$1];
      return u2(r3), o2(r3), k(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function() {
      var n3 = this[Q$1];
      u2(n3), p$1(n3).size && (o2(n3), k(n3), n3.o.clear());
    }, t2.values = function() {
      var n3 = this[Q$1];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function() {
      var n3 = this[Q$1];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function() {
      return this.values();
    }, t2[V$1] = function() {
      return this.values();
    }, t2.forEach = function(n3, r3) {
      for (var t3 = this.values(), e3 = t3.next(); !e3.done; )
        n3.call(r3, e3.value, e3.value, this), e3 = t3.next();
    }, n2;
  }();
  m$1("MapSet", { N: function(n2, r3) {
    return new f2(n2, r3);
  }, T: function(n2, r3) {
    return new c2(n2, r3);
  } });
}
function J() {
  N$1(), C$1(), T$1();
}
function K$1(n2) {
  return n2;
}
function $(n2) {
  return n2;
}
var G$1, U$1, W$1 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X$1 = "undefined" != typeof Map, q = "undefined" != typeof Set, B$1 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H$1 = W$1 ? Symbol.for("immer-nothing") : ((G$1 = {})["immer-nothing"] = true, G$1), L$1 = W$1 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W$1 ? Symbol.for("immer-state") : "__$immer_state", V$1 = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Z$1 = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$1)
    return n2;
  var e2 = p$1(n2);
  if (!u(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$1(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z$1(n2.t, r2) ? (E$1(n2), n2.o[r2] = R$1(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$1(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$1(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$1(p$1(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$1(p$1(n2), r2), o2 = null == i2 ? void 0 : i2[Q$1];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E$1(n2), k(n2);
  }
  return n2.o[r2] === t2 && "number" != typeof t2 && (void 0 !== t2 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return void 0 !== z$1(n2.t, r2) || r2 in n2.t ? (n2.D[r2] = false, E$1(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$1(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B$1, this.F = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e3), s2 = R$1(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O$1(c2) : g(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P$1(n2, c2);
        }, function(n2) {
          throw O$1(c2), n2;
        }) : (j(c2, o2), P$1(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H$1 && (f2 = void 0), e3.F && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = D$1(e3));
    var i3 = w(this), o2 = R$1(this, e3, void 0);
    return o2[Q$1].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j(i3, t2), P$1(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B$1 && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
const immer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn,
  Immer: un,
  applyPatches: pn,
  castDraft: K$1,
  castImmutable: $,
  createDraft: ln,
  current: D$1,
  enableAllPlugins: J,
  enableES5: N$1,
  enableMapSet: C$1,
  enablePatches: T$1,
  finishDraft: dn,
  freeze: d,
  immerable: L$1,
  isDraft: r,
  isDraftable: t,
  nothing: H$1,
  original: e,
  produce: fn,
  produceWithPatches: cn,
  setAutoFreeze: sn,
  setUseProxies: vn
}, Symbol.toStringTag, { value: "Module" }));
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var slice$1 = Array.prototype.slice;
function co(gen, evt) {
  var ctx = this;
  return new Promise(function(resolve, reject) {
    onFulfilled();
    function onFulfilled(res) {
      evt.onResume(res);
      var ret;
      try {
        ret = gen.next(res);
      } catch (e2) {
        return reject(e2);
      }
      evt.onSuspend();
      next2(ret);
      return null;
    }
    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e2) {
        return reject(e2);
      }
      next2(ret);
    }
    function next2(ret) {
      if (ret.done)
        return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise$1(value))
        return value.then((res) => {
          onFulfilled(res);
        }, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}
function toPromise(obj) {
  if (!obj)
    return obj;
  if (isPromise$1(obj))
    return obj;
  if (isGeneratorFunction(obj) || isGenerator$1(obj))
    return co.call(this, obj);
  if ("function" == typeof obj)
    return thunkToPromise.call(this, obj);
  if (Array.isArray(obj))
    return arrayToPromise.call(this, obj);
  if (isObject(obj))
    return objectToPromise.call(this, obj);
  return obj;
}
function thunkToPromise(fn2) {
  var ctx = this;
  return new Promise(function(resolve, reject) {
    fn2.call(ctx, function(err, res) {
      if (err)
        return reject(err);
      if (arguments.length > 2)
        res = slice$1.call(arguments, 1);
      resolve(res);
    });
  });
}
function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}
function objectToPromise(obj) {
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i2 = 0; i2 < keys.length; i2++) {
    var key = keys[i2];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise$1(promise))
      defer(promise, key);
    else
      results[key] = obj[key];
  }
  return Promise.all(promises).then(function() {
    return results;
  });
  function defer(promise2, key2) {
    results[key2] = void 0;
    promises.push(promise2.then(function(res) {
      results[key2] = res;
    }));
  }
}
function isPromise$1(obj) {
  return "function" == typeof obj.then;
}
function isGenerator$1(obj) {
  return "function" == typeof obj.next && "function" == typeof obj.throw;
}
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor)
    return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName)
    return true;
  return isGenerator$1(constructor.prototype);
}
function isObject(val) {
  return Object == val.constructor;
}
const isArray$1 = Array.isArray;
const ownKeys = Reflect.ownKeys;
const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
function shallowCopy(base) {
  if (isArray$1(base))
    return Array.prototype.slice.call(base);
  const descriptors = getOwnPropertyDescriptors(base);
  let keys = ownKeys(descriptors);
  for (let i2 = 0; i2 < keys.length; i2++) {
    const key = keys[i2];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set)
      descriptors[key] = {
        configurable: true,
        writable: true,
        enumerable: desc.enumerable,
        value: base[key]
      };
  }
  return Object.create(Object.getPrototypeOf(base), descriptors);
}
const getKeys = Object.keys;
const isEqual = (x2, y2) => {
  if (x2 === y2)
    return true;
  if (typeof x2 === "object" && typeof y2 === "object" && x2 !== null && y2 !== null) {
    if (isArray$1(x2)) {
      if (isArray$1(y2)) {
        let xLength = x2.length;
        let yLength = y2.length;
        if (xLength !== yLength)
          return false;
        while (xLength--) {
          if (!isEqual(x2[xLength], y2[xLength]))
            return false;
        }
        return true;
      }
      return false;
    } else if (isArray$1(y2)) {
      return false;
    } else {
      let xKeys = getKeys(x2);
      let xLength = xKeys.length;
      let yKeys = getKeys(y2);
      let yLength = yKeys.length;
      if (xLength !== yLength)
        return false;
      while (xLength--) {
        const key = xKeys[xLength];
        const xValue = x2[key];
        const yValue = y2[key];
        if (!isEqual(xValue, yValue))
          return false;
        if (yValue === void 0 && !Reflect.has(y2, key))
          return false;
      }
    }
    return true;
  }
  return x2 !== x2 && y2 !== y2;
};
function last$1(arr) {
  return arr[arr.length - 1];
}
function cloneDeep(obj) {
  return obj && JSON.parse(JSON.stringify(obj));
}
function isPrimtive(v2) {
  if (v2 === null) {
    return true;
  }
  const type = typeof v2;
  return [
    "undefined",
    "number",
    "symbol",
    "string",
    "bigint",
    "boolean"
  ].includes(type);
}
function get$1(obj, path) {
  let base = obj;
  const pathArr = isArray$1(path) ? path.slice(0) : path.split ? path.split(".") : [path];
  if (pathArr.length === 0) {
    return obj;
  }
  const currentPathArr = pathArr.slice(0, -1);
  const key = last$1(pathArr);
  for (const p2 of currentPathArr) {
    if (base[p2] === void 0)
      return void 0;
    base = base[p2];
  }
  if (base instanceof Map) {
    return base.get(key);
  }
  return base[key];
}
function likeObject(target) {
  return target && typeof target === "object";
}
function isDef(v2) {
  return typeof v2 !== "undefined";
}
function isFunc(f2) {
  return typeof f2 === "function";
}
function isPromise(p2) {
  return p2 && (p2 instanceof Promise || !!p2.then);
}
function isGenerator(g2) {
  return g2 && "function" == typeof g2.next && "function" == typeof g2.throw;
}
function nextTick(fn2) {
  let st = setTimeout(fn2, 0);
  return () => clearTimeout(st);
}
const isDataPatch = (p2) => Reflect.has(p2, "path");
function calculateChangedPath(source, ps) {
  if (isArray$1(source)) {
    return [[""]];
  }
  const result = [];
  ps.forEach((p2) => {
    const i2 = p2.path.findIndex((v2, i3) => {
      return typeof v2 === "number" && isArray$1(get$1(source, p2.path.slice(0, i3 + 1)));
    });
    if (i2 > -1) {
      result.push(p2.path.slice(0, i2));
    } else {
      result.push(p2.path.slice());
    }
  });
  return result;
}
function log(pre, ...rest) {
}
function getDeps(f2) {
  return f2.__deps__;
}
function getName(f2) {
  return f2.__name__ || f2.name;
}
function getNames(f2) {
  return f2.__names__;
}
function runGenerator(gen, onResume, onSuspend) {
  return co(gen, {
    onResume,
    onSuspend
  });
}
function makeBatchCallback(fn2) {
  let cancelNotify = () => {
  };
  return (...args) => {
    cancelNotify();
    cancelNotify = nextTick(() => {
      fn2(...args);
    });
  };
}
function shortValue(v2) {
  if (v2 === void 0) {
    return "@undef";
  }
  if (typeof v2 === "symbol") {
    return "@init";
  }
}
const plugins = {};
const defaultCachePlugin = {
  getValue(scope, k2, from2) {
    return __awaiter(this, void 0, void 0, function* () {
      return getPlugin(from2).get(scope, k2);
    });
  },
  setValue(scope, k2, v2, from2) {
    return getPlugin(from2).set(scope, k2, v2);
  },
  clearValue(scope, k2, from2) {
    getPlugin(from2).clear(scope, k2);
  }
};
loadPlugin("Cache", defaultCachePlugin);
function getPlugin(k2) {
  const plugin = plugins[k2];
  if (!plugin) {
    throw new Error(`[getPlugin] name=${k2} is not found`);
  }
  return plugin;
}
function loadPlugin(k2, p2) {
  plugins[k2] = p2;
}
const { produceWithPatches, enablePatches, applyPatches } = immer;
enablePatches();
function unFreeze(target) {
  if (target._hook) {
    target._hook.freezed = false;
  }
}
function checkFreeze(target) {
  var _a;
  return ((_a = target._hook) === null || _a === void 0 ? void 0 : _a.freezed) === true;
}
class Watcher {
  constructor(target) {
    this.target = target;
    this.deps = /* @__PURE__ */ new Map();
  }
  notify(dep, path, patches, reactiveChain) {
    const paths = this.deps.get(dep);
    const matched = paths === null || paths === void 0 ? void 0 : paths.some((p2) => isEqual(p2, path));
    if (matched) {
      this.target.notify(dep, patches, reactiveChain);
      return true;
    }
  }
  addDep(dep, path = []) {
    dep.addWatcher(this);
    if (path.length === 0) {
      path = [""];
    }
    let paths = this.deps.get(dep);
    if (paths) {
      const exist = paths.find((p2) => p2 === path || isEqual(p2, path));
      if (!exist) {
        paths.push(path);
      }
    } else {
      paths = [path];
      this.deps.set(dep, [path]);
    }
    return () => {
      const paths2 = this.deps.get(dep);
      const existIndex = paths2 === null || paths2 === void 0 ? void 0 : paths2.findIndex((p2) => isEqual(p2, path));
      if (paths2 && existIndex && existIndex > -1) {
        paths2 === null || paths2 === void 0 ? void 0 : paths2.splice(existIndex, 1);
      }
    };
  }
}
class Hook extends EventEmitter {
  constructor() {
    super(...arguments);
    this.watchers = /* @__PURE__ */ new Set();
  }
  addWatcher(w2) {
    this.watchers.add(w2);
  }
}
function isSignal(h2) {
  return (h2 === null || h2 === void 0 ? void 0 : h2._hook) && (h2._hook instanceof Computed || h2._hook instanceof State);
}
var EHookEvents;
(function(EHookEvents2) {
  EHookEvents2["change"] = "change";
  EHookEvents2["beforeCalling"] = "beforeCalling";
  EHookEvents2["afterCalling"] = "afterCalling";
})(EHookEvents || (EHookEvents = {}));
function getValueSilently(s2) {
  return s2._internalValue;
}
function internalProxy(source, _internalValue, path = []) {
  if (underComputed()) {
    last$1(currentComputedStack).watcher.addDep(source, path);
    if (_internalValue && likeObject(_internalValue)) {
      const copyValue = shallowCopy(_internalValue);
      return new Proxy(copyValue, {
        get(target, p2) {
          let value = Reflect.get(target, p2);
          if (typeof value === "function") {
            value = value.bind(target);
          }
          return internalProxy(source, value, path.concat(p2));
        }
      });
    }
  }
  return _internalValue;
}
class State extends Hook {
  constructor(data) {
    super();
    this.modifiedTimstamp = Date.now();
    this.inputComputePatchesMap = /* @__PURE__ */ new Map();
    this.contextName = "state";
    this.needContextValue = true;
    this.needCheckAndRefresh = false;
    this.applyComputeAsync = false;
    this._internalValue = data;
  }
  trigger(path = [""], patches, reactiveChain, triggeredSet) {
    if (!path || path.length === 0) {
      path = [""];
    }
    if (!triggeredSet) {
      triggeredSet = /* @__PURE__ */ new Set();
    }
    this.watchers.forEach((w2) => {
      if (triggeredSet === null || triggeredSet === void 0 ? void 0 : triggeredSet.has(w2)) {
        return;
      }
      if (w2.notify(this, path, patches, reactiveChain)) {
        triggeredSet === null || triggeredSet === void 0 ? void 0 : triggeredSet.add(w2);
      }
    });
    return triggeredSet;
  }
  get value() {
    if (currentInputeCompute) {
      return this.getInputComputeDraftValue();
    }
    return internalProxy(this, this._internalValue);
  }
  update(v2, patches, silent, reactiveChain) {
    const oldValue = this._internalValue;
    this._internalValue = v2;
    const shouldTrigger = oldValue !== v2 && !isEqual(oldValue, v2);
    if (shouldTrigger) {
      this.modifiedTimstamp = Date.now();
      this.emit(EHookEvents.change, this);
    }
    reactiveChain === null || reactiveChain === void 0 ? void 0 : reactiveChain.update();
    if (silent) {
      return;
    }
    if (shouldTrigger) {
      const triggeredSet = this.trigger(void 0, void 0, reactiveChain);
      if (patches && patches.length > 0) {
        const changedPathArr = calculateChangedPath(oldValue, patches);
        changedPathArr.filter((p2) => p2.length !== 0).forEach((path) => this.trigger(path, patches, reactiveChain, triggeredSet));
      }
    }
  }
  applyComputePatches(ic2, reactiveChain) {
    var _a;
    let exist = this.inputComputePatchesMap.get(ic2);
    if (exist) {
      this.inputComputePatchesMap.delete(ic2);
      this.update(exist[0], (_a = exist[1]) === null || _a === void 0 ? void 0 : _a.filter(isDataPatch), false, reactiveChain);
    }
  }
  getInputComputeDraftValue() {
    let exist = this.inputComputePatchesMap.get(currentInputeCompute);
    if (exist) {
      return exist[0];
    } else {
      if (isPrimtive(this._internalValue)) {
        return this._internalValue;
      }
      return shallowCopy(this._internalValue);
    }
  }
  addComputePatches(value, patches) {
    if (currentInputeCompute) {
      let exist = this.inputComputePatchesMap.get(currentInputeCompute);
      if (!exist) {
        exist = [value, []];
      }
      exist[0] = value;
      exist[1] = exist[1].concat(patches);
      this.inputComputePatchesMap.set(currentInputeCompute, exist);
    } else {
      throw new Error("[Model.addComputePatches] must invoked under a InputCompute");
    }
  }
  checkAndRefresh() {
  }
}
class StateEvent {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
    this.listeners = [];
  }
  subscribe(f2) {
    this.listeners.push(f2);
    return () => {
      const i2 = this.listeners.indexOf(f2);
      this.listeners.splice(i2, 1);
    };
  }
  from(arr) {
    this.data.clear();
    arr.forEach(([stateKey, record]) => {
      this.data.set(stateKey, record);
    });
    this.listeners.forEach((f2) => f2());
  }
  toArray() {
    const arr = [];
    this.data.forEach((v2, k2) => {
      arr.push([k2, v2]);
    });
    return arr;
  }
  getRecord(stateKey) {
    return this.data.get(stateKey);
  }
  pushPatch(stateKey, p2) {
    let record = this.data.get(stateKey);
    if (!record) {
      record = [];
      this.data.set(stateKey, record);
    }
    record.push({
      timing: Date.now(),
      patch: p2
    });
  }
}
class AsyncState extends State {
  constructor() {
    super(...arguments);
    this.init = true;
    this.getterPromise = null;
    this.asyncCount = 0;
  }
  startAsyncGetter() {
    this.asyncCount++;
    const currentCount = this.asyncCount;
    this.init = false;
    let resolve;
    this.getterPromise = new Promise((r2) => resolve = r2);
    return {
      end: () => {
        resolve();
        this.getterPromise = null;
      },
      valid: () => {
        return this.asyncCount <= currentCount;
      }
    };
  }
  get pending() {
    return !!this.getterPromise;
  }
}
let currentComputedStack = [];
function underComputed() {
  return currentComputedStack.length > 0;
}
function pushComputed(c2) {
  currentComputedStack.push(c2);
}
function popComputed() {
  currentComputedStack.pop();
}
const ComputedInitialSymbol = Symbol("@@ComputedInitialSymbol");
class Computed extends AsyncState {
  constructor(getter) {
    super(ComputedInitialSymbol);
    this.getter = getter;
    this.batchRunCancel = () => {
    };
    this.watcher = new Watcher(this);
  }
  get value() {
    const callChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.addCall(this);
    if (this._internalValue === ComputedInitialSymbol) {
      this.tryModify(callChain);
    }
    const v2 = super.value;
    return v2 === ComputedInitialSymbol ? void 0 : v2;
  }
  run(innerReactiveChain) {
    pushComputed(this);
    const r2 = ReactiveChain.withChain(innerReactiveChain, () => {
      return this.getter(this._internalValue);
    });
    popComputed();
    if (isPromise(r2)) {
      const { end, valid } = this.startAsyncGetter();
      r2.then((asyncResult) => {
        if (valid()) {
          this.update(asyncResult, [], false, innerReactiveChain);
          end();
        }
      });
    } else if (isGenerator(r2)) {
      const { end, valid } = this.startAsyncGetter();
      runGenerator(r2, () => pushComputed(this), () => popComputed()).then((asyncResult) => {
        if (valid()) {
          this.update(asyncResult, [], false, innerReactiveChain);
          end();
        }
      });
    } else {
      this.update(r2, [], false, innerReactiveChain);
      this.init = false;
    }
  }
  tryModify(reactiveChain) {
    this.run(reactiveChain === null || reactiveChain === void 0 ? void 0 : reactiveChain.add(this));
  }
  notify(h2, p2, reactiveChain) {
    this.run(reactiveChain === null || reactiveChain === void 0 ? void 0 : reactiveChain.addNotify(this));
  }
  addDep(source, path) {
    this.watcher.addDep(source, path);
  }
}
Computed.underComputed = underComputed;
let currentInputeCompute = null;
const inputComputeStack = [];
function pushInputComputeStack(ic2) {
  inputComputeStack.push(ic2);
  currentInputeCompute = ic2;
}
function popInputComputeStack() {
  currentInputeCompute = inputComputeStack[inputComputeStack.length - 2];
  return inputComputeStack.pop();
}
class InputCompute extends Hook {
  constructor(getter, scope) {
    super();
    this.getter = getter;
    this.scope = scope;
    this.commitPromise = null;
  }
  inputFuncStart() {
  }
  commitComputePatches(reactiveChain) {
    if (this.commitPromise) {
      this.commitPromise = this.commitPromise.then(() => {
        const r3 = this.scope.applyAllComputePatches(this, reactiveChain);
        if (r3 === null || r3 === void 0 ? void 0 : r3.some((p2) => isPromise(p2))) {
          return Promise.all(r3).then();
        }
      });
      return [this.commitPromise];
    }
    const r2 = this.scope.applyAllComputePatches(this, reactiveChain);
    if (r2 === null || r2 === void 0 ? void 0 : r2.some((p2) => isPromise(p2))) {
      this.commitPromise = Promise.all(r2).then();
    }
    return r2;
  }
  inputFuncEnd(reactiveChain) {
    const r2 = this.commitComputePatches(reactiveChain);
    unFreeze({ _hook: this });
    this.emit(EHookEvents.afterCalling, this);
    if (r2 === null || r2 === void 0 ? void 0 : r2.some((p2) => isPromise(p2))) {
      return Promise.all(r2).then((r3) => {
        this.commitPromise = null;
      });
    }
    return Promise.resolve();
  }
  run(...args) {
    return __awaiter(this, void 0, void 0, function* () {
      this.emit(EHookEvents.beforeCalling, this);
      const isFreeze = checkFreeze({ _hook: this });
      if (isFreeze) {
        return;
      }
      if (currentInputeCompute) {
        const r2 = currentInputeCompute.commitComputePatches(currentReactiveChain);
        if (r2 === null || r2 === void 0 ? void 0 : r2.some((p2) => isPromise(p2))) {
          yield Promise.all(r2);
        }
      }
      pushInputComputeStack(this);
      const newReactiveChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.addCall(this);
      const funcResult = ReactiveChain.withChain(newReactiveChain, () => {
        return this.getter(...args);
      });
      popInputComputeStack();
      log("[InputCompute.run]", `isGen=${isGenerator(funcResult)}`, `isP=${isPromise(funcResult)}`);
      if (isGenerator(funcResult)) {
        let generatorPreservedCurrentReactiveChain;
        yield runGenerator(
          funcResult,
          () => {
            pushInputComputeStack(this);
            generatorPreservedCurrentReactiveChain = currentReactiveChain;
            currentReactiveChain = newReactiveChain;
          },
          () => {
            popInputComputeStack();
            currentReactiveChain = generatorPreservedCurrentReactiveChain;
          }
        );
        return this.inputFuncEnd(newReactiveChain);
      } else if (isPromise(funcResult)) {
        yield funcResult;
        return this.inputFuncEnd(newReactiveChain);
      }
      if (currentInputeCompute === this) {
        currentInputeCompute = null;
      }
      return this.inputFuncEnd(newReactiveChain);
    });
  }
}
class AsyncInputCompute extends InputCompute {
  constructor() {
    super(...arguments);
    this.init = true;
    this.getterPromise = null;
    this.asyncCount = 0;
  }
  startAsyncGetter() {
    this.asyncCount++;
    let currentCount = this.asyncCount;
    this.init = false;
    let resolve;
    this.getterPromise = new Promise((r2) => resolve = r2);
    return {
      end: () => {
        resolve();
        this.getterPromise = null;
      },
      valid: () => {
        return this.asyncCount <= currentCount;
      }
    };
  }
  get pending() {
    return !!this.getterPromise;
  }
}
class RunnerContext {
  constructor(driverName, args, initialContext) {
    this.driverName = driverName;
    this.args = args;
    this.initialData = null;
    this.initialArgList = initialContext ? initialContext.initialArgList : args;
    this.withInitialContext = !!initialContext;
    if (initialContext) {
      this.initialData = initialContext["data"];
      this.triggerHookIndex = initialContext.index;
      this.triggerHookName = initialContext.indexName;
      if (initialContext.args) {
        this.args = initialContext.args;
      }
      if (initialContext.patch) {
        this.patch = initialContext.patch;
      }
    }
  }
  bindScope(scope) {
    this.scope = scope;
  }
  serialize(type) {
  }
  formatContextData(hooks, enable) {
    const hooksData = hooks.map((hook, i2) => {
      if (hook && (!enable || enable(i2))) {
        if (hook instanceof Computed) {
          return ["computed", getValueSilently(hook), hook.modifiedTimstamp];
        }
        if (hook instanceof InputCompute) {
          return ["inputCompute"];
        }
        if (hook instanceof State) {
          if (hook.needContextValue) {
            return [
              hook.contextName,
              getValueSilently(hook),
              hook.modifiedTimstamp
            ];
          }
          return [hook.contextName];
        }
      }
      return ["unserialized"];
    });
    return hooksData;
  }
  serializeAction(hooks, hookIndex, args, deps) {
    const h2 = hooks[hookIndex];
    const hookName = (h2 === null || h2 === void 0 ? void 0 : h2.name) || "";
    const noDeps = deps.size === 0;
    const hooksData = this.formatContextData(hooks, (i2) => noDeps || deps.has(i2));
    return {
      initialArgList: this.initialArgList,
      name: this.driverName,
      data: hooksData,
      index: hookIndex === -1 ? void 0 : hookIndex,
      indexName: hookName,
      args: args || []
    };
  }
  serializePatch(hooks, statePatchEvents) {
    const hooksData = this.formatContextData(hooks);
    const p2 = statePatchEvents.toArray();
    return {
      initialArgList: this.initialArgList,
      name: this.driverName,
      data: hooksData,
      patch: p2
    };
  }
  serializeBase(hooks) {
    const hooksData = this.formatContextData(hooks);
    return {
      initialArgList: this.initialArgList,
      name: this.driverName,
      data: hooksData,
      patch: []
    };
  }
  apply(hooks, c2, needUpdateCallback) {
    const contextData = c2.data;
    contextData.forEach(([type, value, timestamp], index2) => {
      if (isDef(value)) {
        const state2 = hooks[index2];
        switch (type) {
          case "unserialized":
            break;
          default:
            needUpdateCallback(state2, value, timestamp);
            break;
        }
      }
    });
    this.patch = c2.patch;
  }
}
class Runner {
  constructor(driver, options) {
    this.driver = driver;
    this.options = {
      beleiveContext: false,
      updateCallbackSync: false,
      applyComputeParalle: false
    };
    Object.assign(this.options, options);
  }
  prepareScope(args, initialContext) {
    const context = new RunnerContext(getName(this.driver), args, initialContext);
    const modelPatchEvents = new StateEvent();
    const deps = getDeps(this.driver);
    const names = getNames(this.driver);
    const scope = new CurrentRunnerScope(context, deps, names, modelPatchEvents);
    scope.setOptions(this.options);
    return scope;
  }
  executeDriver(scope) {
    const { withInitialContext } = scope.runnerContext;
    if (withInitialContext) {
      currentHookFactory = updateHookFactory;
    }
    currentRunnerScope = scope;
    const result = executeDriver(this.driver, scope.runnerContext.args);
    currentRunnerScope = null;
    scope.applyDepsMap();
    scope.flushEffects();
    currentHookFactory = mountHookFactory;
    return result;
  }
  init(args, initialContext) {
    const scope = this.prepareScope(args, initialContext);
    this.scope = scope;
    const result = this.executeDriver(scope);
    return result;
  }
  mount(args, initialContext) {
    return this.init(args, initialContext);
  }
  update(initialContext) {
    return this.init(void 0, initialContext);
  }
  callHook(hookIndex, args) {
    var _a;
    return (_a = this.scope) === null || _a === void 0 ? void 0 : _a.callHook(hookIndex, args);
  }
  state() {
    return this.scope.getState();
  }
  ready() {
    var _a;
    return (_a = this.scope) === null || _a === void 0 ? void 0 : _a.ready();
  }
  dispose() {
    var _a;
    return (_a = this.scope) === null || _a === void 0 ? void 0 : _a.dispose();
  }
}
function executeDriver(f2, args = []) {
  const driverResult = f2(...args);
  return driverResult;
}
const CacheInitialSymbol = Symbol("@@CacheInitialSymbol");
class Cache extends AsyncState {
  constructor(key, options, scope) {
    super(CacheInitialSymbol);
    this.options = options;
    this.scope = scope;
    this.watcher = new Watcher(this);
    this.getterPromise = null;
    this.contextName = "cache";
    this.getterKey = key;
    if (this.options.source) {
      this.source = this.options.source._hook;
      this.watcher.addDep(this.source);
      const { _internalValue } = this.source;
      const initVal = isPrimtive(_internalValue) ? _internalValue : shallowCopy(_internalValue);
      super.update(initVal);
    }
  }
  notify(hook, p2, reactiveChain) {
    const { from: from2 } = this.options;
    const { source } = this;
    if (hook && source && hook === source) {
      this._internalValue = CacheInitialSymbol;
      getPlugin("Cache").clearValue(this.scope, this.getterKey, from2);
      const newReactiveChain = reactiveChain === null || reactiveChain === void 0 ? void 0 : reactiveChain.addNotify(this);
      this.executeQuery(newReactiveChain);
    }
  }
  get value() {
    if (this._internalValue === CacheInitialSymbol) {
      this.executeQuery(currentReactiveChain);
    }
    const v2 = super.value;
    return v2 === CacheInitialSymbol ? void 0 : v2;
  }
  executeQuery(reactiveChain) {
    const _super = Object.create(null, {
      update: { get: () => super.update }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const { from: from2 } = this.options;
      const { source } = this;
      const { end, valid } = this.startAsyncGetter();
      try {
        const valueInCache = yield getPlugin("Cache").getValue(this.scope, this.getterKey, from2);
        if (!valid()) {
          return;
        }
        log(`[${this.name || ""} Cache.executeQuery] valueInCache=`, valueInCache);
        if (valueInCache !== void 0) {
          _super.update.call(this, valueInCache, [], false, reactiveChain);
        } else if (source) {
          const valueInSource = source.value;
          _super.update.call(this, valueInSource, [], false, reactiveChain);
          getPlugin("Cache").setValue(this.scope, this.getterKey, valueInSource, from2);
        }
      } catch (e2) {
        console.error(e2);
      } finally {
        log(`[${this.name || ""} Cache.executeQuery]`);
        if (valid()) {
          end();
        }
      }
    });
  }
  update(v2, patches, silent, reactiveChain) {
    const _super = Object.create(null, {
      update: { get: () => super.update }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const { from: from2 } = this.options;
      const { source } = this;
      if (source) {
        throw new Error('[Cache] can not update value directly while the cache has "source" in options ');
      } else {
        _super.update.call(this, v2, patches === null || patches === void 0 ? void 0 : patches.filter(isDataPatch), silent, reactiveChain);
        yield getPlugin("Cache").setValue(this.scope, this.getterKey, v2, from2);
        log(`[${this.name} cache.update] end k=${this.getterKey} v=${v2}`);
      }
    });
  }
  addDep(source, path) {
    this.watcher.addDep(source, path);
  }
}
var EScopeState;
(function(EScopeState2) {
  EScopeState2["init"] = "init";
  EScopeState2["idle"] = "idle";
  EScopeState2["pending"] = "pending";
})(EScopeState || (EScopeState = {}));
class CurrentRunnerScope extends EventEmitter {
  constructor(runnerContext, intialContextDeps, intialContextNames, statePatchEvents) {
    super();
    this.runnerContext = runnerContext;
    this.intialContextDeps = intialContextDeps;
    this.intialContextNames = intialContextNames;
    this.statePatchEvents = statePatchEvents;
    this.hooks = [];
    this.composes = [];
    this.stateChangeCallbackRunning = false;
    this.stateChangeCallbackCancel = () => {
    };
    this.stateChangeWaitHooks = /* @__PURE__ */ new Set();
    this.watcher = new Watcher(this);
    this.reactiveChainStack = [];
    this.beleiveContext = false;
    this.updateCallbackSync = false;
    this.applyComputeParalle = false;
    this.effectFuncArr = [];
    this.disposeFuncArr = [];
    runnerContext.bindScope(this);
    this.initializeHookSet();
  }
  initializeHookSet() {
    const { runnerContext } = this;
    if (runnerContext.triggerHookIndex !== void 0 && typeof runnerContext.triggerHookIndex === "number" && runnerContext.initialData.length > 0) {
      const s2 = /* @__PURE__ */ new Set([runnerContext.triggerHookIndex]);
      runnerContext.initialData.forEach((d2, i2) => {
        if (d2[0] !== "unserialized") {
          s2.add(i2);
        }
      });
      this.initialHooksSet = s2;
    }
  }
  triggerEnterComposeDriver(driverNamespace, dirverName) {
    this.emit(CurrentRunnerScope.events.enterComposeDriver, {
      driverNamespace,
      dirverName
    });
    return () => {
      this.emit(CurrentRunnerScope.events.leaveComposeDriver, {
        driverNamespace,
        dirverName
      });
    };
  }
  setOptions(op) {
    Object.assign(this, op);
  }
  effect(f2) {
    this.once(CurrentRunnerScope.events.effect, (rc2) => {
      f2(rc2);
    });
  }
  flushEffects() {
    const reactiveChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(this);
    this.emit(CurrentRunnerScope.events.effect, reactiveChain);
  }
  appendDispose(f2) {
    this.disposeFuncArr.push(f2);
  }
  dispose() {
    this.disposeFuncArr.forEach((f2) => f2());
  }
  callHook(hookIndex, args) {
    return __awaiter(this, void 0, void 0, function* () {
      const hook = this.hooks[hookIndex];
      if (hook) {
        if (hook instanceof Computed) {
          currentReactiveChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(this);
          hook.run(currentReactiveChain);
        } else if (hook instanceof InputCompute) {
          currentReactiveChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(this);
          yield hook.run(...args);
        }
      }
    });
  }
  activate() {
    this.notifyAllState();
  }
  deactivate() {
  }
  notifyAllState() {
    this.hooks.forEach((h2) => {
      if (h2 instanceof State && h2.needCheckAndRefresh) {
        h2.checkAndRefresh();
      }
    });
  }
  onUpdate(fn2) {
    this.on(CurrentRunnerScope.events.update, fn2);
    return () => {
      this.off(CurrentRunnerScope.events.update, fn2);
    };
  }
  notifyOuter() {
    this.emit(CurrentRunnerScope.events.update);
  }
  notify(s2) {
    if (this.updateCallbackSync) {
      this.notifyOuter();
    } else {
      this.stateChangeCallbackCancel();
      this.stateChangeCallbackCancel = nextTick(() => {
        this.notifyOuter();
      });
    }
  }
  addDep(source, path) {
    this.watcher.addDep(source, path);
  }
  addHook(v2) {
    if (v2 && this.hooks.indexOf(v2) !== -1) {
      throw new Error("[scope.addHook] cant add repeat hook");
    }
    this.hooks.push(v2);
    if (v2) {
      this.watcher.addDep(v2);
      if (this.intialContextNames) {
        const r2 = this.intialContextNames.find((arr) => arr[0] === this.hooks.length - 1);
        if (r2 === null || r2 === void 0 ? void 0 : r2[1]) {
          v2.name = r2[1];
        }
      }
    }
  }
  applyDepsMap() {
    const deps = this.intialContextDeps;
    deps === null || deps === void 0 ? void 0 : deps.forEach(([name2, hookIndex, getDeps2]) => {
      getDeps2.forEach((triggerHookIndex) => {
        var _a;
        let triggerHook;
        if (Array.isArray(triggerHookIndex)) {
          const [type, composeIndex, variableName] = triggerHookIndex;
          if (type === "c") {
            const setterGetterFunc = (_a = this.composes[composeIndex]) === null || _a === void 0 ? void 0 : _a[variableName];
            triggerHook = this.hooks.find((h2) => h2 === (setterGetterFunc === null || setterGetterFunc === void 0 ? void 0 : setterGetterFunc._hook));
          }
        } else {
          triggerHook = this.hooks[triggerHookIndex];
        }
        if (triggerHook) {
          if ("addDep" in this.hooks[hookIndex]) {
            this.hooks[hookIndex].addDep(triggerHook);
          }
        }
      });
    });
  }
  appendComposeNames(si2, names) {
    if (!names) {
      return;
    }
    const len = names.length;
    const modifiedNames = (this.intialContextNames || []).map((a2) => {
      const arr = cloneDeep(a2);
      if (arr[0] >= si2) {
        arr[0] += len;
      }
      return arr;
    });
    const newOffsetNames = names.map((a2) => {
      return [a2[0] + si2, a2[1]];
    });
    this.intialContextNames = modifiedNames.concat(newOffsetNames);
  }
  offsetComposeIndex(originalIndex, newLength, icrement) {
    const offset = newLength - originalIndex;
    const endIndex = (this.intialContextDeps || []).length - icrement;
    if (offset > 0) {
      const originalDepsBeforeCompose = (this.intialContextDeps || []).slice(0, endIndex);
      const icrementDepsAfterCompose = (this.intialContextDeps || []).slice(endIndex);
      const modifiedOriginalDeps = originalDepsBeforeCompose.map((a2) => {
        const arr = cloneDeep(a2);
        if (arr[2]) {
          arr[2] = arr[2].map((b2) => {
            if (Array.isArray(b2)) {
              if (b2[0] === "c" && b2[1] === originalIndex) {
                b2[1] += offset;
              }
            }
            return b2;
          });
        }
        if (arr[3]) {
          arr[3] = arr[3].map((b2) => {
            if (b2[0] === "c" && b2[1] === originalIndex) {
              b2[1] += offset;
            }
            return b2;
          });
        }
        return arr;
      });
      this.intialContextDeps = modifiedOriginalDeps.concat(icrementDepsAfterCompose);
    }
  }
  appendComposeDeps(si2, ei2, currentComposeLengh, deps) {
    if (!deps) {
      return;
    }
    const hooksInComposeSize = ei2 - si2;
    const modifiedDeps = (this.intialContextDeps || []).map((a2) => {
      const arr = cloneDeep(a2);
      if (arr[1] >= si2) {
        arr[1] += hooksInComposeSize;
      }
      if (arr[2]) {
        arr[2] = arr[2].map((v2) => {
          if (v2 >= si2) {
            return typeof v2 === "number" ? v2 + hooksInComposeSize : v2;
          }
          return v2;
        });
      }
      if (arr[3]) {
        arr[3] = arr[3].map((v2) => {
          if (v2 >= si2) {
            return typeof v2 === "number" ? v2 + hooksInComposeSize : v2;
          }
          return v2;
        });
      }
      return arr;
    });
    const newModifiedDeps = deps.map((a2) => {
      const arr = cloneDeep(a2);
      arr[1] += si2;
      if (arr[2]) {
        arr[2] = arr[2].map((v2) => typeof v2 === "number" ? v2 + si2 : [v2[0], v2[1] + currentComposeLengh, v2[2]]);
      }
      if (arr[3]) {
        arr[3] = arr[3].map((v2) => typeof v2 === "number" ? v2 + si2 : [v2[0], v2[1] + currentComposeLengh, v2[2]]);
      }
      return arr;
    });
    this.intialContextDeps = modifiedDeps.concat(newModifiedDeps);
  }
  applyAllComputePatches(currentInputCompute, reactiveChain) {
    const { applyComputeParalle, hooks } = this;
    const hookModified = hooks.filter((h2) => {
      if (h2 && h2.inputComputePatchesMap) {
        return h2.inputComputePatchesMap.get(currentInputCompute);
      }
    });
    if (hookModified.length) {
      let prevPromise = null;
      return hookModified.map((h2) => {
        const newChildChain = reactiveChain === null || reactiveChain === void 0 ? void 0 : reactiveChain.addUpdate(h2);
        if (applyComputeParalle || !h2.applyComputeAsync) {
          return h2.applyComputePatches(currentInputCompute, newChildChain);
        }
        prevPromise = prevPromise ? prevPromise.then(() => h2.applyComputePatches(currentInputCompute, newChildChain)) : Promise.resolve(h2.applyComputePatches(currentInputCompute, newChildChain));
        return prevPromise;
      });
    }
    return [];
  }
  applyContextFromServer(c2) {
    const { hooks } = this;
    this.runnerContext.apply(
      hooks,
      c2,
      (state2, value, timestamp) => {
        var _a;
        (_a = state2.update) === null || _a === void 0 ? void 0 : _a.call(state2, value, [], true);
        if (value && timestamp) {
          state2.modifiedTimstamp = timestamp;
        }
      }
    );
    if (c2.patch) {
      this.statePatchEvents.from(c2.patch);
    }
    this.notify();
  }
  getState() {
    const asyncHooks = this.hooks.filter((h2) => h2 && Reflect.has(h2, "getterPromise"));
    let notReadyHooks = asyncHooks.filter((h2) => {
      return !!h2.getterPromise;
    });
    return notReadyHooks.length === 0 ? EScopeState.idle : EScopeState.pending;
  }
  ready(specifies) {
    const asyncHooks = this.hooks.filter((h2, i3) => (specifies ? specifies.has(i3) : true) && (h2 && Reflect.has(h2, "getterPromise") || h2 instanceof AsyncInputCompute || h2 instanceof AsyncState));
    let readyResolve;
    let readyPromise = new Promise((resolve) => readyResolve = resolve);
    let max = asyncHooks.length * 2;
    let i2 = 0;
    function wait() {
      return __awaiter(this, void 0, void 0, function* () {
        if (i2++ > max) {
          throw new Error("[Scope.ready] unexpect loop for ready");
        }
        let notReadyHooks = asyncHooks.filter((h2) => {
          return !!h2.getterPromise;
        }).map((h2) => h2.getterPromise);
        if (notReadyHooks.length === 0) {
          readyResolve();
        } else {
          yield Promise.all(notReadyHooks);
          wait();
        }
      });
    }
    wait();
    return readyPromise;
  }
}
CurrentRunnerScope.events = {
  enterComposeDriver: "enterComposeDriver",
  leaveComposeDriver: "leaveComposeDriver",
  update: "update",
  effect: "effect"
};
CurrentRunnerScope.getCurrent = () => currentRunnerScope;
let currentRunnerScope = null;
let currentReactiveChain = void 0;
function stopReactiveChain() {
  currentReactiveChain = void 0;
}
class ReactiveChain {
  constructor(parent, hook) {
    this.parent = parent;
    this.hook = hook;
    this.isRoot = false;
    this.allLeafCount = 0;
    this.order = 0;
    this.hasNewValue = false;
    this.children = [];
    this.order = (parent === null || parent === void 0 ? void 0 : parent.plusLeaf()) || 0;
    if (hook instanceof State) {
      this.oldValue = hook._internalValue;
    }
  }
  static withChain(chain, fn2) {
    const oldCurrentReactiveChain = currentReactiveChain;
    currentReactiveChain = chain;
    const r2 = fn2();
    currentReactiveChain = oldCurrentReactiveChain;
    return r2;
  }
  plusLeaf() {
    if (this.isRoot) {
      this.allLeafCount += 1;
      return this.allLeafCount;
    }
    return this.parent.plusLeaf();
  }
  stop() {
    stopReactiveChain();
  }
  update() {
    if (this.hook instanceof State) {
      this.hasNewValue = true;
      this.newValue = this.hook._internalValue;
    }
  }
  add(trigger, key) {
    const childChain = new ReactiveChain(this, trigger);
    childChain.hookKey = key;
    this.children.push(childChain);
    if (currentRunnerScope) {
      if (trigger instanceof Hook) {
        const index2 = currentRunnerScope.hooks.indexOf(trigger);
        if (index2 > -1) {
          childChain.hookIndex = index2;
        }
      }
    }
    return childChain;
  }
  addCall(trigger, key) {
    const childChain = this.add(trigger, key);
    childChain.type = "call";
    return childChain;
  }
  addNotify(trigger) {
    const childChain = this.add(trigger);
    childChain.type = "notify";
    return childChain;
  }
  addUpdate(child) {
    const childChain = this.add(child);
    childChain.type = "update";
    return childChain;
  }
  print() {
    const preLink = "|--> ";
    const preDec = "|-- ";
    const preHasNextSpace = "|  ";
    const preSpace = "   ";
    function dfi(current) {
      var _a, _b, _c;
      const isRunnerScope = current.hook instanceof CurrentRunnerScope;
      let currentName = ((_a = current.hook) === null || _a === void 0 ? void 0 : _a.constructor.name) || current.name || "";
      if (isRunnerScope) {
        currentName = `\x1B[32m${currentName}\x1B[0m`;
      }
      if ((_b = current.hook) === null || _b === void 0 ? void 0 : _b.name) {
        currentName = `${currentName}(${(_c = current.hook) === null || _c === void 0 ? void 0 : _c.name}${current.hookKey ? "." + current.hookKey : ""})`;
      } else if (isDef(current.hookIndex)) {
        currentName = `${currentName}(${current.hookIndex})`;
      }
      if (current.type) {
        currentName = `${current.type}: ${currentName}`;
      }
      currentName = `\x1B[32m${current.order}\x1B[0m.${currentName}`;
      const currentRows = [currentName];
      if (shortValue(current.oldValue)) {
        currentRows.push(`${preDec}cur=${shortValue(current.oldValue)}`);
      } else {
        currentRows.push(`${preDec}cur=${JSON.stringify(current.oldValue)}`);
      }
      if (current.hasNewValue) {
        if (shortValue(current.newValue)) {
          currentRows.push(`${preDec}new=${shortValue(current.newValue)}`);
        } else {
          currentRows.push(`${preDec}new=${JSON.stringify(current.newValue)}`);
        }
      }
      if (current.children.length > 0) {
        const names = current.children.map(dfi);
        const rows = [];
        names.forEach((arr, i2) => {
          arr.forEach((childName, j2) => {
            if (j2 === 0) {
              rows.push(`${preLink}${childName}`);
            } else {
              if (names[i2 + 1]) {
                rows.push(`${preHasNextSpace}${childName}`);
              } else {
                rows.push(`${preSpace}${childName}`);
              }
            }
          });
        });
        return [...currentRows, ...rows];
      }
      return [...currentRows];
    }
    const logRows = dfi(this);
    console.log(logRows.join("\n"));
  }
}
ReactiveChain.getCurrent = () => currentReactiveChain;
const mountHookFactory = {
  state: mountState,
  cache: mountCache,
  computed: mountComputed,
  inputCompute: mountInputCompute,
  signal,
  action: mountInputCompute
};
const updateHookFactory = {
  state: updateState,
  cache: updateCache,
  computed: updateComputed,
  inputCompute: updateInputCompute,
  signal,
  action: updateInputCompute
};
let currentHookFactory = mountHookFactory;
function updateValidation() {
  if (!currentRunnerScope) {
    throw new Error("[updateValidation] update hook must under a tarat runner");
  }
  const { hooks, initialHooksSet } = currentRunnerScope;
  const currentIndex = hooks.length;
  const valid = !initialHooksSet || initialHooksSet.has(currentIndex);
  return {
    valid,
    currentIndex
  };
}
function createUnaccessGetter(index2) {
  const f2 = () => {
    throw new Error(`[update getter] cant access un initialized hook(${index2})`);
  };
  const newF = Object.assign(f2, {
    _hook: null
  });
  return newF;
}
function createStateSetterGetterFunc(s2) {
  return (parameter) => {
    if (isDef(parameter)) {
      let result;
      let patches = [];
      if (isFunc(parameter)) {
        const r2 = produceWithPatches(s2.value, parameter);
        result = r2[0];
        patches = r2[1];
      } else {
        result = parameter;
      }
      if (currentInputeCompute) {
        s2.addComputePatches(result, patches);
      } else {
        const reactiveChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.addUpdate(s2);
        const isUnderComputed = underComputed();
        s2.update(result, patches, isUnderComputed, reactiveChain);
      }
      return [result, patches];
    }
    if (currentReactiveChain) {
      return ReactiveChain.withChain(currentReactiveChain.addCall(s2), () => {
        return s2.value;
      });
    }
    return s2.value;
  };
}
function createCacheSetterGetterFunc(c2) {
  return (parameter) => {
    if (isDef(parameter)) {
      let result;
      let patches = [];
      if (isFunc(parameter)) {
        const r2 = produceWithPatches(c2.value, parameter);
        result = r2[0];
        patches = r2[1];
      } else {
        result = parameter;
      }
      if (currentInputeCompute) {
        c2.addComputePatches(result, patches);
      } else {
        const reactiveChain = currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.addUpdate(c2);
        const isUnderComputed = underComputed();
        c2.update(result, patches, isUnderComputed, reactiveChain);
      }
      return [result, patches];
    }
    if (currentReactiveChain) {
      return ReactiveChain.withChain(currentReactiveChain.addCall(c2), () => {
        return c2.value;
      });
    }
    return c2.value;
  };
}
function updateState(initialValue) {
  var _a, _b;
  const { valid, currentIndex } = updateValidation();
  initialValue = (_a = currentRunnerScope.runnerContext.initialData[currentIndex]) === null || _a === void 0 ? void 0 : _a[1];
  if (!valid) {
    currentRunnerScope.addHook(void 0);
    return createUnaccessGetter(currentIndex);
  }
  const timestamp = (_b = currentRunnerScope.runnerContext.initialData[currentIndex]) === null || _b === void 0 ? void 0 : _b[2];
  const hook = new State(initialValue);
  if (timestamp) {
    hook.modifiedTimstamp = timestamp;
  }
  const setterGetter = createStateSetterGetterFunc(hook);
  currentRunnerScope.addHook(hook);
  currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(hook);
  const newSetterGetter = Object.assign(setterGetter, {
    _hook: hook
  });
  return newSetterGetter;
}
function mountState(initialValue) {
  const hook = new State(initialValue);
  const setterGetter = createStateSetterGetterFunc(hook);
  currentRunnerScope === null || currentRunnerScope === void 0 ? void 0 : currentRunnerScope.addHook(hook);
  currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(hook);
  const newSetterGetter = Object.assign(setterGetter, {
    _hook: hook
  });
  return newSetterGetter;
}
function updateCache(key, options) {
  var _a, _b;
  const { valid, currentIndex } = updateValidation();
  if (!valid) {
    currentRunnerScope.addHook(void 0);
    return createUnaccessGetter(currentIndex);
  }
  const hook = new Cache(key, options, currentRunnerScope);
  currentRunnerScope.addHook(hook);
  const initialValue = (_a = currentRunnerScope.runnerContext.initialData[currentIndex]) === null || _a === void 0 ? void 0 : _a[1];
  const timestamp = (_b = currentRunnerScope.runnerContext.initialData[currentIndex]) === null || _b === void 0 ? void 0 : _b[2];
  if (initialValue !== void 0) {
    hook._internalValue = initialValue;
    if (timestamp) {
      hook.modifiedTimstamp = timestamp;
    }
  }
  const setterGetter = createCacheSetterGetterFunc(hook);
  const newSetterGetter = Object.assign(setterGetter, {
    _hook: hook
  });
  return newSetterGetter;
}
function mountCache(key, options) {
  const hook = new Cache(key, options, currentRunnerScope);
  currentRunnerScope === null || currentRunnerScope === void 0 ? void 0 : currentRunnerScope.addHook(hook);
  currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(hook);
  const setterGetter = createCacheSetterGetterFunc(hook);
  const newSetterGetter = Object.assign(setterGetter, {
    _hook: hook
  });
  return newSetterGetter;
}
function updateComputed(fn2) {
  var _a, _b;
  const { valid, currentIndex } = updateValidation();
  if (!valid) {
    currentRunnerScope.addHook(void 0);
    return createUnaccessGetter(currentIndex);
  }
  const initialValue = (_a = currentRunnerScope.runnerContext.initialData[currentIndex]) === null || _a === void 0 ? void 0 : _a[1];
  const timestamp = (_b = currentRunnerScope.runnerContext.initialData[currentIndex]) === null || _b === void 0 ? void 0 : _b[2];
  const hook = new Computed(fn2);
  currentRunnerScope.addHook(hook);
  hook._internalValue = initialValue;
  hook.init = false;
  if (timestamp) {
    hook.modifiedTimstamp = timestamp;
  }
  currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(hook);
  const getter = () => {
    return hook.value;
  };
  const newGetter = Object.assign(getter, {
    _hook: hook
  });
  return newGetter;
}
function mountComputed(fn2) {
  const hook = new Computed(fn2);
  currentRunnerScope === null || currentRunnerScope === void 0 ? void 0 : currentRunnerScope.addHook(hook);
  currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(hook);
  const getter = () => {
    return hook.value;
  };
  const newGetter = Object.assign(getter, {
    _hook: hook
  });
  return newGetter;
}
function updateInputCompute(func) {
  const { hooks, initialHooksSet } = currentRunnerScope;
  const currentIndex = hooks.length;
  const valid = !initialHooksSet || initialHooksSet.has(currentIndex);
  if (!valid) {
    currentRunnerScope.addHook(void 0);
    return createUnaccessGetter(currentIndex);
  }
  return mountInputCompute(func);
}
function mountInputCompute(func) {
  const hook = new InputCompute(func, currentRunnerScope);
  currentRunnerScope === null || currentRunnerScope === void 0 ? void 0 : currentRunnerScope.addHook(hook);
  currentReactiveChain === null || currentReactiveChain === void 0 ? void 0 : currentReactiveChain.add(hook);
  const wrapFunc = (...args) => {
    return hook.run(...args);
  };
  wrapFunc._hook = hook;
  return wrapFunc;
}
function state(initialValue) {
  return currentHookFactory.state(initialValue);
}
function computed(fn2) {
  return currentHookFactory.computed(fn2);
}
function inputCompute(func) {
  if (!currentRunnerScope) {
    throw new Error("[inputCompute] must under a tarat runner");
  }
  const wrapFunc = currentHookFactory.inputCompute(func);
  return wrapFunc;
}
function signal(v2) {
  if (isFunc(v2)) {
    return computed(v2);
  } else {
    return state(v2);
  }
}
const action = inputCompute;
function after(callback, targets) {
  callback = makeBatchCallback(callback);
  targets.forEach((target) => {
    if (target._hook) {
      if (target._hook instanceof InputCompute) {
        target._hook.on(EHookEvents.afterCalling, callback);
      } else {
        target._hook.on(EHookEvents.change, callback);
      }
    }
  });
  return () => {
    targets.forEach((target) => {
      if (target._hook) {
        if (target._hook instanceof InputCompute) {
          target._hook.off(EHookEvents.afterCalling, callback);
        } else {
          target._hook.off(EHookEvents.change, callback);
        }
      }
    });
  };
}
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function memoize(fn2) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn2(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i2 = 1; i2 < attrib.length; i2++) {
          inserted[attrib[i2]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = interpolation.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name2 = murmur2(styles) + identifierName;
  return {
    name: name2,
    styles,
    next: cursor
  };
};
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === void 0) {
    return cache.insert("", serialized, cache.sheet, true);
  }
}
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var createEmotion = function createEmotion2(options) {
  var cache = createCache(options);
  cache.sheet.speedy = function(value) {
    this.isSpeedy = value;
  };
  cache.compat = true;
  var css2 = function css3() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered, void 0);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var keyframes = function keyframes2() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };
  var injectGlobal = function injectGlobal2() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };
  var cx = function cx2() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return merge(cache.registered, css2, classnames(args));
  };
  return {
    css: css2,
    cx,
    injectGlobal,
    keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function(key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    sheet: cache.sheet,
    cache,
    getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css2)
  };
};
var classnames = function classnames2(args) {
  var cls = "";
  for (var i2 = 0; i2 < args.length; i2++) {
    var arg = args[i2];
    if (arg == null)
      continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = "";
          for (var k2 in arg) {
            if (arg[k2] && k2) {
              toAdd && (toAdd += " ");
              toAdd += k2;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
var _createEmotion = createEmotion({
  key: "css"
}), css = _createEmotion.css;
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
var DraftOperatesEnum;
(function(DraftOperatesEnum2) {
  DraftOperatesEnum2["insert"] = "insert";
  DraftOperatesEnum2["remove"] = "remove";
  DraftOperatesEnum2["replace"] = "replace";
})(DraftOperatesEnum || (DraftOperatesEnum = {}));
var CommandOP;
(function(CommandOP2) {
  CommandOP2["addChild"] = "addChild";
  CommandOP2["removeChild"] = "removeChild";
  CommandOP2["replaceChild"] = "replaceChild";
})(CommandOP || (CommandOP = {}));
const SignalFlag = "Signal";
const typeFlagSymbol = Symbol.for("renderTypeFlag");
const typeDefaultValueFlagSymbol = Symbol.for("typeDefaultValueFlagSymbol");
const PropTypes = {
  array: createPrimitiveTypeChecker("array"),
  bigint: createPrimitiveTypeChecker("bigint"),
  bool: createPrimitiveTypeChecker("boolean"),
  func: createPrimitiveTypeChecker("function"),
  number: createPrimitiveTypeChecker("number"),
  object: createPrimitiveTypeChecker("object"),
  string: createPrimitiveTypeChecker("string"),
  symbol: createPrimitiveTypeChecker("symbol"),
  signal: createSignalTypeChecker(),
  checkPropTypes
};
function getPreciseType(propValue) {
  if (typeof propValue === "undefined" || propValue === null) {
    return "" + propValue;
  }
  var propType = getPropType(propValue);
  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    } else
      ;
  }
  return propType;
}
function isSymbol(propType, propValue) {
  if (propType === "symbol") {
    return true;
  }
  if (!propValue) {
    return false;
  }
  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  }
  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }
  return false;
}
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return "array";
  }
  if (propValue instanceof RegExp) {
    return "object";
  }
  if (isSymbol(propType, propValue)) {
    return "symbol";
  }
  return propType;
}
function PropTypeError(message, data) {
  this.message = message;
  this.data = data && typeof data === "object" ? data : {};
  this.stack = "";
}
var ANONYMOUS = "<<anonymous>>";
function createChainableTypeDefault(validate) {
  function defaultValue(value) {
    validateWithDefault[typeDefaultValueFlagSymbol] = value;
    validateWithDefault[typeFlagSymbol] = validate[typeFlagSymbol];
    function validateWithDefault(props, propName, componentName, location2, propFullName) {
      return validate(props, propName, componentName, location2, propFullName);
    }
    return validateWithDefault;
  }
  validate.default = defaultValue;
  validate.default[typeFlagSymbol] = validate[typeFlagSymbol];
  validate.isRequired.default = defaultValue;
  validate.isRequired.default[typeFlagSymbol] = validate[typeFlagSymbol];
  return validate;
}
function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location2, propFullName) {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;
    if (props[propName] == null) {
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
        }
        return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
      }
      return null;
    } else {
      return validate(props, propName, componentName, location2, propFullName);
    }
  }
  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  chainedCheckType[typeFlagSymbol] = validate[typeFlagSymbol];
  chainedCheckType.isRequired[typeFlagSymbol] = validate[typeFlagSymbol];
  return createChainableTypeDefault(chainedCheckType);
}
function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location2, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var preciseType = getPreciseType(propValue);
      return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}
function createSignalTypeChecker() {
  function validate(props, propName, componentName, location2, propFullName) {
    var propValue = props[propName];
    if (!isSignal(propValue)) {
      var expectedType = "Signal";
      var preciseType = getPreciseType(propValue);
      return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
    }
    return null;
  }
  validate[typeFlagSymbol] = SignalFlag;
  return createChainableTypeChecker(validate);
}
let loggedTypeFailures = {};
const has = Function.call.bind(Object.prototype.hasOwnProperty);
function printWarning(text) {
  var message = "Warning: " + text;
  if (typeof console !== "undefined") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (x2) {
  }
}
function checkPropTypes(typeSpecs, values, location2, componentName, getStack) {
  for (var typeSpecName in typeSpecs) {
    if (has(typeSpecs, typeSpecName)) {
      var error;
      try {
        if (typeof typeSpecs[typeSpecName] !== "function") {
          var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
          err.name = "Invariant Violation";
          throw err;
        }
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null);
      } catch (ex) {
        error = ex;
      }
      if (error && !(error instanceof Error)) {
        printWarning(error.message);
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        loggedTypeFailures[error.message] = true;
        var stack = getStack ? getStack() : "";
        printWarning("Failed " + location2 + " type: " + error.message + (stack != null ? stack : ""));
      }
    }
  }
}
checkPropTypes.resetWarningCache = function() {
  loggedTypeFailures = {};
};
const isFunction = (v2) => typeof v2 == "function";
function mergeFromProps(json, props, keys) {
  keys.forEach((key) => {
    const val = props[key];
    if (val) {
      if (json.props[key]) {
        json.props[key] = `${json.props[key]} ${val}`;
      } else {
        json.props[key] = val;
      }
    }
  });
  return json;
}
function assignRules(draft, rules) {
  for (const rule of rules) {
    const { condition, target: draftTarget, style } = rule;
    if (!!condition || condition === void 0) {
      const pathInDraft = getPathsFromDraft(draftTarget);
      const stylePath = pathInDraft.concat(["props", "style"]);
      const styleObj = get(draft, stylePath);
      if (isFake(styleObj)) {
        set(draft, stylePath, {});
      }
      Object.entries(style).forEach(([k2, v2]) => {
        set(draft, stylePath.concat(k2), v2);
      });
    }
  }
}
const SEMATIC_RELATION_IS = "is";
const SEMATIC_RELATION_HAS = "has";
function checkSematic(sematic, props) {
  let result = false;
  const kvArr = Object.entries(props);
  for (const [k2, v2] of kvArr) {
    const [relationField, ...sematicArr] = k2.split("-");
    if (relationField === SEMATIC_RELATION_IS && sematicArr.length > 1) {
      throw new Error("[checkSematic] the node can not be multiply sematic at the same time");
    }
    if ([SEMATIC_RELATION_IS, SEMATIC_RELATION_HAS].includes(relationField)) {
      result = result || sematicArr.includes(sematic);
    }
    if (result) {
      break;
    }
  }
  return result;
}
function camelToLine(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}
function patternResultToEmotionCSS(style, pseudo) {
  let styleRows = [];
  Object.entries(style || {}).forEach(([k2, v2]) => {
    const r2 = Array.isArray(v2) ? last(v2) : v2;
    styleRows.push(`${camelToLine(k2)}: ${r2};`);
  });
  return css`
    ${styleRows.join("\n")}
  `;
}
function assignPattern(json, pattern, useEmotion) {
  const source = json;
  traverseLayoutTree(source, (node2) => {
    const { props } = node2;
    for (const sematic in pattern) {
      if (checkSematic(sematic, props)) {
        const style = pattern[sematic];
        if (useEmotion) {
          const cls = patternResultToEmotionCSS(style);
          if (props.className) {
            props.className = `${props.className} ${cls}`;
          } else {
            props.className = cls;
          }
        } else {
          if (!props.style) {
            props.style = {};
          }
          Object.entries(style).forEach(([k2, v2]) => {
            props.style[k2] = Array.isArray(v2) ? last(v2) : v2;
          });
        }
      }
    }
  });
  return source;
}
const renderHTMLProp = "_html";
const VirtualNodeTypeSymbol = Symbol.for("polymitaVirtualNodeSymbol");
function isVirtualNode(node2) {
  return node2 && typeof node2 === "object" && "type" in node2 && "props" in node2 && "children" in node2 && node2.flags === VirtualNodeTypeSymbol;
}
function isFunctionComponentPath(path) {
  return /^[A-Z]/.test(String(path));
}
const ExportPropKey = "props";
function getVirtualNodesByPath(source, path) {
  let current = [source];
  let i2 = 0;
  for (; i2 < path.length; i2++) {
    const type = path[i2];
    if (isFunctionComponentPath(type)) {
      current = current.filter((n2) => isVNodeFunctionComponent(n2) && n2.type.name === type);
      break;
    }
    const newCurrent = [];
    for (const node2 of current) {
      if (isVirtualNode(node2)) {
        if (node2.type === type) {
          newCurrent.push(node2);
        }
      }
    }
    if (newCurrent.length === 0) {
      break;
    }
    const nextType = path[i2 + 1];
    const nextChildren = newCurrent.map((n2) => n2.children.filter((n3) => {
      if (isVirtualNode(n3)) {
        if (isVNodeFunctionComponent(n3)) {
          return n3.type.name === nextType;
        }
        return n3.type === nextType;
      }
    })).flat();
    if (nextChildren.length === 0) {
      break;
    }
    current = nextChildren;
  }
  return [current, i2];
}
const DRAFT_OPERATES = [
  DraftOperatesEnum.insert,
  DraftOperatesEnum.remove,
  DraftOperatesEnum.replace
];
function assignPatchToNode(current, i2, patch) {
  const { op, path, value } = patch;
  switch (op) {
    case DraftOperatesEnum.replace:
      const restKeys = path.slice(i2 + 1);
      current.forEach((node2) => {
        set(node2, restKeys, value);
      });
      break;
    case DraftOperatesEnum.insert:
      current.forEach((node2) => {
        if (node2.children) {
          node2.children = [].concat(node2.children).concat(value);
        } else {
          node2.children = [value];
        }
      });
      break;
    case DraftOperatesEnum.remove:
      break;
  }
}
function mergeConstructOverrideToNode(nodes, i2, patch) {
  const { op, path, value } = patch;
  const newPath = path.slice(i2 + 1);
  const newPatch = Object.assign(Object.assign({}, patch), { path: newPath });
  nodes.forEach((n2) => {
    var _a;
    if (!n2.props) {
      n2.props = {};
    }
    if ((_a = n2.props.override) === null || _a === void 0 ? void 0 : _a.patches) {
      n2.props.override.patches.push(newPatch);
    } else {
      n2.props.override = Object.assign(n2.props.override || {}, {
        patches: [newPatch]
      });
    }
  });
}
function applyJSONTreePatches(source, patches) {
  const target = source;
  for (const patch of patches) {
    const { op, path, value } = patch;
    if (value.condition === false) {
      continue;
    }
    let [current, i2] = getVirtualNodesByPath(target, path);
    if (isVNodeFunctionComponent(current[0])) {
      mergeConstructOverrideToNode(current, i2, patch);
    } else {
      assignPatchToNode(current, i2, patch);
    }
  }
  return target;
}
const handlerPathKeySymbol = Symbol.for("handlerPathKeySymbol");
function getPathsFromDraft(target) {
  return target[handlerPathKeySymbol];
}
const draftOperationMethodSymbol = Symbol.for("draftOperationMethod");
const fakeProxyObjectSymbol = Symbol.for("fakeProxyObjectSymbol");
function isFake(obj) {
  return obj && obj[fakeProxyObjectSymbol];
}
function proxyLayoutJSON(json) {
  const patches = [];
  const jsonTree = buildLayoutNestedObj(json);
  function createProxy(target, pathArr = []) {
    const proxy = new Proxy(target, {
      get(target2, key) {
        if (key === handlerPathKeySymbol) {
          return pathArr;
        }
        const v2 = Reflect.get(target2, key);
        if (typeof key === "string") {
          if (DRAFT_OPERATES.includes(key)) {
            return createProxy(Object.assign(() => {
            }, { [draftOperationMethodSymbol]: key }), pathArr);
          } else if (typeof v2 === "object" || v2 === void 0 || v2 === null) {
            return createProxy(v2 || { [fakeProxyObjectSymbol]: true }, pathArr.concat(key));
          }
        }
        return v2;
      },
      set(target2, key, value) {
        const currentPathArr = pathArr.concat(key);
        patches.push({
          op: DraftOperatesEnum.replace,
          path: currentPathArr,
          value
        });
        Reflect.set(target2, key, value);
        return true;
      },
      apply(target2, thisArg, argArray) {
        const currentPathArr = pathArr;
        const op = target2[draftOperationMethodSymbol];
        switch (op) {
          case DraftOperatesEnum.insert:
            patches.push({
              op,
              path: currentPathArr,
              value: argArray[0]
            });
            break;
          case DraftOperatesEnum.remove:
            patches.push({
              op,
              path: currentPathArr,
              value: argArray[0]
            });
            break;
          case DraftOperatesEnum.replace:
            patches.push({
              op,
              path: currentPathArr,
              value: argArray[0]
            });
            break;
        }
      }
    });
    return proxy;
  }
  function applyPatches2() {
    const newObj = applyJSONTreePatches(json, patches);
    return newObj;
  }
  function appendPatches(ps = []) {
    patches.push(...ps);
  }
  const draftJSON = createProxy(jsonTree);
  return {
    draft: draftJSON,
    append: appendPatches,
    apply: applyPatches2
  };
}
function buildLayoutNestedObj(json) {
  let root = {};
  function buildRoot(target, source) {
    if (isVirtualNode(source)) {
      const tag = source === null || source === void 0 ? void 0 : source.type;
      if (typeof tag === "string") {
        target[tag] = {
          [ExportPropKey]: source.props
        };
        if (Array.isArray(source.children) || isVirtualNode(source.children)) {
          [].concat(source.children).forEach((child) => {
            buildRoot(target[tag], child);
          });
        }
      }
    }
  }
  buildRoot(root, json);
  return root;
}
function traverseLayoutTree(layoutTree, callback) {
  if (isVirtualNode(layoutTree)) {
    callback(layoutTree);
    if (layoutTree.children) {
      if (Array.isArray(layoutTree.children)) {
        layoutTree.children.forEach((child) => {
          traverseLayoutTree(child, callback);
        });
      } else {
        traverseLayoutTree(layoutTree.children, callback);
      }
    }
  }
}
const isArray = Array.isArray;
function last(arr) {
  return arr[arr.length - 1];
}
function set(obj, path, value) {
  let base = obj;
  const currentFieldPath = isArray(path) ? path.slice(0) : path.split ? path.split(".") : [path];
  if (currentFieldPath.length > 0) {
    const fieldName = currentFieldPath.pop();
    currentFieldPath.forEach((p2, i2) => {
      if (base[p2] === void 0)
        base[p2] = {};
      base = base[p2];
    });
    if (base instanceof Map) {
      base.set(fieldName, value);
    } else if (base instanceof Set) {
      base.add(value);
    } else {
      base[fieldName] = value;
    }
  }
}
function get(obj, path) {
  let base = obj;
  const pathArr = isArray(path) ? path.slice(0) : path.split ? path.split(".") : [path];
  if (pathArr.length === 0) {
    return obj;
  }
  const currentPathArr = pathArr.slice(0, -1);
  const key = last(pathArr);
  for (const p2 of currentPathArr) {
    if (base[p2] === void 0)
      return void 0;
    base = base[p2];
  }
  if (base instanceof Map) {
    return base.get(key);
  }
  return base[key];
}
const VNodeComponentSymbol = Symbol("VNodeComponentSymbol");
const VNodeFunctionComponentSymbol = Symbol("VNodeFunctionComponentSymbol");
function isVNodeComponent(target) {
  return !!(target === null || target === void 0 ? void 0 : target[VNodeComponentSymbol]);
}
function isVNodeFunctionComponent(target) {
  var _a;
  return !!((_a = target === null || target === void 0 ? void 0 : target.type) === null || _a === void 0 ? void 0 : _a[VNodeFunctionComponentSymbol]);
}
function createVirtualNode(child) {
  return Object.assign(Object.assign({}, child), { id: -1, props: child.props || {}, flags: VirtualNodeTypeSymbol, type: child.type, children: child.children });
}
function doPatchLayoutCommand(cmd, draft) {
  if (cmd.condition === false) {
    return;
  }
  let parent = draft;
  const paths = getPathsFromDraft(cmd.parent);
  paths.forEach((path) => parent = parent[path]);
  switch (cmd.op) {
    case CommandOP.addChild:
      parent[DraftOperatesEnum.insert](createVirtualNode(cmd.child));
      break;
    case CommandOP.replaceChild:
      parent[DraftOperatesEnum.replace](createVirtualNode(cmd.child));
      break;
    case CommandOP.removeChild:
      parent[DraftOperatesEnum.remove](createVirtualNode(cmd.child));
      break;
  }
}
function runOverrides(overrides, props, draft) {
  overrides.forEach((override2) => {
    var _a, _b;
    (_a = override2.layout) === null || _a === void 0 ? void 0 : _a.call(override2, props, draft);
    if (override2.patchLayout) {
      const patchLayoutCommands = override2.patchLayout(props, draft);
      (_b = patchLayoutCommands === null || patchLayoutCommands === void 0 ? void 0 : patchLayoutCommands.forEach) === null || _b === void 0 ? void 0 : _b.call(patchLayoutCommands, (cmd) => {
        doPatchLayoutCommand(cmd, draft);
      });
    }
    if (override2.patchRules) {
      const rules = override2.patchRules(props, draft);
      assignRules(draft, rules);
    }
  });
}
function assignDefaultValueByPropTypes(props, propTypes4) {
  if (!propTypes4) {
    return props;
  }
  const r2 = {};
  Object.keys(propTypes4).forEach((key) => {
    var _a;
    if (props[key] === void 0) {
      const defaultValue = (_a = propTypes4 === null || propTypes4 === void 0 ? void 0 : propTypes4[key]) === null || _a === void 0 ? void 0 : _a[typeDefaultValueFlagSymbol];
      if (defaultValue !== void 0) {
        if (isSignal(defaultValue)) {
          console.error(`[propTypes] props.${key} is return a signal directly, it maybe cause some unexpected error.`);
        }
        r2[key] = typeof defaultValue === "function" ? defaultValue() : defaultValue;
      }
    }
  });
  return Object.assign({}, props, r2);
}
const ShouldRenderAttr = "if";
function shouldNotRender(json) {
  var _a, _b;
  return typeof (json === null || json === void 0 ? void 0 : json.type) !== "function" && (((_a = json === null || json === void 0 ? void 0 : json.props) === null || _a === void 0 ? void 0 : _a.if) === false || ((_b = json === null || json === void 0 ? void 0 : json.props) === null || _b === void 0 ? void 0 : _b.if) === null);
}
const config$3 = {
  matches: [
    {
      renderFramework: "react",
      stateManagement: "signal"
    }
  ],
  runLogic: runReactLogic,
  transform,
  covertProps: convertToSignal
};
function transform(json) {
  traverseLayoutTree(json, (node2) => {
    if (node2.props) {
      const { props } = node2;
      Object.entries(props).forEach(([key, value]) => {
        if (isSignal(value) && (key === "value" || key === "checked") && node2.type === "input") {
          const eventType = key === "value" ? "onInput" : "onChange";
          const fns = [
            (e2) => {
              value(e2.target[key]);
            }
          ];
          if (props[eventType] && isFunction(props[eventType])) {
            fns.push(props[eventType]);
          }
          props[key] = value();
          props[eventType] = function reactSignalTransformOnEventType(e2) {
            fns.forEach((fn2) => {
              fn2(e2);
            });
          };
        }
      });
    }
  });
  return json;
}
const driverWeakMap$1 = /* @__PURE__ */ new Map();
typeof window !== "undefined" && (window.driverWeakMap = driverWeakMap$1);
function convertToSignal(props, propTypes4) {
  const signalArgs = {};
  Object.entries(props || {}).forEach(([key, value]) => {
    const propType = propTypes4 === null || propTypes4 === void 0 ? void 0 : propTypes4[key];
    if ((propType === null || propType === void 0 ? void 0 : propType[typeFlagSymbol]) === SignalFlag && !isSignal(value) && !isFunction(value)) {
      signalArgs[key] = signal(value);
    } else {
      signalArgs[key] = value;
    }
  });
  return signalArgs;
}
const scopeSymbol = Symbol.for("@NewRendererReactScope");
function runReactLogic(react2, hook, props) {
  const { useRef, useEffect, useState } = react2;
  const init = useRef(null);
  const signalProps = props[0];
  if (!init.current) {
    let ssrContext = [];
    const runner = new Runner(hook, {
      updateCallbackSync: true,
      beleiveContext: true
    });
    const initialContext = ssrContext.pop();
    const scope = runner.prepareScope([signalProps], initialContext);
    const r2 = runner.executeDriver(scope);
    init.current = {
      scope,
      result: Object.assign({
        [scopeSymbol]: scope
      }, r2),
      signalProps
    };
  }
  const [upc, updatePropsCount] = useState(0);
  useEffect(() => {
    let unListenCallbacks = [];
    if (init.current) {
      const { signalProps: signalProps2 } = init.current;
      const deps = Object.values(signalProps2).filter((v2) => isSignal(v2));
      let waitCount = 0;
      const unListen = after(() => {
        waitCount++;
        Promise.resolve().then(() => {
          if (waitCount > 0) {
            waitCount = 0;
            updatePropsCount((v2) => v2 + 1);
          }
        });
      }, deps);
      unListenCallbacks.push(unListen);
    }
    return () => {
      unListenCallbacks.forEach((fn2) => fn2());
    };
  }, []);
  useEffect(() => {
    if (init.current) {
      const { signalProps: signalPropsRef } = init.current;
      Object.entries(signalProps || {}).forEach(([key, value]) => {
        if (isSignal(signalPropsRef[key])) {
          if (isSignal(value)) {
            signalPropsRef[key](value());
          } else if (!isFunction(value)) {
            signalPropsRef[key](value);
          }
        }
      });
    }
  }, [signalProps]);
  useEffect(() => {
    init.current.scope.activate();
    const unListen = init.current.scope.onUpdate(() => {
      setHookResult(Object.assign({}, init.current.result));
    });
    return () => {
      unListen();
      init.current.scope.deactivate();
      init.current.scope.dispose();
      init.current = null;
    };
  }, []);
  const [hookResult, setHookResult] = useState(init.current.result);
  return hookResult;
}
const HOVER = "hover";
const ACTIVE = "active";
const FOCUS = "focus";
const DISABLED = "disabled";
const SELECTED = "selected";
function isPseudo(k2) {
  return [HOVER, ACTIVE, FOCUS].includes(k2);
}
function isAttr(k2) {
  return [DISABLED, SELECTED].includes(k2);
}
function mapBooleanToNumber(b2) {
  return b2 === true || b2 === 1 ? 1 : 0;
}
function mergeStyleObjs(cssObjs) {
  const map = /* @__PURE__ */ new Map();
  cssObjs.forEach((cssObj) => {
    const { attr, pseudo, sematic } = cssObj;
    const key = `${attr.map((arr) => arr.join("")).join("")}${pseudo || ""}${sematic}`;
    const old = map.get(key);
    if (old) {
      old.style = Object.assign(Object.assign({}, old.style), cssObj.style);
    } else {
      map.set(key, cssObj);
    }
  });
  return [...map.values()];
}
function pushAttr(attr, item) {
  if (!attr.some((arr) => arr[0] === item[0])) {
    attr.push(item);
  }
}
function constructCSSObj(matrix) {
  const [constraints, rules] = matrix;
  const cssObjs = [];
  Object.entries(rules).forEach(([sematic, cssMatrix]) => {
    const commonStyle = {};
    Object.entries(cssMatrix).forEach(([cssProp, cssMatrix2]) => {
      Object.entries(cssMatrix2).forEach(([cssValue, matches]) => {
        function newCSSObj(valueArr) {
          const cssObj = {
            attr: [],
            style: {},
            sematic
          };
          if (matches.length === 0 || matches.every((v2) => v2 === "*")) {
            commonStyle[cssProp] = cssValue;
          }
          const attrMatches = [];
          valueArr.forEach((match2, i2) => {
            if (match2 !== "*") {
              pushAttr(attrMatches, [constraints[i2], mapBooleanToNumber(match2)]);
            }
          });
          const pseudos = attrMatches.filter(([attrOrPseudo, val]) => {
            return isPseudo(attrOrPseudo) && val !== 0;
          }).map((arr) => arr[0]);
          const attrMatchesWithoutPseudo = attrMatches.filter(([attrOrPseudo, val]) => {
            return !isPseudo(attrOrPseudo);
          });
          if (pseudos.length > 1) {
            console.error(`[createPatternCSS] only one pseudo is allowed, but received ${pseudos}`);
          }
          cssObj.pseudo = pseudos[0];
          cssObj.attr = attrMatchesWithoutPseudo;
          cssObj.style[cssProp] = cssValue;
          return cssObj;
        }
        if (Array.isArray(matches[0])) {
          matches.forEach((match2, i2) => {
            if (Array.isArray(match2)) {
              const cssObj = newCSSObj(match2);
              cssObjs.push(cssObj);
            }
          });
        } else {
          const cssObj = newCSSObj(matches);
          cssObjs.push(cssObj);
        }
      });
    });
    if (Object.keys(commonStyle).length > 0) {
      cssObjs.push({
        attr: [],
        style: commonStyle,
        sematic
      });
    }
  });
  return cssObjs;
}
const AttributeSelectorPrefix = "data-";
function generateCSSIntoSematic(cssObjs) {
  const sematicMap = {};
  cssObjs.forEach((cssObj, i2) => {
    const { attr, pseudo, style, sematic } = cssObj;
    const old = sematicMap[sematic];
    const attributeSelector = attr.reduce((acc, [attr2, val]) => {
      acc[0] += String(attr2);
      acc[1] += String(val);
      return acc;
    }, [AttributeSelectorPrefix, ""]);
    const attributeSelectorText = attr.length > 0 ? `[${attributeSelector[0]}="${attributeSelector[1]}"]` : "";
    const styleText = Object.entries(style).map(([k2, v2]) => {
      return `${camelToLine(k2)}: ${v2};`;
    }).join("");
    const pseudoSelector = pseudo ? `:${pseudo}` : "";
    const clsText = `
      ${old || ""}
      &${attributeSelectorText}${pseudoSelector}{
        ${styleText}
      }
    `;
    sematicMap[sematic] = clsText;
  });
  return sematicMap;
}
function createPatternCSS(matrix) {
  const cssObjs = constructCSSObj(matrix);
  const mergedObjs = mergeStyleObjs(cssObjs);
  const sematicCls = generateCSSIntoSematic(mergedObjs);
  return sematicCls;
}
function assignDeclarationPatterns(json, patternMatrix) {
  const source = Object.assign({}, json);
  const attributeConstraints = patternMatrix[0].filter(isAttr);
  const pattern = createPatternCSS(patternMatrix);
  traverseLayoutTree(source, (node2) => {
    const { props } = node2;
    for (const sematic in pattern) {
      if (checkSematic(sematic, props)) {
        const clsText = pattern[sematic];
        const cls = css`
          ${clsText}
        `;
        if (props.className) {
          props.className = `${props.className} ${cls}`;
        } else {
          props.className = cls;
        }
        const attributeSelector = [
          AttributeSelectorPrefix,
          [],
          []
        ];
        const singleProps = [];
        attributeConstraints.forEach((attr) => {
          if (attr in props) {
            attributeSelector[1].push(attr);
            attributeSelector[2].push(mapBooleanToNumber(props[attr]));
            singleProps.push([attr, mapBooleanToNumber(props[attr])]);
          }
        });
        if (attributeSelector[1].length > 0) {
          const newProp = [
            attributeSelector[0],
            attributeSelector[1].join("")
          ].join("");
          props[newProp] = attributeSelector[2].join("");
        }
        singleProps.forEach(([attr, val]) => {
          props[`${AttributeSelectorPrefix}${attr}`] = String(val);
        });
      }
    }
  });
  return source;
}
const driverWeakMap = /* @__PURE__ */ new Map();
typeof window !== "undefined" && (window.driverWeakMap = driverWeakMap);
function filterPatternSematicProps(props) {
  if (!props) {
    return props;
  }
  const obj = {};
  Object.keys(props).forEach((key) => {
    if (key.startsWith(`${SEMATIC_RELATION_IS}-`) || key.startsWith(`${SEMATIC_RELATION_HAS}-`)) {
      obj[key] = 1;
    } else if (key === renderHTMLProp) {
      obj.dangerouslySetInnerHTML = { __html: props[key] };
    } else {
      obj[key] = props[key];
    }
  });
  return obj;
}
function createReactContainer(React2, module, stateManagement, options) {
  module = Object.assign({}, module);
  const cacheSymbol = Symbol("cacheSymbol");
  const modulePropTypes = module.propTypes;
  const runReactLogic2 = stateManagement === null || stateManagement === void 0 ? void 0 : stateManagement.runLogic.bind(null, React2, module.logic);
  const convertProps = (stateManagement === null || stateManagement === void 0 ? void 0 : stateManagement.covertProps) || ((props) => props);
  function initLogic(props) {
    let cache = module[cacheSymbol];
    if (cache) {
      cache.props = props;
    } else {
      module[cacheSymbol] = { props };
      cache = module[cacheSymbol];
    }
    if (!runReactLogic2 || !module.logic) {
      return;
    }
    const r2 = runReactLogic2([props]);
    cache.logicResult = r2;
    cache.props = props;
    return r2;
  }
  function runLogicFromCache() {
    const cache = module[cacheSymbol];
    if (cache) {
      return cache.logicResult;
    }
    throw new Error("[runLogic] must run with cached props");
  }
  function getLayoutFromModule(props) {
    var _a;
    const cache = module[cacheSymbol];
    if (cache && cache.proxyHandler) {
      return cache;
    }
    const json = (_a = module.layout) === null || _a === void 0 ? void 0 : _a.call(module, props);
    const handler = proxyLayoutJSON(json);
    if (json) {
      cache.proxyHandler = handler;
    }
    return cache;
  }
  function disposeFromModule() {
    delete module[cacheSymbol];
  }
  function createElementDepth(json) {
    if (!json) {
      return;
    }
    if (!isVirtualNode(json)) {
      return json;
    }
    if (shouldNotRender(json)) {
      return null;
    }
    if (ShouldRenderAttr in (json === null || json === void 0 ? void 0 : json.props)) {
      delete json.props[ShouldRenderAttr];
    }
    let children = json.children;
    let elementArgs = [json.type, filterPatternSematicProps(json.props)];
    if (Array.isArray(json.children)) {
      children = json.children.map(createElementDepth);
      elementArgs.push(...children);
    } else {
      if (isVirtualNode(json.children)) {
        children = createElementDepth(json.children);
      }
      elementArgs.push(children);
    }
    return React2.createElement(...elementArgs);
  }
  function construct(props, overrides) {
    var _a, _b, _c, _d;
    if (!props) {
      props = {};
    }
    const defaultPropsRef = React2.useRef(null);
    if (!defaultPropsRef.current) {
      defaultPropsRef.current = assignDefaultValueByPropTypes({}, module.propTypes);
    }
    props = Object.assign({}, defaultPropsRef.current, props);
    const convertedProps = convertProps(props, modulePropTypes);
    initLogic(convertedProps);
    const { proxyHandler } = getLayoutFromModule(convertedProps);
    if (proxyHandler) {
      const rules = (_a = module.styleRules) === null || _a === void 0 ? void 0 : _a.call(module, convertedProps, proxyHandler.draft);
      if (rules) {
        assignRules(proxyHandler.draft, rules);
      }
      const moduleOverrides = ((_b = module.override) === null || _b === void 0 ? void 0 : _b.call(module)) || [];
      const allOverrideModules = [...moduleOverrides, ...overrides];
      runOverrides(allOverrideModules, convertedProps, proxyHandler.draft);
      allOverrideModules.forEach((override2) => {
        proxyHandler.append(override2.patches);
      });
      let newJSON = proxyHandler.apply();
      newJSON = mergeFromProps(newJSON, props, ["className", "id", "style"]);
      const patternResult = (_c = module.designPattern) === null || _c === void 0 ? void 0 : _c.call(module, convertedProps);
      if (patternResult) {
        newJSON = assignPattern(newJSON, patternResult, options.useEmotion);
      }
      const declarationPatterns = (_d = module.designPatterns) === null || _d === void 0 ? void 0 : _d.call(module, convertedProps);
      if (declarationPatterns) {
        if (Array.isArray(declarationPatterns)) {
          newJSON = assignDeclarationPatterns(newJSON, declarationPatterns);
        }
      }
      stateManagement === null || stateManagement === void 0 ? void 0 : stateManagement.transform(newJSON);
      disposeFromModule();
      return newJSON;
    }
    return null;
  }
  function render6(json) {
    const root = createElementDepth(json);
    return root;
  }
  function getLayout(props) {
    const convertedProps = convertProps(props, modulePropTypes);
    const { proxyHandler } = getLayoutFromModule(convertedProps);
    return proxyHandler === null || proxyHandler === void 0 ? void 0 : proxyHandler.draft;
  }
  return {
    render: render6,
    construct,
    runLogic: runLogicFromCache,
    getLayout
  };
}
let globalCurrentRenderer = [];
function getCurrentRenderer() {
  return last(globalCurrentRenderer);
}
function pushCurrentRenderer(renderer) {
  globalCurrentRenderer.push(renderer);
}
function popCurrentRenderer() {
  globalCurrentRenderer.pop();
}
const createRSRenderer = createRenderer;
function createRenderer(module, renderHost, override2) {
  const renderer = createRenderer2({
    module,
    renderHost,
    override: override2,
    stateManagement: config$3,
    renderContainerCreator: createReactContainer
  });
  return renderer;
}
function createComponent(func) {
  function component(...args) {
    return func.apply(null, args);
  }
  Object.defineProperty(component, "name", {
    get() {
      return func.name;
    }
  });
  component[VNodeComponentSymbol] = true;
  Object.keys(func).forEach((key) => {
    component[key] = func[key];
  });
  return component;
}
function createFunctionComponent(func, name2) {
  function component(...args) {
    return func.apply(null, args);
  }
  Object.defineProperty(component, "name", {
    get() {
      return name2 || "Unknown function component";
    }
  });
  Object.keys(func).forEach((key) => {
    component[key] = func[key];
  });
  component[VNodeFunctionComponentSymbol] = true;
  return component;
}
function h(type, props, ...children) {
  if (isVNodeComponent(type)) {
    const json = type(Object.assign(Object.assign({}, props || {}), { children }));
    return json;
  }
  if (props === null || props === void 0 ? void 0 : props.children) {
    if (children.length !== 0) {
      props.key = children;
    }
    children = props.children;
    delete props.children;
  }
  const result = {
    flags: VirtualNodeTypeSymbol,
    type,
    props: props || {},
    children: children.flat()
  };
  let key = props === null || props === void 0 ? void 0 : props.key;
  if (key) {
    result.key = key;
  }
  return result;
}
function useLogic(...args) {
  const renderer = getCurrentRenderer();
  if (!renderer) {
    throw new Error("useLogic must be called in render function");
  }
  return renderer.renderHooksContainer.runLogic(...args);
}
const useModule = useComponentModule;
function useComponentModule(module, override2) {
  const renderer = getCurrentRenderer();
  if (!renderer) {
    throw new Error("useModule must be called in render function");
  }
  const subModuleRenderer = createRenderer2(Object.assign(Object.assign({}, renderer.config), {
    module,
    override: override2
  }));
  return createFunctionComponent((props) => {
    const { override: override3 } = props, rest = __rest(props, ["override"]);
    subModuleRenderer.construct(rest, override3);
    return subModuleRenderer.render();
  }, String(module.name));
}
function useLayout() {
  const renderer = getCurrentRenderer();
  if (!renderer) {
    throw new Error("useLayout must be called in render function");
  }
  return renderer.renderHooksContainer.getLayout();
}
function overrideModule(module, override2) {
  const newOverride = () => {
    var _a;
    const p1 = ((_a = module.override) === null || _a === void 0 ? void 0 : _a.call(module)) || [];
    const p2 = override2;
    return [...p1, p2];
  };
  return Object.assign(Object.assign({}, module), { override: newOverride });
}
function createRenderer2(config2) {
  const { module, renderHost, override: override2, renderContainerCreator, stateManagement } = config2;
  if (module.name && /^[a-z]/.test(String(module.name))) {
    throw new Error(`First char of module name must be uppercase, but got ${module.name}.`);
  }
  const rendererContainer = renderContainerCreator(renderHost.framework.lib, module, stateManagement, {
    useEmotion: renderHost.useEmotion
  });
  let layoutJSON = null;
  function construct(props, secondOverride) {
    pushCurrentRenderer(currentRendererInstance);
    const mergedOverrides = [override2, secondOverride].filter(Boolean);
    const r2 = rendererContainer.construct(props, mergedOverrides);
    layoutJSON = r2;
    popCurrentRenderer();
    return r2;
  }
  function render6() {
    if (!layoutJSON) {
      return;
    }
    return rendererContainer.render(layoutJSON);
  }
  const currentRendererInstance = {
    renderHooksContainer: rendererContainer,
    construct,
    render: render6,
    config: config2
  };
  return currentRendererInstance;
}
var __defProp$a = Object.defineProperty;
var __export$a = (target, all) => {
  for (var name2 in all)
    __defProp$a(target, name2, { get: all[name2], enumerable: true });
};
var button_exports$1 = {};
__export$a(button_exports$1, {
  designPatterns: () => designPatterns$b,
  layout: () => layout$d,
  logic: () => logic$c,
  meta: () => meta$c,
  styleRules: () => styleRules$b
});
var colors$a = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$9(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$a.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$a.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$a.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$a.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$8(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$a.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$a.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$a.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$c;
var logic$c = (props) => {
  return {
    count: 0
  };
};
var layout$d = (props) => {
  useLogic();
  return /* @__PURE__ */ h("buttonBox", {
    className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
    "is-container": true,
    "has-decoration": true,
    selected: false,
    disabled: props.disabled
  }, /* @__PURE__ */ h("span", {
    "is-text": true,
    selected: false,
    disabled: props.disabled,
    className: "block select-none",
    onClick: (e2) => {
      var _a;
      if (props.disabled)
        return;
      (_a = props.onClick) == null ? void 0 : _a.call(props, e2);
    }
  }, props.children));
};
var designPatterns$b = (props) => {
  useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix$9({
          bg: [colors$a.primaries[1], colors$a.primaries[0], colors$a.primaries[2]],
          text: [colors$a.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix$9({
          bg: [colors$a.light, colors$a.grays[0], colors$a.grays[1]],
          text: [colors$a.text]
        })
      ];
    case "link":
      return [
        entry,
        strokePatternMatrix$8({
          border: [colors$a.primaries[1], colors$a.primaries[0], colors$a.primaries[2]],
          text: [colors$a.primaries[1], colors$a.primaries[0], colors$a.primaries[2]]
        })
      ];
    default:
      return [
        entry,
        strokePatternMatrix$8({
          bdw: 1,
          border: [colors$a.grays[1], colors$a.primaries[1], colors$a.primaries[2]],
          text: [colors$a.text, colors$a.primaries[1], colors$a.primaries[2]]
        })
      ];
  }
};
var styleRules$b = (props, draft) => {
  useLogic();
  useLayout();
  return [];
};
function RenderToReactWithWrap$a(module) {
  const render6 = RenderToReact$b(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$b(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$a = RenderToReactWithWrap$a(button_exports$1);
function _createMdxContent$c(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Button \u6309\u94AE"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      type: "primary",
      onClick: () => console.log("click on primary"),
      children: "Primary Button"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      type: "text",
      children: "Text Button"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      type: "link",
      children: "Link Button"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      children: "Default Button"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "disabled \u6309\u94AE\u5C55\u793A"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      disabled: true,
      type: "primary",
      onClick: () => console.log("click on primary"),
      children: "Primary Button"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      disabled: true,
      type: "text",
      children: "Text Button"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      disabled: true,
      type: "link",
      children: "Link Button"
    }), "\n", jsxRuntime.exports.jsx(Component$a, {
      disabled: true,
      children: "Default Button"
    }), "\n", jsxRuntime.exports.jsx(_components.h2, {
      children: "\u4EE3\u7801\u793A\u4F8B"
    }), "\n", jsxRuntime.exports.jsx(_components.pre, {
      children: jsxRuntime.exports.jsx(_components.code, {
        className: "language-javascript",
        children: "import ButtonModule from 'polymita/button'\n\nconst Button = renderToReact(ButtonModule)\n\nexport default () => {\n  return (\n    <div>\n      <Button>Primary Button</Button>\n    </div>\n  )\n}\n"
      })
    })]
  });
}
function MDXContent$c(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$c, props)
  })) : _createMdxContent$c(props);
}
var demo_default$a = MDXContent$c;
var __defProp$9 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b2)) {
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$1 = (a2, b2) => __defProps$1(a2, __getOwnPropDescs$1(b2));
var __export$9 = (target, all) => {
  for (var name2 in all)
    __defProp$9(target, name2, { get: all[name2], enumerable: true });
};
var menu_exports$1 = {};
__export$9(menu_exports$1, {
  designPattern: () => designPattern$5,
  layout: () => layout2$4,
  logic: () => logic2$4,
  meta: () => meta2$3,
  propTypes: () => propTypes$6,
  styleRules: () => styleRules2$4
});
var colors$9 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$8(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$9.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$9.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$9.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$9.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
var menu_item_exports$1 = {};
__export$9(menu_item_exports$1, {
  designPatterns: () => designPatterns$a,
  layout: () => layout$c,
  logic: () => logic$b,
  meta: () => meta$b,
  styleRules: () => styleRules$a
});
var meta$b;
var logic$b = (props) => {
  return {};
};
var layout$c = (props) => {
  useLogic();
  return /* @__PURE__ */ h("menuItem", {
    "is-container": true,
    "is-text": true,
    selected: props.selected,
    disabled: props.disabled,
    className: "block p-2 px-3 rounded-lg"
  }, /* @__PURE__ */ h("span", null, props.label));
};
var designPatterns$a = (props) => {
  useLogic();
  return [
    [HOVER, ACTIVE, "selected", "disabled"],
    blockPatternMatrix$8({
      bg: [colors$9.none, colors$9.grays[1], colors$9.primaries[2], colors$9.primaries[1]],
      text: [colors$9.text, colors$9.light, colors$9.nones[0], colors$9.nones[1]]
    })
  ];
};
var styleRules$a = (props) => {
  return [];
};
var meta2$3;
var propTypes$6 = {
  current: PropTypes.signal.isRequired.default(() => signal("")),
  items: PropTypes.signal.isRequired
};
var logic2$4 = (props) => {
  const currentKey = props.current;
  const select = (item) => {
    var _a;
    const curKey = item.key;
    currentKey(() => curKey);
    items((draft) => {
      draft.forEach((di2) => {
        var _a2;
        di2.selected = di2.key === curKey;
        (_a2 = di2.children) == null ? void 0 : _a2.forEach((dci) => {
          dci.selected = dci.key === curKey;
        });
      });
    });
    (_a = props.onClick) == null ? void 0 : _a.call(props, item);
  };
  const items = props.items;
  return {
    items,
    currentKey,
    select
  };
};
var layout2$4 = (props) => {
  const logic32 = useLogic();
  const MenuItemFunc = useModule(menu_item_exports$1);
  return /* @__PURE__ */ h("menuBox", {
    className: "block border-slate-300"
  }, /* @__PURE__ */ h("ul", {
    className: "block"
  }, logic32.items().map((item) => {
    const isSelected = item.selected;
    let element = MenuItemFunc(__spreadProps$1(__spreadValues$1({}, item), {
      hasItemChildren: !!item.children,
      selected: isSelected,
      override: {
        layout(props2, jsonTree) {
          var _a, _b;
          if (props2.hasItemChildren) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
            jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
            (_b = (_a = jsonTree.menuItem).insert) == null ? void 0 : _b.call(_a, /* @__PURE__ */ h("spanIcon", {
              key: "tag",
              "is-text": true,
              className: "mx-2"
            }, ">"));
          }
          return [];
        }
      }
    }));
    return /* @__PURE__ */ h("menuItemBox", {
      "data-name": "menu-item-box",
      key: item.key
    }, /* @__PURE__ */ h("div", {
      className: "p-1",
      onMouseDown: () => {
        logic32.select(item);
      }
    }, element), item.children && /* @__PURE__ */ h("subMenuItemBox", {
      className: "block p-1 bg-slate-200"
    }, item.children.map((subItem) => {
      const isSubSelected = subItem.selected;
      return /* @__PURE__ */ h("subMenuItem", {
        className: "block m-1",
        onClick: () => logic32.select(subItem)
      }, MenuItemFunc(__spreadProps$1(__spreadValues$1({}, subItem), { selected: isSubSelected, override: {
        layout(props2, jsonTree) {
          jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`;
        }
      } })));
    })));
  })));
};
var designPattern$5 = (props) => {
};
var styleRules2$4 = (props) => {
  return [];
};
function RenderToReactWithWrap$9(module) {
  const render6 = RenderToReact$a(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$a(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$9 = RenderToReactWithWrap$9(menu_exports$1);
var signal22 = signal;
function _createMdxContent$b(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Menu \u83DC\u5355"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868"
    }), "\n", jsxRuntime.exports.jsx(Component$9, {
      items: signal22([{
        label: "Menu Item One",
        key: "key1"
      }, {
        label: "Menu Item Two",
        key: "key2"
      }])
    }), "\n", jsxRuntime.exports.jsx(_components.h2, {
      children: "\u5D4C\u5957\u5B50\u83DC\u5355"
    }), "\n", jsxRuntime.exports.jsx(Component$9, {
      items: [{
        label: "Menu Item One",
        key: "key1.1",
        children: [{
          label: "Child Item",
          key: "child1"
        }]
      }, {
        label: "Menu Item Two",
        key: "key2.2"
      }]
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u6700\u591A\u652F\u63012\u5C42\u7684\u5D4C\u5957\u5B50\u83DC\u5355"
    })]
  });
}
function MDXContent$b(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$b, props)
  })) : _createMdxContent$b(props);
}
var demo_default$9 = MDXContent$b;
var __defProp$8 = Object.defineProperty;
var __export$8 = (target, all) => {
  for (var name2 in all)
    __defProp$8(target, name2, { get: all[name2], enumerable: true });
};
var input_exports$1 = {};
__export$8(input_exports$1, {
  config: () => config$2,
  designPatterns: () => designPatterns$9,
  layout: () => layout$b,
  logic: () => logic$a,
  meta: () => meta$a,
  propTypes: () => propTypes$5,
  styleRules: () => styleRules$9
});
var colors$8 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function strokePatternMatrix$7(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$8.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$8.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$8.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$a;
var propTypes$5 = {
  value: PropTypes.signal.isRequired
};
var config$2 = () => ({});
var logic$a = (props) => {
  const value = props.value;
  after(() => {
    var _a;
    (_a = props.onInput) == null ? void 0 : _a.call(props, value());
  }, [value]);
  function onFocus() {
    var _a;
    (_a = props.onFocus) == null ? void 0 : _a.call(props);
  }
  function onBlur() {
    var _a;
    (_a = props.onBlur) == null ? void 0 : _a.call(props);
  }
  return {
    onFocus,
    onBlur,
    value
  };
};
var layout$b = (props) => {
  const logic22 = useLogic();
  return /* @__PURE__ */ h("inputBox", {
    className: "block"
  }, /* @__PURE__ */ h("input", {
    "is-container": true,
    "has-decoration": true,
    "is-text": true,
    className: "block select-none outline-none border-0 px-2 py-1 rounded",
    autoFocus: props.focused,
    onFocus: logic22.onFocus,
    onBlur: logic22.onBlur,
    type: props.type,
    disabled: props.disabled,
    value: logic22.value
  }));
};
var designPatterns$9 = (props) => {
  return [
    [HOVER, ACTIVE, FOCUS, "disabled"],
    strokePatternMatrix$7({
      bdw: 1,
      border: [colors$8.grays[0], colors$8.primaries[1]]
    })
  ];
};
var styleRules$9 = (props) => {
};
function RenderToReactWithWrap$8(module) {
  const render6 = RenderToReact$9(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$9(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$8 = RenderToReactWithWrap$8(input_exports$1);
function InputBox() {
  const [val, setVal] = react.exports.useState("v0");
  return jsxRuntime.exports.jsxs("div", {
    style: {
      margin: "10px",
      color: "#999"
    },
    children: [" \u5F53\u524D\u503C: ", val, jsxRuntime.exports.jsx("br", {}), jsxRuntime.exports.jsx(Component$8, {
      value: val,
      onInput: (v2) => setVal(v2),
      onFocus: () => console.log("focus 1"),
      onBlur: () => console.log("blur 1")
    })]
  });
}
function InputBox2() {
  const [val, setVal] = react.exports.useState("v0");
  return jsxRuntime.exports.jsxs("div", {
    style: {
      margin: "10px",
      color: "#999"
    },
    children: [" \u5F53\u524D\u503C: ", val, jsxRuntime.exports.jsx("br", {}), " focused: true", jsxRuntime.exports.jsx("br", {}), jsxRuntime.exports.jsx(Component$8, {
      type: "number",
      value: val,
      onInput: (v2) => setVal(v2),
      focused: true
    })]
  });
}
function _createMdxContent$a(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Input \u8F93\u5165"
    }), "\n", jsxRuntime.exports.jsx(InputBox, {}), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u63A5\u6536\u7528\u6237\u8F93\u5165"
    }), "\n", jsxRuntime.exports.jsx(InputBox2, {}), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u6570\u5B57\u6846 type=number"
    }), "\n", jsxRuntime.exports.jsx(Component$8, {
      disabled: true,
      value: "disabled"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u4E0D\u53EF\u4EE5\u7684\u8F93\u5165\u6846"
    })]
  });
}
function MDXContent$a(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$a, props)
  })) : _createMdxContent$a(props);
}
var demo_default$8 = MDXContent$a;
var __defProp$7 = Object.defineProperty;
var __export$7 = (target, all) => {
  for (var name2 in all)
    __defProp$7(target, name2, { get: all[name2], enumerable: true });
};
var modal_exports = {};
__export$7(modal_exports, {
  config: () => config$1,
  designPattern: () => designPattern$4,
  layout: () => layout2$3,
  logic: () => logic2$3,
  styleRules: () => styleRules2$3
});
var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlined_default$1 = CloseOutlined$1;
var __assign$3 = function() {
  __assign$3 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$3.apply(this, arguments);
};
var defaultColors$3 = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6"
};
function renderIconDefinitionToSVGElement$3(icond, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof icond.icon === "function") {
    var placeholders = options.placeholders || defaultColors$3;
    return renderAbstractNodeToSVGElement$3(icond.icon(placeholders.primaryColor, placeholders.secondaryColor), options);
  }
  return renderAbstractNodeToSVGElement$3(icond.icon, options);
}
function renderAbstractNodeToSVGElement$3(node2, options) {
  var targetAttrs = node2.tag === "svg" ? __assign$3(__assign$3({}, node2.attrs), options.extraSVGAttrs || {}) : node2.attrs;
  var attrs = Object.keys(targetAttrs).reduce(function(acc, nextKey) {
    var key = nextKey;
    var value = targetAttrs[key];
    var token2 = key + '="' + value + '"';
    acc.push(token2);
    return acc;
  }, []);
  var attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  var children = (node2.children || []).map(function(child) {
    return renderAbstractNodeToSVGElement$3(child, options);
  }).join("");
  if (children && children.length) {
    return "<" + node2.tag + attrsToken + ">" + children + "</" + node2.tag + ">";
  }
  return "<" + node2.tag + attrsToken + " />";
}
var CloseOutlinedSVGString$1 = renderIconDefinitionToSVGElement$3(CloseOutlined_default$1, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap$3 = {
  outlined: CloseOutlinedSVGString$1
};
var Icon$3 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap$3[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var close_default$1 = Icon$3;
var Button_exports = {};
__export$7(Button_exports, {
  designPatterns: () => designPatterns$8,
  layout: () => layout$a,
  logic: () => logic$9,
  meta: () => meta$9,
  styleRules: () => styleRules$8
});
var colors$7 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$7(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$7.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$7.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$7.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$7.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$6(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$7.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$7.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$7.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$9;
var logic$9 = (props) => {
  return {
    count: 0
  };
};
var layout$a = (props) => {
  useLogic();
  return /* @__PURE__ */ h("buttonBox", {
    className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
    "is-container": true,
    "has-decoration": true,
    selected: false,
    disabled: props.disabled
  }, /* @__PURE__ */ h("span", {
    "is-text": true,
    selected: false,
    disabled: props.disabled,
    className: "block select-none",
    onClick: (e2) => {
      var _a;
      if (props.disabled)
        return;
      (_a = props.onClick) == null ? void 0 : _a.call(props, e2);
    }
  }, props.children));
};
var designPatterns$8 = (props) => {
  useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix$7({
          bg: [colors$7.primaries[1], colors$7.primaries[0], colors$7.primaries[2]],
          text: [colors$7.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix$7({
          bg: [colors$7.light, colors$7.grays[0], colors$7.grays[1]],
          text: [colors$7.text]
        })
      ];
    case "link":
      return [
        entry,
        strokePatternMatrix$6({
          border: [colors$7.primaries[1], colors$7.primaries[0], colors$7.primaries[2]],
          text: [colors$7.primaries[1], colors$7.primaries[0], colors$7.primaries[2]]
        })
      ];
    default:
      return [
        entry,
        strokePatternMatrix$6({
          bdw: 1,
          border: [colors$7.grays[1], colors$7.primaries[1], colors$7.primaries[2]],
          text: [colors$7.text, colors$7.primaries[1], colors$7.primaries[2]]
        })
      ];
  }
};
var styleRules$8 = (props, draft) => {
  useLogic();
  useLayout();
  return [];
};
var config$1 = () => ({});
var logic2$3 = (props) => {
};
var layout2$3 = (props) => {
  useLogic();
  const Button = useModule(Button_exports);
  return /* @__PURE__ */ h("modalBox", {
    className: "block fixed left-0 top-0 w-full h-full"
  }, /* @__PURE__ */ h("mask", {
    className: "fixed w-full h-full opacity-70 bg-black"
  }), /* @__PURE__ */ h("modalBody", {
    className: "block relative rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    style: { width: "520px" }
  }, /* @__PURE__ */ h("closeBox", {
    className: "block absolute top-4 right-4 cursor-pointer",
    onClick: props.onClose
  }, /* @__PURE__ */ h(close_default$1, {
    color: "rgba(0,0,0,.45)"
  })), /* @__PURE__ */ h("content", {
    className: "block p-6",
    style: { minHeight: "40px" }
  }, props.title ? /* @__PURE__ */ h("contentTitle", {
    className: "block mb-4 font-medium"
  }, props.title) : "", props.children), /* @__PURE__ */ h("footer", {
    className: "flex gap-2 p-6 flex-row-reverse"
  }, /* @__PURE__ */ h(Button, {
    type: "primary"
  }, "\u786E\u5B9A"), /* @__PURE__ */ h(Button, null, "\u53D6\u6D88"))));
};
var designPattern$4 = (props) => {
};
var styleRules2$3 = (props) => {
};
function RenderToReactWithWrap$7(module) {
  const render6 = RenderToReact$8(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$8(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$7 = RenderToReactWithWrap$7(modal_exports);
var ButtonComponent = RenderToReactWithWrap$7(Button_exports);
function Box() {
  const [show, setShow] = react.exports.useState(false);
  return jsxRuntime.exports.jsxs("div", {
    children: [jsxRuntime.exports.jsx(ButtonComponent, {
      onClick: () => setShow((v2) => !v2),
      children: "show modal"
    }), show ? jsxRuntime.exports.jsxs(Component$7, {
      title: "My Modal",
      onClose: (v2) => setShow(false),
      children: [jsxRuntime.exports.jsx("p", {
        children: " i am content row 1 "
      }), jsxRuntime.exports.jsx("p", {
        children: " i am content row 2 "
      })]
    }) : ""]
  });
}
function _createMdxContent$9(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Modal \u5F39\u6846"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u5B8C\u5168\u53D7\u63A7"
    }), "\n", jsxRuntime.exports.jsx(Box, {})]
  });
}
function MDXContent$9(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$9, props)
  })) : _createMdxContent$9(props);
}
var demo_default$7 = MDXContent$9;
var __defProp$6 = Object.defineProperty;
var __export$6 = (target, all) => {
  for (var name2 in all)
    __defProp$6(target, name2, { get: all[name2], enumerable: true });
};
var icons_exports = {};
__export$6(icons_exports, {
  layout: () => layout$9
});
var AccountBookFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 018.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z" } }] }, "name": "account-book", "theme": "filled" };
var AccountBookFilled_default = AccountBookFilled;
var AccountBookOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z" } }] }, "name": "account-book", "theme": "outlined" };
var AccountBookOutlined_default = AccountBookOutlined;
var AccountBookTwoTone = { "icon": function render(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v584h656V256H712v48zm-65.6 121.8l-89.3 164.1h49.1c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4v33.7h65.4c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4V752c0 4.4-3.6 8-8 8h-41.3c-4.4 0-8-3.6-8-8v-53.8h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8h65.1v-33.7h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8H467l-89.3-164c-2.1-3.9-.7-8.8 3.2-10.9 1.1-.7 2.5-1 3.8-1h46a8 8 0 017.1 4.4l73.4 145.4h2.8l73.4-145.4c1.3-2.7 4.1-4.4 7.1-4.4h45c4.5 0 8 3.6 7.9 8 0 1.3-.4 2.6-1 3.8z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584z", "fill": primaryColor } }] };
}, "name": "account-book", "theme": "twotone" };
var AccountBookTwoTone_default = AccountBookTwoTone;
var CheckCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
var CheckCircleFilled_default = CheckCircleFilled;
var CheckCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
var CheckCircleOutlined_default = CheckCircleOutlined;
var CheckCircleTwoTone = { "icon": function render2(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z", "fill": primaryColor } }] };
}, "name": "check-circle", "theme": "twotone" };
var CheckCircleTwoTone_default = CheckCircleTwoTone;
var CheckOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlined_default$1 = CheckOutlined$1;
var CheckSquareFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292a31.8 31.8 0 01-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-square", "theme": "filled" };
var CheckSquareFilled_default = CheckSquareFilled;
var CheckSquareOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "check-square", "theme": "outlined" };
var CheckSquareOutlined_default = CheckSquareOutlined;
var CheckSquareTwoTone = { "icon": function render3(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V184H184v656zm130-367.8h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H688c6.5 0 10.3 7.4 6.5 12.7l-210.6 292a31.8 31.8 0 01-51.7 0L307.5 484.9c-3.8-5.3 0-12.7 6.5-12.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M432.2 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7h-46.9c-10.3 0-19.9 5-25.9 13.3L458 584.3l-71.2-98.8c-6-8.4-15.7-13.3-25.9-13.3H314c-6.5 0-10.3 7.4-6.5 12.7l124.7 172.8z", "fill": primaryColor } }] };
}, "name": "check-square", "theme": "twotone" };
var CheckSquareTwoTone_default = CheckSquareTwoTone;
var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
var CloseCircleFilled_default = CloseCircleFilled;
var CloseCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" } }, { "tag": "path", "attrs": { "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "close-circle", "theme": "outlined" };
var CloseCircleOutlined_default = CloseCircleOutlined;
var CloseCircleTwoTone = { "icon": function render4(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z", "fill": primaryColor } }] };
}, "name": "close-circle", "theme": "twotone" };
var CloseCircleTwoTone_default = CloseCircleTwoTone;
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlined_default = CloseOutlined;
var CloseSquareFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 01354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z" } }] }, "name": "close-square", "theme": "filled" };
var CloseSquareFilled_default = CloseSquareFilled;
var CloseSquareOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 00354 671z" } }, { "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "close-square", "theme": "outlined" };
var CloseSquareOutlined_default = CloseSquareOutlined;
var CloseSquareTwoTone = { "icon": function render5(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V184H184v656zm163.9-473.9A7.95 7.95 0 01354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M354 671h58.9c4.8 0 9.3-2.1 12.3-5.7L512 561.8l86.8 103.5c3.1 3.6 7.6 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.3-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.8 0-9.3 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3.1-3.6-7.6-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 00354 671z", "fill": primaryColor } }] };
}, "name": "close-square", "theme": "twotone" };
var CloseSquareTwoTone_default = CloseSquareTwoTone;
var Loading3QuartersOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" } }] }, "name": "loading-3-quarters", "theme": "outlined" };
var Loading3QuartersOutlined_default$1 = Loading3QuartersOutlined$1;
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
var LoadingOutlined_default = LoadingOutlined;
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
var defaultColors$2 = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6"
};
function renderIconDefinitionToSVGElement$2(icond, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof icond.icon === "function") {
    var placeholders = options.placeholders || defaultColors$2;
    return renderAbstractNodeToSVGElement$2(icond.icon(placeholders.primaryColor, placeholders.secondaryColor), options);
  }
  return renderAbstractNodeToSVGElement$2(icond.icon, options);
}
function renderAbstractNodeToSVGElement$2(node2, options) {
  var targetAttrs = node2.tag === "svg" ? __assign$2(__assign$2({}, node2.attrs), options.extraSVGAttrs || {}) : node2.attrs;
  var attrs = Object.keys(targetAttrs).reduce(function(acc, nextKey) {
    var key = nextKey;
    var value = targetAttrs[key];
    var token2 = key + '="' + value + '"';
    acc.push(token2);
    return acc;
  }, []);
  var attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  var children = (node2.children || []).map(function(child) {
    return renderAbstractNodeToSVGElement$2(child, options);
  }).join("");
  if (children && children.length) {
    return "<" + node2.tag + attrsToken + ">" + children + "</" + node2.tag + ">";
  }
  return "<" + node2.tag + attrsToken + " />";
}
var AccountBookFilledSVGString = renderIconDefinitionToSVGElement$2(
  AccountBookFilled_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var AccountBookOutlinedSVGString = renderIconDefinitionToSVGElement$2(
  AccountBookOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var AccountBookTwoToneSVGString = renderIconDefinitionToSVGElement$2(
  AccountBookTwoTone_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap$2 = {
  filled: AccountBookFilledSVGString,
  outlined: AccountBookOutlinedSVGString,
  twoTone: AccountBookTwoToneSVGString
};
var Icon$2 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap$2[props.type || "filled"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var account_book_default = Icon$2;
var LoadingOutlinedSVGString = renderIconDefinitionToSVGElement$2(
  LoadingOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap2 = {
  outlined: LoadingOutlinedSVGString
};
var Icon2 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap2[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var loading_default = Icon2;
var Loading3QuartersOutlinedSVGString$1 = renderIconDefinitionToSVGElement$2(
  Loading3QuartersOutlined_default$1,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap3 = {
  outlined: Loading3QuartersOutlinedSVGString$1
};
var Icon3 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap3[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var loading3_quarters_default$1 = Icon3;
var CloseOutlinedSVGString = renderIconDefinitionToSVGElement$2(CloseOutlined_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap4 = {
  outlined: CloseOutlinedSVGString
};
var Icon4 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap4[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var close_default = Icon4;
var CloseCircleFilledSVGString = renderIconDefinitionToSVGElement$2(
  CloseCircleFilled_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CloseCircleOutlinedSVGString = renderIconDefinitionToSVGElement$2(
  CloseCircleOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CloseCircleTwoToneSVGString = renderIconDefinitionToSVGElement$2(
  CloseCircleTwoTone_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap5 = {
  filled: CloseCircleFilledSVGString,
  outlined: CloseCircleOutlinedSVGString,
  twoTone: CloseCircleTwoToneSVGString
};
var Icon5 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap5[props.type || "filled"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var close_circle_default = Icon5;
var CloseSquareFilledSVGString = renderIconDefinitionToSVGElement$2(
  CloseSquareFilled_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CloseSquareOutlinedSVGString = renderIconDefinitionToSVGElement$2(
  CloseSquareOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CloseSquareTwoToneSVGString = renderIconDefinitionToSVGElement$2(
  CloseSquareTwoTone_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap6 = {
  filled: CloseSquareFilledSVGString,
  outlined: CloseSquareOutlinedSVGString,
  twoTone: CloseSquareTwoToneSVGString
};
var Icon6 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap6[props.type || "filled"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var close_square_default = Icon6;
var CheckOutlinedSVGString$1 = renderIconDefinitionToSVGElement$2(CheckOutlined_default$1, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap7 = {
  outlined: CheckOutlinedSVGString$1
};
var Icon7 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap7[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var check_default$1 = Icon7;
var CheckCircleFilledSVGString = renderIconDefinitionToSVGElement$2(
  CheckCircleFilled_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CheckCircleOutlinedSVGString = renderIconDefinitionToSVGElement$2(
  CheckCircleOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CheckCircleTwoToneSVGString = renderIconDefinitionToSVGElement$2(
  CheckCircleTwoTone_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap8 = {
  filled: CheckCircleFilledSVGString,
  outlined: CheckCircleOutlinedSVGString,
  twoTone: CheckCircleTwoToneSVGString
};
var Icon8 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap8[props.type || "filled"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var check_circle_default = Icon8;
var CheckSquareFilledSVGString = renderIconDefinitionToSVGElement$2(
  CheckSquareFilled_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CheckSquareOutlinedSVGString = renderIconDefinitionToSVGElement$2(
  CheckSquareOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var CheckSquareTwoToneSVGString = renderIconDefinitionToSVGElement$2(
  CheckSquareTwoTone_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap9 = {
  filled: CheckSquareFilledSVGString,
  outlined: CheckSquareOutlinedSVGString,
  twoTone: CheckSquareTwoToneSVGString
};
var Icon9 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap9[props.type || "filled"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var check_square_default = Icon9;
var layout$9 = (props) => {
  return /* @__PURE__ */ h("iconsBox", {
    className: "block"
  }, /* @__PURE__ */ h("row", {
    className: "flex gap-2 flex-wrap",
    style: { width: "400px" }
  }, /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(account_book_default, {
    size: 24,
    color: "blue",
    type: "outlined"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "AccountBookFilled")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(loading_default, {
    size: 24,
    color: "black",
    className: "animate-spin"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "LoadingIcon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(loading3_quarters_default$1, {
    size: 24,
    color: "black",
    className: "animate-spin"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "Loading3Icon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(close_default, {
    size: 24,
    color: "black"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "CloseIcon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(close_square_default, {
    size: 24,
    color: "black"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "CloseSquareIcon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(close_circle_default, {
    size: 24,
    color: "black"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "CloseCircleIcon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(check_default$1, {
    size: 24,
    color: "black"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "CheckIcon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(check_circle_default, {
    size: 24,
    color: "black"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "CheckCircleIcon")), /* @__PURE__ */ h("div", {
    className: "m-2 flex flex-col align-center items-center"
  }, /* @__PURE__ */ h(check_square_default, {
    size: 24,
    color: "black"
  }), /* @__PURE__ */ h("p", {
    className: "mt-1"
  }, "CheckSquareIcon"))));
};
function RenderToReactWithWrap$6(module) {
  const render6 = RenderToReact$7(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$7(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$6 = RenderToReactWithWrap$6(icons_exports);
function _createMdxContent$8(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    strong: "strong"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Icons \u56FE\u6807"
    }), "\n", jsxRuntime.exports.jsxs(_components.p, {
      children: ["\u6765\u6E90\u4E8E ", jsxRuntime.exports.jsx(_components.strong, {
        children: "@ant-design/icons-svg"
      })]
    }), "\n", jsxRuntime.exports.jsx(Component$6, {})]
  });
}
function MDXContent$8(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$8, props)
  })) : _createMdxContent$8(props);
}
var demo_default$6 = MDXContent$8;
var __defProp$5 = Object.defineProperty;
var __export$5 = (target, all) => {
  for (var name2 in all)
    __defProp$5(target, name2, { get: all[name2], enumerable: true });
};
var loading_button_exports = {};
__export$5(loading_button_exports, {
  designPattern: () => designPattern$3,
  designPatterns: () => designPatterns2$1,
  layout: () => layout2$2,
  logic: () => logic2$2,
  meta: () => meta2$2,
  override: () => override,
  styleRules: () => styleRules2$2
});
var button_exports = {};
__export$5(button_exports, {
  designPatterns: () => designPatterns$7,
  layout: () => layout$8,
  logic: () => logic$8,
  meta: () => meta$8,
  styleRules: () => styleRules$7
});
var colors$6 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$6(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$6.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$6.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$6.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$6.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$5(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$6.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$6.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$6.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$8;
var logic$8 = (props) => {
  return {
    count: 0
  };
};
var layout$8 = (props) => {
  useLogic();
  return /* @__PURE__ */ h("buttonBox", {
    className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
    "is-container": true,
    "has-decoration": true,
    selected: false,
    disabled: props.disabled
  }, /* @__PURE__ */ h("span", {
    "is-text": true,
    selected: false,
    disabled: props.disabled,
    className: "block select-none",
    onClick: (e2) => {
      var _a;
      if (props.disabled)
        return;
      (_a = props.onClick) == null ? void 0 : _a.call(props, e2);
    }
  }, props.children));
};
var designPatterns$7 = (props) => {
  useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix$6({
          bg: [colors$6.primaries[1], colors$6.primaries[0], colors$6.primaries[2]],
          text: [colors$6.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix$6({
          bg: [colors$6.light, colors$6.grays[0], colors$6.grays[1]],
          text: [colors$6.text]
        })
      ];
    case "link":
      return [
        entry,
        strokePatternMatrix$5({
          border: [colors$6.primaries[1], colors$6.primaries[0], colors$6.primaries[2]],
          text: [colors$6.primaries[1], colors$6.primaries[0], colors$6.primaries[2]]
        })
      ];
    default:
      return [
        entry,
        strokePatternMatrix$5({
          bdw: 1,
          border: [colors$6.grays[1], colors$6.primaries[1], colors$6.primaries[2]],
          text: [colors$6.text, colors$6.primaries[1], colors$6.primaries[2]]
        })
      ];
  }
};
var styleRules$7 = (props, draft) => {
  useLogic();
  useLayout();
  return [];
};
var Loading3QuartersOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" } }] }, "name": "loading-3-quarters", "theme": "outlined" };
var Loading3QuartersOutlined_default = Loading3QuartersOutlined;
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var defaultColors$1 = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6"
};
function renderIconDefinitionToSVGElement$1(icond, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof icond.icon === "function") {
    var placeholders = options.placeholders || defaultColors$1;
    return renderAbstractNodeToSVGElement$1(icond.icon(placeholders.primaryColor, placeholders.secondaryColor), options);
  }
  return renderAbstractNodeToSVGElement$1(icond.icon, options);
}
function renderAbstractNodeToSVGElement$1(node2, options) {
  var targetAttrs = node2.tag === "svg" ? __assign$1(__assign$1({}, node2.attrs), options.extraSVGAttrs || {}) : node2.attrs;
  var attrs = Object.keys(targetAttrs).reduce(function(acc, nextKey) {
    var key = nextKey;
    var value = targetAttrs[key];
    var token2 = key + '="' + value + '"';
    acc.push(token2);
    return acc;
  }, []);
  var attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  var children = (node2.children || []).map(function(child) {
    return renderAbstractNodeToSVGElement$1(child, options);
  }).join("");
  if (children && children.length) {
    return "<" + node2.tag + attrsToken + ">" + children + "</" + node2.tag + ">";
  }
  return "<" + node2.tag + attrsToken + " />";
}
var Loading3QuartersOutlinedSVGString = renderIconDefinitionToSVGElement$1(
  Loading3QuartersOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap$1 = {
  outlined: Loading3QuartersOutlinedSVGString
};
var Icon$1 = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap$1[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var loading3_quarters_default = Icon$1;
var LoadingButton = overrideModule(button_exports, {
  layout(props, layout32) {
    layout32.buttonBox.span.props.className += " flex justify-center items-center";
  },
  patchLayout(props, layout32) {
    return [
      {
        op: CommandOP.addChild,
        condition: !!props.loading,
        parent: layout32.buttonBox.span,
        child: /* @__PURE__ */ h(loading3_quarters_default, {
          size: 16,
          className: "animate-spin align-middle ml-1"
        })
      }
    ];
  }
});
var meta2$2 = LoadingButton.meta;
var override = LoadingButton.override;
var layout2$2 = LoadingButton.layout;
var logic2$2 = LoadingButton.logic;
var designPattern$3 = LoadingButton.designPattern;
var designPatterns2$1 = LoadingButton.designPatterns;
var styleRules2$2 = LoadingButton.styleRules;
function RenderToReactWithWrap$5(module) {
  const render6 = RenderToReact$6(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$6(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$5 = RenderToReactWithWrap$5(loading_button_exports);
function _createMdxContent$7(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "LoadingButton \u6309\u94AE"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u5E26loading\u6548\u679C"
    }), "\n", jsxRuntime.exports.jsx(Component$5, {
      loading: true,
      type: "primary",
      onClick: () => console.log("click on primary"),
      children: "Primary Button"
    }), "\n", jsxRuntime.exports.jsx(Component$5, {
      loading: true,
      type: "text",
      children: "Text Button"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u4E0D\u5E26loading"
    }), "\n", jsxRuntime.exports.jsx(Component$5, {
      type: "link",
      children: "Link Button"
    }), "\n", jsxRuntime.exports.jsx(Component$5, {
      children: "Default Button"
    })]
  });
}
function MDXContent$7(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$7, props)
  })) : _createMdxContent$7(props);
}
var demo_default$5 = MDXContent$7;
var __defProp$4 = Object.defineProperty;
var __export$4 = (target, all) => {
  for (var name2 in all)
    __defProp$4(target, name2, { get: all[name2], enumerable: true });
};
var checkbox_exports = {};
__export$4(checkbox_exports, {
  designPatterns: () => designPatterns$6,
  layout: () => layout$7,
  logic: () => logic$7,
  meta: () => meta$7,
  propTypes: () => propTypes$4
});
var colors$5 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$5(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$5.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$5.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$5.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$5.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$4(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$5.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$5.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$5.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlined_default = CheckOutlined;
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var defaultColors = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6"
};
function renderIconDefinitionToSVGElement(icond, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof icond.icon === "function") {
    var placeholders = options.placeholders || defaultColors;
    return renderAbstractNodeToSVGElement(icond.icon(placeholders.primaryColor, placeholders.secondaryColor), options);
  }
  return renderAbstractNodeToSVGElement(icond.icon, options);
}
function renderAbstractNodeToSVGElement(node2, options) {
  var targetAttrs = node2.tag === "svg" ? __assign(__assign({}, node2.attrs), options.extraSVGAttrs || {}) : node2.attrs;
  var attrs = Object.keys(targetAttrs).reduce(function(acc, nextKey) {
    var key = nextKey;
    var value = targetAttrs[key];
    var token2 = key + '="' + value + '"';
    acc.push(token2);
    return acc;
  }, []);
  var attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  var children = (node2.children || []).map(function(child) {
    return renderAbstractNodeToSVGElement(child, options);
  }).join("");
  if (children && children.length) {
    return "<" + node2.tag + attrsToken + ">" + children + "</" + node2.tag + ">";
  }
  return "<" + node2.tag + attrsToken + " />";
}
var CheckOutlinedSVGString = renderIconDefinitionToSVGElement(CheckOutlined_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap = {
  outlined: CheckOutlinedSVGString
};
var Icon = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var check_default = Icon;
var meta$7;
var propTypes$4 = {
  value: PropTypes.signal.isRequired.default(() => signal(false))
};
var logic$7 = (props) => {
  const value = props.value;
  after(() => {
    console.log("value:", value());
  }, [value]);
  function toggle() {
    var _a;
    if (props.disabled)
      return;
    value((v2) => !v2);
    (_a = props.onChange) == null ? void 0 : _a.call(props, value());
  }
  return {
    value,
    toggle
  };
};
var layout$7 = (props) => {
  const logic22 = useLogic();
  return /* @__PURE__ */ h("checkBoxContainer", {
    className: "relative flex items-center",
    onClick: logic22.toggle
  }, /* @__PURE__ */ h("checkBox", {
    className: "relative block mr-2 rounded ",
    style: { width: "16px", height: "16px" },
    "is-container": true,
    "has-decoration": true,
    selected: logic22.value(),
    disabled: props.disabled
  }, /* @__PURE__ */ h("input", {
    type: "checkbox",
    readOnly: true,
    checked: logic22.value(),
    className: "opacity-0 absolute w-full h-full"
  }), /* @__PURE__ */ h("span", {
    "is-text": true,
    selected: logic22.value(),
    disabled: props.disabled,
    className: "relative z-10 w-full h-full flex items-center justify-center"
  }, logic22.value() ? /* @__PURE__ */ h(check_default, {
    size: 12
  }) : "")), /* @__PURE__ */ h("checkBoxLabel", {
    className: "select-none"
  }, props.children));
};
var designPatterns$6 = (props) => {
  const logicResult = useLogic();
  const arr = [HOVER, ACTIVE, "selected", "disabled"];
  if (logicResult.value()) {
    return [
      arr,
      blockPatternMatrix$5(
        {
          bg: [colors$5.primaries[1], colors$5.primaries[0], colors$5.primaries[2], colors$5.primaries[0]],
          text: [colors$5.light, colors$5.light, colors$5.light, colors$5.light]
        }
      )
    ];
  } else {
    return [
      arr,
      strokePatternMatrix$4({
        bdw: 1,
        border: [colors$5.grays[1], colors$5.primaries[1], colors$5.primaries[2]],
        text: [colors$5.text, colors$5.primaries[1], colors$5.primaries[2]]
      })
    ];
  }
};
function RenderToReactWithWrap$4(module) {
  const render6 = RenderToReact$5(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$5(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$4 = RenderToReactWithWrap$4(checkbox_exports);
function _createMdxContent$6(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Checkbox \u591A\u9009\u6846"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u57FA\u672C\u4F7F\u7528"
    }), "\n", jsxRuntime.exports.jsx(Component$4, {
      children: " \u591A\u9009\u9879 "
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u7981\u6B62\u6837\u5F0F"
    }), "\n", jsxRuntime.exports.jsx(Component$4, {
      disabled: true,
      children: " \u7981\u6B62\u9009\u9879 "
    }), "\n", jsxRuntime.exports.jsx(Component$4, {
      disabled: true,
      value: true,
      children: " \u7981\u6B62\u5F00\u542F "
    })]
  });
}
function MDXContent$6(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$6, props)
  })) : _createMdxContent$6(props);
}
var demo_default$4 = MDXContent$6;
var __defProp$3 = Object.defineProperty;
var __export$3 = (target, all) => {
  for (var name2 in all)
    __defProp$3(target, name2, { get: all[name2], enumerable: true });
};
var radio_exports$1 = {};
__export$3(radio_exports$1, {
  designPatterns: () => designPatterns$5,
  layout: () => layout$6,
  logic: () => logic$6,
  meta: () => meta$6,
  styleRules: () => styleRules$6
});
var colors$4 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$4(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$4.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$4.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$4.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$4.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$3(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$4.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$4.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$4.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$6;
var logic$6 = (props) => {
  return {};
};
var layout$6 = (props) => {
  useLogic();
  return /* @__PURE__ */ h("radioContainer", {
    className: "relative flex items-center cursor-pointer",
    onClick: () => {
      var _a;
      return !props.disabled && ((_a = props.onChange) == null ? void 0 : _a.call(props, !props.selected));
    }
  }, /* @__PURE__ */ h("radioBox", {
    className: "relative block mr-2 rounded-full ",
    style: { width: "16px", height: "16px" },
    "is-container": true,
    "has-decoration": true,
    selected: props.selected,
    disabled: props.disabled
  }, /* @__PURE__ */ h("input", {
    type: "checkbox",
    readOnly: true,
    checked: props.selected,
    className: "opacity-0 absolute w-full h-full"
  }), /* @__PURE__ */ h("span", {
    className: "relative z-10 w-full h-full flex items-center justify-center"
  }, props.selected ? /* @__PURE__ */ h("circle", {
    "is-fillText": true,
    selected: props.selected,
    disabled: props.disabled,
    className: "block rounded-full",
    style: { width: "6px", height: "6px" }
  }) : "")), /* @__PURE__ */ h("checkBoxLabel", {
    className: "select-none"
  }, props.children));
};
var styleRules$6 = (props, layout22) => {
  return [];
};
var designPatterns$5 = (props) => {
  useLogic();
  const arr = [HOVER, ACTIVE, "selected", "disabled"];
  if (props.selected) {
    return [
      arr,
      blockPatternMatrix$4(
        {
          bg: [colors$4.primaries[1], colors$4.primaries[0], colors$4.primaries[2], colors$4.primaries[0]],
          text: [colors$4.light, colors$4.light, colors$4.light, colors$4.light]
        }
      )
    ];
  }
  return [
    arr,
    strokePatternMatrix$3({
      bdw: 1,
      border: [colors$4.grays[1], colors$4.primaries[1], colors$4.primaries[2]],
      text: [colors$4.text, colors$4.primaries[1], colors$4.primaries[2]]
    })
  ];
};
function RenderToReactWithWrap$3(module) {
  const render6 = RenderToReact$4(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$4(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$3 = RenderToReactWithWrap$3(radio_exports$1);
function _createMdxContent$5(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Radio \u5355\u9009\u6846"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u5B8C\u5168\u53D7\u63A7"
    }), "\n", jsxRuntime.exports.jsx(Component$3, {
      children: " \u5355\u9009\u9879 "
    }), "\n", "\n", "\n", jsxRuntime.exports.jsx(Component$3, {
      selected: true,
      children: " \u5355\u9009\u9879 "
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u7981\u6B62\u6837\u5F0F"
    }), "\n", jsxRuntime.exports.jsx(Component$3, {
      disabled: true,
      children: " \u5355\u9009\u9879\u7981\u6B62 "
    }), "\n", jsxRuntime.exports.jsx(Component$3, {
      disabled: true,
      selected: true,
      children: " \u5355\u9879\u9009\u9009\u4E2D "
    })]
  });
}
function MDXContent$5(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$5, props)
  })) : _createMdxContent$5(props);
}
var demo_default$3 = MDXContent$5;
var __defProp$2 = Object.defineProperty;
var __export$2 = (target, all) => {
  for (var name2 in all)
    __defProp$2(target, name2, { get: all[name2], enumerable: true });
};
var radio_group_exports = {};
__export$2(radio_group_exports, {
  designPattern: () => designPattern$2,
  layout: () => layout2$1,
  logic: () => logic2$1,
  meta: () => meta2$1,
  propTypes: () => propTypes$3,
  styleRules: () => styleRules2$1
});
var radio_exports = {};
__export$2(radio_exports, {
  designPatterns: () => designPatterns$4,
  layout: () => layout$5,
  logic: () => logic$5,
  meta: () => meta$5,
  styleRules: () => styleRules$5
});
var colors$3 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$3(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$3.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$3.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$3.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$3.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$2(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$3.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$3.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$3.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$5;
var logic$5 = (props) => {
  return {};
};
var layout$5 = (props) => {
  useLogic();
  return /* @__PURE__ */ h("radioContainer", {
    className: "relative flex items-center cursor-pointer",
    onClick: () => {
      var _a;
      return !props.disabled && ((_a = props.onChange) == null ? void 0 : _a.call(props, !props.selected));
    }
  }, /* @__PURE__ */ h("radioBox", {
    className: "relative block mr-2 rounded-full ",
    style: { width: "16px", height: "16px" },
    "is-container": true,
    "has-decoration": true,
    selected: props.selected,
    disabled: props.disabled
  }, /* @__PURE__ */ h("input", {
    type: "checkbox",
    readOnly: true,
    checked: props.selected,
    className: "opacity-0 absolute w-full h-full"
  }), /* @__PURE__ */ h("span", {
    className: "relative z-10 w-full h-full flex items-center justify-center"
  }, props.selected ? /* @__PURE__ */ h("circle", {
    "is-fillText": true,
    selected: props.selected,
    disabled: props.disabled,
    className: "block rounded-full",
    style: { width: "6px", height: "6px" }
  }) : "")), /* @__PURE__ */ h("checkBoxLabel", {
    className: "select-none"
  }, props.children));
};
var styleRules$5 = (props, layout32) => {
  return [];
};
var designPatterns$4 = (props) => {
  useLogic();
  const arr = [HOVER, ACTIVE, "selected", "disabled"];
  if (props.selected) {
    return [
      arr,
      blockPatternMatrix$3(
        {
          bg: [colors$3.primaries[1], colors$3.primaries[0], colors$3.primaries[2], colors$3.primaries[0]],
          text: [colors$3.light, colors$3.light, colors$3.light, colors$3.light]
        }
      )
    ];
  }
  return [
    arr,
    strokePatternMatrix$2({
      bdw: 1,
      border: [colors$3.grays[1], colors$3.primaries[1], colors$3.primaries[2]],
      text: [colors$3.text, colors$3.primaries[1], colors$3.primaries[2]]
    })
  ];
};
var meta2$1;
var propTypes$3 = {
  value: PropTypes.signal.isRequired.default(() => signal(""))
};
var logic2$1 = (props) => {
  const value = props.value;
  function changeValue(v2) {
    if (props.onChange) {
      props.onChange(v2);
    } else {
      value(v2);
    }
  }
  return {
    changeValue,
    value
  };
};
var layout2$1 = (props) => {
  const logic32 = useLogic();
  const Radio = useModule(radio_exports);
  const currentValue = logic32.value();
  return /* @__PURE__ */ h("radioGroupContainer", null, props.options.map((option, index2) => {
    return /* @__PURE__ */ h(Radio, {
      key: option.label,
      selected: currentValue === option.value,
      onChange: () => {
        logic32.changeValue(option.value);
      }
    }, option.label);
  }));
};
var styleRules2$1 = (props, layout32) => {
  return [];
};
var designPattern$2 = (props, layout32) => {
  useLogic();
  return {};
};
function RenderToReactWithWrap$2(module) {
  const render6 = RenderToReact$3(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$3(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$2 = RenderToReactWithWrap$2(radio_group_exports);
function ComponentBox() {
  const [val, setVal] = react.exports.useState("A");
  return jsxRuntime.exports.jsxs("div", {
    style: {
      margin: "10px"
    },
    children: [" \u5F53\u524D\u9009\u62E9\u503C\uFF1A", val, jsxRuntime.exports.jsx("br", {}), jsxRuntime.exports.jsx(Component$2, {
      name: "char",
      onChange: (v2) => setVal(v2),
      value: val,
      options: [{
        label: "A",
        value: "A"
      }, {
        label: "B",
        value: "B"
      }, {
        label: "C",
        value: "C"
      }]
    })]
  });
}
function _createMdxContent$4(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "RadioGroup \u5355\u9009\u6846\u7EC4"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u591A\u4E2A\u9009\u9879"
    }), "\n", jsxRuntime.exports.jsx(ComponentBox, {})]
  });
}
function MDXContent$4(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$4, props)
  })) : _createMdxContent$4(props);
}
var demo_default$2 = MDXContent$4;
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __export$1 = (target, all) => {
  for (var name2 in all)
    __defProp$1(target, name2, { get: all[name2], enumerable: true });
};
var select_exports = {};
__export$1(select_exports, {
  designPattern: () => designPattern2,
  layout: () => layout4,
  logic: () => logic4,
  meta: () => meta4,
  name: () => name,
  propTypes: () => propTypes3,
  styleRules: () => styleRules4
});
var input_exports = {};
__export$1(input_exports, {
  config: () => config,
  designPatterns: () => designPatterns$3,
  layout: () => layout$4,
  logic: () => logic$4,
  meta: () => meta$4,
  propTypes: () => propTypes$2,
  styleRules: () => styleRules$4
});
var colors$2 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$2(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$2.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$2.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$2.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$2.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix$1(colors2) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors$2.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors$2.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors$2.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$4;
var propTypes$2 = {
  value: PropTypes.signal.isRequired
};
var config = () => ({});
var logic$4 = (props) => {
  const value = props.value;
  after(() => {
    var _a;
    (_a = props.onInput) == null ? void 0 : _a.call(props, value());
  }, [value]);
  function onFocus() {
    var _a;
    (_a = props.onFocus) == null ? void 0 : _a.call(props);
  }
  function onBlur() {
    var _a;
    (_a = props.onBlur) == null ? void 0 : _a.call(props);
  }
  return {
    onFocus,
    onBlur,
    value
  };
};
var layout$4 = (props) => {
  const logic5 = useLogic();
  return /* @__PURE__ */ h("inputBox", {
    className: "block"
  }, /* @__PURE__ */ h("input", {
    "is-container": true,
    "has-decoration": true,
    "is-text": true,
    className: "block select-none outline-none border-0 px-2 py-1 rounded",
    autoFocus: props.focused,
    onFocus: logic5.onFocus,
    onBlur: logic5.onBlur,
    type: props.type,
    disabled: props.disabled,
    value: logic5.value
  }));
};
var designPatterns$3 = (props) => {
  return [
    [HOVER, ACTIVE, FOCUS, "disabled"],
    strokePatternMatrix$1({
      bdw: 1,
      border: [colors$2.grays[0], colors$2.primaries[1]]
    })
  ];
};
var styleRules$4 = (props) => {
};
var menu_exports = {};
__export$1(menu_exports, {
  designPattern: () => designPattern$1,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta3,
  propTypes: () => propTypes2,
  styleRules: () => styleRules3
});
var menu_item_exports = {};
__export$1(menu_item_exports, {
  designPatterns: () => designPatterns2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  styleRules: () => styleRules2
});
var meta2;
var logic2 = (props) => {
  return {};
};
var layout2 = (props) => {
  useLogic();
  return /* @__PURE__ */ h("menuItem", {
    "is-container": true,
    "is-text": true,
    selected: props.selected,
    disabled: props.disabled,
    className: "block p-2 px-3 rounded-lg"
  }, /* @__PURE__ */ h("span", null, props.label));
};
var designPatterns2 = (props) => {
  useLogic();
  return [
    [HOVER, ACTIVE, "selected", "disabled"],
    blockPatternMatrix$2({
      bg: [colors$2.none, colors$2.grays[1], colors$2.primaries[2], colors$2.primaries[1]],
      text: [colors$2.text, colors$2.light, colors$2.nones[0], colors$2.nones[1]]
    })
  ];
};
var styleRules2 = (props) => {
  return [];
};
var meta3;
var propTypes2 = {
  current: PropTypes.signal.isRequired.default(() => signal("")),
  items: PropTypes.signal.isRequired
};
var logic3 = (props) => {
  const currentKey = props.current;
  const select = (item) => {
    var _a;
    const curKey = item.key;
    currentKey(() => curKey);
    items((draft) => {
      draft.forEach((di2) => {
        var _a2;
        di2.selected = di2.key === curKey;
        (_a2 = di2.children) == null ? void 0 : _a2.forEach((dci) => {
          dci.selected = dci.key === curKey;
        });
      });
    });
    (_a = props.onClick) == null ? void 0 : _a.call(props, item);
  };
  const items = props.items;
  return {
    items,
    currentKey,
    select
  };
};
var layout3 = (props) => {
  const logic5 = useLogic();
  const MenuItemFunc = useModule(menu_item_exports);
  return /* @__PURE__ */ h("menuBox", {
    className: "block border-slate-300"
  }, /* @__PURE__ */ h("ul", {
    className: "block"
  }, logic5.items().map((item) => {
    const isSelected = item.selected;
    let element = MenuItemFunc(__spreadProps(__spreadValues({}, item), {
      hasItemChildren: !!item.children,
      selected: isSelected,
      override: {
        layout(props2, jsonTree) {
          var _a, _b;
          if (props2.hasItemChildren) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
            jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
            (_b = (_a = jsonTree.menuItem).insert) == null ? void 0 : _b.call(_a, /* @__PURE__ */ h("spanIcon", {
              key: "tag",
              "is-text": true,
              className: "mx-2"
            }, ">"));
          }
          return [];
        }
      }
    }));
    return /* @__PURE__ */ h("menuItemBox", {
      "data-name": "menu-item-box",
      key: item.key
    }, /* @__PURE__ */ h("div", {
      className: "p-1",
      onMouseDown: () => {
        logic5.select(item);
      }
    }, element), item.children && /* @__PURE__ */ h("subMenuItemBox", {
      className: "block p-1 bg-slate-200"
    }, item.children.map((subItem) => {
      const isSubSelected = subItem.selected;
      return /* @__PURE__ */ h("subMenuItem", {
        className: "block m-1",
        onClick: () => logic5.select(subItem)
      }, MenuItemFunc(__spreadProps(__spreadValues({}, subItem), { selected: isSubSelected, override: {
        layout(props2, jsonTree) {
          jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`;
        }
      } })));
    })));
  })));
};
var designPattern$1 = (props) => {
};
var styleRules3 = (props) => {
  return [];
};
var name = "Select";
var meta4;
var propTypes3 = {
  value: PropTypes.signal.isRequired.default(() => signal(""))
};
var logic4 = (props) => {
  const current = props.value;
  const focused = signal(false);
  const optionItems = signal((props.options || []).map((option) => {
    return {
      label: option.label,
      key: option.value,
      selected: current() === option.value
    };
  }));
  const selectItem = action(function(item) {
    var _a;
    current(() => item.key);
    focused(() => false);
    (_a = props.onChange) == null ? void 0 : _a.call(props, item.key);
  });
  after(() => {
  }, [current]);
  return {
    optionItems,
    current,
    selectItem,
    focused
  };
};
var layout4 = (props) => {
  const {
    optionItems,
    current,
    selectItem,
    focused
  } = useLogic();
  const Input = useModule(input_exports);
  const Menu2 = useModule(menu_exports);
  return /* @__PURE__ */ h("selectContainer", {
    className: "block relative rounded"
  }, /* @__PURE__ */ h(Input, {
    disabled: props.disabled,
    value: current,
    onFocus: () => focused(true),
    onBlur: () => focused(false)
  }), /* @__PURE__ */ h("optionList", {
    if: optionItems().length > 0 && focused(),
    className: "block border absolute z-10 left-0 shadow rounded p-1 w-full bg-white",
    style: { top: "40px" }
  }, /* @__PURE__ */ h(Menu2, {
    current,
    items: optionItems,
    onClick: selectItem
  })));
};
var styleRules4 = (props, layout5) => {
  layout5.selectContainer.Input.inputBox.input;
  return [];
};
var designPattern2 = (props, layout5) => {
  useLogic();
  return {};
};
function RenderToReactWithWrap$1(module) {
  const render6 = RenderToReact$2(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$2(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component$1 = RenderToReactWithWrap$1(select_exports);
function SelectBox1() {
  const [val, setVal] = react.exports.useState("A");
  return jsxRuntime.exports.jsxs("div", {
    style: {
      margin: "10px"
    },
    children: [" \u5F53\u524D\u9009\u62E9\u503C\uFF1A", val, jsxRuntime.exports.jsx("br", {}), jsxRuntime.exports.jsx(Component$1, {
      value: val,
      onChange: (v2) => setVal(v2),
      options: [{
        value: "A",
        label: "A"
      }, {
        value: "B",
        label: "B"
      }, {
        value: "C",
        label: "C"
      }]
    })]
  });
}
function _createMdxContent$3(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Select \u4E0B\u62C9\u9009\u62E9\u5668"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u57FA\u672C\u4F7F\u7528"
    }), "\n", jsxRuntime.exports.jsx(SelectBox1, {}), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u7981\u6B62\u6837\u5F0F"
    }), "\n", jsxRuntime.exports.jsx(Component$1, {
      disabled: true,
      value: "Disable Select"
    })]
  });
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$3, props)
  })) : _createMdxContent$3(props);
}
var demo_default$1 = MDXContent$3;
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var switch_exports = {};
__export(switch_exports, {
  designPatterns: () => designPatterns$2,
  layout: () => layout$3,
  logic: () => logic$3,
  meta: () => meta$3,
  propTypes: () => propTypes$1,
  styleRules: () => styleRules$3
});
var colors$1 = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix$1(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors$1.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors$1.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$1.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors$1.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
var meta$3;
var propTypes$1 = {
  value: PropTypes.signal.isRequired.default(() => signal(false))
};
var logic$3 = (props) => {
  return {};
};
var layout$3 = (props) => {
  useLogic();
  props.value();
  return /* @__PURE__ */ h("switchContainer", {
    "is-container": true,
    className: "inline-block relative overflow-hidden",
    style: { minWidth: "44px", height: "22px", lineHeight: "22px", borderRadius: "11px" },
    onClick: () => {
      props.value((d2) => {
        console.log("d: ", d2);
        return !d2;
      });
    }
  }, /* @__PURE__ */ h("switchHandle", {
    "is-fillText": true,
    style: { width: "18px", height: "18px", top: "2px", insetInlineStart: "2px" },
    className: "rounded-full absolute"
  }), /* @__PURE__ */ h("contentBox", {
    className: "block h-full pointer-events-none"
  }, /* @__PURE__ */ h("checkedContent", {
    className: "block h-full",
    style: {
      marginInlineStart: "9px",
      marginInlineEnd: "24px"
    },
    "is-text": true
  }, props.checkedContent), /* @__PURE__ */ h("uncheckedContent", {
    className: "block h-full",
    style: {
      marginTop: "-22px",
      marginInlineStart: "24px",
      marginInlineEnd: "9px"
    },
    "is-text": true
  }, props.uncheckedContent)));
};
var styleRules$3 = (props, layout22) => {
  return [
    {
      target: layout22.switchContainer.switchHandle,
      condition: props.value(),
      style: {
        insetInlineStart: `calc(100% - 20px)`
      }
    },
    {
      target: layout22.switchContainer.contentBox.uncheckedContent,
      condition: props.value(),
      style: {
        visibility: "hidden"
      }
    },
    {
      target: layout22.switchContainer.contentBox.checkedContent,
      condition: !props.value(),
      style: {
        visibility: "hidden"
      }
    }
  ];
};
var designPatterns$2 = (props, layout22) => {
  useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  return [
    entry,
    blockPatternMatrix$1(
      props.value() ? {
        bg: [colors$1.primaries[1], colors$1.primaries[0], colors$1.primaries[2]],
        text: [colors$1.light]
      } : {
        bg: [colors$1.grays[1], colors$1.grays[0], colors$1.grays[2]],
        text: [colors$1.light]
      }
    )
  ];
};
function RenderToReactWithWrap(module) {
  const render6 = RenderToReact$1(module);
  return (p2) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render6(p2)
    );
  };
}
function RenderToReact$1(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
var Component = RenderToReactWithWrap(switch_exports);
function _createMdxContent$2(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
    children: [jsxRuntime.exports.jsx(_components.h1, {
      children: "Switch \u5F00\u5173"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u57FA\u672C\u7528\u6CD5"
    }), "\n", jsxRuntime.exports.jsx(Component, {
      id: "switch"
    }), "\n", jsxRuntime.exports.jsx(_components.p, {
      children: "\u9644\u5E26\u5185\u5BB9"
    }), "\n", jsxRuntime.exports.jsx(Component, {
      id: "switch",
      checkedContent: "OK",
      uncheckedContent: "Not Good"
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$2, props)
  })) : _createMdxContent$2(props);
}
var demo_default = MDXContent$2;
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return jsxRuntime.exports.jsx(_components.h1, {
    children: "Get started"
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent$1, props)
  })) : _createMdxContent$1(props);
}
var get_started_default = MDXContent$1;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return jsxRuntime.exports.jsx(_components.h1, {
    children: "Introduce"
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.exports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntime.exports.jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var overview_default = MDXContent;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ca = scheduler.exports;
function p(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z[a2] = new v(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z[b2] = new v(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z[a2] = new v(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z[a2] = new v(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z[a2] = new v(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z[a2] = new v(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z[a2] = new v(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z[a2] = new v(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z[a2] = new v(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z[b2] = new v(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z[b2] = new v(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z[b2] = new v(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z[a2] = new v(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z[a2] = new v(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A = Object.assign, La;
function Ma(a2) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2)
    return null;
  if ("function" === typeof a2)
    return a2.displayName || a2.name || null;
  if ("string" === typeof a2)
    return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2)
    switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2)
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
    null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib)
    return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2)
    throw Error(p(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2)
      throw Error(p(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a2;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p(190));
  }
  if (3 !== c2.tag)
    throw Error(p(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a2, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a2, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2)
      hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2)
    if (b2 = Vb(a2), null === b2)
      a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2)
        return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return "compositionend" === a2 || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
}
function ne(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if ("change" === a2)
    return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if ("value" === a2.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    Jb(re, b2);
  }
}
function Ce(a2, b2, c2) {
  "focusin" === a2 ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
}
function De(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
    return te(qe);
}
function Ee(a2, b2) {
  if ("click" === a2)
    return te(b2);
}
function Fe(a2, b2) {
  if ("input" === a2 || "change" === a2)
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a2, b2) {
  if (He(a2, b2))
    return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b2) {
  var c2 = Je(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe(a2) {
  var b2 = Me(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a2) {
  if (Xe[a2])
    return Xe[a2];
  if (!We[a2])
    return a2;
  var b2 = We[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye)
      return Xe[a2] = b2[c2];
  return a2;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a2, d3))) {
          ne(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2)
    return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a2;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of])
            return c2;
          a2 = Mf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2.stateNode;
  throw Error(p(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a2, b2, c2) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b2);
  G(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p(108, Ra(a2) || "Unknown", e2));
  return A({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a2);
  G(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E(Wf), E(H), G(H, a2)) : E(Wf);
  G(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C;
    try {
      var c2 = eg;
      for (C = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2))
          throw Error(p(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I = false, xg = a2);
      }
    } else {
      if (Dg(a2))
        throw Error(p(418));
      a2.flags = a2.flags & -4097 | 2;
      I = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
    a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg)
    return false;
  if (!I)
    return Fg(a2), I = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2))
      throw Hg(), Error(p(418));
    for (; b2; )
      Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2)
      throw Error(p(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; )
    a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a2) {
  var b2 = Mg.current;
  E(Mg);
  a2._currentValue = b2;
}
function Sg(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function Tg(a2, b2) {
  Ng = a2;
  Pg = Og = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
}
function Vg(a2) {
  var b2 = a2._currentValue;
  if (Pg !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a2;
      Ng.dependencies = { lanes: 0, firstContext: a2 };
    } else
      Og = Og.next = a2;
  return b2;
}
var Wg = null;
function Xg(a2) {
  null === Wg ? Wg = [a2] : Wg.push(a2);
}
function Yg(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a2, d2);
}
function Zg(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; )
    a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function ch(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a2, c2);
}
function eh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function fh(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function ih(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = L(), d2 = lh(a2), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a2, e2, d2);
  null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
} };
function oh(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function ph(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = jh;
  ah(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function sh(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2)
      throw Error(p(284));
    if (!c2._owner)
      throw Error(p(290, a2));
  }
  return a2;
}
function th(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function uh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function vh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = wh(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = sh(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
      th(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      th(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a3, d3, f3, h3);
      if (Ka(f3))
        return t2(a3, d3, f3, h3);
      th(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a2) {
  if (a2 === Dh)
    throw Error(p(174));
  return a2;
}
function Ih(a2, b2) {
  G(Gh, b2);
  G(Fh, a2);
  G(Eh, Dh);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E(Eh);
  G(Eh, b2);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a2) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G(Fh, a2), G(Eh, c2));
}
function Lh(a2) {
  Fh.current === a2 && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a2 = 0; a2 < Nh.length; a2++)
    Nh[a2]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a2, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He(a2[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a2, b2, c2, d2, e2, f2) {
  Rh = f2;
  N = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
  a2 = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a2 = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b2)
    throw Error(p(300));
  return a2;
}
function bi() {
  var a2 = 0 !== Uh;
  Uh = 0;
  return a2;
}
function ci() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a2 : P = P.next = a2;
  return P;
}
function di() {
  if (null === O) {
    var a2 = N.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else
    a2 = O.next;
  var b2 = null === P ? N.memoizedState : P.next;
  if (null !== b2)
    P = b2, O = a2;
  else {
    if (null === a2)
      throw Error(p(310));
    O = a2;
    a2 = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a2 : P = P.next = a2;
  }
  return P;
}
function ei(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function fi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p(311));
  c2.lastRenderedReducer = a2;
  var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a2, b2) {
  var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function mi(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a2);
}
function ki(a2, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a2);
  });
}
function oi(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He(a2, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a2) {
  var b2 = Zg(a2, 1);
  null !== b2 && mh(b2, a2, 1, -1);
}
function qi(a2) {
  var b2 = ci();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ri.bind(null, N, a2);
  return [b2.memoizedState, a2];
}
function li(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function si() {
  return di().memoizedState;
}
function ti(a2, b2, c2, d2) {
  var e2 = ci();
  N.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a2, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O) {
    var g2 = O.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a2, b2) {
  return ti(8390656, 8, a2, b2);
}
function ji(a2, b2) {
  return ui(2048, 8, a2, b2);
}
function wi(a2, b2) {
  return ui(4, 2, a2, b2);
}
function xi(a2, b2) {
  return ui(4, 4, a2, b2);
}
function yi(a2, b2) {
  if ("function" === typeof b2)
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function zi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ui(4, 4, yi.bind(null, b2, a2), c2);
}
function Ai() {
}
function Bi(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function Ci(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function Di(a2, b2, c2) {
  if (0 === (Rh & 21))
    return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
  He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a2.baseState = true);
  return b2;
}
function Ei(a2, b2) {
  var c2 = C;
  C = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a2, b2, c2) {
  var d2 = lh(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, c2);
  else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
    var e2 = L();
    mh(c2, a2, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a2, b2, c2) {
  var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a2, b2, e2, d2);
    null !== c2 && (e2 = L(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a2) {
  var b2 = a2.alternate;
  return a2 === N || null !== b2 && b2 === N;
}
function Ii(a2, b2) {
  Th = Sh = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Ji(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
  ci().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ti(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ti(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Gi.bind(null, N, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = ci();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
  return ci().memoizedState = a2;
}, useTransition: function() {
  var a2 = qi(false), b2 = a2[0];
  a2 = Ei.bind(null, a2[1]);
  ci().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = N, e2 = ci();
  if (I) {
    if (void 0 === c2)
      throw Error(p(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = ci(), b2 = R.identifierPrefix;
  if (I) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a2) {
    var b2 = di();
    return Di(b2, O.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = fi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a2) {
  var b2 = di();
  return null === O ? b2.memoizedState = a2 : Di(b2, O.memoizedState, a2);
}, useTransition: function() {
  var a2 = gi(ei)[0], b2 = di().memoizedState;
  return [a2, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Li(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a2, b2);
  };
  return c2;
}
function Ri(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a2, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Vi(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag)
      b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Wi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1))
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
}
function Zi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a2, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, d2, e2);
  return b2.child;
}
function aj(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
    a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return $i(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = wh(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function cj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie(f2, d2) && a2.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
        0 !== (a2.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a2.lanes, $i(a2, b2, e2);
  }
  return dj(a2, b2, c2, d2, e2);
}
function ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
  Yi(a2, b2, e2, c2);
  return b2.child;
}
function hj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a2, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, c2, e2);
  return b2.child;
}
function ij(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a2, b2, c2, d2, f2, e2);
}
function kj(a2, b2, c2, d2, e2, f2) {
  hj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a2, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  Ih(a2, b2.containerInfo);
}
function mj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a2, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function pj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState)
    e2 |= 1;
  G(M, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a2, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function tj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a2.child, null, c2);
  a2 = rj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function sj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p(422))), tj(a2, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p(419));
    d2 = Li(f2, d2, void 0);
    return tj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (Ug || h2) {
    d2 = R;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
    }
    uj();
    d2 = Li(Error(p(421)));
    return tj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a2.return, b2, c2);
}
function xj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a2, b2, d2.children, c2);
  d2 = M.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128))
      a:
        for (a2 = b2.child; null !== a2; ) {
          if (13 === a2.tag)
            null !== a2.memoizedState && wj(a2, c2, b2);
          else if (19 === a2.tag)
            wj(a2, c2, b2);
          else if (null !== a2.child) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; null === a2.sibling; ) {
            if (null === a2.return || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G(M, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Mh(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a2 && b2.child !== a2.child)
    throw Error(p(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = wh(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; )
      a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G(M, M.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a2, b2, c2);
        G(M, M.current & 1);
        a2 = $i(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2)
          return yj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M, M.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a2, b2, c2);
  }
  return $i(a2, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d2 = A({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a2, b2) {
  if (!I)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function S(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Fj(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child)
        Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a2, b2);
      S(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode)
        Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p(166));
          S(b2);
          return null;
        }
        a2 = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D("cancel", d2);
              D("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D(lf[e2], d2);
              break;
            case "source":
              D("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d2
              );
              D("load", d2);
              break;
            case "details":
              D("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          Aj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D("cancel", a2);
                D("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a2
                );
                D("load", a2);
                e2 = d2;
                break;
              case "details":
                D("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A({}, d2, { value: void 0 });
                D("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode)
        Dj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2)
              switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S(b2);
      return null;
    case 13:
      E(M);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2)
              throw Error(p(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S(b2);
      return null;
    case 4:
      return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S(b2), null;
    case 10:
      return Rg(b2.type._context), S(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S(b2), null;
    case 19:
      E(M);
      f2 = b2.memoizedState;
      if (null === f2)
        return S(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a2 && 0 !== (a2.flags & 128))
            for (a2 = b2.child; null !== a2; ) {
              g2 = Mh(a2);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G(M, M.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Mh(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
              return S(b2), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b2.tag));
}
function Jj(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E(M);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate)
          throw Error(p(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W(a2, b2, d2);
  }
}
var Oj = false;
function Pj(a2, b2) {
  Cf = dd;
  a2 = Me();
  if (Ne(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a2)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; )
    if (b2 = V, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
      a2.return = b2, V = a2;
    else
      for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b2, b2.return, F2);
        }
        a2 = b2.sibling;
        if (null !== a2) {
          a2.return = b2.return;
          V = a2;
          break;
        }
        V = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Tj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Tj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Uj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Vj(a2) {
  a:
    for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Uj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2)
          continue a;
        if (null === a2.child || 4 === a2.tag)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Wj(a2, b2, c2), a2 = a2.sibling;
}
function Xj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Xj(a2, b2, c2), a2 = a2.sibling;
}
var X = null, Yj = false;
function Zj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a2, b2, c2), c2 = c2.sibling;
}
function ak(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U || Mj(c2, b2);
    case 6:
      var d2 = X, e2 = Yj;
      X = null;
      Zj(a2, b2, c2);
      X = d2;
      Yj = e2;
      null !== X && (Yj ? (a2 = X, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a2 = X, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X, c2.stateNode));
      break;
    case 4:
      d2 = X;
      e2 = Yj;
      X = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a2, b2, c2);
      X = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a2, b2, c2);
      break;
    case 1:
      if (!U && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W(c2, b2, h2);
        }
      Zj(a2, b2, c2);
      break;
    case 21:
      Zj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Zj(a2, b2, c2), U = d2) : Zj(a2, b2, c2);
      break;
    default:
      Zj(a2, b2, c2);
  }
}
function bk(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g2, e2);
        X = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a2), b2 = b2.sibling;
}
function ek(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        try {
          Qj(3, a2, a2.return), Rj(3, a2);
        } catch (t2) {
          W(a2, a2.return, t2);
        }
        try {
          Qj(5, a2, a2.return);
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W(a2, a2.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        if (null === a2.stateNode)
          throw Error(p(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W(a2, a2.return, t2);
        }
      break;
    case 4:
      dk(b2, a2);
      fk(a2);
      break;
    case 13:
      dk(b2, a2);
      fk(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d2 & 4 && bk(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a2), U = l2) : dk(b2, a2);
      fk(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
          for (V = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a2, a2.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a2);
      fk(a2);
      d2 & 4 && bk(a2);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a2
      ), fk(a2);
  }
}
function fk(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a2);
          Xj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
          Wj(a2, h2, g2);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function ik(a2, b2, c2) {
  V = a2;
  jk(a2);
}
function jk(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
        h2 = Kj;
        var l2 = U;
        Kj = g2;
        if ((U = k2) && !l2)
          for (V = e2; null !== V; )
            g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U = l2;
      }
      lk(a2);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a2);
  }
}
function lk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function hk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a2) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function kk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, g2, k2);
          }
      }
    } catch (k2) {
      W(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a2) {
  if (0 === (a2.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a2 = C;
  if (0 !== a2)
    return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function mh(a2, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a2, c2, d2);
  if (0 === (K & 2) || a2 !== R)
    a2 === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a2, Z)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === R ? Z : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Hk(a2, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c2 = a2.callbackNode;
  if (Ik() && a2.callbackNode !== c2)
    return null;
  var d2 = uc(a2, a2 === R ? Z : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
    b2 = Jk(a2, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a2 || Z !== b2)
      vk = null, Hj = B() + 500, Lk(a2, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a2, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
    if (6 === b2)
      Dk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a2, uk, vk);
          break;
        case 3:
          Dk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
            if (0 !== uc(a2, 0))
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 4:
          Dk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 5:
          Qk(a2, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a2, B());
  return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
}
function Ok(a2, b2) {
  var c2 = tk;
  a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
  a2 = Jk(a2, b2);
  2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a2;
}
function Gj(a2) {
  null === uk ? uk = a2 : uk.push.apply(uk, a2);
}
function Pk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a2, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a2) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1))
    return Ek(a2, B()), null;
  var c2 = Jk(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B()), c2;
  if (6 === c2)
    throw Error(p(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Qk(a2, uk, vk);
  Ek(a2, B());
  return null;
}
function Rk(a2, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a2(b2);
  } finally {
    K = c2, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a2) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c2 = pk.transition, d2 = C;
  try {
    if (pk.transition = null, C = 1, a2)
      return a2();
  } finally {
    C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R = a2;
  Y = a2 = wh(a2.current, null);
  Z = gj = b2;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a2;
}
function Nk(a2, b2) {
  do {
    var c2 = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T = 1;
        qk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a2 = nk.current;
  nk.current = ai;
  return null === a2 ? ai : a2;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a2, b2) {
  var c2 = K;
  K |= 2;
  var d2 = Kk();
  if (R !== a2 || Z !== b2)
    vk = null, Lk(a2, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a2, e2);
    }
  while (1);
  Qg();
  K = c2;
  nk.current = d2;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a2) {
  var b2 = Wk(a2.alternate, a2, gj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Tk(a2) : Y = b2;
  ok.current = null;
}
function Tk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a2)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (null !== b2);
  0 === T && (T = 5);
}
function Qk(a2, b2, c2) {
  var d2 = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a2, b2, c2, d2);
  } finally {
    pk.transition = e2, C = d2;
  }
  return null;
}
function Xk(a2, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === R && (Y = R = null, Z = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a2, c2);
    ek(c2, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    ik(c2);
    dc();
    K = h2;
    C = g2;
    pk.transition = f2;
  } else
    a2.current = c2;
  wk && (wk = false, xk = a2, yk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a2, B());
  if (null !== b2)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a2 = Qi, Qi = null, a2;
  0 !== (yk & 1) && 0 !== a2.tag && Ik();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a2 = Dc(yk), b2 = pk.transition, c2 = C;
    try {
      pk.transition = null;
      C = 16 > a2 ? 16 : a2;
      if (null === xk)
        var d2 = false;
      else {
        a2 = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e2 = K;
        K |= 4;
        for (V = a2.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V = g2;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a2.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V = u2;
          else
            b:
              for (g2 = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a2, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a2, b2, 1);
  a2 = dh(a2, b2, 1);
  b2 = L();
  null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
}
function W(a2, b2, c2) {
  if (3 === a2.tag)
    Yk(a2, a2, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a2 = Ki(c2, a2);
          a2 = Ri(b2, a2, 1);
          b2 = dh(b2, a2, 1);
          a2 = L();
          null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  R === a2 && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a2, 0) : sk |= c2);
  Ek(a2, b2);
}
function Zk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L();
  a2 = Zg(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
}
function vj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a2, c2);
}
function ck(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a2, c2);
}
var Wk;
Wk = function(a2, b2, c2) {
  if (null !== a2)
    if (a2.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a2, b2, c2);
      Ug = 0 !== (a2.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a2, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a2 = Lg(d2, a2);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
            break a;
        }
        throw Error(p(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a2)
          throw Error(p(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a2, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p(423)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p(424)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a2, b2, c2);
            break a;
          }
          Yi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return pj(a2, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
    case 7:
      return Yi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
    case 15:
      return cj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
    case 19:
      return yj(a2, b2, c2);
    case 22:
      return ej(a2, b2, c2);
  }
  throw Error(p(156, b2.tag));
};
function Gk(a2, b2) {
  return ac(a2, b2);
}
function al(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new al(a2, b2, c2, d2);
}
function bj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function $k(a2) {
  if ("function" === typeof a2)
    return bj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da)
      return 11;
    if (a2 === Ga)
      return 14;
  }
  return 2;
}
function wh(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function yh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2)
    bj(a2) && (g2 = 1);
  else if ("string" === typeof a2)
    g2 = 5;
  else
    a:
      switch (a2) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
        case Ea:
          return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Fa:
          return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a2 && null !== a2)
            switch (a2.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p(130, null == a2 ? a2 : typeof a2, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function qj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function xh(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function zh(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function bl(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new bl(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a2;
}
function dl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function el(a2) {
  if (!a2)
    return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag)
      throw Error(p(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2))
      return bg(a2, c2, b2);
  }
  return b2;
}
function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = el(null);
  c2 = a2.current;
  d2 = L();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Ek(a2, d2);
  return a2;
}
function gl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = L(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = dh(e2, b2, g2);
  null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
  return g2;
}
function hl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function il(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a2, b2) {
  il(a2, b2);
  (a2 = a2.alternate) && il(a2, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ml(a2) {
  this._internalRoot = a2;
}
nl.prototype.render = ml.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p(409));
  gl(a2, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Sk(function() {
      gl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a2) {
  this._internalRoot = a2;
}
nl.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function pl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function ql() {
}
function rl(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = hl(g2);
        f2.call(a3);
      };
    }
    var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = hl(k2);
      h2.call(a3);
    };
  }
  var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = hl(g2);
        h2.call(a3);
      };
    }
    gl(b2, g2, a2, e2);
  } else
    g2 = rl(c2, b2, a2, e2, d2);
  return hl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a2, 1);
        if (null !== b3) {
          var c3 = L();
          mh(b3, a2, 1, c3);
        }
      }), jl(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Zg(a2, 134217728);
    if (null !== b2) {
      var c2 = L();
      mh(b2, a2, 134217728, c2);
    }
    jl(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = lh(a2), c2 = Zg(a2, b2);
    if (null !== c2) {
      var d2 = L();
      mh(c2, a2, b2, d2);
    }
    jl(a2, b2);
  }
};
Hc = function() {
  return C;
};
Ic = function(a2, b2) {
  var c2 = C;
  try {
    return C = a2, b2();
  } finally {
    C = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p(200));
  return dl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ol(a2))
    throw Error(p(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2)
    return null;
  if (1 === a2.nodeType)
    return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render)
      throw Error(p(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Sk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p(200));
  return sl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ol(a2))
    throw Error(p(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p(200));
  return sl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!pl(a2))
    throw Error(p(40));
  return a2._reactRootContainer ? (Sk(function() {
    sl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p(200));
  if (null == a2 || void 0 === a2._reactInternals)
    throw Error(p(38));
  return sl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
var createRoot;
var m = reactDom.exports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const colors = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};
function blockPatternMatrix(colors$12) {
  return {
    container: {
      backgroundColor: {
        [colors$12.bg[0]]: [],
        [colors$12.bg[1]]: [true, "*", false, false],
        [colors$12.bg[2]]: ["*", true, "*", false],
        [colors$12.bg[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors$12.text[0]]: [],
        [colors$12.text[1]]: [true, "*", "*", false],
        [colors$12.text[2]]: ["*", true, "*", false],
        [colors$12.text[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors$12.text[0]]: [],
        [colors$12.text[1]]: [true, false, "*", false],
        [colors$12.text[2]]: [false, true, "*", false],
        [colors$12.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix(colors$12) {
  var _a, _b, _c;
  return {
    container: {
      backgroundColor: {
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors$12.border[0]]: [],
        [colors$12.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors$12.border[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors$12.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors$12.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors$12.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    }
  };
}
let meta$2;
const logic$2 = (props) => {
  return {};
};
const layout$2 = (props) => {
  useLogic();
  return /* @__PURE__ */ h("menuItem", {
    "is-container": true,
    "is-text": true,
    selected: props.selected,
    disabled: props.disabled,
    className: "block p-2 px-3 rounded-lg"
  }, /* @__PURE__ */ h("span", null, props.label));
};
const designPatterns$1 = (props) => {
  useLogic();
  return [
    [HOVER, ACTIVE, "selected", "disabled"],
    blockPatternMatrix({
      bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
      text: [colors.text, colors.light, colors.nones[0], colors.nones[1]]
    })
  ];
};
const styleRules$2 = (props) => {
  return [];
};
const MenuItemModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta: meta$2,
  logic: logic$2,
  layout: layout$2,
  designPatterns: designPatterns$1,
  styleRules: styleRules$2
}, Symbol.toStringTag, { value: "Module" }));
let meta$1;
const propTypes = {
  current: PropTypes.signal.isRequired.default(() => signal("")),
  items: PropTypes.signal.isRequired
};
const logic$1 = (props) => {
  const currentKey = props.current;
  const select = (item) => {
    var _a;
    const curKey = item.key;
    currentKey(() => curKey);
    items((draft) => {
      draft.forEach((di2) => {
        var _a2;
        di2.selected = di2.key === curKey;
        (_a2 = di2.children) == null ? void 0 : _a2.forEach((dci) => {
          dci.selected = dci.key === curKey;
        });
      });
    });
    (_a = props.onClick) == null ? void 0 : _a.call(props, item);
  };
  const items = props.items;
  return {
    items,
    currentKey,
    select
  };
};
const layout$1 = (props) => {
  const logic22 = useLogic();
  const MenuItemFunc = useModule(MenuItemModule);
  return /* @__PURE__ */ h("menuBox", {
    className: "block border-slate-300"
  }, /* @__PURE__ */ h("ul", {
    className: "block"
  }, logic22.items().map((item) => {
    const isSelected = item.selected;
    let element = MenuItemFunc({
      ...item,
      hasItemChildren: !!item.children,
      selected: isSelected,
      override: {
        layout(props2, jsonTree) {
          var _a, _b;
          if (props2.hasItemChildren) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
            jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
            (_b = (_a = jsonTree.menuItem).insert) == null ? void 0 : _b.call(_a, /* @__PURE__ */ h("spanIcon", {
              key: "tag",
              "is-text": true,
              className: "mx-2"
            }, ">"));
          }
          return [];
        }
      }
    });
    return /* @__PURE__ */ h("menuItemBox", {
      "data-name": "menu-item-box",
      key: item.key
    }, /* @__PURE__ */ h("div", {
      className: "p-1",
      onMouseDown: () => {
        logic22.select(item);
      }
    }, element), item.children && /* @__PURE__ */ h("subMenuItemBox", {
      className: "block p-1 bg-slate-200"
    }, item.children.map((subItem) => {
      const isSubSelected = subItem.selected;
      return /* @__PURE__ */ h("subMenuItem", {
        className: "block m-1",
        onClick: () => logic22.select(subItem)
      }, MenuItemFunc({ ...subItem, selected: isSubSelected, override: {
        layout(props2, jsonTree) {
          jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`;
        }
      } }));
    })));
  })));
};
const designPattern = (props) => {
};
const styleRules$1 = (props) => {
  return [];
};
const MenuModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta: meta$1,
  propTypes,
  logic: logic$1,
  layout: layout$1,
  designPattern,
  styleRules: styleRules$1
}, Symbol.toStringTag, { value: "Module" }));
let meta;
const logic = (props) => {
  return {
    count: 0
  };
};
const layout = (props) => {
  useLogic();
  return /* @__PURE__ */ h("buttonBox", {
    className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
    "is-container": true,
    "has-decoration": true,
    selected: false,
    disabled: props.disabled
  }, /* @__PURE__ */ h("span", {
    "is-text": true,
    selected: false,
    disabled: props.disabled,
    className: "block select-none",
    onClick: (e2) => {
      var _a;
      if (props.disabled)
        return;
      (_a = props.onClick) == null ? void 0 : _a.call(props, e2);
    }
  }, props.children));
};
const designPatterns = (props) => {
  useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text]
        })
      ];
    case "link":
      return [
        entry,
        strokePatternMatrix({
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]]
        })
      ];
    default:
      return [
        entry,
        strokePatternMatrix({
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]]
        })
      ];
  }
};
const styleRules = (props, draft) => {
  useLogic();
  useLayout();
  return [];
};
const ButtonModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta,
  logic,
  layout,
  designPatterns,
  styleRules
}, Symbol.toStringTag, { value: "Module" }));
function RenderToReact(module) {
  const renderer = createRSRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p2) => {
    renderer.construct(p2);
    return renderer.render();
  };
}
const Menu = RenderToReact({
  ...MenuModule
});
RenderToReact({
  ...ButtonModule
});
const docsPlayground = [
  {
    name: "Overview",
    component: overview_default
  },
  {
    name: "Get Started",
    component: get_started_default
  }
];
const componentsPlayground = {
  Button: demo_default$a,
  LoadingButton: demo_default$5,
  Menu: demo_default$9,
  Input: demo_default$8,
  Modal: demo_default$7,
  Icons: demo_default$6,
  Checkbox: demo_default$4,
  Radio: demo_default$3,
  RadioGroup: demo_default$2,
  Select: demo_default$1,
  Switch: demo_default
};
const searchParams = new URLSearchParams(location.search);
const TAB_KEY = "tab";
const DEFAULT_TAB = "Button";
function Home() {
  const [tab, setTab] = React.useState(searchParams.get(TAB_KEY) || DEFAULT_TAB);
  react.exports.useEffect(() => {
    searchParams.set(TAB_KEY, tab);
    history.replaceState(
      null,
      "",
      `${location.pathname}?${searchParams.toString()}`
    );
  }, [tab]);
  let ComponentPreview = () => null;
  const docSideItems = docsPlayground.map(({ name: name2, component }) => {
    const current = name2 === tab;
    if (current) {
      ComponentPreview = component;
    }
    return {
      label: name2,
      key: name2,
      selected: current
    };
  });
  const sideMenuItems = Object.entries(componentsPlayground).map(([name2, component]) => {
    const current = name2 === tab;
    if (current) {
      ComponentPreview = component;
    }
    return {
      label: name2,
      key: name2,
      selected: current
    };
  });
  const docMenu = /* @__PURE__ */ React.createElement(Menu, {
    items: docSideItems,
    onClick: (item) => {
      setTab(item.key);
    }
  });
  const leftMenu = /* @__PURE__ */ React.createElement(Menu, {
    items: sideMenuItems,
    onClick: (item) => {
      setTab(item.key);
    }
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: "220px" },
    className: "border-r p-4 fixed top-0 left-0 h-full"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-bold pb-4 mb-4 border-b border-solid"
  }, "Polymita"), /* @__PURE__ */ React.createElement("p", {
    className: "text-slate-400 mt-2"
  }, "Introduction"), docMenu, /* @__PURE__ */ React.createElement("p", {
    className: "text-slate-400 mt-2"
  }, "Components"), leftMenu), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1",
    style: { marginLeft: "220px" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4 markdown-body"
  }, /* @__PURE__ */ React.createElement(ComponentPreview, null))));
}
const RRoot = createRoot(document.getElementById("root"));
RRoot.render(/* @__PURE__ */ React.createElement(Home, null));
