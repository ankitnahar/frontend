import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {TodaysWorksheetComponent} from './todays-worksheet.component';

const routes = [
  {
    path: '',
    component: TodaysWorksheetComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [TodaysWorksheetComponent]

})
export class TodaysWorksheetModule {
}
