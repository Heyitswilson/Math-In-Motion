import MovingObject from './moving_object'
import WindParticle from './wind_particle'

class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 800
        this.NUM_WIND_PARTICLES = 10
        console.log('hitting demo')
        this.windParticles = []
        this.addWindParticles()
    }
}

Demo.prototype.randomPosition = () => {
    let x = Math.floor(Math.random() * 800)
    let y = Math.floor(Math.random() * 800)
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

Demo.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, 800, 800)

    this.windParticles.forEach( windParticle => {
        return windParticle.draw(ctx)
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
    let y = this.mod(pos[1], this.DIM_Y)

    return [x, y]
}

export default Demo