import React, { Component } from "react";
class Sessionbox extends Component {
  state = {};
  render() {
    const imgStyle = {
      width: "100%"
    };
    const imgContainer = {
      width: "100%",
      height: "180px",
      overflow: "hidden"
    };
    const placeholder = {
      padding: "10px",
      color: "#000",
      fontSize: "18px"
    };
    return (
      <React.Fragment>
        <div className="col-md-4">
          <div style={imgContainer}>
            <img style={imgStyle} src={this.props.img} alt="" />
          </div>
          <div style={placeholder}>{this.props.ville}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sessionbox;
