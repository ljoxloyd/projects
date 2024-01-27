function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var react_reactServer = { exports: {} };
var react_reactServer_production_min = {};
var m = Object.assign, n = { current: null };
function p() {
  return /* @__PURE__ */ new Map();
}
if ("function" === typeof fetch) {
  var q = fetch, r = function(a, b) {
    var d = n.current;
    if (!d || b && b.signal && b.signal !== d.getCacheSignal())
      return q(a, b);
    if ("string" !== typeof a || b) {
      var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
      if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive)
        return q(a, b);
      var e = JSON.stringify([c.method, Array.from(c.headers.entries()), c.mode, c.redirect, c.credentials, c.referrer, c.referrerPolicy, c.integrity]);
      c = c.url;
    } else
      e = '["GET",[],null,"follow",null,null,null,null]', c = a;
    var f = d.getCacheForType(p);
    d = f.get(c);
    if (void 0 === d)
      a = q(a, b), f.set(c, [e, a]);
    else {
      c = 0;
      for (f = d.length; c < f; c += 2) {
        var h = d[c + 1];
        if (d[c] === e)
          return a = h, a.then(function(g) {
            return g.clone();
          });
      }
      a = q(a, b);
      d.push(e, a);
    }
    return a.then(function(g) {
      return g.clone();
    });
  };
  m(r, q);
  try {
    fetch = r;
  } catch (a) {
    try {
      globalThis.fetch = r;
    } catch (b) {
      console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
    }
  }
}
var t = { current: null }, u = { current: null }, v = { ReactCurrentDispatcher: t, ReactCurrentOwner: u }, w = { ReactCurrentCache: n };
function x(a) {
  var b = "https://react.dev/errors/" + a;
  if (1 < arguments.length) {
    b += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var d = 2; d < arguments.length; d++)
      b += "&args[]=" + encodeURIComponent(arguments[d]);
  }
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var y = Array.isArray, z = Symbol.for("react.element"), A = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), E = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), G = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), I = Symbol.iterator;
function J(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = I && a[I] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var K = Object.prototype.hasOwnProperty, L = { key: true, ref: true, __self: true, __source: true };
function M(a, b) {
  return { $$typeof: z, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === z;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(d) {
    return b[d];
  });
}
var O = /\/+/g;
function P(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function Q(a, b, d, c, e) {
  var f = typeof a;
  if ("undefined" === f || "boolean" === f)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (f) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case z:
          case A:
            h = true;
        }
    }
  if (h)
    return h = a, e = e(h), a = "" === c ? "." + P(h, 0) : c, y(e) ? (d = "", null != a && (d = a.replace(O, "$&/") + "/"), Q(e, b, d, "", function(l) {
      return l;
    })) : null != e && (N(e) && (e = M(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(O, "$&/") + "/") + a)), b.push(e)), 1;
  h = 0;
  c = "" === c ? "." : c + ":";
  if (y(a))
    for (var g = 0; g < a.length; g++) {
      f = a[g];
      var k = c + P(f, g);
      h += Q(f, b, d, k, e);
    }
  else if (k = J(a), "function" === typeof k)
    for (a = k.call(a), g = 0; !(f = a.next()).done; )
      f = f.value, k = c + P(f, g++), h += Q(f, b, d, k, e);
  else if ("object" === f)
    throw b = String(a), Error(x(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function R(a, b, d) {
  if (null == a)
    return a;
  var c = [], e = 0;
  Q(a, c, "", "", function(f) {
    return b.call(d, f, e++);
  });
  return c;
}
function S(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(d) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = d;
    }, function(d) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = d;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
function T() {
  return /* @__PURE__ */ new WeakMap();
}
function U() {
  return { s: 0, v: void 0, o: null, p: null };
}
react_reactServer_production_min.Children = { map: R, forEach: function(a, b, d) {
  R(a, function() {
    b.apply(this, arguments);
  }, d);
}, count: function(a) {
  var b = 0;
  R(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return R(a, function(b) {
    return b;
  }) || [];
}, only: function(a) {
  if (!N(a))
    throw Error(x(143));
  return a;
} };
react_reactServer_production_min.Fragment = B;
react_reactServer_production_min.Profiler = D;
react_reactServer_production_min.StrictMode = C;
react_reactServer_production_min.Suspense = F;
react_reactServer_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v;
react_reactServer_production_min.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w;
react_reactServer_production_min.cache = function(a) {
  return function() {
    var b = n.current;
    if (!b)
      return a.apply(null, arguments);
    var d = b.getCacheForType(T);
    b = d.get(a);
    void 0 === b && (b = U(), d.set(a, b));
    d = 0;
    for (var c = arguments.length; d < c; d++) {
      var e = arguments[d];
      if ("function" === typeof e || "object" === typeof e && null !== e) {
        var f = b.o;
        null === f && (b.o = f = /* @__PURE__ */ new WeakMap());
        b = f.get(e);
        void 0 === b && (b = U(), f.set(e, b));
      } else
        f = b.p, null === f && (b.p = f = /* @__PURE__ */ new Map()), b = f.get(e), void 0 === b && (b = U(), f.set(e, b));
    }
    if (1 === b.s)
      return b.v;
    if (2 === b.s)
      throw b.v;
    try {
      var h = a.apply(
        null,
        arguments
      );
      d = b;
      d.s = 1;
      return d.v = h;
    } catch (g) {
      throw h = b, h.s = 2, h.v = g, g;
    }
  };
};
react_reactServer_production_min.cloneElement = function(a, b, d) {
  if (null === a || void 0 === a)
    throw Error(x(267, a));
  var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (f = b.ref, h = u.current);
    void 0 !== b.key && (e = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (k in b)
      K.call(b, k) && !L.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
  }
  var k = arguments.length - 2;
  if (1 === k)
    c.children = d;
  else if (1 < k) {
    g = Array(k);
    for (var l = 0; l < k; l++)
      g[l] = arguments[l + 2];
    c.children = g;
  }
  return {
    $$typeof: z,
    type: a.type,
    key: e,
    ref: f,
    props: c,
    _owner: h
  };
};
react_reactServer_production_min.createElement = function(a, b, d) {
  var c, e = {}, f = null, h = null;
  if (null != b)
    for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)
      K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var g = arguments.length - 2;
  if (1 === g)
    e.children = d;
  else if (1 < g) {
    for (var k = Array(g), l = 0; l < g; l++)
      k[l] = arguments[l + 2];
    e.children = k;
  }
  if (a && a.defaultProps)
    for (c in g = a.defaultProps, g)
      void 0 === e[c] && (e[c] = g[c]);
  return { $$typeof: z, type: a, key: f, ref: h, props: e, _owner: u.current };
};
react_reactServer_production_min.createRef = function() {
  return { current: null };
};
react_reactServer_production_min.createServerContext = function() {
  throw Error(x(248));
};
react_reactServer_production_min.forwardRef = function(a) {
  return { $$typeof: E, render: a };
};
react_reactServer_production_min.isValidElement = N;
react_reactServer_production_min.lazy = function(a) {
  return { $$typeof: H, _payload: { _status: -1, _result: a }, _init: S };
};
react_reactServer_production_min.memo = function(a, b) {
  return { $$typeof: G, type: a, compare: void 0 === b ? null : b };
};
react_reactServer_production_min.startTransition = function(a) {
  a();
};
react_reactServer_production_min.use = function(a) {
  return t.current.use(a);
};
react_reactServer_production_min.useCallback = function(a, b) {
  return t.current.useCallback(a, b);
};
react_reactServer_production_min.useContext = function(a) {
  return t.current.useContext(a);
};
react_reactServer_production_min.useDebugValue = function() {
};
react_reactServer_production_min.useId = function() {
  return t.current.useId();
};
react_reactServer_production_min.useMemo = function(a, b) {
  return t.current.useMemo(a, b);
};
react_reactServer_production_min.version = "18.3.0-canary-b30030471-20240117";
{
  react_reactServer.exports = react_reactServer_production_min;
}
var react_reactServerExports = react_reactServer.exports;
export {
  getDefaultExportFromCjs as g,
  react_reactServerExports as r
};
