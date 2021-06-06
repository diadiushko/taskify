import {Component, Input} from '@angular/core';
import {TodosService} from "../services/todos.service";
import {TodoType} from "../app.component";

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent {
  @Input() typeInfo!: TodoType
  @Input() done!: boolean

  constructor(public todosService: TodosService) {
  }
}
