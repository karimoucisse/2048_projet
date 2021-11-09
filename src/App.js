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
        [0, 2, 2, 0]
      ]   
    } 
    // this.onclickMove=this.onclickMove.bind(this)
    this.onClickStart=this.onclickStart.bind(this)
    this.compress = this.compress.bind(this)
    this.compressVertical = this.compressVertical.bind(this)
    this.merge = this.merge.bind(this)
    this.mergeVertical = this.mergeVertical.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.randomizeGrid= this.randomizeGrid.bind(this);
    this.reverse= this.reverse.bind(this);
    this.moveRight = this.moveRight.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveDown = this.moveDown.bind(this)

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

  compress(direction) {
      const board = [...this.state.grille]
      const newBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]      

      for (let i = 0; i < board.length; i++) {
        let colIndex = direction === "left" ? 0 : 3
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] !== 0) {
            newBoard[i][colIndex] = board[i][j];

            if (direction === "right") {
              colIndex--;
            } else {
              colIndex++;
            }
          }
        }
      }
      this.setState({ grille: newBoard })
  }

  compressVertical(direction) {
    const board = [...this.state.grille]
    const newBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]      

    for (let i = 0; i < board.length; i++) {
      let rowIndex = direction === "up" ? 0 : 3
      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] !== 0) {
          newBoard[rowIndex][i] = board[j][i];

          if (direction === "down") {
            rowIndex--;
          } else {
            rowIndex++;
          }
        }
      }
    }
    this.setState({ grille: newBoard })
}

  merge(direction) {
    const board = [...this.state.grille]
    const factor = direction === "left" ? 1 : -1
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + factor]) {
          board[i][j] = board[i][j] * 2
          board[i][j + factor] = 0
        }

        // for(let k = j; k > 0; k = k + factor) {
        //   if (board[i][j] === board[i][k + factor]) {
        //     board[i][j] = board[i][j] * 2
        //     board[i][k + factor] = 0
        //     matchingValue = true
        //   } 
        // }
      }
    }
    this.setState({ grille: board})
  }

  mergeVertical(direction) {
    const board = [...this.state.grille]
    const factor = direction === "up" ? 1 : -1
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length - 1; j++) {
        if (board[j][i] !== 0 && board[j][i] === board[j + factor][i]) {
          board[j][i] = board[j][i] * 2
          board[j + factor][i] = 0
        }
      }
    }
    this.setState({ grille: board})
  }

  moveLeft(){
    this.compress("left")
    this.merge("left")
    this.compress("left")
  }

  reverse() {
    const board = [...this.state.grille]
    const reverseBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]

    this.compress()
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        reverseBoard[i][j] = board[i][board[i].length - 1 - j]
      }
    }
    this.setState({grille:reverseBoard})
  }

  moveRight(){
    this.compress("right")
    this.merge("right")
    this.compress("right")
  }
  moveDown(){
    this.compress("down")
    this.merge("down")
    this.compress("down")
  }

  moveUp() {
    this.compressVertical("up")
    this.mergeVertical("up")
    this.compressVertical("up")
  }
  
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
          <Button label= "top" move={this.moveUp} />
          <Button label= "bottom" move={this.moveDown} />
          <Button label= "left" move={this.moveLeft} />
          <Button label= "right" move={this.moveRight} />
        </div>
      </>
    )
  }
}