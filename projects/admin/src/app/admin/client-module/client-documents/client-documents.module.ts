import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientDocumentsComponent} from './client-documents.component';
import {AdminAuthGuard} from "../../../_guards/auth.guards";
import {RouterModule} from "@angular/router";
import {UtilityModule} from "../../../../utility/utility.module";
import {DocumentsDetailsComponent} from './documents-details/documents-details.component';
import {DocRenameDialogComponent} from './doc-rename-dialog/doc-rename-dialog.component';
import {CreateFolderDialogComponent} from './create-folder-dialog/create-folder-dialog.component';
import {CreateYearFolderDialogComponent} from './create-year-folder-dialog/create-year-folder-dialog.component';
import {GooglePickerComponent} from './file-explorer/google-picker.component';
import {CopyMoveDocumentsDialogComponent} from './copy-move-documents-dialog/copy-move-documents-dialog.component';
import {UploadDocumentsDialogComponent} from './upload-documents-dialog/upload-documents-dialog.component';
import {CreateBacklogDialogComponent} from './create-backlog-dialog/create-backlog-dialog.component';
import {AddAudioLinkDialogComponent} from './add-audio-link-dialog/add-audio-link-dialog.component';

const routes = [
  {
    path: '',
    component: ClientDocumentsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'documents-details',
    component: DocumentsDetailsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'google-picker',
    component: GooglePickerComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [ClientDocumentsComponent, DocumentsDetailsComponent, DocRenameDialogComponent, CreateFolderDialogComponent, CreateYearFolderDialogComponent, GooglePickerComponent, CopyMoveDocumentsDialogComponent, UploadDocumentsDialogComponent, CreateBacklogDialogComponent, AddAudioLinkDialogComponent],
  providers: [],
  entryComponents: [DocRenameDialogComponent, CreateFolderDialogComponent, CreateYearFolderDialogComponent, CopyMoveDocumentsDialogComponent, UploadDocumentsDialogComponent, CreateBacklogDialogComponent, AddAudioLinkDialogComponent]
})
export class ClientDocumentsModule {
}
