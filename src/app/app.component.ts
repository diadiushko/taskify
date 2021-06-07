import {Component, OnInit} from '@angular/core';
import {TodosService} from "./services/todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(public todosService: TodosService) {
  }

  ngOnInit() {
    this.todosService.fetchTodos()
      .subscribe(todos => {
        this.todosService.todos = todos;
      })
  }

}
