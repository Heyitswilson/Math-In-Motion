import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import $ from "jquery";
import { receiveT, receiveGraph, clear } from '../../actions/graph_actions'

class Twist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            t: 5,
            x_pos: 55
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.animation = this.animation.bind(this);
        this.rgb = this.rgb.bind(this);
    }

    componentDidMount() {
        this.props.receiveGraph("twist")
    }

    componentWillUnmount() {
        this.props.clear()
    }

    rgb(t) {
        function r(t) {
        return 450 + Math.cos(t / 100) * 500;
        }
        function g(t) {
        return 300 + Math.cos(t / 400) * 500;
        }
        function b(t) {
        return 500 + Math.sin(t / 200) * 255;
        }

        return `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)})`;
    }

    animation(t) {
        this.props.context.lineWidth = 2;

        let x = function (t) {
            return (t - 1.6 * Math.cos(24 * t)) * (-800 / 30) + 800 / 1.1;
        };

        let y = function (t) {
            return (t - 1.6 * Math.sin(25 * t)) * (-600 / 30) + 600 / 1.1;
        };
        this.state.x_pos = x(t)

        this.props.context.beginPath();
        this.props.context.moveTo(x(t), y(t));
        this.props.context.lineTo(x(t + 2), y(t + 2));
        this.props.context.stroke();
    }

    handleSubmit() {
        this.props.receiveT(this.state.t);
        this.state.x_pos = 55;
        let t = 0;

        this.props.context.clearRect(0, 0, 800, 600);

        let twistInterval = setInterval(() => {
            this.props.context.strokeStyle = this.rgb(t)
            console.log(this.state.x_pos)
            t += 2;
            if (this.state.x_pos > 50) {
                this.animation(t / (this.state.t * Math.PI));
                $(".update-changes").prop("disabled", true);
                $(".input-slider").prop("disabled", true);
                $(".select-func").prop("disabled", true);
            
            } else {
                clearInterval(twistInterval);
                $(".update-changes").prop("disabled", false);
                $(".input-slider").prop("disabled", false);
                $(".select-func").prop("disabled", false);
            }
        }, 20);
    }

    update(field) {
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
                        <input onChange={this.update("t")} type="range" className="input-slider" min="5" max="10" value={this.state.t} />
                    </label>
                    <div className="buttons">
                        <button className="update-changes" onClick={() => this.handleSubmit()}>Run</button>
                    </div>
                </div>
                <div className="horizontal-line"></div>
                <MathJax.Context input="tex">
                    <div className="labels">
                        <MathJax.Node>{texX}</MathJax.Node>
                        <MathJax.Node>{texY}</MathJax.Node>
                        <MathJax.Node>{texT}</MathJax.Node>
                    </div>
                </MathJax.Context>

            </div>
        );
    }
}

const mSTP = state => ({
    t: state.t,
    graph: state.graph,
    context: state.context
})

const mDTP = dispatch => ({
    receiveT: t => dispatch(receiveT(t)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Twist)