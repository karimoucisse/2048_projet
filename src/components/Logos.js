import React, { Component } from 'react'

export default class Logos extends Component {
    render() {
        return (
            <i className={ `${this.props.className} 
                        ${this.props.colorTernaire === this.props.className && "logos_click-color"}`} 
                onClick={() => this.props.onClick(this.props.className)}
            >

            </i>
        )
    }
}
