import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SideBarComponent} from './side-bar/side-bar.component';
import {NavClauseComponent} from './nav-clause/nav-clause.component';
import {CompleteTodoCounterPipe} from './pipes/complete-todo-counter.pipe';
import {StatBlockComponent} from './stat-block/stat-block.component';
import {TodoTypeCountPipe} from './pipes/todo-type-count.pipe';
import {TodoCreateFormComponent} from './todo-create-form/todo-create-form.component';
import {MainPanelComponent} from './main-panel/main-panel.component';
import {PanelTypeComponent} from './panel-type/panel-type.component';
import {TodosSelectorPipe} from './pipes/todos-selector.pipe';
import {TodoComponent} from './todo/todo.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchPipe} from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavClauseComponent,
    CompleteTodoCounterPipe,
    StatBlockComponent,
    TodoTypeCountPipe,
    TodoCreateFormComponent,
    MainPanelComponent,
    PanelTypeComponent,
    TodosSelectorPipe,
    TodoComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
