import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewerWriteoffArchivedListComponent} from './reviewer-writeoff-archived-list.component';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {RouterModule} from '@angular/router';


const routes = [
  {
    path: '',
    component: ReviewerWriteoffArchivedListComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [ReviewerWriteoffArchivedListComponent]
})
export class ReviewerWriteoffArchivedListModule {
}
