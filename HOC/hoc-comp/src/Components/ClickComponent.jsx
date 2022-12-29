import React, { Component } from 'react'
import HocComponent from './HocComponent'

 class ClickComponent extends Component {
 
    
  render() {
    return (
      <div>
      <h2> you pressed {this.props.count}times</h2>
        <button type='button'onClick={this.props.handleIncrement} >Pressme</button>
      </div>
    )
  }
}
export default HocComponent(ClickComponent)
