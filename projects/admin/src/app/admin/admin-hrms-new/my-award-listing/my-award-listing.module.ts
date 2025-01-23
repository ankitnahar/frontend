import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAwardListingComponent } from './my-award-listing.component';
import {AdminAuthGuard} from '../../../_guards/auth.guards';
import {RouterModule} from '@angular/router';
import {UtilityModule} from '../../../../utility/utility.module';

const routes = [
  {
    path: 'my-award-listing',
    component: MyAwardListingComponent,
    canActivate: [AdminAuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule
  ],
  declarations: [MyAwardListingComponent],
  exports: [MyAwardListingComponent]
})
export class MyAwardListingModule { }
