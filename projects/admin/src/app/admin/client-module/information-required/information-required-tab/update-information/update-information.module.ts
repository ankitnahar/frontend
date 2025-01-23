import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from "../../../../../_guards/auth.guards";
import {UpdateInformationComponent} from "./update-information.component";
import {UtilityModule} from "../../../../../../utility/utility.module";
import {RouterModule} from "@angular/router";
import {SendToClientDialogComponent} from './send-to-client-dialog/send-to-client-dialog.component';
import {SendBackToStaffDialogComponent} from './send-back-to-staff-dialog/send-back-to-staff-dialog.component';

const routes = [
  {
    path: '',
    component: UpdateInformationComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [UpdateInformationComponent, SendToClientDialogComponent, SendBackToStaffDialogComponent],
  entryComponents: [SendToClientDialogComponent, SendBackToStaffDialogComponent]
})
export class UpdateInformationModule {
}
