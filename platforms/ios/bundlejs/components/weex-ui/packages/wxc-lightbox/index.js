// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 160);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xindi/Desktop/iosPrictice/IWeex/IWeex/src/components/weex-ui/packages/wxc-overlay/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f8817e5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(161);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(162)
)

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(165)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xindi/Desktop/iosPrictice/IWeex/IWeex/src/components/weex-ui/packages/wxc-lightbox/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-20e02096"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = {
  "indicator": {
    "position": "absolute",
    "itemColor": "rgba(255,195,0,0.5)",
    "itemSelectedColor": "#ffc300",
    "itemSize": "20",
    "height": "20",
    "bottom": "24"
  }
}

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _wxcMask = __webpack_require__(164);

var _wxcMask2 = _interopRequireDefault(_wxcMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    WxcMask: _wxcMask2.default
  },
  props: {
    width: {
      type: [Number, String],
      default: 750
    },
    height: {
      type: [Number, String],
      default: 750
    },
    show: {
      type: Boolean,
      default: false
    },
    imageList: Array,
    indicatorColor: {
      type: Object,
      default: function _default() {
        return {
          'item-color': 'rgba(255, 195, 0, .5)',
          'item-selected-color': '#ffc300',
          'item-size': '20px'
        };
      }
    },
    index: {
      type: [Number, String],
      default: 0
    },
    interval: {
      type: [Number, String],
      default: 3000
    }
  },
  computed: {
    indicatorStyle: function indicatorStyle() {
      return _extends({
        width: this.width + 'px'
      }, this.indicatorColor);
    }
  },
  methods: {
    maskOverlayClick: function maskOverlayClick() {
      this.$emit('wxcLightboxOverlayClicked', {});
    }
  }
};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(67);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-mask', {
    attrs: {
      "width": _vm.width,
      "height": _vm.height,
      "ariaHidden": "true",
      "maskBgColor": "transparent",
      "overlayOpacity": "0.8",
      "show": _vm.show,
      "showClose": false
    },
    on: {
      "wxcMaskSetHidden": _vm.maskOverlayClick
    }
  }, [(_vm.show) ? _c('slider', {
    style: {
      height: _vm.height + 'px'
    },
    attrs: {
      "autoPlay": "false",
      "index": _vm.index,
      "interval": _vm.interval
    }
  }, [_vm._l((_vm.imageList), function(v, index) {
    return _c('div', {
      key: index,
      style: {
        height: _vm.height + 'px'
      }
    }, [_c('image', {
      style: {
        height: _vm.height + 'px',
        width: _vm.width + 'px'
      },
      attrs: {
        "resize": "cover",
        "src": v.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"],
    style: _vm.indicatorStyle
  })], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(15);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(68)
)

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(70)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xindi/Desktop/iosPrictice/IWeex/IWeex/src/components/weex-ui/packages/wxc-mask/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cfd4ee66"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "wxc-mask": {
    "position": "fixed",
    "top": "300",
    "left": "60",
    "width": "702",
    "height": "800"
  },
  "mask-bottom": {
    "width": "100",
    "height": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "mask-close-icon": {
    "width": "64",
    "height": "64"
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wxcOverlay = __webpack_require__(20);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

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

var animation = weex.requireModule('animation');
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    height: {
      type: [String, Number],
      default: 800
    },
    width: {
      type: [String, Number],
      default: 702
    },
    top: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    hasOverlay: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          canAutoClose: true,
          duration: 300,
          opacity: 0.6
        };
      }
    },
    borderRadius: {
      type: [String, Number],
      default: 0
    },
    overlayCanClose: {
      type: Boolean,
      default: true
    },
    maskBgColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data: function data() {
    return {
      closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
      maskTop: 264,
      opened: false
    };
  },
  computed: {
    mergeOverlayCfg: function mergeOverlayCfg() {
      return _extends({}, this.overlayCfg, {
        hasAnimation: this.hasAnimation
      });
    },
    maskStyle: function maskStyle() {
      var width = this.width,
          height = this.height,
          showClose = this.showClose,
          hasAnimation = this.hasAnimation,
          opened = this.opened,
          top = this.top;

      var newHeight = showClose ? height - 0 + 100 : height;
      var _weex$config$env = weex.config.env,
          deviceHeight = _weex$config$env.deviceHeight,
          deviceWidth = _weex$config$env.deviceWidth,
          platform = _weex$config$env.platform;

      var _deviceHeight = deviceHeight || 1334;
      var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
      var navHeight = isWeb ? 0 : 130;
      var pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
      return {
        width: width + 'px',
        height: newHeight + 'px',
        left: (750 - width) / 2 + 'px',
        top: (top || (pageHeight - height) / 2) + 'px',
        opacity: hasAnimation && !opened ? 0 : 1
      };
    },
    contentStyle: function contentStyle() {
      return {
        width: this.width + 'px',
        backgroundColor: this.maskBgColor,
        height: this.height + 'px',
        borderRadius: this.borderRadius + 'px'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearMask(show);
      }, 50);
      return show;
    }
  },
  methods: {
    closeIconClicked: function closeIconClicked() {
      this.appearMask(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      if (this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicking', {});
      }
    },
    wxcOverlayBodyClicked: function wxcOverlayBodyClicked() {
      if (!this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicked', {});
      }
    },
    needEmit: function needEmit() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.opened = bool;
      !bool && this.$emit('wxcMaskSetHidden', {});
    },
    appearMask: function appearMask(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction;

      var maskEl = this.$refs['wxc-mask'];
      if (hasAnimation && maskEl) {
        animation.transition(maskEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          _this2.needEmit(bool);
        });
      } else {
        this.needEmit(bool);
      }
    }
  }
};

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    attrs: {
      "show": _vm.show && _vm.hasOverlay,
      "canAutoClose": _vm.overlayCanClose
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
    }
  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-mask",
    staticClass: ["wxc-mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    style: _vm.contentStyle
  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
    staticClass: ["mask-bottom"],
    style: {
      width: _vm.width + 'px'
    },
    on: {
      "click": _vm.closeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mask-close-icon"],
    attrs: {
      "src": _vm.closeIcon,
      "ariaLabel": "关闭"
    }
  })]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });