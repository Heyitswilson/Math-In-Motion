import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions'

class coolButterfly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_func: "cos(t)",
            y_func: "cos(4t)"
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.receiveGraph("coolButterfly")
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
        const texX = `x(t) = \\sin(t)(e^{\\color{yellow}{\\${this.state.x_func}}} + 2(\\color{red}{\\${this.state.y_func}}) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\cos(t)} + 2(\\cos(4t)) - sinos(4t)) - sin(\\frac{t}{12})^5)`;
        return (
            <div>
                <div className="slider-div">
                    <select onChange={this.update("x_func")}>
                        <option value={"cos(t)"}>cos(t)</option>
                        <option value={"sin(t)"}>sin(t)</option>
                        <option value={"tan(t)"}>tan(t)</option>
                    </select>

                    <select onChange={this.update("y_func")}>
                        <option value={"cos(4t)"}>cos(4t)</option>
                        <option value={"sin(4t)"}>sin(4t)</option>
                        <option value={"tan(4t)"}>tan(4t)</option>
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
    y: state.y,
    graph: state.graph
})

const mDTP = dispatch => ({
    receiveX: x => dispatch(receiveX(x)),
    receiveY: y => dispatch(receiveY(y)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(coolButterfly)