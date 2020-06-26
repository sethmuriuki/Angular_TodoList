import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    {title: 'Instal NodeJS'},
    {title: 'Install Angular CLI'},
    {title: 'Create New App'},
    {title: 'Serve App'},
    {title: 'Develop App'},
    {title: 'Deploy App'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }

}
