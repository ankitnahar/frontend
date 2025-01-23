import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ValidationConstantMessage} from "../../../../../../utility/validation";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import * as moment from "moment";

@Component({
  selector: 'app-fetch-in-out-dialog',
  templateUrl: './fetch-in-out-dialog.component.html'
})
export class FetchInOutDialogComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addMissingInOutForm: FormGroup;
  todayDate = new Date().getDate();

  constructor(
    public dialogRef: MatDialogRef<FetchInOutDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {

    super();
  }

  ngOnInit() {
    this.createAddMissingInOutForm();
  }

  /**
   * Create filter Master checklist
   */
  createAddMissingInOutForm() {
    this.addMissingInOutForm = this._fb.group({
      // location: new FormControl( null, <any>Validators.required),
      currentDate: new FormControl(null, <any>Validators.required),
      is_remark: new FormControl(null),
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(formArray) {
    formArray['currentDate'] = moment(formArray['currentDate']).format('YYYY-MM-DD');
    if (formArray['is_remark']) {
      this._commonCrudService.addData(AdminAPI.HRUPDATEREMARK, {'remarkDate': formArray['currentDate']}).subscribe((response) => {
        this.onClose();
      });
    } else {
      this._commonCrudService.addData(AdminAPI.HRFETCHINOUT, formArray).subscribe((response) => {
        this.onClose();
      });
    }
  }

}
