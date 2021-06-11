import {Component, Input} from '@angular/core';
import {TodosService, TodoType} from "../services/todos.service";

@Component({
  selector: 'app-panel-type',
  templateUrl: './panel-type.component.html',
  styleUrls: ['./panel-type.component.scss']
})
export class PanelTypeComponent {

  @Input() todoType!: TodoType
  @Input() sortBy!: string
  @Input() searchField!: string

  constructor(public todosService: TodosService) {
  }
}
