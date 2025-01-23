import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ADMINTABACCESS} from '../../../../utility/constants/header-constant';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ClientReport, ReportFieldList} from '../client-report/client-report.module';
import {AdminUser, Privilege} from '../../../../utility/shared-model/admin-user.model';
import {BASE, CLFIELDTYPE, DDFIELDTYPE, FIELDTYPE, hostingUserType, TBFIELDTYPE, TNFIELDTYPE, ToastType, yesNo, yesNoNa, yesNoOther} from '../../../../utility/constants/base-constants';
import {Clients} from '../../client-module/view-client/view-client.model';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../utility/shared-service/shared-object.service';
import {SharedService} from '../../../../utility/shared-service/shared.service';
import {DragulaService} from 'ng2-dragula';
import {AdminAPI} from '../../../../utility/constants/api';
import * as moment from 'moment';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {ShareReportDialogComponent} from '../client-report/share-report-dialog/share-report-dialog.component';

@Component({
  selector: 'app-billing-hosting-user-report',
  templateUrl: './billing-hosting-user-report.component.html',
  styleUrls: ['./billing-hosting-user-report.component.scss']
})
export class BillingHostingUserReportComponent implements OnInit, OnDestroy {

  @ViewChild('outputInput') outputField: ElementRef;
  @Input() tabName: string;
  @Input() tabID: number;

  // form group array
  clientForm: FormGroup;
  reportDataForm: FormGroup;

  // Data Variables
  clientReportList: ClientReport[] = [];
  selectedClientReport: ClientReport = null;
  ReportList: ReportFieldList[] = [];
  outPutFieldList: ReportFieldList[] = [];
  serviceList = [];
  recurringList = [];
  softwareList = [];
  subactivityList = [];
  planListAll = [];
  stateList = [];
  cardNumberList = [];
  frequencyList = [];
  generatedReportList = [];
  reportColumn = [];
  selectedReportFilter = {};
  selectedReportValue = {};
  selectedReportUpdatedValue = {};
  reportTabData = {};
  reportArray = [];
  groupClientBelongsToList = [];
  // getUserListData = {};
  getUserListData = [];
  userList: AdminUser[] = [];
  entityList = {};
  leftDragableModel = [];
  rightDragableModel = [];

  // Pagination Data for Saved Report
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Report Pagination
  rpageArray = BASE.PAGINATION_ARRAY;
  rpageSize = BASE.PAGINATION_ARRAY[1];
  rpage: number;
  rpageIndex: number;
  rtotalRecords: number;

  // Sorting Params for client report
  clientReportSortBy: string;
  clientReportSortOrder: string;
  // MatPaginator Inputs
  length = 20;

  // MatPaginator Output
  showHideReport: boolean;

  tradingList: Clients[] = [];
  selectedTradingEntity = [];

  billingList: Clients[] = [];
  selectedBillingEntity = [];

  nameList: Clients[] = [];
  selectedNameEntity = [];

  codeList: Clients[] = [];
  selectedCodeEntity = [];

  d = [];
  userIDArray = [9, 10, 14, 15, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75];
  tabApiURL = '';
  tabReportName = '';
  BHUR = ADMINTABACCESS.REPORT_BILLINGHOSTINGUSERREPORT;
  tabData: Privilege | any[];

  constructor(public _router: Router, public dialog: MatDialog, private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService, private dragulaService: DragulaService) {
    this.showHideReport = false;
    dragulaService.destroy('DRAGULA_FACTS');
    dragulaService.createGroup('DRAGULA_FACTS', {
      revertOnSpill: true,
      removeOnSpill: false,
    });
  }

  ngOnInit() {
    this.reportTabData = {
      'id': (this.tabID) ? this.tabID : this.BHUR,
      'name': (this.tabName) ? this.tabName : 'Billing Hosting User Report'
    };
    // To Check Access Rights
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.reportTabData['id']);
    this.initializeMethod();
  }

  initializeMethod() {
    this.selectedClientReport = null;
    this.getClientList();
    this.getUserList();
    this.getTabReportAPIURL(this.reportTabData['id']);
    this.getReportOutputField(this.reportTabData['id']);
    this.createReportDataForm();
    this.createClientReportForm();
    this.getClientReportList(this.reportTabData['id'], 1);
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {
      'compare': {'equal': {'is_active': 1}},
      'findinset': {'team_id': [1, 2, 6]}
    }).subscribe((response) => {
      this.userList = response;
      this.getClientFilterFiled(this.reportTabData['id']);
    });
  }

  /**
   * get report output field for drag and drop
   * @param clientTypeId
   */
  getReportOutputField(clientTypeId) {
    this._commonCrudService.listData(AdminAPI.CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, {'type': 'output'}).subscribe(Response => {
      this.outPutFieldList = Response.payload.data;
      this.leftDragableModel = this.outPutFieldList;
    });
  }

  /**
   * Create Report Form
   */
  createClientReportForm() {
    this.clientForm = this._fb.group({
      clientReportFields: this._fb.array([this.createClientReportGroup()])
    });
  }

  /**
   * Create Report Data Form
   */
  createReportDataForm() {
    this.reportDataForm = this._fb.group({
      name: new FormControl(this.selectedClientReport ? this.selectedClientReport.name : '')
    });
  }

  /**
   * Create Report Group Form
   */
  createClientReportGroup(reportData?: any, item ?: any) {
    return this._fb.group({
      fieldname: new FormControl(reportData ? reportData : ''),
      condition: new FormControl(item ? item['condition'] : ''),
      value: new FormControl(item ? item['value'] : ''),
      value2: new FormControl(item ? item['value2'] : ''),
    });
  }


  /**
   * Get Client report list
   * @param tabId
   * @param pageNumber
   */
  getClientReportList(tabId: number, pageNumber: number) {
    this._commonCrudService.listData(AdminAPI.CLIENT_REPORT + '/' + tabId, this.getQueryParams(pageNumber)).subscribe(Response => {
      this.handleClientReportResponse(Response);
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.clientForm.get('clientReportFields');
  }

  /**
   * Handle Client Report Response
   * @param response
   */
  handleClientReportResponse(response: any) {
    this.clientReportList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
  }

  /**
   * add new filter
   * @param index
   */
  addNewFilter(index: number) {
    if (this.getFilterFieldArray().length < 6) {
      this.reportArray.push(this.getFilterFieldArray().controls[index].get('fieldname'));
      this.getFilterFieldArray().push(this.createClientReportGroup());
    } else {
      this._sharedService.setToastMessage('You can add maximum five filter', ToastType.ERROR);
    }
  }

  /**
   * remove row from filter collection
   * @param index
   */
  removeFilter(index: number) {
    this.reportArray.splice(this.reportArray.indexOf(this.getFilterFieldArray().controls[index].get('fieldname')), 1);
    this.getFilterFieldArray().removeAt(index);
  }

  /**
   * Genretae report
   * @param generateReportType
   */
  showGenerateReport(generateReportType: number, tabID?: number, pageNumber?: number, recordsPerPage?: number) {
    let formValue = {};
    if (!tabID) {
      tabID = this.reportTabData['id'];
    }
    if (this.rightDragableModel.length) {
      formValue['output_field'] = [];
      this.rightDragableModel.map(item => {
        formValue['output_field'].push(item.field_name);
      });
      formValue['output_field'] = formValue['output_field'].join();
      if (this.getFilterFieldArray().length) {
        formValue['search'] = [];
        this.getFilterFieldArray().value.map(item => {
          // console.log(item['value']);
          if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
            if (Array.isArray(item['value'])) {
              item['value'] = item['value'].toString();
            } else {
              if (this.checkIsFieldValueIsDate(item['value'])) {
                if (Number(item['value']) > 0 && !moment.isDate(item['value'])) {
                  item['value'] = item['value'];
                } else {
                  item['value'] = moment(item['value']).format('YYYY-MM-DD');
                }
              } else {
                item['value'] = item['value'];
              }
            }
            if (item['condition'] === 'between') {
              if (item['value']) {
                formValue['search'].push({
                  'fieldname': item['fieldname']['field_name'],
                  'condition': 'greaterthanequal',
                  'value': moment(item['value']).format('YYYY-MM-DD')
                });
              }
              if (item['value2']) {
                formValue['search'].push({
                  'fieldname': item['fieldname']['field_name'],
                  'condition': 'lessthanequal',
                  'value': moment(item['value2']).format('YYYY-MM-DD')
                });
              }
            } else {
              formValue['search'].push({
                'fieldname': item['fieldname']['field_name'],
                'condition': item['condition'],
                'value': item['value'],
              });
            }
          }
        });
      }
      formValue['search'].length === 0 ? delete formValue['search'] : formValue['search'] = JSON.stringify(formValue['search']);
      if (generateReportType) {
        formValue['excel'] = 1;
        formValue['records'] = 'all';
        this._commonCrudService.downloadReport(this.tabApiURL, formValue, {}, this.tabReportName, 0).subscribe(response => {
        });
      } else {
        formValue['pageNumber'] = (pageNumber) ? pageNumber : 1;
        formValue['recordsPerPage'] = (recordsPerPage) ? recordsPerPage : this.rpageSize;

        this._commonCrudService.generatReport(this.tabApiURL, formValue).subscribe(Response => {
          this.generatedReportList = Response.payload.data;
          this.rpage = Response.pager.pageNumber;
          this.rpageIndex = this.rpage - 1;
          this.rtotalRecords = +Response.pager.totalRecords;
          this.reportColumn = (this.generatedReportList[0]) ? Object.keys(this.generatedReportList[0]) : [];
          this.showHideReport = true;
        });
      }
    } else {
      this._sharedService.setToastMessage('Please select atleast one output field', ToastType.ERROR);
    }
  }

  /**
   * on change of field type assign it to the selectedReportfilter and assign ites field
   * condition and condition value to be perform.
   * @param value
   * @param i
   */
  changeFieldName(value: any, i: number, selectedItem?: any) {
    const indOfField = this.ReportList.findIndex(x => +x.id === +value.id);
    if (this.ReportList[indOfField].field_name === 'trading_name' || this.ReportList[indOfField].field_name === 'billing_name' || this.ReportList[indOfField].field_name === 'entity_name' || this.ReportList[indOfField].field_name === 'code') {
      if (selectedItem) {
        this.onSearch(this.ReportList[indOfField].field_name, 1, selectedItem['value']);
        this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
      } else {
        this.onSearch(this.ReportList[indOfField].field_name);
        this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
      }
    } else if (indOfField > -1) {
      this.onSearch(this.ReportList[indOfField].field_name);
      // console.log(2);
      this.selectedReportFilter[i] = this.ReportList[indOfField].field_type_value;
      this.selectedReportValue[i] = this.ReportList[indOfField].field_value_array;
      if (selectedItem) {
        if (this.ReportList[indOfField].field_type === FIELDTYPE.TEXTNUMERIC) {
          const itemValue = selectedItem['value'];
          this.selectedReportUpdatedValue[i] = itemValue;
        } else if (this.ReportList[indOfField].field_type === FIELDTYPE.TEXTBOX) {
          const itemValue = selectedItem['value'];
          this.selectedReportUpdatedValue[i] = itemValue;
        } else {
          const itemValue = this.getArrayToString(selectedItem['value'], ',');
          this.selectedReportUpdatedValue[i] = itemValue;
        }
      }
    }
  }

  /**
   * on change of field type assign it to the selectedReportfilter and assign ites field
   * condition and condition value to be perform.
   * @param value
   * @param i
   */
  onSelectShowHideField(value: any, i: number, selectedItem?: any) {

  }

  /**
   * Save Client Report
   * @param isValid
   * @param formValue
   */
  saveClientReport(isValid: boolean, formValue: any) {
    if (isValid) {
      if (this.rightDragableModel.length) {
        formValue['output'] = [];
        formValue['filter_output_field'] = [];
        this.rightDragableModel.map(item => {
          formValue['output'].push(item.field_name);
          formValue['filter_output_field'].push(item.field_title);
        });
        formValue['output'] = formValue['output'].join();
        formValue['filter_output_field'] = formValue['filter_output_field'].join();
        formValue['tab_id'] = this.reportTabData['id'];
        if (this.getFilterFieldArray().length) {
          formValue['filter_condition_value'] = [];
          this.getFilterFieldArray().value.map(item => {
            if (item['fieldname'] !== '' && item['condition'] !== '' && (item['value']) && (item['value'] !== '')) {
              if (Array.isArray(item['value'])) {
                item['value'] = item['value'].toString();
              } else {
                if (this.checkIsFieldValueIsDate(item['value'])) {
                  if (Number(item['value']) > 0 && !moment.isDate(item['value'])) {
                    item['value'] = item['value'];
                  } else {
                    item['value'] = moment(item['value']).format('YYYY-MM-DD');
                  }
                } else {
                  item['value'] = item['value'];
                }
              }

              if (item['condition'] === 'between') {
                formValue['filter_condition_value'].push({
                  'fieldname': item['fieldname']['field_name'],
                  'condition': item['condition'],
                  'value': moment(item['value']).format('YYYY-MM-DD'),
                  'value2': moment(item['value2']).format('YYYY-MM-DD'),
                });
              } else {
                formValue['filter_condition_value'].push({
                  'fieldname': item['fieldname']['field_name'],
                  'condition': item['condition'],
                  'value': item['value']
                });
              }
            }
          });
        }
        formValue['filter_condition_value'].length === 0 ? delete formValue['filter_condition_value'] : formValue['filter_condition_value'] = JSON.stringify(formValue['filter_condition_value']);
        if (this.selectedClientReport) {
          formValue['_method'] = 'put';
          // this.reportTabData['id'],
          this._commonCrudService.updateData(AdminAPI.CLIENT_REPORT_UPDATE, this.selectedClientReport.id, formValue).subscribe(Response => {
            this.rightDragableModel = [];
            this.initializeMethod();
          });
        } else {
          // this.reportTabData['id']
          this._commonCrudService.addData(AdminAPI.CLIENT_REPORT_ADD + '/' + this.reportTabData['id'], formValue).subscribe(Response => {
            this.rightDragableModel = [];
            this.initializeMethod();
          });
        }
      } else {
        this._sharedService.setToastMessage('Please select atleast one output field', ToastType.ERROR);
      }
    }
  }

  // event
  /**
   * pagination event
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getClientReportList(this.reportTabData['id'], event.pageIndex + 1);
  }

  /**
   * pagination event
   * @param event
   */
  onPageReportChange(event: any) {
    this.showGenerateReport(0, this.reportTabData['id'], event.pageIndex + 1, event.pageSize);
  }

  onViewBillingInformation() {
    this._router.navigate(['/' + AdminRoutes.UPDATE_CLIENT]);
  }

  /**
   * reset filter
   */
  resetFilterField() {
    this.createClientReportForm();
  }

  /**
   * reset output field by push it to the left draggable model and make it empty.
   */
  resetOutputField() {
    this.rightDragableModel.map(item => {
      this.leftDragableModel.push(item);
    });
    this.rightDragableModel = [];
  }

  /**
   * set output field by push it to the right draggable model and make it empty.
   */
  addFieldToOutput() {
    this.rightDragableModel = this.outPutFieldList;
    this.leftDragableModel = [];
  }

  /**
   * delete client report.
   * @param clientReport
   */
  deleteClientReport(clientReport: ClientReport) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this report ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._commonCrudService.deleteData(AdminAPI.CLIENT_REPORT_DELETE, clientReport.id).subscribe(Response => {
          this.getClientReportList(this.reportTabData['id'], 1);
        });
      }
    });
  }

  /**
   * get the user list to whom admin want to share document.
   * @param clientReport
   */
  shareDocumentWithUser(clientReport: ClientReport) {
    this._commonCrudService.listData(AdminAPI.CLIENT_REPORT_SHARED_USER_LIST + '/' + clientReport.report_saved_id, {}, {}).subscribe(Response => {
      Response.payload.data['clientData'] = clientReport;
      const dialogRef = this.dialog.open(ShareReportDialogComponent, {
        width: '500px',
        data: {
          content: Response.payload.data
        }
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    });
  }

  /**
   * local sort the report data based on key and value
   * @param sortKey
   * @param sortVal
   */
  getSortClientReportData(sortKey: string, sortVal: string) {
    this.clientReportSortBy = sortKey;
    this.clientReportSortOrder = sortVal;
    const sortedArray = this.clientReportList.sort((objOne, objTwo) => {
      if (objOne[sortKey] > objTwo[sortKey]) {
        return 1;
      }
      if (objOne[sortKey] < objTwo[sortKey]) {
        return -1;
      }
      return 0;
    });

    if (sortVal === 'asc') {
      this.clientReportList = sortedArray;
    } else {
      this.clientReportList = sortedArray.reverse();
    }
  }

  /**
   * load the specific document and its content and remove already selected output fields if there is any.
   * @param clientReport
   */
  loadDocument(clientReport: ClientReport) {
    this._commonCrudService.getData(AdminAPI.CLIENT_REPORT_VIEW, clientReport.id).subscribe(Response => {
      this.rightDragableModel.map(item => {
        this.leftDragableModel.push(item);
      });
      this.rightDragableModel = [];
      this.leftDragableModel = this.outPutFieldList;
      this.selectedClientReport = Response.payload.data;
      this.createReportDataForm();
      this.selectedClientReport.outputList = this.selectedClientReport.output.split(',');
      if (this.selectedClientReport.outputList.length) {
        this.selectedClientReport.outputList.map(report => {
          const ind = this.outPutFieldList.findIndex(x => x.field_name === report);
          this.rightDragableModel.push(this.outPutFieldList[ind]);
          this.leftDragableModel.splice(ind, 1);
        });
      }

      if (this.selectedClientReport.filter_condition_value !== null) {
        if (JSON.parse(this.selectedClientReport.filter_condition_value).length) {
          this.clientForm = this._fb.group({
            clientReportFields: this._fb.array([])
          });
        }
        this.selectedClientReport.filter_condition_valueList = JSON.parse(this.selectedClientReport.filter_condition_value);
        let i = 0;
        this.selectedClientReport.filter_condition_valueList.map(item => {
          const indOfField = this.ReportList.findIndex(x => x.field_name === item.fieldname);
          this.changeFieldName(this.ReportList[indOfField], i, item);
          this.getFilterFieldArray().push(this.createClientReportGroup(this.ReportList[indOfField], item));
          i++;
        });
      }
    });
  }

  // helper
  // get function for returning pageNumber and page size at time of listing api
  getQueryParams(page: number) {
    return {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.tradingList = response;
      this.billingList = response;
      this.nameList = response;
      this.codeList = response;
    });
  }

  /**
   * On Search Of Data
   * @param key
   */
  onSearch(key, format?: any, selectedIDS?: any) {
    if (key === 'billing_name') {
      if (Number(format) === 1) {
        this.selectedBillingEntity = this.getArrayToString(selectedIDS, ',');
      }
    }

    if (key === 'trading_name') {
      if (Number(format) === 1) {
        this.selectedTradingEntity = this.getArrayToString(selectedIDS, ',');
      }
    }
    if (key === 'entity_name') {
      if (Number(format) === 1) {
        this.selectedNameEntity = this.getArrayToString(selectedIDS, ',');
      }
    }
    if (key === 'code') {
      if (Number(format) === 1) {
        this.selectedCodeEntity = this.getArrayToString(selectedIDS, ',', 1);
      }
    }
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: any, seperator: string, isNotNumber?: number) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        if (isNotNumber) {
          valueOne.push(item);
        } else {
          valueOne.push(Number(item));
        }
      });
      return valueOne;
    }
  }

  /**
   * Get Report Tab API UR AND Tab Report Name
   * @param tabID
   */
  getTabReportAPIURL(tabID) {
    if (+tabID === this.BHUR) {
      this.tabApiURL = AdminAPI.BILLING_HOSTING_USER_GENERATE_REPORT;
      this.tabReportName = 'Billing Hosting User Report ';
    }
  }

  /**
   * get report list and pass its field condition value for drop down from constant as well as whose group id = 1 and
   * field value = "" and type = 'DD' then assign its filter value from API.
   * @param clientTypeId
   */
  getClientFilterFiled(clientTypeId: number) {
    this._commonCrudService.listData(AdminAPI.CLIENT_REPORT_FILTER_FIELD + '/' + clientTypeId, {'type': 'filter'}).subscribe(Response => {
      this.ReportList = Response.payload.data;
      this.rpage = Response.pager.pageNumber;
      this.rpageIndex = this.rpage - 1;
      this.rtotalRecords = +Response.pager.totalRecords;
      if (+this.reportTabData['id'] === this.BHUR) {
        this.ReportList.map(item => {
          if (item.field_value) {
            item.isCommaSeperated = false;
            if (item.field_value === 'yesNo') {
              item.field_value_array = yesNo.slice(1);
            } else if (item.field_value === 'yesNoNa') {
              item.field_value_array = yesNoNa.slice(1);
            } else if (item.field_value === 'yesNoOther') {
              item.field_value_array = yesNoOther.slice(1);
            } else if (item.field_value === 'hostingUserType') {
              item.field_value_array = hostingUserType;
            } else {
              item.isCommaSeperated = true;
              item.field_value_array = item.field_value.split(',');
            }
          } else {
            // If Client Code And Entity Name Fetch
            if (item.field_name === 'code' || item.field_name === 'entity_name'
              || item.field_name === 'billing_name' || item.field_name === 'trading_name') {
              item.isMultiSelect = true;
              item.isCommaSeperated = false;
            }

            // If User IDS are there then
            if (this.userIDArray.indexOf(Number(item.field_name)) > -1) {
              item.isMultiSelect = false;
              item.isCommaSeperated = false;
              const itemArray = this.userList.filter(itemData => (itemData['designation_id']) ? itemData['designation_id']['id'] === Number(item.field_name) : 0);
              if (itemArray.length) {
                this.getUserListData = [];
                itemArray.map(itemArrayData => {
                  this.getUserListData.push({'key': itemArrayData['id'], 'label': itemArrayData['userfullname']});
                });
              } else {
                this.getUserListData = [];
              }
              item.field_value_array = this.getUserListData;
            }
          }
          if (item.field_type === FIELDTYPE.TEXTBOX) {
            item.field_type_value = TBFIELDTYPE;
          } else if (item.field_type === FIELDTYPE.DROPDOWN) {
            item.field_type_value = DDFIELDTYPE;
          } else if (item.field_type === FIELDTYPE.CALENDER) {
            item.field_type_value = CLFIELDTYPE;
          } else if (item.field_type === FIELDTYPE.TEXTNUMERIC) {
            item.field_type_value = TNFIELDTYPE;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.dragulaService.destroy('DRAGULA_FACTS');
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Check If field value is date
   * @param value
   */
  /**
   * Check If field value is date
   * @param value
   */
  checkIsFieldValueIsDate(value: string, type = 0): string {
    // console.log(value);
    if ((value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '1899-11-30' || value === '1970-01-01' || (Number(value) > 0)) && !moment.isDate(value)) {
      if (Number(value) > 0) {
        // console.log('A - ' + value);
        return value;
      } else {
        return '';
      }
    } else {
      const dateFormat = moment.isDate(value);
      // console.log(dateFormat);
      if (dateFormat) {
        const item = moment(new Date(value));
        const itemValue = item.format('DD-MM-YYYY');
        // console.log(itemValue);
        if (itemValue === '' || itemValue === null || itemValue === '0000-00-00' || itemValue === '0000-00-00 00:00:00' || itemValue === '30-11-1899' || itemValue === '01-01-1970') {
          return '';
        } else {
          return itemValue;
        }
      } else {
        if (type === 1) {
          return value;
        } else {
          return '';
        }
      }
    }
  }
}
