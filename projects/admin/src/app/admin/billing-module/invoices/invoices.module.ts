import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: 'recurring',
    loadChildren: './recurring/recurring.module#RecurringModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'new-invoice',
    loadChildren: './new-invoice/new-invoice.module#NewInvoiceModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'one-off-invoice',
    loadChildren: './one-off-invoice/one-off-invoice.module#OneOffInvoiceModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'adjust-wip',
    loadChildren: './adjust-wip/adjust-wip.module#AdjustWipModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './invoice-dashboard/invoice-dashboard.module#InvoiceDashboardModule',
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [],
  entryComponents: []
})

export class InvoicesModule {
}
