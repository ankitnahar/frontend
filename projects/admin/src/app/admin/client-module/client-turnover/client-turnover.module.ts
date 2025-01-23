import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {ClientTurnoverComponent} from './client-turnover.component';
import {AddEditClientTurnoverComponent} from './add-edit-client-turnover/add-edit-client-turnover.component';

const routes = [
  {
    path: '',
    component: ClientTurnoverComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    ClientTurnoverComponent,
    AddEditClientTurnoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class ClientTurnoverModule {

}
