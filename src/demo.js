import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import WaterParticle from './water_particle'
import Land from './land'

class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 600
        this.NUM_WIND_PARTICLES = 1
        // console.log('hitting demo')
        this.windParticles = []
        this.addWindParticles();
        this.movedWindParticles = [];
        this.finalMovedWindParticles = [];

        // console.log(this.windParticles[0].pos)

        this.NUM_WATER_PARTICLES = 1
        this.waterParticles = [];
        this.addWaterParticles();

        this.land = new Land()
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
    let x = this.randomFromInterval(0, 300)
    let y = this.randomFromInterval(400, 600)
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
        let waterParticle = new WaterParticle({ pos: this.waterPositionRandom(), demo: this })
        this.waterParticles.push(waterParticle)
        i += 1
    }

}

Demo.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, 800, 400)

    this.land.draw(ctx)
    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {
        return finalMovedWindParticle.draw(ctx)
    })
}
// need to DRAW LAND so you can clearRect
Demo.prototype.drawWater = function(ctx){
    ctx.clearRect(0, 400, 300, 600)
    ctx.clearRect(500, 400, 800, 600)

    this.land.draw(ctx)
    this.waterParticles.forEach( waterParticle => {
        return waterParticle.draw(ctx);
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
            all = this.waterParticles.concat(this.land)
        } else {
            all = this.waterParticles.concat(this.finalMovedWindParticles, this.land)
        }

        console.log(`checking wind: ${checkWind}`)
        all.forEach( (particle1, idx) => {
            for(let i = idx + 1; i < all.length; i += 1) {
                let particle2 = all[i]

                if (particle1.isCollidedWith(particle2)) {
                    alert(`collision between ${particle1.pos} and ${particle2.pos}, radii
                    are ${particle1.radius} and ${particle2.radius}`)
                }
            }
        })
    }

    Demo.prototype.stepWater = function(checkWind) {
        this.moveObjectsWater()
        this.checkCollisionsWater(checkWind)
        // this.drawWater(ctx)
    }


export default Demo