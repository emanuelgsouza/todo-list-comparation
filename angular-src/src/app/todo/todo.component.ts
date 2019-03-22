import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

const factoryTodoItem = (items:[TodoItem], value: string): TodoItem => {
  return {
    id: items.length,
    value
  }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoItem: string = ''

  items = [
    {
      id: 0,
      value: 'Comprar pão'
    },
    {
      id: 1,
      value: 'Comprar arroz'
    },
    {
      id: 2,
      value: 'Entregar trabalho de sexta'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  handleClick (): void {
    if (this.todoItem.length === 0) {
      return
    }

    const items = [ ...this.items ]

    items.push(factoryTodoItem(items, this.todoItem))

    this.items = [ ...items ]
    this.todoItem = ''
  }

  handleItemChange (item) {
    const { id, value } = item
    const items = [ ...this.items ]
    items[id] = {
      id,
      value
    }
    this.items = [ ...items ]
  }

  handleDelete ({ id }) {
    console.log({ id })
    const items = [ ...this.items ]
    items.splice(id, 1)

    this.items = [ ...items ]
  }
}
