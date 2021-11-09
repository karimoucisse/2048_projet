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
            ]   
        }
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
            </div>
        );  
    }
}

export default Grille;
