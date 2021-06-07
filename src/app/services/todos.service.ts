import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

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

  constructor(private http: HttpClient) {
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/todos', {
      params: new HttpParams().set('userId', 1)
    })
      .pipe(map(todos => todos.map(todo => {
        return {
          id: todo.id,
          name: todo.title,
          completed: todo.completed,
          type: _randomTodoType(),
          date: new Date()
        } as Todo
      })))
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers: new HttpHeaders({
        'MyCustomHeader': Math.random().toString()
      })
    })
      .pipe(map(todo => {
        todo.id = this.todos.length + 1;
        return todo
      }))
  }
}

function _randomTodoType() {
  const types = ['urgent', 'high', 'medium', 'low'];
  return types[Math.round(Math.random() * 3)]
}
