import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillingInfoServicesComponent} from './billing-info-services.component';
import {BasicInformationServicesComponent} from './basic-information-services/basic-information-services.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {BillingInfoBasicInformationModule} from '../billing-info-basic-information/billing-info-basic-information.module';
import {BookkeepingServicesModule} from './bookkeeping-services/bookkeeping-services.module';
import {HostingServicesModule} from './hosting-services/hosting-services.module';
import {TaxationServicesModule} from './taxation-services/taxation-services.module';
import {PayrollServicesModule} from './payroll-services/payroll-services.module';
import {SmsfServicesModule} from './smsf-services/smsf-services.module';
import {SubscriptionServicesModule} from './subscription-services/subscription-services.module';
import {ViewBillingInformationComponent} from './view-billing-information/view-billing-information.component';

const routes = [
  {
    path: '',
    component: BillingInfoServicesComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'view-billing-information',
    component: ViewBillingInformationComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes),
    BillingInfoBasicInformationModule,
    BookkeepingServicesModule,
    HostingServicesModule,
    TaxationServicesModule,
    PayrollServicesModule,
    SmsfServicesModule,
    SubscriptionServicesModule
  ],
  declarations: [BillingInfoServicesComponent, BasicInformationServicesComponent, ViewBillingInformationComponent],
  exports: [
    BillingInfoBasicInformationModule,
    BookkeepingServicesModule,
    HostingServicesModule,
    TaxationServicesModule,
    PayrollServicesModule,
    SmsfServicesModule,
    SubscriptionServicesModule,
    BillingInfoServicesComponent, BasicInformationServicesComponent]
})
export class BillingInfoServicesModule {
}
