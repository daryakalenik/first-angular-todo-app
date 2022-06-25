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
  todos: any[] = [];
  checkTodos() {
    console.log(this.todos);
  }
}
