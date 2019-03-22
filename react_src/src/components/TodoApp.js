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
    this.handleItemChange = this.handleItemChange.bind(this)
  }

  handleClick () {
    const items = [ ...this.state.items ]
    items.push(this.state.value)
    this.setState({
      items,
      value: ''
    })
  }

  handleItemChange (props) {
    const { index, value } = props
    const items = [ ...this.state.items ]
    items[index] = value
    this.setState({
      items: [ ...items ]
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
        <ul>
          { this.state.items.map((item, key) => {
            return <TodoItem key={key} item={item} index={key} onChange={this.handleItemChange} />
          }) }
        </ul>

        <form>
          <TodoInput value={this.state.value} onChange={value => this.handleChange(value)} />

          <TodoButton value={this.state.value} onClick={() => this.handleClick()} />
        </form>
      </div>
    )
  }
}

export default TodoApp
