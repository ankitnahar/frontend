import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';
import {ClientUsersComponent} from './client-users.component';
import { EditClientUserComponent } from './edit-client-user/edit-client-user.component';

const routes = [
  {
    path: 'client-users',
    component: ClientUsersComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'add-client-users',
    component: EditClientUserComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [EditClientUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  exports: []
})
export class ClientUsersModule { }
