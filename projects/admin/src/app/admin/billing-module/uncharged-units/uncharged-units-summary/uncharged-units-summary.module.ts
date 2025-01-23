import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';
import {UnchargedUnitsSummaryComponent} from './uncharged-units-summary.component';
import {UnchargedSummaryTimesheetSummaryComponent} from './uncharged-summary-timesheet-summary/uncharged-summary-timesheet-summary.component';

const routes = [
  {
    path: 'uncharged-units-summary',
    component: UnchargedUnitsSummaryComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    UnchargedUnitsSummaryComponent,
    UnchargedSummaryTimesheetSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class UnchargedUnitsSummaryModule {

}
