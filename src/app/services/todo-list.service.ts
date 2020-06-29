import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[] = [
    {title: 'Instal NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create New App'},
    {title: 'Serve App'},
    {title: 'Develop App'},
    {title: 'Deploy App'},
  ];

  constructor() { }

  getTodoList(){
    return this.todoList;
  }
}
