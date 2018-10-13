import React, { Component } from "react";

import "./App.css";
import Ourprograms from "./components/ourPrograms";
import Numbersection from "./components/numbers";
import Sessions from "./components/sessions";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <div className="container-fluid">
            <div className="row">
              <Ourprograms />
            </div>
            <div className="row">
              <Numbersection />
            </div>
            <div className="row">
              <Sessions />
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
