import Demo from './demo'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        this.interval = "testtest"
        this.intervalWater = "testwater"
    }
}
DemoView.prototype.start = function(mouseX, mouseY){
    this.interval = setInterval(() => { 
        this.Demo.stepWater(false, mouseX, mouseY)
        this.Demo.drawWater(this.ctx)
    }, 20);

}

DemoView.prototype.clear = function() {
    clearInterval(this.interval)
}

DemoView.prototype.moveAgain = function(mouseX, mouseY) {
    this.interval = setInterval(() => {
        this.Demo.stepWater(true, mouseX, mouseY, true)
        this.Demo.drawWater(this.ctx)
    }, 20)
}

export default DemoView