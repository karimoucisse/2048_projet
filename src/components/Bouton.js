import React, { Component } from 'react'

export default class Bouton extends Component {
  render() {
    const {label, className,onclick , randomizeNumber} = this.props
    return (
      <button className={className} onClick={onclick} number={randomizeNumber}>{label}</button>
    )
  }
}


