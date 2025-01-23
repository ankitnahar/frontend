import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AddUsersTimesheetComponent} from './add-users-timesheet.component';

const routes = [
  {
    path: '',
    component: AddUsersTimesheetComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddUsersTimesheetComponent],
  exports: [AddUsersTimesheetComponent]
})
export class AddUsersTimesheetModule {
}
