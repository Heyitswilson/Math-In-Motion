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

    this.pos = [x, y]
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
        this.vel[1] = -this.vel[1]
    } 

    if (x1 + this.vel[0] < r1 || x1 + this.vel[0] > 800 - r1) {
        this.vel[0] = - this.vel[0]
    }

}

MovingObject.prototype.collideMoveObj = function(particle2) {
    // console.log(this);
    // console.log(particle2)
    // console.log(`particle1: ${this.vel} and particle2: ${particle2.vel}`)

    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let x2 = particle2.pos[0];
    let y2 = particle2.pos[1];
    let r1 = this.radius;
    let r2 = particle2.radius;
    console.log(this.name)
    console.log(particle2.name)
    // if ((x1 ) < (x2 + particle2.radius) || (x2 - particle2.radius)) {
    //     this.vel[0] = -this.vel[0];
    //     particle2.vel[0] = particle2.vel[0]
    // }

    // if ((x1 + r1) > (x2 - r2) || ((x1 - r1) < x2 + r2)) {
    //     this.vel[0] = -this.vel[0];
    //     particle2.vel[0] = particle2.vel[0]
    // }

    // if ((y1 + r1) > (y2 - r2) || ((y1 - r1) < y2 + r2)) {
    //     this.vel[1] = -this.vel[1];
    //     particle2.vel[1] = particle2.vel[1]
    // }

    if ((x1 + r1 + this.vel[0] - 10 > x2 - r2) && (x1 - r1 - this.vel[0] + 10 < x2 + r2)) {
        this.vel[0] = -this.vel[0];
        this.vel[1] = - this.vel[1]
        particle2.vel[0] = - particle2.vel[0]
        particle2.vel[1] = - particle2.vel[1]
        //bouncing off of the island...
    }

    if ((y1 + r1 + this.vel[1] + 10 < y2 - r2) && (y1 - r2 - this.vel[1] - 10 < y2 + r2)) {
        this.vel[1] = -this.vel[1];
        particle2.vel[1] = - particle2.vel[1]
        //bouncing off of the island...
    }

    // if (x + this.vel[0] < this.radius || x + this.vel[0] > 800 - this.radius) {
    //     this.vel[0] = - this.vel[0]
    // }
}

// MovingObject.prototype.collideMove = function (particle2) {
//     let x1;
//     let y1;
//     let x2;
//     let y2;

//     if (particle2.vel[0] < 0 && particle2.vel[1] === 0) {
//         x1 = this.pos[0] - this.vel[0] - this.velChange
//         y1 = Util.collisionChange(this.pos[1], this.vel[1])
//         x2 = particle2.pos[0] + particle2.vel[0] + this.velChange
//         y2 = particle2.pos[1]
//     } else if (particle2.vel[0] > 0 && particle2.vel[1] === 0) {
//         x1 = this.pos[0] + this.vel[0] + this.velChange
//         y1 = Util.collisionChange(this.pos[1], this.vel[1])
//         x2 = particle2.pos[0] - particle2.vel[0] - this.velChange
//         y2 = particle2.pos[1]
//     } else if (particle2.vel[0] === 0 && particle2.vel[1] < 0) {
//         x1 = Util.collisionChange(this.pos[0], this.vel[0])
//         y1 = this.pos[1] - this.vel[1] - this.velChange
//         x2 = particle2.pos[0]
//         y2 = particle2.pos[1] + particle2.vel[1] + this.velChange
//     } else if (particle2.vel[0] === 0 && particle2.vel[1] > 0) {
//         x1 = Util.collisionChange(this.pos[0], this.vel[0])
//         y1 = this.pos[1] + this.vel[1] - this.velChange
//         x2 = particle2.pos[0]
//         y2 = particle2.pos[1] - particle2.vel[1] + this.velChange
//     } else if (particle2.vel[0] < 0 && particle2.vel[1] < 0) {
//         x1 = this.pos[0] - this.vel[0] - this.velChange
//         y1 = this.pos[1] - this.vel[1] - this.velChange
//         x2 = particle2.pos[0] + particle2.vel[0] + this.velChange
//         y2 = particle2.pos[1] + particle2.vel[1] + this.velChange
//     } else if (particle2.vel[0] < 0 && particle2.vel[1] > 0) {
//         x1 = this.pos[0] - this.vel[0] - this.velChange
//         y1 = this.pos[1] + this.vel[1] + this.velChange
//         x2 = particle2.pos[0] + particle2.vel[0] + this.velChange
//         y2 = particle2.pos[1] - particle2.vel[1] - this.velChange
//     } else if (particle2.vel[0] > 0 && particle2.vel[1] > 0) {
//         x1 = this.pos[0] + this.vel[0] + this.velChange
//         y1 = this.pos[1] + this.vel[1] + this.velChange
//         x2 = particle2.pos[0] - particle2.vel[0] - this.velChange 
//         y2 = particle2.pos[1] - particle2.vel[1] - this.velChange
//     } else if (particle2.vel[0] > 0 && particle2.vel[1] < 0) {
//         x1 = this.pos[0] + this.vel[0] + this.velChange
//         y1 = this.pos[1] - this.vel[1] - this.velChange
//         x2 = particle2.pos[0] - particle2.vel[0] - this.velChange
//         y2 = particle2.pos[1] + particle2.vel[1] + this.velChange
//     } else {
//         x1 = this.pos[0] - this.vel[0] - this.velChange
//         y1 = this.pos[1] - this.vel[1] - this.velChange
//         x2 = particle2.pos[0] + particle2.vel[0] + this.velChange
//         y2 = particle2.pos[1] + particle2.vel[1] + this.velChange
//     }


//     this.pos = this.demo.wrap([x1, y1])
//     particle2.pos = this.demo.wrap([x2, y2])
// }
// MovingObject.prototype.collideMove = function (particle2) {
//     console.log(particle2)
//     let x;
//     let y;
//     if (particle2.vel[0] < 0 && particle2.vel[1] === 0) {
//         x = this.pos[0] - particle2.vel[0]
//         y = this.pos[1]
//     } else if (particle2.vel[0] > 0 && particle2.vel[1] === 0) {
//         x = this.pos[0] + particle2.vel[0]
//         y = this.pos[1] 
//     } else if (particle2.vel[0] === 0 && particle2.vel[1] < 0) {
//         x = this.pos[0]
//         y = this.pos[1] - particle2.vel[1]
//     } else if (particle2.vel[0] === 0 && particle2.vel[1] > 0) {
//         x = this.pos[0]
//         y = this.pos[1] + particle2.vel[1]
//     } else if (particle2.vel[0] < 0 && particle2.vel[1] < 0) {
//         x = this.pos[0] - particle2.vel[0]
//         y = this.pos[1] - particle2.vel[1]
//     } else if (particle2.vel[0] < 0 && particle2.vel[1] > 0) {
//         x = this.pos[0] - particle2.vel[0]
//         y = this.pos[1] + particle2.vel[1]
//     } else if (particle2.vel[0] > 0 && particle2.vel[1] > 0) {
//         x = this.pos[0] + particle2.vel[0]
//         y = this.pos[1] + particle2.vel[1]
//     } else if (particle2.vel[0] > 0 && particle2.vel[1] < 0) {
//         x = this.pos[0] + particle2.vel[0]
//         y = this.pos[1] - particle2.vel[1]
//     } else {
//         x = this.pos[0] - particle2.vel[0]
//         y = this.pos[1] - particle2.vel[1]
//     }



//     this.pos = this.demo.wrap([x, y])
// }

// MovingObject.prototype.collideLandRight = function() {
//     let x = this.pos[0] - this.vel[0]
//     let y = this.pos[1] - this.vel[1]
//     console.log('collideLandRight')

//     this.pos = this.demo.wrap([x, y])
// }

// MovingObject.prototype.collideLandLeft = function() {
//     let x = this.pos[0] + this.vel[0]
//     let y = this.pos[1] + this.vel[1]
//     console.log('collideLandLeft')

//     this.pos = this.demo.wrap([x, y])
// }



export default MovingObject;