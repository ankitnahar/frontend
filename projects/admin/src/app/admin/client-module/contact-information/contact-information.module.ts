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
  }

];

@NgModule({
  declarations: [
    ContactInformationComponent,
    ContactComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    ContactModule,
    AddressModule
  ],
  entryComponents: []
})

export class ContactInformationModule {

}
