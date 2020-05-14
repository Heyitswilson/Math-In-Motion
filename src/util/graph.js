class Graph {
    constructor(ctx) {
        this.ctx = ctx
    }

}

// Graph.prototype.sin = (ctx, w, h, t, userX, userY) => {
//     ctx.strokeStyle = `#00ffff`;
//     ctx.lineWidth = 1;
//     let x = function (t) {
//         return w * t / userX
//     };

//     let y = function (t) {
//         return Math.sin(t * (4 * Math.PI) / userY) * (-h / 4) + (h / 2);
//     };

//     ctx.beginPath();
//     ctx.moveTo(x(t), y(t));
//     ctx.lineTo(x(t + 1), y(t + 1));
//     ctx.stroke();

// }

// Graph.prototype.doubleSin = (ctx, w, h, t, userX, userY) => {
//     ctx.lineWidth = 2;

//     let x = function (t) {
//         return Math.sin(t * ((10 * Math.PI) / userX)) * (-w / 4) + (w / 2);
//     };

//     let y = function (t) {
//         return Math.sin(t * (8 * Math.PI) / userY) * (-h / 4) + (h / 2);
//     };

//     ctx.beginPath();
//     ctx.moveTo(x(t), y(t));
//     ctx.lineTo(x(t + 1), y(t + 1));
//     ctx.stroke();

// }

// Graph.prototype.butterfly = (ctx, w, h, t,userX, userY) => {
//     ctx.lineWidth = 2;
//     let x = function (t) {
//         return (

//             (Math.sin(t) * (Math.pow(Math.E, Math[userX](t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-w / 10) + (w / 2)

//         )
//     };

//     let y = function (t) {
//         return (

//             (Math.cos(t) * (Math.pow(Math.E, Math[userY](t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-h / 10) + (h / 2)


//         )
//     };
//     ctx.fillRect(x(t + 1), y(t + 1), 15, 5)


// }

// Graph.prototype.coolButterfly = (ctx, w, h, t, userX, userY) => {
//     ctx.lineWidth = 2;

//     let x = function (t) {
//         return (
//             (Math.sin(t) * (Math.pow(Math.E, Math[userX](t)) + 2 * Math[userY](4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-w / 10) + (w / 2)
//         )
//     };

//     let y = function (t) {
//         return (
//             (Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) + 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-h / 10) + (h / 2)
//         )
//     };
    
//     ctx.beginPath();
//     ctx.moveTo(x(t), y(t));
//     ctx.lineTo(x(t + 1), y(t + 1));
//     ctx.stroke();
// }

// Graph.prototype.ring = (ctx, w, h, t, userX, userY) => {
//     ctx.lineWidth = 2;

//     let x = function (t) {
//         return (
//            (Math.cos(20 * t) + (Math[userX](13 * t) / 2) + (Math.sin(6 * t) / 3)) * (-w / 4) + (w / 2)
//         )
//     };

//     let y = function (t) {
//         return (
//             (Math.sin(20 * t) + (Math[userY](13 * t)/ 2) + (Math.cos(6 * t) / 3)) * (-h / 4) + (h / 2)
//         )
//     };

//     ctx.beginPath();
//     ctx.moveTo(x(t), y(t));
//     ctx.lineTo(x(t + 0.5), y(t + 0.5));
//     ctx.stroke();
// }

// Graph.prototype.donut = (ctx, w, h, t, userX, userY) => {
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = "rgb(255, 255, 255)";
    
//     let x = function (t) {
//         return (
//            (Math.cos(20 * t) + (Math[userX](13 * t) / 2) + (Math.sin(14 * t) / 3)) * (-w / 4) + (w / 2)
//         )
//     };

//     let y = function (t) {
//         return (
//             (Math.sin(20 * t) + (Math[userY](13 * t)/ 2) + (Math.cos(14 * t) / 3)) * (-h / 4) + (h / 2)
//         )
//     };

//     ctx.beginPath();
//     ctx.moveTo(x(t), y(t));
//     ctx.lineTo(x(t + 1), y(t + 1));
//     ctx.stroke();
// }

// Graph.prototype.twist = (ctx, w, h, t) => {
//     ctx.lineWidth = 2;

//     let x = function (t) {
//         return (t - (1.6 * Math.cos(24 * t))) * (-w / 30) + (w/1.1);
//     };

//     let y = function (t) {
//         return (t - (1.6 * Math.sin(25 * t))) * (-h / 30) + (h/1.1);
//     };

//     ctx.beginPath();
//     ctx.moveTo(x(t), y(t));
//     ctx.lineTo(x(t + 2), y(t + 2));
//     ctx.stroke();
// }

export default Graph