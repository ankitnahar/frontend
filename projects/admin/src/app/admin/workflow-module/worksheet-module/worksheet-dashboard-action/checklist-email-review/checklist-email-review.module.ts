import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {ChecklistEmailReviewComponent} from './checklist-email-review.component';

const routes = [
  {
    path: '',
    component: ChecklistEmailReviewComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChecklistEmailReviewComponent]
})
export class ChecklistEmailReviewModule {
}
