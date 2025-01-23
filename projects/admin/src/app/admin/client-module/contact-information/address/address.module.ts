import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {ViewAddressComponent} from './view-address/view-address.component';
import {AddAddressComponent} from './add-address/add-address.component';

const routes = [
  {
    path: 'add-address',
    component: AddAddressComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    ViewAddressComponent,
    AddAddressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  exports: [
    ViewAddressComponent
  ],
  entryComponents: [ViewAddressComponent]
})

export class AddressModule {

}
