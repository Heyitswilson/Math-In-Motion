import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import WaterParticle from './water_particle'
import Util from './util'


class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 600
        this.NUM_WIND_PARTICLES = 4
        this.windParticles = []
        this.addWindParticles();
        this.movedWindParticles = [];
        this.finalMovedWindParticles = [];



        this.NUM_WATER_PARTICLES = 10
        this.waterParticles = [];
        this.addWaterParticles();

        // this.landTop = new LandTop()
    }
}

Demo.prototype.randomPosition = () => {
    let x = Math.floor(Math.random() * 800)
    let y = Math.floor(Math.random() * 800)
    let randPos = [x, y]
    return randPos
}

Demo.prototype.randomFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Demo.prototype.waterPositionRandom = function(i) {
    // let x = this.randomFromInterval(50, 750)
    // let y = this.randomFromInterval(50, 550)
    // let randPos = [x, y]
    // return randPos
    let positions = [
        [60, 60], 
        [330, 60], 
        [240, 200], 
        [250, 400], 
        [500, 100], 
        [250, 500], 
        [90, 150], 
        [400, 380],
        [500, 500],
        [450, 230]
    ]

    return positions[i]
} 

Demo.prototype.addWindParticles = function() {
    let i = 0;
    while(i < this.NUM_WIND_PARTICLES) {
        let windParticle = new WindParticle({ pos: this.waterPositionRandom(i), demo: this })
        this.windParticles.push(windParticle)
        i += 1
    }
}

Demo.prototype.addWaterParticles = function () {
    let i = 0;
    while (i < this.NUM_WATER_PARTICLES) {
        let waterParticle = new WaterParticle({ pos: this.waterPositionRandom(i), demo: this })
        this.waterParticles.push(waterParticle)
        i += 1
    }

}

Demo.prototype.draw = function(ctx){
    // ctx.clearRect(0, 0, 800, 600)

    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {
        return finalMovedWindParticle.draw(ctx)
    })
}
Demo.prototype.drawWater = function(ctx){
    // ctx.clearRect(0, 0, 800, 600)
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let all;
        all = this.waterParticles.concat(this.windParticles)

    // this.landTop.drawTop(ctx)
    all.forEach( particle => {
        return particle.draw(ctx);
    })
}

Demo.prototype.moveObjects = function() {
    this.windParticles.forEach(windParticle => {
        return windParticle.move()
    })
}

Demo.prototype.moveObjectsWater = function() {
    this.waterParticles.forEach(waterParticle => {
        return waterParticle.move()
    })

    // for(let i = 0; i < this.waterParticles.length - 1; i += 1) {
    //     let waterParticle = this.waterParticles[i];
    //     for (let j = i + 1; j < this.waterParticles.length; j += 1) {
    //         let otherWaterParticle = this.waterParticles[j];
    //         waterParticle.move(otherWaterParticle)
    //     }
    // }
}

Demo.prototype.mod = function (a, b) {
    return ((a % b) + b) % b;
}

Demo.prototype.wrap = function (pos) {
    let x = this.mod(pos[0], this.DIM_X)
    let y = this.mod(pos[1], this.DIM_Y)

    return [x, y]
}

Demo.prototype.moveObjectsAgain = function(mouseX, mouseY) {
    let pos = []
    this.windParticles.forEach( windParticle => {
        pos.push(windParticle.pos)
    })
    let vel = []
    this.windParticles.forEach(windParticle => {
        vel.push(windParticle.vel)
    })
    this.windParticles = [];
    
    let i = 0;
    while (i < this.NUM_WIND_PARTICLES) {
        let windParticle = new WindParticle({ pos: pos[i], demo: this, vel: vel[i], mouseX: mouseX, mouseY: mouseY })
        this.windParticles.push(windParticle)
        i += 1
    }
    this.windParticles.forEach( windParticle => {
        windParticle.move()
    })
}

Demo.prototype.checkCollisionsWater = function(checkWind = false) {
    let all;
    if (!checkWind) {
        all = this.waterParticles
    } else {
        // all = this.waterParticles
        all = this.waterParticles
    }
    all.forEach( (particle1, idx) => {
        particle1.collideMove()
        for(let i = idx + 1; i < all.length; i += 1) {
            let particle2 = all[i]
            // console.log(`during collisionCheck : ${particle1.vel}`)
            particle1.isCollidedWith(particle2)
        }
    })
}

Demo.prototype.stepWater = function(checkWind, mouseX, mouseY, moveAgain=false) {
    if (moveAgain) {
        this.moveObjectsAgain(mouseX, mouseY)
    }
    // this.moveObjectsWater()
    this.checkCollisionsWater(checkWind)
    this.moveObjectsWater()
}


export default Demo