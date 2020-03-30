import MovingObject from './moving_object'
import Util from './util'

const windAttrs = {
    name: "wind",
    color: "#ffe6e6",
    radius: 30,
}

class WindParticle extends MovingObject{
    constructor(args) {
        super(args)
        this.name = windAttrs.name;
        this.color = windAttrs.color;
        this.radius = windAttrs.radius;
        this.pos = args.pos;
        // this.vel =  args.vel || Util.setVec(3, args.mouseX, args.mouseY)
        this.vel = Util.setVec(5, args.mouseX, args.mouseY) || args.vel;

        // console.log(args)
    }


}

export default WindParticle