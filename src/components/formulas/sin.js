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
        this.props.receiveGraph("Sine")
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
            $(".update-changes").addClass("disabled-button");
            $(".input-slider").prop("disabled", true);
            $(".radio").prop("disabled", true);

            } else {
                clearInterval(sinInterval);
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
        const texX = `\\color{white}{x(t) = \\frac{t}{\\color{aqua}{varX}}}`;
        const texY = `\\color{white}{y(t) = t(\\frac{4\\Pi}{\\color{aqua}{varY}})}`;

        return (
          <div>
            <div className="slider-div">
              <div className="buttons"></div>
            </div>
            <MathJax.Context input="tex" >
              <div className="slider-formula-parent">
                <div className="slider-formula">
                  <div className="math-formula">
                    <MathJax.Node>{texX}</MathJax.Node>
                  </div>
                  <label className="labels-X">
                    <input
                      className="input-slider"
                      onChange={this.update("x_val")}
                      type="range"
                      min={50}
                      max={210}
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
                      className="input-slider"
                      onChange={this.update("y_val")}
                      type="range"
                      min={50}
                      max={210}
                      value={this.state.y_val}
                    />
                    <div className="var-div">
                      <div className="labels-lime">
                        varY: 
                      </div>
                      <div className="var">{varY}</div>
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