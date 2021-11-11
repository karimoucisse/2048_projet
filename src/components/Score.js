import React, { Component } from 'react';

class Score extends Component {
    
    render() {
        const {score, moves} = this.props
        return (
            <>
            <div className="score">
               <div><h2>Score</h2></div> 
                <div><p>{score}</p></div>
            </div>
            <div>
                <div><h2>Moves : </h2></div>
                <div><p>{moves}</p></div>
            </div>
            </>
        );
    }
}

export default Score;


