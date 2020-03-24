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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _wind_particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wind_particle */ \"./src/wind_particle.js\");\n\n\n// const MovingObject = require(\"./moving_object.js\").default;\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nwindow.WindParticle = _wind_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\")\n\n    const mo = {\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    };\n\n    const wp = {\n        pos: [100, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    }\n\n    new _wind_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](wp).draw(ctx)\n    new _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mo).draw(ctx)\n})\n\n\nconsole.log(\"webpack working!\")\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction MovingObject(attrs) {\n    this.pos = attrs.pos;\n    this.vel = attrs.vel;\n    this.radius = attrs.radius;\n    this.color = attrs.color\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    // console.log(\"canvas works\")\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0], \n        this.pos[1], \n        this.radius, \n        0, \n        2 * Math.PI);\n    ctx.stroke();\n}\n\nMovingObject.prototype.move = function(ctx) {\n    let x = this.pos[0] + this.vel\n    let y = this.pos[1] + this.vel\n\n    let newPos = [x, y]\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n    dist(pos1, pos2) {\n        let x1, y1;\n        [x1, y1] = pos1\n\n        let x2, y2;\n        [x2, y2] = pos2\n\n        let left = Math.pow(x1 - x2, 2)\n        let right = Math.pow(y1 - y2, 2)\n\n        return Math.sqrt(left + right)\n    },\n\n    norm(pos) {\n        return dist([0, 0], pos);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    setVec(length) {\n    const deg = 2 * Math.PI * 20;\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/wind_particle.js":
/*!******************************!*\
  !*** ./src/wind_particle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst windAttrs = {\n    color: \"#ffe6e6\",\n    radius: 3\n}\n\nclass WindParticle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(args) {\n        super(args)\n        args = args || {};\n        this.color = windAttrs.color;\n        this.radius = windAttrs.radius;\n        this.pos = args.pos;\n        this.vel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setVec()\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindParticle);\n\n//# sourceURL=webpack:///./src/wind_particle.js?");

/***/ })

/******/ });