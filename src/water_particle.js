import MovingObject from './moving_object'
import Util from './util'

const waterAttrs = {
    name: "water",
    color: 'rgba(0, 255, 255, 0.4)',
    radius: 30,
    strokeColor: "#00ffff",
}

class WaterParticle extends MovingObject {
    constructor(args) {
        super(args)
        args = args || {};
        this.name = waterAttrs.name;
        this.color = waterAttrs.color;
        this.radius = waterAttrs.radius;
        this.pos = args.pos;
        this.vel = Util.setVecWater(7);
        // this.strokeColors
        this.strokeColors = ["#00ff00", "#ffff00", "#00ffff", "#ff00ff", "#ff8000"]
    }


}

export default WaterParticle