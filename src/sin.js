class Sin {
    constructor(ctx) {
        this.ctx = ctx
    }

}
Sin.prototype.draw = (ctx, w, h) => {
    // ctx.lineWidth = 200;
    
    let Y = function (x) {
        return (-h / 4) * Math.sin((4 * Math.PI * x / w)) + (h / 2);
    };
    // let y = function (t) {
    //     return (-h / 4) * Math.sin(t * (4 * Math.PI * x / 120)) + (h / 2);
    // };
    for (let x = 0; x < w; x += 1) {
        let y = Y(x);
        ctx.fillStyle = `#00ffff`;
        ctx.fillRect(x, y, 5, 10);
    }

    // let x = function(t) {
    //     return w * t / 120
    // }
    
}

export default Sin