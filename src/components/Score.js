import React, { Component } from 'react';

class Score extends Component {
    
    render() {
        const {score} = this.props
        return (
            <div className="score">
               <div><h2>Score</h2></div> 
                <div><p>{score}</p></div>
            </div>
        );
    }
}

export default Score;


