import MovingObject from './moving_object'
import Util from './util'

const windAttrs = {
    name: "wind",
    radius: 40,
    angle: 0
}

class WindParticle extends MovingObject{
    constructor(args) {
        super(args)
        this.name = windAttrs.name;
        this.radius = windAttrs.radius;
        this.pos = args.pos;
        this.angle = 0;
        this.vel = Util.setVec(5, args.mouseX, args.mouseY, windAttrs.angle) || args.vel
        windAttrs.angle += 25
    }

}

export default WindParticle