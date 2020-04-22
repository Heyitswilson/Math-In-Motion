import MovingObject from './moving_object'
import WindParticle from './wind_particle'
import Demo from './demo'
import DemoView from './demo_view'
window.MovingObject = MovingObject
window.WindParticle = WindParticle
window.Demo = Demo

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")
    
    let mouseX = 400;
    let mouseY = 400;
    
    const Demoview = new DemoView(ctx)
    Demoview.start(mouseX, mouseY)

    canvas.addEventListener("mousedown", setMousePosition, false)

    function setMousePosition(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        Demoview.clear()
        Demoview.moveAgain(mouseX, mouseY)
    }

})


