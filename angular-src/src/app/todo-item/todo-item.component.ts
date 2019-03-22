import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;

  @Input() index: number;

  @Output() change = new EventEmitter<TodoItem>();

  @Output() delete = new EventEmitter<TodoItem>();

  showInput = false;

  constructor() { }

  ngOnInit() {
  }

  editItem () {
    this.showInput = !this.showInput
  }

  deleteElement () {
    this.delete.emit(this.item)
  }

  handleBlur () {
    this.showInput = !this.showInput

    this.change.emit(this.item)
  }

}
