import React from 'react';
import Sin from './sin';
import DoubleSin from './double_sin';
import Butterfly from './butterfly';
import CoolButterfly from './cool_butterfly';
import Ring from './ring';
import Donut from './donut';
import Twist from './twist';
import DropdownContainer from '../dropdown/dropdown_container'


class Formula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: "",
      graph_types: [
        {name: "Select a graph", graph: ""},
        {name: "Sine", graph: "sin"},
        {name: "Double Sine", graph: "doubleSin"},
        {name: "Butterfly Curve", graph: "butterfly"},
        {name: "Possibly Darth Vader", graph: "coolButterfly"},
        {name: "Abstract Green", graph: "ring"},
        {name: "Abstract White", graph: "donut"},
        {name: "DNA Twists", graph: "twists"}
      ]
    }
    
    this.renderSwitch = this.renderSwitch.bind(this);
  }
    
    renderSwitch () {
        switch(this.props.graph) {
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
          <div className="test">
              <DropdownContainer onChange={() => this.update("graph")} title={"Select a graph"} list={this.state.graph_types}/>
              {this.renderSwitch(this.state.graph)}
          </div>
      )
    }

}

export default Formula