import React from 'react';
import DemoView from './demo_view';
import Formula from './formulas/formula_container';
import { connect } from "react-redux";
import { receiveContext } from '../actions/context_actions'


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: ""
    }

    this.canvasRef = React.createRef();
    // this.runDemoView = this.runDemoView.bind(this);

    this.canvas = null;
    this.context = null;
    this.Demoview = null;
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext('2d');
    this.Demoview = new DemoView(this.context)
    this.props.receiveContext(this.Demoview.ctx)
  }

  render () {
    return (
      <div>
        <div className="screen-div">
          <div className="background">
            <div className="header">
              <div>
                <h1 className="title">Math-in-Motion</h1>
              </div>
              <div className="link-space">
                <a
                  className="icon-link"
                  href="https://angel.co/u/wilson-ngu"
                  target="_blank"
                >
                  <img
                    className="icons-a"
                    src="https://studypal-dev.s3-us-west-1.amazonaws.com/angelListIcon.png"
                  />
                </a>
                <a
                  className="icon-link"
                  href="https://github.com/Heyitswilson/Bounce"
                  target="_blank"
                >
                  <img
                    className="icons"
                    src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"
                  />
                </a>
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/wilson-ngu/"
                  target="_blank"
                >
                  <img
                    className="icons"
                    src="https://studypal-dev.s3-us-west-1.amazonaws.com/LinkedInIcon.png"
                  />
                </a>
              </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="intro">
              Math-in-Motion animates graphs of mathematical functions and
              parametrical plots. Try running the animation with default values, then change 
              them to see the effect!
            </div>
            <div className="background-div">
              <div className="credit-div">
                <Formula />
              </div>
            </div>
          </div>
          <canvas
            width="800"
            height="600"
            id="canvas"
            ref={this.canvasRef}
          ></canvas>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  graph: state.graph,
  x: state.x,
  y: state.y,
  t: state.t,
  frames: state.frames
})

const mDTP = dispatch => ({
  receiveContext: context => dispatch(receiveContext(context))
})


export default connect(mSTP, mDTP) (Main)