import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {AdminHrmsNewComponent} from './admin-hrms-new.component';
import {UtilityModule} from '../../../utility/utility.module';

export const routes = [
  {
    path: '',
    component: AdminHrmsNewComponent
  }, 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [AdminHrmsNewComponent],
  exports: [RouterModule]
})
export class HrmsNewDashboardRoutingModule {
}
