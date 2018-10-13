import React, { Component } from "react";
import Boxprogram from "./programBox";
class Ourprograms extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="col-md-12">Nos programmes</h1>
        <Boxprogram
          title="FULL TIME PROGRAM
"
          link="https://gomycode.tn/full-time"
          color="#daecf3"
          contents="un programme intensif de 3 mois pour devenir dÃ©veloppeur fullstack js ou java. Un coaching technique et professionnel rÃ©gulier et des liens trÃ¨s forts avec le monde de l'entreprise."
        />
        <Boxprogram
          title="PART TIME PROGRAM
"
          link="https://gomycode.tn/part-time"
          color="#fe424d"
          contents="Tu peux dÃ©velopper ton produit technologique pendant l'annÃ©e scolaire si tu es Ã©tudiant ou en parallÃ¨le de ton travail si tu es un professionnel. Ãa se passe tous les weekends (demi-journÃ©e Samedi ou dimanche) dans notre Hackerspace !

"
        />
        <Boxprogram
          title="KIDS CODING PROGRAM
"
          link="https://gomycode.tn/kids"
          color="#1aa6b7"
          contents="Ce programme vise Ã  initier les plus jeunes (8-12 ans) Ã  l'informatique et Ã  la programmation sur 4 niveaux. Un niveau dure 2 mois. Ã la fin du programme, l'enfant doit prÃ©senter son projet au PDG d'une entreprise technologique.
"
        />
        <Boxprogram
          title="SUMMER ACADEMY
"
          link="https://gomycode.tn/summer-academy"
          color="#022d41"
          contents="DÃ©veloppe ton produit technologique pendant 3 semaines pendant l'Ã©tÃ©. Un expÃ©rience trÃ¨s riche d'apprentissage et de rencontres avec des passionnÃ©s de la technologie.
"
        />
      </React.Fragment>
    );
  }
}

export default Ourprograms;
