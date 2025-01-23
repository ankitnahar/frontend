import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {AddDynamicFieldGlobalConstantsDialog} from './add-dynamic-field/add-dynamic-field-dialog';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {BASE, FIELDTYPEDROPDOWN} from '../../../../utility/constants/base-constants';
import {DynamicField} from './dynamic-field.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {FIELDPRIVILEGES} from '../manage-users/update-user/privileges/privileges.model';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {Privilege} from '../../../../utility/shared-model/admin-user.model';
import {AdminRoutes} from '../../../../utility/constants/admin-route';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent implements OnInit {

  // Constant Variables

  // Data Variables
  fieldList: any[] = [];
  tagList: any[] = [];

  //Model
  dynemicFormField: DynamicField[] = [];
  dynamicGroup: FIELDPRIVILEGES[] = [];

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;
  isOpenHistoryDialog = false;
  isOpenFilterView = false;

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // Form Group
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;
  fieldType = FIELDTYPEDROPDOWN;
  // Data Variables
  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  slideData = [];

  tabID = ADMINTABACCESS.CLIENT_VIEWCLIENT_FIELD;
  tabData: Privilege | any[];

  constructor(private _router: Router, private _fb: FormBuilder, public dialog: MatDialog, private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }


  get fieldgroup(): AbstractControl {
    return this.filterForm.get('group_id');
  }

  get field_title(): AbstractControl {
    return this.filterForm.get('field_title');
  }

  get field_type(): AbstractControl {
    return this.filterForm.get('field_type');
  }

  get field_value(): AbstractControl {
    return this.filterForm.get('field_value');
  }

  get field_parent_condition(): AbstractControl {
    return this.filterForm.get('is_mandatory');
  }


  ngOnInit() {
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);

    this.initializationMethod();
    this.createAdvanceFilterForm();
  }

  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      group_id: new FormControl(''),
      field_title: new FormControl(''),
      field_type: new FormControl(''),
      field_value: new FormControl(''),
      is_mandatory: new FormControl(''),
    });

    this.advanceFilterForm = this._fb.group({
      group_id: new FormControl(''),
      field_title: new FormControl(''),
      field_type: new FormControl(''),
      field_value: new FormControl(''),
      is_mandatory: new FormControl('')
    });
  }

  // Initialization Methods
  initializationMethod() {
    this.getFieldList(1, 'id', 'desc');
    this.getDynamicGroup();
  }

  /**
   * Get Dynamic Group
   */
  getDynamicGroup() {
    this._commonCrudService.listData(AdminAPI.DYNAMIC_FIELD_GROUP, {}, {'notin': {'id': '1,2'}}).subscribe((response) => {
      this.dynamicGroup = response.payload.data;
    });
  }

  /**
   * Function for get the field group
   */
  getFieldList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.DYNAMIC_FIELD, this.getClientQueryParams(pageNumber, key, val),
      this.getClientSearchParams())
      .subscribe((response) => {
        this.handleResponse(response);
      });
  }

  public handleResponse(response) {
    this.dynemicFormField = response.payload.data;
    for (let i = 0; i < this.dynemicFormField.length; i++) {
      this.slideData[i] = this.dynemicFormField[i].is_active ? true : false;
    }
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  /**
   * Open add dynamic field modal
   */
  AddEditGlobalConstantsDialog(dynemicFormField?: any) {
    let dialogRef = this.dialog.open(AddDynamicFieldGlobalConstantsDialog, {
      panelClass: 'add-form-medium-dialog-container',
      data: {
        fieldData: dynemicFormField
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getFieldList(1, 'id', 'desc');
    });
  }

  /**
   * conformation dialog
   */
  onOpenViewFieldModal(dynemicFormField: DynamicField) {

    const dialogConfigData: any = {
      data: {
        content: 'Are you sure, you want to delete this field ?'
      },
      panelClass: 'add-bookkeeping-dialog-panel-container'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.deleteFieldData(dynemicFormField.id);
      }
      this.getFieldList(1, 'id', 'desc');
    });
  }

  deleteFieldData(id) {
    this._commonCrudService.deleteData(AdminAPI.DYNAMIC_FIELD, id).subscribe(Response => {
      this.getFieldList(1, 'id', 'desc');
    });
  }

  onDisabledConfirmDialog(event, dynemicFormField: DynamicField, id) {
    // console.log(this.slideData[id]);
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.updateDataWithPut(AdminAPI.DYNAMIC_FIELD, dynemicFormField.id, {
          'is_active': (event.checked === true) ? '1' : '0',
          'method': '_put'
        }).subscribe(response => {
          this.getFieldList(1, 'id', 'desc');
        });
      } else {
        if (this.slideData[id]) {
          this.slideData[id] = false;
        } else {
          this.slideData[id] = true;
        }
      }
    });
  }

  /**
   * Open modal method
   */
  onOpenModal() {
    this.isOpenHistoryDialog = !this.isOpenHistoryDialog;
  }

  /**
   * Open filter method
   */
  onOpenFilter() {
    this.isOpenFilterView = true;
  }

  /**
   * Close filter method
   */
  onCloseFilter() {
    this.isOpenFilterView = false;
  }


  /**
   * Delete tag method
   * @param index
   */
  deleteMsg(index) {
    this.tagList.splice(index, 1);
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName: string) {
    this.filterForm.get(elementName).setValue('');
    this.advanceFilterForm.get(elementName).setValue('');
    if (elementName === 'group_id' || elementName === 'field_type' || elementName === 'is_mandatory') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'field_title' || elementName === 'field_value') {
      delete this.likeJSON[elementName];
    }
    this.getFieldList(1, this.sortBy, this.sortOrder);
  }


  /**
   * Pagination page change event
   * @param event
   */
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getFieldList(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   *
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getFieldList(1, sortKey, sortVal);
  }

  /**
   * Function downloading excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.DYNAMIC_FIELD_DOWNLOAD_EXCEL, params, {}, 'Dynamic Field', 0).subscribe(response => {
    });
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {'is_active': 1};
    this.likeJSON = {};
    this.inJSON = {};

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
    //
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'group_id' || key === 'field_type' || key === 'is_mandatory') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'field_title' || key === 'field_value') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isOpenFilterView = false;
      this.getFieldList(1, 'id', 'desc');
    }
  }

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
          'group_id': form.value['group_id'],
          'field_title': form.value['field_title'],
          'field_type': form.value['field_type'],
          'field_value': form.value['field_value'],
          'is_mandatory': form.value['is_mandatory']
        });
      this.setAdvanceFilter(form, false);
    }
  }

  resetFilterForm() {
    this.createAdvanceFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.inJSON = {};
    this.isOpenFilterView = false;
    this.getFieldList(1, '', 'desc');
  }


  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilterView = false;
    }
  }

  /**
   * Get Field Type Name
   * @param fieldType
   */
  getFiledTypeName(fieldType: string): string {
    const val = this.fieldType.filter(elem => elem.key === fieldType);
    return (val.length) ? val[0].label : '';
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
    params['notin'] = {'group_id': '1,2'};
    // check for the object whether it's empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if ((Object.keys(this.equalJSON).length) || (Object.keys(this.likeJSON).length)) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }
}
