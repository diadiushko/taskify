import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Todo, TodosService} from "../services/todos.service";
import {Subscription} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-todo-wrap',
  templateUrl: './todo-wrap.component.html',
  styleUrls: ['./todo-wrap.component.scss']
})
export class TodoWrapComponent implements OnDestroy, OnInit {
  public todo!: Todo;
  private sub$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public todosService: TodosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub$ = this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.route.params.subscribe(params => {
          this.todo = this.todosService.getTodoById(params.id);
        })
      })
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  toMainPage() {
    this.router.navigate(['/'])
  }
}
