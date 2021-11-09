import React, { Component } from 'react';

class Grille extends Component {
    
    render() {
        return (
            <div>
                <h1>2048</h1>
                <div className="grid" >
                    {this.props.grille.map((line) => {
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
