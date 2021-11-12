import React, { Component } from 'react'
import Button from './components/Bouton';
import Grille from './components/Grille';
import './App.css'
import Score from './components/Score'
import Profil from './components/Profil';
import Logos from './components/Logos';
const Stopwatch = require('statman-stopwatch');
const stopwatch = new Stopwatch();
// const delta = stopwatch.read()

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
      ],
      moves: 0,
      score: 0 ,
      pseudo:"",
      display : false,
      className : "",
      pause : false
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
            [0,0,0,0],
        ],
        score: 0,
        moves:0
    })
    }
    // RANDOM NUMBERS

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
    stopwatch.start()
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
          this.setState({
            score : this.state.score += board[j][i],
            
          })
          break;
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

  componentDidMount() {
    window.addEventListener("keyup", e => {
      var key = e.keyCode;
      if(key === 37 ) this.moveLeft() // Q - A
      if(key === 39 ) this.moveRight() // D
      if(key === 38 ) this.moveUp() // Z - W 
      if(key === 40 ) this.moveDown() // S
    })
  }

  // TIMER

  
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
        
        
        <div>
          <Grille grille= {this.state.grille}/>
        </div>

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
        <div>
          <h2>Timer :</h2>
          <p>{stopwatch.read()}</p>
        </div>
        </div>
      </>}
    </>
    )
  }
}


