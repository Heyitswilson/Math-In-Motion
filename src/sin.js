class Sin {
    constructor(ctx) {
        this.ctx = ctx
    }

}

Sin.prototype.sinY = (ctx, w, h, t) => {
    ctx.strokeStyle = `#00ffff`;
    ctx.lineWidth = 1;

    let x = function (t) {
        return w * t / 120
        // return Math.sin(t * (10 * Math.PI) / 120) * (-w / 20) + (w / 2);
    };

    let y = function (t) {
        return Math.sin(t * (4 * Math.PI) / 120) * (-h / 4) + (h / 2);
    };

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 1), y(t + 1));
    ctx.stroke();

}

Sin.prototype.sinXY = (ctx, w, h, t) => {
    ctx.strokeStyle = `#00ffff`;
    ctx.lineWidth = 2;

    let x = function (t) {
        return Math.sin(t * (10 * Math.PI) / 120) * (-w / 4) + (w / 2);
    };

    let y = function (t) {
        return Math.sin(t * (4 * Math.PI) / 120) * (-h / 4) + (h / 2);
    };
    
    if (t < (12* Math.PI)) {
        ctx.beginPath();
        ctx.moveTo(x(t), y(t));
        ctx.lineTo(x(t + 1), y(t + 1));
        ctx.stroke();
    }

}

Sin.prototype.butterfly = (ctx, w, h, t) => {
    var cos_t = Math.cos(t)
    var sin_t = Math.sin(t)
    var factorX = Math.exp(Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5);
    var factorY = Math.exp(Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5);

    // ctx.strokeStyle = `#00ffff`;

    


    ctx.lineWidth = 2;

    let x = function (t) {
        // console.log(factorX * (-w / 10) + (w / 2))
        // console.log(Math.sin(t) * (Math.exp(Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12))) * (-w / 10) + (w / 2))
        return (
            // (Math.sin(t) * ((Math.pow(Math.E, Math.cos(t))) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)))) * (-w / 10) + (w / 2))
        
            // Math.sin(t) * (Math.pow(Math.E, Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5)) * (-w / 10) + (w / 2)
        

            // Math.sin(t) * factorX * (-w / 10) + (w / 2)

            (Math.sin(t) * (Math.pow(Math.E, Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-w / 10) + (w / 2)

            // Math.sin(t) * ( Math.exp(Math.cos(t)) - ( 2 *  Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5) ) * (-w / 10) + (w / 2)
            // Math.sin(t) * ( Math.exp(Math.cos(t)) - ( 2 *  Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5) ) * (-w / 10) + (w / 2)
        )   
    };

    let y = function (t) {
        // console.log((Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)))) * (-w / 4) + (w / 2)))
        return (
            // (Math.cos(t) * ((Math.pow(Math.E, Math.cos(t))) - (2 * Math.cos(4 * t)) - (Math.pow(Math.sin(t / 12), 5)))) * (-h / 10) + (h / 2))
        
            // Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - (2 * Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5)) * (-h / 10) + (h / 2)

            // Math.cos(t) * factorX * (-h / 10) + (h / 2)

            (Math.cos(t) * (Math.pow(Math.E, Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5))) * (-h / 10) + (h / 2)

            // Math.cos(t) * (Math.exp(Math.cos(t)) - ( 2 *  Math.cos(4 * t)) - Math.pow(Math.sin(t / 12), 5)) * (-h / 10) + (h / 2)

        )
    };

    ctx.beginPath();
    ctx.moveTo(x(t), y(t));
    ctx.lineTo(x(t + 1), y(t + 1));
    ctx.stroke();

}

export default Sin