import {Injectable} from '@angular/core';
import {Todo, TodoType} from "../app.component";


@Injectable({
  providedIn: 'root'
})

export class TodosService {
  todoTypes: TodoType[] = [
    {type: 'urgent', color: '#992828'},
    {type: 'high', color: '#3e8020'},
    {type: 'medium', color: '#515151'},
    {type: 'low', color: '#4551b9'}
  ]

  todos: Array<Todo> = [
    {id: 0, name: 'first', completed: false, type: 'low', date: new Date()},
    {id: 1, name: 'second', completed: true, type: 'medium', date: new Date()},
    {id: 2, name: 'third', completed: true, type: 'high', date: new Date()},
    {id: 3, name: 'fourth game for real stuff puss', completed: true, type: 'low', date: new Date()},
    {id: 4, name: 'fifth', completed: true, type: 'urgent', date: new Date()}
  ]

  addTodo(todo: Todo) {
    this.todos = this.todos.concat(todo);
  }
}
