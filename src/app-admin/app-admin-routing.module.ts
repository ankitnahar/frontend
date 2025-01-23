import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminRoutes} from '../utility/constants/admin-route';

const routes: Routes = [
  {
    path: '',
    redirectTo: AdminRoutes.LOGIN,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
