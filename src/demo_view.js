import Demo from './demo'
// import Land from './land'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        this.interval = "testtest"
        // this.Land = new Land(this.ctx)
        this.intervalWater = "testwater"
    }
}
DemoView.prototype.start = function(mouseX, mouseY){
    // this.Demo.addWaterParticles()
    // this.Demo.addWindParticles()
    this.interval = setInterval(() => { 
        // console.log("moving every 20ms")
        // this.Demo.moveObjects();
        this.Demo.stepWater(false, mouseX, mouseY)
        // this.Demo.moveObjectsWater()
        // this.Demo.draw(this.ctx)
        this.Demo.drawWater(this.ctx)
    }, 20);

    // this.intervalWater = setInterval(() => {
    //     this.Demo.moveObjectsWater()
    //     this.Demo.drawWater(this.ctx)
    // }, 20)
}

DemoView.prototype.clear = function() {
    clearInterval(this.interval)
}

DemoView.prototype.moveAgain = function(mouseX, mouseY) {
    this.interval = setInterval(() => {
        // this.Demo.moveObjectsAgain(mouseX, mouseY);
        this.Demo.stepWater(true, mouseX, mouseY, true)
        // this.Demo.draw(this.ctx)
        this.Demo.drawWater(this.ctx)
    }, 20)
}

export default DemoView