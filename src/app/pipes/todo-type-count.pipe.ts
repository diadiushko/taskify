import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../app.component";

@Pipe({
  name: 'todoTypeCount'
})
export class TodoTypeCountPipe implements PipeTransform {

  transform(todos: Todo[], type: string, done: boolean): number {
    return todos.filter(todo => todo.type === type && (done ? todo.completed : !todo.completed)).length;
  }
}
