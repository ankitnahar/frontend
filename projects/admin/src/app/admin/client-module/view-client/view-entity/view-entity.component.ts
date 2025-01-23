import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {basAccrualorcash, basFrequency, bkDoneby, entityType, franchise, paygFrequency, statementDeliveryPreference, yesNo, yesNoNa, yesNoOther} from '../../../../../utility/constants/base-constants';
import * as moment from 'moment';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-view-entity',
  templateUrl: './view-entity.component.html',
  styleUrls: ['./view-entity.component.scss'],
})
export class ViewEntityComponent extends BaseComponent implements OnInit {

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

  // Form Group Variables
  basicMainForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.initializeMethod();
  }

  /**
   * Initialization Methods
   */
  initializeMethod() {
    this.getClientList();
    this._commonCrudService.listData(AdminAPI.CLIENT_BELONGSTO, {'records': 'all'}).subscribe(Response => {
      this.handleClientBelongsToList(Response);
    });
    this.createBasicMainForm();
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.ClientListResponse = response;
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
   * Create Client Basic Form
   * @param
   */
  createBasicMainForm() {
    this.basicMainForm = this._fb.group({
      billing_name: new FormControl('', <any>Validators.required),
      name: new FormControl('', <any>Validators.required), // Legal Name
      trading_name: new FormControl('', <any>Validators.required),
      contract_signed_date: new FormControl('', <any>Validators.required),
      entity_writeoff: new FormControl('', <any>Validators.required),
      reviewer_budgeted_unit: new FormControl('', <any>Validators.required),
      related_entity: new FormControl(''),
      related_entity_id: new FormControl([]),
      abn_number: new FormControl(''),
      abn_branch_code: new FormControl(''),
      abn_register_date: new FormControl(''),
      tfn_number: new FormControl(''),
      business_type: new FormControl(''),
      entity_type: new FormControl(''),
      bk_doneby: new FormControl(''),
      gst_register: new FormControl(''),
      gst_register_date: new FormControl(''),
      bas_frequency: new FormControl(''),
      bas_accrualorcash: new FormControl(''),
      payg_frequency: new FormControl(''),
      financial_institution_updateon_ato: new FormControl(''),
      statement_delivery_preference: new FormControl(''),
      entity_registerfor_fbt: new FormControl(''),
      entity_registerfor_fueltaxcredit: new FormControl(''),
      group_client_belongsto: new FormControl(''),
      franchise: new FormControl(''),
      website: new FormControl(''),
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

  // Events
  onClient() {
    this._router.navigate(['/' + AdminRoutes.VIEW_CLIENT]);
  }

}
