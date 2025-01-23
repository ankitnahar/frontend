import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebtorsManagementComponent} from './debtors-management.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AddCommentsDialogComponent} from './add-comments-dialog/add-comments-dialog.component';
import {DebtorsManagementEmailTemplateComponent} from './debtors-management-email-template/debtors-management-email-template.component';
import {SeparateInvoiceDialogComponent} from './separate-invoice-dialog/separate-invoice-dialog.component';
import {AngularEditorModule} from '@kolkov/angular-editor';

const routes = [
  {
    path: '',
    component: DebtorsManagementComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'debtors-management-email-template',
    component: DebtorsManagementEmailTemplateComponent,
    canActivate: [AdminAuthGuard]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    AngularEditorModule
  ],
  declarations: [DebtorsManagementComponent, AddCommentsDialogComponent, DebtorsManagementEmailTemplateComponent, SeparateInvoiceDialogComponent],
  entryComponents: [AddCommentsDialogComponent, SeparateInvoiceDialogComponent]
})
export class DebtorsManagementModule {
}
