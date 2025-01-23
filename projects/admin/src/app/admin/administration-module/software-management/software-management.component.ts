import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AddSoftwareDetailsDialogComponent} from './add-software-details-dialog/add-software-details-dialog.component';
import {CommonHistoryDialogComponent} from '../../../../utility/components/common-history-dialog/common-history-dialog.component';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {BASE} from '../../../../utility/constants/base-constants';
import {SoftwareManagement} from './software-management.model';
import {AdminAPI} from '../../../../utility/constants/api';
import {Frequency} from '../../../../utility/shared-model/frequency.model';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {Recurring} from '../../billing-module/invoices/recurring/recurring.model';

@Component({
  selector: 'app-software-management',
  templateUrl: './software-management.component.html',
  styleUrls: ['./software-management.component.scss']
})
export class SoftwareManagementComponent implements OnInit {
  // Data Variables
  softwareList: SoftwareManagement[] = [];
  frequencyList: Frequency[] = [];
  softwareNameList = [];
  // Date variables

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {'is_deleted': 0};
  tabID = ADMINTABACCESS.SOFTWARE_MANAGEMENT;
  tabData: Privilege | any[];
  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;

  constructor(private _fb: FormBuilder, public _router: Router, public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService, private _sharedObjService: SharedObjService) {
  }

  // get form control
  get SoftwareField(): AbstractControl {
    return this.filterForm.get('software_name');
  }

  get frequencyIdField(): AbstractControl {
    return this.filterForm.get('frequency_id');
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.initializationMethod();

  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getFrequency();
    this.getSoftwareName();
    this.getSoftwareList(1, 'id', 'desc');

    this.createAdvanceFilterForm();
    this.createFilterSoftwareListForm();
  }

  /**
   * Create Software Management
   */
  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      software_name: new FormControl(''),
      frequency_id: new FormControl('')
    });
  }

  /**
   * Create filter Software Management
   */
  createFilterSoftwareListForm() {
    this.advanceFilterForm = this._fb.group({
      software_name: new FormControl(''),
      frequency_id: new FormControl('')
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Get Frequency List
   */
  getFrequency() {
    this._commonCrudService.listData(AdminAPI.FREQUENCY, {}, {}).subscribe((response) => {
      if (response) {
        this.frequencyList = response.payload.data;
      }
    });
  }

  /**
   * Get Frequency List
   */
  getSoftwareName() {
    this._commonCrudService.listData(AdminAPI.FF_LIST_SOFTWARE, {}, {}).subscribe((response) => {
      if (response) {
        this.softwareNameList = response.payload.data;
      }
    });
  }

  /**
   * Get Software List
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getSoftwareList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.FF_SOFTWARE_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe((response) => {
      this.handleReasonManagementResponse(response);
    });
  }

  /**
   * Handle Software List
   * @param response
   */
  handleReasonManagementResponse(response: any) {
    this.softwareList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.FF_SOFTWARE_EXPORT, params, this.getSearchParam(), 'FF Software Management  ', 0).subscribe(response => {
    });
  }

  /**
   * View Recurring Information History
   * @param recurringData
   */
  viewSoftwareHistory(recurringData: Recurring): void {
    const value = {
      url: AdminAPI.FF_SOFTWARE_HISTORY + '/' + recurringData.id,
    };
    const softwareDataAll = this._sharedService.setHistoryURL(value);
    const dialogRef = this.dialog.open(CommonHistoryDialogComponent, {
      panelClass: 'view-client-dialog-container',
      data: {
        'recurring': softwareDataAll,
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }


  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getSoftwareList(1, sortKey, sortVal);
  }

  // get function for returning pageNumber and page size at time of listing api
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'software_name' || elementName === 'frequency_id') {
      delete this.equalJSON[elementName];
    }
    this.getSoftwareList(1, this.sortBy, this.sortOrder);
  }

  /**
   * Reset All Filters
   */
  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.equalJSON = {'is_deleted': 0};
    this.isOpenFilter = false;
    this.getSoftwareList(1, 'id', 'desc');
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
          'software_name': form.value['software_name'],
          'frequency_id': form.value['frequency_id'],
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {'is_deleted': 0};
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

    // For Multiple Entity ID
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'software_name' || key === 'frequency_id') {
            this.equalJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilter = false;
      this.getSoftwareList(1, 'id', 'desc');
    }
  }

  // advance filter search operation
  getSearchParam() {
    const params = {};
    const filter = {};

    // check for the object whether its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.equalJSON).length) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isOpenFilter = false;
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getSoftwareList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  deleteMsg(index) {
    // this.tagList.splice(index, 1);
  }

  onShowHistory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CommonHistoryDialogComponent, dialogConfig);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  /**
   * Active Inactive software Data
   * @param {boolean} action
   * @param {Recurring} softwareManagement
   */
  activeInactiveSoftware(action: boolean, softwareManagement: SoftwareManagement) {
    const params = {
      'is_active': action ? 1 : 0,
      '_method': 'put',
      'software_name': softwareManagement.software_name,
      'frequency_id': softwareManagement.frequency_id
    };
    this._commonCrudService.updateData(AdminAPI.FF_SOFTWARE_ADD_UPDATE, softwareManagement.id, params).subscribe(response => {
      this.softwareList.map(item => {
        if (item.id === softwareManagement.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
      this.getSoftwareList(1, 'id', 'desc');
    });
  }


  /**
   * ON Active & Inactive Reason
   * @param event
   * @param reasonManagement
   * @param id
   */
  openToggleConfirmationDialog(event, softwareManagement, id) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveSoftware(event.checked, softwareManagement);
      } else {
        event.source.checked = !event.checked
      }
    });
  }


  /**
   * On Delete Reason
   * @param reasonManagement
   */
  onDeleteConfirmationDialog(softwareManagement: SoftwareManagement) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this Software detail ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const params = {
          'is_deleted': 1,
          '_method': 'put',
          'software_name': softwareManagement.software_name,
          'frequency_id': softwareManagement.frequency_id
        };
        this._commonCrudService.updateData(AdminAPI.FF_SOFTWARE_ADD_UPDATE, softwareManagement.id, params).subscribe(Response => {
          this.getSoftwareList(1, 'id', 'desc');
        });
      }
    });
  }

  /**
   * On Edit Click Update Reason
   */
  onEditSoftwareDialog(softwareManagement?: SoftwareManagement) {
    let dialogRef = this.dialog.open(AddSoftwareDetailsDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        softwareData: (softwareManagement) ? softwareManagement : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSoftwareList(1, 'id', 'desc');
    });
  }
}
