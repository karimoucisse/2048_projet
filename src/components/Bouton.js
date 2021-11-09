import React, { Component } from 'react'

export default class Bouton extends Component {
  render() {
    const {label, className,onClickStart} = this.props
    return (
      <button className={className} onClick={onClickStart}>{label}</button>
    )
  }
}


