import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {TrainingListComponent} from './training-list.component';
import {AddEditTrainingDialog} from './add-edit-training-dialog/add-edit-training-dialog';

const routes = [
  {
    path: '',
    component: TrainingListComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [TrainingListComponent, AddEditTrainingDialog
  ],
  entryComponents: [AddEditTrainingDialog]

})
export class TrainingListModule {
}
