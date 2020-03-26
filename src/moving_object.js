import Util from './util'

function MovingObject(attrs) {
    this.pos = attrs.pos;
    this.vel = attrs.vel;
    this.radius = attrs.radius;
    this.color = attrs.color;
    this.demo = attrs.demo;
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
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.strokeStyle = this.strokeColor
    ctx.stroke();
}

MovingObject.prototype.move = function() {
    let x = this.pos[0] + this.vel[0]
    let y = this.pos[1] + this.vel[1]

    this.pos = this.demo.wrap([x, y])
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    if (Util.dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {
        return true;
    }
    return false;
}

export default MovingObject;