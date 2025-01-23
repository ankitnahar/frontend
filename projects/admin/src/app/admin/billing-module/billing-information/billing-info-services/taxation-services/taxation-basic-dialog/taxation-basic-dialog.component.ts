import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {taxCondition} from '../../../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-taxation-basic-dialog',
  templateUrl: './taxation-basic-dialog.component.html'
})
export class TaxationBasicDialogComponent extends BaseComponent implements OnInit {


  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addtaxationbasicchargeForm: FormGroup;
  yearList = [];
  taxConditionList = taxCondition;
  entity_id = 0;

  constructor(
    public dialogRef: MatDialogRef<TaxationBasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.entity_id = (this.data.billingInformationData) ? this.data.billingInformationData.entity_id : 0;
    this.getYearList();
    this.createAddTaxationbasicChargeForm();
  }

  /**
   * Get Year List
   */
  getYearList() {
    this._commonCrudService.listData(AdminAPI.CLIENT_TURNOVER_YEAR_DATA, {}, {})
      .subscribe((response) => {
        this.yearList = response['payload']['data'];
      });
  }

  /**
   * Create Add Taxation Charges Form
   */
  createAddTaxationbasicChargeForm() {
    this.addtaxationbasicchargeForm = this._fb.group({
      year: new FormControl('', <any>Validators.required),
      amount: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      option: new FormControl('', <any>Validators.required),
      turnover: new FormControl('', [<any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP_WITHOUT_ZERO)]),
      notes: new FormControl('')
    });
  }

  /**
   * Add Taxation Basic Charge Form
   * @param form
   */
  onSubmitAddTaxationbasicChargeForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.BILLING_TAXATION_TURNOVER + '/' + this.entity_id, form.value).subscribe((response) => {
        this.onClose();
      });
    }
  }

  /**
   * Close Dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }

}
