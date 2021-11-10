import React, { Component } from 'react';

class Grille extends Component {
    // constructor() {
    //     super()
    
        // this.state = {
            
        // }
    // }

    render() {
        return (
            <div className="grid-container">
                {this.props.grille.map((singleRow,rowIndex) => {
                    return (
                        <div className="grid" key={rowIndex}>
                            {singleRow.map((element,index) => (
                                <div key={index} className="block">{element}</div>
                            ))}
                        </div>
                    )
                })} 
                </div>   
            /* <div>

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
                
            </div> */
        );  
    }
}

export default Grille;
