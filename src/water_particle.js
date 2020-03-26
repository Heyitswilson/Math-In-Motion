import MovingObject from './moving_object'
import Util from './util'

const waterAttrs = {
    color: "#4d79ff",
    radius: 3
}

class WaterParticle extends MovingObject {
    constructor(args) {
        super(args)
        args = args || {};
        this.color = waterAttrs.color;
        this.radius = waterAttrs.radius;
        this.pos = args.pos;
        // this.vel = Util.setVec(10, args.mouseX, args.mouseY)
    }


}

export default WaterParticle