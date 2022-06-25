import { Component } from '@angular/core';

interface Todo {
  text: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];
  todoItem = '';
  todoToEdit = { text: '', isCompleted: false };
  addTodo() {
    this.todoItem
      ? (this.todos.push({ text: this.todoItem, isCompleted: false }),
        (this.todoItem = ''))
      : null;
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((item, index) => {
      return index !== id;
    });
    console.log(this.todos);
  }
  markCompleted(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
  editTodo(id: number) {
    this.todoToEdit = this.todos[id];
  }
  addEditedTodo(id: number) {
    this.todos[id] = this.todoToEdit;
    this.todoToEdit = { text: '', isCompleted: false };
  }
}
