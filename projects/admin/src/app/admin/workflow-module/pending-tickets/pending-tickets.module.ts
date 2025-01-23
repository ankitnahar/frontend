import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PendingTicketsComponent} from './pending-tickets.component';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {IncompletedTicketsComponent} from './incompleted-tickets/incompleted-tickets.component';
import {CompletedTicketsComponent} from './completed-tickets/completed-tickets.component';
import {AddTicketComponent} from './add-ticket/add-ticket.component';
import {ViewTicketsComponent} from './view-tickets/view-tickets.component';
import {PendingTicketAssignStaffDialogComponent} from './pending-ticket-assign-staff-dialog/pending-ticket-assign-staff-dialog.component';

const routes = [
  {
    path: '',
    component: PendingTicketsComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'add-ticket',
    component: AddTicketComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'view-tickets',
    component: ViewTicketsComponent,
    canActivate: [AdminAuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
  ],
  declarations: [PendingTicketsComponent, IncompletedTicketsComponent, CompletedTicketsComponent, AddTicketComponent, ViewTicketsComponent, PendingTicketAssignStaffDialogComponent],
  entryComponents: [PendingTicketAssignStaffDialogComponent]
})
export class PendingTicketsModule {
}
