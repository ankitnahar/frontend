import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubActivityCalculatorComponent} from './sub-activity-calculator.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {SubActivityAddNewCalculatorComponent} from './sub-activity-add-new-calculator/sub-activity-add-new-calculator.component';
import {AdditionalPayrollActivityScheduleComponent} from './additional-payroll-activity-schedule/additional-payroll-activity-schedule.component';

const routes = [
  {
    path: '',
    component: SubActivityCalculatorComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'additional-payroll-activity-schedule',
    component: AdditionalPayrollActivityScheduleComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [SubActivityCalculatorComponent, SubActivityAddNewCalculatorComponent, AdditionalPayrollActivityScheduleComponent],
  entryComponents: [SubActivityAddNewCalculatorComponent]
})
export class SubActivityCalculatorModule {
}
