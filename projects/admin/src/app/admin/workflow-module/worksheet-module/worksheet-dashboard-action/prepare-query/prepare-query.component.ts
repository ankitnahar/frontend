import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {BASE, GLOBALDATAKEYS, ToastType} from '../../../../../../utility/constants/base-constants';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WorksheetListing} from "../../worksheet-dashboard-tab/worksheet.model";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {BankInformation} from "../../../../client-module/view-client/update-client/information/bank-information/bank-information.model";
import * as moment from "moment";

@Component({
  selector: 'app-prepare-query',
  templateUrl: './prepare-query.component.html',
  styleUrls: ['./prepare-query.component.scss']
})
export class PrepareQueryComponent implements OnInit {
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  url = BASE.IMAGE_PATH;
  // Form Variables
  addPrepareQueryForm: FormGroup;
  docArray = [];
  documentName: string;
  worksheetData: WorksheetListing;
  bankList: BankInformation[] = [];
  queryType = null;
  from_date = [];

  constructor(private _router: Router, private _fb: FormBuilder, public _commonCrudService: CommonCrudService,
              private cd: ChangeDetectorRef, private _sharedObjService: SharedObjService, private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.worksheetData = this._sharedService.getClientData(GLOBALDATAKEYS.QUERY_WORKSHEET_MODULE);
    // console.log(this.worksheetData);
    this.createPrepareQueryForm();
    this.getBankQueryList();
  }

  /**
   * Bank Query listing API
   */
  getBankQueryList() {
    this._commonCrudService.listData(AdminAPI.QUERY_BANK_LIST + '/' + 0, {"entity_id": this.worksheetData.entity_id}).subscribe(Response => {
      this.bankList = Response.payload.data;
      if (this.bankList) {
        this.bankList.forEach(item => {
          this.getFilterBankArray().push(this.createBankForm(item));
        });
      }
      // console.log(this.getFilterBankArray().controls);
      // this.getFilterBankArray().push(this.createBankForm(dataItem));
    });
  }


  /**
   * Open quick menu
   * @param menuName
   */
  onOpenQuickMenu(menuName) {
    /*  switch (menuName) {
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
      }*/
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  onWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_DASHBOARD_TAB]);
  }

  /**
   * On clear document name
   */
  onClear(index: number) {
    this.getFilterBankArray().controls[index].get('upload').setValue(null);
  }

  createPrepareQueryForm() {
    this.addPrepareQueryForm = this._fb.group({
      worksheet_id: new FormControl(this.worksheetData.id),
      entity_id: new FormControl(this.worksheetData.entity_id),
      bank_list: new FormArray([])
    });
  }

  /**
   * Create Prepare query Form
   */
  createBankForm(item?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : 0),
      bank_name: new FormControl(item ? item['bank_name'] : null, Validators.required),
      account_no: new FormControl(item ? item['account_no'] : null),
      bank_id: new FormControl(item ? item['bank_id'] : null, Validators.required),
      start_date: new FormControl(new Date(this.worksheetData.start_date)),
      end_date: new FormControl(new Date(this.worksheetData.end_date)),
      rows: new FormControl(item ? item['rows'] : null),
      upload: new FormControl(),
      queryType: new FormControl(null),
      is_checked: new FormControl(item && item['is_checked'] != null ? item['is_checked'] : 0, Validators.required),
    });
  }

  /**
   *
   * @param parent
   * @param key
   * @param event
   * @param valueData
   */
  onCheckBankData(parent: number, key: string, event: any, valueData: number) {
    if (parent >= 0 && valueData === 0) {
      this.getFilterBankArray().controls[parent].get(key).setValue(1);
      this.getFilterBankArray().controls[parent].get('start_date').setValidators(Validators.required);
      this.getFilterBankArray().controls[parent].get('start_date').updateValueAndValidity();
      this.getFilterBankArray().controls[parent].get('end_date').setValidators(Validators.required);
      this.getFilterBankArray().controls[parent].get('end_date').updateValueAndValidity();
      this.getFilterBankArray().controls[parent].get('queryType').setValidators(Validators.required);
      this.getFilterBankArray().controls[parent].get('queryType').updateValueAndValidity();
    } else {
      this.getFilterBankArray().controls[parent].get(key).setValue(0);
      this.getFilterBankArray().controls[parent].get('start_date').setValidators(null);
      this.getFilterBankArray().controls[parent].get('start_date').updateValueAndValidity();
      this.getFilterBankArray().controls[parent].get('end_date').setValidators(null);
      this.getFilterBankArray().controls[parent].get('end_date').updateValueAndValidity();
      this.getFilterBankArray().controls[parent].get('queryType').setValidators(null);
      this.getFilterBankArray().controls[parent].get('queryType').updateValueAndValidity();
    }
  }

  /**
   * On file selection
   * @param id
   */
  onFileSelect(id) {
    document.getElementById(id).click();
  }

  /**
   * On Select Query Type
   * @param event
   */
  onSelectQueryType(event: any, index: number) {
    const queryType = event ? Number(event.value) : 0;
    if (queryType === 0) {
      this.getFilterBankArray().controls[index].get('queryType').setValue(queryType);
      this.getFilterBankArray().controls[index].get('queryType').updateValueAndValidity();

      this.getFilterBankArray().controls[index].get('upload').setValue(null);
      this.getFilterBankArray().controls[index].get('upload').setValidators(Validators.required);
      this.getFilterBankArray().controls[index].get('upload').updateValueAndValidity();

      this.getFilterBankArray().controls[index].get('rows').setValue(null);
      this.getFilterBankArray().controls[index].get('rows').setValidators(null);
      this.getFilterBankArray().controls[index].get('rows').updateValueAndValidity();
    } else {
      this.getFilterBankArray().controls[index].get('queryType').setValue(queryType);
      this.getFilterBankArray().controls[index].get('queryType').updateValueAndValidity();

      this.getFilterBankArray().controls[index].get('rows').setValue(null);
      this.getFilterBankArray().controls[index].get('rows').setValidators(Validators.required);
      this.getFilterBankArray().controls[index].get('rows').updateValueAndValidity();

      this.getFilterBankArray().controls[index].get('upload').setValue(null);
      this.getFilterBankArray().controls[index].get('upload').setValidators(null);
      this.getFilterBankArray().controls[index].get('upload').updateValueAndValidity();
    }
  }

  /**
   * On File Select
   * @param event
   */
  onFileChange(event, index: number) {
    const findIndexVal = this.docArray.findIndex(item => item['reqKey'] === 'upload_' + this.getFilterBankArray().controls[index].get('id').value);
    // console.log(findIndexVal);
    if (findIndexVal > -1) {
      this.docArray.splice(findIndexVal, 1);
    }

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.docArray.push({
        'reqKey': 'upload_' + this.getFilterBankArray().controls[index].get('id').value,
        'file': event.target.files
      });
      this.getFilterBankArray().controls[index].get('upload').setValue(event.target.files[0].name);
      this._sharedService.setToastMessage(event.target.files[0].name + ' file attached successfully. Dont\'t forget to click on Save & Next button', ToastType.INFO);
    }
  }

  /**
   * Get Filter Bank Array
   */
  getFilterBankArray(): FormArray {
    return <FormArray>this.addPrepareQueryForm.get('bank_list');
  }

  /*
    /!**
     * Upload document browse file method
     *!/
    onChooseDocument() {
      document.getElementById('uploadDocument').click();
    }
  */

  /**
   * select event of document
   * @param event
   */
  onUploadDocument(event) {
    /*   if (event.target.files) {
         this.docArray = [];
         for (let index = 0; index < event.target.files.length; index++) {
           // console.log(event.target.files[index].type);
           const name = event.target.files[0].name;
           const lastDot = name.lastIndexOf('.');
           const ext = name.substring(lastDot + 1);
           // console.log(ext);
           if (ext.toLowerCase() === 'csv') {
             if (event.target.files[index].size > AppConstant.THREE_MB_IMAGE_SIZE_ALLOWED) {
               this._sharedService.setToastMessage(ToastErrorMessages.VALID_PDF_SIZE, ToastType.ERROR);
               return;
             } else {
               const file = event.target.files[0];
               this.addHolidayMasterCSVForm.get('upload').setValue(file.name);
               const reader = new FileReader();
               reader.readAsDataURL(file);
               this.docArray.push({
                 'reqKey': 'upload',
                 'file': event.target.files,
               });
             }
           } else {
             this._sharedService.setToastMessage(ToastErrorMessages.VALID_CSV_SELECTION, ToastType.ERROR);
             return;
           }
         }
       }*/
  }

  onSaveNext() {
    this._router.navigate(['/' + AdminRoutes.EDIT_QUERIES]);
  }

  /**
   * Set To Date On Change of From Date
   * @param fromDate
   */
  setToDate(fromDate: string, index: number) {
    this.from_date[index] = fromDate;
  }

  /**
   * On Submit
   * @param form
   */
  onSubmit(form: FormGroup) {
    const bankList = form.value['bank_list'];
    if (bankList.length) {
      bankList.map(item => {
        item['start_date'] = moment(item['start_date']).format('YYYY-MM-DD');
        item['end_date'] = moment(item['end_date']).format('YYYY-MM-DD');
      });
    }
    form.value['bank_list'] = JSON.stringify(bankList);
    this._commonCrudService.addData(AdminAPI.QUERY_STORE + '/' + 0, form.value, this.docArray).subscribe(Response => {
      this.onGoQueryModule();
    });
    form.value['bank_list'] = bankList;
  }


  onGoQueryModule() {
    this._router.navigate(['/' + AdminRoutes.PENDING_QUERY]);
  }
}
