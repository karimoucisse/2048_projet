import React, { Component } from 'react'
import Button from './components/Bouton';
import Grille from './components/Grille';
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      position : " "
    } 
    // this.onclickMove=this.onclickMove.bind(this)
    this.onClickStart=this.onclickStart.bind(this)
  }
  // onclickMove(label) {
  //   this.setState({position : label})
  //   console.log(label);
  // }
  onclickStart() {
    console.log('salut');
  }
  
  render() {
    console.log(`position: ${this.state.position}`);
    return (
      <>
        <div>
          <Button label= "top" />
          <Button label= "bottom" />
          <Button label= "left" />
          <Button label= "right" />
        </div>
        {/* <div className={`block ${this.state.position === "left" && "block_left"}
          ${this.state.position === "right" && "block_right"}
          ${this.state.position === "top" && "block_top"}
          ${this.state.position === "bottom" && "block_bottom"}
        `}>
          block
        </div> */}
        <div>
          <Grille />
        </div>
        <Button label= "start" onclickStart={this.onclickStart}/>
      </>
    )
  }
}




