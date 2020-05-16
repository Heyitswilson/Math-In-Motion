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
      graph_types: [
        "Sine",
        "Double Sine",
        "Butterfly Curve",
        "Darth Vader",
        "Abstract Green",
        "Abstract White",
        "DNA Twists"
      ]
    }

    this.renderSwitch = this.renderSwitch.bind(this);
  }
    
    renderSwitch () {
        switch(this.props.graph) {
            case "Sine":
              return <Sin />
            case "Double Sine":
              return <DoubleSin />
            case "Butterfly Curve":
              return <Butterfly /> 
            case "Darth Vader":
              return <CoolButterfly />
            case "Abstract Green":
              return <Ring />
            case "Abstract White":
              return <Donut />
            case "DNA Twists":
              return <Twist />
        }
    }

    render () {
      return (
          <div className="test">
              <DropdownContainer title={this.props.graph} list={this.state.graph_types}/>
              {this.renderSwitch(this.props.graph)}
          </div>
      )
    }

}

export default Formula