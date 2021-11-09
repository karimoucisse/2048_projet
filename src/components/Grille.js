import React, { Component } from 'react';

class Grille extends Component {

   
    constructor() {
        super()
    
        this.state = {
            grille: [
                
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]   
        }
        this.randomizeGrid= this.randomizeGrid.bind(this);
        this.randomizeGrid()
    }

    
    randomizeGrid(){
        
        let ligne_du_premier_2=Math.floor(Math.random()*3); 
        let colone_du_premier_2=Math.floor(Math.random()*3);
        let ligne_du_deuxieme_2=Math.floor(Math.random()*3);
        let colone_du_deuxieme_2=Math.floor(Math.random()*3);
        
        this.setState({grilles:this.state.grille[ligne_du_premier_2][colone_du_premier_2]=2})
        this.setState({grilles:this.state.grille[ligne_du_deuxieme_2][colone_du_deuxieme_2]=2})
    }

    render() {
        return (
            <div>
                <h1>2048</h1>
                <div className="grid" >
                    {this.state.grille.map((line) => {
                        return (
                            <>
                                {line.map(element => (
                                    <span>{element}</span>
                                ))}
                            </>
                        )
                    })}    
                </div>
                
            </div>
        );  
    }
}

export default Grille;
