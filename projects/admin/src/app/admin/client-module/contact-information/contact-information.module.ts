import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {ContactModule} from './contact/contact.module';
import {AddressModule} from './address/address.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {ContactInformationComponent} from './contact-information.component';
import {ContactComponent} from './contact/contact.component';
import {AddressComponent} from './address/address.component';
import {ContactInfoNewsletterComponent} from "./contact-info-newsletter/contact-info-newsletter.component";
import {ClientUsersModule} from './client-users/client-users.module';
import {ClientUsersComponent} from "./client-users/client-users.component";

const routes = [
  {
    path: '',
    component: ContactInformationComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'address',
    loadChildren: './address/address.module#AddressModule'
  },
  {
    path: 'client-users',
    loadChildren: './client-users/client-users.module#ClientUsersModule'
  }

];

@NgModule({
  declarations: [
    ContactInformationComponent,
    ContactComponent,
    AddressComponent,
    ContactInfoNewsletterComponent,
    ClientUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    ContactModule,
    AddressModule,
    ClientUsersModule
  ],
  entryComponents: []
})

export class ContactInformationModule {

}
