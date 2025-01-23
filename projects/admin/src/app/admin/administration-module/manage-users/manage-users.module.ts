import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {PrivilegesComponent} from './update-user/privileges/privileges.component';
import {WorksheetStatusRightComponent} from './update-user/privileges/worksheet-status-right/worksheet-status-right.component';
import {OtherComponent} from './update-user/privileges/other/other.component';
import {ChangePasswordComponent} from './update-user/change-password/change-password.component';
import {DynamicFieldGroupComponent} from './update-user/privileges/dynamic-field-group/dynamic-field-group.component';
import {PageRightsComponent} from './update-user/privileges/page-rights/page-rights.component';
import {HierarchyComponent} from './update-user/hierarchy/hierarchy.component';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {PersonalComponent} from './update-user/personal/personal.component';
import {ManageUsersComponent} from './manage-users.component';
import {FormEmailRightsComponent} from './update-user/privileges/form-email-rights/form-email-rights.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {HierarchyViewUserListDialogComponent} from './update-user/hierarchy/hierarchy-view-user-list-dialog/hierarchy-view-user-list-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'update',
    component: UpdateUserComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'add',
    component: AddUserComponent,
    canActivate: [AdminAuthGuard]
  }

];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, AddUserComponent],
  declarations: [
    ManageUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    PersonalComponent,
    HierarchyComponent,
    PrivilegesComponent,
    ChangePasswordComponent,
    PageRightsComponent,
    DynamicFieldGroupComponent,
    WorksheetStatusRightComponent,
    FormEmailRightsComponent,
    OtherComponent,
    HierarchyViewUserListDialogComponent
  ],
  entryComponents: [HierarchyViewUserListDialogComponent]
})

export class ManageUsersModule {
}
