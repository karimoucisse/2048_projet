import React, { Component } from 'react';


class Bouton extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <button>New</button>
            </div>
        );
    }
}

export default Bouton;