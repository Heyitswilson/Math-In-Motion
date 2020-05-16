import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions';
import $ from 'jquery';

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
        this.props.receiveGraph("Butterfly Curve");
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
                $(".update-changes").addClass("disabled-button");
                $(".input-slider").prop("disabled", true);
                $(".radio").prop("disabled", true);

            } else {
                clearInterval(butterflyInterval);
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
        const texX = `x(t) = \\sin(t)(e^{\\color{aqua}{varX}(t)} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;
        const texY = `y(t) = \\cos(t)(e^{\\color{aqua}{varY}(t)} - 2(\\cos(4t)) - sin(\\frac{t}{12})^5)`;

        return (
            <div>   
                <div className="slider-div">
                </div>
                <MathJax.Context input="tex">
                    <div className="slider-formula-parent-dSin">
                        <div className="select-formula">
                            <div className="math-formula" id="width-formula">
                                <MathJax.Node>{texX}</MathJax.Node>
                            </div>
                            <label className="labels-Y">
                                <div className="var-radio-div">
                                    <div className="labels-lime">varX: </div> 
                                    <div>
                                        <input checked={this.state.x_func === "cos"} className="radio" onChange={this.update("x_func")} name="varX" type="radio" value="cos"/>
                                        <label className="labels">cos</label>
                                        <input checked={this.state.x_func === "sin"} className="radio" onChange={this.update("x_func")} name="varX" type="radio" value="sin"/>
                                        <label className="labels">sin</label>
                                        <input checked={this.state.x_func === "tan"} className="radio" onChange={this.update("x_func")} name="varX" type="radio" value="tan"/>
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
                                <div className="var-radio-div">
                                    <div className="labels-lime">varY: </div>
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
                            className="update-changes"
                            id="update-id"
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