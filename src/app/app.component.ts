import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'Instal NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create New App'},
    {title: 'Serve App'},
    {title: 'Deploy App'},
    {title: 'Host App'},
  ];
}
