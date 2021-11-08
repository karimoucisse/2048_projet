import React, { Component } from 'react';

import Bouton from './components/Bouton';
import Score from './components/Score'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <h1>2048</h1>
        <Bouton className="bouton-new"/>
        <Score/>
        <div className="cases">

        </div>
      </div>
    );
  }
}

export default App;
