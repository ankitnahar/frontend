import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeMultipleWorksheetStatusComponent} from './change-multiple-worksheet-status.component';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';

const routes = [
  {
    path: '',
    component: ChangeMultipleWorksheetStatusComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChangeMultipleWorksheetStatusComponent]
})
export class ChangeMultipleWorksheetStatusModule {
}
