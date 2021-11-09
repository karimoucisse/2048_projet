import React, { Component } from 'react'

export default class Bouton extends Component {
  render() {
    const {label, className, merge, grille} = this.props
    return (
      <button className={className} onClick={merge}>{label}</button>
    )
  }
}


