import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrepareQueryComponent} from './prepare-query.component';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: PrepareQueryComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrepareQueryComponent]
})
export class PrepareQueryModule { }
