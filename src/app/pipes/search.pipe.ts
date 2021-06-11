import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../services/todos.service";

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(todos: Todo[], searchField: string): Todo[] {
    return todos.filter(todo => todo.title.toLowerCase().includes(searchField.toLowerCase()));
  }

}
