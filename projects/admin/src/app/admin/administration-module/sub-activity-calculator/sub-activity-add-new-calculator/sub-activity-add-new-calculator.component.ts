import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {AdminAPI} from '../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-sub-activity-add-new-calculator',
  templateUrl: './sub-activity-add-new-calculator.component.html'
})
export class SubActivityAddNewCalculatorComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addcalculatorForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SubActivityAddNewCalculatorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.createAddcalculatorForm();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createAddcalculatorForm() {
    this.addcalculatorForm = this._fb.group({
      name: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP)])
    });
  }

  /**
   * On Submit Add Calc
   * @param form
   */
  onSubmitAddCalc(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.BILLING_PAYROLL_CALC_ADD, form.value).subscribe((response) => {
        this.dialogRef.close();
      });
    }
  }

}

