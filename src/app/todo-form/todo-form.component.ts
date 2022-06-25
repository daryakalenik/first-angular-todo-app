import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Input() todos!: any[];
  todoItem = '';
  addTodo() {
    this.todoItem
      ? (this.todos.push({ text: this.todoItem, isCompleted: false }),
        (this.todoItem = ''))
      : null;
  }
}
