import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions'

class coolButterfly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_func: "cos",
            y_func: "cos"
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
        this.props.runDemoView()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        const texX = `x(t) = \\sin(t)(e^{\\color{yellow}{\\${this.state.x_func}(t)}} + 2(\\color{red}{\\${this.state.y_func}(4t)}) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\cos(t)} + 2(\\cos(4t)) - sinos(4t)) - sin(\\frac{t}{12})^5)`;
        return (
            <div >
                <div className="slider-div">
                    <select className="select-func" onChange={this.update("x_func")}>
                        <option value={"cos"}>cos(t)</option>
                        <option value={"sin"}>sin(t)</option>
                        <option value={"tan"}>tan(t)</option>
                    </select>

                    <select className="select-func" onChange={this.update("y_func")}>
                        <option value={"cos"}>cos(4t)</option>
                        <option value={"sin"}>sin(4t)</option>
                        <option value={"tan"}>tan(4t)</option>
                    </select>
                    <div className="buttons">
                        <button className="update-changes" onClick={() => this.handleSubmit()}>Run</button>
                    </div>
                </div>
                <MathJax.Context input="tex">
                    <div className="labels">
                        <MathJax.Node>{texX}</MathJax.Node>

                        <MathJax.Node>{texY}</MathJax.Node>
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