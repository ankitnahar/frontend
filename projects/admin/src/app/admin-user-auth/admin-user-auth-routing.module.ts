import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AdminAuthGuard} from '../_guards/auth.guards';
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {AdminRoutes} from '../../utility/constants/admin-route';
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {
    path: AdminRoutes.LOGIN,
    component: LoginComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.RESET_PASSWORD,
    component: ResetPasswordComponent
  },  
  {
    path: AdminRoutes.CHANGE_PASSWORD,
    component: ChangePasswordComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.LOGOUT,
    component: LogoutComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'unauthorized',
    loadChildren: './unauthorized/unauthorized.module#UnauthorizedModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminUserAuthRoutingModule {
}
