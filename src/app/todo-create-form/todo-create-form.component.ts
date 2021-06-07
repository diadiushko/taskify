import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo, TodosService} from "../services/todos.service";

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})
export class TodoCreateFormComponent implements OnInit {
  form!: FormGroup

  constructor(public todosService: TodosService, private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('medium', Validators.required)
    })
  }


  onSubmit() {
    const todo: Todo = {
      id: this.todosService.todos.length,
      name: this.form.get('name')?.value,
      completed: false,
      type: this.form.get('type')?.value,
      date: new Date()
    }

    this.todosService.addTodo(todo)
      .subscribe(todo => {
        this.todosService.todos = this.todosService.todos.concat(todo);
      });

    this.modalRemove();
  }

  modalRemove() {
    this.elementRef.nativeElement.remove();
  }
}
