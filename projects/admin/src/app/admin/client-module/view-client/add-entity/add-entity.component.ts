import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { BaseComponent } from '../../../../../utility/components/base/base.component';
import { AdminRoutes } from '../../../../../utility/constants/admin-route';
import { AdminAPI } from '../../../../../utility/constants/api';
import { CLIENT_PAYROLL_LIST, TEAM_TYPE, ToastType, basAccrualorcash, basFrequency, bkDoneby, entityType, franchise, paygFrequency, statementDeliveryPreference, yesNo, yesNoNa, yesNoOther } from '../../../../../utility/constants/base-constants';
import { AdminUser } from '../../../../../utility/shared-model/admin-user.model';
import { CommonCrudService } from '../../../../../utility/shared-service/common-crud.service';
import { SharedObjService } from '../../../../../utility/shared-service/shared-object.service';
import { SharedService } from '../../../../../utility/shared-service/shared.service';
import { CommonRegex, ValidationConstantMessage } from '../../../../../utility/validation';
import { Clients } from '../view-client.model';


@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss'],
  // providers: [CommonCrudService]
})
export class AddEntityComponent extends BaseComponent implements OnInit {

  // Data Variables
  ClientListResponse: any;
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
  FinancialInstitutionUpdateonAto = false;
  bkDoneByOther = false;
  entityTypeOther = false;
  // Form Group Variables
  basicMainForm: FormGroup;
  billingFrom = yesNo;
  teamTypeForm = TEAM_TYPE;
  clientPayrollList = CLIENT_PAYROLL_LIST;

  clientList: Clients[] = [];
  userList: AdminUser[] = [];
  selectedAmNotesRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditAmNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
              private _sharedService: SharedService
  ) {
    super();
  }

  ngOnInit() {
    this.initializeMethod();
    this.getClientList();
    this.getUserList();
  }

  /**
   * Initialization Methods
   */
  initializeMethod() {
    // this._basicService.getClientList({}, this.getClientListSearch()).subscribe(Response => {
    //   this.handleClientListResponse(Response);
    // });
    this._commonCrudService.listData(AdminAPI.CLIENT_BELONGSTO, {'records': 'all'}).subscribe(Response => {
      this.handleClientBelongsToList(Response);
    });
    this.createBasicMainForm();
  }

  /**
   * Handle Entity Response for data
   * @param response
   */
  handleClientListResponse(response: any) {
    // assign data to array
    this.ClientListResponse = response.payload.data;
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
   * Create Client Basic Form
   * @param
   */
  createBasicMainForm() {
    this.basicMainForm = this._fb.group({
      billing_name: new FormControl('', <any>Validators.required),
      name: new FormControl('', <any>Validators.required), // Legal Name
      trading_name: new FormControl('', <any>Validators.required),
      contract_signed_date: new FormControl('', <any>Validators.required),
      // entity_writeoff: new FormControl('', <any>Validators.required),
      reviewer_budgeted_unit: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.minLength(1), <any>Validators.maxLength(3)]),
      related_entity: new FormControl(''),
      related_entity_id: new FormControl([]),
      is_parent: new FormControl(null, <any>Validators.required),
      parent_id: new FormControl(null),
      abn_number: new FormControl('', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.minLength(11), <any>Validators.maxLength(11)]),
      abn_branch_code: new FormControl('', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), <any>Validators.minLength(1), <any>Validators.maxLength(3)]),
      abn_register_date: new FormControl(''),
      tfn_number: new FormControl('', [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      business_type: new FormControl(''),
      entity_type: new FormControl(''),
      entity_type_ifother: new FormControl(''),
      bk_doneby: new FormControl(''),
      bk_doneby_ifother: new FormControl(''),
      gst_register: new FormControl(''),
      gst_register_date: new FormControl(''),
      bas_frequency: new FormControl(''),
      bas_accrualorcash: new FormControl(''),
      payg_frequency: new FormControl(''),
      financial_institution_updateon_ato: new FormControl(''),
      financial_institution_updateon_ato_ifother: new FormControl(''),
      statement_delivery_preference: new FormControl(''),
      entity_registerfor_fbt: new FormControl(''),
      entity_registerfor_fueltaxcredit: new FormControl(''),
      group_client_belongsto: new FormControl(''),
      franchise: new FormControl(''),
      website: new FormControl('', [<any>Validators.pattern(CommonRegex.WEBSITE)]),
      trading_name_unique: new FormControl(1, <any>Validators.required),
      name_unique: new FormControl(1, <any>Validators.required),
      xero_email_id: new FormControl(null, [<any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      myob_email_id: new FormControl(null, [<any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      billing_from: new FormControl( null, [<any>Validators.required, Validators.min(0)]),
      team_type: new FormControl(''),
      feedback_assignee: new FormControl(''),
      client_payroll: new FormControl(null),
    });
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
   * On Form Submit Client Basic Data
   * @param formParams
   * @param {boolean} isValid
   */
  onSubmitBasicMainform(formParams: any, isValid: boolean) {
    formParams['related_entity_id'] = (formParams['related_entity_id'] !== '') ? formParams['related_entity_id'].join() : '';
    formParams['contract_signed_date'] = (formParams['contract_signed_date'] !== '') ? moment(formParams['contract_signed_date']).format('YYYY-MM-DD') : '';
    formParams['gst_register_date'] = (formParams['gst_register_date'] !== '') ? moment(formParams['gst_register_date']).format('YYYY-MM-DD') : '';
    if (isValid) {
      this._commonCrudService.addData(AdminAPI.CLIENT_ADD, formParams).subscribe(Response => {
        this.createBasicMainForm();
        this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
      });
    }
  }

  onChangeParent(parentType: number) {
    if (parentType !== 0) {
      this.basicMainForm.get('parent_id').setValidators(null);
      this.basicMainForm.get('parent_id').setValue(0);
      this.basicMainForm.get('parent_id').updateValueAndValidity();
    } else {
      this.basicMainForm.get('parent_id').setValue(null);
      this.basicMainForm.get('parent_id').setValidators(Validators.required);
      this.basicMainForm.get('parent_id').updateValueAndValidity();
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
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
    });
  }

  // Events
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
        'entity_id': 0
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

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
