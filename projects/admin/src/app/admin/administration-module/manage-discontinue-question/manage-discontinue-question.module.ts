import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageDiscontinueQuestionComponent} from './manage-discontinue-question.component';
import {AddManageDiscontinueQuestionDialogComponent} from './add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {UtilityModule} from '../../../../utility/utility.module';

const routes: Routes = [
  {
    path: '',
    component: ManageDiscontinueQuestionComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: AdminRoutes.MANAGE_DISCONTINUE_QUESTION_ROUTE,
        component: ManageDiscontinueQuestionComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageDiscontinueQuestionComponent, AddManageDiscontinueQuestionDialogComponent],
  entryComponents: [AddManageDiscontinueQuestionDialogComponent]
})
export class ManageDiscontinueQuestionModule {
}
