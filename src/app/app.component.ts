import { Component, VERSION } from '@angular/core';

export interface Todo {
  iter: number;
  title: string;
  text: string;
  isCompleted: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'todo';
  todoList: Todo[] = [{
    iter: 0,
    title: "First task",
    text: "Create Angular Todo application",
    isCompleted: false,
  }, {
    iter: 1,
    title: "Second task",
    text: "Have a rest after dinner",
    isCompleted: true,
  }, {
    iter: 2,
    title: "Call Tom",
    text: "Call Tom tomorrow 12am",
    isCompleted: false,
  }]
  newTodo: Todo;


  constructor() {
    this.newTodo = {} as Todo;
  }


  addTodo(): void {
    if (this.newTodo.title && this.newTodo.text) {
      this.newTodo.iter = this.todoList.length;
      this.newTodo.isCompleted = false;
      this.todoList.push(this.newTodo);
      this.newTodo = {} as Todo;
    }
  }

  deleteTodo(todoIter: number): void {
    this.todoList = this.todoList.filter(obj => obj.iter != todoIter);
  }
}
