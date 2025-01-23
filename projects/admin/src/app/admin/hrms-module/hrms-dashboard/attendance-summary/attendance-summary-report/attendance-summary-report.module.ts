import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttendanceSummaryReportComponent} from './attendance-summary-report.component';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {LeaveAdjustDialogComponent} from './leave-adjust-dialog/leave-adjust-dialog.component';
import {UploadAdjustmentDialogComponent} from './upload-adjustment-dialog/upload-adjustment-dialog.component';

const routes = [
  {
    path: 'attendance-summary-report',
    component: AttendanceSummaryReportComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AttendanceSummaryReportComponent, LeaveAdjustDialogComponent, UploadAdjustmentDialogComponent],
  entryComponents: [LeaveAdjustDialogComponent, UploadAdjustmentDialogComponent]
})
export class AttendanceSummaryReportModule {
}
