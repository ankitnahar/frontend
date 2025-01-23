import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {EditTaskChecklistTamComponent} from './edit-task-checklist-tam.component';

const routes = [
  {
    path: '',
    component: EditTaskChecklistTamComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditTaskChecklistTamComponent]
})
export class EditTaskChecklistTamModule {
}
