import React, { Component } from 'react';
import Bouton from './components/Bouton';
import Score from './components/Score'
import './App.css'
import Grille from './components/Grille';


class App extends Component {
  constructor() {
    super()

    this.state = {
        grille: [
            
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ]   
    }
    this.reset = this.reset.bind(this)
}
  reset() {
    this.setState({
        grille: [
            
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ]   
    })
  }

  render() {
    return (
      <div>
        <h1>2048</h1>
        <Bouton className="bouton-new" reset={this.reset}/>
        <Score/>
        <div className="cases">

        </div>
        <Grille grille={this.state.grille}/>
      </div>
    );
  }
}

export default App
