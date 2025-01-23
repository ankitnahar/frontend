import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from './user-history.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: '',
    component: UserHistoryComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [UserHistoryComponent]
})
export class UserHistoryModule { }
