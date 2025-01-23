import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {EditTaskChecklistPeerReviewComponent} from './edit-task-checklist-peer-review.component';
import {AddTimesheetDialogPeerReviewComponent} from './add-timesheet-dialog-peer-review/add-timesheet-dialog-peer-review.component';

const routes = [
  {
    path: '',
    component: EditTaskChecklistPeerReviewComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditTaskChecklistPeerReviewComponent, AddTimesheetDialogPeerReviewComponent],
  entryComponents: [AddTimesheetDialogPeerReviewComponent]
})
export class EditTaskChecklistPeerReviewModule {
}
