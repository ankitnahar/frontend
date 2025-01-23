import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from "../../../_guards/auth.guards";
import {RouterModule} from "@angular/router";
import {UtilityModule} from "../../../../utility/utility.module";
import {QueryDashboardTabModule} from "./query-dashboard-tab/query-dashboard-tab.module";
import {QueryDashboardTabComponent} from "./query-dashboard-tab/query-dashboard-tab.component";

const routes = [
  {
    path: '',
    component: QueryDashboardTabComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'query-dashboard-tab',
    loadChildren: './query-dashboard-tab/query-dashboard-tab.module#QueryDashboardTabModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [],
  exports: [QueryDashboardTabModule]
})
export class QueryModuleModule {
}
