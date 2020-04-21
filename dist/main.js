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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wind_particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wind_particle */ \"./src/wind_particle.js\");\n/* harmony import */ var _water_particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./water_particle */ \"./src/water_particle.js\");\n\n\n\nclass Demo {\n    constructor() {\n        this.DIM_X = 800\n        this.DIM_Y = 600\n        this.NUM_WIND_PARTICLES = 4\n        this.windParticles = []\n        this.addWindParticles();\n        this.movedWindParticles = [];\n        this.finalMovedWindParticles = [];\n\n\n\n        this.NUM_WATER_PARTICLES = 10\n        this.waterParticles = [];\n        this.addWaterParticles();\n    }\n}\n\nDemo.prototype.randomPosition = () => {\n    let x = Math.floor(Math.random() * 800)\n    let y = Math.floor(Math.random() * 800)\n    let randPos = [x, y]\n    return randPos\n}\n\nDemo.prototype.randomFromInterval = (min, max) => { \n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nDemo.prototype.waterPositionRandom = function(i) {\n    let positions = [\n        [60, 60], \n        [330, 60], \n        [240, 200], \n        [250, 400], \n        [500, 100], \n        [250, 500], \n        [90, 150], \n        [400, 380],\n        [500, 500],\n        [450, 230]\n    ]\n\n    return positions[i]\n} \n\nDemo.prototype.addWindParticles = function() {\n    let i = 0;\n    while(i < this.NUM_WIND_PARTICLES) {\n        let windParticle = new _wind_particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pos: this.waterPositionRandom(i), demo: this })\n        this.windParticles.push(windParticle)\n        i += 1\n    }\n}\n\nDemo.prototype.addWaterParticles = function () {\n    let i = 0;\n    while (i < this.NUM_WATER_PARTICLES) {\n        let waterParticle = new _water_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: this.waterPositionRandom(i), demo: this })\n        this.waterParticles.push(waterParticle)\n        i += 1\n    }\n\n}\n\nDemo.prototype.draw = function(ctx){\n\n    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {\n        return finalMovedWindParticle.draw(ctx)\n    })\n}\nDemo.prototype.drawWater = function(ctx){\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    let all;\n        all = this.waterParticles.concat(this.windParticles)\n\n    all.forEach( particle => {\n        return particle.draw(ctx);\n    })\n}\n\nDemo.prototype.moveObjects = function() {\n    this.windParticles.forEach(windParticle => {\n        return windParticle.move()\n    })\n}\n\nDemo.prototype.moveObjectsWater = function() {\n    this.waterParticles.forEach(waterParticle => {\n        return waterParticle.move()\n    })\n\n}\n\nDemo.prototype.mod = function (a, b) {\n    return ((a % b) + b) % b;\n}\n\nDemo.prototype.wrap = function (pos) {\n    let x = this.mod(pos[0], this.DIM_X)\n    let y = this.mod(pos[1], this.DIM_Y)\n\n    return [x, y]\n}\n\nDemo.prototype.moveObjectsAgain = function(mouseX, mouseY) {\n    let pos = []\n    this.windParticles.forEach( windParticle => {\n        pos.push(windParticle.pos)\n    })\n    let vel = []\n    this.windParticles.forEach(windParticle => {\n        vel.push(windParticle.vel)\n    })\n    this.windParticles = [];\n    \n    let i = 0;\n    while (i < this.NUM_WIND_PARTICLES) {\n        let windParticle = new _wind_particle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pos: pos[i], demo: this, vel: vel[i], mouseX: mouseX, mouseY: mouseY })\n        this.windParticles.push(windParticle)\n        i += 1\n    }\n    this.windParticles.forEach( windParticle => {\n        windParticle.move()\n    })\n}\n\nDemo.prototype.checkCollisionsWater = function() {\n    let all = this.waterParticles\n    all.forEach( (particle1, idx) => {\n        particle1.collideMove()\n        for(let i = idx + 1; i < all.length; i += 1) {\n            let particle2 = all[i]\n            particle1.isCollidedWith(particle2)\n        }\n    })\n}\n\nDemo.prototype.stepWater = function(mouseX, mouseY, moveAgain=false) {\n    if (moveAgain) {\n        this.moveObjectsAgain(mouseX, mouseY)\n    }\n    this.checkCollisionsWater()\n    this.moveObjectsWater()\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./src/demo.js?");

/***/ }),

/***/ "./src/demo_view.js":
/*!**************************!*\
  !*** ./src/demo_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n\n\nclass DemoView {\n    constructor(ctx) {\n        this.Demo = new _demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.ctx = ctx\n        this.interval = \"testtest\"\n        this.intervalWater = \"testwater\"\n    }\n}\nDemoView.prototype.start = function(mouseX, mouseY){\n    this.interval = setInterval(() => { \n        this.Demo.stepWater(mouseX, mouseY, true)\n        this.Demo.drawWater(this.ctx)\n    }, 20);\n\n}\n\nDemoView.prototype.clear = function() {\n    clearInterval(this.interval)\n}\n\nDemoView.prototype.moveAgain = function(mouseX, mouseY) {\n    this.interval = setInterval(() => {\n        this.Demo.stepWater(mouseX, mouseY, true)\n        this.Demo.drawWater(this.ctx)\n    }, 20)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DemoView);\n\n//# sourceURL=webpack:///./src/demo_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _wind_particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wind_particle */ \"./src/wind_particle.js\");\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n/* harmony import */ var _demo_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo_view */ \"./src/demo_view.js\");\n\n\n\n\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nwindow.WindParticle = _wind_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\nwindow.Demo = _demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\")\n    \n    let canvasPos = getPosition(canvas);\n    let mouseX = 400;\n    let mouseY = 400;\n    \n    const Demoview = new _demo_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx)\n    Demoview.start(mouseX, mouseY)\n\n    canvas.addEventListener(\"mousedown\", setMousePosition, false)\n\n    function setMousePosition(e) {\n        mouseX = e.clientX - canvasPos.x;\n        mouseY = e.clientY - canvasPos.y;\n\n        Demoview.clear()\n        Demoview.moveAgain(mouseX, mouseY)\n    }\n\n    function getPosition(el) {\n        let xPosition = 0;\n        let yPosition = 0;\n\n        while (el) {\n            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);\n            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);\n            el = el.offsetParent\n        }\n\n        return {\n            x: xPosition,\n            y: yPosition\n        }\n    }\n\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction MovingObject(attrs) {\n    this.pos = attrs.pos;\n    this.demo = attrs.demo;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0], \n        this.pos[1], \n        this.radius, \n        0, \n        2 * Math.PI);\n    ctx.fillStyle = \"rgba(0, 0, 0, 0.2)\"\n    ctx.fill()\n    ctx.strokeStyle = this.strokeColor\n    ctx.stroke();\n}\n\nMovingObject.prototype.move = function() {\n    let x = this.pos[0] + this.vel[0]\n    let y = this.pos[1] + this.vel[1]\n    this.pos = this.demo.wrap([x, y])\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    if (_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {\n        let currentIdx = this.strokeColors.indexOf(this.strokeColor);\n        let otherCurrentIdx = otherObject.strokeColors.indexOf(otherObject.strokeColor);\n        let nextIdx = (currentIdx + 1) % 5;\n        let otherNextIdx = (otherCurrentIdx + 1) % 5;\n        this.strokeColor = this.strokeColors[nextIdx];\n        otherObject.strokeColor = otherObject.strokeColors[otherNextIdx];\n\n        this.collideMoveObj(otherObject)\n    }\n}\n\nMovingObject.prototype.collideMove = function() {\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let r1 = this.radius;\n    if ( y1 + this.vel[1] < r1 || y1 + this.vel[1] > 600 - r1) {\n        this.vel[1] *= -1\n    } else if (x1 + this.vel[0] < r1 || x1 + this.vel[0] > 800 - r1) {\n        this.vel[0] *= -1\n    } \n}\n\n\nMovingObject.prototype.collideMoveObj = function(particle2) {\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let x2 = particle2.pos[0];\n    let y2 = particle2.pos[1];\n    let r1 = this.radius;\n    let r2 = particle2.radius;\n\n\n    if (x1 + r1 + this.vel[0] > x2 - r2) {\n        this.vel[0] *= -1\n        this.vel[1] *= -1\n        particle2.vel[0] *= -1\n        particle2.vel[1] *= -1\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n\n    dist(pos1, pos2) {\n        let x1, y1;\n        [x1, y1] = pos1\n\n        let x2, y2;\n        [x2, y2] = pos2\n\n        let left = Math.pow(x1 - x2, 2)\n        let right = Math.pow(y1 - y2, 2)\n\n        return Math.sqrt(left + right)\n    },\n\n    norm(pos) {\n        return dist([0, 0], pos);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    setVec(length, mouseX, mouseY, angle) {\n    console.log(mouseX, mouseY)\n    const deg = 2 * Math.PI * (angle/(mouseY + mouseX));\n    return Util.scale([Math.sin(deg), Math.sin(deg)], length);\n    },\n\n    setVecWater(length) {\n        const deg = 2 * Math.PI * .2;\n        return Util.scale([Math.sin(-deg), Math.cos(deg)], length);\n    },\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/water_particle.js":
/*!*******************************!*\
  !*** ./src/water_particle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst waterAttrs = {\n    name: \"water\",\n    color: 'rgba(0, 255, 255, 0.4)',\n    radius: 30,\n    strokeColor: \"#00ffff\",\n}\n\nclass WaterParticle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(args) {\n        super(args)\n        args = args || {};\n        this.name = waterAttrs.name;\n        this.color = waterAttrs.color;\n        this.radius = waterAttrs.radius;\n        this.pos = args.pos;\n        this.vel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setVecWater(7);\n        this.strokeColors = [\"#00ff00\", \"#ffff00\", \"#00ffff\", \"#ff00ff\", \"#ff8000\"]\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaterParticle);\n\n//# sourceURL=webpack:///./src/water_particle.js?");

/***/ }),

/***/ "./src/wind_particle.js":
/*!******************************!*\
  !*** ./src/wind_particle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst windAttrs = {\n    name: \"wind\",\n    radius: 40,\n    angle: 0\n}\n\nclass WindParticle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(args) {\n        super(args)\n        this.name = windAttrs.name;\n        this.radius = windAttrs.radius;\n        this.pos = args.pos;\n        this.angle = 0;\n        this.vel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setVec(5, args.mouseX, args.mouseY, windAttrs.angle) || args.vel\n        windAttrs.angle += 2\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindParticle);\n\n//# sourceURL=webpack:///./src/wind_particle.js?");

/***/ })

/******/ });