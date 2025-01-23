import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {QueryQuestionComponent} from './query-question.component';
import {AddQueryQuestionDialogComponent} from './add-query-question-dialog/add-query-question-dialog.component';

const routes = [
  {
    path: '',
    component: QueryQuestionComponent,
    canActivate: [AdminAuthGuard],
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [QueryQuestionComponent, AddQueryQuestionDialogComponent],
  entryComponents: [AddQueryQuestionDialogComponent]
})
export class QueryQuestionModule {
}
