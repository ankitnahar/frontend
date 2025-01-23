import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {ADMINTABACCESS} from '../../../../../utility/constants/header-constant';
import {ConfirmationDialogComponent} from '../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog, MatTabChangeEvent} from '@angular/material';
import {Router} from '@angular/router';
import * as moment from 'moment';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Privilege} from '../../../../../utility/shared-model/admin-user.model';
import {CommonFunctions} from '../../../../../utility/common-functions';

@Component({
  selector: 'app-worksheet-dashboard-tab',
  templateUrl: './worksheet-dashboard-tab.component.html',
  styleUrls: ['./worksheet-dashboard-tab.component.scss']
})
export class WorksheetDashboardTabComponent implements OnInit {

  // State variables
  isActiveTab = 0;
  isDeleteItem = false;
  myWorksheetCount = 0;
  incompleteWorksheetCount = 0;
  completeWorksheetCount = 0;
  befreeWorksheetCount = 0;
  // Tab change event
  tabChanged = ((tabChangeEvent: MatTabChangeEvent): void => {
    this.isActiveTab = Number(tabChangeEvent.tab.ariaLabel);
  });
  todayDate = '';
  tabIDMy = ADMINTABACCESS.WORKFLOW_MYWORKSHEET;
  tabIDCompleted = ADMINTABACCESS.WORKFLOW_VIEWCOMPLETEDWORKSHEET;
  tabIDInCompleted = ADMINTABACCESS.WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
  tabIDBefree = ADMINTABACCESS.WORKFLOW_VIEWBEFREEWORKSHEET;

  isMyWorksheet: Privilege | any[];
  isCompletedWorksheet: Privilege | any[];
  isInCompletedWorksheet: Privilege | any[];
  isBefreeWorksheet: Privilege | any[];

  isMyWorksheetTab = false;
  isCompletedWorksheetTab = false;
  isInCompletedWorksheetTab = false;
  isBefreeWorksheetTab = false;

  tabIDWorksheetHierarchy = ADMINTABACCESS.WORKFLOW_MASTERACTIVITY;
  tabIDWorksheetTraining = ADMINTABACCESS.WORKFLOW_WORKSHEETTRAINING;
  tabIDWorksheetSubClientList = ADMINTABACCESS.WORKFLOW_SUBCLIENTLIST;
  tabIDWorksheetReviewerList = ADMINTABACCESS.WORKFLOW_REVIEWANDKNOCKBACKWORKSHEET;
  tabIDWorksheetPeerReviewerList = ADMINTABACCESS.WORKFLOW_PEERREVIEWREQUIREWORKSHEET;
  tabIDWorksheetMasterChecklist = ADMINTABACCESS.WORKFLOW_MASTERCHECKLIST;
  tabIDWorksheetMultiplueStatusChange = ADMINTABACCESS.WORKFLOW_WORKSHEETMULTIPLESTATUSCHANGE;

  tabDataWorksheetHierarchy: Privilege | any[];
  tabDataWorksheetTraining: Privilege | any[];
  tabDataWorksheetSubClientList: Privilege | any[];
  tabDataWorksheetReviewerList: Privilege | any[];
  tabDataWorksheetPeerReviewerList: Privilege | any[];
  tabDataWorksheetMasterChecklist: Privilege | any[];
  isMultipleStatusUpdate = false;
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;
  worksheetTabIDData: Privilege | any[];

  minPreviousMonth = 3;
  maxNextMonth = 4;

  constructor(public _router: Router, public dialog: MatDialog, private _sharedService: SharedService, public _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.isMyWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDMy);
    this.isCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDCompleted);
    this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
    this.isBefreeWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDBefree);
    this.isMultipleStatusUpdate = this._sharedService.checkUserPrivileges(this.worksheetTabID, 'otherRights', 'otherRights', 'button_name', 'multipleworksheetstatuschange', 1);

    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);
    this.getCounter();
  }

  getCounter() {
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    const todaysdate = new Date();
    const year = todaysdate.getFullYear();
    const month = todaysdate.getMonth();
    const day = todaysdate.getDate();

    // My Worksheet Counter
    if (!CommonFunctions.isEmpty(this.isMyWorksheet)) {
      this.isMyWorksheetTab = true;
      // this._commonCrudService.listData(AdminAPI.MY_WORKSHEET_LISTING, {
      //   'counter': 1,
      //   'records': 'all',
      //   'type': 'my'
      // }, {'compare': {'lessthanequal': {'due_date': this.todayDate}}}).subscribe(response => {
      //   this.myWorksheetCount = response.payload.data;
      // });
    }
    // My InCompleted Worksheet Counter
    if (!CommonFunctions.isEmpty(this.isInCompletedWorksheet)) {
      this.isInCompletedWorksheetTab = true;
      const previousDate = new Date(year, month - this.minPreviousMonth, 1);
      const nextDate = new Date(year, month + this.maxNextMonth, 0);
      // this._commonCrudService.listData(AdminAPI.INCOMPLETE_WORKSHEET_LISTING, {
      //   'counter': 1,
      //   'records': 'all',
      //   'type': 'incompleted'
      // }, {
      //   'compare': {
      //     'greaterthanequal': {'due_date': moment(previousDate).format('YYYY-MM-DD')},
      //     // 'lessthanequal': {'end_date': moment(todaysdate).format('YYYY-MM-DD'), 'due_date': moment(nextDate).format('YYYY-MM-DD')}
      //     'lessthanequal': {'due_date': moment(nextDate).format('YYYY-MM-DD')}
      //   }
      // }).subscribe(response => {
      //   this.incompleteWorksheetCount = response.payload.data;
      // });
    }
    // My Completed Worksheet Counter
    if (!CommonFunctions.isEmpty(this.isCompletedWorksheet)) {
      this.isCompletedWorksheetTab = true;
      const previousDate = new Date(year, month - this.minPreviousMonth, day);
      // this._commonCrudService.listData(AdminAPI.COMPLETED_WORKSHEET_LISTING, {
      //   'counter': 1,
      //   'records': 'all',
      //   'type': 'completed'
      // }, {
      //   'compare': {
      //     'greaterthanequal': {'start_date': moment(previousDate).format('YYYY-MM-DD')},
      //     'lessthanequal': {'end_date': moment(todaysdate).format('YYYY-MM-DD')}
      //   }
      // }).subscribe(response => {
      //   this.completeWorksheetCount = response.payload.data;
      // });
    }
    // Befree Worksheet Counter
    if (!CommonFunctions.isEmpty(this.isBefreeWorksheet)) {
      this.isBefreeWorksheetTab = true;
      // this._commonCrudService.listData(AdminAPI.BEFREE_WORKSHEET_LISTING, {
      //   'counter': 1,
      //   'records': 'all',
      //   'type': 'befree'
      // }, {}).subscribe(response => {
      //   this.befreeWorksheetCount = response.payload.data;
      // });
    }

  }

  /**
   * Delete open confirmation modal
   */
  onConfirmationDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete ?'
      }
    });
  }

  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    switch (menuName) {
      case 'addNewWorksheet':
        this._router.navigate(['/' + AdminRoutes.ADD_WORKSHEET]);
        break;
      case 'todayWorksheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_WORKSHEET]);
        break;
      case 'todayTimesheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
        break;
      case 'worksheetHierarchy':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_HIERARCHY]);
        break;
      case 'changeInOuttime':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_CHANGE_IN_OUT_TIME]);
        break;
      case 'subClientList':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_SUB_CLIENT_LIST]);
        break;
      case 'worksheetMasterChecklist':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_MASTER_CHECKLIST]);
        break;
      case 'trainingList':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_TRAINING_LIST]);
        break;
      case 'revieworKnockBackWorksheet':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_REVIEW_OR_KNOCK_BACK]);
        break;
      case 'peerReviewWorksheetListing':
        this._router.navigate(['/' + AdminRoutes.WORKSHEET_PEER_REVIEW_WORKSHEET_LISTING]);
        break;
      case 'changeMultipleWorksheetStatus':
        this._router.navigate(['/' + AdminRoutes.CHANGE_MULTIPLE_WORKSHEET_STATUS]);
        break;
    }
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onWorksheetDashboardTab() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  openSOP() {
    window.open('https://docs.google.com/document/d/1cpujAGWyMZyaBVOOZhRPB99SftMxrGB9UFHljlYNk-Q', '_blank');
  }
}
