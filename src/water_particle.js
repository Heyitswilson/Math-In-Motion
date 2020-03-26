import MovingObject from './moving_object'
import Util from './util'

const waterAttrs = {
    color: "#4d79ff",
    radius: 40,
    strokeColor: "#ffe6e6"
}

class WaterParticle extends MovingObject {
    constructor(args) {
        super(args)
        args = args || {};
        this.color = waterAttrs.color;
        this.radius = waterAttrs.radius;
        this.pos = args.pos;
        this.vel = Util.setVecWater(10)
    }


}

export default WaterParticle