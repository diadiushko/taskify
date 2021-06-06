import {Component, Input} from '@angular/core';
import {TodoType} from "../app.component";
import {TodosService} from "../services/todos.service";

@Component({
  selector: 'app-panel-type',
  templateUrl: './panel-type.component.html',
  styleUrls: ['./panel-type.component.scss']
})
export class PanelTypeComponent {

  @Input() todoType!: TodoType
  @Input() sortBy!: string

  constructor(public todosService: TodosService) {
  }
}
