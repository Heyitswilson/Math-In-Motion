import React from 'react';
// import MathJax from "react-mathjax2";
import Sin from './sin';
import DoubleSin from './double_sin';
import Butterfly from './butterfly';
import CoolButterfly from './cool_butterfly';
import Ring from './ring';
import Donut from './donut';
import Twist from './twist';
import $ from "jquery";


class Formula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: ""
    }

    this.update = this.update.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.options = this.options.bind(this);
  }

    options() {
      return (
        <select className="graph-select" onChange={() => this.update("graph")}>
          <option defaultValue>Choose a graph</option>
          <option value="sin">Sin</option>
          <option value="doubleSin">Double Sin</option>
          <option value="butterfly">Butterfly Curve</option>
          <option value="coolButterfly">Cool Butterfly</option>
          <option value="ring">Ring</option>
          <option value="donut">Donut</option>
          <option value="twist">DNA Twist</option>
        </select>
      )
    }

  update(field) {
    this.setState({
      [field]: $(".graph-select option:selected").val()
    })
  }
    
    renderSwitch (param) {
      // const { receiveGraph, clear } = this.props;
      // debugger
        switch(param) {
            case "sin":
                return <Sin runDemoView={this.props.runDemoView}/>
            case "doubleSin":
            return <DoubleSin runDemoView={this.props.runDemoView}/>
            case "butterfly": 
            return <Butterfly runDemoView={this.props.runDemoView}/> 
            case "coolButterfly":
            return <CoolButterfly runDemoView={this.props.runDemoView}/>
            case "ring":
            return <Ring runDemoView={this.props.runDemoView}/>
            case "donut":
            return <Donut runDemoView={this.props.runDemoView}/>
            case "twist":
            return <Twist runDemoView={this.props.runDemoView}/>
        }
    }

    render () {
      return (
          <div >
              <div className="options-div">
                {this.options()}
              </div>
              {this.renderSwitch(this.state.graph)}
          </div>
      )
    }

}

export default Formula