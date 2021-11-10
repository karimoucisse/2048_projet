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
    
    this.onclickStart = this.onclickStart.bind(this)
    this.compress = this.compress.bind(this)
    this.compressVertical = this.compressVertical.bind(this)
    this.merge = this.merge.bind(this)
    this.mergeVertical = this.mergeVertical.bind(this)
    this.moveLeft = this.moveLeft.bind(this)
    this.randomizeGrid = this.randomizeGrid.bind(this)
    this.randomizeNumber = this.randomizeNumber.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveDown = this.moveDown.bind(this)
  }

  // RANDOM NUMBERS

  // randomizeGrid(){
  //     let ligne_du_premier_2=Math.floor(Math.random()*4); 
  //     let colone_du_premier_2=Math.floor(Math.random()*4);
  //     let ligne_du_deuxieme_2=Math.floor(Math.random()*4);
  //     let colone_du_deuxieme_2=Math.floor(Math.random()*4);
  //     const newBoard = [...this.state.grille]
      
  //     newBoard[ligne_du_premier_2][colone_du_premier_2] = 2
  //     newBoard[ligne_du_deuxieme_2][colone_du_deuxieme_2] = 2
  //     this.setState({grille: newBoard})
  // }
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
    this.randomizeGrid()
    this.randomizeGrid()
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
      // if(newBoard != board){
      //   alert('bravo !')
      // }
      this.setState({ grille: newBoard })
    }
    this.setState({ grille: newBoard })
  }
  // Ne pas toucher
  // tester_fin_partie(){ 
  //   const temp=[...this.state.grille];
  //   this.moveLeft();
  //   this.moveRight();
  //   this.moveUp();
  //   this.moveDown();
  //   if(temp==this.state.grille){
  //     console.log("la partie est terminée");
  //   }
  // }

  compressVertical(direction) {
    const board = [...this.state.grille]
    const newBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]      

    // for (let i = 0; i < board.length; i++) {
    //   let rowIndex = direction === "up" ? 0 : 3
    //   for (let j = 0; j < board[i].length; j++) {
    //     if (board[j][i] !== 0) {
    //       newBoard[rowIndex][i] = board[j][i];

    //       if (direction === "down") {
    //         rowIndex--;
    //       } else {
    //         rowIndex++;
    //       }
    //     }
    //   }
    // }
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
      // this.setState({ grille: newBoard })
    
    // fin de partie 8(Ne pas toucher)
    // if(newBoard != board){
    //   alert('Felicitation ta grand Mere peut etre fiere de toi !')
    // }
    this.setState({ grille: newBoard })
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
        }

      }
    }
    
    this.setState({ grille: board})
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
        }
      }
    }
    this.setState({ grille: board })
  }

// MOUVEMENT

  moveLeft(){
    this.randomizeNumber()
    this.compress("left")
    this.merge("left")
    this.compress("left")
  }
  
  moveRight(){
    this.randomizeNumber()
    this.compress("right")
    this.merge("right")
    this.compress("right")
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
    return (
      <>
      <div className="main_container">
        <div className="start_buttons">
          <Button label= "start" onclick={this.onclickStart}/>
          <Button label= "reset" />
        </div>
        
        
        <div>
          <Grille grille= {this.state.grille}/>
        </div>
        
      </div>
        <div className="button_container">
          <Button className="btn_top" label= "top" onclick={this.moveUp} />
          <Button className="btn_bottom" label= "bottom" onclick={this.moveDown} />
          <Button className="btn_left" label= "left" onclick={this.moveLeft} />
          <Button className="btn_right" label= "right" onclick={this.moveRight} />
        </div>
    </>
    )
  }
}





