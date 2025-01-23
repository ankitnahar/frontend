import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {EditTaskChecklistComponent} from './edit-task-checklist.component';
import {AddTimesheetDialogComponent} from './add-timesheet-dialog/add-timesheet-dialog.component';

const routes = [
  {
    path: '',
    component: EditTaskChecklistComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditTaskChecklistComponent, AddTimesheetDialogComponent],
  entryComponents: [AddTimesheetDialogComponent]
})
export class EditTaskChecklistModule {
}
