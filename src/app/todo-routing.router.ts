import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TodoWrapComponent} from "./todo-wrap/todo-wrap.component";
import {MainPanelComponent} from "./main-panel/main-panel.component";

const routes: Routes = [
  {path: '', component: MainPanelComponent},
  {path: ':id', component: TodoWrapComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TodoRoutingRouter {
}
