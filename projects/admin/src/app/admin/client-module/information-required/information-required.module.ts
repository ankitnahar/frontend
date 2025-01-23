import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationRequiredTabModule} from "./information-required-tab/information-required-tab.module";
import {AdminAuthGuard} from "../../../_guards/auth.guards";
import {InformationRequiredTabComponent} from "./information-required-tab/information-required-tab.component";
import {RouterModule} from "@angular/router";
import {UtilityModule} from "../../../../utility/utility.module";


const routes = [
  {
    path: '',
    component: InformationRequiredTabComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'information-required-tab',
    loadChildren: './information-required-tab/information-required-tab.module#InformationRequiredTabModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [],
  exports: [InformationRequiredTabModule]
})
export class InformationRequiredModule {
}
