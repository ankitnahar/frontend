import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NavItem} from './nav-item';
import {AdminUser} from "../../../utility/shared-model/admin-user.model";
import {SharedUserService} from "../../../utility/shared-service/shared-user.service";

@Component({
  selector: 'app-admin-left-sidebar',
  templateUrl: './admin-left-sidebar.component.html',
  styleUrls: ['./admin-left-sidebar.component.scss']
})
export class AdminLeftSidebarComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  loading;
  userData: AdminUser;
  constructor(public _router: Router, private _sharedUserService: SharedUserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.userData = this._sharedUserService.getUser();
    this.ngLoad();
  }

  ngLoad() {
    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }

  onApplyLeave() {
    this._router.navigate(['/' + AdminRoutes.APPLY_LEAVE_FORM]);
  }

  onLeaveListing() {
    this._router.navigate(['/' + AdminRoutes.APPLY_LEAVE_LISTING]);
  }

  onLeaveTrackers() {
    this._router.navigate(['/' + AdminRoutes.LEAVE_TRACKERS]);
  }

  onHRMSNewDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onMyProfile() {
    this._router.navigate(['/' + AdminRoutes.HRMS_MY_PROFILE]);
  }

  onHolidayApplyLeave() {
    this._router.navigate(['/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LEAVE_FORM]);
  }

  onHolidayLeaveListing() {
    this._router.navigate(['/' + AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING]);
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  onActivate() {

  }

  menu: NavItem [] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: AdminRoutes.ADMIN_NEW_HRMS,
    },
    {
      displayName: 'My Profile',
      iconName: 'person_outline',
      route: AdminRoutes.HRMS_MY_PROFILE,
    },
    {
      displayName: 'Leave Details',
      iconName: 'description',
      children: [
        {
        displayName: 'Leave Trackers',
        iconName: 'how_to_reg',
        route: AdminRoutes.LEAVE_TRACKERS,
      },
        {
          displayName: 'Apply Leave',
          iconName: 'person_add_alt_1',
          route: AdminRoutes.APPLY_LEAVE_FORM,
        },
        {
          displayName: 'Leave Listing',
          iconName: 'view_list',
          route: AdminRoutes.APPLY_LEAVE_LISTING,
        }
      ]
    },
    {
      displayName: 'Holiday Working',
      iconName: 'person_add',
      children: [
        {
          displayName: 'Apply Holiday Working',
          iconName: 'person_add_alt_1',
          route: AdminRoutes.APPLY_HOLIDAY_WORKING_LEAVE_FORM,
        }, {
          displayName: 'Holiday Working',
          iconName: 'view_list',
          route: AdminRoutes.APPLY_HOLIDAY_WORKING_LISTING,
        }

      ]
    },
    {
      displayName: 'My Award List',
      iconName: 'view_list',
      route: AdminRoutes.MY_AWARD_LISTING,
    },
    {
      displayName: 'My Booked Lunch',
      iconName: 'view_list',
      route: AdminRoutes.MY_BOOKED_LUNCH_LISTING,
    },
  ];
}
