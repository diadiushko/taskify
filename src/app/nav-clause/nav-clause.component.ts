import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {NavButton} from "../side-bar/side-bar.component";
import {TodosService} from "../services/todos.service";
import {TodoCreateFormComponent} from "../todo-create-form/todo-create-form.component";

@Component({
  selector: 'app-nav-clause',
  templateUrl: './nav-clause.component.html',
  styleUrls: ['./nav-clause.component.scss']
})

export class NavClauseComponent {
  @ViewChild('modalRoot', {read: ViewContainerRef})
  modalRoot!: ViewContainerRef

  @Input() buttonInfo!: NavButton

  constructor(
    public todosService: TodosService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }


  openModal() {
    const resolver = this.componentFactoryResolver.resolveComponentFactory(TodoCreateFormComponent);
    this.modalRoot.createComponent(resolver);
  }
}



