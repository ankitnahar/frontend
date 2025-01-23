import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BaseComponent } from '../../../../../../../utility/components/base/base.component';
import { AdminRoutes } from '../../../../../../../utility/constants/admin-route';
import { AdminAPI } from '../../../../../../../utility/constants/api';
import { CLIENTTYPEINFO, CLIENT_PAYROLL_LIST, GLOBALDATAKEYS, TEAM_TYPE, ToastType, VIEWCLIENTTYPE, basAccrualorcash, basFrequency, bkDoneby, entityType, franchise, paygFrequency, statementDeliveryPreference, yesNo, yesNoNa, yesNoOther } from '../../../../../../../utility/constants/base-constants';
import { AdminUser } from "../../../../../../../utility/shared-model/admin-user.model";
import { CommonCrudService } from '../../../../../../../utility/shared-service/common-crud.service';
import { SharedObjService } from '../../../../../../../utility/shared-service/shared-object.service';
import { SharedService } from '../../../../../../../utility/shared-service/shared.service';
import { CommonRegex, ValidationConstantMessage } from '../../../../../../../utility/validation';
import { Clients } from '../../../view-client.model';
import { Basic } from './basic.model';

@Component({
  selector: 'app-basic-main',
  templateUrl: './basic-main.component.html',
  styleUrls: ['./basic-main.component.scss'],
  // providers: [CommonCrudService]
})
export class BasicMainComponent extends BaseComponent implements OnInit {

  // Angular Variables
  @ViewChild('basicForm') basicForm;

  // Data Variables
  mainClientResponse: Basic[] = [];
  userList: AdminUser[] = [];
  clientData: Clients;
  clientList: Clients[] = [];
  parentList: Clients[] = [];
  ClientBelongsToResponse: any;
  return: any;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  YesNo = yesNo;
  YesNoNa = yesNoNa;
  YesNoOther = yesNoOther;
  BkDoneby = bkDoneby;
  BasFrequency = basFrequency;
  BasAccrualorcash = basAccrualorcash;
  PaygFrequency = paygFrequency;
  StatementDeliveryPreference = statementDeliveryPreference;
  EntityType = entityType;
  Franchise = franchise;
  ClientType = CLIENTTYPEINFO;
  billingFrom = yesNo;
  tab = VIEWCLIENTTYPE.BASIC;
  FinancialInstitutionUpdateonAto = false;
  bkDoneByOther = false;
  entityTypeOther = false;
  isParent = false;
  // Form Group Variables
  basicMainForm: FormGroup;
  teamTypeForm = TEAM_TYPE;
  clientPayrollList = CLIENT_PAYROLL_LIST;

  constructor(private _fb: FormBuilder,
              private _sharedService: SharedService,
              private _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    // Get Client Data
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.createBasicMainForm();
    this.initializeMethod();
    this.getUserList();
  }

  /**
   * Get User List
   */
  getUserList() {
    this._sharedObjService.getUserList({'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe((response) => {
      this.userList = response;
    });
  }

  /**
   * Handle Initialize Method
   */
  initializeMethod() {
    this.getClientList();
    this._commonCrudService.listData(AdminAPI.CLIENT_BELONGSTO, {'records': 'all'}).subscribe(Response => {
      this.handleClientBelongsToList(Response);
    });
    this.getClientDataDetail();
    const value = {
      url: AdminAPI.CLIENT_HISTORY + '/' + this.tab,
      params: {'entity_id': this.clientData.id},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
      const parent = response.filter(data => (data['parent_id']) ? data['parent_id'] === 0 : 0);
      this.parentList = parent;
    });
  }

  onChangeParent(parentType: number, clientObject?: any) {
    if (parentType !== 0) {
      this.basicMainForm.get('parent_id').setValidators(null);
      this.basicMainForm.get('parent_id').setValue(0);
      this.basicMainForm.get('parent_id').updateValueAndValidity();
    } else {
      if (this.clientData && clientObject) {
        this.basicMainForm.get('parent_id').setValue(clientObject.parent_id);
        this.basicMainForm.get('parent_id').updateValueAndValidity();
      } else {
        this.basicMainForm.get('parent_id').setValue(null);
        this.basicMainForm.get('parent_id').setValidators(Validators.required);
        this.basicMainForm.get('parent_id').updateValueAndValidity();
      }
    }
  }

  /**
   * On Change Dashboard Value
   * @param value
   */
  onChangeDashboard(value: number) {
    if (value) {
      this.basicMainForm.get('dashboard_reason').setValidators(null);
      this.basicMainForm.get('dashboard_reason').setValue(null);
      this.basicMainForm.get('dashboard_reason').updateValueAndValidity();
    } else {
      this.basicMainForm.get('dashboard_reason').setValidators(Validators.required);
      this.basicMainForm.get('dashboard_reason').setValue(null);
      this.basicMainForm.get('dashboard_reason').updateValueAndValidity();
    }
  }

  /**
   * Create Client Basic Form
   * @param mainClientResponseObject
   */
  createBasicMainForm(mainClientResponseObject?: any) {
    this.mainClientResponse = mainClientResponseObject;
    // console.log(this.mainClientResponse);
    this.basicMainForm = this._fb.group({
      billing_name: new FormControl(mainClientResponseObject ? mainClientResponseObject.billing_name : '', <any>Validators.required),
      name: new FormControl(mainClientResponseObject ? mainClientResponseObject.name : '', <any>Validators.required), // Legal Name
      trading_name: new FormControl(mainClientResponseObject ? mainClientResponseObject.trading_name : '', <any>Validators.required),
      contract_signed_date: new FormControl(mainClientResponseObject ? mainClientResponseObject.contract_signed_date : '', <any>Validators.required),
      // entity_writeoff: new FormControl(mainClientResponseObject ? mainClientResponseObject.entity_writeoff : '', <any>Validators.required),
      reviewer_budgeted_unit: new FormControl(mainClientResponseObject ? mainClientResponseObject.reviewer_budgeted_unit : '', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.minLength(1), <any>Validators.maxLength(3)]),
      related_entity: new FormControl(mainClientResponseObject ? mainClientResponseObject.related_entity : ''),
      related_entity_id: new FormControl(mainClientResponseObject ? this.getArrayToString(mainClientResponseObject.related_entity_id, ',') : []),
      is_parent: new FormControl(mainClientResponseObject ? mainClientResponseObject.is_parent : null, <any>Validators.required),
      parent_id: new FormControl(mainClientResponseObject ? mainClientResponseObject.parent_id : null),
      abn_number: new FormControl(mainClientResponseObject ? mainClientResponseObject.abn_number : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.minLength(11), <any>Validators.maxLength(11)]),
      abn_branch_code: new FormControl(mainClientResponseObject ? mainClientResponseObject.abn_branch_code : '', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.minLength(1), <any>Validators.maxLength(3)]),
      abn_register_date: new FormControl(mainClientResponseObject ? ((mainClientResponseObject.abn_register_date !== '0000-00-00') ? mainClientResponseObject.abn_register_date : '') : ''),
      tfn_number: new FormControl(mainClientResponseObject ? mainClientResponseObject.tfn_number : ''),
      business_type: new FormControl(mainClientResponseObject ? mainClientResponseObject.business_type : ''),
      entity_type: new FormControl(mainClientResponseObject ? mainClientResponseObject.entity_type : ''),
      entity_type_ifother: new FormControl(mainClientResponseObject ? mainClientResponseObject.entity_type_ifother : ''),
      bk_doneby: new FormControl(mainClientResponseObject ? mainClientResponseObject.bk_doneby : ''),
      bk_doneby_ifother: new FormControl(mainClientResponseObject ? mainClientResponseObject.bk_doneby_ifother : ''),
      gst_register: new FormControl(mainClientResponseObject ? mainClientResponseObject.gst_register : ''),
      gst_register_date: new FormControl(mainClientResponseObject ? ((mainClientResponseObject.gst_register_date !== '0000-00-00') ? mainClientResponseObject.gst_register_date : '') : ''),
      bas_frequency: new FormControl(mainClientResponseObject ? mainClientResponseObject.bas_frequency : ''),
      bas_accrualorcash: new FormControl(mainClientResponseObject ? mainClientResponseObject.bas_accrualorcash : ''),
      payg_frequency: new FormControl(mainClientResponseObject ? mainClientResponseObject.payg_frequency : ''),
      financial_institution_updateon_ato: new FormControl(mainClientResponseObject ? mainClientResponseObject.financial_institution_updateon_ato : ''),
      financial_institution_updateon_ato_ifother: new FormControl(mainClientResponseObject ? mainClientResponseObject.financial_institution_updateon_ato_ifother : ''),
      statement_delivery_preference: new FormControl(mainClientResponseObject ? mainClientResponseObject.statement_delivery_preference : ''),
      entity_registerfor_fbt: new FormControl(mainClientResponseObject ? mainClientResponseObject.entity_registerfor_fbt : ''),
      entity_registerfor_fueltaxcredit: new FormControl(mainClientResponseObject ? mainClientResponseObject.entity_registerfor_fueltaxcredit : ''),
      group_client_belongsto: new FormControl(mainClientResponseObject ? mainClientResponseObject.group_client_belongsto : ''),
      franchise: new FormControl(mainClientResponseObject ? mainClientResponseObject.franchise : ''),
      website: new FormControl(mainClientResponseObject ? mainClientResponseObject.website : '', [<any>Validators.pattern(CommonRegex.WEBSITE)]),
      trading_name_unique: new FormControl(1, <any>Validators.required),
      name_unique: new FormControl(1, <any>Validators.required),
      xero_email_id: new FormControl(mainClientResponseObject ? mainClientResponseObject.xero_email_id : null, [<any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      myob_email_id: new FormControl(mainClientResponseObject ? mainClientResponseObject.myob_email_id : null, [<any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      is_dashboard: new FormControl(mainClientResponseObject ? mainClientResponseObject.is_dashboard : null, [<any>Validators.required]),
      dashboard_reason: new FormControl(mainClientResponseObject ? mainClientResponseObject.dashboard_reason : null, mainClientResponseObject && mainClientResponseObject.is_dashboard === 0 ? <any>Validators.required : null),
      user_signature: new FormControl(mainClientResponseObject ? mainClientResponseObject.user_signature : null, [<any>Validators.required]),
      entity_business_type: new FormControl(mainClientResponseObject ? Number(mainClientResponseObject.entity_business_type) : null, [<any>Validators.required, Validators.min(1)]),
      billing_from: new FormControl(mainClientResponseObject && mainClientResponseObject.billing_from >= 0 ? Number(mainClientResponseObject.billing_from) : null, [<any>Validators.required, Validators.min(0)]),
      team_type: new FormControl(mainClientResponseObject ? mainClientResponseObject.team_type : null),
      feedback_assignee: new FormControl(mainClientResponseObject && mainClientResponseObject.feedback_assignee ? mainClientResponseObject.feedback_assignee.id : null),
      client_payroll: new FormControl(mainClientResponseObject && mainClientResponseObject.client_payroll),
    });

    if (mainClientResponseObject) {
      this.onChangeParent(mainClientResponseObject.is_parent, mainClientResponseObject);
    }
  }

  /**
   * Get Client Basic Details
   */
  getClientDataDetail() {
    this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, this.clientData.id, {'tab': this.tab}).subscribe(Response => {
      this.handleMainClientResponse(Response);
    });
  }

  /**
   * Handle Entity Belongs to List
   * @param response
   */
  handleClientBelongsToList(response: any) {
    // assign data to array
    this.ClientBelongsToResponse = response.payload.data;
  }

  /**
   * Handle Entity Response for data
   * @param response
   */
  handleMainClientResponse(response: any) {
    // assign data to array
    this.mainClientResponse = response.payload.data;
    this.createBasicMainForm(this.mainClientResponse);
    this.showFinancialOther(this.mainClientResponse['financial_institution_updateon_ato']);
    this.showBKdoneByOther(this.mainClientResponse['bk_doneby']);
    this.showEntityTypeOther(this.mainClientResponse['entity_type']);
  }


  /**
   * On Form Submit Client Basic Data
   * @param formParams
   * @param {boolean} isValid
   */
  onSubmitBasicMainform(formParams: any, isValid: boolean) {
    formParams['tab'] = this.tab;
    formParams['_method'] = 'put';
    formParams['related_entity_id'] = (formParams['related_entity_id']) ? formParams['related_entity_id'].join() : '';
    formParams['contract_signed_date'] = (formParams['contract_signed_date'] !== '') ? moment(formParams['contract_signed_date']).format('YYYY-MM-DD') : '';
    formParams['gst_register_date'] = (formParams['gst_register_date'] !== '') ? moment(formParams['gst_register_date']).format('YYYY-MM-DD') : '';

    // debugger;
    if (isValid) {
      this._commonCrudService.updateData(AdminAPI.CLIENT_UPDATE, this.clientData.id, formParams).subscribe(Response => {
        this.basicForm.resetForm();
        this.createBasicMainForm();
        this.getClientDataDetail();
      });
    }
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  /**
   * Get Client List for Related Entity
   * @returns {{}}
   */
  getClientListSearch() {
    const params = {};
    const filter = {};
    filter['notequal'] = {'discontinue_stage': 2};
    params['compare'] = filter;
    return params;
  }

  /**
   * Get Client List Selected From API
   * @param idList
   * @returns {{}}
   */
  getClientListSelectedSearch(idList) {
    const params = {};
    const filter = {'id': idList};
    params['in'] = filter;
    return params;
  }

  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }

  /**
   * Check Client Unique name is available or not
   * @param fieldName
   * @param value
   */
  checkClientUniqueName(fieldName: string, value: string, nickName: string) {
    if (fieldName && value) {
      const params = {[fieldName]: value};
      this._commonCrudService.listData(AdminAPI.CLIENT_CHECK_DUPLICATE, {
        'data': JSON.stringify(params),
        'entity_id': this.clientData.id
      }).subscribe(Response => {
        const errorCode = Response.payload.errorCode;
        if (errorCode === 0) {
          this.basicMainForm.get([fieldName] + '_unique').setValue(1);
          this.basicMainForm.get([fieldName] + '_unique').updateValueAndValidity();
          this._sharedService.setToastMessage('Great, this ' + nickName + ' is available.', ToastType.SUCCESS);
        } else if (errorCode === 1) {
          this.basicMainForm.get([fieldName] + '_unique').setValue(null);
          this.basicMainForm.get([fieldName] + '_unique').updateValueAndValidity();
          this._sharedService.setToastMessage('Regret, this ' + nickName + ' is not available.', ToastType.ERROR);
        }
      });
    }
  }

  showFinancialOther(val: number) {
    if (val === 2) {
      this.FinancialInstitutionUpdateonAto = true;
    } else {
      this.FinancialInstitutionUpdateonAto = false;
    }
  }

  showBKdoneByOther(val: number) {
    if (val === 3) {
      this.bkDoneByOther = true;
    } else {
      this.bkDoneByOther = false;
    }
  }

  showEntityTypeOther(val: number) {
    if (val === 3) {
      this.entityTypeOther = true;
    } else {
      this.entityTypeOther = false;
    }
  }
}
