import React, { Component } from 'react'
import Button from './components/Bouton';
import Grille from './components/Grille';
import './App.css'
import Score from './components/Score'

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
    this.onclickStart=this.onclickStart.bind(this)
    this.onclickReset=this.onclickReset.bind(this)
    this.compress = this.compress.bind(this)
    this.compressVertical = this.compressVertical.bind(this)
    this.merge = this.merge.bind(this)
    // this.mergeVertical = this.mergeVertical.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.randomizeGrid= this.randomizeGrid.bind(this);
    this.randomizeNumber= this.randomizeNumber.bind(this);
    // this.reverse= this.reverse.bind(this);
    this.moveRight = this.moveRight.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveDown = this.moveDown.bind(this)

    
    // this.randomizeNumber()
  }

  // onclickMove(label) {
  //   this.setState({position : label})
  //   console.log(label);
  // }
  
  reset() {
    this.setState({
        grille: [
            
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ]   
    })
    }

  randomizeGrid(){
      let ligne_du_premier_2=Math.floor(Math.random()*4); 
      let colone_du_premier_2=Math.floor(Math.random()*4);
      let ligne_du_deuxieme_2=Math.floor(Math.random()*4);
      let colone_du_deuxieme_2=Math.floor(Math.random()*4);
      const newBoard = [...this.state.grille]

      newBoard[ligne_du_premier_2][colone_du_premier_2] = 2
      newBoard[ligne_du_deuxieme_2][colone_du_deuxieme_2] = 2
      this.setState({grille: newBoard})
  }

  randomizeNumber(){
    let ligne_du_premier_2=Math.floor(Math.random()*4); 
    let colone_du_premier_2=Math.floor(Math.random()*4);
    const newBoard = [...this.state.grille]

    if (newBoard[ligne_du_premier_2][colone_du_premier_2] === 0) {
      newBoard[ligne_du_premier_2][colone_du_premier_2] = 2
      this.setState({grille: newBoard})
    } else {
      this.randomizeNumber()
    }
}
    
  onclickStart() {
    this.randomizeGrid()
  }

  onclickReset(){
    this.reset()
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

  reverseBoard = () => {
    const board = [...this.state.grille]
    const reverseBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]  
    
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        reverseBoard[i][j] = board[i][board[i].length - 1 - j];
      }
    }
  
    this.setState({ grille: reverseBoard })
  };

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

  // mergeVertical(direction) {
  //   const board = [...this.state.grille]
  //   const factor = direction === "up" ? 1 : -1
  //   for (let i = 0; i < board.length; i++) {
  //     for (let j = 0; j < board[i].length; j++) {
  //       if (board[j][i] !== 0 && board[j][i] === board[j + factor][i]) {
  //         board[j][i] = board[j][i] * 2
  //         board[j + factor][i] = 0
  //       } 
  //     }
  //   }
  //   this.setState({ grille: board})
  // }

  moveLeft(){
    this.randomizeNumber()
    this.compress("left")
    this.merge("left")
    this.compress("left")
  }

  // reverse() {
  //   const board = [...this.state.grille]
  //   const reverseBoard = [
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0]
  //   ]

  //   this.compress()
  //   for (let i = 0; i < board.length; i++) {
  //     for (let j = 0; j < board[i].length; j++) {
  //       reverseBoard[i][j] = board[i][board[i].length - 1 - j]
  //     }
  //   }
  //   this.setState({grille:reverseBoard})
  // }

  moveRight(){
    this.randomizeNumber()
    this.moveLeft()
    this.reverseBoard()
    // this.compress("right")
    // this.merge("right")
    // this.compress("right")

  }
  moveDown(){
    this.randomizeNumber()
    this.compressVertical("down")
    this.mergeVertical("down")
    this.compressVertical("down")
  }

  moveUp() {
    this.randomizeNumber()
    this.compressVertical("up")
    this.mergeVertical("up")
    this.compressVertical("up")
  }
  
  render() {
    // console.log(`position: ${this.state.position}`);
    return (
      <>
        <Score />
        <Button label= "start" onclick={this.onclickStart} />
        <Button label= "reset" onclick={this.onclickReset}/>
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
          <Button label= "top" onclick={this.moveUp} number={this.randomizeNumber} />
          <Button label= "bottom" onclick={this.moveDown} number={this.randomizeNumber}/>
          <Button label= "left" onclick={this.moveLeft} number={this.randomizeNumber}/>
          <Button label= "right" onclick={this.moveRight} number={this.randomizeNumber}/>

        </div>
      </>
    )
  }
}


