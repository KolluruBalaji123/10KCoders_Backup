import React, { Component } from 'react'
import HocComponent from './HocComponent'

 class HoverComponent extends Component {
   
  render() {
    return (
      <div>
      <h2 onMouseOver={this.props.handleIncrement}>Hover On me</h2>
      <h2>you hovered {this.props.count} times</h2>

      </div>
    )
  }
}
export default HocComponent(HoverComponent)
