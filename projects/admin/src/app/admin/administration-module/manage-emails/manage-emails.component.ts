import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {EmailsEditCcDialogComponent} from './emails-edit-cc-dialog/emails-edit-cc-dialog.component';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {BASE, GLOBALDATAKEYS} from '../../../../utility/constants/base-constants';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {AdminAPI} from '../../../../utility/constants/api';
import {ManageEmails} from './manage-emails.model';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-manage-emails',
  templateUrl: './manage-emails.component.html',
  styleUrls: ['./manage-emails.component.scss']
})
export class ManageEmailsComponent implements OnInit {

  filterForm: FormGroup;
  // Data Variables
  manageEmailList: ManageEmails[] = [];
  slideActiveInactive = [];
  // Pagination variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  orJSON = {};
  tabID = ADMINTABACCESS.MANAGE_EMAIL;
  tabData: Privilege | any[];

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();

  }

  // Initialization Methods
  initializationMethod() {
    // default API listing code
    this.getEmailList(1, 'id', 'desc');
    this.createAdvanceFilterForm();
  }

  /**
   * Initialization methods
   * @param pageNumber
   * @param key
   * @param val
   */
  getEmailList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.MANAGEEMAIL_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
      .subscribe((response) => {
        this.handleClientListResponse(response);
      });
  }

  /**
   * handling the response
   * @param response
   */
  handleClientListResponse(response: any) {
    this.manageEmailList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.sortBy = response['pager']['sortBy'];
    this.sortOrder = response['pager']['sortOrder'];
  }

  // Events
  /**
   * sort function for sort data
   * @param sortKey
   * @param sortVal
   */
  getSortClientData(sortKey: string, sortVal: string) {
    this.getEmailList(1, sortKey, sortVal);
  }


  // helper
  /**
   * get function for returning pageNumber and page size at time of listing api
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
   * Default search params for client listing API
   * @returns {{}}
   */
  private getSearchParam() {
    const params = {};
    const filter = {};
    params['compare'] = filter;
    if (Object.keys(this.orJSON).length !== 0) {
      params['or'] = {'like': [this.orJSON]};
    }
    return params;
  }


  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      manage_emails_search: new FormControl(null)
    });
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.orJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {

          }
        }
      }
    }
    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'manage_emails_search') {
            this.orJSON['code'] = form.value[key];
            this.orJSON['cc'] = form.value[key];
            this.orJSON['subject'] = form.value[key];
            this.orJSON['to'] = form.value[key];
          }
        }
      }
      this.getEmailList(1, 'id', 'desc');
    }
  }

  /**
   * Create Advance Filter
   */
  createFilterForm() {
    this.filterForm = this._fb.group({
      manage_emails_search: new FormControl('')
    });
  }

  /**
   * on redirect set email template
   */
  onSetEmailTemplate(manageEmails: ManageEmails) {
    this._sharedService.setClientData(GLOBALDATAKEYS.MANAGE_EMAIL, manageEmails);
    this._router.navigate(['/' + AdminRoutes.MANAGE_EMAILS_SET_EMAIL_TEMPLATE]);
  }

  /**
   * Edit CC Email
   * */

  onEditCCDialog(manageEmails: ManageEmails) {
    const dialogRef = this.dialog.open(EmailsEditCcDialogComponent, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        emailData: manageEmails
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmailList(1, 'id', 'desc');
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getEmailList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * ON Active & Inactive email
   * @param event
   * @param manage email
   * @param id
   */
  openToggleConfirmationDialog(event, ManageEmails, id) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveEmails(event.checked, ManageEmails);
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
   *
   * @param action
   * @param manageEmails
   */

  activeInactiveEmails(action: boolean, manageEmails: ManageEmails) {
    const params = {'is_detail': 0, 'is_active': action ? 1 : 0, '_method': 'put'};
    this._commonCrudService.updateData(AdminAPI.MANAGEEMAIL_UPDATE, manageEmails.id, params).subscribe(response => {
      this.manageEmailList.map(item => {
        if (item.id === manageEmails.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
      this.getEmailList(1, 'id', 'desc');
    });
  }

}
