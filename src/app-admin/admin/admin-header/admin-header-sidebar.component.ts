import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../utility/constants/admin-route';
import {FormControl} from '@angular/forms';
import {AppLogger} from '../../../utility/common-functions';

export enum MenuViews {
  NOTIFICATION_LIST, PROFILE_MENU_LIST, WISH_MENU_LIST, MEGA_MENU_LIST, TIMELINE_LIST
}

export enum SubMenuViews {
  ADMINISTRATION_MENU, WORKFLOW_MENU, SYSTEM_SETUP_MENU, CLIENT_MENU, BILLING_MENU, REPORT_MENU, EMAIL_MENU
}

@Component({
  selector: 'app-admin-header-sidebar',
  templateUrl: './admin-header-sidebar.component.html',
  styleUrls: ['./admin-header-sidebar.component.scss']
})

export class AdminHeaderSidebarComponent implements OnInit {
  // Constant variables
  menuEnumView = MenuViews;
  activeView: MenuViews = null;
  subMenuEnumView = SubMenuViews;
  activeSubMenuView: SubMenuViews = this.subMenuEnumView.ADMINISTRATION_MENU;

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

  // Other variables
  sideBarContainer;
  bodyContainer;
  onOpenFavoriteMenuDialog = false;

  constructor(private _route: Router) {
  }

  ngOnInit() {
    this.sideBarContainer = document.getElementsByClassName('admin-header-selector') as HTMLCollectionOf<HTMLElement>;
    this.bodyContainer = document.getElementsByClassName('admin-body-container') as HTMLCollectionOf<HTMLElement>;
    this.initializationMethods();
  }

  initializationMethods() {
    this.administratorMenuList = [
      'Attendance Summary',
      'Bulk Allocation',
      'Bulk User Approval Allocation',
      'Constant Setting',
      'Designation',
      'Discontinue client',
      'Import biotime records',
      'IP Address',
      'Manage Emails',
      'Manage Users',
      'Quote group',
      'Menu Items',
      'Quote question',
      'Reason Management',
      'Service',
      'Signature / Email Config',
      'Software managementnew',
      'Top menu',
      'Top menu group',
      'View client - Field'
    ];
    this.workFlowMenuList = [
      'Adhoc Task',
      'Befree writeoff',
      'Client writeoff',
      'Conference Room Status',
      'Cycle Booking Status',
      'No jobnew',
      'Pending Tickets',
      'Reviewer writeoffnew',
      'Software Login Status',
      'Timesheet summary',
      'Worksheet'
    ];
    this.systemSetupMenuList = [
      'New Client Review Form',
      'Pending worksheet schedule',
      'Permanent Info',
      'System Setup',
      'Welcome email',
      'WR3'
    ];
    this.clientMenuList = [
      'Contact information',
      'Quality Control',
      'View Client'
    ];
    this.billingMenuList = [
      'Billing Information',
      'Clients Not On DDR',
      'Debtors management',
      'Fixed fee proposal',
      'Invoices',
      'Quote',
      'Recurring',
      'Sub-activity calculator',
      'Uncharged units'
    ];
    this.reportMenuList = [
      'Bank report',
      'Billing report',
      'Client allocation report',
      'Client Management report',
      'Client report',
      'Client wise invoice report',
      'Invoice report',
      'Monthly Invoice Report',
      'R - Sheet',
      'R- Sheet Summary',
      'System setup report',
      'Ticket report'
    ];
    this.emailMenuList = ['Email'];

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
    switch (menuName) {
      case 'administration':
        this.activeSubMenuView = this.subMenuEnumView.ADMINISTRATION_MENU;
        break;

      case 'workflow':
        this.activeSubMenuView = this.subMenuEnumView.WORKFLOW_MENU;
        break;

      case 'systemSetup':
        this.activeSubMenuView = this.subMenuEnumView.SYSTEM_SETUP_MENU;
        break;

      case 'client':
        this.activeSubMenuView = this.subMenuEnumView.CLIENT_MENU;
        break;

      case 'billing':
        this.activeSubMenuView = this.subMenuEnumView.BILLING_MENU;
        break;

      case 'report':
        this.activeSubMenuView = this.subMenuEnumView.REPORT_MENU;
        break;

      case 'email':
        this.activeSubMenuView = this.subMenuEnumView.EMAIL_MENU;
        break;
    }
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
    this._route.navigate(['/' + AdminRoutes.LOGIN]);
    this.activeView = null;
  }

  toggleFullScreen() {
    let docElm = <FsDocumentElement>document.getElementById('body');
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    }
    else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }

    // this.sideBarContainer[0].style.display = "none";
    // this.bodyContainer[0].style.marginLeft = "0px";
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      //this.sideBarContainer[0].style.display = "block";
      //this.bodyContainer[0].style.marginLeft = "0rem";
      this.onCloseDialog();
    }
  }

  // exitFullscreen() {
  //   if(document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if(document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if(document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   }
  // }
}

interface FsDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
}
