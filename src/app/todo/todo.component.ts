import {Component, Input} from '@angular/core';
import {Todo} from "../app.component";
import {TodosService} from "../services/todos.service";

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
    const todosCopy = [...this.todosService.todos];
    todosCopy[this.todo.id] = this.todo;
    this.todosService.todos = todosCopy;
  }

}
