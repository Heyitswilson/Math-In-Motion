import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import Demo from './demo'
import DemoView from './demo_view'
import Land from './land'
// const MovingObject = require("./moving_object.js").default;
window.MovingObject = MovingObject
window.WindParticle = WindParticle
window.Demo = Demo

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")
    
    let canvasPos = getPosition(canvas);
    let mouseX = 0;
    let mouseY = 0;

    new Land(ctx)
    
    const Demoview = new DemoView(ctx)
    Demoview.start()

    canvas.addEventListener("mousedown", setMousePosition, false)

    function setMousePosition(e) {
        mouseX = e.clientX - canvasPos.x;
        mouseY = e.clientY - canvasPos.y;

        Demoview.clear()
        Demoview.moveAgain(mouseX, mouseY)
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

})


console.log("webpack working!")