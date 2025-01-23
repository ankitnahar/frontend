import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyProfileComponent} from './my-profile.component';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';

const routes = [
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [MyProfileComponent],
  exports: [MyProfileComponent]
})
export class MyProfileModule { }
