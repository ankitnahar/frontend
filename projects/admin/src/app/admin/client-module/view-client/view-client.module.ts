import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {ViewEntityComponent} from './view-entity/view-entity.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {ViewClientComponent} from './view-client.component';
import {ClientInfoServicesNotesDialogComponent} from './client-info-services-notes-dialog/client-info-services-notes-dialog.component';
import {ActiveClientModule} from './active-client/active-client.module';
import {DiscontinueClientModule} from './discontinue-client/discontinue-client.module';

const routes: Routes = [
  {
    path: '',
    component: ViewClientComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'upload-documents',
    loadChildren: './upload-documents/upload-document.module#UploadDocumentModule'
  },
  {
    path: 'add-entity',
    loadChildren: './add-entity/add-entity.module#AddEntityModule'
  },
  {
    path: 'update',
    loadChildren: './update-client/update-client.module#UpdateClientModule'
  },
  {
    path: 'view-update-client',
    loadChildren: './view-update-client/view-update-client.module#ViewUpdateClientModule'
  },
/*  {
    path: 'active-client',
    loadChildren: './active-client/active-client.module#ActiveClientModule'
  },
  {
    path: 'discontinue-client',
    loadChildren: './discontinue-client/discontinue-client.module#DiscontinueClientModule'
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes),
    ActiveClientModule,
    DiscontinueClientModule
  ],
  exports: [RouterModule],
  declarations: [
    ViewEntityComponent,
    ViewClientComponent,
    ClientInfoServicesNotesDialogComponent
  ],
  entryComponents: [ClientInfoServicesNotesDialogComponent]
})

export class ViewClientModule {
}
