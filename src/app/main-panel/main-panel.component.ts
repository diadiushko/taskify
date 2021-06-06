import {Component} from '@angular/core';
import {TodosService} from "../services/todos.service";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  sortBy: string = 'completed';

  constructor(public todosService: TodosService) {
  }
}