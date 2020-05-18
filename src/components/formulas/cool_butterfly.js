import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveGraph, clear } from '../../actions/graph_actions';
import $ from "jquery";

class coolButterfly extends React.Component {
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

    componentDidMount() {
        this.props.receiveGraph("Darth Vader")
    }

    componentWillUnmount() {
        this.props.clear()
    }
    
    animation(t) {
        this.props.context.lineWidth = 2;

        let that = this;

        let x = function (t) {
            return (
            Math.sin(t) *
                (Math.pow(Math.E, Math[that.state.x_func](t)) +
                2 * Math[that.state.y_func](4 * t) -
                Math.pow(Math.sin(t / 12), 5)) *
                (-800 / 10) +
            800 / 2
            );
        };

        let y = function (t) {
            return (
            Math.cos(t) *
                (Math.pow(Math.E, Math.cos(t)) +
                2 * Math.cos(4 * t) -
                Math.pow(Math.sin(t / 12), 5)) *
                (-600 / 10) +
            600 / 2
            );
        };

        this.props.context.beginPath();
        this.props.context.moveTo(x(t), y(t));
        this.props.context.lineTo(x(t + 1), y(t + 1));
        this.props.context.stroke();
    }

    rgb(t) {
        function r(t) {
            return 300 + Math.sin(t / 300) * 20;
        }
        function g(t) {
            return 200 + Math.sin(t / 400) * 500;
        }
        function b(t) {
            return 100 + Math.sin(t / 60) * 55;
        }

        return `rgb(
        ${r(t)},
        ${g(t)},
        ${b(t)})`;
    }

    handleSubmit() {
        let t = 0;
        
        this.props.context.clearRect(0, 0, 800, 600);

        let coolButterflyInterval = setInterval(() => {
            this.props.context.strokeStyle = this.rgb(t);

            t += 1;
            if (t < 199) {
                this.animation(t / (12 * Math.PI));
                $(".update-changes").addClass("disabled-button");
                $(".input-slider").prop("disabled", true);
                $(".radio").prop("disabled", true);

            } else {
                clearInterval(coolButterflyInterval);
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


        const texX = `x(t) = \\sin(t)(e^{\\color{aqua}{varOne}(t)} + 2(\\color{aqua}{varTwo}(4t)) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\cos(t)} + 2(\\cos(4t)) - sinos(4t)) - sin(\\frac{t}{12})^5)`;
        return (
            <div >
                <MathJax.Context input="tex">
                    <div className="slider-formula-parent-dSin">
                        <div className="select-formula">
                            <div className="math-formula" id="width-formula">
                                <MathJax.Node>{texX}</MathJax.Node>
                            </div>
                            <label className="labels-Y">
                                <div className="var-radio-div-vader">
                                    <div className="labels-lime">varOne: </div>
                                    <div>
                                        <input checked={this.state.x_func === "cos"} className="radio" onChange={this.update("x_func")} name="varX" type="radio" value="cos" />
                                        <label className="labels">cos</label>
                                        <input checked={this.state.x_func === "sin"} className="radio" onChange={this.update("x_func")} name="varX" type="radio" value="sin" />
                                        <label className="labels">sin</label>
                                        <input checked={this.state.x_func === "tan"} className="radio" onChange={this.update("x_func")} name="varX" type="radio" value="tan" />
                                        <label className="labels">tan</label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="select-formula">
                            <div className="math-formula" id="width-formula">
                                <MathJax.Node>{texY}</MathJax.Node>
                            </div>
                            <label className="labels-Y">
                                <div className="var-radio-div-vader">
                                    <div className="labels-lime">varTwo: </div>
                                    <div>
                                        <input checked={this.state.y_func === "cos"} className="radio" onChange={this.update("y_func")} name="varY" type="radio" value="cos" />
                                        <label className="labels">cos</label>
                                        <input checked={this.state.y_func === "sin"} className="radio" onChange={this.update("y_func")} name="varY" type="radio" value="sin" />
                                        <label className="labels">sin</label>
                                        <input checked={this.state.y_func === "tan"} className="radio" onChange={this.update("y_func")} name="varY" type="radio" value="tan" />
                                        <label className="labels">tan</label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div
                            id="update-id"
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

export default connect(mSTP, mDTP)(coolButterfly)