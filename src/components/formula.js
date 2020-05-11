import React from 'react';
import MathJax from "react-mathjax2";


function Formula({graph, receiveX, receiveY, receiveT, receiveFrame, clear}) {
    let selected = graph
    console.log(selected)
    const sin = () => {
        const texX = `x(t) = \\frac{t}{\\color{yellow}{120}}`;
        const texY = `y(t) = t(\\frac{4\\Pi}{\\color{red}{120}})`;

        return (
            <div>
                <div className="slider-div">
                    <label className="labels">
                        {" "}
                        X
                        <input type="range" min="1" max="100" value="50" />
                    </label>
                    <label className="labels">
                        {" "}
                        Y
                        <input type="range" min="1" max="100" value="50" />
                    </label>
                </div>
                <MathJax.Context input="tex">
                    <div className="labels">
                    As 't' time increases, the X and Y position changes based on these
                    formulas:
                    <div>
                        X position:<MathJax.Node>{texX}</MathJax.Node>
                    </div>
                    <div>
                        Y position:<MathJax.Node>{texY}</MathJax.Node>
                    </div>
                    </div>
                </MathJax.Context>

            </div>
        );
    }

    const doubleSin = () => {
        const texX = `x(t) = \\sin(t(\\frac{10\\Pi}{\\color{yellow}{120}}))`;
        const texY = `y(t) = \\sin(t(\\frac{8\\Pi}{\\color{red}{120}}))`;

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas:
              <div>
                X position:<MathJax.Node>{texX}</MathJax.Node>
              </div>
              <div>
                Y position:<MathJax.Node>{texY}</MathJax.Node>
              </div>
            </div>
          </MathJax.Context>
        );
    }

    const butterfly = () => {
        const texX = `x(t) = \\sin(t)(e^{\\color{yellow}{\\cos(t)}} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\color{red}{\\cos(t)}} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas:
              <div>
                X position:<MathJax.Node>{texX}</MathJax.Node>
              </div>
              <div>
                Y position:<MathJax.Node>{texY}</MathJax.Node>
              </div>
            </div>
          </MathJax.Context>
        );
    }

    const coolButterfly = () => {
        const texX = `x(t) = \\sin(t)(e^{\\color{yellow}{\\cos(t)}} + 2(\\color{red}{\\cos(4t)}) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\cos(t)} + 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas:
              <div>
                X position:<MathJax.Node>{texX}</MathJax.Node>
              </div>
              <div>
                Y position:<MathJax.Node>{texY}</MathJax.Node>
              </div>
            </div>
          </MathJax.Context>
        );
    }

    const ring = () => {
        const texX = `x(t) = \\cos(20t) + \\frac{\\color{yellow}{\\cos(13t)}}{2} + \\frac{\\sin(6t)}{3}`;
        const texY = `y(t) = \\sin(20t) + \\frac{\\color{red}{\\sin(13t)}}{2} + \\frac{\\cos(6t)}{3}`;

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas:
              <div>
                X position:<MathJax.Node>{texX}</MathJax.Node>
              </div>
              <div>
                Y position:<MathJax.Node>{texY}</MathJax.Node>
              </div>
            </div>
          </MathJax.Context>
        );
    }

    const donut = () => {
        const texX = `x(t) = \\cos(20t) + \\frac{\\cos(\\color{yellow}{13t})}{2} + \\frac{\\sin(14t)}{3}`;
        const texY = `y(t) = \\sin(20t) + \\frac{\\cos(\\color{red}{13t})}{2} + \\frac{\\cos(14t)}{3}`;

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas:
              <div>
                X position:<MathJax.Node>{texX}</MathJax.Node>
              </div>
              <div>
                Y position:<MathJax.Node>{texY}</MathJax.Node>
              </div>
            </div>
          </MathJax.Context>
        );
    }

    const twist = () => {
        const texX = `x(t) = t - 1.6(\\cos(24t))`;
        const texY = `y(t) = t - 1.6(\\sin(25t))`;
        const texT = `t = (\\frac{t}{\\color{yellow}{10}\\Pi}) `;

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas:
              <div>
                X position:<MathJax.Node>{texX}</MathJax.Node>
              </div>
              <div>
                Y position:<MathJax.Node>{texY}</MathJax.Node>
              </div>
              <div>
                Time 't': <MathJax.Node>{texT}</MathJax.Node>
              </div>
              <div>
                Animation frames: <div className="frame-num">750</div>
              </div>
            </div>
          </MathJax.Context>
        );
    }

    const renderSwitch = (param) => {
        switch(param) {
            case "sin":
                return sin()
            case "doubleSin":
                return doubleSin()
            case "butterfly": 
                return butterfly()
            case "coolButterfly":
                return coolButterfly()
            case "ring":
                return ring()
            case "donut":
                return donut()
            case "twist":
                return twist()
        }
    }

    return (
        <div>
            {renderSwitch(graph)}
        </div>


    )

}

export default Formula