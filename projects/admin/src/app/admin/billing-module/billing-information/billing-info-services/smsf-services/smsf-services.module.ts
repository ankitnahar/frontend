import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {SmsfServicesComponent} from './smsf-services.component';


@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [SmsfServicesComponent],
  exports: [SmsfServicesComponent]
})
export class SmsfServicesModule {
}
