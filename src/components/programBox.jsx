import React, { Component } from "react";
class Boxprogram extends Component {
  state = {};
  render() {
    const tt = {
      backgroundColor: this.props.color,
      color: "#fff",
      padding: "15px",
      minHeight: "380px",
      paddingTop: "40px",
      paddingBottom: "40px"
    };
    return (
      <React.Fragment>
        <div className="col-md-3 col-xs-12  col-sm-12">
          <div style={tt}>
            <div className="programTitle single-program">
              {this.props.title}
            </div>
            <span className="separator" />
            <p className="programSubTitle">{this.props.contents}</p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="prg-btn Blue-box-color"
              href={this.props.link}
            >
              En savoir plus
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Boxprogram;
