import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardeeOfTheMonthComponent } from './awardee-of-the-month.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: 'awardee-of-the-month',
    component: AwardeeOfTheMonthComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AwardeeOfTheMonthComponent],
  exports: [AwardeeOfTheMonthComponent]
})
export class AwardeeOfTheMonthModule { }
