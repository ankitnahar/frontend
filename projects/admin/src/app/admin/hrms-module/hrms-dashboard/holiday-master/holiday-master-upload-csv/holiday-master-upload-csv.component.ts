import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ToastErrorMessages, ValidationConstantMessage} from "../../../../../../utility/validation";
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {AppConstant, BASE, ToastType} from "../../../../../../utility/constants/base-constants";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";

@Component({
  selector: 'app-holiday-master-upload-csv',
  templateUrl: './holiday-master-upload-csv.component.html'
})
export class HolidayMasterUploadCsvComponent extends BaseComponent implements OnInit {

  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  url = BASE.IMAGE_PATH;
  // Form Variables
  addHolidayMasterCSVForm: FormGroup;
  docArray = [];
  documentName: string;

  constructor(
    public dialogRef: MatDialogRef<HolidayMasterUploadCsvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
    private _commonCrudService: CommonCrudService, private _sharedService: SharedService
  ) {
    super();
  }

  ngOnInit() {
    this.createHolidayMasterCSVForm();
  }

  /**
   * Create Holiday Master Form
   */
  createHolidayMasterCSVForm() {
    this.addHolidayMasterCSVForm = this._fb.group({
      upload: new FormControl(null, <any>Validators.required)
    });
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  /**
   * uploading new document
   * @param formValue
   * @param isValid
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.HOLIDAY_MASTER_UPLOAD, form.value, this.docArray).subscribe(Response => {
        this.dialogRef.close(true);
      });
    }
  }

  /**
   * On clear document name
   */
  onClear() {
    this.documentName = '';
  }

  /**
   * Upload document browse file method
   */
  onChooseDocument() {
    document.getElementById('uploadDocument').click();
  }

  /**
   * select event of document
   * @param event
   */
  onUploadDocument(event) {
    if (event.target.files) {
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
    }
  }
}
