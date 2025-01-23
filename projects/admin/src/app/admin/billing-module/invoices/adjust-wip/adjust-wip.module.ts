import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {AdjustWipComponent} from './adjust-wip.component';

const routes = [
  {
    path: '',
    component: AdjustWipComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    AdjustWipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class AdjustWipModule {

}
