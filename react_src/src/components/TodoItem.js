import React, { Component } from 'react'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showInput: false,
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick () {
    this.setState({
      showInput: !this.state.showInput
    })
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleBlur () {
    this.setState({
      showInput: !this.state.showInput
    })

    this.props.onChange({
      index: this.props.index,
      value: this.state.value
    })
  }

  componentDidMount () {
    this.setState({
      value: this.props.item
    })
  }

  render () {
    const showInput = this.state.showInput
    return (
      <div>
        {showInput ? (
          <input
            ref="input"
            className="input is-primary"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur} />
        ) : (
          <li onClick={this.handleItemClick}> {this.props.item} </li>
        )}
      </div>
    )
  }
}

export default TodoItem
