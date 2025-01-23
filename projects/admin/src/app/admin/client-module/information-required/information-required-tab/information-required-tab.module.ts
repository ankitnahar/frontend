import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationRequiredTabComponent} from './information-required-tab.component';
import {UtilityModule} from "../../../../../utility/utility.module";
import {InformationTabComponent} from './information-tab/information-tab.component';
import {AdminAuthGuard} from "../../../../_guards/auth.guards";
import {RouterModule} from "@angular/router";
import {InformtionLogDialogComponent} from './informtion-log-dialog/informtion-log-dialog.component';
import {InformationAssigneeDialogComponent} from './information-assignee-dialog/information-assignee-dialog.component';
import {SnoozeInformationDialogComponent} from './snooze-information-dialog/snooze-information-dialog.component';
import {UploadInfoDocumentsDialogComponent} from "./upload-info-documents-dialog/upload-info-documents-dialog.component";
import {ReminderLogDialogComponent} from './reminder-log-dialog/reminder-log-dialog.component';


const routes = [
  {
    path: '',
    component: InformationRequiredTabComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'update-information',
    loadChildren: './update-information/update-information.module#UpdateInformationModule'
  },
  {
    path: 'view-information',
    loadChildren: './view-information/view-information.module#ViewInformationModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [InformationRequiredTabComponent, InformationTabComponent, InformtionLogDialogComponent, InformationAssigneeDialogComponent, SnoozeInformationDialogComponent, UploadInfoDocumentsDialogComponent, ReminderLogDialogComponent],
  entryComponents: [InformationAssigneeDialogComponent, InformtionLogDialogComponent, SnoozeInformationDialogComponent, UploadInfoDocumentsDialogComponent, ReminderLogDialogComponent]
})
export class InformationRequiredTabModule {
}
