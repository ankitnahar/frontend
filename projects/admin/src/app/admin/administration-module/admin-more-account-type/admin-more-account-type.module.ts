import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminMoreAccountTypeComponent} from './admin-more-account-type.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: '',
    component: AdminMoreAccountTypeComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AdminMoreAccountTypeComponent]
})
export class AdminMoreAccountTypeModule { }
