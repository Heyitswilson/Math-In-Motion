import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import Demo from './demo'
import DemoView from './demo_view'
// const MovingObject = require("./moving_object.js").default;
window.MovingObject = MovingObject
window.WindParticle = WindParticle
window.Demo = Demo

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")

    const mo = {
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    };

    const wp = {
        pos: [100, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    }

    // new WindParticle(wp).draw(ctx)
    // new MovingObject(mo).draw(ctx)

    new DemoView(ctx).start()
})


console.log("webpack working!")