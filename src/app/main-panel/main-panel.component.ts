import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TodosService} from "../services/todos.service";
import {fromEvent} from "rxjs";
import {debounceTime, map} from "rxjs/operators";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements AfterViewInit {
  sortBy: string = 'date';
  searchField: string = '';
  @ViewChild('search') searchBox: any

  constructor(public todosService: TodosService) {}

  ngAfterViewInit(): void {
    const inputBox = this.searchBox.nativeElement;
    const keyup$ = fromEvent(inputBox, 'keyup')

    keyup$.pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(500)
    )
      .subscribe((value) => {
        this.searchField = value;
      });
  }
}
