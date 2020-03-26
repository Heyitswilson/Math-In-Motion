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
DemoView.prototype.start = function(){
    this.interval = setInterval(() => { 
        // console.log("moving every 20ms")
        this.Demo.moveObjects();
        this.Demo.draw(this.ctx)
        this.Demo.stepWater()
        // this.Demo.moveObjectsWater()
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
        this.Demo.moveObjectsAgain(mouseX, mouseY);
        this.Demo.draw(this.ctx)
        this.Demo.stepWater(true)
        this.Demo.drawWater(this.ctx)
    }, 20)
}

export default DemoView