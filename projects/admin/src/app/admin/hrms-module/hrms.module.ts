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
    path: 'change-in-out-time',
    loadChildren: './hrms-dashboard/change-in-out-time/change-in-out-time.module#ChangeInOutTimeModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'shift-list',
    loadChildren: './hrms-dashboard/shift-list/shift-list.module#ShiftListModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'holiday-list',
    loadChildren: './hrms-dashboard/holiday-list/holiday-list.module#HolidayListModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'daily-report',
    loadChildren: './hrms-dashboard/daily-report/daily-report.module#DailyReportModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'attendance-summary',
    loadChildren: './hrms-dashboard/attendance-summary/attendance-summary.module#AttendanceSummaryModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'exception-shift',
    loadChildren: './hrms-dashboard/exception-shift/exception-shift.module#ExceptionShiftModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'holiday-master',
    loadChildren: './hrms-dashboard/holiday-master/holiday-master.module#HolidayMasterModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'leave-balance-list',
    loadChildren: './hrms-dashboard/leave-balance-list/leave-balance-list.module#LeaveBalanceListModule',
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
