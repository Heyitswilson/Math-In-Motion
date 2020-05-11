import React from 'react';
import DemoView from './demo_view';
import $ from "jquery";
// import { Fraction, toTex } from "algebra.js";
import Formula from './formula'

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: ""
    }

    this.canvasRef = React.createRef();
    this.runDemoView = this.runDemoView.bind(this);
    // this.selectGraph = this.selectGraph.bind(this);
    this.update = this.update.bind(this);

    this.canvas = null;
    this.context = null;
    this.Demoview = null;
  }

  update(field) {
   this.setState({
      [field]: $("select option:selected").val()
    })
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext('2d');
    this.Demoview = new DemoView(this.context)
  }

  runDemoView () {
    let graph = this.state.graph;
    let ctx = this.Demoview.ctx;
    // this.Demoview.twist(800, 600)
    ctx.clearRect(0, 0, 800, 600);
    this.Demoview[this.state.graph](800, 600);
  }

  render () {

    return (
      <div>
        <div className="screen-div">
          <div className="background">
            <div className="background-div">
              <div className="header">
                <div>
                  <h1 className="title">Bounce</h1>
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
              <div className="intro">
                {/* Inspired by the neon colors of cyberpunk artworks, Bounce is an
                interactive, visual presentation that is best paired with lofi
                music. */}
                <br />
                <br />
              </div>
              <br />
              <div className="music-div">
                {/* {this.runDemoView()}q */}
                <select onChange={() => this.update("graph")}>
                  <option defaultValue>Choose a graph</option>
                  <option value="sin">Sin</option>
                  <option value="doubleSin">Double Sin</option>
                  <option value="butterfly">Butterfly Curve</option>
                  <option value="coolButterfly">
                    Darth Vader Look-a-like
                  </option>
                  <option value="ring">Ring</option>
                  <option value="donut">Donut</option>
                  <option value="twist">Twist</option>
                </select>
                <button className="run" onClick={() => this.runDemoView()}>
                  RUN
                </button>
              </div>
              <div className="credit-div">
                {/* <div className="credit">Art: Cyberpunk 2077</div> */}

                <div className="labels">
                  <Formula graph={this.state.graph} /> 
                </div>
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


export default Main