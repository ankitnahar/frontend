import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BulkAllocationComponent} from './bulk-allocation.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {UtilityModule} from '../../../../utility/utility.module';
import {BulkAllocationAllocateUserComponent} from './bulk-allocation-allocate-user/bulk-allocation-allocate-user.component';
import {BulkAllocationDeallocateUserComponent} from './bulk-allocation-deallocate-user/bulk-allocation-deallocate-user.component';

const routes: Routes = [
  {
    path: '',
    component: BulkAllocationComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BulkAllocationComponent, BulkAllocationAllocateUserComponent, BulkAllocationDeallocateUserComponent]
})
export class BulkAllocationModule {
}
