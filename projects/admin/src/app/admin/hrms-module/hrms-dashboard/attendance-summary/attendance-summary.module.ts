import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {AttendanceSummaryComponent} from './attendance-summary.component';
import {EarlyLeavingDialogComponent} from './early-leaving-dialog/early-leaving-dialog.component';
import {UserPendingTimesheetApprovedModule} from './user-pending-timesheet-approved/user-pending-timesheet-approved.module';
import {UserPendingTimesheetModule} from './user-pending-timesheet/user-pending-timesheet.module';
import {AttendanceSummaryReportModule} from './attendance-summary-report/attendance-summary-report.module';
import {ExceptionCaseDialogComponent} from './exception-case-dialog/exception-case-dialog.component';
import {FetchInOutDialogComponent} from './fetch-in-out-dialog/fetch-in-out-dialog.component';

const routes = [
  {
    path: '',
    component: AttendanceSummaryComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    UserPendingTimesheetApprovedModule,
    UserPendingTimesheetModule,
    AttendanceSummaryReportModule
  ],
  declarations: [AttendanceSummaryComponent, EarlyLeavingDialogComponent, ExceptionCaseDialogComponent, FetchInOutDialogComponent],
  entryComponents: [EarlyLeavingDialogComponent, ExceptionCaseDialogComponent, FetchInOutDialogComponent]
})
export class AttendanceSummaryModule {
}
