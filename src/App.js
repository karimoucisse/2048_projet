import React, { Component } from 'react'
import Button from './components/Bouton';
import Grille from './components/Grille';
import './App.css'
import Score from './components/Score'
import Profil from './components/Profil';
import Logos from './components/Logos';
// const Stopwatch = require('statman-stopwatch');
// const stopwatch = new Stopwatch();
// const delta = stopwatch.read()

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
      testCounter1 : 0,
      testCounter2 : 0,
      moves: 0,
      score: 0,
      gridSum: 0,
      isFull: 0,
      isOver: false,
      // on additionne la grille et on injecte le resultats dans temp
      // temp:2020 
      pseudo:"",
      display : false,
      className : "",

      pause : false,
      timer: 0
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
    this.pseudoValue = this.pseudoValue.bind(this)
    this.onclickPseudo = this.onclickPseudo.bind(this)
    this.onclickLogo = this.onclickLogo.bind(this)
    this.onclickPause = this.onclickPause.bind(this)
    this.onClickTakeBackTheParty = this.onClickTakeBackTheParty.bind(this)
  }

  // RANDOM NUMBERS
  
  reset() {
    this.setState({
        grille: [
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]
        ],
        score: 0,
        moves:0,
        isOver: false,
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
    let countNumber = 0
    // prend aletoirement des nombres avec une condition si dans la grille il y a un 0 , il sera remplacé par une deux 
    
    for(let i = 0; i < newBoard.length; i++) {
      for(let j = 0; j < newBoard[i].length; j++) {
        if(newBoard[i][j] !== 0){
          countNumber++
        }
      }
    }

    if(countNumber < 16) {
      if (newBoard[ligne_du_premier_2][colone_du_premier_2] === 0) {
        newBoard[ligne_du_premier_2][colone_du_premier_2] = 2
        this.setState({grille: newBoard})
      } else {
        this.randomizeNumber()
      }
    }

    this.setState({ isFull: countNumber })
  }
    
  // START 
    
  onclickStart() {
    this.reset()
    this.randomizeGrid()
    this.randomizeGrid()
  }
  // stopwatch.start()

  onclickReset(){
    this.reset()
  }
Z
  // COMPRESSIONS
  //  compresse horizentale
  compress(direction) {
    const board = [...this.state.grille]
    const newBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]      
      // prends en constat la premier grille intiale ,puis on cree une nouvelle grille. dans la premier boucle en prends chaque ligne du code,  on fait une condition avec la direction car le col index commence a 0, le col index compare les nombres et leur assigne une position si il cooresponde a notre condition
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
     // this.setState({ grille: newBoard })
    }
    this.setState({ 
      grille: newBoard,
      moves : this.state.moves +1
    })
  }
   //Ne pas toucher
  //   tester_fin_partie(){ 
  //    const temp=[...this.state.grille];
  //    this.moveLeft();
  //    this.moveRight();
  //    this.moveUp();
  //    this.moveDown();
  //    if(temp==this.state.grille){
  //      console.log("la partie est terminée");
  //    }
  //  }

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
  // le merge fait fusionner les numeros
  merge(direction) {
    const board = [...this.state.grille]
    const factor = direction === "left" ? 1 : -1
    let newScore = this.state.score

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + factor]) {
          board[i][j] = board[i][j] * 2
          board[i][j + factor] = 0
          this.setState({ score : this.state.score += board[j][i] })
          break;
        } 
      }
    }
    
    this.setState({ grille: board})
  }

  mergeVertical(direction) {
    const board = [...this.state.grille]
    let newScore = this.state.score
    const factor = direction === "up" ? 1 : -1
    const limit =  direction === "up" ? board.length - 1 : board.length
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < limit; j++) {
        if (board[j + factor] && board[j][i] !== 0 && board[j][i] === board[j + factor][i]) {
          board[j][i] = board[j][i] * 2
          board[j + factor][i] = 0
          this.setState({ score : newScore += board[j][i] })
          break;
        }
      }
    }
  }

// MOUVEMENT

  // move(direction) {
  //   if (direction === "left" || direction === "right") {
  //     this.compress(direction)
  //     this.merge(direction)
  //     this.compress(direction)
  //   } else if (direction === "up" || direction === "down"){
  //     this.compressVertical(direction)
  //     this.mergeVertical(direction)
  //     this.compressVertical(direction)
  //   }
  // }

  moveLeft(){
    this.compress("left")
    this.merge("left")
    this.compress("left")
    this.randomizeNumber()
    this.calculateGrid()
  }
  // this.move("left")
  
  moveRight(){
    this.compress("right")
    this.merge("right")
    this.compress("right")
    this.randomizeNumber()
    this.calculateGrid()
  }
  // this.move("right")
  
  moveDown(){
    this.compressVertical("down")
    this.mergeVertical("down")
    this.compressVertical("down")
    this.randomizeNumber()
    this.calculateGrid()
  }
  // this.move("down")
  
  moveUp() {
    this.compressVertical("up")
    this.mergeVertical("up")
    this.compressVertical("up")
    this.randomizeNumber()
    this.calculateGrid()
  }
  // this.move("up")

  componentDidMount() {
    window.addEventListener("keyup", e => {
      var key = e.keyCode;
      if(key === 37 ) this.moveLeft()
      if(key === 39 ) this.moveRight() 
      if(key === 38 ) this.moveUp() 
      if(key === 40 ) this.moveDown() 
    })
  }

  calculateGrid(){
    const result = this.state.grille.reduce((previous, current ) => {
      const somme = current.reduce((previous2, currrent2) => {
        return previous2 + currrent2 
      }) 
      console.log("Somme", somme) 
      return previous + somme    
    }, 0)
    // console.log("resultat Calculate Grid",result )
    // setState est une methode qui change l'etat de mes states  elle prend un objet comme parametre on met une clef valeur
    this.setState({ gridSum: result })
  }
  
  // calculateGrid()
  // TIMER

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate prevState gridsum",prevState.gridSum )
    console.log("State grid Sum",this.state.gridSum) 
    if(this.state.isOver === false) {
      if (this.state.gridSum === prevState.gridSum && this.state.isFull === 16) {
        //  console.log("game over")
         this.setState({ isOver: true })
      }
    }
  }
 
  pseudoValue(e) {
    this.setState({pseudo : e.target.value})
  }
  onclickPseudo() {
    this.setState({display:true})
  }
  onclickLogo(logoClassName) {
    this.setState({ className : logoClassName})
  }
  onclickPause() {
    this.setState({ pause : true})
  }
  onClickTakeBackTheParty() {
    this.setState({ pause : false})
  }
  
  render() {
    console.log("isFull:", this.state.isFull);
    
    return (
      <>
      {this.state.pause === true && 
            <div className="Pause_container"> 
              <div>score: {this.state.score}</div>
              <div>moves: {this.state.moves}</div>
              <div>time : 0000</div>
              <Button label="reprendre" onclick={this.onClickTakeBackTheParty}/>
            </div>
      }
      {!this.state.display &&
        <div className="profil_container">
          <Profil onChange={this.pseudoValue} onClick={this.onclickPseudo}/>
          <div className="logos">
              <h1>Logos</h1>
              <div>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-male"
                  colorTernaire = {this.state.className}/>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-female"
                  colorTernaire = {this.state.className}/>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-cat"
                  colorTernaire = {this.state.className}/>
              </div> 
              <div> 
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-crow"
                  colorTernaire = {this.state.className}/>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-dragon"
                  colorTernaire = {this.state.className}/>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-hippo"
                  colorTernaire = {this.state.className}/>
              </div>
              <div> 
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-horse"
                  colorTernaire = {this.state.className}/>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-otter"
                  colorTernaire = {this.state.className}/>
                <Logos onClick= {this.onclickLogo} 
                  className="fas fa-spider"
                  colorTernaire = {this.state.className}/>
              </div>
          </div>
          <Button onclick={this.onclickPseudo} label="submit"/>
          
        </div>
      }
      

      {this.state.display &&
      <>
      
      <div className="main_container">
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
        <div className="personnage">
          <h1>{this.state.pseudo}</h1>
          <Logos className= {this.state.className}/>

        </div>
        <div className="grid_top">
          <Score 
            className="score start_buttons" 
            score={this.state.score}
            moves={this.state.moves}
          />
          <Logos className = "fas fa-pause" onClick={this.onclickPause}/>
        </div>
        
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
        {/* </div> */}
        
        {!this.state.isOver ? 
        <div>
          <Grille grille= {this.state.grille}/>
        </div> 
        :
        <>
          <p className="filter">Game Over</p>
          <div>
            <Grille grille= {this.state.grille}/>
          </div>
        </>
        }
        

        {/* <div className="button_container">
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
        </div> */}

        {/* <div className="timer">
          <h2>Timer :</h2>
          <p>{stopwatch.read()}</p>
        </div> */}
        </div>
      </>}
    </>
    )
  }
}