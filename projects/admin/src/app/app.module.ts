import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminAuthGuard} from './_guards/auth.guards';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ToastConfig} from '../utility/constants/base-constants';
import {AdminUserAuthModule} from './admin-user-auth/admin-user-auth.module';
import {AdminModule} from './admin/admin.module';
import {UtilityModule} from '../utility/utility.module';
import {PublicModule} from './public-module/public.module';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../utility/constants/admin-route';

const routes: Routes = [
  {
    path: '',
    redirectTo: AdminRoutes.LOGIN,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: AdminRoutes.LOGIN,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(ToastConfig),
    RouterModule.forRoot(routes),
    AdminUserAuthModule,
    AdminModule,
    UtilityModule.forRoot(),
    PublicModule,
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
