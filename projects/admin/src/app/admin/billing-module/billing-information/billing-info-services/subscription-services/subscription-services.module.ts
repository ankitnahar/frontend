import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {SubscriptionServicesComponent} from './subscription-services.component';
import {AddSoftwareBasicSubscriptionComponent} from './add-software-basic-subscription/add-software-basic-subscription.component';
import {AddPlanBasicSubscriptionComponent} from './add-plan-basic-subscription/add-plan-basic-subscription.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [SubscriptionServicesComponent, AddSoftwareBasicSubscriptionComponent, AddPlanBasicSubscriptionComponent],
  exports: [SubscriptionServicesComponent],
  entryComponents: [AddSoftwareBasicSubscriptionComponent, AddPlanBasicSubscriptionComponent]
})
export class SubscriptionServicesModule {
}
