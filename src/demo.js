import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import WaterParticle from './water_particle'
import LandTop from './land/land_top'
import Util from './util'


class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 600
        this.NUM_WIND_PARTICLES = 2
        // console.log('hitting demo')
        this.windParticles = []
        this.addWindParticles();
        this.movedWindParticles = [];
        this.finalMovedWindParticles = [];



        this.NUM_WATER_PARTICLES = 5
        this.waterParticles = [];
        this.addWaterParticles();

        this.landTop = new LandTop()
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

Demo.prototype.waterPositionRandom = function() {
    let x = this.randomFromInterval(50, 750)
    let y = this.randomFromInterval(50, 550)
    let randPos = [x, y]
    return randPos
} 

Demo.prototype.addWindParticles = function() {
    let i = 0;
    while(i < this.NUM_WIND_PARTICLES) {
        let windParticle = new WindParticle({ pos: this.waterPositionRandom(), demo: this })
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
    ctx.clearRect(0, 0, 800, 600)

    this.finalMovedWindParticles.forEach( finalMovedWindParticle => {
        return finalMovedWindParticle.draw(ctx)
    })
}
Demo.prototype.drawWater = function(ctx){
    ctx.clearRect(0, 0, 800, 600)
    let all;
        all = this.waterParticles.concat(this.windParticles)

    this.landTop.drawTop(ctx)
    // for(let i = 0; i < all.length - 1; i += 1) {
    //     let particle1 = all[i];
    //     for(let j = i + 1; j < all.length; j += 1) {
    //         let particle2 = all[j]
    //         if (particle1.pos[0] - particle2.pos[0] < 50) {
    //             console.log("condition1")
    //             particle1.pos[0] + 50
    //         }
    //         if (particle1.pos[1] - particle2.pos[1] < 50) {
    //             console.log("condition2")
    //             particle1.pos[1] + 50
    //         }
    //     }
    // }
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
    let pos = []
    // console.log(`before: ${this.windParticles[0]}`)
    this.windParticles.forEach( windParticle => {
        pos.push(windParticle.pos)
    })
    let vel = []
    this.windParticles.forEach(windParticle => {
        vel.push(windParticle.vel)
    })
    // console.log(`before: ${this.windParticles}`)
    this.windParticles = [];
    // console.log(`after: ${this.windParticles}`)
    // let newWindParticles = []
    
    let i = 0;
    // while (i < this.NUM_WIND_PARTICLES) {
    //     this.windParticles[i].pos = pos[i]
    //     this.windParticles[i].mouseX = mouseX
    //     this.windParticles[i].mouseY = mouseY
    //     // console.log(this.windParticles[i])
    //     // this.windParticles[i].vel = Util.setVec(3, mouseX, mouseY)
    //     i += 1
    // }
    while (i < this.NUM_WIND_PARTICLES) {
        let windParticle = new WindParticle({ pos: pos[i], demo: this, vel: vel[i], mouseX: mouseX, mouseY: mouseY })
        this.windParticles.push(windParticle)
        i += 1
    }
    // console.log(this.windParticles)
    // console.log(`after: ${this.windParticles[0]}`)
    // console.log(`after after after: ${this.windParticles}`)
    this.windParticles.forEach( windParticle => {
        // console.log(windParticle)
        windParticle.move()
    })
}

// Demo.prototype.moveObjectsAgain = function(mouseX, mouseY) {
//     if (this.movedWindParticles.length === 0) {
//         console.log(this.movedWindParticles)
//         this.windParticles.forEach(windParticle => {
//             this.movedWindParticles.push(new WindParticle({
//                 pos: windParticle.pos,
//                 demo: this,
//                 mouseX: mouseX,
//                 mouseY: mouseY
//             }))
//         })
//         this.movedWindParticles.forEach(movedWindParticle => {
//             movedWindParticle.move()
//         })
//     } else {
//         console.log(`movedWindParticles are ${this.movedWindParticles}`)
//         console.log(` before finalMovedWindParticles are ${ this.finalMovedWindParticles }`)
//         this.finalMovedWindParticles = [];
//         console.log(`after finalMovedWindparticles are ${ this.finalMovedWindParticles }`)
//         for (let i = 0; i < this.movedWindParticles.length; i += 1) {
//             let movedWindParticle = this.movedWindParticles[i];
//             this.finalMovedWindParticles.push(new WindParticle({
//                 pos: movedWindParticle.pos,
//                 demo: this,
//                 mouseX: mouseX,
//                 mouseY: mouseY
//             }))
//         }
//         this.movedWindParticles = this.finalMovedWindParticles
//         this.finalMovedWindParticles.forEach(finalMovedWindParticle => {
//             finalMovedWindParticle.move()
//         })
//         // this.movedWindParticles.forEach( movedWindParticle => {
//         //     movedWindParticle.move()
//         // })
//     }

    // console.log(this.windParticles)
    // this.windParticles.forEach( windParticle => {
    //     windParticle.move()
    // })
// }

Demo.prototype.checkCollisionsWater = function(checkWind = false) {
    let all;
    // console.log(checkWind)
    if (!checkWind) {
        //checking for the collision of landTop against landRight and landLeft
        // all = this.waterParticles.concat(this.landTop)
        all = this.waterParticles
    // } else if (this.finalMovedWindParticles.length === 0) {
    //     // all = this.waterParticles.concat(this.finalMovedWindParticles, this.landTop)
    //     all = this.waterParticles.concat(this.movedWindParticles)
    } else {
        all = this.waterParticles.concat(this.windParticles)
        // console.log(all)
    }
    all.forEach( (particle1, idx) => {
        // console.log(`before collision check`)
        particle1.collideMove()
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
            console.log(`during collisionCheck : ${particle1.vel}`)
            
            if (particle1.isCollidedWith(particle2)) {
                // if(particle1.delete) {
                //     this.remove(particle1)
                // }
                particle1.collideMoveObj(particle2)
                // particle2.collideMoveObj(particle1)
                // if (particle1 instanceof WaterParticle && particle2 instanceof LandTop)
                // alert(`collision: particle1 = ${particle1.vel}, particle2 = ${particle2.vel}`)
            }

            // if (particle1 instanceof WaterParticle && particle2 instanceof WindParticle && particle1.isCollidedWith(particle2)) {
            //         particle1.collideMoveObjWind(particle2)
            // } else if (particle1 instanceof WaterParticle && particle2 instanceof WaterParticle && particle1.isCollidedWith(particle2)){
            //     particle1.collideMoveObj(particle2)
            // }
        }
    })
}

// Demo.prototype.remove = function (waterParticle) {
//     const particleIdx = this.waterParticles.findIndex(particle => {
//         particle.pos.toString() === waterParticle.pos.toString()
//     });
//     // console.log('astIDX', astIDX)
//     this.waterParticles.splice(particleIdx, 1);
// }

Demo.prototype.stepWater = function(checkWind, mouseX, mouseY, moveAgain=false) {
    if (moveAgain) {
        this.moveObjectsAgain(mouseX, mouseY)
    }
    this.moveObjectsWater()
    this.checkCollisionsWater(checkWind)
    // this.drawWater(ctx)
}


export default Demo