import React, { Component } from 'react'
import Button from './components/Bouton';
import Grille from './components/Grille';
import './App.css'
import Score from './components/Score'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      position : "",
      grille: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      moves: 0,
      score: 0,
      isOver: false,
    } 

    // this.onclickMove=this.onclickMove.bind(this)
    this.onclickStart=this.onclickStart.bind(this)
    this.onclickReset=this.onclickReset.bind(this)
    this.compress = this.compress.bind(this)
    this.compressVertical = this.compressVertical.bind(this)
    this.merge = this.merge.bind(this)
    this.mergeVertical = this.mergeVertical.bind(this)
    this.randomizeGrid = this.randomizeGrid.bind(this)
    this.randomizeNumber = this.randomizeNumber.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveDown = this.moveDown.bind(this)
    this.counter1 = this.counter1.bind(this)
    this.counter2 = this.counter2.bind(this)
  }

  // RANDOM NUMBERS
  
  reset() {
    this.setState({
        grille: [
         
          [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        score: 0,
        moves:0
    })
  }

  randomizeGrid(){
        
        let ligne_du_premier_2=Math.floor(Math.random()*4); 
        let colone_du_premier_2=Math.floor(Math.random()*4);
    
        const newGrille = this.state.grille
        newGrille[ligne_du_premier_2][colone_du_premier_2] = 2
        
        this.setState({grille: newGrille})
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
    
  // START 
    
  onclickStart() {
    this.reset()
    this.randomizeGrid()
    this.randomizeGrid()
  }

  onclickReset(){
    this.reset()
  }

  // COMPRESSIONS

  compress(direction) {
    const board = [...this.state.grille]
    const newBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]      

    for (let i = 0; i < board.length; i++) {
      if (direction === "left") {
        let colIndex = 0
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] !== 0) {
            newBoard[i][colIndex] = board[i][j];
            colIndex++;
          }
        }
      } else {
        let colIndex = 3
        for (let j = 3; j >= 0; j--) {
          if (board[i][j] !== 0) {
            newBoard[i][colIndex] = board[i][j];
            colIndex--
          }
        }
      }
    }
    this.setState({ 
      grille: newBoard,
      moves : this.state.moves +1
    })
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
      if(direction === "up") {
        let rowIndex = 0
        for (let j = 0; j < board[i].length; j++) {
          if (board[j][i] !== 0) {
            newBoard[rowIndex][i] = board[j][i];
            rowIndex++;
          }
        }
      } else {
        let rowIndex = 3
        for (let j = 3; j >= 0; j--) {
          if (board[j][i] !== 0) {
            newBoard[rowIndex][i] = board[j][i];
            rowIndex--;
          }
        }
      }
      this.setState({
        grille: newBoard ,
        moves : this.state.moves +1
      })
    }
  }

// UNION 

  merge(direction) {
    const board = [...this.state.grille]
    const factor = direction === "left" ? 1 : -1

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + factor]) {
          board[i][j] = board[i][j] * 2
          board[i][j + factor] = 0
          this.setState({
            score : this.state.score += board[j][i],
            
          })
          break;
        } 
      }
    }
  }

  mergeVertical(direction) {
    const board = [...this.state.grille]
    const factor = direction === "up" ? 1 : -1
    const limit =  direction === "up" ? board.length - 1 : board.length
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < limit; j++) {
        if (board[j + factor] && board[j][i] !== 0 && board[j][i] === board[j + factor][i]) {
          board[j][i] = board[j][i] * 2
          board[j + factor][i] = 0
          this.setState({
            score : this.state.score += board[j][i],
            
          })
          break;
        }
      }
    }
  }

// COUNTER
  
  counter1() {
    const grille = this.state.grille
    let counterP = 0

    for(let i = 0; i < grille.length; i++) {
      for(let j = 0; j < grille[i].length; j++) {
        if (grille[i][j] !== 0) {
          counterP += grille[i][j]
        }
      }
    }
    console.log("counter1:", counterP)
  }

  counter2() {
    const grille = this.state.grille
    let counterD = 0

    for(let i = 0; i < grille.length; i++) {
      for(let j = 0; j < grille[i].length; j++) {
        if (grille[i][j] !== 0) {
          counterD += grille[i][j]
        }
      }
    }
    console.log("counter2:", counterD)
  }

  isGameOver(){
    this.counter2()
    if (this.counter1() < this.counter2) {
      this.setState({ isOver: true})
    } else {
      this.setState({ isOver: false})
    }
  }

// MOUVEMENT

  move(direction) {
    if (direction === "left" || direction === "right") {
      this.compress(direction)
      this.merge(direction)
      this.compress(direction)
    } else {
      this.compressVertical(direction)
      this.mergeVertical(direction)
      this.compressVertical(direction)
    }
  }

  moveLeft(){
    this.counter1()
    this.move("left")
    this.randomizeNumber()
    this.isGameOver()
  }
  
  moveRight(){
    this.counter1()
    this.move("right")
    this.randomizeNumber()
    this.isGameOver()
  }
  
  moveDown(){
    this.counter1()
    this.move("down")
    this.randomizeNumber()
    this.isGameOver()
  }
  
  moveUp() {
    this.counter1()
    this.move("up")
    this.randomizeNumber()
    this.isGameOver()
  }

  componentDidMount() {
    window.addEventListener("keyup", e => {
      var key = e.keyCode;
      if(key === 37 || key === 65 || key === 81) this.moveLeft() // Q - A
      if(key === 39 || key === 68) this.moveRight() // D
      if(key === 38 || key === 87 || key === 90) this.moveUp() // Z - W 
      if(key === 40 || key === 83) this.moveDown() // S
    })
  }

  // TIMER

  
 



  render() {
    // console.log(this.state.isMerging)
    // console.log(this.merge())
    return (
      <>
      <div className="titre">
        <div>
          2
        </div>
        <div>
          0
        </div>
        <div>
          4
        </div>
        <div>
          8
        </div>
      </div>
      
      <div className="main_container">
          <Score 
            className="score start_buttons move" 
            score={this.state.score}
            moves={this.state.moves}
          />
          <Button 
            className="start start_buttons" 
            label= "New" 
            onclick={this.onclickStart}
          />
          <Button  
            className="reset start_buttons" 
            label= "Reset" 
            onclick={this.onclickReset} 
          />
          {!this.state.isOver ? 
          <div>
            <Grille grille= {this.state.grille}/>
          </div> 
          :
          <div>
            <p className="filter">Game Over</p>
            <Grille grille= {this.state.grille}/>
          </div>
          }

        <div className="button_container">
          <Button 
            className="btn_top" 
            label= "↑" 
            onclick={this.moveUp} 
          />
          <Button 
            className="btn_bottom" 
            label= "↓" 
            onclick={this.moveDown}
          />
          <Button 
            className="btn_left" 
            label= "←" 
            onclick={this.moveLeft} 
          />
          <Button 
            className="btn_right" 
            label= "→" 
            onclick={this.moveRight} 
          />
        </div>

        <div className="timer">
          <h2>Timer :</h2>
          <p>{`00:00:00`}</p>
          
        </div>
      </div>
    </>
    )
  }
}


