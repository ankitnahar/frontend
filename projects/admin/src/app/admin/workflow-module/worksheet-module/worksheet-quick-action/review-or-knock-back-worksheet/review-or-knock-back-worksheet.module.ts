import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {ReviewOrKnockBackWorksheetComponent} from './review-or-knock-back-worksheet.component';

const routes = [
  {
    path: '',
    component: ReviewOrKnockBackWorksheetComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ReviewOrKnockBackWorksheetComponent
  ],
  entryComponents: []

})
export class ReviewOrKnockBackWorksheetModule {
}
