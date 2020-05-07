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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Demo {\n    constructor() {\n        this.DIM_X = 800\n        this.DIM_Y = 600\n\n    }\n}\n\n\nDemo.prototype.randomPosition = () => {\n    let x = Math.floor(Math.random() * 800)\n    let y = Math.floor(Math.random() * 800)\n    let randPos = [x, y]\n    return randPos\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./src/demo.js?");

/***/ }),

/***/ "./src/demo_view.js":
/*!**************************!*\
  !*** ./src/demo_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sin */ \"./src/sin.js\");\n\n\n\nclass DemoView {\n    constructor(ctx) {\n        this.Demo = new _demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.ctx = ctx\n        this.Sin = new _sin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n}\n\nDemoView.prototype.sinY = function(w, h){\n    // let t = 200;\n    let t = 0\n    // let modT = t % 120\n    function r(t) {\n        return 100 + Math.cos(t / 300) * 700;\n    };\n    function g(t) {\n        return Math.sin(t / 400) * 500;\n    };\n    function b(t) {\n        return 200 + Math.sin(t / 60) * 55;\n    };\n\n\n    setInterval(() => {\n        // t += 220\n\n        this.ctx.strokeStyle = `rgb(\n        ${r(t)},\n        ${g(t)},\n        ${b(t)}`;\n\n\n        t += 1\n        if (t < 600) {\n            this.Sin.butterfly(this.ctx, w, h, t / (12 * Math.PI))\n        }\n    }, 20);\n        // this.Sin.draw(this.ctx, w, h, 1)\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DemoView);\n\n//# sourceURL=webpack:///./src/demo_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n/* harmony import */ var _demo_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo_view */ \"./src/demo_view.js\");\n\n\n\nwindow.Demo = _demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\")\n\n    \n    const Demoview = new _demo_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx)\n\n    Demoview.sinY(800, 600)\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sin.js":
/*!********************!*\
  !*** ./src/sin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sin {\n    constructor(ctx) {\n        this.ctx = ctx\n    }\n\n}\n\nSin.prototype.sinY = (ctx, w, h, t) => {\n    ctx.strokeStyle = `#00ffff`;\n    ctx.lineWidth = 1;\n\n    let x = function (t) {\n        return w * t / 120\n        // return Math.sin(t * (10 * Math.PI) / 120) * (-w / 20) + (w / 2);\n    };\n\n    let y = function (t) {\n        return Math.sin(t * (4 * Math.PI) / 120) * (-h / 4) + (h / 2);\n    };\n\n    ctx.beginPath();\n    ctx.moveTo(x(t), y(t));\n    ctx.lineTo(x(t + 1), y(t + 1));\n    ctx.stroke();\n\n}\n\nSin.prototype.sinXY = (ctx, w, h, t) => {\n    ctx.strokeStyle = `#00ffff`;\n    ctx.lineWidth = 2;\n\n    let x = function (t) {\n        return Math.sin(t * (10 * Math.PI) / 120) * (-w / 4) + (w / 2);\n    };\n\n    let y = function (t) {\n        return Math.sin(t * (4 * Math.PI) / 120) * (-h / 4) + (h / 2);\n    };\n    \n    if (t < (12* Math.PI)) {\n        ctx.beginPath();\n        ctx.moveTo(x(t), y(t));\n        ctx.lineTo(x(t + 1), y(t + 1));\n        ctx.stroke();\n    }\n\n}\n\nSin.prototype.butterfly = (ctx, w, h, t) => {\n    var cos_t = Math.cos(t)\n    var sin_t = Math.sin(t)\n    var factorX = Math.exp(Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5);\n    var factorY = Math.exp(Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5);\n\n    // ctx.strokeStyle = `#00ffff`;\n\n    \n\n\n    ctx.lineWidth = 2;\n\n    let x = function (t) {\n        // console.log(factorX * (-w / 10) + (w / 2))\n        // console.log(Math.sin(t) * (Math.exp(Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12))) * (-w / 10) + (w / 2))\n        return (\n            // (Math.sin(t) * ((Math.pow(Math.E, Math.cos(t))) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)))) * (-w / 10) + (w / 2))\n        \n            // Math.sin(t) * (Math.pow(Math.E, Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5)) * (-w / 10) + (w / 2)\n        \n\n            // Math.sin(t) * factorX * (-w / 10) + (w / 2)\n\n            (Math.sin(t) * (Math.pow(Math.E, Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-w / 10) + (w / 2)\n\n            // Math.sin(t) * ( Math.exp(Math.cos(t)) - ( 2 *  Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5) ) * (-w / 10) + (w / 2)\n            // Math.sin(t) * ( Math.exp(Math.cos(t)) - ( 2 *  Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5) ) * (-w / 10) + (w / 2)\n        )   \n    };\n\n    let y = function (t) {\n        // console.log((Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)))) * (-w / 4) + (w / 2)))\n        return (\n            // (Math.cos(t) * ((Math.pow(Math.E, Math.cos(t))) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)))) * (-h / 10) + (h / 2))\n        \n            // Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5)) * (-h / 10) + (h / 2)\n\n            // Math.cos(t) * factorX * (-h / 10) + (h / 2)\n\n            (Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-h / 10) + (h / 2)\n\n            // Math.cos(t) * (Math.exp(Math.cos(t)) - ( 2 *  Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5)) * (-h / 10) + (h / 2)\n\n        )\n    };\n\n    ctx.beginPath();\n    ctx.moveTo(x(t), y(t));\n    ctx.lineTo(x(t + 1), y(t + 1));\n    ctx.stroke();\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sin);\n\n//# sourceURL=webpack:///./src/sin.js?");

/***/ })

/******/ });