import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from '../../utility/constants/admin-route';
import { UtilityModule } from '../../utility/utility.module';
import { AdminAuthGuard } from '../_guards/auth.guards';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderSidebarComponent } from './admin-header/admin-header-sidebar.component';
import { AdminLeftSidebarListingComponent } from "./admin-left-sidebar/admin-left-sidebar-listing/admin-left-sidebar-listing.component";
import { AdminLeftSidebarComponent } from './admin-left-sidebar/admin-left-sidebar.component';
import { ChecklistEmailPreviewDialogComponent } from './workflow-module/worksheet-module/worksheet-dashboard-action/checklist-email-preview-dialog/checklist-email-preview-dialog.component';

const routes: Routes = [
  {
    path: AdminRoutes.DASHBOARD,
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.ADMINISTRATION,
    loadChildren: './administration-module/administration.module#AdministrationModule'
  },
  {
    path: AdminRoutes.HRMS,
    loadChildren: './hrms-module/hrms.module#HrmsModule'
  },
  {
    path: AdminRoutes.CLIENT,
    loadChildren: './client-module/client.module#ClientModule'
  },
  {
    path: AdminRoutes.WORKFLOW,
    loadChildren: './workflow-module/workflow.module#WorkflowModule'
  },  
  {
    path: AdminRoutes.REPORT,
    loadChildren: './report/report.module#ReportModule'
  },
  {
    path: AdminRoutes.BILLING,
    loadChildren: './billing-module/billing.module#BillingModule'
  },
  {
    path: AdminRoutes.ADMIN_NEW_HRMS,
    loadChildren: './admin-hrms-new/admin-hrms-new.module#AdminHrmsNewModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AdminHeaderSidebarComponent,
    AdminDashboardComponent,
    ChecklistEmailPreviewDialogComponent,
    AdminLeftSidebarComponent,
    AdminLeftSidebarListingComponent
  ],
  entryComponents: [ChecklistEmailPreviewDialogComponent],
  providers: [],
  exports: [RouterModule, ChecklistEmailPreviewDialogComponent,
    AdminHeaderSidebarComponent, AdminLeftSidebarComponent, AdminLeftSidebarListingComponent]
})

export class AdminModule {
}
