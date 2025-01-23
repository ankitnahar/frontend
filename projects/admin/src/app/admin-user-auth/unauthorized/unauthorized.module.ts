import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnauthorizedComponent} from './unauthorized.component';
import {UtilityModule} from '../../../utility/utility.module';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [UnauthorizedComponent]
})
export class UnauthorizedModule {
}
