import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import WaterParticle from './water_particle'
// import Land from './land'
import LandTop from './land/land_top'
// import LandRight from './land/land_right'
// import LandLeft from './land/land_left'


class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 600
        this.NUM_WIND_PARTICLES = 5    
        // console.log('hitting demo')
        this.windParticles = []
        this.addWindParticles();
        this.movedWindParticles = [];
        this.finalMovedWindParticles = [];

        // console.log(this.windParticles[0].pos)

        this.NUM_WATER_PARTICLES = 5
        this.waterParticles = [];
        this.addWaterParticles();

        this.landTop = new LandTop()
        // this.landLeft = new LandLeft()
        // this.landRight = new LandRight()
    }
}

Demo.prototype.randomPosition = () => {
    let x = Math.floor(Math.random() * 800)
    let y = Math.floor(Math.random() * 200)
    let randPos = [x, y]
    return randPos
}

Demo.prototype.randomFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Demo.prototype.waterPositionRandom = function() {
    let x = this.randomFromInterval(50, 300)
    let y = this.randomFromInterval(400, 550)
    let randPos = [x, y]
    return randPos
} 

Demo.prototype.addWindParticles = function() {
    let i = 0;
    while(i < this.NUM_WIND_PARTICLES) {
        let windParticle = new WindParticle({ pos: this.randomPosition(), demo: this })
        this.windParticles.push(windParticle)
        i += 1
    }
}

Demo.prototype.addWaterParticles = function () {
    let i = 0;
    while (i < this.NUM_WATER_PARTICLES) {
        let waterParticle = new WaterParticle({ pos: this.randomPosition(), demo: this })
        this.waterParticles.push(waterParticle)
        i += 1
    }

}

Demo.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, 800, 600)

    // this.landTop.drawTop(ctx)
    // this.landLeft.drawRight(ctx)
    // this.landRight.drawLeft(ctx)
    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {
        return finalMovedWindParticle.draw(ctx)
    })
}
// need to DRAW LAND so you can clearRect
Demo.prototype.drawWater = function(ctx){
    ctx.clearRect(0, 0, 800, 600)
    // ctx.clearRect(0, 400, 300, 600)
    // ctx.clearRect(400, 400, 800, 600)
    let all = this.waterParticles.concat(this.finalMovedWindParticles)
    this.landTop.drawTop(ctx)
    // this.landLeft.drawRight(ctx)
    // this.landRight.drawLeft(ctx)
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
    if (this.movedWindParticles.length === 0) {
        this.windParticles.forEach(windParticle => {
            this.movedWindParticles.push(new WindParticle({
                pos: windParticle.pos,
                demo: this,
                mouseX: mouseX,
                mouseY: mouseY
            }))
        })
    } else {
        this.finalMovedWindParticles = [];
        for (let i = 0; i < this.movedWindParticles.length; i += 1) {
            let movedWindParticle = this.movedWindParticles[i];
            this.finalMovedWindParticles.push(new WindParticle({
                pos: movedWindParticle.pos,
                demo: this,
                mouseX: mouseX,
                mouseY: mouseY
            }))
        }
        this.movedWindParticles = this.finalMovedWindParticles
    }
    
    this.finalMovedWindParticles.forEach(finalMovedWindParticle => {
        finalMovedWindParticle.move()
    })
}

Demo.prototype.checkCollisionsWater = function(checkWind = false) {
    let all;
    if (!checkWind) {
        //checking for the collision of landTop against landRight and landLeft
        // all = this.waterParticles.concat(this.landTop)
        all = this.waterParticles
    } else {
        // all = this.waterParticles.concat(this.finalMovedWindParticles, this.landTop)
        all = this.waterParticles.concat(this.finalMovedWindParticles)
    }

    all.forEach( (particle1, idx) => {
        for(let i = idx + 1; i < all.length; i += 1) {
            let particle2 = all[i]
            
            // console.log(`is particle2: ${particle2}`)
            // if ( (particle1 instanceof WindParticle) || 
            //     (particle1 instanceof WaterParticle) && 
            //     particle1.isCollidedWith(particle2)) {
            //         particle1.collideLandTop()
            //     // particle2.collideMove()
            // }
            // particle1.collideMove(particle2)
            
            particle1.collideMove()
            particle2.collideMove()
            
            if (particle1.isCollidedWith(particle2)) {
                particle1.collideMoveObj(particle2)
                // particle2.collideMoveObj(particle1)
                // if (particle1 instanceof WaterParticle && particle2 instanceof LandTop)
                // alert(`collision: particle1 = ${particle1.vel}, particle2 = ${particle2.vel}`)
            }
        }
    })
}

Demo.prototype.stepWater = function(checkWind, mouseX, mouseY, moveAgain) {
    if (moveAgain) {
        // this.moveObjects()
    } else {
        this.moveObjectsAgain(mouseX, mouseY)
    }
    this.moveObjectsWater()
    this.checkCollisionsWater(checkWind)
    // this.drawWater(ctx)
}


export default Demo