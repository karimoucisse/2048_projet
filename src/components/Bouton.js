import React, { Component } from 'react'

export default class Bouton extends Component {
  render() {
    const {label, className,onClickMove} = this.props
    return (
      <button className={className} onClick={() => onClickMove(`${label}`)}>{label}</button>
    )
  }
}


