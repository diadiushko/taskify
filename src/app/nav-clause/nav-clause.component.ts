import {Component, ComponentFactoryResolver, ElementRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {NavButton} from "../side-bar/side-bar.component";
import {TodosService} from "../services/todos.service";
import {TodoCreateFormComponent} from "../todo-create-form/todo-create-form.component";

@Component({
  selector: 'app-nav-clause',
  templateUrl: './nav-clause.component.html',
  styleUrls: ['./nav-clause.component.scss']
})

export class NavClauseComponent {
  isOpen: boolean = false
  @ViewChild('modalRoot', {read: ViewContainerRef})
  modalRoot!: ViewContainerRef

  @Input() buttonInfo!: NavButton

  constructor(public todosService: TodosService, public element: ElementRef, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  onClick(): void {
    const elementTitle = this.element.nativeElement.innerText;
    switch (elementTitle) {
      case 'Git': {
        window.open('https://www.youtube.com/', "_blank");
        return;
      }
      case 'Create': {
        this.openModal();
        return;
      }
    }
    this.isOpen = !this.isOpen;
  }

  private openModal() {
    const resolver = this.componentFactoryResolver.resolveComponentFactory(TodoCreateFormComponent);
    this.modalRoot.createComponent(resolver);
  }
}



