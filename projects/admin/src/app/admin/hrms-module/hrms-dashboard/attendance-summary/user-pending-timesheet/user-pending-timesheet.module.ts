import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {UserPendingTimesheetComponent} from './user-pending-timesheet.component';
import {AddUserPendingTimesheetDialogComponent} from './add-user-pending-timesheet-dialog/add-user-pending-timesheet-dialog.component';

const routes = [
  {
    path: 'user-pending-timesheet',
    component: UserPendingTimesheetComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [UserPendingTimesheetComponent, AddUserPendingTimesheetDialogComponent],
  entryComponents: [AddUserPendingTimesheetDialogComponent]
})
export class UserPendingTimesheetModule {
}
