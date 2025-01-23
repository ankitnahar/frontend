import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {OneOffInvoiceComponent} from './one-off-invoice.component';

const routes = [
  {
    path: '',
    component: OneOffInvoiceComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    OneOffInvoiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class OneOffInvoiceModule {

}
