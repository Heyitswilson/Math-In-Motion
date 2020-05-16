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
        this.props.receiveGraph("Double Sine")
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
            $(".update-changes").addClass("disabled-button");
            $(".input-slider").prop("disabled", true);
            $(".radio").prop("disabled", true);
          } else {
                clearInterval(doubleSinInterval);
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
        let varX = this.state.x_val;
        let varY = this.state.y_val;
        const texX = `x(t) = \\frac{t}{\\color{aqua}{varX}}`;
        const texY = `y(t) = t(\\frac{4\\Pi}{\\color{aqua}{varY}})`;
        return (
          <div>
            {/* <div className="horizontal-line"></div> */}
            <MathJax.Context input="tex">
              <div className="slider-formula-parent-dSin">
                <div className="slider-formula">
                  <div className="math-formula">
                    <MathJax.Node>{texX}</MathJax.Node>
                  </div>
                  <label className="labels-X">
                    <input
                      onChange={this.update("x_val")}
                      type="range"
                      className="input-slider"
                      min="50"
                      max="500"
                      value={this.state.x_val}
                    />
                    <div className="var-div">
                      <div className="labels-lime">varX: </div>
                      <div className="var">{varX}</div>
                    </div>
                  </label>
                </div>
                <div className="slider-formula">
                  <div className="math-formula">
                    <MathJax.Node>{texY}</MathJax.Node>
                  </div>
                  <label className="labels-X">
                    <input
                      onChange={this.update("y_val")}
                      type="range"
                      className="input-slider"
                      min="50"
                      max="500"
                      value={this.state.y_val}
                    />
                    <div className="var-div">
                     <div className="labels-lime">varY: </div>
                      <div className="var">{varY}</div>
                    </div>
                  </label>
                </div>
                <div className="slider-formula-frame">
                  <label className="labels">
                    <input
                      onChange={this.update("frames")}
                      type="range"
                      className="input-slider"
                      min="130"
                      max="200"
                      value={this.state.frames}
                    />
                    <div className="var-div">
                      <div className="labels">Frames: </div>
                      <div className="labels-frame">  {this.state.frames} </div>
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