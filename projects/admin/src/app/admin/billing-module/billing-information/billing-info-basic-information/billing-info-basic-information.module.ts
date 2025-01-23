import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillingInfoBasicInformationComponent} from './billing-info-basic-information.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';
import {AddMoreClientTypeDialogComponent} from './add-more-client-type-dialog/add-more-client-type-dialog.component';

const routes = [
  {
    path: 'billing-info-basic-information',
    component: BillingInfoBasicInformationComponent,
    canActivate: [AdminAuthGuard],
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BillingInfoBasicInformationComponent, AddMoreClientTypeDialogComponent],
  entryComponents: [AddMoreClientTypeDialogComponent],
  exports: [BillingInfoBasicInformationComponent]
})
export class BillingInfoBasicInformationModule {
}
