import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonRegex} from "../../../../../utility/validation";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {Clients} from "../../view-client/view-client.model";
import {GoogleDriveFolder} from "../google-drive.model";
import {yesNo} from "../../../../../utility/constants/base-constants";

@Component({
  selector: 'app-create-year-folder-dialog',
  templateUrl: './create-year-folder-dialog.component.html'
})
export class CreateYearFolderDialogComponent implements OnInit {

  // Form Variables
  createyearfolderForm: FormGroup;
  clientData: Clients = null;
  googleDriveFolder: GoogleDriveFolder = null;
  breadCrumFolder = [];
  yearList = [];
  currentYear = 0;
  YesNo = yesNo;
  clientService = [];

  constructor(
    public dialogRef: MatDialogRef<CreateYearFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    this.clientData = (this.data) ? this.data.clientData : null;
    this.clientService = (this.data) ? this.data.tabs : null;
    this.googleDriveFolder = (this.data) ? this.data.googleDriveFolder : null;
    this.breadCrumFolder = (this.data) ? this.data.breadCrumFolder : null;
  }

  ngOnInit() {
    this.yearData();
    this.createYearFolderForm();
  }

  yearData() {
    this.currentYear = new Date().getFullYear();
    this.yearList.push({'key': this.currentYear, 'value': this.currentYear});
    this.yearList.push({'key': this.currentYear + 1, 'value': this.currentYear + 1});
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  /**
   * Create Year Form
   */
  createYearFolderForm() {
    this.createyearfolderForm = this._fb.group({
      entity_id: new FormControl((this.clientData) ? this.clientData.id : 0, [Validators.required, Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      service_id: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      is_subclient: new FormControl((this.googleDriveFolder && this.googleDriveFolder.subclient_id > 0) ? 1 : 0, Validators.required),
    });
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      if (form.value['is_subclient'] === 1) {
        form.value['subclient_folder_id'] = (this.breadCrumFolder) ? this.breadCrumFolder[1].folder.folder_id : null;
      }
      this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_CLIENT_ADD_FOLDER, form.value).subscribe(Response => {
        this.onClose(true);
      });
    }
  }
}
