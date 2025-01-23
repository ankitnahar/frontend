import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminBankInformationComponent} from './admin-bank-information.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: '',
    component: AdminBankInformationComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AdminBankInformationComponent]
})
export class AdminBankInformationModule { }
