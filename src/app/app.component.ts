import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'Instal NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create New App'},
    {title: 'Serve App'},
    {title: 'Deploy App'},
    {title: 'Host App'},
  ];
}
