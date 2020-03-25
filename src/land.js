class Land {
    constructor(ctx) {
        this.ctx = ctx
        ctx.clearRect(0, 0, 600, 600)
        ctx.beginPath();
        ctx.moveTo(0, 600);
        ctx.lineTo(0, 800);
        ctx.stroke()
    }

}

export default Land