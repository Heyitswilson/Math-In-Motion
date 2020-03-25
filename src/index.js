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

    let canvasPos = getPosition(canvas);
    let mouseX = 5;
    let mouseY = 0;

    canvas.addEventListener("mousemove", setMousePosition, false)

    function setMousePosition(e) {
        mouseX = e.clientX - canvasPos.x;
        mouseY = e.clientY - canvasPos.y;
        console.log(`${mouseX} & ${mouseY}`)
    }

    function getPosition(el) {
        let xPosition = 0;
        let yPosition = 0;

        while (el) {
            xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            el = el.offsetParent
        }

        return {
            x: xPosition,
            y: yPosition
        }
    }

    new DemoView(ctx).start()
})


console.log("webpack working!")