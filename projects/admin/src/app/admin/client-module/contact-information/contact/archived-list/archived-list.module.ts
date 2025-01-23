import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ArchivedListComponent} from './archived-list.component';
import {ArchivedListHistoryComponent} from './archived-list-history/archived-list-history.component';
import {ArchivedListViewComponent} from './archived-list-view/archived-list-view.component';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../../utility/utility.module';

const routes = [
  {
    path: 'archived-list',
    component: ArchivedListComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    ArchivedListComponent,
    ArchivedListHistoryComponent,
    ArchivedListViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  exports: [],
  entryComponents: [ArchivedListViewComponent]
})

export class ArchivedListModule {

}
