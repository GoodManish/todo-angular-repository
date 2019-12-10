import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  // todos = [
  //   new Todo(1, 'Learn Dance', false, new Date()),
  //   new Todo(2, 'To become expert in Angular', false, new Date()),
  //   new Todo(3, 'Visit all over world', false, new Date())
  // ];

  constructor(private todoService:TodoDataService){}

  ngOnInit() {
    this.todoService.retrieveAllTodos('in28Minutes').subscribe(
        response=>{
          console.log(response)
          this.todos=response;
        }

    )
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
