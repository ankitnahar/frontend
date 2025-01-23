import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {DesignationComponent} from './designation.component';
import {EditDesignationComponent} from './edit-designation/edit-designation.component';
import {EditPagerightsDesignationComponent} from './edit-designation/edit-pagerights-designation/edit-pagerights-designation.component';
import {EditDynamicFieldGroupDesignationComponent} from './edit-designation/edit-dynamic-field-group-designation/edit-dynamic-field-group-designation.component';
import {EditOtherRightsComponent} from './edit-designation/edit-other-rights/edit-other-rights.component';
import {EditWorksheetStatusRightsComponent} from './edit-designation/edit-worksheet-status-rights/edit-worksheet-status-rights.component';

const routes = [
  {
    path: '',
    component: DesignationComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'edit-designation',
    component: EditDesignationComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  declarations: [
    DesignationComponent,
    EditDesignationComponent,
    EditPagerightsDesignationComponent,
    EditDynamicFieldGroupDesignationComponent,
    EditOtherRightsComponent,
    EditWorksheetStatusRightsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ]
})

export class DesignationModule {

}
