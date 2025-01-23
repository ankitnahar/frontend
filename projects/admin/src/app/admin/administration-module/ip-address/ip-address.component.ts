import {Component, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AddIpAddressDialogComponent} from './add-ip-address-dialog/add-ip-address-dialog.component';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {BASE} from '../../../../utility/constants/base-constants';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {IPAddress} from './ip-address.model';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.scss']
})
export class IpAddressComponent implements OnInit {

  IPAddressList: IPAddress[] = [];
  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Output
  pageEvent: PageEvent;
  orJSON = {};
  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  isOpenFilterView = false;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Form Group
  filterForm: FormGroup;

  tabID = ADMINTABACCESS.IP_ADDRESS;
  tabData: Privilege | any[];

  constructor(private _router: Router,
              private _fb: FormBuilder,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }


  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();

  }

  // Initialization Methods
  initializationMethod() {
    this.getIPList(1, 'id', 'desc');
    this.createFilterForm();
  }

  /**
   * Create Advance Filter
   */
  createFilterForm() {
    this.filterForm = this._fb.group({
      manage_IP_search: new FormControl('')
    });
  }

  /**
   * Initialization methods
   * @param pageNumber
   * @param key
   * @param val
   */
  getIPList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.IPADDRESS_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam())
      .subscribe((response) => {
        this.handleIPListResponse(response);
      });
  }

  /**
   * handling the response
   * @param response
   */
  handleIPListResponse(response: any) {
    this.IPAddressList = response['payload']['data'];
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
    this.getIPList(1, sortKey, sortVal);
  }

  /**
   * Create Change InOut
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      manage_IP_search: new FormControl(null)
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
          if (key === 'manage_IP_search') {
            this.orJSON['belongs_to'] = form.value[key];
          }
        }
      }
      this.getIPList(1, 'id', 'desc');
    }
  }

  /**
   * Add IP Address
   * */

  onAddIpAddressDialog(ipAddress: IPAddress) {
    const dialogRef = this.dialog.open(AddIpAddressDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        ipData: ipAddress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getIPList(1, '', 'desc');
    });
  }

  /**
   * on delete confirmation dialog
   */
  onDeleteConfirmationDialog(ipAddress: IPAddress) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this Ip Address ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteIPFieldData(ipAddress);
      }
      this.getIPList(1, '', 'desc');
    });
  }

  deleteIPFieldData(data) {
    this._commonCrudService.deleteData(AdminAPI.IPADDRESS_DELETE, data.id).subscribe(Response => {
      this.getIPList(1, '', 'desc');
    });
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getIPList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
    if (Object.keys(this.orJSON).length !== 0) {
      params['or'] = {'like': [this.orJSON]};
    }
    return params;
  }

  /**
   *
   * @param access_by
   */
  getClassNameFromAccessBy(access_by: string) {
    if (access_by === 'Live') {
      return 'turquoise-color';
    } else if (access_by === 'Other') {
      return 'orange-color';
    } else if (access_by === 'Local') {
      return 'primary-color';
    }
  }
}
