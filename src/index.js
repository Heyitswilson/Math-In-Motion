
import Demo from './demo'
import DemoView from './demo_view'
window.Demo = Demo

window.addEventListener("DOMContentLoaded", (event) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d")

    
    const Demoview = new DemoView(ctx)

    Demoview.drawSin(800, 600)
})


