import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from "./services/todos.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  sub$!: Subscription;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.sub$ = this.todosService.fetchTodos()
      .subscribe(todos => {
          this.todosService.todos = todos;
        }
      )
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
