import React, { Component } from 'react';

class Grille extends Component {
    constructor() {
        super()
    
        this.state = {
            grille: [
                
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
            ]   
        }
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
