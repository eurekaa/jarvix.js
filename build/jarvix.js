(function () {
    function r(e) {
        var n = !1;
        return function () {
            if (n)throw new Error("Callback was already called.");
            n = !0, e.apply(t, arguments)
        }
    }

    var e = {}, t, n;
    t = this, t != null && (n = t.async), e.noConflict = function () {return t.async = n, e};
    var i = function (e, t) {
        if (e.forEach)return e.forEach(t);
        for (var n = 0; n < e.length; n += 1)t(e[n], n, e)
    }, s = function (e, t) {
        if (e.map)return e.map(t);
        var n = [];
        return i(e, function (e, r, i) {n.push(t(e, r, i))}), n
    }, o = function (e, t, n) {return e.reduce ? e.reduce(t, n) : (i(e, function (e, r, i) {n = t(n, e, r, i)}), n)}, u = function (e) {
        if (Object.keys)return Object.keys(e);
        var t = [];
        for (var n in e)e.hasOwnProperty(n) && t.push(n);
        return t
    };
    typeof process == "undefined" || !process.nextTick ? typeof setImmediate == "function" ? (e.nextTick = function (e) {setImmediate(e)}, e.setImmediate = e.nextTick) : (e.nextTick = function (e) {setTimeout(e, 0)}, e.setImmediate = e.nextTick) : (e.nextTick = process.nextTick, typeof setImmediate != "undefined" ? e.setImmediate = setImmediate : e.setImmediate = e.nextTick), e.each = function (e, t, n) {
        n = n || function () {};
        if (!e.length)return n();
        var s = 0;
        i(e, function (i) {t(i, r(function (t) {t ? (n(t), n = function () {}) : (s += 1, s >= e.length && n(null))}))})
    }, e.forEach = e.each, e.eachSeries = function (e, t, n) {
        n = n || function () {};
        if (!e.length)return n();
        var r = 0, i = function () {t(e[r], function (t) {t ? (n(t), n = function () {}) : (r += 1, r >= e.length ? n(null) : i())})};
        i()
    }, e.forEachSeries = e.eachSeries, e.eachLimit = function (e, t, n, r) {
        var i = a(t);
        i.apply(null, [e, n, r])
    }, e.forEachLimit = e.eachLimit;
    var a = function (e) {
        return function (t, n, r) {
            r = r || function () {};
            if (!t.length || e <= 0)return r();
            var i = 0, s = 0, o = 0;
            (function u() {
                if (i >= t.length)return r();
                while (o < e && s < t.length)s += 1, o += 1, n(t[s - 1], function (e) {e ? (r(e), r = function () {}) : (i += 1, o -= 1, i >= t.length ? r() : u())})
            })()
        }
    }, f = function (t) {
        return function () {
            var n = Array.prototype.slice.call(arguments);
            return t.apply(null, [e.each].concat(n))
        }
    }, l = function (e, t) {
        return function () {
            var n = Array.prototype.slice.call(arguments);
            return t.apply(null, [a(e)].concat(n))
        }
    }, c = function (t) {
        return function () {
            var n = Array.prototype.slice.call(arguments);
            return t.apply(null, [e.eachSeries].concat(n))
        }
    }, h = function (e, t, n, r) {
        var i = [];
        t = s(t, function (e, t) {return{index: t, value: e}}), e(t, function (e, t) {n(e.value, function (n, r) {i[e.index] = r, t(n)})}, function (e) {r(e, i)})
    };
    e.map = f(h), e.mapSeries = c(h), e.mapLimit = function (e, t, n, r) {return p(t)(e, n, r)};
    var p = function (e) {return l(e, h)};
    e.reduce = function (t, n, r, i) {e.eachSeries(t, function (e, t) {r(n, e, function (e, r) {n = r, t(e)})}, function (e) {i(e, n)})}, e.inject = e.reduce, e.foldl = e.reduce, e.reduceRight = function (t, n, r, i) {
        var o = s(t,function (e) {return e}).reverse();
        e.reduce(o, n, r, i)
    }, e.foldr = e.reduceRight;
    var d = function (e, t, n, r) {
        var i = [];
        t = s(t, function (e, t) {return{index: t, value: e}}), e(t, function (e, t) {n(e.value, function (n) {n && i.push(e), t()})}, function (e) {r(s(i.sort(function (e, t) {return e.index - t.index}), function (e) {return e.value}))})
    };
    e.filter = f(d), e.filterSeries = c(d), e.select = e.filter, e.selectSeries = e.filterSeries;
    var v = function (e, t, n, r) {
        var i = [];
        t = s(t, function (e, t) {return{index: t, value: e}}), e(t, function (e, t) {n(e.value, function (n) {n || i.push(e), t()})}, function (e) {r(s(i.sort(function (e, t) {return e.index - t.index}), function (e) {return e.value}))})
    };
    e.reject = f(v), e.rejectSeries = c(v);
    var m = function (e, t, n, r) {e(t, function (e, t) {n(e, function (n) {n ? (r(e), r = function () {}) : t()})}, function (e) {r()})};
    e.detect = f(m), e.detectSeries = c(m), e.some = function (t, n, r) {e.each(t, function (e, t) {n(e, function (e) {e && (r(!0), r = function () {}), t()})}, function (e) {r(!1)})}, e.any = e.some, e.every = function (t, n, r) {e.each(t, function (e, t) {n(e, function (e) {e || (r(!1), r = function () {}), t()})}, function (e) {r(!0)})}, e.all = e.every, e.sortBy = function (t, n, r) {
        e.map(t, function (e, t) {n(e, function (n, r) {n ? t(n) : t(null, {value: e, criteria: r})})}, function (e, t) {
            if (e)return r(e);
            var n = function (e, t) {
                var n = e.criteria, r = t.criteria;
                return n < r ? -1 : n > r ? 1 : 0
            };
            r(null, s(t.sort(n), function (e) {return e.value}))
        })
    }, e.auto = function (t, n) {
        n = n || function () {};
        var r = u(t);
        if (!r.length)return n(null);
        var s = {}, a = [], f = function (e) {a.unshift(e)}, l = function (e) {
            for (var t = 0; t < a.length; t += 1)if (a[t] === e) {
                a.splice(t, 1);
                return
            }
        }, c = function () {i(a.slice(0), function (e) {e()})};
        f(function () {u(s).length === r.length && (n(null, s), n = function () {})}), i(r, function (r) {
            var a = t[r]instanceof Function ? [t[r]] : t[r], h = function (t) {
                var o = Array.prototype.slice.call(arguments, 1);
                o.length <= 1 && (o = o[0]);
                if (t) {
                    var a = {};
                    i(u(s), function (e) {a[e] = s[e]}), a[r] = o, n(t, a), n = function () {}
                } else s[r] = o, e.setImmediate(c)
            }, p = a.slice(0, Math.abs(a.length - 1)) || [], d = function () {return o(p, function (e, t) {return e && s.hasOwnProperty(t)}, !0) && !s.hasOwnProperty(r)};
            if (d())a[a.length - 1](h, s); else {
                var v = function () {d() && (l(v), a[a.length - 1](h, s))};
                f(v)
            }
        })
    }, e.waterfall = function (t, n) {
        n = n || function () {};
        if (t.constructor !== Array) {
            var r = new Error("First argument to waterfall must be an array of functions");
            return n(r)
        }
        if (!t.length)return n();
        var i = function (t) {
            return function (r) {
                if (r)n.apply(null, arguments), n = function () {}; else {
                    var s = Array.prototype.slice.call(arguments, 1), o = t.next();
                    o ? s.push(i(o)) : s.push(n), e.setImmediate(function () {t.apply(null, s)})
                }
            }
        };
        i(e.iterator(t))()
    };
    var g = function (e, t, n) {
        n = n || function () {};
        if (t.constructor === Array)e.map(t, function (e, t) {
            e && e(function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                n.length <= 1 && (n = n[0]), t.call(null, e, n)
            })
        }, n); else {
            var r = {};
            e.each(u(t), function (e, n) {
                t[e](function (t) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    i.length <= 1 && (i = i[0]), r[e] = i, n(t)
                })
            }, function (e) {n(e, r)})
        }
    };
    e.parallel = function (t, n) {g({map: e.map, each: e.each}, t, n)}, e.parallelLimit = function (e, t, n) {g({map: p(t), each: a(t)}, e, n)}, e.series = function (t, n) {
        n = n || function () {};
        if (t.constructor === Array)e.mapSeries(t, function (e, t) {
            e && e(function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                n.length <= 1 && (n = n[0]), t.call(null, e, n)
            })
        }, n); else {
            var r = {};
            e.eachSeries(u(t), function (e, n) {
                t[e](function (t) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    i.length <= 1 && (i = i[0]), r[e] = i, n(t)
                })
            }, function (e) {n(e, r)})
        }
    }, e.iterator = function (e) {
        var t = function (n) {
            var r = function () {return e.length && e[n].apply(null, arguments), r.next()};
            return r.next = function () {return n < e.length - 1 ? t(n + 1) : null}, r
        };
        return t(0)
    }, e.apply = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function () {return e.apply(null, t.concat(Array.prototype.slice.call(arguments)))}
    };
    var y = function (e, t, n, r) {
        var i = [];
        e(t, function (e, t) {n(e, function (e, n) {i = i.concat(n || []), t(e)})}, function (e) {r(e, i)})
    };
    e.concat = f(y), e.concatSeries = c(y), e.whilst = function (t, n, r) {
        t() ? n(function (i) {
            if (i)return r(i);
            e.whilst(t, n, r)
        }) : r()
    }, e.doWhilst = function (t, n, r) {
        t(function (i) {
            if (i)return r(i);
            n() ? e.doWhilst(t, n, r) : r()
        })
    }, e.until = function (t, n, r) {
        t() ? r() : n(function (i) {
            if (i)return r(i);
            e.until(t, n, r)
        })
    }, e.doUntil = function (t, n, r) {
        t(function (i) {
            if (i)return r(i);
            n() ? r() : e.doUntil(t, n, r)
        })
    }, e.queue = function (t, n) {
        function s(t, r, s, o) {
            r.constructor !== Array && (r = [r]), i(r, function (r) {
                var i = {data: r, callback: typeof o == "function" ? o : null};
                s ? t.tasks.unshift(i) : t.tasks.push(i), t.saturated && t.tasks.length === n && t.saturated(), e.setImmediate(t.process)
            })
        }

        n === undefined && (n = 1);
        var o = 0, u = {tasks: [], concurrency: n, saturated: null, empty: null, drain: null, push: function (e, t) {s(u, e, !1, t)}, unshift: function (e, t) {s(u, e, !0, t)}, process: function () {
            if (o < u.concurrency && u.tasks.length) {
                var e = u.tasks.shift();
                u.empty && u.tasks.length === 0 && u.empty(), o += 1;
                var n = function () {o -= 1, e.callback && e.callback.apply(e, arguments), u.drain && u.tasks.length + o === 0 && u.drain(), u.process()}, i = r(n);
                t(e.data, i)
            }
        }, length: function () {return u.tasks.length}, running: function () {return o}};
        return u
    }, e.cargo = function (t, n) {
        var r = !1, o = [], u = {tasks: o, payload: n, saturated: null, empty: null, drain: null, push: function (t, r) {t.constructor !== Array && (t = [t]), i(t, function (e) {o.push({data: e, callback: typeof r == "function" ? r : null}), u.saturated && o.length === n && u.saturated()}), e.setImmediate(u.process)}, process: function a() {
            if (r)return;
            if (o.length === 0) {
                u.drain && u.drain();
                return
            }
            var e = typeof n == "number" ? o.splice(0, n) : o.splice(0), f = s(e, function (e) {return e.data});
            u.empty && u.empty(), r = !0, t(f, function () {
                r = !1;
                var t = arguments;
                i(e, function (e) {e.callback && e.callback.apply(null, t)}), a()
            })
        }, length: function () {return o.length}, running: function () {return r}};
        return u
    };
    var b = function (e) {
        return function (t) {
            var n = Array.prototype.slice.call(arguments, 1);
            t.apply(null, n.concat([function (t) {
                var n = Array.prototype.slice.call(arguments, 1);
                typeof console != "undefined" && (t ? console.error && console.error(t) : console[e] && i(n, function (t) {console[e](t)}))
            }]))
        }
    };
    e.log = b("log"), e.dir = b("dir"), e.memoize = function (e, t) {
        var n = {}, r = {};
        t = t || function (e) {return e};
        var i = function () {
            var i = Array.prototype.slice.call(arguments), s = i.pop(), o = t.apply(null, i);
            o in n ? s.apply(null, n[o]) : o in r ? r[o].push(s) : (r[o] = [s], e.apply(null, i.concat([function () {
                n[o] = arguments;
                var e = r[o];
                delete r[o];
                for (var t = 0, i = e.length; t < i; t++)e[t].apply(null, arguments)
            }])))
        };
        return i.memo = n, i.unmemoized = e, i
    }, e.unmemoize = function (e) {return function () {return(e.unmemoized || e).apply(null, arguments)}}, e.times = function (t, n, r) {
        var i = [];
        for (var s = 0; s < t; s++)i.push(s);
        return e.map(i, n, r)
    }, e.timesSeries = function (t, n, r) {
        var i = [];
        for (var s = 0; s < t; s++)i.push(s);
        return e.mapSeries(i, n, r)
    }, e.compose = function () {
        var t = Array.prototype.reverse.call(arguments);
        return function () {
            var n = this, r = Array.prototype.slice.call(arguments), i = r.pop();
            e.reduce(t, r, function (e, t, r) {
                t.apply(n, e.concat([function () {
                    var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
                    r(e, t)
                }]))
            }, function (e, t) {i.apply(n, [e].concat(t))})
        }
    };
    var w = function (e, t) {
        var n = function () {
            var n = this, r = Array.prototype.slice.call(arguments), i = r.pop();
            return e(t, function (e, t) {e.apply(n, r.concat([t]))}, i)
        };
        if (arguments.length > 2) {
            var r = Array.prototype.slice.call(arguments, 2);
            return n.apply(this, r)
        }
        return n
    };
    e.applyEach = f(w), e.applyEachSeries = c(w), e.forever = function (e, t) {
        function n(r) {
            if (r) {
                if (t)return t(r);
                throw r
            }
            e(n)
        }

        n()
    }, typeof define != "undefined" && define.amd ? define("async", [], function () {return e}) : typeof module != "undefined" && module.exports ? module.exports = e : t.async = e
})(), function () {
    function e(e, t, n) {
        n = (n || 0) - 1;
        for (var r = e ? e.length : 0; ++n < r;)if (e[n] === t)return n;
        return-1
    }

    function t(t, n) {
        var r = typeof n;
        if (t = t.l, "boolean" == r || null == n)return t[n] ? 0 : -1;
        "number" != r && "string" != r && (r = "object");
        var i = "number" == r ? n : g + n;
        return t = (t = t[r]) && t[i], "object" == r ? t && -1 < e(t, n) ? 0 : -1 : t ? 0 : -1
    }

    function n(e) {
        var t = this.l, n = typeof e;
        if ("boolean" == n || null == e)t[e] = !0; else {
            "number" != n && "string" != n && (n = "object");
            var r = "number" == n ? e : g + e, t = t[n] || (t[n] = {});
            "object" == n ? (t[r] || (t[r] = [])).push(e) : t[r] = !0
        }
    }

    function r(e) {return e.charCodeAt(0)}

    function i(e, t) {
        for (var n = e.m, r = t.m, i = -1, s = n.length; ++i < s;) {
            var o = n[i], u = r[i];
            if (o !== u) {
                if (o > u || typeof o == "undefined")return 1;
                if (o < u || typeof u == "undefined")return-1
            }
        }
        return e.n - t.n
    }

    function s(e) {
        var t = -1, r = e.length, i = e[0], s = e[r / 2 | 0], o = e[r - 1];
        if (i && typeof i == "object" && s && typeof s == "object" && o && typeof o == "object")return!1;
        for (i = a(), i["false"] = i["null"] = i["true"] = i.undefined = !1, s = a(), s.k = e, s.l = i, s.push = n; ++t < r;)s.push(e[t]);
        return s
    }

    function o(e) {return"\\" + V[e]}

    function u() {return d.pop() || []}

    function a() {return v.pop() || {k: null, l: null, m: null, "false": !1, n: 0, "null": !1, number: null, object: null, push: null, string: null, "true": !1, "undefined": !1, o: null}}

    function f(e) {e.length = 0, d.length < b && d.push(e)}

    function l(e) {
        var t = e.l;
        t && l(t), e.k = e.l = e.m = e.object = e.number = e.string = e.o = null, v.length < b && v.push(e)
    }

    function c(e, t, n) {
        t || (t = 0), typeof n == "undefined" && (n = e ? e.length : 0);
        var r = -1;
        n = n - t || 0;
        for (var i = Array(0 > n ? 0 : n); ++r < n;)i[r] = e[t + r];
        return i
    }

    function h(n) {
        function d(e, t, n) {
            if (!e || !X[typeof e])return e;
            t = t && typeof n == "undefined" ? t : tt(t, n, 3);
            for (var r = -1, i = X[typeof e] && jn(e), s = i ? i.length : 0; ++r < s && (n = i[r], !1 !== t(e[n], n, e)););
            return e
        }

        function v(e, t, n) {
            var r;
            if (!e || !X[typeof e])return e;
            t = t && typeof n == "undefined" ? t : tt(t, n, 3);
            for (r in e)if (!1 === t(e[r], r, e))break;
            return e
        }

        function b(e, t, n) {
            var r, i = e, s = i;
            if (!i)return s;
            for (var o = arguments, u = 0, a = typeof n == "number" ? 2 : o.length; ++u < a;)if ((i = o[u]) && X[typeof i])for (var f = -1, l = X[typeof i] && jn(i), c = l ? l.length : 0; ++f < c;)r = l[f], "undefined" == typeof s[r] && (s[r] = i[r]);
            return s
        }

        function V(e, t, n) {
            var r, i = e, s = i;
            if (!i)return s;
            var o = arguments, u = 0, a = typeof n == "number" ? 2 : o.length;
            if (3 < a && "function" == typeof o[a - 2])var f = tt(o[--a - 1], o[a--], 2); else 2 < a && "function" == typeof o[a - 1] && (f = o[--a]);
            for (; ++u < a;)if ((i = o[u]) && X[typeof i])for (var l = -1, c = X[typeof i] && jn(i), h = c ? c.length : 0; ++l < h;)r = c[l], s[r] = f ? f(s[r], i[r]) : i[r];
            return s
        }

        function J(e) {
            var t, n = [];
            if (!e || !X[typeof e])return n;
            for (t in e)yn.call(e, t) && n.push(t);
            return n
        }

        function K(e) {return e && typeof e == "object" && !Bn(e) && yn.call(e, "__wrapped__") ? e : new Q(e)}

        function Q(e, t) {this.__chain__ = !!t, this.__wrapped__ = e}

        function G(e) {
            function t() {
                if (r) {
                    var e = c(r);
                    bn.apply(e, arguments)
                }
                if (this instanceof t) {
                    var s = et(n.prototype), e = n.apply(s, e || arguments);
                    return Et(e) ? e : s
                }
                return n.apply(i, e || arguments)
            }

            var n = e[0], r = e[2], i = e[4];
            return Hn(t, e), t
        }

        function Z(e, t, n, r, i) {
            if (n) {
                var s = n(e);
                if (typeof s != "undefined")return s
            }
            if (!Et(e))return e;
            var o = cn.call(e);
            if (!U[o])return e;
            var a = Dn[o];
            switch (o) {
                case H:
                case B:
                    return new a(+e);
                case F:
                case R:
                    return new a(e);
                case q:
                    return s = a(e.source, N.exec(e)), s.lastIndex = e.lastIndex, s
            }
            if (o = Bn(e), t) {
                var l = !r;
                r || (r = u()), i || (i = u());
                for (var h = r.length; h--;)if (r[h] == e)return i[h];
                s = o ? a(e.length) : {}
            } else s = o ? c(e) : V({}, e);
            return o && (yn.call(e, "index") && (s.index = e.index), yn.call(e, "input") && (s.input = e.input)), t ? (r.push(e), i.push(s), (o ? At : d)(e, function (e, o) {s[o] = Z(e, t, n, r, i)}), l && (f(r), f(i)), s) : s
        }

        function et(e) {return Et(e) ? Tn(e) : {}}

        function tt(e, t, n) {
            if (typeof e != "function")return Vt;
            if (typeof t != "undefined" && "prototype"in e) {
                var r = e.__bindData__;
                if (typeof r == "undefined" && (Pn.funcNames && (r = !e.name), r = r || !Pn.funcDecomp, !r)) {
                    var i = mn.call(e);
                    Pn.funcNames || (r = !C.test(i)), r || (r = O.test(i), Hn(e, r))
                }
                if (!1 === r || !0 !== r && 1 & r[1])return e;
                switch (n) {
                    case 1:
                        return function (n) {return e.call(t, n)};
                    case 2:
                        return function (n, r) {return e.call(t, n, r)};
                    case 3:
                        return function (n, r, i) {return e.call(t, n, r, i)};
                    case 4:
                        return function (n, r, i, s) {return e.call(t, n, r, i, s)}
                }
                return Wt(e, t)
            }
            return e
        }

        function nt(e) {
            function t() {
                var e = a ? o : this;
                if (i) {
                    var d = c(i);
                    bn.apply(d, arguments)
                }
                return(s || l) && (d || (d = c(arguments)), s && bn.apply(d, s), l && d.length < u) ? (r |= 16, nt([n, h ? r : -4 & r, d, null, o, u])) : (d || (d = arguments), f && (n = e[p]), this instanceof t ? (e = et(n.prototype), d = n.apply(e, d), Et(d) ? d : e) : n.apply(e, d))
            }

            var n = e[0], r = e[1], i = e[2], s = e[3], o = e[4], u = e[5], a = 1 & r, f = 2 & r, l = 4 & r, h = 8 & r, p = n;
            return Hn(t, e), t
        }

        function rt(n, r) {
            var i = -1, o = ht(), u = n ? n.length : 0, a = u >= y && o === e, f = [];
            if (a) {
                var c = s(r);
                c ? (o = t, r = c) : a = !1
            }
            for (; ++i < u;)c = n[i], 0 > o(r, c) && f.push(c);
            return a && l(r), f
        }

        function it(e, t, n, r) {
            r = (r || 0) - 1;
            for (var i = e ? e.length : 0, s = []; ++r < i;) {
                var o = e[r];
                if (o && typeof o == "object" && typeof o.length == "number" && (Bn(o) || mt(o))) {
                    t || (o = it(o, t, n));
                    var u = -1, a = o.length, f = s.length;
                    for (s.length += a; ++u < a;)s[f++] = o[u]
                } else n || s.push(o)
            }
            return s
        }

        function st(e, t, n, r, i, s) {
            if (n) {
                var o = n(e, t);
                if (typeof o != "undefined")return!!o
            }
            if (e === t)return 0 !== e || 1 / e == 1 / t;
            if (e === e && !(e && X[typeof e] || t && X[typeof t]))return!1;
            if (null == e || null == t)return e === t;
            var a = cn.call(e), l = cn.call(t);
            if (a == D && (a = I), l == D && (l = I), a != l)return!1;
            switch (a) {
                case H:
                case B:
                    return+e == +t;
                case F:
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case q:
                case R:
                    return e == on(t)
            }
            if (l = a == P, !l) {
                var c = yn.call(e, "__wrapped__"), h = yn.call(t, "__wrapped__");
                if (c || h)return st(c ? e.__wrapped__ : e, h ? t.__wrapped__ : t, n, r, i, s);
                if (a != I)return!1;
                if (a = e.constructor, c = t.constructor, a != c && !(wt(a) && a instanceof a && wt(c) && c instanceof c) && "constructor"in e && "constructor"in t)return!1
            }
            for (a = !i, i || (i = u()), s || (s = u()), c = i.length; c--;)if (i[c] == e)return s[c] == t;
            var p = 0, o = !0;
            if (i.push(e), s.push(t), l) {if (c = e.length, p = t.length, (o = p == c) || r)for (; p--;)if (l = c, h = t[p], r)for (; l-- && !(o = st(e[l], h, n, r, i, s));); else if (!(o = st(e[p], h, n, r, i, s)))break} else v(t, function (t, u, a) {return yn.call(a, u) ? (p++, o = yn.call(e, u) && st(e[u], t, n, r, i, s)) : void 0}), o && !r && v(e, function (e, t, n) {return yn.call(n, t) ? o = -1 < --p : void 0});
            return i.pop(), s.pop(), a && (f(i), f(s)), o
        }

        function ot(e, t, n, r, i) {
            (Bn(t) ? At : d)(t, function (t, s) {
                var o, u, a = t, f = e[s];
                if (t && ((u = Bn(t)) || Un(t))) {
                    for (a = r.length; a--;)if (o = r[a] == t) {
                        f = i[a];
                        break
                    }
                    if (!o) {
                        var l;
                        n && (a = n(f, t), l = typeof a != "undefined") && (f = a), l || (f = u ? Bn(f) ? f : [] : Un(f) ? f : {}), r.push(t), i.push(f), l || ot(f, t, n, r, i)
                    }
                } else n && (a = n(f, t), typeof a == "undefined" && (a = t)), typeof a != "undefined" && (f = a);
                e[s] = f
            })
        }

        function ut(e, t) {return e + vn(_n() * (t - e + 1))}

        function at(n, r, i) {
            var o = -1, a = ht(), c = n ? n.length : 0, h = [], p = !r && c >= y && a === e, d = i || p ? u() : h;
            for (p && (d = s(d), a = t); ++o < c;) {
                var v = n[o], m = i ? i(v, o, n) : v;
                (r ? !o || d[d.length - 1] !== m : 0 > a(d, m)) && ((i || p) && d.push(m), h.push(v))
            }
            return p ? (f(d.k), l(d)) : i && f(d), h
        }

        function ft(e) {
            return function (t, n, r) {
                var i = {};
                n = K.createCallback(n, r, 3), r = -1;
                var s = t ? t.length : 0;
                if (typeof s == "number")for (; ++r < s;) {
                    var o = t[r];
                    e(i, o, n(o, r, t), t)
                } else d(t, function (t, r, s) {e(i, t, n(t, r, s), s)});
                return i
            }
        }

        function lt(e, t, n, r, i, s) {
            var o = 1 & t, u = 4 & t, a = 16 & t, f = 32 & t;
            if (!(2 & t || wt(e)))throw new un;
            a && !n.length && (t &= -17, a = n = !1), f && !r.length && (t &= -33, f = r = !1);
            var l = e && e.__bindData__;
            return l && !0 !== l ? (l = c(l), l[2] && (l[2] = c(l[2])), l[3] && (l[3] = c(l[3])), !o || 1 & l[1] || (l[4] = i), !o && 1 & l[1] && (t |= 8), !u || 4 & l[1] || (l[5] = s), a && bn.apply(l[2] || (l[2] = []), n), f && Sn.apply(l[3] || (l[3] = []), r), l[1] |= t, lt.apply(null, l)) : (1 == t || 17 === t ? G : nt)([e, t, n, r, i, s])
        }

        function ct(e) {return Fn[e]}

        function ht() {
            var t = (t = K.indexOf) === Ft ? e : t;
            return t
        }

        function pt(e) {return typeof e == "function" && hn.test(e)}

        function dt(e) {
            var t, n;
            return e && cn.call(e) == I && (t = e.constructor, !wt(t) || t instanceof t) ? (v(e, function (e, t) {n = t}), typeof n == "undefined" || yn.call(e, n)) : !1
        }

        function vt(e) {return In[e]}

        function mt(e) {return e && typeof e == "object" && typeof e.length == "number" && cn.call(e) == D || !1}

        function gt(e, t, n) {
            var r = jn(e), i = r.length;
            for (t = tt(t, n, 3); i-- && (n = r[i], !1 !== t(e[n], n, e)););
            return e
        }

        function yt(e) {
            var t = [];
            return v(e, function (e, n) {wt(e) && t.push(n)}), t.sort()
        }

        function bt(e) {
            for (var t = -1, n = jn(e), r = n.length, i = {}; ++t < r;) {
                var s = n[t];
                i[e[s]] = s
            }
            return i
        }

        function wt(e) {return typeof e == "function"}

        function Et(e) {return!!e && !!X[typeof e]}

        function St(e) {return typeof e == "number" || e && typeof e == "object" && cn.call(e) == F || !1}

        function xt(e) {return typeof e == "string" || e && typeof e == "object" && cn.call(e) == R || !1}

        function Tt(e) {
            for (var t = -1, n = jn(e), r = n.length, i = Gt(r); ++t < r;)i[t] = e[n[t]];
            return i
        }

        function Nt(e, t, n) {
            var r = -1, i = ht(), s = e ? e.length : 0, o = !1;
            return n = (0 > n ? An(0, s + n) : n) || 0, Bn(e) ? o = -1 < i(e, t, n) : typeof s == "number" ? o = -1 < (xt(e) ? e.indexOf(t, n) : i(e, t, n)) : d(e, function (e) {return++r < n ? void 0 : !(o = e === t)}), o
        }

        function Ct(e, t, n) {
            var r = !0;
            t = K.createCallback(t, n, 3), n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")for (; ++n < i && (r = !!t(e[n], n, e));); else d(e, function (e, n, i) {return r = !!t(e, n, i)});
            return r
        }

        function kt(e, t, n) {
            var r = [];
            t = K.createCallback(t, n, 3), n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")for (; ++n < i;) {
                var s = e[n];
                t(s, n, e) && r.push(s)
            } else d(e, function (e, n, i) {t(e, n, i) && r.push(e)});
            return r
        }

        function Lt(e, t, n) {
            t = K.createCallback(t, n, 3), n = -1;
            var r = e ? e.length : 0;
            if (typeof r != "number") {
                var i;
                return d(e, function (e, n, r) {return t(e, n, r) ? (i = e, !1) : void 0}), i
            }
            for (; ++n < r;) {
                var s = e[n];
                if (t(s, n, e))return s
            }
        }

        function At(e, t, n) {
            var r = -1, i = e ? e.length : 0;
            if (t = t && typeof n == "undefined" ? t : tt(t, n, 3), typeof i == "number")for (; ++r < i && !1 !== t(e[r], r, e);); else d(e, t);
            return e
        }

        function Ot(e, t, n) {
            var r = e ? e.length : 0;
            if (t = t && typeof n == "undefined" ? t : tt(t, n, 3), typeof r == "number")for (; r-- && !1 !== t(e[r], r, e);); else {
                var i = jn(e), r = i.length;
                d(e, function (e, n, s) {return n = i ? i[--r] : --r, t(s[n], n, s)})
            }
            return e
        }

        function Mt(e, t, n) {
            var r = -1, i = e ? e.length : 0;
            if (t = K.createCallback(t, n, 3), typeof i == "number")for (var s = Gt(i); ++r < i;)s[r] = t(e[r], r, e); else s = [], d(e, function (e, n, i) {s[++r] = t(e, n, i)});
            return s
        }

        function _t(e, t, n) {
            var i = -1 / 0, s = i;
            if (typeof t != "function" && n && n[t] === e && (t = null), null == t && Bn(e)) {
                n = -1;
                for (var o = e.length; ++n < o;) {
                    var u = e[n];
                    u > s && (s = u)
                }
            } else t = null == t && xt(e) ? r : K.createCallback(t, n, 3), At(e, function (e, n, r) {n = t(e, n, r), n > i && (i = n, s = e)});
            return s
        }

        function Dt(e, t, n, r) {
            if (!e)return n;
            var i = 3 > arguments.length;
            t = K.createCallback(t, r, 4);
            var s = -1, o = e.length;
            if (typeof o == "number")for (i && (n = e[++s]); ++s < o;)n = t(n, e[s], s, e); else d(e, function (e, r, s) {n = i ? (i = !1, e) : t(n, e, r, s)});
            return n
        }

        function Pt(e, t, n, r) {
            var i = 3 > arguments.length;
            return t = K.createCallback(t, r, 4), Ot(e, function (e, r, s) {n = i ? (i = !1, e) : t(n, e, r, s)}), n
        }

        function Ht(e) {
            var t = -1, n = e ? e.length : 0, r = Gt(typeof n == "number" ? n : 0);
            return At(e, function (e) {
                var n = ut(0, ++t);
                r[t] = r[n], r[n] = e
            }), r
        }

        function Bt(e, t, n) {
            var r;
            t = K.createCallback(t, n, 3), n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")for (; ++n < i && !(r = t(e[n], n, e));); else d(e, function (e, n, i) {return!(r = t(e, n, i))});
            return!!r
        }

        function jt(e, t, n) {
            var r = 0, i = e ? e.length : 0;
            if (typeof t != "number" && null != t) {
                var s = -1;
                for (t = K.createCallback(t, n, 3); ++s < i && t(e[s], s, e);)r++
            } else if (r = t, null == r || n)return e ? e[0] : p;
            return c(e, 0, On(An(0, r), i))
        }

        function Ft(t, n, r) {
            if (typeof r == "number") {
                var i = t ? t.length : 0;
                r = 0 > r ? An(0, i + r) : r || 0
            } else if (r)return r = qt(t, n), t[r] === n ? r : -1;
            return e(t, n, r)
        }

        function It(e, t, n) {
            if (typeof t != "number" && null != t) {
                var r = 0, i = -1, s = e ? e.length : 0;
                for (t = K.createCallback(t, n, 3); ++i < s && t(e[i], i, e);)r++
            } else r = null == t || n ? 1 : An(0, t);
            return c(e, r)
        }

        function qt(e, t, n, r) {
            var i = 0, s = e ? e.length : i;
            for (n = n ? K.createCallback(n, r, 1) : Vt, t = n(t); i < s;)r = i + s >>> 1, n(e[r]) < t ? i = r + 1 : s = r;
            return i
        }

        function Rt(e, t, n, r) {return typeof t != "boolean" && null != t && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), null != n && (n = K.createCallback(n, r, 3)), at(e, t, n)}

        function Ut() {
            for (var e = 1 < arguments.length ? arguments : arguments[0], t = -1, n = e ? _t(Vn(e, "length")) : 0, r = Gt(0 > n ? 0 : n); ++t < n;)r[t] = Vn(e, t);
            return r
        }

        function zt(e, t) {
            var n = -1, r = e ? e.length : 0, i = {};
            for (t || !r || Bn(e[0]) || (t = []); ++n < r;) {
                var s = e[n];
                t ? i[s] = t[n] : s && (i[s[0]] = s[1])
            }
            return i
        }

        function Wt(e, t) {return 2 < arguments.length ? lt(e, 17, c(arguments, 2), null, t) : lt(e, 1, null, null, t)}

        function Xt(e, t, n) {
            function r() {l && dn(l), o = l = c = p, (v || d !== t) && (h = $n(), u = e.apply(f, s), l || o || (s = f = null))}

            function i() {
                var n = t - ($n() - a);
                0 < n ? l = wn(i, n) : (o && dn(o), n = c, o = l = c = p, n && (h = $n(), u = e.apply(f, s), l || o || (s = f = null)))
            }

            var s, o, u, a, f, l, c, h = 0, d = !1, v = !0;
            if (!wt(e))throw new un;
            if (t = An(0, t) || 0, !0 === n)var m = !0, v = !1; else Et(n) && (m = n.leading, d = "maxWait"in n && (An(t, n.maxWait) || 0), v = "trailing"in n ? n.trailing : v);
            return function () {
                if (s = arguments, a = $n(), f = this, c = v && (l || !m), !1 === d)var n = m && !l; else {
                    o || m || (h = a);
                    var p = d - (a - h), g = 0 >= p;
                    g ? (o && (o = dn(o)), h = a, u = e.apply(f, s)) : o || (o = wn(r, p))
                }
                return g && l ? l = dn(l) : l || t === d || (l = wn(i, t)), n && (g = !0, u = e.apply(f, s)), !g || l || o || (s = f = null), u
            }
        }

        function Vt(e) {return e}

        function $t(e, t, n) {
            var r = !0, i = t && yt(t);
            t && (n || i.length) || (null == n && (n = t), s = Q, t = e, e = K, i = yt(t)), !1 === n ? r = !1 : Et(n) && "chain"in n && (r = n.chain);
            var s = e, o = wt(s);
            At(i, function (n) {
                var i = e[n] = t[n];
                o && (s.prototype[n] = function () {
                    var t = this.__chain__, n = this.__wrapped__, o = [n];
                    if (bn.apply(o, arguments), o = i.apply(e, o), r || t) {
                        if (n === o && Et(o))return this;
                        o = new s(o), o.__chain__ = t
                    }
                    return o
                })
            })
        }

        function Jt() {}

        function Kt(e) {return function (t) {return t[e]}}

        function Qt() {return this.__wrapped__}

        n = n ? Y.defaults($.Object(), n, Y.pick($, _)) : $;
        var Gt = n.Array, Yt = n.Boolean, Zt = n.Date, en = n.Function, tn = n.Math, nn = n.Number, rn = n.Object, sn = n.RegExp, on = n.String, un = n.TypeError, an = [], fn = rn.prototype, ln = n._, cn = fn.toString, hn = sn("^" + on(cn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), pn = tn.ceil, dn = n.clearTimeout, vn = tn.floor, mn = en.prototype.toString, gn = pt(gn = rn.getPrototypeOf) && gn, yn = fn.hasOwnProperty, bn = an.push, wn = n.setTimeout, En = an.splice, Sn = an.unshift, xn = function () {
            try {var e = {}, t = pt(t = rn.defineProperty) && t, n = t(e, e, e) && t} catch (r) {}
            return n
        }(), Tn = pt(Tn = rn.create) && Tn, Nn = pt(Nn = Gt.isArray) && Nn, Cn = n.isFinite, kn = n.isNaN, Ln = pt(Ln = rn.keys) && Ln, An = tn.max, On = tn.min, Mn = n.parseInt, _n = tn.random, Dn = {};
        Dn[P] = Gt, Dn[H] = Yt, Dn[B] = Zt, Dn[j] = en, Dn[I] = rn, Dn[F] = nn, Dn[q] = sn, Dn[R] = on, Q.prototype = K.prototype;
        var Pn = K.support = {};
        Pn.funcDecomp = !pt(n.a) && O.test(h), Pn.funcNames = typeof en.name == "string", K.templateSettings = {escape: /<%-([\s\S]+?)%>/g, evaluate: /<%([\s\S]+?)%>/g, interpolate: k, variable: "", imports: {_: K}}, Tn || (et = function () {
            function e() {}

            return function (t) {
                if (Et(t)) {
                    e.prototype = t;
                    var r = new e;
                    e.prototype = null
                }
                return r || n.Object()
            }
        }());
        var Hn = xn ? function (e, t) {W.value = t, xn(e, "__bindData__", W)} : Jt, Bn = Nn || function (e) {return e && typeof e == "object" && typeof e.length == "number" && cn.call(e) == P || !1}, jn = Ln ? function (e) {return Et(e) ? Ln(e) : []} : J, Fn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, In = bt(Fn), qn = sn("(" + jn(In).join("|") + ")", "g"), Rn = sn("[" + jn(Fn).join("") + "]", "g"), Un = gn ? function (e) {
            if (!e || cn.call(e) != I)return!1;
            var t = e.valueOf, n = pt(t) && (n = gn(t)) && gn(n);
            return n ? e == n || gn(e) == n : dt(e)
        } : dt, zn = ft(function (e, t, n) {yn.call(e, n) ? e[n]++ : e[n] = 1}), Wn = ft(function (e, t, n) {(yn.call(e, n) ? e[n] : e[n] = []).push(t)}), Xn = ft(function (e, t, n) {e[n] = t}), Vn = Mt, $n = pt($n = Zt.now) && $n || function () {return(new Zt).getTime()}, Jn = 8 == Mn(w + "08") ? Mn : function (e, t) {return Mn(xt(e) ? e.replace(L, "") : e, t || 0)};
        return K.after = function (e, t) {
            if (!wt(t))throw new un;
            return function () {return 1 > --e ? t.apply(this, arguments) : void 0}
        }, K.assign = V, K.at = function (e) {
            for (var t = arguments, n = -1, r = it(t, !0, !1, 1), t = t[2] && t[2][t[1]] === e ? 1 : r.length, i = Gt(t); ++n < t;)i[n] = e[r[n]];
            return i
        }, K.bind = Wt, K.bindAll = function (e) {
            for (var t = 1 < arguments.length ? it(arguments, !0, !1, 1) : yt(e), n = -1, r = t.length; ++n < r;) {
                var i = t[n];
                e[i] = lt(e[i], 1, null, null, e)
            }
            return e
        }, K.bindKey = function (e, t) {return 2 < arguments.length ? lt(t, 19, c(arguments, 2), null, e) : lt(t, 3, null, null, e)}, K.chain = function (e) {return e = new Q(e), e.__chain__ = !0, e}, K.compact = function (e) {
            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                var i = e[t];
                i && r.push(i)
            }
            return r
        }, K.compose = function () {
            for (var e = arguments, t = e.length; t--;)if (!wt(e[t]))throw new un;
            return function () {
                for (var t = arguments, n = e.length; n--;)t = [e[n].apply(this, t)];
                return t[0]
            }
        }, K.constant = function (e) {return function () {return e}}, K.countBy = zn, K.create = function (e, t) {
            var n = et(e);
            return t ? V(n, t) : n
        }, K.createCallback = function (e, t, n) {
            var r = typeof e;
            if (null == e || "function" == r)return tt(e, t, n);
            if ("object" != r)return Kt(e);
            var i = jn(e), s = i[0], o = e[s];
            return 1 != i.length || o !== o || Et(o) ? function (t) {
                for (var n = i.length, r = !1; n-- && (r = st(t[i[n]], e[i[n]], null, !0)););
                return r
            } : function (e) {return e = e[s], o === e && (0 !== o || 1 / o == 1 / e)}
        }, K.curry = function (e, t) {return t = typeof t == "number" ? t : +t || e.length, lt(e, 4, null, null, null, t)}, K.debounce = Xt, K.defaults = b, K.defer = function (e) {
            if (!wt(e))throw new un;
            var t = c(arguments, 1);
            return wn(function () {e.apply(p, t)}, 1)
        }, K.delay = function (e, t) {
            if (!wt(e))throw new un;
            var n = c(arguments, 2);
            return wn(function () {e.apply(p, n)}, t)
        }, K.difference = function (e) {return rt(e, it(arguments, !0, !0, 1))}, K.filter = kt, K.flatten = function (e, t, n, r) {return typeof t != "boolean" && null != t && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), null != n && (e = Mt(e, n, r)), it(e, t)}, K.forEach = At, K.forEachRight = Ot, K.forIn = v, K.forInRight = function (e, t, n) {
            var r = [];
            v(e, function (e, t) {r.push(t, e)});
            var i = r.length;
            for (t = tt(t, n, 3); i-- && !1 !== t(r[i--], r[i], e););
            return e
        }, K.forOwn = d, K.forOwnRight = gt, K.functions = yt, K.groupBy = Wn, K.indexBy = Xn, K.initial = function (e, t, n) {
            var r = 0, i = e ? e.length : 0;
            if (typeof t != "number" && null != t) {
                var s = i;
                for (t = K.createCallback(t, n, 3); s-- && t(e[s], s, e);)r++
            } else r = null == t || n ? 1 : t || r;
            return c(e, 0, On(An(0, i - r), i))
        }, K.intersection = function () {
            for (var n = [], r = -1, i = arguments.length, o = u(), a = ht(), c = a === e, h = u(); ++r < i;) {
                var p = arguments[r];
                (Bn(p) || mt(p)) && (n.push(p), o.push(c && p.length >= y && s(r ? n[r] : h)))
            }
            var c = n[0], d = -1, v = c ? c.length : 0, m = [];
            e:for (; ++d < v;) {
                var g = o[0], p = c[d];
                if (0 > (g ? t(g, p) : a(h, p))) {
                    for (r = i, (g || h).push(p); --r;)if (g = o[r], 0 > (g ? t(g, p) : a(n[r], p)))continue e;
                    m.push(p)
                }
            }
            for (; i--;)(g = o[i]) && l(g);
            return f(o), f(h), m
        }, K.invert = bt, K.invoke = function (e, t) {
            var n = c(arguments, 2), r = -1, i = typeof t == "function", s = e ? e.length : 0, o = Gt(typeof s == "number" ? s : 0);
            return At(e, function (e) {o[++r] = (i ? t : e[t]).apply(e, n)}), o
        }, K.keys = jn, K.map = Mt, K.mapValues = function (e, t, n) {
            var r = {};
            return t = K.createCallback(t, n, 3), d(e, function (e, n, i) {r[n] = t(e, n, i)}), r
        }, K.max = _t, K.memoize = function (e, t) {
            function n() {
                var r = n.cache, i = t ? t.apply(this, arguments) : g + arguments[0];
                return yn.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
            }

            if (!wt(e))throw new un;
            return n.cache = {}, n
        }, K.merge = function (e) {
            var t = arguments, n = 2;
            if (!Et(e))return e;
            if ("number" != typeof t[2] && (n = t.length), 3 < n && "function" == typeof t[n - 2])var r = tt(t[--n - 1], t[n--], 2); else 2 < n && "function" == typeof t[n - 1] && (r = t[--n]);
            for (var t = c(arguments, 1, n), i = -1, s = u(), o = u(); ++i < n;)ot(e, t[i], r, s, o);
            return f(s), f(o), e
        }, K.min = function (e, t, n) {
            var i = 1 / 0, s = i;
            if (typeof t != "function" && n && n[t] === e && (t = null), null == t && Bn(e)) {
                n = -1;
                for (var o = e.length; ++n < o;) {
                    var u = e[n];
                    u < s && (s = u)
                }
            } else t = null == t && xt(e) ? r : K.createCallback(t, n, 3), At(e, function (e, n, r) {n = t(e, n, r), n < i && (i = n, s = e)});
            return s
        }, K.omit = function (e, t, n) {
            var r = {};
            if (typeof t != "function") {
                var i = [];
                v(e, function (e, t) {i.push(t)});
                for (var i = rt(i, it(arguments, !0, !1, 1)), s = -1, o = i.length; ++s < o;) {
                    var u = i[s];
                    r[u] = e[u]
                }
            } else t = K.createCallback(t, n, 3), v(e, function (e, n, i) {t(e, n, i) || (r[n] = e)});
            return r
        }, K.once = function (e) {
            var t, n;
            if (!wt(e))throw new un;
            return function () {return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)}
        }, K.pairs = function (e) {
            for (var t = -1, n = jn(e), r = n.length, i = Gt(r); ++t < r;) {
                var s = n[t];
                i[t] = [s, e[s]]
            }
            return i
        }, K.partial = function (e) {return lt(e, 16, c(arguments, 1))}, K.partialRight = function (e) {return lt(e, 32, null, c(arguments, 1))}, K.pick = function (e, t, n) {
            var r = {};
            if (typeof t != "function")for (var i = -1, s = it(arguments, !0, !1, 1), o = Et(e) ? s.length : 0; ++i < o;) {
                var u = s[i];
                u in e && (r[u] = e[u])
            } else t = K.createCallback(t, n, 3), v(e, function (e, n, i) {t(e, n, i) && (r[n] = e)});
            return r
        }, K.pluck = Vn, K.property = Kt, K.pull = function (e) {
            for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)for (var s = -1, o = t[n]; ++s < i;)e[s] === o && (En.call(e, s--, 1), i--);
            return e
        }, K.range = function (e, t, n) {
            e = +e || 0, n = typeof n == "number" ? n : +n || 1, null == t && (t = e, e = 0);
            var r = -1;
            t = An(0, pn((t - e) / (n || 1)));
            for (var i = Gt(t); ++r < t;)i[r] = e, e += n;
            return i
        }, K.reject = function (e, t, n) {return t = K.createCallback(t, n, 3), kt(e, function (e, n, r) {return!t(e, n, r)})}, K.remove = function (e, t, n) {
            var r = -1, i = e ? e.length : 0, s = [];
            for (t = K.createCallback(t, n, 3); ++r < i;)n = e[r], t(n, r, e) && (s.push(n), En.call(e, r--, 1), i--);
            return s
        }, K.rest = It, K.shuffle = Ht, K.sortBy = function (e, t, n) {
            var r = -1, s = Bn(t), o = e ? e.length : 0, c = Gt(typeof o == "number" ? o : 0);
            for (s || (t = K.createCallback(t, n, 3)), At(e, function (e, n, i) {
                var o = c[++r] = a();
                s ? o.m = Mt(t, function (t) {return e[t]}) : (o.m = u())[0] = t(e, n, i), o.n = r, o.o = e
            }), o = c.length, c.sort(i); o--;)e = c[o], c[o] = e.o, s || f(e.m), l(e);
            return c
        }, K.tap = function (e, t) {return t(e), e}, K.throttle = function (e, t, n) {
            var r = !0, i = !0;
            if (!wt(e))throw new un;
            return!1 === n ? r = !1 : Et(n) && (r = "leading"in n ? n.leading : r, i = "trailing"in n ? n.trailing : i), z.leading = r, z.maxWait = t, z.trailing = i, Xt(e, t, z)
        }, K.times = function (e, t, n) {
            e = -1 < (e = +e) ? e : 0;
            var r = -1, i = Gt(e);
            for (t = tt(t, n, 1); ++r < e;)i[r] = t(r);
            return i
        }, K.toArray = function (e) {return e && typeof e.length == "number" ? c(e) : Tt(e)}, K.transform = function (e, t, n, r) {
            var i = Bn(e);
            if (null == n)if (i)n = []; else {
                var s = e && e.constructor;
                n = et(s && s.prototype)
            }
            return t && (t = K.createCallback(t, r, 4), (i ? At : d)(e, function (e, r, i) {return t(n, e, r, i)})), n
        }, K.union = function () {return at(it(arguments, !0, !0))}, K.uniq = Rt, K.values = Tt, K.where = kt, K.without = function (e) {return rt(e, c(arguments, 1))}, K.wrap = function (e, t) {return lt(t, 16, [e])}, K.xor = function () {
            for (var e = -1, t = arguments.length; ++e < t;) {
                var n = arguments[e];
                if (Bn(n) || mt(n))var r = r ? at(rt(r, n).concat(rt(n, r))) : n
            }
            return r || []
        }, K.zip = Ut, K.zipObject = zt, K.collect = Mt, K.drop = It, K.each = At, K.eachRight = Ot, K.extend = V, K.methods = yt, K.object = zt, K.select = kt, K.tail = It, K.unique = Rt, K.unzip = Ut, $t(K), K.clone = function (e, t, n, r) {return typeof t != "boolean" && null != t && (r = n, n = t, t = !1), Z(e, t, typeof n == "function" && tt(n, r, 1))}, K.cloneDeep = function (e, t, n) {return Z(e, !0, typeof t == "function" && tt(t, n, 1))}, K.contains = Nt, K.escape = function (e) {return null == e ? "" : on(e).replace(Rn, ct)}, K.every = Ct, K.find = Lt, K.findIndex = function (e, t, n) {
            var r = -1, i = e ? e.length : 0;
            for (t = K.createCallback(t, n, 3); ++r < i;)if (t(e[r], r, e))return r;
            return-1
        }, K.findKey = function (e, t, n) {
            var r;
            return t = K.createCallback(t, n, 3), d(e, function (e, n, i) {return t(e, n, i) ? (r = n, !1) : void 0}), r
        }, K.findLast = function (e, t, n) {
            var r;
            return t = K.createCallback(t, n, 3), Ot(e, function (e, n, i) {return t(e, n, i) ? (r = e, !1) : void 0}), r
        }, K.findLastIndex = function (e, t, n) {
            var r = e ? e.length : 0;
            for (t = K.createCallback(t, n, 3); r--;)if (t(e[r], r, e))return r;
            return-1
        }, K.findLastKey = function (e, t, n) {
            var r;
            return t = K.createCallback(t, n, 3), gt(e, function (e, n, i) {return t(e, n, i) ? (r = n, !1) : void 0}), r
        }, K.has = function (e, t) {return e ? yn.call(e, t) : !1}, K.identity = Vt, K.indexOf = Ft, K.isArguments = mt, K.isArray = Bn, K.isBoolean = function (e) {return!0 === e || !1 === e || e && typeof e == "object" && cn.call(e) == H || !1}, K.isDate = function (e) {return e && typeof e == "object" && cn.call(e) == B || !1}, K.isElement = function (e) {return e && 1 === e.nodeType || !1}, K.isEmpty = function (e) {
            var t = !0;
            if (!e)return t;
            var n = cn.call(e), r = e.length;
            return n == P || n == R || n == D || n == I && typeof r == "number" && wt(e.splice) ? !r : (d(e, function () {return t = !1}), t)
        }, K.isEqual = function (e, t, n, r) {return st(e, t, typeof n == "function" && tt(n, r, 2))}, K.isFinite = function (e) {return Cn(e) && !kn(parseFloat(e))}, K.isFunction = wt, K.isNaN = function (e) {return St(e) && e != +e}, K.isNull = function (e) {return null === e}, K.isNumber = St, K.isObject = Et, K.isPlainObject = Un, K.isRegExp = function (e) {return e && typeof e == "object" && cn.call(e) == q || !1}, K.isString = xt, K.isUndefined = function (e) {return typeof e == "undefined"}, K.lastIndexOf = function (e, t, n) {
            var r = e ? e.length : 0;
            for (typeof n == "number" && (r = (0 > n ? An(0, r + n) : On(n, r - 1)) + 1); r--;)if (e[r] === t)return r;
            return-1
        }, K.mixin = $t, K.noConflict = function () {return n._ = ln, this}, K.noop = Jt, K.now = $n, K.parseInt = Jn, K.random = function (e, t, n) {
            var r = null == e, i = null == t;
            return null == n && (typeof e == "boolean" && i ? (n = e, e = 1) : i || typeof t != "boolean" || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1 ? (n = _n(), On(e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))), t)) : ut(e, t)
        }, K.reduce = Dt, K.reduceRight = Pt, K.result = function (e, t) {
            if (e) {
                var n = e[t];
                return wt(n) ? e[t]() : n
            }
        }, K.runInContext = h, K.size = function (e) {
            var t = e ? e.length : 0;
            return typeof t == "number" ? t : jn(e).length
        }, K.some = Bt, K.sortedIndex = qt, K.template = function (e, t, n) {
            var r = K.templateSettings;
            e = on(e || ""), n = b({}, n, r);
            var i, s = b({}, n.imports, r.imports), r = jn(s), s = Tt(s), u = 0, a = n.interpolate || A, f = "__p+='", a = sn((n.escape || A).source + "|" + a.source + "|" + (a === k ? T : A).source + "|" + (n.evaluate || A).source + "|$", "g");
            e.replace(a, function (t, n, r, s, a, l) {return r || (r = s), f += e.slice(u, l).replace(M, o), n && (f += "'+__e(" + n + ")+'"), a && (i = !0, f += "';" + a + ";\n__p+='"), r && (f += "'+((__t=(" + r + "))==null?'':__t)+'"), u = l + t.length, t}), f += "';", a = n = n.variable, a || (n = "obj", f = "with(" + n + "){" + f + "}"), f = (i ? f.replace(E, "") : f).replace(S, "$1").replace(x, "$1;"), f = "function(" + n + "){" + (a ? "" : n + "||(" + n + "={});") + "var __t,__p='',__e=_.escape" + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + f + "return __p}";
            try {var l = en(r, "return " + f).apply(p, s)} catch (c) {throw c.source = f, c}
            return t ? l(t) : (l.source = f, l)
        }, K.unescape = function (e) {return null == e ? "" : on(e).replace(qn, vt)}, K.uniqueId = function (e) {
            var t = ++m;
            return on(null == e ? "" : e) + t
        }, K.all = Ct, K.any = Bt, K.detect = Lt, K.findWhere = Lt, K.foldl = Dt, K.foldr = Pt, K.include = Nt, K.inject = Dt, $t(function () {
            var e = {};
            return d(K, function (t, n) {K.prototype[n] || (e[n] = t)}), e
        }(), !1), K.first = jt, K.last = function (e, t, n) {
            var r = 0, i = e ? e.length : 0;
            if (typeof t != "number" && null != t) {
                var s = i;
                for (t = K.createCallback(t, n, 3); s-- && t(e[s], s, e);)r++
            } else if (r = t, null == r || n)return e ? e[i - 1] : p;
            return c(e, An(0, i - r))
        }, K.sample = function (e, t, n) {return e && typeof e.length != "number" && (e = Tt(e)), null == t || n ? e ? e[ut(0, e.length - 1)] : p : (e = Ht(e), e.length = On(An(0, t), e.length), e)}, K.take = jt, K.head = jt, d(K, function (e, t) {
            var n = "sample" !== t;
            K.prototype[t] || (K.prototype[t] = function (t, r) {
                var i = this.__chain__, s = e(this.__wrapped__, t, r);
                return i || null != t && (!r || n && typeof t == "function") ? new Q(s, i) : s
            })
        }), K.VERSION = "2.4.1", K.prototype.chain = function () {return this.__chain__ = !0, this}, K.prototype.toString = function () {return on(this.__wrapped__)}, K.prototype.value = Qt, K.prototype.valueOf = Qt, At(["join", "pop", "shift"], function (e) {
            var t = an[e];
            K.prototype[e] = function () {
                var e = this.__chain__, n = t.apply(this.__wrapped__, arguments);
                return e ? new Q(n, e) : n
            }
        }), At(["push", "reverse", "sort", "unshift"], function (e) {
            var t = an[e];
            K.prototype[e] = function () {return t.apply(this.__wrapped__, arguments), this}
        }), At(["concat", "slice", "splice"], function (e) {
            var t = an[e];
            K.prototype[e] = function () {return new Q(t.apply(this.__wrapped__, arguments), this.__chain__)}
        }), K
    }

    var p, d = [], v = [], m = 0, g = +(new Date) + "", y = 75, b = 40, w = " 	\f ﻿\n\r\u2028\u2029 ᠎             　", E = /\b__p\+='';/g, S = /\b(__p\+=)''\+/g, x = /(__e\(.*?\)|\b__t\))\+'';/g, T = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, N = /\w*$/, C = /^\s*function[ \n\r\t]+\w/, k = /<%=([\s\S]+?)%>/g, L = RegExp("^[" + w + "]*0+(?=.$)"), A = /($^)/, O = /\bthis\b/, M = /['\n\r\t\u2028\u2029\\]/g, _ = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "), D = "[object Arguments]", P = "[object Array]", H = "[object Boolean]", B = "[object Date]", j = "[object Function]", F = "[object Number]", I = "[object Object]", q = "[object RegExp]", R = "[object String]", U = {};
    U[j] = !1, U[D] = U[P] = U[H] = U[B] = U[F] = U[I] = U[q] = U[R] = !0;
    var z = {leading: !1, maxWait: 0, trailing: !1}, W = {configurable: !1, enumerable: !1, value: null, writable: !1}, X = {"boolean": !1, "function": !0, object: !0, number: !1, string: !1, "undefined": !1}, V = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, $ = X[typeof window] && window || this, J = X[typeof exports] && exports && !exports.nodeType && exports, K = X[typeof module] && module && !module.nodeType && module, Q = K && K.exports === J && J, G = X[typeof global] && global;
    !G || G.global !== G && G.window !== G || ($ = G);
    var Y = h();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? ($._ = Y, define("underscore", [], function () {return Y})) : J && K ? Q ? (K.exports = Y)._ = Y : J._ = Y : $._ = Y
}.call(this), function () {
    var e, t, n, r, i, s, o, u, a;
    e = function (e, t, n, r) {return n.define("jarvix", {version: "0.0.1", aliases: ["jx", "jX"], global: !0, base_path: e, test_path: e + "tests/", doc_path: e + "docs/", paths: {order: e + "libs/require.order", use: e + "libs/require.use", async: e + "libs/async", eventify: e + "libs/eventify", underscore: e + "libs/lodash", moment: e + "libs/moment", traits: e + "libs/traits", chai: e + "libs/chai", jstest: e + "libs/jstest"}, shim: {}}, [e + "array", e + "async", e + "config", e + "date", e + "event", e + "list", e + "memory", e + "object", e + "regexp", e + "string", e + "test", e + "trait", e + "utility"], function (e, r, i, s, o, u, a, f, l, c, h, p, d) {return{require: function (e, n) {return t.require(e, n)}, module: t, array: e, async: r, config: i, date: s, event: o, library: n, list: u, memory: a, object: f, regexp: l, string: c, test: h, trait: p, utility: d}}), t.require(["jarvix"], function (e) {return r(null, e)})}, t = function () {
        var e, t;
        return e = void 0, t = "jarvix_memory", typeof window != "undefined" ? (window[t] = window[t] || {}, e = window[t]) : (global[t] = global[t] || {}, e = global[t]), e
    }, n = function (e, t, n) {
        var r;
        return r = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, t.config({paths: {async: r.path + "libs/async", underscore: r.path + "libs/lodash"}}), t(["async", "underscore"], function (r, i) {
            return n(null, {options: {requirejs: t, base_path: ".", cache: !0, paths: {}, shim: {}, use: {}}, on_config: function (e, n) {
                var r, s;
                r = this, e = e || {}, r.options = i.extend(r.options, e), s = "", typeof window != "undefined" ? r.options.cache === !1 && (s = "v=" + (new Date).getTime()) : r.options.cache = !0, t.config({baseUrl: r.options.base_path || ".", urlArgs: s, paths: r.options.paths || {}, shim: r.options.shim || {}, use: r.options.use || {}});
                if (n)return n(null, e)
            }, resolve_paths: function (e, t) {
                var n, s, o;
                return o = this, i.isString(e) && (e = [e]), n = typeof jx != "undefined" ? jx.library.options.libs : {}, s = i.keys(n), typeof window != "undefined" ? e = e.client || e.browser || e : e = e.server || e.node || e, r.map(e, function (e, t) {
                    var r, o, u, a, f, l;
                    u = !1;
                    if (e.indexOf("node://") !== -1 || e.indexOf("node_modules://") !== -1)e = e.replace("node://", "").replace("node_modules://", ""), u = !0;
                    u !== !0 && i.indexOf(s, e) !== -1 && (e = n[e].base_path, u = !0), u !== !0 && e.indexOf("://") !== -1 && (a = e.split("://"), i.indexOf(s, a[0]) !== -1 && (e = n[a[0]].base_path + a[1], u = !0));
                    if (u !== !0)for (f = 0, l = s.length; f < l; f++)o = s[f], r = n[o].aliases || [], i.indexOf(r, e) !== -1 && (e = n[o].base_path, u = !0), u !== !0 && e.indexOf(!0) && (a = e.split("://"), i.indexOf(r, a) !== -1 && (e = n[a[0]].base_path + a[1], u = !0));
                    return t(null, e)
                }, function (e, n) {return t(e, n)})
            }, define: function (t, n, r) {
                return this.resolve_paths(n, function (n, i) {
                    if (n)throw n;
                    return t === "jarvix" || t === "module" ? e(t, i, r) : e(t, i, r)
                })
            }, require: function (e, n) {
                return this.resolve_paths(e, function (e, r) {
                    if (e)throw e;
                    return t(r, n)
                })
            }})
        })
    }, typeof window != "undefined" ? (i = t(), u = document.getElementsByTagName("script"), u = u[u.length - 1], s = u.src.replace(window.location.href, "").replace("jarvix.js", "").replace("index.js", ""), r = u.getAttribute("data-config"), o = u.getAttribute("data-ready"), s = "bin/", i.path = s, a = document.createElement("script"), a.src = s + "libs/require.js", a.onload = function () {return require.onError = function (e) {return console.error(e)}, n(define, require, function (t, n) {return t ? console.error(t) : (i.module = n, n.require([s + "library"], function (t) {return e(s, n, t, function (e, t) {return console.log(t), console.log(window.global), e ? console.error(e) : (delete i.module, window.jarvix = t, window.jx = window.jarvix, window.jX = window.jarvix, jx.library.config(jx, r, function (e, t) {if (t.utility.is_string(o))return a = document.createElement("script"), a.src = t.string.ends_with(o, ".js") ? "" : o + ".js", document.getElementsByTagName("head")[0].appendChild(a)}))})}))})}, document.getElementsByTagName("head")[0].appendChild(a)) : exports.ready = function (r, o) {
        var u, a, f;
        return f = require("underscore"), a = require("requirejs"), a.config({baseUrl: ".", paths: "", nodeRequire: require}), a.onError = function (e) {return console.error(e)}, typeof r == "function" && (o = r, r = {}), r.module = r.module || {}, i = t(), u = module.parent.filename.split("\\"), u.pop(), s = module.id.split("\\"), s.pop(), s = f.difference(s, u), s = s.join("/") + "/", i.path = s, n(a.define, a, function (t, n) {return t ? o(t) : (i.module = n, n.require([s + "library"], function (t) {return e(s, n, t, function (e, t) {return e ? console.error(e) : (delete i.module, global.jarvix = t, global.jx = global.jarvix, global.jX = global.jarvix, t.library.config(t, r, function (e, t) {return o(e, t)}))})}))})
    }
}.call(this), define("bin/index", function () {}), function () {
    var e, t, n;
    e = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, n = e.path, t = e.module, t.define("jarvix/array", ["underscore"], function (e) {return{intersection: e.intersection, index_of: e.indexOf, contains: function (t, n) {return e.indexOf(t, n) !== -1}}})
}.call(this), define("bin/array", function () {}), function () {
    var e, t;
    e = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, t = e.module, t.define("jarvix/async", ["async"], function (e) {return{"if": function (e, t, n) {return e ? t.then(n) : t["else"](n)}, each: e.each, parallel: e.parallel, series: e.series, map: e.map}})
}.call(this), define("bin/async", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, e.module.define("jarvix/config", ["underscore"], function (e) {})
}.call(this), define("bin/config", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/date", ["moment", "underscore"], function (e, t) {return{iso_pattern: "YYYY-MM-DDTHH:mm:ssZ", default_pattern: "DD-MM-YYYY", is_valid: function (n) {return n === void 0 || n === null || n === "" ? !1 : (t.isString(n) && (n = this.parse(n)), n = new e(n), n.isValid())}, parse: function (n, r) {return r = t.isString(r) ? r : this.default_pattern, (new e(n, r)).toDate()}, format: function (n, r) {return r = t.isUndefined(r) ? this.default_pattern : r, n = new e(n), n.format(r)}, from_iso: function (e) {return this.parse(e, this.iso_pattern)}, to_iso: function (e) {return t.isString(e) && (e = this.parse(e)), this.format(e, this.iso_pattern)}}})
}.call(this), define("bin/date", function () {}), function () {
    var e, t, n;
    e = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, n = e.path, t = e.module, t.define("jarvix/event", ["eventify"], function (e) {})
}.call(this), define("bin/event", function () {}), function () {
    var e, t;
    e = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, t = typeof jx != "undefined" ? jx.module : e.module, define("bin/library", ["async", "underscore"], function (e, n) {
        return{options: {libs: {}}, resolve_paths: function (e, t) {}, define: function (e, r, i, s) {
            var o;
            return o = this, r ? (s || (s = function () {}), n.has(o.options.libs, e) || (o.options.libs[e] = r), t.on_config({paths: r.paths || {}, shim: r.shim || {}}), t.define(e, i, s)) : s("options are required.")
        }, config: function (r, i, s) {
            var o, u;
            return u = this, i = i || {}, o = function (t, r, i) {
                var s;
                return s = n.keys(t), e.each(s, function (e, i) {return n.isUndefined(r[e] && n.isFunction(t[e].on_config)) ? i() : t[e].on_config(r[e], i)}, function (e) {return i(e, t)})
            }, e.parallel([function (e) {return n.isString(r) ? t.require([r], function (t) {return e(null, t)}) : e(null, r)}, function (e) {return n.isString(i) ? t.require([i], function (t) {return e(null, t)}) : e(null, i)}], function (e, t) {return o(t[0], t[1], s)})
        }, build: function (r, i, s) {
            var o;
            return o = this, n.isFunction(i) && (s = i, i = void 0), e.series({library: function (e) {return n.isString(r) ? t.require(r, function (t) {return e(null, t)}) : e(null, r)}, paths: function (r) {
                var i;
                return i = [], e.each(n.keys(t.options.paths), function (e, n) {return i.push(t.options.paths[e]), n()}, function (e) {return r(e, i)})
            }, modules: function (t) {
                var i;
                return i = [], e.each(n.keys(r), function (e, t) {return e !== "require" && e !== "module" && i.push("bin/" + e), t()}, function (e) {return t(e, i)})
            }}, function (e, r) {
                var o;
                return e ? console.error(e) : (o = n.union(r.modules, r.paths), t.options.paths.requireLib = "./bin/libs/require", i = i || {name: "bin/index", baseUrl: ".", paths: t.options.paths, include: r.modules, out: "build/jarvix.js", optimize: "uglify", preserveLicenseComments: !1}, t.options.requirejs.optimize(i, function (e) {if (s)return s(null, e)}, function (e) {
                    console.log("cazzo errore");
                    if (s)return s(e)
                }))
            })
        }}
    })
}.call(this), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/list", ["underscore"], function (e) {return{each: function (t, n, r) {return e.each(t, n, r)}, map: function (t, n, r) {return e.map(t, n, r)}, reduce: function (t, n, r, i) {return e.reduce(t, n, r, i)}, reduce_right: function (t, n, r, i) {return e.reduceRight(t, n, r, i)}, find: function (t, n, r) {return e.find(t, n, r)}, filter: function (t, n, r) {return e.filter(t, n, r)}, where: function (t, n) {return e.where(t, n)}, find_where: function (t, n) {return e.findWhere(t, n)}, reject: function (t, n, r) {return e.reject(t, n, r)}, every: function (t, n, r) {return e.every(t, n, r)}, some: function (t, n, r) {return e.some(t, n, r)}}})
}.call(this), define("bin/list", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/memory", [], function () {return{data: {}, set: function (e, t) {return this.data[e] = t}, get: function (e) {return this.data[e]}}})
}.call(this), define("bin/memory", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/object", ["underscore"], function (e) {return{create: Object.create, get_properties: Object.getOwnProperties, freeze: function (e) {return Object.freeze(e)}, keys: function (t) {return e.keys(t)}, has: function (t, n) {return e.has(t, n)}, extend: e.extend}})
}.call(this), define("bin/object", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/regexp", ["underscore"], function (e) {
        return{test: function (t, n) {
            var r;
            return e.isString(n) && !e.isUndefined(this[n]) && (n = this[n]), n = new RegExp(n), r = t.match(n), r && r.length > 0
        }, email: "^([a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*)@(([a-zA-Z0-9]+((.|[-]{1,2})[a-zA-Z0-9]+)*).[a-zA-Z]{2,6})$"}
    })
}.call(this), define("bin/regexp", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/string", [], function () {
        return{repeat: function (e, t) {
            if (!t || t < 1)t = 1;
            return(new Array(t + 1)).join(e)
        }, starts_with: function (e, t) {return(new String(e)).slice(0, t.length) === t}, ends_with: function (e, t) {return(new String(e)).slice(-t.length) === t}, contains: function (e, t) {return e.indexOf(t) !== -1}, to_upper: function (e) {return e.toUpperCase()}, to_lower: function (e) {return e.toLowerCase()}, to_capitalized: function (e) {return this.to_upper(e.charAt(0)) + this.to_lower(e.slice(1))}}
    })
}.call(this), define("bin/string", function () {}), function () {
    var e, t, n;
    e = typeof window != "undefined" ? window.jarvix_memory : global.jarvix_memory, n = e.path, t = e.module, t.define("jarvix/test", ["chai", "jstest", "underscore"], function (e, n, r) {
        return{define: function (e, n, i) {
            var s, o;
            return o = this, r.isFunction(n) ? (i = n, s = e.split(".")[0], JS.Test.describe(s, function () {return this.before(function () {return this.expect = o.expect}), this.describe(e, i)})) : t.define(e, n, i)
        }, describe: function (e, t) {return JS.Test.describe(e, t)}, should: e.should(), expect: e.expect, run: function (n, r) {
            return t.require(n, function () {
                return JS.cache = !1, JS.Test.ASSERTION_ERRORS.push(e.AssertionError), JS.Test.autorun(function (e) {
                    typeof window != "undefined" ? e.setReporter(new JS.Test.Reporters.Browser) : (e.setReporter(new JS.Test.Reporters.Spec), e.addReporter(JS.Test.Reporters.ExitStatus()), e.addReporter(JS.Test.Reporters.Error()));
                    if (r)return r(null)
                })
            })
        }}
    })
}.call(this), define("bin/test", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/trait", ["traits"], function (e) {return{define: e, create: e.create, compose: e.compose, resolve: e.resolve, override: e.override, required: e.required, is_equal: e.eqv, object: e.object}})
}.call(this), define("bin/trait", function () {}), function () {
    var e;
    e = typeof window != "undefined" ? window.jarvix_memory.module : global.jarvix_memory.module, e.define("jarvix/utility", ["underscore"], function (e) {return{is_object: function (t) {return e.isObject(t)}, is_equal: function (t, n) {return e.isEqual(t, n)}, is_empty: function (t) {return e.isEmpty(t)}, is_array: function (t) {return e.isArray(t)}, is_function: function (t) {return e.isFunction(t)}, is_arguments: function (t) {return e.isArguments(t)}, is_string: function (t) {return e.isString(t)}, is_number: function (t) {return e.isNumber(t)}, is_nan: function (t) {return e.isNaN(t)}, is_finite: function (t) {return e.isFinite(t)}, is_boolean: function (t) {return e.isBoolean(t)}, is_regexp: function (t) {return e.isRegExp(t)}, is_null: function (t) {return e.isNull(t)}, is_undefined: function (t) {return e.isUndefined(t)}, is_defined: function (t) {return!e.isUndefined(t)}, is_element: function (t) {return e.isElement(t)}, is_browser: function () {return typeof window != "undefined"}, is_nodejs: function () {return!this.is_browser()}, to_upper: function (e) {return e.toUpperCase()}, to_lower: function (e) {return e.toLowerCase()}, to_capitalized: function (e) {return this.to_upper(e.charAt(0)) + this.to_lower(e.slice(1))}}})
}.call(this), define("bin/utility", function () {});