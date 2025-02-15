var window = global;

var div = {
  getAttribute: function() {
    return 
  }, 
  addEventListener: function() {
    // console.log(arguments);
  }, 
  contentWindow: window
};

var document = {
  createElement: function() {
    return div;
  }, 
  createEvent: function() {
    return {}
  }, 
  getElementById: function() {
    console.log(arguments);
    
    return div;
  }, 
  getElementsByTagName: function() {
    // console.log(arguments);
    
    return {div, div, div};
  }, 
  addEventListener: function() {
    // console.log(arguments);
  }, 
  compatMode: "CSS1Compat", 
  documentElement: {}, 
  body: div
};
window.document = document;

var navigator = {
  userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36", 
  maxTouchPoints: 0
};
window.navigator = navigator;

var location = {
  hostname: 'music.163.com', 
  protocol: 'https:', 
  host: "music.163.com"
}
window.location = location;

window.setTimeout = function() {};
window.addEventListener = function() {
  // console.log(arguments);
  
};

function deepProxy(obj, name) {
  return new Proxy(obj, {
      get: function (target, p, receive) {
          try {
              console.log(`获取对象${name} -> ${p} = ${typeof target[p]}`);

              if (p == "innerText") {
                  debugger;
              }
          } catch (e) {
              console.log(`获取对象${name} -> ? = ${typeof target[p]}`);
          }
          var temp = Reflect.get(target, p, receive);
          if (typeof temp == "object") {
              temp = deepProxy(temp, `${name} -> ${p}`);
          }
          return temp;
      },
      set: function (target, p, value, receive) {
          console.log(`设置对象${name} -> ${p} = ${value}`);
          if (p == "cookie") {
              // debugger;
          }
          var temp = Reflect.set(target, p, value, receive);
          return temp;
      }
  });
}
function build(names) {
  for (var name of names) {
      try {
          eval(name);
      } catch (e) {
          eval(`${name} = {};`);
      }
      eval(`${name} = deepProxy(${name}, "${name}")`);
  }
}

// build(["document", "window", "navigator", "location", "script", "a", "meta", "form", "body"]);
// build(["document", "window", "navigator", "location", "script", "a", "meta", "form", "body"]);


var M, MF;

var caller;

window["NECaptcha"] = function (a) {
  function W(R) {
    if (U[R]) return U[R]["exports"];
    var P = U[R] = {
      'exports': {},
      'id': R,
      'loaded': !1
    };
    // console.log(R);
    
    return a[R]["call"](P["exports"], P, P["exports"], W), P["loaded"] = !0, P["exports"];
  }
  caller = W;
  var U = {};
  return W['m'] = a, W['c'] = U, W['p'] = "/2.27.2/";
}([function (a, W, U) {
  U(69), U(59);
  var R = U(40);
  a['exports'] = R;
}, function (a, W, U) {
  a["exports"] = U['p'] + 'images/icon_light.31e2edc.png';
}, function (a, W, U) {
  a["exports"] = U['p'] + "images/icon_light@2x.d217d05.png";
}, function (a, W) {
  var MY = MF,
    U = {}["toString"],
    R = "ujg3ps2znyw",
    P = {
      'slice': function (z, A, G) {
        for (var j = [], L = A || 0, E = G || z["length"]; L < E; L++) j["push"](L);
        return j;
      },
      'getObjKey': function (z, A) {
        for (var G in z) if (z["hasOwnProperty"](G) && z[G] === A) return G;
      },
      'typeOf': function (z) {
        return null == z ? String(z) : U["call"](z)["slice"](8, -1)["toLowerCase"]();
      },
      'isFn': function (z) {
        return "function" == typeof z;
      },
      'log': function (z, A) {
        var G = ['info', "warn", "error"];
        return "string" == typeof z && ~G['indexOf'](z) ? void (console && console[z]("[NECaptcha] " + A)) : void P['error']("util.log(type, msg): \"type\" must be one string of " + G['toString']());
      },
      'warn': function (z) {
        P["log"]("warn", z);
      },
      'error': function (z) {
        P["log"]("error", z);
      },
      'assert': function (z, A) {
        if (!z) throw new Error("[NECaptcha] " + A);
      },
      'msie': function z() {
        var A = navigator["userAgent"],
          G = parseInt((/msie (\d+)/["exec"](A["toLowerCase"]()) || [])[1]);
        return isNaN(G) && (G = parseInt((/trident\/.*; rv:(\d+)/["exec"](A["toLowerCase"]()) || [])[1])), G;
      },
      'now': function () {
        return new Date()["getTime"]();
      },
      'getIn': function (A, G, j) {
        if ("[object Object]" !== Object["prototype"]["toString"]["call"](A)) return j;
        'string' == typeof G && (G = G["split"]('.'));
        for (var L = 0, E = G["length"]; L < E; L++) {
          var Q = G[L];
          if (L < E - 1 && !A[Q]) return j || void 0;
          A = A[Q];
        }
        return A;
      },
      'raf': function A(G) {
        var a1 = MY,
          j = window['requestAnimationFrame'] || window["webkitRequestAnimationFrame"] || function (L) {
            window["setTimeout"](L, 16);
          };
        j(G);
      },
      'nextFrame': function (G) {
        P["raf"](function () {
          return P['raf'](G);
        });
      },
      'sample': function (G, j) {
        var L = G["length"];
        if (L <= j) return G;
        for (var E = [], Q = 0, k = 0; k < L; k++) k >= Q * (L - 1) / (j - 1) && (E['push'](G[k]), Q += 1);
        return E;
      },
      'template': function (G, j) {
        var L = function (h) {
            return h["replace"](/([.*+?^${}()|[\]\/\\])/g, "\\$1");
          },
          E = {
            'start': '<%',
            'end': '%>',
            'interpolate': /<%=(.+?)%>/g
          },
          Q = E,
          k = new RegExp("'(?=[^" + Q["end"]["substr"](0, 1) + ']*' + L(Q["end"]) + ')', 'g'),
          l = new Function('obj', "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + G['replace'](/[\r\t\n]/g, '\x20')["replace"](k, '\x09')["split"]('\x27')["join"]('\x5c\x27')['split']('\x09')["join"]('\x27')["replace"](Q["interpolate"], "',$1,'")['split'](Q["start"])["join"]("');")["split"](Q["end"])["join"]('p.push(\x27') + "');}return p.join('');");
        return j ? l(j) : l;
      },
      'uuid': function G(j, L) {
        var E = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"["split"](''),
          Q = [],
          k = void 0;
        if (L = L || E["length"], j) {
          for (k = 0; k < j; k++) Q[k] = E[0 | Math["random"]() * L];
        } else {
          var l = void 0;
          for (Q[8] = Q[13] = Q[18] = Q[23] = '-', Q[14] = '4', k = 0; k < 36; k++) Q[k] || (l = 0 | 16 * Math["random"](), Q[k] = E[19 === k ? 3 & l | 8 : l]);
        }
        return Q["join"]('');
      },
      'reverse': function (j) {
        return Array["isArray"](j) ? j["reverse"]() : 'string' === P["typeOf"](j) ? j["split"]('')['reverse']()["join"]('') : j;
      },
      'encodeUrlParams': function (j) {
        var L = [];
        for (var E in j) j["hasOwnProperty"](E) && L['push'](window["encodeURIComponent"](E) + '=' + window["encodeURIComponent"](j[E]));
        return L["join"]('&');
      },
      'adsorb': function (j, L, E) {
        return void 0 === L || null === L || void 0 === E || null === E ? j : Math["max"](Math["min"](j, E), L);
      },
      'unique2DArray': function (j) {
        var L = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!Array["isArray"](j)) return j;
        for (var E = {}, Q = [], k = 0, l = j["length"]; k < l; k++) {
          var h = j[k][L];
          null === h || void 0 === h || E[h] || (E[h] = !0, Q["push"](j[k]));
        }
        return Q;
      },
      'setDeviceToken': function (j) {
        try {
          window["localStorage"]["setItem"](R, j);
        } catch (L) {
          return null;
        }
      },
      'getDeviceToken': function () {
        try {
          var j = window["localStorage"]["getItem"](R);
          return j;
        } catch (L) {
          return null;
        }
      }
    };
  a['exports'] = P;
}, function (W, U, R) {
  var aP = MF;
  function P(B) {
    if (B = B || window["event"], B[F]) return B;
    this["event"] = B, this["target"] = B["target"] || B['srcElement'];
    var I = this["type"] = B["type"];
    if (K["test"](I) && (this["clientX"] = B['clientX'] || B["changedTouches"] && B["changedTouches"][0]["clientX"], this["clientY"] = B["clientY"] || B["changedTouches"] && B["changedTouches"][0]['clientY'], this["pageX"] = null != B["pageX"] ? B['pageX'] : B['clientX'] + X['scrollLeft'], this["pageY"] = null != B["pageX"] ? B["pageY"] : B["clientY"] + X["scrollTop"], "mouseover" === I || 'mouseout' === I)) {
      for (var Z = B["relatedTarget"] || B[('mouseover' === I ? 'from' : 'to') + 'Element']; Z && 3 === Z['nodeType'];) Z = Z['parentNode'];
      this['relatedTarget'] = Z;
    }
    this[F] = !0;
  }
  function z(B) {
    var I = B["nodeType"];
    return 1 === I || 9 === I || 11 === I ? "string" == typeof B["textContent"] ? B["textContent"] : B["innerText"] : 3 === I || 4 === I ? B["nodeValue"] : '';
  }
  var A,
    G,
    j = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (B) {
      return typeof B;
    } : function (B) {
      return B && "function" == typeof Symbol && B["constructor"] === Symbol && B !== Symbol["prototype"] ? "symbol" : typeof B;
    },
    L = R(3),
    E = R(19),
    Q = document["createElement"]("div"),
    K = /^(?:click|dblclick|contextmenu|DOMMouseScroll|(mouse|touch|pointer)(?:\w+))$/,
    X = document;
  X = X["compatMode"] && 'CSS1Compat' !== X["compatMode"] ? X['body'] : X["documentElement"];
  var T = /Mobile/i["test"](window["navigator"]['userAgent']),
    O = T && /Android/i["test"](window["navigator"]["userAgent"]),
    N = function () {
      var B = 0,
        I = !1,
        Z = window["navigator"];
      "undefined" != typeof Z["maxTouchPoints"] ? B = Z["maxTouchPoints"] : "undefined" != typeof Z["msMaxTouchPoints"] && (B = Z["msMaxTouchPoints"]);
      try {
        document["createEvent"]("TouchEvent"), I = !0;
      } catch (C0) {}
      var H = "ontouchstart" in window;
      return B > 0 || I || H;
    }(),
    J = function () {
      try {
        return document["createEvent"]("PointerEvent"), !0;
      } catch (B) {
        return !1;
      }
    }(),
    q = function () {
      try {
        var B = new Audio();
        return "oncanplaythrough" in B;
      } catch (I) {
        return !1;
      }
    }(),
    S = "undefined" != typeof window["CanvasRenderingContext2D"],
    V = {
      'click': "touchstart",
      'mousedown': 'touchstart',
      'mousemove': "touchmove",
      'mouseup': "touchend"
    },
    F = "_fixed_" + Math["random"]()['toString'](36)["slice"](2, 7),
    w = !1;
  try {
    document["createElement"]("div")["addEventListener"]("test", function () {}, Object['defineProperty']({}, 'passive', {
      'get': function () {
        return w = !0, !1;
      }
    }));
  } catch (B) {}
  Object["assign"](P['prototype'], {
    'stop': function () {
      this['preventDefault']()['stopPropagation']();
    },
    'preventDefault': function () {
      var I = this["event"];
      return !N && I['preventDefault'] ? I["preventDefault"]() : I["returnValue"] = !1, this;
    },
    'stopPropagation': function () {
      return this["event"]["stopPropagation"] ? this["event"]["stopPropagation"]() : this["event"]["cancelBubble"] = !0, this;
    },
    'stopImmediatePropagation': function () {
      this['event']["stopImmediatePropagation"] && this["event"]['stopImmediatePropagation']();
    }
  });
  var D = {};
  D["body"] = document["body"], D['doc'] = document, D['isMobile'] = T, D["isAndroid"] = O, D["supportTouch"] = N, D['supportPointer'] = J, D["supportPassive"] = w, D['supportAudio'] = q, D['supportCanvas'] = S, Q['addEventListener'] ? (A = function (I, Z, H) {
    // I["addEventListener"](Z, H, !1);
  }, G = function (I, Z, H) {
    // I["removeEventListener"](Z, H, !1);
  }) : (A = function (I, Z, H) {
    I["attachEvent"]('on' + Z, H);
  }, G = function (I, Z, H) {
    I['detachEvent']('on' + Z, H);
  }), D['on'] = function (I, Z, H) {
    var aK = aP,
      C0 = arguments["length"] > 3 && void 0 !== arguments[3] && arguments[3],
      C1 = Z["split"]('\x20');
    return H["real"] = function (C2) {
      var C3 = new P(C2);
      C3['origin'] = I, H['call'](I, C3);
    }, C1["map"](function (C2) {
      switch (!0) {
        case T:
          A(I, (C0 ? C2 : V[C2]) || C2, H["real"]);
          break;
        case !T && N:
          A(I, C2, H["real"]), 'click' !== C2 && A(I, V[C2], H["real"]);
          break;
        default:
          A(I, C2, H['real']);
      }
    }), D;
  }, D['once'] = function (I, Z, H) {
    var C0 = function C1() {
      var C2 = H["apply"](this, arguments);
      return D["off"](I, Z, C1), C2;
    };
    return D['on'](I, Z, C0);
  }, D["off"] = function (I, Z, H) {
    var C0 = arguments['length'] > 3 && void 0 !== arguments[3] && arguments[3],
      C1 = Z['split']('\x20');
    H = H["real"] || H, C1["map"](function (C2) {
      switch (!0) {
        case T:
          G(I, (C0 ? C2 : V[C2]) || C2, H);
          break;
        case !T && N:
          G(I, C2, H), G(I, V[C2], H);
          break;
        default:
          G(I, C2, H);
      }
    });
  }, D["find"] = function (I, Z) {
    return "object" === ("undefined" == typeof I ? "undefined" : j(I)) && I['nodeType'] ? I : I ? (I = I["trim"](), Z = Z || document, Z["querySelector"] ? Z["querySelector"](I) : /^#[^#]+$/["test"](I) ? document["getElementById"](I['slice'](1)) : /^\.[^.]+$/["test"](I) ? D["getElementsByClassName"](I['slice'](1), Z)[0] || null : /^[^.#]+$/["test"](I) ? Z["getElementsByTagName"](I)[0] || null : null) : null;
  }, D['findAll'] = function (I, Z) {
    if (Z = Z || document, I = I["trim"](), Z["querySelectorAll"]) return Z["querySelectorAll"](I);
    if (/^#[^#]+$/["test"](I)) {
      var H = document["getElementById"](I["slice"](1));
      return H ? [H] : [];
    }
    return /^\.[^.]+$/["test"](I) ? D["getElementsByClassName"](I["slice"](1), Z) : /^[^.#]+$/["test"](I) ? Z['getElementsByTagName'](I) : [];
  }, D["html"] = function (I, Z) {
    return 'undefined' === L["typeOf"](Z) ? I["innerHTML"] : void (I['innerHTML'] = Z);
  }, D["css"] = function (I, Z) {
    I['style']["cssText"] += ';' + Z;
  }, D["replace"] = function (I, Z) {
    Z['parentNode'] && Z["parentNode"]["replaceChild"](I, Z);
  }, D["remove"] = function (I) {
    I['parentNode'] && I["parentNode"]["removeChild"](I);
  }, D["getComputedStyle"] = function (I, Z) {
    var H = I["currentStyle"] || window['getComputedStyle'](I, null);
    return Z ? H[Z] : H;
  }, D['addClass'] = function (I, Z) {
    if (I) {
      var H = I["className"] || '';
      ~('\x20' + H + '\x20')['indexOf']('\x20' + Z + '\x20') || (I["className"] = H ? H + '\x20' + Z : Z);
    }
  }, D["delClass"] = function (I, Z) {
    if (I) {
      var H = I["className"] || '';
      I["className"] = ('\x20' + H + '\x20')["replace"]('\x20' + Z + '\x20', '\x20')['trim']();
    }
  }, D['hasClass'] = function (I, Z) {
    if (!I) return !1;
    var H = I["className"] || '';
    return ~('\x20' + H + '\x20')["indexOf"]('\x20' + Z + '\x20');
  }, D['getElementsByClassName'] = function (I, Z) {
    if (Z = Z || document, document["getElementsByClassName"]) return Z['getElementsByClassName'](I);
    for (var H, C0 = Z["getElementsByTagName"]('*'), C1 = [], C2 = 0, C3 = C0['length']; C2 < C3; C2++) H = C0[C2], ~('\x20' + H["className"] + '\x20')["indexOf"]('\x20' + I + '\x20') && C1["push"](H);
    return C1;
  }, D['getBubblePath'] = function (I) {
    for (var Z = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : document, H = [], C0 = I; C0 && C0 !== Z;) H['push'](C0), C0 = C0["parentNode"];
    return H;
  }, D["transition"] = function (I, Z) {
    var ae = aP;
    function H() {}
    L["assert"](I && I['nodeType'], 'transition(el,\x20opts)\x20\x22el\x22\x20must\x20be\x20a\x20DOM\x20element!');
    var C0 = {
      'name': '',
      'enter-class': '',
      'enter-active-class': '',
      'leave-class': '',
      'leave-active-class': '',
      'beforeEnter': H,
      'enter': H,
      'afterEnter': H,
      'enterCanceled': H,
      'beforeLeave': H,
      'leave': H,
      'afterLeave': H,
      'leaveCanceled': H,
      'insert': H
    };
    Z = Object['assign']({}, C0, Z);
    var C1 = Z,
      C2 = C1["name"],
      C3 = C1["beforeEnter"],
      C4 = C1["enter"],
      C5 = C1["afterEnter"],
      C6 = C1["enterCanceled"],
      C7 = C1["beforeLeave"],
      C8 = C1["leave"],
      C9 = C1["afterLeave"],
      CC = C1['leaveCanceled'],
      CM = C1['insert'],
      Ca = Z["enter-class"] || C2 && C2 + "-enter",
      CW = Z["enter-active-class"] || C2 && C2 + "-enter-active",
      CU = Z["leave-class"] || C2 && C2 + "-leave",
      CR = Z["leave-active-class"] || C2 && C2 + "-leave-active",
      CP = !L["msie"]() || L["msie"]() > 9,
      Cz = "transitionend",
      CA = 'animationend',
      CG = !0,
      Cj = !1,
      CL = !1;
    if (void 0 === window["ontransitionend"] && void 0 !== window["onwebkittransitionend"] && (Cz = "webkitTransitionEnd"), void 0 === !window["onanimationend"] && void 0 !== window['onwebkitanimationend'] && (CA = "webkitAnimationEnd"), CP) {
      var CE = function () {
        Cj && (CG = !0, Cj = !1, D["delClass"](I, CW), C5(I)), CL && (CL = !1, D["delClass"](I, CR), C9(I));
      };
      I["addEventListener"](Cz, CE), I["addEventListener"](CA, CE);
    }
    return {
      'enter': function () {
        if (I) {
          if (!CP) return CM(I), void C5(I);
          I["className"] = E(I["className"]["trim"]()["split"](/\s+/), Ca, CW), C3(I), CM(I), CG = !1, Cj = !0, L['nextFrame'](function () {
            D['delClass'](I, Ca), C4(I);
          });
        }
      },
      'leave': function () {
        var aF = ae;
        if (I) {
          if (!CP || !CG) return void C9(I);
          I["className"] = E(I["className"]["trim"]()["split"](/\s+/), CU, CR), C7(I), CL = !0, L['nextFrame'](function () {
            D["delClass"](I, CU), C8(I);
          });
        }
      },
      'cancelEnter': function () {
        Cj && (Cj = !1, D['delClass'](I, CW), C6(I));
      },
      'cancelLeave': function () {
        CL && (CL = !1, D["delClass"](I, CR), CC(I));
      },
      'dispose': function () {
        CP && (I["removeEventListener"](Cz, CE), I["removeEventListener"](CA, CE)), I = null;
      }
    };
  }, D["text"] = function (I, Z) {
    if (void 0 === Z) return z(I);
    var H = I['nodeType'];
    1 !== H && 11 !== H && 9 !== H || ("string" == typeof I["textContent"] ? I["textContent"] = Z : I["innerText"] = Z);
  }, Q["className"] = 'yidun_class', D["className"] = Q["getAttribute"]("className") ? function (I) {
    return I["getAttribute"]('className');
  } : function (I) {
    return I["getAttribute"]("class");
  }, D["getRect"] = function (I) {
    var Z = I['getBoundingClientRect']();
    if ("width" in Z) return Z;
    var H = Z["left"],
      C0 = Z['top'],
      C1 = Z["right"],
      C2 = Z["bottom"];
    return Object['assign']({}, Z, {
      'width': C1 - H,
      'height': C2 - C0
    });
  }, W['exports'] = D;
}, function (a, W) {
  W['CAPTCHA_TYPE'] = {
    'JIGSAW': 2,
    'POINT': 3,
    'SMS': 4,
    'INTELLISENSE': 5,
    'AVOID': 6,
    'ICON_POINT': 7,
    'WORD_GROUP': 8,
    'INFERENCE': 9,
    'WORD_ORDER': 10,
    'SPACE': 11,
    'VOICE': 12
  }, W['CAPTCHA_CLASS'] = {
    'CAPTCHA': "yidun",
    'PANEL': "yidun_panel",
    'SLIDE_INDICATOR': "yidun_slide_indicator",
    'SLIDER': "yidun_slider",
    'JIGSAW': "yidun_jigsaw",
    'POINT': "point",
    'SMS': "yidun_sms",
    'TIPS': 'yidun_tips',
    'REFRESH': "yidun_refresh",
    'CONTROL': "yidun_control",
    'BGIMG': "yidun_bgimg",
    'INPUT': "yidun_input",
    'LOADBOX': "yidun_loadbox",
    'LOADICON': "yidun_loadicon",
    'LOADTEXT': "yidun_loadtext",
    'ERROR': 'error',
    'WARN': "warn",
    'VERIFY': 'verifying',
    'SUCCESS': "success",
    'LOADING': "loading",
    'LOADFAIL': 'loadfail'
  }, W["WIDTH_LIMIT"] = [220, 10000], W["SLIDER_START_LEFT_LIMIT"] = 40, W['LARGE_SIZE_TYPE'] = {
    'medium': 18,
    'large': 20,
    'x-large': 24
  }, W["SIZE_TYPE"] = {
    'DEFAULT': 10,
    'LARGE': 20
  }, W["SAMPLE_NUM"] = 50, W["BIGGER_SAMPLE_NUM"] = 100, W["DEVICE"] = {
    'MOUSE': 1,
    'TOUCH': 2,
    'MOUSE_TOUCH': 3
  }, W["MAX_VERIFICATION"] = 5, W['RTL_LANGS'] = ['ar', 'he', 'ug', 'fa', 'ur'], W['CACHE_MIN'] = 60000, W["FILE_DETECT_KEY"] = {
    'core': "NECaptcha",
    'light': 'NECaptcha_theme_light',
    'dark': "NECaptcha_theme_dark",
    'plugins': "NECaptcha_plugin",
    'watchman': "initCaptchaWatchman"
  }, W["FEEDBACK_URL"] = "http://support.dun.163.com/feedback/captcha", W['RUN_ENV'] = {
    'WEB': 10,
    'ANDROID': 20,
    'IOS': 30,
    'MINIPROGRAM': 40,
    'JUMPER_MINI_PROGRAM': 50,
    'QUICKAPP': 60
  }, W['CLOSE_SOURCE'] = {
    'USER': 1,
    'PROCESS': 2,
    'CLOSE': 3
  }, W["IV_VERSION"] = 4, W['POPUP_PRELOAD_SHIFTING_CLASS'] = "yidun_popup--shifting", W["CLASSIC_WRAPPER_PRELOAD_SHIFTING_CLASS"] = "yidun_classic-wrapper--shifting";
}, function (a, W) {
  var U = {
    'INVOKE_HOOK': "INVOKE_HOOK",
    'EVENT_CLOSE': "EVENT_CLOSE",
    'EVENT_RESET': "EVENT_RESET",
    'SWITCH_TYPE': "SWITCH_TYPE",
    'SET_TYPE': 'SET_TYPE',
    'SWITCH_LOAD_STATUS': "SWITCH_LOAD_STATUS",
    'UPDATE_VERIFY_STATUS': "UPDATE_VERIFY_STATUS",
    'REFRESH': 'REFRESH',
    'UPDATE_COUNTS_OF_VERIFYERROR': "UPDATE_COUNTS_OF_VERIFYERROR",
    'SET_TOKEN': "SET_TOKEN",
    'EVENT_RESET_CLASSIC': "EVENT_RESET_CLASSIC",
    'UPDATE_LINK_TIME': 'UPDATE_LINK_TIME',
    'UPDATE_CORE_WIDTH': "UPDATE_CORE_WIDTH"
  };
  a["exports"] = U;
}, function (W, U) {
  var aH = MF;
  function R(D, B, I) {
    return B in D ? Object["defineProperty"](D, B, {
      'value': I,
      'enumerable': !0,
      'configurable': !0,
      'writable': !0
    }) : D[B] = I, D;
  }
  function P(D, B) {
    function I() {}
    I["prototype"] = B["prototype"], D["prototype"] = new I(), D["prototype"]['constructor'] = D;
  }
  function z(D, B, I) {
    this["name"] = 'CaptchaError', this["code"] = D, this['message'] = D + ('(' + w[D] + ')') + (B ? " - " + B : ''), Error["captureStackTrace"] ? Error["captureStackTrace"](this, this["constructor"]) : this["stack"] = new Error()["stack"], this["data"] = I || {};
  }
  var A,
    G = 'function' == typeof Symbol && "symbol" == typeof Symbol['iterator'] ? function (D) {
      return typeof D;
    } : function (D) {
      return D && 'function' == typeof Symbol && D["constructor"] === Symbol && D !== Symbol["prototype"] ? "symbol" : typeof D;
    },
    j = "prototype",
    L = 100,
    E = 200,
    Q = 300,
    k = 430,
    K = 432,
    X = 500,
    T = 501,
    O = 502,
    N = 503,
    J = 504,
    q = 505,
    S = 600,
    V = 601,
    F = 1000,
    w = (A = {}, R(A, L, 'script\x20error'), R(A, E, "business error"), R(A, Q, 'unpass\x20error'), R(A, k, "qps limit error"), R(A, K, "captcha id is invalid"), R(A, X, "request error"), R(A, T, "request api error"), R(A, O, "request script error"), R(A, N, "request img error"), R(A, J, "request timeout error"), R(A, q, "request audio error"), R(A, S, 'request\x20anticheat\x20token\x20error'), R(A, V, "init anticheat error"), R(A, F, 'unknown\x20error'), A);
  P(z, Error), z[j]["toString"] = function () {
    var D = String(this["stack"]);
    return 0 === D["indexOf"]('CaptchaError:') ? D : this["name"] + ':\x20' + this['message'] + (D ? "\n    " + D : '');
  }, z['set'] = function (D, B) {
    "number" == typeof D && "string" == typeof B && (w[D] = B), "object" === ("undefined" == typeof D ? "undefined" : G(D)) && D && Object["assign"](w, D);
  }, z['get'] = function (D) {
    return w[D];
  }, z["remove"] = function (D) {
    String(D) in w && delete w[D];
  }, U = W["exports"] = z, U["SCRIPT_ERROR"] = L, U['BUSINESS_ERROR'] = E, U["UNPASS_ERROR"] = Q, U["QPS_LIMIT_ERROR"] = k, U["ID_INVAILD_ERROR"] = K, U["REQUEST_ERROR"] = X, U['REQUEST_API_ERROR'] = T, U["REQUEST_SCRIPT_ERROR"] = O, U['REQUEST_IMG_ERROR'] = N, U["REQUEST_TIMEOUT_ERROR"] = J, U["REQUEST_AUDIO_ERROR"] = q, U["ANTICHEAT_TOKEN_ERROR"] = S, U["ANTICHEAT_INIT_ERROR"] = V, U['UNKNOWN_ERROR'] = F;
}, function (W, U, R) {
  var W8 = MF;
  function P(F) {
    var w = {};
    return F["map"](function (D) {
      w[D] = function () {
        var W2 = M,
          B = this,
          I = x["options"]["mixins"] || {};
        (I[D] || [])["map"](function (Z) {
          return Z["call"](B);
        }), this["$options"][D]['map'](function (Z) {
          return Z["call"](B);
        });
      };
    }), w;
  }
  function z(F) {
    var W5 = M;
    function w() {}
    function D() {
      I['apply'](this, arguments);
    }
    if (F instanceof x) return F;
    var B = {};
    Object["keys"](F)["map"](function (Z) {
      ["render"]['indexOf'](Z) > -1 && (B[Z] = F[Z]);
    }), Q(F["methods"]) && Object["assign"](B, F["methods"]);
    var I = this["extend"]({});
    return w["prototype"] = I["prototype"], D["prototype"] = new w(), Object["assign"](D["prototype"], B), D["prototype"]["constructor"] = D, D["_options"] = F, D["_extend"] = z, D;
  }
  var A = Object['assign'] || function (F) {
      for (var w = 1; w < arguments["length"]; w++) {
        var D = arguments[w];
        for (var B in D) Object["prototype"]["hasOwnProperty"]["call"](D, B) && (F[B] = D[B]);
      }
      return F;
    },
    G = R(20),
    j = R(51),
    L = R(12),
    E = L['getDocFragmentRegex'],
    Q = L["isPlainObject"],
    k = L['getIn'],
    K = L["parseAttrsStr"],
    X = L["diffDataToUpdate"],
    T = L["nextTick"],
    O = L["lifeCycleHooks"],
    N = R(50),
    J = R(49),
    q = R(52),
    S = R(4),
    V = 0,
    x = G(A({
      'initialize': function () {
        var F = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          w = this["constructor"],
          D = V++;
        this['id'] = "__c_" + D, this["name"] = F["name"], this['_isMounted'] = !1, this["$options"] = N(w['_options'] || {}, F), F["render"] && (this['render'] = F["render"]), F['methods'] && Object["assign"](this, F["methods"]), this["_boundProps"] = F["_boundProps"] || {};
        var B = this['$parent'] = F["$parent"] || null;
        if (B) {
          if (B["$root"]) this["$root"] = B['$root'];else {
            for (var I = B; I["$parent"];) I = I['$parent'];
            this['$root'] = I;
          }
        }
        this['beforeCreate']();
        var Z = this["$options"],
          H = Z["template"],
          C0 = Z["propsData"],
          C1 = Z["data"];
        this["$props"] = this["_validateProps"](C0, !0) || {}, Object['assign'](this, this['$props']), this['$data'] = "function" == typeof C1 ? C1["call"](this) : C1 || {}, Object["assign"](this, this['$data']), this["_composer"] = j(H, this), this["$children"] = [], this['_instantiateChildren'](), this["_updater"] = {
          'id': D,
          'instance': this,
          'data': {}
        }, this["created"](), F['el'] && this["$mount"](F['el']);
      },
      '$mount': function (F) {
        this["beforeMount"](), this["_childrenBeforeMount"](), this["_composeString"](this['_composer'], this);
        var w = this["_composer"]["toString"]();
        if ("string" == typeof F || F && 1 === F["nodeType"]) F = S["find"](F), this["$options"]['abstract'] ? this['$el'] = F : (F["innerHTML"] = w, this["$el"] = F["children"][0]);else {
          var D = document["createElement"]('div');
          D["innerHTML"] = w, this["$el"] = D['children'][0], "function" == typeof F && F(this['$el']);
        }
        return this["_childrenMounted"](), this["_initEvents"](), this["_isMounted"] = !0, this["mounted"](), this;
      }
    }, P(O), {
      '$setData': function (F, w) {
        !w && (F = X(F, this['$data'])), F && Object["keys"](F)["length"] && (this["_resolveWatch"](F)['map'](function (D) {
          return D();
        }), Object["assign"](this["$data"], F), Object["assign"](this, this["$data"]), Object["assign"](this["_updater"]["data"], F), J(this["_updater"]), this["_renderChildren"](F));
      },
      '$forceUpdate': function () {
        var F = Object['assign']({}, this["$data"], this["$props"]);
        this["$setData"](F, !0);
      },
      '$replaceChild': function (F, w) {
        var WW = W8,
          D = w["$el"]["parentElement"],
          B = w["$el"]["nextSibling"],
          I = void 0;
        I = null === B ? function (H) {
          D["appendChild"](H);
        } : function (H) {
          D['insertBefore'](H, B);
        }, F["_boundProps"] = w['_boundProps'], F["$parent"] = this, w['$destroy']();
        var Z = this["$children"]["indexOf"](w);
        Z > -1 && this["$children"]['splice'](Z, 1, F), F['$mount'](I);
      },
      '$destroy': function (F) {
        this['_isMounted'] && (this['beforeDestroy'](), this['_childrenBeforeDestroy'](), !F && !this['$options']['abstract'] && this["$el"] && this["$el"]['parentElement'] && this["$el"]['parentElement']['removeChild'](this["$el"]), this["_events"] && (this['_events']["off"](), this['_events'] = null), this["$el"] = null, this["$props"] = null, this["$data"] = null, this["$root"] = null, this["$parent"] = null, this["$children"] = null, this['$options'] = null, this["_isMounted"] = !1);
      },
      '$nextTick': T,
      'render': function () {},
      '_initEvents': function () {
        var WP = W8,
          F = this,
          w = this["$el"],
          D = this["$options"]['on'];
        if (w && Q(D)) {
          var B = {};
          Object["keys"](D)["map"](function (I) {
            B[I] = D[I]["bind"](F);
          }), this["_events"] = new q({
            '$el': w,
            'events': B
          });
        }
      },
      '_childrenBeforeMount': function () {
        var WA = W8;
        this["$children"]["map"](function (F) {
          F['beforeMount'](), F["_childrenBeforeMount"]();
        });
      },
      '_childrenMounted': function () {
        var Wj = W8;
        this["$children"]["map"](function (F) {
          F["_childrenMounted"]();
          var w = F["$root"]["$el"];
          F["$el"] = S["find"](F["$options"]['el'], w) || S["find"](F["$options"]['el'], w["parentElement"]), F["_initEvents"](), F["_isMounted"] = !0, F["mounted"]();
        });
      },
      '_childrenBeforeDestroy': function () {
        var WE = W8;
        this["$children"]['map'](function (F) {
          F["$destroy"](!0);
        });
      },
      '_composeString': function (F, w) {
        var Wk = W8,
          D = this;
        w['$children']["map"](function (B) {
          F["compose"](B['name'], B["_composer"]["toString"]()), D["_composeString"](F, B);
        });
      },
      '_setProps': function (F) {
        F = X(F, this["$props"]), F && Object["keys"](F)['length'] && (F = this["_validateProps"](F), this["_resolveWatch"](F)['map'](function (w) {
          return w();
        }), Object["assign"](this['$props'], F), Object["assign"](this, this["$props"]), Object["assign"](this["_updater"]["data"], F), J(this["_updater"]));
      },
      '_resolveWatch': function (F) {
        var WK = W8,
          w = this,
          D = this['$options']['watch'];
        if (!D) return [];
        var B = [];
        return Object["keys"](D)["map"](function (I) {
          var Z = k(F, I);
          if (void 0 !== Z) {
            var H = D[I]["bind"](w, Z, k(w, I));
            B['push'](H);
          }
        }), B;
      },
      '_renderChildren': function (F) {
        var WX = W8;
        this['$children']["map"](function (w) {
          var D = w["_boundProps"],
            B = {};
          Object["keys"](D)["map"](function (I) {
            var Z = k(F, D[I]);
            void 0 !== Z && (B[I] = Z);
          }), w["_setProps"](B), w['_renderChildren'](B);
        });
      },
      '_validateProps': function (F, w) {
        var Ws = W8;
        if (F) {
          var D = this["$options"]["props"],
            B = {};
          return Q(D) ? (Object["keys"](D)["map"](function (I) {
            var Z = D[I],
              H = F[I];
            if (Q(Z) || (Z = {
              'type': Z
            }), void 0 !== H) {
              var C0 = Object['prototype']["toString"];
              if (Z["type"] && C0["call"](H) !== C0["call"](Z['type']())) throw new Error('[' + I + "] is not valid type.");
              B[I] = H;
            } else w && (B[I] = Z["default"]);
          }), B) : F;
        }
      },
      '_instantiateChildren': function () {
        var Wp = W8,
          F = this,
          w = this["$options"]['components'];
        if (w) {
          var D = this["_composer"]["toString"]();
          Object["keys"](w)['map'](function (B) {
            var WO = Wp,
              I = D["match"](E(B, !0)) || [];
            I["map"](function (Z) {
              var WN = WO;
              Z = Z["match"](E(B)) || [];
              var H = K(Z[1]),
                C0 = H["props"],
                C1 = H["bound"];
              Object["keys"](C1)["map"](function (C4) {
                var C5 = k(F, C1[C4]);
                C0[C4] = 'function' == typeof C5 ? C5["bind"](F) : C5;
              });
              var C2 = x["_extend"](w[B]),
                C3 = new C2({
                  'name': B,
                  'propsData': C0,
                  '_boundProps': C1,
                  '$parent': F
                });
              F["$children"]["push"](C3);
            });
          });
        }
      }
    }));
  x['options'] = {}, x["_extend"] = z, x["mixin"] = function (F) {
    var w = x["options"]["mixins"] || {};
    x["options"]["mixins"] = N(w, F);
  }, W["exports"] = x;
}, function (W, U, R) {
  var Wx = MF;
  function P(I, Z) {
    var H = {};
    for (var C0 in I) Z['indexOf'](C0) >= 0 || Object["prototype"]["hasOwnProperty"]["call"](I, C0) && (H[C0] = I[C0]);
    return H;
  }
  function z(I, Z) {
    function H() {}
    H["prototype"] = Z["prototype"], I['prototype'] = new H(), I["prototype"]["constructor"] = I;
  }
  function A(I, Z) {
    this["enable"] = !0, this["snaker"] = new Q(E({}, I, {
      'pid': 'captcha',
      'limit': 9,
      'random': 0.3,
      'version': "2.27.2"
    })), this["_captchaConfig"] = Z || {}, this["events"] = {};
  }
  function G(I, Z) {
    var H = T(I);
    if ('string' === H || 'number' === H) return "string" === H && (I = parseFloat(I), !isNaN(I) && (I = I["toFixed"])), I["toFixed"](Z);
  }
  function j(I) {
    var Wn = M,
      Z = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      H = "network";
    return function (C0, C1, C2, C3) {
      var C4 = C3['status'],
        C5 = C3["error"],
        C6 = C3["index"],
        C7 = C3['res'],
        C8 = C3["perfEntry"];
      try {
        var C9 = K(C0),
          CC = "image" === C2 ? "image" : C9["path"];
        if (C5) {
          I["remove"](H, CC, C1);
          var CM = {
              'script': J,
              'image': S,
              'audio': V,
              'api': q
            },
            Ca = new O(CM[C2], C5["message"], E({}, Z, {
              'url': C0
            }));
          I['collectErr'](Ca, {
            'times': C6 + 1
          });
        } else {
          var CW = B[C4];
          if (D) {
            if ("end" !== CW) return;
            var CU = C8 || w['getEntriesByName'](C7 && C7["_originUrl"] || C0)[0];
            if (!CU) return;
            I['collect'](H, CC, {
              'tc': G(CU["responseEnd"] - (CU["domainLookupStart"] || CU["connectStart"]), 1),
              'dc': G(CU["domainLookupEnd"] - CU['domainLookupStart'], 1),
              'cc': G(CU["connectEnd"] - CU["connectStart"], 1),
              'rc': G(CU["responseStart"] - CU["requestStart"], 1),
              'rr': G(CU["responseEnd"] - CU["responseStart"], 1),
              'url': C0,
              'host': C9["host"],
              'https': 'https' === C9['protocol'],
              'from': "PERF"
            }, {}, E({}, Z));
          } else I['collect'](H, CC, {
            'timestamp': new Date()['valueOf'](),
            'url': C0,
            'host': C9["host"],
            'https': "https" === C9["protocol"],
            'from': 'js'
          }, {
            'rangeId': C1,
            'rangeType': CW
          }, E({}, Z));
        }
      } catch (CR) {}
    };
  }
  function L(I) {
    var Z = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      H = "network",
      C0 = 'linkTime';
    try {
      I['collectLinkTime'](H, C0, E({}, Z, {
        'from': "LINK_TIME"
      }));
    } catch (C1) {}
  }
  var E = Object["assign"] || function (I) {
      for (var Z = 1; Z < arguments["length"]; Z++) {
        var H = arguments[Z];
        for (var C0 in H) Object["prototype"]["hasOwnProperty"]["call"](H, C0) && (I[C0] = H[C0]);
      }
      return I;
    },
    Q = R(29),
    K = R(54),
    X = R(3),
    T = X["typeOf"],
    O = R(7),
    N = R(45),
    J = O["REQUEST_SCRIPT_ERROR"],
    q = O["REQUEST_API_ERROR"],
    S = O['REQUEST_IMG_ERROR'],
    V = O["REQUEST_AUDIO_ERROR"],
    F = 'prototype',
    w = window['performance'] || window['msPerformance'] || window["webkitPerformance"] || {},
    D = w && "getEntriesByName" in w;
  z(A, Error), A[F]['collect'] = function (I, Z, H, C0, C1) {
    var C2 = C0["rangeId"],
      C3 = C0["rangeType"];
    if (this["enable"]) try {
      if (C2) {
        var C4 = H["timestamp"],
          C5 = P(H, ['timestamp']);
        !this["events"][I] && (this["events"][I] = {}), !this["events"][I][Z] && (this['events'][I][Z] = {});
        var C6 = this["events"][I][Z][C2];
        if ('start' !== C3 || C6) {
          if ("end" === C3 && C6 && !C6["end"]) {
            Object["assign"](C6, E({
              'end': C4,
              'zoneId': this["_captchaConfig"]["zoneId"],
              'extra': C1
            }, C5));
            var C7 = C6["end"],
              C8 = C6["start"],
              C9 = C6["extra"],
              CC = P(C6, ["end", "start", "extra"]);
            this["snaker"]["trackAsync"](I, Z, window["encodeURIComponent"](JSON['stringify'](E({
              'tc': C7 - C8
            }, CC))), E({}, C9, {
              'nts': new Date()["valueOf"]()
            })), this["events"][I][Z][C2] = null;
          }
        } else this["events"][I][Z][C2] = E({
          'ev': C6,
          'start': C4,
          'extra': C1
        }, C5);
      } else this['snaker']["trackAsync"](I, Z, "string" === T(H) ? H : window['encodeURIComponent'](JSON["stringify"](E({}, H, {
        'zoneId': this["_captchaConfig"]["zoneId"]
      }))), E({}, C1, {
        'nts': new Date()["valueOf"]()
      }));
    } catch (CM) {}
  }, A[F]["collectLinkTime"] = function (I, Z, H) {
    if (this["enable"]) try {
      this["snaker"]["trackAsync"](I, Z, 'string' === T(H) ? H : window["encodeURIComponent"](JSON["stringify"](E({}, H))), {
        'nts': new Date()["valueOf"]()
      });
    } catch (C0) {}
  }, A[F]["collectErr"] = function (I, Z) {
    N(I, this["_captchaConfig"], E({}, Z));
  }, A[F]['remove'] = function (I, Z, H) {
    I && Z && H ? this["events"][I] && this['events'][I][Z] && delete this['events'][I][Z][H] : I && Z ? this["events"][I] && (this["events"][I][Z] = {}) : I && (this["events"][I] = {});
  }, A[F]["clear"] = function () {
    if (this['enable']) try {
      this['snaker']["flush"](), this["events"] = {};
    } catch (I) {}
  };
  var B = {
    'start': 'start',
    'success': "end"
  };
  U = W["exports"] = A, U["createNetCollect"] = j, U["createLinkTimeCollect"] = L, U["supportEntries"] = D;
}, function (W, G, Q) {
  function K(CO) {
    if (Array['isArray'](CO)) {
      for (var CN = 0, Ct = Array(CO["length"]); CN < CO['length']; CN++) Ct[CN] = CO[CN];
      return Ct;
    }
    return Array["from"](CO);
  }
  function X(CO) {
    var CN = [];
    if (!CO["length"]) return CA(64);
    if (CO['length'] >= 64) return CO["splice"](0, 64);
    for (var Ct = 0; Ct < 64; Ct++) CN[Ct] = CO[Ct % CO["length"]];
    return CN;
  }
  function J(CO) {
    if (!CO["length"]) return CA(64);
    var CN = [],
      Ct = CO["length"],
      CJ = Ct % 64 <= 60 ? 64 - Ct % 64 - 4 : 128 - Ct % 64 - 4;
    CW(CO, 0, CN, 0, Ct);
    for (var Cq = 0; Cq < CJ; Cq++) CN[Ct + Cq] = 0;
    return CW(Cz(Ct), 0, CN, Ct + CJ, 4), CN;
  }
  function q(CO) {
    if (CO["length"] % 64 !== 0) return [];
    for (var CN = [], Ct = CO['length'] / 64, CJ = 0, Cq = 0; CJ < Ct; CJ++) {
      CN[CJ] = [];
      for (var CS = 0; CS < 64; CS++) CN[CJ][CS] = CO[Cq++];
    }
    return CN;
  }
  function F(CO) {
    var CN = CP(Cs),
      Ct = function (CV) {
        return CN[16 * (CV >>> 4 & 15) + (15 & CV)];
      };
    if (!CO["length"]) return [];
    for (var CJ = [], Cq = 0, CS = CO["length"]; Cq < CS; Cq++) CJ[Cq] = Ct(CO[Cq]);
    return CJ;
  }
  function Z() {
    for (var CO = [], CN = 0; CN < 4; CN++) CO[CN] = CQ(Math["floor"](256 * Math['random']()));
    return CO;
  }
  function H(CO, CN) {
    if (!CO["length"]) return [];
    CN = CQ(CN);
    for (var Ct = [], CJ = 0, Cq = CO["length"]; CJ < Cq; CJ++) Ct['push'](Ck(CO[CJ], CN));
    return Ct;
  }
  function C0(CO, CN) {
    if (!CO["length"]) return [];
    CN = CQ(CN);
    for (var Ct = [], CJ = 0, Cq = CO['length']; CJ < Cq; CJ++) Ct["push"](Ck(CO[CJ], CN++));
    return Ct;
  }
  function C1(CO, CN) {
    if (!CO["length"]) return [];
    CN = CQ(CN);
    for (var Ct = [], CJ = 0, Cq = CO["length"]; CJ < Cq; CJ++) Ct['push'](Ck(CO[CJ], CN--));
    return Ct;
  }
  function C2(CO, CN) {
    if (!CO["length"]) return [];
    CN = CQ(CN);
    for (var Ct = [], CJ = 0, Cq = CO["length"]; CJ < Cq; CJ++) Ct["push"](CG(CO[CJ], CN));
    return Ct;
  }
  function C3(CO, CN) {
    if (!CO["length"]) return [];
    CN = CQ(CN);
    for (var Ct = [], CJ = 0, Cq = CO["length"]; CJ < Cq; CJ++) Ct["push"](CG(CO[CJ], CN++));
    return Ct;
  }
  function C4(CO, CN) {
    if (!CO["length"]) return [];
    CN = CQ(CN);
    for (var Ct = [], CJ = 0, Cq = CO["length"]; CJ < Cq; CJ++) Ct["push"](CG(CO[CJ], CN--));
    return Ct;
  }
  function C5(CO) {
    var CN = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return CN + 256 >= 0 ? CO : [];
  }
  function C6(CO) {
    for (var CN = [C5, H, C2, C0, C3, C1, C4], Ct = Cp, CJ = 0, Cq = Ct["length"]; CJ < Cq;) {
      var CS = Ct["substring"](CJ, CJ + 4),
        CV = CR(CS["substring"](0, 2)),
        Cy = CR(CS["substring"](2, 4));
      CO = CN[CV](CO, Cy), CJ += 4;
    }
    return CO;
  }
  function C7() {
    var CO = CE(Cm),
      CN = Z();
    return CO = X(CO), CO = Cl(CO, X(CN)), CO = X(CO), [CO, CN];
  }
  function C8(CO, CN) {
    var Ct = CE(CN),
      CJ = CE(CO);
    return Cu(Cl(Ct, CJ));
  }
  function C9(CO, CN) {
    var Ct = CK(CN),
      CJ = CE(CO);
    return CL(Cl(Ct, CJ));
  }
  function CC(CO) {
    for (var CN = CE(CO), Ct = C7(), CJ = CM(Ct, 2), Cq = CJ[0], CS = CJ[1], CV = CE(CU(CN)), Cy = J([]['concat'](K(CN), K(CV))), Cn = q(Cy), Ce = []['concat'](K(CS)), Ci = Cq, Cx = 0, CF = Cn["length"]; Cx < CF; Cx++) {
      var Cb = Cl(C6(Cn[Cx]), Cq),
        Cc = Cj(Cb, Ci);
      Cb = Cl(Cc, Ci), Ci = F(F(Cb)), CW(Ci, 0, Ce, 64 * Cx + 4, 64);
    }
    return CX(Ce);
  }
  var CM = function () {
      function CO(CN, Ct) {
        var CJ = [],
          Cq = !0,
          CS = !1,
          CV = void 0;
        try {
          for (var Cy, Cn = CN[Symbol["iterator"]](); !(Cq = (Cy = Cn['next']())["done"]) && (CJ["push"](Cy["value"]), !Ct || CJ['length'] !== Ct); Cq = !0);
        } catch (Ce) {
          CS = !0, CV = Ce;
        } finally {
          try {
            !Cq && Cn["return"] && Cn["return"]();
          } finally {
            if (CS) throw CV;
          }
        }
        return CJ;
      }
      return function (CN, Ct) {
        if (Array["isArray"](CN)) return CN;
        if (Symbol["iterator"] in Object(CN)) return CO(CN, Ct);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    Ca = Q(25),
    CW = Ca["copyToBytes"],
    CU = Ca['genCrc32'],
    CR = Ca["hexToByte"],
    CP = Ca["hexsToBytes"],
    Cz = Ca['intToBytes'],
    CA = Ca["paddingArrayZero"],
    CG = Ca['shift'],
    Cj = Ca["shifts"],
    CL = Ca['bytesToString'],
    CE = Ca['stringToBytes'],
    CQ = Ca["toByte"],
    Ck = Ca["xor"],
    Cl = Ca["xors"],
    Ch = Q(58),
    CK = Ch["base64Decode"],
    Cu = Ch["base64Encode"],
    CX = Ch["base64EncodePrivate"],
    CT = Q(26),
    Cs = CT["__SBOX__"],
    Cm = CT["__SEED_KEY__"],
    Cp = CT["__ROUND_KEY__"];
  G["aes"] = CC, G["xorEncode"] = C8, G['xorDecode'] = C9;
}, function (W, U, R) {
  var U9 = MF;
  function P(J, q) {
    var S = {};
    for (var V in J) q["indexOf"](V) >= 0 || Object["prototype"]['hasOwnProperty']["call"](J, V) && (S[V] = J[V]);
    return S;
  }
  var z = Object['assign'] || function (J) {
      for (var q = 1; q < arguments['length']; q++) {
        var S = arguments[q];
        for (var V in S) Object['prototype']['hasOwnProperty']['call'](S, V) && (J[V] = S[V]);
      }
      return J;
    },
    A = R(76),
    G = R(21),
    j = R(62),
    L = R(53),
    E = R(3),
    Q = 0,
    k = /MicroMessenger|Weibo/i["test"](window["navigator"]['userAgent']),
    K = function (J) {
      return "string" == typeof J ? [J, J] : Array["isArray"](J) && 1 === J["length"] ? J["concat"](J) : J;
    },
    X = function () {
      var J = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return parseInt(new Date()["valueOf"]() / J, 10);
    },
    T = {
      'script': function (J, q) {
        var Ua = U9,
          S = this;
        this["cacheTime"] && (J = J + "?v=" + X(this['cacheTime'])), A(J, {
          'charset': "UTF-8"
        }, function (V, x) {
          var F = S['detectKey'];
          if (V || F && !window[F]) {
            var b = V && V["message"] || "unreliable script",
              v = new Error("Failed to load script(" + J + ').' + b);
            return v["data"] = {
              'url': J,
              'retry': !!S["_options"]["retry"]
            }, void q(v);
          }
          q({
            'scriptEl': x,
            '_originUrl': J
          });
        });
      },
      'image': function (J, q) {
        var UU = U9,
          S = this,
          V = document['createElement']("img");
        V['onload'] = function () {
          V["onload"] = V["onerror"] = null, q({
            'width': V["width"],
            'height': V["height"],
            'src': J
          });
        }, V['onerror'] = function (x) {
          V["onload"] = V["onerror"] = null;
          var F = x && x["message"] || "unreliable image error",
            b = new Error("Failed to load image(" + J + ').' + F);
          b['data'] = {
            'url': J,
            'retry': !!S["_options"]['retry']
          }, q(b);
        }, V["src"] = J;
      },
      'audio': function (J, q) {
        var Uz = U9,
          S = this;
        try {
          if (k) {
            var V = new XMLHttpRequest();
            V["open"]("GET", J), V["responseType"] = 'blob', V["onload"] = function () {
              var b = new Blob([V["response"]], {
                  'type': "audio/mpeg"
                }),
                v = URL["createObjectURL"](b);
              q({
                'src': v
              });
            }, V["onerror"] = function () {
              V["onload"] = V['onerror'] = null;
              var b = V['statusText'] || 'unreliable\x20audio\x20error',
                v = V["status"] || '',
                Y = new Error("Failed to load audio(" + J + ').' + b + '.' + v);
              Y['data'] = {
                'url': J,
                'retry': !!this['_options']["retry"]
              }, q(Y);
            }, V["send"]();
          } else {
            var x = new Audio();
            x["oncanplaythrough"] = function (b) {
              x["oncanplaythrough"] = x['onerror'] = null, q({
                'src': J
              });
            }, x["onerror"] = function (b) {
              x["oncanplaythrough"] = x["onerror"] = null;
              var v = x["error"] && x['error']["message"] || "unreliable audio error",
                Y = x["error"] && x["code"] || '',
                w = new Error("Failed to play audio(" + J + ').' + v + '.' + Y);
              w["data"] = {
                'url': J,
                'retry': !!S['_options']['retry']
              }, q(w);
            }, x["src"] = J, x["load"]();
          }
        } catch (b) {
          var F = new Error("not support audio");
          F['data'] = {
            'url': J,
            'retry': !!this['_options']["retry"]
          }, q(F);
        }
      },
      'api': function (J, q, S) {
        var V = this;
        L(J, S, function (x, F, b) {
          if (x) {
            var v = x && x['message'] || "unreliable api error",
              Y = new Error("Failed to request api(" + J + ').' + v);
            return Y["data"] = {
              'url': J,
              'retry': !!V["_options"]["retry"]
            }, void q(Y);
          }
          q(z({}, F, {
            '_originUrl': b["url"]
          }));
        }, {
          'timeout': this["timeout"]
        });
      }
    },
    m = function (J) {
      this['id'] = J['id'] || "resource_" + Q++, this["type"] = J['type'] || "script", this["url"] = J["url"] || '', this["payload"] = J['payload'], this['timeout'] = J["timeout"] || 6000, this["cacheTime"] = J["cacheTime"] ? parseInt(J['cacheTime'], 10) : 0, this['detectKey'] = J["detectKey"] || '', this['_options'] = J, G["call"](this), this["load"](), this["setTimeout"]();
    };
  j(m, G), Object["assign"](m["prototype"], {
    'load': function () {
      var Ul = U9,
        J = this,
        q = T[this['type']];
      q && q["call"](this, this["url"], function (S) {
        return J["resolve"](S);
      }, this["payload"]);
    },
    'addSupport': function (J, q, S) {
      ('function' != typeof T[J] || S) && (T[J] = q);
    },
    'setTimeout': function () {
      var UK = U9,
        J = this;
      window["setTimeout"](function () {
        var q = String(J["url"]),
          S = new Error("Timeout: failed to request " + J["type"] + '(' + q + ').');
        S["data"] = {
          'url': q
        }, J["resolve"](S);
      }, this["timeout"]);
    }
  }), m["SUPPORTS"] = T;
  var O = function (J) {
    var UX = U9;
    T["hasOwnProperty"](J) && (m[J] = function (q) {
      var UT = UX,
        S = q["disableRetry"],
        V = q['onProcess'],
        x = q["checkResult"],
        F = P(q, ["disableRetry", "onProcess", "checkResult"]);
      if (S) {
        var b = F["url"];
        return Array["isArray"](b) && (b = b[0] || ''), new m(z({}, F, {
          'url': b,
          'type': J
        }));
      }
      var v = K(q["url"]),
        Y = new G(),
        w = function D() {
          var Us = UT,
            B = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            I = function (C2) {
              var C3 = v["length"];
              B < C3 - 1 ? D(B + 1) : B === C3 - 1 && (C2["data"] = z({}, C2['data'], {
                'url': String(v),
                'requestId': C1['id']
              }), Y['resolve'](C2)), E['isFn'](V) && V(C0, C1['id'], J, {
                'status': "error",
                'error': C2,
                'index': B
              });
            },
            Z = function (C2) {
              var C3 = C2 instanceof Error ? C2 : new Error("Failed to check result of " + C0);
              C3["data"] = {
                'url': C0,
                'retry': !!F['retry']
              }, I(C3);
            },
            H = function (C2) {
              E['isFn'](V) && V(C0, C1['id'], J, {
                'status': "success",
                'res': C2
              }), Y["resolve"](C2);
            },
            C0 = v[B],
            C1 = new m(z({}, F, {
              'type': J,
              'url': C0,
              'retry': B > 0
            }));
          E['isFn'](V) && V(C0, C1['id'], J, {
            'status': "start"
          }), C1['then'](function (C2) {
            if (!E["isFn"](x)) return H(C2);
            var C3 = x(C2);
            C3 instanceof G ? C3["then"](H(C2))["catch"](function (C4) {
              return Z(C4);
            }) : C3 ? H(C2) : Z();
          })["catch"](function (C2) {
            return I(C2);
          });
        };
      return w(0), Y;
    });
  };
  for (var N in T) O(N);
  m["all"] = function (J) {
    var Ut = U9,
      q = 0,
      S = !1,
      V = new G(),
      x = [];
    return J["map"](function (F, b) {
      var Uq = Ut;
      F['then'](function (v) {
        S || (x[b] = v, q++, q === J["length"] && V["resolve"](x));
      })["catch"](function (v) {
        S = !0, V["resolve"](v);
      });
    }), V;
  }, W["exports"] = m;
}, function (a, W) {
  var Ue = MF,
    U = function () {
      function R(P, z) {
        var A = [],
          G = !0,
          j = !1,
          L = void 0;
        try {
          for (var E, Q = P[Symbol["iterator"]](); !(G = (E = Q["next"]())['done']) && (A['push'](E['value']), !z || A["length"] !== z); G = !0);
        } catch (k) {
          j = !0, L = k;
        } finally {
          try {
            !G && Q["return"] && Q["return"]();
          } finally {
            if (j) throw L;
          }
        }
        return A;
      }
      return function (P, z) {
        if (Array["isArray"](P)) return P;
        if (Symbol["iterator"] in Object(P)) return R(P, z);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
  W['getDocFragmentRegex'] = function (R, P) {
    return new RegExp('<' + R + "\\s*([\\s\\S]+)?(?!%)>([\\s\\S]+)?<\\/" + R + '>', P ? 'g' : '');
  }, W["isPlainObject"] = function (R) {
    return "[object Object]" === Object["prototype"]["toString"]["call"](R) && R && R['constructor'] === Object;
  }, W["getIn"] = function (R, P, z) {
    "string" == typeof P && (P = P['split']('.'));
    for (var A = 0, G = P["length"]; A < G; A++) {
      var j = P[A];
      if (A < G - 1 && !R[j]) return z;
      R = R[j];
    }
    return R;
  }, W["parseAttrsStr"] = function () {
    var UF = Ue,
      R = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      P = R["match"](/[^<>*+\s=]+(?:=".*?")?/g);
    if (!P) return {
      'props': {},
      'bound': {}
    };
    var z = {},
      A = {};
    return P['map'](function (G) {
      var j = G["split"]('='),
        L = U(j, 2),
        E = L[0],
        Q = L[1];
      void 0 === Q && (Q = !0);
      try {
        Q = JSON["parse"](Q);
      } catch (l) {
        console && console["error"](l);
      }
      if (0 === E["indexOf"](':')) {
        var k = !1;
        E = E["substring"](1);
        try {
          Q = JSON["parse"](Q);
        } catch (h) {
          A[E] = Q, k = !0;
        }
        !k && (z[E] = Q);
      }
      0 === E["indexOf"]('@') ? (E = E['substring'](1), A[E] = Q) : z[E] = Q;
    }), {
      'props': z,
      'bound': A
    };
  }, W['nextTick'] = function (R) {
    window["Promise"] ? Promise["resolve"]()["then"](R) : window["setTimeout"](R, 0);
  }, W['diffDataToUpdate'] = function (R, P) {
    var z = {};
    for (var A in R) {
      var G = R[A];
      G !== P[A] && (z[A] = G);
    }
    return z;
  }, W['lifeCycleHooks'] = ["beforeCreate", "created", 'beforeMount', "mounted", 'beforeDestroy'];
}, function (a, W, U) {
  var Uw = MF;
  function R(A) {
    var G = this;
    z['mixin'](this);
    var j = function (E) {
        return G["resolve"](E);
      },
      L = function (E) {
        return G["resolve"](E);
      };
    "function" == typeof A && A(j, L);
  }
  var P = "function" == typeof Symbol && 'symbol' == typeof Symbol["iterator"] ? function (A) {
      return typeof A;
    } : function (A) {
      return A && "function" == typeof Symbol && A["constructor"] === Symbol && A !== Symbol["prototype"] ? "symbol" : typeof A;
    },
    z = U(21);
  R['all'] = function (A) {
    return new R(function (G, j) {
      var UB = M,
        L = 0,
        E = !1,
        Q = [];
      A["map"](function (k, l) {
        var Uo = UB;
        k["then"](function (h) {
          E || (Q[l] = h, L++, L === A["length"] && G(Q));
        })["catch"](function (h) {
          E = !0, j(h);
        });
      });
    });
  }, R['resolve'] = function (A) {
    return A && 'object' === ("undefined" == typeof A ? "undefined" : P(A)) && "function" == typeof A["then"] ? A : new R(function (G) {
      return G(A);
    });
  }, R["reject"] = function (A) {
    return new R(function (G, j) {
      return j(A);
    });
  }, a["exports"] = R;
}, function (a, W) {
  var U = {
    'FETCH_CAPTCHA': "FETCH_CAPTCHA",
    'FETCH_INTELLISENSE_CAPTCHA': "FETCH_INTELLISENSE_CAPTCHA",
    'VERIFY_CAPTCHA': "VERIFY_CAPTCHA",
    'VERIFY_INTELLISENSE_CAPTCHA': "VERIFY_INTELLISENSE_CAPTCHA",
    'RESET_STATE': "RESET_STATE"
  };
  a["exports"] = U;
}, function (W, U, G) {
  var Ug = MF;
  function j(Ch, CK, Cu) {
    return CK in Ch ? Object["defineProperty"](Ch, CK, {
      'value': Cu,
      'enumerable': !0,
      'configurable': !0,
      'writable': !0
    }) : Ch[CK] = Cu, Ch;
  }
  function Q(Ch, CK) {
    if (!Ch) return {};
    var Cu = Ch["customStyles"],
      CX = Ch["width"],
      CT = Ch["minWidth"],
      Cs = parseInt(Cu["controlBar"]["height"], 10),
      Cm = parseInt(Cu["gap"], 10),
      Cp = Math["max"](parseInt(CX, 10), parseInt(CT, 10)) / 2;
    return {
      'controlBarHeight': Cs,
      'imagePanelHeight': CK ? 0 : Cp,
      'gapHeight': CK ? 0 : Cm,
      'total': CK ? Cs : Cs + Cm + Cp
    };
  }
  var K,
    X = G(3),
    J = G(4),
    q = G(5),
    V = q["CAPTCHA_TYPE"],
    F = q['CAPTCHA_CLASS'],
    B = q["WIDTH_LIMIT"],
    Z = q["SIZE_TYPE"],
    H = q['LARGE_SIZE_TYPE'],
    C0 = q['RTL_LANGS'],
    C1 = q["FEEDBACK_URL"],
    C2 = G(17),
    C3 = C2['applyColorIfNeed'],
    C4 = C2['applyStyleIfNeed'],
    C5 = G(19),
    C6 = G(6),
    C7 = C6["SWITCH_TYPE"],
    C8 = C6["INVOKE_HOOK"],
    C9 = C6["EVENT_RESET"],
    CC = C6['SWITCH_LOAD_STATUS'],
    CM = C6['UPDATE_VERIFY_STATUS'],
    Ca = C6["REFRESH"],
    CW = C6["EVENT_RESET_CLASSIC"],
    CU = C6["SET_TOKEN"],
    CR = C6['UPDATE_CORE_WIDTH'],
    CP = G(14),
    Cz = CP["FETCH_CAPTCHA"],
    CA = CP['VERIFY_CAPTCHA'],
    CG = CP["RESET_STATE"],
    Cj = G(36),
    CL = G(37),
    CE = G(38),
    CQ = G(35),
    Ck = G(39),
    Cl = G(34);
  W["exports"] = {
    'el': ".yidun",
    'template': G(73),
    'props': {
      'autoWidth': {
        'type': Boolean,
        'default': !1
      },
      'intellisense': {
        'type': Boolean,
        'default': !1
      },
      'enableColor': {
        'type': Boolean,
        'default': !1
      },
      'onWidthGeted': Function
    },
    'data': function () {
      var Ch = this['$store']['state'],
        CK = Ch["captchaType"],
        Cu = Ch["langPkg"],
        CX = Ch['config'],
        CT = Ch["load"],
        Cs = Ch["verifyStatus"],
        Cm = Ch['smsNew'],
        Cp = Ch["smsVersion"],
        CO = J["isMobile"] && this["intellisense"] && "bind" !== CX["mode"] ? "260px" : CX["width"];
      return {
        'captchaId': CX["captchaId"],
        'captchaType': CK,
        'theme': CX["theme"],
        'customStyles': CX["customStyles"],
        'feedback': {
          'url': C1,
          'enable': !!CX["feedbackEnable"]
        },
        'mode': "bind" === CX['mode'] ? 'popup' : this["intellisense"] ? "embed" : CX["mode"],
        'width': this["autoWidth"] ? "auto" : CO,
        'size': CX["size"],
        'minWidth': B[0] + 'px',
        'langPkg': Cu,
        'smsNew': Cm,
        'smsVersion': Cp,
        'load': CT,
        'verifyStatus': Cs,
        'verifyPayload': null,
        'inferences': [0, 1, 2, 3, 4, 5, 6, 7],
        'audio': CX['__serverConfig__']['audio'] && J["supportAudio"],
        'fixedAudio': !1,
        'isRtlLang': C0["indexOf"](CX["lang"]) !== -1,
        'isMobile': J['isMobile'],
        'disableFocusVisible': CX["disableFocusVisible"]
      };
    },
    'on': (K = {}, j(K, '.' + F["REFRESH"] + " click", function (Ch) {
      this["switchTypeAndRefresh"](Ch);
    }), j(K, '.yidun_tips\x20click', function () {
      var Ch = this["$store"]["state"],
        CK = Ch["config"],
        Cu = Ch["countsOfVerifyError"],
        CX = Ch["verifyStatus"];
      'error' === CX && Cu > CK["maxVerification"] && this["$store"]["commit"](CW);
    }), K),
    'watch': {
      'captchaType': function (Ch, CK) {
        Ch !== CK && this['updateUIByType'](Ch, CK);
      }
    },
    'mounted': function () {
      var R3 = Ug,
        Ch = this,
        CK = this["$store"]["state"],
        Cu = CK["config"],
        CX = CK["token"];
      C3(Cu["customStyles"]["primaryColor"], this["$el"], this['enableColor']), C4(Cu["customStyles"], this["$el"], this["enableColor"]), this["_baseClassNames"] = this["$el"]["className"]['trim'](), this['_removeEvents'] = this["initEvents"](), this['_unsubscribe'] = this['$store']["subscribe"](function (CT, Cs) {
        var Cm = CT["type"],
          Cp = CT['payload'],
          CO = Cs["captchaType"],
          CN = Cs["load"],
          Ct = Cs["verifyStatus"];
        switch (Cm) {
          case C7:
            Ch['$setData']({
              'captchaType': CO
            });
            break;
          case CC:
            Ch["$setData"]({
              'load': CN
            }), CN && "done" === CN["status"] && Ch["$store"]['commit'](C8, {
              'name': "onDidRefresh"
            });
            break;
          case CM:
            Ch["$setData"]({
              'verifyStatus': Ct,
              'verifyPayload': Cp
            });
            break;
          case C9:
            Ch["$setData"]({
              'fixedAudio': !1
            }), !Ch["intellisense"] && Ch['reset']();
            break;
          case CW:
            var CJ = Ch["intellisense"] ? {
              'token': CX
            } : null;
            Ch["$setData"]({
              'fixedAudio': !1
            }), Ch["reset"](CJ);
            break;
          case CU:
            Ch["setFeedbackUrl"]();
        }
      }), this["intellisense"] || this["reset"]({
        'token': CX
      }), "bind" === Cu["mode"] && this["refresh"]({
        'token': CX
      });
    },
    'beforeDestroy': function () {
      this['_unsubscribe'](), this["_removeEvents"]();
    },
    'render': function (Ch) {
      var CK = Ch["captchaType"],
        Cu = Ch["load"],
        CX = Ch['verifyStatus'],
        CT = Ch["verifyPayload"];
      "undefined" != typeof CK && this["switchCaptchaType"](CK), "undefined" != typeof Cu && this["changeLoadStatus"](Cu), 'undefined' != typeof CX && this["updateVerifyStatus"](CX, CT);
    },
    'methods': {
      'initEvents': function () {
        var R7 = Ug,
          Ch = this,
          CK = void 0;
        "float" === this["mode"] && (CK = this["initFloatMode"]());
        var Cu = function (Cs) {
          /^IMG$/i["test"](Cs["target"]["tagName"]) && Cs['preventDefault']();
        };
        J['on'](this["$el"], "dragstart", Cu);
        var CX = function (Cs) {
            Ch['switchTypeAndRefresh'](Cs, !0);
          },
          CT = J["find"](".yidun_top__audio", this["$el"]);
        return CT && J['on'](CT, "click", CX, !0), function () {
          CK && CK(), J["off"](Ch["$el"], "dragstart", Cu), CT && J["off"](CT, "click", CX, !0);
        };
      },
      'initFloatMode': function () {
        var RC = Ug,
          Ch = this,
          CK = J["find"]('.' + F["PANEL"], this["$el"]),
          Cu = J["find"]('.' + F['CONTROL'], this["$el"]),
          CX = !1,
          CT = null,
          Cs = null,
          Cm = J["transition"](CK, {
            'name': 'panel_ease_' + this["customStyles"]["imagePanel"]['align'],
            'insert': function (Cn) {
              Cn['style']["display"] = "block", CX = !0;
            },
            'afterLeave': function (Cn) {
              Cn["style"]["display"] = "none", CX = !1;
            },
            'leaveCanceled': function (Cn) {
              Cn["style"]["display"] = "none", CX = !1;
            }
          }),
          Cp = this,
          CO = function (Cn) {
            var RU = RC;
            Cp["panelVisible"] = !Cn, Cp["$children"] && Cp["$children"]['map'](function (Ce) {
              Ce['floatStatusChange'] && Ce["floatStatusChange"]();
            }), J["isMobile"] && setTimeout(function () {
              Cp["_isMounted"] && Cp["$store"]["commit"](C8, {
                'name': "onFloatHeightChange",
                'args': [Q(Cp["$data"], Cn)]
              });
            }, 200);
          },
          CN = !0,
          Ct = function (Cn) {
            var Rz = RC;
            if (Ch["_isMounted"]) {
              var Ce = Cn["relatedTarget"] && Ch["$el"]["contains"](Cn['relatedTarget']);
              if ((CN || !Ce || "mouseover" !== Cn["type"]) && (CN = !1, window['clearTimeout'](Cs), Cm["cancelLeave"](), "success" !== Ch["$store"]["state"]["verifyStatus"])) return CX ? CO() : void (CT = window["setTimeout"](function () {
                var Ci = document["activeElement"];
                Ci && Ci !== document["body"] && Ci["blur"](), Cm["enter"](), CO();
              }, 300));
            }
          },
          CJ = function (Cn) {
            var RG = RC;
            if (Ch["_isMounted"]) {
              var Ce = Cn['relatedTarget'] && Ch["$el"]['contains'](Cn['relatedTarget']),
                Ci = !(J["isMobile"] || !J["supportTouch"]) && null === Cn['relatedTarget'];
              if (!Ce && !Ci || "mouseout" !== Cn["type"]) {
                CN = !0;
                var Cx = J["getBubblePath"](Cn["target"]);
                if (!(~['touchstart', "pointerdown"]["indexOf"](Cn['type']) && ~Cx["indexOf"](Ch["$el"]) || ~["mouseleave", 'pointerleave']['indexOf'](Cn["type"]) && null === Cn['event']["relatedTarget"])) {
                  window["clearTimeout"](CT), Cm["cancelEnter"]();
                  var CF = Ch['$children'][0],
                    Cb = CF && CF["drag"];
                  !CX || Cb && "dragging" === Cb["status"] || (Cs = window["setTimeout"](function () {
                    Cm["leave"](), CO(!0);
                  }, 300));
                }
              }
            }
          },
          Cq = this["$store"]["subscribe"](function (Cn, Ce) {
            var Ci = Cn["type"];
            Ci === CM && "success" === Ce["verifyStatus"] && (Cm["leave"](), CO(!0));
          }),
          CS = X['msie'](),
          CV = CS ? 'mouseenter' : "mouseover",
          Cy = CS ? "mouseleave" : "mouseout";
        switch (J['on'](Cu, "focus", Ct), !0) {
          case J['isMobile']:
            J['on'](Cu, "touchstart", Ct), J['on'](document['body'], 'touchstart', CJ);
            break;
          case !J['isMobile'] && J["supportTouch"]:
            J['on'](Cu, "touchstart", Ct), J['on'](document["body"], "touchstart", CJ), J['on'](this["$el"], CV, Ct), J['on'](this["$el"], Cy, CJ);
            break;
          case J["supportPointer"]:
            J['on'](Cu, 'pointerdown', Ct), J['on'](document["body"], "pointerdown", CJ), J['on'](this['$el'], "pointerenter", Ct), J['on'](this["$el"], 'pointerleave', CJ);
            break;
          default:
            J['on'](this["$el"], CV, Ct), J['on'](this['$el'], Cy, CJ);
        }
        return function () {
          J["off"](Cu, "focus", Ct), J["off"](Ch["$el"], CV, Ct), J['off'](Ch["$el"], Cy, CJ), J["off"](Cu, "touchstart", Ct), J["off"](document["body"], "touchstart", CJ), J["supportPointer"] && (J["off"](Cu, "pointerdown", Ct), J['off'](document["body"], "pointerdown", CJ), J["off"](Ch["$el"], "pointerenter", Ct), J["off"](Ch["$el"], "pointerleave", CJ)), Cq(), Cm["dispose"]();
        };
      },
      'switchTypeAndRefresh': function (Ch, CK) {
        Ch['stopPropagation']();
        var Cu = this["$store"]["state"],
          CX = Cu["config"],
          CT = Cu["countsOfVerifyError"],
          Cs = Cu["verifyStatus"];
        CT > CX["maxVerification"] || "verifying" === Cs && this["captchaType"] !== V["SMS"] || this["load"] && "loading" === this["load"]["status"] || (void 0 !== CK && this["$setData"]({
          'fixedAudio': CK
        }), this["refresh"]());
      },
      'fetchCaptcha': function (Ch, CK) {
        var Cu = {
          'width': this["getWidth"](),
          'audio': this['fixedAudio'] || !1,
          'sizeType': this["getSizeType"]()
        };
        this["smsNew"] && (Cu["smsVersion"] = this['smsVersion']), Cu["token"] = this["intellisense"] ? this["$store"]["state"]['token'] : this['$store']['state']["previousToken"], Object["assign"](Cu, Ch), this["$store"]["dispatch"](Cz, Cu, CK), this["onWidthGeted"] && "function" == typeof this["onWidthGeted"] && this['onWidthGeted']();
      },
      'verifyCaptcha': function (Ch) {
        this['$store']["commit"](CM, {
          'verifyStatus': "verifying"
        });
        var CK = this['$store']["state"]["token"];
        this['$store']["dispatch"](CA, Object["assign"]({
          'token': CK,
          'width': this["getWidth"]()
        }, Ch));
      },
      'reset': function (Ch) {
        this["$store"]["dispatch"](CG), this["refresh"](Ch);
      },
      'refresh': function (Ch, CK) {
        var Cu = this["$children"][0];
        Cu && Cu["reset"](), this["$store"]["commit"](Ca), this["fetchCaptcha"](Ch, CK);
      },
      'updateUIByType': function (Ch, CK) {
        CK && J["delClass"](this["$el"], this['getCaptchaTypeClassName'](CK)), J['addClass'](this["$el"], this["getCaptchaTypeClassName"](Ch));
      },
      'getCaptchaTypeClassName': function (Ch) {
        return Ch ? F["CAPTCHA"] + '--' + X['getObjKey'](V, Ch)['toLowerCase']() : '';
      },
      'getWidth': function () {
        var Ch = this["$el"]["offsetWidth"];
        return this['$store']["commit"](CR, {
          'coreOffsetWidth': Ch
        }), Ch;
      },
      'getSizeType': function () {
        return Object['keys'](H)["indexOf"](this["size"]) !== -1 ? Z['LARGE'] : Z["DEFAULT"];
      },
      'resetClassNames': function () {
        for (var Ch = this["_baseClassNames"]['split'](/\s+/), CK = arguments["length"], Cu = Array(CK), CX = 0; CX < CK; CX++) Cu[CX] = arguments[CX];
        this["$el"]["className"] = C5(Ch, this["getCaptchaTypeClassName"](this["captchaType"]), Cu);
      },
      'switchCaptchaType': function (Ch) {
        if (Ch) {
          var CK = V["JIGSAW"],
            Cu = V["POINT"],
            CX = V["SMS"],
            CT = V["ICON_POINT"],
            Cs = V['WORD_GROUP'],
            Cm = V["INFERENCE"],
            Cp = V["AVOID"],
            CO = V['WORD_ORDER'],
            CN = V['SPACE'],
            Ct = V["VOICE"],
            CJ = {
              'el': this["$el"],
              'propsData': {
                'loadInfo': this["load"],
                'mode': this['mode'],
                'size': this['size'],
                'type': Ch,
                'onVerifyCaptcha': this["verifyCaptcha"]["bind"](this),
                'fixedAudio': this["fixedAudio"],
                'isRtlLang': this["isRtlLang"]
              },
              '_boundProps': {
                'loadInfo': "load"
              },
              '$parent': this
            },
            Cq = this["$children"][0];
          switch (Cq && Cq["$destroy"](), Ch) {
            case CK:
              Cq = new Cj(CJ);
              break;
            case Cu:
            case CT:
            case Cs:
            case CO:
            case CN:
              Cq = new CL(CJ);
              break;
            case CX:
              Cq = new CE(CJ);
              break;
            case Cm:
              Cq = new CQ(CJ);
              break;
            case Ct:
              Cq = new Ck(CJ);
              break;
            case Cp:
              Cq = new Cl(CJ);
          }
          Cq["$forceUpdate"](), this["$children"] = [Cq];
        }
      },
      'changeLoadStatus': function (Ch) {
        if (Ch) {
          var CK = F['CAPTCHA'],
            Cu = F['LOADING'],
            CX = F["LOADFAIL"],
            CT = F["LOADTEXT"],
            Cs = J['find']('.' + CT, this["$el"]),
            Cm = J["find"]('.yidun_tips__text', this["$el"]),
            Cp = J["find"](".yidun_tips__answer", this['$el']),
            CO = this['$store']["state"]["langPkg"],
            CN = Ch['status'],
            Ct = Ch["data"];
          switch (CN) {
            case "loading":
              Ct || (this["resetClassNames"](CK + '--' + Cu), J["text"](Cs, CO["loading"]), J["text"](Cm, CO["loading"]), J['addClass'](Cp, "hide"));
              break;
            case "done":
              this["resetClassNames"]();
              break;
            case "fail":
              this["resetClassNames"](CK + '--' + CX), J["supportAudio"] || this["captchaType"] !== V["VOICE"] ? (J['text'](Cs, CO["loadfail"]), J["text"](Cm, CO["loadfail"])) : (J["text"](Cs, CO["notSupportVoice"]), J["text"](Cm, CO['notSupportVoice'])), J["addClass"](Cp, "hide");
          }
          "done" !== CN || this['intellisense'] || this["isReady"] || (this['isReady'] = !0, this["$store"]["commit"](C8, {
            'name': 'onReady'
          }));
        }
      },
      'updateVerifyStatus': function (Ch, CK) {
        var RN = Ug,
          Cu = this,
          CX = F["CAPTCHA"],
          CT = F["SUCCESS"],
          Cs = F["VERIFY"],
          Cm = F["ERROR"],
          Cp = J["find"](".yidun_tips__text", this["$el"]),
          CO = J['find']('.yidun_tips__answer', this['$el']),
          CN = J["find"]('.yidun_slider__icon--img', this["$el"]),
          Ct = this['$data']["customStyles"],
          CJ = Ct['controlBar'],
          Cq = void 0 === CJ ? {} : CJ,
          CS = Ct["icon"],
          CV = void 0 === CS ? {} : CS,
          Cy = this["$store"]["state"],
          Cn = Cy["langPkg"],
          Ce = Cy["config"],
          Ci = Cy["countsOfVerifyError"],
          Cx = function (Cf) {
            !CV["slider"] && CN && (Cf ? (CN["src"] = Cf, CN['style']["display"] = "block") : CN["style"]["display"] = "none");
          };
        switch (Ch) {
          case "verifying":
            this['resetClassNames'](CX + '--' + Cs);
            break;
          case "success":
            this["resetClassNames"](CX + '--' + CT), this["captchaType"] === V['JIGSAW'] ? J["text"](Cp, '') : J["text"](Cp, Cn["verifySuccess"]), J["addClass"](CO, "hide"), Cx(Cq["slideIconSuccess"]);
            break;
          case "error":
            var CF = Ci > Ce['maxVerification'],
              Cb = CX + '--' + Cm,
              Cc = CF ? Cb + " yidun--maxerror" : Cb;
            if (this["resetClassNames"](Cc), CF ? J["text"](Cp, Cn['verifyOutOfLimit']) : this["captchaType"] === V["JIGSAW"] ? J['text'](Cp, '') : J['text'](Cp, Cn["verifyError"]), J["addClass"](CO, 'hide'), Cx(Cq["slideIconError"]), !CF) {
              var Cv = [V['POINT'], V["INFERENCE"], V["WORD_ORDER"], V['ICON_POINT'], V["WORD_GROUP"], V['SPACE']]["indexOf"](this['captchaType']) > -1 ? 1200 : Ce["refreshInterval"];
              this["captchaType"] === V["VOICE"] && (Cv = 2500), window["setTimeout"](function () {
                return Cu["refresh"]();
              }, Cv);
            }
        }
      },
      'setFeedbackUrl': function () {
        var Ch = J["find"](".yidun_feedback", this["$el"]);
        if (Ch) {
          var CK = this['$store']["state"]["token"];
          Ch["href"] = this["feedback"]['url'] + '?' + X["encodeUrlParams"]({
            'captchaId': this["captchaId"],
            'token': CK
          });
        }
      },
      'shouldHandleFloatChange': function (Ch) {
        var CK = this['$store']['state'],
          Cu = CK["countsOfVerifyError"],
          CX = CK['verifyStatus'],
          CT = CK["config"];
        return !(Cu > CT["maxVerification"]) && (!Ch || "done" === Ch["status"]) && !CX;
      }
    }
  };
}, function (W, U, R) {
  var Ri = MF;
  function P(I, Z) {
    var H = {};
    for (var C0 in I) Z["indexOf"](C0) >= 0 || Object['prototype']["hasOwnProperty"]['call'](I, C0) && (H[C0] = I[C0]);
    return H;
  }
  function z(I) {
    I["stopPropagation"](), I["nativeEvent"]["stopPropagation"](), this["close"](S["USER"]);
  }
  function A(I) {
    return /[%|em|rem]/["test"](I);
  }
  function G(I, Z, H) {
    return Z = Z || I, H = H || I, A(Z) || A(H) ? 0 : (Z = parseFloat(Z, 10), H = parseFloat(H, 10), q[0] + Z + H + 2);
  }
  function j(I, Z, H) {
    if (!Z) return I;
    var C0 = Object['assign']({}, I, Z),
      C1 = C0["capPadding"],
      C2 = C0['capPaddingTop'],
      C3 = C0["capPaddingRight"],
      C4 = C0["capPaddingBottom"],
      C5 = C0["capPaddingLeft"],
      C6 = C0["capBarHeight"],
      C7 = C0['capBarTextSize'],
      C8 = C0["width"],
      C9 = C0["top"],
      CC = C0["bottom"],
      CM = C0['opacity'],
      Ca = C0['radius'],
      CW = C0['paddingTop'],
      CU = C0["paddingBottom"],
      CR = C0["position"],
      CP = P(C0, ['capPadding', "capPaddingTop", 'capPaddingRight', "capPaddingBottom", "capPaddingLeft", 'capBarHeight', 'capBarTextSize', "width", "top", 'bottom', "opacity", "radius", "paddingTop", "paddingBottom", "position"]);
    C1 = parseFloat(C1, 10), C1 = C1 && 0 !== C1 ? C1 : I["capPadding"], C2 = C2 && parseFloat(C2, 10), C3 = C3 && parseFloat(C3, 10), C4 = C4 && parseFloat(C4, 10), C5 = C5 && parseFloat(C5, 10), C6 = 0 !== C6 && D(C6) || D(I["capBarHeight"]), C7 = D(C7), Ca = D(Ca), CW = D(CW), CU = D(CU), CM = parseFloat(CM), !CM && 0 !== CM && (CM = I["opacity"]), "static" === CR && (CR = I["position"]);
    var Cz = 'auto' !== C8;
    if (Cz) {
      var CA = G(C1, C3, C5);
      (H <= 1 || !A(C8)) && (C8 = parseFloat(C8, 10) || 0, C8 = C8 > CA ? C8 : CA, C8 += 'px');
    }
    "auto" !== CC && (C9 = "auto", "number" === Q['typeOf'](CC) || Number(CC) || '0' === CC ? CC += 'px' : /\d+(\.\d+)?(px|rem)/['test'](CC) || (CC = parseFloat(CC, 10) || 0, CC = CC >= 0 && CC <= 100 ? CC + '%' : I["bottom"]));
    var CG = "auto" !== C9;
    return CG && ("number" === Q["typeOf"](C9) || Number(C9) || '0' === C9 ? C9 += 'px' : /\d+(\.\d+)?(px|rem)/["test"](C9) || (C9 = parseFloat(C9, 10) || 0, C9 = C9 >= 0 && C9 <= 100 ? C9 + '%' : I["top"])), L({
      'width': C8,
      'top': C9,
      'bottom': CC,
      'capPadding': C1,
      'capPaddingTop': C2,
      'capPaddingRight': C3,
      'capPaddingBottom': C4,
      'capPaddingLeft': C5,
      'capBarHeight': C6,
      'capBarTextSize': C7,
      'opacity': CM,
      'radius': Ca,
      'paddingTop': CW,
      'paddingBottom': CU,
      'position': CR
    }, CP);
  }
  var L = Object["assign"] || function (I) {
      for (var Z = 1; Z < arguments['length']; Z++) {
        var H = arguments[Z];
        for (var C0 in H) Object['prototype']["hasOwnProperty"]["call"](H, C0) && (I[C0] = H[C0]);
      }
      return I;
    },
    E = R(4),
    Q = R(3),
    K = R(6),
    X = K["UPDATE_VERIFY_STATUS"],
    T = K["EVENT_CLOSE"],
    O = R(15),
    N = R(5),
    J = N['RTL_LANGS'],
    q = N['WIDTH_LIMIT'],
    S = N["CLOSE_SOURCE"],
    V = R(17),
    F = V['applyColorIfNeed'],
    w = V["applyStyleIfNeed"],
    D = R(23),
    B = {
      'capPadding': 15,
      'capBarHeight': 50,
      'width': "auto",
      'top': "20%",
      'opacity': 0.3,
      'position': '',
      'bottom': 'auto'
    };
  W["exports"] = {
    'el': '.yidun_popup',
    'template': R(75),
    'components': {
      'captcha-core': O
    },
    'props': {
      'autoOpen': {
        'type': Boolean,
        'default': !0
      },
      'intellisense': {
        'type': Boolean,
        'default': !1
      },
      'enableColor': {
        'type': Boolean,
        'default': !1
      },
      'onOpen': Function,
      'onBeforeClose': Function,
      'onClose': Function,
      'onWidthGeted': Function
    },
    'data': function () {
      var I = this['$store']["state"],
        Z = I["langPkg"],
        H = I["config"],
        C0 = L({}, B, H["appendTo"] ? {
          'top': "auto"
        } : {}),
        C1 = j(C0, H['popupStyles'], H['apiVersion']),
        C2 = "auto" !== C1["width"],
        C3 = "auto" !== C1["top"],
        C4 = 'auto' !== C1["bottom"];
      return {
        'langPkg': Z,
        'widthIsNotAuto': C2,
        'width': C1["width"],
        'topIsNotAuto': C3,
        'bottomIsNotAuto': C4,
        'theme': H['theme'],
        'size': H["size"],
        'curCloseSource': '',
        'popupStyles': C1,
        'appendTo': H["appendTo"],
        'isRtlLang': J["indexOf"](H["lang"]) !== -1,
        'enableClose': H["enableClose"],
        'hideCloseBtn': H["hideCloseBtn"],
        'disableMaskClose': H["disableMaskClose"],
        'enableAutoFocus': H["enableAutoFocus"],
        'disableFocusVisible': H['disableFocusVisible'],
        'bodyCloseModalFn': this['bodyCloseModal']["bind"](this)
      };
    },
    'on': Object["assign"]({
      '.yidun_modal__close\x20click': z
    }, {
      '.yidun_popup__mask\x20click': function (I) {
        this["disableMaskClose"] || z["call"](this, I);
      }
    }),
    'mounted': function () {
      var Rc = Ri,
        I = this,
        Z = this["$store"]["state"]["config"];
      F(Z["customStyles"]['primaryColor'], this['$el'], this["enableColor"]), w(Z["customStyles"], this["$el"]);
      var H = E["find"]('.yidun_modal', this["$el"]),
        C0 = E["find"](".yidun_popup__mask", this['$el']),
        C1 = null,
        C2 = this["popupStyles"]["opacity"];
      E['on'](this["appendTo"] ? C0 : document, 'click', this["bodyCloseModalFn"]), this["_transition"] = E["transition"](H, {
        'name': 'popup_ease',
        'beforeEnter': function () {
          C0["style"]["opacity"] = '0', I['onOpen'] && I['onOpen'](), I["enableAutoFocus"] && document['activeElement'] && document["activeElement"] !== H && (C1 = document["activeElement"]);
        },
        'insert': function () {
          if (I["$el"]["style"]['display'] = "block", I["$store"]["state"]["config"]["apiVersion"] > 1 && A(I["width"]) && I["widthIsNotAuto"]) {
            var C3 = G(I["popupStyles"]["capPadding"]);
            H["offsetWidth"] < C3 && (I["$setData"]({
              'width': C3 + 'px'
            }), H['style']["width"] = C3 + 'px');
          }
          I['enableAutoFocus'] && H['focus']();
        },
        'enter': function () {
          C0['style']["opacity"] = C2;
        },
        'leave': function () {
          C0['style']["opacity"] = '0';
        },
        'afterLeave': function () {
          var C3 = I["onClose"];
          I["$el"]["style"]["display"] = "none", I["$store"]["commit"](T), C3 && C3(I["curCloseSource"]), I['enableAutoFocus'] && C1 && C1["focus"]();
        }
      }), this['_unsubscribe'] = this["$store"]["subscribe"](function (C3, C4) {
        var RB = Rc,
          C5 = C3['type'];
        C5 === X && "success" === C4["verifyStatus"] && window["setTimeout"](function () {
          I["close"]();
        }, 500);
      }), this["autoOpen"] && this['open']();
    },
    'beforeDestroy': function () {
      this["_transition"]["dispose"](), E['off'](this['appendTo'] ? E["find"](".yidun_popup__mask", this["$el"]) : document, "click", this['bodyCloseModalFn']);
    },
    'methods': {
      'onWidthGetedForCore': function () {
        this['onWidthGeted'] && 'function' == typeof this["onWidthGeted"] && this["onWidthGeted"](this["$el"]);
      },
      'open': function () {
        var RZ = Ri,
          I = this;
        Q["nextFrame"](function () {
          return I["_transition"]['enter']();
        });
      },
      'bodyCloseModal': function (I) {
        var Z = E['className'](I["target"]);
        Z && Z["search"](/yidun/g) > -1 || this["close"](S["USER"]);
      },
      'close': function (I) {
        this['$store']["state"]['config']["enableClose"] || this['closeModal'](I);
      },
      'closeModal': function () {
        var I = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : S["PROCESS"];
        this["_isMounted"] && "none" !== this["$el"]["style"]["display"] && (this["$store"]["state"]["config"]['enableClose'] && (I = S["CLOSE"]), this["onBeforeClose"] && this["onBeforeClose"](), this["curCloseSource"] = I, this['_transition']["leave"]());
      },
      'refresh': function () {
        var I = this["$children"][0];
        I && I["refresh"]["apply"](I, arguments);
      }
    }
  };
}, function (a, W, U) {
  function R(G, j) {
    var L = !(arguments["length"] > 2 && void 0 !== arguments[2]) || arguments[2];
    if (G && L) {
      var E = A['uuid'](),
        Q = '\x0a\x20\x20\x20\x20.yidun_intellisense\x20.yidun_intelli-tips:hover\x20.yidun_intelli-icon,\x0a\x20\x20\x20\x20.yidun_intellisense.yidun_intellisense--checking\x20.yidun_intelli-icon,\x0a\x20\x20\x20\x20.yidun_intellisense.yidun_intellisense--loading\x20.yidun_intelli-icon,\x0a\x20\x20\x20\x20.yidun.yidun--jigsaw\x20.yidun_control\x20.yidun_slider:hover,\x0a\x20\x20\x20\x20.yidun.yidun--jigsaw\x20.yidun_control.yidun_control--moving\x20.yidun_slider\x20{\x0a\x20\x20\x20\x20\x20\x20background-color:\x20' + G + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.yidun.yidun--jigsaw\x20.yidun_control.yidun_control--moving\x20.yidun_slide_indicator\x20{\x0a\x20\x20\x20\x20\x20\x20border-color:\x20' + G + ";\n    }\n  ",
        k = Object["assign"]([["NECaptcha-color__" + E, Q]]);
      z(k, j);
    }
  }
  function P(G, j) {
    var L = !(arguments["length"] > 2 && void 0 !== arguments[2]) || arguments[2];
    if (L) {
      var E = G["controlBar"],
        Q = G["imagePanel"],
        K = '';
      if (E) {
        var X = E["borderColor"],
          T = E["background"],
          O = E["borderColorMoving"],
          N = E["backgroundMoving"],
          J = E["borderColorSuccess"],
          q = E['backgroundSuccess'],
          S = E["borderColorError"],
          V = E["backgroundError"],
          F = E["slideBackground"],
          w = E["textSize"],
          D = E["textColor"],
          B = E["paddingLeft"];
        K += '\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light\x20.yidun_control,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark\x20.yidun_control\x20{\x0a\x20\x20\x20\x20\x20\x20' + (X ? 'border-color:\x20' + X : '') + ';\x0a\x20\x20\x20\x20\x20\x20' + (T ? "background: " + T : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      " + (O ? 'border-color:\x20' + O : '') + ';\x0a\x20\x20\x20\x20\x20\x20' + (N ? "background: " + N : '') + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light\x20.yidun_control.yidun_control--moving\x20.yidun_slider,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark\x20.yidun_control.yidun_control--moving\x20.yidun_slider\x20{\x0a\x20\x20\x20\x20\x20\x20' + (O ? "background: " + O : '') + ';\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light.yidun--success\x20.yidun_control\x20.yidun_slide_indicator,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark.yidun--success\x20.yidun_control\x20.yidun_slide_indicator\x20{\x0a\x20\x20\x20\x20\x20\x20' + (J ? "border-color: " + J : '') + ";\n      " + (q ? "background: " + q : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--success .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--success .yidun_control .yidun_slider {\n      " + (J ? "background: " + J : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--success:not(.yidun--jigsaw) .yidun_control {\n      " + (J ? "border-color: " + J : '') + ";\n      " + (q ? "background: " + q : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_tips {\n      " + (J ? "color: " + J : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_control .yidun_slide_indicator {\n      " + (S ? 'border-color:\x20' + S : '') + ";\n      " + (V ? "background: " + V : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--error .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--error .yidun_control .yidun_slider {\n      " + (S ? "background: " + S : '') + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light.yidun--error:not(.yidun--jigsaw)\x20.yidun_control,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark.yidun--error:not(.yidun--jigsaw)\x20.yidun_control\x20{\x0a\x20\x20\x20\x20\x20\x20' + (S ? "border-color: " + S : '') + ";\n      " + (V ? 'background:\x20' + V : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_control {\n      " + (S ? 'border-color:\x20' + S : '') + ';\x0a\x20\x20\x20\x20\x20\x20' + (V ? 'background:\x20' + V : '') + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light.yidun--error\x20.yidun_tips,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark.yidun--error\x20.yidun_tips\x20{\x0a\x20\x20\x20\x20\x20\x20' + (S ? "color: " + S : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_tips {\n      " + (S ? "color: " + S : '') + ';\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light.yidun--jigsaw\x20.yidun_slider,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark.yidun--jigsaw\x20.yidun_slider\x20{\x0a\x20\x20\x20\x20\x20\x20' + (F ? 'background:\x20' + F : '') + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--light.yidun--jigsaw\x20.yidun_slider.yidun_slider--hover:hover,\x0a\x20\x20\x20\x20.yidun.yidun-custom.yidun--dark.yidun--jigsaw\x20.yidun_slider.yidun_slider--hover:hover\x20{\x0a\x20\x20\x20\x20\x20\x20' + (O ? 'background:\x20' + O : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_tips__content,\n    .yidun.yidun-custom.yidun--dark .yidun_tips__content {\n      " + (w ? 'font-size:\x20' + w : '') + ";\n    }\n    .yidun.yidun-custom.yidun--light:not(.yidun--error):not(.yidun--success) .yidun_tips,\n    .yidun.yidun-custom.yidun--dark:not(.yidun--error):not(.yidun--success) .yidun_tips {\n      " + (D ? "color: " + D : '') + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_tips {\n      " + (B ? 'padding-left:\x20' + B : '') + ';\x0a\x20\x20\x20\x20}\x0a\x20\x20';
      }
      if (Q) {
        var I = Q["loadBackgroundImage"],
          Z = Q["loadBackgroundColor"];
        K += "\n    .yidun.yidun-custom.yidun--light .yidun_loadbox,\n    .yidun.yidun-custom.yidun--dark .yidun_loadbox {\n      " + (I ? "background-image: url(" + I + ')' : '') + ";\n      " + (Z ? "background-color: " + Z : '') + ";\n    }\n    ";
      }
      var H = A["uuid"](),
        C0 = Object["assign"]([["NECaptcha-color__" + H, K]]);
      z(C0, j);
    }
  }
  var z = U(24),
    A = U(3);
  a["exports"] = {
    'applyColorIfNeed': R,
    'applyStyleIfNeed': P
  };
}, function (a, W) {
  var P5 = MF;
  a["exports"] = function (U) {
    var R = U["protocol"],
      P = void 0 === R ? '' : R,
      z = U['host'],
      A = void 0 === z ? '' : z,
      G = U["port"],
      j = void 0 === G ? '' : G,
      L = U["path"],
      E = void 0 === L ? '' : L,
      Q = U["search"],
      k = void 0 === Q ? '' : Q,
      h = U["hash"],
      K = void 0 === h ? '' : h;
    if (P && (P = P["replace"](/:?\/{0,2}$/, '://')), A) {
      var X = A["match"](/^([-0-9a-zA-Z.:]*)(\/.*)?/);
      A = X[1], E = (X[2] || '') + '/' + E;
    }
    if (!A && (P = ''), j) {
      if (!A) throw Error("\"host\" is required, if \"port\" was provided");
      j = ':' + j;
    }
    return E && (E = E["replace"](/^\/*|\/+/g, '/')), k && (k = k["replace"](/^\??/, '?')), K && (K = K['replace'](/^#?/, '#')), P + A + j + E + k + K;
  };
}, function (a, W, U) {
  var P7 = MF,
    R,
    P,
    z = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (A) {
      return typeof A;
    } : function (A) {
      return A && 'function' == typeof Symbol && A["constructor"] === Symbol && A !== Symbol["prototype"] ? "symbol" : typeof A;
    };
  !function () {
    var A = function () {
      function G() {}
      function j(X, T) {
        for (var m = T['length'], p = 0; p < m; ++p) k(X, T[p]);
      }
      function L(X, T) {
        X[T] = !0;
      }
      function E(X, T) {
        for (var m in T) h['call'](T, m) && (X[m] = !!T[m]);
      }
      function Q(X, T) {
        for (var m = T["split"](K), p = m["length"], O = 0; O < p; ++O) X[m[O]] = !0;
      }
      function k(X, T) {
        if (T) {
          var m = 'undefined' == typeof T ? "undefined" : z(T);
          "string" === m ? Q(X, T) : Array["isArray"](T) ? j(X, T) : "object" === m ? E(X, T) : "number" === m && L(X, T);
        }
      }
      function l() {
        for (var X = arguments["length"], T = Array(X), m = 0; m < X; m++) T[m] = arguments[m];
        var p = new G();
        j(p, T);
        var O = [];
        for (var N in p) p[N] && O["push"](N);
        return O["join"]('\x20');
      }
      G["prototype"] = {};
      var h = {}["hasOwnProperty"],
        K = /\s+/;
      return l;
    }();
    "undefined" != typeof a && a["exports"] ? a["exports"] = A : 'object' === z(U(28)) && U(28) ? (R = [], P = function () {
      return A;
    }['apply'](W, R), !(void 0 !== P && (a["exports"] = P))) : window["classNames"] = A;
  }();
}, function (a, W) {
  var PL = MF;
  function U() {
    function P(k) {
      return j['call'](z(k) ? k : function () {}, k, 1);
    }
    function z(k) {
      return ("undefined" == typeof k ? "undefined" : R(k)) === L;
    }
    function A(k, l, h) {
      return function () {
        var K = this["supr"];
        this["supr"] = h[Q][k];
        var X = {}['fabricatedUndefined'],
          T = X;
        try {
          T = l['apply'](this, arguments);
        } finally {
          this["supr"] = K;
        }
        return T;
      };
    }
    function G(k, l, h) {
      for (var K in l) l["hasOwnProperty"](K) && (k[K] = z(l[K]) && z(h[Q][K]) && E["test"](l[K]) ? A(K, l[K], h) : l[K]);
    }
    function j(k, h) {
      var PA = M;
      function K() {}
      function X() {
        this["initialize"] ? this["initialize"]["apply"](this, arguments) : (h || p && T["apply"](this, arguments), O['apply'](this, arguments));
      }
      K[Q] = this[Q];
      var T = this,
        m = new K(),
        p = z(k),
        O = p ? k : this,
        N = p ? {} : k;
      return X["methods"] = function (J) {
        return G(m, J, T), X[Q] = m, this;
      }, X["methods"]["call"](X, N)['prototype']["constructor"] = X, X["extend"] = j, X[Q]['implement'] = X["statics"] = function (J, q) {
        return J = "string" == typeof J ? function () {
          var S = {};
          return S[J] = q, S;
        }() : J, G(this, J, T), this;
      }, X;
    }
    var L = "function",
      E = /xyz/['test'](function () {
        xyz;
      }) ? /\bsupr\b/ : /.*/,
      Q = "prototype";
    return P;
  }
  var R = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (P) {
    return typeof P;
  } : function (P) {
    return P && 'function' == typeof Symbol && P['constructor'] === Symbol && P !== Symbol["prototype"] ? "symbol" : typeof P;
  };
  a["exports"] = U();
}, function (a, W) {
  var PT = MF;
  function U() {
    this['_state'] = z, this['_arg'] = void 0, this['_fullfilledCallback'] = [], this["_rejectedCallback"] = [];
  }
  function R(j) {
    window["setTimeout"](j, 1);
  }
  function P(j) {
    var Ph = M;
    if (j) {
      var L = new U();
      j['then'] = function () {
        return L["then"]["apply"](L, arguments);
      }, j["catch"] = function () {
        return L['catch']["apply"](L, arguments);
      }, j["finally"] = function () {
        return L['finally']["apply"](L, arguments);
      }, j['resolve'] = function () {
        return L["resolve"]["apply"](L, arguments);
      };
    }
  }
  var z = "pending",
    A = "fullfilled",
    G = "rejected";
  Object["assign"](U['prototype'], {
    'then': function (j, L) {
      var E = function (Q) {
        return "function" == typeof Q;
      };
      return E(j) && this["_fullfilledCallback"]["push"](j), E(L) && this['_rejectedCallback']["push"](L), this['_state'] !== z && this["_emit"](this["_state"]), this;
    },
    'catch': function (j) {
      return this['then'](null, j);
    },
    'finally': function (j) {
      return this['then'](j, j);
    },
    'resolve': function (j) {
      this["_state"] === z && (j instanceof Error ? this["_state"] = G : this["_state"] = A, this['_arg'] = j, this["_emit"](this["_state"]));
    },
    '_emit': function (j) {
      var L = this;
      switch (j) {
        case A:
          R(function () {
            var PO = M;
            L["_fullfilledCallback"]["map"](function (E) {
              return E(L["_arg"]);
            }), L["_fullfilledCallback"] = [], L["_rejectedCallback"] = [];
          });
          break;
        case G:
          R(function () {
            var Pt = M;
            L["_rejectedCallback"]["map"](function (E) {
              return E(L["_arg"]);
            }), L["_fullfilledCallback"] = [], L["_rejectedCallback"] = [];
          });
      }
    }
  }), U["mixin"] = P, a["exports"] = U;
}, function (a, W, U) {
  var Pq = MF,
    R = Object["assign"] || function (G) {
      for (var j = 1; j < arguments['length']; j++) {
        var L = arguments[j];
        for (var E in L) Object["prototype"]["hasOwnProperty"]["call"](L, E) && (G[E] = L[E]);
      }
      return G;
    },
    P = U(11),
    z = U(46),
    A = U(3);
  a["exports"] = function () {
    var PV = Pq,
      G = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      j = G["captchaConfig"],
      L = void 0 === j ? {} : j;
    return function (E, Q, k, h) {
      var K = A["getDeviceToken"]();
      Q = Object["assign"]({
        'referer': z(),
        'zoneId': L["zoneId"] || ''
      }, K ? {
        'dt': K
      } : {}, Q);
      var X = R({}, G, h, {
        'url': E,
        'payload': Q
      });
      P["api"](X)["then"](function (T) {
        return k(null, T);
      })["catch"](k);
    };
  };
}, function (a, W) {
  var Pn = MF;
  a["exports"] = function (U) {
    if ("number" == typeof U || /^\d+(\.\d+)?$/["test"](U)) return U + 'px';
    if (void 0 !== U && '' !== U) return U;
  };
}, function (a, W) {
  function U(G, j) {
    var Pi = M;
    Object["keys"](j)['map'](function (L) {
      G["setAttribute"](L, j[L]);
    });
  }
  function R(G, j) {
    var L = null;
    L = j && j['nodeType'] ? j : document["head"] || document['getElementsByTagName']("head")[0], L["appendChild"](G);
  }
  function P(G) {
    var j = document["createElement"]("style"),
      L = {
        'type': 'text/css'
      };
    return U(j, L), R(j, G), j;
  }
  function z(G, j, L) {
    var E = j['css'],
      Q = j["media"];
    if (Q && G['setAttribute']("media", Q), G["styleSheet"]) G['styleSheet']["cssText"] = E;else {
      for (; G["firstChild"];) G["removeChild"](G["firstChild"]);
      G["appendChild"](document["createTextNode"](E));
    }
  }
  var A = {};
  a["exports"] = function (G, j) {
    var L = G[0],
      E = L[0],
      Q = {
        'css': L[1],
        'media': L[2]
      };
    !A[E] && (A[E] = P(j)), z(A[E], Q);
  };
}, function (W, U, R) {
  function P(x, F) {
    for (var b = [], w = 0; w < x; w++) b["push"](F);
    return b;
  }
  function z(x) {
    return x < -128 ? z(256 + x) : x > 127 ? z(x - 256) : x;
  }
  function A(x, F) {
    return z(x + F);
  }
  function G() {
    for (var x = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : [], F = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : [], b = [], w = F["length"], D = 0, B = x["length"]; D < B; D++) b[D] = A(x[D], F[D % w]);
    return b;
  }
  function j(x, F) {
    return z(z(x) ^ z(F));
  }
  function L() {
    for (var x = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : [], F = arguments['length'] > 1 && void 0 !== arguments[1] ? arguments[1] : [], b = [], w = F["length"], D = 0, B = x["length"]; D < B; D++) b[D] = j(x[D], F[D % w]);
    
    return b;
  }
  function E(x) {
    var F = [];
    return F[0] = z(x >>> 24 & 255), F[1] = z(x >>> 16 & 255), F[2] = z(x >>> 8 & 255), F[3] = z(255 & x), F;
  }
  function Q(x) {
    x = '' + x;
    for (var F = [], b = V(), w = b['safeGlobal'], D = 0, B = 0, I = x["length"] / 2; D < I; D++) {
      var Z = w["parseInt"](x["charAt"](B++), 16) << 4,
        H = w["parseInt"](x["charAt"](B++), 16);
      F[D] = z(Z + H);
    }
    return F;
  }
  function k(x) {
    x = window["encodeURIComponent"](x);
    for (var F = [], b = 0, w = x["length"]; b < w; b++) '%' === x["charAt"](b) ? b + 2 < w && F["push"](Q('' + x['charAt'](++b) + x["charAt"](++b))[0]) : F['push'](z(x["charCodeAt"](b)));
    
    return F;
  }
  function K(x) {
    for (var F = [], b = 0; b < x['length']; b++) F['push']('%'), F["push"](X(x[b]));
    return window["decodeURIComponent"](F['join'](''));
  }
  function X(x) {
    var F = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    return '' + F[x >>> 4 & 15] + F[15 & x];
  }
  function T(x) {
    x = '' + x;
    var F = V(),
      b = F["safeGlobal"],
      w = b["parseInt"](x["charAt"](0), 16) << 4,
      D = b["parseInt"](x["charAt"](1), 16);
    return z(w + D);
  }
  function O(x) {
    return x["map"](function (F) {
      return X(F);
    })["join"]('');
  }
  function N(x) {
    return O(E(x));
  }
  function J(x, F, b, w, D) {
    for (var B = 0, I = x["length"]; B < D; B++) F + B < I && (b[w + B] = x[F + B]);
    return b;
  }
  function q(x) {
    return P(x, 0);
  }
  function S(x) {
    for (var F = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], b = 4294967295, w = 0, D = x["length"]; w < D; w++) b = b >>> 8 ^ F[255 & (b ^ x[w])];
    return N(4294967295 ^ b);
  }
  var V = R(27);
  U["copyToBytes"] = J, U['genCrc32'] = S, U["hexToByte"] = T, U["hexsToBytes"] = Q, U['intToBytes'] = E, U["paddingArrayZero"] = q, U["shift"] = A, U["shifts"] = G, U["stringToBytes"] = k, U["toByte"] = z, U["xor"] = j, U["xors"] = L, U["bytesToString"] = K;
}, function (a, W) {
  a['exports'] = {
    '__SBOX__': "a7be3f3933fa8c5fcf86c4b6908b569ba1e26c1a6d7cfbf60ae4b00e074a194dac4b73e7f898541159a39d08183b76eedee3ed341e6685d2357440158394b1ff03a9004cbbb5ca7dcb7f41489a16e03dcc9c71eb3c9796685b1d01b4d56193a6e1f1a2470445c191ae49c5d82765dc82c350f263387a24a502fcbf442e2dddaad0e936d9ea22b89275307b42518fbc3a626ba806d4ecd6d725f50cc8c72fefa4551ccd6fc9b2b7ab954f815c7264c6e51f4eaf99885a79892b1b60a0b3526e57ba5d178d370958847eb9fd28f9ce0bc023f4148a2adfe632126769057043d3bd8eda0df7872629f3809ef05310e83113216afe202c460fc23e789f77d1addb5e",
    '__ROUND_KEY__': "037606da0296055c",
    '__SEED_KEY__': "fd6a43ae25f74398b61c03c83be37449",
    '__BASE64_ALPHABET__': "MB.CfHUzEeJpsuGkgNwhqiSaI4Fd9L6jYKZAxn1/Vml0c5rbXRP+8tD3QTO2vWyo",
    '__BASE64_PADDING__': '7'
  };
}, function (a, W) {
  function U() {
    var z0 = M,
      R = "NECaptchaSafeWindow",
      P = function () {
        var j = document["getElementById"](R);
        j && (document["body"]["removeChild"](j), j = null);
      },
      z = document["getElementById"](R);
    if (z) return {
      'safeGlobal': z['contentWindow'],
      'destroy': P
    };
    var A = window;
    try {
      var G = document['createElement']("iframe");
      G["setAttribute"]('id', R), G["style"]['display'] = "none", document["body"]['appendChild'](G), A = G["contentWindow"];
    } catch (j) {
      A = window;
    }
    return {
      'safeGlobal': A,
      'destroy': P
    };
  }
  a["exports"] = U;
}, function (a, W) {
  (function (U) {
    a["exports"] = U;
  })["call"](W, {});
}, function (a, W, U) {
  !function (R, P) {
    a["exports"] = P();
  }(this, function () {
    'use strict';

    var zM = M;
    function R(Q) {
      var k = new RegExp("(^|;)[ ]*" + Q + "=([^;]*)"),
        l = k["exec"](document['cookie']);
      return l ? decodeURIComponent(l[2]) : '';
    }
    function P(Q, k, l) {
      var h,
        K = Q + '=' + encodeURIComponent(k) + ';';
      l && (h = new Date(), h["setTime"](h["getTime"]() + l), K += 'expires=' + h["toUTCString"]()), document['cookie'] = K;
    }
    function z() {
      for (var Q = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", k = '', l = 0, h = Q["length"]; l < 16; l++) k += Q["charAt"](Math["floor"](Math['random']() * h));
      return k;
    }
    var A,
      G = function () {
        var z9 = M;
        return G = Object["assign"] || function (Q) {
          for (var k, l = 1, h = arguments["length"]; l < h; l++) {
            k = arguments[l];
            for (var K in k) Object['prototype']["hasOwnProperty"]['call'](k, K) && (Q[K] = k[K]);
          }
          return Q;
        }, G['apply'](this, arguments);
      },
      j = {
        'userData': null,
        'name': location['hostname'] + "_snaker",
        'init': function () {
          if (!j['userData']) try {
            j['userData'] = document["createElement"]("INPUT"), j['userData']["type"] = "hidden", j["userData"]["style"]["display"] = "none", j["userData"]["addBehavior"]("#default#userData"), j["userData"] && document["body"]["appendChild"](j['userData']);
            var Q = new Date();
            Q["setDate"](Q["getDate"]() + 365), j["userData"]["expires"] = Q["toUTCString"]();
          } catch (k) {
            return console['log']('userData\x20is\x20disabled!'), !1;
          }
          return !0;
        },
        'setItem': function (Q, k) {
          j["init"]() && j['userData'] && (j["userData"]["load"](j['name']), j['userData']['setAttribute'](Q, k), j["userData"]["save"](j["name"]));
        },
        'getItem': function (Q) {
          return j["init"]() && j["userData"] ? (j["userData"]["load"](j["name"]), j['userData']["getAttribute"](Q) || '') : '';
        },
        'removeItem': function (Q) {
          j["init"]() && j["userData"] && (j["userData"]['load'](j["name"]), j["userData"]['removeAttribute'](Q), j['userData']["save"](j["name"]));
        }
      };
    try {
      A = localStorage || j;
    } catch (Q) {
      A = j;
    }
    var L = function () {
        var zz = zM;
        function k(l) {
          this["name"] = l;
        }
        return k["prototype"]["push"] = function (l) {
          if (l) try {
            var h = A['getItem'](this["name"]);
            A["setItem"](this['name'], h ? h + ',' + l : l);
          } catch (K) {
            console['log']("localstorage or userData is disabled!");
          }
        }, k["prototype"]["length"] = function () {
          try {
            var l = A["getItem"](this["name"]) || '';
            return l ? l['split'](',')["length"] : 0;
          } catch (h) {
            return console["log"]("localstorage or userData is disabled!"), 0;
          }
        }, k['prototype']["pop"] = function (l) {
          void 0 === l && (l = 1);
          var h;
          try {
            var K = A["getItem"](this["name"]),
              X = K ? K["split"](',') : [];
            h = X['splice'](0, l), A["setItem"](this["name"], X['join'](','));
          } catch (T) {
            h = [], console["log"]("localstorage or userData is disabled!");
          }
          return h;
        }, k['prototype']['clear'] = function () {
          try {
            A["removeItem"](this['name']);
          } catch (l) {
            console['log']("localstorage or userData is disabled!");
          }
        }, k;
      }(),
      E = function () {
        var zQ = zM;
        function k(h) {
          if (!h["pid"]) throw new Error("product id is required!");
          var K = h["pid"],
            X = h["bid"],
            T = h["url"],
            m = h["random"],
            p = h["limit"],
            O = h["disabled"],
            N = h["version"];
          this["pid"] = K, this['bid'] = X, this["random"] = m || 100, this["limit"] = p || 5, this['disabled'] = O, this["version"] = N || '', this["url"] = T || "https://da.dun.163.com/sn.gif", this["prefix"] = "__snaker__id", this["cache"] = new L(this["prefix"]);
          var J = R(this["prefix"]);
          J ? this['uuid'] = J : (this["uuid"] = z(), P(this["prefix"], this["uuid"], 31536000000));
        }
        return k["prototype"]["setUser"] = function (l) {
          if ("string" == typeof l) this["user"] = {
            'uid': l
          };else {
            this['user'] = {
              'uid': l["uid"]
            };
            for (var h in l) l["hasOwnProperty"](h) && "uid" !== h && (this["user"]["$user_" + h] = l[h]);
          }
        }, k["prototype"]["serialize"] = function (K, X) {
          var zl = zQ,
            T = this,
            m = T["pid"],
            O = T["bid"],
            N = T["uuid"],
            J = T["user"],
            q = T["version"],
            S = K["type"],
            V = K['name'],
            x = K["value"],
            F = function (Z, H) {
              return Z["substring"](0, H);
            },
            b = screen["width"] + 'x' + screen["height"],
            Y = F(location["href"], 200),
            w = new Date()['getTime']() + '',
            D = G(G({
              'pid': m,
              'bid': O,
              'uuid': N,
              'type': S,
              'name': V,
              'version': q,
              'value': x,
              'res': b,
              'pu': Y,
              'nts': w
            }, X), J),
            B = [];
          for (var I in D) D["hasOwnProperty"](I) && void 0 !== D[I] && B["push"](encodeURIComponent(I + '=') + encodeURIComponent(encodeURIComponent(D[I])));
          return B["join"]("%26");
        }, k["prototype"]['sendRequest'] = function (l, h) {
          if (!this['disabled']) {
            var K = new Image(1, 1);
            K["src"] = l + "?d=" + h;
          }
        }, k["prototype"]['report'] = function (l, h, K, X, T) {
          if (!this['disabled']) {
            var m = this["serialize"]({
              'type': l,
              'name': h,
              'value': K
            }, T ? T : {});
            this["random"] < Math["random"]() || (X ? (this["cache"]["push"](m), this['cache']["length"]() >= this["limit"] && this['flush']()) : this['sendRequest'](this["url"], m));
          }
        }, k["prototype"]["track"] = function (l, h, K, X) {
          this["report"](l, h, K, !1, X);
        }, k["prototype"]["trackAsync"] = function (l, h, K, X) {
          this['report'](l, h, K, !0, X);
        }, k['prototype']["flush"] = function () {
          for (var l = '', h = this["cache"]['pop'](this['limit']); h["length"];) {
            var K = h["pop"]() || '';
            K && (l['length'] + K["length"] <= 1800 ? (l = l ? l + ',' + K : K, h['length'] || this["sendRequest"](this["url"], l)) : (this["sendRequest"](this["url"], l), l = K));
          }
        }, k;
      }();
    return E;
  });
}, function (a, W) {
  a['exports'] = function () {
    var zs = M,
      U = [];
    return U["toString"] = function () {
      for (var R = [], P = 0; P < this["length"]; P++) {
        var z = this[P];
        z[2] ? R['push']("@media " + z[2] + '{' + z[1] + '}') : R['push'](z[1]);
      }
      return R["join"]('');
    }, U['i'] = function (R, P) {
      "string" == typeof R && (R = [[null, R, '']]);
      for (var z = {}, A = 0; A < this['length']; A++) {
        var G = this[A][0];
        'number' == typeof G && (z[G] = !0);
      }
      for (A = 0; A < R["length"]; A++) {
        var j = R[A];
        'number' == typeof j[0] && z[j[0]] || (P && !j[2] ? j[2] = P : P && (j[2] = '(' + j[2] + ')\x20and\x20(' + P + ')'), U['push'](j));
      }
    }, U;
  };
}, function (a, W, U) {
  a["exports"] = U['p'] + "images/tipBg.3417f33.png";
}, function (a, W, U) {
  a["exports"] = U['p'] + "images/tipBg@2x.16fcb9a.png";
}, function (W, U, R) {
  var zt = MF,
    P = R(14),
    z = P['FETCH_INTELLISENSE_CAPTCHA'],
    A = P["VERIFY_INTELLISENSE_CAPTCHA"],
    G = P["RESET_STATE"],
    j = R(6),
    L = j["SWITCH_LOAD_STATUS"],
    E = j["UPDATE_VERIFY_STATUS"],
    Q = j['INVOKE_HOOK'],
    K = j['EVENT_RESET'],
    X = R(5),
    T = X['CAPTCHA_TYPE'],
    O = X['SAMPLE_NUM'],
    N = X['POPUP_PRELOAD_SHIFTING_CLASS'],
    J = R(3),
    q = R(10),
    S = q["aes"],
    V = q['xorEncode'],
    F = R(8),
    w = R(16),
    D = R(13),
    B = R(4);
  W["exports"] = {
    'data': function () {
      return {
        'beginTime': J["now"](),
        'traceData': [],
        'status': "normal",
        'classicVisible': !1
      };
    },
    'mounted': function () {
      this["_removeEvents"] = this['initEvents'](), this["fetchCaptcha"]();
    },
    'beforeDestroy': function () {
      this['_removeEvents'](), this["clear"]();
    },
    'methods': {
      'fetchCaptcha': function () {
        var I = this;
        return new D(function (Z, H) {
          var zV = M,
            C0 = {
              'width': ''
            };
          I["$store"]["state"]['smsNew'] && (C0['smsVersion'] = I["$store"]["state"]["smsVersion"]), I["$store"]["dispatch"](z, C0, function (C1, C2) {
            if (I["_isMounted"]) {
              if (C1) return I["$setData"]({
                'status': "loadfail"
              }), void H(C1);
              I["$store"]["commit"](Q, {
                'name': "onReady"
              }), I['$store']["commit"](Q, {
                'name': "onDidRefresh"
              }), Z(C2);
            }
          });
        });
      },
      'initEvents': function () {
        var zn = zt,
          I = this,
          Z = this['$store']["subscribe"](function (H, C0) {
            var C1 = H['type'],
              C2 = (H["payload"], C0["verifyStatus"]),
              C3 = C0['load'];
            switch (C1) {
              case L:
                C3 && ("loading" === C3["status"] && I['$setData']({
                  'status': "loading"
                }), 'done' === C3["status"] && I["$setData"]({
                  'status': "loaddone"
                }), 'fail' === C3['status'] && I["$setData"]({
                  'status': "loadfail"
                }));
                break;
              case E:
                "success" === C2 && I["$setData"]({
                  'status': 'success'
                }), "error" === C2 && I["$setData"]({
                  'status': "error"
                });
                break;
              case K:
                I["reset"]();
            }
          });
        return function () {
          Z();
        };
      },
      'reset': function () {
        var zi = zt,
          I = this;
        this["$store"]['dispatch'](G), this["fetchCaptcha"]()["then"](function () {
          I['clear'](), I["$setData"]({
            'status': 'normal'
          });
        });
      },
      'clear': function () {
        var zF = zt,
          I = this;
        this["_captchaIns"] && (this["$setData"]({
          'classicVisible': !1
        }), this["$nextTick"](function () {
          I["_captchaIns"]['$destroy'](), I["_captchaIns"] = null;
        })), this["beginTime"] = 0, this['traceData'] = [];
      },
      'verifyCaptcha': function () {
        'normal' === this['status'] ? this['verifyIntellisenseCaptcha']() : this['_captchaIns'] && this["_captchaIns"]["open"]();
      },
      'verifyIntellisenseCaptcha': function () {
        var zv = zt,
          I = this,
          Z = this['$store']['state']["token"],
          H = J["now"](),
          C0 = V(Z, [0, 0, H - (this["beginTime"] || H)] + ''),
          C1 = this['traceData']["map"](function (C2) {
            return V(Z, C2);
          });
        this["$store"]["dispatch"](A, {
          'token': Z,
          'type': T["INTELLISENSE"],
          'width': "240",
          'data': JSON['stringify']({
            'd': '',
            'm': S(J["sample"](C1, O)["join"](':')),
            'p': S(C0),
            'ext': S(V(Z, '1,' + C1["length"]))
          })
        }, function (C2) {
          var zf = zv;
          if (I["_isMounted"]) {
            if (!C2) return void I['$setData']({
              'status': "success"
            });
            if (!I["_captchaIns"]) {
              var C3 = I["$store"]["state"]["config"],
                C4 = F["_extend"](w);
              I["_captchaIns"] = new C4({
                'store': I["$store"],
                'propsData': {
                  'autoOpen': !1,
                  'intellisense': !0,
                  'enableColor': !0,
                  'onBeforeClose': function () {
                    I["$store"]["commit"](Q, {
                      'name': "onBeforeClose"
                    });
                  },
                  'onClose': function (C5) {
                    I["$store"]['commit'](Q, {
                      'name': 'onClose',
                      'args': [{
                        'source': C5
                      }]
                    });
                  },
                  'onOpen': function () {
                    I['$store']["commit"](Q, {
                      'name': "onOpen"
                    });
                  },
                  'onWidthGeted': function (C5) {
                    B['delClass'](C5, N);
                  }
                }
              })['$mount'](function (C5) {
                B["addClass"](C5, N), C3["appendTo"] ? C3['appendTo']['appendChild'](C5) : document["body"]["appendChild"](C5);
              }), I["$setData"]({
                'status': "loading"
              });
            }
            I["_captchaIns"]["open"]();
          }
        });
      },
      'closeModal': function () {
        this["_captchaIns"] && this["_captchaIns"]["closeModal"]();
      }
    }
  };
}, function (W, U, R) {
  var zZ = MF,
    P = function () {
      function D(B, I) {
        var Z = [],
          H = !0,
          C0 = !1,
          C1 = void 0;
        try {
          for (var C2, C3 = B[Symbol["iterator"]](); !(H = (C2 = C3['next']())["done"]) && (Z["push"](C2["value"]), !I || Z["length"] !== I); H = !0);
        } catch (C4) {
          C0 = !0, C1 = C4;
        } finally {
          try {
            !H && C3["return"] && C3["return"]();
          } finally {
            if (C0) throw C1;
          }
        }
        return Z;
      }
      return function (B, I) {
        if (Array["isArray"](B)) return B;
        if (Symbol["iterator"] in Object(B)) return D(B, I);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    z = R(8),
    A = R(4),
    G = R(3),
    j = R(10),
    L = j["aes"],
    E = j["xorEncode"],
    Q = R(5),
    k = Q["SAMPLE_NUM"],
    K = Q["BIGGER_SAMPLE_NUM"],
    X = R(6),
    T = X["SWITCH_LOAD_STATUS"],
    O = X["INVOKE_HOOK"],
    N = R(7),
    J = N["REQUEST_IMG_ERROR"],
    q = R(11),
    S = R(9),
    V = S["createNetCollect"],
    F = document,
    w = {
      'status': "dragend",
      'beginTime': 0,
      'clientX': 0,
      'startX': 0,
      'clientY': 0,
      'startY': 0,
      'dragX': 0,
      'dragY': 0
    };
  W['exports'] = z["_extend"]({
    'abstract': !0,
    'props': ["loadInfo", "mode", "type", "isRtlLang"],
    'data': function () {
      var D = this["$store"]["state"]['langPkg'];
      return {
        'langPkg': D
      };
    },
    'mounted': function () {
      this['initData'](), this['$bgImg'] = A['find'](".yidun_bgimg", this["$el"]), this["$canvas"] = A["find"](".yidun_avoid-canvas", this['$el']), this['$dragAvoidBall'] = A["find"](".yidun_avoid-front", this["$el"]), this["canvasContext"] = A["supportCanvas"] ? this["$canvas"]['getContext']('2d') : null, this["firstEventType"] = '', this["width"] = this["$store"]['state']['coreOffsetWidth'] || this["$el"]["offsetWidth"], this["$dragAvoidBall"]["style"]['width'] = 60 * this["width"] / 960 + 'px', this["_removeEvents"] = this["initEvents"](), this["initCanvas"]();
    },
    'beforeDestroy': function () {
      this["_removeEvents"](), this['$bgImg'] = null, this["$dragAvoidBall"] = null;
    },
    'render': function (D) {
      var B = D["loadInfo"];
      if (B && "done" === B["status"]) {
        var I = B["data"] && B['data']['front'];
        Array["isArray"](I) && (I = I[0], B["data"]["front"] = I);
      }
      B && this["changeLoadStatus"](B);
    },
    'methods': {
      'initData': function () {
        this['beginTime'] = 0, this["mouseDownCounts"] = 0, this['drag'] = Object["assign"]({}, w), this["traceData"] = [], this["ballTraceData"] = [];
      },
      'initPosition': function () {
        this["$dragAvoidBall"]["style"]["left"] = "0px", this["$dragAvoidBall"]['style']["bottom"] = "0px";
      },
      'initCanvas': function () {
        if (this["$canvas"]["width"] = this["width"], this["$canvas"]["height"] = this['width'] / 2, this["canvasContext"]) try {
          this["canvasContext"]['clearRect'](0, 0, this['width'], this['width'] / 2);
        } catch (D) {}
      },
      'reset': function () {
        var D = this["$store"]["state"],
          B = D['countsOfVerifyError'],
          I = D["config"],
          Z = B > I["maxVerification"];
        Z || (this["initData"](), this['initCanvas'](), this["initPosition"]());
      },
      'floatStatusChange': function () {
        this["$parent"]["shouldHandleFloatChange"](this["loadInfo"]) && this["changeTipElText"]();
      },
      'initEvents': function () {
        var A7 = zZ,
          D = this,
          B = function (C5) {
            return function (C6) {
              var C7 = C6["type"] || '';
              D["firstEventType"] || (D["firstEventType"] = C7), C7["indexOf"]('pointer') === -1 && D["firstEventType"]['indexOf']("pointer") > -1 || D["firstEventType"]["indexOf"]("pointer") === -1 && C7['indexOf']("pointer") > -1 || C5(C6);
            };
          },
          I = B(this["onMouseDown"]["bind"](this)),
          Z = B(this["onMouseMove"]["bind"](this)),
          H = this["onMouseUp"]["bind"](this),
          C0 = A['supportPointer'] ? "pointer" : "mouse";
        if (A['on'](this["$dragAvoidBall"], C0 + "down", I), A['on'](F, C0 + "move", Z), A['on'](F, C0 + 'up', H), 'pointer' === C0) {
          var C1 = B(this["onMouseDown"]['bind'](this)),
            C2 = B(this["onMouseMove"]["bind"](this)),
            C3 = this["onMouseUp"]['bind'](this),
            C4 = "mouse";
          A['on'](this["$dragAvoidBall"], "mousedown", C1), A['on'](F, "mousemove", C2), A['on'](F, "mouseup", C3), this["_removeMouseEvent"] = function () {
            A["off"](D["$dragAvoidBall"], "mousedown", C1), A["off"](F, "mousemove", C2), A["off"](F, "mouseup", C3);
          };
        }
        return A['supportPointer'] && (document["documentElement"]['style']['touchAction'] = "none"), function () {
          A['off'](D['$dragAvoidBall'], C0 + "down", I), A['off'](F, C0 + "move", Z), A["off"](F, C0 + 'up', H), "pointer" === C0 && D['_removeMouseEvent'](), A["supportPointer"] && (document["documentElement"]["style"]["touchAction"] = "auto");
        };
      },
      'changeTipElText': function () {
        var D = this["$store"]["state"]["config"],
          B = this["langPkg"],
          I = this["$parent"]["panelVisible"],
          Z = "float" === (this["mode"] || D["mode"]),
          H = A['find']('.yidun_tips__text', this["$el"]),
          C0 = A["find"]('.yidun_tips__answer', this['$el']);
        Z && !I ? (A["text"](H, B["clickButton"]), A["addClass"](this["$el"], "yidun--button"), A["addClass"](C0, "hide")) : (A["text"](H, B['dragToAvoidObstacle']), A["delClass"](C0, "hide"), A["delClass"](this["$el"], "yidun--button"));
      },
      'changeLoadStatus': function (D) {
        var AM = zZ,
          B = this,
          I = D["status"],
          Z = D["data"];
        switch (I) {
          case "loading":
            if (Z) {
              var H = A["find"]('.yidun_bg-img', this['$el']),
                C0 = A['find'](".yidun_avoid-front", this["$el"]),
                C1 = A['find'](".yidun_tips__img", this["$el"]),
                C2 = this["$store"],
                C3 = C2["commit"],
                C4 = C2["state"],
                C5 = q['all']([q["image"]({
                  'url': Z['bg'],
                  'timeout': C4["config"]['timeout'],
                  'onProcess': V(C4["captchaCollector"], {
                    'token': Z["token"]
                  })
                }), q['image']({
                  'url': Z["front"],
                  'timeout': C4["config"]['timeout'],
                  'onProcess': V(C4["captchaCollector"], {
                    'token': Z['token']
                  })
                })]);
              C5["then"](function (C6) {
                if (B['_isMounted']) {
                  var C7 = P(C6, 2),
                    C8 = C7[0],
                    C9 = C7[1];
                  H["src"] = C8["src"], C0["src"] = C9["src"], C1["src"] = C8["src"], C3(T, {
                    'status': "done",
                    'data': Z
                  });
                }
              })["catch"](function (C6) {
                if (B['_isMounted']) {
                  var C7 = Object['assign']({}, C6["data"], {
                    'token': Z["token"]
                  });
                  C3(T, {
                    'status': "fail"
                  }), C3(O, {
                    'name': "onError",
                    'args': [new N(J, C6["message"], C7)]
                  });
                }
              });
            }
            break;
          case 'done':
            this["changeTipElText"]();
        }
      },
      'drawTrackLine': function (D, B) {
        var I = this["getActualDragCoordinate"](),
          Z = I["actualLeft"],
          H = I["actualBottom"],
          C0 = this["drag"]["status"],
          C1 = this["$bgImg"]['getBoundingClientRect'](),
          C2 = C1["height"],
          C3 = this["$dragAvoidBall"]["getBoundingClientRect"](),
          C4 = C3["width"],
          C5 = D + C4 / 2,
          C6 = C2 - B - C4 / 2,
          C7 = Z + C4 / 2,
          C8 = C2 - H - C4 / 2;
        if (this["canvasContext"] && "dragging" === C0) {
          var C9 = this["canvasContext"];
          C9["beginPath"](), C9["moveTo"](C5, C6), C9["lineTo"](C7, C8), C9["strokeStyle"] = "#fff", C9['lineWidth'] = 2, C9['stroke']();
        }
      },
      'onMouseDown': function (D) {
        D["event"]["cancelable"] !== !1 && D["preventDefault"](), this['mouseDownCounts']++;
        var B = this["$store"]["state"],
          I = B['load'],
          Z = B["verifyStatus"];
        if ('done' === I["status"] && !Z) {
          var H = D["clientX"],
            C0 = D["clientY"],
            C1 = this["drag"];
          "dragend" === C1["status"] && Object["assign"](C1, {
            'beginTime': G["now"](),
            'clientX': H,
            'startX': H,
            'clientY': C0,
            'startY': C0,
            'dragX': 0,
            'dragY': 0
          });
        }
      },
      'onMouseMove': function (D) {
        var B = D["clientX"],
          I = D["clientY"],
          Z = this["drag"],
          H = Z["status"],
          C0 = Z["beginTime"];
        if (Z["status"] = C0 && "dragend" === H ? "dragstart" : H, "dragend" !== Z['status']) {
          !(D['type']["indexOf"]("touch") !== -1 && A['supportPassive'] || D["event"]["cancelable"] !== !1) && D["preventDefault"]();
          var C1 = this['getActualDragCoordinate'](),
            C2 = C1['actualLeft'],
            C3 = C1["actualBottom"];
          Object["assign"](Z, {
            'clientX': B,
            'clientY': I,
            'dragX': B - Z["startX"],
            'dragY': I - Z["startY"]
          }), this['drawTrackLine'](C2, C3);
          var C4 = this["$store"]["state"]["token"],
            C5 = G["now"]() - Z["beginTime"],
            C6 = [Math["round"](Z["dragX"]), Math["round"](Z['dragY']), C5],
            C7 = E(C4, C6 + '');
          this["traceData"]["push"](C7);
          var C8 = this["$dragAvoidBall"]["getBoundingClientRect"](),
            C9 = C8["width"],
            CC = C8["height"],
            CM = this["$bgImg"]["getBoundingClientRect"](),
            Ca = CM['height'],
            CW = [Math["round"](C2 + C9 / 2), Math["round"](Ca - (C3 + CC / 2)), C5];
          this["ballTraceData"]["push"](E(C4, CW + '')), "dragstart" === Z["status"] && this["onMouseMoveStart"](D), "dragging" === Z["status"] && this['onMouseMoving'](D);
        }
      },
      'onMouseMoveStart': function () {
        Object["assign"](this["drag"], {
          'status': "dragging"
        });
      },
      'onMouseMoving': function () {
        var D = this["getActualDragCoordinate"](),
          B = D["actualLeft"],
          I = D["actualBottom"];
        this["$dragAvoidBall"]['style']["left"] = B + 'px', this['$dragAvoidBall']["style"]["bottom"] = I + 'px';
      },
      'onMouseUp': function () {
        var D = this['drag'],
          B = this['getActualDragCoordinate'](),
          I = B['actualLeft'],
          Z = B['actualBottom'],
          H = this['$dragAvoidBall']['getBoundingClientRect'](),
          C0 = H['width'],
          C1 = H["height"],
          C2 = this["$bgImg"]["getBoundingClientRect"](),
          C3 = C2['height'];
        if ("dragend" === D["status"]) return void Object["assign"](D, {
          'beginTime': 0
        });
        Object["assign"](D, w);
        var C4 = G["msie"](),
          C5 = G["sample"](this['ballTraceData'], C4 ? k : K),
          C6 = this['$store']["state"]["token"],
          C7 = L(E(C6, [Math["round"](I + C0 / 2), Math["round"](C3 - (Z + C1 / 2)), G['now']() - this['beginTime']] + ''));
        this["onVerifyCaptcha"]({
          'data': JSON["stringify"]({
            'd': '',
            'm': L(C5["join"](':')),
            'p': C7,
            'ext': L(E(C6, this['mouseDownCounts'] + ',' + this['traceData']['length']))
          })
        });
      },
      'getActualDragCoordinate': function () {
        var D = this['drag'],
          B = D['dragX'],
          I = D['dragY'],
          Z = this["$bgImg"]['getBoundingClientRect'](),
          H = Z['width'],
          C0 = Z["height"],
          C1 = this["$dragAvoidBall"]['getBoundingClientRect'](),
          C2 = C1["width"],
          C3 = C1["height"],
          C4 = H - C2,
          C5 = C0 - C3,
          C6 = Math["min"](Math["max"](B, 0), C4),
          C7 = -Math["min"](Math["max"](I, -C5), 0);
        return {
          'actualLeft': C6,
          'actualBottom': C7
        };
      }
    }
  });
}, function (W, U, R) {
  var AL = MF,
    P = R(8),
    z = R(4),
    A = R(3),
    G = R(10),
    j = G["aes"],
    L = G["xorEncode"],
    E = R(5),
    Q = E['CAPTCHA_CLASS'],
    k = E['SAMPLE_NUM'],
    K = R(6),
    X = K["SWITCH_LOAD_STATUS"],
    T = K["INVOKE_HOOK"],
    O = R(7),
    N = O["REQUEST_IMG_ERROR"],
    J = R(11),
    q = R(9),
    S = q["createNetCollect"],
    V = 4,
    F = 2,
    w = {
      'status': 'dragend',
      'beginTime': 0,
      'clientX': 0,
      'clientY': 0,
      'startX': 0,
      'startY': 0,
      'startLeft': 0,
      'startTop': 0,
      'el': null
    };
  W["exports"] = P["_extend"]({
    'abstract': !0,
    'props': ["loadInfo", 'mode'],
    'data': function () {
      var D = this["$store"]['state']["langPkg"];
      return {
        'langPkg': D
      };
    },
    'mounted': function () {
      this["initData"](), this["_removeEvents"] = this['initEvents'](), this['initCustomStyles']();
    },
    'beforeDestroy': function () {
      this['_removeEvents'](), this["$el"] = null, this["$bgImgWrap"] = null, this["$picViews"] = [], this["drag"] = null, this['traceData'] = null, this["exchangePos"] = null;
    },
    'render': function (D) {
      var B = D['loadInfo'];
      B && this["changeLoadStatus"](B);
    },
    'methods': {
      'initData': function () {
        this["clickCounts"] = 0, this["traceData"] = [], this["exchangePos"] = [], this["drag"] = Object['assign']({}, w);
      },
      'initEvents': function () {
        var AK = AL,
          D = this;
        this["$bgImgWrap"] = z["find"]('.' + Q["BGIMG"], this["$el"]), this["$picViews"] = [];
        for (var B = z["findAll"]('.yidun_inference', this['$el']), I = function (C3) {
            C3['target']["className"]["indexOf"]("yidun_inference") !== -1 && D["onMouseDown"](C3);
          }, Z = this['onDragEnd']["bind"](this), H = this['onMouseMove']["bind"](this), C0 = 0, C1 = B['length']; C0 < C1; C0++) this["$picViews"]["push"]({
          'view': B[C0],
          'img': z["find"](".yidun_inference__img", B[C0])
        });
        var C2 = z["supportPointer"] ? "pointer" : "mouse";
        return z['on'](this["$bgImgWrap"], C2 + "down", I), z['on'](document, C2 + 'up', Z), z['on'](document, C2 + "move", H), function () {
          z["off"](D["$bgImgWrap"], C2 + "down", I), z["off"](document, C2 + 'up', Z), z["off"](document, C2 + "move", H);
        };
      },
      'initCustomStyles': function () {
        var D = this["$store"]["state"]["config"]["customStyles"]['imagePanel'];
        this['$picViews'][0]['view']["style"]["borderTopLeftRadius"] = D["borderRadius"], this["$picViews"][3]["view"]["style"]["borderTopRightRadius"] = D["borderRadius"], this['$picViews'][V]['view']["style"]["borderBottomLeftRadius"] = D["borderRadius"], this['$picViews'][7]['view']["style"]["borderBottomRightRadius"] = D["borderRadius"];
      },
      'reset': function () {
        var D = this["$store"]["state"],
          B = D['countsOfVerifyError'],
          I = D["config"],
          Z = B > I["maxVerification"];
        if (!Z) {
          var H = this["$picViews"];
          this["initData"](), z["delClass"](this["$bgImgWrap"], "yidun_bgimg--dragging");
          for (var C0 = 0, C1 = H["length"]; C0 < C1; C0++) {
            this["cleanInferenceCls"](C0);
            var C2 = H[C0]["img"];
            C2["style"]["top"] = '', C2["style"]["left"] = '';
          }
        }
      },
      'cleanInferenceCls': function (D) {
        this["$picViews"][D] && (this["$picViews"][D]["view"]["className"] = "yidun_inference yidun_inference--" + D);
      },
      'floatStatusChange': function () {
        this["$parent"]["shouldHandleFloatChange"](this["loadInfo"]) && this["changeTipElText"]();
      },
      'changeTipElText': function () {
        var D = z['find'](".yidun_tips__text", this["$el"]),
          B = this['$store']['state']["config"];
        'float' !== (this["mode"] || B["mode"]) || this['$parent']['panelVisible'] ? (z['text'](D, this["langPkg"]["inferenceTip"]), z["delClass"](this['$el'], "yidun--button")) : (z["text"](D, this["langPkg"]["clickButton"]), z["addClass"](this["$el"], "yidun--button"));
      },
      'changeLoadStatus': function (D) {
        var AN = AL,
          B = this,
          I = D["status"],
          Z = D["data"];
        if ("loading" === I && Z) {
          var H = z["find"](".yidun_bg-img", this['$el']),
            C0 = z['find'](".yidun_tips__text", this["$el"]),
            C1 = this['$store'],
            C2 = C1["commit"],
            C3 = C1["state"],
            C4 = C3["langPkg"],
            C5 = C3["config"],
            C6 = C3['captchaCollector'];
          J['image']({
            'url': Z['bg'],
            'timeout': C5['timeout'],
            'onProcess': S(C6, {
              'token': Z["token"]
            })
          })['then'](function (C7) {
            if (B["_isMounted"]) {
              H['src'] = C7['src'];
              for (var C8 = 0, C9 = B["$picViews"]["length"]; C8 < C9; C8++) B["$picViews"][C8]['img']['src'] = C7["src"];
              z["text"](C0, C4["inferenceTip"]), C2(X, {
                'status': "done",
                'data': Z
              });
            }
          })['catch'](function (C7) {
            if (B["_isMounted"]) {
              var C8 = Object["assign"]({}, C7["data"], {
                'token': Z["token"]
              });
              C2(X, {
                'status': "fail"
              }), C2(T, {
                'name': "onError",
                'args': [new O(N, C7["message"], C8)]
              });
            }
          });
        } else "done" === I && this["changeTipElText"]();
      },
      'onMouseDown': function (D) {
        if (D['preventDefault'](), this["handleDown"]() && "dragend" === this["drag"]['status']) {
          var B = D["clientX"],
            I = D["clientY"];
          Object["assign"](this["drag"], {
            'beginTime': A['now'](),
            'clientX': B,
            'clientY': I,
            'startX': B,
            'startY': I
          });
        }
        return !1;
      },
      'onDragEnd': function (D) {
        if ("dragend" === this["drag"]["status"]) return void Object["assign"](this["drag"], {
          'beginTime': 0
        });
        var B = this["drag"]['el'];
        Object['assign'](this["drag"], w);
        var I = this['exchangePos'][0],
          Z = this["$picViews"][I]["view"];
        B["style"]["display"] = 'none', this["cleanInferenceCls"](I);
        var H = Z["cloneNode"](!0);
        if (z["replace"](H, Z), this["$picViews"][I]['view'] = H, this['$picViews'][I]["img"] = z['find'](".yidun_inference__img", H), z["delClass"](this["$bgImgWrap"], 'yidun_bgimg--dragging'), this["exchangePos"][1] || 0 === this['exchangePos'][1]) {
          var C0 = this["$picViews"][this["exchangePos"][1]]["img"],
            C1 = this["getImgPos"](I),
            C2 = C1["top"],
            C3 = C1["left"];
          C0['style']['top'] = C2, C0["style"]["left"] = C3, this["onVerifyCaptcha"]({
            'data': JSON["stringify"]({
              'd': '',
              'm': j(A['sample'](this["traceData"], k)["join"](':')),
              'p': j(L(this["$store"]['state']["token"], this['exchangePos']["join"](','))),
              'ext': j(L(this["$store"]["state"]["token"], this["clickCounts"] + ',' + this["traceData"]["length"]))
            })
          });
        } else {
          var C4 = this["$picViews"][I]["img"];
          C4["style"]["top"] = '', C4["style"]['left'] = '';
        }
      },
      'onMouseMove': function (D) {
        var B = D['clientX'],
          I = D["clientY"],
          Z = this["drag"],
          H = Z['status'],
          C0 = Z["beginTime"],
          C1 = Z["startX"],
          C2 = Z["startY"],
          C3 = B - C1,
          C4 = I - C2;
        if ("dragend" === H && C0 && (this['drag']['status'] = "dragstart"), "dragend" !== this["drag"]["status"]) {
          Object["assign"](this["drag"], {
            'clientX': B,
            'clientY': I
          });
          var C5 = this['$store']["state"]["token"],
            C6 = L(C5, [Math['round'](C3), Math['round'](C4), A["now"]() - this['drag']["beginTime"]] + '');
          this["traceData"]["push"](C6), "dragstart" === this["drag"]['status'] && this["startDrag"](D), "dragging" === this["drag"]['status'] && this["dragging"](D);
        }
      },
      'handleDown': function () {
        this["clickCounts"]++;
        var D = this['$store']["state"],
          B = D['load'],
          I = D['verifyStatus'];
        return "done" === B["status"] && !I && "dragend" === this["drag"]['status'];
      },
      'startDrag': function (D) {
        var B = D['target'];
        z["addClass"](this["$bgImgWrap"], "yidun_bgimg--dragging");
        var I = B["parentNode"],
          Z = I["cloneNode"](!0);
        Z["draggable"] = !1, Z["removeAttribute"]("style");
        for (var H = z["findAll"](".yidun_inference--drag", this["$bgImgWrap"]), C0 = 0, C1 = H["length"]; C0 < C1; C0++) z['remove'](H[C0]);
        z["addClass"](Z, "yidun_inference--drag"), this["$bgImgWrap"]["appendChild"](Z), z["addClass"](I, "yidun_inference--origin"), Object["assign"](this["drag"], {
          'status': "dragging",
          'el': Z,
          'startLeft': Z["offsetLeft"],
          'startTop': Z["offsetTop"]
        });
        for (var C2 = 0, C3 = this['$picViews']['length']; C2 < C3; C2++) if (this['$picViews'][C2]["view"] === I) {
          this["exchangePos"][0] = C2;
          break;
        }
      },
      'dragging': function () {
        var D = this["drag"],
          B = D["clientX"],
          I = D["clientY"],
          Z = D["startX"],
          H = D["startY"],
          C0 = D['el'],
          C1 = this["computeOffset"](B - Z, I - H),
          C2 = C1['x'],
          C3 = C1['y'];
        C0["style"]["left"] = C2 + 'px', C0["style"]["top"] = C3 + 'px', this["readyExchange"](C2, C3);
      },
      'readyExchange': function (D, B) {
        var I = this["getDragCenterIndex"](D, B),
          Z = this["exchangePos"][0],
          H = this["$picViews"][Z]["view"];
        if (I !== this['exchangePos'][1]) {
          for (var C0 = 0, C1 = this["$picViews"]["length"]; C0 < C1; C0++) z['delClass'](this["$picViews"][C0]["view"], "yidun_inference--target");
          if (I === -1 || Z === I) return z['delClass'](H, "yidun_inference--swap"), void (this["exchangePos"][1] = void 0);
          this["exchangePos"][1] = I, z['addClass'](this["$picViews"][I]['view'], "yidun_inference--target"), z['addClass'](H, "yidun_inference--swap");
          var C2 = this["$picViews"][Z]["img"],
            C3 = this['getImgPos'](I),
            C4 = C3["top"],
            C5 = C3['left'];
          C2["style"]["top"] = C4, C2["style"]["left"] = C5;
        }
      },
      'computeOffset': function (D, B) {
        var I = this['drag'],
          Z = I["startLeft"],
          H = I["startTop"],
          C0 = I['el'],
          C1 = this["$bgImgWrap"]["offsetWidth"] - C0['offsetWidth'],
          C2 = this["$bgImgWrap"]["offsetHeight"] - C0['offsetHeight'],
          C3 = D + Z,
          C4 = B + H;
        return C3 < 0 ? C3 = 0 : C3 > C1 && (C3 = C1), C4 < 0 ? C4 = 0 : C4 > C2 && (C4 = C2), {
          'x': C3,
          'y': C4
        };
      },
      'getDragCenterIndex': function (D, B) {
        var I = z["getRect"](this["drag"]['el']),
          Z = I["width"],
          H = I["height"],
          C0 = D + Z / 2,
          C1 = B + H / 2,
          C2 = parseInt(C0 / Z, 10),
          C3 = parseInt(C1 / H, 10);
        return C0 % Z === 0 || C1 % H === 0 ? -1 : C2 + C3 * V;
      },
      'getImgPos': function (D) {
        var B = D - V;
        return {
          'top': (B < 0 ? 0 : -100) + '%',
          'left': (B < 0 ? D * -100 : B * -100) + '%'
        };
      }
    }
  });
}, function (W, U, R) {
  var Av = MF,
    P = function () {
      function I(Z, H) {
        var C0 = [],
          C1 = !0,
          C2 = !1,
          C3 = void 0;
        try {
          for (var C4, C5 = Z[Symbol["iterator"]](); !(C1 = (C4 = C5['next']())["done"]) && (C0['push'](C4["value"]), !H || C0['length'] !== H); C1 = !0);
        } catch (C6) {
          C2 = !0, C3 = C6;
        } finally {
          try {
            !C1 && C5["return"] && C5["return"]();
          } finally {
            if (C2) throw C3;
          }
        }
        return C0;
      }
      return function (Z, H) {
        if (Array["isArray"](Z)) return Z;
        if (Symbol["iterator"] in Object(Z)) return I(Z, H);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    z = R(8),
    A = R(4),
    G = R(3),
    j = R(56),
    L = R(5),
    E = L["CAPTCHA_CLASS"],
    Q = L["SAMPLE_NUM"],
    K = R(6),
    X = K["SWITCH_LOAD_STATUS"],
    T = K["INVOKE_HOOK"],
    O = R(10),
    N = O["aes"],
    J = O["xorEncode"],
    q = R(7),
    S = q["REQUEST_IMG_ERROR"],
    V = R(11),
    F = R(9),
    w = F["createNetCollect"],
    D = document,
    B = {
      'status': "dragend",
      'beginTime': 0,
      'clientX': 0,
      'startX': 0,
      'clientY': 0,
      'startY': 0,
      'startLeft': 0,
      'dragX': 0
    };
  W['exports'] = z["_extend"]({
    'abstract': !0,
    'props': ["loadInfo"],
    'mounted': function () {
      this["initData"](), this["firstEventType"] = '', this["_removeEvents"] = this['initEvents'](), this['initPosition']();
    },
    'beforeDestroy': function () {
      this['_removeEvents'](), this["sliderTransition"] = null, this["$slider"]['style']["transition"] = '', this['$el'] = null, this["$slideIndicator"] = null, this["$slider"] = null, this["$jigsaw"] = null, this["startLeft"] = 0, this["drag"] = null, this['initialDrag'] = null;
    },
    'render': function (I) {
      var Z = I["loadInfo"];
      Z && this['changeLoadStatus'](Z);
    },
    'methods': {
      'initData': function () {
        var I = this['$store']['state']["config"];
        this['startLeft'] = parseInt(I["startLeft"], 10), this['initialDrag'] = Object['assign'](B, {
          'startLeft': this['startLeft']
        }), this['drag'] = Object["assign"]({}, this["initialDrag"]), this["traceData"] = [], this["atomTraceData"] = [], this["mouseDownCounts"] = 0, this["attrs"] = void 0, this["ratio"] = 1;
      },
      'changeSlideIcon': function (I) {
        !this["$store"]['state']["config"]["customStyles"]["icon"]["slider"] && this['$slideIcon'] && (I ? (this["$slideIcon"]["src"] = I, this["$slideIcon"]['style']["display"] = "block") : this['$slideIcon']["style"]["display"] = "none");
      },
      'initEvents': function () {
        var Ao = Av,
          I = this;
        this["$slideIndicator"] = A['find']('.' + E['SLIDE_INDICATOR'], this["$el"]), this["$jigsaw"] = A["find"]('.' + E["JIGSAW"], this["$el"]), this['$control'] = A["find"]('.' + E['CONTROL'], this['$el']), this['$slider'] = A["find"]('.' + E["SLIDER"], this["$el"]), this["$slideIcon"] = A['find'](".yidun_slider__icon--img", this["$el"]);
        var Z = this["$parent"]["$data"]['customStyles']["controlBar"],
          H = void 0 === Z ? {} : Z;
        this["controlBar"] = H;
        var C0 = function (CM) {
            return function (Ca) {
              var CW = Ca["type"] || '';
              I["firstEventType"] || (I["firstEventType"] = CW), CW['indexOf']("pointer") === -1 && I["firstEventType"]["indexOf"]("pointer") > -1 || I["firstEventType"]['indexOf']("pointer") === -1 && CW['indexOf']("pointer") > -1 || CM(Ca);
            };
          },
          C1 = C0(this["onMouseDown"]["bind"](this)),
          C2 = C0(this["onMouseDown"]["bind"](this)),
          C3 = C0(this["onMouseMove"]["bind"](this)),
          C4 = this["onMouseUp"]["bind"](this),
          C5 = A["supportPointer"] ? "pointer" : "mouse";
        if (A['on'](this['$slider'], C5 + "down", C1), A['on'](this['$jigsaw'], C5 + "down", C2), A['on'](D, C5 + "move", C3), A['on'](D, C5 + 'up', C4), 'pointer' === C5) {
          var C6 = C0(this["onMouseDown"]["bind"](this)),
            C7 = C0(this["onMouseDown"]["bind"](this)),
            C8 = C0(this["onMouseMove"]["bind"](this)),
            C9 = this['onMouseUp']["bind"](this),
            CC = 'mouse';
          A['on'](this['$slider'], "mousedown", C6), A['on'](this['$jigsaw'], "mousedown", C7), A['on'](D, "mousemove", C8), A['on'](D, "mouseup", C9), this['_removeMouseEvent'] = function () {
            A["off"](I["$slider"], "mousedown", C6), A['off'](I["$jigsaw"], "mousedown", C7), A["off"](D, "mousemove", C8), A["off"](D, "mouseup", C9);
          };
        }
        return this["sliderTransition"] = A["transition"](this["$slider"], {
          'beforeLeave': function (CM) {
            CM["style"]["transition"] = "left .3s ease-out";
          },
          'afterLeave': function (CM) {
            CM['style']["transition"] = '';
          }
        }), A["supportPointer"] && (document['documentElement']['style']["touchAction"] = 'none'), function () {
          A["off"](I["$slider"], C5 + "down", C1), A["off"](I["$jigsaw"], C5 + "down", C2), A["off"](D, C5 + "move", C3), A["off"](D, C5 + 'up', C4), "pointer" === C5 && I["_removeMouseEvent"](), I['sliderTransition']["dispose"](), A["supportPointer"] && (document['documentElement']['style']["touchAction"] = "auto");
        };
      },
      'initPosition': function () {
        var I = this["$slider"]["offsetWidth"];
        this["$slider"]["style"]["left"] = this["startLeft"] + 'px', this["$jigsaw"]['style']['left'] = this["startLeft"] + 'px', this['$jigsaw']["style"]["transform"] = '', this['$jigsaw']["style"]['transformOrigin'] = '', this["$slideIndicator"]['style']["width"] = this["startLeft"] + I + 'px';
      },
      'updateJigsawRotateAndLeft': function () {
        var I = this["$el"]["offsetWidth"],
          Z = this["$slider"]["offsetWidth"],
          H = this["$jigsaw"]['offsetWidth'],
          C0 = this['restrict'](this['$jigsaw'], Z - H);
        if (this["ratio"] = (I / 2 - H) / I, this["attrs"]) {
          var C1 = this["attrs"][0],
            C2 = C0 * this['ratio'];
          this["$jigsaw"]["style"]['left'] = C2 + 'px', this['$jigsaw']["style"]["transform"] = "rotate(" + C1 * C2 + 'deg)', this['$jigsaw']["style"]["transformOrigin"] = C1 > 0 ? "bottom right" : 'top\x20right';
        }
      },
      'initJigsawPos': function (I) {
        I && (this["attrs"] = I['attrs'], this["updateJigsawRotateAndLeft"]());
      },
      'floatStatusChange': function () {
        this["updateJigsawRotateAndLeft"]();
      },
      'reset': function () {
        var I = this["$store"]["state"],
          Z = I['countsOfVerifyError'],
          H = I["config"],
          C0 = Z > H['maxVerification'];
        C0 || (this['initData'](), A["delClass"](this['$control'], "yidun_control--moving"), parseInt(this["$slider"]["style"]["left"]) && this["sliderTransition"]['leave'](), this["initPosition"]());
      },
      'changeLoadStatus': function (I) {
        var G4 = Av,
          Z = this,
          H = I["data"];
        if (this["changeSlideIcon"](this["controlBar"]["slideIcon"]), "loading" === I["status"] && H) {
          var C0 = this["$store"]['state'],
            C1 = C0["langPkg"],
            C2 = C0["config"],
            C3 = C0["captchaCollector"],
            C4 = A["find"](".yidun_tips__text", this["$el"]),
            C5 = A['find'](".yidun_bg-img", this["$el"]),
            C6 = A["find"]('.' + E['JIGSAW'], this["$el"]),
            C7 = this['$store']["commit"],
            C8 = w(C3, {
              'token': H["token"]
            });
          V["all"]([V["image"]({
            'url': H['bg'],
            'timeout': C2["timeout"],
            'onProcess': C8
          }), V["image"]({
            'url': H["front"],
            'timeout': C2["timeout"],
            'onProcess': C8
          })])["then"](function (C9) {
            var G5 = G4;
            if (Z["_isMounted"]) {
              var CC = P(C9, 2),
                CM = CC[0],
                Ca = CC[1];
              C5['src'] = CM["src"], C6["src"] = Ca["src"], C6["onload"] = function () {
                Z["initJigsawPos"](H);
              }, A['text'](C4, C1["slideTip"]), C7(X, {
                'status': "done",
                'data': H
              });
            }
          })["catch"](function (C9) {
            if (Z["_isMounted"]) {
              var CC = Object["assign"]({}, C9["data"], {
                'token': H["token"]
              });
              C7(X, {
                'status': "fail"
              }), C7(T, {
                'name': "onError",
                'args': [new q(S, C9["message"], CC)]
              });
            }
          });
        }
      },
      'onMouseDown': function (I) {
        I["event"]["cancelable"] !== !1 && I["preventDefault"](), this["mouseDownCounts"]++, this["width"] = this['$el']["offsetWidth"];
        var Z = this["$store"]["state"],
          H = Z["load"],
          C0 = Z["verifyStatus"];
        if ("done" === H["status"] && !C0) {
          var C1 = I["clientX"],
            C2 = I["clientY"],
            C3 = this["drag"];
          'dragend' === C3["status"] && Object["assign"](C3, {
            'beginTime': G['now'](),
            'clientX': C1,
            'startX': C1,
            'clientY': C2,
            'startY': C2,
            'dragX': 0
          });
        }
      },
      'onMouseMove': function (I) {
        var Z = I['clientX'],
          H = I["clientY"],
          C0 = this["drag"],
          C1 = C0["status"],
          C2 = C0["beginTime"],
          C3 = C0['startX'];
        if (C0["status"] = C2 && Z - C3 > 3 && "dragend" === C1 ? "dragstart" : C1, "dragend" !== C0["status"]) {
          !(I["type"]["indexOf"]("touch") !== -1 && A["supportPassive"] || I["event"]['cancelable'] !== !1) && I["preventDefault"](), Object["assign"](C0, {
            'clientX': Z,
            'clientY': H,
            'dragX': Z - C0["startX"]
          });
          var C4 = this["$store"]["state"]["token"],
            C5 = [Math["round"](C0['dragX'] < 0 ? 0 : C0["dragX"]), Math["round"](C0["clientY"] - C0["startY"]), G["now"]() - C0['beginTime']];
          this["atomTraceData"]["push"](C5);
          var C6 = J(C4, C5 + '');
          this["traceData"]['push'](C6), 'dragstart' === C0["status"] && this['onMouseMoveStart'](I), "dragging" === C0["status"] && this["onMouseMoving"](I);
        }
      },
      'onMouseMoveStart': function (I) {
        var Z = A["getComputedStyle"](this["$slider"], "left"),
          H = A["find"](".yidun_tips__text", this['$el']);
        A["text"](H, ''), Object['assign'](this["drag"], {
          'status': "dragging",
          'startLeft': parseInt(Z['slice'](0, -2), 10)
        });
      },
      'onMouseMoving': function () {
        var I = this["restrict"](this["$slider"]);
        this["$slider"]["style"]["left"] = I + 'px';
        var Z = this["$slider"]["offsetWidth"],
          H = this["$jigsaw"]["offsetWidth"],
          C0 = this["restrict"](this['$jigsaw'], Z - H);
        this["attrs"] ? this["updateJigsawRotateAndLeft"]() : this['$jigsaw']["style"]["left"] = C0 + 'px', A['addClass'](this["$control"], "yidun_control--moving"), this["$slideIndicator"]['style']["width"] = I + Z + 'px', this["changeSlideIcon"](this["controlBar"]["slideIconMoving"]);
      },
      'onMouseUp': function (I) {
        var Z = this["drag"];
        if ('dragend' === Z['status']) return void Object["assign"](Z, {
          'beginTime': 0
        });
        Object["assign"](Z, this["initialDrag"]);
        var H = G['sample'](this['traceData'], Q),
          C0 = this["$store"]["state"]['token'],
          C1 = N(J(C0, parseInt(this["$jigsaw"]["style"]["left"], 10) / this["width"] * 100 + '')),
          C2 = j(G["unique2DArray"](this["atomTraceData"], 2));
        this["onVerifyCaptcha"]({
          'data': JSON['stringify']({
            'd': N(H['join'](':')),
            'm': '',
            'p': C1,
            'f': N(J(C0, C2["join"](','))),
            'ext': N(J(C0, this["mouseDownCounts"] + ',' + this["traceData"]["length"]))
          })
        });
      },
      'restrict': function (I, Z) {
        if (I) {
          var H,
            C0,
            C1 = this["drag"],
            C2 = C1["startLeft"],
            C3 = C1['dragX'],
            C4 = this['width'],
            C5 = I["offsetWidth"],
            C6 = this["$slider"]["offsetWidth"],
            C7 = C4 - C5,
            C8 = C2 + C3,
            C9 = Z < 0 ? -Z : Z / 2;
          return I === this["$jigsaw"] && (C3 <= C9 ? (H = C3, C0 = Z < 0 ? -H / 2 : H, C8 += C0) : C4 - C3 - C6 <= C9 ? (H = C3 - (C4 - C6 - C9), C0 = Z < 0 ? -H / 2 : H, C8 += Z / 2 + C0) : C8 += Z / 2), C8 <= this["startLeft"] && (C8 = this['startLeft']), C8 >= C7 && (C8 = C7), C8;
        }
      }
    }
  });
}, function (W, U, R) {
  var GR = MF;
  function P(D, B, I) {
    return B in D ? Object["defineProperty"](D, B, {
      'value': I,
      'enumerable': !0,
      'configurable': !0,
      'writable': !0
    }) : D[B] = I, D;
  }
  var z,
    A = R(8),
    G = R(4),
    j = R(3),
    L = R(10),
    E = L["aes"],
    Q = L["xorEncode"],
    k = R(5),
    K = k["CAPTCHA_TYPE"],
    X = k['CAPTCHA_CLASS'],
    T = k["SAMPLE_NUM"],
    O = R(6),
    N = O["SWITCH_LOAD_STATUS"],
    J = O["INVOKE_HOOK"],
    q = R(7),
    S = q["REQUEST_IMG_ERROR"],
    V = R(11),
    F = R(9),
    w = F["createNetCollect"];
  W["exports"] = A["_extend"]({
    'abstract': !0,
    'props': ['loadInfo', "mode", "type", "isRtlLang"],
    'data': function () {
      var D = this["$store"]["state"]["langPkg"];
      return {
        'langPkg': D
      };
    },
    'on': (z = {}, P(z, '.' + X["BGIMG"] + '\x20click', function (D) {
      this["onClick"](D);
    }), P(z, '.' + X['BGIMG'] + " mousemove", function (D) {
      this["trackMoving"](D);
    }), z),
    'mounted': function () {
      this['initData'](), this["$bgImg"] = G['find']('.' + X['BGIMG'], this["$el"]);
    },
    'beforeDestroy': function () {
      this["$bgImg"] = null;
    },
    'render': function (D) {
      var B = D["loadInfo"];
      if (B && "done" === B["status"]) {
        var I = B['data'] && B["data"]["front"];
        Array["isArray"](I) && (I = I[0], B["data"]['front'] = I);
      }
      B && this["changeLoadStatus"](B);
    },
    'methods': {
      'initData': function () {
        this['pointsStack'] = [], this["MAX_POINTS"] = 0, this["traceData"] = [], this['beginTime'] = 0, this["clickCounts"] = 0;
      },
      'reset': function () {
        var D = this["$store"]['state'],
          B = D["countsOfVerifyError"],
          I = D['config'],
          Z = B > I["maxVerification"];
        Z || (this["cleanPoints"](), this["initData"]());
      },
      'floatStatusChange': function () {
        if (this['$parent']["shouldHandleFloatChange"](this["loadInfo"])) {
          var D = this['loadInfo']["data"]["front"] || '';
          this["changeTipElText"]({
            'message': D
          });
        }
      },
      'changeTipElText': function (D) {
        var B = D["message"],
          I = void 0 === B ? '' : B,
          Z = this["$store"]["state"]["config"],
          H = this["langPkg"],
          C0 = this["$parent"]['panelVisible'],
          C1 = "float" === (this["mode"] || Z["mode"]),
          C2 = G['find']('.yidun_tips__text', this["$el"]),
          C3 = G["find"](".yidun_tips__answer", this["$el"]),
          C4 = G["find"](".yidun_tips__point", this['$el']);
        C1 && !C0 ? (G["text"](C2, H['clickButton']), G["addClass"](this["$el"], 'yidun--button'), G["addClass"](C3, 'hide')) : (this["type"] === K['ICON_POINT'] ? G["text"](C2, H["clickInTurn"]) : this["type"] === K["WORD_GROUP"] ? G["text"](C2, H["clickOverlapWord"]) : this["type"] === K['WORD_ORDER'] ? G["text"](C2, H["clickWordInTurn"]) : this["type"] === K['SPACE'] ? G["text"](C2, I) : (this["isRtlLang"] && (I = j['reverse'](I)), G["text"](C4, I['replace'](/./g, " \"$&\"")), G["text"](C2, H["clickInTurn"])), G["delClass"](C3, 'hide'), G['delClass'](this['$el'], "yidun--button"));
      },
      'changeLoadStatus': function (D) {
        var Gh = GR,
          B = this,
          I = D['status'],
          Z = D["data"];
        switch (I) {
          case "loading":
            if (Z) {
              var H = G["find"](".yidun_bg-img", this['$el']),
                C0 = G["find"](".yidun_tips__img", this["$el"]),
                C1 = this["$store"],
                C2 = C1["commit"],
                C3 = C1["state"],
                C4 = V["image"]({
                  'url': Z['bg'],
                  'timeout': C3["config"]["timeout"],
                  'onProcess': w(C3["captchaCollector"], {
                    'token': Z["token"]
                  })
                });
              C4["then"](function (C7) {
                B["_isMounted"] && (H["src"] = C7['src'], B["type"] === K["ICON_POINT"] && (C0["src"] = C7["src"]), C2(N, {
                  'status': 'done',
                  'data': Z
                }));
              })["catch"](function (C7) {
                if (B["_isMounted"]) {
                  var C8 = Object["assign"]({}, C7["data"], {
                    'token': Z["token"]
                  });
                  C2(N, {
                    'status': "fail"
                  }), C2(J, {
                    'name': "onError",
                    'args': [new q(S, C7["message"], C8)]
                  });
                }
              });
            }
            break;
          case "done":
            var C5 = Z["front"] || '',
              C6 = 0;
            C6 = this["type"] === K["ICON_POINT"] ? 3 : this["type"] === K['WORD_GROUP'] || this['type'] === K['WORD_ORDER'] ? parseInt(C5, 10) : this["type"] === K["SPACE"] ? 1 : C5["length"], this["MAX_POINTS"] = C6, this["changeTipElText"]({
              'message': C5
            });
        }
      },
      'onClick': function (D) {
        var GX = GR,
          B = this,
          I = this["$store"]["state"],
          Z = I["countsOfVerifyError"],
          H = I["config"],
          C0 = Z > H["maxVerification"];
        if (!C0) {
          this["clickCounts"]++;
          var C1 = this["$bgImg"]["getBoundingClientRect"](),
            C2 = C1["left"],
            C3 = C1["top"];
          this['pointsStack']["length"] || (this['beginTime'] = j["now"]());
          var C4 = this["pointsStack"]["slice"](-1)[0];
          return C4 && D["target"] === C4['el'] && !this["$store"]["state"]["verifyStatus"] ? void j["raf"](function () {
            return B["$bgImg"]["removeChild"](B['pointsStack']["pop"]()['el']);
          }) : void this["addPoint"]({
            'left': D["clientX"] - C2,
            'top': D["clientY"] - C3
          });
        }
      },
      'trackMoving': function (D) {
        if (this["beginTime"]) {
          var B = this['$bgImg']["getBoundingClientRect"](),
            I = B["left"],
            Z = B['top'],
            H = Q(this['$store']["state"]["token"], [Math["round"](D["clientX"] - I), Math["round"](D["clientY"] - Z), j["now"]() - this["beginTime"]] + '');
          this["traceData"]["push"](H);
        }
      },
      'addPoint': function (D) {
        var B = D['left'],
          I = D["top"],
          Z = this["pointsStack"]["length"] + 1;
        if (!(Z > this["MAX_POINTS"])) {
          var H = document["createElement"]("div");
          H["className"] = "yidun_icon-point yidun_point-" + Z, G["css"](H, "left: " + (B - 10) + "px; top: " + (I - 25) + "px;"), this["$bgImg"]["appendChild"](H), this["pointsStack"]["push"]({
            'el': H,
            'coord': Q(this["$store"]["state"]["token"], [Math["round"](B), Math["round"](I), j["now"]() - this["beginTime"]] + '')
          }), this["shouldVerifyCaptcha"]();
        }
      },
      'shouldVerifyCaptcha': function () {
        var Gp = GR,
          D = this["pointsStack"];
        if (D['length'] === this["MAX_POINTS"]) {
          var B = D['map'](function (Z) {
              return Z["coord"];
            }),
            I = this["traceData"];
          this["onVerifyCaptcha"]({
            'data': JSON["stringify"]({
              'd': '',
              'm': E(j["sample"](I, T)["join"](':')),
              'p': E(B['join'](':')),
              'ext': E(Q(this["$store"]["state"]["token"], this["clickCounts"] + ',' + I['length']))
            })
          });
        }
      },
      'cleanPoints': function () {
        for (var D; D = this["pointsStack"]['pop']();) this["$bgImg"]["removeChild"](D['el']);
      }
    }
  });
}, function (W, U, R) {
  var Gt = MF,
    P = R(8),
    z = R(4),
    A = R(61),
    G = R(3),
    j = R(6),
    L = j["SWITCH_LOAD_STATUS"],
    E = j["UPDATE_VERIFY_STATUS"],
    Q = j["INVOKE_HOOK"],
    k = R(7),
    K = k["REQUEST_IMG_ERROR"],
    X = R(11),
    T = R(9),
    m = T["createNetCollect"];
  W["exports"] = P['_extend']({
    'abstract': !0,
    'props': ["loadInfo"],
    'data': function () {
      var O = this["$store"]["state"],
        N = O["langPkg"],
        J = O['config']["lang"],
        q = O['smsNew'],
        S = O["smsNewVersion"],
        V = O["version"];
      return {
        'langPkg': N,
        'lang': J,
        'smsNew': q,
        'qr': null,
        'smsNewVersion': S,
        'version': V
      };
    },
    'mounted': function () {
      var Gq = Gt,
        O = this;
      this["TIMEOUT_SECONDS"] = 300, this['_unsubscribe'] = this['$store']['subscribe'](function (N, J) {
        var q = N['type'],
          S = J["verifyStatus"];
        switch (q) {
          case E:
            switch (S) {
              case "success":
              case "error":
                O["clearTimers"]();
            }
        }
      }), this["smsNew"] && (this['_removeEvents'] = this["initEvents"]());
    },
    'beforeDestroy': function () {
      this["_unsubscribe"](), this["clearTimers"](), this["smsNew"] && this["_removeEvents"] && this["_removeEvents"]();
    },
    'render': function (O) {
      var N = O['loadInfo'];
      N && this["changeLoadStatus"](N);
    },
    'methods': {
      'initEvents': function () {
        var Gn = Gt,
          O = z["find"]('.yidun_smsbox', this["$el"]),
          N = z["find"](".yidun_smsbox-text--manual", this['$el']),
          J = z["find"](".yidun_smsbox-mobile--manual-btn", this["$el"]),
          q = z['find'](".yidun_smsbox-manual--qr", this["$el"]),
          S = z["find"](".yidun_smsbox-manual--btn", this["$el"]),
          V = function () {
            z["addClass"](O, 'yidun_smsbox--manual');
          };
        N && z['on'](N, "click", V, !0), J && z['on'](J, "click", V, !0);
        var x = function () {
          z["delClass"](O, 'yidun_smsbox--manual');
        };
        return q && z['on'](q, "click", x, !0), S && z['on'](S, "click", x, !0), function () {
          N && z["off"](N, "click", V, !0), q && z["off"](q, "click", x, !0), S && z['off'](S, "click", x, !0);
        };
      },
      'changeLoadStatus': function (O) {
        var GF = Gt,
          N = this,
          J = O["status"],
          q = O["data"];
        switch (J) {
          case "loading":
            if (q) {
              var S = z['find']('.yidun_bg-img', this["$el"]),
                V = z["find"](".yidun_smsbox-qrcode--img", this["$el"]),
                F = z['find'](".yidun_smsbox-manual--edit-content", this["$el"]),
                w = z["find"](".yidun_smsbox-manual--send-content__short", this["$el"]),
                D = z['find'](".yidun_smsbox-manual--send-content__backup", this["$el"]),
                B = z["find"](".yidun_smsbox--mobile-btn-inner", this["$el"]),
                I = this["$store"],
                Z = I['commit'],
                H = I['state'],
                C0 = X['image']({
                  'url': q['bg'],
                  'timeout': H['config']["timeout"],
                  'onProcess': m(H["captchaCollector"], {
                    'token': q["token"]
                  })
                });
              C0["then"](function (C3) {
                if (N["smsNew"] && V && F && w && D && B) {
                  var C4 = q["front"] && "string" == typeof q["front"] ? q["front"]['split'](',') : [];
                  if (3 === C4["length"]) {
                    z["text"](F, C4[0]), z["text"](w, C4[1]), z["text"](D, N["langPkg"]['sms']['or'] + C4[2]);
                    var C5 = !1,
                      C6 = "https",
                      C7 = N["$store"]["state"]["config"]["staticServer"],
                      C8 = G["encodeUrlParams"]({
                        'code': C4[0],
                        'phone': C4[1],
                        'phoneBackup': C4[2],
                        'lang': N["lang"],
                        'version': H['smsVersion']
                      }),
                      C9 = "sms" + (C5 ? '' : '.v' + N['version']) + ".html",
                      CC = "https://" + (Array["isArray"](C7) ? C7[0] : C7) + "/api/v2" + '/' + C9 + '?' + C8;
                    N['qr'] && N['qr']["clear"] && (N['qr']["clear"](), N['qr'] = null), z["html"](V, ''), N['qr'] = new A(V, {
                      'text': CC,
                      'width': 96,
                      'height': 96,
                      'useCanvas': !0,
                      'correctLevel': A["CorrectLevel"]['M']
                    });
                    var CM = '10690163',
                      Ca = "106981630163",
                      CW = C4[1]["indexOf"](CM) || C4[1]["indexOf"](Ca) || C4[2]["indexOf"](CM) || C4[2]["indexOf"](Ca);
                    if (CW) {
                      var CU = '',
                        CR = window["navigator"]['userAgent'],
                        CP = C4[1];
                      CU = /(iPhone|iPad|iPod|iOS)/i['test'](CR) ? "sms:" + CP + '&body=' + C4[0] : "sms:" + CP + "?body=" + C4[0], B["setAttribute"]("href", N["smsNewVersion"] > 1 ? CU : CC);
                    }
                  }
                } else S["src"] = C3["src"];
                Z(L, {
                  'status': "done",
                  'data': q
                });
              })["catch"](function (C3) {
                var C4 = Object['assign']({}, C3["data"], {
                  'token': q["token"]
                });
                Z(L, {
                  'status': "fail"
                }), Z(Q, {
                  'name': 'onError',
                  'args': [new k(K, C3["message"], C4)]
                });
              });
            }
            break;
          case "done":
            var C1 = z['find'](".yidun_tips__text", this['$el']),
              C2 = this["langPkg"];
            C1["innerHTML"] = C2["waitForSMS"] + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22yidun_sms-counter\x22></span>', this['countDown'](), this["pollingToVerify"]();
        }
      },
      'pollingToVerify': function () {
        var Gv = Gt,
          O = this,
          N = this["TIMEOUT_SECONDS"],
          J = 5,
          q = 0,
          S = function V() {
            return J * q >= N ? void O["$store"]["commit"](E, {
              'verifyStatus': "error",
              'error': new Error("SMS is outdated")
            }) : (q++, O["onVerifyCaptcha"]({
              'data': ''
            }), void (O["pollingTimer"] = setTimeout(V, 5000)));
          };
        S();
      },
      'countDown': function () {
        var GY = Gt,
          O = this,
          N = this["TIMEOUT_SECONDS"],
          J = z['find'](".yidun_sms-counter", this["$el"]),
          q = function S() {
            z["text"](J, N-- + 's'), 0 !== N && (O["countTimer"] = setTimeout(S, 1000));
          };
        q();
      },
      'clearTimers': function () {
        this['countTimer'] && (clearTimeout(this['countTimer']), this["countTimer"] = null), this['pollingTimer'] && (clearTimeout(this["pollingTimer"]), this["pollingTimer"] = null);
      },
      'reset': function () {
        this["clearTimers"]();
      }
    }
  });
}, function (W, U, R) {
  var GI = MF;
  function P(I, Z, H) {
    return Z in I ? Object["defineProperty"](I, Z, {
      'value': H,
      'enumerable': !0,
      'configurable': !0,
      'writable': !0
    }) : I[Z] = H, I;
  }
  var z,
    A = R(8),
    G = R(4),
    j = R(3),
    L = R(10),
    E = L['aes'],
    Q = L['xorEncode'],
    K = R(5),
    X = K["CAPTCHA_CLASS"],
    T = K["SAMPLE_NUM"],
    O = K["LARGE_SIZE_TYPE"],
    N = R(6),
    J = N['SWITCH_LOAD_STATUS'],
    q = N["INVOKE_HOOK"],
    S = N["EVENT_CLOSE"],
    V = R(7),
    F = V['REQUEST_AUDIO_ERROR'],
    w = R(11),
    D = R(9),
    B = D['createNetCollect'];
  W["exports"] = A["_extend"]({
    'abstract': !0,
    'props': ["loadInfo", "mode", "size", 'type', "fixedAudio"],
    'data': function () {
      var I = this["$store"]['state']["langPkg"];
      return {
        'langPkg': I,
        'playStatus': "start",
        'yidunFontSize': null
      };
    },
    'on': (z = {}, P(z, '.' + X['CONTROL'] + '\x20keydown', function (I) {
      function Z(H) {
        return I['apply'](this, arguments);
      }
      return Z["toString"] = function () {
        return I['toString']();
      }, Z;
    }(function (I) {
      if (I) {
        var Z = I['nativeEvent']["event"];
        if (Z) {
          var H = !1;
          void 0 !== Z['key'] ? H = "Spacebar" === Z["key"] || '\x20' === Z["key"] || 'Enter' === Z["key"] : void 0 !== Z['keyCode'] && (H = 13 === Z["keyCode"] || 32 === Z["keyCode"]), H && (I["preventDefault"](), this["handleVerifyBtn"](I));
        }
      }
    })), P(z, '.yidun_voice__input\x20keydown', function (I) {
      if (I) {
        var Z = I["nativeEvent"]["event"];
        if (Z) {
          var H = !1;
          void 0 !== Z['key'] ? H = "Spacebar" === Z['key'] || '\x20' === Z['key'] || "Enter" === Z['key'] : void 0 !== Z["keyCode"] && (H = 13 === Z["keyCode"] || 32 === Z["keyCode"]), H && (I["preventDefault"](), this["handleVerifyBtn"]());
        }
      }
    }), P(z, '.' + X["BGIMG"] + " mousemove", function (I) {
      this["trackMoving"](I);
    }), z),
    'mounted': function () {
      var j0 = GI,
        I = this;
      if (this["initData"](), this["_removeEvents"] = this["initEvents"](), this["fixedAudio"]) {
        var Z = G['find'](".yidun_voice__back", this["$el"]);
        Z['style']['display'] = 'inline-block';
      }
      this["_unsubscribe"] = this["$store"]["subscribe"](function (H, C0) {
        var C1 = H["type"];
        C1 === S && I['resetAudio']();
      }), this["adjustUI"]();
    },
    'beforeDestroy': function () {
      this['_removeEvents'](), this["_unsubscribe"](), this["$bgImg"] = null, this["$input"] = null;
    },
    'render': function (I) {
      var Z = I["loadInfo"],
        H = I['playStatus'];
      Z && this["changeLoadStatus"](Z), H && this['changeAudioStatus'](H);
    },
    'methods': {
      'initData': function () {
        this["traceData"] = [], this['beginTime'] = 0, this["clickCounts"] = 0;
      },
      'adjustUI': function () {
        function I(C1, C2) {
          if (!C2 || "function" != typeof window['getComputedStyle']) return C1;
          var C3 = C1;
          try {
            C3 = parseInt(window["getComputedStyle"](C2, null)["getPropertyValue"]("font-size"), 10);
          } catch (C5) {
            return C3;
          }
          var C4 = C1 / C3;
          return Math["floor"](C1 * C4);
        }
        var Z = G["find"](".yidun_voice", this["$el"]);
        this['$el']["offsetWidth"] <= 280 && G["addClass"](Z, 'yidun_voice-280'), this["$el"]["offsetWidth"] < 240 && G["addClass"](Z, "yidun_voice-240");
        var H = G['find']('.yidun');
        if (H) {
          var C0 = H["style"]["fontSize"];
          '' !== C0 && this["$setData"]({
            'yidunFontSize': C0
          }), H["style"]["fontSize"] = I(O[this["size"]], H) + 'px';
        }
      },
      'resetYidunFontSize': function () {
        var I = G['find'](".yidun");
        I && (null !== this["yidunFontSize"] ? I["style"]['fontSize'] = this["yidunFontSize"] : I["style"]["fontSize"] = '');
      },
      'initEvents': function () {
        var j8 = GI,
          I = this,
          Z = this["onClick"]["bind"](this);
        this['$bgImg'] = G["find"]('.' + X["BGIMG"], this["$el"]), this["$input"] = G['find'](".yidun_voice__input", this["$el"]);
        var H = G["find"](".yidun_audio__play", this["$el"]),
          C0 = G["find"](".yidun_audio__source", this["$el"]),
          C1 = G["find"]('.' + X["CONTROL"], this["$el"]),
          C2 = G["find"](".yidun_voice__refresh", this["$el"]),
          C3 = G['find'](".yidun_audio__refresh", this["$el"]),
          C4 = G["find"]('.yidun_voice__back', this['$el']),
          C5 = this['onPlayerClick']["bind"](this),
          C6 = this['onAudioEnded']["bind"](this),
          C7 = this["handleVerifyBtn"]['bind'](this),
          C8 = function (Ca) {
            var j9 = j8,
              CW = !(arguments["length"] > 1 && void 0 !== arguments[1]) || arguments[1];
            return function (CU) {
              I["resetYidunFontSize"](), CW && I["adjustUI"]();
              var CR = I["$store"]["state"]["verifyStatus"];
              CR || (Ca || I['resetAudio'](), I["$parent"]["switchTypeAndRefresh"](CU, Ca));
            };
          },
          C9 = C8(),
          CC = C8(),
          CM = C8(!1, !1);
        return G['on'](this["$input"], "focus", Z), G['on'](H, "click", C5, !0), G['on'](C0, "ended", C6), G['on'](C1, "click", C7, !0), G['on'](C2, 'click', C9, !0), C3 && G['on'](C3, 'click', CC, !0), C4 && G['on'](C4, "click", CM, !0), function () {
          G['off'](I["$input"], "focus", Z), G["off"](H, "click", C5, !0), G['off'](C0, "ended", C6), G["off"](C1, "click", C7, !0), G["off"](C2, "click", C9, !0), C3 && G['off'](C3, 'click', CC, !0), C4 && G['off'](C4, "click", CM, !0);
        };
      },
      'reset': function () {
        var I = this['$store']["state"],
          Z = I['countsOfVerifyError'],
          H = I["config"],
          C0 = Z > H["maxVerification"];
        if (!C0) {
          this["initData"](), this["$input"]["value"] = '';
          var C1 = G['find']('.' + X["CONTROL"], this["$el"]);
          C1["setAttribute"]("role", '');
        }
      },
      'changeLoadStatus': function (I) {
        var jW = GI,
          Z = this,
          H = I['status'],
          C0 = I["data"];
        if ("loading" === H && C0) {
          var C1 = G['find'](".yidun_audio__source", this["$el"]),
            C2 = G['find'](".yidun_tips__text", this["$el"]),
            C3 = G["find"]('.' + X["CONTROL"], this["$el"]),
            C4 = this["$store"],
            C5 = C4["commit"],
            C6 = C4['state'],
            C7 = w['audio']({
              'url': C0['bg'],
              'timeout': C6["config"]["timeout"],
              'onProcess': B(C6['captchaCollector'], {
                'token': C0["token"]
              })
            });
          C7["then"](function (C9) {
            Z["_isMounted"] && (C1["src"] = C9["src"], G["text"](C2, C6["langPkg"]["check"]), C3['setAttribute']("role", "button"), C5(J, {
              'status': "done",
              'data': C9
            }), Z["$setData"]({
              'playStatus': "start"
            }), Z["addAudioWave"]());
          })["catch"](function (C9) {
            if (Z['_isMounted']) {
              var CC = Object["assign"]({}, C9["data"], {
                'token': C0['token']
              });
              C5(J, {
                'status': "fail"
              }), C5(q, {
                'name': 'onError',
                'args': [new V(F, C9["message"], CC)]
              });
            }
          });
        } else {
          if ("done" === H) {
            var C8 = G["find"](".yidun_audio__play", this["$el"]);
            setTimeout(function () {
              return C8['focus']();
            }, 150);
          }
        }
      },
      'addAudioWave': function () {
        var jP = GI,
          I = this,
          Z = G["find"](".yidun_audio__source", this['$el']);
        Z["onloadeddata"] = function () {
          Z["onloadeddata"] = null;
          var H = G["find"](".yidun_audio__wave", I["$el"]);
          H["innerHTML"] = '';
          for (var C0 = Z["duration"] > 7 && Z['duration'] !== 1 / 0 ? Z["duration"] : 7, C1 = Math["round"](1000 * C0 / 500), C2 = document["createDocumentFragment"](); C1;) {
            var C3 = document["createElement"]("span");
            C3["className"] = "yidun_wave__item yidun_wave-" + C1 % 10, C3['innerHTML'] = "<span class=\"yidun_wave__inner\"></span>", C2["appendChild"](C3), C1--;
          }
          H["appendChild"](C2);
        }, Z['load']();
      },
      'changeAudioStatus': function (I) {
        var jA = GI,
          Z = this,
          H = G["find"](".yidun_audio__play", this["$el"]),
          C0 = G['find'](".yidun_audio__refresh", this["$el"]),
          C1 = function () {
            var jG = jA,
              C3 = G['findAll'](".yidun_wave__item", Z["$el"]),
              C4 = G["find"](".yidun_audio__wave", Z["$el"]);
            C4 && C4["focus"]();
            var C5 = 0,
              C6 = function C7() {
                Z['timer'] && clearTimeout(Z["timer"]), C5 > C3["length"] || (G["addClass"](C3[C5], 'yidun_wave__item-light'), C5++, Z["timer"] = setTimeout(C7, 480));
              };
            C6();
          },
          C2 = function () {
            clearTimeout(Z["timer"]);
            for (var C3 = G["findAll"]('.yidun_wave__item', Z["$el"]), C4 = 0; C4 < C3['length']; C4++) G["delClass"](C3[C4], "yidun_wave__item-light");
          };
        switch (I) {
          case "start":
            H["style"]['display'] = '', C0["style"]["display"] = "none", C2();
            break;
          case "playing":
            H['style']["display"] = 'none', C0["style"]["display"] = "none", C1();
            break;
          case 'ended':
            H["style"]["display"] = '', C0["style"]["display"] = '', C2();
        }
      },
      'resetAudio': function () {
        var I = G['find'](".yidun_audio__source", this["$el"]);
        I && (I['pause'](), I["currentTime"] = 0, this['$setData']({
          'playStatus': "start"
        }));
      },
      'onPlayerClick': function (I) {
        this['beginTime'] = j["now"](), this["onClick"](I);
        var Z = G["find"](".yidun_audio__source", this["$el"]);
        Z && Z["play"](), this["$setData"]({
          'playStatus': 'playing'
        });
      },
      'onClick': function (I) {
        var Z = this["$store"]['state'],
          H = Z['countsOfVerifyError'],
          C0 = Z["config"],
          C1 = H > C0["maxVerification"];
        C1 || this["clickCounts"]++;
      },
      'onAudioEnded': function () {
        this['$setData']({
          'playStatus': 'ended'
        });
      },
      'trackMoving': function (I) {
        if (this["beginTime"]) {
          var Z = this['$bgImg']["getBoundingClientRect"](),
            H = Z["left"],
            C0 = Z['top'],
            C1 = Q(this["$store"]["state"]['token'], [Math["round"](I["clientX"] - H), Math['round'](I["clientY"] - C0), j["now"]() - this['beginTime']] + '');
          this["traceData"]["push"](C1);
        }
      },
      'handleVerifyBtn': function (I) {
        var Z = this["$store"]['state'],
          H = Z['load'],
          C0 = Z["verifyStatus"];
        if ("done" === H['status'] && !C0) {
          var C1 = G['find']('.' + X["CONTROL"], this["$el"]);
          C1["setAttribute"]("role", ''), this["onClick"]();
          var C2 = this["$input"]["value"],
            C3 = this['traceData'];
          this['onVerifyCaptcha']({
            'data': JSON["stringify"]({
              'd': '',
              'm': E(j['sample'](C3, T)["join"](':')),
              'p': E(Q(this["$store"]['state']['token'], C2 + ',' + (j["now"]() - this["beginTime"]))),
              'ext': E(Q(this["$store"]["state"]["token"], this["clickCounts"] + ',' + this['traceData']["length"]))
            })
          }), this["beginTime"] = 0;
        }
      }
    }
  });
}, function (W, U, G) {
  function j(CL, CE) {
    var jK = M,
      CQ = this,
      Ck = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      Cl = Ck['startTimestamp'];
    CL = C2(CL);
    var Ch = {};
    Ch = "dark" === CL["theme"] ? CL["__theme__"] : Cj, C0(Ch, {
      'protocol': CL['protocol'],
      'staticServer': Array["isArray"](CL["staticServer"]) ? CL["staticServer"][0] : CL['staticServer'],
      'theme': CL["theme"]
    });
    var CK = window["gdxidpyhxde"];
    CE = CE || new CA({
      'bid': CL["captchaId"],
      'url': ''
    }, CL);
    var Cu = Object["assign"]({}, H["state"], {
        'config': CL,
        'fingerprint': CK,
        'langPkg': CL["customTexts"],
        'smsNew': (CL["smsNewVersion"] > 1 || !!CL["smsNew"] || !C3['isMobile']) && C3["supportCanvas"],
        'smsNewVersion': CL["smsNewVersion"],
        'smsVersion': 'v3',
        'iv': CR,
        '$fetch': C1({
          'timeout': CL["timeout"],
          'captchaConfig': CL
        }),
        '$captchaAnticheat': new Cz(CL, CE),
        'captchaCollector': CE,
        'browserFeature': CG,
        'startTimestamp': Cl
      }),
      CX = new Z(Object["assign"]({}, H, {
        'state': Cu
      })),
      CT = CL["__serverConfig__"]["smart"],
      Cs = null,
      Cm = function (Cq) {
        var CS = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        if (!CL["disableValidateInput"] && Cq && Cq['nodeType']) {
          var CV = C3["find"](".yidun_input", Cq);
          CV ? CV["value"] = CS : (CV = document["createElement"]("input"), CV["type"] = 'hidden', CV['name'] = 'NECaptchaValidate', CV["value"] = CS, CV["className"] = 'yidun_input', Cq["appendChild"](CV));
        }
      },
      Cp = {
        'onVerify': function (Cq, CS) {
          if (Cq) {
            var CV = Cq["data"];
            if (CV && CV["counts"] > CL['maxVerification']) {
              var Cy = new C8(C9, "verify failed more then " + CL["maxVerification"] + " times--" + Cq["message"], Object["assign"]({
                'token': CV["token"]
              }, Cq["data"]));
              return void CE["collectErr"](Cy);
            }
            return void (Cq['code'] === CC && Cq["data"]["errorCode"] !== CM && CE['collectErr'](Cq));
          }
          var Cn = CS["validate"];
          Cm(CL["element"], Cn), CE['clear']();
        },
        'onError': function (Cq) {
          Cq && 'get' === Cq["data"]["api"] && Cq["code"] === CC && Cq["data"]["errorCode"] !== CM && CE['collectErr'](Cq);
        }
      };
    this["version"] = CX["state"]["version"], this["captchaId"] = CL['captchaId'], this["captchaType"] = CX["state"]['captchaType'], this['mode'] = CL["mode"], this['theme'] = CL["theme"], this["protocol"] = CL["protocol"], this["lang"] = CL['lang'];
    var CO = CX["subscribe"](function (Cq, CS) {
      var js = jK,
        CV = Cq['type'],
        Cy = Cq["payload"];
      switch (CV) {
        case J:
          CQ['captchaType'] = CS["captchaType"];
          break;
        case F:
        case V:
          Cm(CL["element"], '');
          break;
        case q:
          var Cn = Cy['name'],
            Ce = Cy["args"];
          window["setTimeout"](function () {
            var Ci = Cp[Cn];
            !Ce && (Ce = [CQ]), Ci && Ci["apply"](null, Ce), "function" == typeof CL[Cn] && CL[Cn]["apply"](null, Ce);
          });
      }
    });
    L["mixin"]({
      'beforeCreate': function () {
        this['$store'] = this["$parent"] && this['$parent']['$store'] || this["$options"]["store"];
      }
    }), this["popUp"] = function () {
      CL["apiVersion"] > 1 ? Ca["assert"](!1, "apiVersion: " + CL["apiVersion"] + " unsupport popUp") : Ca['assert'](!1, "popUp function could only be invoked in not intellisense and mode is popup");
    }, this["close"] = function () {
      Ca["assert"](!1, 'close\x20function\x20could\x20only\x20be\x20invoked\x20in\x20only\x20\x22enableClose\x22\x20is\x20true\x20and\x20intellisense\x20on\x20mobile\x20devices\x20or\x20mode\x20is\x20bind/popup');
    }, this["verify"] = function () {
      CL["apiVersion"] > 1 ? Ca["assert"](!1, "verify function could only be invoked when mode is popup") : Ca["assert"](!1, "verify function could only be invoked in intellisense and mode is bind");
    };
    var CN = function (Cq, CS) {
      var jJ = jK;
      CL["enableClose"] && (CS && !C3["isMobile"] || (CQ["close"] = function () {
        var CV = Cq || Cs;
        CV && CV["closeModal"]();
      }));
    };
    switch (CT) {
      case !0:
        if ("bind" === this["mode"]) {
          var Ct = L["_extend"](C7);
          Cs = new Ct({
            'abstract': !0,
            'el': CL['element'],
            'store': CX
          }), this["verify"] = function () {
            var jS = jK;
            if (CX['state']["token"]) Cs['verifyCaptcha']();else var Cq = CX['subscribe'](function (CS, CV) {
              var Cy = CS["type"];
              CS["payload"], Cy === B && (Cs['verifyCaptcha'](), Cq());
            });
          }, CN(Cs), this["_captchaIns"] = Cs;
        } else {
          Cs = new L({
            'el': CL["element"],
            'store': CX,
            'template': '<captcha-intellisense></captcha-intellisense>',
            'components': {
              'captcha-intellisense': C6
            }
          });
          var CJ = Cs && Cs["$children"] && Cs['$children'][0];
          CN(CJ, !0), this["_captchaIns"] = CJ;
        }
        break;
      case !1:
      default:
        'popup' === this["mode"] ? (this[CL["apiVersion"] > 1 ? 'verify' : 'popUp'] = function () {
          if (!Cs) {
            var Cq = L['_extend'](C5);
            Cs = new Cq({
              'store': CX,
              'propsData': {
                'onBeforeClose': function () {
                  CX["commit"](q, {
                    'name': 'onBeforeClose'
                  });
                },
                'onClose': function (CS) {
                  CX["commit"](q, {
                    'name': "onClose",
                    'args': [{
                      'source': CS
                    }]
                  });
                },
                'onOpen': function () {
                  CX["commit"](q, {
                    'name': 'onOpen'
                  });
                },
                'onWidthGeted': function (CS) {
                  C3["delClass"](CS, CP);
                },
                'enableColor': !0,
                'autoOpen': !1
              }
            })['$mount'](function (CS) {
              C3['addClass'](CS, CP), CL["appendTo"] ? CL["appendTo"]["appendChild"](CS) : document['body']["appendChild"](CS);
            });
          }
          Cs['open'](), this["_captchaIns"] = Cs;
        }, CN()) : (Cs = new L({
          'el': CL['element'],
          'store': CX,
          'template': "<captcha-core :enableColor=\"true\"></captcha-core>",
          'components': {
            'captcha-core': C4
          }
        }), this["_captchaIns"] = Cs);
    }
    Cm(CL["element"]), this["getCaptchaType"] = function () {
      for (var Cq in CU) if (CU[Cq] === CX['state']["type"]) return Cq['toLowerCase']();
      return '';
    }, this["isIntellisense"] = function () {
      return !!CT;
    }, this["refresh"] = function () {
      CX['commit'](V);
    }, this["destroy"] = function () {
      CO(), Cs && (Cs["$destroy"](), Cs = null);
      var Cq = CL["element"];
      if (Cq) {
        var CS = C3["find"](".yidun_input", Cq);
        CS && Cq['removeChild'](CS);
      }
      X && "function" == typeof X && X();
    };
  }
  var L = G(8),
    Q = G(27),
    K = Q(),
    X = K['destroy'],
    N = G(6),
    J = N['SWITCH_TYPE'],
    q = N["INVOKE_HOOK"],
    V = N["EVENT_RESET"],
    F = N["EVENT_RESET_CLASSIC"],
    B = N["SET_TOKEN"],
    Z = G(55),
    H = G(71),
    C0 = G(42),
    C1 = G(22),
    C2 = G(47),
    C3 = G(4),
    C4 = G(15),
    C5 = G(16),
    C6 = G(41),
    C7 = G(33),
    C8 = G(7),
    C9 = C8["UNPASS_ERROR"],
    CC = C8["BUSINESS_ERROR"],
    CM = C8["QPS_LIMIT_ERROR"],
    Ca = G(3),
    CW = G(5),
    CU = CW["CAPTCHA_TYPE"],
    CR = CW["IV_VERSION"],
    CP = CW["POPUP_PRELOAD_SHIFTING_CLASS"],
    Cz = G(44),
    CA = G(9),
    CG = G(43),
    Cj = G(72);
  // W["exports"] = window["NECaptcha"] || j;
  // 这里直接改了代码，不管了
  W["exports"] = j;
}, function (W, U, P) {
  var jw = MF,
    G = function () {
      function CP(Cz, CA) {
        var CG = [],
          Cj = !0,
          CL = !1,
          CE = void 0;
        try {
          for (var CQ, Ck = Cz[Symbol["iterator"]](); !(Cj = (CQ = Ck['next']())["done"]) && (CG["push"](CQ["value"]), !CA || CG['length'] !== CA); Cj = !0);
        } catch (Cl) {
          CL = !0, CE = Cl;
        } finally {
          try {
            !Cj && Ck["return"] && Ck["return"]();
          } finally {
            if (CL) throw CE;
          }
        }
        return CG;
      }
      return function (Cz, CA) {
        if (Array["isArray"](Cz)) return Cz;
        if (Symbol["iterator"] in Object(Cz)) return CP(Cz, CA);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    j = P(14),
    L = j["FETCH_INTELLISENSE_CAPTCHA"],
    Q = j["VERIFY_INTELLISENSE_CAPTCHA"],
    K = j['RESET_STATE'],
    X = P(6),
    N = X['SWITCH_LOAD_STATUS'],
    J = X['UPDATE_VERIFY_STATUS'],
    q = X["INVOKE_HOOK"],
    V = X['EVENT_RESET'],
    F = P(5),
    D = F["CAPTCHA_TYPE"],
    B = F["SAMPLE_NUM"],
    Z = F["RTL_LANGS"],
    H = F["SIZE_TYPE"],
    C0 = F["LARGE_SIZE_TYPE"],
    C1 = F["POPUP_PRELOAD_SHIFTING_CLASS"],
    C2 = F["CLASSIC_WRAPPER_PRELOAD_SHIFTING_CLASS"],
    C3 = P(3),
    C4 = P(4),
    C5 = P(19),
    C6 = P(10),
    C7 = C6["aes"],
    C8 = C6["xorEncode"],
    C9 = P(8),
    CC = P(15),
    CM = P(16),
    Ca = P(13),
    CW = P(17),
    CU = CW["applyColorIfNeed"],
    CR = CW["applyStyleIfNeed"];
  W["exports"] = {
    'el': ".yidun_intellisense",
    'template': P(74),
    'components': {
      'captcha-core': CC
    },
    'data': function () {
      var CP = this["$store"]["state"],
        Cz = CP["langPkg"],
        CA = CP["config"];
      return {
        'langPkg': Cz,
        'theme': CA["theme"],
        'size': CA['size'],
        'status': "normal",
        'classicVisible': !1,
        'icon': CA["customStyles"]["icon"],
        'isAndroid': C4["isAndroid"]
      };
    },
    'on': {
      '.yidun_intelli-control\x20click': function (CP) {
        this["handleControlClick"](CP);
      },
      '.yidun_intelli-control\x20keydown': function (CP) {
        if (CP) {
          var Cz = CP["nativeEvent"]['event'];
          if (Cz) {
            var CA = !1;
            return void 0 !== Cz["key"] ? CA = "Spacebar" === Cz["key"] || '\x20' === Cz["key"] || 'Enter' === Cz["key"] : void 0 !== Cz["keyCode"] && (CA = 13 === Cz['keyCode'] || 32 === Cz["keyCode"]), CA ? (CP['preventDefault'](), this['handleControlClick'](CP), !1) : void 0;
          }
        }
      },
      '.yidun_intelli-control\x20mousemove': function (CP) {
        this["trackMoving"](CP);
      }
    },
    'watch': {
      'status': function (CP) {
        'loaddone' === CP && this["firstLoad"] && (this["$setData"]({
          'classicVisible': !0
        }), this["firstLoad"] = !1), "success" === CP && this["$setData"]({
          'classicVisible': !1
        });
      }
    },
    'mounted': function () {
      var jZ = jw,
        CP = this;
      CU(this["$store"]["state"]['config']["customStyles"]["primaryColor"], this["$el"]), CR(this["$store"]["state"]["config"]["customStyles"], this["$el"]), this['beginTime'] = 0, this["traceData"] = [], this["_baseClassNames"] = this["$el"]["className"]["trim"](), this["_removeEvents"] = this["initEvents"](), this["fetchCaptcha"]()["then"](function () {
        CP["$store"]["commit"](q, {
          'name': "onReady"
        }), CP['$store']["commit"](q, {
          'name': 'onDidRefresh'
        });
      })["finally"](function () {
        CP["$el"]['style']["display"] = '';
      }), Z["indexOf"](this["$store"]["state"]["config"]['lang']) !== -1 && (this["$el"]['style']["direction"] = "rtl");
    },
    'beforeDestroy': function () {
      this['_removeEvents'](), this["clear"]();
    },
    'render': function (CP) {
      var Cz = CP["status"],
        CA = CP["classicVisible"];
      void 0 !== Cz && this["updateUI"](Cz), void 0 !== CA && this['toggleClassicVisible'](CA);
    },
    'methods': {
      'handleControlClick': function (CP) {
        if (!(['checking', "loading", "loadfail", 'success']["indexOf"](this["status"]) > -1)) return "normal" === this["status"] ? void this["verifyIntelliCaptcha"](CP) : void (!this["classicVisible"] && this["$setData"]({
          'classicVisible': !0
        }));
      },
      'initEvents': function () {
        var L2 = jw,
          CP = this,
          Cz = C4["find"](".yidun_intelli-control", this['$el']),
          CA = function (CL) {
            CP['$el']["contains"](CL['target']) || CP['classicVisible'] && CP["$setData"]({
              'classicVisible': !1
            });
          },
          CG = function (CL) {
            CP["beginTime"] || (CP['beginTime'] = C3['now']());
          };
        !C4["isMobile"] && C4['on'](document, "mousedown", CA), C4['on'](Cz, "mouseover", CG);
        var Cj = this['$store']["subscribe"](function (CL, CE) {
          var CQ = CL["type"],
            Ck = (CL["payload"], CE["load"]),
            Cl = CE["verifyStatus"];
          switch (CQ) {
            case N:
              Ck && ("loading" === Ck["status"] && CP["$setData"]({
                'status': 'loading'
              }), 'done' === Ck["status"] && CP['$setData']({
                'status': "loaddone"
              }), "fail" === Ck["status"] && CP["$setData"]({
                'status': "loadfail"
              }));
              break;
            case J:
              "success" === Cl && CP["$setData"]({
                'status': 'success'
              }), 'error' === Cl && CP["$setData"]({
                'status': 'error'
              });
              break;
            case V:
              CP["reset"]();
          }
        });
        return function () {
          !C4["isMobile"] && C4["off"](document, "mousedown", CA), C4["off"](Cz, "mouseover", CG), Cj();
        };
      },
      'createClassicCaptcha': function () {
        var L7 = jw,
          CP = this;
        if (C4["isMobile"]) {
          var Cz = this["$store"]['state']['config'],
            CA = C9['_extend'](CM);
          this['_captchaIns'] = new CA({
            'store': this["$store"],
            'propsData': {
              'autoOpen': !1,
              'intellisense': !0,
              'enableColor': !1,
              'onBeforeClose': function () {
                CP["$store"]["commit"](q, {
                  'name': 'onBeforeClose'
                });
              },
              'onClose': function (Cj) {
                CP['$setData']({
                  'classicVisible': !1
                }), CP["$store"]["commit"](q, {
                  'name': "onClose",
                  'args': [{
                    'source': Cj
                  }]
                });
              },
              'onOpen': function () {
                CP['$store']["commit"](q, {
                  'name': "onOpen"
                });
              },
              'onWidthGeted': function (Cj) {
                C4['delClass'](Cj, C1);
              }
            }
          })["$mount"](function (Cj) {
            C4['addClass'](Cj, C1), Cz["appendTo"] ? Cz['appendTo']["appendChild"](Cj) : document["body"]["appendChild"](Cj);
          });
        } else {
          var CG = C9['_extend'](CC);
          this["_captchaIns"] = new CG({
            'store': this["$store"],
            'propsData': {
              'intellisense': !0,
              'enableColor': !1,
              'onWidthGeted': function () {
                var Cj = C4['find'](".yidun_classic-wrapper");
                C4["delClass"](Cj, C2);
              }
            }
          })["$mount"](function (Cj) {
            var CL = C4['find']('.yidun_classic-wrapper', CP["$el"]);
            C4["addClass"](CL, C2), CL['appendChild'](Cj);
          });
        }
      },
      'fetchCaptcha': function () {
        var CP = this;
        return new Ca(function (Cz, CA) {
          var LU = M,
            CG = {
              'width': CP["getWidth"](),
              'sizeType': CP['getSizeType']()
            };
          CP['$store']["state"]["smsNew"] && (CG["smsVersion"] = CP['$store']['state']["smsVersion"]), CP["$store"]["dispatch"](L, CG, function (Cj, CL) {
            if (CP["_isMounted"]) return Cj ? (CP['$setData']({
              'status': "loadfail"
            }), void CA(Cj)) : void Cz(CL);
          });
        });
      },
      'clear': function () {
        var LP = jw,
          CP = this;
        this["_captchaIns"] && (this["$setData"]({
          'classicVisible': !1
        }), this['$nextTick'](function () {
          CP['_captchaIns']["$destroy"](), CP["_captchaIns"] = null;
        })), this["beginTime"] = 0, this["traceData"] = [];
      },
      'reset': function () {
        var LA = jw,
          CP = this;
        this["$store"]["dispatch"](K), this['fetchCaptcha']()['then'](function () {
          CP["clear"](), CP['resetClassNames'](), CP['$setData']({
            'status': "normal"
          });
        });
      },
      'getWidth': function () {
        return this["$el"]["offsetWidth"];
      },
      'getSizeType': function () {
        return Object["keys"](C0)['indexOf'](this['size']) !== -1 ? H["LARGE"] : H["DEFAULT"];
      },
      'resetClassNames': function () {
        for (var CP = this["_baseClassNames"]["split"](/\s+/), Cz = arguments["length"], CA = Array(Cz), CG = 0; CG < Cz; CG++) CA[CG] = arguments[CG];
        this['$el']["className"] = C5(CP, CA);
      },
      'loadClassicCaptcha': function () {
        this['createClassicCaptcha'](), this["firstLoad"] = !0, this["$setData"]({
          'status': 'loading'
        }), this["_captchaIns"]["refresh"]();
      },
      'verifyIntelliCaptcha': function (CP) {
        var Lk = jw,
          Cz = this;
        this["$setData"]({
          'status': "checking"
        }), Ca['all']([new Ca(function (CA, CG) {
          var Ll = Lk,
            Cj = Cz['$store']["state"]["token"],
            CL = Cz["$el"]["getBoundingClientRect"](),
            CE = CL['left'],
            CQ = CL["top"],
            Ck = C3["now"](),
            Cl = C8(Cj, (void 0 !== CP["clientX"] && void 0 !== CP["clientY"] ? [Math["round"](CP["clientX"] - CE), Math["round"](CP['clientY'] - CQ), Ck - (Cz['beginTime'] || Ck)] : []) + ''),
            Ch = Cz["traceData"]['map'](function (CK) {
              return C8(Cj, CK);
            });
          Cz['$store']["dispatch"](Q, {
            'token': Cj,
            'type': D["INTELLISENSE"],
            'width': Cz["getWidth"](),
            'data': JSON["stringify"]({
              'd': '',
              'm': C7(C3["sample"](Ch, B)["join"](':')),
              'p': C7(Cl),
              'ext': C7(C8(Cj, '1,' + Ch["length"]))
            })
          }, function (CK, Cu) {
            if (Cz["_isMounted"]) return CK ? void CG(CK) : void CA(Cu);
          });
        }), new Ca(function (CA, CG) {
          window["setTimeout"](CA, 300);
        })])["then"](function (CA) {
          var CG = G(CA, 1);
          CG[0], Cz["$setData"]({
            'status': "success"
          });
        })["catch"](function () {
          return Cz["loadClassicCaptcha"]();
        });
      },
      'trackMoving': function (CP) {
        if (this['beginTime']) {
          var Cz = this['$el']["getBoundingClientRect"](),
            CA = Cz['left'],
            CG = Cz["top"],
            Cj = [Math["round"](CP["clientX"] - CA), Math["round"](CP["clientY"] - CG), C3['now']() - this["beginTime"]] + '';
          this["traceData"]["push"](Cj);
        }
      },
      'toggleClassicVisible': function (CP) {
        var Cz = this["_captchaIns"];
        if (C4["isMobile"] && Cz) CP && Cz["open"](), !CP && Cz["close"]();else {
          var CA = C4['find'](".yidun_classic-wrapper", this['$el']);
          CA["style"]["display"] = CP ? "block" : "none";
        }
      },
      'updateUI': function (CP) {
        var Lm = jw,
          Cz = this,
          CA = C4["find"](".yidun_intelli-text", this["$el"]),
          CG = C4["find"]('.yidun_tips__text', this["$el"]),
          Cj = this["langPkg"]["intellisense"],
          CL = "yidun_intellisense",
          CE = this["$store"]["state"],
          CQ = CE['countsOfVerifyError'],
          Ck = CE["config"],
          Cl = function (CK) {
            CK["stopPropagation"](), Cz["$store"]['commit'](V);
          };
        switch (C4["off"](CG, "click", Cl), CP) {
          case "normal":
            C4["text"](CA, Cj["normal"]);
            break;
          case "checking":
            this["resetClassNames"]("yidun_intellisense--checking"), C4["text"](CA, Cj["checking"]);
            break;
          case "loading":
            this["resetClassNames"]("yidun_intellisense--loading"), C4['text'](CA, Cj['loading']);
            break;
          case "loaddone":
            this["resetClassNames"](), C4["text"](CA, Cj["loaddone"]);
            break;
          case "loadfail":
            this['resetClassNames']("yidun_intellisense--loadfail"), C4["text"](CG, Cj["loadfail"]);
            break;
          case "success":
            this["resetClassNames"]("yidun_intellisense--success"), C4['text'](CG, this["langPkg"]["verifySuccess"]);
            break;
          case "error":
            var Ch = "yidun_intellisense--error";
            CQ > Ck["maxVerification"] ? (Ch += " yidun_intellisense--maxerror", C4["text"](CG, this["langPkg"]["verifyOutOfLimit"]), C4['on'](CG, "click", Cl)) : C4['text'](CG, this["langPkg"]['verifyError']), this["resetClassNames"](Ch);
        }
      },
      'closeModal': function () {
        C4["isMobile"] && this['_captchaIns'] && this["_captchaIns"]["closeModal"]();
      }
    }
  };
}, function (a, W, U) {
  var R = U(24),
    P = U(3),
    z = U(18),
    A = {};
  a['exports'] = function (G, j) {
    G = Object["assign"]([], G);
    var L = j["protocol"],
      E = j["staticServer"],
      Q = j["theme"],
      k = G[0]['slice'](0);
    if (!A[Q]) {
      P["assert"](G, "apply [" + Q + " theme] failed");
      var h = z({
        'protocol': L,
        'host': E
      });
      k[1] = k[1]['replace'](/url\(['"]?\/?([^'"\s]+?)['"]?\)/g, 'url(\x22' + h + "$1\")"), G[0] = k, R(G), A[Q] = !0, delete G["__theme__"];
    }
  };
}, function (a, W) {
  function U() {
    var j = void 0;
    try {
      null[0]();
    } catch (Q) {
      j = Q;
    }
    if (j && "string" == typeof j["stack"]) {
      for (var L = ['phantomjs', "rhino", "nodejs", "couchjs", "selenium"], E = 0; E < L["length"]; E++) if (j["stack"]["indexOf"](L[E]) > -1) return 1001 + E;
    }
    return 0;
  }
  function R() {
    for (var j = ['_Selenium_IDE_Recorder', '_phantom', "phantom.injectJs", "callPhantom", "_selenium", 'callSelenium', "domAutomation", "domAutomationController", "__nightmare", "context.hashCode", "java.lang.System.exit", "spawn", 'Buffer', "emit", "webdriver"], L = ["__driver_evaluate", '__webdriver_evaluate', "__selenium_evaluate", "__fxdriver_evaluate", '__driver_unwrapped', "__webdriver_unwrapped", '__selenium_unwrapped', '__fxdriver_unwrapped', "__webdriver_script_function", '__webdriver_script_func', '__webdriver_script_fn'], E = ["selenium", "webdriver", 'driver'], Q = 0, k = j["length"]; Q < k; Q++) if (A(window, j[Q])) return Q + 2001;
    for (var l = 0, h = L["length"]; l < h; l++) if (A(document, L[l])) return l + 3001;
    for (var K = 0, X = E["length"]; K < X; K++) if (document['documentElement']["getAttribute"](E[K])) return K + 4001;
    return A(navigator, "webdriver") === !0 ? 5001 : 0;
  }
  function P() {
    for (var j in document) if (document[j]) {
      try {
        if (document[j]['cache_'] && j["match"] && j['match'](/\$[a-z]dc_/)) return 5002;
      } catch (L) {
        return 0;
      }
      return 0;
    }
  }
  function z() {
    try {
      return window["external"] && ~window["external"]["toString"]()["indexOf"]('Sequentum') ? 5003 : 0;
    } catch (j) {
      return 0;
    }
  }
  function A(j, L) {
    for (var E = L["split"]('.'), Q = j, k = 0; k < E["length"]; k++) {
      if (void 0 == Q[E[k]]) return;
      Q = Q[E[k]];
    }
    return Q;
  }
  var G = function () {
    try {
      return U() || R() || P() || z();
    } catch (j) {
      return 0;
    }
  }();
  a["exports"] = G;
}, function (a, W, U) {
  var Le = MF;
  function R(j, L) {
    this["_captchaConf"] = j, this['_captchaCollector'] = L;
  }
  var P = U(13),
    z = U(7),
    A = z["ANTICHEAT_TOKEN_ERROR"],
    G = U(3);
  R["prototype"]["getAnticheat"] = function () {
    return this["_captchaConf"]["__anticheat__"] ? this["_captchaConf"]['__anticheat__']["instance"] : null;
  }, R['prototype']["getToken"] = function (j) {
    var Lx = Le,
      L = this,
      E = j["timeout"],
      Q = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
      k = this["_captchaConf"],
      l = new P(function (h) {
        var K = function X() {
          var LF = M,
            T = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            m = null,
            p = function (O) {
              if (clearTimeout(m), T < Q) setTimeout(function () {
                return X(T + 1);
              }, 200);else {
                var N = new z(A, O["message"] + ';initCaptchaWatchman:\x20' + G["typeOf"](window["initCaptchaWatchman"]) + '}');
                L["_captchaCollector"]['collectErr'](N), h(k["acConfig"]["token"] || '');
              }
            };
          try {
            m = setTimeout(function () {
              p(new Error("get anticheat token timeout"));
            }, E + 50), L['getAnticheat']()["getToken"](k['acConfig']['bid'], function (O) {
              clearTimeout(m), h(O);
            }, E);
          } catch (O) {
            p(O);
          }
        };
        1 === k["acConfig"]["enable"] ? K(0) : h('');
      });
    return l;
  }, a["exports"] = R;
}, function (W, U, R) {
  var LY = MF;
  function P(F, w, D) {
    return w in F ? Object["defineProperty"](F, w, {
      'value': D,
      'enumerable': !0,
      'configurable': !0,
      'writable': !0
    }) : F[w] = D, F;
  }
  var z,
    A = R(22),
    G = R(18),
    j = R(7),
    L = j['REQUEST_SCRIPT_ERROR'],
    E = j["REQUEST_API_ERROR"],
    Q = j['REQUEST_IMG_ERROR'],
    k = j["REQUEST_AUDIO_ERROR"],
    K = j['BUSINESS_ERROR'],
    X = j["UNPASS_ERROR"],
    T = j["ANTICHEAT_TOKEN_ERROR"],
    O = j["ANTICHEAT_INIT_ERROR"],
    N = R(21),
    J = R(11),
    q = R(3),
    S = q["uuid"],
    V = (z = {}, P(z, E, "api"), P(z, Q, "image"), P(z, k, "audio"), P(z, L, 'script'), P(z, K, 'business'), P(z, X, "unpass"), P(z, T, "anticheat"), P(z, O, 'anticheat'), z),
    x = null;
  W['exports'] = function (F, w, D) {
    var Lw = LY,
      B = w["protocol"],
      I = w["apiServer"],
      Z = w['__serverConfig__'],
      H = void 0 === Z ? {} : Z,
      C0 = w["captchaId"],
      C1 = w["timeout"],
      C2 = w['ipv6'],
      C3 = new N(),
      C4 = function (Ca) {
        var CW = "/api/v2/collect";
        return Array["isArray"](Ca) ? Ca["map"](function (CU) {
          return G({
            'protocol': B,
            'host': CU,
            'path': CW
          });
        }) : G({
          'protocol': B,
          'host': Ca,
          'path': CW
        });
      },
      C5 = C2 ? [["c.dun.163.com", 'c.dun.163yun.com'], ['c-v6.dun.163.com', "c.dun.163yun.com"]][1] : [['c.dun.163.com', "c.dun.163yun.com"], ['c-v6.dun.163.com', "c.dun.163yun.com"]][0],
      C6 = C4(I || H["apiServer"] || C5),
      C7 = A({
        'timeout': C1,
        'disableRetry': !0,
        'captchaConfig': w
      }),
      C8 = F["data"],
      C9 = Object["assign"]({
        'id': C0,
        'token': C8["token"] || '',
        'type': V[F["code"]] || "other",
        'target': C8["url"] || C8["resource"] || '',
        'message': F["toString"]()
      }, D);
    null == window['ip'] && (window['ip'] = function (Ca, CW, CU) {
      x = {
        'ip': Ca,
        'dns': CU
      };
    });
    var CC = function () {
        var LB = Lw;
        Object["assign"](C9, x), C7(C6, C9, function (Ca, CW) {
          if (Ca || CW["error"]) {
            console && console["warn"]("Failed to collect error.");
            var CU = new Error(Ca ? Ca["message"] : CW["msg"]);
            return CU["data"] = {
              'url': C6
            }, void C3["resolve"](CU);
          }
          C3["resolve"]();
        });
      },
      CM = B + '://only-d-' + S(32) + '-' + new Date()["valueOf"]() + ".nstool.netease.com/ip.js";
    return J["script"]({
      'url': CM,
      'timeout': C1,
      'checkResult': function (Ca) {
        var LI = Lw;
        Ca && Ca["scriptEl"] && Ca["scriptEl"]["parentElement"]["removeChild"](Ca['scriptEl']);
        var CW = new N();
        return x && x["dns"] ? (CW["resolve"](), CW) : (setTimeout(function () {
          return CW["resolve"](new Error("try to collect dns again"));
        }, 100), CW);
      }
    })["finally"](function () {
      CC();
    }), C3;
  };
}, function (a, W) {
  var LZ = MF;
  a["exports"] = function () {
    return location["href"]['replace'](/\?[\s\S]*/, '')["substring"](0, 128);
  };
}, function (W, U, P) {
  var E4 = MF;
  function A(C3) {
    return "number" === O["typeOf"](C3);
  }
  function G(C3, C4) {
    var C5 = /^((\d|[1-9]\d+)(\.\d+)?)(px|rem|%)?$/,
      C6 = C3["width"],
      C7 = C6 === H["width"],
      C8 = "popup" === C3["mode"] || 'bind' === C3['mode'];
    O["assert"](C6 === H["width"] || C5["test"](C6) || A(C6) && C6 >= 0, "config: \"width\" should be a valid number or string like \"**px\", \"**rem\", \"**%\"(except popup/bind mode) or \"auto\". By default, it is \"auto\""), O["assert"](!(C8 && /%$/['test'](C6)), "config: \"width\" can't be percentage like \"**%\", when mode is \"popup\".");
    var C9 = O["msie"]();
    O['assert'](!(C9 < 9 && /rem$/["test"](C6)), "config: \"width\", IE" + C9 + '\x20does\x20not\x20support\x20\x22rem\x22,\x20please\x20use\x20a\x20valid\x20value');
    var CC = C6;
    return C7 && C8 ? CC = T["isMobile"] ? "260px" : C1 + 'px' : (A(C6) || Number(C6)) && (CC = C6 + 'px'), CC;
  }
  function j(C3) {
    var C4 = C3['startLeft'],
      C5 = void 0 === C4 ? Z : C4,
      C6 = parseInt(C5, 10),
      C7 = isNaN(C6) ? Z + 'px' : O['adsorb'](C6, 0, F) + 'px';
    return Object['assign']({}, C3, {
      'startLeft': C7
    });
  }
  function L(C3) {
    var C4 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      C5 = {
        'imagePanel': {},
        'controlBar': {},
        'gap': '',
        'icon': {},
        'primaryColor': ''
      };
    return Object["assign"](C5["imagePanel"], C3["imagePanel"], C4["imagePanel"]), Object["assign"](C5["controlBar"], C3["controlBar"], C4['controlBar']), C5['imagePanel']["borderRadius"] = I(C4['imagePanel'] && C4["imagePanel"]["borderRadius"]) || I(C3["imagePanel"] && C3["imagePanel"]["borderRadius"]), C5['gap'] = I(C4['gap']) || I(C3["gap"]), C5["controlBar"]['height'] = I(C4["controlBar"] && C4["controlBar"]['height']) || I(C3["controlBar"] && C3["controlBar"]["height"]), C5['controlBar']['textSize'] = I(C4["controlBar"] && C4['controlBar']["textSize"]) || I(C3["controlBar"] && C3["controlBar"]['textSize']), C5["controlBar"]["borderRadius"] = I(C4["controlBar"] && C4["controlBar"]["borderRadius"]) || I(C3['controlBar'] && C3['controlBar']['borderRadius']), C5['controlBar']['paddingLeft'] = I(C4["controlBar"] && C4["controlBar"]["paddingLeft"]) || I(C3['controlBar'] && C3['controlBar']["paddingLeft"]), C5['primaryColor'] = C4["primaryColor"] || C3["primaryColor"], C5["executeBorderRadius"] = I(C4["executeBorderRadius"]) || I(C3["executeBorderRadius"]), C5['executeBackground'] = C4["executeBackground"] || C3["executeBackground"], C5['executeTop'] = I(C4["executeTop"]) || I(C3["executeTop"]), C5["executeRight"] = I(C4["executeRight"]) || I(C3['executeRight']), Object['assign'](C5["icon"], C3["icon"], C4["icon"]), C5;
  }
  function E(C3) {
    var E1 = M,
      C4 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      C5 = function C6(C7, C8) {
        for (var C9 = {}, CC = Object["keys"](C7), CM = 0, Ca = CC['length']; CM < Ca; CM++) {
          var CW = CC[CM];
          void 0 === C8[CW] ? C9[CW] = C7[CW] : "string" === O["typeOf"](C7[CW]) ? C9[CW] = C8[CW] + '' : C9[CW] = C6(C7[CW], C8[CW]);
        }
        return C9;
      };
    return C5(C3, C4);
  }
  function Q(C3) {
    var C4 = {};
    C4 = K({}, N, C3["__lang__"]), C3 = j(Object['assign']({}, H, C3));
    var C5 = C3["__serverConfig__"]["smart"],
      C6 = C3["element"],
      C7 = "popup" === C3["mode"],
      C8 = C3["apiVersion"];
    O["assert"](C3["captchaId"], "config: \"captchaId\" is required!"), O["assert"](A(C8), "apiVersion must be number"), C8 > 1 ? (!C6 && (C6 = "body"), O["assert"](~["float", 'embed', "popup"]['indexOf'](C3["mode"]), "config: \"mode \"" + C3["mode"] + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected"), C5 && "popup" === C3['mode'] && (C3["mode"] = "bind"), C3["appendTo"] = C6, C3["enableClose"] = C3["closeEnable"]) : (O["assert"](C7 || C6, "config: \"element\" is required when \"mode\" is not \"popup\""), !C5 && O["assert"](~["float", "embed", "popup"]['indexOf'](C3['mode']), "config: \"current captcha is not intellisense , mode \"" + C3["mode"] + '\x22\x20is\x20invalid,\x20\x22float\x22,\x20\x22embed\x22\x20or\x20\x22popup\x22\x20is\x20expected')), O["assert"](!C3["size"] || ~['small', 'medium', "large", "x-large"]["indexOf"](C3["size"]), "config: \"size " + C3["size"] + "\" is invalid. \"small\", \"medium\", \"large\" and \"x-large\" is expected. If no value is passed, it defaults to \"small\"."), C6["nodeType"] || "string" !== O["typeOf"](C6) || (C6 = T["find"](C6), O["assert"](C6, "config: \"element " + C3["element"] + "\" not found"), C3["element"] = C6), O['assert'](!C3["theme"] || ~["light", "dark"]["indexOf"](C3["theme"]), "config: \"theme " + C3['theme'] + "\" is invalid. \"light\", \"dark\" is expected. By default, it depends on console's config"), O["assert"](/^https?$/['test'](C3["protocol"]), "config: \"protocol " + C3["protocol"] + '\x22\x20is\x20invalid.\x20\x22http\x22,\x20\x22https\x22\x20is\x20expected.\x20By\x20default,\x20it\x20depends\x20on\x20user\x27s\x20website'), Object["keys"](C2)['indexOf'](C3["lang"]) > -1 && (C3["lang"] = C2[C3['lang']]), O["assert"](C4[C3["lang"]], "config: \"lang " + C3['lang'] + "\" is invalid, supported lang: " + Object["keys"](C4)['toString']() + ". By default, it's " + H["lang"]), C5 && "bind" !== C3["mode"] ? C3["width"] = H["width"] : C3["width"] = G(C3, C6);
    var C9 = C3["appendTo"];
    return !C5 && "popup" === C3['mode'] || 'bind' === C3["mode"] || C5 && T["isMobile"] ? O["assert"](!C9 || C9["nodeType"] || 'string' === O["typeOf"](C9), 'config:\x20appendTo\x20should\x20be\x20a\x20elment\x20or\x20string') : C8 <= 1 && O['assert'](!C9, 'config:\x20appendTo\x20could\x20only\x20be\x20valid\x20when\x20captchaType\x20is\x20not\x20intellisense\x20and\x20mode\x20is\x20\x22popup\x22,\x20or\x20mode\x20is\x20bind,\x20or\x20captchaType\x20is\x20intellisense\x20on\x20the\x20mobile\x20side'), C9 && !C9["nodeType"] && "string" === O['typeOf'](C9) && (C9 = T["find"](C9), O['assert'](C9, "config: \"element " + C3["appendTo"] + "\" which \"appendTo\" defined not found"), C3['appendTo'] = C9), (C8 <= 1 || C8 >= 1 && C9 !== document["body"]) && C9 && "static" === T["getComputedStyle"](C9, "position") && (C9["style"]['position'] = "relative"), C3["__serverConfig__"]["customStyles"] ? (O["assert"](C3["customStyles"] && B(C3['customStyles']), "config: \"customStyles\" must be a plain Object"), C3["customStyles"] = L(H["customStyles"], C3["customStyles"]), O["assert"](C3["customTexts"] && B(C3["customTexts"]), "config: \"customTexts\" must be a plain Object"), C3["customTexts"] = E(C4[C3["lang"]], C3["customTexts"])) : (C3['customStyles'] = H["customStyles"], C3['customTexts'] = C4[C3['lang']]), O["assert"]("string" === O["typeOf"](C3["group"]) && C3["group"]["length"] <= 32, 'config:\x20\x22group\x22\x20must\x20be\x20a\x20string\x20and\x20it\x27s\x20length\x20less\x20than\x20or\x20equal\x2032'), O["assert"]('string' === O["typeOf"](C3["scene"]) && C3["scene"]["length"] <= 32, "config: \"scene\" must be a string and it's length less than or equal 32"), O["assert"](A(C3["maxVerification"]) && C3["maxVerification"] >= 0, "config: \"maxVerification\" must be a number and it's greater than or equal 0"), O["assert"](A(C3["refreshInterval"]) && C3["refreshInterval"] >= 0, 'config:\x20\x22refreshInterval\x22\x20must\x20be\x20a\x20number\x20and\x20it\x27s\x20greater\x20than\x20or\x20equal\x200'), C3["acConfig"] = C3["acConfig"] || C3["__serverConfig__"]['ac'] || {}, C3;
  }
  var K = Object["assign"] || function (C3) {
      for (var C4 = 1; C4 < arguments["length"]; C4++) {
        var C5 = arguments[C4];
        for (var C6 in C5) Object['prototype']["hasOwnProperty"]["call"](C5, C6) && (C3[C6] = C5[C6]);
      }
      return C3;
    },
    X = function () {
      function C3(C4, C5) {
        var C6 = [],
          C7 = !0,
          C8 = !1,
          C9 = void 0;
        try {
          for (var CC, CM = C4[Symbol["iterator"]](); !(C7 = (CC = CM["next"]())["done"]) && (C6["push"](CC["value"]), !C5 || C6["length"] !== C5); C7 = !0);
        } catch (Ca) {
          C8 = !0, C9 = Ca;
        } finally {
          try {
            !C7 && CM["return"] && CM['return']();
          } finally {
            if (C8) throw C9;
          }
        }
        return C6;
      }
      return function (C4, C5) {
        if (Array["isArray"](C4)) return C4;
        if (Symbol["iterator"] in Object(C4)) return C3(C4, C5);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    T = P(4),
    O = P(3),
    N = P(57),
    J = P(5),
    q = J["WIDTH_LIMIT"],
    S = J["RUN_ENV"],
    V = J["MAX_VERIFICATION"],
    F = J["SLIDER_START_LEFT_LIMIT"],
    D = P(12),
    B = D["isPlainObject"],
    I = P(23),
    Z = 0,
    H = {
      'apiVersion': 1,
      'captchaId': '',
      'element': null,
      'appendTo': null,
      'mode': T["isMobile"] ? "popup" : "float",
      'size': "small",
      'protocol': window["location"]["protocol"]["replace"](':', ''),
      'lang': "zh-CN",
      'width': "auto",
      'startLeft': "0px",
      'ipv6': !1,
      'enableClose': !1,
      'hideCloseBtn': !1,
      'disableMaskClose': !1,
      'enableAutoFocus': !1,
      'disableFocusVisible': !1,
      'refreshInterval': 300,
      'customStyles': {
        'imagePanel': {
          'align': 'top',
          'borderRadius': '2px'
        },
        'controlBar': {
          'height': '40px',
          'borderRadius': '2px'
        },
        'gap': "15px",
        'icon': {
          'intellisenseLogo': '',
          'slider': ''
        },
        'primaryColor': ''
      },
      'customTexts': {},
      'feedbackEnable': !0,
      'runEnv': S['WEB'],
      'group': '',
      'scene': '',
      'maxVerification': V,
      'disableValidateInput': !1
    },
    C0 = X(q, 1),
    C1 = C0[0],
    C2 = {
      'en': 'en-US',
      'iw': 'he',
      'nb': 'no',
      'in': 'id'
    };
  W["exports"] = Q;
}, function (a, W) {
  var E8 = MF;
  a["exports"] = function (U) {
    var R = {
      '\x5c': '-',
      '/': '_',
      '+': '*'
    };
    return U["replace"](/[\\\/+]/g, function (P) {
      return R[P];
    });
  };
}, function (W, U, R) {
  function P() {
    k = K['length'] = 0, h = {}, E = Q = !1;
  }
  function z() {
    Q = !0;
    var X = void 0,
      T = void 0;
    for (K['sort'](function (O, N) {
      return O['id'] - N['id'];
    }), k = 0; k < K["length"]; k++) X = K[k], T = X['instance'], h[X['id']] = null, T["_isMounted"] && T["render"](X["data"]);
    var m = K["slice"]();
    P(), A(m);
  }
  function A(X) {
    for (var T = X["length"]; T--;) {
      var m = X[T],
        O = m["instance"];
      O["_updater"] === m && O["_isMounted"] && (m["data"] = {});
    }
  }
  function G(X) {
    var T = X['id'];
    if (null == h[T]) {
      if (h[T] = !0, Q) {
        for (var m = K["length"] - 1; m > k && K[m]['id'] > X['id'];) m--;
        K["splice"](m + 1, 0, X);
      } else K["push"](X);
      E || (E = !0, L(z));
    }
  }
  var j = R(12),
    L = j["nextTick"],
    E = !1,
    Q = !1,
    k = 0,
    h = {},
    K = [];
  W["exports"] = G;
}, function (a, W, U) {
  var EU = MF,
    R = U(12),
    P = R["lifeCycleHooks"];
  a["exports"] = function () {
    var ER = EU,
      z = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      A = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      G = {},
      j = A['el'] || z['el'],
      L = A["template"] || z['template'],
      E = z["abstract"],
      Q = A["components"] || z["components"],
      k = A['on'] || z['on'],
      K = A["render"] || z["render"],
      X = z["props"],
      T = A["propsData"],
      m = A['data'] || z["data"],
      O = z["methods"] || A["methods"],
      N = z["watch"] || A["watch"];
    j && (G['el'] = j), L && (G["template"] = L), E && (G["abstract"] = !!E), Q && (G["components"] = Q), k && (G['on'] = Object['assign']({}, z['on'], A['on'])), K && (G["render"] = K), X && (G["props"] = X), T && (G["propsData"] = T), m && (G["data"] = m), O && (G['methods'] = Object["assign"]({}, z['methods'], A["methods"])), N && (G["watch"] = Object["assign"]({}, z["watch"], A["watch"]));
    var J = function (q, S) {
      var V = [];
      return q && (V = V['concat'](q)), S && (V = V["concat"](S)), V;
    };
    return P["map"](function (q) {
      G[q] = J(z[q], A[q]);
    }), G = Object["assign"]({}, A, G);
  };
}, function (a, W, U) {
  var EA = MF;
  function R() {
    var G = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : '',
      j = arguments[1];
    return this instanceof R ? (this["_originalTemplate"] = G, void (this['_composedStr'] = j ? P["template"](G, j) : G)) : new R(G, j);
  }
  var P = U(3),
    z = U(12),
    A = z["getDocFragmentRegex"];
  R["prototype"]["compose"] = function (G, j, L) {
    var E = A(G),
      Q = P["template"](j, L);
    return this["_composedStr"] = this["_composedStr"]["replace"](E, Q), this;
  }, R["prototype"]["toString"] = function () {
    return this['_composedStr'];
  }, R['prototype']["reset"] = function (G) {
    return this["_composedStr"] = P["template"](this['_originalTemplate'], G), this;
  }, a["exports"] = R;
}, function (a, W, U) {
  var R = function () {
      function j(L, E) {
        var Q = [],
          k = !0,
          l = !1,
          h = void 0;
        try {
          for (var K, X = L[Symbol['iterator']](); !(k = (K = X['next']())["done"]) && (Q["push"](K["value"]), !E || Q['length'] !== E); k = !0);
        } catch (T) {
          l = !0, h = T;
        } finally {
          try {
            !k && X["return"] && X["return"]();
          } finally {
            if (l) throw h;
          }
        }
        return Q;
      }
      return function (L, E) {
        if (Array["isArray"](L)) return L;
        if (Symbol['iterator'] in Object(L)) return j(L, E);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    P = U(4),
    z = U(20),
    A = z({
      'initialize': function (j) {
        var L = this["nativeEvent"] = j["nativeEvent"];
        this["target"] = L["target"], this["currentTarget"] = j["currentTarget"], this['pageX'] = L['pageX'], this["pageY"] = L["pageY"], this['clientX'] = L['clientX'], this["clientY"] = L["clientY"], this["defaultPrevented"] = !1, this["cancelBubble"] = !1, this["cancelImmediateBubble"] = !1, this["type"] = L['type'];
      },
      'preventDefault': function () {
        this["defaultPrevented"] = !0;
      },
      'stopPropagation': function () {
        this["cancelBubble"] = !0;
      },
      'stopImmediatePropagation': function () {
        this["cancelImmediateBubble"] = !0;
      }
    }),
    G = z({
      'initialize': function (j) {
        this["$el"] = j["$el"], this["initEvents"](j["events"]);
      },
      'initEvents': function (j) {
        var L = this;
        this["_captureEvents"] = {}, this["_bubbleEvents"] = {}, this["_delegationHandlers"] = {};
        var E = this["normalizeEvents"](j);
        Object["keys"](E)["map"](function (Q) {
          var k = E[Q];
          k['map'](function (h) {
            L["delegate"](Q, h["selector"], h['handler']);
          });
          var l = L['_delegationHandlers'][Q] = function (h) {
            var K = h['target'],
              X = K,
              T = !1,
              s = function () {
                var ET = M,
                  m = null,
                  p = L["_bubbleEvents"][Q];
                Object["keys"](p)["map"](function (O) {
                  var N = O["match"](/^([.#])([^.#\s]+)$/) || [],
                    J = N[1],
                    q = N[2];
                  if ('.' === J && ~X['className']['indexOf'](q) || '#' === J && X['id'] === q) {
                    m = X;
                    for (var S = p[O], V = 0; V < S["length"]; V++) {
                      var x = S[V],
                        F = new A({
                          'nativeEvent': h,
                          'currentTarget': m
                        });
                      if (x["call"](m, F), F["defaultPrevented"] && h['preventDefault'](), F['cancelImmediateBubble']) {
                        T = !0;
                        break;
                      }
                    }
                    F['cancelBubble'] && (T = !0);
                  }
                }), X = X["parentElement"], X === L["$el"] && (T = !0);
              };
            do s(); while (L["$el"] && !T && X);
          };
          P['on'](L['$el'], Q, l);
        });
      },
      'off': function () {
        var j = this["_delegationHandlers"];
        for (var L in j) P['off'](this["$el"], L, j[L]);
        this["_captureEvents"] = {}, this["_bubbleEvents"] = {}, this["_delegationHandlers"] = {}, this['$el'] = null;
      },
      'delegate': function (j, L, E) {
        var EO = M;
        this["_bubbleEvents"][j] || (this["_bubbleEvents"][j] = {});
        var Q = this["_bubbleEvents"][j];
        Q[L] || (Q[L] = []);
        var k = Q[L];
        return k["push"](E), function () {
          var l = k["indexOf"](E);
          l > -1 && k["splice"](l, 1);
        };
      },
      'normalizeEvents': function (j) {
        var L = {};
        for (var E in j) if (j['hasOwnProperty'](E)) {
          var Q = E['split'](/\s+/),
            k = R(Q, 2),
            l = k[0],
            h = k[1];
          L[h] || (L[h] = []);
          var K = L[h];
          K["push"]({
            'selector': l,
            'handler': j[E]
          });
        }
        return L;
      }
    });
  a["exports"] = G;
}, function (a, W) {
  var En = MF;
  function U() {}
  function R(A, G, j, L) {
    var EV = M;
    function E() {
      K['parentNode'] && K["parentNode"]["removeChild"](K), window[O] = U, X && clearTimeout(X);
    }
    function Q() {
      window[O] && E();
    }
    function k(V) {
      var x = [];
      for (var F in V) V["hasOwnProperty"](F) && x["push"](q(F) + '=' + q(V[F]));
      return x["join"]('&');
    }
    "object" === ("undefined" == typeof j ? "undefined" : P(j)) && (L = j, j = null), "function" == typeof G && (j = G, G = null), L || (L = {});
    var K,
      X,
      T = Math["random"]()["toString"](36)["slice"](2, 9),
      m = L["prefix"] || "__JSONP",
      O = L["name"] || m + ('_' + T) + ('_' + z++),
      N = L["param"] || 'callback',
      J = L["timeout"] || 6000,
      q = window["encodeURIComponent"],
      S = document["getElementsByTagName"]("script")[0] || document["head"];
    return J && (X = setTimeout(function () {
      E(), j && j(new Error("Timeout"));
    }, J)), window[O] = function (V) {
      E(), j && j(null, V, {
        'url': A
      });
    }, G && (A = A["split"]('?')[0]), A += (~A['indexOf']('?') ? '&' : '?') + k(G) + '&' + N + '=' + q(O), A = A['replace']('?&', '?'), K = document["createElement"]("script"), K["type"] = "text/javascript", K["src"] = A, S['parentNode']["insertBefore"](K, S), Q;
  }
  var P = 'function' == typeof Symbol && 'symbol' == typeof Symbol["iterator"] ? function (A) {
      return typeof A;
    } : function (A) {
      return A && 'function' == typeof Symbol && A["constructor"] === Symbol && A !== Symbol["prototype"] ? "symbol" : typeof A;
    },
    z = 0;
  a["exports"] = R;
}, function (a, W) {
  function U(R) {
    if (!R) return {};
    var P = document["createElement"]('a');
    return P['href'] = R, {
      'source': R,
      'protocol': P['protocol']["replace"](':', ''),
      'host': P["hostname"],
      'port': P['port'],
      'query': P["search"],
      'hash': P["hash"]["replace"]('#', ''),
      'path': P["pathname"]['replace'](/^([^\/])/, '/$1'),
      'segments': P['pathname']["replace"](/^\//, '')["split"]('/')
    };
  }
  a["exports"] = U;
}, function (a, W, U) {
  var R = U(20),
    P = U(3),
    z = U(13),
    A = R({
      'initialize': function (G) {
        var EF = M;
        this["state"] = G["state"], this['_committing'] = !1, this['_subscribers'] = [];
        var j = this,
          L = this["dispatch"],
          E = this["commit"];
        this["dispatch"] = function (Q, k, l) {
          return L["call"](j, Q, k, l);
        }, this["commit"] = function (Q, k) {
          return E["call"](j, Q, k);
        }, this["registerMutations"](G['mutations']), this['registerActions'](G["actions"]);
      },
      'registerMutations': function (G) {
        this["_mutations"] = Object["assign"](this["_mutations"] || {}, G);
      },
      'registerActions': function (G) {
        this["_actions"] = Object["assign"](this["_actions"] || {}, G);
      },
      'commit': function (G, j) {
        var EY = M,
          L = this,
          E = {
            'type': G,
            'payload': j
          },
          Q = this["_mutations"][G];
        return Q ? (this["_withCommit"](function () {
          Q(L["state"], j);
        }), void this['_subscribers']["map"](function (k) {
          return k(E, L["state"]);
        })) : void P["error"]("[Store] unknown mutation type: " + G);
      },
      '_withCommit': function (G) {
        var j = this["_committing"];
        this["_committing"] = !0, G(), this["_committing"] = j;
      },
      'dispatch': function (G, j, L) {
        var E = this['_actions'][G];
        if (!E) return void P['error']("[Store] unknown action type: " + G);
        var Q = {
          'state': this["state"],
          'commit': this['commit'],
          'dispatch': this['dispatch']
        };
        return z["resolve"](E(Q, j, L));
      },
      'subscribe': function (G) {
        var EI = M,
          j = this["_subscribers"];
        return j['indexOf'](G) < 0 && j["push"](G), function () {
          var L = j["indexOf"](G);
          L > -1 && j["splice"](L, 1);
        };
      },
      'replaceState': function () {
        var G = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this["state"] = G;
      }
    });
  a["exports"] = A;
}, function (W, U) {
  function R(X) {
    if (Array["isArray"](X)) {
      for (var T = 0, m = Array(X["length"]); T < X["length"]; T++) m[T] = X[T];
      return m;
    }
    return Array['from'](X);
  }
  function P(X) {
    for (var T = [], m = X["length"], O = 0; O < m; O++) T["indexOf"](X[O]) === -1 && T["push"](X[O]);
    return T;
  }
  function z(X) {
    for (var T = 0, m = X["length"], O = 0; O < m; O++) T += X[O];
    return T / m;
  }
  function A(X) {
    for (var T = z(X), m = X["length"], O = [], N = 0; N < m; N++) {
      var J = X[N] - T;
      O['push'](Math['pow'](J, 2));
    }
    for (var q = 0, S = 0; S < O["length"]; S++) O[S] && (q += O[S]);
    return Math["sqrt"](q / m);
  }
  function G(X) {
    return parseFloat(X["toFixed"](4));
  }
  function j(X, T) {
    var m = X["sort"](function (q, S) {
      return q - S;
    });
    if (T <= 0) return m[0];
    if (T >= 100) return m[m['length'] - 1];
    var O = Math["floor"]((m["length"] - 1) * (T / 100)),
      N = m[O],
      J = m[O + 1];
    return N + (J - N) * ((m["length"] - 1) * (T / 100) - O);
  }
  function L(X, T) {
    for (var m = [], O = [], N = 0; N < X["length"] - 1; N++) m["push"](X[N + 1] - X[N]), O["push"](T[N + 1] - T[N]);
    for (var J = [], q = 0; q < O["length"]; q++) J["push"](O[q] / m[q]);
    return J;
  }
  function E() {
    var X = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      T = [],
      m = [],
      O = [];
    if (!Array["isArray"](X) || X["length"] <= 2) return [T, m, O];
    for (var N = 0; N < X["length"]; N++) {
      var J = X[N];
      T["push"](J[0]), m['push'](J[1]), O["push"](J[2]);
    }
    return [T, m, O];
  }
  function Q(X, T, m) {
    for (var O = L(m, X), N = L(m, T), J = [], q = 0; q < X['length']; q++) {
      var S = Math["sqrt"](Math['pow'](X[q], 2) + Math["pow"](T[q], 2));
      J["push"](S);
    }
    var V = L(m, J);
    return [O, N, V];
  }
  function k(X, T, m, O) {
    var N = O["slice"](0, -1),
      J = L(N, X),
      q = L(N, T),
      S = L(N, m);
    return [J, q, S];
  }
  function h() {
    var C0 = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (!Array["isArray"](C0) || C0['length'] <= 2) return [];
    var C1 = E(C0),
      C2 = K(C1, 3),
      C3 = C2[0],
      C4 = C2[1],
      C5 = C2[2],
      C6 = Q(C3, C4, C5),
      C7 = K(C6, 3),
      C8 = C7[0],
      C9 = C7[1],
      CC = C7[2],
      CM = k(C8, C9, CC, C5),
      Ca = K(CM, 3),
      CW = Ca[0],
      CU = Ca[1],
      CR = Ca[2],
      CP = P(C3)["length"],
      Cz = P(C4)['length'],
      CA = G(z(C4)),
      CG = G(A(C4)),
      Cj = C3["length"],
      CL = G(Math["min"]["apply"](Math, R(C8))),
      CE = G(Math["max"]['apply'](Math, R(C8))),
      CQ = G(z(C8)),
      Ck = G(A(C8)),
      Cl = P(C8)["length"],
      Ch = G(j(C8, 25)),
      CK = G(j(C8, 75)),
      Cu = G(Math['min']['apply'](Math, R(C9))),
      CX = G(Math["max"]["apply"](Math, R(C9))),
      CT = G(z(C9)),
      Cs = G(A(C9)),
      Cm = P(C9)["length"],
      Cp = G(j(C9, 25)),
      CO = G(j(C9, 75)),
      CN = G(Math["min"]["apply"](Math, R(CC))),
      Ct = G(Math["max"]["apply"](Math, R(CC))),
      CJ = G(z(CC)),
      Cq = G(A(CC)),
      CS = P(CC)['length'],
      CV = G(j(CC, 25)),
      Cy = G(j(CC, 75)),
      Cn = G(Math['min']['apply'](Math, R(CW))),
      Ce = G(Math["max"]['apply'](Math, R(CW))),
      Ci = G(z(CW)),
      Cx = G(A(CW)),
      CF = P(CW)["length"],
      Cb = G(j(CW, 25)),
      Cc = G(j(CW, 75)),
      Cv = G(Math["min"]["apply"](Math, R(CU))),
      Cf = G(Math['max']["apply"](Math, R(CU))),
      CY = G(z(CU)),
      Cw = G(A(CU)),
      CD = P(CU)['length'],
      CB = G(j(CU, 25)),
      Co = G(j(CU, 75)),
      CI = G(Math["min"]['apply'](Math, R(CR))),
      Cr = G(Math['max']["apply"](Math, R(CR))),
      CZ = G(z(CR)),
      CH = G(A(CR)),
      Cd = P(CR)["length"],
      Cg = G(j(CR, 25)),
      M0 = G(j(CR, 75));
    return [CP, Cz, CA, CG, Cj, CL, CE, CQ, Ck, Cl, Ch, CK, Cu, CX, CT, Cs, Cm, Cp, CO, CN, Ct, CJ, Cq, CS, CV, Cy, Cn, Ce, Ci, Cx, CF, Cb, Cc, Cv, Cf, CY, Cw, CD, CB, Co, CI, Cr, CZ, CH, Cd, Cg, M0];
  }
  var K = function () {
    function X(T, m) {
      var O = [],
        N = !0,
        J = !1,
        q = void 0;
      try {
        for (var S, V = T[Symbol["iterator"]](); !(N = (S = V["next"]())['done']) && (O["push"](S["value"]), !m || O["length"] !== m); N = !0);
      } catch (x) {
        J = !0, q = x;
      } finally {
        try {
          !N && V["return"] && V["return"]();
        } finally {
          if (J) throw q;
        }
      }
      return O;
    }
    return function (T, m) {
      if (Array["isArray"](T)) return T;
      if (Symbol["iterator"] in Object(T)) return X(T, m);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  W["exports"] = h;
}, function (a, W) {
  a["exports"] = {
    'zh-CN': {
      'loading': "\u52A0\u8F7D\u4E2D...",
      'loadfail': '加载失败',
      'verifySuccess': "\u9A8C\u8BC1\u6210\u529F",
      'verifyError': "\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",
      'verifyOutOfLimit': "\u5931\u8D25\u8FC7\u591A\uFF0C\u70B9\u6B64\u91CD\u8BD5",
      'clickButton': "\u70B9\u6B64\u8FDB\u884C\u9A8C\u8BC1",
      'clickInTurn': '请依次点击',
      'clickOverlapWord': "\u8BF7\u70B9\u51FB\u4E24\u4E0B\u201C\u53E0\u52A0\u7684\u6587\u5B57\u201D\uFF0C\u7EC4\u6210\u6210\u8BED",
      'dragToAvoidObstacle': "\u62D6\u52A8\u5DE6\u4E0B\u767D\u8272\u6392\u7403\uFF0C\u8EB2\u907F\u969C\u788D\u51FB\u4E2D",
      'clickWordInTurn': '请按语序依次点击文字',
      'slideTip': "\u5411\u53F3\u62D6\u52A8\u6ED1\u5757\u586B\u5145\u62FC\u56FE",
      'inferenceTip': "\u62D6\u52A8\u4EA4\u63622\u4E2A\u56FE\u5757\u590D\u539F\u56FE\u7247",
      'waitForSMS': '等待短信验证，剩余',
      'popupTitle': "\u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",
      'refresh': '刷新',
      'feedback': "\u63D0\u4EA4\u4F7F\u7528\u95EE\u9898\u53CD\u9988",
      'switchToVoice': "\u5207\u6362\u81F3\u8BED\u97F3\u9A8C\u8BC1\u7801",
      'playVoice': "\u64AD\u653E\u8BED\u97F3\u9A8C\u8BC1\u7801",
      'back': '返回',
      'enterCode': '请输入听到的内容',
      'check': '验证',
      'close': '关闭',
      'notSupportVoice': "\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u8BED\u97F3\u9A8C\u8BC1\u7801",
      'intellisense': {
        'normal': "\u70B9\u51FB\u5B8C\u6210\u9A8C\u8BC1",
        'checking': "\u5B89\u5168\u68C0\u6D4B\u4E2D",
        'loading': "\u6B63\u5728\u52A0\u8F7D\u9A8C\u8BC1",
        'loadfail': "\u52A0\u8F7D\u5931\u8D25",
        'loaddone': "\u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",
        'longtap': "\u53CC\u51FB\u540E\u957F\u63090.5\u79D2\u5B8C\u6210\u9A8C\u8BC1"
      },
      'sms': {
        'scanQrToSMS': "\u626B\u63CF\u4E8C\u7EF4\u7801\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        'noScanQr': '无法扫描二维码',
        'manualSMS': '手动发送验证短信',
        'clickToSMS': "\u70B9\u51FB\u6309\u94AE\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        'editSMS': "\u7F16\u8F91\u77ED\u4FE1",
        'sendSMSTo': "\u53D1\u9001\u81F3",
        'or': '或',
        'toSMS': "\u53BB\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        'cannotJump': "\u65E0\u6CD5\u8DF3\u8F6C"
      }
    },
    'en-US': {
      'loading': 'loading...',
      'loadfail': "Load failed",
      'verifySuccess': "verify success",
      'verifyError': "verify failed",
      'verifyOutOfLimit': "Verify failed. Please retry",
      'clickButton': "Click here to verify",
      'clickInTurn': "click in turn",
      'clickOverlapWord': "\u8BF7\u70B9\u51FB\u4E24\u4E0B\u201C\u53E0\u52A0\u7684\u6587\u5B57\u201D\uFF0C\u7EC4\u6210\u6210\u8BED",
      'dragToAvoidObstacle': 'Drag\x20the\x20lower\x20left\x20white\x20ball\x20to\x20avoid\x20obstacles\x20and\x20hit',
      'clickWordInTurn': 'Please\x20click\x20on\x20the\x20text\x20in\x20order',
      'slideTip': "Slide to complete the image",
      'inferenceTip': "swap 2 tiles to restore the image",
      'waitForSMS': 'waiting\x20for\x20SMS，remaining',
      'popupTitle': "Please complete verification",
      'refresh': "Refresh",
      'feedback': "Submit feedback on usage problems",
      'switchToVoice': "Switch to voice verification",
      'playVoice': "Play voice verification code",
      'back': 'return',
      'enterCode': 'Enter\x20the\x20verification\x20code\x20you\x20hear',
      'check': "verification",
      'close': "close",
      'notSupportVoice': 'Your\x20browser\x20version\x20is\x20too\x20low\x20to\x20support\x20voice\x20verification\x20codes',
      'intellisense': {
        'normal': "Click the button to verify",
        'checking': "verifying...",
        'loading': 'loading...',
        'loadfail': 'Load\x20failed',
        'loaddone': "Please complete verification",
        'longtap': "Double click and press for 0.5 seconds to complete the verification"
      },
      'sms': {
        'scanQrToSMS': 'Scan\x20QR\x20code\x20to\x20send\x20verification\x20SMS',
        'noScanQr': "Unable to scan QR code",
        'manualSMS': "send a verification SMS manually",
        'clickToSMS': "Click the button to send verification SMS",
        'editSMS': "Edit SMS",
        'sendSMSTo': "Send to",
        'or': 'or',
        'toSMS': 'send\x20a\x20verification\x20SMS',
        'cannotJump': "cannot jump to SMS"
      }
    },
    'en-GB': {
      'loading': "loading...",
      'loadfail': "Load failed",
      'verifySuccess': "verify success",
      'verifyError': "verify failed",
      'verifyOutOfLimit': "Verify failed. Please retry",
      'clickButton': "Click here to verify",
      'clickInTurn': "click in turn",
      'clickOverlapWord': "\u8BF7\u70B9\u51FB\u4E24\u4E0B\u201C\u53E0\u52A0\u7684\u6587\u5B57\u201D\uFF0C\u7EC4\u6210\u6210\u8BED",
      'dragToAvoidObstacle': "Drag the lower left white ball to avoid obstacles and hit",
      'clickWordInTurn': "Please click on the text in order",
      'slideTip': "Drag the pieces atop one another",
      'inferenceTip': "swap 2 tiles to restore the image",
      'waitForSMS': 'waiting\x20for\x20SMS，remaining',
      'popupTitle': "Please complete verification",
      'refresh': "Refresh",
      'feedback': 'Submit\x20feedback\x20on\x20usage\x20problems',
      'switchToVoice': "Switch to voice verification",
      'playVoice': "Play voice verification code",
      'back': "return",
      'enterCode': "Enter the verification code you hear",
      'check': "verification",
      'close': "close",
      'notSupportVoice': "Your browser version is too low to support voice verification codes",
      'intellisense': {
        'normal': "Click the button to verify",
        'checking': "verifying...",
        'loading': "loading...",
        'loadfail': 'Load\x20failed',
        'loaddone': "Please complete verification",
        'longtap': "Double click and press for 0.5 seconds to complete the verification"
      },
      'sms': {
        'scanQrToSMS': "Scan QR code to send verification SMS",
        'noScanQr': "Unable to scan QR code",
        'manualSMS': "send a verification SMS manually",
        'clickToSMS': "Click the button to send verification SMS",
        'editSMS': "Edit SMS",
        'sendSMSTo': "Send to",
        'or': 'or',
        'toSMS': "send a verification SMS",
        'cannotJump': 'cannot\x20jump\x20to\x20SMS'
      }
    }
  };
}, function (W, U, R) {
  function P(T, m, O) {
    var N = void 0,
      J = void 0,
      q = void 0,
      S = [];
    switch (T["length"]) {
      case 1:
        N = T[0], J = q = 0, S["push"](m[N >>> 2 & 63], m[(N << 4 & 48) + (J >>> 4 & 15)], O, O);
        break;
      case 2:
        N = T[0], J = T[1], q = 0, S["push"](m[N >>> 2 & 63], m[(N << 4 & 48) + (J >>> 4 & 15)], m[(J << 2 & 60) + (q >>> 6 & 3)], O);
        break;
      case 3:
        N = T[0], J = T[1], q = T[2], S["push"](m[N >>> 2 & 63], m[(N << 4 & 48) + (J >>> 4 & 15)], m[(J << 2 & 60) + (q >>> 6 & 3)], m[63 & q]);
        break;
      default:
        return '';
    }
    return S["join"]('');
  }
  function z(T, m, O) {
    if (!T || 0 === T["length"]) return '';
    try {
      for (var N = 0, J = []; N < T["length"];) {
        if (!(N + 3 <= T['length'])) {
          var q = T["slice"](N);
          J["push"](P(q, m, O));
          break;
        }
        var S = T["slice"](N, N + 3);
        J["push"](P(S, m, O)), N += 3;
      }
      return J['join']('');
    } catch (V) {
      console.log(V);
      
      return '';
    }
  }
  function A(T) {
    var m = [];
    switch (T["length"]) {
      case 2:
        m["push"](k((T[0] << 2 & 255) + (T[1] >>> 4 & 3)));
        break;
      case 3:
        m["push"](k((T[0] << 2 & 255) + (T[1] >>> 4 & 3))), m["push"](k((T[1] << 4 & 255) + (T[2] >>> 2 & 15)));
        break;
      case 4:
        m["push"](k((T[0] << 2 & 255) + (T[1] >>> 4 & 3))), m['push'](k((T[1] << 4 & 255) + (T[2] >>> 2 & 15))), m["push"](k((T[2] << 6 & 255) + (63 & T[3])));
    }
    return m;
  }
  function G(T, m, O) {
    for (var N = function (v) {
        return m['indexOf'](v);
      }, J = 0, q = [], S = T["indexOf"](O), V = S !== -1 ? T['substring'](0, S)["split"]('') : T["split"](''), x = V["length"]; J < x;) {
      if (!(J + 4 <= x)) {
        var F = V["slice"](J)["map"](N);
        q = q["concat"](A(F));
        break;
      }
      var b = V["slice"](J, J + 4)["map"](N);
      q = q['concat'](A(b)), J += 4;
    }
    return q;
  }
  function j(T) {
    var m = ['i', '/', 'x', '1', 'X', 'g', 'U', '0', 'z', '7', 'k', '8', 'N', '+', 'l', 'C', 'p', 'O', 'n', 'P', 'r', 'v', '6', '\x5c', 'q', 'u', '2', 'G', 'j', '9', 'H', 'R', 'c', 'w', 'T', 'Y', 'Z', '4', 'b', 'f', 'S', 'J', 'B', 'h', 'a', 'W', 's', 't', 'A', 'e', 'o', 'M', 'I', 'E', 'Q', '5', 'm', 'D', 'd', 'V', 'F', 'L', 'K', 'y'],
      O = '3';
    return z(T, m, O);
  }
  function L(T) {
    var m = ['i', '/', 'x', '1', 'X', 'g', 'U', '0', 'z', '7', 'k', '8', 'N', '+', 'l', 'C', 'p', 'O', 'n', 'P', 'r', 'v', '6', '\x5c', 'q', 'u', '2', 'G', 'j', '9', 'H', 'R', 'c', 'w', 'T', 'Y', 'Z', '4', 'b', 'f', 'S', 'J', 'B', 'h', 'a', 'W', 's', 't', 'A', 'e', 'o', 'M', 'I', 'E', 'Q', '5', 'm', 'D', 'd', 'V', 'F', 'L', 'K', 'y'],
      O = '3';
    return G(T, m, O);
  }
  function E(T, m, O) {
    var N = void 0 !== m && null !== m ? m : K,
      J = void 0 !== O && null !== O ? O : X;
    return z(T, N["split"](''), J);
  }
  var Q = R(25),
    k = Q["toByte"],
    h = R(26),
    K = h["__BASE64_ALPHABET__"],
    X = h["__BASE64_PADDING__"];
  U["base64EncodePrivate"] = E, U['base64Encode'] = j, U["base64Decode"] = L;
}, function (a, W) {
  'use strict';

  var QG = MF;
  var U = "function" == typeof Symbol && 'symbol' == typeof Symbol["iterator"] ? function (R) {
    return typeof R;
  } : function (R) {
    return R && "function" == typeof Symbol && R["constructor"] === Symbol && R !== Symbol["prototype"] ? "symbol" : typeof R;
  };
  !function () {
    function R() {
      var QL = M,
        L = '2izvR3Ydkgw605lf'["split"]('');
      this['m'] = function (E) {
        if (null == E || void 0 == E) return E;
        if (0 != E["length"] % 2) throw Error('1100');
        for (var Q = [], k = 0; k < E["length"]; k++) {
          0 == k % 2 && Q["push"]('%');
          for (var l = L, h = 0; h < l["length"]; h++) if (E['charAt'](k) == l[h]) {
            Q["push"](h["toString"](16));
            break;
          }
        }
        return decodeURIComponent(Q["join"](''));
      }, this['f'] = function (E) {
        if (null == E || void 0 == E) return E;
        if (0 != E["length"] % 2) throw Error('1100');
        for (var Q = [], k = 0; k < E["length"]; k++) {
          0 == k % 2 && Q["push"]('%');
          for (var l = L, h = 0; h < l['length']; h++) if (E["charAt"](k) == l[h]) {
            Q['push'](h["toString"](16));
            break;
          }
        }
        return decodeURIComponent(Q['join'](''));
      };
    }
    var P = new R()['f'],
      z = new R()['m'],
      A = new R()['f'],
      G = new R()['f'],
      j = new R()['f'];
    !function () {
      var L = [G(''), A("RddzYidg3RY3dkdR"), G("d2YidzY3YldR"), G("l36g60l3g0kY"), G('d2Y0d3YdYgYldv'), j("RiYRYfYzY3R3dkR5YiYlRRY3dRY3YvdR"), j("v2v2viv2"), z("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3YdYgYl"), A("3YY3Y3dRY0Y3z23R3Yz2RvYfdzY3"), j('v2v2v2vd'), z("v2v2v2vR"), P("v2v2v2vz"), z("v2v2v2vv"), j("v2v2v2v2"), A("v2v2v2vi"), G("33YlYgdRdgz232Y0YidgY3dz"), P("3vY6dgd2Y3z23dY3Yzz232Y0d3YdYgYl"), j("3dY3YzR6YgdRz5YgYldRY3YddzYgY3dzdRY3z232RRRY"), G('YdYRdkYgYRd2dgYkdkYRR3'), A('RzY3Y0Y0z2R53R'), P("v2v2v2vk"), G("YdY3dR3vd3d2d2YfdzdRY3YRR3dkdRY3YldvYgYfYldv"), j("v2v2v2vg"), A("3vYiYYY33vY3YidzYvYk"), z('dvY3dR3RYgY5Y3'), P("Yid2d2Y3YlYRRvYkYgY0YR"), j('zz'), P('zR'), z("33YlYgdYY3dzdv"), j('z3'), G('zY'), j('zd'), A("viviviv2"), A("YdY3dRz2d2Y0d3YdYgYlz2dvdRdzYgYlYdz2Y3dkYvY3d2dRYgYfYl"), P('3RYkdzY3Y3RR3vYkYiYRYfdd'), G('z6'), P('z0'), z('z5'), A("RidzYiYz"), P("lkk66glYglg0lR6k65ld66kYl3wlk6"), G('zl'), j('RY333wR33vYkYidzY3'), z('zf'), A('v2'), G('vi'), A('vz'), G('vv'), z('vR'), A('lR666fl3wlk63fRdRzvzvvvivz'), A('v3'), j('vY'), P("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl3RY3dkdR"), P('vd'), G('3dR3Rz3wR3Rlz2RzdzYfdddvY3dzz2R3dkdRY3YldvYgYfYl'), G('vk'), G('vg'), z("RRYgdY3kz2RzdzYfdddvY3dzz232Y0d3Ydz5RgYl"), P('vw'), P('v6'), A("33d2Y0Yidgz232Rv"), G('v5'), P('YvYiYldYYidvz2Y3dkYvY3d2dRYgYfYl'), j('Ri'), P('Rz'), z('Rv'), A('RR'), z('R3'), G("l36lwllk65wflgg6k3lg66gi"), j('RY'), P("RkYidzdzYgYlYddRYfYl"), P('Rd'), A('Rk'), G('Rg'), z('Rw'), j('RdYlYfY5Y3z23vYkY3Y0Y0z2RgYldRY3YddzYidRYgYfYl'), z('R6'), j('R0'), j('R5'), j('Rl'), A('Rf'), P('32'), j('3i'), A('3z'), G('3v'), j("RlYgYiYdYidzYiz23vYfY0YgYR"), A('3R'), P('3vY3YYRvY0YgY3YldRz232Y0d3YdYgYl'), j('33'), G('3Y'), j("vivivivi"), j('3d'), j('3k'), G('3g'), A('3w'), z("RdYfd3YRdgz2RfY0YRz23vdRdgY0Y3"), z('30'), j("3zYfYzY0Yfdkz2R0Yid3YlYvYkY3dzz232Y0d3YdYgYl"), j("R5YgYvdzYfdvYfYYdRz2RfYYYYYgYvY3z2vzv2vivv"), P("3i3iR5d3dvYgYv"), P('Yi'), G("R3d3dzYfdvdRYgY0Y3"), A('Yz'), j("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0zlvi"), z('Yv'), G("3vYvdzYgd2dRYgYlYdzlRRYgYvdRYgYfYlYidzdg"), j('YR'), z("lR666fl3wlk6"), P('Y3'), z('YY'), P('Yd'), j('Yk'), j("R5Yiz5RvYfYlYYYgYdzlYvYfY5z2d2Y0d3YdYgYl"), z('Yg'), j('viv2viv2'), P('RvYidvd3YiY0'), A('Yw'), z('Y6'), j('Y0'), j('Y5'), A('Yl'), G('Yf'), P('d2'), G("viv2v2vk"), A("YRYfRlYfdR3RdzYiYvY6"), G('di'), P("YvdR"), z("lR6k65l3wlk6z232dzYf"), P('dz'), j("dvY3dR3RYgY5Y3Yfd3dR"), z('RdYgdvYkYi'), P("YdY3dR3RYgY5Y3dwYfYlY3RfYYYYdvY3dR"), j('dv'), z("viv2v2v3"), G("viv2v2vR"), G('dR'), A("viv2v2vv"), z('d3'), j('dY'), j("viv2v2vi"), G('dd'), j('dk'), P("YRdzYiddRidzdzYidgdv"), G('dg'), j('dw'), G('d6'), P('d5'), j('dl'), P("YYYfYldR"), P("viv2v2vg"), G('dvd3YYYYYgdkY3dv'), P("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2Y3dkd2YgdzY3dvv5"), A("3vYkY3Y0Y0zl33RgRkY3Y0d2Y3dz"), A('dRYfRRYidRYi333zR0'), j("3dYgYlYRYfdd3RY3dkdR"), A("Y0YiYlYdd3YiYdY3"), A("lR6k65lg66giz232dzYf"), j("YRYf"), j("RkYgYdYkY0YgYdYkdR3RY3dkdR"), G("YRYgdY"), P("R5Y3Yld33RY3dkdR"), G("RiRfR0z2R5Y3YRYgYiz232Y0YidgYzYiYvY6z232Y0d3YdYgYl"), P('RvYgdRdzYgdkz2YfYlY0YgYlY3z2d2Y0d3Ydz5YgYl'), j("Y3Yv"), z("RRY3dvYRY3Y5YfYlYi"), A('RgYlYiYvdRYgdYY3RzYfdzYRY3dz'), A("3zY3YiY032Y0YidgY3dz"), j("z0z2zdYvYfYRY3zdvw"), z("RkR3R0R0Rf"), z("Yld23RYfYlYdYzd3RiYRYRYgYl"), z('Y3Y5'), z("YvdzY3YidRY3R3Y0Y3Y5Y3YldR"), A("d2YkYiYldRYfY5"), A("R53vz232R5YgYlYvYkYf"), A("lYw36dlR65gv"), A('Y3dYYiY0'), j('Y3dk'), G("RRYgdY3kz23YRfRRz2RkY3Y0d2Y3dzz232Y0d3Ydz5YgYl"), A('lYgY62ld66kYlYgkkllR65gv'), A("3id3YgYvY63RYgY5Y3RvYkY3YvY6RfYzYwY3YvdRzl3id3YgYvY63RYgY5Y3RvYkY3YvY6zlvi"), j('RYY0dgRfdzRRYgY3z2RdYiY5Y3dvz232Y0d3YdYgYl'), P('YidRdRYiYvYk3vYkYiYRY3dz'), A('32Y0YidgRfYlz232Y0d3Ydz5YgYl'), A("YdY3dR3RYgY5Y3"), j("vizlv2vi"), j("RzdzYfYiYRddYidg"), z("YYd2"), P('RiY0YiddYidzz2Rl32Ri32Rgz2d3dRYgY0dv'), j("RYYfdzdRY3"), j('YkYidvYkRvYfYRY3'), A("lYgY6glYw5wvl3wdgwlR65gv"), z("R33vRlz23vYfYlYidzz2Ri32Rg"), P("Rk32RRY3dRY3YvdR"), j("RzYgdRYRY3YYY3YlYRY3dzz23id3YgYvY63vYvYiYl"), A('RgR3z23RYiYzz2d2Y0d3YdYgYl'), A('Rzd3dRdRYfYlRYYiYvY3'), j("zdz0"), P('Yvd2d3RvY0Yidvdv'), G("Y5Y3dvdvYiYdY3"), z('RvY3YldRd3dzdgz2RdYfdRYkYgYv'), P("RfYlY0YgYlY3z23vdRYfdzYiYdY3z2d2Y0d3Ydz5YgYl"), z("3vYiYYY3dzz233d2YRYidRY3"), A("R5dvdkY5Y0vzzlRRRfR5RRYfYvd3Y5Y3YldR"), P("R3YlYddzYidYY3dzdvz2R53R"), z("3vYgY0dYY3dzY0YgYdYkdRz232Y0d3Ydz5RgYl"), P("RdYfYfYdY0Y3z2RdY3Yidzdvz2v2zlv3zlvvvvzlv2"), P("RvYgdRdzYgdkz2RgRvRiz2RvY0YgY3YldR"), A("YiY0d2YkYiYzY3dRYgYv"), A("YvYfYldRY3dkdR"), z("3YRRYfddYlY0YfYiYRY3dz"), A("l3k5kllYgYkdlYw36dlR65gv"), G("YidRdRdz3YY3dzdRY3dk"), j("l3wlk6lR65gv"), A("YvYfYfY6YgY3"), A("z3vzvz"), j("z3vzvY"), G("RvY3YldRYid3dz"), j("vRYdYiY5Y3"), j("3zYfYvY6ddY3Y0Y0"), P("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvYvi"), z('RfYvdRYfdvYkYid2Y3z23vdRdzY3YiY5YgYlYdz23vY3dzdYYgYvY3dv'), j('dRYfRdR53R3vdRdzYgYlYd'), A("dRYkv5zf"), z("3vd3Y5YidRdzYi32RRRYz2RzdzYfdddvY3dzz232Y0d3YdYgYl"), G('32RRRYzl32YRYYRvdRdzY0'), A('YYYgY0Y03vdRdgY0Y3'), j("YYYfYldR3vYgdwY3"), A("RiYRYfYzY3z2R5YgYlYdz23vdRYR"), z("YwY3"), z("3RYfdzYvYkRkY3Y0d2Y3dz"), G("RYdzYiYlY6Y0YgYlz2RdYfdRYkYgYvz2RkY3YidYdg"), A("l3k5kllYgYkdlR666fl3wlk6"), j("RkYidzY5YfYldgz232Y0d3Ydz5RgYl"), A("RdYgYdYg"), G("dYvizlvi"), G("R6YgYlYfz2R53R"), P("3vYgY5RkY3Yg"), G("RiY0Yg3v3vRfR0YfYdYgYlz2d2Y0d3YdYgYl"), z("3zY3YiY032Y0YidgY3dzzl3zY3YiY032Y0YidgY3dzzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), G("3gYiYlYRY3dkz232RRRYz23YYgY3ddY3dz"), G('RvYgdRdzYgdkz23zY3YvY3YgdYY3dzz232Y0d3Ydz5YgYl'), A("dRYfd2"), G("Y5YiYg"), z("RiYvdzYf32RRRYzl32RRRY"), P("YvYiYldYYidvz2Yid2Ygz2Y3dkYvY3d2dRYgYfYl"), P('RgYlYiYvdRYgdYY3RvYid2dRYgYfYl'), G("R5Y3Yld3"), A("d2dzY3YvYgdvYgYfYlz2Y5Y3YRYgd3Y5d2z2YYY0YfYidRv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2YdY03fRYdzYiYdRvYfY0Yfdzz2v5z2dYY3YvvRzkdYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z0z2v2z0z2vizgv6z2d5"), z("3i3ivzv2vivvz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), G("RdYfYfYdY0Y3z233d2YRYidRY3"), G("l3k5kllYgYkdl365wglR6wgi"), G('Y3R5d3dvYgYv32Y0d3YdYgYlz2RRR0R5vY'), P("3dY3Yzz2RvYfY5d2YfYlY3YldRdv"), j('RzYiYzdgY0YfYlz23RYfYfY0RzYidz'), P("RvYfYfddYfYlz233d2YRYidRY3"), z("RgYlYYYf3RY3dkdR"), z("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0"), P("YgR5Y3dvYkz2d2Y0d3YdYgYl"), A('3zY3YiY0RRYfddYlY0YfYiYRY3dzz232Y0d3YdYgYl'), z('3vdgY5YiYldRY3Yvz232R6Rgz2RvY0YgY3YldR'), j("3fd2YkYiYldRYfY5"), P("RdRRR0z2RfYzYwY3YvdRz23dY3Yzz232Y0d3Ydz5YgYlz2vivYzlv2v2"), A("ddY3YzYdY0"), z("l3k5kllYgYkdl3wlk6lR65gv"), P('dvYvdzY3Y3Yl'), A("YzYfYRdg"), P("3R3zRgRiRlRdR0R33f3v3R3zRg32"), G("3RY0ddYdR5YfYlYf"), j('Ylv5'), G("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvvv3"), P("zdvwzd"), G('YYd3YlYvdRYgYfYl'), z("YvYfYldRY3dkdRzlYkYidvYkRvYfYRY3"), G("RidzYvYkYgRvRiRR"), j("3YR33z3RR33k3f3vRkRiRRR33z"), j("33Yzd3YldRd3"), P("RYYiYvY3YzYfYfY6z232Y0d3YdYgYl"), P("RiYvdRYgdYY3RvYid2dRYgYfYl"), j('ld66kYlYgkkllR65gv'), z("R5YiY0Ydd3Ylz2RdYfdRYkYgYv"), z('RlY3dddvz2RdYfdRYkYgYvz2R53R'), z('RvYid2dRYgYfYl3RY3dkdR'), A("Yi3wYz3gv2Yv3kYR3dviY33YYYvz33Ydvv3RYkvR3vYg3zv3Yw3iY6vY32Y0RfvdY5RlYlvkR5YfR0vgd2R6diRwdzRgdvRkdRRdd3RYdYR3ddRRdkRvdgRzdwRi"), z('RRY3YwYi3Yd3z2R0RdRvz23vYiYldvz2R5YfYlYf'), z("RvYfd2d2Y3dzd2Y0YidRY3z2RdYfdRYkYgYvz2R0YgYdYkdR"), z('3vY3YdYfY3z232dzYgYldR'), j("3vYiddYidvYRY3Y3"), G("RzYid3YkYid3dvz2vgvv"), z("RvYkYiY0Y6YRd3dvdRY3dz"), G("RiYzYiYRYgz2R53Rz2RvYfYlYRY3YldvY3YRz2R0YgYdYkdR"), z("R0d3YvYgYRYiz2RzdzYgYdYkdR"), A('3dYgYRY3z2R0YidRYgYl'), j("YYYfYldRz2YRY3dRY3YvdRz2Y3dzdzYfdz"), P('R6Yfdwd3Y6Yiz2RdYfdRYkYgYvz232dzvYRl'), G('RkdRY5Y0v3z2Y0YfYvYidRYgYfYlz2d2dzYfdYYgYRY3dz'), P('RRYgdY3kz232Y0d3dvz23dY3Yzz232Y0YidgY3dz'), z("3YY0YiYRYgY5Ygdzz23vYvdzYgd2dR"), G('RYYgY0Y3z2RRYfddYlY0YfYiYRY3dzz232Y0d3Ydz5YgYl'), j("YfYz"), z("RiYRYfYRYzzl3vdRdzY3YiY5"), P('R5Y3YlY0Yf'), z('YvYiY0Y032YkYiYldRYfY5'), z('3dYfY0YYdzYiY5z2R5YidRYkY3Y5YidRYgYvYi'), j('RvYidRYiY0YgYlYiRddzYfd3d2z233d2YRYidRY3'), A('R3dzYidvz2RzYfY0YRz2Rg3RRv'), P('RRY3dYYiY03Y3z3kRvdRdzY0zlRRY3dYYiY03Y3z3kRvdRdzY0zlvi'), j("l3k5kllYgYkdld66kYlg66gi"), A("YiYRYRRzY3YkYidYYgYfdz"), j("d2Yi"), z('RzYgdRdvdRdzY3YiY5z23YY3dzYiz23vY3dzYgYY'), j("zkYYd3YlYvdRYgYfYlzkzgd6dzY3dRd3dzYlz2vivzvvv6d5zgzkzgv6"), P("d2Yg"), A('3RY3YlYvY3YldRz2RY3RRlz2d2Y0d3Ydz5YgYl'), A("dzY3Y5YfdYY3RvYkYgY0YR"), j("RYYfY0dkz2vvz2RzdzYfdddvY3dzz232Y0d3YdYgYl"), A("d3dvY332dzYfYddzYiY5"), P('YkYfdvdRYlYiY5Y3'), P('d2YkYiYldRYfY5zlYgYlYwY3YvdRRwdv'), G("3vYkYfYvY6ddYidYY3RYY0YidvYkzl3vYkYfYvY6ddYidYY3RYY0YidvYk"), A("YkY3YgYdYkdR"), G('dzYdYzYizkviv2vzz0z2vzv2vRz0z2v2z0z2v2zlvdzg'), P("RiYRYzY0YfYvY632Y0d3YdYgYl"), z("RzYiYvY6YddzYfd3YlYR"), j("RiYdRvYfYldRdzYfY0zlRiYdRvYfYldRdzYfY0"), A("32YkYfdRYfRvY3YldRY3dz32Y0d3YdYgYlvizlvizlvzzlvz"), z('Rdd3YlYd3vY3Yf'), z('dvv5'), A("YRY3YvYfYRY3333zRg"), P("lYgY6glYw5wvlkkkgzlR65gv"), j("l3k5kllYgYkdlYgY62lgw5kf"), z("vivzvv"), P("ddY3YzYdY0z2Y3dkYvY3d2dRYgYfYl"), j("dzY3"), G("3dR532Y0YidgY3dzzlRfRv3k"), j("vdvzd2dk"), z("Rid2d23dYfdzY6dvd2YiYvY3"), G("RkYgYdYkY0YgYdYkdR"), z('YRYfYvd3Y5Y3YldR'), G("3gYiYlYRY3dkz2R5Y3YRYgYiz232Y0d3YdYgYl"), G('R33vRlz2R0Yid3YlYvYkz2R5YfdwYgY0Y0Yiz232Y0d3YdYgYl'), j("vdv2d2dkz2zdRidzYgYiY0zd"), A("YgYlYwY3YvdRRwdv"), j("R0YfY5Yi"), z("RzYgdRRvYfY5Y3dRRiYdY3YldR"), z('RvYiY0YgYzdzYg'), j("RzYfYfY6Y5YiYlz2RfY0YRz23vdRdgY0Y3"), z('dvY3dvdvYgYfYl3vdRYfdzYiYdY3'), G("33dRYfd2YgYi"), P("YvYfY5d2YgY0Y33vYkYiYRY3dz"), P("Y3dvYvYid2Y3"), G("3vYvdzYfY0Y0YzYidz"), A("3dYgYlYRYfdd"), z('lggw6YlR6gwY'), A("R6Yidvd2Y3dzdvY6dgz232YidvdvddYfdzYRz2R5YiYlYiYdY3dz"), G("R5YgYlYdR0Yg33z5R3dkdRRz"), A('YdY3dRz2dvdgdvdRY3Y5z2YvYfY0Yfdzdvz2Y3dkYvY3d2dRYgYfYl'), P("3vY6dgd2Y3zlRRY3dRY3YvdRYgYfYl"), z("RYYgY0Y3R0YiYzz2d2Y0d3YdYgYl"), A("Yld2Ri32Rgz232Y0d3YdYgYl"), G("YlYfdR3fY3dkYgdvdR3fYkYfdvdR"), A("vzYR"), j('RiYvdRYgdYY33kRfYzYwY3YvdR'), j('RRYfdRd3Y5'), z("32RRRYz53kRvYkYiYlYdY3z23YYgY3ddY3dz"), G("YfYYYYdvY3dRRkY3YgYdYkdR"), j("32R5YgYlYdR0Yg33"), A('YvYfY0YfdzRRY3d2dRYk'), z('RlYfY6YgYiz23vd3YgdRY3z2R3YlYiYzY0Y3dzz232Y0d3YdYgYl'), z("3zY3YiY03YYgYRY3Yfzl3zY3YiY03YYgYRY3YfzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), G("R5YiYdYlY3dRYf"), P("RiYRYfYzY3R3dkR5YiYlRvRvRRY3dRY3YvdR"), G("RdYiYzdzYgYfY0Yi"), j("32Y0YidgYzYgY0Y0"), G("YlYidYYgYdYidRYfdz"), z("3zYiYvYkYiYlYi"), A("3Rddz2RvY3Ylz2R53Rz2RvYfYlYRY3YldvY3YRz2R3dkdRdzYiz2RzYfY0YR"), z("3i3iR5YgYlYgRRR0z232Y0d3YdYgYl"), j('zvYYvYv2'), j("YYYgY0Y03zY3YvdR"), P("RRY3YYYid3Y0dRz2RzdzYfdddvY3dzz2RkY3Y0d2Y3dz"), j("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2YRYfY5YiYgYlv5"), j("RYdzY3YlYvYkz23vYvdzYgd2dRz2R53R"), G("lYw2kdlYw36dlR65gv"), G("Y3YlYvYfYRY3333zRg"), z('33Y5d2d3dvYk'), j("YgYvd2"), z("l3k5kllYgYkdldg2w3ldkfk2"), P('YvdzY3YidRY332dzYfYddzYiY5'), j("Y5YfYlYfdvd2YiYvY3"), P("Rzd3dRdRYfYl3vYkYiYRYfdd"), A("RzYfYRYfYlYgz2R53R"), z("3v3RRi3RRgRv3fRR3zRi3d"), j("lg66gilR65gv"), j("YRYfddYlY0YfYiYR33d2YRYidRY3dz"), z('RiY0YgY3YRYgdRz232Y0d3Ydz5RgYl'), A("32RRRYz2YgYldRY3YddzYiYRYfz2YRYfz23dY3YzR6YgdR"), P("d3YlYgYYYfdzY5RfYYYYdvY3dR"), z("Y3YlYvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), A("32YgYvYidvYi"), A("RiYRYfYzY3z2RYYiYlYddvYfYlYdz23vdRYR"), G("YzYgYlYRRzd3YYYYY3dz"), j("Ri3YRdz23vYgdRY33vYiYYY3dRdgz2d2Y0d3YdYgYl"), A("RfdzYzYgdRz2RRYfddYlY0YfYiYRY3dz"), A("YvYfY0Yfdz"), z("YkYgYRYRY3Yl"), z('Y0YfYvYiY03vdRYfdzYiYdY3'), z("RdYfYfYdY0Y3z23RYiY0Y6z2R3YYYYY3YvdRdvz232Y0d3YdYgYl"), j('YRY3dvYvdzYgd2dRYgYfYl'), P("YgYlYRY3dkY3YRRRRz"), z("R0d3YvYgYRYiz2RYYidk"), z("RiY5YidwYfYlR532vvRRYfddYlY0YfYiYRY3dz32Y0d3YdYgYl"), j('YvdzY3YidRY3Rzd3YYYYY3dz'), G('RvYidvdRY3Y0Y0Yidz'), j("Y0YgYlY632dzYfYddzYiY5"), z("RvYiY0YgYYYfdzYlYgYiYlz2RYRz"), z("3RYkdzY3Y3RRRkYgYdYkY0YgYdYkdR"), P("YvdzY3YidRY33vYkYiYRY3dz"), A("Rdd3Y0YgY5"), j("RldgdkR0Yid3YlYvYkY3dz"), G("3gYfd33Rd3YzY3z232Y0d3Ydz5YgYl"), z("lYw36dlR65gv3fRdRzvzvvvivz"), z("3v3dRvdRY0zl3v3dRvdRY0"), A("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3Ydz5YgYl"), z("3i3iRRYfddYlY0YfYiYRz232Y0d3YdYgYl"), A("RlYfdzdRYfYlz2RgYRY3YldRYgdRdgz23vYiYYY3"), j("d2YidzdvY3RgYldR"), A("3vYgY5d2Y0Y3z232Yidvdv"), z('RvYfY0YfYlYlYiz2R53R'), z("dwYiY6Yf"), A("YdY3dR33YlYgYYYfdzY5R0YfYvYidRYgYfYl"), G("dvYkYiYRY3dz3vYfd3dzYvY3"), A("RRYfddYlY0YfYiYRY3dzdvz2d2Y0d3YdYgYl"), z("Y0YfYvYidRYgYfYl"), G('RkY3dzYfY3dvz2zYz2RdY3YlY3dzYiY0dvz2Y0YgdYY3'), P("ddYgYlYRYfdd"), G("3vYkYfddYvYidzYRz2RdYfdRYkYgYv"), P("l36lwllk65wflYw5wvlg66gilR65gv"), G("l3k5kllYgYkdlkwik0lYw36d"), j("RdYgYlYdY3dz"), j("3zYfYvY6R5Y3Y0dRz233d2YRYidRY3"), P("3dYgYlYRYfddRYdzYiY5Y3"), z("Y3YlYiYzY0Y33YY3dzdRY3dkRidRdRdzYgYzRidzdzYidg"), A("R6YiYvdvdRRfYlY3"), j('YidRdRdzYgYzd3dRY3z2dYY3Yvvzz2YidRdRdz3YY3dzdRY3dkv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2d3YlYgYYYfdzY5z2dYY3Yvvzz2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z2v5z2YidRdRdz3YY3dzdRY3dkz2z6z2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2z2z2YdY03f32YfdvYgdRYgYfYlz2v5z2dYY3YvvRzkYidRdRdz3YY3dzdRY3dkz0z2v2z0z2vizgv6z2d5'), z("32Y3dzd2Y3dRd3Yi"), j('Yfd2Y3YlRRYidRYiYzYidvY3'), A('YvYiYldYYidv'), j("YgRdY3dRdRY3dz3vYvdzYgd2dRYiYzY0Y332Y0d3YdYgYl"), j("RgYlYYYfdzY5YiY0z23zYfY5YiYl"), j("RlYgdRdzYfz232RRRYz232Y0d3Ydz5RgYl"), z("R5dvdkY5Y0vzzl3kR5R0Rk3R3R32"), j("l3k5kllYgYkdlg66gilR65gv"), A("Rl32R0YidvdR32Yidvdv"), j("3RYkdzY3Y3RRRYYiYvY3"), A("dvdRdgY0Y3"), G("R0YidvdR32Yidvdv"), z("vwvw"), A('d2YidzdvY3RYY0YfYidR'), z("l3k5kllYgYkdlggw6YlR6gwY"), P("v6z2"), G("YdY3dRRidRdRdzYgYzR0YfYvYidRYgYfYl"), P('d6zdYlYiY5Y3zdvw'), j("RldgYiY0Yi"), j('YlYfdR3fY3dkYgdvdR3fYkYfdvdRYlYiY5Y3'), A('30zd'), A("RdRYRiRvR3z232Y0d3YdYgYl"), G('d3YlYRY3YYYgYlY3YR'), z("lYgY62l3wlk6lR65gv"), j("30zl"), j("R5YidRd3dzYiz2R53Rz23vYvdzYgd2dRz2RvYid2YgdRYiY0dv"), G("RidzYgYiY0z2RzY0YiYvY6"), A("RYYiYlYd3vYfYlYd"), G("Y5ddRvz2YlY6YzYiYYYwYfdzYRz2d2YkdvYdY0dgz2Y3dkdYdRz2dwdiYgd3z0z2li65w2z2dRd2YkdvdRzfvwzfd3YkYzYddRYgYvzlY5YfzfY0Y3dYdYYi"), z("RzdzYiYdYdYiYRYfYvYgYf"), P("RkYidzY5YfYldgz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), P("32YiY0YiYvY3z23vYvdzYgd2dRz2R53R"), P("RlYidRYgdYY3z2RvY0YgY3YldR"), A("YfYYYYdvY3dR3dYgYRdRYk")],
        E = [G("d3dvY3dzRiYdY3YldR"), A("3id3YgYvY63RYgY5Y3zl3id3YgYvY63RYgY5Y3"), P("Y3dkd2Y3dzYgY5Y3YldRYiY0z5ddY3YzYdY0"), P("Ri3z3zRi3g3fRz33RYRYR33z"), A("lkk66glYglg0lR6k65lR6kw5lg66gi"), A('RiY0Ygd2Yidgz23vY3Yvd3dzYgdRdgz2RvYfYldRdzYfY0z2vv'), A('3vYvdzYgd2dRz2R53Rz2RzYfY0YR'), A('z0z2zdYzdzYfdddvY3dz32dzYfd2zdvw'), P("3RRRRvRvdRY0zl3RRRRvRvdRY0"), z("ddYgYRdRYk"), j("dvY3Y0YY"), P("RgYlYYYfRzYiYvY6YddzYfd3YlYR"), z("32YiYlYRYfz23dY3Yzz232Y0d3YdYgYl"), G("RkYiY3dRdRY3YldvYvYkddY3YgY0Y3dz"), P('dvd2YiYl'), P("YgYlYlY3dzRk3RR5R0"), j("RiYvdRYgdYY3RzYfdzYRY3dz"), z("3RYkdzY3Y3RRR0YgYdYkdR3vYkYiYRYfdd"), P('v2vzv2vz'), A("v2vzv2vv"), j("YYYfYldRRYYiY5YgY0dg"), P("v2vzv2v2"), G("v2vzv2vi"), A("3d32Rgz2RRY3dRY3YvdRYfdzz2vizlvR"), P("v6z2Y3dkd2YgdzY3dvv5"), A("3RYkdzY3Y3RRRRYidzY63vYkYiYRYfdd"), j("R3dkYgYYz2R3dYY3dzdgddYkY3dzY3"), P("RzYidRdRY0Y3Y0YfYdz2RdYiY5Y3z2R0Yid3YlYvYkY3dz"), j("RgY5d2YiYvdR"), A("3YR0Rvz2R5d3Y0dRYgY5Y3YRYgYiz232Y0d3YdYgYl"), z("RiYRYfYzY3z2RkY3YzdzY3dd"), A('RzY0d3Y33vdRYiYvY6dvz2RgYldvdRYiY0Y0z2RRY3dRY3YvdRYfdz'), P("ddddddY5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y0Y0Yg"), A("YkYgdvdRYfdzdg"), j("dvYiYldvz5dvY3dzYgYY"), G("vivRvdvvvivzv3v3vzvvvRYRvRvivRYvRYvgvivvv3vYYRvYvkvRR3vRR3vkRYv3RYv3vYYvvkYYviYzYv"), P('32Yid2dgdzd3dv'), A('Rzd3dRdRYfYl3RY3dkdR'), j("v2vzvivi"), A("Rid2d233d2"), z("32YidzYfY5zl3R3Yz2d2Y0YidgY3dzz2d2Y0d3YdYgYl"), G('RRY3YiY032Y0dgR0YgdYY3z233d2YRYidRY3'), P("R0YfYkYgdRz2Rdd3YwYidzYidRYg"), P("RY3zRiRdR5R3Rl3R3f3vRkRiRRR33z"), j("RiYdY3YlYvdgz2RYRz"), A("R5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dzzlR5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dz"), j("zvzvzv"), z("3dYfdzYRRvYid2dRd3dzY33k"), P("YdY3dRRvYfY5d2d3dRY3YR3vdRdgY0Y3"), P("d2Y0YidRYYYfdzY5"), G("v2viv2v3"), j("RidzYiYzYgYvz23Rdgd2Y3dvY3dRdRYgYlYd"), G("v2viv2vY"), A("v2viv2vv"), G("l3k5kllYgYkdlR6kw5l3wlk6"), j("v2viv2vR"), G("v2viv2vi"), P('v2viv2vz'), j("v2viv2v2"), P('v2viv2vd'), j('Rzd3dRdRYfYlRkYgYdYkY0YgYdYkdR'), A("dYY3dzdRY3dkRidRdRdzYgYz32YfYgYldRY3dz"), P("v2viv2vk"), P('dRY3dkdRRzYidvY3Y0YgYlY3'), z("zvv2vYvg"), A("YRYfd3YzY0Y33RddYgdvdRz23dY3Yzz232Y0d3YdYgYl"), z("Y5YidRYvYk"), z("d3YlY3dvYvYid2Y3"), P("3RYkd3YlYRY3dzz2RRYid2RvdRdzY0z2Rl32Ri32Rgz232Y0d3YdYgYl"), z("RzYidRYiYlYd"), j('RRRYR6YiYgz53vRz'), P('3vYlYid2z2Rg3RRv'), G("R5YgYlYgYzYidz32Y0d3YdYgYl"), A('RRYidRY3'), P("YRY3YvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), j("Rl3232Y0YidgY3dz3vYkY3Y0Y0"), z("R53vz23zY3YYY3dzY3YlYvY3z23vYiYldvz23vY3dzYgYY"), j('RkYgdzYiYdYgYlYfz23vYiYldvz2RdRz'), j("dvY3dzYgYY"), P("YdY3dRRvYfYldRY3dkdR"), j('d3YlYgYYYfdzY5vzYY'), z('R5YfYfY0RzYfdzYiYl')];
      !function () {
        var Q = [36, 28, 51, 9, 23, 7, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, -11, 11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, -18, 18, 19, -19, 20, -20, 21, -21, -22, 22, -23, 23, 24, -24, 25, -25, -26, 26, 27, -27, 28, -28, 29, -29, 30, -30, 31, -31, 33, -33, -32, 32, -34, -35, 34, 35, 37, -37, 36, -36, 38, 39, -39, -38, 40, 41, -41, -40, 42, -43, -42, 43, 45, -45, -44, 44, 47, -46, -47, 46, 48, -49, -48, 49, -50, 51, -51, 50, 570562233, 53, -52, 52, -53, -54, -55, 55, 54, 503444072, 57, -56, -57, 56, 59, 58, -59, -58, 60, 61, -61, -60, 62, 63, -63, -62, -64, 711928724, -66, 67, -65, 65, -67, 66, 64, -71, -69, 69, 68, 70, -68, -70, 71, -72, 3686517206, -74, -73, 73, 75, 74, -75, 72, -79, 76, 79, 78, -78, -76, 77, -77, 3554079995, -81, 81, -82, -83, 80, -80, 82, 83, -84, 84, 85, -86, -87, 86, -85, 87, 90, -88, -89, -90, 88, 89, 91, -91, 94, 92, 95, -94, 93, -93, -95, -92, -98, 97, 98, -97, -99, 96, 99, -96, -100, 3272380065, 102, -102, -101, -103, 103, 100, 101, -107, -104, 105, 104, 106, -106, -105, 107, 109, -109, -108, -111, 110, -110, 111, 108, 251722036, 115, -115, 112, -114, -112, 113, 114, -113, -117, 119, -116, -119, 117, -118, 118, 116, 123, -120, 122, -121, 120, -122, -123, 121, 125, 127, 3412177804, -127, 126, -126, 124, -125, -124, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 2097651377, 376229701, 853044451, 752459403, 426522225, 1000, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1231636301, 10000, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918000, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, 0.4, 2238001368, 2512341634, 2647816111, -0.2, 314042704, 1510334235, 900000, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -0.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, 0.732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -0.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 840000, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
        !function () {
          var k2 = M;
          function C0(CH) {
            if (null == CH) return null;
            for (var Cd = [], Cg = Q[6], M0 = CH["length"]; Cg < M0; Cg++) {
              var M1 = CH[Cg];
              Cd[Cg] = Ci[(M1 >>> Q[14] & Q[47]) * Q[49] + (M1 & Q[47])];
            }
            return Cd;
          }
          function C1(CH) {
            var Cd = [];
            if (null == CH || void 0 == CH || CH["length"] == Q[6]) return C4(CF);
            if (CH["length"] >= CF) {
              Cd = Q[6];
              var Cg = [];
              if (null != CH && CH["length"] != Q[6]) {
                if (CH["length"] < CF) throw Error(L[135]);
                for (var M0 = Q[6]; M0 < CF; M0++) Cg[M0] = CH[Cd + M0];
              }
              return Cg;
            }
            for (Cg = Q[6]; Cg < CF; Cg++) Cd[Cg] = CH[Cg % CH["length"]];
            return Cd;
          }
          function C2(CH) {
            var Cd = Q[394];
            if (null != CH) {
              for (var Cg = Q[6]; Cg < CH["length"]; Cg++) Cd = Cd >>> Q[29] ^ Ce[(Cd ^ CH[Cg]) & Q[290]];
            }
            if (CH = C6(Cd ^ Q[394]), Cd = CH['length'], null == CH || Cd < Q[6]) CH = new String(L[0]);else {
              Cg = [];
              for (var M0 = Q[6]; M0 < Cd; M0++) Cg["push"](C9(CH[M0]));
              CH = Cg["join"](L[0]);
            }
            return CH;
          }
          function C3(CH, Cd, Cg) {
            var M0 = [L[45], L[47], L[43], L[99], L[92], L[71], L[112], L[81], L[140], L[76], L[95], L[93], L[136], L[108], L[88], L[117], L[109], L[54], L[131], L[80], L[77], L[82], L[50], L[105], L[70], L[116], L[91], L[137], L[79], L[42], L[64], L[101], L[139], L[55], L[90], L[65], L[115], L[44], L[66], L[85], L[142], L[72], L[83], L[103], L[118], L[107], L[120], L[73], L[143], L[46], L[52], L[124], L[134], L[110], L[63], L[127], L[87], L[35], L[75], L[78], L[62], L[49], L[121], L[119]],
              M1 = L[68],
              M2 = [];
            if (Cg == Q[531]) {
              Cg = CH[Cd];
              var M3 = Q[6];
              M2["push"](M0[Cg >>> Q[7] & Q[144]]), M2["push"](M0[(Cg << Q[14] & Q[113]) + (M3 >>> Q[14] & Q[47])]), M2["push"](M1), M2["push"](M1);
            } else {
              if (Cg == Q[7]) Cg = CH[Cd], M3 = CH[Cd + Q[531]], CH = Q[6], M2['push'](M0[Cg >>> Q[7] & Q[144]]), M2['push'](M0[(Cg << Q[14] & Q[113]) + (M3 >>> Q[14] & Q[47])]), M2["push"](M0[(M3 << Q[7] & Q[139]) + (CH >>> Q[21] & Q[10])]), M2["push"](M1);else {
                if (Cg != Q[10]) throw Error(L[113]);
                Cg = CH[Cd], M3 = CH[Cd + Q[531]], CH = CH[Cd + Q[7]], M2["push"](M0[Cg >>> Q[7] & Q[144]]), M2["push"](M0[(Cg << Q[14] & Q[113]) + (M3 >>> Q[14] & Q[47])]), M2["push"](M0[(M3 << Q[7] & Q[139]) + (CH >>> Q[21] & Q[10])]), M2['push'](M0[CH & Q[144]]);
              }
            }
            return M2['join'](L[0]);
          }
          function C4(CH) {
            for (var Cd = [], Cg = Q[6]; Cg < CH; Cg++) Cd[Cg] = Q[6];
            return Cd;
          }
          function C5(CH, Cd, Cg, M0, M1) {
            if (null == CH || CH["length"] == Q[6]) return Cg;
            if (null == Cg) throw Error(L[133]);
            if (CH['length'] < M1) throw Error(L[135]);
            for (var M2 = Q[6]; M2 < M1; M2++) Cg[M0 + M2] = CH[Cd + M2];
            return Cg;
          }
          function C6(CH) {
            var Cd = [];
            return Cd[0] = CH >>> Q[65] & Q[290], Cd[1] = CH >>> Q[49] & Q[290], Cd[2] = CH >>> Q[29] & Q[290], Cd[3] = CH & Q[290], Cd;
          }
          function C7(CH) {
            if (null == CH || void 0 == CH) return CH;
            CH = encodeURIComponent(CH);
            for (var Cd = [], Cg = CH["length"], M0 = Q[6]; M0 < Cg; M0++) if (CH["charAt"](M0) == L[29]) {
              if (!(M0 + Q[7] < Cg)) throw Error(L[148]);
              Cd["push"](C8(CH["charAt"](++M0) + L[0] + CH["charAt"](++M0))[0]);
            } else Cd["push"](CH["charCodeAt"](M0));
            return Cd;
          }
          function C8(CH) {
            if (null == CH || CH['length'] == Q[6]) return [];
            CH = new String(CH);
            for (var Cd = [], Cg = CH['length'] / Q[7], M0 = Q[6], M1 = Q[6]; M1 < Cg; M1++) {
              var M2 = parseInt(CH["charAt"](M0++), Q[49]) << Q[14],
                M3 = parseInt(CH["charAt"](M0++), Q[49]);
              Cd[M1] = CW(M2 + M3);
            }
            return Cd;
          }
          function C9(CH) {
            var Cd = [];
            return Cd["push"](Cn[CH >>> Q[14] & Q[47]]), Cd["push"](Cn[CH & Q[47]]), Cd["join"](L[0]);
          }
          function CC(CH, Cd) {
            if (null == CH || null == Cd || CH["length"] != Cd["length"]) return CH;
            for (var Cg = [], M0 = Q[6], M1 = CH['length']; M0 < M1; M0++) Cg[M0] = CM(CH[M0], Cd[M0]);
            return Cg;
          }
          function CM(CH, Cd) {
            return CH = CW(CH), Cd = CW(Cd), CW(CH ^ Cd);
          }
          function Ca(CH, Cd) {
            return CW(CH + Cd);
          }
          function CW(CH) {
            if (CH < Q[281]) return CW(Q[282] - (Q[281] - CH));
            if (CH >= Q[281] && CH <= Q[273]) return CH;
            if (CH > Q[273]) return CW(Q[283] + CH - Q[273]);
            throw Error(L[138]);
          }
          function CU(CH) {
            var Qf = M;
            function Cd() {
              for (var MU = [L[288], L[398], E[30], L[226], E[44], L[38], E[51], L[469], E[69], L[286], L[19], L[308], L[389], L[344], L[472], L[184], L[343], L[413], L[411], L[114], L[215], L[198], L[287], L[426], L[283], L[282], L[163], E[70], L[361], L[202], L[303], L[100], L[470], L[187], L[229], L[380], L[370], L[232], L[129], L[94], L[416], L[324], E[13], L[69], E[77], E[28], L[447], L[441], L[234], L[292], E[42], L[341], L[289], L[408], L[368], L[278], L[468], L[299], L[353], E[81], L[172], E[76], L[279], L[84], L[461], L[474], E[36], L[443], L[371], L[364], L[373], L[217], L[285], E[6], L[284], L[434], L[235], E[71], L[266], L[374], L[274], L[383], L[28], L[346], L[295], L[290], L[106], E[54], L[230], L[262], L[249], L[328], L[209], L[385], L[305], L[436], L[457], L[211], L[3], L[67], L[466], L[189], L[327], L[173], L[351], L[391], L[177], L[277], L[381], L[48], L[419], L[435], L[450], L[155], L[126], E[4], L[39]], MR = [], MP = Q[6]; MP < MU["length"]; MP++) try {
                var Mz = MU[MP];
                Cg()(Mz) && MR["push"](Mz);
              } catch (MA) {}
              return MR["join"](L[58]);
            }
            function Cg() {
              var QN = M;
              function MU(ML) {
                var ME = {};
                return Mj[L[453]][E[20]] = ML, MG[L[25]](Mj), ME[L[318]] = Mj[L[363]], ME[E[9]] = Mj[L[476]], MG[L[312]](Mj), ME;
              }
              var MR = [L[387], E[34], E[78]],
                MP = [],
                Mz = E[32],
                MA = L[333],
                MG = Cq[L[264]],
                Mj = Cq[L[170]](E[14]);
              for (Mj[L[453]][L[225]] = MA, Mj[L[453]]['visibility'] = L[403], Mj[E[15]] = Mz, Mz = Q[6]; Mz < MR["length"]; Mz++) MP[Mz] = MU(MR[Mz]);
              return function (ML) {
                for (var ME = Q[6]; ME < MP["length"]; ME++) {
                  var MQ = MU(ML + L[36] + MR[ME]),
                    Mk = MP[ME];
                  if (MQ[L[318]] !== Mk[L[318]] || MQ[E[9]] !== Mk[E[9]]) return !0;
                }
                return !1;
              };
            }
            function M0() {
              var MU = null,
                MR = null,
                MP = [];
              try {
                MR = Cq[L[170]](L[445]), MU = MR[E[79]](L[261]) || MR[E[79]](E[2]);
              } catch (Mz) {}
              if (!MU) return MP;
              try {
                MP["push"](MU[L[21]]());
              } catch (MA) {}
              try {
                MP["push"](M1(MU, MR));
              } catch (MG) {}
              return MP["join"](L[58]);
            }
            function M1(MU, MR) {
              try {
                var MP = L[442],
                  Mz = L[246],
                  MA = MU[L[410]]();
                MU[L[399]](MU[E[3]], MA), MU['bufferData'](MU[E[3]], new Float32Array([Q[421], Q[477], Q[6], Q[417], Q[442], Q[6], Q[6], Q[457], Q[6]]), MU[L[390]]), MA['s'] = Q[10], MA['u'] = Q[10];
                var MG = MU[L[386]](),
                  Mj = MU[L[415]](MU[L[273]]);
                MU[L[429]](Mj, MP), MU[L[347]](Mj);
                var ML = MU[L[415]](MU[E[43]]);
                return MU[L[429]](ML, Mz), MU[L[347]](ML), MU[L[180]](MG, Mj), MU[L[180]](MG, ML), MU[L[412]](MG), MU[L[314]](MG), MG['A'] = MU[L[459]](MG, L[210]), MG['w'] = MU[L[428]](MG, L[395]), MU[L[440]](MG['B']), MU[E[61]](MG['A'], MA['s'], MU["FLOAT"], !Q[531], Q[6], Q[6]), MU[E[80]](MG['w'], Q[531], Q[531]), MU[L[141]](MU[L[265]], Q[6], MA['u']), CR(MR[L[152]]());
              } catch (ME) {
                return L[330];
              }
            }
            function M2() {
              var MU = Cq[L[170]](L[158]),
                MR = [],
                MP = [E[16], L[276], L[334], L[321], L[194], E[60], L[388], E[37], L[280], L[1], L[335], L[157], L[164], L[244], L[51], E[11], L[254], L[245], L[159], L[349], E[25], L[452], L[414], E[17], L[34], L[350], L[439], L[153]];
              if (!window[E[48]]) return MR["join"](L[0]);
              for (var Mz = Q[6]; Mz < MP["length"]; Mz++) try {
                Cq[L[264]][L[25]](MU), MU[L[453]]["color"] = MP[Mz], MR['push'](MP[Mz]), MR['push'](window[E[48]](MU)["getPropertyValue"](L[402])), Cq[L[264]][L[312]](MU);
              } catch (MA) {
                MR["push"](L[354]);
              }
              return MR['join'](L[57]);
            }
            function M3() {
              try {
                var MU = Cq[L[170]](L[445]),
                  MR = MU[E[79]](L[359]),
                  MP = L[471];
                return MR[E[63]] = L[240], MR[L[147]] = L[339], MR[E[63]] = L[206], MR[L[224]] = L[376], MR[L[377]](Q[272], Q[531], Q[143], Q[57]), MR[L[224]] = E[64], MR["fillText"](MP, Q[7], Q[47]), MR[L[224]] = L[319], MR["fillText"](MP, Q[14], Q[51]), MU[L[152]]();
              } catch (Mz) {
                return L[243];
              }
            }
            function M4() {
              try {
                return window[L[360]] && MW['j'] ? M6() : M5();
              } catch (MU) {
                return L[33];
              }
            }
            function M5() {
              var Qe = M;
              if (!CS[L[4]]) return L[0];
              var MU = [L[216], L[320], L[369], L[5], L[186], L[393], E[5], L[236], L[409], L[160], E[39], L[272], L[400], L[252], E[27], L[342], L[192], E[31], L[302], L[205], L[161], L[239], L[253], E[41], L[378], L[56], L[294], L[176], E[65], L[430], L[392], L[250], L[338], L[190], E[26], L[275], L[296], L[356], L[179], L[313], L[41], L[260], L[464], L[437], L[74], L[7], L[421], L[204], L[405], L[248], L[473], L[231], L[432], L[191], L[293], L[193], L[446], L[256], L[352], L[454], L[268], L[218], L[111], L[97], E[72], L[475], L[448], L[366], L[423], L[357], L[451], E[75], L[168], L[417], L[219], L[199], L[401], E[12], E[40], L[394], L[362], L[323], L[397], L[181], L[247], L[422], L[375], L[98], L[257], L[96], L[438], L[200], L[23], L[104], L[86], L[151], L[203], L[425], L[16], L[222], L[258], L[311], E[68], L[228], L[15], L[59], L[208], L[8], E[29], L[251], L[17], L[53], L[301], E[47], E[23], L[337], L[238], L[418], L[427]],
                MR = [],
                MP = {};
              return MR['push'](M9(CS[L[4]], function (Mz) {
                MP[Mz['name']] = Q[531];
                var MA = M9(Mz, function (MG) {
                  return [MG['type'], MG[L[149]]]["join"](L[146]);
                })["join"](L[36]);
                return [Mz["name"], Mz[L[406]], MA]["join"](L[455]);
              }, this)["join"](L[27])), MR['push'](M9(MU, function (Mz) {
                if (MP[Mz]) return L[0];
                if (Mz = CS[L[4]][Mz], !Mz) return L[0];
                var MA = M9(Mz, function (MG) {
                  return [MG['type'], MG[L[149]]]["join"](L[146]);
                })["join"](L[36]);
                return [Mz["name"], Mz[L[406]], MA]["join"](L[455]);
              }, this)["join"](L[58])), MR["join"](L[58]);
            }
            function M6() {
              return window[L[360]] ? M9([L[242], L[298], L[322], L[304], E[45], L[201], L[449], L[223], E[1], L[178], L[255], L[102], L[165], L[237], L[367], L[255], L[104], L[151], L[317], L[420], L[355], E[8], L[332]], function (MU) {
                try {
                  return new window[L[360]](MU), MU;
                } catch (MR) {
                  return null;
                }
              })["join"](L[58]) : L[0];
            }
            function M7() {
              try {
                return !!window[L[345]];
              } catch (MU) {
                return !0;
              }
            }
            function M8() {
              try {
                return !!window[L[404]];
              } catch (MU) {
                return !0;
              }
            }
            function M9(MU, MR, MP) {
              var Qb = M,
                Mz = [];
              return null == MU ? Mz : Ma && MU["map"] === Ma ? MU['map'](MR, MP) : (MC(MU, function (MA, MG, Mj) {
                Mz[Mz["length"]] = MR['call'](MP, MA, MG, Mj);
              }), Mz);
            }
            function MC(MU, MR, MP) {
              if (null !== MU) {
                if (MM && MU["forEach"] === MM) MU["forEach"](MR, MP);else {
                  if (MU["length"] === +MU["length"]) {
                    for (var Mz = Q[6], MA = MU["length"]; Mz < MA && MR["call"](MP, MU[Mz], Mz, MU) !== {}; Mz++);
                  } else {
                    for (Mz in MU) if (MU['hasOwnProperty'](Mz) && MR["call"](MP, MU[Mz], Mz, MU) === {}) break;
                  }
                }
              }
            }
            var MM = Array["prototype"]["forEach"],
              Ma = Array["prototype"]["map"],
              MW = {
                'g': CR,
                'o': !0,
                'l': !0,
                'j': !0,
                'b': !0,
                'a': !0
              };
            ("undefined" == typeof CH ? 'undefined' : U(CH)) == L[270] ? MW['g'] = CH : (null != CH['b'] && void 0 != CH['b'] && (MW['b'] = CH['b']), null != CH['a'] && void 0 != CH['a'] && (MW['a'] = CH['a'])), this["get"] = function () {
              var MU = [],
                MR = [];
              if (Ct) {
                MU["push"](M7()), MU['push'](M8()), MU["push"](!!window[L[407]]), Cq[L[264]] ? MU["push"](U(Cq[L[264]][L[306]])) : MU["push"]("undefined"), MU["push"](U(window[L[444]])), MU["push"](CS[L[196]]), MU["push"](CS[E[49]]);
                var MP;
                if (MP = MW['l']) try {
                  var Mz = Cq[L[170]](L[445]);
                  MP = !(!Mz[E[79]] || !Mz[E[79]](L[359]));
                } catch (MA) {
                  MP = !1;
                }
                if (MP) try {
                  MU["push"](M3()), MW['b'] && MU["push"](M0());
                } catch (MG) {
                  MU["push"](L[61]);
                }
                MU["push"](M2()), MW['a'] && MR['push'](Cd()), MR["push"](CS[E[0]]), MR["push"](CS[L[154]]), MR["push"](window[L[263]][L[365]]), MW['o'] && (MP = window[L[263]] ? [window[L[263]][L[318]], window[L[263]][E[9]]] : [Q[6], Q[6]], ("undefined" == typeof MP ? "undefined" : U(MP)) !== L[465] && MR["push"](MP["join"](L[140]))), MR["push"](new Date()[L[130]]()), MR["push"](CS[L[123]]), MR["push"](M4());
              }
              return MP = [], MW['g'] ? (MP["push"](MW['g'](MU["join"](E[46]))), MP["push"](MW['g'](MR['join'](E[46])))) : (MP['push'](CR(MU["join"](E[46]))), MP["push"](CR(MR['join'](E[46])))), MP;
            };
          }
          function CR(CH) {
            var Cd,
              Cg = Q[79],
              M0 = CH["length"] & Q[10],
              M1 = CH["length"] - M0,
              M2 = Cg;
            Cg = Q[12];
            var M3 = Q[365];
            for (Cd = Q[6]; Cd < M1;) {
              var M4 = CH["charCodeAt"](Cd) & Q[290] | (CH["charCodeAt"](++Cd) & Q[290]) << Q[29] | (CH['charCodeAt'](++Cd) & Q[290]) << Q[49] | (CH['charCodeAt'](++Cd) & Q[290]) << Q[65];
              ++Cd, M4 = (M4 & Q[475]) * Cg + (((M4 >>> Q[49]) * Cg & Q[475]) << Q[49]) & Q[394], M4 = M4 << Q[47] | M4 >>> Q[51], M4 = (M4 & Q[475]) * M3 + (((M4 >>> Q[49]) * M3 & Q[475]) << Q[49]) & Q[394], M2 ^= M4, M2 = M2 << Q[41] | M2 >>> Q[55], M2 = (M2 & Q[475]) * Q[17] + (((M2 >>> Q[49]) * Q[17] & Q[475]) << Q[49]) & Q[394], M2 = (M2 & Q[475]) + Q[384] + (((M2 >>> Q[49]) + Q[425] & Q[475]) << Q[49]);
            }
            switch (M4 = Q[6], M0) {
              case Q[10]:
                M4 ^= (CH["charCodeAt"](Cd + Q[7]) & Q[290]) << Q[49];
              case Q[7]:
                M4 ^= (CH["charCodeAt"](Cd + Q[531]) & Q[290]) << Q[29];
              case Q[531]:
                M4 ^= CH["charCodeAt"](Cd) & Q[290], M4 = (M4 & Q[475]) * Cg + (((M4 >>> Q[49]) * Cg & Q[475]) << Q[49]) & Q[394], M4 = M4 << Q[47] | M4 >>> Q[51], M4 = (M4 & Q[475]) * M3 + (((M4 >>> Q[49]) * M3 & Q[475]) << Q[49]) & Q[394], M2 ^= M4;
            }
            M2 ^= CH["length"], M2 ^= M2 >>> Q[49], M2 = (M2 & Q[475]) * Q[396] + (((M2 >>> Q[49]) * Q[396] & Q[475]) << Q[49]) & Q[394], M2 ^= M2 >>> Q[41], M2 = (M2 & Q[475]) * Q[339] + (((M2 >>> Q[49]) * Q[339] & Q[475]) << Q[49]) & Q[394], M2 ^= M2 >>> Q[49], CH = M2 >>> Q[6], M0 = [], M0["push"](CH);
            try {
              for (var M5, M6 = CH + L[0], M7 = Q[6], M8 = Q[6], M9 = Q[6]; M9 < M6["length"]; M9++) try {
                var MC = parseInt(M6["charAt"](M9) + L[0]);
                M7 = MC || MC === Q[6] ? M7 + MC : M7 + Q[531], M8++;
              } catch (Mj) {
                M7 += Q[531], M8++;
              }
              M8 = M8 == Q[6] ? Q[531] : M8, M5 = CP(M7 * Q[531] / M8, CV);
              for (var MM, Ma = Math["floor"](M5 / Math["pow"](Q[34], CV - Q[531])), MW = CH + L[0], MU = Q[6], MR = Q[6], MP = Q[6], Mz = Q[6], MA = Q[6]; MA < MW["length"]; MA++) try {
                var MG = parseInt(MW['charAt'](MA) + L[0]);
                MG || MG === Q[6] ? MG < Ma ? (MR++, MU += MG) : (Mz++, MP += MG) : (Mz++, MP += Ma);
              } catch (ML) {
                Mz++, MP += Ma;
              }
              Mz = Mz == Q[6] ? Q[531] : Mz, MR = MR == Q[6] ? Q[531] : MR, MM = CP(MP * Q[531] / Mz - MU * Q[531] / MR, Cy), M0["push"](Cz(M5, !0, CV, L[43])), M0["push"](Cz(MM, !0, Cy, L[43]));
            } catch (ME) {
              M0 = [], M0['push'](CH), M0["push"](CA(CV, L[37])['join'](L[0])), M0["push"](CA(Cy, L[37])["join"](L[0]));
            }
            return M0["join"](L[0]);
          }
          function CP(CH, Cd) {
            if (CH < Q[6] || CH >= Q[34]) throw Error(L[32]);
            Cd = CA(Cd, L[43]), CH = L[0] + CH;
            for (var Cg = Q[6], M0 = Q[6]; Cg < Cd['length'] && M0 < CH["length"]; M0++) CH['charAt'](M0) != L[40] && (Cd[Cg++] = CH['charAt'](M0));
            return parseInt(Cd["join"](L[0]));
          }
          function Cz(CH, Cd, Cg, M0) {
            if (CH = L[0] + CH, CH["length"] > Cg) throw Error(L[89]);
            if (CH['length'] == Cg) return CH;
            var M1 = [];
            Cd || M1["push"](CH);
            for (var M2 = CH["length"]; M2 < Cg; M2++) M1["push"](M0);
            return Cd && M1['push'](CH), M1['join'](L[0]);
          }
          function CA(CH, Cd) {
            if (CH <= Q[6]) return [Q[6]];
            for (var Cg = [], M0 = Q[6]; M0 < CH; M0++) Cg["push"](Cd);
            return Cg;
          }
          function CG(CH) {
            return null == CH || void 0 == CH;
          }
          function Cj(CH, Cd, Cg) {
            this['h'] = CH, this['c'] = Cd, CG(Cg) ? this['i'] = !0 : this['i'] = Cg;
          }
          function CL(CH) {
            if (CG(CH) || CG(CH['h']) || CG(CH['c'])) return !1;
            try {
              if (CG(window[CH['h']])) return !1;
            } catch (Cd) {
              return !1;
            }
            return !0;
          }
          function CE(CH, Cd) {
            if (CG(CH)) return L[0];
            for (var Cg = Q[6]; Cg < CH['length']; Cg++) {
              var M0 = CH[Cg];
              if (!CG(M0) && M0['h'] == Cd) return M0;
            }
          }
          function CQ() {
            MA: {
              var CH = CN;
              if (!CG(CH)) for (var Cd = Q[6]; Cd < CH["length"]; Cd++) {
                var Cg = CH[Cd];
                if (Cg['i'] && !CL(Cg)) {
                  CH = Cg;
                  break MA;
                }
              }
              CH = null;
            }
            if (CG(CH)) {
              try {
                var M0 = window["parseFloat"](L[183]) === Q[374] && window["isNaN"](window["parseFloat"](L[167]));
              } catch (M9) {
                M0 = !1;
              }
              if (M0) {
                try {
                  var M1 = window["parseInt"](L[329]) === Q[264] && window["isNaN"](window['parseInt'](L[167]));
                } catch (MC) {
                  M1 = !1;
                }
                if (M1) {
                  try {
                    var M2 = window['decodeURI'](L[213]) === L[26];
                  } catch (MM) {
                    M2 = !1;
                  }
                  if (M2) {
                    try {
                      var M3 = window["decodeURIComponent"](L[214]) === L[30];
                    } catch (Ma) {
                      M3 = !1;
                    }
                    if (M3) {
                      try {
                        var M4 = window["encodeURI"](L[26]) === L[213];
                      } catch (MW) {
                        M4 = !1;
                      }
                      if (M4) {
                        try {
                          var M5 = window["encodeURIComponent"](L[30]) === L[214];
                        } catch (MU) {
                          M5 = !1;
                        }
                        if (M5) {
                          try {
                            var M6 = window["escape"](L[30]) === L[214];
                          } catch (MR) {
                            M6 = !1;
                          }
                          if (M6) {
                            try {
                              var M7 = window['unescape'](L[214]) === L[30];
                            } catch (MP) {
                              M7 = !1;
                            }
                            if (M7) {
                              try {
                                var M8 = window["eval"](L[309]) === Q[264];
                              } catch (Mz) {
                                M8 = !1;
                              }
                              M0 = M8 ? null : CE(CN, L[174]);
                            } else M0 = CE(CN, E[67]);
                          } else M0 = CE(CN, L[348]);
                        } else M0 = CE(CN, L[396]);
                      } else M0 = CE(CN, L[382]);
                    } else M0 = CE(CN, E[74]);
                  } else M0 = CE(CN, L[326]);
                } else M0 = CE(CN, L[424]);
              } else M0 = CE(CN, L[456]);
            } else M0 = CH;
            return M0;
          }
          function Ck() {
            var CH = CQ();
            if (!CG(CH)) return CH['c'];
            try {
              CH = CG(window[L[171]]) || CG(window[L[171]][L[340]]) ? null : CE(CN, L[316]);
            } catch (Cd) {
              CH = null;
            }
            if (!CG(CH)) return CH['c'];
            try {
              CH = CG(window[L[207]]) || CG(window[L[207]][L[188]]) ? null : CE(CN, L[271]);
            } catch (Cg) {
              CH = null;
            }
            return CG(CH) ? null : CH['c'];
          }
          function Cl(CH) {
            for (var Cd = [], Cg = Q[6]; Cg < CH; Cg++) {
              var M0 = Math['random']() * Cw;
              M0 = Math["floor"](M0), Cd['push'](CY['charAt'](M0));
            }
            return Cd["join"](L[0]);
          }
          function Ch(CH) {
            for (var Cd = (Cq[L[212]] || L[0])["split"](L[458]), Cg = Q[6]; Cg < Cd["length"]; Cg++) {
              var M0 = Cd[Cg]["indexOf"](L[60]);
              if (M0 >= Q[6]) {
                var M1 = Cd[Cg]["substring"](M0 + Q[531], Cd[Cg]["length"]);
                if (Cd[Cg]["substring"](Q[6], M0) == CH) return window['decodeURIComponent'](M1);
              }
            }
            return null;
          }
          function CK(CH) {
            var Cd = [L[137], L[185], L[136], L[110], L[162], L[169], L[384]],
              Cg = L[0];
            if (null == CH || void 0 == CH) return CH;
            if (("undefined" == typeof CH ? "undefined" : U(CH)) == [L[297], L[227], L[125]]['join'](L[0])) {
              Cg += L[144];
              for (var M0 = Q[6]; M0 < Cd["length"]; M0++) if (CH["hasOwnProperty"](Cd[M0])) {
                var M1 = L[31] + Cd[M0] + L[269],
                  M2 = L[0] + CH[Cd[M0]];
                M2 = null == M2 || void 0 == M2 ? M2 : M2['replace'](/'/g, L[463])["replace"](/"/g, L[26]), Cg += M1 + M2 + L[195];
              }
              return Cg["charAt"](Cg["length"] - Q[531]) == L[36] && (Cg = Cg["substring"](Q[6], Cg["length"] - Q[531])), Cg += L[145];
            }
            return null;
          }
          function Cu(CH, Cd, Cg, M0) {
            var M1 = [];
            M1["push"](CH + L[60] + encodeURIComponent(Cd)), Cg && (CH = new Date(M0)[L[220]](), M1["push"](L[458]), M1["push"](L[175]), M1["push"](L[310]), M1["push"](L[331]), M1["push"](L[325]), M1['push'](CH)), M1['push'](L[458]), M1["push"](L[307]), M1["push"](L[221]), null != CI && void 0 != CI && CI != L[0] && (M1["push"](L[458]), M1['push'](L[156]), M1["push"](L[241]), M1["push"](L[267]), M1["push"](CI)), Cq[L[212]] = M1["join"](L[0]);
          }
          function CX(CH, Cd) {
            for (var Cg = [], M0 = Q[6]; M0 < Cd; M0++) Cg["push"](CH);
            return Cg["join"](L[0]);
          }
          function CT(CH) {
            return null == CH || void 0 == CH || CH == L[0] ? null : (CH = CH["split"](L[57]), CH["length"] < Q[7] || !/^[0-9]+$/gi["test"](CH[1]) ? null : parseInt(CH[1]));
          }
          function Cs() {
            var CH = Ch(Cf);
            return null != CH && void 0 != CH && CH != L[0] || (CH = window[Cr]), CH;
          }
          function Cm() {
            var CH = Cs(Cf);
            return null == CH || void 0 == CH || CH == L[0] ? Q[6] : (CH = CT(CH), null == CH ? Q[6] : CH - (CD - CB) - new window[E[73]]()[L[182]]());
          }
          function Cp() {
            if (!(null == CZ || void 0 == CZ || CZ['length'] <= Q[6])) for (var CH = Q[6]; CH < CZ['length']; CH++) {
              var Cd = CZ[CH];
              if ((null != CI && void 0 != CI && CI != L[0] || null != Cd && void 0 != Cd && Cd != L[0]) && CI != Cd) {
                var Cg = Cf,
                  M0 = new window[E[73]]();
                M0[L[24]](M0[L[182]]() - Q[317]), window[L[336]][L[212]] = null == Cd || void 0 == Cd || Cd == L[0] ? Cg + L[150] + M0[L[220]]() : Cg + L[379] + Cd + E[24] + M0[L[220]]();
              }
            }
          }
          function CO() {
            Cp(), window[Cr] = null;
            var CH = !0,
              Cd = {
                'v': L[233]
              },
              Cg = Ck();
            Cg && (Cd[L[384]] = Cg), Cg = null, Cd[L[110]] = CJ;
            var M0 = new window[E[73]]()[L[182]]() + CD,
              M1 = M0 + Q[299] * Q[139] * Q[139] * Q[65] * Q[77];
            Cd[L[136]] = Cl(Q[10]) + M0 + Cl(Q[10]);
            try {
              var M2 = new CU({
                'b': !1,
                'a': !1
              })['get']();
              null != M2 && void 0 != M2 && M2["length"] > Q[6] ? Cd[L[185]] = M2["join"](L[36]) : (Cd[L[185]] = CX(L[43], Q[34]), Cd[L[162]] = L[44], CH = !1);
            } catch (Mn) {
              Cd[L[185]] = CX(L[43], Q[34]), Cd[L[162]] = L[44], CH = !1;
            }
            try {
              var M3 = Cg = CK(Cd);
              if (Cd = Cv, null == Cd || void 0 == Cd) throw Error(L[122]);
              null != M3 && void 0 != M3 || (M3 = L[0]), M2 = M3;
              var M4 = C2(null == M3 ? [] : C7(M3)),
                M5 = C7(M2 + M4),
                M6 = C7(Cd);
              null == M5 && (M5 = []), M4 = [];
              for (var M7 = Q[6]; M7 < Cc; M7++) {
                var M8 = Math["random"]() * Q[292];
                M8 = Math["floor"](M8), M4[M7] = CW(M8);
              }
              if (M6 = C1(M6), M6 = CC(M6, C1(M4)), M7 = M6 = C1(M6), M8 = M5, null == M8 || void 0 == M8 || M8["length"] == Q[6]) var M9 = C4(Cx);else {
                var MC = M8['length'],
                  MM = MC % Cx <= Cx - Cb ? Cx - MC % Cx - Cb : Cx * Q[7] - MC % Cx - Cb;
                M5 = [], C5(M8, Q[6], M5, Q[6], MC);
                for (var Ma = Q[6]; Ma < MM; Ma++) M5[MC + Ma] = Q[6];
                var MW = C6(MC);
                C5(MW, Q[6], M5, MC + MM, Cb), M9 = M5;
              }
              if (MC = M9, null == MC || MC["length"] % Cx != Q[6]) throw Error(L[132]);
              M9 = [];
              for (var MU = Q[6], MR = MC["length"] / Cx, MP = Q[6]; MP < MR; MP++) {
                M9[MP] = [];
                for (var Mz = Q[6]; Mz < Cx; Mz++) M9[MP][Mz] = MC[MU++];
              }
              MU = [], C5(M4, Q[6], MU, Q[6], Cc);
              for (var MA = M9["length"], MG = Q[6]; MG < MA; MG++) {
                var Mj = M9[MG];
                if (null == Mj) var ML = null;else {
                  var ME = CW(Q[89]);
                  MR = [];
                  for (var MQ = Mj["length"], Mk = Q[6]; Mk < MQ; Mk++) MR["push"](CM(Mj[Mk], ME));
                  ML = MR;
                }
                if (MR = ML, null == MR) var Ml = null;else {
                  var Mh = CW(Q[88]);
                  MP = [];
                  for (var MK = MR["length"], Mu = Q[6]; Mu < MK; Mu++) MP["push"](CM(MR[Mu], Mh--));
                  Ml = MP;
                }
                if (MR = Ml, null == MR) var MX = null;else {
                  var MT = CW(Q[107]);
                  MP = [];
                  for (var Ms = MR['length'], Mm = Q[6]; Mm < Ms; Mm++) MP["push"](Ca(MR[Mm], MT++));
                  MX = MP;
                }
                var Mp = CC(MX, M6);
                if (MR = Mp, MP = M7, null == MR) var MO = null;else {
                  if (null == MP) MO = MR;else {
                    Mz = [];
                    for (var MN = MP["length"], Mt = Q[6], MJ = MR["length"]; Mt < MJ; Mt++) Mz[Mt] = CW(MR[Mt] + MP[Mt % MN]);
                    MO = Mz;
                  }
                }
                Mp = CC(MO, M7);
                var Mq = C0(Mp);
                Mq = C0(Mq), C5(Mq, Q[6], MU, MG * Cx + Cc, Cx), M7 = Mq;
              }
              if (null == MU || void 0 == MU) var MS = null;else {
                if (MU['length'] == Q[6]) MS = L[0];else {
                  var MV = Q[10];
                  try {
                    MA = [];
                    for (var My = Q[6]; My < MU["length"];) {
                      if (!(My + MV <= MU["length"])) {
                        MA["push"](C3(MU, My, MU["length"] - My));
                        break;
                      }
                      MA["push"](C3(MU, My, MV)), My += MV;
                    }
                    MS = MA["join"](L[0]);
                  } catch (Me) {
                    throw Error(L[113]);
                  }
                }
              }
              Cg = MS;
            } catch (Mi) {
              Cg = CK({
                'ec': L[45],
                'em': Mi[L[197]]
              }), CH = !1;
            }
            Cg = Cg + L[57] + M0, Cu(Cf, Cg, CH, M1), CH = Cf, MS = Cg, MV = Ch(CH), null !== MV && void 0 !== MV && MV !== L[0] || Cu(CH, MS, !1), window[Cr] = Cg, window[L[128]] && window[L[128]](CO, CB);
          }
          Cj["prototype"] = {
            'toString': function () {
              return L[460] + this['h'] + L[166] + this['c'] + E[7] + this['i'] + L[145];
            }
          };
          var CN = [new Cj(L[433], L[13]), new Cj(L[336], L[14]), new Cj(L[372], L[11]), new Cj(L[431], L[12]), new Cj(E[33], L[10]), new Cj(L[263], L[9]), new Cj(L[2], L[20]), new Cj(L[240], L[22]), new Cj(E[10], L[6]), new Cj(L[456], E[58]), new Cj(L[424], E[56]), new Cj(L[326], E[57]), new Cj(E[74], E[53]), new Cj(L[382], E[55]), new Cj(L[396], E[50]), new Cj(L[348], E[52]), new Cj(E[67], E[59]), new Cj(L[174], E[62]), new Cj(L[259], E[21], !1), new Cj(L[300], E[22], !1), new Cj(L[171], E[18], !1), new Cj(L[316], E[19], !1), new Cj(L[271], E[38], !1)],
            Ct = !CQ(),
            CJ = window && window[L[431]] && window[L[431]]["host"] || L[358],
            Cq = window[L[336]],
            CS = window[L[372]],
            CV = Q[7],
            Cy = Q[7],
            Cn = [L[43], L[44], L[45], L[46], L[47], L[49], L[50], L[52], L[54], L[55], L[99], L[101], L[103], L[105], L[107], L[108]],
            Ce = [Q[6], Q[367], Q[373], Q[511], Q[438], Q[306], Q[484], Q[333], Q[451], Q[532], Q[300], Q[450], Q[485], Q[453], Q[404], Q[31], Q[444], Q[353], Q[523], Q[391], Q[428], Q[284], Q[356], Q[500], Q[480], Q[482], Q[465], Q[323], Q[529], Q[401], Q[288], Q[416], Q[463], Q[20], Q[359], Q[492], Q[315], Q[343], Q[536], Q[380], Q[409], Q[430], Q[165], Q[432], Q[296], Q[490], Q[458], Q[326], Q[497], Q[321], Q[471], Q[345], Q[348], Q[389], Q[369], Q[518], Q[514], Q[448], Q[412], Q[25], Q[397], Q[509], Q[309], Q[435], Q[460], Q[427], Q[38], Q[406], Q[538], Q[495], Q[452], Q[302], Q[310], Q[247], Q[335], Q[487], Q[370], Q[385], Q[512], Q[375], Q[405], Q[527], Q[418], Q[289], Q[486], Q[476], Q[325], Q[467], Q[291], Q[422], Q[502], Q[357], Q[358], Q[440], Q[393], Q[524], Q[493], Q[286], Q[327], Q[459], Q[433], Q[402], Q[434], Q[181], Q[344], Q[307], Q[381], Q[537], Q[24], Q[455], Q[494], Q[360], Q[510], Q[387], Q[436], Q[311], Q[449], Q[506], Q[28], Q[413], Q[392], Q[340], Q[519], Q[371], Q[324], Q[488], Q[346], Q[472], Q[470], Q[322], Q[441], Q[479], Q[287], Q[420], Q[331], Q[408], Q[526], Q[390], Q[505], Q[352], Q[355], Q[504], Q[468], Q[294], Q[304], Q[447], Q[130], Q[530], Q[403], Q[44], Q[298], Q[462], Q[377], Q[508], Q[378], Q[364], Q[483], Q[338], Q[330], Q[314], Q[415], Q[19], Q[517], Q[445], Q[308], Q[439], Q[379], Q[515], Q[474], Q[342], Q[499], Q[319], Q[368], Q[522], Q[332], Q[398], Q[274], Q[431], Q[410], Q[426], Q[456], Q[329], Q[121], Q[498], Q[362], Q[491], Q[464], Q[13], Q[535], Q[386], Q[297], Q[350], Q[503], Q[354], Q[293], Q[337], Q[388], Q[525], Q[351], Q[318], Q[419], Q[285], Q[407], Q[372], Q[320], Q[469], Q[478], Q[23], Q[336], Q[481], Q[312], Q[349], Q[507], Q[376], Q[363], Q[399], Q[42], Q[400], Q[461], Q[313], Q[446], Q[303], Q[528], Q[295], Q[521], Q[366], Q[395], Q[334], Q[341], Q[473], Q[316], Q[501], Q[437], Q[305], Q[513], Q[382], Q[15], Q[414], Q[443], Q[520], Q[383], Q[534], Q[347], Q[301], Q[489], Q[361], Q[8], Q[466], Q[328], Q[454], Q[496], Q[148], Q[429], Q[223], Q[423], Q[411]],
            Ci = [Q[32], Q[190], Q[117], Q[135], Q[248], Q[224], Q[131], Q[272], Q[206], Q[48], Q[47], Q[7], Q[164], Q[214], Q[173], Q[93], Q[132], Q[114], Q[174], Q[69], Q[256], Q[139], Q[198], Q[33], Q[231], Q[39], Q[156], Q[222], Q[144], Q[101], Q[53], Q[73], Q[265], Q[36], Q[81], Q[105], Q[175], Q[207], Q[89], Q[215], Q[14], Q[136], Q[216], Q[191], Q[217], Q[199], Q[208], Q[232], Q[43], Q[200], Q[176], Q[201], Q[257], Q[149], Q[41], Q[18], Q[75], Q[258], Q[16], Q[182], Q[71], Q[97], Q[137], Q[102], Q[192], Q[113], Q[166], Q[239], Q[147], Q[70], Q[150], Q[82], Q[249], Q[6], Q[90], Q[225], Q[202], Q[115], Q[273], Q[193], Q[98], Q[233], Q[9], Q[266], Q[103], Q[250], Q[209], Q[183], Q[80], Q[151], Q[226], Q[45], Q[152], Q[116], Q[153], Q[251], Q[227], Q[194], Q[56], Q[234], Q[154], Q[167], Q[85], Q[177], Q[106], Q[72], Q[240], Q[241], Q[109], Q[140], Q[195], Q[104], Q[126], Q[67], Q[155], Q[86], Q[107], Q[122], Q[252], Q[91], Q[168], Q[203], Q[184], Q[118], Q[83], Q[94], Q[185], Q[186], Q[196], Q[242], Q[40], Q[138], Q[228], Q[178], Q[110], Q[275], Q[87], Q[531], Q[218], Q[46], Q[133], Q[243], Q[235], Q[210], Q[123], Q[37], Q[253], Q[57], Q[236], Q[169], Q[143], Q[157], Q[95], Q[127], Q[259], Q[276], Q[254], Q[264], Q[34], Q[179], Q[267], Q[30], Q[170], Q[59], Q[211], Q[51], Q[141], Q[60], Q[237], Q[277], Q[54], Q[278], Q[52], Q[124], Q[35], Q[180], Q[66], Q[61], Q[268], Q[212], Q[68], Q[219], Q[244], Q[62], Q[63], Q[158], Q[279], Q[281], Q[111], Q[96], Q[533], Q[10], Q[58], Q[229], Q[159], Q[230], Q[17], Q[260], Q[269], Q[108], Q[119], Q[92], Q[99], Q[65], Q[187], Q[77], Q[188], Q[145], Q[100], Q[213], Q[204], Q[22], Q[125], Q[280], Q[146], Q[74], Q[245], Q[55], Q[120], Q[246], Q[160], Q[161], Q[76], Q[171], Q[220], Q[205], Q[142], Q[162], Q[163], Q[261], Q[11], Q[189], Q[197], Q[26], Q[84], Q[128], Q[79], Q[270], Q[271], Q[238], Q[255], Q[112], Q[78], Q[262], Q[129], Q[64], Q[263], Q[50], Q[27], Q[21], Q[88], Q[49], Q[221], Q[134], Q[172], Q[29]],
            Cx = Q[155],
            CF = Q[155],
            Cb = Q[14],
            Cc = Q[14],
            Cv = E[35],
            Cf = L[18],
            CY = L[281],
            Cw = CY["length"],
            CD = Q[424],
            CB = Q[516],
            Co = window && window[L[431]] && window[L[431]][L[315]] || L[462],
            CI = L[0];
          CI = function (CH, Cd) {
            if (null == CH || void 0 == CH || CH == L[0] || null == Cd || void 0 == Cd || Cd["length"] <= Q[6]) return null;
            Cd = Cd["split"](L[58]);
            for (var Cg = Q[6]; Cg < Cd["length"]; Cg++) {
              var M0 = new RegExp(Cd[Cg]["replace"](/\./g, L[467]) + L[27]);
              if (null != CH[E[66]](M0) || null != (L[40] + CH)[E[66]](M0)) return Cd[Cg];
            }
            return null;
          }(Co, CI);
          var Cr = Cf["replace"](/[^a-zA-Z0-9$]/g, L[0])["toLowerCase"](),
            CZ = function (CH) {
              var Cd = [];
              if (!CH) return Cd;
              CH = CH["split"](L[40]);
              for (var Cg = L[0], M0 = Q[6]; M0 < CH["length"]; M0++) M0 < CH["length"] - Q[531] && (Cg = L[40] + CH[CH["length"] - Q[531] - M0] + Cg, Cd["push"](Cg));
              return Cd;
            }(Co);
          CZ["push"](null), CZ["push"](L[40] + Co), function (CH) {
            for (var Cd = Q[6], Cg = (Cq[L[212]] || L[0])["split"](L[458]), M0 = Q[6]; M0 < Cg['length']; M0++) {
              var M1 = Cg[M0]["indexOf"](L[60]);
              M1 >= Q[6] && Cg[M0]["substring"](Q[6], M1) == CH && (Cd += Q[531]);
            }
            return Cd;
          }(Cf) > Q[531] && Cp(), function () {
            var CH = Cs();
            return null == CH || void 0 == CH || CH == L[0] ? CH = !1 : (CH = CT(CH), CH = !(null == CH || isNaN(CH) || CH - new window[E[73]]()[L[182]]() <= CD - CB)), CH;
          }() ? (window[Cr] = Cs(), Co = Cm(), window[L[128]] && window[L[128]](CO, Co)) : CO();
          a["exports"] = Cs;
        }();
      }();
    }();
  }();
}, function (a, W) {
  var k6 = MF,
    U = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (R) {
      return typeof R;
    } : function (R) {
      return R && 'function' == typeof Symbol && R["constructor"] === Symbol && R !== Symbol["prototype"] ? "symbol" : typeof R;
    };
  "object" !== ('undefined' == typeof JSON ? "undefined" : U(JSON)) && (JSON = {}), function () {
    'use strict';

    var ka = k6;
    function R(X) {
      return X < 10 ? '0' + X : X;
    }
    function P() {
      return this["valueOf"]();
    }
    function z(X) {
      var k9 = M;
      return Q["lastIndex"] = 0, Q["test"](X) ? '\x22' + X['replace'](Q, function (T) {
        var s = K[T];
        return "string" == typeof s ? s : '\x5cu' + ('0000' + T["charCodeAt"](0)["toString"](16))['slice'](-4);
      }) + '\x22' : '\x22' + X + '\x22';
    }
    function A(X, T) {
      var m,
        p,
        O,
        N,
        J,
        q = l,
        S = T[X];
      switch (S && "object" === ("undefined" == typeof S ? "undefined" : U(S)) && "function" == typeof S["toJSON"] && (S = S['toJSON'](X)), "function" == typeof u && (S = u['call'](T, X, S)), "undefined" == typeof S ? "undefined" : U(S)) {
        case "string":
          return z(S);
        case "number":
          return isFinite(S) ? String(S) : "null";
        case "boolean":
        case 'null':
          return String(S);
        case "object":
          if (!S) return "null";
          if (l += h, J = [], "[object Array]" === Object["prototype"]["toString"]["apply"](S)) {
            for (N = S["length"], m = 0; m < N; m += 1) J[m] = A(m, S) || 'null';
            return O = 0 === J["length"] ? '[]' : l ? '[\x0a' + l + J["join"](',\x0a' + l) + '\x0a' + q + ']' : '[' + J["join"](',') + ']', l = q, O;
          }
          if (u && 'object' === ("undefined" == typeof u ? 'undefined' : U(u))) {
            for (N = u["length"], m = 0; m < N; m += 1) 'string' == typeof u[m] && (p = u[m], O = A(p, S), O && J['push'](z(p) + (l ? ':\x20' : ':') + O));
          } else {
            for (p in S) Object['prototype']["hasOwnProperty"]["call"](S, p) && (O = A(p, S), O && J["push"](z(p) + (l ? ':\x20' : ':') + O));
          }
          return O = 0 === J['length'] ? '{}' : l ? '{\x0a' + l + J["join"](',\x0a' + l) + '\x0a' + q + '}' : '{' + J["join"](',') + '}', l = q, O;
      }
    }
    var G = /^[\],:{}\s]*$/,
      j = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      L = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      E = /(?:^|:|,)(?:\s*\[)+/g,
      Q = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      k = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" != typeof Date["prototype"]["toJSON"] && (Date["prototype"]["toJSON"] = function () {
      return isFinite(this["valueOf"]()) ? this['getUTCFullYear']() + '-' + R(this["getUTCMonth"]() + 1) + '-' + R(this['getUTCDate']()) + 'T' + R(this["getUTCHours"]()) + ':' + R(this['getUTCMinutes']()) + ':' + R(this['getUTCSeconds']()) + 'Z' : null;
    }, Boolean['prototype']["toJSON"] = P, Number['prototype']["toJSON"] = P, String["prototype"]["toJSON"] = P);
    var l, h, K, u;
    "function" != typeof JSON["stringify"] && (K = {
      '\x08': '\x5cb',
      '\x09': '\x5ct',
      '\x0a': '\x5cn',
      '\x0c': '\x5cf',
      '\x0d': '\x5cr',
      '\x22': '\x5c\x22',
      '\x5c': '\x5c\x5c'
    }, JSON["stringify"] = function (X, T, s) {
      var m;
      if (l = '', h = '', "number" == typeof s) {
        for (m = 0; m < s; m += 1) h += '\x20';
      } else "string" == typeof s && (h = s);
      if (u = T, T && "function" != typeof T && ('object' !== ("undefined" == typeof T ? "undefined" : U(T)) || "number" != typeof T["length"])) throw new Error("JSON.stringify");
      return A('', {
        '': X
      });
    }), "function" != typeof JSON["parse"] && (JSON["parse"] = function (X, T) {
      var kP = ka;
      function s(p, O) {
        var N,
          J,
          q = p[O];
        if (q && 'object' === ("undefined" == typeof q ? "undefined" : U(q))) {
          for (N in q) Object["prototype"]["hasOwnProperty"]['call'](q, N) && (J = s(q, N), void 0 !== J ? q[N] = J : delete q[N]);
        }
        return T["call"](p, O, q);
      }
      var m;
      if (X = String(X), k["lastIndex"] = 0, k["test"](X) && (X = X["replace"](k, function (p) {
        return '\x5cu' + ("0000" + p["charCodeAt"](0)["toString"](16))["slice"](-4);
      })), G['test'](X["replace"](j, '@')['replace'](L, ']')["replace"](E, ''))) return m = eval('(' + X + ')'), "function" == typeof T ? s({
        '': m
      }, '') : m;
      throw new SyntaxError("JSON.parse");
    });
  }();
}, function (W, U) {
  var kX = MF;
  function R(S) {
    this['mode'] = K["MODE_8BIT_BYTE"], this["data"] = S, this["parsedData"] = [];
    for (var V = 0, x = this["data"]["length"]; V < x; V++) {
      var F = [],
        b = this['data']['charCodeAt'](V);
      b > 65536 ? (F[0] = 240 | (1835008 & b) >>> 18, F[1] = 128 | (258048 & b) >>> 12, F[2] = 128 | (4032 & b) >>> 6, F[3] = 128 | 63 & b) : b > 2048 ? (F[0] = 224 | (61440 & b) >>> 12, F[1] = 128 | (4032 & b) >>> 6, F[2] = 128 | 63 & b) : b > 128 ? (F[0] = 192 | (1984 & b) >>> 6, F[1] = 128 | 63 & b) : F[0] = b, this["parsedData"]['push'](F);
    }
    this["parsedData"] = Array["prototype"]['concat']["apply"]([], this["parsedData"]), this['parsedData']["length"] != this["data"]["length"] && (this["parsedData"]["unshift"](191), this['parsedData']["unshift"](187), this["parsedData"]["unshift"](239));
  }
  function P(S, V) {
    this["typeNumber"] = S, this["errorCorrectLevel"] = V, this["modules"] = null, this["moduleCount"] = 0, this["dataCache"] = null, this["dataList"] = [];
  }
  function z(S, V) {
    if (void 0 == S["length"]) throw new Error(S['length'] + '/' + V);
    for (var x = 0; x < S["length"] && 0 == S[x];) x++;
    this["num"] = new Array(S["length"] - x + V);
    for (var F = 0; F < S["length"] - x; F++) this["num"][F] = S[F + x];
  }
  function A(S, V) {
    this['totalCount'] = S, this["dataCount"] = V;
  }
  function G() {
    this["buffer"] = [], this["length"] = 0;
  }
  function j() {
    return "undefined" != typeof CanvasRenderingContext2D;
  }
  function L() {
    var S = !1,
      V = navigator["userAgent"];
    if (/android/i["test"](V)) {
      S = !0;
      var x = V['toString']()["match"](/android ([0-9]\.[0-9])/i);
      x && x[1] && (S = parseFloat(x[1]));
    }
    return S;
  }
  function E(S, V) {
    for (var x = 1, F = Q(S), b = 0, w = J["length"]; b <= w; b++) {
      var D = 0;
      switch (V) {
        case X['L']:
          D = J[b][0];
          break;
        case X['M']:
          D = J[b][1];
          break;
        case X['Q']:
          D = J[b][2];
          break;
        case X['H']:
          D = J[b][3];
      }
      if (F <= D) break;
      x++;
    }
    if (x > J["length"]) throw new Error("Too long data");
    return x;
  }
  function Q(S) {
    var V = encodeURI(S)["toString"]()["replace"](/\%[0-9a-fA-F]{2}/g, 'a');
    return V['length'] + (V["length"] != S ? 3 : 0);
  }
  var k;
  R['prototype'] = {
    'getLength': function (S) {
      return this["parsedData"]["length"];
    },
    'write': function (S) {
      for (var V = 0, x = this["parsedData"]['length']; V < x; V++) S["put"](this["parsedData"][V], 8);
    }
  }, P["prototype"] = {
    'addData': function (S) {
      var V = new R(S);
      this["dataList"]["push"](V), this["dataCache"] = null;
    },
    'isDark': function (S, V) {
      if (S < 0 || this["moduleCount"] <= S || V < 0 || this['moduleCount'] <= V) throw new Error(S + ',' + V);
      return this["modules"][S][V];
    },
    'getModuleCount': function () {
      return this["moduleCount"];
    },
    'make': function () {
      this['makeImpl'](!1, this["getBestMaskPattern"]());
    },
    'makeImpl': function (S, V) {
      this["moduleCount"] = 4 * this["typeNumber"] + 17, this['modules'] = new Array(this['moduleCount']);
      for (var x = 0; x < this["moduleCount"]; x++) {
        this['modules'][x] = new Array(this["moduleCount"]);
        for (var F = 0; F < this["moduleCount"]; F++) this["modules"][x][F] = null;
      }
      this["setupPositionProbePattern"](0, 0), this['setupPositionProbePattern'](this['moduleCount'] - 7, 0), this["setupPositionProbePattern"](0, this["moduleCount"] - 7), this['setupPositionAdjustPattern'](), this['setupTimingPattern'](), this["setupTypeInfo"](S, V), this["typeNumber"] >= 7 && this['setupTypeNumber'](S), null == this["dataCache"] && (this["dataCache"] = P["createData"](this["typeNumber"], this["errorCorrectLevel"], this["dataList"])), this['mapData'](this['dataCache'], V);
    },
    'setupPositionProbePattern': function (S, V) {
      for (var x = -1; x <= 7; x++) if (!(S + x <= -1 || this["moduleCount"] <= S + x)) {
        for (var F = -1; F <= 7; F++) V + F <= -1 || this["moduleCount"] <= V + F || (0 <= x && x <= 6 && (0 == F || 6 == F) || 0 <= F && F <= 6 && (0 == x || 6 == x) || 2 <= x && x <= 4 && 2 <= F && F <= 4 ? this["modules"][S + x][V + F] = !0 : this["modules"][S + x][V + F] = !1);
      }
    },
    'getBestMaskPattern': function () {
      for (var S = 0, V = 0, x = 0; x < 8; x++) {
        this["makeImpl"](!0, x);
        var F = m['getLostPoint'](this);
        (0 == x || S > F) && (S = F, V = x);
      }
      return V;
    },
    'createMovieClip': function (S, V, x) {
      var F = S["createEmptyMovieClip"](V, x),
        b = 1;
      this['make']();
      for (var w = 0; w < this['modules']["length"]; w++) for (var D = w * b, B = 0; B < this['modules'][w]["length"]; B++) {
        var I = B * b,
          Z = this['modules'][w][B];
        Z && (F["beginFill"](0, 100), F["moveTo"](I, D), F["lineTo"](I + b, D), F["lineTo"](I + b, D + b), F["lineTo"](I, D + b), F["endFill"]());
      }
      return F;
    },
    'setupTimingPattern': function () {
      for (var S = 8; S < this['moduleCount'] - 8; S++) null == this["modules"][S][6] && (this["modules"][S][6] = S % 2 == 0);
      for (var V = 8; V < this["moduleCount"] - 8; V++) null == this["modules"][6][V] && (this['modules'][6][V] = V % 2 == 0);
    },
    'setupPositionAdjustPattern': function () {
      for (var S = m["getPatternPosition"](this["typeNumber"]), V = 0; V < S["length"]; V++) for (var x = 0; x < S["length"]; x++) {
        var F = S[V],
          b = S[x];
        if (null == this["modules"][F][b]) {
          for (var w = -2; w <= 2; w++) for (var D = -2; D <= 2; D++) w == -2 || 2 == w || D == -2 || 2 == D || 0 == w && 0 == D ? this["modules"][F + w][b + D] = !0 : this["modules"][F + w][b + D] = !1;
        }
      }
    },
    'setupTypeNumber': function (S) {
      for (var V = m["getBCHTypeNumber"](this["typeNumber"]), x = 0; x < 18; x++) {
        var F = !S && 1 == (V >> x & 1);
        this["modules"][Math["floor"](x / 3)][x % 3 + this['moduleCount'] - 8 - 3] = F;
      }
      for (var x = 0; x < 18; x++) {
        var F = !S && 1 == (V >> x & 1);
        this['modules'][x % 3 + this["moduleCount"] - 8 - 3][Math['floor'](x / 3)] = F;
      }
    },
    'setupTypeInfo': function (S, V) {
      for (var x = this["errorCorrectLevel"] << 3 | V, F = m['getBCHTypeInfo'](x), b = 0; b < 15; b++) {
        var w = !S && 1 == (F >> b & 1);
        b < 6 ? this["modules"][b][8] = w : b < 8 ? this["modules"][b + 1][8] = w : this["modules"][this['moduleCount'] - 15 + b][8] = w;
      }
      for (var b = 0; b < 15; b++) {
        var w = !S && 1 == (F >> b & 1);
        b < 8 ? this['modules'][8][this["moduleCount"] - b - 1] = w : b < 9 ? this["modules"][8][15 - b - 1 + 1] = w : this["modules"][8][15 - b - 1] = w;
      }
      this['modules'][this["moduleCount"] - 8][8] = !S;
    },
    'mapData': function (S, V) {
      for (var x = -1, F = this['moduleCount'] - 1, b = 7, w = 0, D = this["moduleCount"] - 1; D > 0; D -= 2) for (6 == D && D--;;) {
        for (var B = 0; B < 2; B++) if (null == this["modules"][F][D - B]) {
          var I = !1;
          w < S['length'] && (I = 1 == (S[w] >>> b & 1));
          var Z = m["getMask"](V, F, D - B);
          Z && (I = !I), this["modules"][F][D - B] = I, b--, b == -1 && (w++, b = 7);
        }
        if (F += x, F < 0 || this["moduleCount"] <= F) {
          F -= x, x = -x;
          break;
        }
      }
    }
  }, P["PAD0"] = 236, P["PAD1"] = 17, P["createData"] = function (S, V, x) {
    for (var F = A['getRSBlocks'](S, V), b = new G(), w = 0; w < x["length"]; w++) {
      var D = x[w];
      b["put"](D["mode"], 4), b["put"](D['getLength'](), m["getLengthInBits"](D["mode"], S)), D["write"](b);
    }
    for (var B = 0, w = 0; w < F["length"]; w++) B += F[w]["dataCount"];
    if (b["getLengthInBits"]() > 8 * B) throw new Error("code length overflow. (" + b['getLengthInBits']() + '>' + 8 * B + ')');
    for (b["getLengthInBits"]() + 4 <= 8 * B && b["put"](0, 4); b["getLengthInBits"]() % 8 != 0;) b["putBit"](!1);
    for (;;) {
      if (b["getLengthInBits"]() >= 8 * B) break;
      if (b['put'](P["PAD0"], 8), b["getLengthInBits"]() >= 8 * B) break;
      b["put"](P["PAD1"], 8);
    }
    return P['createBytes'](b, F);
  }, P["createBytes"] = function (S, V) {
    for (var x = 0, F = 0, b = 0, w = new Array(V["length"]), D = new Array(V["length"]), B = 0; B < V["length"]; B++) {
      var I = V[B]['dataCount'],
        Z = V[B]['totalCount'] - I;
      F = Math["max"](F, I), b = Math["max"](b, Z), w[B] = new Array(I);
      for (var H = 0; H < w[B]['length']; H++) w[B][H] = 255 & S["buffer"][H + x];
      x += I;
      var C0 = m["getErrorCorrectPolynomial"](Z),
        C1 = new z(w[B], C0["getLength"]() - 1),
        C2 = C1['mod'](C0);
      D[B] = new Array(C0['getLength']() - 1);
      for (var H = 0; H < D[B]['length']; H++) {
        var C3 = H + C2["getLength"]() - D[B]["length"];
        D[B][H] = C3 >= 0 ? C2["get"](C3) : 0;
      }
    }
    for (var C4 = 0, H = 0; H < V["length"]; H++) C4 += V[H]["totalCount"];
    for (var C5 = new Array(C4), C6 = 0, H = 0; H < F; H++) for (var B = 0; B < V["length"]; B++) H < w[B]["length"] && (C5[C6++] = w[B][H]);
    for (var H = 0; H < b; H++) for (var B = 0; B < V["length"]; B++) H < D[B]["length"] && (C5[C6++] = D[B][H]);
    return C5;
  };
  for (var K = {
      'MODE_NUMBER': 1,
      'MODE_ALPHA_NUM': 2,
      'MODE_8BIT_BYTE': 4,
      'MODE_KANJI': 8
    }, X = {
      'L': 1,
      'M': 0,
      'Q': 3,
      'H': 2
    }, T = {
      'PATTERN000': 0,
      'PATTERN001': 1,
      'PATTERN010': 2,
      'PATTERN011': 3,
      'PATTERN100': 4,
      'PATTERN101': 5,
      'PATTERN110': 6,
      'PATTERN111': 7
    }, m = {
      'PATTERN_POSITION_TABLE': [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      'G15': 1335,
      'G18': 7973,
      'G15_MASK': 21522,
      'getBCHTypeInfo': function (S) {
        for (var V = S << 10; m["getBCHDigit"](V) - m['getBCHDigit'](m["G15"]) >= 0;) V ^= m["G15"] << m["getBCHDigit"](V) - m["getBCHDigit"](m["G15"]);
        return (S << 10 | V) ^ m['G15_MASK'];
      },
      'getBCHTypeNumber': function (S) {
        for (var V = S << 12; m["getBCHDigit"](V) - m["getBCHDigit"](m["G18"]) >= 0;) V ^= m['G18'] << m["getBCHDigit"](V) - m["getBCHDigit"](m["G18"]);
        return S << 12 | V;
      },
      'getBCHDigit': function (S) {
        for (var V = 0; 0 != S;) V++, S >>>= 1;
        return V;
      },
      'getPatternPosition': function (S) {
        return m["PATTERN_POSITION_TABLE"][S - 1];
      },
      'getMask': function (S, V, x) {
        switch (S) {
          case T["PATTERN000"]:
            return (V + x) % 2 == 0;
          case T['PATTERN001']:
            return V % 2 == 0;
          case T["PATTERN010"]:
            return x % 3 == 0;
          case T["PATTERN011"]:
            return (V + x) % 3 == 0;
          case T["PATTERN100"]:
            return (Math["floor"](V / 2) + Math['floor'](x / 3)) % 2 == 0;
          case T['PATTERN101']:
            return V * x % 2 + V * x % 3 == 0;
          case T["PATTERN110"]:
            return (V * x % 2 + V * x % 3) % 2 == 0;
          case T["PATTERN111"]:
            return (V * x % 3 + (V + x) % 2) % 2 == 0;
          default:
            throw new Error('bad\x20maskPattern:' + S);
        }
      },
      'getErrorCorrectPolynomial': function (S) {
        for (var V = new z([1], 0), x = 0; x < S; x++) V = V["multiply"](new z([1, O["gexp"](x)], 0));
        return V;
      },
      'getLengthInBits': function (S, V) {
        if (1 <= V && V < 10) switch (S) {
          case K["MODE_NUMBER"]:
            return 10;
          case K["MODE_ALPHA_NUM"]:
            return 9;
          case K['MODE_8BIT_BYTE']:
            return 8;
          case K["MODE_KANJI"]:
            return 8;
          default:
            throw new Error("mode:" + S);
        } else {
          if (V < 27) switch (S) {
            case K["MODE_NUMBER"]:
              return 12;
            case K["MODE_ALPHA_NUM"]:
              return 11;
            case K["MODE_8BIT_BYTE"]:
              return 16;
            case K["MODE_KANJI"]:
              return 10;
            default:
              throw new Error("mode:" + S);
          } else {
            if (!(V < 41)) throw new Error("type:" + V);
            switch (S) {
              case K["MODE_NUMBER"]:
                return 14;
              case K["MODE_ALPHA_NUM"]:
                return 13;
              case K['MODE_8BIT_BYTE']:
                return 16;
              case K['MODE_KANJI']:
                return 12;
              default:
                throw new Error('mode:' + S);
            }
          }
        }
      },
      'getLostPoint': function (S) {
        for (var V = S["getModuleCount"](), x = 0, F = 0; F < V; F++) for (var b = 0; b < V; b++) {
          for (var w = 0, D = S['isDark'](F, b), B = -1; B <= 1; B++) if (!(F + B < 0 || V <= F + B)) {
            for (var I = -1; I <= 1; I++) b + I < 0 || V <= b + I || 0 == B && 0 == I || D == S["isDark"](F + B, b + I) && w++;
          }
          w > 5 && (x += 3 + w - 5);
        }
        for (var F = 0; F < V - 1; F++) for (var b = 0; b < V - 1; b++) {
          var Z = 0;
          S['isDark'](F, b) && Z++, S["isDark"](F + 1, b) && Z++, S["isDark"](F, b + 1) && Z++, S["isDark"](F + 1, b + 1) && Z++, 0 != Z && 4 != Z || (x += 3);
        }
        for (var F = 0; F < V; F++) for (var b = 0; b < V - 6; b++) S["isDark"](F, b) && !S['isDark'](F, b + 1) && S["isDark"](F, b + 2) && S['isDark'](F, b + 3) && S["isDark"](F, b + 4) && !S["isDark"](F, b + 5) && S['isDark'](F, b + 6) && (x += 40);
        for (var b = 0; b < V; b++) for (var F = 0; F < V - 6; F++) S['isDark'](F, b) && !S["isDark"](F + 1, b) && S["isDark"](F + 2, b) && S['isDark'](F + 3, b) && S["isDark"](F + 4, b) && !S["isDark"](F + 5, b) && S["isDark"](F + 6, b) && (x += 40);
        for (var H = 0, b = 0; b < V; b++) for (var F = 0; F < V; F++) S["isDark"](F, b) && H++;
        var C0 = Math['abs'](100 * H / V / V - 50) / 5;
        return x += 10 * C0;
      }
    }, O = {
      'glog': function (S) {
        if (S < 1) throw new Error("glog(" + S + ')');
        return O["LOG_TABLE"][S];
      },
      'gexp': function (S) {
        for (; S < 0;) S += 255;
        for (; S >= 256;) S -= 255;
        return O["EXP_TABLE"][S];
      },
      'EXP_TABLE': new Array(256),
      'LOG_TABLE': new Array(256)
    }, N = 0; N < 8; N++) O["EXP_TABLE"][N] = 1 << N;
  for (var N = 8; N < 256; N++) O["EXP_TABLE"][N] = O["EXP_TABLE"][N - 4] ^ O["EXP_TABLE"][N - 5] ^ O['EXP_TABLE'][N - 6] ^ O["EXP_TABLE"][N - 8];
  for (var N = 0; N < 255; N++) O["LOG_TABLE"][O["EXP_TABLE"][N]] = N;
  z['prototype'] = {
    'get': function (S) {
      return this["num"][S];
    },
    'getLength': function () {
      return this['num']['length'];
    },
    'multiply': function (S) {
      for (var V = new Array(this["getLength"]() + S['getLength']() - 1), x = 0; x < this["getLength"](); x++) for (var F = 0; F < S["getLength"](); F++) V[x + F] ^= O["gexp"](O["glog"](this["get"](x)) + O["glog"](S['get'](F)));
      return new z(V, 0);
    },
    'mod': function (S) {
      if (this['getLength']() - S["getLength"]() < 0) return this;
      for (var V = O["glog"](this['get'](0)) - O["glog"](S['get'](0)), x = new Array(this['getLength']()), F = 0; F < this["getLength"](); F++) x[F] = this["get"](F);
      for (var F = 0; F < S["getLength"](); F++) x[F] ^= O['gexp'](O["glog"](S["get"](F)) + V);
      return new z(x, 0)['mod'](S);
    }
  }, A["RS_BLOCK_TABLE"] = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], A["getRSBlocks"] = function (S, V) {
    var x = A["getRsBlockTable"](S, V);
    if (void 0 == x) throw new Error('bad\x20rs\x20block\x20@\x20typeNumber:' + S + "/errorCorrectLevel:" + V);
    for (var F = x["length"] / 3, b = [], w = 0; w < F; w++) for (var D = x[3 * w + 0], B = x[3 * w + 1], I = x[3 * w + 2], Z = 0; Z < D; Z++) b["push"](new A(B, I));
    return b;
  }, A["getRsBlockTable"] = function (S, V) {
    switch (V) {
      case X['L']:
        return A["RS_BLOCK_TABLE"][4 * (S - 1) + 0];
      case X['M']:
        return A["RS_BLOCK_TABLE"][4 * (S - 1) + 1];
      case X['Q']:
        return A["RS_BLOCK_TABLE"][4 * (S - 1) + 2];
      case X['H']:
        return A["RS_BLOCK_TABLE"][4 * (S - 1) + 3];
      default:
        return;
    }
  }, G["prototype"] = {
    'get': function (S) {
      var V = Math["floor"](S / 8);
      return 1 == (this['buffer'][V] >>> 7 - S % 8 & 1);
    },
    'put': function (S, V) {
      for (var x = 0; x < V; x++) this["putBit"](1 == (S >>> V - x - 1 & 1));
    },
    'getLengthInBits': function () {
      return this["length"];
    },
    'putBit': function (S) {
      var V = Math['floor'](this["length"] / 8);
      this['buffer']["length"] <= V && this["buffer"]['push'](0), S && (this["buffer"][V] |= 128 >>> this["length"] % 8), this['length']++;
    }
  };
  var J = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
    q = function () {
      var l5 = kX;
      function S() {
        this["_htOption"]["useCanvas"] ? (this["_elImage"]["style"]["display"] = 'none', this["_elCanvas"]["style"]['display'] = "block") : (this["_elImage"]['src'] = this['_elCanvas']["toDataURL"]("image/png"), this["_elImage"]["style"]["display"] = "block", this['_elCanvas']['style']["display"] = "none");
      }
      function V(w, D) {
        var l2 = M,
          B = this;
        if (B["_fFail"] = D, B["_fSuccess"] = w, null === B["_bSupportDataURI"]) {
          var I = document["createElement"]('img'),
            Z = function () {
              B['_bSupportDataURI'] = !1, B["_fFail"] && B["_fFail"]['call'](B);
            },
            H = function () {
              B['_bSupportDataURI'] = !0, B["_fSuccess"] && B["_fSuccess"]["call"](B);
            };
          return I["onabort"] = Z, I['onerror'] = Z, I["onload"] = H, void (I["src"] = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
        }
        B["_bSupportDataURI"] === !0 && B["_fSuccess"] ? B["_fSuccess"]["call"](B) : B['_bSupportDataURI'] === !1 && B['_fFail'] && B["_fFail"]["call"](B);
      }
      if (this && this['_android'] && this['_android'] <= 2.1) {
        var x = 1 / window['devicePixelRatio'],
          F = CanvasRenderingContext2D["prototype"]["drawImage"];
        CanvasRenderingContext2D["prototype"]['drawImage'] = function (w, D, B, I, Z, H, C0, C1, C2) {
          if ("nodeName" in w && /img/i["test"](w["nodeName"])) {
            for (var C3 = arguments["length"] - 1; C3 >= 1; C3--) arguments[C3] = arguments[C3] * x;
          } else "undefined" == typeof C1 && (arguments[1] *= x, arguments[2] *= x, arguments[3] *= x, arguments[4] *= x);
          F["apply"](this, arguments);
        };
      }
      var b = function (w, D) {
        this["_bIsPainted"] = !1, this['_android'] = L(), this["_htOption"] = D, this['_elCanvas'] = document["createElement"]("canvas"), this["_elCanvas"]["width"] = D['width'], this["_elCanvas"]['height'] = D["height"], this["_htOption"]["useCanvas"] && w["appendChild"](this["_elCanvas"]), this["_el"] = w, this["_oContext"] = this["_elCanvas"]["getContext"]('2d'), this["_bIsPainted"] = !1, this['_elImage'] = document["createElement"]("img"), this["_elImage"]["alt"] = 'SMS\x20jump\x20QR\x20code', this["_elImage"]["style"]["display"] = "none", this["_htOption"]["useCanvas"] || this["_el"]["appendChild"](this["_elImage"]), this["_bSupportDataURI"] = null;
      };
      return b["prototype"]['draw'] = function (w) {
        var l8 = l5,
          D = this["_elImage"],
          B = this["_elCanvas"],
          I = this["_oContext"],
          Z = this["_htOption"],
          H = w["getModuleCount"](),
          C0 = Z["width"] / H,
          C1 = Z["height"] / H,
          C2 = Math['round'](C0),
          C3 = Math["round"](C1);
        D["style"]["display"] = "none", B["style"]['display'] = "none", this["clear"]();
        for (var C4 = 0; C4 < H; C4++) for (var C5 = 0; C5 < H; C5++) {
          var C6 = w["isDark"](C4, C5),
            C7 = C5 * C0,
            C8 = C4 * C1;
          I["strokeStyle"] = C6 ? Z["colorDark"] : Z["colorLight"], I["lineWidth"] = 1, I['fillStyle'] = C6 ? Z["colorDark"] : Z['colorLight'], I["fillRect"](C7, C8, C0, C1), I["strokeRect"](Math["floor"](C7) + 0.5, Math["floor"](C8) + 0.5, C2, C3), I["strokeRect"](Math["ceil"](C7) - 0.5, Math['ceil'](C8) - 0.5, C2, C3);
        }
        if (this['_htOption']["imgSrc"] && j()) {
          var C9 = new Image();
          C9["crossOrigin"] = '*';
          var CC = this["_htOption"]["width"],
            CM = this["_htOption"]["imgWidth"],
            Ca = (CC - CM) / 2,
            CW = this;
          C9["onload"] = function () {
            I["drawImage"](C9, Ca, Ca, CM, CM), CW["_htOption"]['useCanvas'] || CW["makeImage"]();
          }, C9["src"] = this['_htOption']["imgSrc"], (C9["complete"] || void 0 === C9["complete"]) && (C9["src"] = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", C9["src"] = this["_htOption"]['imgSrc']);
        }
        this["_bIsPainted"] = !0;
      }, b['prototype']["makeImage"] = function () {
        this['_bIsPainted'] && V["call"](this, S);
      }, b["prototype"]["isPainted"] = function () {
        return this['_bIsPainted'];
      }, b["prototype"]["clear"] = function () {
        this['_oContext']["clearRect"](0, 0, this["_elCanvas"]['width'], this["_elCanvas"]["height"]), this["_bIsPainted"] = !1;
      }, b["prototype"]["round"] = function (w) {
        return w ? Math['floor'](1000 * w) / 1000 : w;
      }, b;
    }();
  k = function (S, V) {
    if (this["_htOption"] = {
      'width': 256,
      'height': 256,
      'typeNumber': 4,
      'colorDark': "#000",
      'colorLight': '#fff',
      'correctLevel': X['H'],
      'imgSrc': void 0,
      'useCanvas': !0
    }, this["_htOption"]["imgWidth"] = this["_htOption"]["width"] / 4, "string" == typeof V && (V = {
      'text': V
    }), V) {
      for (var x in V) this["_htOption"][x] = V[x];
      V['width'] && !V["imgWidth"] && (this['_htOption']["imgWidth"] = this['_htOption']["width"] / 4);
    }
    "string" == typeof S && (S = document["getElementById"](S)), this["_android"] = L(), this["_el"] = S, this['_oQRCode'] = null, this["_oDrawing"] = new q(this["_el"], this["_htOption"]), this["_htOption"]['text'] && this["makeCode"](this["_htOption"]["text"]);
  }, k["prototype"]['makeCode'] = function (S) {
    this["_oQRCode"] = new P(E(S, this["_htOption"]["correctLevel"]), this['_htOption']['correctLevel']), this["_oQRCode"]['addData'](S), this["_oQRCode"]["make"](), this["_el"]['title'] = S, this["_oDrawing"]["draw"](this["_oQRCode"]), this["_htOption"]["imgSrc"] && !this["_htOption"]["useCanvas"] || this["makeImage"]();
  }, k["prototype"]["makeImage"] = function () {
    'function' == typeof this['_oDrawing']["makeImage"] && (!this["_android"] || this["_android"] >= 3) && this["_oDrawing"]['makeImage']();
  }, k["prototype"]["clear"] = function () {
    this["_oDrawing"]["clear"]();
  }, k["CorrectLevel"] = X, W["exports"] = k;
}, function (a, W) {
  var lP = MF;
  a["exports"] = function (U, R) {
    function P() {}
    P["prototype"] = R["prototype"], U["prototype"] = new P(), U["prototype"]["constructor"] = U;
  };
}, function (a, W) {
  var lA = MF;
  Array["isArray"] || (Array["isArray"] = function (U) {
    return "[object Array]" === Object["prototype"]["toString"]["call"](U);
  });
}, function (a, W) {
  var lj = MF;
  "function" != typeof Object['assign'] && (Object["assign"] = function (U) {
    if (null == U) throw new TypeError('Cannot\x20convert\x20undefined\x20or\x20null\x20to\x20object');
    U = Object(U);
    for (var R = 1; R < arguments['length']; R++) {
      var P = arguments[R];
      if (null != P) {
        for (var z in P) Object["prototype"]["hasOwnProperty"]['call'](P, z) && (U[z] = P[z]);
      }
    }
    return U;
  });
}, function (a, W) {
  var lE = MF,
    U = 'function' == typeof Symbol && "symbol" == typeof Symbol['iterator'] ? function (R) {
      return typeof R;
    } : function (R) {
      return R && "function" == typeof Symbol && R['constructor'] === Symbol && R !== Symbol["prototype"] ? "symbol" : typeof R;
    };
  Object["keys"] || (Object["keys"] = function () {
    'use strict';

    var lk = lE;
    var R = Object["prototype"]["hasOwnProperty"],
      P = !{
        'toString': null
      }["propertyIsEnumerable"]("toString"),
      z = ["toString", "toLocaleString", "valueOf", 'hasOwnProperty', "isPrototypeOf", "propertyIsEnumerable", 'constructor'],
      A = z["length"];
    return function (G) {
      if ("function" != typeof G && ("object" !== ("undefined" == typeof G ? "undefined" : U(G)) || null === G)) throw new TypeError("Object.keys called on non-object");
      var j,
        L,
        E = [];
      for (j in G) R["call"](G, j) && E['push'](j);
      if (P) {
        for (L = 0; L < A; L++) R["call"](G, z[L]) && E["push"](z[L]);
      }
      return E;
    };
  }());
}, function (a, W) {
  var lh = MF;
  Array['prototype']["indexOf"] || (Array['prototype']["indexOf"] = function (U, R) {
    var P;
    if (null == this) throw new TypeError("\"this\" is null or not defined");
    var z = Object(this),
      A = z['length'] >>> 0;
    if (0 === A) return -1;
    var G = +R || 0;
    if (Math["abs"](G) === 1 / 0 && (G = 0), G >= A) return -1;
    for (P = Math["max"](G >= 0 ? G : A - Math['abs'](G), 0); P < A;) {
      if (P in z && z[P] === U) return P;
      P++;
    }
    return -1;
  });
}, function (a, W) {
  var lu = MF;
  Array["prototype"]['map'] || (Array["prototype"]['map'] = function (U, R) {
    var P, z, A;
    if (null == this) throw new TypeError(" this is null or not defined");
    var G = Object(this),
      j = G["length"] >>> 0;
    if ("[object Function]" !== Object["prototype"]["toString"]["call"](U)) throw new TypeError(U + '\x20is\x20not\x20a\x20function');
    for (R && (P = R), z = new Array(j), A = 0; A < j;) {
      var L, E;
      A in G && (L = G[A], E = U['call'](P, L, A, G), z[A] = E), A++;
    }
    return z;
  });
}, function (a, W) {
  var lT = MF;
  Function["prototype"]['bind'] || (Function["prototype"]["bind"] = function (U) {
    var ls = lT;
    if ('function' != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var R = Array["prototype"]["slice"]["call"](arguments, 1),
      P = this,
      z = function () {},
      A = function () {
        return P["apply"](this instanceof z ? this : U, R['concat'](Array["prototype"]["slice"]["call"](arguments)));
      };
    return this["prototype"] && (z["prototype"] = this["prototype"]), A["prototype"] = new z(), A;
  });
}, function (a, W, U) {
  U(60), U(67), U(66), U(63), U(65), U(64), U(70), U(68);
}, function (a, W) {
  var lp = MF;
  String["prototype"]["trim"] || (String["prototype"]['trim'] = function () {
    return this["replace"](/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  });
}, function (Q, K, J) {
  var ly = MF;
  function q(Ci, Cx, CF) {
    return Cx in Ci ? Object["defineProperty"](Ci, Cx, {
      'value': CF,
      'enumerable': !0,
      'configurable': !0,
      'writable': !0
    }) : Ci[Cx] = CF, Ci;
  }
  function Z(Ci, Cx) {
    var CF = Ci["apiServer"],
      Cb = Ci["protocol"],
      Cc = "/api/v3" + Cx;
    return Array["isArray"](CF) ? CF["map"](function (Cv) {
      return Cs({
        'protocol': Cb,
        'host': Cv,
        'path': Cc
      });
    }) : Cs({
      'protocol': Cb,
      'host': CF,
      'path': Cc
    });
  }
  function C0(Ci, Cx, CF) {
    var Cb = Ci || !Cx && new Error("Server error, \"res\" is not right.(" + CF + ')') || Cx['error'] && new Error(Cx["error"] + ':\x20' + Cx["msg"] + '.(' + CF + ')') || null;
    return !Ci && Cx && Cx["error"] ? (Cb['code'] = Cy, Cb["errorCode"] = Cx["error"], Cb["errorMsg"] = Cx['msg']) : !Ci && Cx || (Cb["code"] = CV), Cb;
  }
  function C1(Ci) {
    var Cx = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
    return null == Ci ? '' : String(CT["isFn"](Ci) ? Ci() : Ci)["substring"](0, Cx);
  }
  function C2() {
    var Ci = {
        'suffix': '0s7267',
        'code': "8kpgg4",
        'pos': [7, 20, 24, 28, 30, 31]
      } || {},
      Cx = Ci["code"],
      CF = Ci["pos"],
      Cb = CT["uuid"](32);
    if (Cx && CF && Array["isArray"](CF)) {
      for (var Cc = Cb["split"](''), Cv = 0; Cv < CF['length']; Cv++) Cc[CF[Cv]] = Cx[Cv];
      Cb = Cc["join"]('');
    }
    
    return Cp(Cb);
  }
  function C3(Ci, Cx, CF) {
    var Cb = CO(Cp(Ci + '::' + Cx)),
      Cc = CF ? CF + '_' + Cb : Cb;
    return Cc + "_v_i_1";
  }
  var C4,
    C5,
    C6 = J(6),
    C7 = C6["INVOKE_HOOK"],
    C8 = C6["EVENT_CLOSE"],
    C9 = C6['EVENT_RESET'],
    CC = C6["SWITCH_TYPE"],
    CM = C6["SET_TYPE"],
    Ca = C6["SWITCH_LOAD_STATUS"],
    CW = C6['UPDATE_VERIFY_STATUS'],
    CU = C6["REFRESH"],
    CR = C6['UPDATE_COUNTS_OF_VERIFYERROR'],
    CP = C6['SET_TOKEN'],
    Cz = C6["EVENT_RESET_CLASSIC"],
    CA = C6['UPDATE_LINK_TIME'],
    CG = C6["UPDATE_CORE_WIDTH"],
    Cj = J(14),
    CL = Cj['FETCH_CAPTCHA'],
    CE = Cj['FETCH_INTELLISENSE_CAPTCHA'],
    CQ = Cj["VERIFY_CAPTCHA"],
    Ck = Cj['VERIFY_INTELLISENSE_CAPTCHA'],
    Cl = Cj["RESET_STATE"],
    Ch = J(5),
    CK = Ch["CAPTCHA_TYPE"],
    Cu = Ch["DEVICE"],
    CX = J(4),
    CT = J(3),
    Cs = J(18),
    Cm = J(10),
    Cp = Cm["aes"],
    CO = J(48),
    CN = J(9),
    Ct = CN['createNetCollect'],
    CJ = CN["createLinkTimeCollect"],
    Cq = J(7),
    CS = Cq["UNPASS_ERROR"],
    CV = Cq["REQUEST_API_ERROR"],
    Cy = Cq["BUSINESS_ERROR"],
    Cn = CX['isMobile'] ? Cu["TOUCH"] : CX['supportTouch'] ? Cu["MOUSE_TOUCH"] : Cu["MOUSE"],
    Ce = {
      'state': {
        'version': '2.27.2',
        'fingerprint': '',
        'config': null,
        'langPkg': null,
        'smsNew': !1,
        'captchaType': null,
        'type': '',
        'load': null,
        'verifyStatus': '',
        'token': '',
        'previousToken': '',
        'countsOfVerifyError': 0,
        'startTimestamp': null,
        'getApiCount': 0,
        'coreOffsetWidth': null
      },
      'mutations': (C4 = {}, q(C4, C7, function () {}), q(C4, C8, function () {}), q(C4, C9, function () {}), q(C4, Cz, function () {}), q(C4, CC, function (Ci, Cx) {
        Ci["captchaType"] = Cx["captchaType"];
      }), q(C4, CM, function (Ci, Cx) {
        Ci["type"] = Cx["captchaType"];
      }), q(C4, Ca, function (Ci, Cx) {
        Ci["load"] = Cx;
      }), q(C4, CW, function (Ci, Cx) {
        Ci["verifyStatus"] = Cx["verifyStatus"];
      }), q(C4, CU, function (Ci) {
        Ci["load"] = null, Ci["verifyStatus"] = '';
      }), q(C4, CR, function (Ci, Cx) {
        Ci['countsOfVerifyError'] = Cx['counts'];
      }), q(C4, CP, function (Ci, Cx) {
        Cx && (Ci["previousToken"] = Cx), Ci["token"] = Cx;
      }), q(C4, CA, function (Ci, Cx) {
        Cx && (Ci['startTimestamp'] = Cx['startTimestamp'], Ci['getApiCount'] = Cx["getApiCount"]);
      }), q(C4, CG, function (Ci, Cx) {
        Cx && (Ci["coreOffsetWidth"] = Cx['coreOffsetWidth']);
      }), C4),
      'actions': (C5 = {}, q(C5, Cl, function (Ci) {
        var Cx = Ci["commit"];
        Cx(CC, {
          'captchaType': null
        }), Cx(Ca, null), Cx(CW, {
          'verifyStatus': ''
        }), Cx(CP, ''), Cx(CR, {
          'counts': 0
        });
      }), q(C5, CL, function (Ci, Cx) {
        var lY = ly,
          CF = Ci["commit"],
          Cb = Ci["state"],
          Cc = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          Cv = Cb["fingerprint"],
          Cf = Cb["version"],
          CY = Cb["$fetch"],
          Cw = Cb["$captchaAnticheat"],
          CD = Cb["captchaCollector"],
          CB = Cb['iv'],
          Co = Cb["startTimestamp"],
          CI = Cb['getApiCount'],
          Cr = Cb["config"],
          CZ = Cr['apiServer'],
          CH = Cr["captchaId"],
          Cd = Cr["protocol"],
          Cg = Cr['captchaType'],
          M0 = Cr["ipv6"],
          M1 = Cr["runEnv"],
          M2 = Cr["group"],
          M3 = Cr["scene"],
          M4 = Cr["lang"],
          M5 = Cr["sdkVer"],
          M6 = Object['assign']({
            'id': CH,
            'fp': Cv,
            'https': "https" === Cd,
            'type': Cg,
            'version': Cf,
            'dpr': window["devicePixelRatio"] || 1,
            'dev': Cn,
            'cb': C2(),
            'ipv6': M0,
            'runEnv': M1,
            'group': M2,
            'scene': M3,
            'lang': M4,
            'sdkVersion': M5,
            'iv': CB
          }, Cx),
          M7 = Z({
            'apiServer': CZ,
            'protocol': Cd
          }, '/get');
        CF(Ca, {
          'status': "loading"
        }), Cw["getToken"]({
          'timeout': 500
        })["then"](function (M8) {
          var lw = lY;
          CY(M7, Object["assign"]({
            'acToken': M8
          }, M6), function (M9, MC) {
            if (M9 = C0(M9, MC, M7)) {
              var MM = new Cq(M9["code"], M9['message'], {
                'url': M7,
                'api': "get",
                'errorCode': M9["errorCode"] || null,
                'errorMsg': M9["errorMsg"] || null
              });
              return Cc(MM), CF(Ca, {
                'status': "fail",
                'data': MM
              }), void CF(C7, {
                'name': 'onError',
                'args': [MM]
              });
            }
            Cc(null, MC), Co && 0 === CI && (CJ(CD, {
              'lt': new Date()["getTime"]() - Co,
              'ct': Cg
            }), CF(CA, {
              'getApiCount': CI + 1,
              'startTimestamp': null
            }));
            var Ma = MC["data"];
            Ma["type"] !== CK['INTELLISENSE'] && Ma['type'] !== Cb["captchaType"] && CF(CC, {
              'captchaType': Ma["type"],
              'prevCaptchaType': Cb["captchaType"]
            }), CF(CM, {
              'captchaType': Ma["type"]
            }), CF(CP, Ma["token"]), CF(Ca, {
              'status': "loading",
              'data': Ma
            });
          }, {
            'onProcess': Ct(CD)
          });
        });
      }), q(C5, CE, function (Ci, Cx) {
        var lB = ly,
          CF = Ci["commit"],
          Cb = Ci["state"],
          Cc = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          Cv = Cb["fingerprint"],
          Cf = Cb["version"],
          CY = Cb['$fetch'],
          Cw = Cb["$captchaAnticheat"],
          CD = Cb["captchaCollector"],
          CB = Cb['iv'],
          Co = Cb["startTimestamp"],
          CI = Cb['getApiCount'],
          Cr = Cb["config"],
          CZ = Cr["apiServer"],
          CH = Cr["captchaId"],
          Cd = Cr["protocol"],
          Cg = Cr['captchaType'],
          M0 = Cr['ipv6'],
          M1 = Cr["runEnv"],
          M2 = Cr['group'],
          M3 = Cr['scene'],
          M4 = Cr["sdkVer"],
          M5 = Z({
            'apiServer': CZ,
            'protocol': Cd
          }, "/get");
        Cw["getToken"]({
          'timeout': 500
        })["then"](function (M6) {
          var lo = lB,
            M7 = Object["assign"]({
              'id': CH,
              'fp': Cv,
              'https': "https" === Cd,
              'type': Cg,
              'width': Cx["width"],
              'sizeType': Cx["sizeType"],
              'version': Cf,
              'dpr': window["devicePixelRatio"] || 1,
              'dev': Cn,
              'cb': C2(),
              'acToken': M6,
              'ipv6': M0,
              'runEnv': M1,
              'group': M2,
              'scene': M3,
              'sdkVersion': M4,
              'iv': CB
            }, Cx);
          CY(M5, M7, function (M8, M9) {
            if (M8 = C0(M8, M9, M5)) {
              var MC = new Cq(M8["code"], M8["message"], {
                'url': M5,
                'api': 'get',
                'errorCode': M8["errorCode"] || null,
                'errorMsg': M8["errorMsg"] || null
              });
              return CF(C7, {
                'name': "onError",
                'args': [MC]
              }), void Cc(MC);
            }
            CF(CM, {
              'captchaType': CK["INTELLISENSE"]
            }), CF(CP, M9["data"]["token"]), Cc(null, M9), Co && 0 === CI && (CJ(CD, {
              'lt': new Date()['getTime']() - Co,
              'ct': Cg
            }), CF(CA, {
              'getApiCount': CI + 1,
              'startTimestamp': null
            }));
          }, {
            'onProcess': Ct(CD)
          });
        });
      }), q(C5, Ck, function (Ci, Cx, CF) {
        var lr = ly,
          Cb = Ci["commit"],
          Cc = Ci["state"],
          Cv = Cc["version"],
          Cf = Cc["type"],
          CY = Cc["$fetch"],
          Cw = Cc["captchaCollector"],
          CD = Cc["browserFeature"],
          CB = Cc['iv'],
          Co = Cc['config'],
          CI = Co["apiServer"],
          Cr = Co["captchaId"],
          CZ = Co['protocol'],
          CH = Co["extraData"],
          Cd = Co["runEnv"],
          Cg = Co["zoneId"],
          M0 = Co['sdkVer'],
          M1 = Object["assign"]({
            'id': Cr,
            'version': Cv,
            'cb': C2(),
            'extraData': C1(CH),
            'bf': CD,
            'runEnv': Cd,
            'sdkVersion': M0,
            'iv': CB
          }, Cx),
          M2 = Z({
            'apiServer': CI,
            'protocol': CZ
          }, "/check");
        CY(M2, M1, function (M3, M4) {
          if (M3 = C0(M3, M4, M2), M3 ? M3 = new Cq(M3["code"], M3["message"], {
            'url': M2,
            'token': M1["token"],
            'type': Cf,
            'errorCode': M3['errorCode'] || null,
            'errorMsg': M3["errorMsg"] || null
          }) : CT["getIn"](M4, "data.result") || (M3 = new Cq(CS, "Failed to verify captcha.", {
            'url': M2,
            'type': Cf,
            'token': M1["token"]
          })), M3) Cb(C7, {
            'name': "onVerify",
            'args': [M3]
          });else {
            var M5 = Cc["fingerprint"],
              M6 = C3(M4['data']["validate"], M5, Cg);
            Cb(C7, {
              'name': "onVerify",
              'args': [null, {
                'validate': M6
              }]
            });
          }
          CF && CF(M3, M4);
        }, {
          'onProcess': Ct(Cw, {
            'token': M1["token"]
          })
        });
      }), q(C5, CQ, function (Ci, Cx) {
        var lH = ly,
          CF = Ci["commit"],
          Cb = Ci["state"],
          Cc = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          Cv = Cb["fingerprint"],
          Cf = Cb["captchaType"],
          CY = Cb['version'],
          Cw = Cb["verifyStatus"],
          CD = Cb["countsOfVerifyError"],
          CB = Cb["$fetch"],
          Co = Cb["type"],
          CI = Cb["captchaCollector"],
          Cr = Cb['browserFeature'],
          CZ = Cb['iv'],
          CH = Cb["config"],
          Cd = CH["apiServer"],
          Cg = CH["captchaId"],
          M0 = CH["protocol"],
          M1 = CH["extraData"],
          M2 = CH["runEnv"],
          M3 = CH['zoneId'],
          M4 = CH['sdkVer'],
          M5 = Cx['token'],
          M6 = Cx['data'],
          M7 = Cx["width"],
          M8 = Cx['acToken'],
          M9 = Z({
            'apiServer': Cd,
            'protocol': M0
          }, "/check");
        CF(CW, {
          'verifyStatus': "verifying"
        });
        var MC = function (MM, Ma) {
          var MW = Ma && Ma["data"];
          if (MM = C0(MM, Ma, M9), !(["success", "error"]["indexOf"](Cw) > -1)) {
            if (MM || !MW["result"] && Cf !== CK["SMS"]) {
              var MU = MM ? MM["message"] : "Failed to verify captcha.",
                MR = MM ? MM["code"] : CS,
                MP = MM ? MM['errorCode'] : null,
                Mz = MM ? MM["errorMsg"] : null;
              return MM = new Cq(MR, MU, {
                'url': M9,
                'token': M5,
                'type': Co,
                'counts': CD + 1,
                'errorCode': MP,
                'errorMsg': Mz
              }), CF(CW, {
                'verifyStatus': "error",
                'error': MM
              }), CF(CR, {
                'counts': CD + 1
              }), CF(C7, {
                'name': 'onVerify',
                'args': [MM]
              }), void Cc(MM);
            }
            if (MW["result"]) {
              var MA = C3(MW["validate"], Cv, M3);
              CF(CW, {
                'verifyStatus': 'success',
                'validate': MW["validate"]
              }), CF(C7, {
                'name': "onVerify",
                'args': [null, {
                  'validate': MA
                }]
              }), Cc(null, Ma);
            }
          }
        };
        CB(M9, {
          'id': Cg,
          'token': M5,
          'acToken': M8,
          'data': M6,
          'width': M7,
          'type': Cf,
          'version': CY,
          'cb': C2(),
          'extraData': C1(M1),
          'bf': Cr,
          'runEnv': M2,
          'sdkVersion': M4,
          'iv': CZ
        }, MC, {
          'onProcess': Ct(CI, {
            'token': M5
          })
        });
      }), C5)
    };
  // Q['exports'] = Ce;
  Q['exports'] = C2;
}, function (a, W, U) {
  W = a["exports"] = U(30)(), W["push"]([a['id'], ".yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner,.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon,.yidun.yidun--light .yidun_tips__answer,.yidun.yidun--light .yidun_tips__before,.yidun.yidun--light .yidun_tips__content,.yidun_intellisense--light .yidun_classic-tips .yidun_tips__icon,.yidun_intellisense--light .yidun_intelli-icon,.yidun_popup.yidun_popup--light .yidun_modal,.yidun_popup.yidun_popup--light .yidun_modal__before,.yidun_popup.yidun_popup--light .yidun_modal__sibling,.yidun_popup.yidun_popup--light .yidun_modal__title{display:inline-block;*display:inline;zoom:1;vertical-align:top}.yidun,.yidun_popup{-webkit-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;text-size-adjust:100%!important;-moz-text-size-adjust:100%!important}.yidun{-webkit-tap-highlight-color:transparent}.yidun *{box-sizing:border-box}.yidun :focus-visible{outline:2px solid #4997fd}.panel_ease_top-enter,.panel_ease_top-leave-active{opacity:0;transform:translateY(20px)}.panel_ease_bottom-enter,.panel_ease_bottom-leave-active{opacity:0;transform:translateY(-20px)}.panel_ease_bottom-enter-active,.panel_ease_bottom-leave-active,.panel_ease_top-enter-active,.panel_ease_top-leave-active{transition:all .2s linear;pointer-events:none}.popup_scale-enter,.popup_scale-leave-active{opacity:0;transform:scale(0)}.popup_scale-enter-active{transition:all .3s cubic-bezier(.76,.01,.35,1.56)}.popup_scale-leave-active{transition:all .2s ease-out}.popup_ease-enter{opacity:0;transform:translateY(-20px)}.popup_ease-enter-active{transition:opacity .3s linear,transform .3s linear}.popup_ease-leave-active{opacity:0;transform:translateY(-20px);transition:all .2s ease-out}@keyframes loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes ball-scale-multiple{0%{transform:scale(.22);opacity:0}5%{opacity:1}to{transform:scale(1);opacity:0}}@keyframes bright{0%{opacity:.5}to{opacity:1}}.yidun_cover-frame{position:absolute;top:0;left:0;width:100%;height:100%;border:0;opacity:0;filter:alpha(opacity=0)}.yidun.yidun--light{position:relative;margin:auto;font-size:14px;-ms-touch-action:none;touch-action:none}.yidun.yidun--light img{pointer-events:none}.yidun.yidun--light .yidun_avoid-canvas,.yidun.yidun--light .yidun_avoid-front,.yidun.yidun--light .yidun_jigsaw,.yidun.yidun--light .yidun_slide_indicator,.yidun.yidun--light .yidun_slider{display:none}.yidun.yidun--light.yidun--jigsaw .yidun_jigsaw,.yidun.yidun--light.yidun--jigsaw .yidun_slide_indicator,.yidun.yidun--light.yidun--jigsaw .yidun_slider{display:block}.yidun.yidun--light.yidun--jigsaw .yidun_tips__content{width:100%}.yidun.yidun--light.yidun--jigsaw .yidun_tips{padding-left:40px}.yidun.yidun--light .yidun_jigsaw{position:absolute;left:0;top:0;width:auto;height:100%;-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden;pointer-events:auto}.yidun.yidun--light .yidun_icon-point{position:absolute;width:26px;height:33px;cursor:pointer;background-repeat:no-repeat}.yidun.yidun--light .yidun_icon-point.yidun_point-1{background-image:url(" + U(1) + ');background-position:0\x20-997px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light\x20.yidun_icon-point.yidun_point-1{background-image:url(' + U(2) + ");background-position:0 -994px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-2{background-image:url(" + U(1) + ');background-position:0\x20-1111px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light\x20.yidun_icon-point.yidun_point-2{background-image:url(' + U(2) + ");background-position:0 -1108px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-3{background-image:url(" + U(1) + ");background-position:0 -1035px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-3{background-image:url(" + U(2) + ');background-position:0\x20-1032px;background-size:40px\x201515px}}.yidun.yidun--light\x20.yidun_icon-point.yidun_point-4{background-image:url(' + U(1) + ");background-position:0 -1073px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_icon-point.yidun_point-4{background-image:url(" + U(2) + ");background-position:0 -1070px;background-size:40px 1515px}}.yidun.yidun--light .yidun_icon-point.yidun_point-5{background-image:url(" + U(1) + ');background-position:0\x20-1149px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light\x20.yidun_icon-point.yidun_point-5{background-image:url(' + U(2) + ");background-position:0 -1146px;background-size:40px 1515px}}.yidun.yidun--light.yidun--space .yidun_icon-point{width:29px;height:29px;background-image:url(" + U(1) + ");background-position:0 -646px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--space .yidun_icon-point{background-image:url(" + U(2) + ");background-position:0 -643px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_icon-point{cursor:default}.yidun.yidun--light .yidun_inference{display:none;position:absolute;width:25%;height:50%;overflow:hidden;box-sizing:border-box;background-color:transparent}.yidun.yidun--light .yidun_inference .yidun_inference__border{display:block;position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;border:1px solid #fff;box-sizing:border-box;background:transparent;border-radius:inherit;transition:border .2s ease-out 0s}.yidun.yidun--light .yidun_inference.yidun_inference--0,.yidun.yidun--light .yidun_inference.yidun_inference--0 .yidun_inference__img{top:0;left:0}.yidun.yidun--light .yidun_inference.yidun_inference--1{top:0;left:25%}.yidun.yidun--light .yidun_inference.yidun_inference--1 .yidun_inference__img{top:0;left:-100%}.yidun.yidun--light .yidun_inference.yidun_inference--2{top:0;left:50%}.yidun.yidun--light .yidun_inference.yidun_inference--2 .yidun_inference__img{top:0;left:-200%}.yidun.yidun--light .yidun_inference.yidun_inference--3{top:0;left:75%}.yidun.yidun--light .yidun_inference.yidun_inference--3 .yidun_inference__img{top:0;left:-300%}.yidun.yidun--light .yidun_inference.yidun_inference--4,.yidun.yidun--light .yidun_inference.yidun_inference--4 .yidun_inference__img{bottom:0;left:0}.yidun.yidun--light .yidun_inference.yidun_inference--5{bottom:0;left:25%}.yidun.yidun--light .yidun_inference.yidun_inference--5 .yidun_inference__img{bottom:0;left:-100%}.yidun.yidun--light .yidun_inference.yidun_inference--6{bottom:0;left:50%}.yidun.yidun--light .yidun_inference.yidun_inference--6 .yidun_inference__img{bottom:0;left:-200%}.yidun.yidun--light .yidun_inference.yidun_inference--7{bottom:0;left:75%}.yidun.yidun--light .yidun_inference.yidun_inference--7 .yidun_inference__img{bottom:0;left:-300%}.yidun.yidun--light .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light .yidun_inference:hover .yidun_inference__border{border-color:#2c6eff;border-width:2px}.yidun.yidun--light .yidun_inference.yidun_inference--drag,.yidun.yidun--light .yidun_inference:hover{background-color:#fff}.yidun.yidun--light .yidun_inference.yidun_inference--drag .yidun_inference__img,.yidun.yidun--light .yidun_inference:hover .yidun_inference__img{opacity:.3;filter:alpha(opacity=30)}.yidun.yidun--light .yidun_inference:hover{cursor:pointer}.yidun.yidun--light .yidun_inference.yidun_inference--drag{z-index:1;box-shadow:0 2px 6px 30%}.yidun.yidun--light .yidun_inference.yidun_inference--origin .yidun_inference__border{background-color:#d8d8d8}.yidun.yidun--light .yidun_inference.yidun_inference--swap .yidun_inference__border{background:transparent}.yidun.yidun--light .yidun_inference__img{position:absolute;width:400%;height:200%;transition:opacity .2s ease-out}.yidun.yidun--light.yidun--inference .yidun_inference{display:block;background-color:#fff}.yidun.yidun--light.yidun--inference .yidun_bg-img{display:none}.yidun.yidun--light .yidun_avoid-front{position:absolute;z-index:10;left:0;bottom:0;-webkit-transform:translateZ(0);-webkit-perspective:1000;-webkit-backface-visibility:hidden;pointer-events:auto}.yidun.yidun--light .yidun_avoid-canvas{position:absolute;left:0;top:0;pointer-events:none}.yidun.yidun--light.yidun--avoid .yidun_avoid-canvas,.yidun.yidun--light.yidun--avoid .yidun_avoid-front,.yidun.yidun--light.yidun--sms .yidun_smsbox{display:block}.yidun.yidun--light.yidun--sms .yidun_smsbox~.yidun_bg-img{display:none}.yidun.yidun--light.yidun--float .yidun_panel{display:none;position:absolute;left:0;width:100%;z-index:999}.yidun.yidun--light .yidun_panel{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:1}.yidun.yidun--light .yidun_panel-placeholder{pointer-events:auto;position:relative;padding-top:50%}.yidun.yidun--light .yidun_bgimg{pointer-events:auto;position:absolute;top:0;left:0;width:100%;height:100%}.yidun.yidun--light .yidun_bgimg .yidun_bg-img{vertical-align:top;width:100%}.yidun.yidun--light .yidun_smsbox{width:100%;height:100%;text-align:left;font-size:0;background:#f8f9fb;background:linear-gradient(103.18deg,#dae3f6 7.63%,#c8d9fa 94.65%);display:none;position:relative;color:#45494c}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-qrcode{width:120px;height:100px;padding:0 10px;position:absolute;left:0;top:0;bottom:0;margin:auto 0;z-index:1}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-qrcode .yidun_smsbox-qrcode--img{width:100%;height:100%;padding:2px;background:#fff}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text{position:absolute;left:0;top:0;bottom:0;right:0;padding:0 0 0 120px;font-size:14px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;white-space:nowrap;z-index:1}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text:before{content:\"\";width:0;display:inline-block;vertical-align:middle;height:100%}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide{display:inline-block;vertical-align:middle;width:96%;white-space:normal}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--qr{margin-bottom:8px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + U(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox-text .yidun_smsbox-text--guide .yidun_smsbox-text--manual:after{background-image:url(" + U(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper{display:none;padding:9% 20px 0;font-size:14px;white-space:normal}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-guide{margin-bottom:8px;text-align:center}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-btn{text-align:center;margin-bottom:10px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox--mobile-btn>a{display:inline-block;padding:8px 16px;background:#176ae5;color:#fff;text-decoration:none;border-radius:4px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual{width:100%;text-align:center}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + U(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox--mobile-wrapper .yidun_smsbox-mobile--manual>span:after{background-image:url(" + U(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;font-size:14px;padding:0 16px;display:none;white-space:nowrap}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual:before{content:\"\";width:0;display:inline-block;vertical-align:middle;height:100%}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper{display:inline-block;vertical-align:middle;width:100%;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit{margin-bottom:8px;line-height:26px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit .yidun_smsbox-manual--edit-title{display:inline-block;width:66px}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--edit .yidun_smsbox-manual--edit-content{font-size:24px;color:#45494c}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send{margin-bottom:10px;display:table}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send .yidun_smsbox-manual--edit-title{min-width:66px;display:table-cell}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--send .yidun_smsbox-manual--send-content{display:table-cell}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr{cursor:pointer;color:#176ae5;padding:0}.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn:after,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr:after{content:\"\";display:inline-block;width:16px;height:13px;background-image:url(" + U(1) + ");background-position:0 -186px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--btn:after,.yidun.yidun--light .yidun_smsbox .yidun_smsbox-manual .yidun_smsbox-manual-wrapper .yidun_smsbox-manual--qr:after{background-image:url(" + U(2) + ");background-position:0 -183px;background-size:40px 1515px}}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual.yidun_smsbox--mobile .yidun_smsbox--mobile-wrapper,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-qrcode,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-text{display:none}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--manual .yidun_smsbox-manual{display:block}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox-qrcode,.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox-text{display:none}.yidun.yidun--light .yidun_smsbox.yidun_smsbox--mobile .yidun_smsbox--mobile-wrapper{display:block}.yidun.yidun--light.yidun--avoid .yidun_bgimg,.yidun.yidun--light.yidun--avoid .yidun_panel-placeholder,.yidun.yidun--light.yidun--icon_point .yidun_bgimg,.yidun.yidun--light.yidun--icon_point .yidun_panel-placeholder,.yidun.yidun--light.yidun--inference .yidun_bgimg,.yidun.yidun--light.yidun--inference .yidun_panel-placeholder,.yidun.yidun--light.yidun--point .yidun_bgimg,.yidun.yidun--light.yidun--point .yidun_panel-placeholder,.yidun.yidun--light.yidun--space .yidun_bgimg,.yidun.yidun--light.yidun--space .yidun_panel-placeholder,.yidun.yidun--light.yidun--word_group .yidun_bgimg,.yidun.yidun--light.yidun--word_group .yidun_panel-placeholder,.yidun.yidun--light.yidun--word_order .yidun_bgimg,.yidun.yidun--light.yidun--word_order .yidun_panel-placeholder{overflow:hidden}.yidun.yidun--light .yidun_voice{display:none}.yidun.yidun--light.yidun--voice .yidun_voice{display:block;width:100%;height:100%;overflow:hidden;position:relative}.yidun.yidun--light.yidun--voice .yidun_top,.yidun.yidun--light.yidun--voice .yidun_top__audio{display:none}.yidun.yidun--light.yidun--voice .yidun_bgimg{background-color:#f8f9fb;border:1px solid #e6e7eb;padding:0 8px}.yidun.yidun--light.yidun--voice .yidun_avoid-front,.yidun.yidun--light.yidun--voice .yidun_bg-img,.yidun.yidun--light.yidun--voice .yidun_jigsaw{display:none}.yidun.yidun--light.yidun--voice .yidun_control{background-color:#e9edf3;border-color:#e9edf3;cursor:pointer}.yidun.yidun--light.yidun--voice .yidun_control[role=button] .yidun_tips{color:#45494c}.yidun.yidun--light.yidun--voice .yidun_tips,.yidun.yidun--light.yidun--voice .yidun_tips .yidun_tips__content{font-size:inherit}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio{margin-bottom:6px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_voice__btns{margin-top:4px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio__play,.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_audio__refresh{width:40px;height:40px}.yidun.yidun--light.yidun--voice .yidun_voice-280 .yidun_voice__input{padding:0}.yidun.yidun--light.yidun--voice .yidun_voice-240 .yidun_audio{margin-bottom:2px}.yidun.yidun--light.yidun--voice .yidun_voice-240 .yidun_voice__btns{margin-top:0}.yidun.yidun--light .yidun_audio{height:40px;margin-bottom:24px;position:relative;text-align:center}.yidun.yidun--light .yidun_audio__wave{pointer-events:none;position:absolute;top:0;left:50%;transform:translateX(-50%);z-index:-1;white-space:nowrap;height:100%;line-height:40px;font-size:0}.yidun.yidun--light .yidun_wave__item{display:inline-block;width:4px;height:10px;border-radius:3px;position:relative;overflow:hidden;background-color:#dfe6f4;vertical-align:middle;margin:0 3px}.yidun.yidun--light .yidun_wave__item.yidun_wave__item-light .yidun_wave__inner{transform:translateX(0);transition:transform .35s linear}.yidun.yidun--light .yidun_wave__inner{position:absolute;top:0;left:0;width:4px;height:100%;border-radius:3px;transform:translateX(-4px);background-color:#1991fa}.yidun.yidun--light .yidun_wave-1{height:12px}.yidun.yidun--light .yidun_wave-2{height:18px}.yidun.yidun--light .yidun_wave-3{height:24px}.yidun.yidun--light .yidun_wave-4,.yidun.yidun--light .yidun_wave-5{height:30px}.yidun.yidun--light .yidun_wave-6{height:24px}.yidun.yidun--light .yidun_wave-7{height:18px}.yidun.yidun--light .yidun_wave-8{height:12px}.yidun.yidun--light .yidun_wave-9,.yidun.yidun--light .yidun_wave-10{height:6px}.yidun.yidun--light .yidun_wave-11{height:12px}.yidun.yidun--light .yidun_wave-12{height:18px}.yidun.yidun--light .yidun_wave-13{height:24px}.yidun.yidun--light .yidun_wave-14,.yidun.yidun--light .yidun_wave-15{height:30px}.yidun.yidun--light .yidun_wave-16{height:24px}.yidun.yidun--light .yidun_wave-17{height:18px}.yidun.yidun--light .yidun_wave-18{height:12px}.yidun.yidun--light .yidun_wave-19,.yidun.yidun--light .yidun_wave-20{height:6px}.yidun.yidun--light .yidun_wave-21{height:12px}.yidun.yidun--light .yidun_wave-22{height:18px}.yidun.yidun--light .yidun_wave-23{height:24px}.yidun.yidun--light .yidun_wave-24,.yidun.yidun--light .yidun_wave-25{height:30px}.yidun.yidun--light .yidun_wave-26{height:24px}.yidun.yidun--light .yidun_wave-27{height:18px}.yidun.yidun--light .yidun_wave-28{height:12px}.yidun.yidun--light .yidun_wave-29,.yidun.yidun--light .yidun_wave-30{height:6px}.yidun.yidun--light .yidun_audio__play,.yidun.yidun--light .yidun_audio__refresh{width:40px;height:40px;background-color:#0776f8;box-shadow:0 3px 16px rgba(73,103,180,.32);border:none;outline:none;font-size:0;vertical-align:middle;border-radius:50%;margin:0 16px}.yidun.yidun--light .yidun_audio__play:hover,.yidun.yidun--light .yidun_audio__refresh:hover{background-color:#1991fa;cursor:pointer}.yidun.yidun--light .yidun_audio__play:before,.yidun.yidun--light .yidun_audio__refresh:before{content:\"\";width:20px;height:20px;display:block;margin:auto}.yidun.yidun--light .yidun_audio__play:before{background-image:url(" + U(1) + ");background-position:0 -324px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_audio__play:before{background-image:url(" + U(2) + ");background-position:0 -321px;background-size:40px 1515px}}.yidun.yidun--light .yidun_audio__refresh:before{background-image:url(" + U(1) + ");background-position:0 -299px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_audio__refresh:before{background-image:url(" + U(2) + ');background-position:0\x20-296px;background-size:40px\x201515px}}.yidun.yidun--light\x20.yidun_audio__source,.yidun.yidun--light\x20.yidun_audio__txt{display:none}.yidun.yidun--light\x20.yidun_voice__inner{position:absolute;top:50%;width:100%;transform:translateY(-50%)}.yidun.yidun--light\x20.yidun_voice__input{-moz-appearance:none;width:calc(100%\x20-\x204px);height:32px;line-height:30px;font-size:14px;border:1px\x20solid;border-radius:2px;-webkit-appearance:none;text-indent:4px;border-color:#e6e7eb;background-color:#fff;color:#44494a;padding:2px}.yidun.yidun--light\x20.yidun_voice__input:-ms-input-placeholder{color:#c7c7c7}.yidun.yidun--light\x20.yidun_voice__input::placeholder{color:#c7c7c7}.yidun.yidun--light\x20.yidun_voice__input:focus{border-color:#4997fd}.yidun.yidun--light\x20.yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--light\x20.yidun_voice__back,.yidun.yidun--light\x20.yidun_voice__refresh{color:#45494c}.yidun.yidun--light\x20.yidun_voice__back:before,.yidun.yidun--light\x20.yidun_voice__refresh:before{content:\x22\x22;display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-position:50%;vertical-align:middle;margin-right:4px}.yidun.yidun--light\x20.yidun_voice__back\x20span,.yidun.yidun--light\x20.yidun_voice__refresh\x20span{vertical-align:middle}.yidun.yidun--light\x20.yidun_voice__refresh:before{background-image:url(' + U(1) + ");background-position:0 -274px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_voice__refresh:before{background-image:url(" + U(2) + ");background-position:0 -271px;background-size:40px 1515px}}.yidun.yidun--light .yidun_voice__back,.yidun.yidun--light .yidun_voice__refresh{border:none;background:transparent;font-size:12px;line-height:20px;padding:0;cursor:pointer;vertical-align:middle}.yidun.yidun--light .yidun_voice__back{display:none}.yidun.yidun--light .yidun_voice__back:before{background-image:url(" + U(1) + ");background-position:0 -399px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_voice__back:before{background-image:url(" + U(2) + ');background-position:0\x20-396px;background-size:40px\x201515px}}.yidun.yidun--light\x20.yidun_voice__right{float:right}.yidun.yidun--light\x20.yidun_loadbox{display:none;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;background-image:url(' + U(31) + ");background-color:#f7f9fa;background-position:50%;background-size:cover}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_loadbox{background-image:url(" + U(32) + ")}}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner{position:relative;top:50%;margin-top:-25px}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:32px;height:32px;background-repeat:no-repeat}.yidun.yidun--light .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{display:block;line-height:20px;color:#45494c}.yidun.yidun--light .yidun_top{position:absolute;right:0;top:0;max-width:98px;*max-width:68px;z-index:2;background-color:rgba(0,0,0,.12);*background-color:transparent;_background-color:transparent}.yidun.yidun--light .yidun_top:hover{background-color:rgba(0,0,0,.2);*background-color:transparent;_background-color:transparent}.yidun.yidun--light .yidun_top__right{float:right}.yidun.yidun--light .yidun_refresh,.yidun.yidun--light .yidun_top__audio{width:30px;height:30px;margin-left:4px;cursor:pointer;font-size:0;vertical-align:top;text-indent:-9999px;text-transform:capitalize;border:none;background-color:transparent}.yidun.yidun--light .yidun_refresh{float:left;background-image:url(" + U(1) + ");background-position:0 -750px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_refresh{background-image:url(" + U(2) + ");background-position:0 -747px;background-size:40px 1515px}}.yidun.yidun--light .yidun_refresh:hover{background-image:url(" + U(1) + ");background-position:0 -785px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -782px;background-size:40px 1515px}}.yidun.yidun--light .yidun_top__audio{float:right;background-image:url(" + U(1) + ');background-position:0\x20-820px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light\x20.yidun_top__audio{background-image:url(' + U(2) + ");background-position:0 -817px;background-size:40px 1515px}}.yidun.yidun--light .yidun_top__audio:hover{background-image:url(" + U(1) + ');background-position:0\x20-925px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light\x20.yidun_top__audio:hover{background-image:url(' + U(2) + ");background-position:0 -922px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--light.yidun--maxerror .yidun_refresh:hover{background-image:url(" + U(1) + ");background-position:0 -750px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--maxerror .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -747px;background-size:40px 1515px}}.yidun.yidun--light.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + U(1) + ");background-position:0 -820px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + U(2) + ");background-position:0 -817px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback{float:left;display:block;width:30px;height:30px;cursor:pointer;background-image:url(" + U(1) + ");background-position:0 -615px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_feedback{background-image:url(" + U(2) + ");background-position:0 -612px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback:hover{background-image:url(" + U(1) + ');background-position:0\x20-715px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light\x20.yidun_feedback:hover{background-image:url(' + U(2) + ");background-position:0 -712px;background-size:40px 1515px}}.yidun.yidun--light .yidun_feedback_txt{font-size:0;clip:rect(0,0,0,0);-webkit-clip-path:inset(0 0 99.9% 99.9%);clip-path:inset(0 0 99.9% 99.9%)}.yidun.yidun--light .yidun_control{position:relative;border:1px solid #e4e7eb;background-color:#f7f9fa}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator{border-color:#1991fa;background-color:#d1e9fe}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider{background-color:#1991fa}.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -30px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -30px;background-size:40px 1515px}}.yidun.yidun--light .yidun_slide_indicator{position:absolute;top:-1px;left:-1px;width:0;border:1px solid transparent}.yidun.yidun--light .yidun_slider{position:absolute;top:0;left:0;height:100%;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.3);cursor:pointer;transition:background .2s linear}.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover{background-color:#1991fa}.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -30px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_slider.yidun_slider--hover:hover .yidun_slider__icon{background-image:url(" + U(2) + ');background-position:0\x20-30px;background-size:40px\x201515px}}.yidun.yidun--light\x20.yidun_slider\x20.yidun_slider__icon{position:absolute;top:50%;margin-top:-6px;left:50%;margin-left:-6px;width:14px;height:10px;background-image:url(' + U(1) + ");background-position:0 -15px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -15px;background-size:40px 1515px}}.yidun.yidun--light .yidun_slider img.yidun_slider__icon{width:100%;height:100%;top:0;left:0;margin:0;background-image:none!important}.yidun.yidun--light .yidun_tips{text-align:center;color:#45494c;height:100%;white-space:nowrap;font-size:0}.yidun.yidun--light .yidun_tips .yidun_sms-counter{color:#1991fa}.yidun.yidun--light .yidun_tips__before{height:100%;width:0;vertical-align:middle}.yidun.yidun--light .yidun_tips__content{display:inline-block;vertical-align:middle;white-space:normal;font-size:14px;line-height:18px}.yidun.yidun--light .yidun_tips__text{vertical-align:middle;word-break:break-word}.yidun.yidun--light .yidun_tips__answer{vertical-align:middle;font-weight:700}.yidun.yidun--light .yidun_tips__answer.hide{display:none}.yidun.yidun--light.yidun--point .yidun_tips__point{display:inline}.yidun.yidun--light.yidun--point .yidun_tips__img,.yidun.yidun--light.yidun--space .yidun_tips__answer,.yidun.yidun--light.yidun--space .yidun_tips__img,.yidun.yidun--light.yidun--space .yidun_tips__point,.yidun.yidun--light.yidun--word_group .yidun_tips__answer,.yidun.yidun--light.yidun--word_group .yidun_tips__img,.yidun.yidun--light.yidun--word_group .yidun_tips__point,.yidun.yidun--light.yidun--word_order .yidun_tips__answer,.yidun.yidun--light.yidun--word_order .yidun_tips__img,.yidun.yidun--light.yidun--word_order .yidun_tips__point{display:none}.yidun.yidun--light.yidun--icon_point .yidun_tips__answer{width:80px;height:19px;margin-left:8px;overflow:hidden;position:relative}.yidun.yidun--light.yidun--icon_point .yidun_tips__point{display:none}.yidun.yidun--light.yidun--icon_point .yidun_tips__img{display:block;position:absolute;top:-161px;left:0;width:400%}.yidun.yidun--light.yidun--avoid .yidun_tips__answer{width:26.667px;height:19px;margin-left:8px;overflow:hidden;position:relative}.yidun.yidun--light.yidun--avoid .yidun_tips__point{display:none}.yidun.yidun--light.yidun--avoid .yidun_tips__img{display:block;position:absolute;top:-161px;left:0;width:1200%}.yidun.yidun--light.yidun--loadfail .yidun_bgimg,.yidun.yidun--light.yidun--loading .yidun_bgimg{display:none}.yidun.yidun--light.yidun--loadfail .yidun_loadbox,.yidun.yidun--light.yidun--loading .yidun_loadbox{display:block}.yidun.yidun--light.yidun--loadfail .yidun_slider,.yidun.yidun--light.yidun--loading .yidun_slider{cursor:not-allowed}.yidun.yidun--light.yidun--loadfail .yidun_slider:hover,.yidun.yidun--light.yidun--loading .yidun_slider:hover{background-color:#fff}.yidun.yidun--light.yidun--loadfail .yidun_slider:hover .yidun_slider__icon,.yidun.yidun--light.yidun--loading .yidun_slider:hover .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -15px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loadfail .yidun_slider:hover .yidun_slider__icon,.yidun.yidun--light.yidun--loading .yidun_slider:hover .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -15px;background-size:40px 1515px}}.yidun.yidun--light.yidun--loadfail .yidun_top,.yidun.yidun--light.yidun--loading .yidun_top{display:block}.yidun.yidun--light.yidun--loading .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -960px;background-size:40px 1518px;animation:loading .8s linear infinite}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loading .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -957px;background-size:40px 1515px}}.yidun.yidun--light.yidun--loading .yidun_refresh,.yidun.yidun--light.yidun--loading .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--loading .yidun_control{border-color:#e4e7eb;background-color:#f7f9fa}.yidun.yidun--light.yidun--loadfail .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -890px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--loadfail .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -887px;background-size:40px 1515px}}.yidun.yidun--light.yidun--avoid.yidun--button .yidun_control,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_control,.yidun.yidun--light.yidun--inference.yidun--button .yidun_control,.yidun.yidun--light.yidun--point.yidun--button .yidun_control,.yidun.yidun--light.yidun--space.yidun--button .yidun_control,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_control,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_control{cursor:pointer;background:#f7f9fa;background:linear-gradient(180deg,#fff 0,#ebedf0 87%)}.yidun.yidun--light.yidun--avoid.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button .yidun_tips .yidun_tips__icon{margin-right:8px;width:20px;height:20px;vertical-align:middle;background-image:url(" + U(1) + ');background-position:0\x20-374px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light.yidun--avoid.yidun--button\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--light.yidun--icon_point.yidun--button\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--light.yidun--inference.yidun--button\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--light.yidun--point.yidun--button\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--light.yidun--space.yidun--button\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--light.yidun--word_group.yidun--button\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--light.yidun--word_order.yidun--button\x20.yidun_tips\x20.yidun_tips__icon{background-image:url(' + U(2) + ");background-position:0 -371px;background-size:40px 1515px}}.yidun.yidun--light.yidun--icon_point.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--icon_point.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--jigsaw.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--jigsaw.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--point.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--point.yidun--verifying .yidun_top__audio,.yidun.yidun--light.yidun--word_icon.yidun--verifying .yidun_refresh,.yidun.yidun--light.yidun--word_icon.yidun--verifying .yidun_top__audio{cursor:not-allowed}.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference--target .yidun_inference__img{animation:bright .6s ease-in .3s}.yidun.yidun--light.yidun--success .yidun_tips{color:#52ccba}.yidun.yidun--light.yidun--success .yidun_refresh,.yidun.yidun--light.yidun--success .yidun_top__audio{display:none}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slide_indicator{border-color:#52ccba;background-color:#d2f4ef}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider{background-color:#52ccba}.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 0;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 0;background-size:40px 1515px}}.yidun.yidun--light.yidun--success.yidun--avoid .yidun_control,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_control,.yidun.yidun--light.yidun--success.yidun--inference .yidun_control,.yidun.yidun--light.yidun--success.yidun--point .yidun_control,.yidun.yidun--light.yidun--success.yidun--sms .yidun_control,.yidun.yidun--light.yidun--success.yidun--space .yidun_control,.yidun.yidun--light.yidun--success.yidun--voice .yidun_control,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_control,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_control{border-color:#52ccba;background-color:#d2f4ef}.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{margin-right:5px;width:17px;height:12px;vertical-align:middle;background-image:url(" + U(1) + ");background-position:0 -111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -111px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error .yidun_tips{color:#f57a7a}.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_slide_indicator,.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_slider{display:none}.yidun.yidun--light.yidun--error.yidun--jigsaw.yidun--maxerror .yidun_tips{padding-left:0}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slide_indicator{border-color:#f57a7a;background-color:#fce1e1}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider{background-color:#f57a7a}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{width:12px;height:12px;background-image:url(" + U(1) + ");background-position:0 -94px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -94px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error.yidun--jigsaw .yidun_control .yidun_slider img.yidun_slider__icon{width:100%;height:100%}.yidun.yidun--light.yidun--error.yidun--avoid .yidun_control,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_control,.yidun.yidun--light.yidun--error.yidun--inference .yidun_control,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_control,.yidun.yidun--light.yidun--error.yidun--point .yidun_control,.yidun.yidun--light.yidun--error.yidun--sms .yidun_control,.yidun.yidun--light.yidun--error.yidun--space .yidun_control,.yidun.yidun--light.yidun--error.yidun--voice .yidun_control,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_control,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_control{border-color:#f57a7a;background-color:#fce1e1}.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{margin-right:5px;width:12px;height:12px;vertical-align:middle;background-image:url(" + U(1) + ");background-position:0 -77px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--light.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -77px;background-size:40px 1515px}}.yidun.yidun--light.yidun--error.yidun--maxerror .yidun_tips:hover{cursor:pointer}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference{cursor:default}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference:hover .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference:hover .yidun_inference__border{content:\"\";border-color:#fff;border-width:1px}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference:hover .yidun_inference__img,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference:hover .yidun_inference__img{opacity:1;filter:alpha(opacity=100)}.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--error .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--maxerror .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--success .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference.yidun--verifying .yidun_inference.yidun_inference--swap .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--drag .yidun_inference__border,.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--swap .yidun_inference__border{border-color:#2c6eff;border-width:2px}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target{background-color:#000}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target .yidun_inference__border{border:2px solid #2c6eff}.yidun.yidun--light.yidun--inference .yidun_bgimg--dragging .yidun_inference.yidun_inference--target .yidun_inference__img{opacity:.4;filter:alpha(opacity=40)}.yidun.yidun--light.yidun--voice.yidun--error .yidun_control,.yidun.yidun--light.yidun--voice.yidun--error .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--error .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_control,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--maxerror .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--success .yidun_control,.yidun.yidun--light.yidun--voice.yidun--success .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--success .yidun_voice__refresh,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_control,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_voice__back,.yidun.yidun--light.yidun--voice.yidun--verifying .yidun_voice__refresh{cursor:not-allowed}.yidun.yidun--light.yidun--rtl{direction:rtl}.yidun.yidun--light.yidun--rtl .yidun_top{left:0;right:auto}.yidun.yidun--light.yidun--rtl .yidun_feedback{float:right;margin-left:4px;background-image:url(" + U(1) + ');background-position:0\x20-680px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl\x20.yidun_feedback{background-image:url(' + U(2) + ');background-position:0\x20-677px;background-size:40px\x201515px}}.yidun.yidun--light.yidun--rtl\x20.yidun_feedback:hover{background-image:url(' + U(1) + ");background-position:0 -855px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_feedback:hover{background-image:url(" + U(2) + ');background-position:0\x20-852px;background-size:40px\x201515px}}.yidun.yidun--light.yidun--rtl\x20.yidun_top__right{float:left}.yidun.yidun--light.yidun--rtl\x20.yidun_top__audio{float:left;margin-left:0}.yidun.yidun--light.yidun--rtl\x20.yidun_tips__img{top:-181px}.yidun.yidun--light.yidun--rtl\x20.yidun_voice__right{float:left}.yidun.yidun--light.yidun--rtl\x20.yidun_voice__refresh{float:right}.yidun.yidun--light.yidun--rtl\x20.yidun_audio__play:before{background-image:url(' + U(1) + ");background-position:0 -349px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_audio__play:before{background-image:url(" + U(2) + ");background-position:0 -346px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_voice__back{margin-left:4px}.yidun.yidun--light.yidun--rtl .yidun_voice__back:before{background-image:url(" + U(1) + ");background-position:0 -424px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--light.yidun--rtl .yidun_voice__back:before{background-image:url(" + U(2) + ");background-position:0 -421px;background-size:40px 1515px}}.yidun.yidun--light.yidun--rtl .yidun_voice__back:before,.yidun.yidun--light.yidun--rtl .yidun_voice__refresh:before{margin-left:2px;margin-right:0}.yidun.yidun--light.yidun--rtl .yidun_wave__inner{transform:translateX(4px)}.yidun.yidun--light.yidun--disable-focus-outline .yidun_control,.yidun.yidun--light.yidun--disable-focus-outline .yidun_feedback,.yidun.yidun--light.yidun--disable-focus-outline .yidun_refresh,.yidun.yidun--light.yidun--disable-focus-outline .yidun_top__audio,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__back,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__input,.yidun.yidun--light.yidun--disable-focus-outline .yidun_voice__refresh{-webkit-tap-highlight-color:rgba(255,255,255,0)!important;outline:none!important}.yidun.yidun--light.yidun--rtl.yidun--avoid .yidun_tips__img{top:-161px}.yidun.yidun--size-medium{font-size:18px}.yidun.yidun--size-medium .yidun_tips__content{font-size:18px;line-height:19px}.yidun.yidun--size-medium .yidun_top{max-width:116px}.yidun.yidun--size-medium .yidun_refresh,.yidun.yidun--size-medium .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-medium .yidun_refresh{background-image:url(" + U(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_refresh{background-image:url(" + U(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_refresh:hover{background-image:url(" + U(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_refresh:hover{background-image:url(" + U(2) + ');background-position:0\x20-1184px;background-size:40px\x201515px}}.yidun.yidun--size-medium\x20.yidun_top__audio{background-image:url(' + U(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_top__audio{background-image:url(" + U(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_top__audio:hover{background-image:url(" + U(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_top__audio:hover{background-image:url(" + U(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_feedback{width:36px;height:36px;background-image:url(" + U(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_feedback{background-image:url(" + U(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_feedback:hover{background-image:url(" + U(1) + ");background-position:0 -1310px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_feedback:hover{background-image:url(" + U(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + U(2) + ');background-position:0\x20-128px;background-size:40px\x201515px}}.yidun.yidun--size-medium\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(' + U(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + U(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + U(1) + ');background-position:0\x20-166px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--success.yidun--avoid\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--icon_point\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--inference\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--point\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--sms\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--space\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--voice\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_group\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-medium.yidun--success.yidun--word_order\x20.yidun_tips\x20.yidun_tips__icon{background-image:url(' + U(2) + ');background-position:0\x20-164px;background-size:40px\x201515px}}.yidun.yidun--size-medium.yidun--error.yidun--jigsaw\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(' + U(1) + ');background-position:0\x20-528px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--error.yidun--jigsaw\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{background-image:url(' + U(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + U(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-medium.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-medium .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-medium .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-medium.yidun--loading .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--loading .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--loadfail .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--loadfail .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_audio__play,.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-medium.yidun--voice .yidun_audio__play:before{background-image:url(" + U(1) + ');background-position:0\x20-474px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice\x20.yidun_audio__play:before{background-image:url(' + U(2) + ');background-position:0\x20-471px;background-size:40px\x201515px}}.yidun.yidun--size-medium.yidun--voice\x20.yidun_audio__refresh:before{background-image:url(' + U(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_audio__refresh:before{background-image:url(" + U(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + U(1) + ');background-position:0\x20-499px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice\x20.yidun_voice__btns\x20.yidun_voice__refresh:before{background-image:url(' + U(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + U(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + U(2) + ");background-position:0 -554px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__back,.yidun.yidun--size-medium.yidun--voice .yidun_voice__btns .yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh{cursor:not-allowed}.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh:hover{background-image:url(" + U(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--maxerror .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-medium.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + U(1) + ');background-position:0\x20-1269px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-medium.yidun--maxerror\x20.yidun_top__audio:hover{background-image:url(' + U(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-large{font-size:20px}.yidun.yidun--size-large .yidun_tips__content{font-size:20px;line-height:21px}.yidun.yidun--size-large .yidun_top{max-width:116px}.yidun.yidun--size-large .yidun_refresh,.yidun.yidun--size-large .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-large .yidun_refresh{background-image:url(" + U(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_refresh{background-image:url(" + U(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_refresh:hover{background-image:url(" + U(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_top__audio{background-image:url(" + U(1) + ");background-position:0 -1269px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_top__audio{background-image:url(" + U(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_top__audio:hover{background-image:url(" + U(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_top__audio:hover{background-image:url(" + U(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_feedback{width:36px;height:36px;background-image:url(" + U(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_feedback{background-image:url(" + U(2) + ');background-position:0\x20-1225px;background-size:40px\x201515px}}.yidun.yidun--size-large\x20.yidun_feedback:hover{background-image:url(' + U(1) + ');background-position:0\x20-1310px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-large\x20.yidun_feedback:hover{background-image:url(' + U(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + U(1) + ');background-position:0\x20-128px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-large\x20.yidun_control\x20.yidun_slider:hover\x20.yidun_slider__icon{background-image:url(' + U(2) + ');background-position:0\x20-128px;background-size:40px\x201515px}}.yidun.yidun--size-large\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(' + U(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + U(1) + ");background-position:0 -586px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + U(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + U(2) + ');background-position:0\x20-164px;background-size:40px\x201515px}}.yidun.yidun--size-large.yidun--error.yidun--jigsaw\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(' + U(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + U(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-large.yidun--loading .yidun_loadicon{background-image:url(" + U(1) + ');background-position:0\x20-1478px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--loading\x20.yidun_loadicon{background-image:url(' + U(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--loadfail .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--loadfail .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_audio__play,.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-large.yidun--voice .yidun_audio__play:before{background-image:url(" + U(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_audio__play:before{background-image:url(" + U(2) + ");background-position:0 -471px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + U(1) + ');background-position:0\x20-449px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice\x20.yidun_audio__refresh:before{background-image:url(' + U(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + U(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + U(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + U(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + U(2) + ');background-position:0\x20-554px;background-size:40px\x201515px}}.yidun.yidun--size-large.yidun--voice\x20.yidun_voice__btns\x20.yidun_voice__back,.yidun.yidun--size-large.yidun--voice\x20.yidun_voice__btns\x20.yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-large.yidun--maxerror\x20.yidun_refresh{cursor:not-allowed}.yidun.yidun--size-large.yidun--maxerror\x20.yidun_refresh:hover{background-image:url(' + U(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + U(1) + ');background-position:0\x20-1269px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-large.yidun--maxerror\x20.yidun_top__audio:hover{background-image:url(' + U(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-x-large,.yidun.yidun--size-x-large .yidun_tips__content{font-size:24px}.yidun.yidun--size-x-large .yidun_top{max-width:116px}.yidun.yidun--size-x-large .yidun_refresh,.yidun.yidun--size-x-large .yidun_top__audio{width:36px;height:36px}.yidun.yidun--size-x-large .yidun_refresh{background-image:url(" + U(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_refresh{background-image:url(" + U(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_refresh:hover{background-image:url(" + U(1) + ");background-position:0 -1187px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -1184px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_top__audio{background-image:url(" + U(1) + ');background-position:0\x20-1269px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-x-large\x20.yidun_top__audio{background-image:url(' + U(2) + ");background-position:0 -1266px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_top__audio:hover{background-image:url(" + U(1) + ");background-position:0 -1351px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_top__audio:hover{background-image:url(" + U(2) + ");background-position:0 -1348px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_feedback{width:36px;height:36px;background-image:url(" + U(1) + ");background-position:0 -1228px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_feedback{background-image:url(" + U(2) + ");background-position:0 -1225px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_feedback:hover{background-image:url(" + U(1) + ');background-position:0\x20-1310px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-x-large\x20.yidun_feedback:hover{background-image:url(' + U(2) + ");background-position:0 -1307px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(1) + ");background-position:0 -128px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control.yidun_control--moving .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control .yidun_slider:hover .yidun_slider__icon{background-image:url(" + U(1) + ');background-position:0\x20-128px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-x-large\x20.yidun_control\x20.yidun_slider:hover\x20.yidun_slider__icon{background-image:url(' + U(2) + ");background-position:0 -128px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_control .yidun_slider .yidun_slider__icon{margin-left:-9px;width:20px;height:14px;background-image:url(" + U(1) + ");background-position:0 -147px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -146px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--success.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{margin-top:-12px;margin-left:-12px;width:24px;height:24px;background-image:url(" + U(1) + ');background-position:0\x20-586px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--success.yidun--jigsaw\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{background-image:url(' + U(2) + ");background-position:0 -583px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{width:22px;height:15px;background-image:url(" + U(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--success.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--success.yidun--word_order .yidun_tips .yidun_tips__icon{background-image:url(" + U(2) + ');background-position:0\x20-164px;background-size:40px\x201515px}}.yidun.yidun--size-x-large.yidun--error.yidun--jigsaw\x20.yidun_control\x20.yidun_slider\x20.yidun_slider__icon{width:24px;height:24px;margin-top:-12px;margin-left:-12px;background-image:url(' + U(1) + ");background-position:0 -528px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--error.yidun--jigsaw .yidun_control .yidun_slider .yidun_slider__icon{background-image:url(" + U(2) + ");background-position:0 -525px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--error.yidun--avoid .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--icon_point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--inference .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--maxerror .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--point .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--sms .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--space .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--voice .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_group .yidun_tips .yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_order .yidun_tips .yidun_tips__icon{width:18px;height:18px;background-image:url(" + U(1) + ');background-position:0\x20-251px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--error.yidun--avoid\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--icon_point\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--inference\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--maxerror\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--point\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--sms\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--space\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--voice\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_group\x20.yidun_tips\x20.yidun_tips__icon,.yidun.yidun--size-x-large.yidun--error.yidun--word_order\x20.yidun_tips\x20.yidun_tips__icon{background-image:url(' + U(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun.yidun--size-x-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadicon{width:40px;height:40px}.yidun.yidun--size-x-large .yidun_loadbox .yidun_loadbox__inner .yidun_loadtext{line-height:32px}.yidun.yidun--size-x-large.yidun--loading .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -1478px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--loading .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -1475px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--loadfail .yidun_loadicon{background-image:url(" + U(1) + ");background-position:0 -1433px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--loadfail .yidun_loadicon{background-image:url(" + U(2) + ");background-position:0 -1430px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play,.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh{width:48px;height:48px}.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play:before{background-image:url(" + U(1) + ");background-position:0 -474px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_audio__play:before{background-image:url(" + U(2) + ');background-position:0\x20-471px;background-size:40px\x201515px}}.yidun.yidun--size-x-large.yidun--voice\x20.yidun_audio__refresh:before{background-image:url(' + U(1) + ");background-position:0 -449px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_audio__refresh:before{background-image:url(" + U(2) + ");background-position:0 -446px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input:-ms-input-placeholder{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__input::placeholder{font-size:inherit}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns{text-align:left;margin-top:6px}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before,.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{width:24px;height:24px}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{margin-right:5px;background-image:url(" + U(1) + ");background-position:0 -499px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__refresh:before{background-image:url(" + U(2) + ");background-position:0 -496px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{margin-right:5px;background-image:url(" + U(1) + ");background-position:0 -557px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--voice .yidun_voice__btns .yidun_voice__back:before{background-image:url(" + U(2) + ');background-position:0\x20-554px;background-size:40px\x201515px}}.yidun.yidun--size-x-large.yidun--voice\x20.yidun_voice__btns\x20.yidun_voice__back,.yidun.yidun--size-x-large.yidun--voice\x20.yidun_voice__btns\x20.yidun_voice__refresh{font-size:inherit}.yidun.yidun--size-x-large.yidun--maxerror\x20.yidun_refresh{cursor:not-allowed}.yidun.yidun--size-x-large.yidun--maxerror\x20.yidun_refresh:hover{background-image:url(' + U(1) + ");background-position:0 -1392px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--maxerror .yidun_refresh:hover{background-image:url(" + U(2) + ");background-position:0 -1389px;background-size:40px 1515px}}.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio{cursor:not-allowed}.yidun.yidun--size-x-large.yidun--maxerror .yidun_top__audio:hover{background-image:url(" + U(1) + ');background-position:0\x20-1269px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun.yidun--size-x-large.yidun--maxerror\x20.yidun_top__audio:hover{background-image:url(' + U(2) + ');background-position:0\x20-1266px;background-size:40px\x201515px}}.yidun_popup.yidun_popup--light{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;text-align:center}.yidun_popup.yidun_popup--light\x20.yidun_popup__mask{-ms-touch-action:none;touch-action:none;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000;transition:opacity\x20.3s\x20linear;will-change:opacity}.yidun_popup.yidun_popup--light\x20.yidun_modal{position:relative;box-sizing:border-box;border-radius:2px;border:1px\x20solid\x20#e4e7eb;background-color:#fff;box-shadow:0\x200\x2010px\x20rgba(0,0,0,.3);-ms-touch-action:none;touch-action:none}.yidun_popup.yidun_popup--light\x20.yidun_modal__wrap{height:100%;width:100%}.yidun_popup.yidun_popup--light\x20.yidun_modal__subwrap{height:100%;width:100%;white-space:nowrap}.yidun_popup.yidun_popup--light\x20.yidun_modal__sibling{width:0;height:100%}.yidun_popup.yidun_popup--light\x20.yidun_modal__header{padding:0\x2015px;height:50px;text-align:left;font-size:0;color:#45494c;border-bottom:1px\x20solid\x20#e4e7eb;white-space:nowrap;position:relative}.yidun_popup.yidun_popup--light\x20.yidun_modal__before{width:0;height:100%;vertical-align:middle}.yidun_popup.yidun_popup--light\x20.yidun_modal__title{font-size:16px;line-height:20px;vertical-align:middle;white-space:normal}.yidun_popup.yidun_popup--light\x20.yidun_modal__close{position:absolute;top:0;right:9px;width:24px;height:100%;text-align:center;border:none;background:transparent;padding:0;cursor:pointer}.yidun_popup.yidun_popup--light\x20.yidun_modal__close:before{content:\x22\x22;display:inline-block;height:100%;vertical-align:middle;font-size:0}.yidun_popup.yidun_popup--light\x20.yidun_modal__close\x20.yidun_icon-close{display:inline-block;width:11px;height:11px;font-size:0;text-indent:-9999px;text-transform:capitalize;margin:auto;vertical-align:middle;background-image:url(' + U(1) + ');background-position:0\x20-61px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun_popup.yidun_popup--light\x20.yidun_modal__close\x20.yidun_icon-close{background-image:url(' + U(2) + ');background-position:0\x20-61px;background-size:40px\x201515px}}.yidun_popup.yidun_popup--light\x20.yidun_modal__close:hover\x20.yidun_icon-close{background-image:url(' + U(1) + ");background-position:0 -45px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_popup.yidun_popup--light .yidun_modal__close:hover .yidun_icon-close{background-image:url(" + U(2) + ");background-position:0 -45px;background-size:40px 1515px}}.yidun_popup.yidun_popup--light .yidun_modal__body{padding:15px}.yidun_popup.yidun_popup--light .yidun_modal__body .yidun{*margin:0}.yidun_popup.yidun_popup--shifting{display:block!important;position:absolute!important;left:-99999px!important;top:-99999px!important}.yidun_popup.yidun_popup--auto .yidun_modal{top:auto;*top:-50%}.yidun_popup.yidun_popup--auto .yidun_modal__wrap{display:table;*position:relative}.yidun_popup.yidun_popup--auto .yidun_modal__subwrap{display:table-cell;vertical-align:middle;*height:auto;*position:absolute;*top:50%;*left:0}@supports (display:flex){.yidun_popup.yidun_popup--auto .yidun_modal{top:auto;margin:auto}.yidun_popup.yidun_popup--auto .yidun_modal__wrap{display:block}.yidun_popup.yidun_popup--auto .yidun_modal__subwrap{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}}.yidun_popup.yidun_popup--append{position:absolute}.yidun_popup.yidun_popup--rtl{direction:rtl}.yidun_popup.yidun_popup--rtl .yidun_modal__header{text-align:right;padding:0 15px}.yidun_popup.yidun_popup--rtl .yidun_modal__close{left:9px;right:auto}.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_control,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_feedback,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_refresh,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_top__audio,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__back,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__input,.yidun_popup.yidun_popup--disable-focus-outline .yidun .yidun_voice__refresh,.yidun_popup.yidun_popup--disable-focus-outline .yidun_modal,.yidun_popup.yidun_popup--disable-focus-outline .yidun_modal__close{-webkit-tap-highlight-color:rgba(255,255,255,0)!important;outline:none!important}.yidun_popup.yidun_popup--size-medium,.yidun_popup.yidun_popup--size-medium .yidun_modal__title{font-size:18px}.yidun_popup.yidun_popup--size-large,.yidun_popup.yidun_popup--size-large .yidun_modal__title{font-size:20px}.yidun_popup.yidun_popup--size-x-large,.yidun_popup.yidun_popup--size-x-large .yidun_modal__title{font-size:24px}.yidun_intellisense--light{position:relative}.yidun_intellisense--light *{box-sizing:border-box}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-control{cursor:default}.yidun_intellisense--light .yidun_intelli-control{position:relative;height:40px;font-size:14px;cursor:pointer;border-radius:2px;border:1px solid #e4e7eb;background-color:#f7f9fa;overflow:hidden;outline:none}.yidun_intellisense--light .yidun_intelli-tips{text-align:center;color:#45494c}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon{background-color:#1991fa;box-shadow:0 2px 6px 1px rgba(25,145,250,.5)}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon .yidun_logo{background-image:url(" + U(1) + ");background-position:0 -229px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-icon .yidun_logo{background-image:url(" + U(2) + ");background-position:0 -226px;background-size:40px 1515px}}.yidun_intellisense--light .yidun_intelli-tips:hover .yidun_intelli-text{color:#1991fa}.yidun_intellisense--light .yidun_intelli-icon{position:relative;margin-right:5px;width:28px;height:28px;vertical-align:middle;border-radius:50%;background-color:#fff;box-shadow:0 2px 8px 1px rgba(188,196,204,.5);transition:all .2s linear}.yidun_intellisense--light .yidun_intelli-icon .yidun_logo{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px;width:15px;height:17px;background-image:url(" + U(1) + ");background-position:0 -207px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light .yidun_intelli-icon .yidun_logo{background-image:url(" + U(2) + ');background-position:0\x20-204px;background-size:40px\x201515px}}.yidun_intellisense--light\x20.yidun_intelli-icon\x20img.yidun_logo{width:100%;height:100%;top:0;left:0;margin:0;border-radius:50%;background-image:none!important}.yidun_intellisense--light\x20.yidun_intelli-text{line-height:38px;vertical-align:middle;transition:all\x20.2s\x20linear}.yidun_intellisense--light\x20.yidun_classic-tips{display:none;text-align:center}.yidun_intellisense--light\x20.yidun_classic-tips\x20.yidun_tips__icon{margin-right:5px;width:12px;height:12px;vertical-align:middle}.yidun_intellisense--light\x20.yidun_classic-tips\x20.yidun_tips__text{line-height:38px;vertical-align:middle}.yidun_intellisense--light\x20.yidun_classic-container{position:absolute;bottom:0;left:0;width:100%;z-index:1000}.yidun_intellisense--light\x20.yidun_classic-wrapper{display:none;width:100%;padding:9px;border:1px\x20solid\x20#e4e7eb;border-radius:2px;background-color:#fff}.yidun_intellisense--light\x20.yidun_classic-wrapper--shifting{display:block!important;position:absolute!important;left:-99999px!important;top:-99999px!important}.yidun_intellisense--light.yidun_intellisense--checking\x20.yidun_intelli-icon,.yidun_intellisense--light.yidun_intellisense--loading\x20.yidun_intelli-icon{background-color:#1991fa}.yidun_intellisense--light.yidun_intellisense--checking\x20.yidun_intelli-icon\x20.yidun_logo,.yidun_intellisense--light.yidun_intellisense--loading\x20.yidun_intelli-icon\x20.yidun_logo{background-image:url(' + U(1) + ");background-position:0 -229px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-icon .yidun_logo,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-icon .yidun_logo{background-image:url(" + U(2) + ");background-position:0 -226px;background-size:40px 1515px}}.yidun_intellisense--light.yidun_intellisense--checking .yidun_intelli-text,.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-text{color:#1991fa}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple{position:absolute;top:50%;left:50%;transform:translateY(-80px)}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div:nth-child(2){animation-delay:-1.2s}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div:nth-child(3){animation-delay:-.6s}.yidun_intellisense--light.yidun_intellisense--checking .yidun_ball-scale-multiple>div{position:absolute;box-shadow:inset 0 0 40px rgba(25,145,250,.5);border-radius:100%;animation-fill-mode:both;left:-80px;top:0;opacity:0;width:160px;height:160px;animation:ball-scale-multiple 1.8s 0s linear infinite}.yidun_intellisense--light.yidun_intellisense--loading .yidun_logo{display:none}.yidun_intellisense--light.yidun_intellisense--loading .yidun_intelli-loading{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px;width:16px;height:16px;border-radius:50%;border-width:2px;border-style:solid;border-color:#fff #fff transparent;animation:loading .75s linear infinite;background-position:0 0}.yidun_intellisense--light.yidun_intellisense--error .yidun_intelli-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_intelli-tips,.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-tips{display:none}.yidun_intellisense--light.yidun_intellisense--error .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--success .yidun_classic-tips{display:block}.yidun_intellisense--light.yidun_intellisense--success .yidun_intelli-control{border-color:#52ccba;background-color:#d2f4ef}.yidun_intellisense--light.yidun_intellisense--success .yidun_classic-tips{color:#52ccba}.yidun_intellisense--light.yidun_intellisense--success .yidun_tips__icon{width:17px;background-image:url(" + U(1) + ");background-position:0 -111px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + U(2) + ');background-position:0\x20-111px;background-size:40px\x201515px}}.yidun_intellisense--light.yidun_intellisense--error\x20.yidun_intelli-control,.yidun_intellisense--light.yidun_intellisense--loadfail\x20.yidun_intelli-control{border-color:#f57a7a;background-color:#fce1e1}.yidun_intellisense--light.yidun_intellisense--error\x20.yidun_classic-tips,.yidun_intellisense--light.yidun_intellisense--loadfail\x20.yidun_classic-tips{color:#f57a7a}.yidun_intellisense--light.yidun_intellisense--error\x20.yidun_tips__icon,.yidun_intellisense--light.yidun_intellisense--loadfail\x20.yidun_tips__icon{background-image:url(' + U(1) + ");background-position:0 -77px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--light.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--light.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + U(2) + ');background-position:0\x20-77px;background-size:40px\x201515px}}.yidun_intellisense--light.yidun_intellisense--maxerror\x20.yidun_intelli-control\x20.yidun_tips__text:hover{cursor:pointer;text-decoration:underline}.yidun_intellisense--size-medium,.yidun_intellisense--size-medium\x20.yidun_intelli-control{font-size:18px}.yidun_intellisense--size-medium.yidun_intellisense--success\x20.yidun_tips__icon{width:22px;height:15px;background-image:url(' + U(1) + ');background-position:0\x20-166px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun_intellisense--size-medium.yidun_intellisense--success\x20.yidun_tips__icon{background-image:url(' + U(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-medium.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-medium.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + U(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-medium.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-medium.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun_intellisense--size-large{font-size:20px}.yidun_intellisense--size-large .yidun_intelli-control{font-size:20px;line-height:19px}.yidun_intellisense--size-large.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + U(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-large.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-large.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + U(1) + ");background-position:0 -251px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-large.yidun_intellisense--loadfail .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -248px;background-size:40px 1515px}}.yidun_intellisense--size-x-large,.yidun_intellisense--size-x-large .yidun_intelli-control{font-size:24px}.yidun_intellisense--size-x-large.yidun_intellisense--success .yidun_tips__icon{width:22px;height:15px;background-image:url(" + U(1) + ");background-position:0 -166px;background-size:40px 1518px}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2){.yidun_intellisense--size-x-large.yidun_intellisense--success .yidun_tips__icon{background-image:url(" + U(2) + ");background-position:0 -164px;background-size:40px 1515px}}.yidun_intellisense--size-x-large.yidun_intellisense--error .yidun_tips__icon,.yidun_intellisense--size-x-large.yidun_intellisense--loadfail .yidun_tips__icon{width:18px;height:18px;background-image:url(" + U(1) + ');background-position:0\x20-251px;background-size:40px\x201518px}@media\x20only\x20screen\x20and\x20(-webkit-min-device-pixel-ratio:2),only\x20screen\x20and\x20(min-device-pixel-ratio:2){.yidun_intellisense--size-x-large.yidun_intellisense--error\x20.yidun_tips__icon,.yidun_intellisense--size-x-large.yidun_intellisense--loadfail\x20.yidun_tips__icon{background-image:url(' + U(2) + ');background-position:0\x20-248px;background-size:40px\x201515px}}', '']);
}, function (a, W) {
  a["exports"] = "<div\n  class=\"yidun yidun-custom <%= 'yidun--' + theme %> <%= 'yidun--' + mode %> <%= 'yidun--size-' + size %> <% if (isRtlLang) { %> yidun--rtl <% } %> <% if (disableFocusVisible) { %> yidun--disable-focus-outline <% } %>\"\n  style=\"width: <%= width %>; min-width: <%= minWidth %>\">\n  <div class=\"yidun_panel\"\n    <% if (mode === 'float') { %>\n    style=\"<%= customStyles.imagePanel.align === 'top'\n    ? 'bottom: ' + customStyles.controlBar.height + '; padding-bottom: ' + customStyles.gap\n    : 'top: ' + customStyles.controlBar.height + '; padding-top: ' + customStyles.gap %>\"\n    <% } else { %>\n    style=\"padding-bottom: <%= customStyles.gap %>\"\n    <% } %>\n  >\n    <div class=\"yidun_panel-placeholder\">\n      <% if (mode === 'float') { %>\n      <iframe class=\"yidun_cover-frame\"></iframe>\n      <% } %>\n      <div class=\"yidun_bgimg\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n        <% if (smsNew) { %>\n          <div class=\"yidun_smsbox <% if (isMobile) { %> yidun_smsbox--mobile <% } %>\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n            <div class=\"yidun_smsbox-qrcode\">\n            <div class=\"yidun_smsbox-qrcode--img\"></div>\n            </div>\n            <div class=\"yidun_smsbox-text\">\n              <div class=\"yidun_smsbox-text--guide\">\n                <div class=\"yidun_smsbox-text--qr\"><%= langPkg['sms']['scanQrToSMS'] %></div>\n                <span class=\"yidun_smsbox-text--manual\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['noScanQr'] %></span>\n              </div>\n            </div>\n            <div class=\"yidun_smsbox--mobile-wrapper\">\n              <div class=\"yidun_smsbox--mobile-guide\"><%= langPkg['sms']['clickToSMS'] %>:</div>\n              <div class=\"yidun_smsbox--mobile-btn\">\n                <a class=\"yidun_smsbox--mobile-btn-inner\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\" href=\"#\" target=\"_blank\"><%= langPkg['sms']['toSMS'] %></a>\n              </div>\n              <div class=\"yidun_smsbox-mobile--manual\">\n                <span class=\"yidun_smsbox-mobile--manual-btn\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['cannotJump'] %></span>\n              </div>\n            </div>\n            <div class=\"yidun_smsbox-manual\">\n              <div class=\"yidun_smsbox-manual-wrapper\">\n                <div class=\"yidun_smsbox-manual--edit\">\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['editSMS'] %></span>\n                  <span class=\"yidun_smsbox-manual--edit-content\"></span>\n                </div>\n                <div class=\"yidun_smsbox-manual--send\">\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['sendSMSTo'] %></span>\n                  <span class=\"yidun_smsbox-manual--send-content\">\n                    <span class=\"yidun_smsbox-manual--send-content__short\"></span>\n                    <span class=\"yidun_smsbox-manual--send-content__backup\"></span>\n                  </span>\n                </div>\n                <% if (isMobile) { %>\n                  <span class=\"yidun_smsbox-manual--btn\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\"><%= langPkg['sms']['toSMS'] %></span>\n                <% } else { %>\n                  <span class=\"yidun_smsbox-manual--qr\" aria-label=\"<%= langPkg['sms']['scanQrToSMS'] %>\" type=\"button\"><%= langPkg['sms']['scanQrToSMS'] %></span>\n                <% } %>\n              </div>\n            </div>\n          </div>\n        <% } %>\n        <img class=\"yidun_bg-img\" alt=\"\u9A8C\u8BC1\u7801\u80CC\u666F\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\"/>\n        <img class=\"yidun_jigsaw\" alt=\"\u9A8C\u8BC1\u7801\u6ED1\u5757\" />\n        <img class=\"yidun_avoid-front\" alt=\"\u969C\u788D\u8EB2\u907F\u9A8C\u8BC1\u7801\u65B9\u5F62\u4F53\" />\n        <canvas class=\"yidun_avoid-canvas\"></canvas>\n        <% for (var i in inferences) { %>\n          <% if (inferences.hasOwnProperty(i)) { %>\n          <div class=\"yidun_inference <%= 'yidun_inference--' + i %>\" draggable=\"true\">\n            <img class=\"yidun_inference__img\" draggable=\"false\" />\n            <span class=\"yidun_inference__border\"></span>\n          </div>\n          <% } %>\n        <% } %>\n        <div class=\"yidun_voice\">\n          <div class=\"yidun_voice__inner\">\n            <div class=\"yidun_audio\">\n              <div class=\"yidun_audio__wave\" tabindex=\"-1\"></div>\n              <audio class=\"yidun_audio__source\" src=\"\"></audio>\n              <button type=\"button\" class=\"yidun_audio__play\" aria-label=\"<%= langPkg['playVoice'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['playVoice'] %></span></button>\n              <button type=\"button\" class=\"yidun_audio__refresh\" aria-label=\"<%= langPkg['refresh'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['refresh'] %></span></button>\n            </div>\n            <input class=\"yidun_voice__input\" aria-label=\"<%= langPkg['enterCode'] %>\" placeholder=\"<%= langPkg['enterCode'] %>\" maxlength=\"10\" type=\"tel\" />\n            <div class=\"yidun_voice__btns\">\n              <button type=\"button\" class=\"yidun_voice__refresh\"><span class=\"yidun_voice__txt\"><%= langPkg['refresh'] %></span></button>\n              <div class=\"yidun_voice__right\">\n                <button type=\"button\" class=\"yidun_voice__back\"><span class=\"yidun_voice__txt\"><%= langPkg['back'] %></span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"yidun_loadbox\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n        <div class=\"yidun_loadbox__inner\">\n          <div class=\"yidun_loadicon\"></div>\n          <span class=\"yidun_loadtext\"><%= langPkg['loading'] %></span>\n        </div>\n      </div>\n\n      <div class=\"yidun_top\" style=\"<% if (customStyles.executeBorderRadius === undefined) { %>border-top-right-radius: <%= customStyles.imagePanel.borderRadius %>; <% } %> <% if (customStyles.executeTop !== undefined) { %>top: <%= customStyles.executeTop %>; <% } %> <% if (customStyles.executeRight !== undefined) { %>right: <%= customStyles.executeRight %>; <% } %> <% if (customStyles.executeBorderRadius) { %>border-radius: <%= customStyles.executeBorderRadius %>; <% } %> <% if (!!customStyles.executeBackground) { %>background: <%= customStyles.executeBackground %>; <% } %>\">\n        <% if (feedback.enable) { %>\n        <a\n          class=\"yidun_feedback\"\n          href=\"<%= feedback.url + '?captchaId=' + captchaId %>\"\n          target=\"_blank\"\n          tabindex=\"0\"><span class=\"yidun_feedback_txt\"><%= langPkg['feedback'] %></span></a>\n        <% } %>\n        <div class=\"yidun_top__right\">\n          <button\n            type=\"button\"\n            class=\"yidun_refresh\"\n            style=\"<% if (!audio && !feedback.enable) { %>margin-left: 0px; <% } %>\"><%= langPkg['refresh'] %></button>\n          <% if (audio) { %>\n          <button\n            type=\"button\"\n            class=\"yidun_top__audio\"><%= langPkg['switchToVoice'] %></button>\n          <% } %>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"yidun_control\"\n    style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"\n    tabindex=\"0\"\n    role=\"button\">\n    <div class=\"yidun_slide_indicator\" style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"></div>\n    <div class=\"yidun_slider <% if (!isMobile) { %> yidun_slider--hover <% } %>\" style=\"width: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\">\n      <!-- \u5206\u652F\u4E8C\u517C\u5BB9\u65E7\u63A5\u53E3 -->\n      <% if (customStyles.icon.slider) { %>\n      <img src=\"<%= customStyles.icon.slider %>\" class=\"yidun_slider__icon\" />\n      <% } else if (customStyles.controlBar.slideIcon || customStyles.controlBar.slideIconSuccess || customStyles.controlBar.slideIconError || customStyles.controlBar.slideIconMoving) { %>\n      <span class=\"yidun_slider__icon\"></span>\n      <img src=\"<%= customStyles.controlBar.slideIcon %>\" class=\"yidun_slider__icon yidun_slider__icon--img\" />\n      <% } else { %>\n      <span class=\"yidun_slider__icon\"></span>\n      <% } %>\n    </div>\n    <div\n      class=\"yidun_tips\"\n      aria-live=\"polite\">\n      <i class=\"yidun_tips__before\"></i>\n      <div class=\"yidun_tips__content\">\n        <span class=\"yidun_tips__icon\"></span>\n        <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\n        <div class=\"yidun_tips__answer\">\n          <span class=\"yidun_tips__point\"></span>\n          <img class=\"yidun_tips__img\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
}, function (a, W) {
  a["exports"] = '<div\x20class=\x22yidun_intellisense\x20<%=\x20\x27yidun_intellisense--\x27\x20+\x20theme\x20%>\x20<%=\x20\x27yidun_intellisense--size-\x27\x20+\x20size\x20%>\x22\x20style=\x22display:\x20none\x22>\x0a\x20\x20<div\x0a\x20\x20\x20\x20class=\x22yidun_intelli-control\x22\x0a\x20\x20\x20\x20tabindex=\x220\x22\x0a\x20\x20\x20\x20aria-live=\x22polite\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22yidun_intelli-tips\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22yidun_intelli-icon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20if\x20(icon.intellisenseLogo)\x20{\x20%>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22<%=\x20icon.intellisenseLogo%>\x22\x20class=\x22yidun_logo\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20}\x20else\x20{\x20%>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22yidun_logo\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20}\x20%>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22yidun_intelli-loading\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22yidun_ball-scale-multiple\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<span\x0a\x20\x20\x20\x20\x20\x20\x20\x20class=\x22yidun_intelli-text\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20if\x20(isAndroid)\x20{\x20%>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-label=\x22<%=\x20langPkg.intellisense.longtap\x20%>\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20<%\x20}%>><%=\x20langPkg.intellisense.normal\x20%></span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20class=\x22yidun_classic-tips\x22>\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22yidun_tips__icon\x22></span>\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22yidun_tips__text\x20yidun-fallback__tip\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22yidun_classic-container\x22>\x0a\x20\x20\x20\x20<iframe\x20class=\x22yidun_cover-frame\x22></iframe>\x0a\x20\x20\x20\x20<div\x20class=\x22yidun_classic-wrapper\x22\x20style=\x22display:\x20<%=\x20classicVisible\x20?\x20\x27block\x27\x20:\x20\x27none\x27\x20%>\x22></div>\x0a\x20\x20</div>\x0a</div>\x0a';
}, function (a, W) {
  a['exports'] = "<div\n  class=\"<%= 'yidun_popup--' + theme %> yidun_popup <%= 'yidun_popup--size-' + size %> <%= topIsNotAuto || bottomIsNotAuto ? '' : 'yidun_popup--auto' %> <%= appendTo ? 'yidun_popup--append' : '' %> <% if (isRtlLang) { %> yidun_popup--rtl <% } %> <% if (disableFocusVisible) { %> yidun_popup--disable-focus-outline <% } %>\"\n  style=\"display: none;position: <%= popupStyles.position %>\">\n  <!-- iframe\u7528\u4E8E\u906E\u6321\u9875\u9762\u4E2Dobject\u3001embed\u3001select\u7B49\u5143\u7D20 -->\n  <iframe class=\"yidun_cover-frame\"></iframe>\n  <div\n    class=\"yidun_popup__mask\"\n    style=\"opacity: <%= popupStyles.opacity %>;filter: alpha(opacity=<%= popupStyles.opacity * 100 %>);\"></div>\n  <div class=\"yidun_modal__wrap\">\n    <div class=\"yidun_modal__subwrap\">\n      <% if (bottomIsNotAuto) { %>\n      <span class=\"yidun_modal__sibling\"></span>\n      <% } %>\n      <div\n        class=\"yidun_modal\"\n        style=\"<% if (topIsNotAuto) { %>top: <%= popupStyles.top %>; <% } %><% if (bottomIsNotAuto) { %>vertical-align:bottom;bottom: <%= popupStyles.bottom %>; <% } %><% if (widthIsNotAuto) { %>width: <%= width %>; <% } %><% if (popupStyles.radius) { %>border-radius: <%= popupStyles.radius %>; <% } %><% if (popupStyles.borderColor) { %>border-color: <%= popupStyles.borderColor %>; <% } %><% if (popupStyles.background) { %>background: <%= popupStyles.background %>; <% } %><% if (popupStyles.paddingTop) { %>padding-top: <%= popupStyles.paddingTop %>; <% } %><% if (popupStyles.paddingBottom) { %>padding-bottom: <%= popupStyles.paddingBottom %>; <% } %>\"\n        tabindex=\"-1\">\n        <div\n          class=\"yidun_modal__header\"\n          style=\"height: <%= popupStyles.capBarHeight %>; <% if (popupStyles.capBarTextAlign) { %>text-align: <%= popupStyles.capBarTextAlign %>; <% } %><% if (popupStyles.capBarBorderColor) { %>border-bottom-color: <%= popupStyles.capBarBorderColor %>; <% } %>\">\n            <span class=\"yidun_modal__before\"></span>\n            <span class=\"yidun_modal__title\" style=\"<% if (popupStyles.capBarTextColor) { %>color: <%= popupStyles.capBarTextColor %>; <% } %><% if (popupStyles.capBarTextSize) { %>font-size: <%= popupStyles.capBarTextSize %>; <% } %><% if (popupStyles.capBarTextWeight) { %>font-weight: <%= popupStyles.capBarTextWeight %>; <% } %>\"><%= langPkg['popupTitle'] %></span>\n          <% if (!enableClose && !hideCloseBtn) { %>\n            <button\n              type=\"button\"\n              class=\"yidun_modal__close\">\n              <span class=\"yidun_icon-close\"><%= langPkg['close']%></span>\n            </button>\n          <% } %>\n        </div>\n        <div\n          class=\"yidun_modal__body\"\n          style=\"padding: <%= popupStyles.capPadding %>px; <% if (popupStyles.capPaddingTop !== undefined) { %>padding-top: <%= popupStyles.capPaddingTop %>px; <% } %> <% if (popupStyles.capPaddingRight !== undefined) { %>padding-right: <%= popupStyles.capPaddingRight %>px; <% } %> <% if (popupStyles.capPaddingBottom !== undefined) { %>padding-bottom: <%= popupStyles.capPaddingBottom %>px; <% } %> <% if (popupStyles.capPaddingLeft !== undefined) { %>padding-left: <%= popupStyles.capPaddingLeft %>px; <% } %>\">\n          <captcha-core :intellisense=\"intellisense\" :autoWidth=\"widthIsNotAuto\" :enableColor=\"false\" :onWidthGeted=\"onWidthGetedForCore\"></captcha-core>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
}, function (a, W) {
  var h9 = MF;
  function U(z, A) {
    for (var G in A) z["setAttribute"](G, A[G]);
  }
  function R(z, A) {
    var h5 = M;
    z['onload'] = function () {
      this["onerror"] = this['onload'] = null, A(null, z);
    }, z["onerror"] = function () {
      this['onerror'] = this["onload"] = null, A(new Error("Failed to load " + this["src"]), z);
    };
  }
  function P(z, A) {
    var h7 = M;
    z["onreadystatechange"] = function () {
      "complete" != this['readyState'] && "loaded" != this["readyState"] || (this['onreadystatechange'] = null, A(null, z));
    };
  }
  a["exports"] = function (z, A, G) {
    var j = document["head"] || document["getElementsByTagName"]('head')[0],
      L = document["createElement"]("script");
    'function' == typeof A && (G = A, A = {}), A = A || {}, G = G || function () {}, L["type"] = A['type'] || "text/javascript", L["charset"] = A["charset"] || "utf8", L["async"] = !("async" in A) || !!A["async"], L["src"] = z, A["attrs"] && U(L, A["attrs"]), A["text"] && (L["text"] = '' + A["text"]);
    var E = "onload" in L ? R : P;
    E(L, G), L["onload"] || R(L, G), j["appendChild"](L);
  };
}]);

module.exports = {caller};
