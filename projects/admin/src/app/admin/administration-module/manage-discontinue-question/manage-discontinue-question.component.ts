import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AddManageDiscontinueQuestionDialogComponent} from './add-manage-discontinue-question-dialog/add-manage-discontinue-question-dialog.component';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ManageDiscontinueQuestion} from './manage-discontinue-question.model';
import {AdminAPI} from '../../../../utility/constants/api';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {activeInactive, BASE, whoFillUp} from '../../../../utility/constants/base-constants';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {SharedService} from '../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-manage-discontinue-question',
  templateUrl: './manage-discontinue-question.component.html',
  styleUrls: ['./manage-discontinue-question.component.scss']
})
export class ManageDiscontinueQuestionComponent implements OnInit {

  // Data Variable
  manageQuestionList: ManageDiscontinueQuestion[] = [];
  whoFillUpList = whoFillUp;
  activeInactivedropdown = activeInactive;
  staffList: AdminUser[] = [];
  slideActiveInactive = [];
  equalJSON = {};

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Inputs
  length = 100;
  pageSizeOptions = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilterView = false;
  isOpenHistoryDialog = false;
  // State variables
  trIndex = -1;

  tabID = ADMINTABACCESS.DISCONTINUE_CLIENT_REASON_MANAGEMENT;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService, private _sharedService: SharedService) {
  }

  // get form control
  get whoFillup(): AbstractControl {
    return this.filterForm.get('who_fillup');
  }

  get status(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  get createdByField(): AbstractControl {
    return this.filterForm.get('created_by');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    // console.log(this.tabData);
    this.initializationMethod();
    this.createAdvanceFilterForm();
    this.getUserList();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getDiscontinueQuestionList(1, 'id', 'desc');
  }

  getDiscontinueQuestionList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DISCONTINUE_QUESTION_LISTING, this.getQueryParams(pageNumber, key, val),
      this.getSearchParams())
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }

  handleResponse(response: any) {
    this.manageQuestionList = response['payload']['data'];
    if (this.manageQuestionList) {
      let i = 0;
      this.manageQuestionList.forEach(item => {
        this.slideActiveInactive[i] = (item.is_active === 1) ? true : false;
        i++;
      });
    }
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.staffList = response;
    });
  }

  // Helper
  /**
   * get function for returning advance query params for conference room get api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
  private getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * getting advanced search params for conference room list api
   * @returns {{}}
   */
  private getSearchParams() {
    const params = {};
    const filter = {};
    // check for the object whether it's empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if ((Object.keys(this.equalJSON).length)) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * Create filter ChangeInout
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      who_fillup: new FormControl(null),
      is_active: new FormControl(null),
      created_by: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      who_fillup: new FormControl(null),
      is_active: new FormControl(null),
      created_by: new FormControl(null)
    });
  }


  // Events
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilterView = !this.isOpenFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getDiscontinueQuestionList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * toggle active / inactive confirmation modal
   */
  onActiveInactiveDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to active ?'
      }
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onAddQuestionDialog(questionDetail?: ManageDiscontinueQuestion) {
    const dialogRef = this.dialog.open(AddManageDiscontinueQuestionDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        discontinueQuestionData: (questionDetail) ? questionDetail : []
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getDiscontinueQuestionList(1, 'id', 'desc');
    });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * To get whofill up name
   * @param id
   */
  getWhoFillUp(id: number): string {
    const val = this.whoFillUpList.filter(elem => elem.key === Number(id));
    return (val.length) ? val[0].label : '';
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event, discontinueData, id) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveDiscontinueQuestion(event.checked, discontinueData);
      } else {
        if (this.slideActiveInactive[id]) {
          this.slideActiveInactive[id] = false;
        } else {
          this.slideActiveInactive[id] = true;
        }
      }
    });
  }

  /**
   * Active Inactive Recurring Data
   * @param {boolean} action
   * @param {Recurring} recurringData
   */
  activeInactiveDiscontinueQuestion(action: boolean, discontinueData: ManageDiscontinueQuestion) {
    const params = {'is_active': action ? 1 : 0, '_method': 'put'};
    this._commonCrudService.updateData(AdminAPI.DISCONTINUE_QUESTION_UPDATE, discontinueData.id, params).subscribe(response => {
      this.manageQuestionList.map(item => {
        if (item.id === discontinueData.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'who_fillup' || key === 'is_active' || key === 'created_by') {
            // if (key === 'date') {
            //   this.equalJSON[key] = moment(form.value[key]).format('YYYY-MM-DD');
            // } else {
            this.equalJSON[key] = form.value[key];
            // }
          }
        }
      }
      this.isOpenFilterView = false;
      this.getDiscontinueQuestionList(1, 'id', 'desc');
    }
  }

  /**
   * Advance Filter Key Up function
   * @param event
   * @param formValue
   * @param {boolean} isValid
   * @param {boolean} flag
   */
  setAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.filterForm.setValue(
        {
          'who_fillup': (form.value['who_fillup']) ? form.value['who_fillup'] : null,
          'is_active': (form.value['is_active']) ? form.value['is_active'] : null,
          'created_by': form.value['created_by'],
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.equalJSON = {};
    this.isOpenFilterView = false;
    this.getDiscontinueQuestionList(1, 'id', 'desc');
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'who_fillup' || elementName === 'created_by' || elementName === 'is_active') {
      delete this.equalJSON[elementName];
    }
    this.getDiscontinueQuestionList(1, this.sortBy, this.sortOrder);
  }
}
