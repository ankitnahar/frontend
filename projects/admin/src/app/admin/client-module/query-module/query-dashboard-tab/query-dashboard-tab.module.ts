import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QueryDashboardTabComponent} from './query-dashboard-tab.component';
import {PendingQueriesListComponent} from './pending-queries-list/pending-queries-list.component';
import {RouterModule} from "@angular/router";
import {SnoozeQueryDialogComponent} from './snooze-query-dialog/snooze-query-dialog.component';
import {QueryMoveToTamDialogComponent} from './query-move-to-tam-dialog/query-move-to-tam-dialog.component';
import {UtilityModule} from '../../../../../utility/utility.module';
import {QueryLogDialogComponent} from "./query-log-dialog/query-log-dialog.component";
import {UploadQueryDocumentsDialogComponent} from "./upload-query-documents-dialog/upload-query-documents-dialog.component";
import {QueryReminderLogDialogComponent} from './query-reminder-log-dialog/query-reminder-log-dialog.component';

const routes = [
  {
    path: 'edit-queries',
    loadChildren: './edit-queries/edit-queries.module#EditQueriesModule'
  },
  {
    path: 'view-query',
    loadChildren: './view-query/view-query.module#ViewQueryModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [QueryDashboardTabComponent, PendingQueriesListComponent, SnoozeQueryDialogComponent, QueryMoveToTamDialogComponent, QueryLogDialogComponent, UploadQueryDocumentsDialogComponent, QueryReminderLogDialogComponent],
  entryComponents: [QueryLogDialogComponent, SnoozeQueryDialogComponent, QueryMoveToTamDialogComponent, UploadQueryDocumentsDialogComponent, QueryReminderLogDialogComponent]
})
export class QueryDashboardTabModule {
}
