import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions';
import $ from 'jquery'

class Butterfly extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_func: "cos",
            y_func: "cos"
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.rgb = this.rgb.bind(this);
        this.animation = this.animation.bind(this);
    }

    animation(t) {
        this.props.context.lineWidth = 2;
        let that = this;

        let x = function (t) {
            return (
            Math.sin(t) *
                (Math.pow(Math.E, Math[that.state.x_func](t)) -
                2 * Math.cos(4 * t) -
                Math.pow(Math.sin(t / 12), 5)) *
                (-800 / 10) +
            800 / 2
            );
        };

        let y = function (t) {
            return (
            Math.cos(t) *
                (Math.pow(Math.E, Math[that.state.y_func](t)) -
                2 * Math.cos(4 * t) -
                Math.pow(Math.sin(t / 12), 5)) *
                (-600 / 10) +
            600 / 2
            );
        };
        this.props.context.fillRect(x(t + 1), y(t + 1), 15, 5);
    }


    componentDidMount() {
        this.props.receiveGraph("butterfly");
    }

    componentWillUnmount() {
        this.props.clear()
    }

    rgb(t) {
        function r(t) {
            return 100 + Math.cos(t / 300) * 700;
        };
        function g(t) {
            return Math.sin(t / 400) * 500;
        };
        function b(t) {
            return 200 + Math.sin(t / 60) * 55;
        };

        return `rgb(
                ${r(t)},
                ${g(t)},
                ${b(t)})`;
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_func);
        this.props.receiveY(this.state.y_func);
        let t = 0

        this.props.context.clearRect(0, 0, 800, 600)
        let butterflyInterval = setInterval(() => {
        
            this.props.context.fillStyle = this.rgb(t)
                
            t += 1
            if (t < 250) {
              this.animation(t / (12 * Math.PI),);
                $('.update-changes').prop('disabled', true)
                $(".input-slider").prop("disabled", true);
                $(".select-func").prop("disabled", true);

            } else {
                clearInterval(butterflyInterval);
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
        
        const texX = `x(t) = \\sin(t)(e^{\\color{yellow}{\\${this.state.x_func}(t)}} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\color{lime}{\\${this.state.y_func}(t)}} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;

        return (
            <div>   
                <div className="slider-div">
                    <select className="select-func" onChange={this.update("x_func")}>
                        <option value={"cos"}>cos(t)</option>
                        <option value={"sin"}>sin(t)</option>
                        <option value={"tan"}>tan(t)</option>
                    </select>

                    <select className="select-func" onChange={this.update("y_func")}>
                        <option value={"cos"}>cos(t)</option>
                        <option value={"sin"}>sin(t)</option>
                        <option value={"tan"}>tan(t)</option>
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

export default connect(mSTP, mDTP)(Butterfly)