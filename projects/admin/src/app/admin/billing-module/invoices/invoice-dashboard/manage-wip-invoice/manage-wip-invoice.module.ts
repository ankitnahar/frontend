import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ManageWipInvoiceComponent} from './manage-wip-invoice.component';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {MoreDetailsDialogComponent} from './more-details-dialog/more-details-dialog.component';
import {AdvanceInvoicesComponent} from './advance-invoices/advance-invoices.component';
import {ManageWipInvoiceViewComponent} from './manage-wip-invoice-view/manage-wip-invoice-view.component';
import {PreviewInvoiceComponent} from './preview-invoice/preview-invoice.component';
import {PreviewInvoiceViewComponent} from './preview-invoice-view/preview-invoice-view.component';

const routes = [
  {
    path: '',
    component: ManageWipInvoiceComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'advance-invoices',
    component: AdvanceInvoicesComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'manage-wip-invoice-view',
    component: ManageWipInvoiceViewComponent,
    canActivate: [AdminAuthGuard]
  },
  /*  {
      path: 'manage-wip-invoice',
      component: ManageWipInvoiceViewComponent,
      canActivate: [AdminAuthGuard]
    },*/
  {
    path: 'wip-preview',
    component: PreviewInvoiceComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'wip-preview-view',
    component: PreviewInvoiceViewComponent,
    canActivate: [AdminAuthGuard]
  }

];

@NgModule({
  declarations: [MoreDetailsDialogComponent,
    ManageWipInvoiceComponent,
    AdvanceInvoicesComponent,
    ManageWipInvoiceViewComponent,
    PreviewInvoiceComponent,
    PreviewInvoiceViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: [MoreDetailsDialogComponent]
})

export class ManageWipInvoiceModule {

}
