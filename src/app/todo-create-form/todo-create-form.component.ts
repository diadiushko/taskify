import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo, TodosService} from "../services/todos.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss']
})

export class TodoCreateFormComponent implements OnInit, OnDestroy {
  form!: FormGroup
  sub$!: Subscription
  todo!: Todo;

  constructor(public todosService: TodosService, private elementRef: ElementRef) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('medium', Validators.required)
    })

    this.sub$ = this.todosService.addTodo(this.todo)
      .subscribe();
  }


  onSubmit() {
    this.todo = {
      id: this.todosService.todos.length + 1,
      title: this.form.get('name')?.value,
      completed: false,
      type: this.form.get('type')?.value,
      date: new Date()
    }

    console.log(this.todosService.todos)
    this.todosService.todos.push(this.todo)

    this.modalRemove();
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  modalRemove() {
    this.elementRef.nativeElement.remove();
  }
}
