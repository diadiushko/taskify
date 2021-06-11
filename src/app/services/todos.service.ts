import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from 'src/environments/environment'

export interface Todo {
  id: number
  title: string
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

  todos: Todo[] = []

  todoTypes: TodoType[] = [
    {type: 'urgent', color: '#992828'},
    {type: 'high', color: '#3e8020'},
    {type: 'medium', color: '#515151'},
    {type: 'low', color: '#4551b9'}
  ]

  // todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Array<any>>(environment.TODOS_URL, {
      params: new HttpParams().set('userId', 1)
    })
      .pipe(map(todos => todos.map(todo => {
        delete todo.userId;
        return {
          ...todo,
          type: _randomTodoType(),
          date: new Date()
        } as Todo
      })))
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.TODOS_URL, todo, {
      headers: new HttpHeaders({
        'MyCustomHeader': Math.random().toString()
      })
    })
      .pipe(map(todo => {
        todo.id = 4;
        return todo
      }))
  }
}

function _randomTodoType() {
  const types = ['urgent', 'high', 'medium', 'low'];
  return types[Math.round(Math.random() * 3)]
}
