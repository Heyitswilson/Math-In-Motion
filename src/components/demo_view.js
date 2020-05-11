// import Demo from './demo'
import Sin from '../util/sin'

class DemoView {
    constructor(ctx) {
        this.Demo = new Demo();
        this.ctx = ctx
        this.Sin = new Sin();
    }
}

DemoView.prototype.butterfly = function (w, h) {
    let t = 0
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


        this.ctx.fillStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;


        t += 1
        if (t < 720) {
            this.Sin.butterfly(this.ctx, w, h, t / (12 * Math.PI))
        }
    }, 20);
}


DemoView.prototype.coolButterfly = function (w, h) {
    let t = 0
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

        this.ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;

        t += 1
        if (t < 199) {
            this.Sin.coolButterfly(this.ctx, w, h, t / (12 * Math.PI))
        }
    }, 20);
}

DemoView.prototype.sin = function (w, h) {
    let t = 0
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

        this.ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;

        t += 1
        this.Sin.sin(this.ctx, w, h, t)
    }, 20);
}

DemoView.prototype.doubleSin = function (w, h) {
    let t = 0
    function r(t) {
        return 100 + Math.tan(t / 300) * 200;
    };
    function g(t) {
        return Math.cos(t / 400) * 500;
    };
    function b(t) {
        return 200 + Math.tan(t / 900) * 55;
    };


    setInterval(() => {

        this.ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;

        t += 1
        if (t < 130) {
            this.Sin.doubleSin(this.ctx, w, h, t)
        }
    }, 20);
}

DemoView.prototype.ring = function (w, h) {
    let t = 0
    function r(t) {
        return 150 + Math.sin(t / 700) * 200;
    };
    function g(t) {
        return Math.cos(t / 400) * 500;
    };
    function b(t) {
        return 200 + Math.tan(t / 900) * 55;
    };


    setInterval(() => {

        this.ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;

        t += 0.5
        if (t < 150) {
            this.Sin.ring(this.ctx, w, h, t / (80 * Math.PI))
        }
    }, 20);
}

DemoView.prototype.donut = function (w, h) {
    let t = 0

    setInterval(() => {

        t += 1
        if (t < 1000) {
            this.Sin.donut(this.ctx, w, h, t / ( 50 * Math.PI))
        }
    }, 20);
}

DemoView.prototype.twist = function (w, h) {
  let t = 0;
  function r(t) {
    return 450 + Math.cos(t / 100) * 500;
  }
  function g(t) {
    return 300 + Math.cos(t / 400) * 500;
  }
  function b(t) {
    return 500 + Math.sin(t / 200) * 255;
  }

  setInterval(() => {
    this.ctx.strokeStyle = `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)}`;

    t += 2;
    if (t < 750) {
      this.Sin.twist(this.ctx, w, h, t / (10 * Math.PI));
    }
  }, 20);
};


export default DemoView