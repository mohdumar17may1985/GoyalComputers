(function(k, f, c, j, d, l, g) { /*! Jssor */
    new(function() {
        this.$DebugMode = d;
        this.$Log = function(c, d) {
            var a = k.console || {},
                b = this.$DebugMode;
            if (b && a.log) a.log(c);
            else b && d && alert(c)
        };
        this.$Error = function(b, d) {
            var c = k.console || {},
                a = this.$DebugMode;
            if (a && c.error) c.error(b);
            else a && alert(b);
            if (a) throw d || new Error(b);
        };
        this.$Fail = function(a) {
            throw new Error(a);
        };
        this.$Assert = function(b, c) {
            var a = this.$DebugMode;
            if (a)
                if (!b) throw new Error("Assert failed " + c || "");
        };
        this.$Trace = function(c) {
            var a = k.console || {},
                b = this.$DebugMode;
            b && a.log && a.log(c)
        };
        this.$Execute = function(b) {
            var a = this.$DebugMode;
            a && b()
        };
        this.$LiveStamp = function(c, d) {
            var b = this.$DebugMode;
            if (b) {
                var a = f.createElement("DIV");
                a.setAttribute("id", d);
                c.$Live = a
            }
        };
        this.$C_AbstractProperty = function() {
            throw new Error("The property is abstract, it should be implemented by subclass.");
        };
        this.$C_AbstractMethod = function() {
            throw new Error("The method is abstract, it should be implemented by subclass.");
        };

        function a(b) {
            if (b.constructor === a.caller) throw new Error("Cannot create instance of an abstract class.");
        }
        this.$C_AbstractClass = a
    });
    var e = k.$JssorEasing$ = {
            $EaseSwing: function(a) {
                return -c.cos(a * c.PI) / 2 + .5
            },
            $EaseLinear: function(a) {
                return a
            },
            $EaseInQuad: function(a) {
                return a * a
            },
            $EaseOutQuad: function(a) {
                return -a * (a - 2)
            },
            $EaseInOutQuad: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            $EaseInCubic: function(a) {
                return a * a * a
            },
            $EaseOutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $EaseInOutCubic: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            $EaseInQuart: function(a) {
                return a * a * a * a
            },
            $EaseOutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $EaseInOutQuart: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            $EaseInQuint: function(a) {
                return a * a * a * a * a
            },
            $EaseOutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $EaseInOutQuint: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            $EaseInSine: function(a) {
                return 1 - c.cos(a * c.PI / 2)
            },
            $EaseOutSine: function(a) {
                return c.sin(a * c.PI / 2)
            },
            $EaseInOutSine: function(a) {
                return -1 / 2 * (c.cos(c.PI * a) - 1)
            },
            $EaseInExpo: function(a) {
                return a == 0 ? 0 : c.pow(2, 10 * (a - 1))
            },
            $EaseOutExpo: function(a) {
                return a == 1 ? 1 : -c.pow(2, -10 * a) + 1
            },
            $EaseInOutExpo: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * c.pow(2, 10 * (a - 1)) : 1 / 2 * (-c.pow(2, -10 * --a) + 2)
            },
            $EaseInCirc: function(a) {
                return -(c.sqrt(1 - a * a) - 1)
            },
            $EaseOutCirc: function(a) {
                return c.sqrt(1 - (a -= 1) * a)
            },
            $EaseInOutCirc: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (c.sqrt(1 - a * a) - 1) : 1 / 2 * (c.sqrt(1 - (a -= 2) * a) + 1)
            },
            $EaseInElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return -(c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b))
            },
            $EaseOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .3,
                    d = .075;
                return c.pow(2, -10 * a) * c.sin((a - d) * 2 * c.PI / b) + 1
            },
            $EaseInOutElastic: function(a) {
                if (!a || a == 1) return a;
                var b = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * c.pow(2, 10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) : c.pow(2, -10 * (a -= 1)) * c.sin((a - d) * 2 * c.PI / b) * .5 + 1
            },
            $EaseInBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $EaseOutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $EaseInOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $EaseInBounce: function(a) {
                return 1 - e.$EaseOutBounce(1 - a)
            },
            $EaseOutBounce: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $EaseInOutBounce: function(a) {
                return a < 1 / 2 ? e.$EaseInBounce(a * 2) * .5 : e.$EaseOutBounce(a * 2 - 1) * .5 + .5
            },
            $EaseGoBack: function(a) {
                return 1 - c.abs(2 - 1)
            },
            $EaseInWave: function(a) {
                return 1 - c.cos(a * c.PI * 2)
            },
            $EaseOutWave: function(a) {
                return c.sin(a * c.PI * 2)
            },
            $EaseOutJump: function(a) {
                return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
            },
            $EaseInJump: function(a) {
                return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
            }
        },
        h = k.$Jease$ = {
            $Swing: e.$EaseSwing,
            $Linear: e.$EaseLinear,
            $InQuad: e.$EaseInQuad,
            $OutQuad: e.$EaseOutQuad,
            $InOutQuad: e.$EaseInOutQuad,
            $InCubic: e.$EaseInCubic,
            $OutCubic: e.$EaseOutCubic,
            $InOutCubic: e.$EaseInOutCubic,
            $InQuart: e.$EaseInQuart,
            $OutQuart: e.$EaseOutQuart,
            $InOutQuart: e.$EaseInOutQuart,
            $InQuint: e.$EaseInQuint,
            $OutQuint: e.$EaseOutQuint,
            $InOutQuint: e.$EaseInOutQuint,
            $InSine: e.$EaseInSine,
            $OutSine: e.$EaseOutSine,
            $InOutSine: e.$EaseInOutSine,
            $InExpo: e.$EaseInExpo,
            $OutExpo: e.$EaseOutExpo,
            $InOutExpo: e.$EaseInOutExpo,
            $InCirc: e.$EaseInCirc,
            $OutCirc: e.$EaseOutCirc,
            $InOutCirc: e.$EaseInOutCirc,
            $InElastic: e.$EaseInElastic,
            $OutElastic: e.$EaseOutElastic,
            $InOutElastic: e.$EaseInOutElastic,
            $InBack: e.$EaseInBack,
            $OutBack: e.$EaseOutBack,
            $InOutBack: e.$EaseInOutBack,
            $InBounce: e.$EaseInBounce,
            $OutBounce: e.$EaseOutBounce,
            $InOutBounce: e.$EaseInOutBounce,
            $GoBack: e.$EaseGoBack,
            $InWave: e.$EaseInWave,
            $OutWave: e.$EaseOutWave,
            $OutJump: e.$EaseOutJump,
            $InJump: e.$EaseInJump
        };
    k.$JssorDirection$ = {
        $TO_LEFT: 1,
        $TO_RIGHT: 2,
        $TO_TOP: 4,
        $TO_BOTTOM: 8,
        $HORIZONTAL: 3,
        $VERTICAL: 12,
        $GetDirectionHorizontal: function(a) {
            return a & 3
        },
        $GetDirectionVertical: function(a) {
            return a & 12
        },
        $IsHorizontal: function(a) {
            return a & 3
        },
        $IsVertical: function(a) {
            return a & 12
        }
    };
    var b = k.$Jssor$ = new function() {
        var h = this,
            Ab = /\S+/g,
            L = 1,
            jb = 2,
            nb = 3,
            mb = 4,
            rb = 5,
            M, s = 0,
            i = 0,
            t = 0,
            z = 0,
            A = 0,
            D = navigator,
            vb = D.appName,
            o = D.userAgent,
            y = f.documentElement,
            q = parseFloat;

        function Jb() {
            if (!M) {
                M = {
                    $Touchable: "ontouchstart" in k || "createTouch" in f
                };
                var a;
                if (D.pointerEnabled || (a = D.msPointerEnabled)) M.$TouchActionAttr = a ? "msTouchAction" : "touchAction"
            }
            return M
        }

        function v(h) {
            if (!s) {
                s = -1;
                if (vb == "Microsoft Internet Explorer" && !!k.attachEvent && !!k.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    s = L;
                    t = q(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on z=@_jscript_version@*/ ;
                    i = f.documentMode || t
                } else if (vb == "Netscape" && !!k.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        g = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = jb;
                        i = q(o.substring(d + 8))
                    } else if (b >= 0) {
                        var j = o.substring(0, b).lastIndexOf("index.html");
                        s = g >= 0 ? mb : nb;
                        i = q(o.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            s = L;
                            i = t = q(a[1])
                        }
                    }
                    if (c >= 0) A = q(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        s = rb;
                        i = q(a[2])
                    }
                }
            }
            return h == s
        }

        function r() {
            return v(L)
        }

        function T() {
            return r() && (i < 6 || f.compatMode == "BackCompat")
        }

        function Bb() {
            return v(jb)
        }

        function lb() {
            return v(nb)
        }

        function Eb() {
            return v(mb)
        }

        function qb() {
            return v(rb)
        }

        function gb() {
            return lb() && A > 534 && A < 535
        }

        function H() {
            v();
            return A > 537 || i > 42 || s == L && i >= 11
        }

        function R() {
            return r() && i < 9
        }

        function hb(a) {
            var b, c;
            return function(f) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(h, d) {
                        var b = a;
                        if (d) b = h + e;
                        if (f.style[b] != g) return c = b
                    })
                }
                return c
            }
        }

        function fb(b) {
            var a;
            return function(c) {
                a = a || hb(b)(c) || b;
                return a
            }
        }
        var N = fb("transform");

        function ub(a) {
            return {}.toString.call(a)
        }
        var K;

        function Gb() {
            if (!K) {
                K = {};
                n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    K["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return K
        }

        function n(b, d) {
            var a, c;
            if (ub(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function F(a) {
            return a == j ? String(a) : Gb()[ub(a)] || "object"
        }

        function sb(a) {
            for (var b in a) return d
        }

        function B(a) {
            try {
                return F(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function p(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function yb(b, a) {
            setTimeout(b, a || 0)
        }

        function C(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function U(b, a) {
            if (i < 9) b.style.filter = a
        }
        h.$Device = Jb;
        h.$IsBrowserIE = r;
        h.$IsBrowserIeQuirks = T;
        h.$IsBrowserFireFox = Bb;
        h.$IsBrowserSafari = lb;
        h.$IsBrowserChrome = Eb;
        h.$IsBrowserOpera = qb;
        h.$IsBrowserBadTransform = gb;
        h.$IsBrowser3dSafe = H;
        h.$IsBrowserIe9Earlier = R;
        h.$GetTransformProperty = hb("transform");
        h.$BrowserVersion = function() {
            return i
        };
        h.$BrowserEngineVersion = function() {
            return t || i
        };
        h.$WebKitVersion = function() {
            v();
            return A
        };
        h.$Delay = yb;
        h.$Inherit = function(a, b) {
            b.call(a);
            return E({}, a)
        };

        function bb(a) {
            a.constructor === bb.caller && a.$Construct && a.$Construct.apply(a, bb.caller.arguments)
        }
        h.$Construct = bb;
        h.$GetElement = function(a) {
            if (h.$IsString(a)) a = f.getElementById(a);
            return a
        };

        function u(a) {
            return a || k.event
        }
        h.$GetEvent = u;
        h.$EvtSrc = function(b) {
            b = u(b);
            var a = b.target || b.srcElement || f;
            if (a.nodeType == 3) a = h.$ParentNode(a);
            return a
        };
        h.$EvtTarget = function(a) {
            a = u(a);
            return a.relatedTarget || a.toElement
        };
        h.$EvtWhich = function(a) {
            a = u(a);
            return a.which || ([0, 1, 3, 0, 2])[a.button] || a.charCode || a.keyCode
        };
        h.$MousePosition = function(a) {
            a = u(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };
        h.$PageScroll = function() {
            var a = f.body;
            return {
                x: (k.pageXOffset || y.scrollLeft || a.scrollLeft || 0) - (y.clientLeft || a.clientLeft || 0),
                y: (k.pageYOffset || y.scrollTop || a.scrollTop || 0) - (y.clientTop || a.clientTop || 0)
            }
        };
        h.$WindowSize = function() {
            var a = f.body;
            return {
                x: a.clientWidth || y.clientWidth,
                y: a.clientHeight || y.clientHeight
            }
        };

        function G(c, d, a) {
            if (a !== g) c.style[d] = a == g ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && k.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function db(b, c, a, d) {
            if (a !== g) {
                if (a == j) a = "";
                else d && (a += "px");
                G(b, c, a)
            } else return q(G(b, c))
        }

        function Kb(b, c, a) {
            return db(b, c, a, d)
        }

        function m(c, a) {
            var d = a ? db : G,
                b;
            if (a & 4) b = fb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Db(b) {
            if (r() && t < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? q(a[1]) / 100 : 1
            } else return q(b.style.opacity || "1")
        }

        function Fb(b, a, f) {
            if (r() && t < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = C(h, [i], d);
                U(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var O = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };
        if (!H()) O = E(O, {
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateZ: ["translateZ", 1]
        });

        function P(d, a) {
            var c = "";
            if (a) {
                if (r() && i && i < 10) {
                    delete a.$RotateX;
                    delete a.$RotateY;
                    delete a.$TranslateZ
                }
                b.$Each(a, function(d, b) {
                    var a = O[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (Q[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (H()) {
                    if (a.$TranslateX || a.$TranslateY || a.$TranslateZ) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)";
                    if (a.$ScaleX == g) a.$ScaleX = 1;
                    if (a.$ScaleY == g) a.$ScaleY = 1;
                    if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)"
                }
            }
            d.style[N(d)] = c
        }
        h.$CssTransformOrigin = m("transformOrigin", 4);
        h.$CssBackfaceVisibility = m("backfaceVisibility", 4);
        h.$CssTransformStyle = m("transformStyle", 4);
        h.$CssPerspective = m("perspective", 6);
        h.$CssPerspectiveOrigin = m("perspectiveOrigin", 4);
        h.$CssScale = function(a, b) {
            if (r() && t < 9 || t < 10 && T()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = N(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = C(e, [g], f);
                a.style[c] = d
            }
        };
        var pb = 0,
            kb = 0;
        h.$WindowResizeFilter = function(b, a) {
            return R() ? function() {
                var g = d,
                    c = T() ? b.document.body : b.document.documentElement;
                if (c) {
                    var f = c.offsetWidth - pb,
                        e = c.offsetHeight - kb;
                    if (f || e) {
                        pb += f;
                        kb += e
                    } else g = l
                }
                g && a()
            } : a
        };
        h.$MouseOverOutFilter = function(b, a) {
            return function(c) {
                c = u(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !h.$IsChild(a, d)) && b(c)
            }
        };
        h.$AddEvent = function(a, c, d, b) {
            a = h.$GetElement(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        h.$RemoveEvent = function(a, c, d, b) {
            a = h.$GetElement(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        h.$FireEvent = function(c, b) {
            var a;
            if (f.createEvent) {
                a = f.createEvent("HTMLEvents");
                a.initEvent(b, l, l);
                c.dispatchEvent(a)
            } else {
                var d = "on" + b;
                a = f.createEventObject();
                c.fireEvent(d, a)
            }
        };
        h.$CancelEvent = function(a) {
            a = u(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = l
        };
        h.$StopEvent = function(a) {
            a = u(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        h.$CreateCallback = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        h.$InnerText = function(a, b) {
            if (b == g) return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            h.$Empty(a);
            a.appendChild(c)
        };
        h.$InnerHtml = function(a, b) {
            if (b == g) return a.innerHTML;
            a.innerHTML = b
        };
        h.$GetClientRect = function(b) {
            var a = b.getBoundingClientRect();
            return {
                x: a.left,
                y: a.top,
                w: a.right - a.left,
                h: a.bottom - a.top
            }
        };
        h.$ClearInnerHtml = function(a) {
            a.innerHTML = ""
        };
        h.$EncodeHtml = function(b) {
            var a = h.$CreateDiv();
            h.$InnerText(a, b);
            return h.$InnerHtml(a)
        };
        h.$DecodeHtml = function(b) {
            var a = h.$CreateDiv();
            h.$InnerHtml(a, b);
            return h.$InnerText(a)
        };
        h.$SelectElement = function(c) {
            var b;
            if (k.getSelection) b = k.getSelection();
            var a = j;
            if (f.createRange) {
                a = f.createRange();
                a.selectNode(c)
            } else {
                a = f.body.createTextRange();
                a.moveToElementText(c);
                a.select()
            }
            b && b.addRange(a)
        };
        h.$DeselectElements = function() {
            if (f.selection) f.selection.empty();
            else k.getSelection && k.getSelection().removeAllRanges()
        };
        h.$Children = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function tb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (Y(a, b) == c) return a;
                    if (!e) {
                        var d = tb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        h.$FindChild = tb;

        function W(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    Y(a, b) == d && c.push(a);
                    if (!f) {
                        var e = W(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function ob(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = ob(a, c, d);
                        if (b) return b
                    }
                }
        }
        h.$FindChildByTag = ob;

        function ib(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = ib(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        h.$FindChildrenByTag = ib;
        h.$GetElementsByTag = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function E() {
            var e = arguments,
                d, c, b, a, h = 1 & e[0],
                f = 1 + h;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== g) {
                            a = c[b];
                            var i = d[b];
                            d[b] = h && (B(i) || B(a)) ? E(h, {}, i, a) : a
                        }
                    }
                return d
        }
        h.$Extend = E;

        function cb(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (B(a) && B(b)) {
                        a = cb(a, b);
                        e = !sb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        h.$Unextend = cb;
        h.$IsFunction = function(a) {
            return F(a) == "function"
        };
        h.$IsArray = function(a) {
            return F(a) == "array"
        };
        h.$IsString = function(a) {
            return F(a) == "string"
        };
        h.$IsNumeric = function(a) {
            return !isNaN(q(a)) && isFinite(a)
        };
        h.$Type = F;
        h.$Each = n;
        h.$IsNotEmpty = sb;
        h.$IsPlainObject = B;

        function V(a) {
            return f.createElement(a)
        }
        h.$CreateElement = V;
        h.$CreateDiv = function() {
            return V("DIV")
        };
        h.$CreateSpan = function() {
            return V("SPAN")
        };
        h.$EmptyFunction = function() {};

        function Z(b, c, a) {
            if (a == g) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function Y(a, b) {
            return Z(a, b) || Z(a, "data-" + b)
        }
        h.$Attribute = Z;
        h.$AttributeEx = Y;

        function x(b, a) {
            if (a == g) return b.className;
            b.className = a
        }
        h.$ClassName = x;

        function xb(b) {
            var a = {};
            n(b, function(b) {
                a[b] = b
            });
            return a
        }

        function Ib(b) {
            var a = [];
            n(b, function(b) {
                a.push(b)
            });
            return a
        }

        function zb(b, a) {
            return b.match(a || Ab)
        }

        function S(b, a) {
            return xb(zb(b || "", a))
        }
        h.$ToHash = xb;
        h.$FromHash = Ib;
        h.$Split = zb;

        function eb(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function J(a, c, b) {
            x(a, eb(" ", E(cb(S(x(a)), S(c)), S(b))))
        }
        h.$Join = eb;
        h.$AddClass = function(b, a) {
            J(b, j, a)
        };
        h.$RemoveClass = J;
        h.$ReplaceClass = J;
        h.$ParentNode = function(a) {
            return a.parentNode
        };
        h.$HideElement = function(a) {
            h.$CssDisplay(a, "none")
        };
        h.$EnableElement = function(a, b) {
            if (b) h.$Attribute(a, "disabled", d);
            else h.$RemoveAttribute(a, "disabled")
        };
        h.$HideElements = function(b) {
            for (var a = 0; a < b.length; a++) h.$HideElement(b[a])
        };
        h.$ShowElement = function(a, b) {
            h.$CssDisplay(a, b ? "none" : "")
        };
        h.$ShowElements = function(b, c) {
            for (var a = 0; a < b.length; a++) h.$ShowElement(b[a], c)
        };
        h.$RemoveAttribute = function(b, a) {
            b.removeAttribute(a)
        };
        h.$CanClearClip = function() {
            return r() && i < 10
        };
        h.$SetStyleClip = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.$Top) + "px " + c.round(a.$Right) + "px " + c.round(a.$Bottom) + "px " + c.round(a.$Left) + "px)";
            else if (a !== g) {
                var h = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = C(h, f, "");
                b.$CssCssText(d, e)
            }
        };
        h.$GetNow = function() {
            return +new Date
        };
        h.$AppendChild = function(b, a) {
            b.appendChild(a)
        };
        h.$AppendChildren = function(b, a) {
            n(a, function(a) {
                h.$AppendChild(b, a)
            })
        };
        h.$InsertBefore = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        h.$InsertAfter = function(b, a, c) {
            h.$InsertBefore(b, a.nextSibling, c || a.parentNode)
        };
        h.$InsertAdjacentHtml = function(b, a, c) {
            b.insertAdjacentHTML(a, c)
        };
        h.$RemoveElement = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        h.$RemoveElements = function(a, b) {
            n(a, function(a) {
                h.$RemoveElement(a, b)
            })
        };
        h.$Empty = function(a) {
            h.$RemoveElements(h.$Children(a, d), a)
        };
        h.$CenterElement = function(a, b) {
            var c = h.$ParentNode(a);
            b & 1 && h.$CssLeft(a, (h.$CssWidth(c) - h.$CssWidth(a)) / 2);
            b & 2 && h.$CssTop(a, (h.$CssHeight(c) - h.$CssHeight(a)) / 2)
        };
        h.$ParseInt = function(b, a) {
            return parseInt(b, a || 10)
        };
        h.$ParseFloat = q;
        h.$IsChild = function(b, a) {
            var c = f.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return l
            }
            return b === a
        };

        function ab(d, c, b) {
            var a = d.cloneNode(!c);
            !b && h.$RemoveAttribute(a, "id");
            return a
        }
        h.$CloneNode = ab;
        h.$LoadImage = function(e, f) {
            var a = new Image;

            function b(e, d) {
                h.$RemoveEvent(a, "load", b);
                h.$RemoveEvent(a, "abort", c);
                h.$RemoveEvent(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (qb() && i < 11.6 || !e) b(!e);
            else {
                h.$AddEvent(a, "load", b);
                h.$AddEvent(a, "abort", c);
                h.$AddEvent(a, "error", c);
                a.src = e
            }
        };
        h.$LoadImages = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                h.$LoadImage(a.src, b)
            });
            b()
        };
        h.$BuildElement = function(a, g, i, h) {
            if (h) a = ab(a);
            var c = W(a, g);
            if (!c.length) c = b.$GetElementsByTag(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = ab(i);
                x(e, x(d));
                b.$CssCssText(e, d.style.cssText);
                b.$InsertBefore(e, d);
                b.$RemoveElement(d)
            }
            return a
        };

        function Hb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, k = 0,
                i = 0,
                d = 0;

            function j() {
                J(a, q, e[d || k || i & 2 || i]);
                b.$Css(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                j();
                h.$RemoveEvent(f, "mouseup", c);
                h.$RemoveEvent(f, "touchend", c);
                h.$RemoveEvent(f, "touchcancel", c)
            }

            function o(a) {
                if (d) h.$CancelEvent(a);
                else {
                    k = 4;
                    j();
                    h.$AddEvent(f, "mouseup", c);
                    h.$AddEvent(f, "touchend", c);
                    h.$AddEvent(f, "touchcancel", c)
                }
            }
            l.$Selected = function(a) {
                if (a === g) return i;
                i = a & 2 || a & 1;
                j()
            };
            l.$Enable = function(a) {
                if (a === g) return !d;
                d = a ? 0 : 3;
                j()
            };
            l.$Elmt = a = h.$GetElement(a);
            var m = b.$Split(x(a));
            if (m) p = m.shift();
            n(r, function(a) {
                e.push(p + a)
            });
            q = eb(" ", e);
            e.unshift("");
            h.$AddEvent(a, "mousedown", o);
            h.$AddEvent(a, "touchstart", o)
        }
        h.$Buttonize = function(a) {
            return new Hb(a)
        };
        h.$Css = G;
        h.$CssN = db;
        h.$CssP = Kb;
        h.$CssOverflow = m("overflow");
        h.$CssTop = m("top", 2);
        h.$CssLeft = m("left", 2);
        h.$CssWidth = m("width", 2);
        h.$CssHeight = m("height", 2);
        h.$CssMarginLeft = m("marginLeft", 2);
        h.$CssMarginTop = m("marginTop", 2);
        h.$CssPosition = m("position");
        h.$CssDisplay = m("display");
        h.$CssZIndex = m("zIndex", 1);
        h.$CssFloat = function(b, a) {
            return G(b, r() ? "styleFloat" : "cssFloat", a)
        };
        h.$CssOpacity = function(b, a, c) {
            if (a != g) Fb(b, a, c);
            else return Db(b)
        };
        h.$CssCssText = function(a, b) {
            if (b != g) a.style.cssText = b;
            else return a.style.cssText
        };
        var X = {
            $Opacity: h.$CssOpacity,
            $Top: h.$CssTop,
            $Left: h.$CssLeft,
            $Width: h.$CssWidth,
            $Height: h.$CssHeight,
            $Position: h.$CssPosition,
            $Display: h.$CssDisplay,
            $ZIndex: h.$CssZIndex
        };
        h.$GetStyles = function(c, b) {
            var a = {};
            n(b, function(d, b) {
                if (X[b]) a[b] = X[b](c)
            });
            return a
        };

        function w(f, l) {
            var e = R(),
                b = H(),
                d = gb(),
                i = N(f);

            function k(b, d, a) {
                var e = b.$TransformPoint(p(-d / 2, -a / 2)),
                    f = b.$TransformPoint(p(d / 2, -a / 2)),
                    g = b.$TransformPoint(p(d / 2, a / 2)),
                    h = b.$TransformPoint(p(-d / 2, a / 2));
                b.$TransformPoint(p(300, 300));
                return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var f = a.$TranslateZ || 0,
                    l = (a.$RotateX || 0) % 360,
                    m = (a.$RotateY || 0) % 360,
                    o = (a.$Rotate || 0) % 360,
                    p = a.$ScaleZ;
                if (e) {
                    f = 0;
                    l = 0;
                    m = 0;
                    p = 0
                }
                var c = new Cb(a.$TranslateX, a.$TranslateY, f);
                c.$RotateX(l);
                c.$RotateY(m);
                c.$RotateZ(o);
                c.$Skew(a.$SkewX, a.$SkewY);
                c.$Scale(a.$ScaleX, a.$ScaleY, p);
                if (b) {
                    c.$Move(a.$MoveX, a.$MoveY);
                    d.style[i] = c.$Format3d()
                } else if (!z || z < 9) {
                    var j = "";
                    if (o || a.$ScaleX != g && a.$ScaleX != 1 || a.$ScaleY != g && a.$ScaleY != 1) {
                        var n = k(c, a.$OriginalWidth, a.$OriginalHeight);
                        h.$CssMarginTop(d, n.y);
                        h.$CssMarginLeft(d, n.x);
                        j = c.$Format2d()
                    }
                    var r = d.style.filter,
                        s = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        q = C(r, [s], j);
                    U(d, q)
                }
            }
            w = function(e, c) {
                c = c || {};
                var i = c.$MoveX,
                    k = c.$MoveY,
                    f;
                n(X, function(a, b) {
                    f = c[b];
                    f !== g && a(e, f)
                });
                h.$SetStyleClip(e, c.$Clip);
                if (!b) {
                    i != g && h.$CssLeft(e, c.$OriginalX + i);
                    k != g && h.$CssTop(e, c.$OriginalY + k)
                }
                if (c.$Transform)
                    if (d) yb(h.$CreateCallback(j, P, e, c));
                    else a(e, c)
            };
            h.$SetStyleTransform = P;
            if (d) h.$SetStyleTransform = w;
            if (e) h.$SetStyleTransform = a;
            else if (!b) a = P;
            h.$SetStyles = w;
            w(f, l)
        }
        h.$SetStyleTransform = w;
        h.$SetStyles = w;

        function Cb(k, l, p) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, k || 0, l || 0, p || 0, 1],
                i = c.sin,
                h = c.cos,
                m = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function o(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function n(b, c, f, g, i, l, n, o, q, t, u, w, y, A, C, F, a, d, e, h, j, k, m, p, r, s, v, x, z, B, D, E) {
                return [b * a + c * j + f * r + g * z, b * d + c * k + f * s + g * B, b * e + c * m + f * v + g * D, b * h + c * p + f * x + g * E, i * a + l * j + n * r + o * z, i * d + l * k + n * s + o * B, i * e + l * m + n * v + o * D, i * h + l * p + n * x + o * E, q * a + t * j + u * r + w * z, q * d + t * k + u * s + w * B, q * e + t * m + u * v + w * D, q * h + t * p + u * x + w * E, y * a + A * j + C * r + F * z, y * d + A * k + C * s + F * B, y * e + A * m + C * v + F * D, y * h + A * p + C * x + F * E]
            }

            function e(c, a) {
                return n.apply(j, (a || b).concat(c))
            }
            d.$Matrix = function() {
                return b
            };
            d.$Scale = function(a, c, d) {
                if (a == g) a = 1;
                if (c == g) c = 1;
                if (d == g) d = 1;
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.$Translate = function(a, c, d) {
                if (a || c || d) b = e([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a || 0, c || 0, d || 0, 1])
            };
            d.$Move = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.$RotateX = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([1, 0, 0, 0, 0, d, g, 0, 0, -g, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateY = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, 0, -g, 0, 0, 1, 0, 0, g, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.$RotateZ = function(c) {
                if (c) {
                    a = f(c);
                    var d = h(a),
                        g = i(a);
                    b = e([d, g, 0, 0, -g, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.$Skew = function(a, c) {
                if (a || c) {
                    k = f(a);
                    l = f(c);
                    b = e([1, m(l), 0, 0, m(k), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.$TransformPoint = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return o(a[12], a[13])
            };
            d.$Format3d = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.$Format2d = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new(function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.$ScaleXY(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.$ScaleXY(b, 0, c)
            };
            a.$ScaleXY = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.$TransformPoint = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return p(a[0][0], a[1][0])
            }
        });
        var Q = {
            $OriginalX: 0,
            $OriginalY: 0,
            $MoveX: 0,
            $MoveY: 0,
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        h.$FormatEasings = function(a) {
            var c = a || {};
            if (a)
                if (b.$IsFunction(a)) c = {
                    $Default: c
                };
                else if (b.$IsFunction(a.$Clip)) c.$Clip = {
                $Default: a.$Clip
            };
            return c
        };

        function wb(c, a) {
            var b = {};
            n(c, function(c, d) {
                var e = c;
                if (a[d] != g)
                    if (h.$IsNumeric(c)) e = c + a[d];
                    else e = wb(c, a[d]);
                b[d] = e
            });
            return b
        }
        h.$AddDif = wb;
        h.$Cast = function(l, m, w, n, y, z, o) {
            var a = m;
            if (l) {
                a = {};
                for (var h in m) {
                    var A = z[h] || 1,
                        v = y[h] || [0, 1],
                        f = (w - v[0]) / v[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * A;
                    var u = c.floor(f);
                    if (f != u) f -= u;
                    var i = n.$Default || e.$EaseSwing,
                        k, B = l[h],
                        q = m[h];
                    if (b.$IsNumeric(q)) {
                        i = n[h] || i;
                        var x = i(f);
                        k = B + q * x
                    } else {
                        k = b.$Extend({
                            $Offset: {}
                        }, l[h]);
                        b.$Each(q.$Offset || q, function(d, a) {
                            if (n.$Clip) i = n.$Clip[a] || n.$Clip.$Default || i;
                            var c = i(f),
                                b = d * c;
                            k.$Offset[a] = b;
                            k[a] += b
                        })
                    }
                    a[h] = k
                }
                var t = b.$Each(m, function(b, a) {
                    return Q[a] != g
                });
                t && b.$Each(Q, function(c, b) {
                    if (a[b] == g && l[b] !== g) a[b] = l[b]
                });
                if (t) {
                    if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom;
                    a.$OriginalWidth = o.$OriginalWidth;
                    a.$OriginalHeight = o.$OriginalHeight;
                    a.$Transform = d
                }
            }
            if (m.$Clip && o.$Move) {
                var p = a.$Clip.$Offset,
                    s = (p.$Top || 0) + (p.$Bottom || 0),
                    r = (p.$Left || 0) + (p.$Right || 0);
                a.$Left = (a.$Left || 0) + r;
                a.$Top = (a.$Top || 0) + s;
                a.$Clip.$Left -= r;
                a.$Clip.$Right -= r;
                a.$Clip.$Top -= s;
                a.$Clip.$Bottom -= s
            }
            if (a.$Clip && b.$CanClearClip() && !a.$Clip.$Top && !a.$Clip.$Left && a.$Clip.$Right == o.$OriginalWidth && a.$Clip.$Bottom == o.$OriginalHeight) a.$Clip = j;
            return a
        }
    };

    function n() {
        var a = this,
            d = [],
            c = [];

        function h(a, b) {
            d.push({
                $EventName: a,
                $Handler: b
            })
        }

        function g(a, c) {
            b.$Each(d, function(b, e) {
                b.$EventName == a && b.$Handler === c && d.splice(e, 1)
            })
        }

        function f() {
            d = []
        }

        function e() {
            b.$Each(c, function(a) {
                b.$RemoveEvent(a.$Obj, a.$EventName, a.$Handler)
            });
            c = []
        }
        a.$Listen = function(e, a, d, f) {
            b.$AddEvent(e, a, d, f);
            c.push({
                $Obj: e,
                $EventName: a,
                $Handler: d
            })
        };
        a.$Unlisten = function(e, a, d) {
            b.$Each(c, function(f, g) {
                if (f.$Obj === e && f.$EventName == a && f.$Handler === d) {
                    b.$RemoveEvent(e, a, d);
                    c.splice(g, 1)
                }
            })
        };
        a.$UnlistenAll = e;
        a.$On = a.addEventListener = h;
        a.$Off = a.removeEventListener = g;
        a.$TriggerEvent = function(a) {
            var c = [].slice.call(arguments, 1);
            b.$Each(d, function(b) {
                b.$EventName == a && b.$Handler.apply(k, c)
            })
        };
        a.$Destroy = function() {
            e();
            f();
            for (var b in a) delete a[b]
        }
    }
    var m = k.$JssorAnimator$ = function(z, C, h, L, O, J) {
        z = z || 0;
        var a = this,
            q, N, n, o, v, A = 0,
            H, I, G, B, y = 0,
            g = 0,
            m = 0,
            D, i, s, f, e, p, w = [],
            x;

        function P(a) {
            f += a;
            e += a;
            i += a;
            s += a;
            g += a;
            m += a;
            y += a
        }

        function u(o) {
            var j = o;
            if (p && (j >= e || j <= f)) j = ((j - f) % p + p) % p + f;
            if (!D || v || g != j) {
                var k = c.min(j, e);
                k = c.max(k, f);
                if (!D || v || k != m) {
                    if (J) {
                        var l = (k - i) / (C || 1);
                        if (h.$Reverse) l = 1 - l;
                        var n = b.$Cast(O, J, l, H, G, I, h);
                        if (x) b.$Each(n, function(b, a) {
                            x[a] && x[a](L, b)
                        });
                        else b.$SetStyles(L, n)
                    }
                    a.$OnInnerOffsetChange(m - i, k - i);
                    m = k;
                    b.$Each(w, function(b, c) {
                        var a = o < g ? w[w.length - c - 1] : b;
                        a.$GoToPosition(m - y)
                    });
                    var r = g,
                        q = m;
                    g = j;
                    D = d;
                    a.$OnPositionChange(r, q)
                }
            }
        }

        function E(a, b, d) {
            b && a.$Shift(e);
            if (!d) {
                f = c.min(f, a.$GetPosition_OuterBegin() + y);
                e = c.max(e, a.$GetPosition_OuterEnd() + y)
            }
            w.push(a)
        }
        var r = k.requestAnimationFrame || k.webkitRequestAnimationFrame || k.mozRequestAnimationFrame || k.msRequestAnimationFrame;
        if (b.$IsBrowserSafari() && b.$BrowserVersion() < 7) r = j;
        r = r || function(a) {
            b.$Delay(a, h.$Interval)
        };

        function K() {
            if (q) {
                var d = b.$GetNow(),
                    e = c.min(d - A, h.$IntervalMax),
                    a = g + e * o;
                A = d;
                if (a * o >= n * o) a = n;
                u(a);
                if (!v && a * o >= n * o) M(B);
                else r(K)
            }
        }

        function t(h, i, j) {
            if (!q) {
                q = d;
                v = j;
                B = i;
                h = c.max(h, f);
                h = c.min(h, e);
                n = h;
                o = n < g ? -1 : 1;
                a.$OnStart();
                A = b.$GetNow();
                r(K)
            }
        }

        function M(b) {
            if (q) {
                v = q = B = l;
                a.$OnStop();
                b && b()
            }
        }
        a.$Play = function(a, b, c) {
            t(a ? g + a : e, b, c)
        };
        a.$PlayToPosition = t;
        a.$PlayToBegin = function(a, b) {
            t(f, a, b)
        };
        a.$PlayToEnd = function(a, b) {
            t(e, a, b)
        };
        a.$Stop = M;
        a.$Continue = function(a) {
            t(a)
        };
        a.$GetPosition = function() {
            return g
        };
        a.$GetPlayToPosition = function() {
            return n
        };
        a.$GetPosition_Display = function() {
            return m
        };
        a.$GoToPosition = u;
        a.$GoToBegin = function() {
            u(f, d)
        };
        a.$GoToEnd = function() {
            u(e, d)
        };
        a.$Move = function(a) {
            u(g + a)
        };
        a.$CombineMode = function() {
            return N
        };
        a.$GetDuration = function() {
            return C
        };
        a.$IsPlaying = function() {
            return q
        };
        a.$IsOnTheWay = function() {
            return g > i && g <= s
        };
        a.$SetLoopLength = function(a) {
            p = a
        };
        a.$Shift = P;
        a.$Join = E;
        a.$Combine = function(a, b) {
            E(a, 0, b)
        };
        a.$Chain = function(a) {
            E(a, 1)
        };
        a.$Expand = function(a) {
            e += a
        };
        a.$GetPosition_InnerBegin = function() {
            return i
        };
        a.$GetPosition_InnerEnd = function() {
            return s
        };
        a.$GetPosition_OuterBegin = function() {
            return f
        };
        a.$GetPosition_OuterEnd = function() {
            return e
        };
        a.$OnPositionChange = a.$OnStart = a.$OnStop = a.$OnInnerOffsetChange = b.$EmptyFunction;
        a.$Version = b.$GetNow();
        h = b.$Extend({
            $Interval: 16,
            $IntervalMax: 50
        }, h);
        p = h.$LoopLength;
        x = h.$Setter;
        f = i = z;
        e = s = z + C;
        I = h.$Round || {};
        G = h.$During || {};
        H = b.$FormatEasings(h.$Easing)
    };
    var p = k.$JssorSlideshowFormations$ = new function() {
        var h = this,
            b = 0,
            a = 1,
            f = 2,
            e = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.$FormationStraight = function(f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.$Count, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                        case j:
                            c = h - (a * e + (q - b));
                            break;
                        case l:
                            c = h - (b * d + (p - a));
                            break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a);
                            break;
                        case i:
                            c = a * e + b;
                            break;
                        case k:
                            c = b * d + (p - a);
                            break;
                        case m:
                            c = a * e + (q - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    g(r, c, [b, a])
                }
            return r
        };
        h.$FormationSwirl = function(q) {
            var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.$Count,
                A = [],
                z = [],
                u = 0,
                c = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0;
            switch (B) {
                case j:
                    c = r;
                    h = 0;
                    p = [f, a, e, b];
                    break;
                case l:
                    c = 0;
                    h = s;
                    p = [b, e, a, f];
                    break;
                case o:
                    c = r;
                    h = s;
                    p = [e, a, f, b];
                    break;
                case n:
                    c = r;
                    h = s;
                    p = [a, e, b, f];
                    break;
                case i:
                    c = 0;
                    h = 0;
                    p = [f, b, e, a];
                    break;
                case k:
                    c = r;
                    h = 0;
                    p = [a, f, b, e];
                    break;
                case m:
                    c = 0;
                    h = s;
                    p = [e, b, f, a];
                    break;
                default:
                    c = 0;
                    h = 0;
                    p = [b, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + c;
                if (c >= 0 && c < x && h >= 0 && h < y && !z[t]) {
                    z[t] = d;
                    g(A, u++, [h, c])
                } else switch (p[v++ % p.length]) {
                    case b:
                        c--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        c++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case b:
                        c++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        c--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function(p) {
            var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.$Count,
                t = [],
                u = 0,
                c = 0,
                d = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0;
            switch (z) {
                case j:
                    c = q;
                    d = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    c = 0;
                    d = r;
                    h = [b, e, a, e];
                    break;
                case o:
                    c = q;
                    d = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    c = q;
                    d = r;
                    h = [a, e, b, e];
                    break;
                case i:
                    c = 0;
                    d = 0;
                    h = [f, b, e, b];
                    break;
                case k:
                    c = q;
                    d = 0;
                    h = [a, f, b, f];
                    break;
                case m:
                    c = 0;
                    d = r;
                    h = [e, b, f, b];
                    break;
                default:
                    c = 0;
                    d = 0;
                    h = [b, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = d + "," + c;
                if (c >= 0 && c < w && d >= 0 && d < x && typeof t[y] == "undefined") {
                    g(t, u++, [d, c]);
                    switch (h[s % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            d++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            d--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case b:
                            c--;
                            break;
                        case f:
                            d--;
                            break;
                        case a:
                            c++;
                            break;
                        case e:
                            d++
                    }
                    switch (h[s++ % h.length]) {
                        case b:
                            c++;
                            break;
                        case f:
                            d++;
                            break;
                        case a:
                            c--;
                            break;
                        case e:
                            d--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function(q) {
            var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.$Count,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0;
                    break;
                default:
                    e = p;
                    var a = f,
                        b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function(i) {
            var a = i.$Cols || 1,
                b = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < b ? (b - a) / 2 : 0;
            h = a > b ? (a - b) / 2 : 0;
            k = c.round(c.max(a / 2, b / 2)) + 1;
            for (d = 0; d < a; d++)
                for (e = 0; e < b; e++) g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function(f) {
            var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, b, i;
            i = c.round(c.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)
                for (b = 0; b < e; b++) g(h, i - c.min(a + 1, b + 1, d - a, e - b), [b, a]);
            return h
        };
        h.$FormationRandom = function(d) {
            for (var e = [], a, b = 0; b < d.$Rows; b++)
                for (a = 0; a < d.$Cols; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
            return e
        };
        h.$FormationCircle = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.sqrt(c.pow(b - i, 2) + c.pow(a - j, 2))), [a, b]);
            return h
        };
        h.$FormationCross = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, b = 0; b < e; b++)
                for (a = 0; a < f; a++) g(h, c.round(c.min(c.abs(b - i), c.abs(a - j))), [a, b]);
            return h
        };
        h.$FormationRectangleCross = function(f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = c.max(d, e) + 1, b = 0; b < h; b++)
                for (a = 0; a < i; a++) g(j, c.round(k - c.max(d - c.abs(b - d), e - c.abs(a - e))) - 1, [a, b]);
            return j
        }
    };
    k.$JssorSlideshowRunner$ = function(k, s, q, t, y) {
        var f = this,
            u, g, a, x = 0,
            w = t.$TransitionsOrder,
            r, h = 8;

        function i(g, f) {
            var a = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: l,
                $SlideOut: l,
                $Reverse: l,
                $Formation: p.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: e.$EaseSwing,
                $Round: {},
                $Blocks: [],
                $During: {}
            };
            b.$Extend(a, g);
            a.$Count = a.$Cols * a.$Rows;
            a.$Easing = b.$FormatEasings(a.$Easing);
            a.$FramesCount = c.ceil(a.$Duration / a.$Interval);
            a.$GetBlocks = function(c, b) {
                c /= a.$Cols;
                b /= a.$Rows;
                var f = c + "x" + b;
                if (!a.$Blocks[f]) {
                    a.$Blocks[f] = {
                        $Width: c,
                        $Height: b
                    };
                    for (var d = 0; d < a.$Cols; d++)
                        for (var e = 0; e < a.$Rows; e++) a.$Blocks[f][e + "," + d] = {
                            $Top: e * b,
                            $Right: d * c + c,
                            $Bottom: e * b + b,
                            $Left: d * c
                        }
                }
                return a.$Blocks[f]
            };
            if (a.$Brother) {
                a.$Brother = i(a.$Brother, f);
                a.$SlideOut = d
            }
            return a
        }

        function o(B, h, a, w, o, m) {
            var z = this,
                u, v = {},
                i = {},
                n = [],
                f, e, s, q = a.$ChessMode.$Column || 0,
                r = a.$ChessMode.$Row || 0,
                g = a.$GetBlocks(o, m),
                p = C(a),
                D = p.length - 1,
                t = a.$Duration + a.$Delay * D,
                x = w + t,
                k = a.$SlideOut,
                y;
            x += 50;

            function C(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            z.$EndTime = x;
            z.$ShowFrame = function(d) {
                d -= w;
                var e = d < t;
                if (e || y) {
                    y = e;
                    if (!k) d = t - d;
                    var f = c.ceil(d / a.$Interval);
                    b.$Each(i, function(a, e) {
                        var d = c.max(f, a.$Min);
                        d = c.min(d, a.length - 1);
                        if (a.$LastFrameIndex != d) {
                            if (!a.$LastFrameIndex && !k) b.$ShowElement(n[e]);
                            else d == a.$Max && k && b.$HideElement(n[e]);
                            a.$LastFrameIndex = d;
                            b.$SetStyles(n[e], a[d])
                        }
                    })
                }
            };
            h = b.$CloneNode(h);
            b.$SetStyleTransform(h, j);
            if (b.$IsBrowserIe9Earlier()) {
                var E = !h["no-image"],
                    A = b.$FindChildrenByTag(h);
                b.$Each(A, function(a) {
                    (E || a["jssor-slider"]) && b.$CssOpacity(a, b.$CssOpacity(a), d)
                })
            }
            b.$Each(p, function(h, j) {
                b.$Each(h, function(G) {
                    var K = G[0],
                        J = G[1],
                        t = K + "," + J,
                        n = l,
                        p = l,
                        x = l;
                    if (q && J % 2) {
                        if (q & 3) n = !n;
                        if (q & 12) p = !p;
                        if (q & 16) x = !x
                    }
                    if (r && K % 2) {
                        if (r & 3) n = !n;
                        if (r & 12) p = !p;
                        if (r & 16) x = !x
                    }
                    a.$Top = a.$Top || a.$Clip & 4;
                    a.$Bottom = a.$Bottom || a.$Clip & 8;
                    a.$Left = a.$Left || a.$Clip & 1;
                    a.$Right = a.$Right || a.$Clip & 2;
                    var C = p ? a.$Bottom : a.$Top,
                        z = p ? a.$Top : a.$Bottom,
                        B = n ? a.$Right : a.$Left,
                        A = n ? a.$Left : a.$Right;
                    a.$Clip = C || z || B || A;
                    s = {};
                    e = {
                        $Top: 0,
                        $Left: 0,
                        $Opacity: 1,
                        $Width: o,
                        $Height: m
                    };
                    f = b.$Extend({}, e);
                    u = b.$Extend({}, g[t]);
                    if (a.$Opacity) e.$Opacity = 2 - a.$Opacity;
                    if (a.$ZIndex) {
                        e.$ZIndex = a.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = a.$Cols * a.$Rows > 1 || a.$Clip;
                    if (a.$Zoom || a.$Rotate) {
                        var H = d;
                        if (b.$IsBrowserIe9Earlier())
                            if (a.$Cols * a.$Rows > 1) H = l;
                            else I = l;
                        if (H) {
                            e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (b.$IsBrowserIe9Earlier() || b.$IsBrowserOpera()) e.$Zoom = c.min(e.$Zoom, 2);
                            var N = a.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        var h = u.$Offset = {};
                        if (a.$Clip) {
                            var w = a.$ScaleClip || 1;
                            if (C && z) {
                                h.$Top = g.$Height / 2 * w;
                                h.$Bottom = -h.$Top
                            } else if (C) h.$Bottom = -g.$Height * w;
                            else if (z) h.$Top = g.$Height * w;
                            if (B && A) {
                                h.$Left = g.$Width / 2 * w;
                                h.$Right = -h.$Left
                            } else if (B) h.$Right = -g.$Width * w;
                            else if (A) h.$Left = g.$Width * w
                        }
                        s.$Clip = u;
                        f.$Clip = g[t]
                    }
                    var L = n ? 1 : -1,
                        M = p ? 1 : -1;
                    if (a.x) e.$Left += o * a.x * L;
                    if (a.y) e.$Top += m * a.y * M;
                    b.$Each(e, function(a, c) {
                        if (b.$IsNumeric(a))
                            if (a != f[c]) s[c] = a - f[c]
                    });
                    v[t] = k ? f : e;
                    var D = a.$FramesCount,
                        y = c.round(j * a.$Delay / a.$Interval);
                    i[t] = new Array(y);
                    i[t].$Min = y;
                    i[t].$Max = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = b.$Cast(f, s, F / D, a.$Easing, a.$During, a.$Round, {
                            $Move: a.$Move,
                            $OriginalWidth: o,
                            $OriginalHeight: m
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        i[t].push(E)
                    }
                })
            });
            p.reverse();
            b.$Each(p, function(a) {
                b.$Each(a, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        a = h;
                    if (e || f) a = b.$CloneNode(h);
                    b.$SetStyles(a, v[d]);
                    b.$CssOverflow(a, "hidden");
                    b.$CssPosition(a, "absolute");
                    B.$AddClipElement(a);
                    n[d] = a;
                    b.$ShowElement(a, !k)
                })
            })
        }

        function v() {
            var b = this,
                c = 0;
            m.call(b, 0, u);
            b.$OnPositionChange = function(d, b) {
                if (b - c > h) {
                    c = b;
                    a && a.$ShowFrame(b);
                    g && g.$ShowFrame(b)
                }
            };
            b.$Transition = r
        }
        f.$GetTransition = function() {
            var a = 0,
                b = t.$Transitions,
                d = b.length;
            if (w) a = x++ % d;
            else a = c.floor(c.random() * d);
            b[a] && (b[a].$Index = a);
            return b[a]
        };
        f.$Initialize = function(w, x, l, m, b) {
            r = b;
            b = i(b, h);
            var j = m.$Item,
                e = l.$Item;
            j["no-image"] = !m.$Image;
            e["no-image"] = !l.$Image;
            var n = j,
                p = e,
                v = b,
                d = b.$Brother || i({}, h);
            if (!b.$SlideOut) {
                n = e;
                p = j
            }
            var t = d.$Shift || 0;
            g = new o(k, p, d, c.max(t - d.$Interval, 0), s, q);
            a = new o(k, n, v, c.max(d.$Interval - t, 0), s, q);
            g.$ShowFrame(0);
            a.$ShowFrame(0);
            u = c.max(g.$EndTime, a.$EndTime);
            f.$Index = w
        };
        f.$Clear = function() {
            k.$Clear();
            g = j;
            a = j
        };
        f.$GetProcessor = function() {
            var b = j;
            if (a) b = new v;
            return b
        };
        if (b.$IsBrowserIe9Earlier() || b.$IsBrowserOpera() || y && b.$WebKitVersion() < 537) h = 16;
        n.call(f);
        m.call(f, -1e7, 1e7)
    };
    var i = k.$JssorSlider$ = function(p, hc) {
        var h = this;

        function Fc() {
            var a = this;
            m.call(a, -1e8, 2e8);
            a.$GetCurrentSlideInfo = function() {
                var b = a.$GetPosition_Display(),
                    d = c.floor(b),
                    f = t(d),
                    e = b - c.floor(b);
                return {
                    $Index: f,
                    $VirtualIndex: d,
                    $Position: e
                }
            };
            a.$OnPositionChange = function(b, a) {
                var e = c.floor(a);
                if (e != a && a > b) e++;
                Wb(e, d);
                h.$TriggerEvent(i.$EVT_POSITION_CHANGE, t(a), t(b), a, b)
            }
        }

        function Ec() {
            var a = this;
            m.call(a, 0, 0, {
                $LoopLength: r
            });
            b.$Each(C, function(b) {
                D & 1 && b.$SetLoopLength(r);
                a.$Chain(b);
                b.$Shift(fb / dc)
            })
        }

        function Dc() {
            var a = this,
                b = Vb.$Elmt;
            m.call(a, -1, 2, {
                $Easing: e.$EaseLinear,
                $Setter: {
                    $Position: bc
                },
                $LoopLength: r
            }, b, {
                $Position: 1
            }, {
                $Position: -2
            });
            a.$Wrapper = b
        }

        function rc(o, n) {
            var b = this,
                e, f, g, k, c;
            m.call(b, -1e8, 2e8, {
                $IntervalMax: 100
            });
            b.$OnStart = function() {
                O = d;
                R = j;
                h.$TriggerEvent(i.$EVT_SWIPE_START, t(w.$GetPosition()), w.$GetPosition())
            };
            b.$OnStop = function() {
                O = l;
                k = l;
                var a = w.$GetCurrentSlideInfo();
                h.$TriggerEvent(i.$EVT_SWIPE_END, t(w.$GetPosition()), w.$GetPosition());
                !a.$Position && Hc(a.$VirtualIndex, s)
            };
            b.$OnPositionChange = function(i, h) {
                var b;
                if (k) b = c;
                else {
                    b = f;
                    if (g) {
                        var d = h / g;
                        b = a.$SlideEasing(d) * (f - e) + e
                    }
                }
                w.$GoToPosition(b)
            };
            b.$PlayCarousel = function(a, d, c, h) {
                e = a;
                f = d;
                g = c;
                w.$GoToPosition(a);
                b.$GoToPosition(0);
                b.$PlayToPosition(c, h)
            };
            b.$StandBy = function(a) {
                k = d;
                c = a;
                b.$Play(a, j, d)
            };
            b.$SetStandByPosition = function(a) {
                c = a
            };
            b.$MoveCarouselTo = function(a) {
                w.$GoToPosition(a)
            };
            w = new Fc;
            w.$Combine(o);
            w.$Combine(n)
        }

        function sc() {
            var c = this,
                a = Zb();
            b.$CssZIndex(a, 0);
            b.$Css(a, "pointerEvents", "none");
            c.$Elmt = a;
            c.$AddClipElement = function(c) {
                b.$AppendChild(a, c);
                b.$ShowElement(a)
            };
            c.$Clear = function() {
                b.$HideElement(a);
                b.$Empty(a)
            }
        }

        function Bc(k, f) {
            var e = this,
                q, H, x, o, y = [],
                w, B, W, G, Q, F, g, v, p, eb;
            m.call(e, -u, u + 1, {
                $SlideItemAnimator: d
            });

            function E(a) {
                q && q.$Revert();
                T(k, a, 0);
                F = d;
                q = new I.$Class(k, I, b.$ParseFloat(b.$AttributeEx(k, "idle")) || qc);
                q.$GoToPosition(0)
            }

            function Y() {
                q.$Version < I.$Version && E()
            }

            function N(p, r, n) {
                if (!G) {
                    G = d;
                    if (o && n) {
                        var g = n.width,
                            c = n.height,
                            m = g,
                            k = c;
                        if (g && c && a.$FillMode) {
                            if (a.$FillMode & 3 && (!(a.$FillMode & 4) || g > K || c > J)) {
                                var j = l,
                                    q = K / J * c / g;
                                if (a.$FillMode & 1) j = q > 1;
                                else if (a.$FillMode & 2) j = q < 1;
                                m = j ? g * J / c : K;
                                k = j ? J : c * K / g
                            }
                            b.$CssWidth(o, m);
                            b.$CssHeight(o, k);
                            b.$CssTop(o, (J - k) / 2);
                            b.$CssLeft(o, (K - m) / 2)
                        }
                        b.$CssPosition(o, "absolute");
                        h.$TriggerEvent(i.$EVT_LOAD_END, f)
                    }
                }
                b.$HideElement(r);
                p && p(e)
            }

            function X(b, c, d, g) {
                if (g == R && s == f && P)
                    if (!Gc) {
                        var a = t(b);
                        A.$Initialize(a, f, c, e, d);
                        c.$HideContentForSlideshow();
                        U.$Shift(a - U.$GetPosition_OuterBegin() - 1);
                        U.$GoToPosition(a);
                        z.$PlayCarousel(b, b, 0)
                    }
            }

            function ab(b) {
                if (b == R && s == f) {
                    if (!g) {
                        var a = j;
                        if (A)
                            if (A.$Index == f) a = A.$GetProcessor();
                            else A.$Clear();
                        Y();
                        g = new zc(k, f, a, q);
                        g.$SetPlayer(p)
                    }!g.$IsPlaying() && g.$Replay()
                }
            }

            function S(d, h, l) {
                if (d == f) {
                    if (d != h) C[h] && C[h].$ParkOut();
                    else !l && g && g.$AdjustIdleOnPark();
                    p && p.$Enable();
                    var m = R = b.$GetNow();
                    e.$LoadImage(b.$CreateCallback(j, ab, m))
                } else {
                    var k = c.min(f, d),
                        i = c.max(f, d),
                        o = c.min(i - k, k + r - i),
                        n = u + a.$LazyLoading - 1;
                    (!Q || o <= n) && e.$LoadImage()
                }
            }

            function bb() {
                if (s == f && g) {
                    g.$Stop();
                    p && p.$Quit();
                    p && p.$Disable();
                    g.$OpenSlideshowPanel()
                }
            }

            function db() {
                s == f && g && g.$Stop()
            }

            function Z(a) {
                !M && h.$TriggerEvent(i.$EVT_CLICK, f, a)
            }

            function O() {
                p = v.pInstance;
                g && g.$SetPlayer(p)
            }
            e.$LoadImage = function(c, a) {
                a = a || x;
                if (y.length && !G) {
                    b.$ShowElement(a);
                    if (!W) {
                        W = d;
                        h.$TriggerEvent(i.$EVT_LOAD_START, f);
                        b.$Each(y, function(a) {
                            if (!b.$Attribute(a, "src")) {
                                a.src = b.$AttributeEx(a, "src2");
                                b.$CssDisplay(a, a["display-origin"])
                            }
                        })
                    }
                    b.$LoadImages(y, o, b.$CreateCallback(j, N, c, a))
                } else N(c, a)
            };
            e.$GoForNextSlide = function() {
                var h = f;
                if (a.$AutoPlaySteps < 0) h -= r;
                var d = h + a.$AutoPlaySteps * xc;
                if (D & 2) d = t(d);
                if (!(D & 1)) d = c.max(0, c.min(d, r - u));
                if (d != f) {
                    if (A) {
                        var e = A.$GetTransition(r);
                        if (e) {
                            var i = R = b.$GetNow(),
                                g = C[t(d)];
                            return g.$LoadImage(b.$CreateCallback(j, X, d, g, e, i), x)
                        }
                    }
                    nb(d)
                }
            };
            e.$TryActivate = function() {
                S(f, f, d)
            };
            e.$ParkOut = function() {
                p && p.$Quit();
                p && p.$Disable();
                e.$UnhideContentForSlideshow();
                g && g.$Abort();
                g = j;
                E()
            };
            e.$StampSlideItemElements = function(a) {
                a = eb + "_" + a
            };
            e.$HideContentForSlideshow = function() {
                b.$HideElement(k)
            };
            e.$UnhideContentForSlideshow = function() {
                b.$ShowElement(k)
            };
            e.$EnablePlayer = function() {
                p && p.$Enable()
            };

            function T(a, c, e) {
                if (b.$Attribute(a, "jssor-slider")) return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.$Attribute(a, "src")) {
                            Q = d;
                            a["display-origin"] = b.$CssDisplay(a);
                            b.$HideElement(a)
                        }
                    }
                    b.$IsBrowserIe9Earlier() && b.$CssZIndex(a, (b.$CssZIndex(a) || 0) + 1)
                }
                var f = b.$Children(a);
                b.$Each(f, function(f) {
                    var h = f.tagName,
                        i = b.$AttributeEx(f, "u");
                    if (i == "player" && !v) {
                        v = f;
                        if (v.pInstance) O();
                        else b.$AddEvent(v, "dataavailable", O)
                    }
                    if (i == "caption") {
                        if (c) {
                            b.$CssTransformOrigin(f, b.$AttributeEx(f, "to"));
                            b.$CssBackfaceVisibility(f, b.$AttributeEx(f, "bf"));
                            b.$AttributeEx(f, "3d") && b.$CssTransformStyle(f, "preserve-3d")
                        } else if (!b.$IsBrowserIE()) {
                            var g = b.$CloneNode(f, l, d);
                            b.$InsertBefore(g, f, a);
                            b.$RemoveElement(f, a);
                            f = g;
                            c = d
                        }
                    } else if (!F && !e && !o) {
                        if (h == "A") {
                            if (b.$AttributeEx(f, "u") == "image") o = b.$FindChildByTag(f, "IMG");
                            else o = b.$FindChild(f, "image", d);
                            if (o) {
                                w = f;
                                b.$CssDisplay(w, "block");
                                b.$SetStyles(w, V);
                                B = b.$CloneNode(w, d);
                                b.$CssPosition(w, "relative");
                                b.$CssOpacity(B, 0);
                                b.$Css(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && b.$AttributeEx(f, "u") == "image") o = f;
                        if (o) {
                            o.border = 0;
                            b.$SetStyles(o, V)
                        }
                    }
                    T(f, c, e + 1)
                })
            }
            e.$OnInnerOffsetChange = function(c, b) {
                var a = u - b;
                bc(H, a)
            };
            e.$Index = f;
            n.call(e);
            b.$CssPerspective(k, b.$AttributeEx(k, "p"));
            b.$CssPerspectiveOrigin(k, b.$AttributeEx(k, "po"));
            var L = b.$FindChild(k, "thumb", d);
            if (L) {
                e.$Thumb = b.$CloneNode(L);
                b.$HideElement(L)
            }
            b.$ShowElement(k);
            x = b.$CloneNode(cb);
            b.$CssZIndex(x, 1e3);
            b.$AddEvent(k, "click", Z);
            E(d);
            e.$Image = o;
            e.$Link = B;
            e.$Item = k;
            e.$Wrapper = H = k;
            b.$AppendChild(H, x);
            h.$On(203, S);
            h.$On(28, db);
            h.$On(24, bb)
        }

        function zc(y, f, p, q) {
            var a = this,
                n = 0,
                u = 0,
                g, j, e, c, k, t, r, o = C[f];
            m.call(a, 0, 0);

            function v() {
                b.$Empty(N);
                fc && k && o.$Link && b.$AppendChild(N, o.$Link);
                b.$ShowElement(N, !k && o.$Image)
            }

            function w() {
                a.$Replay()
            }

            function x(b) {
                r = b;
                a.$Stop();
                a.$Replay()
            }
            a.$Replay = function() {
                var b = a.$GetPosition_Display();
                if (!B && !O && !r && s == f) {
                    if (!b) {
                        if (g && !k) {
                            k = d;
                            a.$OpenSlideshowPanel(d);
                            h.$TriggerEvent(i.$EVT_SLIDESHOW_START, f, n, u, g, c)
                        }
                        v()
                    }
                    var l, p = i.$EVT_STATE_CHANGE;
                    if (b != c)
                        if (b == e) l = c;
                        else if (b == j) l = e;
                    else if (!b) l = j;
                    else l = a.$GetPlayToPosition();
                    h.$TriggerEvent(p, f, b, n, j, e, c);
                    var m = P && (!E || F);
                    if (b == c)(e != c && !(E & 12) || m) && o.$GoForNextSlide();
                    else(m || b != e) && a.$PlayToPosition(l, w)
                }
            };
            a.$AdjustIdleOnPark = function() {
                e == c && e == a.$GetPosition_Display() && a.$GoToPosition(j)
            };
            a.$Abort = function() {
                A && A.$Index == f && A.$Clear();
                var b = a.$GetPosition_Display();
                b < c && h.$TriggerEvent(i.$EVT_STATE_CHANGE, f, -b - 1, n, j, e, c)
            };
            a.$OpenSlideshowPanel = function(a) {
                p && b.$CssOverflow(hb, a && p.$Transition.$Outside ? "" : "hidden")
            };
            a.$OnInnerOffsetChange = function(b, a) {
                if (k && a >= g) {
                    k = l;
                    v();
                    o.$UnhideContentForSlideshow();
                    A.$Clear();
                    h.$TriggerEvent(i.$EVT_SLIDESHOW_END, f, n, u, g, c)
                }
                h.$TriggerEvent(i.$EVT_PROGRESS_CHANGE, f, a, n, j, e, c)
            };
            a.$SetPlayer = function(a) {
                if (a && !t) {
                    t = a;
                    a.$On($JssorPlayer$.$EVT_SWITCH, x)
                }
            };
            p && a.$Chain(p);
            g = a.$GetPosition_OuterEnd();
            a.$Chain(q);
            j = g + q.$IdleBegin;
            e = g + q.$IdleEnd;
            c = a.$GetPosition_OuterEnd()
        }

        function Mb(a, c, d) {
            b.$CssLeft(a, c);
            b.$CssTop(a, d)
        }

        function bc(c, b) {
            var a = x > 0 ? x : gb,
                d = Bb * b * (a & 1),
                e = Cb * b * (a >> 1 & 1);
            Mb(c, d, e)
        }

        function Rb() {
            pb = O;
            Kb = z.$GetPlayToPosition();
            G = w.$GetPosition()
        }

        function ic() {
            Rb();
            if (B || !F && E & 12) {
                z.$Stop();
                h.$TriggerEvent(i.$EVT_FREEZE)
            }
        }

        function gc(f) {
            if (!B && (F || !(E & 12)) && !z.$IsPlaying()) {
                var d = w.$GetPosition(),
                    b = c.ceil(G);
                if (f && c.abs(H) >= a.$MinDragOffsetToSlide) {
                    b = c.ceil(d);
                    b += eb
                }
                if (!(D & 1)) b = c.min(r - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!M && pb) z.$Continue(Kb);
                else if (d == b) {
                    tb.$EnablePlayer();
                    tb.$TryActivate()
                } else z.$PlayCarousel(d, b, e * Xb)
            }
        }

        function Ib(a) {
            !b.$AttributeEx(b.$EvtSrc(a), "nodrag") && b.$CancelEvent(a)
        }

        function vc(a) {
            ac(a, 1)
        }

        function ac(a, c) {
            a = b.$GetEvent(a);
            var k = b.$EvtSrc(a);
            if (!L && !b.$AttributeEx(k, "nodrag") && wc() && (!c || a.touches.length == 1)) {
                B = d;
                Ab = l;
                R = j;
                b.$AddEvent(f, c ? "touchmove" : "mousemove", Db);
                b.$GetNow();
                M = 0;
                ic();
                if (!pb) x = 0;
                if (c) {
                    var g = a.touches[0];
                    vb = g.clientX;
                    wb = g.clientY
                } else {
                    var e = b.$MousePosition(a);
                    vb = e.x;
                    wb = e.y
                }
                H = 0;
                bb = 0;
                eb = 0;
                h.$TriggerEvent(i.$EVT_DRAG_START, t(G), G, a)
            }
        }

        function Db(e) {
            if (B) {
                e = b.$GetEvent(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = b.$MousePosition(e);
                if (f) {
                    var j = f.x - vb,
                        k = f.y - wb;
                    if (c.floor(G) != G) x = x || gb & L;
                    if ((j || k) && !x) {
                        if (L == 3)
                            if (c.abs(k) > c.abs(j)) x = 2;
                            else x = 1;
                        else x = L;
                        if (jb && x == 1 && c.abs(k) - c.abs(j) > 3) Ab = d
                    }
                    if (x) {
                        var a = k,
                            i = Cb;
                        if (x == 1) {
                            a = j;
                            i = Bb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s,
                                    h = a - g;
                                if (h > 0) a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (r - u - s),
                                    h = -a - g;
                                if (h > 0) a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - bb < -2) eb = 0;
                        else if (H - bb > 2) eb = -1;
                        bb = H;
                        H = a;
                        sb = G - H / i / (Z || 1);
                        if (H && x && !Ab) {
                            b.$CancelEvent(e);
                            if (!O) z.$StandBy(sb);
                            else z.$SetStandByPosition(sb)
                        }
                    }
                }
            }
        }

        function mb() {
            tc();
            if (B) {
                B = l;
                b.$GetNow();
                b.$RemoveEvent(f, "mousemove", Db);
                b.$RemoveEvent(f, "touchmove", Db);
                M = H;
                z.$Stop();
                var a = w.$GetPosition();
                h.$TriggerEvent(i.$EVT_DRAG_END, t(a), a, t(G), G);
                E & 12 && Rb();
                gc(d)
            }
        }

        function mc(c) {
            if (M) {
                b.$StopEvent(c);
                var a = b.$EvtSrc(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.$CancelEvent(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function Lb(a) {
            C[s];
            s = t(a);
            tb = C[s];
            Wb(a);
            return s
        }

        function Hc(a, b) {
            x = 0;
            Lb(a);
            h.$TriggerEvent(i.$EVT_PARK, t(a), b)
        }

        function Wb(a, c) {
            yb = a;
            b.$Each(S, function(b) {
                b.$SetCurrentIndex(t(a), a, c)
            })
        }

        function wc() {
            var b = i.$DragRegistry || 0,
                a = Y;
            if (jb) a & 1 && (a &= 1);
            i.$DragRegistry |= a;
            return L = a & ~b
        }

        function tc() {
            if (L) {
                i.$DragRegistry &= ~Y;
                L = 0
            }
        }

        function Zb() {
            var a = b.$CreateDiv();
            b.$SetStyles(a, V);
            b.$CssPosition(a, "absolute");
            return a
        }

        function t(a) {
            return (a % r + r) % r
        }

        function nc(b, d) {
            if (d)
                if (!D) {
                    b = c.min(c.max(b + yb, 0), r - u);
                    d = l
                } else if (D & 2) {
                b = t(b + yb);
                d = l
            }
            nb(b, a.$SlideDuration, d)
        }

        function zb() {
            b.$Each(S, function(a) {
                a.$Show(a.$Options.$ChanceToShow <= F)
            })
        }

        function kc() {
            if (!F) {
                F = 1;
                zb();
                if (!B) {
                    E & 12 && gc();
                    E & 3 && C[s].$TryActivate()
                }
            }
        }

        function jc() {
            if (F) {
                F = 0;
                zb();
                B || !(E & 12) || ic()
            }
        }

        function lc() {
            V = {
                $Width: K,
                $Height: J,
                $Top: 0,
                $Left: 0
            };
            b.$Each(T, function(a) {
                b.$SetStyles(a, V);
                b.$CssPosition(a, "absolute");
                b.$CssOverflow(a, "hidden");
                b.$HideElement(a)
            });
            b.$SetStyles(cb, V)
        }

        function lb(b, a) {
            nb(b, a, d)
        }

        function nb(h, f, k) {
            if (Tb && (!B && (F || !(E & 12)) || a.$NaviQuitDrag)) {
                O = d;
                B = l;
                z.$Stop();
                if (f == g) f = Xb;
                var e = Eb.$GetPosition_Display(),
                    b = h;
                if (k) {
                    b = e + h;
                    if (h > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                if (D & 2) b = t(b);
                if (!(D & 1)) b = c.max(0, c.min(b, r - u));
                var j = (b - e) % r;
                b = e + j;
                var i = e == b ? 0 : f * c.abs(j);
                i = c.min(i, f * u * 1.5);
                z.$PlayCarousel(e, b, i || 1)
            }
        }
        h.$PlayTo = nb;
        h.$GoTo = function(a) {
            w.$GoToPosition(Lb(a))
        };
        h.$Next = function() {
            lb(1)
        };
        h.$Prev = function() {
            lb(-1)
        };
        h.$Pause = function() {
            P = l
        };
        h.$Play = function() {
            if (!P) {
                P = d;
                C[s] && C[s].$TryActivate()
            }
        };
        h.$SetSlideshowTransitions = function(b) {
            a.$SlideshowOptions.$Transitions = b
        };
        h.$SetCaptionTransitions = function(a) {
            I.$Transitions = a;
            I.$Version = b.$GetNow()
        };
        h.$SlidesCount = function() {
            return T.length
        };
        h.$CurrentIndex = function() {
            return s
        };
        h.$IsAutoPlaying = function() {
            return P
        };
        h.$IsDragging = function() {
            return B
        };
        h.$IsSliding = function() {
            return O
        };
        h.$IsMouseOver = function() {
            return !F
        };
        h.$LastDragSucceded = function() {
            return M
        };

        function X() {
            return b.$CssWidth(y || p)
        }

        function ib() {
            return b.$CssHeight(y || p)
        }
        h.$OriginalWidth = h.$GetOriginalWidth = X;
        h.$OriginalHeight = h.$GetOriginalHeight = ib;

        function Gb(c, d) {
            if (c == g) return b.$CssWidth(p);
            if (!y) {
                var a = b.$CreateDiv(f);
                b.$ClassName(a, b.$ClassName(p));
                b.$CssCssText(a, b.$CssCssText(p));
                b.$CssDisplay(a, "block");
                b.$CssPosition(a, "relative");
                b.$CssTop(a, 0);
                b.$CssLeft(a, 0);
                b.$CssOverflow(a, "visible");
                y = b.$CreateDiv(f);
                b.$CssPosition(y, "absolute");
                b.$CssTop(y, 0);
                b.$CssLeft(y, 0);
                b.$CssWidth(y, b.$CssWidth(p));
                b.$CssHeight(y, b.$CssHeight(p));
                b.$CssTransformOrigin(y, "0 0");
                b.$AppendChild(y, a);
                var i = b.$Children(p);
                b.$AppendChild(p, y);
                b.$Css(p, "backgroundImage", "");
                b.$Each(i, function(c) {
                    b.$AppendChild(b.$AttributeEx(c, "noscale") ? p : a, c);
                    b.$AttributeEx(c, "autocenter") && Nb.push(c)
                })
            }
            Z = c / (d ? b.$CssHeight : b.$CssWidth)(y);
            b.$CssScale(y, Z);
            var h = d ? Z * X() : c,
                e = d ? c : Z * ib();
            b.$CssWidth(p, h);
            b.$CssHeight(p, e);
            b.$Each(Nb, function(a) {
                var c = b.$ParseInt(b.$AttributeEx(a, "autocenter"));
                b.$CenterElement(a, c)
            })
        }
        h.$ScaleHeight = h.$GetScaleHeight = function(a) {
            if (a == g) return b.$CssHeight(p);
            Gb(a, d)
        };
        h.$ScaleWidth = h.$SetScaleWidth = h.$GetScaleWidth = Gb;
        h.$GetVirtualIndex = function(a) {
            var d = c.ceil(t(fb / dc)),
                b = t(a - s + d);
            if (b > u) {
                if (a - s > r / 2) a -= r;
                else if (a - s <= -r / 2) a += r
            } else a = s + b - d;
            return a
        };
        n.call(h);
        h.$Elmt = p = b.$GetElement(p);
        var a = b.$Extend({
            $FillMode: 0,
            $LazyLoading: 1,
            $ArrowKeyNavigation: 1,
            $StartIndex: 0,
            $AutoPlay: l,
            $Loop: 1,
            $HWA: d,
            $NaviQuitDrag: d,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: e.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $Cols: 1,
            $Align: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, hc);
        a.$HWA = a.$HWA && b.$IsBrowser3dSafe();
        if (a.$Idle != g) a.$AutoPlayInterval = a.$Idle;
        if (a.$ParkingPosition != g) a.$Align = a.$ParkingPosition;
        var gb = a.$PlayOrientation & 3,
            xc = (a.$PlayOrientation & 4) / -4 || 1,
            db = a.$SlideshowOptions,
            I = b.$Extend({
                $Class: q,
                $PlayInMode: 1,
                $PlayOutMode: 1,
                $HWA: a.$HWA
            }, a.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions;
        var qb = a.$BulletNavigatorOptions,
            W = a.$ArrowNavigatorOptions,
            ab = a.$ThumbnailNavigatorOptions,
            Q = !a.$UISearchMode,
            y, v = b.$FindChild(p, "slides", Q),
            cb = b.$FindChild(p, "loading", Q) || b.$CreateDiv(f),
            Jb = b.$FindChild(p, "navigator", Q),
            ec = b.$FindChild(p, "arrowleft", Q),
            cc = b.$FindChild(p, "arrowright", Q),
            Hb = b.$FindChild(p, "thumbnavigator", Q),
            pc = b.$CssWidth(v),
            oc = b.$CssHeight(v),
            V, T = [],
            yc = b.$Children(v);
        b.$Each(yc, function(a) {
            if (a.tagName == "DIV" && !b.$AttributeEx(a, "u")) T.push(a);
            else b.$IsBrowserIe9Earlier() && b.$CssZIndex(a, (b.$CssZIndex(a) || 0) + 1)
        });
        var s = -1,
            yb, tb, r = T.length,
            K = a.$SlideWidth || pc,
            J = a.$SlideHeight || oc,
            Yb = a.$SlideSpacing,
            Bb = K + Yb,
            Cb = J + Yb,
            dc = gb & 1 ? Bb : Cb,
            u = c.min(a.$Cols, r),
            hb, x, L, Ab, S = [],
            Sb, Ub, Qb, fc, Gc, P, E = a.$PauseOnHover,
            qc = a.$AutoPlayInterval,
            Xb = a.$SlideDuration,
            rb, ub, fb, Tb = u < r,
            D = Tb ? a.$Loop : 0,
            Y, M, F = 1,
            O, B, R, vb = 0,
            wb = 0,
            H, bb, eb, Eb, w, U, z, Vb = new sc,
            Z, Nb = [];
        if (a.$HWA) Mb = function(a, c, d) {
            b.$SetStyleTransform(a, {
                $TranslateX: c,
                $TranslateY: d
            })
        };
        P = a.$AutoPlay;
        h.$Options = hc;
        lc();
        b.$Attribute(p, "jssor-slider", d);
        b.$CssZIndex(v, b.$CssZIndex(v) || 0);
        b.$CssPosition(v, "absolute");
        hb = b.$CloneNode(v, d);
        b.$InsertBefore(hb, v);
        if (db) {
            fc = db.$ShowLink;
            rb = db.$Class;
            ub = u == 1 && r > 1 && rb && (!b.$IsBrowserIE() || b.$BrowserVersion() >= 8)
        }
        fb = ub || u >= r || !(D & 1) ? 0 : a.$Align;
        Y = (u > 1 || fb ? gb : -1) & a.$DragOrientation;
        var xb = v,
            C = [],
            A, N, Fb = b.$Device(),
            jb = Fb.$Touchable,
            G, pb, Kb, sb;
        Fb.$TouchActionAttr && b.$Css(xb, Fb.$TouchActionAttr, ([j, "pan-y", "pan-x", "none"])[Y] || "");
        U = new Dc;
        if (ub) A = new rb(Vb, K, J, db, jb);
        b.$AppendChild(hb, U.$Wrapper);
        b.$CssOverflow(v, "hidden");
        N = Zb();
        b.$Css(N, "backgroundColor", "#000");
        b.$CssOpacity(N, 0);
        b.$InsertBefore(N, xb.firstChild, xb);
        for (var ob = 0; ob < T.length; ob++) {
            var Ac = T[ob],
                Cc = new Bc(Ac, ob);
            C.push(Cc)
        }
        b.$HideElement(cb);
        Eb = new Ec;
        z = new rc(Eb, U);
        if (Y) {
            b.$AddEvent(v, "mousedown", ac);
            b.$AddEvent(v, "touchstart", vc);
            b.$AddEvent(v, "dragstart", Ib);
            b.$AddEvent(v, "selectstart", Ib);
            b.$AddEvent(f, "mouseup", mb);
            b.$AddEvent(f, "touchend", mb);
            b.$AddEvent(f, "touchcancel", mb);
            b.$AddEvent(k, "blur", mb)
        }
        E &= jb ? 10 : 5;
        if (Jb && qb) {
            Sb = new qb.$Class(Jb, qb, X(), ib());
            S.push(Sb)
        }
        if (W && ec && cc) {
            W.$Loop = D;
            W.$Cols = u;
            Ub = new W.$Class(ec, cc, W, X(), ib());
            S.push(Ub)
        }
        if (Hb && ab) {
            ab.$StartIndex = a.$StartIndex;
            Qb = new ab.$Class(Hb, ab);
            S.push(Qb)
        }
        b.$Each(S, function(a) {
            a.$Reset(r, C, cb);
            a.$On(o.$NAVIGATIONREQUEST, nc)
        });
        b.$Css(p, "visibility", "visible");
        Gb(X());
        b.$AddEvent(v, "click", mc);
        b.$AddEvent(p, "mouseout", b.$MouseOverOutFilter(kc, p));
        b.$AddEvent(p, "mouseover", b.$MouseOverOutFilter(jc, p));
        zb();
        a.$ArrowKeyNavigation && b.$AddEvent(f, "keydown", function(b) {
            if (b.keyCode == 37) lb(-a.$ArrowKeyNavigation);
            else b.keyCode == 39 && lb(a.$ArrowKeyNavigation)
        });
        var kb = a.$StartIndex;
        if (!(D & 1)) kb = c.max(0, c.min(kb, r - u));
        z.$PlayCarousel(kb, kb, 0)
    };
    i.$EVT_CLICK = 21;
    i.$EVT_DRAG_START = 22;
    i.$EVT_DRAG_END = 23;
    i.$EVT_SWIPE_START = 24;
    i.$EVT_SWIPE_END = 25;
    i.$EVT_LOAD_START = 26;
    i.$EVT_LOAD_END = 27;
    i.$EVT_FREEZE = 28;
    i.$EVT_POSITION_CHANGE = 202;
    i.$EVT_PARK = 203;
    i.$EVT_SLIDESHOW_START = 206;
    i.$EVT_SLIDESHOW_END = 207;
    i.$EVT_PROGRESS_CHANGE = 208;
    i.$EVT_STATE_CHANGE = 209;
    var o = {
        $NAVIGATIONREQUEST: 1,
        $INDEXCHANGE: 2,
        $RESET: 3
    };
    k.$JssorBulletNavigator$ = function(e, C) {
        var f = this;
        n.call(f);
        e = b.$GetElement(e);
        var s, A, z, r, k = 0,
            a, m, i, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) {
            a != -1 && y[a].$Selected(a == k)
        }

        function t(a) {
            f.$TriggerEvent(o.$NAVIGATIONREQUEST, a * m)
        }
        f.$Elmt = e;
        f.$GetCurrentIndex = function() {
            return r
        };
        f.$SetCurrentIndex = function(a) {
            if (a != r) {
                var d = k,
                    b = c.floor(a / m);
                k = b;
                r = a;
                v(d);
                v(b)
            }
        };
        f.$Show = function(a) {
            b.$ShowElement(e, a)
        };
        var u;
        f.$Reset = function(E) {
            if (!u) {
                s = c.ceil(E / m);
                k = 0;
                var o = q + w,
                    r = p + x,
                    n = c.ceil(s / i) - 1;
                A = q + o * (!h ? n : i - 1);
                z = p + r * (h ? n : i - 1);
                b.$CssWidth(e, A);
                b.$CssHeight(e, z);
                for (var f = 0; f < s; f++) {
                    var C = b.$CreateSpan();
                    b.$InnerText(C, f + 1);
                    var l = b.$BuildElement(g, "numbertemplate", C, d);
                    b.$CssPosition(l, "absolute");
                    var v = f % (n + 1);
                    b.$CssLeft(l, !h ? o * v : f % i * o);
                    b.$CssTop(l, h ? r * v : c.floor(f / (n + 1)) * r);
                    b.$AppendChild(e, l);
                    B[f] = l;
                    a.$ActionMode & 1 && b.$AddEvent(l, "click", b.$CreateCallback(j, t, f));
                    a.$ActionMode & 2 && b.$AddEvent(l, "mouseover", b.$MouseOverOutFilter(b.$CreateCallback(j, t, f), l));
                    y[f] = b.$Buttonize(l)
                }
                u = d
            }
        };
        f.$Options = a = b.$Extend({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, C);
        g = b.$FindChild(e, "prototype");
        q = b.$CssWidth(g);
        p = b.$CssHeight(g);
        b.$RemoveElement(g, e);
        m = a.$Steps || 1;
        i = a.$Rows || 1;
        w = a.$SpacingX;
        x = a.$SpacingY;
        h = a.$Orientation - 1;
        a.$Scale == l && b.$Attribute(e, "noscale", d);
        a.$AutoCenter && b.$Attribute(e, "autocenter", a.$AutoCenter)
    };
    k.$JssorArrowNavigator$ = function(a, g, h) {
        var c = this;
        n.call(c);
        var r, q, e, f, i;
        b.$CssWidth(a);
        b.$CssHeight(a);

        function k(a) {
            c.$TriggerEvent(o.$NAVIGATIONREQUEST, a, d)
        }

        function p(c) {
            b.$ShowElement(a, c || !h.$Loop && e == 0);
            b.$ShowElement(g, c || !h.$Loop && e >= q - h.$Cols);
            r = c
        }
        c.$GetCurrentIndex = function() {
            return e
        };
        c.$SetCurrentIndex = function(b, a, c) {
            if (c) e = a;
            else {
                e = b;
                p(r)
            }
        };
        c.$Show = p;
        var m;
        c.$Reset = function(c) {
            q = c;
            e = 0;
            if (!m) {
                b.$AddEvent(a, "click", b.$CreateCallback(j, k, -i));
                b.$AddEvent(g, "click", b.$CreateCallback(j, k, i));
                b.$Buttonize(a);
                b.$Buttonize(g);
                m = d
            }
        };
        c.$Options = f = b.$Extend({
            $Steps: 1
        }, h);
        i = f.$Steps;
        if (f.$Scale == l) {
            b.$Attribute(a, "noscale", d);
            b.$Attribute(g, "noscale", d)
        }
        if (f.$AutoCenter) {
            b.$Attribute(a, "autocenter", f.$AutoCenter);
            b.$Attribute(g, "autocenter", f.$AutoCenter)
        }
    };
    k.$JssorThumbnailNavigator$ = function(g, B) {
        var h = this,
            y, p, a, v = [],
            z, x, e, q, r, u, t, m, s, f, k;
        n.call(h);
        g = b.$GetElement(g);

        function A(n, f) {
            var g = this,
                c, m, l;

            function q() {
                m.$Selected(p == f)
            }

            function i(d) {
                if (d || !s.$LastDragSucceded()) {
                    var a = e - f % e,
                        b = s.$GetVirtualIndex((f + a) / e - 1),
                        c = b * e + e - a;
                    h.$TriggerEvent(o.$NAVIGATIONREQUEST, c)
                }
            }
            g.$Index = f;
            g.$Highlight = q;
            l = n.$Thumb || n.$Image || b.$CreateDiv();
            g.$Wrapper = c = b.$BuildElement(k, "thumbnailtemplate", l, d);
            m = b.$Buttonize(c);
            a.$ActionMode & 1 && b.$AddEvent(c, "click", b.$CreateCallback(j, i, 0));
            a.$ActionMode & 2 && b.$AddEvent(c, "mouseover", b.$MouseOverOutFilter(b.$CreateCallback(j, i, 1), c))
        }
        h.$GetCurrentIndex = function() {
            return p
        };
        h.$SetCurrentIndex = function(b, d, f) {
            var a = p;
            p = b;
            a != -1 && v[a].$Highlight();
            v[b].$Highlight();
            !f && s.$PlayTo(s.$GetVirtualIndex(c.floor(d / e)))
        };
        h.$Show = function(a) {
            b.$ShowElement(g, a)
        };
        var w;
        h.$Reset = function(F, D) {
            if (!w) {
                y = F;
                c.ceil(y / e);
                p = -1;
                m = c.min(m, D.length);
                var h = a.$Orientation & 1,
                    n = u + (u + q) * (e - 1) * (1 - h),
                    k = t + (t + r) * (e - 1) * h,
                    B = n + (n + q) * (m - 1) * h,
                    o = k + (k + r) * (m - 1) * (1 - h);
                b.$CssPosition(f, "absolute");
                b.$CssOverflow(f, "hidden");
                a.$AutoCenter & 1 && b.$CssLeft(f, (z - B) / 2);
                a.$AutoCenter & 2 && b.$CssTop(f, (x - o) / 2);
                b.$CssWidth(f, B);
                b.$CssHeight(f, o);
                var j = [];
                b.$Each(D, function(l, g) {
                    var i = new A(l, g),
                        d = i.$Wrapper,
                        a = c.floor(g / e),
                        k = g % e;
                    b.$CssLeft(d, (u + q) * k * (1 - h));
                    b.$CssTop(d, (t + r) * k * h);
                    if (!j[a]) {
                        j[a] = b.$CreateDiv();
                        b.$AppendChild(f, j[a])
                    }
                    b.$AppendChild(j[a], d);
                    v.push(i)
                });
                var E = b.$Extend({
                    $AutoPlay: l,
                    $NaviQuitDrag: l,
                    $SlideWidth: n,
                    $SlideHeight: k,
                    $SlideSpacing: q * h + r * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: a.$Orientation,
                    $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation
                }, a);
                s = new i(g, E);
                w = d
            }
        };
        h.$Options = a = b.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, B);
        z = b.$CssWidth(g);
        x = b.$CssHeight(g);
        f = b.$FindChild(g, "slides", d);
        k = b.$FindChild(f, "prototype");
        u = b.$CssWidth(k);
        t = b.$CssHeight(k);
        b.$RemoveElement(k, f);
        e = a.$Rows || 1;
        q = a.$SpacingX;
        r = a.$SpacingY;
        m = a.$Cols;
        a.$Scale == l && b.$Attribute(g, "noscale", d)
    };

    function q(e, d, c) {
        var a = this;
        m.call(a, 0, c);
        a.$Revert = b.$EmptyFunction;
        a.$IdleBegin = 0;
        a.$IdleEnd = c
    }
    k.$JssorCaptionSlideo$ = function(n, f, l) {
        var a = this,
            o, g = {},
            i = f.$Transitions,
            c = new m(0, 0);
        m.call(a, 0, 0);

        function j(d, c) {
            var a = {};
            b.$Each(d, function(d, f) {
                var e = g[f];
                if (e) {
                    if (b.$IsPlainObject(d)) d = j(d, c || f == "e");
                    else if (c)
                        if (b.$IsNumeric(d)) d = o[d];
                    a[e] = d
                }
            });
            return a
        }

        function k(e, c) {
            var a = [],
                d = b.$Children(e);
            b.$Each(d, function(d) {
                var h = b.$AttributeEx(d, "u") == "caption";
                if (h) {
                    var e = b.$AttributeEx(d, "t"),
                        g = i[b.$ParseInt(e)] || i[e],
                        f = {
                            $Elmt: d,
                            $Transition: g
                        };
                    a.push(f)
                }
                if (c < 5) a = a.concat(k(d, c + 1))
            });
            return a
        }

        function r(d, e, a) {
            b.$Each(e, function(g) {
                var e = j(g),
                    f = b.$FormatEasings(e.$Easing);
                if (e.$Left) {
                    e.$MoveX = e.$Left;
                    f.$MoveX = f.$Left;
                    delete e.$Left
                }
                if (e.$Top) {
                    e.$MoveY = e.$Top;
                    f.$MoveY = f.$Top;
                    delete e.$Top
                }
                var h = {
                        $Easing: f,
                        $OriginalWidth: a.$Width,
                        $OriginalHeight: a.$Height
                    },
                    i = new m(g.b, g.d, h, d, a, e);
                c.$Combine(i);
                a = b.$AddDif(a, e)
            });
            return a
        }

        function q(a) {
            b.$Each(a, function(f) {
                var a = f.$Elmt,
                    e = b.$CssWidth(a),
                    d = b.$CssHeight(a),
                    c = {
                        $Left: b.$CssLeft(a),
                        $Top: b.$CssTop(a),
                        $MoveX: 0,
                        $MoveY: 0,
                        $Opacity: 1,
                        $ZIndex: b.$CssZIndex(a) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        $Width: e,
                        $Height: d,
                        $Clip: {
                            $Top: 0,
                            $Right: e,
                            $Bottom: d,
                            $Left: 0
                        }
                    };
                c.$OriginalX = c.$Left;
                c.$OriginalY = c.$Top;
                r(a, f.$Transition, c)
            })
        }

        function t(g, f, h) {
            var e = g.b - f;
            if (e) {
                var b = new m(f, e);
                b.$Combine(c, d);
                b.$Shift(h);
                a.$Combine(b)
            }
            a.$Expand(g.d);
            return e
        }

        function s(f) {
            var d = c.$GetPosition_OuterBegin(),
                e = 0;
            b.$Each(f, function(c, f) {
                c = b.$Extend({
                    d: l
                }, c);
                t(c, d, e);
                d = c.b;
                e += c.d;
                if (!f || c.t == 2) {
                    a.$IdleBegin = d;
                    a.$IdleEnd = d + c.d
                }
            })
        }
        a.$Revert = function() {
            a.$GoToPosition(-1, d)
        };
        o = [h.$Swing, h.$Linear, h.$InQuad, h.$OutQuad, h.$InOutQuad, h.$InCubic, h.$OutCubic, h.$InOutCubic, h.$InQuart, h.$OutQuart, h.$InOutQuart, h.$InQuint, h.$OutQuint, h.$InOutQuint, h.$InSine, h.$OutSine, h.$InOutSine, h.$InExpo, h.$OutExpo, h.$InOutExpo, h.$InCirc, h.$OutCirc, h.$InOutCirc, h.$InElastic, h.$OutElastic, h.$InOutElastic, h.$InBack, h.$OutBack, h.$InOutBack, h.$InBounce, h.$OutBounce, h.$InOutBounce, h.$GoBack, h.$InWave, h.$OutWave, h.$OutJump, h.$InJump];
        var u = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        b.$Each(u, function(b, a) {
            g[b] = a
        });
        q(k(n, 1));
        c.$GoToPosition(-1);
        var p = f.$Breaks || [],
            e = [].concat(p[b.$ParseInt(b.$AttributeEx(n, "b"))] || []);
        e.push({
            b: c.$GetPosition_OuterEnd(),
            d: e.length ? 0 : l
        });
        s(e);
        a.$GoToPosition(-1)
    }
})(window, document, Math, null, true, false)