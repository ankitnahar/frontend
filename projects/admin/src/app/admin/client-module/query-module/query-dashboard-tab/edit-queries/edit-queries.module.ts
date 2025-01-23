import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditQueriesComponent} from './edit-queries.component';
import {AdminAuthGuard} from "../../../../../_guards/auth.guards";
import {RouterModule} from "@angular/router";
import {UtilityModule} from "../../../../../../utility/utility.module";
import {QuerySendToClientDialogComponent} from './query-send-to-client-dialog/query-send-to-client-dialog.component';
import {QuerySendBackToStaffDialogComponent} from './query-send-back-to-staff-dialog/query-send-back-to-staff-dialog.component';

const routes = [
  {
    path: '',
    component: EditQueriesComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditQueriesComponent, QuerySendToClientDialogComponent, QuerySendBackToStaffDialogComponent],
  entryComponents: [QuerySendToClientDialogComponent, QuerySendBackToStaffDialogComponent]
})
export class EditQueriesModule {
}
