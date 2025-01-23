import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewIncompletedComponent} from './view-incompleted/view-incompleted.component';
import {ViewCompletedComponent} from './view-completed/view-completed.component';
import {ViewBefreeWorksheetComponent} from './view-befree-worksheet/view-befree-worksheet.component';
import {MyworksheetComponent} from './myworksheet/myworksheet.component';
import {UtilityModule} from '../../../../../utility/utility.module';
import {WorksheetDashboardTabComponent} from './worksheet-dashboard-tab.component';
import {WorksheetReportComponent} from './worksheet-report/worksheet-report.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {AddContactComponent} from '../../../client-module/contact-information/contact/add-contact/add-contact.component';

const routes = [
  {
    path: 'worksheet-dashboard-tab',
    component: WorksheetDashboardTabComponent,
    canActivate: [AdminAuthGuard]
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ViewIncompletedComponent, ViewCompletedComponent, ViewBefreeWorksheetComponent, MyworksheetComponent, WorksheetDashboardTabComponent, WorksheetReportComponent],
  exports: [ViewIncompletedComponent]
})
export class WorksheetDashboardTabModule {
}
