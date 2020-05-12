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
          <option value="coolButterfly">
            Darth Vader Look-a-like
                    </option>
          <option value="ring">Ring</option>
          <option value="donut">Donut</option>
          <option value="twist">Twist</option>
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
        switch(param) {
            case "sin":
                return <Sin />
            case "doubleSin":
                return <DoubleSin />
            case "butterfly": 
                return <Butterfly /> 
            case "coolButterfly":
                return <CoolButterfly />
            case "ring":
                return <Ring />
            case "donut":
                return <Donut />
            case "twist":
                return <Twist />
        }
    }

    render () {
      return (
          <div>
              {this.options()}
              {this.renderSwitch(this.state.graph)}
          </div>
      )
    }

}

export default Formula