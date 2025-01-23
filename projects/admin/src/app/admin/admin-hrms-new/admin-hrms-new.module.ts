import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {HrmsNewDashboardRoutingModule} from './hrms-new-dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HrmsNewDashboardRoutingModule,
    UtilityModule
  ],
  declarations: []
})
export class AdminHrmsNewModule {
}
