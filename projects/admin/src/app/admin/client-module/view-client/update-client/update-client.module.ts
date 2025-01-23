import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../../utility/utility.module';
import {BankInformationComponent} from './information/bank-information/bank-information.component';
import {AddMoreBankDialogComponent} from './information/bank-information/add-more-bank-dialog/add-more-bank-dialog.component';
import {AddMoreAccountTypeDialogComponent} from './information/bank-information/add-more-account-type-dialog/add-more-account-type-dialog.component';
import {ClientAllocationComponent} from './client-allocation/client-allocation.component';
import {ClientChecklistComponent} from './client-checklist/client-checklist.component';
import {MainClientComponent} from './main-client/main-client.component';
import {SpecialNotesComponent} from './special-notes/special-notes.component';
import {BookkeepingComponent} from './special-notes/bookkeeping/bookkeeping.component';
import {UpdateClientHistoryComponent} from './update-client-history/update-client-history.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UpdateClientComponent} from './update-client.component';
import {BasicMainComponent} from './main-client/basic-main/basic-main.component';
import {BookkeepingMainComponent} from './main-client/bookkeeping-main/bookkeeping-main.component';
import {AddClientChecklistQuestionDialog} from './client-checklist/add-question-checklist-dialog/add-question-dialog.component';
import {AddBookkeepingDialogComponent} from './special-notes/bookkeeping/add-bookkeeping-dialog/add-bookkeeping-dialog.component';
import {InformationComponent} from "./information/information.component";
import {OtherInformationComponent} from "./information/other-information/other-information.component";
import {AddPartocularTypeDialogComponent} from './information/other-information/add-partocular-type-dialog/add-partocular-type-dialog.component';
import {TriggerInformationComponent} from './trigger-information/trigger-information.component';
import {PreviewTriggerInformationComponent} from './trigger-information/preview-trigger-information/preview-trigger-information.component';
import {AdminRoutes} from "../../../../../utility/constants/admin-route";
import {AutoWorksheetComponent} from './auto-worksheet/auto-worksheet.component';

const routes = [
  {
    path: '',
    component: UpdateClientComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.UPDATE_CLIENT_TRIGGERINFO_PREVIEW_ROUTE,
    component: PreviewTriggerInformationComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  declarations: [
    BankInformationComponent,
    ClientAllocationComponent,
    ClientChecklistComponent,
    MainClientComponent,
    SpecialNotesComponent,
    UpdateClientComponent,
    UpdateClientHistoryComponent,
    AddMoreBankDialogComponent,
    AddMoreAccountTypeDialogComponent,
    BasicMainComponent,
    BookkeepingMainComponent,
    BookkeepingComponent,
    AddClientChecklistQuestionDialog,
    AddBookkeepingDialogComponent,
    InformationComponent,
    OtherInformationComponent,
    AddPartocularTypeDialogComponent,
    TriggerInformationComponent,
    PreviewTriggerInformationComponent,
    AutoWorksheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: [
    AddMoreBankDialogComponent,
    AddMoreAccountTypeDialogComponent,
    UpdateClientHistoryComponent,
    AddClientChecklistQuestionDialog,
    AddBookkeepingDialogComponent,
    AddPartocularTypeDialogComponent
  ]
})

export class UpdateClientModule {

}
