import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {WorksheetDashboardTabModule} from './worksheet-dashboard-tab/worksheet-dashboard-tab.module';
import {WorksheetDashboardTabComponent} from './worksheet-dashboard-tab/worksheet-dashboard-tab.component';
import {WorksheetDashboardActionModule} from './worksheet-dashboard-action/worksheet-dashboard-action.module';
import {WorksheetQuickActionModule} from './worksheet-quick-action/worksheet-quick-action.module';
import { WorksheetModuleComponent } from './worksheet-module.component';

const routes = [
  {
    path: '',
    component: WorksheetModuleComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'worksheet-dashboard-tab',
    loadChildren: './worksheet-dashboard-tab/worksheet-dashboard-tab.module#WorksheetDashboardTabModule'
  },

  // Dashboard quick action

  {
    path: 'add-timesheet',
    loadChildren: './worksheet-dashboard-action/add-timesheet/add-timesheet.module#AddTimesheetModule'
  },
  {
    path: 'add-users-timesheet',
    loadChildren: './worksheet-dashboard-action/add-users-timesheet/add-users-timesheet.module#AddUsersTimesheetModule'
  },
  {
    path: 'add-worksheet',
    loadChildren: './worksheet-dashboard-action/add-worksheet/add-worksheet.module#AddWorksheetModule'
  },
  {
    path: 'change-multiple-worksheet-status',
    loadChildren: './worksheet-dashboard-action/change-multiple-worksheet-status/change-multiple-worksheet-status.module#ChangeMultipleWorksheetStatusModule'
  },
  {
    path: 'checklist-email-preview',
    loadChildren: './worksheet-dashboard-action/checklist-email-preview/checklist-email-preview.module#ChecklistEmailPreviewModule'
  },
  {
    path: 'checklist-email-review',
    loadChildren: './worksheet-dashboard-action/checklist-email-review/checklist-email-review.module#ChecklistEmailReviewModule'
  },
  {
    path: 'edit-task-checklist',
    loadChildren: './worksheet-dashboard-action/edit-task-checklist/edit-task-checklist.module#EditTaskChecklistModule'
  },
  {
    path: 'edit-task-checklist-knockback',
    loadChildren: './worksheet-dashboard-action/edit-task-checklist-knockback/edit-task-checklist-knockback.module#EditTaskChecklistKnockbackModule'
  },
  {
    path: 'edit-task-checklist-peer-review',
    loadChildren: './worksheet-dashboard-action/edit-task-checklist-peer-review/edit-task-checklist-peer-review.module#EditTaskChecklistPeerReviewModule'
  },
  {
    path: 'edit-task-checklist-tam',
    loadChildren: './worksheet-dashboard-action/edit-task-checklist-tam/edit-task-checklist-tam.module#EditTaskChecklistTamModule'
  },
  {
    path: 'task-checklist',
    loadChildren: './worksheet-dashboard-action/task-checklist/task-checklist.module#TaskChecklistModule'
  },
  //Quick action
  {
    path: 'todays-worksheet',
    loadChildren: './worksheet-quick-action/todays-worksheet/todays-worksheet.module#TodaysWorksheetModule'
  },
  {
    path: 'hierarchy',
    loadChildren: './worksheet-quick-action/hierarchy/hierarchy.module#HierarchyModule'
  },
  {
    path: 'sub-client-list',
    loadChildren: './worksheet-quick-action/sub-client-list/sub-client-list.module#SubClientListModule'
  },
  {
    path: 'training-list',
    loadChildren: './worksheet-quick-action/training-list/training-list.module#TrainingListModule'
  },
  {
    path: 'master-checklist',
    loadChildren: './worksheet-quick-action/worksheet-master-checklist/worksheet-master-checklist.module#WorksheetMasterChecklistModule'
  },
  {
    path: 'peer-review-worksheet-listing',
    loadChildren: './worksheet-quick-action/peer-review-worksheet-listing/peer-review-worksheet-listing.module#PeerReviewWorksheetListingModule'
  },
  {
    path: 'review-or-knock-back-worksheet',
    loadChildren: './worksheet-quick-action/review-or-knock-back-worksheet/review-or-knock-back-worksheet.module#ReviewOrKnockBackWorksheetModule'
  },
  {
    path: 'todays-timesheet',
    loadChildren: './worksheet-quick-action/todays-timesheet/todays-timesheet.module#TodaysTimesheetModule'
  },
  {
    path: 'prepare-query',
    loadChildren: './worksheet-dashboard-action/prepare-query/prepare-query.module#PrepareQueryModule'
  },
  {
    path: 'view-worksheet-comments',
    loadChildren: './worksheet-quick-action/view-worksheet-comments/view-worksheet-comments.module#ViewWorksheetCommentsModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    WorksheetDashboardActionModule,
    WorksheetQuickActionModule
  ],
  declarations: [WorksheetModuleComponent],
  entryComponents: [],
  exports: [WorksheetDashboardTabModule]
})

export class WorksheetModule {
}
