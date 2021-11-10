import React, { Component } from 'react'

export default class Bouton extends Component {
  render() {
    const {label, className, onclick} = this.props
    return (
      <button className={className} onClick={onclick}>{label}</button>
    )
  }
}


