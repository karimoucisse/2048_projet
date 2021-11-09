import React, { Component } from 'react';


class Bouton extends Component {
    render() {
        return (
            <div className={this.props.className} >
                <button onClick={this.props.reset}>New</button>
            </div>
        );
    }
}

export default Bouton;