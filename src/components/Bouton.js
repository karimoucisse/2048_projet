import React, { Component } from 'react'

export default class Bouton extends Component {
  render() {
    // const {label, className,onclickStart} = this.props
    // return (
    //   <button className={className} onClick={onclickStart}>{label}</button>
    const {label, className, move} = this.props
    return (
      <button className={className} onClick={move}>{label}</button>
    )
  }
}


