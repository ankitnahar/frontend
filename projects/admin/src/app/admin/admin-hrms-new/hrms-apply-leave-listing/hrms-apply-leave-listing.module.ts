import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HrmsApplyLeaveListingComponent} from './hrms-apply-leave-listing.component';
import {ApplyLeaveFormComponent} from './apply-leave-form/apply-leave-form.component';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {ApproveLeaveDialogComponent} from './approve-leave-dialog/approve-leave-dialog.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';

const routes = [
  {
    path: '',
    component: HrmsApplyLeaveListingComponent,
    canActivate: [AdminAuthGuard]
  }, {
    path: 'apply-leave-form',
    component: ApplyLeaveFormComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [HrmsApplyLeaveListingComponent, ApplyLeaveFormComponent, ApproveLeaveDialogComponent],
  exports: [],
  entryComponents: [ApproveLeaveDialogComponent]
})
export class HrmsApplyLeaveListingModule {
}
