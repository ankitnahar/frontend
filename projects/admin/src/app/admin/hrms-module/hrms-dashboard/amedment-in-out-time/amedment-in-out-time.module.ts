import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';
import {AmedmentInOutTimeComponent} from './amedment-in-out-time.component';
import {AmedmentInOutTimeDialogComponent} from './amedment-in-out-time-dialog/amedment-in-out-time-dialog.component';

const routes = [
  {
    path: '',
    component: AmedmentInOutTimeComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AmedmentInOutTimeComponent, AmedmentInOutTimeDialogComponent],
  entryComponents: [AmedmentInOutTimeDialogComponent]
})
export class AmedmentInOutTimeModule {
}
