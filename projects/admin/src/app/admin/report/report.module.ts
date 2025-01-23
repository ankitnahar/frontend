import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {ClientReportComponent} from './client-report/client-report.component';
import {ShareReportDialogComponent} from './client-report/share-report-dialog/share-report-dialog.component';
import {BankReportComponent} from './bank-report/bank-report.component';
import {ClientAllocationReportComponent} from './client-allocation-report/client-allocation-report.component';
import {ClientWiseInvoiceReportComponent} from './client-wise-invoice-report/client-wise-invoice-report.component';
import {InvoiceReportComponent} from './invoice-report/invoice-report.component';
import {MonthlyInvoiceReportComponent} from './monthly-invoice-report/monthly-invoice-report.component';
import {TicketReportComponent} from './ticket-report/ticket-report.component';
import {BillingReportComponent} from './billing-report/billing-report.component';
import {BillingServiceReportComponent} from './billing-service-report/billing-service-report.component';
import {BillingSubactivityReportComponent} from './billing-subactivity-report/billing-subactivity-report.component';
import {BillingTaxTurnoverReportComponent} from './billing-tax-turnover-report/billing-tax-turnover-report.component';
import {BillingHostingUserReportComponent} from './billing-hosting-user-report/billing-hosting-user-report.component';
import {AdminAuthGuard} from '../../_guards/auth.guards';
import {RouterModule, Routes} from '@angular/router';
import {WorksheetReportComponent} from './worksheet-report/worksheet-report.component';

const routes: Routes = [
  {
    path: 'client-report',
    component: ClientReportComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'bank-report',
    component: BankReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'client-allocation-report',
    component: ClientAllocationReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'billing-report',
    component: BillingReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'client-wise-invoice-report',
    component: ClientWiseInvoiceReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'invoice-report',
    component: InvoiceReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'worksheet-report',
    component: WorksheetReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'monthly-invoice-report',
    component: MonthlyInvoiceReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'ticket-report',
    component: TicketReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'billing-hosting-user-report',
    component: BillingHostingUserReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'billing-service-report',
    component: BillingServiceReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'billing-subactivity-report',
    component: BillingSubactivityReportComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'billing-tax-turnover-report',
    component: BillingTaxTurnoverReportComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    [RouterModule.forChild(routes)],
  ],
  declarations: [ClientReportComponent, ShareReportDialogComponent, BankReportComponent, ClientAllocationReportComponent, ClientWiseInvoiceReportComponent, InvoiceReportComponent, MonthlyInvoiceReportComponent, TicketReportComponent, BillingReportComponent, BillingServiceReportComponent, BillingSubactivityReportComponent, BillingTaxTurnoverReportComponent, BillingHostingUserReportComponent, WorksheetReportComponent],
  entryComponents: [
    ShareReportDialogComponent,
  ]
})
export class ReportModule {
}
