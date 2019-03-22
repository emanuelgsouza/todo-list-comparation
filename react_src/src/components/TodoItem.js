import React, { Component } from 'react'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showInput: false
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick () {
    this.setState({
      showInput: !this.state.showInput
    })
  }

  handleChange (event) {
    this.props.onChange({
      index: this.props.index,
      value: event.target.value
    })
  }

  handleBlur () {
    this.setState({
      showInput: !this.state.showInput
    })

    this.props.onChange({
      index: this.props.index,
      value: this.props.item
    })
  }

  handleClick () {
    this.props.onDelete(this.props.index)
  }

  render () {
    const showInput = this.state.showInput
    return (
      <div className="columns is-gapless">
        <div className="column is-11">
          {showInput ? (
            <input
              ref="input"
              className="input is-primary"
              type="text"
              value={this.props.item}
              onChange={this.handleChange}
              onBlur={this.handleBlur} />
          ) : (
            <li onClick={this.handleItemClick}> {this.props.item} </li>
          )}
        </div>

        <div className="column is-1">
          <button className="button is-danger" onClick={this.handleClick}> Del </button>
        </div>
      </div>
    )
  }
}

export default TodoItem
