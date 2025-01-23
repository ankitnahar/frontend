import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SoftwareManagementComponent} from './software-management.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {UtilityModule} from '../../../../utility/utility.module';
import {AddSoftwareDetailsDialogComponent} from './add-software-details-dialog/add-software-details-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareManagementComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: AdminRoutes.SOFTWARE_MANAGEMENT_ROUTE,
        component: SoftwareManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoftwareManagementComponent, AddSoftwareDetailsDialogComponent],
  entryComponents: [AddSoftwareDetailsDialogComponent]
})
export class SoftwareManagementModule {
}
