import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillingInformationComponent} from './billing-information.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

const routes = [
  {
    path: '',
    component: BillingInformationComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: AdminRoutes.BILLING_INFORMATION_ROUTE,
        component: BillingInformationComponent
      }
    ]
  },
  {
    path: 'billing-info-services',
    loadChildren: './billing-info-services/billing-info-services.module#BillingInfoServicesModule'
  },
  {
    path: 'billing-info-basic-information',
    loadChildren: './billing-info-basic-information/billing-info-basic-information.module#BillingInfoBasicInformationModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillingInformationComponent],
})
export class BillingInformationModule {
}
