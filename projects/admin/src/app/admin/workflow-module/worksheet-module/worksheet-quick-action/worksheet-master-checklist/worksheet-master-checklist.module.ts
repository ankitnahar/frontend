import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {WorksheetMasterChecklistComponent} from './worksheet-master-checklist.component';
import {ChecklistGroupComponent} from './checklist-group/checklist-group.component';
import {AddChecklistGroupDialog} from './checklist-group/add-checklist-group/add-checklist-group-dialog';
import {MasterChecklistComponent} from './master-checklist/master-checklist.component';
import {AddMasterChecklistDialog} from './master-checklist/add-master-checklist-dialog/add-master-checklist-dialog';
import {MasterChecklistQuestionComponent} from './master-checklist-question/master-checklist-question.component';
import {AddMasterChecklistQuestionDialog} from './master-checklist-question/add-master-cheklist-question-dialog/add-master-checklist-question-dialog';

const routes = [
  {
    path: '',
    component: WorksheetMasterChecklistComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [WorksheetMasterChecklistComponent, ChecklistGroupComponent, AddChecklistGroupDialog,
    MasterChecklistComponent,
    AddMasterChecklistDialog,
    MasterChecklistQuestionComponent,
    AddMasterChecklistQuestionDialog
  ],
  entryComponents: [AddChecklistGroupDialog, AddMasterChecklistDialog, AddMasterChecklistQuestionDialog]

})
export class WorksheetMasterChecklistModule {
}
