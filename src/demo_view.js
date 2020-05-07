import Demo from './demo'
import Sin from './sin'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        this.Sin = new Sin();
    }
}

DemoView.prototype.sinY = function(w, h){
    let t = 200;
    // let modT = t % 120
    setInterval(() => {
        t += 220
        this.Sin.butterfly(this.ctx, w, h, t % (12 * Math.PI))
    }, 20);
        // this.Sin.draw(this.ctx, w, h, 1)
}



export default DemoView