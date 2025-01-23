import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewInformationComponent} from './view-information.component';
import {AdminAuthGuard} from "../../../../../_guards/auth.guards";
import {UtilityModule} from "../../../../../../utility/utility.module";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '',
    component: ViewInformationComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ViewInformationComponent]
})
export class ViewInformationModule {
}
