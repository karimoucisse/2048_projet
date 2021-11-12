import React, { Component } from 'react';

class Score extends Component {
    
    render() {
        const {score, moves} = this.props
        return (
            <>
            <div className="score">
                <h3>Score</h3>
                <p>{score}</p>
            </div>
            <div className="move">
                <div><h2>Moves</h2></div>
                <div><p>{moves}</p></div>
            </div>
            </>
        );
    }
}

export default Score;


