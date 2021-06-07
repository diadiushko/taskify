import {Component, Input} from '@angular/core';
import {Todo, TodosService} from "../services/todos.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo!: Todo

  constructor(public todosService: TodosService) {
  }

  onChange() {
    this.todosService.completeTodo(this.todo.id)
      .subscribe()

    const todosCopy = [...this.todosService.todos];
    todosCopy[this.todo.id - 1] = this.todo;
    this.todosService.todos = todosCopy;
  }

}
