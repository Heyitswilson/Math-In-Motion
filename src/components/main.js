import React from 'react';
import DemoView from './demo_view';
// import

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef();
    this.runDemoView = this.runDemoView.bind(this);
    // let {ctx} = props;
    // this.canvas = this.canvasRef.current
    // this.context = canvas.getContext('2d');
    // this.Demoview = new DemoView(context)
    this.canvas = null;
    this.context = null;
    this.Demoview = null;
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext('2d');
    
    // context.fillRect(0, 0, 800, 600);
    this.Demoview = new DemoView(this.context)
  }



      runDemoView () {
        // console.log("running"

        this.Demoview.coolButterfly(800, 600)
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
                  Inspired by the neon colors of cyberpunk artworks, Bounce is an
                  interactive, visual presentation that is best paired with lofi
                  music.
                  <br />
                  <br />
                  The large particles oscillate a set distance determined by where
                  you click inside the canvas. Clicking towards the top left
                  corner sets a shorter distance, while clicking towards the
                  bottom right corner sets a longer distance.
                </div>
                <br />
                <div className="music-div">
                  <select value="hi">
                    <option selected>Choose a graph</option>
                    <option value="sin">Sin</option>
                    <option value="doubleSin">Double Sin</option>
                    <option value="butterflyCurve">Butterfly Curve</option>
                    <option value="coolerButterflyCurve">Cooler Butterfly Curve</option>
                  </select>
                  <button onClick={() => this.runDemoView()}>
                    RUN
                  </button>
                </div>
                <div className="credit-div">
                  <div className="credit">Music: "Take me away" - WYS</div>
                  <div className="credit">Art: Cyberpunk 2077</div>
                </div>
              </div>
            </div>
            <canvas width="800" height="600" id="canvas" ref={this.canvasRef}>
            </canvas>
          </div>
        </div>
      );
    }
}


export default Main