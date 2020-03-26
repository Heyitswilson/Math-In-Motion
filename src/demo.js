import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import WaterParticle from './water_particle'

class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 600
        this.NUM_WIND_PARTICLES = 10
        // console.log('hitting demo')
        this.windParticles = []
        this.addWindParticles();
        this.movedWindParticles = [];
        this.finalMovedWindParticles = [];

        this.NUM_WATER_PARTICLES = 200;
        this.waterParticles = [];
        this.addWaterParticles();
    }
}

Demo.prototype.randomPosition = () => {
    let x = Math.floor(Math.random() * 800)
    let y = Math.floor(Math.random() * 400)
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
    console.log(this.waterParticles[0])
}

Demo.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, 800, 400)
    // ctx.clearRect(0, 0, 800, 400)

    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {
        return finalMovedWindParticle.draw(ctx)
    })
}

Demo.prototype.drawWater = function(ctx){
    ctx.clearRect(0, 401, 299, 600)
    ctx.clearRect(601, 401, 800, 600)

    this.waterParticles.forEach( waterParticle => {
        return waterParticle.draw(ctx);
    })
}

Demo.prototype.moveObjects = function() {
    this.windParticles.forEach(windParticle => {
        return windParticle.move()
    })
}

Demo.prototype.mod = function (a, b) {
    return ((a % b) + b) % b;
}

Demo.prototype.wrap = function (pos) {
    let x = this.mod(pos[0], this.DIM_X)
    let y = this.mod(pos[1], this.DIM_Y-205)

    return [x, y]
}

Demo.prototype.moveObjectsAgain = function(mouseX, mouseY) {
    if (this.movedWindParticles.length === 0) {
        // console.log(this.windParticles)
        this.windParticles.forEach(windParticle => {
            this.movedWindParticles.push(new WindParticle({
                pos: windParticle.pos,
                demo: this,
                mouseX: mouseX,
                mouseY: mouseY
            }))
            // console.log(this.movedWindParticles)
        })
        // for(let i = 0; i < this.windParticles.length; i += 1) {
        //     let windParticle = this.windParticles[i];
        //     this.movedWindParticles.push(new WindParticle({
        //         pos: windParticle.pos, 
        //         demo: this,
        //         mouseX: mouseX,
        //         mouseY: mouseY
        //     }))
        // }
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

    // console.log(` ALL WIND PARTICLES${this.windParticles}`)
    // console.log(`ALL MOVED WIND PARTICLES${this.movedWindParticles}`)
    // console.log(`ALL FINAL MOVED WIND PARTICLES${this.finalMovedWindParticles}`)
}

export default Demo