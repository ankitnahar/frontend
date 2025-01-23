import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AdminRoutes} from "../../../../../utility/constants/admin-route";
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {BASE} from "../../../../../utility/constants/base-constants";
import {ADMINTABACCESS} from "../../../../../utility/constants/header-constant";
import {Privilege} from "../../../../../utility/shared-model/admin-user.model";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../../utility/shared-service/shared-object.service";
import {SharedService} from "../../../../../utility/shared-service/shared.service";
import {AdminAPI} from "../../../../../utility/constants/api";
import {ConfirmationDialogComponent} from "../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";


@Component({
  selector: 'app-newsletter',
  templateUrl: './contact-info-newsletter.component.html',
  styleUrls: ['./contact-info-newsletter.component.scss']
})
export class ContactInfoNewsletterComponent implements OnInit {

  // Data Variables
  filterForm: FormGroup;
  // Data Variables
  newsletterList = [];
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
  tabID = ADMINTABACCESS.MANAGE_NEWSLETTEREMAIL;
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
    this.getNewsLetterEmailList(1, 'email', 'desc');
    this.createAdvanceFilterForm();
  }

  /**
   * Initialization methods
   * @param pageNumber
   * @param key
   * @param val
   */
  getNewsLetterEmailList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.NEWSLETTER_CONTCAT_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
      .subscribe((response) => {
        this.handleClientListResponse(response);
      });
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.NEWSLETTER_CONTCAT_EXPORT, params, this.getSearchParam(), 'Contact ', 0).subscribe(response => {
    });
  }

  /**
   * handling the response
   * @param response
   */
  handleClientListResponse(response: any) {
    this.newsletterList = response['payload']['data'];
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
  getSort(sortKey: string, sortVal: string) {
    this.getNewsLetterEmailList(1, sortKey, sortVal);
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
            this.orJSON['email'] = form.value[key];
          }
        }
      }
      this.getNewsLetterEmailList(1, 'email', 'desc');
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


  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getNewsLetterEmailList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   *
   * @param action
   * @param manageEmails
   */
  onArchiveGroupDialog(manageEmails) {
    const dialogConfigData: any = {
      data: {
        content: 'Are you sure you want to archive contact?'
      },
      panelClass: 'add-bookkeeping-dialog-panel-container'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.movetoarchive(manageEmails);
      }
    });
  }

  movetoarchive(email) {
    const emailList = {'email': email};
    this._commonCrudService.updateData(AdminAPI.NEWSLETTER_MOVETOARCHIVE, 0, emailList).subscribe(Response => {
      this.getNewsLetterEmailList(1, 'email', 'desc');
    });
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


}
