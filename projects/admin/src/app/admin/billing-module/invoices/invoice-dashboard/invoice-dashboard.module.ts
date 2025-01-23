import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {InvoiceDashboardComponent} from './invoice-dashboard.component';
import {AwaitingReviewComponent} from './tab-view/awaiting-review/awaiting-review.component';
import {InvoiceTemplateEditComponent} from './invoice-template-edit/invoice-template-edit.component';
import {InvoiceTemplateComponent} from './invoice-template-preview/invoice-template.component';
import {InvoiceLogDialogComponent} from './tab-view/invoice-log-dialog/invoice-log-dialog.component';
import {DismissDialogComponent} from "./manage-wip-invoice/dismiss-dialog/dismiss-dialog.component";

const routes = [
  {
    path: '',
    component: InvoiceDashboardComponent,
    canActivate: [AdminAuthGuard]
  },
  /* {
     path: 'awaiting-review',
     component: InvoiceDashboardComponent,
     canActivate: [AdminAuthGuard]
   },*/
  {
    path: 'invoice-template-preview',
    component: InvoiceTemplateComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'invoice-template-edit',
    component: InvoiceTemplateEditComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'manage-wip-invoice',
    loadChildren: './manage-wip-invoice/manage-wip-invoice.module#ManageWipInvoiceModule',
    canActivate: [AdminAuthGuard]
  }

];

@NgModule({
  declarations: [
    InvoiceDashboardComponent,
    AwaitingReviewComponent,
    InvoiceLogDialogComponent,
    InvoiceTemplateComponent,
    InvoiceTemplateEditComponent,
    DismissDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: [InvoiceLogDialogComponent, DismissDialogComponent]
})

export class InvoiceDashboardModule {

}
