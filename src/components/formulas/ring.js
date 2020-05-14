import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import $ from "jquery";

import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions'

class Ring extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_func: "cos",
            y_func: "cos"
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.animation = this.animation.bind(this);
        this.rgb = this.rgb.bind(this);
    }

    componentDidMount() {
        this.props.receiveGraph("ring")
    }

    componentWillUnmount() {
        this.props.clear()
    }

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

    animation(t) {
        this.props.context.lineWidth = 2;
        
        let that = this;

        let x = function (t) {
            return (
            (Math.cos(20 * t) +
                Math[that.state.x_func](13 * t) / 2 +
                Math.sin(6 * t) / 3) *
                (-800 / 4) +
            800 / 2
            );
        };

        let y = function (t) {
            return (
            (Math.sin(20 * t) +
                Math[that.state.y_func](13 * t) / 2 +
                Math.cos(6 * t) / 3) *
                (-600 / 4) +
            600 / 2
            );
        };

        this.props.context.beginPath();
        this.props.context.moveTo(x(t), y(t));
        this.props.context.lineTo(x(t + 0.5), y(t + 0.5));
        this.props.context.stroke();
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_func);
        this.props.receiveY(this.state.y_func);
        let t = 0;

        this.props.context.clearRect(0, 0, 800, 600);

        let ringInterval = setInterval(() => {
            this.props.context.strokeStyle = this.rgb(t)

            t += 0.5;
            if (t < 150) {
                this.animation(t / (80 * Math.PI));
                $(".update-changes").prop("disabled", true);
                $(".input-slider").prop("disabled", true);
                $(".select-func").prop("disabled", true);
            } else {
                clearInterval(ringInterval);
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
        const texX = `x(t) = \\cos(20t) + \\frac{\\color{yellow}{\\${this.state.x_func}(13t)}}{2} + \\frac{\\sin(6t)}{3}`;
        const texY = `y(t) = \\sin(20t) + \\frac{\\color{lime}{\\${this.state.y_func}(13t)}}{2} + \\frac{\\cos(6t)}{3}`;
        return (
            <div>
                <div className="slider-div">
                    <select className="select-func" onChange={this.update("x_func")}>
                        <option className="options" value={"cos"}>cos(13t)</option>
                        <option className="options" value={"sin"}>sin(13t)</option>
                        <option className="options" value={"tan"}>tan(13t)</option>
                    </select>

                    <select className="select-func" onChange={this.update("y_func")}>
                        <option className="options" value={"cos"}>cos(13t)</option>
                        <option className="options" value={"sin"}>sin(13t)</option>
                        <option className="options" value={"tan"}>tan(13t)</option>
                    </select>
                    <div className="buttons">
                        <button className="update-changes" onClick={() => this.handleSubmit()}>Run</button>
                    </div>
                </div>
                <div className="horizontal-line"></div>
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
    graph: state.graph,
    context: state.context
})

const mDTP = dispatch => ({
    receiveX: x => dispatch(receiveX(x)),
    receiveY: y => dispatch(receiveY(y)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(Ring)