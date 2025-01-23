import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscontinueClientComponent} from './discontinue-client.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';

const routes = [
  {
    path: 'discontinue-client',
    component: DiscontinueClientComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [DiscontinueClientComponent],
  exports: [DiscontinueClientComponent]
})
export class DiscontinueClientModule { }
