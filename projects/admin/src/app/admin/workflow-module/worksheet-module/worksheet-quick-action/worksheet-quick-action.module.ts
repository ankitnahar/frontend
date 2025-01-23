import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewActionAllocateReviewerDialog} from './review-or-knock-back-worksheet/review-action-allocate-reviewer-dialog/review-action-allocate-reviewer-dialog';
import {UtilityModule} from '../../../../../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [ReviewActionAllocateReviewerDialog],
  entryComponents: [ReviewActionAllocateReviewerDialog]
})
export class WorksheetQuickActionModule {
}
