import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminAuthGuard} from '../../../../_guards/auth.guards';
import {UtilityModule} from '../../../../../utility/utility.module';
import {AddRecurringComponent} from './add-recurring/add-recurring.component';
import {ManageRecurringComponent} from './manage-recurring/manage-recurring.component';
import {RecurringPreviewComponent} from './recurring-preview/recurring-preview.component';
import {RecurringViewComponent} from './recurring-view/recurring-view.component';
import {ClientViewDialogComponent} from './client-view-dialog/client-view-dialog.component';

const routes = [
  {
    path: 'add-recurring',
    component: AddRecurringComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'manage-recurring',
    component: ManageRecurringComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'recurring-view',
    component: RecurringViewComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'recurring-preview',
    component: RecurringPreviewComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    AddRecurringComponent,
    ManageRecurringComponent,
    RecurringPreviewComponent,
    RecurringViewComponent,
    ClientViewDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: [ClientViewDialogComponent]
})

export class RecurringModule {

}
