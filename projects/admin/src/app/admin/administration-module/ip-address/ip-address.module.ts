import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IpAddressComponent} from './ip-address.component';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AddIpAddressDialogComponent} from './add-ip-address-dialog/add-ip-address-dialog.component';

const routes = [
  {
    path: '',
    component: IpAddressComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: AdminRoutes.IP_ADDRESS_ROUTE,
        component: IpAddressComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [IpAddressComponent, AddIpAddressDialogComponent],
  entryComponents: [AddIpAddressDialogComponent]
})
export class IpAddressModule {
}
