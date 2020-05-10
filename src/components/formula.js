import React from 'react';
import MathJax from "react-mathjax2";


function Formula({graph}) {

    const sin = () => {
        const texX = `x(t) = \\frac{t}{120}`;
        const texY = `y(t) = \\';

        return (
          <MathJax.Context input="tex">
            <div className="labels">
              As 't' time increases, the X and Y position changes based on these
              formulas: X position:<MathJax.Node>{texX}</MathJax.Node>Y
              position:<MathJax.Node>{texY}</MathJax.Node>
            </div>
          </MathJax.Context>
        );
    }


    return (
        <div>

        </div>
    )
}

export default Formula