import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminHeaderSidebarComponent} from './admin-header/admin-header-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule, MatTabsModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManageUsersComponent} from './administration/manage-users/manage-users.component';
import { AddUserComponent } from './administration/manage-users/add-user/add-user.component';
import { UpdateUserComponent } from './administration/manage-users/update-user/update-user.component';
import { PersonalComponent } from './administration/manage-users/update-user/personal/personal.component';
import { HierarchyComponent } from './administration/manage-users/update-user/hierarchy/hierarchy.component';
import { PrivilegesComponent } from './administration/manage-users/update-user/privileges/privileges.component';
import { ChangePasswordComponent } from './administration/manage-users/update-user/change-password/change-password.component';
import {UtilityModule} from '../../utility/utility.module';
import { HistoryDialogComponent } from './administration/manage-users/history-dialog/history-dialog.component';
import { PageRightsComponent } from './administration/manage-users/update-user/privileges/page-rights/page-rights.component';
import { DynamicFieldGroupComponent } from './administration/manage-users/update-user/privileges/dynamic-field-group/dynamic-field-group.component';
import { WorksheetStatusRightComponent } from './administration/manage-users/update-user/privileges/worksheet-status-right/worksheet-status-right.component';
import { FormEmailRightsComponent } from './administration/manage-users/update-user/privileges/form-email-rights/form-email-rights.component';
import { OtherComponent } from './administration/manage-users/update-user/privileges/other/other.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    UtilityModule
  ],
  declarations: [
    AdminHeaderSidebarComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    PersonalComponent,
    HierarchyComponent,
    PrivilegesComponent,
    ChangePasswordComponent,
    HistoryDialogComponent,
    PageRightsComponent,
    DynamicFieldGroupComponent,
    WorksheetStatusRightComponent,
    FormEmailRightsComponent,
    OtherComponent
  ],
  exports:[AdminHeaderSidebarComponent]
})
export class AdminModule { }
