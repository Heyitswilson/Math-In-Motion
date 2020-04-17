import Util from './util'

function MovingObject(attrs) {
    this.pos = attrs.pos;
    this.demo = attrs.demo;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0], 
        this.pos[1], 
        this.radius, 
        0, 
        2 * Math.PI);
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
    ctx.fill()
    ctx.strokeStyle = this.strokeColor
    ctx.stroke();
}

MovingObject.prototype.move = function(otherObject) {
    let x = this.pos[0] + this.vel[0]
    let y = this.pos[1] + this.vel[1]
    this.pos = this.demo.wrap([x, y])
    // if (this.isCollidedWith(otherObject)) {
    //     this.pos = this.demo.wrap([x + 20, y + 20])
    // }
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    if (Util.dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {
        // COLOR INDEX CODE HERE
        let currentIdx = this.strokeColors.indexOf(this.strokeColor);
        let otherCurrentIdx = otherObject.strokeColors.indexOf(otherObject.strokeColor);
        let nextIdx = (currentIdx + 1) % 5;
        let otherNextIdx = (otherCurrentIdx + 1) % 5;
        this.strokeColor = this.strokeColors[nextIdx];
        otherObject.strokeColor = otherObject.strokeColors[otherNextIdx];

        this.collideMoveObj(otherObject)
        // return true;
    }
    // return false;
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
        console.log(this)
        this.vel[1] *= -1
    } else if (x1 + this.vel[0] < r1 || x1 + this.vel[0] > 800 - r1) {
        this.vel[0] *= -1
    } 
}


MovingObject.prototype.collideMoveObj = function(particle2) {
    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let x2 = particle2.pos[0];
    let y2 = particle2.pos[1];
    let r1 = this.radius;
    let r2 = particle2.radius;


    if (x1 + r1 + this.vel[0] > x2 - r2) {
        this.vel[0] *= -1
        this.vel[1] *= -1
        particle2.vel[0] *= -1
        particle2.vel[1] *= -1
    }

    // if (((x1 + this.vel[0]) > x2 - r2) || ((x1 - this.vel[0]) < x2 + r2)) {
     
    //     this.vel[0] *= -1
    //     this.vel[1] *= -1
    //     particle2.vel[0] *= -1
    //     particle2.vel[1] *= -1
    // }


    // if (((x1 + r1 + this.vel[0]) > x2 - r2) || 
    //     (x1 - r1 - this.vel[0]) < x2 + r2) {
    //         this.vel[0] *= -1
    //         particle2.vel[0] *= -1
    // } else if ((y1 + r1 + this.vel[1] > y2 - r2) ||
    //     (y1 - r1 - this.vel[1] < y2 + r2)) {
    //         this.vel[1] *= -1.02
    //         particle2.vel[1] *= -1
    // }

    // if (((x1 + r1 + this.vel[0]) > x2 - r2 - this.vel[0]) || 
    // ((x1 - r1 - this.vel[0]) < x2 + r2 + this.vel[0]) ||
    // ((y1 + r1 + this.vel[1] > y2 - r2 - this.vel[1]) || 
    // (y1 - r1 - this.vel[1] < y2 + r2 + this.vel[1]))) {
    //     this.vel[0] *= -1
    //     this.vel[1] *= -1
    //     particle2.vel[0] *= -1
    //     particle2.vel[1] *= -1
    // }







}








export default MovingObject;