import React, { Component } from "react";
import Numberbox from "./numberBox";
class Numbersection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="backgroundit">
          <section>
            <h1 className="col-md-12">Quelques chifres</h1>
            <Numberbox
              number="+20,000
"
              description="PASSIONNÃS DU DIGITAL
            "
            />
            <Numberbox
              number="+500
"
              description="ÃTUDIANTS DEPUIS LE DÃMARRAGE EN AOÃT 2016
            "
            />
            <Numberbox
              number="+300
"
              description="PRODUITS DÃVELOPPÃS
            "
            />
            <Numberbox
              number="+30
"
              description="INSTRUCTEURS GAME, WEB ET MOBILE
            "
            />
            <Numberbox
              number="+50

"
              description="SPEAKERS
            "
            />
            <Numberbox
              number="400mÂ²

"
              description="DE HACKERSPACE AU COEUR DU LAC 1

            "
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Numbersection;
