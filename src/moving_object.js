import Util from './util'

function MovingObject(attrs) {
    this.pos = attrs.pos;
    this.vel = attrs.vel;
    this.radius = attrs.radius;
    this.color = attrs.color;
    this.demo = attrs.demo;
    this.impulse = attrs.impulse;
    this.mass = attrs.mass;
    this.velChange = attrs.velChange;
    this.name = attrs.name
    // this.delete = false
    console.log(attrs)
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

    // this.pos = [x, y]
    this.pos = this.demo.wrap([x, y])
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    if (Util.dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {
        return true;
    }
    return false;
}
// particle2's velocity is [0. 0], so you always hit the first case 
// cannot just take into account one particle's velocity, have to take into
// account the other particle's velocity

// + or - rebound velocity from x or y coordinates

MovingObject.prototype.collideMove = function() {
    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let r1 = this.radius;
    
    if ( y1 + this.vel[1] < r1 || y1 + this.vel[1] > 600 - r1) {
        // console.log('condition 1')
        // console.log(`before, ${this.vel}`)
        this.vel[1] = -this.vel[1]
        
        // console.log(this.vel)
        // console.log(`after, ${this.vel}`)
        // the vector does change. it looks like that change isn't being registered
        // or drawn out
    } 

    if (x1 + this.vel[0] < r1 || x1 + this.vel[0] > 800 - r1) {
        // console.log('condition 2')
        this.vel[0] = - this.vel[0]
    }

}


MovingObject.prototype.collideMoveObj = function(particle2) {
    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let x2 = particle2.pos[0];
    let y2 = particle2.pos[1];
    let r1 = this.radius;
    let r2 = particle2.radius;


    if ((x1 + r1 + this.vel[0] + 5000 > x2 - r2) && (x1 - r1 - this.vel[0] - 5000 < x2 + r2)) {
     
        this.vel[0] = -this.vel[0];
        this.vel[1] = - this.vel[1]
        particle2.vel[0] = - particle2.vel[0]
        particle2.vel[1] = - particle2.vel[1]
    }
}








export default MovingObject;