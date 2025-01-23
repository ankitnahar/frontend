import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {AdminAuthGuard} from '../../_guards/auth.guards';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'uncharged-units',
    loadChildren: './uncharged-units/uncharged-units.module#UnchargedUnitsModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'debtors-management',
    loadChildren: './debtors-management/debtors-management.module#DebtorsManagementModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'billing-information',
    loadChildren: './billing-information/billing-information.module#BillingInformationModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'invoices',
    loadChildren: './invoices/invoices.module#InvoicesModule',
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})

export class BillingModule {
}
