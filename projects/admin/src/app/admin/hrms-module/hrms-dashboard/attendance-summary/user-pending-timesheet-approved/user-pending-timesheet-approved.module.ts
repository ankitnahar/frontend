import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {UserPendingTimesheetApprovedComponent} from './user-pending-timesheet-approved.component';
import {ApproveMissTimesheetDialogComponent} from './approve-miss-timesheet-dialog/approve-miss-timesheet-dialog.component';

const routes = [
  {
    path: 'user-pending-timesheet-approved',
    component: UserPendingTimesheetApprovedComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [UserPendingTimesheetApprovedComponent, ApproveMissTimesheetDialogComponent],
  entryComponents: [ApproveMissTimesheetDialogComponent]
})
export class UserPendingTimesheetApprovedModule {
}
