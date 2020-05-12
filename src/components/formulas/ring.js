import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, clear } from '../../actions/graph_actions'

class Ring extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_func: "cos(13t)",
            y_func: "cos(13t)"
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clear()
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_func);
        this.props.receiveY(this.state.y_func);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        const texX = `x(t) = \\cos(20t) + \\frac{\\color{yellow}{\\${this.state.x_func}}}{2} + \\frac{\\sin(6t)}{3}`;
        const texY = `y(t) = \\sin(20t) + \\frac{\\color{red}{\\${this.state.y_func}}}{2} + \\frac{\\cos(6t)}{3}`;
        return (
            <div>
                <div className="slider-div">
                    <select onChange={this.update("x_func")}>
                        <option value={"cos(13t)"}>cos(13t)</option>
                        <option value={"sin(13t)"}>sin(13t)</option>
                        <option value={"tan(13t)"}>tan(13t)</option>
                    </select>

                    <select onChange={this.update("y_func")}>
                        <option value={"cos(13t)"}>cos(13t)</option>
                        <option value={"sin(13t)"}>sin(t)</option>
                        <option value={"tan(13t)"}>tan(13t)</option>
                    </select>
                    <button onClick={() => this.handleSubmit()}>Update Changes</button>
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
}

const mSTP = state => ({
    x: state.x,
    y: state.y
})

const mDTP = dispatch => ({
    receiveX: x => dispatch(receiveX(x)),
    receiveY: y => dispatch(receiveY(y)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Ring)