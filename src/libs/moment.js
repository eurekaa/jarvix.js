//! moment.js
//! version : 2.4.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) {
    function b(a, b) {return function (c) {return i(a.call(this, c), b)}}

    function c(a, b) {return function (c) {return this.lang().ordinal(a.call(this, c), b)}}

    function d() {}

    function e(a) {u(a), g(this, a)}

    function f(a) {
        var b = o(a), c = b.year || 0, d = b.month || 0, e = b.week || 0, f = b.day || 0, g = b.hour || 0, h = b.minute || 0, i = b.second || 0, j = b.millisecond || 0;
        this._input = a, this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble()
    }

    function g(a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a) {return 0 > a ? Math.ceil(a) : Math.floor(a)}

    function i(a, b) {
        for (var c = a + ""; c.length < b;)c = "0" + c;
        return c
    }

    function j(a, b, c, d) {
        var e, f, g = b._milliseconds, h = b._days, i = b._months;
        g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && bb.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
    }

    function k(a) {return"[object Array]" === Object.prototype.toString.call(a)}

    function l(a) {return"[object Date]" === Object.prototype.toString.call(a) || a instanceof Date}

    function m(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
        return g + f
    }

    function n(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Kb[a] || Lb[b] || b
        }
        return a
    }

    function o(a) {
        var b, c, d = {};
        for (c in a)a.hasOwnProperty(c) && (b = n(c), b && (d[b] = a[c]));
        return d
    }

    function p(b) {
        var c, d;
        if (0 === b.indexOf("week"))c = 7, d = "day"; else {
            if (0 !== b.indexOf("month"))return;
            c = 12, d = "month"
        }
        bb[b] = function (e, f) {
            var g, h, i = bb.fn._lang[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function (a) {
                var b = bb().utc().set(d, a);
                return i.call(bb.fn._lang, b, e || "")
            }, null != f)return h(f);
            for (g = 0; c > g; g++)j.push(h(g));
            return j
        }
    }

    function q(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function r(a, b) {return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()}

    function s(a) {return t(a) ? 366 : 365}

    function t(a) {return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400}

    function u(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[gb] < 0 || a._a[gb] > 11 ? gb : a._a[hb] < 1 || a._a[hb] > r(a._a[fb], a._a[gb]) ? hb : a._a[ib] < 0 || a._a[ib] > 23 ? ib : a._a[jb] < 0 || a._a[jb] > 59 ? jb : a._a[kb] < 0 || a._a[kb] > 59 ? kb : a._a[lb] < 0 || a._a[lb] > 999 ? lb : -1, a._pf._overflowDayOfYear && (fb > b || b > hb) && (b = hb), a._pf.overflow = b)
    }

    function v(a) {a._pf = {empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}}

    function w(a) {return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid}

    function x(a) {return a ? a.toLowerCase().replace("_", "-") : a}

    function y(a, b) {return b.abbr = a, mb[a] || (mb[a] = new d), mb[a].set(b), mb[a]}

    function z(a) {delete mb[a]}

    function A(a) {
        var b, c, d, e, f = 0, g = function (a) {
            if (!mb[a] && nb)try {require("./lang/" + a)} catch (b) {}
            return mb[a]
        };
        if (!a)return bb.fn._lang;
        if (!k(a)) {
            if (c = g(a))return c;
            a = [a]
        }
        for (; f < a.length;) {
            for (e = x(a[f]).split("-"), b = e.length, d = x(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                if (c = g(e.slice(0, b).join("-")))return c;
                if (d && d.length >= b && m(e, d, !0) >= b - 1)break;
                b--
            }
            f++
        }
        return bb.fn._lang
    }

    function B(a) {return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")}

    function C(a) {
        var b, c, d = a.match(rb);
        for (b = 0, c = d.length; c > b; b++)d[b] = Pb[d[b]] ? Pb[d[b]] : B(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++)f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function D(a, b) {return a.isValid() ? (b = E(b, a.lang()), Mb[b] || (Mb[b] = C(b)), Mb[b](a)) : a.lang().invalidDate()}

    function E(a, b) {
        function c(a) {return b.longDateFormat(a) || a}

        var d = 5;
        for (sb.lastIndex = 0; d >= 0 && sb.test(a);)a = a.replace(sb, c), sb.lastIndex = 0, d -= 1;
        return a
    }

    function F(a, b) {
        var c;
        switch (a) {
            case"DDDD":
                return vb;
            case"YYYY":
            case"GGGG":
            case"gggg":
                return wb;
            case"YYYYY":
            case"GGGGG":
            case"ggggg":
                return xb;
            case"S":
            case"SS":
            case"SSS":
            case"DDD":
                return ub;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return zb;
            case"a":
            case"A":
                return A(b._l)._meridiemParse;
            case"X":
                return Cb;
            case"Z":
            case"ZZ":
                return Ab;
            case"T":
                return Bb;
            case"SSSS":
                return yb;
            case"MM":
            case"DD":
            case"YY":
            case"GG":
            case"gg":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"e":
            case"E":
                return tb;
            default:
                return c = new RegExp(N(M(a.replace("\\", "")), "i"))
        }
    }

    function G(a) {
        var b = (Ab.exec(a) || [])[0], c = (b + "").match(Hb) || ["-", 0, 0], d = +(60 * c[1]) + q(c[2]);
        return"+" === c[0] ? -d : d
    }

    function H(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case"M":
            case"MM":
                null != b && (e[gb] = q(b) - 1);
                break;
            case"MMM":
            case"MMMM":
                d = A(c._l).monthsParse(b), null != d ? e[gb] = d : c._pf.invalidMonth = b;
                break;
            case"D":
            case"DD":
                null != b && (e[hb] = q(b));
                break;
            case"DDD":
            case"DDDD":
                null != b && (c._dayOfYear = q(b));
                break;
            case"YY":
                e[fb] = q(b) + (q(b) > 68 ? 1900 : 2e3);
                break;
            case"YYYY":
            case"YYYYY":
                e[fb] = q(b);
                break;
            case"a":
            case"A":
                c._isPm = A(c._l).isPM(b);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                e[ib] = q(b);
                break;
            case"m":
            case"mm":
                e[jb] = q(b);
                break;
            case"s":
            case"ss":
                e[kb] = q(b);
                break;
            case"S":
            case"SS":
            case"SSS":
            case"SSSS":
                e[lb] = q(1e3 * ("0." + b));
                break;
            case"X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case"Z":
            case"ZZ":
                c._useUTC = !0, c._tzm = G(b);
                break;
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"d":
            case"dd":
            case"ddd":
            case"dddd":
            case"e":
            case"E":
                a = a.substr(0, 1);
            case"gg":
            case"gggg":
            case"GG":
            case"GGGG":
            case"GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
        }
    }

    function I(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if (!a._d) {
            for (d = K(a), a._w && null == a._a[hb] && null == a._a[gb] && (f = function (b) {return b ? b.length < 3 ? parseInt(b, 10) > 68 ? "19" + b : "20" + b : b : null == a._a[fb] ? bb().weekYear() : a._a[fb]}, g = a._w, null != g.GG || null != g.W || null != g.E ? h = X(f(g.GG), g.W || 1, g.E, 4, 1) : (i = A(a._l), j = null != g.d ? T(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = X(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[fb] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[fb] ? d[fb] : a._a[fb], a._dayOfYear > s(e) && (a._pf._overflowDayOfYear = !0), c = S(e, 0, a._dayOfYear), a._a[gb] = c.getUTCMonth(), a._a[hb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b)a._a[b] = l[b] = d[b];
            for (; 7 > b; b++)a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[ib] += q((a._tzm || 0) / 60), l[jb] += q((a._tzm || 0) % 60), a._d = (a._useUTC ? S : R).apply(null, l)
        }
    }

    function J(a) {
        var b;
        a._d || (b = o(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], I(a))
    }

    function K(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function L(a) {
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = A(a._l), h = "" + a._i, i = h.length, j = 0;
        for (d = E(a._f, g).match(rb) || [], b = 0; b < d.length; b++)e = d[b], c = (F(e, a).exec(h) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Pb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), H(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[ib] < 12 && (a._a[ib] += 12), a._isPm === !1 && 12 === a._a[ib] && (a._a[ib] = 0), I(a), u(a)
    }

    function M(a) {return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {return b || c || d || e})}

    function N(a) {return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}

    function O(a) {
        var b, c, d, e, f;
        if (0 === a._f.length)return a._pf.invalidFormat = !0, a._d = new Date(0 / 0), void 0;
        for (e = 0; e < a._f.length; e++)f = 0, b = g({}, a), v(b), b._f = a._f[e], L(b), w(b) && (f += b._pf.charsLeftOver, f += 10 * b._pf.unusedTokens.length, b._pf.score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function P(a) {
        var b, c = a._i, d = Db.exec(c);
        if (d) {
            for (a._pf.iso = !0, b = 4; b > 0; b--)if (d[b]) {
                a._f = Fb[b - 1] + (d[6] || " ");
                break
            }
            for (b = 0; 4 > b; b++)if (Gb[b][1].exec(c)) {
                a._f += Gb[b][0];
                break
            }
            Ab.exec(c) && (a._f += "Z"), L(a)
        } else a._d = new Date(c)
    }

    function Q(b) {
        var c = b._i, d = ob.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? P(b) : k(c) ? (b._a = c.slice(0), I(b)) : l(c) ? b._d = new Date(+c) : "object" == typeof c ? J(b) : b._d = new Date(c)
    }

    function R(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function S(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function T(a, b) {
        if ("string" == typeof a)if (isNaN(a)) {if (a = b.weekdaysParse(a), "number" != typeof a)return null} else a = parseInt(a, 10);
        return a
    }

    function U(a, b, c, d, e) {return e.relativeTime(b || 1, !!c, a, d)}

    function V(a, b, c) {
        var d = eb(Math.abs(a) / 1e3), e = eb(d / 60), f = eb(e / 60), g = eb(f / 24), h = eb(g / 365), i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", eb(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, U.apply({}, i)
    }

    function W(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = bb(a).add("d", f), {week: Math.ceil(d.dayOfYear() / 7), year: d.year()}
    }

    function X(a, b, c, d, e) {
        var f, g, h = new Date(Date.UTC(a, 0)).getUTCDay();
        return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : s(a - 1) + g}
    }

    function Y(a) {
        var b = a._i, c = a._f;
        return"undefined" == typeof a._pf && v(a), null === b ? bb.invalid({nullInput: !0}) : ("string" == typeof b && (a._i = b = A().preparse(b)), bb.isMoment(b) ? (a = g({}, b), a._d = new Date(+b._d)) : c ? k(c) ? O(a) : L(a) : Q(a), new e(a))
    }

    function Z(a, b) {
        bb.fn[a] = bb.fn[a + "s"] = function (a) {
            var c = this._isUTC ? "UTC" : "";
            return null != a ? (this._d["set" + c + b](a), bb.updateOffset(this), this) : this._d["get" + c + b]()
        }
    }

    function $(a) {bb.duration.fn[a] = function () {return this._data[a]}}

    function _(a, b) {bb.duration.fn["as" + a] = function () {return+this / b}}

    function ab(a) {
        var b = !1, c = bb;
        "undefined" == typeof ender && (this.moment = a ? function () {return!b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), c.apply(null, arguments)} : bb)
    }

    for (var bb, cb, db = "2.4.0", eb = Math.round, fb = 0, gb = 1, hb = 2, ib = 3, jb = 4, kb = 5, lb = 6, mb = {}, nb = "undefined" != typeof module && module.exports, ob = /^\/?Date\((\-?\d+)/i, pb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, qb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, rb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, sb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, tb = /\d\d?/, ub = /\d{1,3}/, vb = /\d{3}/, wb = /\d{1,4}/, xb = /[+\-]?\d{1,6}/, yb = /\d+/, zb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ab = /Z|[\+\-]\d\d:?\d\d/i, Bb = /T/i, Cb = /[\+\-]?\d+(\.\d{1,3})?/, Db = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/, Eb = "YYYY-MM-DDTHH:mm:ssZ", Fb = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], Gb = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], Hb = /([\+\-]|\d\d)/gi, Ib = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Jb = {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}, Kb = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear"}, Lb = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, Mb = {}, Nb = "DDD w W M D d".split(" "), Ob = "M D H h m s w W".split(" "), Pb = {M: function () {return this.month() + 1}, MMM: function (a) {return this.lang().monthsShort(this, a)}, MMMM: function (a) {return this.lang().months(this, a)}, D: function () {return this.date()}, DDD: function () {return this.dayOfYear()}, d: function () {return this.day()}, dd: function (a) {return this.lang().weekdaysMin(this, a)}, ddd: function (a) {return this.lang().weekdaysShort(this, a)}, dddd: function (a) {return this.lang().weekdays(this, a)}, w: function () {return this.week()}, W: function () {return this.isoWeek()}, YY: function () {return i(this.year() % 100, 2)}, YYYY: function () {return i(this.year(), 4)}, YYYYY: function () {return i(this.year(), 5)}, gg: function () {return i(this.weekYear() % 100, 2)}, gggg: function () {return this.weekYear()}, ggggg: function () {return i(this.weekYear(), 5)}, GG: function () {return i(this.isoWeekYear() % 100, 2)}, GGGG: function () {return this.isoWeekYear()}, GGGGG: function () {return i(this.isoWeekYear(), 5)}, e: function () {return this.weekday()}, E: function () {return this.isoWeekday()}, a: function () {return this.lang().meridiem(this.hours(), this.minutes(), !0)}, A: function () {return this.lang().meridiem(this.hours(), this.minutes(), !1)}, H: function () {return this.hours()}, h: function () {return this.hours() % 12 || 12}, m: function () {return this.minutes()}, s: function () {return this.seconds()}, S: function () {return q(this.milliseconds() / 100)}, SS: function () {return i(q(this.milliseconds() / 10), 2)}, SSS: function () {return i(this.milliseconds(), 3)}, SSSS: function () {return i(this.milliseconds(), 3)}, Z: function () {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + i(q(a / 60), 2) + ":" + i(q(a) % 60, 2)
    }, ZZ: function () {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + i(q(10 * a / 6), 4)
    }, z: function () {return this.zoneAbbr()}, zz: function () {return this.zoneName()}, X: function () {return this.unix()}}, Qb = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Nb.length;)cb = Nb.pop(), Pb[cb + "o"] = c(Pb[cb], cb);
    for (; Ob.length;)cb = Ob.pop(), Pb[cb + cb] = b(Pb[cb], 2);
    for (Pb.DDDD = b(Pb.DDD, 3), g(d.prototype, {set: function (a) {
        var b, c;
        for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
    }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (a) {return this._months[a.month()]}, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (a) {return this._monthsShort[a.month()]}, monthsParse: function (a) {
        var b, c, d;
        for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)if (this._monthsParse[b] || (c = bb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a))return b
    }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (a) {return this._weekdays[a.day()]}, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (a) {return this._weekdaysShort[a.day()]}, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (a) {return this._weekdaysMin[a.day()]}, weekdaysParse: function (a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)if (this._weekdaysParse[b] || (c = bb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
    }, _longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, longDateFormat: function (a) {
        var b = this._longDateFormat[a];
        return!b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {return a.slice(1)}), this._longDateFormat[a] = b), b
    }, isPM: function (a) {return"p" === (a + "").toLowerCase().charAt(0)}, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function (a, b, c) {return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"}, _calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, calendar: function (a, b) {
        var c = this._calendar[a];
        return"function" == typeof c ? c.apply(b) : c
    }, _relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function (a, b, c, d) {
        var e = this._relativeTime[c];
        return"function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }, pastFuture: function (a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return"function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }, ordinal: function (a) {return this._ordinal.replace("%d", a)}, _ordinal: "%d", preparse: function (a) {return a}, postformat: function (a) {return a}, week: function (a) {return W(a, this._week.dow, this._week.doy).week}, _week: {dow: 0, doy: 6}, _invalidDate: "Invalid date", invalidDate: function () {return this._invalidDate}}), bb = function (b, c, d, e) {return"boolean" == typeof d && (e = d, d = a), Y({_i: b, _f: c, _l: d, _strict: e, _isUTC: !1})}, bb.utc = function (b, c, d, e) {
        var f;
        return"boolean" == typeof d && (e = d, d = a), f = Y({_useUTC: !0, _isUTC: !0, _l: d, _i: b, _f: c, _strict: e}).utc()
    }, bb.unix = function (a) {return bb(1e3 * a)}, bb.duration = function (a, b) {
        var c, d, e, g = bb.isDuration(a), h = "number" == typeof a, i = g ? a._input : h ? {} : a, j = null;
        return h ? b ? i[b] = a : i.milliseconds = a : (j = pb.exec(a)) ? (c = "-" === j[1] ? -1 : 1, i = {y: 0, d: q(j[hb]) * c, h: q(j[ib]) * c, m: q(j[jb]) * c, s: q(j[kb]) * c, ms: q(j[lb]) * c}) : (j = qb.exec(a)) && (c = "-" === j[1] ? -1 : 1, e = function (a) {
            var b = a && parseFloat(a.replace(",", "."));
            return(isNaN(b) ? 0 : b) * c
        }, i = {y: e(j[2]), M: e(j[3]), d: e(j[4]), h: e(j[5]), m: e(j[6]), s: e(j[7]), w: e(j[8])}), d = new f(i), g && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, bb.version = db, bb.defaultFormat = Eb, bb.updateOffset = function () {}, bb.lang = function (a, b) {
        var c;
        return a ? (b ? y(x(a), b) : null === b ? (z(a), a = "en") : mb[a] || A(a), c = bb.duration.fn._lang = bb.fn._lang = A(a), c._abbr) : bb.fn._lang._abbr
    }, bb.langData = function (a) {return a && a._lang && a._lang._abbr && (a = a._lang._abbr), A(a)}, bb.isMoment = function (a) {return a instanceof e}, bb.isDuration = function (a) {return a instanceof f}, cb = Qb.length - 1; cb >= 0; --cb)p(Qb[cb]);
    for (bb.normalizeUnits = function (a) {return n(a)}, bb.invalid = function (a) {
        var b = bb.utc(0 / 0);
        return null != a ? g(b._pf, a) : b._pf.userInvalidated = !0, b
    }, bb.parseZone = function (a) {return bb(a).parseZone()}, g(bb.fn = e.prototype, {clone: function () {return bb(this)}, valueOf: function () {return+this._d + 6e4 * (this._offset || 0)}, unix: function () {return Math.floor(+this / 1e3)}, toString: function () {return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}, toDate: function () {return this._offset ? new Date(+this) : this._d}, toISOString: function () {return D(bb(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}, toArray: function () {
        var a = this;
        return[a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
    }, isValid: function () {return w(this)}, isDSTShifted: function () {return this._a ? this.isValid() && m(this._a, (this._isUTC ? bb.utc(this._a) : bb(this._a)).toArray()) > 0 : !1}, parsingFlags: function () {return g({}, this._pf)}, invalidAt: function () {return this._pf.overflow}, utc: function () {return this.zone(0)}, local: function () {return this.zone(0), this._isUTC = !1, this}, format: function (a) {
        var b = D(this, a || bb.defaultFormat);
        return this.lang().postformat(b)
    }, add: function (a, b) {
        var c;
        return c = "string" == typeof a ? bb.duration(+b, a) : bb.duration(a, b), j(this, c, 1), this
    }, subtract: function (a, b) {
        var c;
        return c = "string" == typeof a ? bb.duration(+b, a) : bb.duration(a, b), j(this, c, -1), this
    }, diff: function (a, b, c) {
        var d, e, f = this._isUTC ? bb(a).zone(this._offset || 0) : bb(a).local(), g = 6e4 * (this.zone() - f.zone());
        return b = n(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - bb(this).startOf("month") - (f - bb(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - bb(this).startOf("month").zone() - (f.zone() - bb(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : h(e)
    }, from: function (a, b) {return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)}, fromNow: function (a) {return this.from(bb(), a)}, calendar: function () {
        var a = this.diff(bb().zone(this.zone()).startOf("day"), "days", !0), b = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(b, this))
    }, isLeapYear: function () {return t(this.year())}, isDST: function () {return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()}, day: function (a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = T(a, this.lang()), this.add({d: a - b})) : b
    }, month: function (a) {
        var b, c = this._isUTC ? "UTC" : "";
        return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), bb.updateOffset(this), this) : this._d["get" + c + "Month"]()
    }, startOf: function (a) {
        switch (a = n(a)) {
            case"year":
                this.month(0);
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return"week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this
    }, endOf: function (a) {return a = n(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)}, isAfter: function (a, b) {return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +bb(a).startOf(b)}, isBefore: function (a, b) {return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +bb(a).startOf(b)}, isSame: function (a, b) {return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) === +bb(a).startOf(b)}, min: function (a) {return a = bb.apply(null, arguments), this > a ? this : a}, max: function (a) {return a = bb.apply(null, arguments), a > this ? this : a}, zone: function (a) {
        var b = this._offset || 0;
        return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = G(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && j(this, bb.duration(b - a, "m"), 1, !0), this)
    }, zoneAbbr: function () {return this._isUTC ? "UTC" : ""}, zoneName: function () {return this._isUTC ? "Coordinated Universal Time" : ""}, parseZone: function () {return"string" == typeof this._i && this.zone(this._i), this}, hasAlignedHourOffset: function (a) {return a = a ? bb(a).zone() : 0, 0 === (this.zone() - a) % 60}, daysInMonth: function () {return r(this.year(), this.month())}, dayOfYear: function (a) {
        var b = eb((bb(this).startOf("day") - bb(this).startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add("d", a - b)
    }, weekYear: function (a) {
        var b = W(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return null == a ? b : this.add("y", a - b)
    }, isoWeekYear: function (a) {
        var b = W(this, 1, 4).year;
        return null == a ? b : this.add("y", a - b)
    }, week: function (a) {
        var b = this.lang().week(this);
        return null == a ? b : this.add("d", 7 * (a - b))
    }, isoWeek: function (a) {
        var b = W(this, 1, 4).week;
        return null == a ? b : this.add("d", 7 * (a - b))
    }, weekday: function (a) {
        var b = (this.day() + 7 - this.lang()._week.dow) % 7;
        return null == a ? b : this.add("d", a - b)
    }, isoWeekday: function (a) {return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)}, get: function (a) {return a = n(a), this[a]()}, set: function (a, b) {return a = n(a), "function" == typeof this[a] && this[a](b), this}, lang: function (b) {return b === a ? this._lang : (this._lang = A(b), this)}}), cb = 0; cb < Ib.length; cb++)Z(Ib[cb].toLowerCase().replace(/s$/, ""), Ib[cb]);
    Z("year", "FullYear"), bb.fn.days = bb.fn.day, bb.fn.months = bb.fn.month, bb.fn.weeks = bb.fn.week, bb.fn.isoWeeks = bb.fn.isoWeek, bb.fn.toJSON = bb.fn.toISOString, g(bb.duration.fn = f.prototype, {_bubble: function () {
        var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, i = this._data;
        i.milliseconds = e % 1e3, a = h(e / 1e3), i.seconds = a % 60, b = h(a / 60), i.minutes = b % 60, c = h(b / 60), i.hours = c % 24, f += h(c / 24), i.days = f % 30, g += h(f / 30), i.months = g % 12, d = h(g / 12), i.years = d
    }, weeks: function () {return h(this.days() / 7)}, valueOf: function () {return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * q(this._months / 12)}, humanize: function (a) {
        var b = +this, c = V(b, !a, this.lang());
        return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
    }, add: function (a, b) {
        var c = bb.duration(a, b);
        return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
    }, subtract: function (a, b) {
        var c = bb.duration(a, b);
        return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
    }, get: function (a) {return a = n(a), this[a.toLowerCase() + "s"]()}, as: function (a) {return a = n(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()}, lang: bb.fn.lang, toIsoString: function () {
        var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
    }});
    for (cb in Jb)Jb.hasOwnProperty(cb) && (_(cb, Jb[cb]), $(cb.toLowerCase()));
    _("Weeks", 6048e5), bb.duration.fn.asMonths = function () {return(+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()}, bb.lang("en", {ordinal: function (a) {
        var b = a % 10, c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
        return a + c
    }}), function (a) {a(bb)}(function (a) {return a.lang("ar-ma", {months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L"}, relativeTime: {future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª"}, week: {dow: 6, doy: 12}})}), function (a) {a(bb)}(function (a) {return a.lang("ar", {months: "ÙŠÙ†Ø§ÙŠØ±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_ÙØ¨Ø±Ø§ÙŠØ±/ Ø´Ø¨Ø§Ø·_Ù…Ø§Ø±Ø³/ Ø¢Ø°Ø§Ø±_Ø£Ø¨Ø±ÙŠÙ„/ Ù†ÙŠØ³Ø§Ù†_Ù…Ø§ÙŠÙˆ/ Ø£ÙŠØ§Ø±_ÙŠÙˆÙ†ÙŠÙˆ/ Ø­Ø²ÙŠØ±Ø§Ù†_ÙŠÙˆÙ„ÙŠÙˆ/ ØªÙ…ÙˆØ²_Ø£ØºØ³Ø·Ø³/ Ø¢Ø¨_Ø³Ø¨ØªÙ…Ø¨Ø±/ Ø£ÙŠÙ„ÙˆÙ„_Ø£ÙƒØªÙˆØ¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„_Ù†ÙˆÙÙ…Ø¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_Ø¯ÙŠØ³Ù…Ø¨Ø±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_ÙØ¨Ø±Ø§ÙŠØ±/ Ø´Ø¨Ø§Ø·_Ù…Ø§Ø±Ø³/ Ø¢Ø°Ø§Ø±_Ø£Ø¨Ø±ÙŠÙ„/ Ù†ÙŠØ³Ø§Ù†_Ù…Ø§ÙŠÙˆ/ Ø£ÙŠØ§Ø±_ÙŠÙˆÙ†ÙŠÙˆ/ Ø­Ø²ÙŠØ±Ø§Ù†_ÙŠÙˆÙ„ÙŠÙˆ/ ØªÙ…ÙˆØ²_Ø£ØºØ³Ø·Ø³/ Ø¢Ø¨_Ø³Ø¨ØªÙ…Ø¨Ø±/ Ø£ÙŠÙ„ÙˆÙ„_Ø£ÙƒØªÙˆØ¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„_Ù†ÙˆÙÙ…Ø¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_Ø¯ÙŠØ³Ù…Ø¨Ø±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L"}, relativeTime: {future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª"}, week: {dow: 6, doy: 12}})}), function (a) {a(bb)}(function (a) {
        return a.lang("bg", {months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"), monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"), weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"), weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"), weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), longDateFormat: {LT: "H:mm", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Ð”Ð½ÐµÑ Ð²] LT", nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT", nextWeek: "dddd [Ð²] LT", lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "ÑÐ»ÐµÐ´ %s", past: "Ð¿Ñ€ÐµÐ´Ð¸ %s", s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸", m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸", h: "Ñ‡Ð°Ñ", hh: "%d Ñ‡Ð°ÑÐ°", d: "Ð´ÐµÐ½", dd: "%d Ð´Ð½Ð¸", M: "Ð¼ÐµÑÐµÑ†", MM: "%d Ð¼ÐµÑÐµÑ†Ð°", y: "Ð³Ð¾Ð´Ð¸Ð½Ð°", yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"}, ordinal: function (a) {
            var b = a % 10, c = a % 100;
            return 0 === a ? a + "-ÐµÐ²" : 0 === c ? a + "-ÐµÐ½" : c > 10 && 20 > c ? a + "-Ñ‚Ð¸" : 1 === b ? a + "-Ð²Ð¸" : 2 === b ? a + "-Ñ€Ð¸" : 7 === b || 8 === b ? a + "-Ð¼Ð¸" : a + "-Ñ‚Ð¸"
        }, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (b) {
        function c(a, b, c) {
            var d = {mm: "munutenn", MM: "miz", dd: "devezh"};
            return a + " " + f(d[c], a)
        }

        function d(a) {
            switch (e(a)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return a + " bloaz";
                default:
                    return a + " vloaz"
            }
        }

        function e(a) {return a > 9 ? e(a % 10) : a}

        function f(a, b) {return 2 === b ? g(a) : a}

        function g(b) {
            var c = {m: "v", b: "v", d: "z"};
            return c[b.charAt(0)] === a ? b : c[b.charAt(0)] + b.substring(1)
        }

        return b.lang("br", {months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), longDateFormat: {LT: "h[e]mm A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY LT", LLLL: "dddd, D [a viz] MMMM YYYY LT"}, calendar: {sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L"}, relativeTime: {future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoÃ¹", m: "ur vunutenn", mm: c, h: "un eur", hh: "%d eur", d: "un devezh", dd: c, M: "ur miz", MM: c, y: "ur bloaz", yy: d}, ordinal: function (a) {
            var b = 1 === a ? "aÃ±" : "vet";
            return a + b
        }, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        function b(a, b, c) {
            var d = a + " ";
            switch (c) {
                case"m":
                    return b ? "jedna minuta" : "jedne minute";
                case"mm":
                    return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
                case"h":
                    return b ? "jedan sat" : "jednog sata";
                case"hh":
                    return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
                case"dd":
                    return d += 1 === a ? "dan" : "dana";
                case"MM":
                    return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
                case"yy":
                    return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
            }
        }

        return a.lang("bs", {months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"), longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[u] [nedjelju] [u] LT";
                case 3:
                    return"[u] [srijedu] [u] LT";
                case 6:
                    return"[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[u] dddd [u] LT"
            }
        }, lastDay: "[juÄer u] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return"[proÅ¡lu] dddd [u] LT";
                case 6:
                    return"[proÅ¡le] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[proÅ¡li] dddd [u] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {return a.lang("ca", {months: "Gener_Febrer_MarÃ§_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Mar._Abr._Mai._Jun._Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: function () {return"[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"}, nextDay: function () {return"[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"}, nextWeek: function () {return"dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"}, lastDay: function () {return"[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"}, lastWeek: function () {return"[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"}, sameElse: "L"}, relativeTime: {future: "en %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        function b(a) {return a > 1 && 5 > a && 1 !== ~~(a / 10)}

        function c(a, c, d, e) {
            var f = a + " ";
            switch (d) {
                case"s":
                    return c || e ? "pÃ¡r vteÅ™in" : "pÃ¡r vteÅ™inami";
                case"m":
                    return c ? "minuta" : e ? "minutu" : "minutou";
                case"mm":
                    return c || e ? f + (b(a) ? "minuty" : "minut") : f + "minutami";
                    break;
                case"h":
                    return c ? "hodina" : e ? "hodinu" : "hodinou";
                case"hh":
                    return c || e ? f + (b(a) ? "hodiny" : "hodin") : f + "hodinami";
                    break;
                case"d":
                    return c || e ? "den" : "dnem";
                case"dd":
                    return c || e ? f + (b(a) ? "dny" : "dnÃ­") : f + "dny";
                    break;
                case"M":
                    return c || e ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                case"MM":
                    return c || e ? f + (b(a) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : f + "mÄ›sÃ­ci";
                    break;
                case"y":
                    return c || e ? "rok" : "rokem";
                case"yy":
                    return c || e ? f + (b(a) ? "roky" : "let") : f + "lety"
            }
        }

        var d = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"), e = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_");
        return a.lang("cs", {months: d, monthsShort: e, monthsParse: function (a, b) {
            var c, d = [];
            for (c = 0; 12 > c; c++)d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d
        }(d, e), weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"), weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"), weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"), longDateFormat: {LT: "H:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT"}, calendar: {sameDay: "[dnes v] LT", nextDay: "[zÃ­tra v] LT", nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[v nedÄ›li v] LT";
                case 1:
                case 2:
                    return"[v] dddd [v] LT";
                case 3:
                    return"[ve stÅ™edu v] LT";
                case 4:
                    return"[ve Ätvrtek v] LT";
                case 5:
                    return"[v pÃ¡tek v] LT";
                case 6:
                    return"[v sobotu v] LT"
            }
        }, lastDay: "[vÄera v] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[minulou nedÄ›li v] LT";
                case 1:
                case 2:
                    return"[minulÃ©] dddd [v] LT";
                case 3:
                    return"[minulou stÅ™edu v] LT";
                case 4:
                case 5:
                    return"[minulÃ½] dddd [v] LT";
                case 6:
                    return"[minulou sobotu v] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "za %s", past: "pÅ™ed %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("cv", {months: "ÐºÄƒÑ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€ÄƒÑ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€Ð»Ð°_Ð°Ð²ÄƒÐ½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"), monthsShort: "ÐºÄƒÑ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€_Ð°Ð²_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"), weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÄ•Ã§Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÄƒÐ¼Ð°Ñ‚ÐºÑƒÐ½".split("_"), weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÄ•Ã§_ÑÑ€Ð½_ÑˆÄƒÐ¼".split("_"), weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÃ§_ÑÑ€_ÑˆÐ¼".split("_"), longDateFormat: {LT: "HH:mm", L: "DD-MM-YYYY", LL: "YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•]", LLL: "YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT", LLLL: "dddd, YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT"}, calendar: {sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", lastDay: "[Ä”Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", nextWeek: "[Ã‡Ð¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ä•] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", sameElse: "L"}, relativeTime: {future: function (a) {
            var b = /ÑÐµÑ…ÐµÑ‚$/i.exec(a) ? "Ñ€ÐµÐ½" : /Ã§ÑƒÐ»$/i.exec(a) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½";
            return a + b
        }, past: "%s ÐºÐ°ÑÐ»Ð»Ð°", s: "Ð¿Ä•Ñ€-Ð¸Ðº Ã§ÐµÐºÐºÑƒÐ½Ñ‚", m: "Ð¿Ä•Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚", h: "Ð¿Ä•Ñ€ ÑÐµÑ…ÐµÑ‚", hh: "%d ÑÐµÑ…ÐµÑ‚", d: "Ð¿Ä•Ñ€ ÐºÑƒÐ½", dd: "%d ÐºÑƒÐ½", M: "Ð¿Ä•Ñ€ ÑƒÐ¹ÄƒÑ…", MM: "%d ÑƒÐ¹ÄƒÑ…", y: "Ð¿Ä•Ñ€ Ã§ÑƒÐ»", yy: "%d Ã§ÑƒÐ»"}, ordinal: "%d-Ð¼Ä•Ñˆ", week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("cy", {months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L"}, relativeTime: {future: "mewn %s", past: "%s yn &#244;l", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd"}, ordinal: function (a) {
            var b = a, c = "", d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
            return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
        }, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("da", {months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"), weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"), weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT"}, calendar: {sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I gÃ¥r kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "%s siden", s: "fÃ¥ sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en mÃ¥ned", MM: "%d mÃ¥neder", y: "et Ã¥r", yy: "%d Ã¥r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        function b(a, b, c) {
            var d = {m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"]};
            return b ? d[c][0] : d[c][1]
        }

        return a.lang("de", {months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: {LT: "H:mm [Uhr]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[Heute um] LT", sameElse: "L", nextDay: "[Morgen um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gestern um] LT", lastWeek: "[letzten] dddd [um] LT"}, relativeTime: {future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: b, mm: "%d Minuten", h: b, hh: "%d Stunden", d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("el", {monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"), monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"), months: function (a, b) {return/D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]}, monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"), weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"), weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"), weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"), meridiem: function (a, b, c) {return a > 11 ? c ? "Î¼Î¼" : "ÎœÎœ" : c ? "Ï€Î¼" : "Î Îœ"}, longDateFormat: {LT: "h:mm A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendarEl: {sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT", nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Î§Î¸ÎµÏ‚ {}] LT", lastWeek: "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT", sameElse: "L"}, calendar: function (a, b) {
            var c = this._calendarEl[a], d = b && b.hours();
            return c.replace("{}", 1 === d % 12 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
        }, relativeTime: {future: "ÏƒÎµ %s", past: "%s Ï€ÏÎ¹Î½", s: "Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±", m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ", mm: "%d Î»ÎµÏ€Ï„Î¬", h: "Î¼Î¯Î± ÏŽÏÎ±", hh: "%d ÏŽÏÎµÏ‚", d: "Î¼Î¯Î± Î¼Î­ÏÎ±", dd: "%d Î¼Î­ÏÎµÏ‚", M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚", MM: "%d Î¼Î®Î½ÎµÏ‚", y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚", yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"}, ordinal: function (a) {return a + "Î·"}, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("en-au", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "h:mm A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function (a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("en-ca", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "h:mm A", L: "YYYY-MM-DD", LL: "D MMMM, YYYY", LLL: "D MMMM, YYYY LT", LLLL: "dddd, D MMMM, YYYY LT"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function (a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("en-gb", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, ordinal: function (a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("eo", {months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"), weekdays: "DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY LT", LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"}, meridiem: function (a, b, c) {return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."}, calendar: {sameDay: "[HodiaÅ­ je] LT", nextDay: "[MorgaÅ­ je] LT", nextWeek: "dddd [je] LT", lastDay: "[HieraÅ­ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L"}, relativeTime: {future: "je %s", past: "antaÅ­ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj"}, ordinal: "%da", week: {dow: 1, doy: 7}})}), function (a) {a(bb)}(function (a) {return a.lang("es", {months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_SÃ¡".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT"}, calendar: {sameDay: function () {return"[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"}, nextDay: function () {return"[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"}, nextWeek: function () {return"dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"}, lastDay: function () {return"[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"}, lastWeek: function () {return"[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"}, sameElse: "L"}, relativeTime: {future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un aÃ±o", yy: "%d aÃ±os"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        function b(a, b, c, d) {return d || b ? "paari sekundi" : "paar sekundit"}

        return a.lang("et", {months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: {LT: "H:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[TÃ¤na,] LT", nextDay: "[Homme,] LT", nextWeek: "[JÃ¤rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L"}, relativeTime: {future: "%s pÃ¤rast", past: "%s tagasi", s: b, m: "minut", mm: "%d minutit", h: "tund", hh: "%d tundi", d: "pÃ¤ev", dd: "%d pÃ¤eva", M: "kuu", MM: "%d kuud", y: "aasta", yy: "%d aastat"}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("eu", {months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] LT", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] LT", llll: "ddd, YYYY[ko] MMM D[a] LT"}, calendar: {sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L"}, relativeTime: {future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte"}, ordinal: "%d.", week: {dow: 1, doy: 7}})}), function (a) {a(bb)}(function (a) {
        var b = {1: "Û±", 2: "Û²", 3: "Û³", 4: "Û´", 5: "Ûµ", 6: "Û¶", 7: "Û·", 8: "Û¸", 9: "Û¹", 0: "Û°"}, c = {"Û±": "1", "Û²": "2", "Û³": "3", "Û´": "4", "Ûµ": "5", "Û¶": "6", "Û·": "7", "Û¸": "8", "Û¹": "9", "Û°": "0"};
        return a.lang("fa", {months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"), monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"), weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"), weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"), weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, meridiem: function (a) {return 12 > a ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"}, calendar: {sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT", nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT", nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT", lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT", lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT", sameElse: "L"}, relativeTime: {future: "Ø¯Ø± %s", past: "%s Ù¾ÛŒØ´", s: "Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡", m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡", mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡", h: "ÛŒÚ© Ø³Ø§Ø¹Øª", hh: "%d Ø³Ø§Ø¹Øª", d: "ÛŒÚ© Ø±ÙˆØ²", dd: "%d Ø±ÙˆØ²", M: "ÛŒÚ© Ù…Ø§Ù‡", MM: "%d Ù…Ø§Ù‡", y: "ÛŒÚ© Ø³Ø§Ù„", yy: "%d Ø³Ø§Ù„"}, preparse: function (a) {return a.replace(/[Û°-Û¹]/g,function (a) {return c[a]}).replace(/ØŒ/g, ",")}, postformat: function (a) {return a.replace(/\d/g,function (a) {return b[a]}).replace(/,/g, "ØŒ")}, ordinal: "%dÙ…", week: {dow: 6, doy: 12}})
    }), function (a) {a(bb)}(function (a) {
        function b(a, b, d, e) {
            var f = "";
            switch (d) {
                case"s":
                    return e ? "muutaman sekunnin" : "muutama sekunti";
                case"m":
                    return e ? "minuutin" : "minuutti";
                case"mm":
                    f = e ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return e ? "tunnin" : "tunti";
                case"hh":
                    f = e ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return e ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case"dd":
                    f = e ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case"M":
                    return e ? "kuukauden" : "kuukausi";
                case"MM":
                    f = e ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return e ? "vuoden" : "vuosi";
                case"yy":
                    f = e ? "vuoden" : "vuotta"
            }
            return f = c(a, e) + " " + f
        }

        function c(a, b) {return 10 > a ? b ? e[a] : d[a] : a}

        var d = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "), e = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", d[7], d[8], d[9]];
        return a.lang("fi", {months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: {LT: "HH.mm", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] LT", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] LT", llll: "ddd, Do MMM YYYY, [klo] LT"}, calendar: {sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L"}, relativeTime: {future: "%s pÃ¤Ã¤stÃ¤", past: "%s sitten", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("fo", {months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"), weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT"}, calendar: {sameDay: "[Ã dag kl.] LT", nextDay: "[Ã morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Ã gjÃ¡r kl.] LT", lastWeek: "[sÃ­Ã°stu] dddd [kl] LT", sameElse: "L"}, relativeTime: {future: "um %s", past: "%s sÃ­Ã°ani", s: "fÃ¡ sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tÃ­mi", hh: "%d tÃ­mar", d: "ein dagur", dd: "%d dagar", M: "ein mÃ¡naÃ°i", MM: "%d mÃ¡naÃ°ir", y: "eitt Ã¡r", yy: "%d Ã¡r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {return a.lang("fr-ca", {months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"), monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Aujourd'hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L"}, relativeTime: {future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans"}, ordinal: function (a) {return a + (1 === a ? "er" : "")}})}), function (a) {a(bb)}(function (a) {return a.lang("fr", {months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"), monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Aujourd'hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L"}, relativeTime: {future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans"}, ordinal: function (a) {return a + (1 === a ? "er" : "")}, week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {return a.lang("gl", {months: "Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"), monthsShort: "Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"), weekdays: "Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"), weekdaysShort: "Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"), weekdaysMin: "Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: function () {return"[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"}, nextDay: function () {return"[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"}, nextWeek: function () {return"dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"}, lastDay: function () {return"[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"}, lastWeek: function () {return"[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"}, sameElse: "L"}, relativeTime: {future: function (a) {return"uns segundos" === a ? "nuns segundos" : "en " + a}, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos"}, ordinal: "%dÂº", week: {dow: 1, doy: 7}})}), function (a) {a(bb)}(function (a) {return a.lang("he", {months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"), monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"), weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"), weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"), weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D [×‘]MMMM YYYY", LLL: "D [×‘]MMMM YYYY LT", LLLL: "dddd, D [×‘]MMMM YYYY LT", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT"}, calendar: {sameDay: "[×”×™×•× ×‘Ö¾]LT", nextDay: "[×ž×—×¨ ×‘Ö¾]LT", nextWeek: "dddd [×‘×©×¢×”] LT", lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT", lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT", sameElse: "L"}, relativeTime: {future: "×‘×¢×•×“ %s", past: "×œ×¤× ×™ %s", s: "×ž×¡×¤×¨ ×©× ×™×•×ª", m: "×“×§×”", mm: "%d ×“×§×•×ª", h: "×©×¢×”", hh: function (a) {return 2 === a ? "×©×¢×ª×™×™×" : a + " ×©×¢×•×ª"}, d: "×™×•×", dd: function (a) {return 2 === a ? "×™×•×ž×™×™×" : a + " ×™×ž×™×"}, M: "×—×•×“×©", MM: function (a) {return 2 === a ? "×—×•×“×©×™×™×" : a + " ×—×•×“×©×™×"}, y: "×©× ×”", yy: function (a) {return 2 === a ? "×©× ×ª×™×™×" : a + " ×©× ×™×"}}})}), function (a) {a(bb)}(function (a) {
        var b = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"}, c = {"à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0"};
        return a.lang("hi", {months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"), weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"), weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"), weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"), longDateFormat: {LT: "A h:mm à¤¬à¤œà¥‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤•à¤²] LT", nextWeek: "dddd, LT", lastDay: "[à¤•à¤²] LT", lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à¤®à¥‡à¤‚", past: "%s à¤ªà¤¹à¤²à¥‡", s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£", m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¤Ÿ", h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾", hh: "%d à¤˜à¤‚à¤Ÿà¥‡", d: "à¤à¤• à¤¦à¤¿à¤¨", dd: "%d à¤¦à¤¿à¤¨", M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡", MM: "%d à¤®à¤¹à¥€à¤¨à¥‡", y: "à¤à¤• à¤µà¤°à¥à¤·", yy: "%d à¤µà¤°à¥à¤·"}, preparse: function (a) {return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (a) {return c[a]})}, postformat: function (a) {return a.replace(/\d/g, function (a) {return b[a]})}, meridiem: function (a) {return 4 > a ? "à¤°à¤¾à¤¤" : 10 > a ? "à¤¸à¥à¤¬à¤¹" : 17 > a ? "à¤¦à¥‹à¤ªà¤¹à¤°" : 20 > a ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"}, week: {dow: 0, doy: 6}})
    }), function (a) {a(bb)}(function (a) {
        function b(a, b, c) {
            var d = a + " ";
            switch (c) {
                case"m":
                    return b ? "jedna minuta" : "jedne minute";
                case"mm":
                    return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
                case"h":
                    return b ? "jedan sat" : "jednog sata";
                case"hh":
                    return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
                case"dd":
                    return d += 1 === a ? "dan" : "dana";
                case"MM":
                    return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
                case"yy":
                    return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
            }
        }

        return a.lang("hr", {months: "sjeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), monthsShort: "sje._vel._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"), longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[u] [nedjelju] [u] LT";
                case 3:
                    return"[u] [srijedu] [u] LT";
                case 6:
                    return"[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[u] dddd [u] LT"
            }
        }, lastDay: "[juÄer u] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                    return"[proÅ¡lu] dddd [u] LT";
                case 6:
                    return"[proÅ¡le] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[proÅ¡li] dddd [u] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {
        function b(a, b, c, d) {
            var e = a;
            switch (c) {
                case"s":
                    return d || b ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case"m":
                    return"egy" + (d || b ? " perc" : " perce");
                case"mm":
                    return e + (d || b ? " perc" : " perce");
                case"h":
                    return"egy" + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
                case"hh":
                    return e + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
                case"d":
                    return"egy" + (d || b ? " nap" : " napja");
                case"dd":
                    return e + (d || b ? " nap" : " napja");
                case"M":
                    return"egy" + (d || b ? " hÃ³nap" : " hÃ³napja");
                case"MM":
                    return e + (d || b ? " hÃ³nap" : " hÃ³napja");
                case"y":
                    return"egy" + (d || b ? " Ã©v" : " Ã©ve");
                case"yy":
                    return e + (d || b ? " Ã©v" : " Ã©ve")
            }
            return""
        }

        function c(a) {return(a ? "" : "[mÃºlt] ") + "[" + d[this.day()] + "] LT[-kor]"}

        var d = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");
        return a.lang("hu", {months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"), monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"), weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: {LT: "H:mm", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D., LT", LLLL: "YYYY. MMMM D., dddd LT"}, calendar: {sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {return c.call(this, !0)}, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {return c.call(this, !1)}, sameElse: "L"}, relativeTime: {future: "%s mÃºlva", past: "%s", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {return a.lang("id", {months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: {LT: "HH.mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT"}, meridiem: function (a) {return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"}, calendar: {sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L"}, relativeTime: {future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"}, week: {dow: 1, doy: 7}})}), function (a) {a(bb)}(function (a) {
        function b(a) {return 11 === a % 100 ? !0 : 1 === a % 10 ? !1 : !0}

        function c(a, c, d, e) {
            var f = a + " ";
            switch (d) {
                case"s":
                    return c || e ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case"m":
                    return c ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                case"mm":
                    return b(a) ? f + (c || e ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : c ? f + "mÃ­nÃºta" : f + "mÃ­nÃºtu";
                case"hh":
                    return b(a) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
                case"d":
                    return c ? "dagur" : e ? "dag" : "degi";
                case"dd":
                    return b(a) ? c ? f + "dagar" : f + (e ? "daga" : "dÃ¶gum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
                case"M":
                    return c ? "mÃ¡nuÃ°ur" : e ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case"MM":
                    return b(a) ? c ? f + "mÃ¡nuÃ°ir" : f + (e ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : c ? f + "mÃ¡nuÃ°ur" : f + (e ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case"y":
                    return c || e ? "Ã¡r" : "Ã¡ri";
                case"yy":
                    return b(a) ? f + (c || e ? "Ã¡r" : "Ã¡rum") : f + (c || e ? "Ã¡r" : "Ã¡ri")
            }
        }

        return a.lang("is", {months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"), weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"), weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"), weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd, D. MMMM YYYY [kl.] LT"}, calendar: {sameDay: "[Ã­ dag kl.] LT", nextDay: "[Ã¡ morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Ã­ gÃ¦r kl.] LT", lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT", sameElse: "L"}, relativeTime: {future: "eftir %s", past: "fyrir %s sÃ­Ã°an", s: c, m: c, mm: c, h: "klukkustund", hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("it", {months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"), monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"), weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"), weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"), weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: "[lo scorso] dddd [alle] LT", sameElse: "L"}, relativeTime: {future: function (a) {return(/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a}, past: "%s fa", s: "secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {return a.lang("ja", {months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"), weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"), weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"), longDateFormat: {LT: "Ahæ™‚måˆ†", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥LT", LLLL: "YYYYå¹´MæœˆDæ—¥LT dddd"}, meridiem: function (a) {return 12 > a ? "åˆå‰" : "åˆå¾Œ"}, calendar: {sameDay: "[ä»Šæ—¥] LT", nextDay: "[æ˜Žæ—¥] LT", nextWeek: "[æ¥é€±]dddd LT", lastDay: "[æ˜¨æ—¥] LT", lastWeek: "[å‰é€±]dddd LT", sameElse: "L"}, relativeTime: {future: "%så¾Œ", past: "%så‰", s: "æ•°ç§’", m: "1åˆ†", mm: "%dåˆ†", h: "1æ™‚é–“", hh: "%dæ™‚é–“", d: "1æ—¥", dd: "%dæ—¥", M: "1ãƒ¶æœˆ", MM: "%dãƒ¶æœˆ", y: "1å¹´", yy: "%då¹´"}})}), function (a) {a(bb)}(function (a) {
        function b(a, b) {
            var c = {nominative: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"), accusative: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")}, d = /D[oD] *MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function c(a, b) {
            var c = {nominative: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"), accusative: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_")}, d = /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/.test(b) ? "accusative" : "nominative";
            return c[d][a.day()]
        }

        return a.lang("ka", {months: b, monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"), weekdays: c, weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"), weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"), longDateFormat: {LT: "h:mm A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]", nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]", lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]", nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]", lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”", sameElse: "L"}, relativeTime: {future: function (a) {
            return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(a) ? a.replace(/áƒ˜$/, "áƒ¨áƒ˜") : a + "áƒ¨áƒ˜"
        }, past: function (a) {return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(a) ? a.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(a) ? a.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0}, s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜", m: "áƒ¬áƒ£áƒ—áƒ˜", mm: "%d áƒ¬áƒ£áƒ—áƒ˜", h: "áƒ¡áƒáƒáƒ—áƒ˜", hh: "%d áƒ¡áƒáƒáƒ—áƒ˜", d: "áƒ“áƒ¦áƒ”", dd: "%d áƒ“áƒ¦áƒ”", M: "áƒ—áƒ•áƒ”", MM: "%d áƒ—áƒ•áƒ”", y: "áƒ¬áƒ”áƒšáƒ˜", yy: "%d áƒ¬áƒ”áƒšáƒ˜"}, ordinal: function (a) {return 0 === a ? a : 1 === a ? a + "-áƒšáƒ˜" : 20 > a || 100 >= a && 0 === a % 20 || 0 === a % 100 ? "áƒ›áƒ”-" + a : a + "-áƒ”"}, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {return a.lang("ko", {months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"), monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"), weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"), weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"), weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"), longDateFormat: {LT: "A hì‹œ mmë¶„", L: "YYYY.MM.DD", LL: "YYYYë…„ MMMM Dì¼", LLL: "YYYYë…„ MMMM Dì¼ LT", LLLL: "YYYYë…„ MMMM Dì¼ dddd LT"}, meridiem: function (a) {return 12 > a ? "ì˜¤ì „" : "ì˜¤í›„"}, calendar: {sameDay: "ì˜¤ëŠ˜ LT", nextDay: "ë‚´ì¼ LT", nextWeek: "dddd LT", lastDay: "ì–´ì œ LT", lastWeek: "ì§€ë‚œì£¼ dddd LT", sameElse: "L"}, relativeTime: {future: "%s í›„", past: "%s ì „", s: "ëª‡ì´ˆ", ss: "%dì´ˆ", m: "ì¼ë¶„", mm: "%dë¶„", h: "í•œì‹œê°„", hh: "%dì‹œê°„", d: "í•˜ë£¨", dd: "%dì¼", M: "í•œë‹¬", MM: "%dë‹¬", y: "ì¼ë…„", yy: "%dë…„"}, ordinal: "%dì¼"})}), function (a) {a(bb)}(function (a) {
        function b(a, b, c, d) {return b ? "kelios sekundÄ—s" : d ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"}

        function c(a, b, c, d) {return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]}

        function d(a) {return 0 === a % 10 || a > 10 && 20 > a}

        function e(a) {return h[a].split("_")}

        function f(a, b, f, g) {
            var h = a + " ";
            return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2])
        }

        function g(a, b) {
            var c = -1 === b.indexOf("dddd LT"), d = i[a.weekday()];
            return c ? d : d.substring(0, d.length - 2) + "Ä¯"
        }

        var h = {m: "minutÄ—_minutÄ—s_minutÄ™", mm: "minutÄ—s_minuÄiÅ³_minutes", h: "valanda_valandos_valandÄ…", hh: "valandos_valandÅ³_valandas", d: "diena_dienos_dienÄ…", dd: "dienos_dienÅ³_dienas", M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯", MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius", y: "metai_metÅ³_metus", yy: "metai_metÅ³_metus"}, i = "pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis_sekmadienis".split("_");
        return a.lang("lt", {months: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾Ä—lio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"), monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: g, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], LT [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], LT [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"}, calendar: {sameDay: "[Å iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[PraÄ—jusÄ¯] dddd LT", sameElse: "L"}, relativeTime: {future: "po %s", past: "prieÅ¡ %s", s: b, m: c, mm: f, h: c, hh: f, d: c, dd: f, M: c, MM: f, y: c, yy: f}, ordinal: function (a) {return a + "-oji"}, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        function b(a, b, c) {
            var d = a.split("_");
            return c ? 1 === b % 10 && 11 !== b ? d[2] : d[3] : 1 === b % 10 && 11 !== b ? d[0] : d[1]
        }

        function c(a, c, e) {return a + " " + b(d[e], a, c)}

        var d = {mm: "minÅ«ti_minÅ«tes_minÅ«te_minÅ«tes", hh: "stundu_stundas_stunda_stundas", dd: "dienu_dienas_diena_dienas", MM: "mÄ“nesi_mÄ“neÅ¡us_mÄ“nesis_mÄ“neÅ¡i", yy: "gadu_gadus_gads_gadi"};
        return a.lang("lv", {months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"), weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, LT", LLLL: "YYYY. [gada] D. MMMM, dddd, LT"}, calendar: {sameDay: "[Å odien pulksten] LT", nextDay: "[RÄ«t pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT", sameElse: "L"}, relativeTime: {future: "%s vÄ“lÄk", past: "%s agrÄk", s: "daÅ¾as sekundes", m: "minÅ«ti", mm: c, h: "stundu", hh: c, d: "dienu", dd: c, M: "mÄ“nesi", MM: c, y: "gadu", yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("ml", {months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"), monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"), weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"), weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"), weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"), longDateFormat: {LT: "A h:mm -à´¨àµ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à´‡à´¨àµà´¨àµ] LT", nextDay: "[à´¨à´¾à´³àµ†] LT", nextWeek: "dddd, LT", lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT", lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à´•à´´à´¿à´žàµà´žàµ", past: "%s à´®àµàµ»à´ªàµ", s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾", m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ", mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ", h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼", hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼", d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚", dd: "%d à´¦à´¿à´µà´¸à´‚", M: "à´’à´°àµ à´®à´¾à´¸à´‚", MM: "%d à´®à´¾à´¸à´‚", y: "à´’à´°àµ à´µàµ¼à´·à´‚", yy: "%d à´µàµ¼à´·à´‚"}, meridiem: function (a) {return 4 > a ? "à´°à´¾à´¤àµà´°à´¿" : 12 > a ? "à´°à´¾à´µà´¿à´²àµ†" : 17 > a ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : 20 > a ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"}})}), function (a) {a(bb)}(function (a) {
        var b = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"}, c = {"à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0"};
        return a.lang("mr", {months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"), weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"), weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"), weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"), longDateFormat: {LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, calendar: {sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT", nextWeek: "dddd, LT", lastDay: "[à¤•à¤¾à¤²] LT", lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT", sameElse: "L"}, relativeTime: {future: "%s à¤¨à¤‚à¤¤à¤°", past: "%s à¤ªà¥‚à¤°à¥à¤µà¥€", s: "à¤¸à¥‡à¤•à¤‚à¤¦", m: "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡", h: "à¤à¤• à¤¤à¤¾à¤¸", hh: "%d à¤¤à¤¾à¤¸", d: "à¤à¤• à¤¦à¤¿à¤µà¤¸", dd: "%d à¤¦à¤¿à¤µà¤¸", M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾", MM: "%d à¤®à¤¹à¤¿à¤¨à¥‡", y: "à¤à¤• à¤µà¤°à¥à¤·", yy: "%d à¤µà¤°à¥à¤·à¥‡"}, preparse: function (a) {return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (a) {return c[a]})}, postformat: function (a) {return a.replace(/\d/g, function (a) {return b[a]})}, meridiem: function (a) {return 4 > a ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : 10 > a ? "à¤¸à¤•à¤¾à¤³à¥€" : 17 > a ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : 20 > a ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"}, week: {dow: 0, doy: 6}})
    }), function (a) {a(bb)}(function (a) {return a.lang("ms-my", {months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: {LT: "HH.mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT"}, meridiem: function (a) {return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"}, calendar: {sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L"}, relativeTime: {future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun"}, week: {dow: 1, doy: 7}})}), function (a) {a(bb)}(function (a) {return a.lang("nb", {months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"), weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"), weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"), longDateFormat: {LT: "H.mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd D. MMMM YYYY [kl.] LT"}, calendar: {sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i gÃ¥r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "for %s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en mÃ¥ned", MM: "%d mÃ¥neder", y: "ett Ã¥r", yy: "%d Ã¥r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        var b = {1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦"}, c = {"à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0"};
        return a.lang("ne", {months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"), weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"), weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"), weekdaysMin: "à¤†à¤‡._à¤¸à¥‹._à¤®à¤™à¥_à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"), longDateFormat: {LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT"}, preparse: function (a) {return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (a) {return c[a]})}, postformat: function (a) {return a.replace(/\d/g, function (a) {return b[a]})}, meridiem: function (a) {return 3 > a ? "à¤°à¤¾à¤¤à¥€" : 10 > a ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : 15 > a ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : 18 > a ? "à¤¬à¥‡à¤²à¥à¤•à¤¾" : 20 > a ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¥€"}, calendar: {sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤­à¥‹à¤²à¥€] LT", nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT", lastDay: "[à¤¹à¤¿à¤œà¥‹] LT", lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT", sameElse: "L"}, relativeTime: {future: "%sà¤®à¤¾", past: "%s à¤…à¤—à¤¾à¤¡à¥€", s: "à¤•à¥‡à¤¹à¥€ à¤¸à¤®à¤¯", m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ", h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾", hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾", d: "à¤à¤• à¤¦à¤¿à¤¨", dd: "%d à¤¦à¤¿à¤¨", M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾", MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾", y: "à¤à¤• à¤¬à¤°à¥à¤·", yy: "%d à¤¬à¤°à¥à¤·"}, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {
        var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return a.lang("nl", {months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function (a, d) {return/-MMM-/.test(d) ? c[a.month()] : b[a.month()]}, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), longDateFormat: {LT: "HH:mm", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L"}, relativeTime: {future: "over %s", past: "%s geleden", s: "een paar seconden", m: "Ã©Ã©n minuut", mm: "%d minuten", h: "Ã©Ã©n uur", hh: "%d uur", d: "Ã©Ã©n dag", dd: "%d dagen", M: "Ã©Ã©n maand", MM: "%d maanden", y: "Ã©Ã©n jaar", yy: "%d jaar"}, ordinal: function (a) {return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")}, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("nn", {months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I gÃ¥r klokka] LT", lastWeek: "[FÃ¸regÃ¥ende] dddd [klokka] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "for %s siden", s: "noen sekund", m: "ett minutt", mm: "%d minutt", h: "en time", hh: "%d timar", d: "en dag", dd: "%d dagar", M: "en mÃ¥nad", MM: "%d mÃ¥nader", y: "ett Ã¥r", yy: "%d Ã¥r"}, ordinal: "%d.", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        function b(a) {return 5 > a % 10 && a % 10 > 1 && 1 !== ~~(a / 10)}

        function c(a, c, d) {
            var e = a + " ";
            switch (d) {
                case"m":
                    return c ? "minuta" : "minutÄ™";
                case"mm":
                    return e + (b(a) ? "minuty" : "minut");
                case"h":
                    return c ? "godzina" : "godzinÄ™";
                case"hh":
                    return e + (b(a) ? "godziny" : "godzin");
                case"MM":
                    return e + (b(a) ? "miesiÄ…ce" : "miesiÄ™cy");
                case"yy":
                    return e + (b(a) ? "lata" : "lat")
            }
        }

        var d = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"), e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");
        return a.lang("pl", {months: function (a, b) {return/D MMMM/.test(b) ? e[a.month()] : d[a.month()]}, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"), weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"), weekdaysShort: "nie_pon_wt_Å›r_czw_pt_sb".split("_"), weekdaysMin: "N_Pn_Wt_Åšr_Cz_Pt_So".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[DziÅ› o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                case 3:
                    return"[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                case 6:
                    return"[W zeszÅ‚Ä… sobotÄ™ o] LT";
                default:
                    return"[W zeszÅ‚y] dddd [o] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "za %s", past: "%s temu", s: "kilka sekund", m: c, mm: c, h: c, hh: c, d: "1 dzieÅ„", dd: "%d dni", M: "miesiÄ…c", MM: c, y: "rok", yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("pt-br", {months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"), weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT"}, calendar: {sameDay: "[Hoje Ã s] LT", nextDay: "[AmanhÃ£ Ã s] LT", nextWeek: "dddd [Ã s] LT", lastDay: "[Ontem Ã s] LT", lastWeek: function () {return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"}, sameElse: "L"}, relativeTime: {future: "em %s", past: "%s atrÃ¡s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mÃªs", MM: "%d meses", y: "um ano", yy: "%d anos"}, ordinal: "%dÂº"})}), function (a) {a(bb)}(function (a) {return a.lang("pt", {months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"), weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT"}, calendar: {sameDay: "[Hoje Ã s] LT", nextDay: "[AmanhÃ£ Ã s] LT", nextWeek: "dddd [Ã s] LT", lastDay: "[Ontem Ã s] LT", lastWeek: function () {return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"}, sameElse: "L"}, relativeTime: {future: "em %s", past: "%s atrÃ¡s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mÃªs", MM: "%d meses", y: "um ano", yy: "%d anos"}, ordinal: "%dÂº", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {return a.lang("ro", {months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Noi_Dec".split("_"), weekdays: "DuminicÄƒ_Luni_MarÅ£i_Miercuri_Joi_Vineri_SÃ¢mbÄƒtÄƒ".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"), longDateFormat: {LT: "H:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm"}, calendar: {sameDay: "[azi la] LT", nextDay: "[mÃ¢ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L"}, relativeTime: {future: "peste %s", past: "%s Ã®n urmÄƒ", s: "cÃ¢teva secunde", m: "un minut", mm: "%d minute", h: "o orÄƒ", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lunÄƒ", MM: "%d luni", y: "un an", yy: "%d ani"}, week: {dow: 1, doy: 7}})}), function (a) {a(bb)}(function (a) {
        function b(a, b) {
            var c = a.split("_");
            return 1 === b % 10 && 11 !== b % 100 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }

        function c(a, c, d) {
            var e = {mm: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚", hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹", MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²", yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"};
            return"m" === d ? c ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : a + " " + b(e[d], +a)
        }

        function d(a, b) {
            var c = {nominative: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"), accusative: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_")}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function e(a, b) {
            var c = {nominative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"), accusative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")}, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function f(a, b) {
            var c = {nominative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"), accusative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_")}, d = /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
            return c[d][a.day()]
        }

        return a.lang("ru", {months: d, monthsShort: e, weekdays: f, weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), monthsParse: [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹|Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i], longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ð³.", LLL: "D MMMM YYYY Ð³., LT", LLLL: "dddd, D MMMM YYYY Ð³., LT"}, calendar: {sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT", nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT", lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT", nextWeek: function () {return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT"}, lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
                case 1:
                case 2:
                case 4:
                    return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
                case 3:
                case 5:
                case 6:
                    return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "Ñ‡ÐµÑ€ÐµÐ· %s", past: "%s Ð½Ð°Ð·Ð°Ð´", s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´", m: c, mm: c, h: "Ñ‡Ð°Ñ", hh: c, d: "Ð´ÐµÐ½ÑŒ", dd: c, M: "Ð¼ÐµÑÑÑ†", MM: c, y: "Ð³Ð¾Ð´", yy: c}, meridiem: function (a) {return 4 > a ? "Ð½Ð¾Ñ‡Ð¸" : 12 > a ? "ÑƒÑ‚Ñ€Ð°" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"}, ordinal: function (a, b) {
            switch (b) {
                case"M":
                case"d":
                case"DDD":
                    return a + "-Ð¹";
                case"D":
                    return a + "-Ð³Ð¾";
                case"w":
                case"W":
                    return a + "-Ñ";
                default:
                    return a
            }
        }, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {
        function b(a) {return a > 1 && 5 > a}

        function c(a, c, d, e) {
            var f = a + " ";
            switch (d) {
                case"s":
                    return c || e ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case"m":
                    return c ? "minÃºta" : e ? "minÃºtu" : "minÃºtou";
                case"mm":
                    return c || e ? f + (b(a) ? "minÃºty" : "minÃºt") : f + "minÃºtami";
                    break;
                case"h":
                    return c ? "hodina" : e ? "hodinu" : "hodinou";
                case"hh":
                    return c || e ? f + (b(a) ? "hodiny" : "hodÃ­n") : f + "hodinami";
                    break;
                case"d":
                    return c || e ? "deÅˆ" : "dÅˆom";
                case"dd":
                    return c || e ? f + (b(a) ? "dni" : "dnÃ­") : f + "dÅˆami";
                    break;
                case"M":
                    return c || e ? "mesiac" : "mesiacom";
                case"MM":
                    return c || e ? f + (b(a) ? "mesiace" : "mesiacov") : f + "mesiacmi";
                    break;
                case"y":
                    return c || e ? "rok" : "rokom";
                case"yy":
                    return c || e ? f + (b(a) ? "roky" : "rokov") : f + "rokmi"
            }
        }

        var d = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"), e = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");
        return a.lang("sk", {months: d, monthsShort: e, monthsParse: function (a, b) {
            var c, d = [];
            for (c = 0; 12 > c; c++)d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d
        }(d, e), weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"), longDateFormat: {LT: "H:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT"}, calendar: {sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[v nedeÄ¾u o] LT";
                case 1:
                case 2:
                    return"[v] dddd [o] LT";
                case 3:
                    return"[v stredu o] LT";
                case 4:
                    return"[vo Å¡tvrtok o] LT";
                case 5:
                    return"[v piatok o] LT";
                case 6:
                    return"[v sobotu o] LT"
            }
        }, lastDay: "[vÄera o] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[minulÃº nedeÄ¾u o] LT";
                case 1:
                case 2:
                    return"[minulÃ½] dddd [o] LT";
                case 3:
                    return"[minulÃº stredu o] LT";
                case 4:
                case 5:
                    return"[minulÃ½] dddd [o] LT";
                case 6:
                    return"[minulÃº sobotu o] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "za %s", past: "pred %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c}, ordinal: "%d.", week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        function b(a, b, c) {
            var d = a + " ";
            switch (c) {
                case"m":
                    return b ? "ena minuta" : "eno minuto";
                case"mm":
                    return d += 1 === a ? "minuta" : 2 === a ? "minuti" : 3 === a || 4 === a ? "minute" : "minut";
                case"h":
                    return b ? "ena ura" : "eno uro";
                case"hh":
                    return d += 1 === a ? "ura" : 2 === a ? "uri" : 3 === a || 4 === a ? "ure" : "ur";
                case"dd":
                    return d += 1 === a ? "dan" : "dni";
                case"MM":
                    return d += 1 === a ? "mesec" : 2 === a ? "meseca" : 3 === a || 4 === a ? "mesece" : "mesecev";
                case"yy":
                    return d += 1 === a ? "leto" : 2 === a ? "leti" : 3 === a || 4 === a ? "leta" : "let"
            }
        }

        return a.lang("sl", {months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"), longDateFormat: {LT: "H:mm", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT"}, calendar: {sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
            switch (this.day()) {
                case 0:
                    return"[v] [nedeljo] [ob] LT";
                case 3:
                    return"[v] [sredo] [ob] LT";
                case 6:
                    return"[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[v] dddd [ob] LT"
            }
        }, lastDay: "[vÄeraj ob] LT", lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return"[prejÅ¡nja] dddd [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return"[prejÅ¡nji] dddd [ob] LT"
            }
        }, sameElse: "L"}, relativeTime: {future: "Äez %s", past: "%s nazaj", s: "nekaj sekund", m: b, mm: b, h: b, hh: b, d: "en dan", dd: b, M: "en mesec", MM: b, y: "eno leto", yy: b}, ordinal: "%d.", week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {return a.lang("sq", {months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"), weekdays: "E Diel_E HÃ«nÃ«_E Marte_E MÃ«rkure_E Enjte_E Premte_E ShtunÃ«".split("_"), weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[Sot nÃ«] LT", nextDay: "[Neser nÃ«] LT", nextWeek: "dddd [nÃ«] LT", lastDay: "[Dje nÃ«] LT", lastWeek: "dddd [e kaluar nÃ«] LT", sameElse: "L"}, relativeTime: {future: "nÃ« %s", past: "%s me parÃ«", s: "disa seconda", m: "njÃ« minut", mm: "%d minutea", h: "njÃ« orÃ«", hh: "%d orÃ«", d: "njÃ« ditÃ«", dd: "%d ditÃ«", M: "njÃ« muaj", MM: "%d muaj", y: "njÃ« vit", yy: "%d vite"}, ordinal: "%d.", week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        return a.lang("sv", {months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"), weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"), weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"), longDateFormat: {LT: "HH:mm", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[IgÃ¥r] LT", nextWeek: "dddd LT", lastWeek: "[FÃ¶rra] dddd[en] LT", sameElse: "L"}, relativeTime: {future: "om %s", past: "fÃ¶r %s sedan", s: "nÃ¥gra sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en mÃ¥nad", MM: "%d mÃ¥nader", y: "ett Ã¥r", yy: "%d Ã¥r"}, ordinal: function (a) {
            var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : 3 === b ? "e" : "e";
            return a + c
        }, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {return a.lang("th", {months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"), monthsShort: "à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"), weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"), weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"), weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"), longDateFormat: {LT: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² LT", LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² LT"}, meridiem: function (a) {return 12 > a ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"}, calendar: {sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT", lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT", sameElse: "L"}, relativeTime: {future: "à¸­à¸µà¸ %s", past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§", s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ", m: "1 à¸™à¸²à¸—à¸µ", mm: "%d à¸™à¸²à¸—à¸µ", h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡", hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡", d: "1 à¸§à¸±à¸™", dd: "%d à¸§à¸±à¸™", M: "1 à¹€à¸”à¸·à¸­à¸™", MM: "%d à¹€à¸”à¸·à¸­à¸™", y: "1 à¸›à¸µ", yy: "%d à¸›à¸µ"}})}), function (a) {a(bb)}(function (a) {return a.lang("tl-ph", {months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: {LT: "HH:mm", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM DD, YYYY LT"}, calendar: {sameDay: "[Ngayon sa] LT", nextDay: "[Bukas sa] LT", nextWeek: "dddd [sa] LT", lastDay: "[Kahapon sa] LT", lastWeek: "dddd [huling linggo] LT", sameElse: "L"}, relativeTime: {future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon"}, ordinal: function (a) {return a}, week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        var b = {1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'Ã¼ncÃ¼", 4: "'Ã¼ncÃ¼", 100: "'Ã¼ncÃ¼", 6: "'ncÄ±", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'Ä±ncÄ±", 90: "'Ä±ncÄ±"};
        return a.lang("tr", {months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"), monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT"}, calendar: {sameDay: "[bugÃ¼n saat] LT", nextDay: "[yarÄ±n saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dÃ¼n] LT", lastWeek: "[geÃ§en hafta] dddd [saat] LT", sameElse: "L"}, relativeTime: {future: "%s sonra", past: "%s Ã¶nce", s: "birkaÃ§ saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gÃ¼n", dd: "%d gÃ¼n", M: "bir ay", MM: "%d ay", y: "bir yÄ±l", yy: "%d yÄ±l"}, ordinal: function (a) {
            if (0 === a)return a + "'Ä±ncÄ±";
            var c = a % 10, d = a % 100 - c, e = a >= 100 ? 100 : null;
            return a + (b[c] || b[d] || b[e])
        }, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {return a.lang("tzm-la", {months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L"}, relativeTime: {future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuá¸", mm: "%d minuá¸", h: "saÉ›a", hh: "%d tassaÉ›in", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn"}, week: {dow: 6, doy: 12}})}), function (a) {a(bb)}(function (a) {return a.lang("tzm", {months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"), monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"), weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[â´°âµ™â´·âµ… â´´] LT", nextDay: "[â´°âµ™â´½â´° â´´] LT", nextWeek: "dddd [â´´] LT", lastDay: "[â´°âµšâ´°âµâµœ â´´] LT", lastWeek: "dddd [â´´] LT", sameElse: "L"}, relativeTime: {future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s", past: "âµ¢â´°âµ %s", s: "âµ‰âµŽâµ‰â´½", m: "âµŽâµ‰âµâµ“â´º", mm: "%d âµŽâµ‰âµâµ“â´º", h: "âµ™â´°âµ„â´°", hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ", d: "â´°âµ™âµ™", dd: "%d oâµ™âµ™â´°âµ", M: "â´°âµ¢oâµ“âµ”", MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ", y: "â´°âµ™â´³â´°âµ™", yy: "%d âµ‰âµ™â´³â´°âµ™âµ"}, week: {dow: 6, doy: 12}})}), function (a) {a(bb)}(function (a) {
        function b(a, b) {
            var c = a.split("_");
            return 1 === b % 10 && 11 !== b % 100 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }

        function c(a, c, d) {
            var e = {mm: "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½", hh: "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²", MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²", yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"};
            return"m" === d ? c ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === d ? c ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : a + " " + b(e[d], +a)
        }

        function d(a, b) {
            var c = {nominative: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_"), accusative: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_")}, d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative";
            return c[d][a.month()]
        }

        function e(a, b) {
            var c = {nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"), accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"), genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")}, d = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
            return c[d][a.day()]
        }

        function f(a) {return function () {return a + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"}}

        return a.lang("uk", {months: d, monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"), weekdays: e, weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"), longDateFormat: {LT: "HH:mm", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ñ€.", LLL: "D MMMM YYYY Ñ€., LT", LLLL: "dddd, D MMMM YYYY Ñ€., LT"}, calendar: {sameDay: f("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "), nextDay: f("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "), lastDay: f("[Ð’Ñ‡Ð¾Ñ€Ð° "), nextWeek: f("[Ð£] dddd ["), lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return f("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                    return f("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
            }
        }, sameElse: "L"}, relativeTime: {future: "Ð·Ð° %s", past: "%s Ñ‚Ð¾Ð¼Ñƒ", s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´", m: c, mm: c, h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ", hh: c, d: "Ð´ÐµÐ½ÑŒ", dd: c, M: "Ð¼Ñ–ÑÑÑ†ÑŒ", MM: c, y: "Ñ€Ñ–Ðº", yy: c}, meridiem: function (a) {return 4 > a ? "Ð½Ð¾Ñ‡Ñ–" : 12 > a ? "Ñ€Ð°Ð½ÐºÑƒ" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"}, ordinal: function (a, b) {
            switch (b) {
                case"M":
                case"d":
                case"DDD":
                case"w":
                case"W":
                    return a + "-Ð¹";
                case"D":
                    return a + "-Ð³Ð¾";
                default:
                    return a
            }
        }, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("uz", {months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"), monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"), weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"), weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"), weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "D MMMM YYYY, dddd LT"}, calendar: {sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]", nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", sameElse: "L"}, relativeTime: {future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°", past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½", s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚", m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°", mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°", h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚", hh: "%d ÑÐ¾Ð°Ñ‚", d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½", dd: "%d ÐºÑƒÐ½", M: "Ð±Ð¸Ñ€ Ð¾Ð¹", MM: "%d Ð¾Ð¹", y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»", yy: "%d Ð¹Ð¸Ð»"}, week: {dow: 1, doy: 7}})
    }), function (a) {a(bb)}(function (a) {return a.lang("vn", {months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM [nÄƒm] YYYY", LLL: "D MMMM [nÄƒm] YYYY LT", LLLL: "dddd, D MMMM [nÄƒm] YYYY LT", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT"}, calendar: {sameDay: "[HÃ´m nay lÃºc] LT", nextDay: "[NgÃ y mai lÃºc] LT", nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT", lastDay: "[HÃ´m qua lÃºc] LT", lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT", sameElse: "L"}, relativeTime: {future: "%s tá»›i", past: "%s trÆ°á»›c", s: "vÃ i giÃ¢y", m: "má»™t phÃºt", mm: "%d phÃºt", h: "má»™t giá»", hh: "%d giá»", d: "má»™t ngÃ y", dd: "%d ngÃ y", M: "má»™t thÃ¡ng", MM: "%d thÃ¡ng", y: "má»™t nÄƒm", yy: "%d nÄƒm"}, ordinal: function (a) {return a}, week: {dow: 1, doy: 4}})}), function (a) {a(bb)}(function (a) {
        return a.lang("zh-cn", {months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"), monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"), weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"), weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"), longDateFormat: {LT: "Ahç‚¹mm", L: "YYYYå¹´MMMDæ—¥", LL: "YYYYå¹´MMMDæ—¥", LLL: "YYYYå¹´MMMDæ—¥LT", LLLL: "YYYYå¹´MMMDæ—¥ddddLT", l: "YYYYå¹´MMMDæ—¥", ll: "YYYYå¹´MMMDæ—¥", lll: "YYYYå¹´MMMDæ—¥LT", llll: "YYYYå¹´MMMDæ—¥ddddLT"}, meridiem: function (a, b) {
            var c = 100 * a + b;
            return 600 > c ? "å‡Œæ™¨" : 900 > c ? "æ—©ä¸Š" : 1130 > c ? "ä¸Šåˆ" : 1230 > c ? "ä¸­åˆ" : 1800 > c ? "ä¸‹åˆ" : "æ™šä¸Š"
        }, calendar: {sameDay: function () {return 0 === this.minutes() ? "[ä»Šå¤©]Ah[ç‚¹æ•´]" : "[ä»Šå¤©]LT"}, nextDay: function () {return 0 === this.minutes() ? "[æ˜Žå¤©]Ah[ç‚¹æ•´]" : "[æ˜Žå¤©]LT"}, lastDay: function () {return 0 === this.minutes() ? "[æ˜¨å¤©]Ah[ç‚¹æ•´]" : "[æ˜¨å¤©]LT"}, nextWeek: function () {
            var b, c;
            return b = a().startOf("week"), c = this.unix() - b.unix() >= 604800 ? "[ä¸‹]" : "[æœ¬]", 0 === this.minutes() ? c + "dddAhç‚¹æ•´" : c + "dddAhç‚¹mm"
        }, lastWeek: function () {
            var b, c;
            return b = a().startOf("week"), c = this.unix() < b.unix() ? "[ä¸Š]" : "[æœ¬]", 0 === this.minutes() ? c + "dddAhç‚¹æ•´" : c + "dddAhç‚¹mm"
        }, sameElse: "L"}, ordinal: function (a, b) {
            switch (b) {
                case"d":
                case"D":
                case"DDD":
                    return a + "æ—¥";
                case"M":
                    return a + "æœˆ";
                case"w":
                case"W":
                    return a + "å‘¨";
                default:
                    return a
            }
        }, relativeTime: {future: "%så†…", past: "%så‰", s: "å‡ ç§’", m: "1åˆ†é’Ÿ", mm: "%dåˆ†é’Ÿ", h: "1å°æ—¶", hh: "%då°æ—¶", d: "1å¤©", dd: "%då¤©", M: "1ä¸ªæœˆ", MM: "%dä¸ªæœˆ", y: "1å¹´", yy: "%då¹´"}, week: {dow: 1, doy: 4}})
    }), function (a) {a(bb)}(function (a) {
        return a.lang("zh-tw", {months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"), monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"), weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"), weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"), weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"), longDateFormat: {LT: "Ahé»žmm", L: "YYYYå¹´MMMDæ—¥", LL: "YYYYå¹´MMMDæ—¥", LLL: "YYYYå¹´MMMDæ—¥LT", LLLL: "YYYYå¹´MMMDæ—¥ddddLT", l: "YYYYå¹´MMMDæ—¥", ll: "YYYYå¹´MMMDæ—¥", lll: "YYYYå¹´MMMDæ—¥LT", llll: "YYYYå¹´MMMDæ—¥ddddLT"}, meridiem: function (a, b) {
            var c = 100 * a + b;
            return 900 > c ? "æ—©ä¸Š" : 1130 > c ? "ä¸Šåˆ" : 1230 > c ? "ä¸­åˆ" : 1800 > c ? "ä¸‹åˆ" : "æ™šä¸Š"
        }, calendar: {sameDay: "[ä»Šå¤©]LT", nextDay: "[æ˜Žå¤©]LT", nextWeek: "[ä¸‹]ddddLT", lastDay: "[æ˜¨å¤©]LT", lastWeek: "[ä¸Š]ddddLT", sameElse: "L"}, ordinal: function (a, b) {
            switch (b) {
                case"d":
                case"D":
                case"DDD":
                    return a + "æ—¥";
                case"M":
                    return a + "æœˆ";
                case"w":
                case"W":
                    return a + "é€±";
                default:
                    return a
            }
        }, relativeTime: {future: "%så…§", past: "%så‰", s: "å¹¾ç§’", m: "ä¸€åˆ†é˜", mm: "%dåˆ†é˜", h: "ä¸€å°æ™‚", hh: "%då°æ™‚", d: "ä¸€å¤©", dd: "%då¤©", M: "ä¸€å€‹æœˆ", MM: "%då€‹æœˆ", y: "ä¸€å¹´", yy: "%då¹´"}})
    }), bb.lang("en"), nb ? (module.exports = bb, ab(!0)) : "function" == typeof define && define.amd ? define("moment", function (b, c, d) {return d.config().noGlobal !== !0 && ab(d.config().noGlobal === a), bb}) : ab()
}).call(this);