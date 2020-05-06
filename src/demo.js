
class Demo {
    constructor() {
        this.DIM_X = 800
        this.DIM_Y = 600

    }
}


Demo.prototype.randomPosition = () => {
    let x = Math.floor(Math.random() * 800)
    let y = Math.floor(Math.random() * 800)
    let randPos = [x, y]
    return randPos
}



export default Demo