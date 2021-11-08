import React, { Component } from 'react'
import Button from './components/Bouton';
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      // top : block_top,
      // bottom : block_bottom,
      // left : block_left,
      // right : block_right,
      position : " "
    } 
    this.onclickMove=this.onclickMove.bind(this)
  }
  onclickMove(label) {
    // this.setState = ({position : label})
    this.setState({position : label})
    console.log(label);
  }
  
  render() {
    console.log(`position: ${this.state.position}`);
    return (
      <>
        <div>
          <Button label= "top" onClickMove={this.onclickMove}/>
          <Button label= "bottom" onClickMove={this.onclickMove}/>
          <Button label= "left" onClickMove={this.onclickMove}/>
          <Button label= "right" onClickMove={this.onclickMove}/>
        </div>
        <div className={`block ${this.state.position === "left" && "block_left"}
          ${this.state.position === "right" && "block_right"}
          ${this.state.position === "top" && "block_top"}
          ${this.state.position === "bottom" && "block_bottom"}
        `}>
          block
        </div>
      </>
    )
  }
}
