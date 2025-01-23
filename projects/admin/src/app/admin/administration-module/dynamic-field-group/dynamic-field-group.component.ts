import {Component, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AddDynamicFieldGroupDialog} from './add-dynamic-field-group/add-dynamic-field-group-dialog';
import {DynamicFieldGroup} from './dynamic-field-group.model';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {BASE} from '../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {FIELDPRIVILEGES} from '../manage-users/update-user/privileges/privileges.model';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

@Component({
  selector: 'app-dynamic-field-group',
  templateUrl: './dynamic-field-group.component.html',
  styleUrls: ['./dynamic-field-group.component.scss'],
})
export class DynamicFieldGroupComponent implements OnInit {

  // Constant Variables

  // Data Variables
  groupFieldList: any[] = [];

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;


  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenHistoryDialog = false;

  // Model
  dynemicFormField: FIELDPRIVILEGES[] = [];

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  tabID = ADMINTABACCESS.CLIENT_VIEWCLIENT_FIELDGROUP;
  tabData: Privilege | any[];

  constructor(private _router: Router,
              public dialog: MatDialog,
              private _sharedService: SharedService,
              private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();
  }

  // Initialization Methods
  initializationMethod() {
    this.getFieldGroupList(1, '', 'desc');
  }

  /**
   * Function for get the field group
   */
  getFieldGroupList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DYNAMIC_FIELD_GROUP, this.getClientQueryParams(pageNumber, key, val),
      this.getClientSearchParams())
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }


  public handleResponse(response) {
    this.dynemicFormField = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Open add dynamic field group modal
   */
  AddFieldGroupDialog(groupfield?: any) {

    let dialogRef = this.dialog.open(AddDynamicFieldGroupDialog, {
      panelClass: 'add-form-dialog-container',
      data: {
        'fieldData': groupfield
      }
    });

    dialogRef.afterClosed().subscribe(value => {
      this.getFieldGroupList(1, '', 'desc');
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Open modal method
   */
  onOpenModal() {
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  }

  /**
   * Page change method
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getFieldGroupList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  openDeleteFieldDialog(groupfield: DynamicFieldGroup) {
    const dialogConfigData: any = {
      data: {
        content: 'Are you sure you want to delete this Field?'
      },
      panelClass: 'add-bookkeeping-dialog-panel-container'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.deleteDynamicFieldData(groupfield);
      }
      this.getFieldGroupList(1, '', 'desc');
    });
  }

  deleteDynamicFieldData(data) {
    this._commonCrudService.deleteData(AdminAPI.DYNAMIC_FIELD_GROUP, data.id).subscribe(Response => {
      this.getFieldGroupList(1, '', 'desc');
    });
  }

  /**
   * Pagination page change event
   * @param event
   */
  onPaginationChange(event) {
    this.pageSize = event.pageSize;
    this.getFieldGroupList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getFieldGroupList(1, sortKey, sortVal);
  }

  /**
   * function to return query params for feedback list api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: number}}
   */
  private getClientQueryParams(page: number, sortKey?: string, sortOrder?: string) {
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
   * returns advanced search params for feedback list api
   * @returns {{}}
   */
  private getClientSearchParams() {
    const params = {};
    const filter = {};
    return params;
  }
}
