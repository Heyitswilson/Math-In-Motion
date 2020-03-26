class Land {
    constructor(ctx) {
        ctx.clearRect(300, 400, 600, 600)
        this.ctx = ctx
        ctx.beginPath();
        ctx.moveTo(300, 400);
        ctx.lineTo(600, 400);
        ctx.moveTo(600, 400);
        ctx.lineTo(600, 600);
        ctx.moveTo(300, 400);
        ctx.lineTo(300, 600);
        ctx.stroke()
    }
// 300-600 width, 400-600 height
}

export default Land