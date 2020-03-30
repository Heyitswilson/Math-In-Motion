class LandTop {
    constructor() {
        this.pos = [350, 450];
        this.radius = 50;
        this.vel = [0, 0];
        this.impulse = 0;
        this.mass = 50;
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

LandTop.prototype.drawTop = function(ctx) {
    // ctx.clearRect(300, 400, 300, 500)
    // ctx.clearRect(300, 500, 400, 600)
    ctx.beginPath();
    ctx.moveTo(300, 400);
    ctx.lineTo(400, 400);
    ctx.moveTo(400, 400);
    ctx.lineTo(400, 500);
    ctx.moveTo(300, 400);
    ctx.lineTo(300, 500);
    ctx.moveTo(300, 500)
    ctx.lineTo(400, 500)

    // ctx.moveTo(300, 400);
    // ctx.lineTo(300, 600);
    ctx.stroke()
}

export default LandTop