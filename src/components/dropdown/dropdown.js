import React from 'react';
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: "",
      listOpen: false,
      title: this.props.title,
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.listDiv = this.listDiv.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
  }

  updateGraph(item) {
    this.props.receiveGraph(item.graph);
    this.toggleList()
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  listDiv() {
      const { list } = this.props;
      if (this.state.listOpen) {
          return (
              <ul className="graph-select">
                  {list.map(item => {
                      return (
                      <li onClick={() => this.updateGraph(item)} className="graph-li" key={list.indexOf(item)}>
                          {item.name}
                      </li>
                      )
                  })}
              </ul>
          )
      }
  }

  render () {
      const { listOpen, title } = this.state;

      return (
        <div className="graph-wrapper">
          <div className="graph-header" onClick={() => this.toggleList()}>
            <div className="graph-title">{title}</div>
            {listOpen ? (
              <FontAwesomeIcon icon={faAngleUp} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} size="2x" />
            )}
          </div>
          {this.listDiv()}
        </div>
      );
  }
}

export default onClickOutside(Dropdown)