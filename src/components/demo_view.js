import Graph from '../util/graph';

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        this.Graph = new Graph();
    }
}

// DemoView.prototype.butterfly = function (w, h, userX, userY) {
//     let t = 0
//     function r(t) {
//         return 100 + Math.cos(t / 300) * 700;
//     };
//     function g(t) {
//         return Math.sin(t / 400) * 500;
//     };
//     function b(t) {
//         return 200 + Math.sin(t / 60) * 55;
//     };

    
//     setInterval(() => {
//         this.ctx.fillStyle = `rgb(
//             ${r(t)},
//             ${g(t)},
//             ${b(t)})`;
            
//             t += 1
//             if (t < 250) {
//                 this.Graph.butterfly(this.ctx, w, h, t / (12 * Math.PI), userX, userY)
//             }
//         }, 20);
//         // clearInterval(interval);
        
//     // butterflyInterval(r(t), g(t), b(t), w, h, userX, userY)
// }

// DemoView.prototype.coolButterfly = function (w, h, userX, userY) {
//     let t = 0
//     function r(t) {
//         return 100 + Math.cos(t / 300) * 700;
//     };
//     function g(t) {
//         return Math.sin(t / 400) * 500;
//     };
//     function b(t) {
//         return 200 + Math.sin(t / 60) * 55;
//     };


//     setInterval(() => {

//         this.ctx.strokeStyle = `rgb(
//         ${r(t)},
//         ${g(t)},
//         ${b(t)})`;

//         t += 1
//         if (t < 199) {
//             this.Graph.coolButterfly(this.ctx, w, h, t / (12 * Math.PI), userX, userY)
//         }
//     }, 20);
// }

// DemoView.prototype.sin = function (w, h, userX, userY) {
//     let t = 0
//     function r(t) {
//         return 100 + Math.cos(t / 300) * 700;
//     };
//     function g(t) {
//         return Math.sin(t / 400) * 500;
//     };
//     function b(t) {
//         return 200 + Math.sin(t / 60) * 55;
//     };

//     setInterval(() => {

//         this.ctx.strokeStyle = `rgb(
//         ${r(t)},
//         ${g(t)},
//         ${b(t)}`;

//         t += 1
//         this.Graph.sin(this.ctx, w, h, t, userX, userY)
//     }, 20);
// }

DemoView.prototype.doubleSin = function (w, h, userX, userY) {
    let t = 0
    function r(t) {
        return 100 + Math.tan(t / 300) * 200;
    };
    function g(t) {
        return Math.cos(t / 400) * 500;
    };
    function b(t) {
        return 200 + Math.tan(t / 900) * 55;
    };

    setInterval(() => {

        this.ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;

        t += 1
        if (t < 130) {
            this.Graph.doubleSin(this.ctx, w, h, t, userX, userY)
        }
    }, 20);
}

// DemoView.prototype.ring = function (w, h, userX, userY) {
//     let t = 0
//     function r(t) {
//         return 150 + Math.sin(t / 700) * 200;
//     };
//     function g(t) {
//         return Math.cos(t / 400) * 500;
//     };
//     function b(t) {
//         return 200 + Math.tan(t / 900) * 55;
//     };

//     setInterval(() => {

//         this.ctx.strokeStyle = `rgb(
//         ${r(t)},
//         ${g(t)},
//         ${b(t)}`;

//         t += 0.5
//         if (t < 150) {
//             this.Graph.ring(this.ctx, w, h, t / (80 * Math.PI), userX, userY)
//         }
//     }, 20);
// }

// DemoView.prototype.donut = function (w, h, userX, userY) {
//     let t = 0

//     setInterval(() => {

//         t += 1
//         if (t < 460) {
//             this.Graph.donut(this.ctx, w, h, t / ( 50 * Math.PI), userX, userY)
//         }
//     }, 20);
// }

// DemoView.prototype.twist = function (w, h, none1, none2, userT, userFrames) {
//   let t = 0;
//   function r(t) {
//     return 450 + Math.cos(t / 100) * 500;
//   }
//   function g(t) {
//     return 300 + Math.cos(t / 400) * 500;
//   }
//   function b(t) {
//     return 500 + Math.sin(t / 200) * 255;
//   }

//   setInterval(() => {
//     this.ctx.strokeStyle = `rgb(
//         ${r(t)},
//         ${g(t)},
//         ${b(t)}`;

//     t += 2;
//     if (t < userFrames) {
//       this.Graph.twist(this.ctx, w, h, t / (userT * Math.PI));
//     }
//   }, 20);
// };


export default DemoView