import MovingObject from './moving_object'
import Util from './util'

const waterAttrs = {
    name: "water",
    color: "#4d79ff",
    radius: 30,
    strokeColor: "#ffe6e6",
}

class WaterParticle extends MovingObject {
    constructor(args) {
        super(args)
        args = args || {};
        this.name = waterAttrs.name;
        this.color = waterAttrs.color;
        this.radius = waterAttrs.radius;
        this.pos = args.pos;
        // this.vel = Util.setVec(5);
        this.vel = Util.setVecWater(7);
    }


}

export default WaterParticle