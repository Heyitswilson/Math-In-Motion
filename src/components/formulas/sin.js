import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear } from '../../actions/graph_actions';
import $ from "jquery";

class Sin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x_val: 120,
            y_val: 120,
            x_pos: null
        }
        
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.animation = this.animation.bind(this);
        
    }

    componentDidMount() {
        this.props.receiveGraph("sin")
    }

    componentWillUnmount() {
        this.props.clear()
    }

    animation(t) {
        this.props.context.strokeStyle = `#00ffff`;
        this.props.context.lineWidth = 1;
        let that = this;
        let x = function (t) {
            return (800 * t) / that.state.x_val;
        };

        let y = function (t) {
            return Math.sin((t * (4 * Math.PI)) / that.state.y_val) * (-600 / 4) + 600 / 2;
        };
        this.state.x_pos = x(t)

        this.props.context.beginPath();
        this.props.context.moveTo(x(t), y(t));
        this.props.context.lineTo(x(t + 1), y(t + 1));
        this.props.context.stroke();
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_val);
        this.props.receiveY(this.state.y_val);
        this.state.x_pos = 0
        this.props.context.clearRect(0, 0, 800, 600);


        let t = 0;
        let that = this;
        let sinInterval = setInterval(() => {
          t += 1;
          if (that.state.x_pos < 800) {
              that.animation(t);
              $(".update-changes").prop("disabled", true);
            $(".input-slider").prop("disabled", true);
            $(".select-func").prop("disabled", true);

            } else {
                clearInterval(sinInterval);
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
        const texX = `x(t) = \\frac{t}{\\color{yellow}{${this.state.x_val}}}`;
        const texY = `y(t) = t(\\frac{4\\Pi}{\\color{lime}{${this.state.y_val}}})`;

        return (
            <div>
                <div className="slider-div">
                    <div>
                        <label className="labels-X">
                            X
                            <input className="input-slider" onChange={this.update("x_val")} type="range" min={50} max={500} value={this.state.x_val} />
                        </label>
                        <label className="labels-Y">
                            Y
                            <input className="input-slider" onChange={this.update("y_val")} type="range" min={50} max={500} value={this.state.y_val} />
                        </label>

                    </div>
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

const mSTP = (state) => ({
    x: state.x,
    y: state.y,
    graph: state.graph,
    context: state.context,
});

const mDTP = dispatch => ({
    receiveX: x => dispatch(receiveX(x)),
    receiveY: y => dispatch(receiveY(y)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP) (Sin)