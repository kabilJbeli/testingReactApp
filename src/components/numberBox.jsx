import React, { Component } from "react";
class Numberbox extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-2 col-xs-12  col-sm-12 numbers">
          <strong className="fullNumber"> {this.props.number} </strong>
          <p className="uppercase">{this.props.description}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Numberbox;
