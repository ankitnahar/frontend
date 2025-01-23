import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShiftListComponent} from './shift-list.component';
import {UtilityModule} from '../../../../../utility/utility.module';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {AddShiftListDialogComponent} from './add-shift-list-dialog/add-shift-list-dialog.component';
import {ShifChangeActionDialogComponent} from './shif-change-action-dialog/shif-change-action-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ShiftListComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShiftListComponent, AddShiftListDialogComponent, ShifChangeActionDialogComponent, ShifChangeActionDialogComponent],
  entryComponents: [AddShiftListDialogComponent, ShifChangeActionDialogComponent]
})
export class ShiftListModule {
}
