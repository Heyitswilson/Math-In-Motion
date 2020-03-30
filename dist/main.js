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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _wind_particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wind_particle */ \"./src/wind_particle.js\");\n/* harmony import */ var _water_particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water_particle */ \"./src/water_particle.js\");\n/* harmony import */ var _land_land_top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./land/land_top */ \"./src/land/land_top.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\n\n\nclass Demo {\n    constructor() {\n        this.DIM_X = 800\n        this.DIM_Y = 600\n        this.NUM_WIND_PARTICLES = 2\n        // console.log('hitting demo')\n        this.windParticles = []\n        this.addWindParticles();\n        this.movedWindParticles = [];\n        this.finalMovedWindParticles = [];\n\n\n\n        this.NUM_WATER_PARTICLES = 5\n        this.waterParticles = [];\n        this.addWaterParticles();\n\n        this.landTop = new _land_land_top__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\n    }\n}\n\nDemo.prototype.randomPosition = () => {\n    let x = Math.floor(Math.random() * 800)\n    let y = Math.floor(Math.random() * 800)\n    let randPos = [x, y]\n    return randPos\n}\n\nDemo.prototype.randomFromInterval = (min, max) => { \n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nDemo.prototype.waterPositionRandom = function() {\n    let x = this.randomFromInterval(50, 750)\n    let y = this.randomFromInterval(50, 550)\n    let randPos = [x, y]\n    return randPos\n} \n\nDemo.prototype.addWindParticles = function() {\n    let i = 0;\n    while(i < this.NUM_WIND_PARTICLES) {\n        let windParticle = new _wind_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: this.waterPositionRandom(), demo: this })\n        this.windParticles.push(windParticle)\n        i += 1\n    }\n}\n\nDemo.prototype.addWaterParticles = function () {\n    let i = 0;\n    while (i < this.NUM_WATER_PARTICLES) {\n        let waterParticle = new _water_particle__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ pos: this.waterPositionRandom(), demo: this })\n        this.waterParticles.push(waterParticle)\n        i += 1\n    }\n\n}\n\nDemo.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, 800, 600)\n\n    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {\n        return finalMovedWindParticle.draw(ctx)\n    })\n}\nDemo.prototype.drawWater = function(ctx){\n    ctx.clearRect(0, 0, 800, 600)\n    let all;\n        all = this.waterParticles.concat(this.windParticles)\n\n    this.landTop.drawTop(ctx)\n    // for(let i = 0; i < all.length - 1; i += 1) {\n    //     let particle1 = all[i];\n    //     for(let j = i + 1; j < all.length; j += 1) {\n    //         let particle2 = all[j]\n    //         if (particle1.pos[0] - particle2.pos[0] < 50) {\n    //             console.log(\"condition1\")\n    //             particle1.pos[0] + 50\n    //         }\n    //         if (particle1.pos[1] - particle2.pos[1] < 50) {\n    //             console.log(\"condition2\")\n    //             particle1.pos[1] + 50\n    //         }\n    //     }\n    // }\n    all.forEach( particle => {\n        return particle.draw(ctx);\n    })\n}\n\nDemo.prototype.moveObjects = function() {\n    this.windParticles.forEach(windParticle => {\n        return windParticle.move()\n    })\n}\n\nDemo.prototype.moveObjectsWater = function() {\n    this.waterParticles.forEach(waterParticle => {\n        return waterParticle.move()\n    })\n}\n\nDemo.prototype.mod = function (a, b) {\n    return ((a % b) + b) % b;\n}\n\nDemo.prototype.wrap = function (pos) {\n    let x = this.mod(pos[0], this.DIM_X)\n    let y = this.mod(pos[1], this.DIM_Y)\n\n    return [x, y]\n}\n\nDemo.prototype.moveObjectsAgain = function(mouseX, mouseY) {\n    let pos = []\n    // console.log(`before: ${this.windParticles[0]}`)\n    this.windParticles.forEach( windParticle => {\n        pos.push(windParticle.pos)\n    })\n    let vel = []\n    this.windParticles.forEach(windParticle => {\n        vel.push(windParticle.vel)\n    })\n    // console.log(`before: ${this.windParticles}`)\n    this.windParticles = [];\n    // console.log(`after: ${this.windParticles}`)\n    // let newWindParticles = []\n    \n    let i = 0;\n    // while (i < this.NUM_WIND_PARTICLES) {\n    //     this.windParticles[i].pos = pos[i]\n    //     this.windParticles[i].mouseX = mouseX\n    //     this.windParticles[i].mouseY = mouseY\n    //     // console.log(this.windParticles[i])\n    //     // this.windParticles[i].vel = Util.setVec(3, mouseX, mouseY)\n    //     i += 1\n    // }\n    while (i < this.NUM_WIND_PARTICLES) {\n        let windParticle = new _wind_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: pos[i], demo: this, vel: vel[i], mouseX: mouseX, mouseY: mouseY })\n        this.windParticles.push(windParticle)\n        i += 1\n    }\n    // console.log(this.windParticles)\n    // console.log(`after: ${this.windParticles[0]}`)\n    // console.log(`after after after: ${this.windParticles}`)\n    this.windParticles.forEach( windParticle => {\n        // console.log(windParticle)\n        windParticle.move()\n    })\n}\n\n// Demo.prototype.moveObjectsAgain = function(mouseX, mouseY) {\n//     if (this.movedWindParticles.length === 0) {\n//         console.log(this.movedWindParticles)\n//         this.windParticles.forEach(windParticle => {\n//             this.movedWindParticles.push(new WindParticle({\n//                 pos: windParticle.pos,\n//                 demo: this,\n//                 mouseX: mouseX,\n//                 mouseY: mouseY\n//             }))\n//         })\n//         this.movedWindParticles.forEach(movedWindParticle => {\n//             movedWindParticle.move()\n//         })\n//     } else {\n//         console.log(`movedWindParticles are ${this.movedWindParticles}`)\n//         console.log(` before finalMovedWindParticles are ${ this.finalMovedWindParticles }`)\n//         this.finalMovedWindParticles = [];\n//         console.log(`after finalMovedWindparticles are ${ this.finalMovedWindParticles }`)\n//         for (let i = 0; i < this.movedWindParticles.length; i += 1) {\n//             let movedWindParticle = this.movedWindParticles[i];\n//             this.finalMovedWindParticles.push(new WindParticle({\n//                 pos: movedWindParticle.pos,\n//                 demo: this,\n//                 mouseX: mouseX,\n//                 mouseY: mouseY\n//             }))\n//         }\n//         this.movedWindParticles = this.finalMovedWindParticles\n//         this.finalMovedWindParticles.forEach(finalMovedWindParticle => {\n//             finalMovedWindParticle.move()\n//         })\n//         // this.movedWindParticles.forEach( movedWindParticle => {\n//         //     movedWindParticle.move()\n//         // })\n//     }\n\n    // console.log(this.windParticles)\n    // this.windParticles.forEach( windParticle => {\n    //     windParticle.move()\n    // })\n// }\n\nDemo.prototype.checkCollisionsWater = function(checkWind = false) {\n    let all;\n    // console.log(checkWind)\n    if (!checkWind) {\n        //checking for the collision of landTop against landRight and landLeft\n        // all = this.waterParticles.concat(this.landTop)\n        all = this.waterParticles\n    // } else if (this.finalMovedWindParticles.length === 0) {\n    //     // all = this.waterParticles.concat(this.finalMovedWindParticles, this.landTop)\n    //     all = this.waterParticles.concat(this.movedWindParticles)\n    } else {\n        all = this.waterParticles.concat(this.windParticles)\n        // console.log(all)\n    }\n    all.forEach( (particle1, idx) => {\n        // console.log(`before collision check`)\n        particle1.collideMove()\n        for(let i = idx + 1; i < all.length; i += 1) {\n            let particle2 = all[i]\n            // console.log(`is particle2: ${particle2}`)\n            // if ( (particle1 instanceof WindParticle) || \n            //     (particle1 instanceof WaterParticle) && \n            //     particle1.isCollidedWith(particle2)) {\n            //         particle1.collideLandTop()\n            //     // particle2.collideMove()\n            // }\n            // particle1.collideMove(particle2)\n            console.log(`during collisionCheck : ${particle1.vel}`)\n            \n            if (particle1.isCollidedWith(particle2)) {\n                // if(particle1.delete) {\n                //     this.remove(particle1)\n                // }\n                particle1.collideMoveObj(particle2)\n                // particle2.collideMoveObj(particle1)\n                // if (particle1 instanceof WaterParticle && particle2 instanceof LandTop)\n                // alert(`collision: particle1 = ${particle1.vel}, particle2 = ${particle2.vel}`)\n            }\n\n            // if (particle1 instanceof WaterParticle && particle2 instanceof WindParticle && particle1.isCollidedWith(particle2)) {\n            //         particle1.collideMoveObjWind(particle2)\n            // } else if (particle1 instanceof WaterParticle && particle2 instanceof WaterParticle && particle1.isCollidedWith(particle2)){\n            //     particle1.collideMoveObj(particle2)\n            // }\n        }\n    })\n}\n\n// Demo.prototype.remove = function (waterParticle) {\n//     const particleIdx = this.waterParticles.findIndex(particle => {\n//         particle.pos.toString() === waterParticle.pos.toString()\n//     });\n//     // console.log('astIDX', astIDX)\n//     this.waterParticles.splice(particleIdx, 1);\n// }\n\nDemo.prototype.stepWater = function(checkWind, mouseX, mouseY, moveAgain=false) {\n    if (moveAgain) {\n        this.moveObjectsAgain(mouseX, mouseY)\n    }\n    this.moveObjectsWater()\n    this.checkCollisionsWater(checkWind)\n    // this.drawWater(ctx)\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./src/demo.js?");

/***/ }),

/***/ "./src/demo_view.js":
/*!**************************!*\
  !*** ./src/demo_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n\n// import Land from './land'\n\nclass DemoView {\n    constructor(ctx) {\n        this.Demo = new _demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.ctx = ctx\n        this.interval = \"testtest\"\n        // this.Land = new Land(this.ctx)\n        this.intervalWater = \"testwater\"\n    }\n}\nDemoView.prototype.start = function(mouseX, mouseY){\n    // this.Demo.addWaterParticles()\n    // this.Demo.addWindParticles()\n    this.interval = setInterval(() => { \n        // console.log(\"moving every 20ms\")\n        // this.Demo.moveObjects();\n        this.Demo.stepWater(false, mouseX, mouseY)\n        // this.Demo.moveObjectsWater()\n        // this.Demo.draw(this.ctx)\n        this.Demo.drawWater(this.ctx)\n    }, 20);\n\n    // this.intervalWater = setInterval(() => {\n    //     this.Demo.moveObjectsWater()\n    //     this.Demo.drawWater(this.ctx)\n    // }, 20)\n}\n\nDemoView.prototype.clear = function() {\n    clearInterval(this.interval)\n}\n\nDemoView.prototype.moveAgain = function(mouseX, mouseY) {\n    this.interval = setInterval(() => {\n        // this.Demo.moveObjectsAgain(mouseX, mouseY);\n        this.Demo.stepWater(true, mouseX, mouseY, true)\n        // this.Demo.draw(this.ctx)\n        this.Demo.drawWater(this.ctx)\n    }, 20)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DemoView);\n\n//# sourceURL=webpack:///./src/demo_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _wind_particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wind_particle */ \"./src/wind_particle.js\");\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo */ \"./src/demo.js\");\n/* harmony import */ var _demo_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo_view */ \"./src/demo_view.js\");\n/* harmony import */ var _land_land_top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./land/land_top */ \"./src/land/land_top.js\");\n/* harmony import */ var _land_land_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./land/land_right */ \"./src/land/land_right.js\");\n/* harmony import */ var _land_land_right__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_land_land_right__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _land_land_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./land/land_left */ \"./src/land/land_left.js\");\n/* harmony import */ var _land_land_left__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_land_land_left__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n// const MovingObject = require(\"./moving_object.js\").default;\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\nwindow.WindParticle = _wind_particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\nwindow.Demo = _demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\")\n    \n    let canvasPos = getPosition(canvas);\n    let mouseX = 0;\n    let mouseY = 0;\n\n    // new Land(ctx)\n    // new Land(ctx)\n    // new Land(ctx)\n    \n    const Demoview = new _demo_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx)\n    Demoview.start(mouseX, mouseY)\n\n    canvas.addEventListener(\"mousedown\", setMousePosition, false)\n\n    function setMousePosition(e) {\n        mouseX = e.clientX - canvasPos.x;\n        mouseY = e.clientY - canvasPos.y;\n\n        Demoview.clear()\n        Demoview.moveAgain(mouseX, mouseY)\n    }\n\n    function getPosition(el) {\n        let xPosition = 0;\n        let yPosition = 0;\n\n        while (el) {\n            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);\n            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);\n            el = el.offsetParent\n        }\n\n        return {\n            x: xPosition,\n            y: yPosition\n        }\n    }\n\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/land/land_left.js":
/*!*******************************!*\
  !*** ./src/land/land_left.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// class LandRight {\n//     constructor() {\n//         this.pos = [300, 500];\n//         this.radius = 5;\n//     }\n// }\n\n// LandRight.prototype.drawRight = function (ctx) {\n//     // ctx.clearRect(300, 400, 500, 600)\n//     ctx.beginPath();\n//     ctx.moveTo(300, 400);\n//     ctx.lineTo(300, 600);\n//     ctx.stroke()\n// }\n\n// export default LandRight\n\n//# sourceURL=webpack:///./src/land/land_left.js?");

/***/ }),

/***/ "./src/land/land_right.js":
/*!********************************!*\
  !*** ./src/land/land_right.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// class LandLeft {\n//     constructor() {\n//         this.pos = [600, 500];\n//         this.radius = 5;\n//     }\n// }\n\n// LandLeft.prototype.drawLeft = function (ctx) {\n//     // ctx.clearRect(300, 400, 500, 600)\n//     ctx.beginPath();\n//     ctx.moveTo(500, 400);\n//     ctx.lineTo(500, 600);\n\n//     // ctx.moveTo(300, 400);\n//     // ctx.lineTo(300, 600);\n//     ctx.stroke()\n// }\n\n// export default LandLeft\n\n//# sourceURL=webpack:///./src/land/land_right.js?");

/***/ }),

/***/ "./src/land/land_top.js":
/*!******************************!*\
  !*** ./src/land/land_top.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass LandTop {\n    constructor() {\n        this.pos = [350, 450];\n        this.radius = 50;\n        this.vel = [0, 0];\n        this.impulse = 0;\n        this.mass = 50;\n        // this.ctx = ctx\n        // ctx.clearRect(300, 400, 600, 600)\n        // ctx.beginPath();\n        // ctx.moveTo(300, 400);\n        // ctx.lineTo(600, 400);\n        // ctx.moveTo(600, 400);\n        // ctx.lineTo(600, 600);\n        // ctx.moveTo(300, 400);\n        // ctx.lineTo(300, 600);\n        // ctx.stroke()\n    }\n    \n    // 300-600 width, 400-600 height\n}\n\nLandTop.prototype.drawTop = function(ctx) {\n    // ctx.clearRect(300, 400, 300, 500)\n    // ctx.clearRect(300, 500, 400, 600)\n    ctx.beginPath();\n    ctx.moveTo(300, 400);\n    ctx.lineTo(400, 400);\n    ctx.moveTo(400, 400);\n    ctx.lineTo(400, 500);\n    ctx.moveTo(300, 400);\n    ctx.lineTo(300, 500);\n    ctx.moveTo(300, 500)\n    ctx.lineTo(400, 500)\n\n    // ctx.moveTo(300, 400);\n    // ctx.lineTo(300, 600);\n    ctx.stroke()\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandTop);\n\n//# sourceURL=webpack:///./src/land/land_top.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction MovingObject(attrs) {\n    this.pos = attrs.pos;\n    // this.vel = attrs.vel;\n    this.demo = attrs.demo\n    // this.radius = attrs.radius;\n    // this.color = attrs.color;\n    // this.name = attrs.name\n    // console.log(attrs.vel)\n    // console.log(attrs)\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    // console.log(\"canvas works\")\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0], \n        this.pos[1], \n        this.radius, \n        0, \n        2 * Math.PI);\n    ctx.fillStyle = this.color\n    ctx.fill()\n    ctx.strokeStyle = this.strokeColor\n    ctx.stroke();\n}\n\nMovingObject.prototype.move = function() {\n    let x = this.pos[0] + this.vel[0]\n    let y = this.pos[1] + this.vel[1]\n\n    // this.pos = [x, y]\n    this.pos = this.demo.wrap([x, y])\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    if (_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {\n        return true;\n    }\n    return false;\n}\n// particle2's velocity is [0. 0], so you always hit the first case \n// cannot just take into account one particle's velocity, have to take into\n// account the other particle's velocity\n\n// + or - rebound velocity from x or y coordinates\n\nMovingObject.prototype.collideMove = function() {\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let r1 = this.radius;\n    if ( y1 + this.vel[1] < r1 || y1 + this.vel[1] > 600 - r1) {\n        // console.log('condition 1')\n        // console.log(`before, ${this.vel}`)\n        \n        this.vel[1] = -this.vel[1]\n        \n        // console.log(this.vel)\n        // console.log(`after, ${this.vel}`)\n        // the vector does change. it looks like that change isn't being registered\n        // or drawn out\n    } \n\n    if (x1 + this.vel[0] < r1 || x1 + this.vel[0] > 800 - r1) {\n        // console.log('condition 2')\n        this.vel[0] = - this.vel[0]\n    }\n\n}\n\n\nMovingObject.prototype.collideMoveObj = function(particle2) {\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let x2 = particle2.pos[0];\n    let y2 = particle2.pos[1];\n    let r1 = this.radius;\n    let r2 = particle2.radius;\n\n\n    if ((x1 + r1 + this.vel[0] + 5000 > x2 - r2) && (x1 - r1 - this.vel[0] - 5000 < x2 + r2)) {\n     \n        this.vel[0] = -this.vel[0];\n        this.vel[1] = - this.vel[1]\n        particle2.vel[0] = - particle2.vel[0]\n        particle2.vel[1] = - particle2.vel[1]\n    }\n}\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n    dist(pos1, pos2) {\n        let x1, y1;\n        [x1, y1] = pos1\n\n        let x2, y2;\n        [x2, y2] = pos2\n\n        let left = Math.pow(x1 - x2, 2)\n        let right = Math.pow(y1 - y2, 2)\n\n        return Math.sqrt(left + right)\n    },\n\n    norm(pos) {\n        return dist([0, 0], pos);\n    },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n    setVec(length, mouseX=undefined, mouseY=undefined) {\n    // const deg = 2 * Math.PI * Math.random() ;\n    const deg = 2 * Math.PI * ((mouseX + mouseY) / 1600) ;\n    return Util.scale([Math.sin(-deg), Math.cos(-deg)], length);\n    },\n\n    setVecWater(length) {\n    // const deg = 2 * Math.PI * .01;\n        const deg = 2 * Math.PI * .2;\n        return Util.scale([Math.sin(-deg), Math.cos(deg)], length);\n    },\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/water_particle.js":
/*!*******************************!*\
  !*** ./src/water_particle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst waterAttrs = {\n    name: \"water\",\n    color: \"#4d79ff\",\n    radius: 30,\n    strokeColor: \"#ffe6e6\",\n}\n\nclass WaterParticle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(args) {\n        super(args)\n        args = args || {};\n        this.name = waterAttrs.name;\n        this.color = waterAttrs.color;\n        this.radius = waterAttrs.radius;\n        this.pos = args.pos;\n        // this.vel = Util.setVec(5);\n        this.vel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setVecWater(7);\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaterParticle);\n\n//# sourceURL=webpack:///./src/water_particle.js?");

/***/ }),

/***/ "./src/wind_particle.js":
/*!******************************!*\
  !*** ./src/wind_particle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nconst windAttrs = {\n    name: \"wind\",\n    color: \"#ffe6e6\",\n    radius: 30,\n}\n\nclass WindParticle extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(args) {\n        super(args)\n        this.name = windAttrs.name;\n        this.color = windAttrs.color;\n        this.radius = windAttrs.radius;\n        this.pos = args.pos;\n        // this.vel =  args.vel || Util.setVec(3, args.mouseX, args.mouseY)\n        this.vel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setVec(3, args.mouseX, args.mouseY) || args.vel;\n\n        // console.log(args)\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindParticle);\n\n//# sourceURL=webpack:///./src/wind_particle.js?");

/***/ })

/******/ });