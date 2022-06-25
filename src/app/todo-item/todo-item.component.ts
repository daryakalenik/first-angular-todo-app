import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todos!: any[];

  todoToEdit = { text: '', isCompleted: false };
  markCompleted(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  addEditedTodo(id: number) {
    this.todos[id] = this.todoToEdit;
    this.todoToEdit = { text: '', isCompleted: false };
  }
  editTodo(id: number) {
    this.todoToEdit = this.todos[id];
  }
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
  }
}
