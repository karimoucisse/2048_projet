import React, { Component } from 'react';

class Score extends Component {
    
    render() {
        const {score} = this.props
        return (
            <div className="score">
                <h3>Score</h3>
                <p>{score}</p>
            </div>
        );
    }
}

export default Score;


