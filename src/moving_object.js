function MovingObject(attrs) {
    this.pos = attrs.pos;
    this.vel = attrs.vel;
    this.radius = attrs.radius;
    this.color = attrs.color
}

MovingObject.prototype.draw = function(ctx) {
    // console.log("canvas works")
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0], 
        this.pos[1], 
        this.radius, 
        0, 
        2 * Math.PI);
    ctx.stroke();
}

MovingObject.prototype.move = function(ctx) {
    let x = this.pos[0] + this.vel
    let y = this.pos[1] + this.vel

    let newPos = [x, y]
}

export default MovingObject;