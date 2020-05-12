import React from 'react';
import DemoView from './demo_view';
import Formula from './formulas/formula_container';
import { connect } from "react-redux";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: ""
    }

    this.canvasRef = React.createRef();
    this.runDemoView = this.runDemoView.bind(this);

    this.canvas = null;
    this.context = null;
    this.Demoview = null;
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext('2d');
    this.Demoview = new DemoView(this.context)
  }

  runDemoView () {
    let ctx = this.Demoview.ctx;
    ctx.clearRect(0, 0, 800, 600);
    this.Demoview[this.props.graph](800, 600);
  }

  render () {

    return (
      <div>
        <div className="screen-div">
          <div className="background">
            <div className="background-div">
              <div className="music-div">
                <button className="run" onClick={() => this.runDemoView()}>
                  RUN
                </button>
              </div>
              <div className="credit-div">
                <div className="labels">
                  <Formula /> 
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

const mSTP = state => ({
  graph: state.graph
})


export default connect(mSTP, null) (Main)