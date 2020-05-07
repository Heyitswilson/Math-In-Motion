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
    // let t = 200;
    let t = 0
    // let modT = t % 120
    function r(t) {
        return 100 + Math.cos(t / 300) * 700;
    };
    function g(t) {
        return Math.sin(t / 400) * 500;
    };
    function b(t) {
        return 200 + Math.sin(t / 60) * 55;
    };


    setInterval(() => {
        // t += 220

        // this.ctx.strokeStyle = `rgb(
        // ${r(t)},
        // ${g(t)},
        // ${b(t)}`;

        this.ctx.fillStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;


        t += 1
        // for visual shape, use t < 600 ; for butterfly shape, use t < 750
        if (t < 750) {
            this.Sin.butterfly(this.ctx, w, h, t / (12 * Math.PI))
        }
    }, 20);
        // this.Sin.draw(this.ctx, w, h, 1)
}



export default DemoView