import {Component} from '@angular/core';
import {TodosService} from "./services/todos.service";

export interface Todo {
  id: number
  name: string
  completed: boolean
  type: string
  date: Date
}

export interface TodoType {
  type: string,
  color: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public todosService: TodosService) {
  }

}
