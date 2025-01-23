import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {EditTaskChecklistKnockbackComponent} from './edit-task-checklist-knockback.component';
import {AddNewRevieweTimesheetDialogComponent} from './add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component';

const routes = [
  {
    path: '',
    component: EditTaskChecklistKnockbackComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditTaskChecklistKnockbackComponent, AddNewRevieweTimesheetDialogComponent],
  entryComponents: [AddNewRevieweTimesheetDialogComponent]
})
export class EditTaskChecklistKnockbackModule {
}
