import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions'

class doubleSin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_val: 120,
            y_val: 120
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.receiveGraph("doubleSin")
    }

    componentWillUnmount() {
        this.props.clear()
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_val);
        this.props.receiveY(this.state.y_val);
        this.props.runDemoView()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        const texX = `x(t) = \\frac{t}{\\color{yellow}{${this.state.x_val}}}`;
        const texY = `y(t) = t(\\frac{4\\Pi}{\\color{red}{${this.state.y_val}}})`;
        return (
            <div>
                <div className="slider-div">
                    <div>
                        <label className="labels-X">
                            X
                            <input onChange={this.update("x_val")} type="range" min="50" max="500" value={this.state.x_val} />
                        </label>
                        <label className="labels-Y">
                            Y
                            <input onChange={this.update("y_val")} type="range" min="50" max="500" value={this.state.y_val} />
                        </label>
                    </div>
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
    receiveX: x=> dispatch(receiveX(x)),
    receiveY: y=> dispatch(receiveY(y)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(doubleSin)