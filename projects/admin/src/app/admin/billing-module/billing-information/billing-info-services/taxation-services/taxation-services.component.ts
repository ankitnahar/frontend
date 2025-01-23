import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TaxationBasicDialogComponent} from './taxation-basic-dialog/taxation-basic-dialog.component';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../utility/validation';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {BillingBasic} from '../../../../../../utility/shared-model/billing.model';
import {TaxationService, TaxationTurnover} from './taxation.model';
import {DecimalPipe} from '@angular/common';
import {NoCommaPipe} from '../../../../../../utility/pipe/noComma.pipe';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {BASE} from '../../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-taxation-services',
  templateUrl: './taxation-services.component.html',
  styleUrls: ['./taxation-services.component.scss'],
  providers: [DecimalPipe, NoCommaPipe]

})
export class TaxationServicesComponent extends BaseComponent implements OnInit {

  @Input() billingInformation: BillingBasic;
  @Input() serviceInfo: any;
  @Input() isEdit: any;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  taxationbasicForm: FormGroup;
  // Data Variables
  taxationTurnoverData: TaxationTurnover[] = [];
  taxationData: TaxationService;

  constructor(public _router: Router, private _fb: FormBuilder, public dialog: MatDialog, private _decimalPipe: DecimalPipe, private _noCommaPipe: NoCommaPipe, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.createTaxationBasicForm();
    this.initializationMethod();
    const value = {
      url: AdminAPI.BILLING_SERVICES_HISTORY + '/' + this.billingInformation.entity_id,
      params: {'service_id': this.serviceInfo['service_id']},
    };
    this._sharedService.setHistoryURL(value);
  }


  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getBasicTaxCharges();
    this.getServiceBasicInfo();
  }

  /**
   * Get Service Basic Information
   */
  getServiceBasicInfo() {
    this._commonCrudService.getData(AdminAPI.BILLING_TAXATION, this.billingInformation.entity_id, {}).subscribe((response) => {
      this.taxationData = response.payload.data;
      this.createTaxationBasicForm();
    });
  }

  /**
   * Get Tax Charges
   */
  getBasicTaxCharges() {
    this._commonCrudService.listData(AdminAPI.BILLING_TAXATION_TURNOVER + '/' + this.billingInformation.entity_id, {}, {'compare': {'notequal': {'is_deleted': 1}}}).subscribe((response) => {
      this.taxationTurnoverData = response.payload.data;
    });
  }

  /**
   * Create Basic Form
   */
  createTaxationBasicForm() {
    this.taxationbasicForm = this._fb.group({
      ff_rph: new FormControl((this.taxationData) ? this.taxationData.ff_rph : BASE.TAX_DEFAULT_RPH, [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      notes: new FormControl((this.taxationData) ? this.taxationData.notes : '')
    });
  }

  /**
   * Delete open confirmation modal
   * @param taxTurnOver
   */
  onTaxationBasicConfirmationDialog(taxTurnOver: TaxationTurnover) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this charges?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._commonCrudService.deleteData(AdminAPI.BILLING_TAXATION_TURNOVER, taxTurnOver.id).subscribe(Response => {
          this.getBasicTaxCharges();
        });
      }
    });
  }

  /**
   * Popup Open On Add Taxation Charges Add
   */
  onAddTaxationBasicCharge() {
    let dialogRef = this.dialog.open(TaxationBasicDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        billingInformationData: this.billingInformation
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBasicTaxCharges();
    });
  }

  /**
   * On Submit Taxation Info
   * @param form
   */
  onSubmitTaxationInfo(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.updateData(AdminAPI.BILLING_TAXATION, this.billingInformation.entity_id, form.value).subscribe((response) => {
      });
    }
  }
}
