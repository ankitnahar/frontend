import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../utility/utility.module';
import {ViewUpdateClientComponent} from './view-update-client.component';
import {ViewBankInformationComponent} from './view-bank-information/view-bank-information.component';
import {ViewClientAllocationComponent} from './view-client-allocation/view-client-allocation.component';
import {ViewClientChecklistComponent} from './view-client-checklist/view-client-checklist.component';
import {ViewMainClientComponent} from './view-main-client/view-main-client.component';
import {ViewSpecialNotesComponent} from './view-special-notes/view-special-notes.component';
import {ViewBasicMainComponent} from './view-main-client/view-basic-main/view-basic-main.component';
import {ViewBookkeepingMainComponent} from './view-main-client/view-bookkeeping-main/view-bookkeeping-main.component';
import {ViewBookkeepingComponent} from './view-special-notes/view-bookkeeping/view-bookkeeping.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {ViewTriggerInformationComponent} from "./view-trigger-information/view-trigger-information.component";
import {ViewAutoWorksheetComponent} from './view-auto-worksheet/view-auto-worksheet.component';

const routes = [
  {
    path: '',
    component: ViewUpdateClientComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  declarations: [
    ViewUpdateClientComponent,
    ViewBankInformationComponent,
    ViewClientAllocationComponent,
    ViewClientChecklistComponent,
    ViewMainClientComponent,
    ViewSpecialNotesComponent,
    ViewBasicMainComponent,
    ViewBookkeepingMainComponent,
    ViewBookkeepingComponent,
    ViewTriggerInformationComponent,
    ViewAutoWorksheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: []
})

export class ViewUpdateClientModule {

}
