import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {HrmsDashboardComponent} from './hrms-dashboard/hrms-dashboard.component';
import {AdminAuthGuard} from '../../_guards/auth.guards';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../../../utility/constants/admin-route';


const routes: Routes = [
  {
    path: AdminRoutes.HRMS_DASHBOARD_ROUTE,
    component: HrmsDashboardComponent,
    canActivate: [AdminAuthGuard],
  }, 
  {
    path: 'shift-list',
    loadChildren: './hrms-dashboard/shift-list/shift-list.module#ShiftListModule',
    canActivate: [AdminAuthGuard]
  }, 
  {
    path: 'attendance-summary',
    loadChildren: './hrms-dashboard/attendance-summary/attendance-summary.module#AttendanceSummaryModule',
    canActivate: [AdminAuthGuard]
  } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [
    HrmsDashboardComponent
  ]
})

export class HrmsModule {
}
