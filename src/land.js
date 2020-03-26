class Land {
    constructor() {
        this.pos = [400, 500];
        this.radius = 100;
        // this.ctx = ctx
        // ctx.clearRect(300, 400, 600, 600)
        // ctx.beginPath();
        // ctx.moveTo(300, 400);
        // ctx.lineTo(600, 400);
        // ctx.moveTo(600, 400);
        // ctx.lineTo(600, 600);
        // ctx.moveTo(300, 400);
        // ctx.lineTo(300, 600);
        // ctx.stroke()
    }
    
    // 300-600 width, 400-600 height
}

Land.prototype.draw = function(ctx) {
    ctx.clearRect(300, 400, 500, 600)
    ctx.beginPath();
    ctx.moveTo(300, 400);
    ctx.lineTo(500, 400);
    ctx.moveTo(500, 400);
    ctx.lineTo(500, 600);
    ctx.moveTo(300, 400);
    ctx.lineTo(300, 600);
    ctx.stroke()
}

export default Land