import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {AppLogger, CommonFunctions} from '../../../utility/common-functions';
import {SharedService} from '../../../utility/shared-service/shared.service';
import {MenuViews, SubMenuViews} from './admin-header-constant';
import {BASE, GLOBALDATAKEYS} from '../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../utility/constants/api';
import {SharedUserService} from '../../../utility/shared-service/shared-user.service';
import {AdminUser, Privilege} from '../../../utility/shared-model/admin-user.model';
import {AttendanceSummary} from '../hrms-module/hrms-dashboard/attendance-summary/attendance-summary.model';
import {ADMINTABACCESS} from '../../../utility/constants/header-constant';
import {ChangePasswordComponent} from "../../admin-user-auth/change-password/change-password.component";
import {MatDialog} from "@angular/material";
import {ConfirmationDialogComponent} from '../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AdminDashboard} from "../admin-dashboard/admin-dashboard.model";

interface FsDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

interface FsDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

@Component({
  selector: 'app-admin-header-sidebar',
  templateUrl: './admin-header-sidebar.component.html',
  styleUrls: ['./admin-header-sidebar.component.scss'],
})


export class AdminHeaderSidebarComponent implements OnInit {
  // Constant variables
  menuEnumView = MenuViews;
  activeView: MenuViews = null;
  subMenuEnumView = SubMenuViews;
  activeSubMenuView: SubMenuViews = this.subMenuEnumView.ADMINISTRATION_MENU;
  imagePath = BASE.IMAGE_PATH;
  // Form group varialbles
  faviriteMenuControl = new FormControl();

  // Array Variables
  administratorMenuList: any[] = [];
  workFlowMenuList: any[] = [];
  systemSetupMenuList: any[] = [];
  clientMenuList: any[] = [];
  billingMenuList: any[] = [];
  reportMenuList: any[] = [];
  emailMenuList: any[] = [];
  favoriteMenuList: any[] = [];
  hrmsMenuList: any[] = [];

  // Other variables
  sideBarContainer;
  bodyContainer;
  onOpenFavoriteMenuDialog = false;
  isFullScreen = false;
  privilegeData = [];
  parentMenuId = [];
  childMenuList = {};
  adminUser: AdminUser;
  hrDetail: AttendanceSummary;
  tabID = ADMINTABACCESS.ADMIN_CHANGEPASSWORD;
  tabData: Privilege | any[];
  userTimesheetUnits = 0;
  adminDashboard: AdminDashboard;

  constructor(private _route: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedUserService: SharedUserService) {
  }

  get showHeader(): boolean {
    return this._sharedService.isLoggedIn();
  }

  ngOnInit() {
    this.getDashboardData();
    this.adminUser = this._sharedUserService.getUser();
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    // console.log(this.adminUser);
    // this.sideBarContainer = document.getElementsByClassName('admin-header-selector') as HTMLCollectionOf<HTMLElement>;
    // this.bodyContainer = document.getElementsByClassName('admin-body-container') as HTMLCollectionOf<HTMLElement>;
    // this.initializationMethods();
    this.sideBarContainer = document.getElementsByClassName('admin-header-selector') as HTMLCollectionOf<HTMLElement>;
    this.bodyContainer = document.getElementsByClassName('admin-body-container') as HTMLCollectionOf<HTMLElement>;
    this.initializationMethods();
    this.privilegeData = this._sharedService.getPrivilege();
    this.activeSubMenuView = this.privilegeData[0].tab_name;
    this.privilegeData.map(menu => {
      if (menu.parent_id === 0) {
        this.parentMenuId.push(menu.id);
      }
    });
    this.parentMenuId.map(menu => {
      this.childMenuList[menu] = [];
    });
    this.privilegeData.map(menu => {
      if (menu.parent_id !== 0) {
        if (this.childMenuList[menu.parent_id]) {
          this.childMenuList[menu.parent_id].push(menu);
        }
      }
    });
    this.getHRDetail();
    this.getTimesheetUnits();
  }

  getDashboardData() {
    this._sharedService.getDashboardData().subscribe(res => {
      this.adminDashboard = res;
      //console.log(this.adminDashboard);
    });
  }

  getHRDetail() {
    this._commonCrudService.listData(AdminAPI.GETDETAIL, {}).subscribe(Response => {
      this.hrDetail = Response.payload.data;
      if (CommonFunctions.isEmpty(this.hrDetail)) {
        this.onLogout();
      } else {
        this.userTimesheetUnits = (this.hrDetail && (this.hrDetail.units >= 0)) ? this.hrDetail.units : 0;
      }
    });
  }

  initializationMethods() {
    this.favoriteMenuList = [
      {
        name: 'Grass',
        pokemon: [
          {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
          {value: 'oddish-1', viewValue: 'Oddish'},
          {value: 'bellsprout-2', viewValue: 'Bellsprout'}
        ]
      },
      {
        name: 'Water',
        pokemon: [
          {value: 'squirtle-3', viewValue: 'Squirtle'},
          {value: 'psyduck-4', viewValue: 'Psyduck'},
          {value: 'horsea-5', viewValue: 'Horsea'}
        ]
      },
      {
        name: 'Fire',
        disabled: true,
        pokemon: [
          {value: 'charmander-6', viewValue: 'Charmander'},
          {value: 'vulpix-7', viewValue: 'Vulpix'},
          {value: 'flareon-8', viewValue: 'Flareon'}
        ]
      },
      {
        name: 'Psychic',
        pokemon: [
          {value: 'mew-9', viewValue: 'Mew'},
          {value: 'mewtwo-10', viewValue: 'Mewtwo'},
        ]
      }
    ];
  }

  onPunchIn() {
    
      this.getHRDetail();
    
  }

  onPunchOut() {
    const myPendingRequest = (this.adminDashboard && this.adminDashboard.myView) ? this.adminDashboard.myView.pendingRequest : 0;
    const myTeamPendingRequest = (this.adminDashboard && this.adminDashboard.teamView) ? this.adminDashboard.teamView.pendingForApproval : 0;

    let message = '';
    let messageToDenyPunchOut = '';
    let messageToDenyPunchOutTeam = '';

    if (myPendingRequest > 0) {
      messageToDenyPunchOut += 'Your current pending request is greater than 0. So you can not punch out. Please clear the pending request.';
    }
    if (myTeamPendingRequest > 0) {
      messageToDenyPunchOutTeam += 'Your current team pending request is greater than 0. So you can not punch out. Please clear the pending request.';
    }
    if (this.userTimesheetUnits < 80) {
      message += 'Your current timesheet units is less than 80. ';
    }
    message += 'Are you sure you have completed your daily hours?';
    if (myPendingRequest <= 0 && myTeamPendingRequest <= 0) {
      const dialogConfigData: any = {
        data: {
          content: message
        },
        panelClass: 'add-bookkeeping-dialog-panel-container'
      };
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
      dialogRef.afterClosed().subscribe((value) => {
        if (value) {
          const param = {'user_id': this.adminUser['id'], 'type': 0};
          this._commonCrudService.addData(AdminAPI.MANUAL_IN_OUT, param).subscribe(Response => {
            this.getHRDetail();
          });
        }
      });
    } else {
      if (myPendingRequest > 0) {
        const dialogConfigData: any = {
          data: {
            content: messageToDenyPunchOut,
            ticketButton: true
          },
          panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
        dialogRef.afterClosed().subscribe((value) => {
        });
      }

      if (myTeamPendingRequest > 0) {
        const dialogConfigData: any = {
          data: {
            content: messageToDenyPunchOutTeam,
            ticketButton: true
          },
          panelClass: 'add-bookkeeping-dialog-panel-container'
        };
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
        dialogRef.afterClosed().subscribe((value) => {
        });
      }
    }
  }

  // Events
  onSubmitFavoriteMenu(favoriteMenu) {
    AppLogger(favoriteMenu.value, 'Favorite Menu: ');
  }

  onOpenHeaderMenu(menuName) {
    switch (menuName) {
      case 'profile':
        this.activeView = this.menuEnumView.PROFILE_MENU_LIST;
        break;

      case 'notifications':
        this.activeView = this.menuEnumView.NOTIFICATION_LIST;
        break;

      case 'timeline':
        this.activeView = this.menuEnumView.TIMELINE_LIST;
        break;

      case 'wishlist':
        this.activeView = this.menuEnumView.WISH_MENU_LIST;
        break;

      case 'megaMenu':
        this.activeView = this.menuEnumView.MEGA_MENU_LIST;
        break;
    }
  }

  onChangeSubMenu(menuName) {
    this.activeSubMenuView = menuName;
  }

  onOpenDialg() {
    this.activeView = null;
    this.onOpenFavoriteMenuDialog = true;
  }

  onCloseDialog() {
    this.onOpenFavoriteMenuDialog = false;
    this.activeView = null;
  }

  onLogout() {
    this._commonCrudService.addData(AdminAPI.LOGOUT, {}).subscribe(Response => {
      this._sharedUserService.setUser(null);
      this._sharedService.logout();
    });
  }

  onChangePasswordDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'add-form-dialog-container',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  hideMenu() {
    this.activeView = null;
  }

  saveReportData() {
    this._sharedService.setClientData(GLOBALDATAKEYS.REPORT, {'id': 15});
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  onFullScreenChange() {
    this.isFullScreen = !this.isFullScreen;
  }

  toggleFullScreen() {
    const elem = <FsDocumentElement>document.getElementById('body');
    if (this.isFullScreen) {
      const doc = <FsDocument>document;
      const requestExitFullScreen = doc.exitFullscreen || doc.webkitExitFullscreen || doc.msExitFullscreen || doc.mozCancelFullScreen;
      requestExitFullScreen.apply(document);
    } else {
      const requestFullScreen = elem.requestFullscreen || elem.msRequestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen;
      requestFullScreen.call(elem);
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onCloseDialog();
    }
  }

  /**
   * Get Timesheet Units
   */
  getTimesheetUnits() {
    this._sharedService.getTimeSheetUnits().subscribe(response => {
      this.userTimesheetUnits = response;
    });
  }
}
