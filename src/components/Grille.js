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
    }
    //     }
    //     this.randomizeGrid= this.randomizeGrid.bind(this);
    //     this.randomAfterMov = this.randomAfterMove.bind(this)
    //     this.additionX= this.additionX.bind(this);
    //     this.additionY= this.additionY.bind(this);
    //     this.moveX= this.moveX.bind(this);
    //     this.moveY= this.moveY.bind(this);
    //     // this.reverseArray= this.reverseArray.bind(this);
    //     this.onclickLeft= this.onclickLeft.bind(this);
    //     this.onclickRight= this.onclickRight.bind(this);
    //     this.onclickUp= this.onclickUp.bind(this);
    //     this.onclickDown= this.onclickDown.bind(this);

    //     this.randomizeGrid()
    //     this.randomizeGrid()
    // }
    
    // randomAfterMove() {
    //     let row=Math.floor(Math.random()*4); 
    //     let col=Math.floor(Math.random()*4);
    //     const newArray = this.state.grille
    //     if(newArray[row][col] === 0){
    //         console.log(`ligne : ${row} col: ${col}`);
    //         newArray[row][col] = 2
    //         this.setState({grille : newArray})
    //     }else {
    //         this.randomAfterMove()
    //     }
    // }

    render() {
        return (
            <div className="grid-container">
                {this.props.grille.map((singleRow,rowIndex) => {
                    return (
                        <div className={`grid ${rowIndex === 0 ? "top" : ""} ${rowIndex === 3 ? "bottom" : ""}`} key={rowIndex}>
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
                                            ${element === 256 && "deux-cent-cinquante-six_colors"}
                                            ${element === 512 && "cinq-cent-douze_colors"}
                                            ${element === 1024 && "mille-vingt-quatre_colors"}
                                            ${element === 2048 && "deux-mille-quarante-huite_colors"}
                                    `}
                                    
                                >
                                    {element}
                                </div>
                            ))}
                        </div>
                    )
                })} 
            </div>   
            // /<div>

            //     <h1>2048</h1>
            //     <div className="grid" >
            //         {this.props.grille.map((line) => {
            //             return (
            //                 <>
            //                     {line.map(element => (
            //                         <span>{element}</span>
            //                     ))}
            //                 </>
            //             )
            //         })}    
            //     </div>
            //     })}
                
    //         </div>   
            
    //     );  
        )}
}

export default Grille;
