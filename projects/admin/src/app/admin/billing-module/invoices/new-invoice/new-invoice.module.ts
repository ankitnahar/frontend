import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {NewInvoiceComponent} from './new-invoice.component';

const routes = [
  {
    path: '',
    component: NewInvoiceComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    NewInvoiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class NewInvoiceModule {

}
