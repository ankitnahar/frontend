import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {DynamicFieldGroupComponent} from './dynamic-field-group.component';
import {AddDynamicFieldGroupDialog} from './add-dynamic-field-group/add-dynamic-field-group-dialog';

const routes = [
  {
    path: '',
    component: DynamicFieldGroupComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: AdminRoutes.DYNAMIC_FIELD_GROUP_ROUTE,
        component: DynamicFieldGroupComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DynamicFieldGroupComponent,
    AddDynamicFieldGroupDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: [AddDynamicFieldGroupDialog]
})

export class DynamicFieldGroupModule {

}
