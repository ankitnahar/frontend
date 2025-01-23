import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {UnchargedUnitsComponent} from './uncharged-units.component';
import {UnchargedUnitsSummaryModule} from './uncharged-units-summary/uncharged-units-summary.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: '',
    component: UnchargedUnitsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'uncharged-units-summary',
    loadChildren: './uncharged-units-summary/uncharged-units-summary.module#UnchargedUnitsSummaryModule',
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    UnchargedUnitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    UnchargedUnitsSummaryModule
  ],
  entryComponents: []
})

export class UnchargedUnitsModule {

}
