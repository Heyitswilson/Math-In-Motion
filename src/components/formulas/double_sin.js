import React from 'react';
import MathJax from "react-mathjax2";
import { connect } from "react-redux";
import { receiveX, receiveY, receiveGraph, clear, receiveFrame } from '../../actions/graph_actions'
import $ from "jquery";

class doubleSin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          x_val: 120,
          y_val: 120,
          frames: 130
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.animation = this.animation.bind(this);
        this.rgb = this.rgb.bind(this);
    }

    componentDidMount() {
        this.props.receiveGraph("doubleSin")
    }

    componentWillUnmount() {
        this.props.clear()
    }

    rgb(t) {
        function r(t) {
            return 100 + Math.tan(t / 300) * 200;
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
        return Math.sin(t * ((10 * Math.PI) / that.state.x_val)) * (-800 / 4) + 800 / 2;
        };

        let y = function (t) {
        return Math.sin((t * (8 * Math.PI)) / that.state.y_val) * (-600 / 4) + 600 / 2;
        };

        this.props.context.beginPath();
        this.props.context.moveTo(x(t), y(t));
        this.props.context.lineTo(x(t + 1), y(t + 1));
        this.props.context.stroke();
    }

    handleSubmit() {
        this.props.receiveX(this.state.x_val);
        this.props.receiveY(this.state.y_val);
        let t = 0;

        this.props.context.clearRect(0, 0, 800, 600);

        let doubleSinInterval = setInterval(() => {
          this.props.context.strokeStyle = this.rgb(t)

          t += 1;
          if (t < this.state.frames) {
            this.animation(t);
            $(".update-changes").prop("disabled", true);
            $(".input-slider").prop("disabled", true);
            $(".select-func").prop("disabled", true);
          } else {
                clearInterval(doubleSinInterval);
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
                  <input
                    onChange={this.update("x_val")}
                    type="range"
                    className="input-slider"
                    min="50"
                    max="500"
                    value={this.state.x_val}
                  />
                </label>
                <label className="labels-Y">
                  Y
                  <input
                    onChange={this.update("y_val")}
                    type="range"
                    className="input-slider"
                    min="50"
                    max="500"
                    value={this.state.y_val}
                  />
                </label>
                <label className="labels">
                  Animation Frames
                  <input
                    onChange={this.update("frames")}
                    type="range"
                    className="input-slider"
                    min="130"
                    max="200"
                    value={this.state.frames}
                  />
                </label>
              </div>
              <div className="buttons">
                <button
                  className="update-changes"
                  onClick={() => this.handleSubmit()}
                >
                  Run
                </button>
              </div>
            </div>
            <MathJax.Context input="tex">
              <div className="labels">
                <MathJax.Node>{texX}</MathJax.Node>
                <MathJax.Node>{texY}</MathJax.Node>
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
    x: state.x,
    y: state.y,
    graph: state.graph,
    frames: state.frames,
    context: state.context
})

const mDTP = dispatch => ({
    receiveX: x=> dispatch(receiveX(x)),
    receiveY: y=> dispatch(receiveY(y)),
    receiveGraph: graph => dispatch(receiveGraph(graph)),
    receiveFrame: frames => dispatch(receiveFrame(frames)),
    clear: () => dispatch(clear())
})

export default connect(mSTP, mDTP)(doubleSin)