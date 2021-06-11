import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../services/todos.service";


@Pipe({
  name: 'compTodoCounter',
  pure: false
})
export class CompleteTodoCounterPipe implements PipeTransform {

  transform(todos: Todo[], done: boolean): number {
    return todos.filter(todo => done ? todo.completed : !todo.completed).length;
  }

}
