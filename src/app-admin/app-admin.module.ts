import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppAdminRoutingModule} from './app-admin-routing.module';
import {AppAdminComponent} from './app-admin.component';
import {AdminUserAuthModule} from './admin-user-auth/admin-user-auth.module';
import {AdminModule} from './admin/admin.module';
import {ToastConfig} from '../utility/constants/base-constants';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(ToastConfig),
    AdminModule,
    AdminUserAuthModule,
    AppAdminRoutingModule
  ],
  declarations: [AppAdminComponent],
  bootstrap: [AppAdminComponent]
})

export class AppAdminModule {
}
