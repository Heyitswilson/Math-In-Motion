import Demo from './demo'
import Land from './land'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        console.log("hitting demoView")
        this.interval = "testtest"
        // this.Land = new Land(this.ctx)
    }
}
DemoView.prototype.start = function(){
    console.log("demoView starting")
    console.log(this.interval)
    this.interval = setInterval(() => { 
        console.log("moving every 20ms")
        this.Demo.moveObjects();
        this.Demo.draw(this.ctx)
     }, 20)
     console.log(this.interval)
    this.Demo.drawWater(this.ctx)
}

DemoView.prototype.clear = function() {
    clearInterval(this.interval)
    console.log("clearing")
}

DemoView.prototype.moveAgain = function(mouseX, mouseY) {
    console.log("move again")
    this.interval = setInterval(() => {
        this.Demo.moveObjectsAgain(mouseX, mouseY);
        this.Demo.draw(this.ctx)
    }, 20)
}

export default DemoView