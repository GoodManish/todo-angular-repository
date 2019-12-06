import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos = [
    new Todo(1, 'Learn Dance', false, new Date()),
    new Todo(2, 'To become expert in Angular', false, new Date()),
    new Todo(3, 'Visit all over world', false, new Date())
    // { id:1, description: "Learn to dance"},
    // { id:2, description: "Learn Angular"},
    // { id:3, description: "Create enterprise app"}
  ];

  constructor() {}

  ngOnInit() {
  }

}

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ) {

  }
}
