import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {ViewIncompletedWorksheetTimesheetComponent} from './view-incompleted-worksheet-timesheet/view-incompleted-worksheet-timesheet.component';
import {ReviewTimesheetComponent} from './review-timesheet/review-timesheet.component';
import {TodaysTimesheetComponent} from './todays-timesheet.component';
import {ViewMoreDetailsTimesheetDialogComponent} from './view-more-details-timesheet-dialog/view-more-details-timesheet-dialog.component';
import {AddNewTodaysTimesheetFormComponent} from './add-new-todays-timesheet-form/add-new-todays-timesheet-form.component';
import {UpdateTodaysTimesheetFormComponent} from './update-todays-timesheet-form/update-todays-timesheet-form.component';
import {AddNewReviewTimesheetFormComponent} from './review-timesheet/add-new-review-timesheet-form/add-new-review-timesheet-form.component';
import {WorksheetDashboardTabModule} from '../../worksheet-dashboard-tab/worksheet-dashboard-tab.module';

const routes = [
  {
    path: '',
    component: TodaysTimesheetComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'add-new-todays-timesheet-form',
    component: AddNewTodaysTimesheetFormComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'update-todays-timesheet-form',
    component: UpdateTodaysTimesheetFormComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'review-timesheet',
    component: ReviewTimesheetComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'review-timesheet/add-new-review-timesheet-form',
    component: AddNewReviewTimesheetFormComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'view-incompleted-worksheet-timesheet',
    component: ViewIncompletedWorksheetTimesheetComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    WorksheetDashboardTabModule
  ],
  declarations: [TodaysTimesheetComponent, ViewIncompletedWorksheetTimesheetComponent, ReviewTimesheetComponent, ViewMoreDetailsTimesheetDialogComponent, AddNewTodaysTimesheetFormComponent, UpdateTodaysTimesheetFormComponent, AddNewReviewTimesheetFormComponent
  ],
  exports: [],
  entryComponents: [ViewMoreDetailsTimesheetDialogComponent]

})
export class TodaysTimesheetModule {
}
