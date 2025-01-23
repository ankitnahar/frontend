import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../../utility/constants/admin-route';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminAuthGuard} from '../_guards/auth.guards';

const routes: Routes = [
  {
    path: AdminRoutes.DASHBOARD,
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.ADMINISTRATION,
    loadChildren: './administration-module/administration.module#AdministrationModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.HRMS,
    loadChildren: './hrms-module/hrms.module#HrmsModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.CLIENT,
    loadChildren: './client-module/client.module#ClientModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.WORKFLOW,
    loadChildren: './workflow-module/workflow.module#WorkflowModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.STSYEM_SETUP,
    loadChildren: './system-setup/system-setup.module#SystemSetupModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.REPORT,
    loadChildren: './report/report.module#ReportModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.BILLING,
    loadChildren: './billing-module/billing.module#BillingModule',
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
