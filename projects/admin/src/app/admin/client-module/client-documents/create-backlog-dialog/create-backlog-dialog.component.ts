import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateYearFolderDialogComponent} from "../create-year-folder-dialog/create-year-folder-dialog.component";
import {AdminAPI} from "../../../../../utility/constants/api";
import {Clients} from "../../view-client/view-client.model";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {GoogleDriveFolder} from "../google-drive.model";
import {yesNo} from "../../../../../utility/constants/base-constants";

@Component({
  selector: 'app-create-backlog-dialog',
  templateUrl: './create-backlog-dialog.component.html'
})
export class CreateBacklogDialogComponent implements OnInit {

  // Form Variables
  createbacklogfolderForm: FormGroup;
  clientData: Clients = null;
  yearList = [];
  currentYear = 0;
  googleDriveFolder: GoogleDriveFolder = null;
  YesNo = yesNo;
  breadCrumFolder = [];
  constructor(
    public dialogRef: MatDialogRef<CreateYearFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    this.clientData = (this.data) ? this.data.clientData : null;
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
    this.yearList.push({'key': this.currentYear - 1, 'value': this.currentYear - 1});
    this.yearList.push({'key': this.currentYear - 2, 'value': this.currentYear - 2});
    this.yearList.push({'key': this.currentYear - 3, 'value': this.currentYear - 3});
    this.yearList.push({'key': this.currentYear - 4, 'value': this.currentYear - 4});
    this.yearList.push({'key': this.currentYear - 5, 'value': this.currentYear - 5});
    this.yearList.push({'key': this.currentYear - 6, 'value': this.currentYear - 6});
    this.yearList.push({'key': this.currentYear - 7, 'value': this.currentYear - 7});
    this.yearList.push({'key': this.currentYear - 8, 'value': this.currentYear - 8});
    this.yearList.push({'key': this.currentYear - 9, 'value': this.currentYear - 9});
    this.yearList.push({'key': this.currentYear - 10, 'value': this.currentYear - 10});
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  /**
   * Create Year Form
   */
  createYearFolderForm() {
    this.createbacklogfolderForm = this._fb.group({
      year: new FormControl(null, Validators.required),
      entity_id: new FormControl(this.clientData.id),
      subclient_id: new FormControl((this.googleDriveFolder && this.googleDriveFolder.subclient_id > 0) ? this.googleDriveFolder.subclient_id : 0, Validators.required),
      is_subclient: new FormControl((this.googleDriveFolder && this.googleDriveFolder.subclient_id > 0) ? 1 : 0, Validators.required),
    });
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_CREATE_BACKLOG_FOLDER, form.value).subscribe(Response => {
        this.onClose(true);
      });
    }
  }
}
