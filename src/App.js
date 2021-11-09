import React, { Component } from 'react'
import Button from './components/Bouton';
import Grille from './components/Grille';
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      position : " ",
      grille: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]   
    } 
    // this.onclickMove=this.onclickMove.bind(this)
    this.onClickStart=this.onclickStart.bind(this)
    this.compress = this.compress.bind(this)
    this.merge = this.merge.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.randomizeGrid= this.randomizeGrid.bind(this);
    // this.reverse= this.reverse.bind(this);
    // this.moveRight = this.moveRight.bind(this)

    this.randomizeGrid()
  }
  // onclickMove(label) {
  //   this.setState({position : label})
  //   console.log(label);
  // }
  randomizeGrid(){
      let ligne_du_premier_2=Math.floor(Math.random()*4); 
      let colone_du_premier_2=Math.floor(Math.random()*4);
      let ligne_du_deuxieme_2=Math.floor(Math.random()*4);
      let colone_du_deuxieme_2=Math.floor(Math.random()*4);
      
      this.setState({grille:this.state.grille[ligne_du_premier_2][colone_du_premier_2]=2})
      this.setState({grille:this.state.grille[ligne_du_deuxieme_2][colone_du_deuxieme_2]=2})
  }

  onclickStart() {
    console.log('salut');
  }

  compress() {
      const board = this.state.grille
      const newBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]

      for (let i = 0; i < board.length; i++) {
        let colIndex = 0;
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] !== 0) {
            newBoard[i][colIndex] = board[i][j];
            colIndex++;
          }
        }
      }
      this.setState({ grille: newBoard })
  }

  merge() {
    const board = this.state.grille
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
          board[i][j] = board[i][j] * 2
          board[i][j + 1] = 0 
        }
      }
    }
    this.setState({ grille: board})
  }

  moveLeft(){
    this.compress()
    this.merge()
    this.compress()
  }

  // reverse() {
  //   const board = this.state.grille
  //   const reverseBoard = [
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0]
  //   ]

  //   for (let i = 0; i < board.length; i++) {
  //     let colIndex = 0;
  //     for (let j = 3; j > board[i].length; j--) {
  //       if (board[i][j] !== 0) {
  //         reverseBoard[i][colIndex] = board[i][j];
  //         colIndex--;
  //       }
  //     }
  //   }
  //   this.setState({ grille: reverseBoard })
  // }

  // moveRight(){
  //   this.reverse()
  // }
  
  render() {
    // console.log(`position: ${this.state.position}`);
    return (
      <>
        <Button label= "start" onclick={this.onclickStart}/>
        <Button label= "reset" />
        {/* <div className={`block ${this.state.position === "left" && "block_left"}
          ${this.state.position === "right" && "block_right"}
          ${this.state.position === "top" && "block_top"}
          ${this.state.position === "bottom" && "block_bottom"}
        `}>
          block
        </div> */}
        <div>
          <Grille grille={this.state.grille} />
        </div>
        <div>
          <Button label= "top" />
          <Button label= "bottom" />
          <Button label= "left" merge={this.moveLeft} grille={this.state.grille}/>
          <Button label= "right" merge={this.moveRight} grille={this.state.grille} />
        </div>
      </>
    )
  }
}