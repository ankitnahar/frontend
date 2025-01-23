import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HolidayListComponent} from './holiday-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {ShiftNameDialogComponent} from './shift-name-dialog/shift-name-dialog.component';
import {AddHolidayListDialogComponent} from './add-holiday-list-dialog/add-holiday-list-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayListComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HolidayListComponent, ShiftNameDialogComponent, AddHolidayListDialogComponent],
  entryComponents: [ShiftNameDialogComponent, AddHolidayListDialogComponent]
})
export class HolidayListModule {
}
