import Demo from './demo'
import Sin from './sin'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        this.Sin = new Sin();
    }
}

DemoView.prototype.drawSin = function(w, h){

    // setInterval(() => {
    //     this.Sin.draw(this.ctx, w, h)
    // }, 20);
        this.Sin.draw(this.ctx, w, h)
}



export default DemoView