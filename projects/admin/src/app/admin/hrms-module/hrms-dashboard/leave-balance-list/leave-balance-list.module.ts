import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeaveBalanceListComponent} from './leave-balance-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {UploadLeaveBalanceListComponent} from './upload-leave-balance-list/upload-leave-balance-list.component';
import {EditLeaveBalanceDialogComponent} from './edit-leave-balance-dialog/edit-leave-balance-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveBalanceListComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaveBalanceListComponent, UploadLeaveBalanceListComponent, EditLeaveBalanceDialogComponent],
  entryComponents: [UploadLeaveBalanceListComponent, EditLeaveBalanceDialogComponent]
})
export class LeaveBalanceListModule {
}
