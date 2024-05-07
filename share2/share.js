!(function () {
  var e = {
      4636: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          metrika: { id: 26812653 },
          defaults: {
            hooks: {
              onready: function () {},
              onshare: function () {},
              onClosePopup: function () {},
            },
            
            i18n: {
              az: {
                shareButton: "Paylaşmaq",
                copyLink: "Əlaqə",
                linkCopied: "Keçid köçürüldü",
                otherServices: "Digər",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Yandex.Messencerə göndərmək",
              },
              be: {
                shareButton: "Падзяліцца",
                copyLink: "Cпасылка",
                linkCopied: "Спасылка скапіявана",
                otherServices: "Іншыя",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Адправіць у Яндекс.Мэсэнджар",
              },
              en: {
                shareButton: "Share",
                copyLink: "Copy link",
                linkCopied: "Link copied",
                otherServices: "Other",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Send to Yandex.Messenger",
              },
              hy: {
                shareButton: "Կիսվել",
                copyLink: "Հղում",
                linkCopied: "Հղումը պատճենվել է",
                otherServices: "Այլ",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Ուղարկել Yandex.Messenger-ին",
              },
              ka: {
                shareButton: "გაზიარება",
                copyLink: "ბმული",
                linkCopied: "Ბმული დაკოპირებულია",
                otherServices: "სხვა",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Yandex.Messenger-ში გაგზავნა",
              },
              kk: {
                shareButton: "Бөлісу",
                copyLink: "Сілтеме",
                linkCopied: "Сілтеме көшірілді",
                otherServices: "Басқа",
                pressToCopy: "Көшіру үшін ctrl+С және enter-ды басыңыз",
                sendToMessenger: "Яндекс.Мессенджерге жіберу",
              },
              ro: {
                shareButton: "Distribuie",
                copyLink: "Link",
                linkCopied: "Link copiat",
                otherServices: "Altele",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Send to Yandex.Messenger",
              },
              ru: {
                shareButton: "Поделиться",
                copyLink: "Скопировать ссылку",
                linkCopied: "Ссылка скопирована",
                otherServices: "Другие",
                pressToCopy: "Чтобы скопировать, нажмите ctrl+С и enter",
                sendToMessenger: "Отправить в Яндекс.Мессенджер",
              },
              tr: {
                shareButton: "Paylaş",
                copyLink: "Bağlantı",
                linkCopied: "Bağlantı kopyalandı",
                otherServices: "Diğer",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Yandex.Messenger'a gönder",
              },
              tt: {
                shareButton: "Уртаклашу",
                copyLink: "Сылтама",
                linkCopied: "Сылтама күчереп алынды",
                otherServices: "Башкалар",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Яндекс.Мессенджерга җибәрү",
              },
              uk: {
                shareButton: "Поділитися",
                copyLink: "Посилання",
                linkCopied: "Посилання скопійовано",
                otherServices: "Інші",
                pressToCopy: "Press ctrl+C and Enter to copy",
                sendToMessenger: "Надіслати в Яндекс.Месенджер",
              },
              uz: {
                shareButton: "Ulashish",
                copyLink: "Havoladan nusxa olish",
                linkCopied: "Havola nusxalandi",
                otherServices: "Boshqalar",
                pressToCopy:
                  "Nusxa olish uchun ctrl+С va enter tugmalarini bosing",
                sendToMessenger: "Yandex.Messengerga yuborish",
              },
            },
            content: {
              template: "default",
              description: "",
              image: "",
              title: window.document.title,
              url: window.location.href,
            },
            contentByService: {},
            asPopup: !1,
          },
        };
      },
      4141: function (e, t, o) {
        "use strict";
        var r;
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        !(function (a) {
          var i = "block",
            s = "blockMod",
            c = "elem",
            l = "elemMod",
            p = "[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*",
            _ = {
              origin: {
                delims: { elem: "__", mod: { name: "_", val: "_" } },
                wordPattern: p,
              },
              "two-dashes": {
                delims: { elem: "__", mod: { name: "--", val: "_" } },
                wordPattern: p,
              },
            },
            u = {};
          function h(e) {
            var t = (function (e) {
                if ((e || (e = {}), "string" == typeof e)) {
                  var t = _[e];
                  if (!t) throw new Error("The `" + e + "` naming is unknown.");
                  return t;
                }
                var o = _.origin,
                  r = o.delims,
                  n = r.mod,
                  a = e.mod || r.mod;
                return {
                  delims: {
                    elem: e.elem || r.elem,
                    mod:
                      "string" == typeof a
                        ? { name: a, val: a }
                        : {
                            name: a.name || n.name,
                            val: a.val || a.name || n.val,
                          },
                  },
                  wordPattern: e.wordPattern || o.wordPattern,
                };
              })(e),
              o = JSON.stringify(t);
            if (u[o]) return u[o];
            var r = t.delims,
              n = (function (e, t) {
                var o = "(" + t + ")",
                  r = "(?:" + e.elem + "(" + t + "))?",
                  n = "(?:" + e.mod.name + "(" + t + "))?",
                  a = "(?:" + e.mod.val + "(" + t + "))?",
                  i = n + a;
                return new RegExp("^" + o + i + "$|^" + o + r + i + "$");
              })(r, t.wordPattern);
            function a(e) {
              var t = n.exec(e);
              if (!t) return undefined;
              var o = { block: t[1] || t[4] },
                r = t[5],
                a = t[2] || t[6];
              if ((r && (o.elem = r), a)) {
                var i = t[3] || t[7];
                (o.modName = a), (o.modVal = i || !0);
              }
              return o;
            }
            function p(e) {
              if (("string" == typeof e && (e = a(e)), !e || !e.block))
                return undefined;
              var t = e.modName,
                o = t && (e.modVal || !e.hasOwnProperty("modVal"));
              if (e.elem) {
                if (o) return l;
                if (!t) return c;
              }
              return o ? s : t ? void 0 : i;
            }
            var h = {
              validate: function (e) {
                return n.test(e);
              },
              typeOf: p,
              isBlock: function (e) {
                return p(e) === i;
              },
              isBlockMod: function (e) {
                return p(e) === s;
              },
              isElem: function (e) {
                return p(e) === c;
              },
              isElemMod: function (e) {
                return p(e) === l;
              },
              parse: a,
              stringify: function (e) {
                if (!e || !e.block) return undefined;
                var t = e.block;
                if ((e.elem && (t += r.elem + e.elem), e.modName)) {
                  var o = e.modVal;
                  (!o && 0 !== o && e.hasOwnProperty("modVal")) ||
                    (t += r.mod.name + e.modName),
                    o && !0 !== o && (t += r.mod.val + o);
                }
                return t;
              },
              elemDelim: r.elem,
              modDelim: r.mod.name,
              modValDelim: r.mod.val,
            };
            return (u[o] = h), h;
          }
          var d = h();
          [
            "validate",
            "typeOf",
            "isBlock",
            "isBlockMod",
            "isElem",
            "isElemMod",
            "parse",
            "stringify",
            "elemDelim",
            "modDelim",
            "modValDelim",
          ].forEach(function (e) {
            h[e] = d[e];
          }),
            "object" === n(t) && (e.exports = h),
            "object" ===
              ("undefined" == typeof modules ? "undefined" : n(modules)) &&
              modules.define("bem-naming", function (e) {
                e(h);
              }),
            (r = function (e, t, o) {
              o.exports = h;
            }.call(t, o, t, e)),
            r === undefined || (e.exports = r),
            !1 && (a.bemNaming = h);
        })("undefined" != typeof window ? window : global);
      },
      1091: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        var o = (function () {
          function e() {
            this._shortTags = {};
            for (var e = 0; e < o.length; e++) this._shortTags[o[e]] = 1;
            (this._optJsAttrName = "onclick"),
              (this._optJsAttrIsJs = !0),
              (this._optJsCls = "i-bem"),
              (this._optJsElem = !0),
              (this._optEscapeContent = !0),
              (this._optNobaseMods = !1),
              (this._optDelimElem = "__"),
              (this._optDelimMod = "_");
          }
          e.prototype = {
            toHtml: function (e) {
              (this._buf = ""), this._html(e);
              var t = this._buf;
              return delete this._buf, t;
            },
            _html: function (e) {
              var o, s, c;
              if (!1 !== e && null != e)
                if ("object" !== t(e))
                  this._buf += this._optEscapeContent ? r(e) : e;
                else if (Array.isArray(e))
                  for (o = 0, s = e.length; o < s; o++)
                    !1 !== (c = e[o]) && null != c && this._html(c);
                else {
                  if (e.toHtml) {
                    var l = e.toHtml.call(this, e) || "";
                    return void (this._buf += l);
                  }
                  var p = !1 !== e.bem;
                  if ("undefined" != typeof e.tag && !e.tag)
                    return void (e.html
                      ? (this._buf += e.html)
                      : this._html(e.content));
                  e.mix && !Array.isArray(e.mix) && (e.mix = [e.mix]);
                  var _,
                    u,
                    h,
                    d = "",
                    y = "",
                    m = !1;
                  if ((_ = e.attrs))
                    for (o in _)
                      !0 === (u = _[o])
                        ? (y += " " + o)
                        : !1 !== u &&
                          null !== u &&
                          u !== undefined &&
                          (y += " " + o + '="' + n(u) + '"');
                  if (p) {
                    var f =
                      e.block + (e.elem ? this._optDelimElem + e.elem : "");
                    e.block &&
                      ((d = i(
                        e,
                        f,
                        null,
                        this._optNobaseMods,
                        this._optDelimMod
                      )),
                      e.js && ((h = {})[f] = !0 === e.js ? {} : e.js));
                    var g = this._optJsCls && (this._optJsElem || !e.elem),
                      v = e.mix;
                    if (v && v.length)
                      for (o = 0, s = v.length; o < s; o++) {
                        var b = v[o];
                        if (b && !1 !== b.bem) {
                          var k = b.block || e.block || "",
                            w = b.elem || (b.block ? null : e.block && e.elem),
                            x = k + (w ? this._optDelimElem + w : "");
                          k &&
                            ((d += i(
                              b,
                              x,
                              f,
                              this._optNobaseMods,
                              this._optDelimMod
                            )),
                            b.js &&
                              (((h = h || {})[x] = !0 === b.js ? {} : b.js),
                              (m = !0),
                              g ||
                                (g =
                                  k &&
                                  this._optJsCls &&
                                  (this._optJsElem || !w))));
                        }
                      }
                    if (h) {
                      g && (d += " " + this._optJsCls);
                      var z =
                        m || !0 !== e.js
                          ? a(JSON.stringify(h))
                          : '{"' + f + '":{}}';
                      y +=
                        " " +
                        (e.jsAttr || this._optJsAttrName) +
                        "='" +
                        (this._optJsAttrIsJs ? "return " + z : z) +
                        "'";
                    }
                  }
                  e.cls && (d = (d ? d + " " : "") + n(e.cls).trim());
                  var M = e.tag || "div";
                  (this._buf +=
                    "<" + M + (d ? ' class="' + d + '"' : "") + (y || "")),
                    this._shortTags[M]
                      ? (this._buf += "/>")
                      : ((this._buf += ">"),
                        e.html ? (this._buf += e.html) : this._html(e.content),
                        (this._buf += "</" + M + ">"));
                }
            },
          };
          var o =
              "area base br col command embed hr img input keygen link menuitem meta param source track wbr".split(
                " "
              ),
            r = (e.prototype.xmlEscape = function (e) {
              return (e + "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            }),
            n = (e.prototype.attrEscape = function (e) {
              return (e + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
            }),
            a = (e.prototype.jsAttrEscape = function (e) {
              return (e + "").replace(/&/g, "&amp;").replace(/'/g, "&#39;");
            }),
            i = function (e, t, o, r, n) {
              var a,
                i,
                s,
                c = "";
              if (
                (o !== t && (o && (c += " "), (c += t)),
                (a = (e.elem && e.elemMods) || e.mods))
              )
                for (s in a)
                  ((i = a[s]) || 0 === i) &&
                    (c += " " + (r ? n : t + n) + s + (!0 === i ? "" : n + i));
              return c;
            };
          return e;
        })();
        e.exports = o;
      },
      9289: function (e, t) {
        "use strict";
        function o(e) {
          if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o;
          }
          return Array.from(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.enableBodyScroll =
            t.disableBodyScroll =
            t.clearAllBodyScrollLocks =
              void 0);
        var r = !1;
        if ("undefined" != typeof window) {
          var n = {
            get passive() {
              return (r = !0), undefined;
            },
          };
          window.addEventListener("testPassive", null, n),
            window.removeEventListener("testPassive", null, n);
        }
        var a =
            "undefined" != typeof window &&
            window.navigator &&
            window.navigator.platform &&
            (/iP(ad|hone|od)/.test(window.navigator.platform) ||
              ("MacIntel" === window.navigator.platform &&
                window.navigator.maxTouchPoints > 1)),
          i = [],
          s = !1,
          c = -1,
          l = void 0,
          p = void 0,
          _ = function (e) {
            return i.some(function (t) {
              return !(
                !t.options.allowTouchMove || !t.options.allowTouchMove(e)
              );
            });
          },
          u = function (e) {
            var t = e || window.event;
            return (
              !!_(t.target) ||
              t.touches.length > 1 ||
              (t.preventDefault && t.preventDefault(), !1)
            );
          },
          h = function () {
            setTimeout(function () {
              p !== undefined &&
                ((document.body.style.paddingRight = p), (p = undefined)),
                l !== undefined &&
                  ((document.body.style.overflow = l), (l = undefined));
            });
          };
        (t.disableBodyScroll = function (e, t) {
          if (a) {
            if (!e)
              return void console.error(
                "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
              );
            if (
              e &&
              !i.some(function (t) {
                return t.targetElement === e;
              })
            ) {
              var n = { targetElement: e, options: t || {} };
              (i = [].concat(o(i), [n])),
                (e.ontouchstart = function (e) {
                  1 === e.targetTouches.length &&
                    (c = e.targetTouches[0].clientY);
                }),
                (e.ontouchmove = function (t) {
                  1 === t.targetTouches.length &&
                    (function (e, t) {
                      var o = e.targetTouches[0].clientY - c;
                      !_(e.target) &&
                        ((t && 0 === t.scrollTop && o > 0) ||
                        ((function (e) {
                          return (
                            !!e &&
                            e.scrollHeight - e.scrollTop <= e.clientHeight
                          );
                        })(t) &&
                          o < 0)
                          ? u(e)
                          : e.stopPropagation());
                    })(t, e);
                }),
                s ||
                  (document.addEventListener(
                    "touchmove",
                    u,
                    r ? { passive: !1 } : undefined
                  ),
                  (s = !0));
            }
          } else {
            !(function (e) {
              setTimeout(function () {
                if (p === undefined) {
                  var t = !!e && !0 === e.reserveScrollBarGap,
                    o =
                      window.innerWidth - document.documentElement.clientWidth;
                  t &&
                    o > 0 &&
                    ((p = document.body.style.paddingRight),
                    (document.body.style.paddingRight = o + "px"));
                }
                l === undefined &&
                  ((l = document.body.style.overflow),
                  (document.body.style.overflow = "hidden"));
              });
            })(t);
            var h = { targetElement: e, options: t || {} };
            i = [].concat(o(i), [h]);
          }
        }),
          (t.clearAllBodyScrollLocks = function () {
            a
              ? (i.forEach(function (e) {
                  (e.targetElement.ontouchstart = null),
                    (e.targetElement.ontouchmove = null);
                }),
                s &&
                  (document.removeEventListener(
                    "touchmove",
                    u,
                    r ? { passive: !1 } : undefined
                  ),
                  (s = !1)),
                (i = []),
                (c = -1))
              : (h(), (i = []));
          }),
          (t.enableBodyScroll = function (e) {
            if (a) {
              if (!e)
                return void console.error(
                  "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                );
              (e.ontouchstart = null),
                (e.ontouchmove = null),
                (i = i.filter(function (t) {
                  return t.targetElement !== e;
                })),
                s &&
                  0 === i.length &&
                  (document.removeEventListener(
                    "touchmove",
                    u,
                    r ? { passive: !1 } : undefined
                  ),
                  (s = !1));
            } else
              (i = i.filter(function (t) {
                return t.targetElement !== e;
              })).length || h();
          });
      },
      4912: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        var o = Object.prototype.hasOwnProperty,
          r = Object.prototype.toString,
          n = Object.defineProperty,
          a = Object.getOwnPropertyDescriptor,
          i = function (e) {
            return "function" == typeof Array.isArray
              ? Array.isArray(e)
              : "[object Array]" === r.call(e);
          },
          s = function (e) {
            if (!e || "[object Object]" !== r.call(e)) return !1;
            var t,
              n = o.call(e, "constructor"),
              a =
                e.constructor &&
                e.constructor.prototype &&
                o.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !n && !a) return !1;
            for (t in e);
            return void 0 === t || o.call(e, t);
          },
          c = function (e, t) {
            n && "__proto__" === t.name
              ? n(e, t.name, {
                  enumerable: !0,
                  configurable: !0,
                  value: t.newValue,
                  writable: !0,
                })
              : (e[t.name] = t.newValue);
          },
          l = function (e, t) {
            if ("__proto__" === t) {
              if (!o.call(e, t)) return;
              if (a) return a(e, t).value;
            }
            return e[t];
          };
        e.exports = function p() {
          var e,
            o,
            r,
            n,
            a,
            _,
            u = arguments[0],
            h = 1,
            d = arguments.length,
            y = !1;
          for (
            "boolean" == typeof u &&
              ((y = u), (u = arguments[1] || {}), (h = 2)),
              (null == u || ("object" !== t(u) && "function" != typeof u)) &&
                (u = {});
            h < d;
            ++h
          )
            if (null != (e = arguments[h]))
              for (o in e)
                (r = l(u, o)),
                  u !== (n = l(e, o)) &&
                    (y && n && (s(n) || (a = i(n)))
                      ? (a
                          ? ((a = !1), (_ = r && i(r) ? r : []))
                          : (_ = r && s(r) ? r : {}),
                        c(u, { name: o, newValue: p(y, _, n) }))
                      : void 0 !== n && c(u, { name: o, newValue: n }));
          return u;
        };
      },
      1979: function (e, t, o) {
        "use strict";
        var r = o(9129),
          n = o(9047),
          a = o(3486),
          i = o(4786),
          s = o(6444);
        function c(e) {
          var t = -1,
            o = null == e ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype["delete"] = n),
          (c.prototype.get = a),
          (c.prototype.has = i),
          (c.prototype.set = s),
          (e.exports = c);
      },
      2768: function (e, t, o) {
        "use strict";
        var r = o(3708),
          n = o(6993),
          a = o(286),
          i = o(8878),
          s = o(9743);
        function c(e) {
          var t = -1,
            o = null == e ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype["delete"] = n),
          (c.prototype.get = a),
          (c.prototype.has = i),
          (c.prototype.set = s),
          (e.exports = c);
      },
      4804: function (e, t, o) {
        "use strict";
        var r = o(3203)(o(4362), "Map");
        e.exports = r;
      },
      8423: function (e, t, o) {
        "use strict";
        var r = o(6977),
          n = o(7474),
          a = o(727),
          i = o(3653),
          s = o(6140);
        function c(e) {
          var t = -1,
            o = null == e ? 0 : e.length;
          for (this.clear(); ++t < o; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype["delete"] = n),
          (c.prototype.get = a),
          (c.prototype.has = i),
          (c.prototype.set = s),
          (e.exports = c);
      },
      2773: function (e, t, o) {
        "use strict";
        var r = o(4362).Symbol;
        e.exports = r;
      },
      9258: function (e) {
        "use strict";
        e.exports = function (e, t) {
          for (
            var o = -1, r = null == e ? 0 : e.length, n = Array(r);
            ++o < r;

          )
            n[o] = t(e[o], o, e);
          return n;
        };
      },
      879: function (e, t, o) {
        "use strict";
        var r = o(5515),
          n = o(7950),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, o) {
          var i = e[t];
          (a.call(e, t) && n(i, o) && (o !== undefined || t in e)) ||
            r(e, t, o);
        };
      },
      6213: function (e, t, o) {
        "use strict";
        var r = o(7950);
        e.exports = function (e, t) {
          for (var o = e.length; o--; ) if (r(e[o][0], t)) return o;
          return -1;
        };
      },
      5515: function (e, t, o) {
        "use strict";
        var r = o(6255);
        e.exports = function (e, t, o) {
          "__proto__" == t && r
            ? r(e, t, {
                configurable: !0,
                enumerable: !0,
                value: o,
                writable: !0,
              })
            : (e[t] = o);
        };
      },
      5974: function (e, t, o) {
        "use strict";
        var r = o(6883),
          n = o(7102);
        e.exports = function (e, t) {
          for (var o = 0, a = (t = r(t, e)).length; null != e && o < a; )
            e = e[n(t[o++])];
          return o && o == a ? e : undefined;
        };
      },
      1185: function (e, t, o) {
        "use strict";
        var r = o(2773),
          n = o(3888),
          a = o(2299),
          i = r ? r.toStringTag : undefined;
        e.exports = function (e) {
          return null == e
            ? e === undefined
              ? "[object Undefined]"
              : "[object Null]"
            : i && i in Object(e)
            ? n(e)
            : a(e);
        };
      },
      4106: function (e, t, o) {
        "use strict";
        var r = o(3626),
          n = o(9249),
          a = o(71),
          i = o(1214),
          s = /^\[object .+?Constructor\]$/,
          c = Function.prototype,
          l = Object.prototype,
          p = c.toString,
          _ = l.hasOwnProperty,
          u = RegExp(
            "^" +
              p
                .call(_)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        e.exports = function (e) {
          return !(!a(e) || n(e)) && (r(e) ? u : s).test(i(e));
        };
      },
      9199: function (e, t, o) {
        "use strict";
        var r = o(879),
          n = o(6883),
          a = o(4782),
          i = o(71),
          s = o(7102);
        e.exports = function (e, t, o, c) {
          if (!i(e)) return e;
          for (
            var l = -1, p = (t = n(t, e)).length, _ = p - 1, u = e;
            null != u && ++l < p;

          ) {
            var h = s(t[l]),
              d = o;
            if ("__proto__" === h || "constructor" === h || "prototype" === h)
              return e;
            if (l != _) {
              var y = u[h];
              (d = c ? c(y, h, u) : undefined) === undefined &&
                (d = i(y) ? y : a(t[l + 1]) ? [] : {});
            }
            r(u, h, d), (u = u[h]);
          }
          return e;
        };
      },
      8257: function (e, t, o) {
        "use strict";
        var r = o(2773),
          n = o(9258),
          a = o(3670),
          i = o(4655),
          s = r ? r.prototype : undefined,
          c = s ? s.toString : undefined;
        e.exports = function l(e) {
          if ("string" == typeof e) return e;
          if (a(e)) return n(e, l) + "";
          if (i(e)) return c ? c.call(e) : "";
          var t = e + "";
          return "0" == t && 1 / e == -Infinity ? "-0" : t;
        };
      },
      6883: function (e, t, o) {
        "use strict";
        var r = o(3670),
          n = o(837),
          a = o(376),
          i = o(2049);
        e.exports = function (e, t) {
          return r(e) ? e : n(e, t) ? [e] : a(i(e));
        };
      },
      1741: function (e, t, o) {
        "use strict";
        var r = o(4362)["__core-js_shared__"];
        e.exports = r;
      },
      6255: function (e, t, o) {
        "use strict";
        var r = o(3203),
          n = (function () {
            try {
              var e = r(Object, "defineProperty");
              return e({}, "", {}), e;
            } catch (t) {}
          })();
        e.exports = n;
      },
      8556: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        var o =
          "object" ==
            ("undefined" == typeof global ? "undefined" : t(global)) &&
          global &&
          global.Object === Object &&
          global;
        e.exports = o;
      },
      404: function (e, t, o) {
        "use strict";
        var r = o(4480);
        e.exports = function (e, t) {
          var o = e.__data__;
          return r(t) ? o["string" == typeof t ? "string" : "hash"] : o.map;
        };
      },
      3203: function (e, t, o) {
        "use strict";
        var r = o(4106),
          n = o(7338);
        e.exports = function (e, t) {
          var o = n(e, t);
          return r(o) ? o : undefined;
        };
      },
      3888: function (e, t, o) {
        "use strict";
        var r = o(2773),
          n = Object.prototype,
          a = n.hasOwnProperty,
          i = n.toString,
          s = r ? r.toStringTag : undefined;
        e.exports = function (e) {
          var t = a.call(e, s),
            o = e[s];
          try {
            e[s] = undefined;
            var r = !0;
          } catch (c) {}
          var n = i.call(e);
          return r && (t ? (e[s] = o) : delete e[s]), n;
        };
      },
      7338: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return null == e ? undefined : e[t];
        };
      },
      9129: function (e, t, o) {
        "use strict";
        var r = o(6326);
        e.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      9047: function (e) {
        "use strict";
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        };
      },
      3486: function (e, t, o) {
        "use strict";
        var r = o(6326),
          n = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          if (r) {
            var o = t[e];
            return "__lodash_hash_undefined__" === o ? undefined : o;
          }
          return n.call(t, e) ? t[e] : undefined;
        };
      },
      4786: function (e, t, o) {
        "use strict";
        var r = o(6326),
          n = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          return r ? t[e] !== undefined : n.call(t, e);
        };
      },
      6444: function (e, t, o) {
        "use strict";
        var r = o(6326);
        e.exports = function (e, t) {
          var o = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (o[e] = r && t === undefined ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      },
      4782: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        var o = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, r) {
          var n = t(e);
          return (
            !!(r = null == r ? 9007199254740991 : r) &&
            ("number" == n || ("symbol" != n && o.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < r
          );
        };
      },
      837: function (e, t, o) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        var n = o(3670),
          a = o(4655),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          s = /^\w*$/;
        e.exports = function (e, t) {
          if (n(e)) return !1;
          var o = r(e);
          return (
            !(
              "number" != o &&
              "symbol" != o &&
              "boolean" != o &&
              null != e &&
              !a(e)
            ) ||
            s.test(e) ||
            !i.test(e) ||
            (null != t && e in Object(t))
          );
        };
      },
      4480: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        e.exports = function (e) {
          var o = t(e);
          return "string" == o ||
            "number" == o ||
            "symbol" == o ||
            "boolean" == o
            ? "__proto__" !== e
            : null === e;
        };
      },
      9249: function (e, t, o) {
        "use strict";
        var r,
          n = o(1741),
          a = (r = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        e.exports = function (e) {
          return !!a && a in e;
        };
      },
      3708: function (e) {
        "use strict";
        e.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      6993: function (e, t, o) {
        "use strict";
        var r = o(6213),
          n = Array.prototype.splice;
        e.exports = function (e) {
          var t = this.__data__,
            o = r(t, e);
          return (
            !(o < 0) &&
            (o == t.length - 1 ? t.pop() : n.call(t, o, 1), --this.size, !0)
          );
        };
      },
      286: function (e, t, o) {
        "use strict";
        var r = o(6213);
        e.exports = function (e) {
          var t = this.__data__,
            o = r(t, e);
          return o < 0 ? undefined : t[o][1];
        };
      },
      8878: function (e, t, o) {
        "use strict";
        var r = o(6213);
        e.exports = function (e) {
          return r(this.__data__, e) > -1;
        };
      },
      9743: function (e, t, o) {
        "use strict";
        var r = o(6213);
        e.exports = function (e, t) {
          var o = this.__data__,
            n = r(o, e);
          return n < 0 ? (++this.size, o.push([e, t])) : (o[n][1] = t), this;
        };
      },
      6977: function (e, t, o) {
        "use strict";
        var r = o(1979),
          n = o(2768),
          a = o(4804);
        e.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (a || n)(),
              string: new r(),
            });
        };
      },
      7474: function (e, t, o) {
        "use strict";
        var r = o(404);
        e.exports = function (e) {
          var t = r(this, e)["delete"](e);
          return (this.size -= t ? 1 : 0), t;
        };
      },
      727: function (e, t, o) {
        "use strict";
        var r = o(404);
        e.exports = function (e) {
          return r(this, e).get(e);
        };
      },
      3653: function (e, t, o) {
        "use strict";
        var r = o(404);
        e.exports = function (e) {
          return r(this, e).has(e);
        };
      },
      6140: function (e, t, o) {
        "use strict";
        var r = o(404);
        e.exports = function (e, t) {
          var o = r(this, e),
            n = o.size;
          return o.set(e, t), (this.size += o.size == n ? 0 : 1), this;
        };
      },
      5933: function (e, t, o) {
        "use strict";
        var r = o(104);
        e.exports = function (e) {
          var t = r(e, function (e) {
              return 500 === o.size && o.clear(), e;
            }),
            o = t.cache;
          return t;
        };
      },
      6326: function (e, t, o) {
        "use strict";
        var r = o(3203)(Object, "create");
        e.exports = r;
      },
      2299: function (e) {
        "use strict";
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      4362: function (e, t, o) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        var n = o(8556),
          a =
            "object" == ("undefined" == typeof self ? "undefined" : r(self)) &&
            self &&
            self.Object === Object &&
            self,
          i = n || a || Function("return this")();
        e.exports = i;
      },
      376: function (e, t, o) {
        "use strict";
        var r = o(5933),
          n =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          a = /\\(\\)?/g,
          i = r(function (e) {
            var t = [];
            return (
              46 === e.charCodeAt(0) && t.push(""),
              e.replace(n, function (e, o, r, n) {
                t.push(r ? n.replace(a, "$1") : o || e);
              }),
              t
            );
          });
        e.exports = i;
      },
      7102: function (e, t, o) {
        "use strict";
        var r = o(4655);
        e.exports = function (e) {
          if ("string" == typeof e || r(e)) return e;
          var t = e + "";
          return "0" == t && 1 / e == -Infinity ? "-0" : t;
        };
      },
      1214: function (e) {
        "use strict";
        var t = Function.prototype.toString;
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e);
            } catch (o) {}
            try {
              return e + "";
            } catch (o) {}
          }
          return "";
        };
      },
      7950: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return e === t || (e != e && t != t);
        };
      },
      643: function (e, t, o) {
        "use strict";
        var r = o(5974);
        e.exports = function (e, t, o) {
          var n = null == e ? undefined : r(e, t);
          return n === undefined ? o : n;
        };
      },
      3670: function (e) {
        "use strict";
        var t = Array.isArray;
        e.exports = t;
      },
      3626: function (e, t, o) {
        "use strict";
        var r = o(1185),
          n = o(71);
        e.exports = function (e) {
          if (!n(e)) return !1;
          var t = r(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        };
      },
      71: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        e.exports = function (e) {
          var o = t(e);
          return null != e && ("object" == o || "function" == o);
        };
      },
      4939: function (e) {
        "use strict";
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        e.exports = function (e) {
          return null != e && "object" == t(e);
        };
      },
      4655: function (e, t, o) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        var n = o(1185),
          a = o(4939);
        e.exports = function (e) {
          return "symbol" == r(e) || (a(e) && "[object Symbol]" == n(e));
        };
      },
      104: function (e, t, o) {
        "use strict";
        var r = o(8423);
        function n(e, t) {
          if ("function" != typeof e || (null != t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var o = function a() {
            var o = arguments,
              r = t ? t.apply(this, o) : o[0],
              n = a.cache;
            if (n.has(r)) return n.get(r);
            var i = e.apply(this, o);
            return (a.cache = n.set(r, i) || n), i;
          };
          return (o.cache = new (n.Cache || r)()), o;
        }
        (n.Cache = r), (e.exports = n);
      },
      4427: function (e, t, o) {
        "use strict";
        var r = o(9199);
        e.exports = function (e, t, o) {
          return null == e ? e : r(e, t, o);
        };
      },
      2049: function (e, t, o) {
        "use strict";
        var r = o(8257);
        e.exports = function (e) {
          return null == e ? "" : r(e);
        };
      },
      3327: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.blogger.com/blog-this.g",
                params: { t: "description", u: "url", n: "title" },
              },
            },
          },
          popupDimensions: [800, 320],
          i18n: {
            az: "Blogger",
            be: "Blogger",
            en: "Blogger",
            hy: "Blogger",
            ka: "Blogger",
            kk: "Blogger",
            ro: "Blogger",
            ru: "Blogger",
            tr: "Blogger",
            tt: "Blogger",
            uk: "Blogger",
            uz: "Blogger",
          },
          color: "#fb8f3d",
        };
      },
      1138: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.delicious.com/save?v=5&noui&jump=close",
                params: { url: "url", title: "title" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Delicious",
            be: "Delicious",
            en: "Delicious",
            hy: "Delicious",
            ka: "Delicious",
            kk: "Delicious",
            ro: "Delicious",
            ru: "Delicious",
            tr: "Delicious",
            tt: "Delicious",
            uk: "Delicious",
            uz: "Delicious",
          },
          color: "#31a9ff",
        };
      },
      3681: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://digg.com/submit",
                params: { url: "url", title: "title", bodytext: "description" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Digg",
            be: "Digg",
            en: "Digg",
            hy: "Digg",
            ka: "Digg",
            kk: "Digg",
            ro: "Digg",
            ru: "Digg",
            tr: "Digg",
            tt: "Digg",
            uk: "Digg",
            uz: "Digg",
          },
          color: "#000",
        };
      },
      5935: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.evernote.com/clip.action",
                params: { title: "title", body: "description", url: "url" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Evernote",
            be: "Evernote",
            en: "Evernote",
            hy: "Evernote",
            ka: "Evernote",
            kk: "Evernote",
            ro: "Evernote",
            ru: "Evernote",
            tr: "Evernote",
            tt: "Evernote",
            uk: "Evernote",
            uz: "Evernote",
          },
          color: "#24d666",
        };
      },
      9941: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.linkedin.com/shareArticle?mini=true",
                params: { url: "url", title: "title", summary: "description" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "LinkedIn",
            be: "LinkedIn",
            en: "LinkedIn",
            hy: "LinkedIn",
            ka: "LinkedIn",
            kk: "LinkedIn",
            ro: "LinkedIn",
            ru: "LinkedIn",
            tr: "LinkedIn",
            tt: "LinkedIn",
            uk: "LinkedIn",
            uz: "LinkedIn",
          },
          color: "#0083be",
        };
      },
      9767: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.livejournal.com/update.bml",
                params: {
                  subject: "title",
                  event: { options: ["url", "description"], separator: "\n" },
                },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "LiveJournal",
            be: "LiveJournal",
            en: "LiveJournal",
            hy: "LiveJournal",
            ka: "LiveJournal",
            kk: "LiveJournal",
            ro: "LiveJournal",
            ru: "LiveJournal",
            tr: "LiveJournal",
            tt: "LiveJournal",
            uk: "LiveJournal",
            uz: "LiveJournal",
          },
          color: "#0d425a",
        };
      },
      9095: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://yandex.ru/chat",
                restUrl: "#/forward",
                params: {
                  text: { options: ["title", "url"], separator: "\n" },
                },
              },
            },
          },
          i18n: {
            az: "Я.Мессенджер",
            be: "Я.Мессенджер",
            en: "Yandex.Messenger",
            hy: "Yandex.Messenger",
            ka: "Yandex.Messenger",
            kk: "Я.Мессенджер",
            ro: "Yandex.Messenger",
            ru: "Я.Мессенджер",
            tr: "Yandex.Messenger",
            tt: "Я.Мессенджер",
            uk: "Yandex.Messenger",
            uz: "Yandex.Messenger",
          },
          color: "#03CECE",
        };
      },
      3118: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://connect.mail.ru/share",
                params: {
                  url: "url",
                  title: "title",
                  description: "description",
                },
              },
            },
          },
          popupDimensions: [560, 400],
          i18n: {
            az: "Moy Mir",
            be: "Мой Мир",
            en: "Moi Mir",
            hy: "Moi Mir",
            ka: "Moi Mir",
            kk: "Мой Мир",
            ro: "Moi Mir",
            ru: "Мой Мир",
            tr: "Moi Mir",
            tt: "Мой Мир",
            uk: "Мой Мир",
            uz: "Moy Mir",
          },
          color: "#168de2",
        };
      },
      6578: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://connect.ok.ru/offer",
                params: {
                  url: "url",
                  title: "title",
                  description: "description",
                  imageUrl: "image",
                },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Odnoklassniki",
            be: "Одноклассники",
            en: "Odnoklassniki",
            hy: "Odnoklassniki",
            ka: "Odnoklasniki",
            kk: "Одноклассники",
            ro: "Odnoklassniki",
            ru: "Одноклассники",
            tr: "Odnoklasniki",
            tt: "Одноклассники",
            uk: "Однокласники",
            uz: "Odnoklassniki",
          },
          color: "#f70",
        };
      },
      7617: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://pinterest.com/pin/create/button/",
                params: { url: "url", media: "image", description: "title" },
              },
            },
          },
          linkAttrs: { "data-pin-do": "none" },
          popupDimensions: [800, 520],
          i18n: {
            az: "Pinterest",
            be: "Pinterest",
            en: "Pinterest",
            hy: "Pinterest",
            ka: "Pinterest",
            kk: "Pinterest",
            ro: "Pinterest",
            ru: "Pinterest",
            tr: "Pinterest",
            tt: "Pinterest",
            uk: "Pinterest",
            uz: "Pinterest",
          },
          color: "#c20724",
        };
      },
      6435: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://getpocket.com/save",
                params: { url: "url", title: "title" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Pocket",
            be: "Pocket",
            en: "Pocket",
            hy: "Pocket",
            ka: "Pocket",
            kk: "Pocket",
            ro: "Pocket",
            ru: "Pocket",
            tr: "Pocket",
            tt: "Pocket",
            uk: "Pocket",
            uz: "Pocket",
          },
          color: "#ee4056",
        };
      },
      8107: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl:
                  "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                params: { url: "url", title: "title", pics: "image" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Qzone",
            be: "Qzone",
            en: "Qzone",
            hy: "Qzone",
            ka: "Qzone",
            kk: "Qzone",
            ro: "Qzone",
            ru: "Qzone",
            tr: "Qzone",
            tt: "Qzone",
            uk: "Qzone",
            uz: "Qzone",
          },
          color: "#f5b53c",
        };
      },
      3968: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.reddit.com/submit",
                params: { url: "url", title: "title" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "reddit",
            be: "reddit",
            en: "reddit",
            hy: "reddit",
            ka: "reddit",
            kk: "reddit",
            ro: "reddit",
            ru: "reddit",
            tr: "reddit",
            tt: "reddit",
            uk: "reddit",
            uz: "reddit",
          },
          color: "#ff4500",
        };
      },
      3189: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "http://widget.renren.com/dialog/share",
                params: {
                  resourceUrl: "url",
                  srcUrl: "url",
                  title: "title",
                  pic: "image",
                  description: "description",
                },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Renren",
            be: "Renren",
            en: "Renren",
            hy: "Renren",
            ka: "Renren",
            kk: "Renren",
            ro: "Renren",
            ru: "Renren",
            tr: "Renren",
            tt: "Renren",
            uk: "Renren",
            uz: "Renren",
          },
          color: "#1760a7",
        };
      },
      9111: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "http://service.weibo.com/share/share.php?type=3",
                params: { url: "url", pic: "image", title: "title" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Sina Weibo",
            be: "Sina Weibo",
            en: "Sina Weibo",
            hy: "Sina Weibo",
            ka: "Sina Weibo",
            kk: "Sina Weibo",
            ro: "Sina Weibo",
            ru: "Sina Weibo",
            tr: "Sina Weibo",
            tt: "Sina Weibo",
            uk: "Sina Weibo",
            uz: "Sina Weibo",
          },
          color: "#c53220",
        };
      },
      2468: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://web.skype.com/share",
                params: { url: "url" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Skype",
            be: "Skype",
            en: "Skype",
            hy: "Skype",
            ka: "Skype",
            kk: "Skype",
            ro: "Skype",
            ru: "Skype",
            tr: "Skype",
            tt: "Skype",
            uk: "Skype",
            uz: "Skype",
          },
          color: "#00aff0",
        };
      },
      4776: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://surfingbird.ru/share",
                params: { url: "url", title: "title", desc: "description" },
              },
            },
          },
          popupDimensions: [500, 170],
          i18n: {
            az: "Surfingbird",
            be: "Surfingbird",
            en: "Surfingbird",
            hy: "Surfingbird",
            ka: "Surfingbird",
            kk: "Surfingbird",
            ro: "Surfingbird",
            ru: "Surfingbird",
            tr: "Surfingbird",
            tt: "Surfingbird",
            uk: "Surfingbird",
            uz: "Surfingbird",
          },
          color: "#30baff",
        };
      },
      75: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://t.me/share/url",
                params: { url: "url", text: "title" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Telegram",
            be: "Telegram",
            en: "Telegram",
            hy: "Telegram",
            ka: "Telegram",
            kk: "Telegram",
            ro: "Telegram",
            ru: "Telegram",
            tr: "Telegram",
            tt: "Telegram",
            uk: "Telegram",
            uz: "Telegram",
          },
          color: "#64a9dc",
        };
      },
      8175: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "http://share.v.t.qq.com/index.php?c=share&a=index",
                params: { url: "url", title: "title", pic: "image" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Tencent Weibo",
            be: "Tencent Weibo",
            en: "Tencent Weibo",
            hy: "Tencent Weibo",
            ka: "Tencent Weibo",
            kk: "Tencent Weibo",
            ro: "Tencent Weibo",
            ru: "Tencent Weibo",
            tr: "Tencent Weibo",
            tt: "Tencent Weibo",
            uk: "Tencent Weibo",
            uz: "Tencent Weibo",
          },
          color: "#53a9d7",
        };
      },
      7210: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://www.tumblr.com/share/link",
                params: { url: "url", description: "description" },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Tumblr",
            be: "Tumblr",
            en: "Tumblr",
            hy: "Tumblr",
            ka: "Tumblr",
            kk: "Tumblr",
            ro: "Tumblr",
            ru: "Tumblr",
            tr: "Tumblr",
            tt: "Tumblr",
            uk: "Tumblr",
            uz: "Tumblr",
          },
          color: "#547093",
        };
      },
      3125: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://twitter.com/intent/tweet",
                params: {
                  text: "title",
                  url: "url",
                  hashtags: "hashtags",
                  via: "via",
                },
              },
            },
          },
          contentOptions: { hashtags: "", via: "" },
          popupDimensions: [550, 420],
          i18n: {
            az: "Twitter",
            be: "Twitter",
            en: "Twitter",
            hy: "Twitter",
            ka: "Twitter",
            kk: "Twitter",
            ro: "Twitter",
            ru: "Twitter",
            tr: "Twitter",
            tt: "Twitter",
            uk: "Twitter",
            uz: "Twitter",
          },
          color: "#0f1419",
        };
      },
      163: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "viber://forward",
                params: { text: { options: ["title", "url"], separator: " " } },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "Viber",
            be: "Viber",
            en: "Viber",
            hy: "Viber",
            ka: "Viber",
            kk: "Viber",
            ro: "Viber",
            ru: "Viber",
            tr: "Viber",
            tt: "Viber",
            uk: "Viber",
            uz: "Viber",
          },
          color: "#7b519d",
        };
      },
     
      7965: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        t["default"] = {
          config: {
            shareUrl: {
              default: {
                baseUrl: "https://api.whatsapp.com/send",
                params: { text: { options: ["title", "url"], separator: " " } },
              },
            },
          },
          popupDimensions: [800, 520],
          i18n: {
            az: "WhatsApp",
            be: "WhatsApp",
            en: "WhatsApp",
            hy: "WhatsApp",
            ka: "WhatsApp",
            kk: "WhatsApp",
            ro: "WhatsApp",
            ru: "WhatsApp",
            tr: "WhatsApp",
            tt: "WhatsApp",
            uk: "WhatsApp",
            uz: "WhatsApp",
          },
          color: "#65bc54",
        };
      },
      7023: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        var r = a(o(4141)),
          n = a(o(3666));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var i = {
          findInside: function (e, t) {
            return e.querySelectorAll(".".concat(r["default"].stringify(t)));
          },
          findOutside: function (e, t) {
            return n["default"].closest(e, r["default"].stringify(t));
          },
          getMod: function (e, t) {
            for (var o = 0, n = e.classList.length; o < n; o += 1) {
              var a = r["default"].parse(e.classList[o]);
              if (a && a.modName === t) return a.modVal;
            }
          },
        };
        t["default"] = i;
      },
      6177: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getCss = function (e) {
            return (
              o(5790).Z +
              Object.keys(e)
                .map(function (t) {
                  var r = o(359)("./".concat(t, ".svg"));
                  return "\n.ya-share2__item_service_"
                    .concat(t, " .ya-share2__badge,\n.ya-share2__item_service_")
                    .concat(
                      t,
                      " .ya-share2__mobile-popup-badge\n{\n    background-color: "
                    )
                    .concat(e[t].color, ";\n}\n\n.ya-share2__item_service_")
                    .concat(
                      t,
                      ' .ya-share2__icon\n{\n    background-image: url("'
                    )
                    .concat(
                      r,
                      '");\n}\n\n.ya-share2__container_color-scheme_whiteblack .ya-share2__item_service_'
                    )
                    .concat(
                      t,
                      ' .ya-share2__icon\n{\n    background-image: url("'
                    )
                    .concat(
                      r.replace(/fill='%23FFF'/i, "fill='%23000'"),
                      '");\n}\n'
                    );
                })
                .join("")
            );
          }),
          (t.loadPlugins = function () {
            var e = o(987);
            return e.keys().reduce(function (t, o) {
              var r = o.match(/^\.\/(\w+)\.js/);
              return r && (t[r[1]] = e(o)["default"]), t;
            }, {});
          });
      },
      5302: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = function () {
            var e = navigator.userAgent || navigator.vendor || window.opera;
            return (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                e
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4)
              )
            );
          });
      },
      1102: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0),
          (t.injectJs = function (e) {
            var t = document.createElement("script");
            return (t.src = e), (t.defer = !0), document.head.appendChild(t), t;
          }),
          (t.ready = function (e) {
            function t() {
              document.removeEventListener("DOMContentLoaded", t),
                window.removeEventListener("load", t),
                e();
            }
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? e()
              : (document.addEventListener("DOMContentLoaded", t),
                window.addEventListener("load", t));
          });
        var o = function (e) {
          this._document = e;
        };
        o.prototype.injectCss = function (e, t) {
          var o,
            r = t.nonce,
            n = (o = this._document).getElementsByTagName("head")[0] || o.body,
            a = this._document.createElement("style");
          (a.type = "text/css"),
            (a.innerHTML = e),
            r && a.setAttribute("nonce", r),
            n.appendChild(a);
        };
        t["default"] = o;
      },
      3666: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        var o = {
          closest: function (e, t) {
            do {
              if (e.classList && e.classList.contains(t)) return e;
            } while ((e = e.parentNode));
          },
          toArray: function (e) {
            for (var t = [], o = e.length, r = 0; r < o; r += 1) t.push(e[r]);
            return t;
          },
          getTarget: function (e) {
            return e.target || e.srcElement;
          },
          remove: function (e) {
            return e.parentNode.removeChild(e);
          },
          getRectRelativeToDocument: function (e) {
            var t = e.getBoundingClientRect(),
              o =
                window.scrollY === undefined
                  ? document.documentElement.scrollTop
                  : window.scrollY,
              r =
                window.scrollX === undefined
                  ? document.documentElement.scrollLeft
                  : window.scrollX;
            return {
              top: t.top + o,
              left: t.left + r,
              width: t.width === undefined ? t.right - t.left : t.width,
              height: t.height === undefined ? t.bottom - t.top : t.height,
            };
          },
        };
        t["default"] = o;
      },
      1677: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = function (e) {
            return function (t) {
              var o =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              return (
                "string" == typeof t &&
                  (t = a["default"].toArray(document.querySelectorAll(t))),
                Array.isArray(t) || (t = [t]),
                !1 === o.reinit &&
                  (t = t.filter(function (e) {
                    return !c["default"].getMod(e, "inited");
                  })),
                t.map(function (t) {
                  var a = new n["default"](
                    t,
                    (0, r["default"])({ options: o }, e)
                  );
                  return (
                    a.isBare() ||
                      _ ||
                      (p.injectCss((0, i.getCss)(e.plugins), {
                        nonce: a.getNonce(),
                      }),
                      (_ = !0)),
                    a
                  );
                })
              );
            };
          });
        var r = l(o(4912)),
          n = l(o(3788)),
          a = l(o(3666)),
          i = o(6177),
          s = l(o(1102)),
          c = l(o(7023));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var p = new s["default"](window.document),
          _ = !1;
      },
      4955: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMessengerContacts = function (e, t) {
            window.addEventListener("message", function (t) {
              var o = t.data,
                r = t.origin;
              window.location.origin === r &&
                "share_iframe" === o.type &&
                o.payload &&
                Array.isArray(o.payload.items) &&
                e(o.payload.items);
            }),
              fetch("https://api.messenger.yandex.ru/share/index.html", {
                credentials: "include",
              })
                .then(function (e) {
                  if (!e.ok)
                    throw new Error("Couldn't get contacts from the Messenger");
                  e.text().then(function (e) {
                    var o = t().contentDocument;
                    o.open().write(e), o.close();
                  });
                })
                ["catch"](function (t) {
                  console.error(t), e([]);
                });
          });
      },
      30: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        var r = o(1102);
        function n(e) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            n(e)
          );
        }
        function a(e, t) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              o.push.apply(o, r);
          }
          return o;
        }
        function i(e, t, o) {
          return (
            (t = c(t)) in e
              ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = o),
            e
          );
        }
        function s(e, t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r);
          }
        }
        function c(e) {
          var t = (function (e, t) {
            if ("object" !== n(e) || null === e) return e;
            var o = e[Symbol.toPrimitive];
            if (o !== undefined) {
              var r = o.call(e, t || "default");
              if ("object" !== n(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === n(t) ? t : String(t);
        }
        function l(e, t) {
          var o = new RegExp(
              "^https://mc\\.yandex\\.ru/metrika/".concat(e, "\\.js$")
            ),
            r = new RegExp(
              "^https://cdn\\.jsdelivr\\.net/npm/yandex-metrica-watch/".concat(
                e,
                "\\.js$"
              )
            );
          return t.some(function (e) {
            var t = e.src;
            return o.test(t) || r.test(t);
          });
        }
        function p() {
          return (
            window.Ya && ("Metrika" in window.Ya || "Metrika2" in window.Ya)
          );
        }
        function _() {
          return Boolean(window.ym);
        }
        function u() {
          return Array.isArray(window.ym.a);
        }
        var h = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this._id = t),
              (this.strategy = { value: "" }),
              (this.traceMethod = this.traceMethod.bind(this));
          }
          var t, o, n;
          return (
            (t = e),
            (o = [
              {
                key: "traceMethod",
                value: function (e) {
                  this.strategy.value += this.strategy.value
                    ? "/".concat(e)
                    : e;
                },
              },
              {
                key: "pushCallback",
                value: function (e) {
                  var t = "yandex_metrika_callbacks2";
                  (window[t] = window[t] || []), window[t].push(e);
                },
              },
              {
                key: "stubYm",
                value: function (e) {
                  var t,
                    o = this;
                  this.traceMethod("Metrika" === e ? "h" : "i"),
                    (this.ym = function (r) {
                      for (
                        var n = arguments.length,
                          s = new Array(n > 1 ? n - 1 : 0),
                          c = 1;
                        c < n;
                        c++
                      )
                        s[c - 1] = arguments[c];
                      if ("init" === r) {
                        var l = window.Ya[e];
                        t = new l(
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var o = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? a(Object(o), !0).forEach(function (t) {
                                    i(e, t, o[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(o)
                                  )
                                : a(Object(o)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(o, t)
                                    );
                                  });
                            }
                            return e;
                          })({ id: o._id }, s[0])
                        );
                      } else {
                        var p;
                        (p = t)[r].apply(p, s);
                      }
                    });
                },
              },
              {
                key: "injectYm",
                value: function () {
                  (window.ym = function () {
                    for (
                      var e = arguments.length, t = new Array(e), o = 0;
                      o < e;
                      o++
                    )
                      t[o] = arguments[o];
                    return window.ym.a.push(t);
                  }),
                    (window.ym.a = []),
                    (this.ym = window.ym.bind(null, this._id));
                },
              },
              {
                key: "setYmMethodForMetrika2",
                value: function () {
                  this.traceMethod("n"),
                    _()
                      ? u()
                        ? (this.traceMethod("o"),
                          (this.ym = window.ym.bind(null, this._id)))
                        : (this.traceMethod("p"), this.stubYm("Metrika2"))
                      : (this.traceMethod("q"), this.injectYm());
                },
              },
              {
                key: "injectMetrikaScript",
                value: function () {
                  var e = this;
                  this.setYmMethodForMetrika2(), this.traceMethod("r");
                  var t = (0, r.injectJs)(
                    "https://mc.yandex.ru/metrika/tag.js"
                  );
                  this.pushCallback(function () {
                    e.traceMethod("s"),
                      e.initYm(),
                      t && t.parentNode.removeChild(t);
                  });
                },
              },
              {
                key: "waitMetrikaLoading",
                value: function () {
                  var e = this;
                  this.traceMethod("j");
                  var t = null,
                    o = null,
                    r = function () {
                      if ((e.traceMethod("k"), p()))
                        return (
                          e.traceMethod("l"),
                          clearInterval(t),
                          clearTimeout(o),
                          e.initYm(),
                          !0
                        );
                    };
                  (t = setInterval(r, 45)),
                    (o = setTimeout(function () {
                      r() ||
                        (e.traceMethod("m"),
                        clearInterval(t),
                        e.injectMetrikaScript());
                    }, 400));
                },
              },
              {
                key: "tagJsLoadingStrategy",
                value: function () {
                  this.setYmMethodForMetrika2(), this.waitMetrikaLoading();
                },
              },
              {
                key: "watchJsLoadingStrategy",
                value: function () {
                  this.stubYm("Metrika"), this.waitMetrikaLoading();
                },
              },
              {
                key: "hasMetrikaStrategy",
                value: function () {
                  switch (!0) {
                    case window.Ya.Metrika && !window.Ya.Metrika2:
                      this.traceMethod("e"), this.stubYm("Metrika");
                      break;
                    case _() && u():
                      this.traceMethod("f"),
                        (this.ym = window.ym.bind(null, this._id));
                      break;
                    default:
                      this.traceMethod("g"), this.stubYm("Metrika2");
                  }
                  this.initYm();
                },
              },
              {
                key: "init",
                value: function () {
                  if (p())
                    return this.traceMethod("a"), this.hasMetrikaStrategy();
                  var e = Array.prototype.slice.call(
                    document.getElementsByTagName("script")
                  );
                  return l("watch", e)
                    ? (this.traceMethod("b"), this.watchJsLoadingStrategy())
                    : l("tag", e)
                    ? (this.traceMethod("c"), this.tagJsLoadingStrategy())
                    : (this.traceMethod("d"), void this.injectMetrikaScript());
                },
              },
              {
                key: "initYm",
                value: function () {
                  this.traceMethod("t"),
                    this.ym("init", {
                      trackLinks: !0,
                      accurateTrackBounce: !0,
                      params: {
                        shareVersion: 2,
                        strategy: this.strategy.value,
                      },
                      triggerEvent: !0,
                    });
                },
              },
            ]),
            o && s(t.prototype, o),
            n && s(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
        t["default"] = h;
      },
      2778: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Storage = void 0),
          (t.applyWhitelist = y),
          (t.createSchema = u),
          (t["default"] = function (e, t, o) {
            var r =
                arguments.length > 3 && arguments[3] !== undefined
                  ? arguments[3]
                  : {},
              n = u(t, e),
              a = y(d(o), n),
              i = y(r, n);
            return new _(n, a, i);
          }),
          (t.fromDataset = d);
        var r = i(o(4912)),
          n = i(o(643)),
          a = i(o(4427));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            s(e)
          );
        }
        function c(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != o) {
                var r,
                  n,
                  a,
                  i,
                  s = [],
                  c = !0,
                  l = !1;
                try {
                  if (((a = (o = o.call(e)).next), 0 === t)) {
                    if (Object(o) !== o) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (r = a.call(o)).done) &&
                      (s.push(r.value), s.length !== t);
                      c = !0
                    );
                } catch (e) {
                  (l = !0), (n = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != o["return"] &&
                      ((i = o["return"]()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw n;
                  }
                }
                return s;
              }
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return l(e, t);
              var o = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === o && e.constructor && (o = e.constructor.name);
              if ("Map" === o || "Set" === o) return Array.from(e);
              if (
                "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              )
                return l(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
          return r;
        }
        function p(e, t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                e,
                ((n = r.key),
                (a = void 0),
                (a = (function (e, t) {
                  if ("object" !== s(e) || null === e) return e;
                  var o = e[Symbol.toPrimitive];
                  if (o !== undefined) {
                    var r = o.call(e, t || "default");
                    if ("object" !== s(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === t ? String : Number)(e);
                })(n, "string")),
                "symbol" === s(a) ? a : String(a)),
                r
              );
          }
          var n, a;
        }
        var _ = (t.Storage = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++)
              o[n] = arguments[n];
            this._options = r["default"].apply(void 0, [!0, {}].concat(o));
          }
          var t, o, a;
          return (
            (t = e),
            (o = [
              {
                key: "merge",
                value: function (e) {
                  (0, r["default"])(!0, this._options, e);
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if (t && e.match(/^content\./)) {
                    var o = e.replace(
                        /^content\./,
                        "contentByService.".concat(t, ".")
                      ),
                      r = (0, n["default"])(this._options, o);
                    if (r !== undefined) return r;
                  }
                  return (0, n["default"])(this._options, e);
                },
              },
            ]) && p(t.prototype, o),
            a && p(t, a),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })());
        function u(e, t) {
          var o = (0, r["default"])(!0, {}, e, { contentByService: {} });
          return (
            Object.keys(t).forEach(function (e) {
              var r = t[e];
              Object.keys(r).forEach(function (t) {
                var n = "contentByService.".concat(e, ".").concat(t),
                  i = r[t];
                (0, a["default"])(o, n, i);
              });
            }),
            o
          );
        }
        var h = {
          _defaults: { group: "content", type: "string" },
          bare: { group: "theme", type: "boolean" },
          curtain: { group: "theme", type: "boolean" },
          forceCurtain: { group: "theme", type: "boolean" },
          copy: { group: "theme", type: "string" },
          lang: { group: "theme", type: "string" },
          limit: { group: "theme", type: "string" },
          nonce: { group: "theme", type: "string" },
          moreButtonType: { group: "theme", type: "string" },
          popupPosition: { group: "theme", type: "string" },
          popupDirection: { group: "theme", type: "string" },
          colorScheme: { group: "theme", type: "string" },
          shape: { group: "theme", type: "string" },
          services: { group: "theme", type: "string" },
          messengerContacts: { group: "theme", type: "boolean" },
          size: { group: "theme", type: "string" },
          direction: { group: "theme", type: "string" },
          useLinks: { group: "theme", type: "boolean" },
        };
        function d(e) {
          var t = {};
          return (
            Object.keys(e).forEach(function (o) {
              var r,
                n = c(o.split(":"), 2),
                i = n[0],
                s = n[1],
                l = h[i] || h._defaults,
                p = l.group,
                _ = (function (e, t) {
                  if ("boolean" === e) return t !== undefined;
                  return t;
                })(l.type, e[o]);
              if (s) {
                if ("content" !== p) return;
                r = "contentByService.".concat(s, ".").concat(i);
              } else r = "".concat(p, ".").concat(i);
              (0, a["default"])(t, r, _);
            }),
            t
          );
        }
        function y(e, t) {
          var o = {};
          return (
            Object.keys(e).forEach(function (r) {
              var i = e[r];
              if ("asPopup" === r) return (0, a["default"])(o, r, Boolean(i));
              if ("object" === s(i) && null !== i)
                if ("contentByService" === r) {
                  var c = i;
                  Object.keys(c).forEach(function (e) {
                    var r = c[e];
                    "object" === s(i) &&
                      null !== i &&
                      Object.keys(r).forEach(function (i) {
                        var s = r[i],
                          c = "contentByService.".concat(e, ".").concat(i);
                        ((0, n["default"])(t, "content.".concat(i)) ===
                          undefined &&
                          (0, n["default"])(
                            t,
                            "contentByService.".concat(e, ".").concat(i)
                          ) === undefined) ||
                          (0, a["default"])(o, c, s);
                      });
                  });
                } else {
                  var l = i;
                  Object.keys(l).forEach(function (e) {
                    var i = l[e],
                      s = "".concat(r, ".").concat(e);
                    (0, n["default"])(t, "".concat(r, ".").concat(e)) !==
                      undefined && (0, a["default"])(o, s, i);
                  });
                }
            }),
            o
          );
        }
      },
      1072: function () {},
      2245: function (e, t) {
        "use strict";
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
          return r;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.open = function (e, t, r) {
            var n = "".concat(e).concat(Date.now()),
              a =
                ((_ = r),
                (u = 2),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(_) ||
                  (function (e, t) {
                    var o =
                      null == e
                        ? null
                        : ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != o) {
                      var r,
                        n,
                        a,
                        i,
                        s = [],
                        c = !0,
                        l = !1;
                      try {
                        if (((a = (o = o.call(e)).next), 0 === t)) {
                          if (Object(o) !== o) return;
                          c = !1;
                        } else
                          for (
                            ;
                            !(c = (r = a.call(o)).done) &&
                            (s.push(r.value), s.length !== t);
                            c = !0
                          );
                      } catch (e) {
                        (l = !0), (n = e);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != o["return"] &&
                            ((i = o["return"]()), Object(i) !== i)
                          )
                            return;
                        } finally {
                          if (l) throw n;
                        }
                      }
                      return s;
                    }
                  })(_, u) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return o(e, t);
                      var r = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? o(e, t)
                          : void 0
                      );
                    }
                  })(_, u) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              i = a[0],
              s = a[1],
              c = {
                scrollbars: 1,
                resizable: 1,
                menubar: 0,
                toolbar: 0,
                status: 0,
                left: (screen.width - i) / 2,
                top: (screen.height - s) / 2,
                width: i,
                height: s,
              },
              l = Object.keys(c)
                .map(function (e) {
                  return "".concat(e, "=").concat(c[e]);
                })
                .join(","),
              p = window.open(t, n, l);
            var _, u;
            p && p.focus();
          });
      },
      1660: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prepareServicesList = function (e, t) {
            var n = t.limit;
            if (t.needExtendMessenger && n !== undefined) {
              e = e.slice(0);
              var a = r(e, function (e) {
                return e.toLowerCase() === o;
              });
              a !== undefined && e.splice(a, 1), e.splice(n, 0, o);
            }
            return e;
          });
        var o = "messenger",
          r = function (e, t) {
            return e
              .map(function (e, t) {
                return { item: e, i: t };
              })
              .filter(function (e) {
                var o = e.item;
                return t(o);
              })
              .map(function (e) {
                return e.i;
              })[0];
          };
      },
      1186: function (e, t) {
        "use strict";
        function o(e) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            o(e)
          );
        }
        function r(e) {
          return Object.keys(e)
            .map(function (t) {
              return ""
                .concat(encodeURIComponent(t), "=")
                .concat(encodeURIComponent(e[t]));
            })
            .join("&");
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.buildUrl = function (e, t) {
            var n =
                r(
                  (function (e, t) {
                    return Object.keys(e).reduce(function (r, n) {
                      var a = e[n];
                      if ("object" === o(a)) {
                        var i = a.options
                          .reduce(function (e, o) {
                            var r = t[o];
                            return r && e.push(r), e;
                          }, [])
                          .join(a.separator);
                        return (r[n] = i), r;
                      }
                      var s = t[a];
                      return s && (r[n] = s), r;
                    }, {});
                  })(e.params, t)
                ) + "&utm_source=share2",
              a = -1 === e.baseUrl.indexOf("?") ? "?" : "&";
            return ""
              .concat(e.baseUrl)
              .concat(a)
              .concat(n)
              .concat(e.restUrl || "");
          }),
          (t.serializeParams = r);
      },
      3788: function (e, t, o) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t["default"] = void 0);
        var n = m(o(4141)),
          a = o(9289),
          i = o(331),
          s = o(1186),
          c = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != r(e) && "function" != typeof e))
              return { default: e };
            var o = y(t);
            if (o && o.has(e)) return o.get(e);
            var n = { __proto__: null },
              a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
              if (
                "default" !== i &&
                Object.prototype.hasOwnProperty.call(e, i)
              ) {
                var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
                s && (s.get || s.set)
                  ? Object.defineProperty(n, i, s)
                  : (n[i] = e[i]);
              }
            return (n["default"] = e), o && o.set(e, n), n;
          })(o(2245)),
          l = m(o(7023)),
          p = m(o(3666)),
          _ = m(o(2778)),
          u = o(1660),
          h = o(4955),
          d = m(o(5302));
        function y(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            o = new WeakMap();
          return (y = function (e) {
            return e ? o : t;
          })(e);
        }
        function m(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function f(e, t) {
          for (var o = 0; o < t.length; o++) {
            var n = t[o];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(
                e,
                ((a = n.key),
                (i = void 0),
                (i = (function (e, t) {
                  if ("object" !== r(e) || null === e) return e;
                  var o = e[Symbol.toPrimitive];
                  if (o !== undefined) {
                    var n = o.call(e, t || "default");
                    if ("object" !== r(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === t ? String : Number)(e);
                })(a, "string")),
                "symbol" === r(i) ? i : String(i)),
                n
              );
          }
          var a, i;
        }
        function g(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var o =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != o) {
                var r,
                  n,
                  a,
                  i,
                  s = [],
                  c = !0,
                  l = !1;
                try {
                  if (((a = (o = o.call(e)).next), 0 === t)) {
                    if (Object(o) !== o) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (r = a.call(o)).done) &&
                      (s.push(r.value), s.length !== t);
                      c = !0
                    );
                } catch (e) {
                  (l = !0), (n = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != o["return"] &&
                      ((i = o["return"]()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (l) throw n;
                  }
                }
                return s;
              }
            })(e, t) ||
            v(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function v(e, t) {
          if (e) {
            if ("string" == typeof e) return b(e, t);
            var o = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === o && e.constructor && (o = e.constructor.name),
              "Map" === o || "Set" === o
                ? Array.from(e)
                : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? b(e, t)
                : void 0
            );
          }
        }
        function b(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
          return r;
        }
        var k = [
            "ya-share2__popup_direction_top",
            "ya-share2__popup_direction_bottom",
          ],
          w = [
            "ya-share2__popup_x-direction_left",
            "ya-share2__popup_x-direction_right",
          ];
        var x = function (e, t) {
            var o = g(e.split("#"), 2),
              r = o[0],
              n = o[1];
            return "".concat(r, "?").concat(t, "#").concat(n);
          },
          z = !1,
          M = [],
          S = !1;
        function j(e) {
          z ? e() : M.push(e);
        }
        t["default"] = (function () {
          function e(t, o) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var r = o.plugins,
              n = o.defaults,
              a = o.options,
              i = o.metrika,
              s = (function (e) {
                return Object.keys(e).reduce(function (t, o) {
                  var r = e[o];
                  return r.contentOptions && (t[o] = r.contentOptions), t;
                }, {});
              })(r),
              c = "ya-share2." + Math.random();
            (this._params = o),
              (this._domNode = t),
              (this._namespace = c),
              (this._plugins = r),
              (this._options = (0, _["default"])(s, n, t.dataset, a));
            var l = this._options.get("theme.lang");
            (this._i18n = this._options.get("i18n.".concat(l))),
              this._setAsPopupFlag(),
              this._setMobileFlag(),
              this._setCopyFlag(),
              this._initLayout(r, c),
              this._bindEvents(i),
              t.classList.add("ya-share2"),
              t.classList.add("ya-share2_inited"),
              this._options.get("hooks.onready").call(this);
          }
          var t, o, r;
          return (
            (t = e),
            (o = [
              {
                key: "_setAsPopupFlag",
                value: function () {
                  this.asPopup = this._options.get("asPopup");
                },
              },
              {
                key: "_setMobileFlag",
                value: function () {
                  var e = this._options.get("theme.forceCurtain"),
                    t = this._options.get("theme.curtain");
                  this.hasCurtain = Boolean(e || (t && (0, d["default"])()));
                },
              },
              {
                key: "_setCopyFlag",
                value: function () {
                  this.canCopy = Boolean(navigator.clipboard);
                },
              },
              {
                key: "_isDestroyed",
                value: function () {
                  return null === this._domNode;
                },
              },
              {
                key: "_updateDomLinks",
                value: function () {
                  (this._morePopup = l["default"].findInside(this._domNode, {
                    block: "ya-share2",
                    elem: "popup",
                  })[0]),
                    (this._closingCrosses = [].slice.call(
                      l["default"].findInside(this._domNode, {
                        block: "ya-share2",
                        elem: "icon",
                        modName: "closing-cross",
                      })
                    )),
                    (this._copiedTooltip = l["default"].findInside(
                      this._domNode,
                      { block: "ya-share2", elem: "copied-tooltip" }
                    )[0]),
                    this._morePopup &&
                      "outer" === this._options.get("theme.popupPosition") &&
                      !this.asPopup &&
                      this._createOutsidePopup();
                },
              },
              {
                key: "_destroyOutsidePopup",
                value: function () {
                  document.body.removeChild(this._morePopupContainer);
                },
              },
              {
                key: "_createOutsidePopup",
                value: function () {
                  this._morePopupContainer && this._destroyOutsidePopup();
                  var e = l["default"].findInside(this._domNode, {
                    block: "ya-share2",
                    elem: "container",
                  })[0];
                  (this._morePopupContainer = document.createElement("div")),
                    (this._morePopupContainer.style.position = "absolute"),
                    (this._morePopupContainer.style["pointer-events"] = "none"),
                    (this._morePopup.style["pointer-events"] = "all"),
                    (this._morePopupContainer.className = e.className);
                  var t = this._options.get("theme.limit"),
                    o = this._options.get("theme.moreButtonType");
                  0 === parseInt(t, 10) &&
                    Boolean(o) &&
                    this._morePopupContainer.classList.add(
                      n["default"].stringify({
                        block: "ya-share2",
                        elem: "container",
                        modName: "alone",
                      })
                    ),
                    this._morePopupContainer.appendChild(this._morePopup),
                    document.body.appendChild(this._morePopupContainer);
                },
              },
              {
                key: "updateContent",
                value: function (e) {
                  if (this._isDestroyed())
                    throw new Error("Could not operate on destroyed block.");
                  this._options.merge({ content: e }),
                    this._initLayout(this._params.plugins, this._namespace);
                },
              },
              {
                key: "updateContentByService",
                value: function (e) {
                  if (this._isDestroyed())
                    throw new Error("Could not operate on destroyed block.");
                  this._options.merge({ contentByService: e }),
                    this._initLayout(this._params.plugins, this._namespace);
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._domNode.classList.remove("ya-share2_inited"),
                    (this._domNode.innerHTML = ""),
                    (this._domNode = null),
                    this._morePopupContainer &&
                      (p["default"].remove(this._morePopupContainer),
                      (this._morePopupContainer = null)),
                    document.body.removeEventListener("click", this._onClick),
                    document.body.removeEventListener(
                      "touchstart",
                      this._onTouchStart
                    ),
                    document.body.removeEventListener(
                      "touchmove",
                      this._onTouchMove
                    ),
                    document.body.removeEventListener(
                      "touchend",
                      this._onTouchEnd,
                      { passive: !1 }
                    ),
                    document.body.removeEventListener(
                      "keydown",
                      this._onKeydown
                    );
                },
              },
              {
                key: "_getContentForService",
                value: function (e) {
                  var t = this,
                    o = function (o) {
                      return t._options.get(o, e);
                    },
                    r = {
                      title: o("content.title"),
                      description: o("content.description"),
                      image: o("content.image"),
                      url: o("content.url"),
                    },
                    n = this._plugins[e].contentOptions || {};
                  return (
                    Object.keys(n).forEach(function (e) {
                      r[e] = o("content.".concat(e));
                    }),
                    r
                  );
                },
              },
              {
                key: "_setMessengerContacts",
                value: function (e) {
                  if (0 !== e.length) {
                    this.hasCurtain || (e = e.slice(0, 5));
                    var t = (0, s.serializeParams)({
                      text: [
                        this._options.get("content.title"),
                        this._options.get("content.url"),
                      ].join("\n"),
                    });
                    e = e.map(function (e) {
                      var o = e.iconUrl,
                        r = e.locationUrl,
                        n = e.title;
                      return {
                        title: n,
                        name: "messenger".concat(n.split(/\s/).join("")),
                        iconUrl: o,
                        location: x(r, t),
                      };
                    });
                    var o = l["default"].findInside(this._domNode, {
                      block: "ya-share2",
                      elem: "messenger-contacts",
                    })[0];
                    o &&
                      this._templates.update(
                        o,
                        "messenger-contacts-list",
                        e,
                        i.ConstructorName.messengerContactsList
                      );
                    var r,
                      n = (function (e, t) {
                        var o =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (!o) {
                          if (
                            Array.isArray(e) ||
                            (o = v(e)) ||
                            (t && e && "number" == typeof e.length)
                          ) {
                            o && (e = o);
                            var r = 0,
                              n = function () {};
                            return {
                              s: n,
                              n: function () {
                                return r >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[r++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: n,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var a,
                          i = !0,
                          s = !1;
                        return {
                          s: function () {
                            o = o.call(e);
                          },
                          n: function () {
                            var e = o.next();
                            return (i = e.done), e;
                          },
                          e: function (e) {
                            (s = !0), (a = e);
                          },
                          f: function () {
                            try {
                              i || null == o["return"] || o["return"]();
                            } finally {
                              if (s) throw a;
                            }
                          },
                        };
                      })(
                        l["default"].findInside(this._domNode, {
                          block: "ya-share2",
                          elem: "icon",
                          modName: "messenger-contact",
                        })
                      );
                    try {
                      for (n.s(); !(r = n.n()).done; ) {
                        var a = r.value,
                          c = a.getAttribute("data-icon-url");
                        a.style = 'background-image: url("'.concat(c, '");');
                      }
                    } catch (_) {
                      n.e(_);
                    } finally {
                      n.f();
                    }
                  } else {
                    var p = l["default"].findInside(this._domNode, {
                      block: "ya-share2",
                      elem: "popup-body",
                    })[0];
                    p &&
                      this._templates.replaceNode(
                        p,
                        "popup-body",
                        { needExtendMessenger: !1 },
                        i.ConstructorName.mBody
                      );
                  }
                },
              },
              {
                key: "_getCustomContent",
                value: function () {
                  return {
                    title: this._options.get("content.title"),
                    description: this._options.get("content.description"),
                    image: this._options.get("content.image"),
                  };
                },
              },
              {
                key: "_initLayout",
                value: function (e, t) {
                  var o = this,
                    r = this._options.get("theme.services").split(","),
                    n = this._options.get("theme.limit"),
                    a = Boolean(
                      this._options.get("theme.messengerContacts") &&
                        !this.isBare() &&
                        r.length > n &&
                        window.fetch
                    );
                  a &&
                    (0, h.getMessengerContacts)(
                      this._setMessengerContacts.bind(this),
                      function () {
                        return l["default"].findInside(o._domNode, {
                          block: "ya-share2",
                          elem: "messenger-frame",
                        })[0];
                      }
                    );
                  var c = (0, u.prepareServicesList)(r, {
                    limit: n,
                    needExtendMessenger: a,
                  });
                  (this._services = c
                    .filter(function (t) {
                      return e[t];
                    })
                    .map(function (t) {
                      var r = function (e) {
                          return o._options.get(e, t);
                        },
                        n = o._getContentForService(t),
                        a = e[t].config.shareUrl,
                        i = a[r("content.template")] || a["default"],
                        c = (0, s.buildUrl)(i, n);
                      return {
                        name: t,
                        title: e[t].i18n[r("theme.lang")],
                        location: c,
                        linkAttrs: e[t].linkAttrs,
                        popupDimensions: e[t].popupDimensions,
                      };
                    })),
                    (this._templates = (0, i.initTemplates)(
                      this._i18n,
                      this.hasCurtain
                    )),
                    this._templates.update(this._domNode, "container", {
                      url: this._options.get("content.url"),
                      customContent: this._getCustomContent(),
                      theme: this._options.get("theme"),
                      services: this._services,
                      namespace: t,
                      flags: {
                        needExtendMessenger: a,
                        asPopup: this.asPopup,
                        canCopy: this.canCopy,
                      },
                    }),
                    this._updateDomLinks();
                },
              },
              {
                key: "getNonce",
                value: function () {
                  return this._options.get("theme.nonce");
                },
              },
              {
                key: "_onClick",
                value: function (e) {
                  S || this._onBodyClick(e), (S = !1);
                },
              },
              {
                key: "_onTouchStart",
                value: function () {
                  S = !0;
                },
              },
              {
                key: "_onTouchMove",
                value: function () {
                  S = !1;
                },
              },
              {
                key: "_onTouchEnd",
                value: function (e) {
                  S && this._onBodyClick(e);
                },
              },
              {
                key: "_bindEvents",
                value: function (e) {
                  var t = this;
                  (this._onBodyClick = this._onBodyClick.bind(this, e)),
                    (this._onClick = this._onClick.bind(this)),
                    document.body.addEventListener("click", this._onClick),
                    document.body.addEventListener(
                      "touchstart",
                      this._onTouchStart
                    ),
                    document.body.addEventListener(
                      "touchmove",
                      this._onTouchMove
                    ),
                    (this._onTouchEnd = this._onTouchEnd.bind(this)),
                    document.body.addEventListener(
                      "touchend",
                      this._onTouchEnd,
                      { passive: !1 }
                    ),
                    (this._onKeydown = this._onKeydown.bind(this)),
                    document.body.addEventListener("keydown", this._onKeydown),
                    document.addEventListener(
                      "yacounter" + e._id + "inited",
                      this._onMetrikaInited
                    ),
                    j(function () {
                      e.ym("params", {
                        services: t._services
                          .map(function (e) {
                            return e.name;
                          })
                          .join(","),
                      });
                    });
                },
              },
              {
                key: "_onKeydown",
                value: function (e) {
                  27 === (e.which || e.keyCode) && this._closePopup(e);
                },
              },
              {
                key: "_onBodyClick",
                value: function (e, t) {
                  var o = p["default"].getTarget(t);
                  if (
                    -1 !== this._closingCrosses.indexOf(o) ||
                    o.classList.contains("ya-share2__popup-overlay")
                  )
                    this._closePopup(t);
                  else if (
                    !Boolean(
                      l["default"].findOutside(o, {
                        block: "ya-share2",
                        elem: "popup-header",
                      })
                    )
                  ) {
                    var r = l["default"].findOutside(o, {
                        block: "ya-share2",
                        elem: "container",
                      }),
                      n = l["default"].findInside(this._domNode, {
                        block: "ya-share2",
                        elem: "container",
                      })[0];
                    if (!r || (r !== n && r !== this._morePopupContainer))
                      this._closePopup(t);
                    else {
                      var a = l["default"].findOutside(o, {
                        block: "ya-share2",
                        elem: "item",
                      });
                      if (a) {
                        var i = Boolean(
                          l["default"].findOutside(o, {
                            block: "ya-share2",
                            elem: "popup-content",
                          })
                        );
                        !l["default"].getMod(a, "more") || i
                          ? l["default"].getMod(a, "copy")
                            ? this._onCopyClick(t)
                            : l["default"].getMod(a, "more") ||
                              ("other" !== l["default"].getMod(a, "service")
                                ? this._onServiceClick(t, a, e)
                                : this._onNavigatorShareClick(t))
                          : this._onMoreClick(t);
                      }
                    }
                  }
                },
              },
              {
                key: "_triggerCopiedTooltip",
                value: function () {
                  this._copiedTooltip.classList.add(
                    "ya-share2__copied-tooltip_shown"
                  );
                  var e = this._copiedTooltip;
                  setTimeout(function () {
                    e.classList.remove("ya-share2__copied-tooltip_shown");
                  }, 2e3);
                },
              },
              {
                key: "_onCopyClick",
                value: function (e) {
                  var t = this;
                  if (this.canCopy) {
                    var o = this._options.get("content.url");
                    navigator.clipboard
                      .writeText(o)
                      .then(function () {
                        t.hasCurtain && t._triggerCopiedTooltip(),
                          t._closePopup(e);
                      })
                      ["catch"](function () {
                        t._closePopup(e);
                      });
                  } else this._closePopup(e);
                },
              },
              {
                key: "_onNavigatorShareClick",
                value: function (e) {
                  var t = this,
                    o = {
                      url: this._options.get("content.url"),
                      text: this._options.get("content.description"),
                      title: this._options.get("content.title"),
                    };
                  e.stopPropagation(),
                    e.preventDefault(),
                    navigator
                      .share(o)
                      .then(function () {
                        t._closePopup();
                      })
                      ["catch"](function () {
                        t._closePopup();
                      });
                },
              },
              {
                key: "_findPopupClass",
                value: function (e) {
                  var t = this;
                  return e.filter(function (e) {
                    return t._morePopup.classList.contains(e);
                  })[0];
                },
              },
              {
                key: "_calcPopupHorizotalDirection",
                value: function (e) {
                  var t = this._findPopupClass(w);
                  if (t) this._morePopup.classList.toggle(t);
                  else {
                    t =
                      "horizontal" === this._options.get("theme.direction")
                        ? w[0]
                        : w[1];
                    var o = e.left,
                      r = e.width,
                      n = o + r,
                      a = l["default"]
                        .findInside(this._domNode, {
                          block: "ya-share2",
                          elem: "item",
                          modName: "more",
                        })[0]
                        .getBoundingClientRect().width;
                    t === w[0] && o < 0
                      ? n - a + r < window.innerWidth && (t = w[1])
                      : t === w[1] &&
                        n > window.innerWidth &&
                        o + a - r > 0 &&
                        (t = w[0]),
                      this._morePopup.classList.toggle(t);
                  }
                },
              },
              {
                key: "_calcPopupVerticalDirection",
                value: function (e) {
                  var t = this._findPopupClass(k);
                  if (t) this._morePopup.classList.toggle(t);
                  else {
                    var o = e.top,
                      r =
                        e.height +
                        ("m" === this._options.get("theme.size") ? 28 : 21);
                    o - r > 0 && o + r > window.innerHeight
                      ? this._morePopup.classList.toggle(k[0])
                      : this._morePopup.classList.toggle(k[1]);
                  }
                },
              },
              {
                key: "_handleAutoDirection",
                value: function () {
                  var e = this._morePopup.getBoundingClientRect();
                  this._calcPopupHorizotalDirection(e),
                    "auto" === this._options.get("theme.popupDirection") &&
                      this._calcPopupVerticalDirection(e);
                },
              },
              {
                key: "_onMoreClick",
                value: function (e) {
                  if (this._morePopupContainer) {
                    var t = l["default"].findInside(this._domNode, {
                        block: "ya-share2",
                        elem: "item",
                        modName: "more",
                      })[0],
                      o = p["default"].getRectRelativeToDocument(t),
                      r = o.top,
                      n = o.left,
                      a = o.width,
                      i = o.height;
                    (this._morePopupContainer.style.top = "".concat(r, "px")),
                      (this._morePopupContainer.style.left = "".concat(
                        n,
                        "px"
                      )),
                      (this._morePopupContainer.style.width = "".concat(
                        a,
                        "px"
                      )),
                      (this._morePopupContainer.style.height = "".concat(
                        i,
                        "px"
                      ));
                  }
                  this._openPopup(), e.preventDefault(), e.stopPropagation();
                },
              },
              {
                key: "_onServiceClick",
                value: function (e, t, o) {
                  var r = this,
                    n = this._morePopup;
                  setTimeout(function () {
                    r._closePopup(e, n);
                  }, 50);
                  var a = l["default"].getMod(t, "service");
                  if (a) {
                    var i = this._services.filter(function (e) {
                      return e.name === a;
                    })[0];
                    if (
                      i &&
                      (this._options.get("hooks.onshare").call(this, i.name),
                      !this._isDestroyed())
                    ) {
                      if (
                        !this._options.get("theme.useLinks") &&
                        i.popupDimensions
                      ) {
                        var s = l["default"].findInside(t, {
                          block: "ya-share2",
                          elem: "link",
                        })[0];
                        e.preventDefault(),
                          e.stopPropagation(),
                          c.open("ya-share2", s.href, i.popupDimensions);
                      }
                      var p = l["default"].findInside(this._domNode, {
                          block: "ya-share2",
                          elem: "item",
                        }),
                        _ = [].indexOf.call(p, t);
                      j(function () {
                        o.ym("reachGoal", "BUTTON_CLICK", {
                          serviceName: a,
                          buttonIndex: _,
                        });
                      });
                    }
                  }
                },
              },
              {
                key: "_onMetrikaInited",
                value: function () {
                  (z = !0),
                    M.forEach(function (e) {
                      return e();
                    }),
                    (M = []);
                },
              },
              {
                key: "isBare",
                value: function () {
                  return Boolean(this._options.get("theme.bare"));
                },
              },
              {
                key: "_openPopup",
                value: function () {
                  this._morePopup.classList.toggle("ya-share2__popup_visible"),
                    this._handleAutoDirection(),
                    this.hasCurtain &&
                      (this.popupBody ||
                        (this.popupBody = l["default"].findInside(
                          this._morePopup,
                          { block: "ya-share2", elem: "popup-body" }
                        )[0]),
                      (0, a.disableBodyScroll)(this.popupBody));
                },
              },
              {
                key: "_closePopup",
                value: function (e, t) {
                  if (
                    (t = t || this._morePopup) &&
                    t.classList.contains("ya-share2__popup_visible")
                  ) {
                    e instanceof Event &&
                      (e.stopPropagation(), e.preventDefault()),
                      this.popupBody && (0, a.enableBodyScroll)(this.popupBody),
                      t.classList.remove("ya-share2__popup_visible");
                    for (var o = 0, r = w; o < r.length; o++) {
                      var n = r[o];
                      t.classList.remove(n);
                    }
                    if ("auto" === this._options.get("theme.popupDirection"))
                      for (var i = 0, s = k; i < s.length; i++) {
                        var c = s[i];
                        t.classList.remove(c);
                      }
                  }
                  this._options.get("hooks.onClosePopup").call(this);
                },
              },
            ]) && f(t.prototype, o),
            r && f(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
      },
      5679: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.commonTemplates = function (e, t) {
            var o = e.elem,
              r = e.mElem,
              s = e.popupTemplate,
              c = t.hasCurtain,
              _ = t.i18n;
            return {
              container: function (e) {
                var t = e.url,
                  n = e.services,
                  a = e.customContent,
                  i = void 0 === a ? {} : a,
                  l = e.theme,
                  p = l.direction,
                  _ = l.limit,
                  u = l.copy,
                  h = l.popupDirection,
                  d = l.size,
                  y = l.colorScheme,
                  m = l.shape,
                  f = l.moreButtonType,
                  g = e.flags,
                  v = g.needExtendMessenger,
                  b = g.asPopup,
                  k = g.canCopy,
                  w = [
                    b
                      ? s("popup", {
                          services: n,
                          url: t,
                          copy: k && u,
                          popupDirection: h,
                          listDirection: p,
                          customContent: i,
                          needExtendMessenger: v,
                          hasCurtain: c,
                        }).content
                      : o("list", {
                          direction: p,
                          services: n,
                          limit: _,
                          url: t,
                          copy: u,
                          canCopy: k,
                          popupDirection: h,
                          customContent: i,
                          moreButtonType: f,
                          needExtendMessenger: v,
                        }),
                  ];
                return (
                  c && w.push(r("copied-tooltip")),
                  v && w.push(o("messenger-frame")),
                  {
                    mods: {
                      size: d,
                      mobile: c,
                      "color-scheme": y,
                      shape: m,
                      "as-popup": b,
                    },
                    content: w,
                  }
                );
              },
              "messenger-frame": function () {
                return { tag: "iframe" };
              },
              list: function (e) {
                var t = e.services,
                  r = e.limit,
                  n = void 0 === r ? t.length : r,
                  a = e.url,
                  i = void 0 === a ? "" : a,
                  s = e.copy,
                  c = e.canCopy,
                  l = e.popupDirection,
                  p = e.direction,
                  _ = e.customContent,
                  u = e.moreButtonType,
                  h = e.needExtendMessenger;
                !1 === n && (n = t.length);
                var d = t.slice(0, n),
                  y = t.slice(n);
                return {
                  tag: "ul",
                  mods: { direction: p },
                  content: [
                    d.map(function (e) {
                      return o("item", e);
                    }),
                    0 === y.length && "extraItem" === s && o("item_copy", i),
                    y.length > 0 &&
                      o("item_more", {
                        services: y,
                        url: i,
                        copy: c && s,
                        popupDirection: l,
                        listDirection: p,
                        customContent: _,
                        moreButtonType: "0" === String(n) && u,
                        needExtendMessenger: n !== t.length && h,
                      }),
                  ],
                };
              },
              item: function () {
                var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};
                return {
                  tag: "li",
                  mods: { service: e.name },
                  content: o("link", e),
                };
              },
              link: function () {
                var e =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : {},
                  t = e.location,
                  r = e.title,
                  n = e.mods,
                  i = e.linkAttrs,
                  s = e.iconUrl;
                return {
                  tag: "a",
                  attrs: l(
                    {
                      href: t || "javascript:void(0);",
                      rel: t && (0, a.getRel)(t),
                      target: t && "_blank",
                      title: r,
                    },
                    i
                  ),
                  mods: n,
                  content: [o("badge", s), o("title", r)],
                };
              },
              badge: function (e) {
                return { tag: "span", content: [o("icon", e)] };
              },
              icon: function (e) {
                return l(
                  { tag: "span", mods: { "messenger-contact": Boolean(e) } },
                  e && { attrs: { "data-icon-url": e } }
                );
              },
              title: function (e) {
                return { tag: "span", content: e };
              },
              item_more: function (e) {
                var t = e.moreButtonType,
                  r = (function (e, t) {
                    if (null == e) return {};
                    var o,
                      r,
                      n = (function (e, t) {
                        if (null == e) return {};
                        var o,
                          r,
                          n = {},
                          a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                          (o = a[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
                        return n;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < a.length; r++)
                        (o = a[r]),
                          t.indexOf(o) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, o) &&
                              (n[o] = e[o]));
                    }
                    return n;
                  })(e, i);
                return (0, n["default"])(o("item"), {
                  mods: { more: !0, "has-pretty-view": Boolean(t) },
                  content: [o("link_more", t), s("popup", r)],
                });
              },
              link_more: function (e) {
                return (0, n["default"])(o("link"), {
                  mods: { more: !0, "more-button-type": e },
                  content: [
                    o("badge_more"),
                    "long" === e && o("title", _.shareButton),
                  ],
                });
              },
              badge_more: function () {
                return (0, n["default"])(o("badge"), {
                  mods: { more: !0 },
                  content: o("icon_more"),
                });
              },
              icon_more: function () {
                return (0, n["default"])(o("icon"), { mods: { more: !0 } });
              },
              item_copy: function (e) {
                return (0, n["default"])(o("item"), {
                  mods: { copy: !0 },
                  content: [o("link_copy"), o("input_copy", e)],
                });
              },
              link_copy: function () {
                return (0, n["default"])(o("link", { title: _.copyLink }), {
                  mods: { copy: !0 },
                  content: [o("badge_copy"), o("title", _.copyLink)],
                });
              },
              badge_copy: function () {
                return (0, n["default"])(o("badge"), {
                  mods: { copy: !0 },
                  content: o("icon_copy"),
                });
              },
              icon_copy: function () {
                return (0, n["default"])(o("icon"), { mods: { copy: !0 } });
              },
              input_copy: function (e) {
                return { tag: "input", attrs: { value: e } };
              },
              "messenger-contacts": function () {
                return { mods: p({}, c ? "mobile" : "desktop", !0) };
              },
            };
          });
        var r,
          n = (r = o(4912)) && r.__esModule ? r : { default: r },
          a = o(6384),
          i = ["moreButtonType"];
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            s(e)
          );
        }
        function c(e, t) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              o.push.apply(o, r);
          }
          return o;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(o), !0).forEach(function (t) {
                  p(e, t, o[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : c(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
          }
          return e;
        }
        function p(e, t, o) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== s(e) || null === e) return e;
                var o = e[Symbol.toPrimitive];
                if (o !== undefined) {
                  var r = o.call(e, t || "default");
                  if ("object" !== s(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === s(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = o),
            e
          );
        }
      },
      7599: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.mobileContactsTemplates = function (e) {
            var t = e.mElem;
            return {
              "popup-tile-wrapper": function (e) {
                return { content: t("popup-tile", e) };
              },
            };
          });
      },
      6637: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.mobileTemplates = function (e, t) {
            var o = e.elem,
              i = e.mElem,
              s = e.mBody,
              c = t.i18n;
            return {
              "popup-overlay": function () {
                return {};
              },
              "popup-content": function (e) {
                var t = e.services,
                  o = e.url,
                  r = e.customContent,
                  n = e.copy,
                  a = e.needExtendMessenger;
                return {
                  content: [
                    i("popup-header", { customContent: r }),
                    s("popup-body", {
                      services: t,
                      url: o,
                      copy: n,
                      needExtendMessenger: a,
                    }),
                  ],
                };
              },
              header: function (e) {
                return { tag: "h2", content: e };
              },
              "popup-header": function (e) {
                var t = e.customContent,
                  n = t.description,
                  s = t.image;
                if (!n) {
                  var c =
                    (0, a.getOgTag)("description") ||
                    (0, a.getOgTag)("title") ||
                    (0, a.getMetaTag)("name", "description");
                  n = c ? c.getAttribute("content") : window.location.href;
                }
                if (!s) {
                  var l =
                    (0, a.getOgTag)("image:secure_url") ||
                    (0, a.getOgTag)("image");
                  s = l && l.getAttribute("content");
                }
                return {
                  content: [
                    s
                      ? i("og-image", s)
                      : (0, r["default"])(o("icon"), {
                          mods: { "og-image-stub": !0 },
                        }),
                    i("popup-description", n),
                    (0, r["default"])(o("icon"), {
                      mods: { "closing-cross": !0 },
                    }),
                  ],
                };
              },
              "og-image": function (e) {
                return {
                  cls: n["default"].stringify(o("icon")),
                  attrs: { style: "background-image: url('".concat(e, "')") },
                };
              },
              "popup-description": function (e) {
                return { content: e };
              },
              "popup-tile": function (e) {
                var t = e.map(function (e) {
                  return (0,
                  r[
                    "default"
                  ])(o("item", e), { content: (0, r["default"])(o("link", e), { content: [i("mobile-popup-badge"), i("mobile-popup-service-title", e.title)] }) });
                });
                return (
                  navigator.share && t.push(i("native-share")),
                  { tag: "ul", content: t }
                );
              },
              "native-share": function () {
                return (0, r["default"])(o("item", { name: "other" }), {
                  content: i("native-share-fake-link"),
                });
              },
              "native-share-fake-link": function () {
                return {
                  content: [
                    (0, r["default"])(i("mobile-popup-badge"), {
                      mods: { "native-share": !0 },
                    }),
                    i("mobile-popup-service-title", c.otherServices),
                  ],
                };
              },
              "mobile-popup-badge": function (e) {
                return { tag: "span", content: [o("icon", e)] };
              },
              "mobile-popup-service-title": function (e) {
                return { content: e };
              },
              "mobile-popup-copy-link": function (e) {
                return {
                  content: (0, r["default"])(o("item", e), {
                    tag: "button",
                    mods: { copy: !0, "copy-link-button": !0 },
                    content: [
                      (0, r["default"])(o("icon"), {
                        mods: { "copy-icon": !0 },
                      }),
                      i("link-title"),
                      o("input_copy", e),
                    ],
                  }),
                };
              },
              "link-title": function () {
                return { tag: "span", content: c.copyLink };
              },
              "copied-tooltip": function () {
                return { content: c.linkCopied };
              },
              "scroll-hider": function (e) {
                return { content: e };
              },
            };
          });
        var r = i(o(4912)),
          n = i(o(4141)),
          a = o(6384);
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      7633: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMessengerContactsListTemplate = function (e, t) {
            var o = e.elem,
              r = e.mElem,
              a = t.hasCurtain,
              i = {};
            i["messenger-contacts-list"] = a
              ? function (e) {
                  return {
                    mods: { mobile: !0 },
                    tag: "ul",
                    content: e.map(function (e) {
                      return (0,
                      n[
                        "default"
                      ])(o("item", e), { content: (0, n["default"])(o("link", e), { content: [r("mobile-popup-badge", e.iconUrl), r("mobile-popup-service-title", e.title)] }) });
                    }),
                  };
                }
              : function (e) {
                  return {
                    mods: { desktop: !0 },
                    tag: "ul",
                    content: e.map(function (e) {
                      return o("item", e);
                    }),
                  };
                };
            return i;
          });
        var r,
          n = (r = o(4912)) && r.__esModule ? r : { default: r };
      },
      1401: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getMobileBody = function (e, t) {
            var o = e.mElem,
              r = e.elem,
              n = e.mContactsElem,
              a = t.i18n,
              i = {},
              s = function (e) {
                var t = e.services,
                  r = e.url,
                  n = e.copy,
                  a = [o("popup-tile", t)];
                return (
                  n && a.push(o("mobile-popup-copy-link", r)), { content: a }
                );
              },
              c = function (e) {
                var t = e.services,
                  i = e.url,
                  s = e.copy,
                  c = [
                    o("header", a.sendToMessenger),
                    o("scroll-hider", r("messenger-contacts")),
                    o("header", a.shareButton),
                    o("scroll-hider", n("popup-tile-wrapper", t)),
                  ];
                return (
                  s && c.push(o("mobile-popup-copy-link", i)), { content: c }
                );
              },
              l = {};
            return (
              (i["popup-body"] = function (e) {
                return (e.needExtendMessenger ? c : s)(Object.assign(l, e));
              }),
              i
            );
          });
      },
      2285: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getPopupTemplate = function (e, t) {
            var o = e.elem,
              r = e.mElem,
              n = t.hasCurtain,
              a = {};
            a.popup = n
              ? function (e) {
                  var t = e.services,
                    o = e.url,
                    n = void 0 === o ? "" : o,
                    a = e.customContent,
                    i = e.copy,
                    s = e.needExtendMessenger;
                  return {
                    mods: { mobile: !0 },
                    content: [
                      r("popup-overlay"),
                      r("popup-content", {
                        services: t,
                        url: n,
                        customContent: a,
                        copy: i,
                        needExtendMessenger: s,
                      }),
                    ],
                  };
                }
              : function (e) {
                  var t = e.services,
                    r = e.url,
                    n = void 0 === r ? "" : r,
                    a = e.copy,
                    i = void 0 === a ? "last" : a,
                    s = e.popupDirection,
                    c = e.listDirection,
                    l = e.needExtendMessenger,
                    p = o("list", { direction: "vertical", services: t });
                  return (
                    "first" === i && l
                      ? p.content[0].splice(1, 0, o("item_copy", n))
                      : "first" === i
                      ? p.content[0].unshift(o("item_copy", n))
                      : "last" === i && p.content[0].push(o("item_copy", n)),
                    {
                      mods: {
                        direction: (s =
                          "top" === s
                            ? "top"
                            : "auto" === s
                            ? "auto"
                            : "bottom"),
                        "list-direction": (c =
                          "vertical" === c ? "vertical" : "horizontal"),
                      },
                      content: [l && o("messenger-contacts"), p],
                    }
                  );
                };
            return a;
          });
      },
      6384: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getRel = t.getOgTag = t.getMetaTag = void 0);
        t.getRel = function (e) {
          var t = ["nofollow"];
          return /^https?:/.test(e) && t.push("noopener"), t.join(" ");
        };
        var o = (t.getMetaTag = function (e, t) {
          return document.querySelector(
            "meta[".concat(e, '="').concat(t, '"]')
          );
        });
        t.getOgTag = function (e) {
          return o("property", "og:".concat(e));
        };
      },
      331: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConstructorName = void 0),
          (t.initTemplates = function (e, t) {
            var o = { hasCurtain: t, i18n: e },
              _ = h(
                h(
                  h(
                    h(
                      h(
                        h({}, d.elem, y(d.elem)),
                        d.messengerContactsList,
                        y(d.messengerContactsList)
                      ),
                      d.popupTemplate,
                      y(d.popupTemplate)
                    ),
                    d.mElem,
                    y(d.mElem)
                  ),
                  d.mBody,
                  y(d.mBody)
                ),
                d.mContactsElem,
                y(d.mContactsElem)
              ),
              u = h(
                h(
                  h(
                    h(
                      h(
                        h({}, d.elem, (0, s.commonTemplates)(_, o)),
                        d.messengerContactsList,
                        (0, p.getMessengerContactsListTemplate)(_, o)
                      ),
                      d.popupTemplate,
                      (0, i.getPopupTemplate)(_, o)
                    ),
                    d.mElem,
                    (0, a.mobileTemplates)(_, o)
                  ),
                  d.mBody,
                  (0, l.getMobileBody)(_, o)
                ),
                d.mContactsElem,
                (0, c.mobileContactsTemplates)(_, o)
              );
            function y(e) {
              return function (t, o) {
                return (0, r["default"])(
                  { block: "ya-share2", elem: t },
                  u[e][t](o)
                );
              };
            }
            var m = new n["default"]();
            return {
              update: function (e, t) {
                var o =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : {},
                  r =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : "elem",
                  n = _[r];
                e.innerHTML = m.toHtml(n(t, o));
              },
              replaceNode: function (e, t) {
                var o =
                    arguments.length > 2 && arguments[2] !== undefined
                      ? arguments[2]
                      : {},
                  r =
                    arguments.length > 3 && arguments[3] !== undefined
                      ? arguments[3]
                      : "elem",
                  n = _[r];
                e.outerHTML = m.toHtml(n(t, o));
              },
            };
          });
        var r = _(o(4912)),
          n = _(o(1091)),
          a = o(6637),
          i = o(2285),
          s = o(5679),
          c = o(7599),
          l = o(1401),
          p = o(7633);
        function _(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          return (
            (u =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            u(e)
          );
        }
        function h(e, t, o) {
          return (
            (t = (function (e) {
              var t = (function (e, t) {
                if ("object" !== u(e) || null === e) return e;
                var o = e[Symbol.toPrimitive];
                if (o !== undefined) {
                  var r = o.call(e, t || "default");
                  if ("object" !== u(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(e, "string");
              return "symbol" === u(t) ? t : String(t);
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = o),
            e
          );
        }
        var d = (t.ConstructorName = Object.freeze({
          elem: "elem",
          messengerContactsList: "messengerContactsList",
          popupTemplate: "popupTemplate",
          mElem: "mElem",
          mBody: "mBody",
          mContactsElem: "mContactsElem",
        }));
      },
      5790: function (e, t) {
        "use strict";
        t.Z =
          '.ya-share2,.ya-share2 *{line-height:normal}.ya-share2 :link:hover,.ya-share2 :visited:hover{color:#000 !important}.ya-share2 input{color:inherit;font:inherit;margin:0;line-height:normal}.ya-share2__messenger-frame{display:none}.ya-share2__container.ya-share2__container_color-scheme_blackwhite .ya-share2__badge,.ya-share2__container.ya-share2__container_color-scheme_blackwhite .ya-share2__mobile-popup-badge{background-color:#000}.ya-share2__container.ya-share2__container_color-scheme_whiteblack .ya-share2__badge,.ya-share2__container.ya-share2__container_color-scheme_whiteblack .ya-share2__mobile-popup-badge{background-color:#fff}.ya-share2__container.ya-share2__container_color-scheme_whiteblack .ya-share2__popup-body .ya-share2__mobile-popup-badge{background-color:#f2f2f2}.ya-share2__container_shape_round .ya-share2__badge{border-radius:50px}.ya-share2__container_shape_round .ya-share2__icon{background-position:center}.ya-share2__container_size_l{font-size:20px}.ya-share2__container_size_l .ya-share2__badge .ya-share2__icon{height:48px;width:48px;background-size:48px 48px}.ya-share2__container_shape_round.ya-share2__container_size_l .ya-share2__badge .ya-share2__icon:not(.ya-share2__icon_messenger-contact):not(.ya-share2__icon_more):not(.ya-share2__icon_copy){background-size:40px 40px}.ya-share2__container_size_l .ya-share2__item_copy .ya-share2__icon_copy,.ya-share2__container_size_l .ya-share2__item_more .ya-share2__icon_more{background-size:32px 32px}.ya-share2__container_size_l .ya-share2__title{line-height:48px}.ya-share2__container_size_l .ya-share2__badge + .ya-share2__title{margin-left:16px}.ya-share2__container_size_l .ya-share2__popup:not(.ya-share2__popup_mobile){border-radius:16px;box-shadow:0 16px 48px rgba(0,0,0,0.18),0 0 8px rgba(0,0,0,0.1)}.ya-share2__container_size_l .ya-share2__popup:not(.ya-share2__popup_mobile) .ya-share2__item,.ya-share2__container_size_l.ya-share2__container_as-popup .ya-share2__item{padding:2px 16px}.ya-share2__container_size_l .ya-share2__popup:not(.ya-share2__popup_mobile) > :first-child:not(:empty),.ya-share2__container_size_l.ya-share2__container_as-popup > :first-child:not(:empty),.ya-share2__container_size_l .ya-share2__popup:not(.ya-share2__popup_mobile) > :first-child:empty + :last-child:not(:empty):not(.ya-share2__copied-tooltip),.ya-share2__container_size_l.ya-share2__container_as-popup > :first-child:empty + :last-child:not(:empty):not(.ya-share2__copied-tooltip){padding-top:8px}.ya-share2__container_size_l .ya-share2__popup:not(.ya-share2__popup_mobile) > :last-child:not(:empty):not(.ya-share2__copied-tooltip),.ya-share2__container_size_l.ya-share2__container_as-popup > :last-child:not(:empty):not(.ya-share2__copied-tooltip){padding-bottom:8px}.ya-share2__container_size_l .ya-share2__popup_direction_bottom{top:56px}.ya-share2__container_size_l .ya-share2__popup_direction_top{bottom:56px}.ya-share2__container_size_l.ya-share2__container_alone .ya-share2__popup_direction_bottom,.ya-share2__container_size_l .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__popup_direction_bottom{top:72px}.ya-share2__container_size_l.ya-share2__container_alone .ya-share2__popup_direction_top,.ya-share2__container_size_l .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__popup_direction_top{bottom:72px}.ya-share2__container_size_l .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more{padding:8px 32px 8px 16px;font-size:22px}.ya-share2__container_size_l .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more.ya-share2__link_more-button-type_short{padding:8px;border:none;background:rgba(0,0,0,0.07)}.ya-share2__container_size_l .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more .ya-share2__title{margin-left:6px}.ya-share2__container_size_l .ya-share2__messenger-contacts{margin-bottom:12px}.ya-share2__container_size_l .ya-share2__messenger-contacts::before{width:16px;height:16px;bottom:-7px;left:32px}.ya-share2__container_size_m{font-size:13px}.ya-share2__container_size_m .ya-share2__badge .ya-share2__icon{height:24px;width:24px;background-size:24px 24px}.ya-share2__container_shape_round.ya-share2__container_size_m .ya-share2__badge .ya-share2__icon:not(.ya-share2__icon_messenger-contact):not(.ya-share2__icon_more):not(.ya-share2__icon_copy){background-size:20px 20px}.ya-share2__container_size_m .ya-share2__item_copy .ya-share2__icon_copy,.ya-share2__container_size_m .ya-share2__item_more .ya-share2__icon_more{background-size:16px 16px}.ya-share2__container_size_m .ya-share2__title{line-height:24px}.ya-share2__container_size_m .ya-share2__badge + .ya-share2__title{margin-left:10px}.ya-share2__container_size_m .ya-share2__popup:not(.ya-share2__popup_mobile){border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.18),0 0 4px rgba(0,0,0,0.1)}.ya-share2__container_size_m .ya-share2__popup:not(.ya-share2__popup_mobile) .ya-share2__item,.ya-share2__container_size_m.ya-share2__container_as-popup .ya-share2__item{padding:2px 8px}.ya-share2__container_size_m .ya-share2__popup:not(.ya-share2__popup_mobile) > :first-child:not(:empty),.ya-share2__container_size_m.ya-share2__container_as-popup > :first-child:not(:empty),.ya-share2__container_size_m .ya-share2__popup:not(.ya-share2__popup_mobile) > :first-child:empty + :last-child:not(:empty):not(.ya-share2__copied-tooltip),.ya-share2__container_size_m.ya-share2__container_as-popup > :first-child:empty + :last-child:not(:empty):not(.ya-share2__copied-tooltip){padding-top:8px}.ya-share2__container_size_m .ya-share2__popup:not(.ya-share2__popup_mobile) > :last-child:not(:empty):not(.ya-share2__copied-tooltip),.ya-share2__container_size_m.ya-share2__container_as-popup > :last-child:not(:empty):not(.ya-share2__copied-tooltip){padding-bottom:8px}.ya-share2__container_size_m .ya-share2__popup_direction_bottom{top:28px}.ya-share2__container_size_m .ya-share2__popup_direction_top{bottom:28px}.ya-share2__container_size_m.ya-share2__container_alone .ya-share2__popup_direction_bottom,.ya-share2__container_size_m .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__popup_direction_bottom{top:36px}.ya-share2__container_size_m.ya-share2__container_alone .ya-share2__popup_direction_top,.ya-share2__container_size_m .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__popup_direction_top{bottom:36px}.ya-share2__container_size_m .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more{padding:4px 16px 4px 8px;font-size:15px}.ya-share2__container_size_m .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more.ya-share2__link_more-button-type_short{padding:4px;border:none;background:rgba(0,0,0,0.07)}.ya-share2__container_size_m .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more .ya-share2__title{margin-left:2px}.ya-share2__container_size_m .ya-share2__messenger-contacts{margin-bottom:6px}.ya-share2__container_size_m .ya-share2__messenger-contacts::before{width:10px;height:10px;bottom:-4px;left:15px}.ya-share2__container_size_s{font-size:12px}.ya-share2__container_size_s .ya-share2__badge .ya-share2__icon{height:18px;width:18px;background-size:18px 18px}.ya-share2__container_shape_round.ya-share2__container_size_s .ya-share2__badge .ya-share2__icon:not(.ya-share2__icon_messenger-contact):not(.ya-share2__icon_more):not(.ya-share2__icon_copy){background-size:16px 16px}.ya-share2__container_size_s .ya-share2__item_copy .ya-share2__icon_copy,.ya-share2__container_size_s .ya-share2__item_more .ya-share2__icon_more{background-size:12px 12px}.ya-share2__container_size_s .ya-share2__title{line-height:18px}.ya-share2__container_size_s .ya-share2__badge + .ya-share2__title{margin-left:6px}.ya-share2__container_size_s .ya-share2__popup:not(.ya-share2__popup_mobile){border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,0.18),0 0 3px rgba(0,0,0,0.1)}.ya-share2__container_size_s .ya-share2__popup:not(.ya-share2__popup_mobile) .ya-share2__item,.ya-share2__container_size_s.ya-share2__container_as-popup .ya-share2__item{padding:2px 6px}.ya-share2__container_size_s .ya-share2__popup:not(.ya-share2__popup_mobile) > :first-child:not(:empty),.ya-share2__container_size_s.ya-share2__container_as-popup > :first-child:not(:empty),.ya-share2__container_size_s .ya-share2__popup:not(.ya-share2__popup_mobile) > :first-child:empty + :last-child:not(:empty):not(.ya-share2__copied-tooltip),.ya-share2__container_size_s.ya-share2__container_as-popup > :first-child:empty + :last-child:not(:empty):not(.ya-share2__copied-tooltip){padding-top:6px}.ya-share2__container_size_s .ya-share2__popup:not(.ya-share2__popup_mobile) > :last-child:not(:empty):not(.ya-share2__copied-tooltip),.ya-share2__container_size_s.ya-share2__container_as-popup > :last-child:not(:empty):not(.ya-share2__copied-tooltip){padding-bottom:6px}.ya-share2__container_size_s .ya-share2__popup_direction_bottom{top:21px}.ya-share2__container_size_s .ya-share2__popup_direction_top{bottom:21px}.ya-share2__container_size_s.ya-share2__container_alone .ya-share2__popup_direction_bottom,.ya-share2__container_size_s .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__popup_direction_bottom{top:27px}.ya-share2__container_size_s.ya-share2__container_alone .ya-share2__popup_direction_top,.ya-share2__container_size_s .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__popup_direction_top{bottom:27px}.ya-share2__container_size_s .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more{padding:3px 12px 3px 6px;font-size:14px}.ya-share2__container_size_s .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more.ya-share2__link_more-button-type_short{padding:3px;border:none;background:rgba(0,0,0,0.07)}.ya-share2__container_size_s .ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more .ya-share2__title{margin-left:1px}.ya-share2__container_size_s .ya-share2__messenger-contacts{margin-bottom:4.5px}.ya-share2__container_size_s .ya-share2__messenger-contacts::before{width:8px;height:8px;bottom:-3px;left:11px}.ya-share2__container_mobile .ya-share2__icon{background-position:center;background-repeat:no-repeat}.ya-share2__container_mobile.ya-share2__container_size_l .ya-share2__icon{height:56px;width:56px}.ya-share2__container_mobile.ya-share2__container_size_l .ya-share2__title{line-height:56px}.ya-share2__container_mobile.ya-share2__container_size_m .ya-share2__icon{height:32px;width:32px}.ya-share2__container_mobile.ya-share2__container_size_m .ya-share2__title{line-height:32px}.ya-share2__container_mobile.ya-share2__container_size_s .ya-share2__icon{height:24px;width:24px}.ya-share2__container_mobile.ya-share2__container_size_s .ya-share2__title{line-height:24px}.ya-share2__list.ya-share2__list_direction_horizontal{margin-top:-2px}.ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item{display:inline-block;vertical-align:top;padding:0;margin:2px 4px 0 0}.ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item:last-child{margin-right:0}.ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item > .ya-share2__link > .ya-share2__title{display:none}.ya-share2__list.ya-share2__list_direction_vertical > .ya-share2__item{display:block;margin:4px 0}.ya-share2__list.ya-share2__list_direction_vertical > .ya-share2__item:first-child{margin-top:0}.ya-share2__list.ya-share2__list_direction_vertical > .ya-share2__item:last-child{margin-bottom:0}.ya-share2__popup{position:absolute;display:none;z-index:9999;background-color:#fff}.ya-share2__popup_visible{display:block}.ya-share2__popup_direction_auto{visibility:hidden}.ya-share2__popup_direction_bottom,.ya-share2__popup_direction_top{visibility:visible}.ya-share2__popup_list-direction_horizontal{right:0}.ya-share2__popup_list-direction_vertical{left:0}.ya-share2__popup_x-direction_left{right:0;left:auto}.ya-share2__popup_x-direction_right{left:0;right:auto}.ya-share2__popup,.ya-share2__container_as-popup{text-align:left}.ya-share2__popup .ya-share2__list .ya-share2__item,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item{margin:0}.ya-share2__popup .ya-share2__list .ya-share2__item:hover,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:hover,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover,.ya-share2__popup .ya-share2__list .ya-share2__item:focus,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:focus,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus{background:rgba(0,0,0,0.03)}.ya-share2__popup .ya-share2__list .ya-share2__item:active,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:active,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active{background:rgba(0,0,0,0.05)}.ya-share2__popup .ya-share2__list .ya-share2__item:hover,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:hover,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover,.ya-share2__popup .ya-share2__list .ya-share2__item:focus,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:focus,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus,.ya-share2__popup .ya-share2__list .ya-share2__item:active,.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active,.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:active,.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active{opacity:1}.ya-share2__container_color-scheme_whiteblack.ya-share2__popup .ya-share2__list .ya-share2__item:hover .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:hover .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__popup .ya-share2__list .ya-share2__item:focus .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:focus .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__popup .ya-share2__list .ya-share2__item:active .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:active .ya-share2__badge,.ya-share2__container_color-scheme_whiteblack.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__popup .ya-share2__list .ya-share2__item:hover.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:hover.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:hover.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__popup .ya-share2__list .ya-share2__item:focus.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:focus.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:focus.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__popup .ya-share2__list .ya-share2__item:active.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__container_as-popup .ya-share2__list .ya-share2__item:active.ya-share2__item_copy .ya-share2__badge,.ya-share2__container_color-scheme_normal.ya-share2__container_as-popup .ya-share2__messenger-contacts-list_desktop .ya-share2__item:active.ya-share2__item_copy .ya-share2__badge{background:transparent}.ya-share2__container .ya-share2__messenger-contacts_desktop{background-color:#f5f5f5;position:relative}.ya-share2__container .ya-share2__messenger-contacts_desktop:empty{display:none}.ya-share2__container .ya-share2__messenger-contacts_desktop::before{content:\'\';transform:rotate(45deg);position:absolute;background-color:#f5f5f5}.ya-share2__container .ya-share2__messenger-contacts_desktop .ya-share2__messenger-contacts-list{margin:0;padding-left:0}.ya-share2__container .ya-share2__messenger-contacts_desktop .ya-share2__item{display:block}.ya-share2__container .ya-share2__messenger-contacts_desktop .ya-share2__badge{background:none}.ya-share2__container .ya-share2__messenger-contacts_desktop .ya-share2__icon{border-radius:50px}.ya-share2__container .ya-share2__messenger-contacts_desktop + .ya-share2__list{display:block}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider{height:97px;overflow:hidden;padding-bottom:16px}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__messenger-contacts_mobile{overflow-x:scroll}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__messenger-contacts_mobile:empty{display:none}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__messenger-contacts_mobile .ya-share2__messenger-contacts-list{white-space:nowrap;height:97px}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider + .ya-share2__header{border-top:1px solid rgba(0,0,0,0.1)}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider ~ .ya-share2__scroll-hider .ya-share2__popup-tile-wrapper{overflow-x:scroll}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider ~ .ya-share2__scroll-hider .ya-share2__popup-tile-wrapper .ya-share2__popup-tile{white-space:nowrap;height:97px}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__mobile-popup-badge{width:56px;height:56px;border-radius:28px}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__messenger-contacts-list .ya-share2__mobile-popup-badge{background:none}.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__item{width:23%}@media (min-width:460px){.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__item{width:18.6%}}@media (min-width:600px){.ya-share2__container.ya-share2__container_mobile .ya-share2__scroll-hider .ya-share2__item{width:15.6%}}.ya-share2__popup.ya-share2__popup_mobile.ya-share2__popup_visible{position:fixed;top:0;right:0;bottom:0;left:0;margin:0;padding:0;border:0;background:transparent;color:rgba(0,0,0,0.8)}.ya-share2__popup.ya-share2__popup_mobile.ya-share2__popup_visible .ya-share2__popup-overlay{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.3);animation:overlayAppearance .2s cubic-bezier(.42,0,1,1) forwards}.ya-share2__popup.ya-share2__popup_mobile.ya-share2__popup_visible .ya-share2__popup-content{display:flex;position:absolute;padding:0;z-index:2;bottom:0;box-sizing:border-box;flex-direction:column;width:100%;max-height:70%;animation:popupAppearance .2s forwards}.ya-share2__popup-content .ya-share2__popup-header{display:flex;align-items:center;min-height:40px;padding:14px 12px 14px 16px;border-bottom:1px solid rgba(0,0,0,0.1);border-radius:16px 16px 0 0;background-color:#fff}.ya-share2__popup-content .ya-share2__popup-header .ya-share2__og-image,.ya-share2__popup-content .ya-share2__popup-header .ya-share2__icon_og-image-stub,.ya-share2__popup-content .ya-share2__popup-header .ya-share2__icon_closing-cross{flex-shrink:0}.ya-share2__popup-content .ya-share2__popup-header .ya-share2__popup-description{flex:1;hyphens:auto;align-self:center;display:-webkit-box;max-height:34px;margin:0 8px 0 14px;overflow:hidden;font-size:15px;line-height:17px;text-overflow:ellipsis;word-break:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}.ya-share2__popup-content .ya-share2__popup-body{overflow:auto;background-color:#fff}.ya-share2__popup-content .ya-share2__popup-body .ya-share2__header{font-weight:500;font-size:18px;line-height:20px;padding:18px 16px 0;margin:0}.ya-share2__popup-content .ya-share2__messenger-contacts-list,.ya-share2__popup-content .ya-share2__popup-tile{padding:20px 12px 0;margin:0}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__item,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__item{width:25%;padding:0;margin:0 0 20px}@media (min-width:460px){.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__item,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__item{width:20%}}@media (min-width:600px){.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__item,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__item{width:16.66%}}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__item .ya-share2__link,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__item .ya-share2__link{width:100%;height:100%;color:rgba(0,0,0,0.8)}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__item .ya-share2__native-share-fake-link,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__item .ya-share2__native-share-fake-link{display:inline-block;width:100%;height:100%}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__mobile-popup-badge,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__mobile-popup-badge{display:block;width:52px;height:52px;margin:0 auto;border-radius:26px}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__mobile-popup-badge .ya-share2__icon,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__mobile-popup-badge .ya-share2__icon{width:100%;height:100%;background-size:32px;background-clip:content-box}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__mobile-popup-badge .ya-share2__icon_messenger-contact,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__mobile-popup-badge .ya-share2__icon_messenger-contact{background-size:56px;border-radius:50%}.ya-share2__popup-content .ya-share2__messenger-contacts-list .ya-share2__mobile-popup-service-title,.ya-share2__popup-content .ya-share2__popup-tile .ya-share2__mobile-popup-service-title{max-height:15px;margin-top:10px;padding:0 4px;overflow:hidden;font-size:13px;line-height:15px;text-align:center;text-overflow:ellipsis}.ya-share2__popup-content .ya-share2__icon{background-size:auto}.ya-share2__popup-content .ya-share2__icon.ya-share2__og-image,.ya-share2__popup-content .ya-share2__icon.ya-share2__icon_og-image-stub{box-sizing:border-box;width:36px;height:36px;border-radius:6px}.ya-share2__popup-content .ya-share2__icon.ya-share2__og-image{background-position:center;background-size:cover}.ya-share2__popup-content .ya-share2__icon.ya-share2__icon_og-image-stub{padding:6px;background-color:rgba(0,0,0,0.05);background-image:url("data:image/svg+xml,%3Csvg%20width=%2724%27%20height=%2725%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M10.94%208.838a3%203%200%20000%204.242%201%201%200%2001-1.414%201.415%205%205%200%20010-7.071l3.535-3.536a5%205%200%20017.071%207.071l-1.092%201.093a1%201%200%2001-1.415-1.415l1.093-1.092a3%203%200%2010-4.243-4.243L10.94%208.838zm2.12%206.363a3%203%200%20000-4.243%201%201%200%20111.415-1.414%205%205%200%20010%207.07l-3.5%203.501a5%205%200%2001-7.071-7.071l1.025-1.025a1%201%200%20011.414%201.414l-1.025%201.025a3%203%200%20004.243%204.243l3.5-3.5z%27%20fill=%27%23000%27%20fill-opacity=%27.3%27/%3E%3C/svg%3E")}.ya-share2__popup-content .ya-share2__icon.ya-share2__icon_closing-cross{box-sizing:border-box;cursor:pointer;width:40px;height:40px;padding:10px;background-image:url("data:image/svg+xml,%3Csvg%20width=%2720%27%20height=%2720%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M10%2020c5.523%200%2010-4.477%2010-10S15.523%200%2010%200%200%204.477%200%2010s4.477%2010%2010%2010zM5.403%205.403a1%201%200%20011.414%200L10%208.586l3.183-3.183a1%201%200%20111.414%201.414L11.414%2010l3.183%203.183a1%201%200%2001-1.414%201.414L10%2011.414l-3.183%203.183a1%201%200%2001-1.414-1.414L8.586%2010%205.403%206.817a1%201%200%20010-1.414z%27%20fill=%27%23000%27%20fill-opacity=%27.2%27/%3E%3C/svg%3E")}.ya-share2__popup-content .ya-share2__icon.ya-share2__icon_closing-cross:hover{opacity:.8}.ya-share2__popup-content .ya-share2__icon.ya-share2__icon_closing-cross:active{opacity:.6}.ya-share2__popup-content .ya-share2__item.ya-share2__item_copy.ya-share2__item_copy-link-button .ya-share2__icon_copy-icon{width:15px;height:14px;opacity:1;background-image:url("data:image/svg+xml,%3Csvg%20width=%2715%27%20height=%2714%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M3.758%201a1%201%200%20001%201h7.5a.5.5%200%2001.5.5v7.497a1%201%200%20002%200V2.5a2.5%202.5%200%2000-2.5-2.5h-7.5a1%201%200%2000-1%201zm-1.5%202h8a1.5%201.5%200%20011.5%201.5v8a1.5%201.5%200%2001-1.5%201.5h-8a1.5%201.5%200%2001-1.5-1.5v-8a1.5%201.5%200%20011.5-1.5zm.5%202v7h7V5h-7z%27%20fill=%27%23000%27%20fill-opacity=%27.3%27/%3E%3C/svg%3E")}.ya-share2__popup-content .ya-share2__mobile-popup-badge.ya-share2__mobile-popup-badge_native-share{border:1px solid rgba(0,0,0,0.15);background:#fff;box-sizing:border-box}.ya-share2__popup-content .ya-share2__mobile-popup-badge.ya-share2__mobile-popup-badge_native-share .ya-share2__icon{background-image:url("data:image/svg+xml,%3Csvg%20width=%2722%27%20height=%2722%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M4.583%2012.604a1.604%201.604%200%20100-3.208%201.604%201.604%200%20000%203.208zm12.834%200a1.604%201.604%200%20100-3.208%201.604%201.604%200%20000%203.208zM12.604%2011a1.604%201.604%200%2011-3.208%200%201.604%201.604%200%20013.208%200z%27%20fill=%27%23000%27%20fill-opacity=%27.3%27/%3E%3C/svg%3E")}.ya-share2__popup-content .ya-share2__mobile-popup-copy-link .ya-share2__item.ya-share2__item_copy.ya-share2__item_copy-link-button{display:flex;align-items:center;margin:8px auto 32px;padding:12px 20px;border:1px solid rgba(0,0,0,0.15);border-radius:12px;background-color:#fff;font-size:15px;line-height:20px;color:#000}.ya-share2__popup-content .ya-share2__mobile-popup-copy-link .ya-share2__item.ya-share2__item_copy.ya-share2__item_copy-link-button .ya-share2__link-title{padding-left:8px}.ya-share2__copied-tooltip{display:none;z-index:9999;position:fixed;bottom:6px;left:50%;padding:12px 20px;transform:translateX(-50%);border-radius:22px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.15),0 0 2px rgba(0,0,0,0.05);color:rgba(0,0,0,0.8);font-size:15px;line-height:20px;white-space:nowrap}.ya-share2__copied-tooltip_shown{display:block;animation:tooltipAppearance 2s ease-out forwards}@media (min-width:721px){.ya-share2__popup.ya-share2__popup_mobile.ya-share2__popup_visible{display:flex;justify-content:center;align-items:center}.ya-share2__popup.ya-share2__popup_mobile.ya-share2__popup_visible .ya-share2__popup-content{width:720px;min-height:310px;padding:20px 0;bottom:auto}.ya-share2__popup.ya-share2__popup_mobile.ya-share2__popup_visible .ya-share2__popup-content .ya-share2__popup-body{border-radius:0 0 16px 16px}}@-moz-keyframes tooltipAppearance{0%{transform:translate(-50%,0);opacity:0}8%{transform:translate(-50%,-10px);opacity:1}92%{transform:translate(-50%,-10px);opacity:1}100%{transform:translate(-50%,0);opacity:0}}@-webkit-keyframes tooltipAppearance{0%{transform:translate(-50%,0);opacity:0}8%{transform:translate(-50%,-10px);opacity:1}92%{transform:translate(-50%,-10px);opacity:1}100%{transform:translate(-50%,0);opacity:0}}@-o-keyframes tooltipAppearance{0%{transform:translate(-50%,0);opacity:0}8%{transform:translate(-50%,-10px);opacity:1}92%{transform:translate(-50%,-10px);opacity:1}100%{transform:translate(-50%,0);opacity:0}}@keyframes tooltipAppearance{0%{transform:translate(-50%,0);opacity:0}8%{transform:translate(-50%,-10px);opacity:1}92%{transform:translate(-50%,-10px);opacity:1}100%{transform:translate(-50%,0);opacity:0}}@-moz-keyframes overlayAppearance{from{opacity:0}to{opacity:1}}@-webkit-keyframes overlayAppearance{from{opacity:0}to{opacity:1}}@-o-keyframes overlayAppearance{from{opacity:0}to{opacity:1}}@keyframes overlayAppearance{from{opacity:0}to{opacity:1}}@-moz-keyframes popupAppearance{from{transform:translateY(100%)}to{transform:translateY(0)}}@-webkit-keyframes popupAppearance{from{transform:translateY(100%)}to{transform:translateY(0)}}@-o-keyframes popupAppearance{from{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes popupAppearance{from{transform:translateY(100%)}to{transform:translateY(0)}}.ya-share2__container,.ya-share2__container .ya-share2__item{font-family:\'YS Text\',Arial,sans-serif}.ya-share2__list,.ya-share2__badge,.ya-share2__icon{display:inline-block;vertical-align:top}.ya-share2__title{display:inline-block;vertical-align:bottom}.ya-share2__list{padding:0;margin:0;list-style-type:none}.ya-share2__link{display:block}.ya-share2__item{display:inline-block;font-family:\'YS Text\',Arial,sans-serif}.ya-share2__item:not(.ya-share2__item_more):hover,.ya-share2__item.ya-share2__item_more > .ya-share2__link:hover,.ya-share2__item:not(.ya-share2__item_more):focus,.ya-share2__item.ya-share2__item_more > .ya-share2__link:focus{cursor:pointer;opacity:.85}.ya-share2__item:not(.ya-share2__item_more):active,.ya-share2__item.ya-share2__item_more > .ya-share2__link:active{opacity:.7}.ya-share2__link{text-decoration:none;white-space:nowrap}.ya-share2__badge{border-radius:4px;color:#fff;overflow:hidden;position:relative}.ya-share2__container_mobile .ya-share2__badge{border-radius:50%}.ya-share2__title{color:#000}.ya-share2__item_more{position:relative}.ya-share2__item_more .ya-share2__link_more .ya-share2__title{display:none}.ya-share2__item_more .ya-share2__icon_more{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M1%208a1.5%201.5%200%20113%200%201.5%201.5%200%2001-3%200zm5.5%200a1.5%201.5%200%20113%200%201.5%201.5%200%2001-3%200zm7-1.5a1.5%201.5%200%20100%203%201.5%201.5%200%20000-3z%27%20fill=%27%23999%27/%3E%3C/svg%3E")}.ya-share2__container_color-scheme_blackwhite .ya-share2__item_more .ya-share2__icon_more{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M1%208a1.5%201.5%200%20113%200%201.5%201.5%200%2001-3%200zm5.5%200a1.5%201.5%200%20113%200%201.5%201.5%200%2001-3%200zm7-1.5a1.5%201.5%200%20100%203%201.5%201.5%200%20000-3z%27%20fill=%27%23fff%27/%3E%3C/svg%3E")}.ya-share2__container_color-scheme_whiteblack .ya-share2__item_more .ya-share2__icon_more{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M1%208a1.5%201.5%200%20113%200%201.5%201.5%200%2001-3%200zm5.5%200a1.5%201.5%200%20113%200%201.5%201.5%200%2001-3%200zm7-1.5a1.5%201.5%200%20100%203%201.5%201.5%200%20000-3z%27%20fill=%27%23000%27/%3E%3C/svg%3E")}.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__icon_more{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M14.6%202.9a2.7%202.7%200%2001-4.554%201.963L5.303%207.28a2.702%202.702%200%20010%201.44l4.743%202.417a2.7%202.7%200%2011-.834%201.708l-5.05-2.575a2.7%202.7%200%20110-4.54l5.05-2.575A2.7%202.7%200%201114.6%202.9z%27%20fill=%27%23000%27/%3E%3C/svg%3E")}.ya-share2__item_more .ya-share2__badge,.ya-share2__item_copy .ya-share2__badge{background:rgba(0,0,0,0.03)}.ya-share2__item_more .ya-share2__icon,.ya-share2__item_copy .ya-share2__icon{background-position:center;background-repeat:no-repeat}.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more{background:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.15);border-radius:50px}.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more:not(.ya-share2__link_more-button-type_short):hover,.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more:not(.ya-share2__link_more-button-type_short):focus{border-color:rgba(0,0,0,0.25);opacity:1}.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more:not(.ya-share2__link_more-button-type_short):active{border-color:rgba(0,0,0,0.4);opacity:1}.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__link_more:not(.ya-share2__link_more-button-type_short) .ya-share2__title{display:inline-block}.ya-share2__item_more.ya-share2__item_has-pretty-view .ya-share2__badge_more{background:transparent}.ya-share2__item_copy .ya-share2__icon{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M4%202a1%201%200%20001%201h7.5a.5.5%200%2001.5.5v7.497a1%201%200%20002%200V3.5A2.5%202.5%200%200012.5%201H5a1%201%200%2000-1%201zM2.5%204h8A1.5%201.5%200%200112%205.5v8a1.5%201.5%200%2001-1.5%201.5h-8A1.5%201.5%200%20011%2013.5v-8A1.5%201.5%200%20012.5%204zM3%206v7h7V6H3z%27%20fill=%27%23999%27/%3E%3C/svg%3E")}.ya-share2__container_color-scheme_blackwhite .ya-share2__item_copy .ya-share2__icon{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M4%202a1%201%200%20001%201h7.5a.5.5%200%2001.5.5v7.497a1%201%200%20002%200V3.5A2.5%202.5%200%200012.5%201H5a1%201%200%2000-1%201zM2.5%204h8A1.5%201.5%200%200112%205.5v8a1.5%201.5%200%2001-1.5%201.5h-8A1.5%201.5%200%20011%2013.5v-8A1.5%201.5%200%20012.5%204zM3%206v7h7V6H3z%27%20fill=%27%23fff%27/%3E%3C/svg%3E")}.ya-share2__container_color-scheme_whiteblack .ya-share2__item_copy .ya-share2__icon{background-image:url("data:image/svg+xml,%3Csvg%20width=%2716%27%20height=%2716%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20fill-rule=%27evenodd%27%20clip-rule=%27evenodd%27%20d=%27M4%202a1%201%200%20001%201h7.5a.5.5%200%2001.5.5v7.497a1%201%200%20002%200V3.5A2.5%202.5%200%200012.5%201H5a1%201%200%2000-1%201zM2.5%204h8A1.5%201.5%200%200112%205.5v8a1.5%201.5%200%2001-1.5%201.5h-8A1.5%201.5%200%20011%2013.5v-8A1.5%201.5%200%20012.5%204zM3%206v7h7V6H3z%27%20fill=%27%23000%27/%3E%3C/svg%3E")}.ya-share2__item_copy .ya-share2__input_copy{display:none}.ya-share2__item_copy .ya-share2__link_copy{display:inline-block}';
      },
      5404: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.896 14.833A5.167 5.167 0 0114.729 20H9.166A5.167 5.167 0 014 14.833V9.167A5.166 5.166 0 019.166 4h2.608a5.167 5.167 0 015.167 5.167l.002.011c.037.536.484.96 1.03.96l.018-.002h.872c.57 0 1.034.463 1.034 1.034l-.001 3.663zM9.038 10.176h2.926a.993.993 0 000-1.987H9.038a.994.994 0 000 1.987zm5.867 3.83H9.032a.94.94 0 000 1.879h5.873a.94.94 0 100-1.88z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      4441: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 12h8v8H4zm8-8h8v8h-7.984z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      292: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.555 10.814V14.1h.96s.18.005.18-.222v-3.287h-.96s-.18-.006-.18.222zm8.032 3.065v-3.287h-.96s-.18-.006-.18.222V14.1h.96s.18.006.18-.222zm-5.306 1.32c0 .227-.18.222-.18.222H4V9.497c0-.227.18-.222.18-.222h2.514V7.222c0-.227.18-.222.18-.222h1.408l-.001 8.199zm2.065 0c0 .227-.18.221-.18.221H8.761V9.496c0-.226.18-.221.18-.221h1.406v5.924zm0-7.103c0 .227-.18.222-.18.222H8.76V7.222c0-.227.18-.222.18-.222h1.408l-.001 1.096zm4.827 9.21c0 .228-.18.223-.18.223h-4.1v-1.096c0-.227.18-.222.18-.222h2.513v-.79h-2.694V9.497c0-.227.18-.222.18-.222l4.102.003v8.029zm4.826 0c0 .228-.18.223-.18.223h-4.1v-1.096c0-.227.18-.222.18-.222h2.514v-.79h-2.695V9.497c0-.227.18-.222.18-.222L20 9.279v8.028zm-1.585-3.427v-3.287h-.96s-.18-.006-.18.222V14.1h.96s.18.006.18-.222z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      2716: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.277 7.109h1.517c.08 0 .16-.08.16-.16V5.313c0-.28.08-.559.159-.758l.04-.12L5.2 7.348l.16-.08c.239-.12.558-.16.917-.16zm11.654-.28c-.12-.638-.479-.917-.838-1.037-.36-.12-.718-.28-1.676-.4-.759-.08-1.557-.12-2.116-.12-.16-.438-.399-.917-1.317-1.156-.638-.16-1.796-.12-2.155-.08-.559.08-.758.319-.918.479-.16.16-.28.598-.28.878v1.556c0 .48-.318.838-.877.838H6.397c-.32 0-.559.04-.758.12-.16.12-.32.28-.4.4-.2.279-.239.598-.239.957 0 0 0 .28.08.798.04.4.479 3.033.878 3.911.16.36.28.48.599.639.718.32 2.354.639 3.152.758.759.08 1.278.32 1.557-.279 0 0 .04-.16.12-.36a6.3 6.3 0 00.28-1.915c0-.04.079-.04.079 0 0 .36-.08 1.557.838 1.876.36.12 1.118.24 1.876.32.678.079 1.197.358 1.197 2.114 0 1.078-.24 1.238-1.397 1.238-.958 0-1.317.04-1.317-.759 0-.598.599-.558 1.078-.558.2 0 .04-.16.04-.52 0-.398.24-.598 0-.598-1.557-.04-2.475 0-2.475 1.956 0 1.796.679 2.115 2.914 2.115 1.756 0 2.354-.04 3.073-2.275.16-.439.479-1.796.678-4.03.16-1.478-.12-5.788-.319-6.866zm-3.033 4.75c-.2 0-.32 0-.519.04h-.08s-.04 0-.04-.04v-.04c.08-.4.28-.878.878-.878.639.04.799.599.799 1.038v.04c0 .04-.04.04-.04.04-.04 0-.04 0-.04-.04-.28-.08-.599-.12-.958-.16z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      7616: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.246 8.954h3.41v10.281h-3.41zm1.725-4.935c-1.167 0-1.929.769-1.929 1.776 0 .987.74 1.777 1.884 1.777h.022c1.19 0 1.93-.79 1.93-1.777-.023-1.007-.74-1.776-1.907-1.776zm10.052 4.715c-1.81 0-2.62.997-3.073 1.698V8.976H9.54c.045.965 0 10.281 0 10.281h3.41v-5.742c0-.307.022-.614.112-.834.246-.613.807-1.25 1.75-1.25 1.233 0 1.727.944 1.727 2.325v5.501h3.41v-5.896c0-3.158-1.683-4.627-3.926-4.627z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      4343: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.815 13.3c.223 1.074.443 2.146.663 3.218.214 1.039.427 2.078.643 3.118.037.178-.148.385-.334.311-1.544-.565-3.063-1.135-4.585-1.706l-1.425-.534a.625.625 0 01-.318-.23l-7.39-8.903c-.067-.082-.082-.215-.06-.32.312-1.23.72-2.143 1.752-3.019C7.799 4.36 8.779 4.1 10.047 4.004c.156-.015.223.014.312.133l1.351 1.625v.001c1.968 2.367 3.935 4.733 5.897 7.099.109.124.18.275.208.438zM6.175 8.462c.69-1.795 2.3-3.004 3.835-3.301l-.185-.223a4.242 4.242 0 00-3.85 3.272l.2.252zm.504.601c.727-1.758 2.107-2.945 3.851-3.271l.89 1.06c-1.536.305-3.049 1.522-3.836 3.302l-.905-1.091zM9.364 8.9l3.926 4.719h-.002c.564.682-.014 2.656-.303 3.041l-4.89-5.89A6.12 6.12 0 019.364 8.9zm4.23 4.481L9.647 8.633c.69-.601 1.484-1.009 2.277-1.165l4.756 5.72c-.63.52-2.641.735-3.086.193zm3.36.298l.001-.001h-.001zm-2.93.526c1.03.208 2.32-.067 2.93-.526l.43 2.091.35 1.692c-.371.156-.69.386-.913.764l-1.528-.564-1.885-.712c.52-.853.69-1.922.616-2.745z' fill='%23FFF'/%3e%3c/svg%3e";
      },
      3123: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.643 11.415L7.723 4.636a.703.703 0 00-1.048.62v1.826s3.961 1.542 4.284 1.662a.457.457 0 01.343.54c-.058.144-.18.128-.533.042-.352-.085-5.505-1.368-5.505-1.368a.62.62 0 00-.715.847l1.077 2.563s6.949.29 7.199.305c.247.015.393.134.397.327-.004.194-.15.312-.397.327-.25.014-7.199.305-7.199.305L4.55 15.196a.62.62 0 00.715.846s5.153-1.283 5.505-1.368c.353-.086.475-.102.533.042a.457.457 0 01-.343.54c-.323.12-4.284 1.663-4.284 1.663v1.825a.703.703 0 001.048.62l11.92-6.78a.658.658 0 000-1.169z' fill='%23FFF'/%3e%3c/svg%3e";
      },
      1618: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.889 9.667a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zm6.222 0a1.333 1.333 0 100-2.667 1.333 1.333 0 000 2.667zm4.77 6.108l-1.802-3.028a.879.879 0 00-1.188-.307.843.843 0 00-.313 1.166l.214.36a6.71 6.71 0 01-4.795 1.996 6.711 6.711 0 01-4.792-1.992l.217-.364a.844.844 0 00-.313-1.166.878.878 0 00-1.189.307l-1.8 3.028a.844.844 0 00.312 1.166.88.88 0 001.189-.307l.683-1.147a8.466 8.466 0 005.694 2.18 8.463 8.463 0 005.698-2.184l.685 1.151a.873.873 0 001.189.307.844.844 0 00.312-1.166z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      1678: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.83 10.77a3.951 3.951 0 0 1-5.604 0 3.951 3.951 0 0 1 0-5.604 3.95 3.95 0 0 1 5.604 0 3.951 3.951 0 0 1 0 5.604Zm-2.802-4.615c-.494 0-.942.2-1.271.53a1.79 1.79 0 0 0 0 2.542 1.789 1.789 0 0 0 2.543 0 1.789 1.789 0 0 0 0-2.543 1.839 1.839 0 0 0-1.272-.53Zm4.168 5.792 1.166 1.59c.059.082.047.188-.036.247-.977.8-2.119 1.33-3.308 1.613l2.249 4.332c.059.13-.024.271-.165.271H13.7a.206.206 0 0 1-.176-.118l-1.496-3.579-1.507 3.567a.181.181 0 0 1-.176.118H7.943c-.141 0-.224-.153-.165-.27l2.249-4.321a8.262 8.262 0 0 1-3.308-1.613c-.071-.06-.095-.177-.036-.248l1.166-1.589c.07-.094.188-.106.27-.035 1.096.93 2.45 1.542 3.898 1.542s2.79-.6 3.897-1.542c.094-.07.223-.06.282.035Z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      2242: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 9.742c0 1.58.599 2.986 1.884 3.51.21.087.4.003.46-.23.043-.16.144-.568.189-.738.06-.23.037-.31-.133-.512-.37-.436-.608-1.001-.608-1.802 0-2.322 1.74-4.402 4.53-4.402 2.471 0 3.829 1.508 3.829 3.522 0 2.65-1.174 4.887-2.917 4.887-.963 0-1.683-.795-1.452-1.77.276-1.165.812-2.421.812-3.262 0-.752-.405-1.38-1.24-1.38-.985 0-1.775 1.017-1.775 2.38 0 .867.293 1.454.293 1.454L8.69 16.406c-.352 1.487-.053 3.309-.028 3.492.015.11.155.136.22.054.09-.119 1.262-1.564 1.66-3.008.113-.409.647-2.526.647-2.526.32.61 1.254 1.145 2.248 1.145 2.957 0 4.964-2.693 4.964-6.298C18.4 6.539 16.089 4 12.576 4 8.204 4 6 7.13 6 9.742z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      3433: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.9 5c1.159 0 2.1.948 2.1 2.117v5.862c0 .108-.008.215-.024.32.016.156.024.314.024.473 0 3.36-3.582 6.085-8 6.085s-8-2.724-8-6.085c0-.159.008-.317.024-.473a2.148 2.148 0 01-.024-.32V7.117C4 5.948 4.94 5 6.1 5h11.8zM8.596 9.392L12 12.795l3.404-3.403a1.063 1.063 0 011.502 1.502l-4.132 4.131c-.21.21-.486.314-.76.311a1.062 1.062 0 01-.788-.31l-4.132-4.132a1.063 1.063 0 011.502-1.502z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      3664: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.367 14.463s-.105.148-.457.299l-.553.222.597 3.273c.062.282.25.983-.082 1.062-.17.04-.307-.067-.395-.121l-.769-.445-2.675-1.545c-.204-.122-.78-.546-1.093-.489-.205.038-.336.127-.483.216l-.77.445-2.39 1.386-.883.508c-.123.06-.301.058-.394-.025-.07-.063-.09-.253-.063-.388l.19-1.004.572-3.02c.047-.2.237-.975.166-1.137-.048-.107-.173-.196-.261-.267l-.61-.565-2.13-1.983c-.189-.153-.345-.345-.533-.496l-.235-.216c-.062-.078-.165-.235-.09-.369.142-.248.974-.218 1.335-.28l2.682-.31.82-.09c.146-.024.299-.004.413-.063.239-.123.51-.809.636-1.087l1.31-2.714c.151-.297.286-.603.431-.896.075-.15.133-.308.305-.356.162-.045.257.105.312.178.177.235.325.685.451.973l1.29 2.853c.104.238.363.964.54 1.074.266.166.858.108 1.227.172l2.841.292c.355.062 1.245.01 1.36.267.076.17-.072.314-.152.394l-.864.814-1.983 1.868c-.185.164-.77.637-.833.858-.04.14.02.414.088.722a95.62 95.62 0 01-1.182-.029c-.63-.007-2.616-.17-2.713-.178l-.84-.076c-.14-.023-.326.012-.4-.076v-.02c1.727-1.168 3.407-2.416 5.142-3.578l-.006-.044c-.146-.072-.359-.059-.54-.095-.385-.077-.79-.078-1.208-.147-.75-.124-1.59-.114-2.434-.114-1.172 0-2.329.03-3.35.21-.45.079-.894.095-1.309.197-.172.042-.358.03-.49.108l.007.012c.1.027.253.02.381.02l.928.019.808.025.813.032.591.032c.486.075 1.007.036 1.475.114.404.068.804.065 1.182.14.113.022.245.015.33.064v.006c-.039.094-.336.255-.432.318l-1.055.743-2.256 1.62-1.417.992c.003.048.024.035.045.061 1.15.167 2.52.258 3.77.262 1.298.005 2.465-.094 3.118-.193.561-.086 1.082-.147 1.653-.287.325-.08.521-.148.521-.148z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      7067: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M16.542 10.63c-1.105-.636-2.494-1.033-4.025-1.118l.808-2.393 2.182.637c0 .963.78 1.742 1.743 1.742.964 0 1.758-.779 1.758-1.742C19.008 6.78 18.214 6 17.25 6c-.609 0-1.148.326-1.459.793l-2.65-.764a.482.482 0 00-.61.311l-1.063 3.172c-1.516.085-2.905.482-4.01 1.119a1.987 1.987 0 00-1.46-.623A1.995 1.995 0 004 12.004c0 .75.425 1.403 1.035 1.742-.029.17-.043.34-.043.51 0 2.62 3.146 4.744 7.015 4.744 3.855 0 7-2.124 7-4.744 0-.17-.013-.34-.042-.51A1.974 1.974 0 0020 12.004a1.995 1.995 0 00-1.998-1.996 2.01 2.01 0 00-1.46.623zM9.499 12.5a1.01 1.01 0 011.006 1.006.998.998 0 01-1.006.991.986.986 0 01-.992-.991.997.997 0 01.992-1.006zm5.002 0a.998.998 0 00-.992 1.006c0 .552.44.991.992.991a.998.998 0 001.006-.991 1.01 1.01 0 00-1.006-1.006zm-5.3 3.597a.484.484 0 01-.085-.694c.156-.226.482-.255.694-.085.567.44 1.474.68 2.197.68.709 0 1.616-.24 2.197-.68a.484.484 0 01.694.085.496.496 0 01-.085.694c-.737.58-1.885.907-2.806.907-.935 0-2.07-.326-2.806-.907zm8.05-7.59a.757.757 0 01-.752-.75c0-.426.34-.752.751-.752s.752.326.752.751c0 .41-.34.75-.752.75z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      9922: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.019 15.562l-.001-.003-.018.002a.055.055 0 00.019.001zM7.71 12.398l.146-.68c.048-.205.03-.452.03-.692V9.812L7.88 8c-.139 0-.278.043-.393.076-.358.102-.666.201-.962.352-1.158.59-2.022 1.565-2.387 2.944-.343 1.297-.007 2.652.522 3.507.118.19.269.48.44.61.135-.02.272-.15.375-.217a6.06 6.06 0 00.622-.452l.24-.229c.63-.506 1.075-1.346 1.373-2.193zm4.276 3.164h.02a.382.382 0 00-.019-.003v.003zm-3.01-.888l-.258-.575-.088-.264h-.01l-.264.498c-.176.288-.358.574-.557.839a6.5 6.5 0 01-.85.944l-.517.422.012.024.287.14c.206.091.43.173.657.235.788.217 1.811.177 2.545-.053.178-.055.643-.194.739-.305v-.017c-.177-.092-.324-.254-.47-.381a5.573 5.573 0 01-1.225-1.507zm10.884-3.302c-.365-1.379-1.23-2.354-2.387-2.944a5.277 5.277 0 00-.962-.352c-.115-.033-.254-.077-.393-.076l-.005 1.812v1.214c0 .24-.019.487.029.692l.147.68c.297.847.741 1.687 1.372 2.193l.24.23c.196.164.402.309.622.45.103.067.24.198.375.218.171-.13.322-.42.44-.61.529-.855.865-2.21.522-3.507zm-3.66 3.8c-.2-.265-.381-.55-.557-.839l-.264-.498h-.011l-.088.264-.258.575a5.576 5.576 0 01-1.226 1.507c-.145.127-.292.29-.469.38v.018c.096.111.561.25.739.305.734.23 1.757.27 2.545.053a4.85 4.85 0 00.657-.234l.287-.141a1.31 1.31 0 00.012-.024l-.516-.422a6.5 6.5 0 01-.85-.944zm-1.653-2.727c.068-.192.097-.402.146-.61.05-.21.024-.484.024-.727V9.753l-.006-1.741c-.015-.008-.02-.01-.047-.012-.197.047-.326.05-.592.14-.357.102-.685.275-.985.44-.289.16-.53.388-.78.587-.097.077-.199.19-.308.312l.01.01a1.19 1.19 0 00-.01.012l.36.47c.232.359.445.763.581 1.213.326 1.079.182 2.411-.235 3.273a4.9 4.9 0 01-.445.75l-.258.323a.018.018 0 01-.003.007c.004.007.01.016.012.022h.008c.395-.215.686-.574 1.027-.844.189-.15.354-.35.504-.54.404-.514.755-1.046.997-1.73zm-2.55 3.085l-.259-.323a4.903 4.903 0 01-.445-.75c-.417-.862-.561-2.194-.235-3.273.136-.45.35-.854.58-1.214L12 9.501l-.01-.011.01-.01a2.791 2.791 0 00-.308-.313c-.25-.2-.491-.427-.78-.586-.3-.166-.628-.339-.985-.44-.266-.09-.395-.094-.592-.141a.083.083 0 00-.047.012l-.006 1.741v1.355c0 .243-.026.517.024.727.049.208.078.418.146.61.242.684.593 1.216.997 1.73.15.19.315.39.505.54.34.27.63.629 1.026.844h.008c.001-.006.008-.015.012-.022a.019.019 0 01-.003-.007z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      4537: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.266 14.696c-.103.421.55.447.64.063.037-.191-.103-.332-.282-.332-.167 0-.333.128-.358.269zm-.128.945c.102-.498-.307-.869-.793-.843-.46.038-.843.358-.92.754-.115.511.307.882.793.844.46-.026.843-.345.92-.755zm3.797-3.157c-1.586-.997-3.707-1.01-5.42-.447-.857.28-1.764.818-2.301 1.495-.627.793-.882 1.815-.23 2.8.958 1.431 3.413 2.033 5.675 1.508 1.33-.307 2.749-1.048 3.35-2.326.562-1.177-.052-2.378-1.074-3.03zm-3.17.498c.945.167 1.7.755 1.827 1.739.243 1.854-2.173 3.336-4.026 2.327a1.933 1.933 0 01-.742-2.723c.435-.767 1.266-1.266 2.148-1.355a2.75 2.75 0 01.793.012zm6.11-.37c-.268-.18-.538-.281-.856-.383-.308-.103-.359-.154-.243-.46.076-.218.14-.41.166-.666.14-1.15-.793-1.495-1.854-1.406-.498.039-.92.167-1.355.307-.281.09-.806.384-.92.205-.064-.09.013-.23.038-.32.166-.626.23-1.496-.384-1.88-.447-.28-1.227-.204-1.7-.038-2.556.87-6.455 4.552-5.663 7.479.18.664.55 1.163.908 1.521 1.061 1.061 2.71 1.65 4.231 1.866 1.112.154 2.263.14 3.375-.064 1.815-.332 3.554-1.15 4.679-2.607.754-.972.997-2.352 0-3.235a3.334 3.334 0 00-.422-.319zm1.623-3.682c.652 1.483-.064 2.148.166 2.66.192.421.767.46 1.023.14.191-.243.294-.959.307-1.278a4.193 4.193 0 00-1.125-3.12c-.984-1.073-2.276-1.444-3.694-1.303-.256.025-.46.064-.601.217-.332.358-.166.882.294.959.384.063 1.342-.23 2.416.396.498.307.971.792 1.214 1.33zm-3.45-.562c-.282.345-.078.87.408.856.294-.012.358-.05.677.051.307.103.626.448.64.857.025.268-.282.895.32 1.061a.523.523 0 00.536-.166c.115-.128.166-.371.192-.575.089-.857-.333-1.598-1.01-2.02-.384-.23-1.445-.46-1.764-.064z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      4818: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M19.537 13.698c.115-.52.176-1.06.176-1.614 0-4.155-3.415-7.524-7.63-7.524-.444 0-.88.038-1.304.11A4.444 4.444 0 008.425 4C5.981 4 4 5.954 4 8.364c0 .805.222 1.56.608 2.207a7.428 7.428 0 00-.155 1.513c0 4.156 3.416 7.4 7.63 7.4.477 0 .944-.044 1.397-.126.623.33 1.335.642 2.092.642 2.444 0 4.425-1.953 4.425-4.364a4.3 4.3 0 00-.46-1.938zm-3.974 1.457c-.294.418-.725.747-1.293.984-.567.238-1.239.356-2.016.356-.933 0-1.702-.162-2.308-.486a2.986 2.986 0 01-1.047-.934c-.268-.39-.403-.768-.403-1.137 0-.213.08-.395.242-.547a.855.855 0 01.615-.229.76.76 0 01.512.178c.14.119.26.294.358.527.12.278.25.51.39.695.139.185.336.34.589.46.254.12.587.18 1 .18.566 0 1.027-.12 1.382-.364.354-.243.532-.547.532-.91a.919.919 0 00-.287-.702 1.88 1.88 0 00-.741-.412 13.21 13.21 0 00-1.216-.303c-.678-.146-1.247-.318-1.703-.513-.458-.196-.822-.463-1.09-.8-.269-.34-.403-.759-.403-1.26 0-.48.142-.904.426-1.275.283-.372.693-.658 1.23-.858.537-.2 1.17-.299 1.895-.299.58 0 1.082.066 1.505.198.423.133.774.309 1.053.528.28.22.484.45.612.691.13.24.194.477.194.705 0 .21-.08.4-.241.567a.8.8 0 01-.603.252c-.22 0-.386-.05-.5-.151-.114-.101-.237-.266-.37-.495a2.27 2.27 0 00-.618-.768c-.241-.184-.627-.276-1.16-.276-.494 0-.893.1-1.196.3-.303.199-.455.44-.455.72 0 .173.053.324.155.45.103.128.245.235.426.326.18.091.363.162.547.214.185.052.49.126.916.225a15.47 15.47 0 011.446.38c.432.138.8.307 1.103.503.302.198.54.45.709.752.17.302.255.673.255 1.111 0 .525-.148.998-.442 1.417z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      206: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M17.315 8.49l-.214 1.987-3.436 3.382h-1.826l-.698 1.826v2.523l-2.47-.698 2.846-5.1L4 8.167l5.638.752L6.899 5l7.463 4.027 2.202-2.47h1.02L20 7.631z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      1338: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      296: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.813 6.01a4.397 4.397 0 00-4.326 6.121c.087.199.312.29.511.2a.382.382 0 00.206-.51 3.566 3.566 0 01-.286-1.668A3.616 3.616 0 018.76 6.79a3.615 3.615 0 013.366 3.84 3.615 3.615 0 01-4.65 3.218.39.39 0 00-.486.263.394.394 0 00.262.485c.315.093.647.152.977.174a4.397 4.397 0 004.677-4.087A4.398 4.398 0 008.813 6.01zm-1.348 5.658a1.67 1.67 0 10-.46-.655c-.274.27-.565.59-.854.966-1.022 1.315-2.224 3.694-2.148 7.007.006.204.157.484.355.497l.04.002c.213.015.394-.301.391-.516-.064-2.458.6-4.662 1.955-6.423.242-.316.488-.626.72-.878zm12.388 4.106c-1.307-.48-2.302-1.27-2.95-2.352a4.873 4.873 0 01-.354-.71.819.819 0 00.337-.36.829.829 0 00-.395-1.098.822.822 0 00-1.098.392.822.822 0 00.724 1.177c.091.237.218.516.39.81.483.812 1.431 1.912 3.196 2.558a.226.226 0 00.278-.113c0-.006.005-.01.007-.022a.224.224 0 00-.135-.282zm-3.767-1.676a2.04 2.04 0 01-1.707-3.042 2.039 2.039 0 012.784-.787 2.04 2.04 0 01.786 2.783 1.92 1.92 0 01-.268.378.223.223 0 00.014.314c.09.082.234.074.313-.016a2.489 2.489 0 10-4.017-2.89 2.493 2.493 0 002.08 3.708.224.224 0 00.015-.448z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      1121: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.72 7.7h3.699v2.857h-3.7v4.102c0 .928-.01 1.463.087 1.726.098.262.343.534.61.69.355.213.758.32 1.214.32.81 0 1.616-.264 2.417-.79v2.522c-.683.322-1.302.55-1.857.678a7.94 7.94 0 01-1.798.195 4.905 4.905 0 01-1.724-.276 4.215 4.215 0 01-1.438-.79c-.399-.343-.673-.706-.826-1.09-.154-.386-.23-.945-.23-1.676v-5.611H7V8.29c.628-.203 1.357-.496 1.804-.877.45-.382.809-.84 1.08-1.374.272-.534.459-1.214.56-2.039h2.276v3.7z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      8910: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M13.5222 10.7749L19.4785 4H18.0671L12.8952 9.88256L8.76437 4H4L10.2466 12.8955L4 20H5.41155L10.8732 13.7878L15.2356 20H20L13.5222 10.7749ZM11.5889 12.9738L10.956 12.0881L5.92015 5.03974H8.0882L12.1522 10.728L12.7851 11.6137L18.0677 19.0075H15.8997L11.5889 12.9738Z' fill='%23fff'/%3e %3c/svg%3e";
      },
      4453: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23FFF' fill-rule='evenodd'%3e%3cpath d='M18.434 15.574c-.484-.391-1.002-.743-1.511-1.102-1.016-.718-1.945-.773-2.703.38-.426.648-1.021.677-1.644.392-1.718-.782-3.044-1.989-3.821-3.743-.344-.777-.34-1.473.465-2.022.425-.29.854-.634.82-1.268-.045-.828-2.043-3.593-2.832-3.885a1.429 1.429 0 00-.984 0C4.373 4.95 3.606 6.48 4.34 8.292c2.19 5.405 6.043 9.167 11.349 11.463.302.13.638.183.808.23 1.208.012 2.623-1.158 3.032-2.318.393-1.117-.438-1.56-1.096-2.093zM12.485 4.88c3.879.6 5.668 2.454 6.162 6.38.045.363-.09.909.426.919.538.01.408-.528.413-.89.045-3.699-3.163-7.127-6.888-7.253-.281.04-.863-.195-.9.438-.024.427.466.357.787.406z'/%3e%3cpath d='M13.244 5.957c-.373-.045-.865-.222-.953.299-.09.546.458.49.811.57 2.395.538 3.23 1.414 3.624 3.802.057.349-.057.89.532.8.436-.066.278-.53.315-.802.02-2.293-1.936-4.38-4.329-4.669z'/%3e%3cpath d='M13.464 7.832c-.249.006-.493.033-.585.3-.137.4.152.496.446.544.983.158 1.5.74 1.598 1.725.027.268.195.484.452.454.356-.043.389-.361.378-.664.017-1.106-1.227-2.385-2.289-2.359z'/%3e%3c/g%3e%3c/svg%3e";
      },
      2224: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.878 17.304c-5.411 0-8.695-3.755-8.823-9.994h2.74c.086 4.583 2.171 6.528 3.77 6.925V7.31h2.627v3.954c1.542-.17 3.155-1.97 3.698-3.954h2.584c-.414 2.441-2.17 4.24-3.412 4.983 1.242.6 3.24 2.17 4.011 5.01h-2.84c-.6-1.898-2.07-3.369-4.04-3.569v3.57h-.315Z' fill='%23fff'/%3e%3c/svg%3e";
      },
      6281: function (e) {
        e.exports =
          "data:image/svg+xml,%3csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M20 11.794c0 4.304-3.517 7.794-7.855 7.794a7.87 7.87 0 01-3.796-.97L4 20l1.418-4.182a7.714 7.714 0 01-1.127-4.024C4.29 7.489 7.807 4 12.145 4S20 7.49 20 11.794zm-7.855-6.553c-3.641 0-6.603 2.94-6.603 6.553A6.48 6.48 0 006.8 15.636l-.825 2.433 2.537-.806a6.6 6.6 0 003.633 1.084c3.642 0 6.604-2.94 6.604-6.553s-2.962-6.553-6.604-6.553zm3.967 8.348c-.049-.08-.177-.128-.37-.223-.192-.095-1.139-.558-1.315-.621-.177-.064-.305-.096-.434.095a10.92 10.92 0 01-.61.749c-.112.128-.224.143-.416.048-.193-.096-.813-.297-1.549-.948a5.76 5.76 0 01-1.07-1.323c-.113-.191-.013-.295.084-.39.086-.086.192-.223.289-.334.096-.112.128-.191.192-.319s.032-.239-.016-.335c-.048-.095-.433-1.035-.594-1.418-.16-.382-.32-.318-.433-.318-.112 0-.24-.016-.369-.016a.71.71 0 00-.513.239c-.177.19-.674.653-.674 1.593s.69 1.848.786 1.976c.096.127 1.332 2.119 3.289 2.884 1.958.764 1.958.51 2.31.477.353-.031 1.14-.461 1.3-.908.16-.446.16-.829.113-.908z' fill='%23FFF' fill-rule='evenodd'/%3e%3c/svg%3e";
      },
      359: function (e, t, o) {
        var r = {
          "./blogger.svg": 5404,
          "./delicious.svg": 4441,
          "./digg.svg": 292,
          "./evernote.svg": 2716,
          "./linkedin.svg": 7616,
          "./lj.svg": 4343,
          "./messenger.svg": 3123,
          "./moimir.svg": 1618,
          "./odnoklassniki.svg": 1678,
          "./pinterest.svg": 2242,
          "./pocket.svg": 3433,
          "./qzone.svg": 3664,
          "./reddit.svg": 7067,
          "./renren.svg": 9922,
          "./sinaWeibo.svg": 4537,
          "./skype.svg": 4818,
          "./surfingbird.svg": 206,
          "./telegram.svg": 1338,
          "./tencentWeibo.svg": 296,
          "./tumblr.svg": 1121,
          "./twitter.svg": 8910,
          "./viber.svg": 4453,
          "./whatsapp.svg": 6281,
        };
        function n(e) {
          var t = a(e);
          return o(t);
        }
        function a(e) {
          if (!o.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (n.keys = function () {
          return Object.keys(r);
        }),
          (n.resolve = a),
          (e.exports = n),
          (n.id = 359);
      },
      987: function (e, t, o) {
        var r = {
          "./blogger.js": 3327,
          "./delicious.js": 1138,
          "./digg.js": 3681,
          "./evernote.js": 5935,
          "./linkedin.js": 9941,
          "./lj.js": 9767,
          "./messenger.js": 9095,
          "./moimir.js": 3118,
          "./odnoklassniki.js": 6578,
          "./pinterest.js": 7617,
          "./pocket.js": 6435,
          "./qzone.js": 8107,
          "./reddit.js": 3968,
          "./renren.js": 3189,
          "./sinaWeibo.js": 9111,
          "./skype.js": 2468,
          "./surfingbird.js": 4776,
          "./telegram.js": 75,
          "./tencentWeibo.js": 8175,
          "./tumblr.js": 7210,
          "./twitter.js": 3125,
          "./viber.js": 163,
          "./whatsapp.js": 7965,
        };
        function n(e) {
          var t = a(e);
          return o(t);
        }
        function a(e) {
          if (!o.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (n.keys = function () {
          return Object.keys(r);
        }),
          (n.resolve = a),
          (e.exports = n),
          (n.id = 987);
      },
    },
    t = {};
  function o(r) {
    var n = t[r];
    if (n !== undefined) return n.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, o), a.exports;
  }
  (o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
    (function () {
      "use strict";
      o(1072);
      var e = i(o(4636)),
        t = o(6177),
        r = i(o(30)),
        n = i(o(1677)),
        a = o(1102);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          s(e)
        );
      }
      var c = (0, t.loadPlugins)(),
        l = new r["default"](e["default"].metrika.id),
        p = e["default"].defaults,
        _ = (0, n["default"])({ defaults: p, plugins: c, metrika: l });
      (0, a.ready)(function () {
        l.init(), _(".ya-share2", { reinit: !1 });
      }),
        (window.Ya = window.Ya || {}),
        (window.Ya.share2 = function (e, t) {
          if ("object" === s(e) && 1 === e.nodeType) return _(e, t)[0];
          if ("string" == typeof e)
            return (
              0 === e.indexOf("#") &&
                (console.log(
                  "DEPRECATION: use element id instead of query selector for initialization"
                ),
                (e = e.slice(1))),
              _("#" + e, t)[0]
            );
          throw new TypeError("Neither element nor element id is provided");
        }),
        (window.Ya.share2.metrikaStrategy = l.strategy);
    })();
})();
//# sourceMappingURL=share.js.map
