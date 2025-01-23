import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {DynamicFieldComponent} from './dynamic-field.component';
import {AddDynamicFieldGlobalConstantsDialog} from './add-dynamic-field/add-dynamic-field-dialog';

const routes = [
  {
    path: '',
    component: DynamicFieldComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: AdminRoutes.DYNAMIC_FIELD_ROUTE,
        component: DynamicFieldComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DynamicFieldComponent,
    AddDynamicFieldGlobalConstantsDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  entryComponents: [AddDynamicFieldGlobalConstantsDialog]
})

export class DynamicFieldModule {

}
