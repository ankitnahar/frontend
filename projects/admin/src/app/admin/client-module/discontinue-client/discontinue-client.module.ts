import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscontinueClientComponent} from './discontinue-client.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {UtilityModule} from '../../../../utility/utility.module';
import {AddDiscontinueClientDialogComponent} from './add-discontinue-client-dialog/add-discontinue-client-dialog.component';
import {DiscontinueCommentsDialogComponent} from './discontinue-comments-dialog/discontinue-comments-dialog.component';
import {DicontinueClientLogDialogComponent} from './dicontinue-client-log-dialog/dicontinue-client-log-dialog.component';
import {ClientDiscontinueFormComponent} from './client-discontinue-form/client-discontinue-form.component';
import {ViewDiscontinueClientDetailsComponent} from './view-discontinue-client-details/view-discontinue-client-details.component';
import {DiscontinueReasonDialogComponent} from './discontinue-reason-dialog/discontinue-reason-dialog.component';


const routes: Routes = [
  {
    path: '',
    component: DiscontinueClientComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'client-discontinue-form',
    component: ClientDiscontinueFormComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'view-discontinue-client-details',
    component: ViewDiscontinueClientDetailsComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiscontinueClientComponent, AddDiscontinueClientDialogComponent, DiscontinueCommentsDialogComponent, DicontinueClientLogDialogComponent, ClientDiscontinueFormComponent, ViewDiscontinueClientDetailsComponent, DiscontinueReasonDialogComponent],
  entryComponents: [AddDiscontinueClientDialogComponent, DiscontinueCommentsDialogComponent, DicontinueClientLogDialogComponent, DiscontinueReasonDialogComponent]
})
export class DiscontinueClientModule {
}
