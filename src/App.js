import React, { Component } from 'react';
import Bouton from './components/Bouton';
import Score from './components/Score'
import './App.css'
import Grille from './components/Grille';


class App extends Component {
  render() {
    return (
      <div>
        <h1>2048</h1>
        <Bouton className="bouton-new"/>
        <Score/>
        <div className="cases">

        </div>
        <Grille />
      </div>
    );
  }
}

export default App
