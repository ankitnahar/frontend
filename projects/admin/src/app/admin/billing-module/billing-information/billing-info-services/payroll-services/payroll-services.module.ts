import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {PayrollServicesComponent} from './payroll-services.component';
import {PayrollBasicComponent} from './payroll-basic/payroll-basic.component';
import {PayrollAdditionalActivityCalculatorComponent} from './payroll-additional-activity-calculator/payroll-additional-activity-calculator.component';


@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [PayrollServicesComponent, PayrollBasicComponent, PayrollAdditionalActivityCalculatorComponent],
  exports: [PayrollServicesComponent]
})
export class PayrollServicesModule {
}
