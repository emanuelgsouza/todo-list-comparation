import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import TodoButton from './TodoButton'

class TodoApp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: [
        'Comprar pão',
        'Comprar arroz',
        'Entregar trabalho de sexta'
      ],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const items = [ ...this.state.items ]
    items.push(this.state.value)
    this.setState({
      items,
      value: ''
    })
  }

  handleChange (value) {
    this.setState({
      value
    })
  }

  render () {
    return (
      <div className="TodoApp content">
        <ul> { this.state.items.map((item, key) => <TodoItem key={key} item={item} />) } </ul>

        <form>
          <TodoInput value={this.state.value} onChange={value => this.handleChange(value)} />

          <TodoButton onClick={() => this.handleClick()} />
        </form>
      </div>
    )
  }
}

export default TodoApp
