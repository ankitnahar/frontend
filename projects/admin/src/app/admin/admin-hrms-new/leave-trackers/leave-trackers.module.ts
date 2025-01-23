import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeaveTrackersComponent} from './leave-trackers.component';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';

const routes = [
  {
    path: 'leave-trackers',
    component: LeaveTrackersComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [LeaveTrackersComponent],
  exports: [LeaveTrackersComponent]
})
export class LeaveTrackersModule {
}
