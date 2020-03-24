import Demo from './demo'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
    }
}

DemoView.prototype.start = function(){
    console.log("demoView starting")
    setInterval(() => { 
        console.log("moving every 20ms")
        this.Demo.moveObjects();
        this.Demo.draw(this.ctx)
     }, 20)
}

export default DemoView