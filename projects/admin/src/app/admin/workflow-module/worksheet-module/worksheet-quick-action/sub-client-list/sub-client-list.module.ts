import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SubClientListComponent} from './sub-client-list.component';
import {AddSubClientListDialog} from './add-sub-client-list-dialog/add-sub-client-list-dialog';
import {UtilityModule} from '../../../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../../../_guards/auth.guards';

const routes = [
  {
    path: '',
    component: SubClientListComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [AddSubClientListDialog, SubClientListComponent],
  entryComponents: [AddSubClientListDialog]

})
export class SubClientListModule {
}
