# Math-in-Motion
[Live Site](https://www.wilsonngu.net/Math-In-Motion/)

Math-in-Motion animates graphs of mathematical functions and parametrical plots using React and JavaScript.

![Bounce](https://segmed-dev.s3-us-west-1.amazonaws.com/math-in-motion/math-in-motion-sc.pngg)

## Features
* Animated parametric plots and mathematical functions
* RGB color changes

## Code

#### Animated parametric plots and mathematical functions

The animations were done by using the asynchronous function, setInterval, to change the variable "t" and pass it to the animation function. This function calculates all X and Y coordinates on the graph using certain math equations, and then either draws a rectangle at that position or draws a line from that position to another.

![darth_vader](https://segmed-dev.s3-us-west-1.amazonaws.com/math-in-motion/darth_vader.gif)

```javascript
    animation(t) {
        this.props.context.strokeStyle = `#00ffff`;
        this.props.context.lineWidth = 1;
        let that = this;
        let x = function (t) {
            return (800 * t) / that.state.x_val;
        };

        let y = function (t) {
            return Math.sin((t * (4 * Math.PI)) / that.state.y_val) * (-600 / 4) + 600 / 2;
            // Remember to scale the graph to the size of your canvas and to position it properly. 
            // In this case, the height of the canvas was 600 pixels, and the proper 
            // calculations were done at the end of the equation.
        };
        this.state.x_pos = x(t)

        this.props.context.beginPath();
        this.props.context.moveTo(x(t), y(t));
        this.props.context.lineTo(x(t + 1), y(t + 1));
        this.props.context.stroke();
    }
```

#### RGB Color Changes
Color changes are also based on the changing variable "t." 

![butterfly](https://segmed-dev.s3-us-west-1.amazonaws.com/math-in-motion/butterfly.gif)

```javascript
rgb(t) {
        function r(t) {
            return 150 + Math.sin(t / 700) * 200;
        };
        function g(t) {
            return Math.cos(t / 400) * 500;
        };
        function b(t) {
            return 200 + Math.tan(t / 900) * 55;
        };
        
        return `rgb(
            ${r(t)},
            ${g(t)},
            ${b(t)})`;
    }
```

## To-do
* Add more graphs
