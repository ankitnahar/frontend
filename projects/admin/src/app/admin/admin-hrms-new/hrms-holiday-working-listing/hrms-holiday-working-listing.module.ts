import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HrmsHolidayWorkingListingComponent} from './hrms-holiday-working-listing.component';
import {ApplyHolidayWorkingFormComponent} from './apply-holiday-working-form/apply-holiday-working-form.component';
import {ApproveHolidayWorkingDialogComponent} from './approve-holiday-working-dialog/approve-holiday-working-dialog.component';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';

const routes = [
  {
    path: 'hrms-holiday-working-listing',
    component: HrmsHolidayWorkingListingComponent,
    canActivate: [AdminAuthGuard]
  }, {
    path: 'apply-holiday-working-form',
    component: ApplyHolidayWorkingFormComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [HrmsHolidayWorkingListingComponent, ApplyHolidayWorkingFormComponent, ApproveHolidayWorkingDialogComponent],
  entryComponents : [ApproveHolidayWorkingDialogComponent],
  exports: [HrmsHolidayWorkingListingComponent, ApplyHolidayWorkingFormComponent, ApproveHolidayWorkingDialogComponent]
})
export class HrmsHolidayWorkingListingModule { }
