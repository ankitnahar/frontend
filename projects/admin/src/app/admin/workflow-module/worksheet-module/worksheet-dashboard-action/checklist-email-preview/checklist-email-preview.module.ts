import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {ChecklistEmailPreviewComponent} from './checklist-email-preview.component';

const routes = [
  {
    path: '',
    component: ChecklistEmailPreviewComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChecklistEmailPreviewComponent]
})
export class ChecklistEmailPreviewModule {
}
