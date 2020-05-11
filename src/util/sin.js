class Sin {
    constructor(ctx) {
        this.ctx = ctx
    }

}

Sin.prototype.sin = (ctx, w, h, t) => {
    ctx.strokeStyle = `#00ffff`;
    ctx.lineWidth = 1;

    let x = function (t) {
        return w * t / 120
    };

    let y = function (t) {
        return Math.sin(t * (4 * Math.PI) / 120) * (-h / 4) + (h / 2);
    };

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 1), y(t + 1));
    ctx.stroke();

}

Sin.prototype.doubleSin = (ctx, w, h, t) => {
    ctx.lineWidth = 2;

    let x = function (t) {
        return Math.sin(t * ((10 * Math.PI) / 120)) * (-w / 4) + (w / 2);
    };

    let y = function (t) {
        return Math.sin(t * (8 * Math.PI) / 120) * (-h / 4) + (h / 2);
    };

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 1), y(t + 1));
    ctx.stroke();

}

Sin.prototype.butterfly = (ctx, w, h, t) => {




    ctx.lineWidth = 2;

    let x = function (t) {
        return (

            (Math.sin(t) * (Math.pow(Math.E, Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-w / 10) + (w / 2)

        )
    };

    let y = function (t) {
        return (

            (Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-h / 10) + (h / 2)


        )
    };
    ctx.fillRect(x(t + 1), y(t + 1), 15, 5)


}

Sin.prototype.coolButterfly = (ctx, w, h, t) => {
    ctx.lineWidth = 2;

    let x = function (t) {
        return (
            (Math.sin(t) * (Math.pow(Math.E, Math.cos(t)) + 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-w / 10) + (w / 2)
        )
    };

    let y = function (t) {
        return (
            (Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) + 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-h / 10) + (h / 2)
        )
    };
    
    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 1), y(t + 1));
    ctx.stroke();
}

Sin.prototype.ring = (ctx, w, h, t) => {
    ctx.lineWidth = 2;

    let x = function (t) {
        return (
           (Math.cos(20 * t) + (Math.cos(13 * t) / 2) + (Math.sin(6 * t) / 3)) * (-w / 4) + (w / 2)
        )
    };

    let y = function (t) {
        return (
            (Math.sin(20 * t) + (Math.sin(13 * t)/ 2) + (Math.cos(6 * t) / 3)) * (-h / 4) + (h / 2)
        )
    };

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 0.5), y(t + 0.5));
    ctx.stroke();
}

Sin.prototype.donut = (ctx, w, h, t) => {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(255, 255, 255)";

    let x = function (t) {
        return (
           (Math.cos(20 * t) + (Math.cos(13 * t) / 2) + (Math.sin(14 * t) / 3)) * (-w / 4) + (w / 2)
        )
    };

    let y = function (t) {
        return (
            (Math.sin(20 * t) + (Math.sin(13 * t)/ 2) + (Math.cos(14 * t) / 3)) * (-h / 4) + (h / 2)
        )
    };

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 1), y(t + 1));
    ctx.stroke();
}

Sin.prototype.twist = (ctx, w, h, t) => {
    ctx.lineWidth = 2;

    let x = function (t) {
        return (t - (1.6 * Math.cos(24 * t))) * (-w / 30) + (w/1.1);
    };

    let y = function (t) {
        return (t - (1.6 * Math.sin(25 * t))) * (-h / 30) + (h/1.1);
    };

        // ctx.fillRect(x(t + 1), y(t + 1), 15, 5);

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 2), y(t + 2));
    ctx.stroke();
}

export default Sin