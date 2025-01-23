import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewerWriteoffComponent} from './reviewer-writeoff.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {ReviewerWriteoffCommentsDialogComponent} from './reviewer-writeoff-comments-dialog/reviewer-writeoff-comments-dialog.component';
import {ReviewerWriteoffApproveCommentsDialogComponent} from './reviewer-writeoff-approve-comments-dialog/reviewer-writeoff-approve-comments-dialog.component';

const routes = [
  {
    path: '',
    component: ReviewerWriteoffComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'reviewer-writeoff-archived-list',
    loadChildren: './reviewer-writeoff-archived-list/reviewer-writeoff-archived-list.module#ReviewerWriteoffArchivedListModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ReviewerWriteoffComponent, ReviewerWriteoffCommentsDialogComponent, ReviewerWriteoffApproveCommentsDialogComponent],
  entryComponents: [ReviewerWriteoffCommentsDialogComponent, ReviewerWriteoffApproveCommentsDialogComponent]
})
export class ReviewerWriteoffModule {
}
