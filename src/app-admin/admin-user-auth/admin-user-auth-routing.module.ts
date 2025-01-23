import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminRoutes} from '../../utility/constants/admin-route';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: AdminRoutes.LOGIN,
    component: LoginComponent,
  },
  {
    path: AdminRoutes.RESET_PASSWORD,
    component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminUserAuthRoutingModule {
}
