import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorksheetStatusLogDialog} from './worksheet-status-log-dialog/worksheet-status-log-dialog';
import {UtilityModule} from '../../../../../utility/utility.module';
import {CompleteWorksheetStatusDialogComponent} from './complete-worksheet-status-dialog/complete-worksheet-status-dialog.component';
import {WorksheetNotesDialogComponent} from './worksheet-notes-dialog/worksheet-notes-dialog.component';
import {AddTimesheetDialogKnockbackComponent} from './edit-task-checklist-knockback/add-timesheet-dialog-knockback/add-timesheet-dialog-knockback.component';
import {UploadDocumentsDialogComponent} from "./edit-task-checklist/upload-documents-dialog/upload-documents-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    UtilityModule
  ],
  declarations: [WorksheetStatusLogDialog, CompleteWorksheetStatusDialogComponent, WorksheetNotesDialogComponent, AddTimesheetDialogKnockbackComponent, UploadDocumentsDialogComponent],
  entryComponents: [WorksheetStatusLogDialog, CompleteWorksheetStatusDialogComponent, WorksheetNotesDialogComponent, AddTimesheetDialogKnockbackComponent, UploadDocumentsDialogComponent]

})
export class WorksheetDashboardActionModule {
}
