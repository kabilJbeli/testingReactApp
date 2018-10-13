import React, { Component } from "react";
import Sessionbox from "./places";
class Sessions extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="col-md-12 sessionTitle">Ou se passent les sessions?</h1>
        <p className="col-md-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fermentum ornare justo non fermentum. Pellentesque semper vulputate
          facilisis. Praesent ullamcorper faucibus lobortis. Sed maximus leo a
          nunc placerat, quis iaculis leo maximus.
        </p>
        <Sessionbox
          ville="Tunis"
          img="https://admin.freetour.com/images/tours/5657/ancient-and-modern-tunis-24.jpg"
        />
        <Sessionbox
          ville="Sfax"
          img="https://i.ytimg.com/vi/GwFTPhm-9xQ/maxresdefault.jpg"
        />
        <Sessionbox
          ville="Sousse"
          img="https://www.alibabuy.com/photos/library/1500/14216.jpg"
        />
      </React.Fragment>
    );
  }
}

export default Sessions;
