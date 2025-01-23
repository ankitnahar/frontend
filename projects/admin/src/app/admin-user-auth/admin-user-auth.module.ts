import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AdminUserAuthRoutingModule} from './admin-user-auth-routing.module';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UtilityModule} from '../../utility/utility.module';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    AdminUserAuthRoutingModule
  ],
  declarations: [LoginComponent, ResetPasswordComponent, ChangePasswordComponent, LogoutComponent],
  entryComponents: [ChangePasswordComponent]
})

export class AdminUserAuthModule {
}
