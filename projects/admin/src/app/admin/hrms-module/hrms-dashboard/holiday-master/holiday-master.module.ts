import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HolidayMasterComponent} from './holiday-master.component';
import {RouterModule, Routes} from "@angular/router";
import {AdminAuthGuard} from "../../../../_guards/auth.guards";
import {UtilityModule} from "../../../../../utility/utility.module";
import {AddHolidayMasterDialogComponent} from './add-holiday-master-dialog/add-holiday-master-dialog.component';
import {HolidayMasterUploadCsvComponent} from './holiday-master-upload-csv/holiday-master-upload-csv.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayMasterComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HolidayMasterComponent, AddHolidayMasterDialogComponent, HolidayMasterUploadCsvComponent],
  entryComponents: [AddHolidayMasterDialogComponent, HolidayMasterUploadCsvComponent]
})
export class HolidayMasterModule {
}
