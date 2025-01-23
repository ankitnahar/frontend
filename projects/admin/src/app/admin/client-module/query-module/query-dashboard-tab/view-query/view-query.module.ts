import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewQueryComponent} from './view-query.component';
import {AdminAuthGuard} from "../../../../../_guards/auth.guards";
import {RouterModule} from "@angular/router";
import {UtilityModule} from "../../../../../../utility/utility.module";

const routes = [
  {
    path: '',
    component: ViewQueryComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewQueryComponent]
})
export class ViewQueryModule {
}
