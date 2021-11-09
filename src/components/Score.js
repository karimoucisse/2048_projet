import React, { Component } from 'react';

class Score extends Component {
    constructor () {
        super ()

        this.state = {
            score : 0
        }
    }

    
    
    render() {
        return (
            <div>
                <h2>Score</h2>
                <p>0000</p>

            </div>
        );
    }
}

export default Score;


