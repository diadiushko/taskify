import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "../app.component";

@Pipe({
  name: 'todosSelector',
  pure: false
})

export class TodosSelectorPipe implements PipeTransform {

  transform(todos: Todo[], type: string, sortBy: string): Todo[] {
    const unsorted = todos.filter(todo => todo.type === type);

    return unsorted.sort((todo1: Todo, todo2: Todo): number => {
      switch (sortBy) {
        case 'completed': {
          return todo1.completed < todo2.completed ? 1 : -1;
        }
        case 'name': {
          return todo1.name > todo2.name ? 1 : -1;
        }
        default:
          return 1
      }
    })
  }

}
