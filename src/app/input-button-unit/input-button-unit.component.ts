import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello world';
  constructor() {
    this.changeTitle('My first Angular App');
    console.log(this.title);
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

  ngOnInit(): void {
    // this.title = 'Angular cli rules';
  }

}
