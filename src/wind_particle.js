import MovingObject from './moving_object'
import Util from './util'

const windAttrs = {
    name: "wind",
    radius: 40,
}

class WindParticle extends MovingObject{
    constructor(args) {
        super(args)
        this.name = windAttrs.name;
        this.radius = windAttrs.radius;
        this.pos = args.pos;
        this.vel = Util.setVec(5, args.mouseX, args.mouseY) || args.vel;

    }

}

export default WindParticle