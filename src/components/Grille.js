import React, { Component } from 'react';
class Grille extends Component {

   
    constructor() {
        super()
    
        this.state = {
            grille: [
                
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            emptyGrille : [
                
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        }
        this.randomizeGrid= this.randomizeGrid.bind(this);
        this.randomAfterMov = this.randomAfterMove.bind(this)
        this.additionX= this.additionX.bind(this);
        this.additionY= this.additionY.bind(this);
        this.moveX= this.moveX.bind(this);
        this.moveY= this.moveY.bind(this);
        // this.reverseArray= this.reverseArray.bind(this);
        this.onclickLeft= this.onclickLeft.bind(this);
        this.onclickRight= this.onclickRight.bind(this);
        this.onclickUp= this.onclickUp.bind(this);
        this.onclickDown= this.onclickDown.bind(this);

        this.randomizeGrid()
        this.randomizeGrid()
    }
    additionY(direction) {
        const newArray = [...this.state.grille]
        const factor = direction === "left" ? 1 : -1
        for(let i = 0; i < newArray.length; i++){
            for(let j = 0; j < newArray[i].length ; j++) {
                if(newArray[i][j] !== 0 && newArray[i][j] === newArray[i][j + factor]) {
                    newArray[i][j] = newArray[i][j] * 2
                    newArray[i][j + factor ] = 0
                }
            }
        }
        this.setState({grille : newArray})
        
    }
    additionX(direction) {
        const newArray = [...this.state.grille]
        const factor = direction === "up" ? 1 : -1
        for(let i = 0; i < newArray.length; i++){
            for(let j = 0; j < newArray.length; j++) {
                if(newArray[j][i] !== 0 && newArray[j][i] === newArray[j + factor][i]) {
                    newArray[j][i] = newArray[j][i] * 2
                    newArray[j + factor ][i] = 0
                }
            }
        }
        this.setState({grille : newArray})
       
        
        
      }


    moveY(direction) {
        const newArray = this.state.grille
        const newEmptyArray =[
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                  ]      
            
        for (let i = 0; i < newArray.length; i++) {
            let colIndex =  direction === "left"? 0 : 3;
            for (let j = 0; j < newArray[i].length; j++) {
                if(newArray[i][j] !== 0) {
                    newEmptyArray[i][colIndex] = newArray[i][j];
                    if (direction === "right") {
                        colIndex --
                    }else {
                        colIndex ++
                    }
                }
            }
        }
        this.setState({grille : newEmptyArray})
        console.log('salut');
    }

    moveX(direction) {
        const newArray = [...this.state.grille]
        const newEmptyArray =[
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                  ]      
            
        for (let i = 0; i < newArray.length; i++) {
            let rowIndex =  direction === "up"? 0 : 3;
            for (let j = 0; j < newArray[i].length; j++) {
                if(newArray[j][i] !== 0) {
                    newEmptyArray[rowIndex][i] = newArray[j][i];
                    if (direction === "down") {
                        rowIndex --
                    }else {
                        rowIndex ++
                    }
                }
            }
        }
        this.setState({grille : newEmptyArray})
        
    }

    // reverseArray() {
    //     const newArray = this.state.grille
    //     const newEmptyArray = this.state.emptyGrille
    //     for(let i = 0; i < newArray.length; i++) {
    //         for(let j = 0; j < newArray[i].length; j++) {
    //             newEmptyArray[i][j] = newArray[i][newArray[i].length - 1 - j]
    //         }
    //     }
    //     this.setState({grille : newEmptyArray})
    // }

    onclickLeft() {
        // this.additionLeft()
        this.randomAfterMove()
        this.moveY("left")
        this.additionY("left")
        this.moveY("left")
    }
    onclickRight() {
        this.randomAfterMove()
        this.moveY("right")
        this.additionY("right")
        this.moveY("right")
    }
    onclickUp() {
        this.randomAfterMove()
        this.moveX("up")
        this.additionX("up")
        this.moveX("up")
    }
    onclickDown() {
        this.randomAfterMove()
        this.moveX("down")
        this.additionX("down")
        this.moveX("down")
    }
    

    
    randomizeGrid(){
        
        let ligne_du_premier_2=Math.floor(Math.random()*4); 
        let colone_du_premier_2=Math.floor(Math.random()*4);
    
        const newGrille = this.state.grille
        newGrille[ligne_du_premier_2][colone_du_premier_2] = 2
        
        this.setState({grille: newGrille})
    }
    randomAfterMove() {
        let row=Math.floor(Math.random()*4); 
        let col=Math.floor(Math.random()*4);
        const newArray = this.state.grille
        if(newArray[row][col] === 0){
            console.log(`ligne : ${row} col: ${col}`);
            newArray[row][col] = 2
            this.setState({grille : newArray})
        }else {
            this.randomAfterMove()
        }
    }

    render() {
        return (
            <div className="grid-container">
                {this.state.grille.map((singleRow,rowIndex) => {
                    return (
                        <div className="grid" key={rowIndex}>
                            {singleRow.map((element,index) => (
                                <div 
                                    key={index} 
                                    className={`block 
                                            ${element === 0 && "zero_colors"}
                                            ${element === 2 && "deux_colors"}
                                            ${element === 4 && "quatre_colors"}
                                            ${element === 8 && "huit_colors"}
                                            ${element === 16 && "seize_colors"}
                                            ${element === 32 && "trente-deux_colors"}
                                            ${element === 64 && "soixante-quatre_colors"}
                                            ${element === 128 && "cent-vingt-huit_colors"}
                                            ${element === 128 && "cent-vingt-huit_colors"}
                                            ${element === 256 && "deux-cent-cinquante-six_colors"}
                                            ${element === 256 && "deux-cent-cinquante-six_colors"}
                                            ${element === 512 && "cinq-cent-douze_colors"}                                        }
                                    `}
                                    
                                >
                                    {element}
                                </div>
                            ))}
                        </div>
                    )
                })}
                <div className="button_container">
                    <button className="btn_left" onClick={this.onclickLeft}>left</button> 
                    <button className="btn_top" onClick= {this.onclickUp}>top</button>
                    <button className="btn_bottom" onClick= {this.onclickDown}>bottom</button>
                    <button className="btn_right" onClick={this.onclickRight}>right</button>
                </div>
                
            </div>   
            
        );  
    }
}

export default Grille;
