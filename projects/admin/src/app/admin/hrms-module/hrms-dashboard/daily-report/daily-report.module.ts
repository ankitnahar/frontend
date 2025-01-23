import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {DailyReportComponent} from './daily-report.component';
import {InOutViewDialog} from './view-dialog/in-out-view-dialog';

const routes = [
  {
    path: '',
    component: DailyReportComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [InOutViewDialog, DailyReportComponent],
  entryComponents: [InOutViewDialog]

})
export class DailyReportModule {
}
