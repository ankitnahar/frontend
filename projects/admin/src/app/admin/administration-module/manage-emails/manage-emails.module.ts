import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageEmailsComponent} from './manage-emails.component';
import {RouterModule} from '@angular/router';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {UtilityModule} from '../../../../utility/utility.module';
import {SetEmailTemplateComponent} from './set-email-template/set-email-template.component';
import {EmailsEditCcDialogComponent} from './emails-edit-cc-dialog/emails-edit-cc-dialog.component';

const routes = [
  {
    path: '',
    component: ManageEmailsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'set-email-template',
    component: SetEmailTemplateComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [ManageEmailsComponent, SetEmailTemplateComponent, EmailsEditCcDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],

  entryComponents: [EmailsEditCcDialogComponent]
})
export class ManageEmailsModule {
}
