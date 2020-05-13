import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveT, receiveFrame, receiveGraph, clear } from '../../actions/graph_actions'

class Twist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            t: 10,
            frames: 750
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.receiveGraph("twist")
    }

    componentWillUnmount() {
        this.props.clear()
    }

    handleSubmit() {
        this.props.receiveT(this.state.t);
        this.props.receiveFrame(this.state.frames);
        this.props.runDemoView()
    }

    update(field) {
        console.log(this.state.t)
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        const texX = `x(t) = t - 1.6(\\cos(24t))`;
        const texY = `y(t) = t - 1.6(\\sin(25t))`;
        const texT = `t = (\\frac{t}{\\color{yellow}{${this.state.t}}\\Pi}) `;

        return (
            <div>
                <div className="slider-div">
                    <label className="labels">
                        t
                        <input onChange={this.update("t")} type="range" min="5" max="30" value={this.state.t} />
                    </label>
                    <label className="labels">
                        Animation Frames
                        <input onChange={this.update("frames")} type="range" min="750" max="1500" value={this.state.frames} />
                    </label>
                    <div className="buttons">
                        <button className="update-changes" onClick={() => this.handleSubmit()}>Run</button>
                    </div>
                </div>
                <MathJax.Context input="tex">
                    <div className="labels">
                        <MathJax.Node>{texX}</MathJax.Node>
                        <MathJax.Node>{texY}</MathJax.Node>
                        <MathJax.Node>{texT}</MathJax.Node>
                        <div className="frame-div">
                            <div className="labels">Animation frames: </div>                      
                            <div className="frame-num"> {this.state.frames} </div>
                        </div>

                    </div>
                </MathJax.Context>

            </div>
        );
    }
}

const mSTP = state => ({
    t: state.t,
    frames: state.frames,
    graph: state.graph
})

const mDTP = dispatch => ({
    receiveT: t => dispatch(receiveT(t)),
    receiveFrame: frames => dispatch(receiveFrame(frames)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Twist)