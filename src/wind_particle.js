import MovingObject from './moving_object'
import Util from './util'

const windAttrs = {
    color: "#ffe6e6",
    radius: 50
}

class WindParticle extends MovingObject{
    constructor(args) {
        super(args)
        args = args || {};
        this.color = windAttrs.color;
        this.radius = windAttrs.radius;
        this.pos = args.pos;
        this.vel = Util.setVec(10, args.mouseX, args.mouseY)
    }


}

export default WindParticle