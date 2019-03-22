import React, { Component } from 'react'

class TodoItem extends Component {
  render () {
    return (
      <li> {this.props.item} </li>
    )
  }
}

export default TodoItem
