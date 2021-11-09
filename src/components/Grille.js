import React, { Component } from 'react';
class Grille extends Component {

   
    constructor() {
        super()
    
        this.state = {
            grille: [
                
                [2, 0, 2, 0],
                [2, 0, 0, 0],
                [2, 0, 0, 0],
                [2, 0, 0, 0]
            ],
            emptyGrille : [
                
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        }
        this.randomizeGrid= this.randomizeGrid.bind(this);
        this.additionLeft= this.additionLeft.bind(this);
        this.moveLeft= this.moveLeft.bind(this);
        this.reverseArray= this.reverseArray.bind(this);
        this.onclickLeft= this.onclickLeft.bind(this);
        this.onclickRight= this.onclickRight.bind(this);

        // this.randomizeGrid()
        // this.randomizeGrid()
    }
    additionLeft() {
        const newArray = this.state.grille
        for(let i = 0; i < newArray.length; i++){
            for(let j = 0; j < newArray[i].length - 1; j++) {
                if(newArray[i][j] !== 0 && newArray[i][j] === newArray[i][j + 1]) {
                    newArray[i][j] = newArray[i][j] * 2
                    newArray[i][j + 1 ] = 0
                }
            }
        }
        this.setState({grille : newArray})
        
      }

    moveLeft() {
        const newArray = this.state.grille
        const newEmptyArray = this.state.emptyGrille
        for (let i = 0; i < newArray.length; i++) {
            let colIndex = 0;
            for (let j = 0; j < newArray[i].length; j++) {
                if(newArray[i][j] !== 0) {
                    newEmptyArray[i][colIndex] = newArray[i][j];
                    colIndex ++
                }
            }
        }
        this.setState({grille : newEmptyArray})
    }

    reverseArray() {
        const newArray = this.state.grille
        const newEmptyArray = this.state.emptyGrille
        for(let i = 0; i < newArray.length; i++) {
            for(let j = 0; j < newArray[i].length; j++) {
                newEmptyArray[i][j] = newArray[i][newArray[i].length - 1 - j]
            }
        }
        this.setState({grille : newEmptyArray})
    }

    onclickLeft() {
        this.additionLeft()
        this.moveLeft()
        // this.moveLeft()
    }
    onclickRight() {
        this.reverseArray()
        // this.reverseArray()
        // this.onclickLeft()
        // this.reverseArray()
        // this.additionLeft()
        // this.moveLeft()
        // this.reverseArray()
    }
    

    
    randomizeGrid(){
        
        let ligne_du_premier_2=Math.floor(Math.random()*4); 
        let colone_du_premier_2=Math.floor(Math.random()*4);
        // let ligne_du_deuxieme_2=Math.floor(Math.random()*3);
        // let colone_du_deuxieme_2=Math.floor(Math.random()*3);
        const newGrille = this.state.grille
        newGrille[ligne_du_premier_2][colone_du_premier_2] = 2
        
        this.setState({grille: newGrille})
        // this.setState({grille:this.state.grille[ligne_du_deuxieme_2][colone_du_deuxieme_2]=2})
    }

    render() {
        return (
            <div className="grid-container">
                {this.state.grille.map((singleRow,rowIndex) => {
                    return (
                        <div className="grid" key={rowIndex}>
                            {singleRow.map((element,index) => (
                                <div key={index} className="block">{element}</div>
                            ))}
                        </div>
                    )
                })} 
                <button>top</button>
                <button>bottom</button>
                <button onClick={this.onclickLeft}>left</button>
                <button onClick={this.onclickRight}>right</button>
            </div>   
            
        );  
    }
}

export default Grille;
