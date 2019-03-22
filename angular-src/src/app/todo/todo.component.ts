import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoItem = ''

  items = [
    'Comprar pão',
    'Comprar arroz',
    'Entregar trabalho de sexta'
  ]

  constructor() { }

  ngOnInit() {
  }

  handleClick (): void {
    if (this.todoItem.length === 0) {
      return
    }

    const items = [ ...this.items ]

    items.push(this.todoItem)

    this.items = [ ...items ]
    this.todoItem = ''
  }

}
