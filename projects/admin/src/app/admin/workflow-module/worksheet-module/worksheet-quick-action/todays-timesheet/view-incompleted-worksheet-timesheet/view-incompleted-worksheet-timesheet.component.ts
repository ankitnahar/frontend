import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PageEvent} from '@angular/material';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {Privilege} from '../../../../../../../utility/shared-model/admin-user.model';
import {ADMINTABACCESS} from '../../../../../../../utility/constants/header-constant';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';

export enum Views {
  FILTER_VIEW_MAIN
}

@Component({
  selector: 'app-view-incompleted-worksheet-timesheet',
  templateUrl: './view-incompleted-worksheet-timesheet.component.html',
  styleUrls: ['./view-incompleted-worksheet-timesheet.component.scss']
})
export class ViewIncompletedWorksheetTimesheetComponent extends BaseComponent implements OnInit {

  // Constant Variables
  enumView = Views;
  activeView: Views;

  // Form Group Variables
  viewIncompletedWorksheetForm: FormGroup;
  viewIncompletedWorksheetFilterForm: FormGroup;

  // Mat Paginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  // Mat Paginator Output
  pageEvent: PageEvent;

  // State variables
  trIndex = -1;
  isPlay = false;

  @Output() deleteItem = new EventEmitter<boolean>();

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
  worksheetTabIDData: Privilege | any[];
  worksheetTabID = ADMINTABACCESS.WORKFLOW_WORKSHEET;

  constructor(private _fb: FormBuilder, public _router: Router, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.worksheetTabIDData = this._sharedService.checkUserPrivilegesTabs(this.worksheetTabID);
    this.tabDataWorksheetHierarchy = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetHierarchy);
    this.tabDataWorksheetTraining = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetTraining);
    this.tabDataWorksheetSubClientList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetSubClientList);
    this.tabDataWorksheetReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetReviewerList);
    this.tabDataWorksheetPeerReviewerList = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetPeerReviewerList);
    this.tabDataWorksheetMasterChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDWorksheetMasterChecklist);

    this.initializeMethod();
  }

  initializeMethod() {
    this.createViewIncompletedWorksheetForm();
    this.createViewIncompletedWorksheetFilterForm();
  }

  /**
   * Create Incompleted work sheet form
   */
  createViewIncompletedWorksheetForm() {
    this.viewIncompletedWorksheetForm = this._fb.group({
      clientName: new FormControl(''),
      masterActivity: new FormControl(''),
      task: new FormControl(''),
      frequency: new FormControl(''),
      periodFrom: new FormControl(''),
      periodTo: new FormControl(''),
      dueDateFrom: new FormControl(''),
      dueDateTo: new FormControl(''),
      category: new FormControl(''),
      relatedEntity: new FormControl(''),
      status: new FormControl(''),
      tam: new FormControl(''),
      teamMember: new FormControl(''),
      additionalStaff: new FormControl(''),
      worksheetStatus: new FormControl('')
    });
  }

  /**
   * Create Incompleted work sheet filter form
   */
  createViewIncompletedWorksheetFilterForm() {
    this.viewIncompletedWorksheetFilterForm = this._fb.group({
      clientName: new FormControl(''),
      masterActivity: new FormControl(''),
      task: new FormControl(''),
      frequency: new FormControl(''),
      periodFrom: new FormControl(''),
      periodTo: new FormControl(''),
      dueDateFrom: new FormControl(''),
      dueDateTo: new FormControl(''),
      category: new FormControl(''),
      relatedEntity: new FormControl(''),
      status: new FormControl(''),
      tam: new FormControl(''),
      teamMember: new FormControl(''),
      additionalStaff: new FormControl(''),
      worksheetStatus: new FormControl('')
    });
  }

  /**
   * On Incompleted work sheet form submit
   * @param form
   */
  onViewIncompletedWorksheetFormSubmit(form: FormGroup) {

  }

  /**
   * On Incompleted work sheet filter form submit
   * @param form
   */
  onViewIncompletedWorksheetFilterFormSubmit(form: FormGroup) {

  }

  /**
   * On delete table row
   */
  onDeleteItem(event) {
    this.deleteItem.emit(event);
  }

  /**
   * Expand row table
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Open filter
   */
  onOpenFilter() {
    this.activeView = this.enumView.FILTER_VIEW_MAIN;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.activeView = null;
  }

  /**
   * sub client redirection
   */
  onWorksheetDashboard() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  onTodaysTimesheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_TODAYS_TIMESHEET]);
  }


  /**
   * Close modal
   * @param event
   */
  onCloseDialog(event) {
    this.activeView = event;
  }

  // Angular helpers

  /**
   * Esc event for close modal and filter
   * @param event
   */
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onCloseFilter();
    }
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

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }
}
