import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../utility/utility.module';
import {UploadDocumentsComponent} from './upload-documents.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';

const routes = [
  {
    path: '',
    component: UploadDocumentsComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  declarations: [
    UploadDocumentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class UploadDocumentModule {

}
