// eventify - v0.3.6 (2013-04-28)
// -----------------
// Copyright(c) 2010-2012 Jeremy Ashkenas, DocumentCloud
// Copyright(c) 2012 Bermi Ferrer <bermi@bermilabs.com>
// MIT Licensed

(function (a) {
    "use strict";
    var b, c = a.Eventify, d = /\s+/, e = a.localEventifyLibraryName || "Eventify", f = Object.keys || function (a) {
        if (typeof a != "object" && typeof a != "function" || a === null)throw new TypeError("keys() called on a non-object");
        var b, c = [];
        for (b in a)a.hasOwnProperty(b) && (c[c.length] = b);
        return c
    }, g = function (a) {return this};
    g.prototype = {version: "0.3.3", on: function (a, b, c) {
        var e, f, g;
        if (!b)return this;
        a = a.split(d), e = this._callbacks || (this._callbacks = {}), f = a.shift();
        while (f)g = e[f] || (e[f] = []), g.push(b, c), f = a.shift();
        return this
    }, off: function (a, b, c) {
        var e, g, h, i;
        if (!(g = this._callbacks))return this;
        if (!(a || b || c))return delete this._callbacks, this;
        a ? a = a.split(d) : a = f(g), e = a.shift();
        while (e) {
            if (!(h = g[e]) || !b && !c) {
                delete g[e], e = a.shift();
                continue
            }
            for (i = h.length - 2; i >= 0; i -= 2)b && h[i] !== b || c && h[i + 1] !== c || h.splice(i, 2);
            e = a.shift()
        }
        return this
    }, trigger: function (a) {
        var b, c, e, f, g, h, i, j;
        if (!(c = this._callbacks))return this;
        j = [], a = a.split(d);
        for (f = 1, g = arguments.length; f < g; f = f + 1)j[f - 1] = arguments[f];
        b = a.shift();
        while (b) {
            i = c.all, i && (i = i.slice()), e = c[b], e && (e = e.slice());
            if (e)for (f = 0, g = e.length; f < g; f += 2)e[f].apply(e[f + 1] || this, j);
            if (i) {
                h = [b].concat(j);
                for (f = 0, g = i.length; f < g; f += 2)i[f].apply(i[f + 1] || this, h)
            }
            b = a.shift()
        }
        return this
    }, noConflict: function () {return a.Eventify = c, this}, enable: function (a) {
        var b, c, d = ["on", "off", "trigger"];
        a = a || {};
        for (b = 0, c = d.length; b < c; b = b + 1)a[d[b]] = this[d[b]];
        return a
    }}, b = new g, (typeof exports != "undefined" ? exports : a)[e] = b, typeof exports != "undefined" && typeof module != "undefined" && module.exports && (module.exports = b)
})(this);