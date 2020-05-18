import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import $ from "jquery";
import { receiveGraph, clear } from '../../actions/graph_actions'

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
        this.props.receiveGraph("DNA Twists")
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
        this.state.x_pos = 55;
        let t = 0;

        this.props.context.clearRect(0, 0, 800, 600);

        let twistInterval = setInterval(() => {
            this.props.context.strokeStyle = this.rgb(t)
            t += 2;
            if (this.state.x_pos > 50) {
                this.animation(t / (this.state.t * Math.PI));
                $(".update-changes").addClass("disabled-button");
                $(".input-slider").prop("disabled", true);
                $(".radio").prop("disabled", true);
            
            } else {
                clearInterval(twistInterval);
                $(".update-changes").removeClass("disabled-button");
                $(".input-slider").prop("disabled", false);
                $(".radio").prop("disabled", false);
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
        const texT = `t = (\\frac{t}{\\color{aqua}{varT}\\Pi}) `;

        return (
            <div>
                <MathJax.Context input="tex">
                    <div className="slider-formula-parent-dSin">
                        <div className="math-formula">
                            <div className="math-formula-twists">
                                <MathJax.Node>{texX}</MathJax.Node>
                            </div>
                            <div>
                                <MathJax.Node>{texY}</MathJax.Node>
                            </div>
                        </div>
                        <div id="twists" className="slider-formula">
                            <div className="math-formula">
                                <MathJax.Node>{texT}</MathJax.Node>
                            </div>
                            <label className="labels-X">
                                <input onChange={this.update("t")} type="range" className="input-slider" min="5" max="10" value={this.state.t} />
                                <div className="var-div">
                                    <div className="labels-lime">varT: </div>
                                    <div className="var">{this.state.t}</div>
                                </div>
                            </label>
                        </div>
                        <div
                            className="update-changes"
                            onClick={() => this.handleSubmit()}
                        >
                            Run
                         </div>
                    </div>
                </MathJax.Context>

            </div>
        );
    }
}

const mSTP = state => ({
    graph: state.graph,
    context: state.context
})

const mDTP = dispatch => ({
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Twist)