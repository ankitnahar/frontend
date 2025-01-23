import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminRoutes} from '../../utility/constants/admin-route';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {ManageUsersComponent} from './administration/manage-users/manage-users.component';
import {AddUserComponent} from './administration/manage-users/add-user/add-user.component';
import {UpdateUserComponent} from './administration/manage-users/update-user/update-user.component';

const routes: Routes = [
  {
    path: AdminRoutes.DASHBOARD,
    component: AdminDashboardComponent
  },
  {
    path: AdminRoutes.MANAGE_USERS,
    component: ManageUsersComponent
  },
  {
    path: AdminRoutes.ADD_USER,
    component: AddUserComponent
  },
  {
    path: AdminRoutes.UPDATE_USER,
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
