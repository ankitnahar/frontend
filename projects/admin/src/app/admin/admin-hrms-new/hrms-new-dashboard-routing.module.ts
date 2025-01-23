import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {AdminHrmsNewComponent} from './admin-hrms-new.component';
import {UtilityModule} from '../../../utility/utility.module';
import {HrmsHolidayWorkingListingModule} from './hrms-holiday-working-listing/hrms-holiday-working-listing.module';
import {MyProfileModule} from './my-profile/my-profile.module';
import {LeaveTrackersModule} from './leave-trackers/leave-trackers.module';
import {AdminAuthGuard} from '../../_guards/auth.guards';
import {MyAwardListingModule} from './my-award-listing/my-award-listing.module';
import {MyLunchBookingModule} from "./my-lunch-booking/my-lunch-booking.module";
import {AwardeeOfTheMonthModule} from './awardee-of-the-month/awardee-of-the-month.module';

export const routes = [
  {
    path: '',
    component: AdminHrmsNewComponent
  },
  {
    path: AdminRoutes.APPLY_LEAVE_LISTING_ROUTE,
    loadChildren: './hrms-apply-leave-listing/hrms-apply-leave-listing.module#HrmsApplyLeaveListingModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING_ROUTE,
    loadChildren: './hrms-holiday-working-listing/hrms-holiday-working-listing.module#HrmsHolidayWorkingListingModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.MY_PROFILE_ROUTE,
    loadChildren: './my-profile/my-profile.module#MyProfileModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: AdminRoutes.LEAVE_TRACKERS_ROUTE,
    loadChildren: './leave-trackers/leave-trackers.module#LeaveTrackersModule',
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilityModule,
    HrmsHolidayWorkingListingModule,
    MyProfileModule,
    LeaveTrackersModule,
    MyAwardListingModule,
    MyLunchBookingModule,
    AwardeeOfTheMonthModule
  ],
  declarations: [AdminHrmsNewComponent],
  exports: [RouterModule, HrmsHolidayWorkingListingModule]
})
export class HrmsNewDashboardRoutingModule {
}
