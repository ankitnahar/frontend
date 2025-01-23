import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActiveClientComponent} from './active-client.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';

const routes = [
  {
    path: 'active-client',
    component: ActiveClientComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ActiveClientComponent],
  exports: [ActiveClientComponent]
})
export class ActiveClientModule {
}
