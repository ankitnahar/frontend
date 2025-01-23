import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminMoreParticularTypeComponent} from './admin-more-particular-type.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: '',
    component: AdminMoreParticularTypeComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AdminMoreParticularTypeComponent]
})
export class AdminMoreParticularTypeModule { }
