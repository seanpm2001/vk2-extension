(function(){var g, aa = aa || {}, k = this;
function l(a) {
  return void 0 !== a;
}
function ba() {
}
function ca(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function da(a) {
  return null != a;
}
function ea(a) {
  return "array" == ca(a);
}
function fa(a) {
  var b = ca(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function n(a) {
  return "string" == typeof a;
}
function ga(a) {
  return "number" == typeof a;
}
function ha(a) {
  return "function" == ca(a);
}
function ia(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function na(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function p(a, b, c) {
  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : na;
  return p.apply(null, arguments);
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
var pa = Date.now || function() {
  return +new Date;
};
function q(a, b) {
  var c = a.split("."), d = k;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    !c.length && l(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {};
  }
}
function t(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ma = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Tb = function(a, c, f) {
    for (var h = Array(arguments.length - 2), m = 2;m < arguments.length;m++) {
      h[m - 2] = arguments[m];
    }
    return b.prototype[c].apply(a, h);
  };
}
;var qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, v, Ea, Fa, x, Ga;
q("vk2.settings.updateSettings", function() {
  qa = vk2x.settings.ELASTICSEARCH_NODE;
  ra = vk2x.settings.ELASTICSEARCH_SRS;
  sa = vk2x.settings.EVALUATION_GETPROCESS;
  ta = vk2x.settings.EVALUATION_SETISINVALIDE;
  ua = vk2x.settings.EVALUATION_SETISVALIDE;
  va = vk2x.settings.GEOREFERENCE_CONFIRM;
  wa = vk2x.settings.GEOREFERENCE_EXTENT_SRS;
  xa = vk2x.settings.GEOREFERENCE_GETPROCESS;
  ya = vk2x.settings.GEOREFERENCE_HISTORY;
  za = vk2x.settings.GEOREFERENCE_INFORMATION;
  Aa = vk2x.settings.GEOREFERENCE_PAGE;
  Ba = vk2x.settings.GEOREFERENCE_VALIDATION;
  Ca = vk2x.settings.MAIN_PAGE;
  Da = vk2x.settings.MAPPROFILE_PAGE;
  v = vk2x.settings.MAPVIEW_PARAMS;
  Ha = vk2x.settings.MODE_3D;
  Ea = vk2x.settings.THUMB_PATH;
  Fa = vk2x.settings.TMS_URL_SUBDOMAINS;
  x = vk2x.settings.WITH_SPEAKING_URLS;
  Ga = vk2x.settings.WMS_DYNAMIC_TEMPLATE;
});
var Ha = !1;
function Ia(a, b) {
  function c(a, c) {
    if ("polygon" === c.toLowerCase()) {
      for (var b = [], d = 0, e = a.length;d < e;d++) {
        var w = ol.proj.transform(a[d], "EPSG:4326", "EPSG:900913");
        Ha && w.push(1E4);
        b.push(w);
      }
      return new ol.geom.Polygon([b]);
    }
  }
  var d = "clippolygon" in b ? c(b.clippolygon, "polygon") : void 0, d = void 0 === d && "geometry" in b ? c(b.geometry.coordinates[0], b.geometry.type) : d;
  delete b.geometry;
  var d = new ol.Feature({geometry:d}), e;
  for (e in b) {
    b.hasOwnProperty(e) && ("time" === e ? d.set(e, b[e].split("-")[0]) : d.set(e, b[e]));
  }
  d.setId(a);
  return d;
}
function Ja(a) {
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    b.push(Ia(a[c]._id, a[c]._source));
  }
  return b;
}
;var y = {j:{}};
y.j.Rb = new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 0, 255, 1.0)", width:2})});
y.j.rb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#f00", width:1}), fill:new ol.style.Fill({color:"rgba(255,0,0,0.2)"})});
y.j.sb = new ol.style.Style({stroke:new ol.style.Stroke({color:"#000000", width:2})});
y.j.Ka = new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}), stroke:new ol.style.Stroke({color:"#ffcc33", width:2}), image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"#ffcc33"})})});
y.j.Ca = function(a) {
  var b = 16 * Math.PI / 6, b = [0, b, b, b, b, b, b];
  a = l(a) ? a : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:8, fill:new ol.style.Fill({color:"rgba(255,255,255,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(49,159,211,0.5)", width:15, lineDash:b})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:a, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
y.j.La = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.6)"}), stroke:new ol.style.Stroke({color:"#29A329", width:1.5})})});
y.j.pa = new ol.style.Style({image:new ol.style.Circle({radius:7, fill:new ol.style.Fill({color:"rgba(255,0,0,0.1)"}), stroke:new ol.style.Stroke({color:"#f00", width:1})}), zIndex:1E5});
y.j.ka = function(a) {
  var b = 22 * Math.PI / 6, b = [0, b, b, b, b, b, b];
  a = l(a) ? a : void 0;
  return new ol.style.Style({image:new ol.style.Circle({radius:11, fill:new ol.style.Fill({color:"rgba(255,128,0,0.6)"}), stroke:new ol.style.Stroke({color:"rgba(240,0,0,0.5)", width:15, lineDash:b})}), text:new ol.style.Text({textAlign:"start", textBaseline:"bottom", font:"12px Calibri,sans-serif", text:a, fill:new ol.style.Fill({color:"#aa3300"}), stroke:new ol.style.Stroke({color:"#ffffff", width:3}), offsetX:10, offsetY:-5})});
};
function Ka() {
  this.b = this.a = !1;
  this.i = 0;
}
function La(a) {
  a.a || a.b || (a.i += 1);
  return "" + a.i;
}
;function Ma(a) {
  this.wa = a;
}
;function Na() {
  0 != Oa && (Pa[this[ja] || (this[ja] = ++ka)] = this);
  this.i = this.i;
  this.M = this.M;
}
var Oa = 0, Pa = {};
Na.prototype.i = !1;
function z(a) {
  a.i || (a.i = !0, a.W(), 0 != Oa && (a = a[ja] || (a[ja] = ++ka), delete Pa[a]));
}
Na.prototype.W = function() {
  if (this.M) {
    for (;this.M.length;) {
      this.M.shift()();
    }
  }
};
function A(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.b = !1;
  this.jb = !0;
}
A.prototype.stopPropagation = function() {
  this.b = !0;
};
A.prototype.preventDefault = function() {
  this.jb = !1;
};
var Qa = "closure_listenable_" + (1E6 * Math.random() | 0), Ra = 0;
function Sa(a, b, c, d, e) {
  this.listener = a;
  this.a = null;
  this.src = b;
  this.type = c;
  this.ga = !!d;
  this.Z = e;
  ++Ra;
  this.ca = this.qa = !1;
}
function Ta(a) {
  a.ca = !0;
  a.listener = null;
  a.a = null;
  a.src = null;
  a.Z = null;
}
;function Va(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
;function Wa(a, b) {
  this.width = a;
  this.height = b;
}
g = Wa.prototype;
g.clone = function() {
  return new Wa(this.width, this.height);
};
g.isEmpty = function() {
  return !(this.width * this.height);
};
g.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
g.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
g.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function Xa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function Ya(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
function Za(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}
function $a(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}
function ab(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
}
var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function cb(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < bb.length;f++) {
      c = bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}
function db(a) {
  var b = arguments.length;
  if (1 == b && ea(arguments[0])) {
    return db.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
}
;db("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function eb(a) {
  this.a = a;
}
var fb = /\s*;\s*/;
g = eb.prototype;
g.set = function(a, b, c, d, e, f) {
  if (/[;=\s]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (/[;\r\n]/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  l(c) || (c = -1);
  e = e ? ";domain=" + e : "";
  d = d ? ";path=" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(pa() + 1E3 * c)).toUTCString();
  this.a.cookie = a + "=" + b + e + d + c + f;
};
g.get = function(a, b) {
  for (var c = a + "=", d = (this.a.cookie || "").split(fb), e = 0, f;f = d[e];e++) {
    if (0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length);
    }
    if (f == a) {
      return "";
    }
  }
  return b;
};
g.remove = function(a, b, c) {
  var d = l(this.get(a));
  this.set(a, "", 0, b, c);
  return d;
};
g.getKeys = function() {
  return gb(this).keys;
};
g.L = function() {
  return gb(this).values;
};
g.isEmpty = function() {
  return !this.a.cookie;
};
g.Aa = function() {
  return this.a.cookie ? (this.a.cookie || "").split(fb).length : 0;
};
g.clear = function() {
  for (var a = gb(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
function gb(a) {
  a = (a.a.cookie || "").split(fb);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return {keys:b, values:c};
}
var hb = new eb(document);
hb.b = 3950;
function ib() {
}
ib.prototype.a = null;
function jb(a) {
  var b;
  (b = a.a) || (b = {}, kb(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
  return b;
}
;function lb(a) {
  lb[" "](a);
  return a;
}
lb[" "] = ba;
var mb = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function nb(a) {
  if (!pb.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(qb, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(rb, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(sb, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(tb, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(ub, "&#39;"));
  -1 != a.indexOf("\x00") && (a = a.replace(vb, "&#0;"));
  return a;
}
var qb = /&/g, rb = /</g, sb = />/g, tb = /"/g, ub = /'/g, vb = /\x00/g, pb = /[\x00&<>"']/;
function wb(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function xb(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function yb(a) {
  var b = n(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var C = Array.prototype, zb = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (n(a)) {
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
}, Ab = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = n(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Bb = C.filter ? function(a, b, c) {
  return C.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = n(a) ? a.split("") : a, m = 0;m < d;m++) {
    if (m in h) {
      var r = h[m];
      b.call(c, r, m, a) && (e[f++] = r);
    }
  }
  return e;
};
function Cb(a) {
  var b;
  a: {
    b = Db;
    for (var c = a.length, d = n(a) ? a.split("") : a, e = 0;e < c;e++) {
      if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
}
function Eb(a, b) {
  return 0 <= zb(a, b);
}
function Fb(a, b) {
  var c = zb(a, b), d;
  (d = 0 <= c) && C.splice.call(a, c, 1);
  return d;
}
function Gb(a) {
  return C.concat.apply(C, arguments);
}
function Hb(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return [];
}
function Ib(a, b, c) {
  return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c);
}
;function Jb(a) {
  a = a.className;
  return n(a) && a.match(/\S+/g) || [];
}
function D(a, b) {
  var c = Jb(a);
  Kb(c, Ib(arguments, 1));
  a.className = c.join(" ");
}
function E(a, b) {
  var c = Jb(a), c = Lb(c, Ib(arguments, 1));
  a.className = c.join(" ");
}
function Kb(a, b) {
  for (var c = 0;c < b.length;c++) {
    Eb(a, b[c]) || a.push(b[c]);
  }
}
function Lb(a, b) {
  return Bb(a, function(a) {
    return !Eb(b, a);
  });
}
function Mb(a, b, c) {
  var d = Jb(a);
  n(b) ? Fb(d, b) : ea(b) && (d = Lb(d, b));
  n(c) && !Eb(d, c) ? d.push(c) : ea(c) && Kb(d, c);
  a.className = d.join(" ");
}
function F(a, b) {
  return Eb(Jb(a), b);
}
;function Nb(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return n(a) && a.match(/\S+/g) || [];
}
function Ob(a, b) {
  return a.classList ? a.classList.contains(b) : Eb(Nb(a), b);
}
function Pb(a, b) {
  a.classList ? a.classList.add(b) : Ob(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
}
function Qb(a, b) {
  a.classList ? a.classList.remove(b) : Ob(a, b) && (a.className = Bb(Nb(a), function(a) {
    return a != b;
  }).join(" "));
}
function Rb(a) {
  Ob(a, "active") ? Qb(a, "active") : Pb(a, "active");
}
;function Sb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}
Sb.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = Tb(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.qa = !1)) : (b = new Sa(b, this.src, f, !!d, e), b.qa = c, a.push(b));
  return b;
};
Sb.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.a)) {
    return !1;
  }
  var e = this.a[a];
  b = Tb(e, b, c, d);
  return -1 < b ? (Ta(e[b]), C.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1;
};
function Ub(a, b) {
  var c = b.type;
  c in a.a && Fb(a.a[c], b) && (Ta(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
}
Sb.prototype.Da = function(a, b, c, d) {
  a = this.a[a.toString()];
  var e = -1;
  a && (e = Tb(a, b, c, d));
  return -1 < e ? a[e] : null;
};
Sb.prototype.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", e = l(b);
  return Ya(this.a, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].ga != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function Tb(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.ca && f.listener == b && f.ga == !!c && f.Z == d) {
      return e;
    }
  }
  return -1;
}
;var Vb;
function Wb() {
}
t(Wb, ib);
function Xb(a) {
  return (a = kb(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function kb(a) {
  if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.b = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.b;
}
Vb = new Wb;
function Yb(a, b) {
  this.g = {};
  this.a = [];
  this.b = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    if (a) {
      a instanceof Yb ? (c = a.getKeys(), d = a.L()) : (c = $a(a), d = Za(a));
      for (var e = 0;e < c.length;e++) {
        this.set(c[e], d[e]);
      }
    }
  }
}
g = Yb.prototype;
g.Aa = function() {
  return this.b;
};
g.L = function() {
  Zb(this);
  for (var a = [], b = 0;b < this.a.length;b++) {
    a.push(this.g[this.a[b]]);
  }
  return a;
};
g.getKeys = function() {
  Zb(this);
  return this.a.concat();
};
g.equals = function(a, b) {
  if (this === a) {
    return !0;
  }
  if (this.b != a.Aa()) {
    return !1;
  }
  var c = b || $b;
  Zb(this);
  for (var d, e = 0;d = this.a[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return !1;
    }
  }
  return !0;
};
function $b(a, b) {
  return a === b;
}
g.isEmpty = function() {
  return 0 == this.b;
};
g.clear = function() {
  this.g = {};
  this.b = this.a.length = 0;
};
g.remove = function(a) {
  return ac(this.g, a) ? (delete this.g[a], this.b--, this.a.length > 2 * this.b && Zb(this), !0) : !1;
};
function Zb(a) {
  if (a.b != a.a.length) {
    for (var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      ac(a.g, d) && (a.a[c++] = d);
      b++;
    }
    a.a.length = c;
  }
  if (a.b != a.a.length) {
    for (var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], ac(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    }
    a.a.length = c;
  }
}
g.get = function(a, b) {
  return ac(this.g, a) ? this.g[a] : b;
};
g.set = function(a, b) {
  ac(this.g, a) || (this.b++, this.a.push(a));
  this.g[a] = b;
};
g.forEach = function(a, b) {
  for (var c = this.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
g.clone = function() {
  return new Yb(this);
};
function ac(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
;function bc(a) {
  if ("function" == typeof a.L) {
    return a.L();
  }
  if (n(a)) {
    return a.split("");
  }
  if (fa(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Za(a);
}
function cc(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (fa(a) || n(a)) {
      Ab(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.getKeys) {
        d = a.getKeys();
      } else {
        if ("function" != typeof a.L) {
          if (fa(a) || n(a)) {
            d = [];
            for (var e = a.length, f = 0;f < e;f++) {
              d.push(f);
            }
          } else {
            d = $a(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = bc(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
}
;var dc;
a: {
  var ec = k.navigator;
  if (ec) {
    var fc = ec.userAgent;
    if (fc) {
      dc = fc;
      break a;
    }
  }
  dc = "";
}
function G(a) {
  return -1 != dc.indexOf(a);
}
;function gc() {
  return G("Edge");
}
;var hc = G("Opera") || G("OPR"), H = G("Edge") || G("Trident") || G("MSIE"), ic = G("Gecko") && !(-1 != dc.toLowerCase().indexOf("webkit") && !gc()) && !(G("Trident") || G("MSIE")) && !gc(), I = -1 != dc.toLowerCase().indexOf("webkit") && !gc();
I && G("Mobile");
var jc = G("Macintosh");
G("Windows");
G("Linux") || G("CrOS");
var kc = k.navigator || null;
kc && (kc.appVersion || "").indexOf("X11");
G("Android");
!G("iPhone") || G("iPod") || G("iPad");
G("iPad");
function lc() {
  var a = dc;
  if (ic) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (H && gc()) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (H) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (I) {
    return /WebKit\/(\S+)/.exec(a);
  }
}
function mc() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}
var nc = function() {
  if (hc && k.opera) {
    var a = k.opera.version;
    return ha(a) ? a() : a;
  }
  var a = "", b = lc();
  b && (a = b ? b[1] : "");
  return H && !gc() && (b = mc(), b > parseFloat(a)) ? String(b) : a;
}(), oc = {};
function J(a) {
  var b;
  if (!(b = oc[a])) {
    b = 0;
    for (var c = mb(String(nc)).split("."), d = mb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", m = d[f] || "", r = RegExp("(\\d*)(\\D*)", "g"), u = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = r.exec(h) || ["", "", ""], B = u.exec(m) || ["", "", ""];
        if (0 == w[0].length && 0 == B[0].length) {
          break;
        }
        b = wb(0 == w[1].length ? 0 : parseInt(w[1], 10), 0 == B[1].length ? 0 : parseInt(B[1], 10)) || wb(0 == w[2].length, 0 == B[2].length) || wb(w[2], B[2]);
      } while (0 == b);
    }
    b = oc[a] = 0 <= b;
  }
  return b;
}
function pc() {
  return H && (gc() || 9 <= qc);
}
var rc = k.document, sc = mc(), qc = !rc || !H || !sc && gc() ? void 0 : sc || ("CSS1Compat" == rc.compatMode ? parseInt(nc, 10) : 5);
var tc = !H || pc();
!ic && !H || H && pc() || ic && J("1.9.1");
H && J("9");
var uc = H || hc || I;
H && pc();
function vc(a) {
  return K(a);
}
function K(a) {
  var b = document;
  return n(a) ? b.getElementById(a) : a;
}
function L(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : wc("*", a, b);
}
function N(a, b) {
  var c = b || document, d = null;
  c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = wc("*", a, b)[0];
  return d || null;
}
function wc(a, b, c) {
  var d = document;
  c = c || d;
  a = a && "*" != a ? a.toUpperCase() : "";
  if (c.querySelectorAll && c.querySelector && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""));
  }
  if (b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if (a) {
      for (var d = {}, e = 0, f = 0, h;h = c[f];f++) {
        a == h.nodeName && (d[e++] = h);
      }
      d.length = e;
      return d;
    }
    return c;
  }
  c = c.getElementsByTagName(a || "*");
  if (b) {
    d = {};
    for (f = e = 0;h = c[f];f++) {
      a = h.className, "function" == typeof a.split && Eb(a.split(/\s+/), b) && (d[e++] = h);
    }
    d.length = e;
    return d;
  }
  return c;
}
function xc(a, b) {
  Xa(b, function(c, b) {
    "style" == b ? a.style.cssText = c : "class" == b ? a.className = c : "for" == b ? a.htmlFor = c : b in yc ? a.setAttribute(yc[b], c) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? a.setAttribute(b, c) : a[b] = c;
  });
}
var yc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function O(a, b, c) {
  var d = arguments, e = document, f = d[0], h = d[1];
  if (!tc && h && (h.name || h.type)) {
    f = ["<", f];
    h.name && f.push(' name="', nb(h.name), '"');
    if (h.type) {
      f.push(' type="', nb(h.type), '"');
      var m = {};
      cb(m, h);
      delete m.type;
      h = m;
    }
    f.push(">");
    f = f.join("");
  }
  f = e.createElement(f);
  h && (n(h) ? f.className = h : ea(h) ? f.className = h.join(" ") : xc(f, h));
  2 < d.length && zc(e, f, d);
  return f;
}
function zc(a, b, c) {
  function d(c) {
    c && b.appendChild(n(c) ? a.createTextNode(c) : c);
  }
  for (var e = 2;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ia(f) && 0 < f.nodeType ? d(f) : Ab(Ac(f) ? Hb(f) : f, d);
  }
}
function P(a, b) {
  a.appendChild(b);
}
function Bc(a) {
  a && a.parentNode && a.parentNode.removeChild(a);
}
function Cc(a) {
  return ia(a) && 1 == a.nodeType;
}
function Dc(a) {
  var b;
  if (uc && !(H && J("9") && !J("10") && k.SVGElement && a instanceof k.SVGElement) && (b = a.parentElement)) {
    return b;
  }
  b = a.parentNode;
  return Cc(b) ? b : null;
}
function Ec(a, b) {
  var c = [];
  return Fc(a, b, c, !0) ? c[0] : void 0;
}
function Gc(a, b) {
  var c = [];
  Fc(a, b, c, !1);
  return c;
}
function Fc(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || Fc(a, b, c, d)) {
        return !0;
      }
      a = a.nextSibling;
    }
  }
  return !1;
}
function Ac(a) {
  if (a && "number" == typeof a.length) {
    if (ia(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ha(a)) {
      return "function" == typeof a.item;
    }
  }
  return !1;
}
;function Hc() {
  proj4.defs("EPSG:3043", "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
  proj4.defs("EPSG:4314", "+proj=longlat +ellps=bessel +datum=potsdam +no_defs");
  proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  proj4.defs("EPSG:900913", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +over no_defs");
  proj4.defs("EPSG:3857", "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
}
function Ic(a) {
  var b = a.hasOwnProperty("polygon") && 0 < a.polygon.length ? new ol.geom.Polygon([a.polygon]) : void 0;
  void 0 !== b && b.transform(a.source, v.projection);
  return new ol.Feature({geometry:b});
}
function Jc() {
  var a = K("transformation-chooser");
  return "tps" === a.value.toLowerCase() ? "tps" : "polynom" === a.value.toLowerCase() ? "polynom" : "affine";
}
function Kc() {
  var a = K("projection-chooser");
  return null !== a && void 0 !== a ? a.value : "EPSG:4314";
}
;!H || pc();
var Lc = !H || pc(), Mc = H && !J("9");
!I || J("528");
ic && J("1.9b") || H && J("8") || hc && J("9.5") || I && J("528");
ic && !J("8") || H && J("9");
function Nc(a, b) {
  A.call(this, a ? a.type : "");
  this.currentTarget = this.target = null;
  this.keyCode = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.h = this.l = this.a = this.i = !1;
  this.P = null;
  if (a) {
    this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var c = a.relatedTarget;
    if (c && ic) {
      try {
        lb(c.nodeName);
      } catch (d) {
      }
    }
    this.offsetX = I || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = I || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.keyCode = a.keyCode || 0;
    this.i = a.ctrlKey;
    this.a = a.altKey;
    this.l = a.shiftKey;
    this.h = a.metaKey;
    this.P = a;
    a.defaultPrevented && this.preventDefault();
  }
}
t(Nc, A);
Nc.prototype.stopPropagation = function() {
  Nc.ma.stopPropagation.call(this);
  this.P.stopPropagation ? this.P.stopPropagation() : this.P.cancelBubble = !0;
};
Nc.prototype.preventDefault = function() {
  Nc.ma.preventDefault.call(this);
  var a = this.P;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Mc) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Oc = "closure_lm_" + (1E6 * Math.random() | 0), Pc = {}, Qc = 0;
function Q(a, b, c, d, e) {
  if (ea(b)) {
    for (var f = 0;f < b.length;f++) {
      Q(a, b[f], c, d, e);
    }
    return null;
  }
  c = Rc(c);
  return a && a[Qa] ? a.F.add(String(b), c, !1, d, e) : Sc(a, b, c, !1, d, e);
}
function Sc(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, m = Tc(a);
  m || (a[Oc] = m = new Sb(a));
  c = m.add(b, c, d, e, f);
  if (c.a) {
    return c;
  }
  d = Uc();
  c.a = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) {
    a.addEventListener(b.toString(), d, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(Vc(b.toString()), d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  Qc++;
  return c;
}
function Uc() {
  var a = Wc, b = Lc ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function R(a, b, c, d, e) {
  if (ea(b)) {
    for (var f = 0;f < b.length;f++) {
      R(a, b[f], c, d, e);
    }
  } else {
    c = Rc(c), a && a[Qa] ? a.F.add(String(b), c, !0, d, e) : Sc(a, b, c, !0, d, e);
  }
}
function Xc(a, b, c, d, e) {
  if (ea(b)) {
    for (var f = 0;f < b.length;f++) {
      Xc(a, b[f], c, d, e);
    }
  } else {
    c = Rc(c), a && a[Qa] ? a.F.remove(String(b), c, d, e) : a && (a = Tc(a)) && (b = a.Da(b, c, !!d, e)) && Yc(b);
  }
}
function Yc(a) {
  if (!ga(a) && a && !a.ca) {
    var b = a.src;
    if (b && b[Qa]) {
      Ub(b.F, a);
    } else {
      var c = a.type, d = a.a;
      b.removeEventListener ? b.removeEventListener(c, d, a.ga) : b.detachEvent && b.detachEvent(Vc(c), d);
      Qc--;
      (c = Tc(b)) ? (Ub(c, a), 0 == c.b && (c.src = null, b[Oc] = null)) : Ta(a);
    }
  }
}
function Vc(a) {
  return a in Pc ? Pc[a] : Pc[a] = "on" + a;
}
function Zc(a, b, c, d) {
  var e = !0;
  if (a = Tc(a)) {
    if (b = a.a[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.ga == c && !f.ca && (f = $c(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function $c(a, b) {
  var c = a.listener, d = a.Z || a.src;
  a.qa && Yc(a);
  return c.call(d, b);
}
function Wc(a, b) {
  if (a.ca) {
    return !0;
  }
  if (!Lc) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = k, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Nc(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, m = e.length - 1;!c.b && 0 <= m;m--) {
        c.currentTarget = e[m];
        var r = Zc(e[m], f, !0, c), d = d && r;
      }
      for (m = 0;!c.b && m < e.length;m++) {
        c.currentTarget = e[m], r = Zc(e[m], f, !1, c), d = d && r;
      }
    }
    return d;
  }
  return $c(a, new Nc(b, this));
}
function Tc(a) {
  a = a[Oc];
  return a instanceof Sb ? a : null;
}
var ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Rc(a) {
  if (ha(a)) {
    return a;
  }
  a[ad] || (a[ad] = function(b) {
    return a.handleEvent(b);
  });
  return a[ad];
}
;function bd(a) {
  function b() {
    if (y.B()) {
      var a = y.S(), c = a.getCesiumScene(), b = c.camera, d = olcs.core.pickBottomPoint(c), e = Cesium.Matrix4.fromTranslation(d), c = olcs.core.computeAngleToZenith(c, d);
      a.getEnabled() && olcs.core.rotateAroundAxis(b, -c, b.right, e, {callback:function() {
        a.setEnabled(!1);
        var c = a.getOlMap().getView(), b = c.getResolution(), d = c.getRotation();
        c.setResolution(c.constrainResolution(b));
        c.setRotation(c.constrainRotation(d));
      }});
    }
  }
  function c() {
    if (y.B()) {
      var a = y.S(), c = a.getCesiumScene(), b = c.camera, d = olcs.core.pickBottomPoint(c), c = Cesium.Math.toRadians(50), d = Cesium.Matrix4.fromTranslation(d);
      a.setEnabled(!0);
      olcs.core.rotateAroundAxis(b, -c, b.right, d, {duration:500});
    }
  }
  a = a || {};
  this.a = document.createElement("a");
  this.a.href = "#flip-view-mode";
  this.a.className = y.B() && y.S().getEnabled() ? "ol-has-tooltip three-d" : "ol-has-tooltip two-d";
  cd(this, y.B() && y.S().getEnabled() ? "2D" : "3D");
  var d = O("div", {"class":"info-message", innerHTML:y.c("flipviewmode-zoomin")}), e = document.createElement("div");
  e.className = "flip-view-mode ol-unselectable";
  e.appendChild(this.a);
  e.appendChild(d);
  var f = p(function(a) {
    a.preventDefault();
    Ob(this.a, "flip-mode-3d") ? (dd(this, "2d"), b()) : 3 > this.getMap().getView().getZoom() ? (Pb(d, "open"), setTimeout(function() {
      Qb(d, "open");
    }, 4E3)) : (dd(this, "3d"), c());
  }, this);
  Q(this.a, "click", f, void 0, this);
  Q(this.a, "touchstart", f, void 0, this);
  ol.control.Control.call(this, {element:e, target:a.target});
}
ol.inherits(bd, ol.control.Control);
function cd(a, b) {
  a.a.innerHTML = b;
  var c = O("span", {role:"tooltip", innerHTML:y.c("flipviewmode-title")});
  a.a.appendChild(c);
}
function dd(a, b) {
  "2d" === b.toLowerCase() ? (Qb(a.a, "flip-mode-3d"), cd(a, "2D")) : "3d" === b.toLowerCase() && (Pb(a.a, "flip-mode-3d"), cd(a, "3D"));
}
;function ed(a) {
  function b(a) {
    a.preventDefault();
    e.getMap().getView().setRotation(0);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#rotate-north";
  c.innerHTML = "N";
  c.className = "ol-has-tooltip";
  var d = O("span", {role:"tooltip", innerHTML:y.c("rotatenorth-title")});
  c.appendChild(d);
  var e = this;
  Q(c, "click", b, void 0, this);
  Q(c, "touchstart", b, void 0, this);
  d = document.createElement("div");
  d.className = "rotate-north ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(ed, ol.control.Control);
function S() {
  Na.call(this);
  this.F = new Sb(this);
  this.nb = this;
  this.Ia = null;
}
t(S, Na);
S.prototype[Qa] = !0;
g = S.prototype;
g.addEventListener = function(a, b, c, d) {
  Q(this, a, b, c, d);
};
g.removeEventListener = function(a, b, c, d) {
  Xc(this, a, b, c, d);
};
g.dispatchEvent = function(a) {
  var b, c = this.Ia;
  if (c) {
    for (b = [];c;c = c.Ia) {
      b.push(c);
    }
  }
  var c = this.nb, d = a.type || a;
  if (n(a)) {
    a = new A(a, c);
  } else {
    if (a instanceof A) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new A(d, c);
      cb(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.b && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = fd(f, d, !0, a) && e;
    }
  }
  a.b || (f = a.currentTarget = c, e = fd(f, d, !0, a) && e, a.b || (e = fd(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.b && h < b.length;h++) {
      f = a.currentTarget = b[h], e = fd(f, d, !1, a) && e;
    }
  }
  return e;
};
g.W = function() {
  S.ma.W.call(this);
  if (this.F) {
    var a = this.F, b = 0, c;
    for (c in a.a) {
      for (var d = a.a[c], e = 0;e < d.length;e++) {
        ++b, Ta(d[e]);
      }
      delete a.a[c];
      a.b--;
    }
  }
  this.Ia = null;
};
function fd(a, b, c, d) {
  b = a.F.a[String(b)];
  if (!b) {
    return !0;
  }
  b = b.concat();
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.ca && h.ga == c) {
      var m = h.listener, r = h.Z || h.src;
      h.qa && Ub(a.F, h);
      e = !1 !== m.call(r, d) && e;
    }
  }
  return e && 0 != d.jb;
}
g.Da = function(a, b, c, d) {
  return this.F.Da(String(a), b, c, d);
};
g.hasListener = function(a, b) {
  return this.F.hasListener(l(a) ? String(a) : void 0, b);
};
var gd = {AE:"maptype-ae", AK:"maptype-ak", GL:"maptype-gl", MB:"maptype-mb", MTB:"maptype-mtb", TK:"maptype-tk", TKX:"maptype-tkx", TK50:"maptype-tk50", ToGeoref:"georeference-false"};
function hd(a, b) {
  this.m = n(a) ? K(a) : a;
  b || delete gd.ToGeoref;
  var c = "", d;
  for (d in gd) {
    var e = y.c("facet-" + d.toLowerCase()), c = c + ('<label class="checkbox-inline" title="' + e + '"><input class="facet-search-el" type="checkbox" id="' + d + '" value="' + gd[d] + '" title="' + e + '" >' + e + "</label>")
  }
  c = O("div", {"class":"search-facet", innerHTML:c});
  this.m.appendChild(c);
  Q(c, "click", function(a) {
    a = L("facet-search-el", a.currentTarget);
    for (var c = [], b = !0, d = 0;d < a.length;d++) {
      if (a[d].checked) {
        var e = a[d].value.split("-")[0], w = a[d].value.split("-")[1];
        "georeference" !== e && c.push({key:e, value:w});
        "georeference" === e && (b = !1);
      }
    }
    this.dispatchEvent(new A("facet-change", {facets:c, georeference:b}));
  }, void 0, this);
  S.call(this);
}
t(hd, S);
function id(a, b) {
  var c = n(a) ? K(a) : a;
  this.m = O("div", {"class":"timeslider-container"});
  c.appendChild(this.m);
  void 0 !== b && jd(this, b);
  S.call(this);
}
t(id, S);
function kd(a) {
  a.innerHTML = "";
  var b = O("label", {innerHTML:y.c("timeslider-adjust-timeperiod")});
  a.appendChild(b);
  b = O("div", {"class":"slider-container"});
  a.appendChild(b);
  a = O("div", {"class":"slider"});
  b.appendChild(a);
  return a;
}
function jd(a, b) {
  function c(a, c) {
    c.style.left = (a - b[0]) / (b[1] - b[0]) * 100 + "%";
    c.innerHTML = a;
  }
  var d = kd(a.m), e, f;
  $(d).slider({range:!0, min:b[0], max:b[1], values:[b[0], b[1]], animate:"slow", orientation:"horizontal", step:1, slide:function(a, b) {
    var d = b.values;
    c(d[0], e);
    c(d[1], f);
  }, change:p(function(a, b) {
    var d = b.values;
    c(d[0], e);
    c(d[1], f);
    this.dispatchEvent(new A("timechange", {time:d}));
  }, a)});
  e = O("div", {"class":"tooltip min-value", innerHTML:b[0]});
  d.appendChild(e);
  f = O("div", {"class":"tooltip max-value", innerHTML:b[1]});
  d.appendChild(f);
}
;function T() {
  this.status_ = !1;
  S.call(this);
}
t(T, S);
T.prototype.C = function() {
};
T.prototype.D = function() {
};
function ld(a, b, c, d) {
  this.a = [c, d];
  this.s = [new ol.interaction.Draw({source:a, type:"Point", style:function() {
    return [y.j.pa];
  }}), new ol.interaction.Draw({source:b, type:"Point", style:function() {
    return [y.j.pa];
  }})];
  T.call(this);
}
t(ld, T);
ld.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
ld.prototype.I = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].addInteraction(this.s[a]);
  }
};
ld.prototype.D = function() {
  this.O();
  this.status_ = !1;
};
ld.prototype.O = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].removeInteraction(this.s[a]);
  }
};
function md(a, b, c, d) {
  function e(a, c, b) {
    if ("point" === a.getGeometry().getType().toLowerCase()) {
      var d = c.getSource().getFeatureById(a.getId());
      a = b.getSource().getFeatureById(a.getId());
      null != d && c.getSource().removeFeature(d);
      null != a && b.getSource().removeFeature(a);
    }
  }
  this.a = [c, d];
  this.s = [new ol.interaction.Select({condition:ol.events.condition.click, layer:a, style:function() {
    return [y.j.pa];
  }, condition:p(function(d) {
    "click" === d.type && c.forEachFeatureAtPixel(d.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)}), new ol.interaction.Select({condition:ol.events.condition.click, layer:b, style:function() {
    return [y.j.pa];
  }, condition:p(function(c) {
    "click" === c.type && d.forEachFeatureAtPixel(c.pixel, function(c) {
      e(c, a, b);
    });
    return !1;
  }, this)})];
  T.call(this);
}
t(md, T);
md.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
md.prototype.I = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].addInteraction(this.s[a]);
  }
};
md.prototype.D = function() {
  this.O();
  this.status_ = !1;
};
md.prototype.O = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].removeInteraction(this.s[a]);
  }
};
function nd(a, b, c, d) {
  this.a = [c, d];
  a.getStyle();
  y.j.ka();
  this.s = [new ol.interaction.Modify({features:a.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [y.j.ka()];
  }}), new ol.interaction.Modify({features:b.getSource().getFeaturesCollection(), pixelTolerance:10, style:function() {
    return [y.j.ka()];
  }})];
  this.s[0].getMap = function() {
    return c;
  };
  this.s[1].getMap = function() {
    return d;
  };
  od(this, this.s, [a, b]);
  T.call(this);
}
t(nd, T);
nd.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
nd.prototype.I = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].addInteraction(this.s[a]);
  }
};
nd.prototype.D = function() {
  this.O();
  this.status_ = !1;
};
nd.prototype.O = function() {
  for (var a = 0;a < this.a.length;a++) {
    this.a[a].removeInteraction(this.s[a]);
  }
};
function od(a, b, c) {
  function d(a, c) {
    var b = f(c.target.getMap(), c.mapBrowserPointerEvent.pixel, a);
    da(b.getId()) && this.dispatchEvent(new A("deselected", {feature:b, srcStyle:y.j.ka(b.getId()), targetStyle:y.j.Ca(b.getId())}));
  }
  function e(a, c) {
    var b = f(c.target.getMap(), c.mapBrowserPointerEvent.pixel, a);
    da(b.getId()) && this.dispatchEvent(new A("selected", {feature:b, srcStyle:y.j.Ca(b.getId()), targetStyle:y.j.ka(b.getId())}));
  }
  function f(a, c, b) {
    var d;
    a.forEachFeatureAtPixel(c, function(a) {
      d = a;
    });
    return b.getFeatureById(d.getId());
  }
  var h = c[0].getSource();
  c = c[1].getSource();
  b[0].on("modifystart", p(e, a, c));
  b[1].on("modifystart", p(e, a, h));
  b[0].on("modifyend", p(d, a, c));
  b[1].on("modifyend", p(d, a, h));
}
ol.Collection.prototype.addFeature = function(a) {
  var b = !1;
  this.forEach(function(c) {
    c === a && (b = !0);
  });
  b || this.push(a);
};
ol.Collection.prototype.removeFeature = function(a) {
  var b = !1;
  this.forEach(function(c) {
    c === a && (b = !0);
  });
  b && this.remove(a);
};
function pd() {
  S.call(this);
}
t(pd, S);
function qd(a, b, c, d, e) {
  if (!(H || I && J("525"))) {
    return !0;
  }
  if (jc && e) {
    return rd(a);
  }
  if (e && !d) {
    return !1;
  }
  ga(b) && (b = sd(b));
  if (!c && (17 == b || 18 == b || jc && 91 == b)) {
    return !1;
  }
  if (I && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return !1;
    }
  }
  if (H && d && b == a) {
    return !1;
  }
  switch(a) {
    case 13:
      return !0;
    case 27:
      return !I;
  }
  return rd(a);
}
function rd(a) {
  if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || I && 0 == a) {
    return !0;
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return !0;
    default:
      return !1;
  }
}
function sd(a) {
  if (ic) {
    a = td(a);
  } else {
    if (jc && I) {
      a: {
        switch(a) {
          case 93:
            a = 91;
            break a;
        }
      }
    }
  }
  return a;
}
function td(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a;
  }
}
;function ud(a, b) {
  S.call(this);
  a && (this.va && vd(this), this.ia = a, this.ua = Q(this.ia, "keypress", this, b), this.Ea = Q(this.ia, "keydown", this.a, b, this), this.va = Q(this.ia, "keyup", this.b, b, this));
}
t(ud, S);
g = ud.prototype;
g.ia = null;
g.ua = null;
g.Ea = null;
g.va = null;
g.G = -1;
g.T = -1;
g.za = !1;
var wd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, xd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, yd = H || 
I && J("525"), zd = jc && ic;
ud.prototype.a = function(a) {
  I && (17 == this.G && !a.i || 18 == this.G && !a.a || jc && 91 == this.G && !a.h) && (this.T = this.G = -1);
  -1 == this.G && (a.i && 17 != a.keyCode ? this.G = 17 : a.a && 18 != a.keyCode ? this.G = 18 : a.h && 91 != a.keyCode && (this.G = 91));
  yd && !qd(a.keyCode, this.G, a.l, a.i, a.a) ? this.handleEvent(a) : (this.T = sd(a.keyCode), zd && (this.za = a.a));
};
ud.prototype.b = function(a) {
  this.T = this.G = -1;
  this.za = a.a;
};
ud.prototype.handleEvent = function(a) {
  var b = a.P, c, d, e = b.altKey;
  H && "keypress" == a.type ? c = this.T : I && "keypress" == a.type ? c = this.T : hc && !I ? c = this.T : (c = b.keyCode || this.T, d = b.charCode || 0, zd && (e = this.za), jc && 63 == d && 224 == c && (c = 191));
  d = c = sd(c);
  var f = b.keyIdentifier;
  c ? 63232 <= c && c in wd ? d = wd[c] : 25 == c && a.l && (d = 9) : f && f in xd && (d = xd[f]);
  this.G = d;
  a = new Ad(d, 0, 0, b);
  a.a = e;
  this.dispatchEvent(a);
};
function vd(a) {
  a.ua && (Yc(a.ua), Yc(a.Ea), Yc(a.va), a.ua = null, a.Ea = null, a.va = null);
  a.ia = null;
  a.G = -1;
  a.T = -1;
}
ud.prototype.W = function() {
  ud.ma.W.call(this);
  vd(this);
};
function Ad(a, b, c, d) {
  Nc.call(this, d);
  this.type = "key";
  this.keyCode = a;
}
t(Ad, Nc);
function Bd(a, b, c) {
  if (n(b)) {
    (b = Cd(a, b)) && (a.style[b] = c);
  } else {
    for (var d in b) {
      c = a;
      var e = b[d], f = Cd(c, d);
      f && (c.style[f] = e);
    }
  }
}
var Dd = {};
function Cd(a, b) {
  var c = Dd[b];
  if (!c) {
    var d = xb(b), c = d;
    void 0 === a.style[d] && (d = (I ? "Webkit" : ic ? "Moz" : H ? "ms" : hc ? "O" : null) + yb(d), void 0 !== a.style[d] && (c = d));
    Dd[b] = c;
  }
  return c;
}
function Ed(a, b) {
  var c = a.style[xb(b)];
  return "undefined" !== typeof c ? c : a.style[Cd(a, b)] || "";
}
function Fd(a) {
  var b = Gd, c;
  a: {
    c = 9 == a.nodeType ? a : a.ownerDocument || a.document;
    if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
      c = c.display || c.getPropertyValue("display") || "";
      break a;
    }
    c = "";
  }
  if ("none" != (c || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) {
    return b(a);
  }
  c = a.style;
  var d = c.display, e = c.visibility, f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = f;
  c.visibility = e;
  return a;
}
function Gd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  if ((!l(b) || d) && a.getBoundingClientRect) {
    var e;
    a: {
      try {
        e = a.getBoundingClientRect();
      } catch (f) {
        e = {left:0, top:0, right:0, bottom:0};
        break a;
      }
      H && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop);
    }
    return new Wa(e.right - e.left, e.bottom - e.top);
  }
  return new Wa(b, c);
}
H && J(12);
function Hd(a, b, c) {
  a = O("div", {"class":"modal fade " + a, id:a});
  var d = O("div", {"class":"modal-dialog"});
  a.appendChild(d);
  var e = O("div", {"class":"modal-content"});
  d.appendChild(e);
  this.a = O("div", {"class":"modal-header"});
  e.appendChild(this.a);
  d = O("button", {"class":"close", type:"button", "data-dismiss":"modal", "aria-hidden":"true", innerHTML:"&times;"});
  this.a.appendChild(d);
  d = O("h4", {"class":"modal-title"});
  this.a.appendChild(d);
  d = O("div", {"class":"modal-body"});
  e.appendChild(d);
  d = O("div", {"class":"modal-footer"});
  e.appendChild(d);
  e = O("button", {"class":"btn btn-default", type:"button", "data-dismiss":"modal", innerHTML:"Close"});
  d.appendChild(e);
  this.H = a;
  b.appendChild(this.H);
  Id(this.H, c || !1);
}
function Jd(a, b) {
  for (var c = Gc(b, function(a) {
    return "a" === a.nodeName.toLowerCase() && a.hasAttribute("href");
  }), d = N("modal-content", a.H), e = 0;e < c.length;e++) {
    var f = c[e];
    if (!f.hasAttribute("target") || "_self" === f.getAttribute("target")) {
      f.setAttribute("data-href", f.href);
      f.href = "#";
      var h = l("map-profile") ? "map-profile" : f.hasAttribute("data-classname") ? f.getAttribute("data-classname") : "";
      Q(f, "click", oa(function(a, c) {
        c.preventDefault();
        var b = c.currentTarget.getAttribute("data-href");
        Kd(this, {href:b, classes:a});
        d.className = "modal-content " + a;
        return !1;
      }, h), void 0, a);
    }
  }
}
function Id(a, b) {
  $(a).on("hidden.bs.modal", function() {
    N("modal-body", this).innerHTML = "";
    N("modal-title", this.H).innerHTML = "";
    N("modal-content", this).className = "modal-content";
    b && Bc(this);
  });
}
function Kd(a, b) {
  var c = N("modal-body", a.H);
  c.innerHTML = "";
  var d = O("iframe", {frameborder:"0", src:b.href});
  d.setAttribute("webkitallowfullscreen", "");
  d.setAttribute("mozallowfullscreen", "");
  d.setAttribute("allowfullscreen", "");
  l(b.width) && Bd(d, "width", b.width);
  l(b.height) && Bd(d, "height", b.height);
  l(b.classes) && D(d, b.classes);
  c.appendChild(d);
}
Hd.prototype.close = function() {
  l(this.H) && $(this.H).modal("hide");
};
Hd.prototype.open = function(a, b, c) {
  null != a && a ? N("modal-title", this.H).innerHTML = a : this.a.style.display = "none";
  l(b) && (a = N("modal-content", this.H), D(a, b));
  l(c) && Kd(this, c);
  $(this.H).modal("show");
};
function Ld(a, b) {
  var c = N("modal-body", a.H);
  n(b) && (c.innerHTML = b);
}
;function Md(a, b, c) {
  if (ha(a)) {
    c && (a = p(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = p(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
}
;function Nd(a, b) {
  this.ra = l(b) ? b : void 0;
  this.m = l(a) ? a : void 0;
  this.u = !1;
}
function Od(a) {
  for (var b in a) {
    if (a.hasOwnProperty(b)) {
      for (var c = a[b], d = 0;d < c.length;d++) {
        c[d].setOpacity(0), c[d].setVisible(!0);
      }
    }
  }
}
function Pd(a, b) {
  Od(b);
  ({start:function(a, b, e) {
    if (e.u) {
      for (var f in a) {
        break;
      }
      var h = l(a[f]) ? a[f] : [];
      delete a[f];
      a = p(this.start, this, a, b, e);
      Md(oa(e.Mb, h, a), b, e);
      l(e.ra) && (e.ra.innerHTML = l(f) ? f : "");
      l(f) || (console.log("Visualization finished ...."), e.u = !1, l(e.m) && E(e.m, "play"));
    }
  }}).start(b, 500, a);
}
function Qd(a, b) {
  for (var c = a.sort(function(a, c) {
    return a.getTime() > c.getTime() ? 1 : a.getTime() < c.getTime() ? -1 : 0;
  }), d = 0;d < c.length;d++) {
    b.removeLayer(c[d]), b.addLayer(c[d]);
  }
  for (var e = {}, d = 0;d < c.length;d++) {
    c[d].getTime() in e ? e[c[d].getTime()].push(c[d]) : e[c[d].getTime()] = [c[d]];
  }
  return e;
}
Nd.prototype.Mb = function(a, b) {
  ({Wa:function(a, b, e, f, h) {
    if (h.u) {
      var m = a[0].getOpacity() + b;
      if (1.05 >= m) {
        for (var r = 0;r < a.length;r++) {
          a[r].setOpacity(m);
        }
        Md(oa(this.Wa, a, b, e, f, h), e, this);
      } else {
        l(f) && f();
      }
    }
  }, start:function(a, b, e, f, h) {
    for (var m = 0;m < a.length;m++) {
      a[m].setOpacity(0), a[m].setVisible(!0);
    }
    Md(oa(this.Wa, a, b, e, f, h), e, this);
  }}).start(a, .1, 500, b, this);
};
function Rd(a) {
  a.u = !1;
  l(a.ra) && (a.ra.innerHTML = l(void 0) ? void 0 : "");
  l(a.m) && E(a.m, "play");
}
;var Sd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function Td(a) {
  if (Ud) {
    Ud = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Td(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) {
        throw Ud = !0, Error();
      }
    }
  }
  return a.match(Sd);
}
var Ud = I;
function Vd(a, b) {
  for (var c = a.split("&"), d = 0;d < c.length;d++) {
    var e = c[d].indexOf("="), f = null, h = null;
    0 <= e ? (f = c[d].substring(0, e), h = c[d].substring(e + 1)) : f = c[d];
    b(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "");
  }
}
;function U(a) {
  S.call(this);
  this.ob = new Yb;
  this.X = a || null;
  this.u = !1;
  this.U = this.a = null;
  this.l = this.oa = "";
  this.b = this.la = this.h = this.aa = !1;
  this.v = 0;
  this.o = null;
  this.Ja = Wd;
  this.da = this.pb = !1;
}
t(U, S);
var Wd = "", Xd = /^https?$/i, Yd = ["POST", "PUT"], $d = [];
function V(a, b, c, d) {
  var e = new U;
  $d.push(e);
  b && e.F.add("complete", b, !1, void 0, void 0);
  e.F.add("ready", e.ub, !0, void 0, void 0);
  e.send(a, c, d, void 0);
}
g = U.prototype;
g.ub = function() {
  z(this);
  Fb($d, this);
};
g.send = function(a, b, c, d) {
  if (this.a) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.oa + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.oa = a;
  this.l = "";
  this.aa = !1;
  this.u = !0;
  this.a = this.X ? Xb(this.X) : Xb(Vb);
  this.U = this.X ? jb(this.X) : jb(Vb);
  this.a.onreadystatechange = p(this.cb, this);
  try {
    this.la = !0, this.a.open(b, String(a), !0), this.la = !1;
  } catch (e) {
    ae(this, e);
    return;
  }
  a = c || "";
  var f = this.ob.clone();
  d && cc(d, function(a, b) {
    f.set(b, a);
  });
  d = Cb(f.getKeys());
  c = k.FormData && a instanceof k.FormData;
  !Eb(Yd, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  f.forEach(function(a, b) {
    this.a.setRequestHeader(b, a);
  }, this);
  this.Ja && (this.a.responseType = this.Ja);
  "withCredentials" in this.a && (this.a.withCredentials = this.pb);
  try {
    be(this), 0 < this.v && ((this.da = ce(this.a)) ? (this.a.timeout = this.v, this.a.ontimeout = p(this.lb, this)) : this.o = Md(this.lb, this.v, this)), this.h = !0, this.a.send(a), this.h = !1;
  } catch (h) {
    ae(this, h);
  }
};
function ce(a) {
  return H && J(9) && ga(a.timeout) && l(a.ontimeout);
}
function Db(a) {
  return "content-type" == a.toLowerCase();
}
g.lb = function() {
  "undefined" != typeof aa && this.a && (this.l = "Timed out after " + this.v + "ms, aborting", this.dispatchEvent("timeout"), this.a && this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), de(this)));
};
function ae(a, b) {
  a.u = !1;
  a.a && (a.b = !0, a.a.abort(), a.b = !1);
  a.l = b;
  ee(a);
  de(a);
}
function ee(a) {
  a.aa || (a.aa = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}
g.W = function() {
  this.a && (this.u && (this.u = !1, this.b = !0, this.a.abort(), this.b = !1), de(this, !0));
  U.ma.W.call(this);
};
g.cb = function() {
  this.i || (this.la || this.h || this.b ? fe(this) : this.Ib());
};
g.Ib = function() {
  fe(this);
};
function fe(a) {
  if (a.u && "undefined" != typeof aa && (!a.U[1] || 4 != ge(a) || 2 != he(a))) {
    if (a.h && 4 == ge(a)) {
      Md(a.cb, 0, a);
    } else {
      if (a.dispatchEvent("readystatechange"), 4 == ge(a)) {
        a.u = !1;
        try {
          var b = he(a), c;
          a: {
            switch(b) {
              case 200:
              ;
              case 201:
              ;
              case 202:
              ;
              case 204:
              ;
              case 206:
              ;
              case 304:
              ;
              case 1223:
                c = !0;
                break a;
              default:
                c = !1;
            }
          }
          var d;
          if (!(d = c)) {
            var e;
            if (e = 0 === b) {
              var f = Td(String(a.oa))[1] || null;
              if (!f && self.location) {
                var h = self.location.protocol, f = h.substr(0, h.length - 1)
              }
              e = !Xd.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          if (d) {
            a.dispatchEvent("complete"), a.dispatchEvent("success");
          } else {
            var m;
            try {
              m = 2 < ge(a) ? a.a.statusText : "";
            } catch (r) {
              m = "";
            }
            a.l = m + " [" + he(a) + "]";
            ee(a);
          }
        } finally {
          de(a);
        }
      }
    }
  }
}
function de(a, b) {
  if (a.a) {
    be(a);
    var c = a.a, d = a.U[0] ? ba : null;
    a.a = null;
    a.U = null;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d;
    } catch (e) {
    }
  }
}
function be(a) {
  a.a && a.da && (a.a.ontimeout = null);
  ga(a.o) && (k.clearTimeout(a.o), a.o = null);
}
function ge(a) {
  return a.a ? a.a.readyState : 0;
}
function he(a) {
  try {
    return 2 < ge(a) ? a.a.status : -1;
  } catch (b) {
    return -1;
  }
}
function ie(a) {
  try {
    return a.a ? a.a.responseXML : null;
  } catch (b) {
    return null;
  }
}
function W(a) {
  if (a.a) {
    return Va(a.a.responseText);
  }
}
;function je() {
  return {query:{filtered:{filter:{bool:{must:[]}}}}, sort:{}};
}
function ke(a) {
  var b = {geo_shape:{}};
  b.geo_shape.geometry = {relation:"intersects", shape:{type:"polygon", coordinates:[a]}};
  return b;
}
function le(a) {
  for (var b = [], c = {bool:{should:b}}, d = 0;d < a.length;d++) {
    var e = a[d], f = {term:{}};
    f.term[e.key] = e.value.toLowerCase();
    b.push(f);
  }
  return c;
}
function me(a) {
  var b = {range:{}};
  b.range.time = {gte:a[0], lte:a[1]};
  return b;
}
function ne(a, b) {
  var c = qa + "/map/_mget", d = JSON.stringify({ids:a});
  V(c, b, "POST", d);
}
function oe(a, b) {
  for (var c = [], d = {query:{filtered:{filter:{bool:{should:c}}}}}, e = 0, f = b.length;e < f;e++) {
    var h = {term:{}};
    h.term[a] = b[e];
    c.push(h);
  }
  return d;
}
;function pe(a, b, c, d) {
  var e = l(c) ? "webgl" : "canvas", f = l(d) ? d : !1;
  V(b, p(function(c) {
    200 != he(c.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    c = ie(c.target);
    var d = Ec(c, function(a) {
      return 1 == a.nodeType && "IMAGE_PROPERTIES" == a.tagName;
    });
    c = parseInt(d.getAttribute("WIDTH"), 0);
    d = parseInt(d.getAttribute("HEIGHT"), 0);
    qe(this, b.substring(0, b.lastIndexOf("/") + 1), d, c, a, e, f);
  }, this), "GET");
  S.call(this);
}
t(pe, S);
function qe(a, b, c, d, e, f, h) {
  a.h = c;
  a.l = d;
  var m = new ol.proj.Projection({code:"ZOOMIFY", units:"pixels", extent:[0, 0, d, c]});
  a.o = new ol.source.Zoomify({url:b, size:[d, c], crossOrigin:"*"});
  b = new ol.View({projection:m, center:[d / 2, -c / 2], zoom:1, maxZoom:9});
  a.b = new ol.layer.Tile({source:a.o});
  c = [new ol.control.FullScreen, new ol.control.Zoom];
  h && c.push(new ol.control.OverviewMap({collapsed:!1, layers:[a.b]}));
  a.a = new ol.Map({layers:[a.b], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), controls:c, renderer:f, target:e, view:b});
  a.a.addControl(new ol.control.ZoomToExtent({extent:b.calculateExtent(a.a.getSize())}));
  a.dispatchEvent(new A("loadend", {}));
}
pe.prototype.getMap = function() {
  return this.a;
};
pe.prototype.getHeight = function() {
  return parseInt(this.h, 0);
};
pe.prototype.getWidth = function() {
  return parseInt(this.l, 0);
};
function re(a, b) {
  pe.call(this, a, b);
}
t(re, pe);
function X(a, b) {
  this.h = this.v = this.i = "";
  this.o = null;
  this.M = this.l = "";
  this.b = !1;
  var c;
  a instanceof X ? (this.b = l(b) ? b : a.b, se(this, a.i), this.v = a.v, this.h = a.h, te(this, a.o), this.l = a.l, ue(this, a.a.clone()), this.M = a.M) : a && (c = Td(String(a))) ? (this.b = !!b, se(this, c[1] || "", !0), this.v = ve(c[2] || ""), this.h = ve(c[3] || "", !0), te(this, c[4]), this.l = ve(c[5] || "", !0), ue(this, c[6] || "", !0), this.M = ve(c[7] || "")) : (this.b = !!b, this.a = new we(null, 0, this.b));
}
X.prototype.toString = function() {
  var a = [], b = this.i;
  b && a.push(xe(b, ye, !0), ":");
  if (b = this.h) {
    a.push("//");
    var c = this.v;
    c && a.push(xe(c, ye, !0), "@");
    a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    b = this.o;
    null != b && a.push(":", String(b));
  }
  if (b = this.l) {
    this.h && "/" != b.charAt(0) && a.push("/"), a.push(xe(b, "/" == b.charAt(0) ? ze : Ae, !0));
  }
  (b = this.a.toString()) && a.push("?", b);
  (b = this.M) && a.push("#", xe(b, Be));
  return a.join("");
};
X.prototype.clone = function() {
  return new X(this);
};
function se(a, b, c) {
  a.i = c ? ve(b, !0) : b;
  a.i && (a.i = a.i.replace(/:$/, ""));
}
function te(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.o = b;
  } else {
    a.o = null;
  }
}
function ue(a, b, c) {
  b instanceof we ? (a.a = b, Ce(a.a, a.b)) : (c || (b = xe(b, De)), a.a = new we(b, 0, a.b));
}
function Ee(a) {
  return a.a;
}
function ve(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}
function xe(a, b, c) {
  return n(a) ? (a = encodeURI(a).replace(b, Fe), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}
function Fe(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}
var ye = /[#\/\?@]/g, Ae = /[\#\?:]/g, ze = /[\#\?]/g, De = /[\#\?@]/g, Be = /#/g;
function we(a, b, c) {
  this.b = this.a = null;
  this.i = a || null;
  this.h = !!c;
}
function Ge(a) {
  a.a || (a.a = new Yb, a.b = 0, a.i && Vd(a.i, function(b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}
g = we.prototype;
g.Aa = function() {
  Ge(this);
  return this.b;
};
g.add = function(a, b) {
  Ge(this);
  this.i = null;
  a = He(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b++;
  return this;
};
g.remove = function(a) {
  Ge(this);
  a = He(this, a);
  return ac(this.a.g, a) ? (this.i = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1;
};
g.clear = function() {
  this.a = this.i = null;
  this.b = 0;
};
g.isEmpty = function() {
  Ge(this);
  return 0 == this.b;
};
function Ie(a, b) {
  Ge(a);
  b = He(a, b);
  return ac(a.a.g, b);
}
g.getKeys = function() {
  Ge(this);
  for (var a = this.a.L(), b = this.a.getKeys(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
g.L = function(a) {
  Ge(this);
  var b = [];
  if (n(a)) {
    Ie(this, a) && (b = Gb(b, this.a.get(He(this, a))));
  } else {
    a = this.a.L();
    for (var c = 0;c < a.length;c++) {
      b = Gb(b, a[c]);
    }
  }
  return b;
};
g.set = function(a, b) {
  Ge(this);
  this.i = null;
  a = He(this, a);
  Ie(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b++;
  return this;
};
g.get = function(a, b) {
  var c = a ? this.L(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
g.toString = function() {
  if (this.i) {
    return this.i;
  }
  if (!this.a) {
    return "";
  }
  for (var a = [], b = this.a.getKeys(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = encodeURIComponent(String(d)), d = this.L(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }
  return this.i = a.join("&");
};
g.clone = function() {
  var a = new we;
  a.i = this.i;
  this.a && (a.a = this.a.clone(), a.b = this.b);
  return a;
};
function He(a, b) {
  var c = String(b);
  a.h && (c = c.toLowerCase());
  return c;
}
function Ce(a, b) {
  b && !a.h && (Ge(a), a.i = null, a.a.forEach(function(a, b) {
    var e = b.toLowerCase();
    b != e && (this.remove(b), this.remove(e), 0 < a.length && (this.i = null, this.a.set(He(this, e), Hb(a)), this.b += a.length));
  }, a));
  a.h = b;
}
g.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    cc(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
y.Sb = function() {
  $(window);
};
y.tb = function(a, b) {
  var c = y.c("facetedsearch-open"), d = y.c("facetedsearch-close"), e = l("facetedsearch-open") ? "facetedsearch-open" : "active", f = l(c) ? c : "", h = l(d) ? d : "";
  Q(a, "click", function(c) {
    c.preventDefault();
    F(b, e) ? (E(b, e), a.title = f) : (D(b, e), a.title = h);
  });
};
y.fa = function(a) {
  var b = Fd(K("spatialsearch-container")), c = Fd(K("layermanagement-container")), d = Fd(K("mapdiv")), c = d.width - c.width - 30, b = a.getCoordinateFromPixel([0 + b.width + 30, d.height - 25 - 30]);
  a = a.getCoordinateFromPixel([c, 35]);
  return [b[0], b[1], a[0], a[1]];
};
y.Na = function() {
  navigator.cookieEnabled || alert("For proper working of the virtuel map forum 2.0 please activate cookies in your browser");
};
y.Qa = function(a) {
  return Ee(l(a) ? new X(a) : new X(window.location.href));
};
y.Ra = function(a, b) {
  return a = F(a, b) ? a : y.Ra(Dc(a), b);
};
y.c = function(a) {
  if (!l(a)) {
    return "";
  }
  try {
    if (l(window.lang_dictionary)) {
      return window.lang_dictionary[a];
    }
  } catch (b) {
    return "";
  }
};
y.Db = function(a) {
  return [[a[0], a[1]], [a[0], a[3]], [a[2], a[3]], [a[2], a[1]], [a[0], a[1]]];
};
y.getQueryParam = function(a, b) {
  return l(b) ? y.Qa(b).get(a) : y.Qa().get(a);
};
y.vb = function() {
  return hb.get("vk2-welcomepage");
};
y.sa = function(a, b, c, d, e) {
  var f = new Hd("vk2-overlay-modal", document.body, !0);
  d = l(d) ? d : "";
  e = l(e) ? e : !0;
  var h = 1 == e ? '<button type="button" class="btn btn-primary" id="confirm-dialog-btn-yes">' + y.c("yes") + '</button><button type="button" class="btn btn-primary"id="confirm-dialog-btn-no">' + y.c("no") + "</button>" : "";
  f.open(a, d);
  Ld(f, "<p>" + b + "</p><br>" + h);
  if (1 == e) {
    var m = l(c) ? c : function() {
    };
    Q(K("confirm-dialog-btn-yes"), "click", function() {
      m();
      f.close();
    });
    Q(K("confirm-dialog-btn-no"), "click", function() {
      f.close();
    });
  }
};
y.S = function() {
  if (y.B()) {
    return window.ol3d;
  }
};
y.Vb = function() {
  return l(hb.get("auth_tkt")) ? !0 : !1;
};
y.B = function() {
  return Ha && void 0 !== window.ol3d;
};
y.Za = function(a) {
  a = L(a, (l(void 0) ? void 0 : document.body).body);
  for (var b = 0;b < a.length;b++) {
    Q(a[b], "click", function(a) {
      a.preventDefault();
      try {
        var b = new Hd("vk2-overlay-modal", document.body, !0), e = this.title, f = this.getAttribute("data-classes");
        b.open(e, f, {href:this.href, classes:f});
        a.preventDefault();
      } catch (h) {
      }
    });
  }
};
y.ba = function() {
  y.B() && !0 === y.S().getEnabled() && y.S().getAutoRenderLoop().restartRenderLoop();
};
y.round = function(a, b) {
  var c = l(b) ? Math.pow(10, Math.ceil(b)) : Math.pow(10, 2);
  return Math.round(a * c) / c;
};
y.Jb = function(a) {
  a = N("ol-overlaycontainer-stopevent", K(a));
  for (var b = 0;b < a.children.length;b++) {
    var c = a.children[b];
    if (F(c.children[0], "ol-has-tooltip")) {
      for (var c = L("ol-has-tooltip", c), d = 0;d < c.length;d++) {
        c[d].setAttribute("title", c[d].children[0].innerHTML);
      }
    }
  }
};
y.Xb = function(a, b, c) {
  var d = new U;
  R(d, "success", function(a) {
    a = a.target;
    l(b) && b(a);
    z(a);
  });
  R(d, "error", function(a) {
    a = a.target;
    l(c) && c(a);
  });
  d.send(a);
};
y.kb = function(a, b) {
  hb.set(a, b, void 0, "/");
};
q("vk2.utils.setCookie", y.kb);
y.Yb = function() {
};
y.Zb = function(a, b) {
  var c = O("div", {"class":"georef-point-container alert alert-warning", style:"display:none;"});
  a.appendChild(c);
  c.innerHTML = "+" + b + " " + y.c("points");
  $(c).fadeIn(1E3).effect("puff", {}, 3E3, function() {
    c.innerHTML = "";
  });
};
y.Ob = function(a) {
  return [Math.round(a[0]), Math.round(-1 * a[1])];
};
y.Pb = function(a) {
  return [Math.round(a[0]), Math.round(-1 * a[1])];
};
function Je(a, b) {
  function c() {
    var a = !1;
    F(e, "deactivate") ? (E(e, "deactivate"), e.title = y.c("activatemap-all")) : (D(e, "deactivate"), e.title = y.c("deactivatemap-all"), a = !0);
    for (var c = Ke(b), d = 0;d < c.length;d++) {
      c[d].setVisible(a);
    }
    y.ba();
  }
  var d = O("div", {"class":"deactivate-map-col-control"});
  a.appendChild(d);
  var e = O("a", {href:"#", innerHTML:"D", "class":"deactivate", title:y.c("deactivatemap-all")});
  d.appendChild(e);
  Q(e, "click", c);
  Q(e, "touchstart", c);
}
;function Le(a, b) {
  var c = O("div", {"class":"dyn-vis-control", title:y.c("dynamicmapvis-open")}), d = O("div", {"class":"content", style:"display:none;"});
  c.appendChild(d);
  a.appendChild(c);
  var e = O("div", {"class":"feedback"});
  d.appendChild(e);
  e = new Nd(c, e);
  Me(this, d, e, b);
  Ne(this, c, d, e);
}
function Ne(a, b, c, d) {
  var e = O("a", {innerHTML:"o", "class":"open-dyn-vis"});
  b.insertBefore(e, b.childNodes[0] || null);
  Q(e, "click", function(a) {
    a.preventDefault();
    $(c).slideToggle();
    F(a.currentTarget, "open") ? (Rd(d), E(a.currentTarget, "open"), a.currentTarget.parentElement.title = y.c("dynamicmapvis-open")) : (D(a.currentTarget, "open"), a.currentTarget.parentElement.title = y.c("dynamicmapvis-close"));
  }, void 0, a);
}
function Me(a, b, c, d) {
  var e = O("div", {"class":"start-container"});
  b.appendChild(e);
  var f = O("a", {href:"#dynamic-start", title:y.c("dynamicmapvis-start"), innerHTML:"Start"});
  e.appendChild(f);
  Q(f, "click", function(a) {
    a.preventDefault();
    a = Ke(d);
    c.u || (c.u = !0, a = Qd(a, d), Pd(c, a), l(c.m) && !F(c.m, "play") && D(c.m, "play"));
  }, void 0, a);
  e = O("span", {role:"tooltip", innerHTML:y.c("dynamicmapvis-start")});
  f.appendChild(e);
  f = O("div", {"class":"stop-container"});
  b.appendChild(f);
  b = O("a", {href:"#dynamic-stop", title:y.c("dynamicmapvis-stop"), innerHTML:"Stop"});
  f.appendChild(b);
  Q(b, "click", function(a) {
    a.preventDefault();
    Rd(c);
  }, void 0, a);
  a = O("span", {role:"tooltip", innerHTML:y.c("dynamicmapvis-stop")});
  b.appendChild(a);
}
;var Oe = {brightness:1, contrast:1, hue:0, saturation:0};
function Pe(a) {
  function b(a) {
    a.preventDefault();
    F(a.target, "active") ? (E(a.target, "active"), $(h).fadeOut().removeClass("open")) : (D(a.target, "active"), $(h).fadeIn().addClass("open"));
  }
  function c(a) {
    a = a.glContext;
    var b = $("canvas.ol-unselectable")[0];
    if (void 0 !== a && null !== a) {
      var c = a.getGL();
      if (r) {
        glif.reset();
        for (var d in m) {
          glif.addFilter(d, m[d]);
        }
        r = !1;
      }
      glif.apply(c, b);
      a.useProgram(void 0);
    }
  }
  a = a || {};
  var d = O("a", {"class":"ol-has-tooltip", href:"#image-manipulation", innerHTML:"I"}), e = O("span", {role:"tooltip", innerHTML:y.c("imagemanipulation-open")}), f = O("div", {"class":"image-manipulation ol-unselectable"}), h = O("div", {"class":"slider-container", style:"display:none;"});
  d.appendChild(e);
  f.appendChild(d);
  f.appendChild(h);
  var m = ab(Oe), r = !1, u = !1, w = p(function(a, b, d, e, f) {
    f = O("div", {"class":"slider " + a, title:l("opt_title") ? f : "", "data-type":d});
    var h = l(e) ? e[1] : 0, w = l(e) ? e[2] : 100, B = l(e) ? e[3] : 1, M = l(e) ? e[0] : 100, Zd = p(function(a, e) {
      var f = e.value, B = this.getMap().getLayers().getArray()[0];
      u || (B.on("postcompose", c), u = !0);
      "vertical" == b ? (Ua.style.top = 100 - (f - h) / (w - h) * 100 + "%", Ua.innerHTML = f + "%") : (Ua.style.left = (f - h) / (w - h) * 100 + "%", Ua.innerHTML = f, m[d] = f, r = !0, B.changed());
    }, this);
    $(f).slider({min:h, max:w, value:M, animate:"slow", orientation:b, step:B, slide:Zd, change:Zd});
    var Ua = O("div", {"class":"tooltip value " + a, innerHTML:l(e) ? e[0] : ""});
    f.appendChild(Ua);
    return f;
  }, this), e = w("slider-contrast", "horizontal", "contrast", [1, 0, 2, .01], y.c("imagemanipulation-contrast")), B = w("slider-saturation", "horizontal", "saturation", [0, -1, 1, .01], y.c("imagemanipulation-saturation")), M = w("slider-brightness", "horizontal", "brightness", [1, 0, 2, .1], y.c("imagemanipulation-brightness")), w = w("slider-hue", "horizontal", "hue", [0, -180, 180, 5], y.c("imagemanipulation-hue"));
  h.appendChild(e);
  h.appendChild(B);
  h.appendChild(M);
  h.appendChild(w);
  e = O("button", {"class":"reset-btn", title:y.c("imagemanipulation-reset"), innerHTML:"Reset"});
  h.appendChild(e);
  Q(e, "click", function() {
    this.getMap().getLayers().getArray()[0].un("postcompose", c);
    u = !1;
    for (var a = L("slider", h), b = 0;b < a.length;b++) {
      var d = a[b], e = d.getAttribute("data-type"), e = Oe[e];
      $(d).slider("value", e);
    }
  }, void 0, this);
  Q(d, "click", b);
  Q(d, "touchstart", b);
  ol.control.Control.call(this, {element:f, target:a.target});
}
ol.inherits(Pe, ol.control.Control);
function Qe(a) {
  a = a || {};
  var b = l(a.spyLayer) ? a.spyLayer : new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM({attribution:void 0})}), c = l(a.radius) ? parseInt(a.radius, 0) : 75, d = null, e = O("a", {"class":"ol-has-tooltip", href:"#layerspy", innerHTML:"L"}), f = O("div", {"class":"ol-layerspy ol-unselectable"}), h = O("span", {role:"tooltip", innerHTML:y.c("layerspy-title")});
  f.appendChild(e);
  e.appendChild(h);
  var m = {gb:function(a) {
    a.context.restore();
  }, hb:function(a) {
    var b = a.context;
    a = a.frameState.pixelRatio;
    b.save();
    b.beginPath();
    d && (b.arc(d[0] * a, d[1] * a, c * a, 0, 2 * Math.PI), b.lineWidth = 5 * a, b.strokeStyle = "rgba(0,0,0,0.5)", b.stroke());
    b.clip();
  }, ab:function(a) {
    d = this.getMap().getEventPixel(a.P);
    this.getMap().render();
  }, bb:function() {
    d = null;
    this.getMap().render();
  }, Xa:function(a) {
    89 === a.keyCode ? (c = Math.min(c + 5, 150), this.getMap().render()) : 88 === a.keyCode && (c = Math.max(c - 5, 25), this.getMap().render());
  }, Ma:function(a) {
    a.target.getArray()[a.target.getLength() - 1] !== b && (this.getMap().removeLayer(b), this.getMap().addLayer(b));
  }}, r = null, u = p(function(a, b, c) {
    this.getMap().addLayer(b);
    b.on("precompose", c.hb, this);
    b.on("postcompose", c.gb, this);
    Q(this.getMap().getViewport(), "mousemove", c.ab, void 0, this);
    Q(this.getMap().getViewport(), "mouseout", c.bb, void 0, this);
    D(a, "active");
    r = r || new ud(document);
    Q(r, "key", c.Xa, void 0, this);
    this.getMap().getLayers().on("add", c.Ma, this);
  }, this), w = p(function(a, b, c) {
    b.un("precompose", c.hb, this);
    b.un("postcompose", c.gb, this);
    Xc(this.getMap().getViewport(), "mousemove", c.ab, void 0, this);
    Xc(this.getMap().getViewport(), "mouseout", c.bb, void 0, this);
    this.getMap().removeLayer(b);
    E(a, "active");
    Xc(r, "key", c.Xa, void 0, this);
    this.getMap().getLayers().un("add", c.Ma, this);
  }, this);
  Q(e, "click", p(function(a) {
    a.preventDefault();
    F(e, "active") ? w(e, b, m) : u(e, b, m);
  }, this));
  ol.control.Control.call(this, {element:f, target:a.target});
}
ol.inherits(Qe, ol.control.Control);
function Re(a) {
  function b(a) {
    var b = this.getMap();
    a = ol.proj.transform(b.getEventCoordinate(a), v.projection, "EPSG:4326");
    e.innerHTML = "Lon: " + y.round(a[0], 3) + ", Lat: " + y.round(a[1], 3);
  }
  a = a || {};
  var c = document.createElement("a");
  c.href = "#mouse-position";
  c.innerHTML = "M";
  c.className = "ol-has-tooltip";
  var d = O("span", {role:"tooltip", innerHTML:y.c("mouseposition-title")});
  c.appendChild(d);
  var e = void 0, d = p(function(a) {
    a.preventDefault();
    var c = !Ob(a.target, "active"), d = this.getMap();
    ol.proj.transform(d.getEventCoordinate(a), v.projection, "EPSG:4326");
    Rb(a.target);
    if (void 0 === e) {
      var r = d.getViewport();
      e = O("div", {"class":"mouse-position-box", innerHTML:""});
      r.appendChild(e);
    } else {
      e.innerHTML = "";
    }
    c ? Q(d.getViewport(), "mousemove", b, void 0, this) : Xc(d.getViewport(), "mousemove", b, void 0, this);
    b.call(this, [a]);
    Rb(e);
  }, this);
  Q(c, "click", d);
  Q(c, "touchstart", d);
  d = document.createElement("div");
  d.className = "mouse-position ol-unselectable";
  d.appendChild(c);
  ol.control.Control.call(this, {element:d, target:a.target});
}
ol.inherits(Re, ol.control.Control);
function Se(a, b, c) {
  $(a).hover(function() {
    F(this, "hover") || (c.getSource().clear(), c.getSource().addFeature(b), D(this, "hover"), Ha && void 0 !== window.ol3d && window.ol3d.getAutoRenderLoop().restartRenderLoop());
  }, function() {
    F(this, "hover") && (c.getSource().clear(), E(this, "hover"));
  });
}
;function Y(a) {
  this.id_ = l(a.id) ? a.id : void 0;
  this.time_ = a.time;
  this.title_ = l(a.title) ? a.title : void 0;
  this.thumb_ = l(a.thumbnail) ? a.thumbnail : Ea;
  this.allowUseInLayerManagement = !0;
  for (var b = [], c = 0;c < Fa.length;c++) {
    b.push(a.tms.replace("{s}", Fa[c]) + "/{z}/{x}/{-y}.png");
  }
  c = Te(a.clip, this.id_, this.time_, this.title_);
  b = new ol.layer.Tile({extent:a.clip.getExtent(), source:new ol.source.XYZ({maxZoom:15, urls:b, crossOrigin:"*"})});
  c = new ol.layer.Vector({source:new ol.source.Vector({features:[c]}), style:function() {
    return [y.j.sb];
  }});
  a.layers = [b, c];
  ol.layer.Group.call(this, a);
}
ol.inherits(Y, ol.layer.Group);
function Te(a, b, c, d) {
  a = new ol.Feature(a);
  a.setProperties({objectid:b, time:c, title:d});
  a.setId(b);
  return a;
}
Y.prototype.getTime = function() {
  return this.time_;
};
Y.prototype.Va = function() {
  return this.title_;
};
Y.prototype.Ua = function() {
  return this.thumb_;
};
Y.prototype.getId = function() {
  return this.id_;
};
function Z(a) {
  this.id_ = l(a.id) ? a.id : void 0;
  this.time_ = a.time;
  this.title_ = l(a.title) ? a.title : void 0;
  this.thumb_ = l(a.thumbnail) ? a.thumbnail : Ea;
  this.allowUseInLayerManagement = !0;
  for (var b = [], c = 0;c < Fa.length;c++) {
    b.push(a.tms.replace("{s}", Fa[c]) + "/{z}/{x}/{-y}.png");
  }
  a.extent = a.clip.getExtent();
  a.source = new ol.source.XYZ({maxZoom:15, urls:b, crossOrigin:"*"});
  ol.layer.Tile.call(this, a);
}
ol.inherits(Z, ol.layer.Tile);
Z.prototype.getTime = function() {
  return this.time_;
};
Z.prototype.Va = function() {
  return this.title_;
};
Z.prototype.Ua = function() {
  return this.thumb_;
};
Z.prototype.getId = function() {
  return this.id_;
};
function Ue(a, b) {
  var c = l(a.ha) ? a.ha : void 0, d = l(a.projection) ? a.projection : "EPSG:3857", e = l(a.mb) ? a.mb : void 0, f = l(a.Ya) ? a.Ya : void 0, h = void 0 === c ? void 0 : c.getExtent();
  a.source = new ol.source.TileWMS({url:e, params:{LAYERS:f, VERSION:"1.1.1"}, projection:d, extent:h});
  a.preload = Infinity;
  d = new ol.layer.Tile(a);
  d.set("wms_url", e);
  d.set("layerid", f);
  l(c) && (d.on("precompose", function(a) {
    for (var d = a.context, e = [], f = c.getCoordinates()[0], h = 0;h < f.length;h++) {
      e.push(b.getPixelFromCoordinate(f[h]));
    }
    d.save();
    a = a.frameState.pixelRatio;
    d.beginPath();
    d.moveTo(e[0][0] * a, e[0][1] * a);
    for (f = 1;f < e.length;f++) {
      d.lineTo(e[f][0] * a, e[f][1] * a);
    }
    d.closePath();
    d.clip();
  }), d.on("postcompose", function(a) {
    a.context.restore();
  }));
  return d;
}
;function Ve(a) {
  this.o = l(a.projection) ? a.projection : "EPSG:900913";
  this.da = l(a.Gb) ? a.Gb : 20;
  this.Fa = void 0;
  this.l = new ol.Collection;
  this.U = "title";
  this.aa = "ascending";
  this.b = 0;
  this.h = void 0;
  this.a = {ea:l(a.time) ? a.time[0] : 1868, ya:l(a.time) ? a.time[1] : 1945};
  this.g = a.map;
  this.v = [];
  this.X = !0;
  this.C();
  S.call(this);
}
t(Ve, S);
Ve.prototype.C = function() {
  this.g.on("moveend", function() {
    var a = y.fa(this.g);
    l(this.Fa) && ol.extent.equals(this.Fa, a) || this.xa();
  }, this);
};
function We(a, b, c) {
  var d = [a.a.ea + "-01-01", a.a.ya + "-01-01"], e = "ascending" === a.aa ? "asc" : "desc";
  if (a.X) {
    b = y.Db(ol.proj.transformExtent(b, c, ra));
    c = a.U;
    a = a.v;
    var f = [], h = je();
    f.push(me(d));
    f.push(ke(b));
    f.push(le(a));
    f.push({term:{georeference:!0}});
    h.query.filtered.filter.bool.must = f;
    h.sort[c] = {order:e};
    return h;
  }
  b = a.U;
  a = a.v;
  c = [];
  f = je();
  c.push(me(d));
  c.push(le(a));
  c.push({term:{georeference:!1}});
  f.query.filtered.filter.bool.must = c;
  f.sort[b] = {order:e};
  return f;
}
Ve.prototype.oa = function(a) {
  this.dispatchEvent(new A("refresh", {features:a, totalFeatureCount:this.h}));
};
Ve.prototype.la = function(a) {
  this.dispatchEvent(new A("paginate", {features:a, totalFeatureCount:this.h}));
};
function Xe(a, b, c, d) {
  b = We(a, b, c);
  c = qa + "/_search?from=" + a.b + "&size=" + a.da;
  var e = new U;
  R(e, "success", function(a) {
    a = a.target;
    if (W(a)) {
      var b = W(a);
      this.h = b.hits.total;
      z(a);
      a = Ja(b.hits.hits);
      this.l.extend(a);
      this.b += a.length;
      d.call(this, a);
    } else {
      console.log("Response is empty");
    }
  }, !1, a);
  e.send(c, "POST", JSON.stringify(b));
}
Ve.prototype.xa = function() {
  var a = y.fa(this.g);
  Ye(this, a, this.o);
  this.Fa = Hb(a);
};
function Ye(a, b, c) {
  a.l.clear();
  a.b = 0;
  Xe(a, b, c, a.oa);
}
;function Ze(a, b) {
  this.m = n(a) ? K(a) : a;
  this.a = new Ve({projection:"EPSG:900913", map:b});
  Q(this.a, "refresh", p(this.v, this));
  Q(this.a, "paginate", p(this.xa, this));
  this.h = ["time", "title", "georeference"];
  this.J = new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [y.j.rb];
  }});
  void 0 !== y.B() && this.J.set("altitudeMode", "clampToGround");
  b.addLayer(this.J);
  b.getLayers().on("add", function(a) {
    a = a.target.getArray()[a.target.getLength() - 1];
    if (a instanceof Y || a instanceof Z || "click" == a.get("type")) {
      b.removeLayer(this.J), b.addLayer(this.J);
    }
  }, this);
  $e(this, this.m);
  af(this, this.m);
  bf(this);
  cf(this);
  df(this);
  S.call(this);
}
t(Ze, S);
function $e(a, b) {
  var c = O("div", {"class":"mapsearch-container"});
  b.appendChild(c);
  var d = O("div", {"class":"panel panel-default searchTablePanel"});
  c.appendChild(d);
  var e = O("div", {"class":"panel-heading"});
  d.appendChild(e);
  var f = O("div", {"class":"content"});
  e.appendChild(f);
  a.l = O("div");
  f.appendChild(a.l);
  var h = O("a", {innerHTML:"o", title:y.c("facetedsearch-open")});
  f.appendChild(h);
  f = O("div", {"class":"facet-container"});
  e.appendChild(f);
  y.tb(h, c);
  a.o = new hd(f, !1);
  c = O("div", {"class":"panel-body"});
  d.appendChild(c);
  d = O("div", {"class":"mapsearch-list"});
  c.appendChild(d);
  c = O("div", {"class":"list-header"});
  d.appendChild(c);
  for (e = 0;e < a.h.length;e++) {
    f = a.h[e], h = O("div", {"class":"inner-col " + f}), f = O("div", {"data-type":f, "class":"sort-element " + f, innerHTML:y.c("mapsearch-" + f) + ' <span class="caret caret-reversed"></span>'}), h.appendChild(f), c.appendChild(h);
  }
  a.b = O("ul", {id:"mapsearch-contentlist", "class":"mapsearch-contentlist"});
  d.appendChild(a.b);
}
function cf(a) {
  l(a.b) && Q(a.b, "click", function(a) {
    a.preventDefault();
    var c = y.Ra(a.P.target, "mapsearch-record"), d;
    this.a.l.forEach(function(a) {
      a.get("id") == c.id && (d = a);
    });
    this.dispatchEvent(new A("click-record", {feature:d}));
  }, void 0, a);
}
function af(a, b) {
  for (var c = L("sort-element", b), d = 0;d < c.length;d++) {
    Q(c[d], "click", function(a) {
      a = a.target.getAttribute("data-type");
      for (var b = N("sort-element " + a), c = F(b, "ascending") ? "descending" : "ascending", d = L("sort-element"), r = 0;r < d.length;r++) {
        E(d[r], "descending"), E(d[r], "ascending");
      }
      D(b, c);
      this.a.U = a;
      this.a.aa = c;
      a = this.a;
      Ye(a, y.fa(a.g), a.o);
    }, void 0, a);
  }
}
function bf(a) {
  var b = !1;
  l(a.b) && Q(a.b, "scroll", function(a) {
    if (!b) {
      b = !0;
      a = a.currentTarget;
      if (a.offsetHeight + a.scrollTop >= a.scrollHeight && (a = this.a, !(a.l.getLength() >= a.h) && (a = this.a, a.b < a.h && 500 > a.b))) {
        var d = y.fa(a.g);
        Xe(a, d, a.o, a.la);
      }
      b = !1;
    }
  }, void 0, a);
}
function df(a) {
  Q(a.o, "facet-change", function(a) {
    var c = this.a;
    a = a.target;
    c.X = a.georeference;
    c.v = a.facets;
    c.xa();
  }, void 0, a);
}
function ef(a, b) {
  for (var c = 0;c < b.length;c++) {
    var d, e = b[c];
    d = O("li", {"class":"mapsearch-record type " + e.get("maptype"), id:e.get("id")});
    var f = O("span", {"class":"data-col time", innerHTML:parseInt(e.get("time"), 0)});
    d.appendChild(f);
    f = O("span", {"class":"data-col title", innerHTML:e.get("title")});
    d.appendChild(f);
    f = O("span", {"class":"data-col time", innerHTML:1});
    d.appendChild(f);
    f = O("div", {"class":"view-item"});
    d.appendChild(f);
    var h = O("a", {"class":"thumbnail", href:"#"});
    f.appendChild(h);
    var m = O("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:e.get("thumb")});
    h.appendChild(m);
    h = O("div", {"class":"overview"});
    f.appendChild(h);
    f = O("h2", {innerHTML:e.get("title")});
    h.appendChild(f);
    f = O("p", {"class":"details"});
    h.appendChild(f);
    h = O("div", {"class":"timestamp", innerHTML:y.c("timestamp") + " " + e.get("time")});
    f.appendChild(h);
    h = O("div", {"class":"scale", innerHTML:y.c("factory-scale") + " 1:" + e.get("denominator")});
    f.appendChild(h);
    e.get("georeference") || (e = O("div", {"class":"georeference", innerHTML:y.c("factory-no-georef")}), f.appendChild(e));
    a.b.appendChild(d);
    l(a.J) && Se(d, b[c], a.J);
  }
}
Ze.prototype.v = function(a) {
  ff(this, a.target.totalFeatureCount);
  this.b.innerHTML = "";
  ef(this, a.target.features);
};
Ze.prototype.xa = function(a) {
  ff(this, a.target.ac);
  ef(this, a.target.features);
};
function ff(a, b) {
  a.l.innerHTML = 0 < b ? b + " " + y.c("mapsearch-found-maps") : y.c("mapsearch-found-no-maps");
}
;function gf(a) {
  this.l = n(a) ? K(a) : a;
  hf(this, this.l);
  this.b = {};
  this.o = {placename:p(function(a) {
    this.b.hasOwnProperty(a) ? jf(this, this.b[a][0]) : kf(this, a, p(function(a) {
      0 < a.length ? jf(this, a[0]) : alert("The choosen placename is unknown.");
    }, this));
  }, this)};
  lf(this);
  mf(this);
  S.call(this);
}
t(gf, S);
function hf(a, b) {
  var c = O("div", {"class":"gazetteersearch-container"});
  b.appendChild(c);
  var d = O("div", {"class":"form-group"});
  c.appendChild(d);
  a.a = O("input", {placeholder:y.c("gazetteer-placeholder"), type:"text", "class":"form-control gazetteersearch-input"});
  d.appendChild(a.a);
  a.h = O("input", {value:y.c("gazetteer-submit"), type:"submit", "class":"form-control gazetteersearch-submit"});
  d.appendChild(a.h);
}
function lf(a) {
  $(a.a).autocomplete({source:p(function(a, c) {
    kf(this, a.term, c);
  }, a), delay:300, minLength:3, autoFocus:!0, select:p(function(a, c) {
    jf(this, c.item);
  }, a), open:function() {
    $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
  }, close:function() {
    $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
  }});
}
function mf(a) {
  var b = p(function(a) {
    a = -1 < a.indexOf(",") ? a.split(",")[0] : a;
    this.o.placename(a);
  }, a);
  Q(a.a, "keydown", function(a) {
    13 === a.keyCode && b(this.a.value);
  }, void 0, a);
  Q(a.h, "click", function() {
    b(this.a.value);
  }, void 0, a);
}
function kf(a, b, c) {
  D(a.a, "loading");
  V("https://search.mapzen.com/v1/autocomplete?api_key=search-53q8sJs&text=" + b, p(function(a) {
    a = a.target;
    var e;
    if (W(a)) {
      e = W(a);
    } else {
      try {
        e = a.a ? a.a.responseText : "";
      } catch (f) {
        e = "";
      }
    }
    z(a);
    a = $.map(e.features, function(a) {
      return {label:a.properties.label, value:a.properties.name, lonlat:{x:a.geometry.coordinates[0], y:a.geometry.coordinates[1]}, type:a.properties.layer};
    });
    this.b[b] = a;
    c(a);
    F(this.a, "loading") && E(this.a, "loading");
  }, a), "GET");
}
function jf(a, b) {
  a.dispatchEvent(new A(nf, {location_type:b.type, lonlat:[b.lonlat.x, b.lonlat.y], srs:l(void 0) ? void 0 : "EPSG:4326"}));
}
var nf = "jumpto";
function of(a, b) {
  var c = n(a) ? K(a) : a, d = O("div", {"class":"spatialsearch-inner-container"});
  c.appendChild(d);
  c = O("div", {"class":"spatialsearch-content-panel"});
  d.appendChild(c);
  d = O("div", {"class":"body-container"});
  c.appendChild(d);
  this.b = new gf(d);
  pf(this, d, b, qf(d));
}
function pf(a, b, c, d) {
  a.a = new Ze(b, c);
  Q(d, "timechange", function(a) {
    var b = this.a.a, c = a.target.time[0];
    a = a.target.time[1];
    var d = b.a.ea;
    if (null != c && ga(c)) {
      if (c > b.a.ya) {
        throw {name:"WrongParameterExecption", message:"Start value shouldn't be higher than the end value."};
      }
      b.a.ea = c;
    }
    if (null != a && ga(a)) {
      if (a < b.a.ea) {
        throw b.a.ea = d, {name:"WrongParameterExecption", message:"End value shouldn't be lower than the start value."};
      }
      b.a.ya = a;
    }
    b = this.a.a;
    Ye(b, y.fa(b.g), b.o);
  }, void 0, a);
}
function qf(a) {
  var b = qa + "/_search", c = new id(a);
  V(b, function(a) {
    a = a.target;
    W(a) ? (a = W(a), a = [(new Date(a.aggregations.summary.min)).getUTCFullYear(), (new Date(a.aggregations.summary.max)).getUTCFullYear()]) : a = [1850, 1970];
    jd(c, a);
  }, "POST", JSON.stringify({aggs:{summary:{stats:{field:"time"}}}}));
  return c;
}
;function rf(a, b, c) {
  this.a = n(a) ? K(a) : a;
  a = O("div", {"class":"container"});
  this.a.appendChild(a);
  var d = O("div", {"class":"row-metadata"});
  a.appendChild(d);
  a = O("div", {"class":"col-md-8 col-lg-8 metdata-col"});
  d.appendChild(a);
  var e = O("div", {"class":"col-md-4 col-lg-4 thumbnail-col"});
  d.appendChild(e);
  var f = c.description, d = O("div", {"class":"description"});
  a.appendChild(d);
  f = O("h3", {innerHTML:f});
  d.appendChild(f);
  d = O("img", {"class":"thumbnail", src:c.thumb});
  e.appendChild(d);
  f = y.c("metadata-keyword");
  d = c.keywords;
  e = sf(a);
  f = O("div", {"class":"label", innerHTML:f});
  e.appendChild(f);
  d = O("div", {innerHTML:d});
  e.appendChild(d);
  for (e = 0;e < c["online-resources"].length;e++) {
    var f = y.c("metadata-online-res"), d = c["online-resources"][e].url, h = sf(a), f = O("div", {"class":"label", innerHTML:f});
    h.appendChild(f);
    f = O("div");
    h.appendChild(f);
    var h = new X(d), m = !1;
    l(h.a.get("SERVICE")) && "wcs" == h.a.get("SERVICE").toLowerCase() && h.a.get("REQUEST") && "getcoverage" == h.a.get("REQUEST").toLowerCase() && (m = !0);
    ue(h, "", void 0);
    d = m ? O("a", {target:"_blank", href:d, innerHTML:h.toString(), "class":"download"}) : O("a", {target:"_blank", href:d, innerHTML:h.toString()});
    f.appendChild(d);
  }
  d = y.c("metadata-spatial-res");
  c = c.denominator;
  e = sf(a);
  d = O("div", {"class":"label", innerHTML:d});
  e.appendChild(d);
  d = O("div");
  e.appendChild(d);
  e = O("label", {innerHTML:""});
  d.appendChild(e);
  c = O("span", {innerHTML:c});
  d.appendChild(c);
  b = O("span", {"class":"unique-id metadata-content-row", innerHTML:'<div class="label">' + y.c("metadata-unqiue-id") + "</div><div>" + b + "</div>"});
  a.appendChild(b);
}
function sf(a) {
  var b = O("div", {"class":"metadata-content-row"});
  a.appendChild(b);
  return b;
}
;q("vk2.app.MapProfileApp", function(a) {
  var b = y.getQueryParam("objectid");
  null != b ? V(qa + "/map/" + b, p(function(b) {
    if (b = W(b.target)) {
      b = Ia(b._id, b._source), tf(b, a);
    }
  }, this)) : console.log("Could not identify objectid.");
});
function tf(a, b) {
  var c = a.getProperties();
  K(b.titleshortId).innerHTML = c.title;
  K(b.titlelongId).innerHTML = c.titlelong;
  K(b.linkToFotothekId).href = c.plink;
  if (ol.has.WEBGL) {
    d = new pe(b.zoomifyContainer, c.zoomify, !0), new rf(b.metadataContainer, a.getId(), c), Q(d, "loadend", function() {
      d.getMap().addControl(new Pe);
    });
  } else {
    var d = new pe(b.zoomifyContainer, c.zoomify);
    new rf(b.metadataContainer, a.getId(), c);
  }
}
;function uf(a, b) {
  this.b = n(a) ? K(a) : a;
  var c = l("vertical") && n("vertical") ? "vertical" : "horizontal", d = this.b, e = O("div", {"class":"opacity-container"});
  d.appendChild(e);
  d = O("div", {"class":"slider-container opacity-slider"});
  e.appendChild(d);
  this.a = O("div", {"class":"slider"});
  d.appendChild(this.a);
  vf(this, this.a, b, c);
}
function vf(a, b, c, d) {
  function e(a, b) {
    "vertical" == d ? b.style.top = 100 - (a - 0) / 100 * 100 + "%" : b.style.left = (a - 0) / 100 * 100 + "%";
    b.innerHTML = a + "%";
  }
  var f = 100 * c.getOpacity();
  $(b).slider({min:0, max:100, value:f, animate:"slow", orientation:d, step:1, slide:function(a, b) {
    var d = b.value;
    e(d, h);
    c.setOpacity(d / 100);
    y.ba();
  }, change:p(function(a, b) {
    var d = b.value;
    e(d, h);
    c.setOpacity(d / 100);
    y.ba();
  }, a)});
  var h = O("div", {"class":"tooltip value", innerHTML:"100%"});
  b.appendChild(h);
  c.on("change:opacity", function() {
    var a = 100 * this.getOpacity();
    19 < Math.abs(a - $(b).slider("value")) && $(b).slider("value", a);
  });
}
;y.f = {};
y.f.Ub = function(a) {
  a = a.split("/");
  for (var b = "/", c = 0;c < a.length;c++) {
    "" !== a[c] && (b += a[c] + "/");
  }
  return b;
};
y.f.A = function() {
  var a = new X(window.location.href), b = y.getQueryParam("L"), b = void 0 !== b && "" !== b ? b : 0, a = a.l;
  return x ? -1 === a.indexOf(Ca) ? (-1 !== a.indexOf("/de") || -1 !== a.indexOf("/en") ? a.substring(0, 3) : "") + Ca + "?" : a.substring(0, a.indexOf(Ca) + Ca.length) + "?" : a + "?" + Ca + "&L=" + b;
};
y.f.K = function() {
  var a = y.f.A(), b = a.indexOf("?");
  return a.substring(0, b);
};
y.f.Ba = function(a) {
  new X(window.location.href);
  return x ? y.f.K() + sa + "&" + a : y.f.A() + "&" + sa + "&" + a;
};
y.f.Ab = function(a) {
  new X(window.location.href);
  return x ? y.f.K() + ua + "&" + a : y.f.A() + "&" + ua + "&" + a;
};
y.f.zb = function(a) {
  new X(window.location.href);
  return x ? y.f.K() + ta + "&" + a : y.f.A() + "&" + ta + "&" + a;
};
y.f.Bb = function() {
  new X(window.location.href);
  return x ? y.f.K() + ya : y.f.A() + "&" + ya;
};
y.f.Sa = function() {
  new X(window.location.href);
  return x ? y.f.K() + za : y.f.A() + "&" + za;
};
y.f.xb = function(a) {
  new X(window.location.href);
  return x ? y.f.K() + xa + "&" + a : y.f.A() + "&" + xa + "&" + a;
};
y.f.yb = function() {
  new X(window.location.href);
  return x ? y.f.K() + Ba + "&undefined" : y.f.A() + "&" + Ba + "&undefined";
};
y.f.wb = function() {
  new X(window.location.href);
  return x ? y.f.K() + va + "&undefined" : y.f.A() + "&" + va + "&undefined";
};
y.f.ta = function(a, b) {
  var c = void 0 !== a ? "&objectid=" + a : void 0 !== b ? "&" + b : "";
  new X(window.location.href);
  return x ? y.f.K() + Aa + "&" + c : y.f.A() + "&" + Aa + c;
};
y.f.Cb = function(a) {
  new X(window.location.href);
  return x ? y.f.K() + Da + "&objectid=" + a : y.f.A() + "&" + Da + "&objectid=" + a;
};
y.f.Ta = function() {
  return y.f.A();
};
q("vk2.app.GeoreferenceChooseApp", function(a) {
  this.a = [];
  wf(this, K(a.target), K(a.targetCount));
});
function xf(a, b) {
  b.innerHTML = "";
  var c = O("div", {"class":"form-group"}), d = O("input", {type:"text", id:"georeference-search", name:"georeference-search", "class":"form-control", placeholder:y.c("georef-search-field") + ":"}), e = O("ul");
  c.appendChild(d);
  b.appendChild(c);
  b.appendChild(e);
  var f = p(function(a) {
    e.innerHTML = "";
    for (var b = 0, c = a.length;b < c;b++) {
      P(e, yf(a[b]));
    }
    setTimeout(function() {
      $("body").scroll();
    }, 100);
  }, a), h;
  Q(d, "keydown", function(a) {
    clearTimeout(h);
    h = setTimeout(p(function() {
      for (var b = a.target.value, c = $.extend(!0, [], this.a), d = [], e = c.length - 1;0 <= e;e--) {
        0 === c[e]._source.title.indexOf(b, 0) && d.push(c[e]);
      }
      f(d);
    }, this), 1E3);
  }, void 0, a);
  f(a.a);
}
function zf(a, b, c, d) {
  void 0 !== b.hits && void 0 !== b.hits.total && (d.innerHTML = b.hits.total);
  void 0 !== b.hits && void 0 !== b.hits.hits && 0 < b.hits.hits.length && (a.a = b.hits.hits, xf(a, c));
  $("body").scroll(function() {
    $(".lazy-image").lazyload();
  });
  $(".lazy-image").lazyload();
}
function wf(a, b, c) {
  var d = new U;
  R(d, "success", function(a) {
    a = a.target;
    var d = W(a);
    zf(this, d, b, c);
    z(a);
  }, !1, a);
  R(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = qa + "/_search?size=2000";
  var e = oe("georeference", [!1]);
  e.sort = {title:{order:"asc"}};
  d.send(a, "POST", JSON.stringify(e));
}
function yf(a) {
  var b = a._source, c = a._id;
  a = b.maptype;
  var d = void 0 !== b.thumb ? b.thumb : "#", c = void 0 !== c ? y.f.ta(c) : "#", e = b.time;
  return O("li", {id:b.id, innerHTML:'<div class="container record-container"><div class="image"><img class="lazy-image" alt="" data-original="' + d + '"></div><div class="body"><p><strong>' + b.title + "</strong></p><p>" + y.c("georef-choose-time") + ": " + e + "</p><p>" + y.c("georef-choose-maptype") + ": " + a + '</p></div><div class="tools"><a class="btn btn-primary" href="' + c + '" target="_top">' + y.c("georef-choose-goToGeoreference") + "</a></div></div>"});
}
;q("vk2.app.RankingPageApp", function(a) {
  a = l(a.tableEl) && Cc(a.tableEl) ? a.tableEl : l(a.tableEl) && n(a.tableEl) ? K(a.tableEl) : void 0;
  if (void 0 === a) {
    throw "Could not find targetElement for table data!";
  }
  var b = vc(wc("tbody", void 0, a)[0]);
  b.innerHTML = "";
  V(y.f.Sa(), function(a) {
    var d = a.target;
    if ("complete" === a.type && 200 === he(d)) {
      for (a = W(d).pointoverview, d = 0;d < a.length;d++) {
        var e = a[d], e = O("tr", {innerHTML:'<th class="rank">' + d + '</th><th class="name">' + e.userid + '</th><th class="new">' + e["new"] + '</th><th class="update">' + e.update + '</th><th class="points">' + e.points + "</th>"});
        b.appendChild(e);
      }
    }
  }, "GET");
});
q("vk2.app.UserHistoryApp", function(a) {
  Af(this, K(a.target), K(a.targetPoints));
  $("body").scroll(function() {
    $(".lazy-image").lazyload();
  });
  $(".lazy-image").lazyload();
});
function Bf(a, b, c) {
  void 0 !== a.points && (c.innerHTML = a.points);
  if (void 0 !== a.georef_profile) {
    c = 0;
    for (var d = a.georef_profile.length;c < d;c++) {
      P(b, Cf(a.georef_profile[c]));
    }
  }
  setTimeout(function() {
    $("body").scroll();
  }, 100);
}
function Af(a, b, c) {
  var d = new U;
  R(d, "success", function(a) {
    a = a.target;
    var d = W(a);
    Bf(d, b, c);
    z(a);
  }, !1, a);
  R(d, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = y.f.Bb();
  d.send(a, "GET");
}
function Cf(a) {
  var b = void 0 !== a.transformed && !0 === a.transformed ? Ga + "?SERVICE=WMS&VERSION=1.0.0&REQUEST=GetCapabilities&map=" + a.mapid : "#", c = void 0 !== a.thumbnail ? a.thumbnail : "#", d = y.f.A() + "&oid=" + a.mapid, d = void 0 !== a.transformed && !0 === a.transformed ? '<a href="' + d + '" target="_blank" class="btn btn-default">' + y.c("evaluation-showmap") + "</a>" : "", e = void 0 !== a.transformed && !0 === a.transformed ? '<a href="' + y.f.ta(void 0, "georeferenceid=" + a.georefid) + 
  '" target="_blank" class="btn btn-default">' + y.c("evaluation-gotoprocess") + "</a>" : "", f = "" !== a.isvalide ? a.isvalide : "waiting", f = '<span class="label ' + ("waiting" === f ? "label-warning" : "isvalide" === f ? "label-success" : "label-danger") + '">' + f + "</span>";
  return O("article", {id:a.georefid, innerHTML:'<div class="media"><a class="pull-right" href="' + b + '"><img alt="" class="lazy-image" alt="" data-original="' + c + '"></a><div class="media-body"><h3>' + a.title + "</h3><p><strong>" + y.c("georef-history-mapId") + ":</strong> " + a.mapid + "</p><p><strong>Validation:</strong> " + f + '</p><p class="links">' + d + " " + e + '</p><p class="meta">Created: ' + a.georeftime + "</p></div></div>"});
}
;q("vk2.app.WelcomePageApp", function(a) {
  var b = void 0 !== a.georefenceElClass ? L(a.georefenceElClass) : void 0, c = void 0 !== a.overallGeorefenceElClass ? L(a.overallGeorefenceElClass) : void 0, d = void 0 !== a.relGeoreferenceElClass ? L(a.relGeoreferenceElClass) : void 0, e = void 0 !== a.georeferenceUserRankingElId ? K(a.georeferenceUserRankingElId) : void 0;
  $("#" + a.deactivateWelcomePageId).change(function() {
    var a = $(this).prop("checked") ? "off" : "on";
    y.kb("vk2-welcomepage", a);
  });
  void 0 !== b && void 0 !== c && void 0 !== d && void 0 !== e && Df(this, b, c, d, e);
});
function Df(a, b, c, d, e) {
  var f = new U;
  R(f, "success", function(a) {
    a = a.target;
    var f = W(a), r = f.georeference_map_count, u = r + f.missing_georeference_map_count, w = parseInt(r / u * 100);
    Ef(b, r);
    Ef(c, u);
    for (r = 0;r < d.length;r++) {
      var u = Ed(d[r], "width"), B = Ed(d[r], "margin-left");
      void 0 !== u && "" !== u && Bd(d[r], "width", w + "%");
      void 0 !== B && "" !== B && (-1 < B.indexOf("-") ? Bd(d[r], "margin-left", "-" + w + "%") : Bd(d[r], "margin-left", w + "%"));
    }
    $("head").append("<style>.vk2WelcomePageBody .vk2GeoreferenceProgressText .content:after{ left:" + w + "%; }</style>");
    w = Math.min(f.pointoverview.length, 3);
    for (r = 0;r < w;r++) {
      u = f.pointoverview[r], u = O("li", {innerHTML:"<span><b>" + (u.hasOwnProperty("username") ? u.username : u.userid) + ":</b> " + u.points + " " + y.c("welcome-points") + "</span>"}), e.appendChild(u);
    }
    z(a);
  }, !1, a);
  R(f, "error", function() {
    alert("Something went wrong, while trying to fetch data from the server.");
  }, !1, a);
  a = y.f.Sa();
  f.send(a, "GET");
}
function Ef(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c].innerHTML = b;
  }
}
;function Ff(a, b, c) {
  var d = a.getVisible() ? "visible" : "notvisible", e = O("li", {"class":"layermanagement-record " + d, id:b, "data-id":a.getId()});
  b = O("div", {"class":"control-container"});
  e.appendChild(b);
  d = O("button", {"class":"move-layer-top minimize-tool", type:"button", title:y.c("factory-move-top"), innerHTML:y.c("factory-move-top")});
  b.appendChild(d);
  Q(d, "click", function(b) {
    c.removeLayer(a);
    c.addLayer(a);
    b.stopPropagation();
    y.ba();
  });
  d = O("button", {"class":"disable-layer minimize-tool", type:"button", title:y.c("factory-show-map"), innerHTML:y.c("factory-show-map")});
  b.appendChild(d);
  Q(d, "click", function() {
    F(e, "visible") ? (Mb(e, "visible", "notvisible"), a.setVisible(!1)) : (Mb(e, "notvisible", "visible"), a.setVisible(!0));
    y.ba();
  });
  d = O("button", {"class":"remove-layer minimize-tool", type:"button", title:y.c("factory-rm-map"), innerHTML:y.c("factory-rm-map")});
  b.appendChild(d);
  Q(d, "click", function(b) {
    c.removeLayer(a);
    b.stopPropagation();
    y.ba();
  });
  d = O("div", {"class":"drag-btn"});
  b.appendChild(d);
  d = O("a", {"class":"thumbnail", href:"#"});
  e.appendChild(d);
  var f = O("img", {onerror:'this.onerror=null;this.src="http://www.deutschefotothek.de/images/noimage/image120.jpg"', alt:"...", src:a.Ua()});
  d.appendChild(f);
  d = O("div", {"class":"metadata-container"});
  e.appendChild(d);
  f = O("h4", {innerHTML:a.Va()});
  d.appendChild(f);
  f = O("div", {"class":"timestamps"});
  d.appendChild(f);
  d = O("span", {"class":"timestamps-label", innerHTML:y.c("timestamp") + " " + a.getTime()});
  f.appendChild(d);
  hb.get("vk2-auth") && (d = O("a", {"class":"georeference-update", title:y.c("factory-update-georef") + " ...", innerHTML:y.c("factory-update-georef") + " ...", target:"_blank", href:y.f.ta(a.getId())}), b.appendChild(d));
  new uf(e, a);
  a.on("change:visible", function() {
    !a.getVisible() && F(e, "visible") ? Mb(e, "visible", "notvisible") : a.getVisible() && F(e, "notvisible") && Mb(e, "notvisible", "visible");
  });
  return e;
}
;function Gf(a, b, c) {
  V(y.f.yb(), function(a) {
    200 === he(a.target) ? b(a) : c(a);
  }, "POST", "req=" + JSON.stringify(a));
}
function Hf(a, b) {
  V(y.f.wb(), b, "POST", "req=" + JSON.stringify(a));
}
;function If(a, b, c) {
  this.a = b;
  this.g = c;
  b = n(a) ? K(a) : a;
  a = O("div", {"class":"layermanagement-container", id:"layermanagement-container"});
  b.appendChild(a);
  b = O("div", {"class":"heading"});
  a.appendChild(b);
  c = O("span", {"class":"header-label", innerHTML:y.c("layermanagement-header-lbl")});
  b.appendChild(c);
  c = O("ul", {"class":"layermanagement-body", innerHTML:'<li class="empty">' + y.c("layermanagement-start-msg") + "</li>"});
  a.appendChild(c);
  this.b = c;
  new Je(b, this.g);
  new Le(b, this.g);
  this.I();
  S.call(this);
}
t(If, S);
function Jf(a) {
  a = a.a.getArray();
  for (var b = [], c = 0, d = a.length;c < d;c++) {
    l(a[c].allowUseInLayerManagement) && a[c].allowUseInLayerManagement && b.push(a[c]);
  }
  return b;
}
function Kf(a, b) {
  for (var c = a.a.getArray(), d = 0, e = c.length;d < e;d++) {
    if (b === c[d]) {
      return d;
    }
  }
}
If.prototype.h = function(a) {
  if (l(a.element.allowUseInLayerManagement) && a.element.allowUseInLayerManagement) {
    this.b.innerHTML = "";
    a = Jf(this);
    for (var b = a.length - 1;0 <= b;b--) {
      var c = Ff(a[b], b, this.g);
      this.b.appendChild(c);
    }
  }
  $(this.b).sortable({revert:!0, handle:".drag-btn", stop:p(function(a, b) {
    var c = Jf(this), h = L("layermanagement-record", this.b), m = h.length - parseInt(h[b.item.index()].id, 0) - 1, r = b.item.index(), u = c.length - 1 - r, h = parseInt(h[r].id, 0);
    l(h) && m != r && (m = c[h], r = Kf(this, m), this.a.removeAt(r), c = Kf(this, c[u]), u > h ? this.a.insertAt(c + 1, m) : this.a.insertAt(c, m));
  }, this)});
};
If.prototype.I = function() {
  this.a.on("add", this.h, this);
  this.a.on("remove", this.h, this);
};
If.prototype.O = function() {
  this.a.un("add", this.h, this);
  this.a.un("remove", this.h, this);
};
If.prototype.getLayers = function() {
  return this.a.getArray();
};
function Lf() {
  S.call(this);
}
t(Lf, S);
function Mf(a, b) {
  var c = Ee(new X(window.location.href)), d, e;
  if (Ie(c, "c")) {
    var f = c.get("c").split(",");
    d = ol.proj.transform([parseFloat(f[0], 0), parseFloat(f[1], 0)], "EPSG:4326", v.projection);
    e = void 0 !== c.get("z") ? parseInt(c.get("z"), 0) : 4;
    if (isNaN(d[0]) || isNaN(d[1])) {
      d = ol.proj.transform([parseFloat(f[0], 0), parseFloat(f[1], 0)], "EPSG:3857", v.projection);
    }
    Nf(b, d, e);
  }
  if (Ie(c, "pos") && y.B()) {
    var f = y.S(), h = f.getCesiumScene().camera, m = c.get("pos").split(","), m = {x:parseFloat(m[0], 0), y:parseFloat(m[1], 0), z:parseFloat(m[2], 0)}, r = void 0 !== c.get("h") ? parseFloat(c.get("h"), 5) : 0, u = void 0 !== c.get("p") ? parseFloat(c.get("p"), 10) : 0, w = void 0 !== c.get("r") ? parseFloat(c.get("r"), 10) : 0;
    f.getEnabled() || f.setEnabled(!0);
    h.setView({destination:m, orientation:{heading:r, pitch:u, roll:w}});
  }
  var B = p(function(a, c) {
    var f = Ja(a);
    if (void 0 !== c) {
      for (var h = 0;h < M.length;h++) {
        for (var m = 0;m < f.length;m++) {
          M[h] == f[m].getId() && this.dispatchEvent(new A("addmap", {feature:f[m]}));
        }
      }
    } else {
      for (m = 0;m < f.length;m++) {
        this.dispatchEvent(new A("addmap", {feature:f[m]}));
      }
    }
    !d && 0 < f.length && !y.B() && (d = f[0].getGeometry().getInteriorPoint().getCoordinates(), Nf(b, d, e));
  }, a);
  if (Ie(c, "oid") && "" !== c.get("oid")) {
    for (var M = c.get("oid").split(","), c = 0;c < M.length;c++) {
      "" == M[c] && M.splice(c, 1);
    }
    ne(M, function(a) {
      a = a.target;
      var b = W(a) ? W(a) : void 0;
      z(a);
      void 0 !== b.docs && 0 < b.docs.length && B(b.docs, M);
    });
  } else {
    Ie(c, "dataid") && "" !== c.get("dataid") && (f = qa + "/_search", c = oe("dataid", [c.get("dataid")]), V(f, function(a) {
      a = a.target;
      var b = W(a) ? W(a) : void 0;
      z(a);
      void 0 !== b.hits && void 0 !== b.hits.hits && 0 < b.hits.hits.length && B(b.hits.hits);
    }, "POST", JSON.stringify(c)));
  }
}
function Of(a) {
  var b = "";
  a.getLayers().forEach(function(a) {
    l(a.getId) && (b += a.getId() + ",");
  });
  var c = ol.proj.transform(a.getView().getCenter(), v.projection, "EPSG:4326"), d = a.getView().getZoom();
  a = Ha && void 0 !== window.ol3d ? window.location.origin + "/vkviewer/main/3d/?welcomepage=off" : window.location.origin + y.f.A() + "?welcomepage=off";
  a = new X(a);
  var e = a.a;
  y.B() && da(N("flip-mode-3d")) ? (c = y.S().getCesiumScene(), d = Cesium.Ellipsoid.WGS84.cartographicToCartesian(c.camera.positionCartographic), e.set("h", c.camera.heading), e.set("p", c.camera.pitch), e.set("pos", d.x + "," + d.y + "," + d.z), e.set("r", c.camera.roll)) : (e.set("z", d), e.set("c", y.round(c[0], 4) + "," + y.round(c[1], 4)));
  e.set("oid", b);
  ue(a, e);
  return a.toString();
}
;function Pf(a) {
  a = a || {};
  var b = O("div", {"class":"permalink ol-unselectable"}), c = O("a", {href:"#permalink", innerHTML:"P", "class":"ol-has-tooltip"});
  b.appendChild(c);
  var d = O("span", {role:"tooltip", innerHTML:y.c("permalink-title")});
  c.appendChild(d);
  var e = O("form", {id:"permaCopyBox", style:"display:none;"}), d = O("div", {"class":"permaClose"});
  e.appendChild(d);
  d = O("div", {"class":"nose"});
  e.appendChild(d);
  d = O("div", {"class":"moreDots", innerHTML:"..."});
  e.appendChild(d);
  var f = O("input", {type:"text", id:"permalinkResult", readonly:"readonly", value:"#"});
  e.appendChild(f);
  d = "MacIntel" == navigator.platform ? "&#8984;" : "Strg";
  d = O("label", {"for":"permalinkResult", innerHTML:y.c("permalink-msg") + " " + d + "+C."});
  e.appendChild(d);
  b.appendChild(e);
  d = p(function(a) {
    a.preventDefault();
    $(e).hasClass("open") ? ($(e).fadeOut().removeClass("open"), $(f).blur()) : (f.value = Of(this.getMap()), $(e).fadeIn().addClass("open"), $(f).focus().select());
  }, this);
  Q(c, "click", d);
  Q(c, "touchstart", d);
  ol.control.Control.call(this, {element:b, target:a.target});
}
ol.inherits(Pf, ol.control.Control);
function Nf(a, b, c) {
  a.getView().setCenter(b);
  a.getView().setZoom(c);
}
function Ke(a) {
  a = a.getLayers().getArray();
  for (var b = [], c = 0;c < a.length;c++) {
    y.B() ? a[c] instanceof Z && b.push(a[c]) : a[c] instanceof Y && b.push(a[c]);
  }
  return b;
}
function Qf(a, b, c) {
  b = void 0 !== b ? b : {projection:"EPSG:3857", center:[1528150, 6630500], zoom:2};
  var d = [new ol.control.Attribution({collapsible:!1, collapsed:!1}), new ol.control.Zoom, new ol.control.FullScreen, new ed, new ol.control.ScaleLine, new Pf, new Re];
  l(c) && !1 !== c || d.push(new Qe({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})}));
  var e = [new ol.Attribution({html:'\u00a9 <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})];
  l(c) && !0 === c && e.push(new ol.Attribution({html:'<a href="https://cesiumjs.org/data-and-assets/terrain/stk-world-terrain.html">\u00a9 Analytical Graphics, Inc., \u00a9 CGIAR-CSI, Produced using Copernicus data and information funded by the European Union - EU-DEM layers,  \u00a9 Commonwealth of Australia (Geoscience Australia) 2012</a>'}));
  this.g = new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.XYZ({urls:["//a.tile.openstreetmap.org/{z}/{x}/{y}.png", "//b.tile.openstreetmap.org/{z}/{x}/{y}.png", "//c.tile.openstreetmap.org/{z}/{x}/{y}.png"], crossOrigin:"*", attributions:e})})], renderer:"canvas", target:a, interactions:ol.interaction.defaults().extend([new ol.interaction.DragRotateAndZoom]), controls:d, view:new ol.View(b)});
  if (!0 === Ha && l(c) && !0 === c) {
    a = new olcs.OLCesium({map:this.g, sceneOptions:{terrainExaggeration:2}});
    a.enableAutoRenderLoop();
    c = a.getCesiumScene();
    var d = c.globe, f = c.camera;
    window.ol3d = a;
    window.minimumRetrievingLevel = 8;
    window.imageryAvailableLevels = void 0;
    d.baseColor = Cesium.Color.WHITE;
    d.tileCacheSize = "100";
    d.maximumScreenSpaceError = 1.5;
    c.backgroundColor = Cesium.Color.WHITE;
    c.globe.depthTestAgainstTerrain = !0;
    c.screenSpaceCameraController.maximumZoomDistance = 3E5;
    c.terrainProvider = new Cesium.CesiumTerrainProvider({url:"//assets.agi.com/stk-terrain/world", Wb:!0});
    c.fog.enabled = !0;
    c.fog.density = 3.880708760225126E-6;
    c.fog.screenSpaceErrorFactor = 25;
    c.scene3DOnly = !0;
    var h = ol.proj.transformExtent(b.extent, b.projection, "EPSG:4326").map(function(a) {
      return a * Math.PI / 180;
    });
    c.postRender.addEventListener(function() {
      var a = f.positionCartographic.clone();
      if (!ol.extent.containsXY(h, a.longitude, a.latitude)) {
        var b = .05 * a.height / this.screenSpaceCameraController.maximumZoomDistance;
        a.longitude = Math.max(h[0] - b, a.longitude);
        a.latitude = Math.max(h[1] - b, a.latitude);
        a.longitude = Math.min(h[2] + b, a.longitude);
        a.latitude = Math.min(h[3] + b, a.latitude);
        this.camera.setView({destination:Cesium.Ellipsoid.WGS84.cartographicToCartesian(a), orientation:{heading:this.camera.heading, pitch:this.camera.pitch}});
      }
      this.screenSpaceCameraController.minimumZoomDistance = 1800 < a.height ? 400 : 200;
    }, c);
    b = Ee(new X(window.location.href));
    a = new bd;
    Ie(b, "pos") && dd(a, "3d");
    this.g.addControl(a);
  }
  this.g.on("singleclick", function(a) {
    var b = [];
    y.B() ? (a = this.g.getCoordinateFromPixel(a.pixel), b = this.N.getSource().getFeaturesAtCoordinate(a)) : this.getMap().forEachFeatureAtPixel(a.pixel, function(a) {
      b.push(a);
    });
    Rf(b);
  }, this);
}
q("vk2.module.MapModule", Qf);
function Sf(a) {
  return Ha && void 0 !== window.ol3d ? new Z({time:a.get("time"), thumbnail:a.get("thumb"), title:a.get("title"), objectid:a.get("id"), id:a.getId(), dataid:a.get("dataid"), tms:a.get("tms"), clip:a.getGeometry().clone()}) : new Y({time:a.get("time"), thumbnail:a.get("thumb"), title:a.get("title"), objectid:a.get("id"), id:a.getId(), dataid:a.get("dataid"), tms:a.get("tms"), clip:a.getGeometry().clone()});
}
Qf.prototype.getMap = function() {
  return this.g;
};
Qf.prototype.getMap = Qf.prototype.getMap;
function Tf(a, b) {
  Q(b, "addmap", function(a) {
    a = a.target.feature;
    !0 === a.get("georeference") && (this.g.addLayer(Sf(a)), y.B() && (a = Te(a.getGeometry().clone(), a.getId(), a.get("time"), a.get("title")), this.N.getSource().addFeature(a)));
  }, void 0, a);
  Mf(b, a.g);
}
function Uf(a, b) {
  a.a = b.a;
  a.N = y.B() ? new ol.layer.Vector({source:new ol.source.Vector, style:function() {
    return [new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.0)"})})];
  }}) : void 0;
  void 0 !== a.N && (a.N.set("altitudeMode", "clampToGround"), a.N.set("type", "click"), a.g.getLayers().on("add", function(a) {
    a = a.target.getArray()[a.target.getLength() - 1];
    if (a instanceof Y || a instanceof Z) {
      this.g.removeLayer(this.N), this.g.addLayer(this.N);
    }
  }, a), a.g.addLayer(a.N));
  Q(a.a, "click-record", function(a) {
    a = a.target.feature;
    var b;
    a: {
      b = a.getId();
      for (var e = this.g.getLayers().getArray(), f = 0;f < e.length;f++) {
        if ((e[f] instanceof Y || e[f] instanceof Z) && e[f].getId() == b) {
          b = !0;
          break a;
        }
      }
      b = !1;
    }
    !b && a.get("georeference") && (this.g.addLayer(Sf(a)), Ha && void 0 !== window.ol3d && (a = Te(a.getGeometry().clone(), a.getId(), a.get("time"), a.get("title")), this.N.getSource().addFeature(a)));
  }, void 0, a);
  Q(b.b, "jumpto", function(a) {
    var b = a.target.lonlat;
    a = ol.proj.transform([parseFloat(b[0]), parseFloat(b[1])], a.target.srs, v.projection);
    Nf(this.g, a, 6);
  }, void 0, a);
}
function Rf(a) {
  if (0 < a.length) {
    var b = new Hd("vk2-overlay-modal", document.body, !0);
    b.open(void 0, "mapcontroller-click-modal");
    for (var c = O("section"), d = 0;d < a.length;d++) {
      var e = O("a", {href:y.f.Cb(a[d].getId()), innerHTML:a[d].get("title") + " " + a[d].get("time"), target:"_self"});
      c.appendChild(e);
      var f = O("br");
      c.appendChild(f);
    }
    d = N("modal-body", b.H);
    Cc(c) && (d.appendChild(c), Jd(b, c));
    1 == a.length && e.click();
  }
}
;q("vk2.app.PresentationApp", function(a) {
  y.Na();
  var b = l(a.authenticate) && "boolean" == typeof a.authenticate ? a.authenticate : !1;
  y.Za(l(a.modalAnchorClassName) ? a.modalAnchorClassName : "vk2-modal-anchor");
  b || Vf();
  var b = new Qf(a.mapContainerId, v, l(a.with25d) ? a.with25d : void 0), c = new of(a.spatialsearchContainerId, b.getMap());
  Uf(b, c);
  new If(a.mapContainerId, b.getMap().getLayers(), b.getMap());
  c = new Lf(b.getMap());
  Tf(b, c);
  setTimeout(function() {
    y.Jb(a.mapContainerId);
  }, 500);
});
function Vf() {
  var a = y.getQueryParam("welcomepage");
  K("welcome-page-link") && "off" !== y.vb() && "off" !== a && K("welcome-page-link").click();
}
;function Wf(a, b, c, d) {
  var e = O("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-submit deactivate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + y.c("georef-confirm")});
  K(a).appendChild(e);
  Q(e, "click", p(this.a, this, b, c, d));
  S.call(this);
}
t(Wf, S);
Wf.prototype.a = function(a, b, c) {
  this.dispatchEvent(new A("start-confirm", {}));
  var d = Kc(), e = Xf(b, d);
  c = 0 < c.getFeatures().length ? c.getFeatures()[0].getGeometry().clone().transform(v.projection, d) : void 0;
  var f = b.getType();
  if (4 > e.gcps.length) {
    alert("You have to place at least 4 ground control points");
  } else {
    var h = {georeference:e, id:a, type:f};
    void 0 !== c && (h.clip = {source:d, polygon:c.getCoordinates()[0]});
    "update" === f && (a = l(b.fb) ? b.fb : void 0, h.overwrites = a);
    var m = p(function(a) {
      a = W(a.target);
      this.dispatchEvent(new A("end-confirm", {data:a}));
    }, this);
    p(function() {
      this.dispatchEvent(new A("error", {error:"Something went wrong, while sending confirmation data from the server."}));
    }, this);
    h.hasOwnProperty("clip") ? Hf(h, m) : y.sa(y.c("georef-confirm-clip-title"), y.c("georef-confirm-clip-msg"), function() {
      Hf(h, m);
    }, "georeference-confirm-without-clip");
  }
};
function Yf(a, b, c) {
  var d = O("div", {"class":"vk2GeorefToolsBtn btn btn-default btn-validate", innerHTML:'<span class="glyphicon glyphicon-refresh"></span> ' + y.c("georef-validate")});
  K(a).appendChild(d);
  Q(d, "click", p(this.a, this, b, c));
  S.call(this);
}
t(Yf, S);
Yf.prototype.a = function(a, b) {
  var c = {georeference:Zf(b, Jc(), Kc()), id:a};
  if (4 > c.georeference.gcps.length) {
    y.sa("Info", y.c("georef-confirm-warn-gcp"), function() {
    }, "georef-validation-dialog", !1);
  } else {
    this.dispatchEvent(new A("start-warping", {}));
    var d = p(function(a) {
      a = W(a.target);
      this.dispatchEvent(new A("end-warping", {data:a, georefParams:c}));
    }, this), e = p(function() {
      this.dispatchEvent(new A("error", {error:"Something went wrong, while fetching validation data from the server."}));
    }, this);
    Gf(c, d, e);
  }
};
function $f(a) {
  this.a = l(a.ja) && ia(a.ja) ? l(a.ja["new"]) ? ab(a.ja["new"]) : ab(a.ja) : {source:"pixel", target:"EPSG:4314"};
  this.fb = l(a.eb) ? a.eb : void 0;
  this.h = l(a.$b) ? a.ib : {source:"pixel", target:"EPSG:900913"};
  this.b = a.sources;
  this.o = l(a.type) ? "update" === a.type ? !0 : !1 : !1;
  this.l = new Ka;
  this.I();
  S.call(this);
}
t($f, S);
$f.prototype.I = function() {
  ag(this, this.b);
  if (this.a.hasOwnProperty("gcps")) {
    for (var a = this.a, b = this.b, c = this.h, d = 0;d < a.gcps.length;d++) {
      var e = a.gcps[d], f = y.Pb(e.source), f = new ol.Feature(new ol.geom.Point(f)), e = ol.proj.transform(e.target, a.target, c.target), e = new ol.Feature(new ol.geom.Point(e));
      b[0].addFeature(f);
      b[1].addFeature(e);
    }
  }
};
function ag(a, b) {
  function c(a) {
    var c = b[0].getFeatureById(a), h = b[1].getFeatureById(a);
    if (null != c && null != h) {
      c.setProperties({Kb:!0});
      h.setProperties({Kb:!0});
      var m = y.j.Ca();
      m.getText().setText("" + a);
      c.setStyle(m);
      h.setStyle(m);
      d.a = !1;
      d.b = !1;
    }
  }
  var d = a.l;
  b[0].on("addfeature", function(a) {
    if (!1 === d.a) {
      var b = La(d);
      a = a.feature;
      d.a = !0;
      a.setId(b);
      a.setStyle(y.j.La);
      d.a && d.b && c(b);
    } else {
      alert("Please add source to other map!"), this.removeFeature(a.feature);
    }
  });
  b[0].on("removefeature", function(a) {
    a = a.feature.getId();
    var c = void 0 !== a ? b[0].getFeatureById(a) : void 0;
    null === (void 0 !== a ? b[1].getFeatureById(a) : void 0) & null === c && d.a && (d.a = !1);
  });
  b[1].on("removefeature", function(a) {
    a = a.feature.getId();
    var c = void 0 !== a ? b[0].getFeatureById(a) : void 0;
    null === (void 0 !== a ? b[1].getFeatureById(a) : void 0) & null === c && d.b && (d.b = !1);
  });
  b[1].on("addfeature", function(a) {
    if (!1 === d.b) {
      var b = La(d);
      a = a.feature;
      d.b = !0;
      a.setId(b);
      a.setStyle(y.j.La);
      d.a && d.b && c(b);
    } else {
      alert("Please add source to other map!"), this.removeFeature(a.feature);
    }
  });
}
function Zf(a, b, c) {
  b = l(b) ? b : "affine";
  a = bg(a, l(c) ? c : void 0);
  a.algorithm = b;
  return a;
}
function bg(a, b) {
  var c = p(function(a, b) {
    for (var c = [], d = 0;d < a.length;d++) {
      var e = y.Ob(a[d][0].getGeometry().getCoordinates()), w = ol.proj.transform(a[d][1].getGeometry().getCoordinates(), this.h.target, b);
      c.push({source:e, target:w});
    }
    return c;
  }, a), d = ab(a.a), e = l(b) ? b : d.target;
  d.gcps = c(function(a) {
    for (var b = [], c = 0;c < a[0].getFeatures().length;c++) {
      var d = a[0].getFeatures()[c], e;
      da(d.getId()) && (e = a[1].getFeatureById(d.getId()));
      null != d && null != e && b.push([d, e]);
    }
    return b;
  }(a.b), e);
  d.target = e;
  return d;
}
function Xf(a, b) {
  var c = Jc(), c = l(c) ? c : "affine", d = ab(a.a), e = Zf(a, c, l(b) ? b : d.target);
  Zf(a, c, d.target);
  return e;
}
$f.prototype.getType = function() {
  return this.o ? "update" : "new";
};
function cg(a, b) {
  var c = b.getSource(), d;
  this.g = a;
  this.s = [new ol.interaction.Draw({features:c.getFeaturesCollection(), type:"Polygon", style:y.j.Ka, minPoints:5, condition:function(a) {
    a = a.coordinate;
    return void 0 !== d && y.round(d[0], 4) === y.round(a[0], 4) && y.round(d[1], 4) === y.round(a[1], 4) ? !1 : !0;
  }, geometryFunction:function(a, b) {
    b || (b = new ol.geom.Polygon(null));
    void 0 !== b.getCoordinates()[0] && 2 < b.getCoordinates()[0].length && 3 >= b.getCoordinates()[0].length ? d = b.getCoordinates()[0][b.getCoordinates()[0].length - 1] : d = void 0;
    b.setCoordinates(a);
    return b;
  }}), new ol.interaction.Modify({features:c.getFeaturesCollection(), deleteCondition:function(a) {
    var b = 1 <= c.getFeatures().length ? c.getFeatures()[0].getGeometry().getCoordinates()[0] : void 0;
    return void 0 !== b && 5 < b.length && ol.events.condition.shiftKeyOnly(a) && ol.events.condition.singleClick(a);
  }})];
  this.s[0].on("drawstart", function() {
    1 <= c.getFeatures().length && this.finishDrawing();
  }, this.s[0]);
  this.s[0].on("drawend", function(a) {
    a = 1 <= c.getFeatures().length ? c.getFeatures()[0].getGeometry() : a.feature.getGeometry();
    if (5 > a.getCoordinates()[0].length) {
      y.sa("Info", y.c("georef-confirm-warn-clippolygon"), function() {
      }, "georef-validation-dialog", !1), this.finishDrawing();
    } else {
      var b = a.getCoordinates(), d = b[0].length;
      y.round(b[0][d - 2][0], 4) === y.round(b[0][d - 3][0], 4) && y.round(b[0][d - 2][1], 4) === y.round(b[0][d - 3][1], 4) && (b[0].splice(d - 2, 1), a.setCoordinates(b));
    }
  }, this.s[0]);
  c.getFeaturesCollection().on("add", function() {
    1 < c.getFeatures().length ? c.getFeatures().splice(1, 1) : this.dispatchEvent(new A("drawend", {feature:c.getFeatures()[0]}));
  }, this);
  T.call(this);
}
t(cg, T);
cg.prototype.C = function() {
  this.I();
  this.status_ = !0;
};
cg.prototype.I = function() {
  for (var a = 0;a < this.s.length;a++) {
    this.g.addInteraction(this.s[a]);
  }
};
cg.prototype.D = function() {
  this.O();
  this.status_ = !1;
};
cg.prototype.O = function() {
  for (var a = 0;a < this.s.length;a++) {
    this.g.removeInteraction(this.s[a]);
  }
};
function dg(a) {
  this.b = n(a) ? K(a) : a;
  var b = O("div", {"class":"georef-tools-clip-container", id:"georef-tools-clip-container"});
  this.b.appendChild(b);
  eg(this, b);
  a = O("div", {"class":"georef-tools-clip-inner-container", id:"georef-tools-clip-inner-container"});
  b.appendChild(a);
  var b = [], c = fg("noneToggle", "none", y.c("georef-movemap"));
  a.appendChild(c);
  b.push(c);
  var d = fg("drawClip", "drawclip", y.c("georef-drawclip"));
  a.appendChild(d);
  b.push(d);
  Q(c, "click", p(this.a, this, "none", b));
  Q(d, "click", p(this.a, this, "drawclip", b));
  S.call(this);
}
t(dg, pd);
dg.prototype.C = function() {
  var a = K("georef-tools-clip-handler");
  null != a && F(a, "open") || $(a).trigger("click");
};
function fg(a, b, c) {
  var d = O("div", {"class":"tool"});
  a = O("div", {id:a, "class":"tool-move toggle-elements " + a, value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
dg.prototype.D = function() {
  var a = K("georef-tools-clip-handler");
  if (null == a || F(a, "open")) {
    $(a).trigger("click");
    for (var a = L("toggle-elements"), b = 0;b < a.length;b++) {
      F(a[b], "active") && E(a[b], "active");
    }
  }
};
dg.prototype.a = function(a, b) {
  for (var c = p(function(a, b) {
    F(a, "active") || D(a, "active");
    this.dispatchEvent(new A("activate-" + b, a));
  }, this), d = p(function(a, b) {
    F(a, "active") && E(a, "active");
    this.dispatchEvent(new A("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function eg(a, b) {
  var c = O("div", {"class":"georef-tools-clip-handler", id:"georef-tools-clip-handler"});
  b.appendChild(c);
  P(c, O("span", {"class":"icon"}));
  $(c).click(p(function() {
    var a = F(c, "open") ? new A("deactivate", c) : new A("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-clip-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function gg(a, b, c) {
  this.a = new ol.source.Vector({features:new ol.Collection});
  l(c) && (c = Ic(c), this.a.addFeature(c));
  this.J = new ol.layer.Vector({source:this.a, style:y.j.Ka});
  this.J.setMap(b);
  this.b = new cg(b, this.J);
  hg(a, {"activate-drawclip":this.b, "deactivate-drawclip":this.b});
  this.wa = a;
}
t(gg, Ma);
gg.prototype.i = function(a) {
  a = Ic(a.target.clip);
  0 === this.a.getFeatures().length && (this.a.addFeature(a), this.J.addFeature(a));
};
function hg(a, b) {
  function c(a) {
    if (l(a)) {
      var c = a.type;
      l(c) && b.hasOwnProperty(c) && b[c].D();
    } else {
      for (c in b) {
        b.hasOwnProperty(c) && b[c].D();
      }
    }
  }
  Q(a, "activate-drawclip", function(a) {
    c();
    b[a.type].C();
  });
  Q(a, "deactivate-drawclip", c);
  Q(a, "activate", function() {
  });
  Q(a, "deactivate", function() {
    c();
  });
}
;function ig(a) {
  this.m = n(a) ? K(a) : a;
  var b = O("div", {"class":"georef-tools-gcp-container", id:"georef-tools-gcp-container"});
  this.m.appendChild(b);
  jg(this, b);
  a = O("div", {"class":"georef-tools-gcp-inner-container", id:"georef-tools-gcp-inner-container"});
  b.appendChild(a);
  var b = [], c = kg("noneToggle", "none", y.c("georef-movemap"));
  a.appendChild(c);
  b.push(c);
  var d = kg("pointToggle", "addgcp", y.c("georef-setgcp"));
  a.appendChild(d);
  b.push(d);
  var e = kg("dragToggle", "draggcp", y.c("georef-movegcp"));
  a.appendChild(e);
  b.push(e);
  var f = kg("deleteToggle", "delgcp", y.c("georef-delgcp"));
  a.appendChild(f);
  b.push(f);
  Q(c, "click", p(this.a, this, "none", b));
  Q(d, "click", p(this.a, this, "addgcp", b));
  Q(e, "click", p(this.a, this, "draggcp", b));
  Q(f, "click", p(this.a, this, "delgcp", b));
  S.call(this);
}
t(ig, pd);
ig.prototype.C = function() {
  var a = K("georef-tools-gcp-handler");
  null != a && F(a, "open") || $(a).trigger("click");
};
function kg(a, b, c) {
  var d = O("div", {"class":"tool"});
  a = O("div", {id:a, "class":"tool-move toggle-elements " + a, value:b, innerHTML:'<span class="tool-title">' + c + "</span>"});
  d.appendChild(a);
  return d;
}
ig.prototype.D = function() {
  var a = K("georef-tools-gcp-handler");
  if (null == a || F(a, "open")) {
    $(a).trigger("click");
    for (var a = L("toggle-elements"), b = 0;b < a.length;b++) {
      F(a[b], "active") && E(a[b], "active");
    }
  }
};
ig.prototype.a = function(a, b) {
  for (var c = p(function(a, b) {
    F(a, "active") || D(a, "active");
    this.dispatchEvent(new A("activate-" + b, a));
  }, this), d = p(function(a, b) {
    F(a, "active") && E(a, "active");
    this.dispatchEvent(new A("deactivate-" + b, a));
  }, this), e = 0;e < b.length;e++) {
    var f = b[e].children[0];
    f.value === a ? c(f, f.value) : d(f, f.value);
  }
};
function jg(a, b) {
  var c = O("div", {"class":"georef-tools-gcp-handler", id:"georef-tools-gcp-handler"});
  b.appendChild(c);
  P(c, O("span", {"class":"icon"}));
  $(c).click(p(function() {
    var a = F(c, "open") ? new A("deactivate", c) : new A("activate", c);
    this.dispatchEvent(a);
    $("#georef-tools-gcp-inner-container").slideToggle(300, function() {
      $(c).toggleClass("open");
    });
  }, a));
}
;function lg(a) {
  this.a = a.Z;
  var b = a.Nb, c = a.sources[0], d = a.sources[1];
  a = {V:a.$a[0], R:a.$a[1]};
  var e = {V:new ol.layer.Vector({source:c, style:function() {
    return [y.j.qb];
  }}), R:new ol.layer.Vector({source:d, style:function() {
    return [y.j.qb];
  }})}, d = new ld(c, d, a.V, a.R), c = new nd(e.V, e.R, a.V, a.R), f = new md(e.V, e.R, a.V, a.R), d = {"activate-addgcp":d, "deactivate-addgcp":d, "activate-draggcp":c, "deactivate-draggcp":c, "activate-delgcp":f, "deactivate-delgcp":f};
  mg(c);
  ng(b, a, e, d);
  this.wa = b;
}
t(lg, Ma);
function mg(a) {
  function b(a) {
    a.target.feature.setStyle(a.target.targetStyle);
  }
  Q(a, "selected", b);
  Q(a, "deselected", b);
}
function ng(a, b, c, d) {
  function e(a) {
    f();
    d[a.type].C();
  }
  function f(a) {
    if (l(a)) {
      var b = a.type;
      l(b) && d.hasOwnProperty(b) && d[b].D();
    } else {
      for (b in d) {
        d.hasOwnProperty(b) && d[b].D();
      }
    }
  }
  Q(a, "activate-addgcp", e);
  Q(a, "deactivate-addgcp", f);
  Q(a, "activate-draggcp", e);
  Q(a, "deactivate-draggcp", f);
  Q(a, "activate-delgcp", e);
  Q(a, "deactivate-delgcp", f);
  Q(a, "activate", function() {
  });
  Q(a, "deactivate", function() {
    f();
  });
  b.V.addLayer(c.V);
  b.R.addLayer(c.R);
}
;function og(a) {
  var b = n(a.Ha) ? K(a.Ha) : a.Ha, c = n(a.Ga) ? K(a.Ga) : a.Ga, d = a.Hb, e = a.Eb, f = a.Lb, h = a.Qb, m = l(a.Oa) ? a.Oa : void 0, r = l(a.type) ? a.type : void 0, u = l(a.ha) ? a.ha : void 0, w = l(a.Pa) ? a.Pa : void 0, B = [new ol.source.Vector({features:new ol.Collection}), new ol.source.Vector({features:new ol.Collection})], M = l(a.ib) ? M : void 0;
  a = a.Fb.toLowerCase();
  var ma = {mtb:"affine", gl:"affine", ae:"affine", tk:"affine", ak:"tps"};
  a = void 0 !== m ? m.algorithm : ma.hasOwnProperty(a) ? ma[a.toLowerCase()] : ma.mtb;
  for (var ma = $("#transformation-chooser option"), ob = 0;ob < ma.length;ob++) {
    a.toLowerCase() === ma[ob].innerHTML.toLowerCase() && $("#transformation-chooser").val(ma[ob].innerHTML);
  }
  m = new $f({sources:B, ja:m, type:r, eb:w, ib:M});
  b = new ig(b);
  f = new lg({Nb:b, Z:m, $a:[f.getMap(), h.getMap()], sources:B});
  c = new dg(c);
  u = new gg(c, h.getMap(), u);
  B = f.wa;
  m = u.wa;
  Q(B, "activate", m.D);
  Q(m, "activate", B.D);
  R(f.a, "add-gcp-clippolygon", u.i, void 0, u);
  B = new Yf(d, e, f.a);
  d = new Wf(d, e, f.a, u.a);
  pg(B, d, h, u, c);
  b.C();
}
function pg(a, b, c, d, e) {
  Q(a, "start-warping", function() {
    qg(c);
  });
  Q(a, "end-warping", function(a) {
    a = a.target.data;
    var b = 0 < d.a.getFeatures().length ? d.a.getFeatures()[0] : void 0, m = ol.proj.transformExtent(a.extent, Kc(), v.projection);
    rg(c, a.wmsUrl, a.layerId, b);
    c.setZoom(m);
    sg(c);
    e.C();
  });
  Q(a, "error", function() {
    alert("Something went wrong, while trying to request a validation result.");
    sg(c);
  });
  Q(b, "end-confirm", function() {
    window.location.href = y.f.Ta();
  });
  Q(d.b, "drawend", function(a) {
    a = a.target.feature;
    if (void 0 !== c.Y) {
      var b = c.Y.getProperties();
      rg(c, b.wms_url, b.layerid, a);
    }
  });
}
;function tg(a, b) {
  this.b = v.projection;
  this.Y = void 0;
  this.m = K(a);
  var c = l(b) ? b : [640161.933, 5958026.134, 3585834.8011505, 7847377.4901306], d = new ol.layer.Tile({source:new ol.source.OSM});
  this.g = new ol.Map({layers:[d], interactions:ol.interaction.defaults().extend([new ol.interaction.DragZoom]), renderer:"canvas", target:this.m, view:new ol.View({projection:this.b, center:[0, 0], zoom:2}), controls:[new ol.control.FullScreen, new ol.control.Zoom, new ol.control.Attribution, new Qe({spyLayer:new ol.layer.Tile({attribution:void 0, source:new ol.source.OSM})})]});
  this.g.getView().fit(c, this.g.getSize());
  l(b) && (this.a = new ol.control.ZoomToExtent({extent:c}), this.g.addControl(this.a));
  c = new gf(this.m);
  Q(c, "jumpto", function(a) {
    var b = this.g.getView(), c = a.target.lonlat;
    b.setCenter(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], a.target.srs, this.b));
    b.setZoom(12);
  }, void 0, this);
  N("ol-attribution").children[0].children[0].remove();
}
function qg(a) {
  if (!l(ug(a))) {
    var b = O("div", {"class":"result-viewer-loading-panel", id:"result-viewer-loading-panel", innerHTML:'<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100"aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'});
    a.m.appendChild(b);
  }
}
function sg(a) {
  a = ug(a);
  l(a) && Bc(a);
}
function rg(a, b, c, d) {
  l(a.Y) && a.g.removeLayer(a.Y);
  d = void 0 !== d ? d.getGeometry() : void 0;
  a.Y = Ue({mb:b, Ya:c, ha:d}, a.g);
  a.g.getLayers().insertAt(1, a.Y);
  K("opacity-slider-container") && (K("opacity-slider-container").innerHTML = "", new uf(K("opacity-slider-container"), a.Y));
}
tg.prototype.getMap = function() {
  return this.g;
};
function ug(a) {
  for (var b = 0;b < a.m.children.length;b++) {
    if ("result-viewer-loading-panel" === a.m.children[b].id) {
      return a.m.children[b];
    }
  }
}
tg.prototype.setZoom = function(a) {
  void 0 !== a && (a = void 0 === a ? this.g.getView().calculateExtent(this.g.getSize()) : a, this.g.removeControl(this.a), this.a = new ol.control.ZoomToExtent({extent:a}), this.g.addControl(this.a), this.g.getView().fit(a, this.g.getSize()));
};
q("vk2.app.AdminEvaluationApp", function(a) {
  if (!a.hasOwnProperty("process_list") || !a.hasOwnProperty("map_container")) {
    throw "Missing parameter in the vk2.app.AdminEvaluationApp settings. Please check the documentation.";
  }
  var b = a.map_container;
  Hc();
  this.na = new tg(b);
  a.hasOwnProperty("btn_getallprocess") && vg(this, a.btn_getallprocess, a.process_list);
  a.hasOwnProperty("btn_getallinvalideprocess") && vg(this, a.btn_getallinvalideprocess, a.process_list, "validation=invalide");
  a.hasOwnProperty("btn_getsingleprocess_mapid") && wg(this, a.btn_getsingleprocess_mapid, a.process_list);
  a.hasOwnProperty("btn_getsingleprocess_userid") && xg(this, a.btn_getsingleprocess_userid, a.process_list);
});
function vg(a, b, c, d) {
  Q(K(b), "click", function() {
    var a = new U;
    R(a, "success", function(a) {
      a = a.target;
      yg(this, c, W(a));
      z(a);
    }, !1, this);
    R(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    var b = y.f.Ba(l(d) ? d : void 0);
    a.send(b, "GET");
  }, void 0, a);
}
function wg(a, b, c) {
  Q(K(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = K(a).value;
    a = new U;
    R(a, "success", function(a) {
      a = a.target;
      yg(this, c, W(a));
      z(a);
    }, !1, this);
    b = y.f.Ba("mapid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function xg(a, b, c) {
  Q(K(b), "click", function(a) {
    a = a.currentTarget.getAttribute("data-src");
    var b = K(a).value;
    a = new U;
    R(a, "success", function(a) {
      a = a.target;
      yg(this, c, W(a));
      z(a);
    }, !1, this);
    R(a, "error", function() {
      alert("Something went wrong, while trying to fetch data from the server.");
    }, !1, this);
    b = y.f.Ba("userid=" + b);
    a.send(b, "GET");
  }, void 0, a);
}
function zg(a, b) {
  function c(a, b, c) {
    return O("p", {innerHTML:"<strong>" + a + '</strong> <span class="' + (void 0 !== c ? c : "") + '">' + b + "</span>"});
  }
  var d = O("article", {id:b.georef_id, "class":"panel " + ("invalide" === b.adminvalidation ? "panel-danger" : "isvalide" === b.adminvalidation ? "panel-success" : "panel-warning") + " record"}), e = O("div", {"class":"panel-heading", innerHTML:"<h3>" + b.title + ' <span class="label label-default">' + b.type + '</span> <span class="right">' + b.georef_id + "</span></h3>"});
  d.appendChild(e);
  var f = O("button", {"data-params-georef":JSON.stringify(b.georef_params), "data-params-id":parseInt(b.oai.split("-")[2]), "class":"btn btn-default btn-show-georef", innerHTML:"Vorschau anzeigen ..."});
  void 0 !== b.clippolygon && f.setAttribute("data-params-clip", JSON.stringify(b.clippolygon));
  Ag(a, f);
  e.appendChild(f);
  P(e, O("a", {href:y.f.ta(void 0, "georeferenceid=" + b.georef_id), "class":"btn btn-default action-btn", target:"_blank", innerHTML:"Georeferenzierung anzeigen ..."}));
  var e = O("div", {"class":"panel-body"}), h = c("Georeferenzierungsparameter vom " + b.georef_time + ":", "", "glyphicon glyphicon-triangle-left right"), m = O("p", {"class":"georef-params", innerHTML:"Passpunkte: <br>" + JSON.stringify(b.georef_params) + "<br><br>Clip-Polygon: <br>" + JSON.stringify(b.clippolygon)});
  Q(h, "click", function() {
    var a = N("glyphicon", h);
    Ob(m, "show") ? (Qb(m, "show"), Qb(a, "glyphicon-triangle-left"), Pb(a, "glyphicon-triangle-bottom")) : (Pb(m, "show"), Qb(a, "glyphicon-triangle-bottom"), Pb(a, "glyphicon-triangle-left"));
  });
  P(e, c("Karten-OAI:", b.oai));
  P(e, c("Validierung:", b.adminvalidation, "label label-danger"));
  P(e, c("Vearbeitet:", 1 == b.processed ? "Ja" : "Nein", "label label-info"));
  P(e, c("Nutzer:", b.userid));
  e.appendChild(h);
  e.appendChild(m);
  P(e, c("Aktiv:", 1 == b.georef_isactive ? "Ja" : "Nein", "label label-info"));
  d.appendChild(e);
  e = O("div", {"class":"panel-footer"});
  d.appendChild(e);
  if ("isvalide" != b.adminvalidation) {
    var f = O("button", {"class":"btn btn-primary action-btn", innerHTML:'Setze als "isvalide" ...'}), r = y.f.Ab("georeferenceid=" + b.georef_id);
    Q(f, "click", function() {
      V(r, function(a) {
        alert(W(a.target).message);
        Bc(d);
      }, "GET");
    });
    e.appendChild(f);
  }
  if ("invalide" != b.adminvalidation) {
    var u = O("button", {"data-href":y.f.zb("georeferenceid=" + b.georef_id), "class":"btn btn-warning action-btn", innerHTML:'Setze als "invalide" ...'});
    Q(u, "click", oa(y.sa, "Ist der Georeferenzierungsprozess valide?", 'Soll der Georeferenzierungsprozess auf "invalide" gesetzt werden? Bitte geben Sie einen Grund an: <br><div id="admin-validation-comment" class="input-group"><input type="radio" value="imprecision"> Ungenauigkeit <br><input type="radio" value="wrong-parameter"> Falsche Parameter <br><input type="radio" value="wrong-map-sheet-number">  False Kartennummer <br><input type="radio" value="bad-original"> Schlechte Qualit\u00e4t des Orginals<br><br><input type="text" class="form-control" placeholder="Weitere Gr\u00fcnde ..." id="confirm-comment"></div>', 
    function() {
      for (var a = wc("input", void 0, K("admin-validation-comment")), b = void 0, c = 0;c < a.length;c++) {
        "radio" == a[c].type && a[c].checked && (b = a[c].value);
      }
      a = l(b) ? b : K("confirm-comment").value;
      a = u.getAttribute("data-href") + "&comment=" + a;
      V(a, function(a) {
        alert(W(a.target).message);
        Bc(d);
      }, "GET");
    }));
    e.appendChild(u);
  }
  return d;
}
function yg(a, b, c) {
  b = K(b);
  b.innerHTML = "";
  for (var d = 0, e = c.length;d < e;d++) {
    var f = zg(a, c[d]);
    b.appendChild(f);
  }
}
function Ag(a, b) {
  Q(b, "click", function(a) {
    var b = JSON.parse(a.currentTarget.getAttribute("data-params-georef")), e = b.hasOwnProperty("new") ? b["new"] : b, f = null == a.currentTarget.getAttribute("data-params-clip") || void 0 == a.currentTarget.getAttribute("data-params-clip") ? void 0 : JSON.parse(a.currentTarget.getAttribute("data-params-clip"));
    a = parseInt(a.currentTarget.getAttribute("data-params-id"), 0);
    a = {georeference:e, id:a};
    void 0 !== f && (a.clip = f);
    qg(this.na);
    Gf(a, p(function(a) {
      a = W(a.target);
      var b = ol.proj.transformExtent(a.extent, e.target, v.projection), c = void 0 !== f ? Ic(f) : void 0;
      rg(this.na, a.wmsUrl, a.layerId, c);
      this.na.setZoom(b);
      sg(this.na);
    }, this), function() {
      sg(this.na);
      alert("Something went wrong while trying to fetch a georeference validation result from server ....");
    });
  }, !1, a);
}
;function Bg(a, b) {
  y.Na();
  y.Za("vk2-modal-anchor");
  Hc();
  var c = new X(window.location.href), d = c.a.get("objectid"), c = c.a.get("georeferenceid");
  l(c) ? Cg("georeferenceid=" + c, p(this.a, this, a, b)) : l(d) && Cg("objectid=" + d, p(this.a, this, a, b));
}
q("vk2.app.GeoreferenceApp", Bg);
function Cg(a, b) {
  var c = y.f.xb(a);
  V(c, function(a) {
    200 != he(a.target) && alert("Something went wrong, while trying to get the process information from the server. Please try again or contact the administrator.");
    b(W(a.target));
  });
}
Bg.prototype.a = function(a, b, c) {
  var d = c.hasOwnProperty("extent") ? ol.proj.transformExtent(c.extent, wa, "EPSG:3857") : void 0, e = new re(a, c.zoomify), f = new tg(b, d);
  Q(e, "loadend", function() {
    var d = c.hasOwnProperty("recommendedsrid") ? "EPSG:" + c.recommendedsrid : "EPSG:4326";
    $("#projection-chooser").val(d);
    new og({Ha:a, Ga:b, Hb:"georef-validate-menu", Eb:c.objectid, Lb:e, Qb:f, Oa:c.georeference, type:c.type, ha:c.clippolygon, Pa:c.georeferenceid, Fb:c.maptype});
  }, void 0, this);
  c.hasOwnProperty("warn") && (d = O("div", {innerHTML:c.warn + ' <a href="' + y.f.Ta() + '">' + y.c("back-to-main") + "</a>", "class":"alert alert-danger warn-msg"}), K(a).appendChild(d));
};
}).call(window);
