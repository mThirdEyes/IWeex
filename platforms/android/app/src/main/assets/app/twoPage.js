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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
__vue_options__.__file = "D:\\MyPricticePro\\myWeexProject\\weexproject_test\\YoloVideoApp\\src\\components\\head.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-573557d0"
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "titleArea": {
    "width": "450",
    "height": "140",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "55"
  },
  "right": {
    "height": "140",
    "width": "150",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "absolute",
    "right": "0",
    "top": "25"
  },
  "back": {
    "height": "140",
    "width": "150",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "absolute",
    "left": "0",
    "top": "25"
  },
  "header": {
    "height": "140",
    "width": "750",
    "backgroundColor": "#17acf6",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "title": {
    "fontSize": "35",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 2 */
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

exports.default = {
    name: "head",
    props: {
        title: {
            default: '标题2'
        },
        canBack: {
            default: true
        },
        showRight: {
            default: false
        }
    },
    methods: {
        back: function back() {
            // var modal=weex.requireModule('modal');
            // modal.alert({message:'pop'})
            var nav = weex.requireModule('navigator');
            nav.pop({}, function (res) {});
        },
        rightItemClick: function rightItemClick() {
            this.$emit("rightItemClick", {});
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [(_vm.canBack) ? _c('div', {
    staticClass: ["back"],
    on: {
      "click": _vm.back
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "28px",
      color: "white"
    }
  }, [_vm._v("返回")])]) : _vm._e(), _c('div', {
    staticClass: ["titleArea"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))])]), (_vm.showRight) ? _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightItemClick
    }
  }, [_vm._t("rightItem")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _twoPage = __webpack_require__(24);

var _twoPage2 = _interopRequireDefault(_twoPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_twoPage2.default.el = '#root';
new Vue(_twoPage2.default);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
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
__vue_options__.__file = "D:\\MyPricticePro\\myWeexProject\\weexproject_test\\YoloVideoApp\\src\\twoPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32890f65"
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
/* 25 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _head = __webpack_require__(0);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = weex.requireModule('navigator'); //
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

exports.default = {
    name: "two-page",
    components: {
        head: _head2.default
    },
    methods: {
        popPage: function popPage() {
            nav.pop({
                url: '',
                animated: "true"
            }, function (event) {});
        },
        clickRight: function clickRight() {
            var modal = weex.requireModule('modal');
            modal.toast({ message: '点击顶部导航右部按钮' });
        }
    },
    created: function created() {
        console.log("aaa");
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('head', {
    attrs: {
      "title": "界面跳转",
      "showRight": "true"
    },
    on: {
      "rightItemClick": _vm.clickRight
    }
  }, [_c('div', {
    attrs: {
      "slot": "rightItem"
    },
    slot: "rightItem"
  }, [_c('text', [_vm._v("自定义右边")])])]), _c('div', {
    staticStyle: {
      width: "750px",
      height: "700px",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.popPage
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "35px",
      fontWeight: "bold"
    }
  }, [_vm._v("返回上一页")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);