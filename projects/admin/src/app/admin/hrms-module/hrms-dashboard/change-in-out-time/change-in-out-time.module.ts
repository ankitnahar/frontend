import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeInOutTimeComponent} from './change-in-out-time.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {ChangeInOutTimeDialogComponent} from './change-in-out-time-dialog/change-in-out-time-dialog.component';

const routes = [
  {
    path: '',
    component: ChangeInOutTimeComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ChangeInOutTimeComponent, ChangeInOutTimeDialogComponent],
  entryComponents: [ChangeInOutTimeDialogComponent]
})
export class ChangeInOutTimeModule {
}
