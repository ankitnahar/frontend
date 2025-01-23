import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AdminUserAuthRoutingModule} from './admin-user-auth-routing.module';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {UtilityModule} from '../../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    AdminUserAuthRoutingModule,
    UtilityModule
  ],
  declarations: [LoginComponent, ResetPasswordComponent]
})

export class AdminUserAuthModule {
}
