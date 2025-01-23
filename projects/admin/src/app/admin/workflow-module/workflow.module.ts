import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilityModule} from '../../../utility/utility.module';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {AdminAuthGuard} from '../../_guards/auth.guards';

const routes: Routes = [
  {
    path: AdminRoutes.BULK_ALLOCATION_ROUTE,
    loadChildren: './bulk-allocation/bulk-allocation.module#BulkAllocationModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.PENDING_TICKETS_ROUTE,
    loadChildren: './pending-tickets/pending-tickets.module#PendingTicketsModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.WORKSHEET_DASHBOARD_ROUTE,
    loadChildren: './worksheet-module/worksheet.module#WorksheetModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.USER_HISTORY_ROUTE,
    loadChildren: './user-history/user-history.module#UserHistoryModule',
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})

export class WorkflowModule {
}
