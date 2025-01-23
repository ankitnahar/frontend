import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {GoogleDriveFile, GoogleDriveFolder, GoogleDriveMetaDataList} from "../google-drive.model";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonRegex} from "../../../../../utility/validation";

@Component({
  selector: 'app-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html'
})
export class CreateFolderDialogComponent implements OnInit {

  // Form Variables
  createfolderForm: FormGroup;
  googleDriveFolder: GoogleDriveFolder;
  googleDriveFile: GoogleDriveFile;
  typeOfForm = 0;
  fileTypeList: GoogleDriveMetaDataList[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    this.googleDriveFolder = (this.data) ? this.data.googleDriveFolder : null;
    this.googleDriveFile = (this.data) ? (this.data.googleDriveFile) ? this.data.googleDriveFile : null : null;
    this.typeOfForm = (this.data) ? this.data.type : null;

  }

  ngOnInit() {
    this.getFileTypeList();
    if (this.typeOfForm === 0) {
      // Add & Rename Folder Name
      this.createFolderForm();
    } else {
      // Add & Rename File Name
      this.createFileForm();
    }
  }

  /**
   * Get file type list
   */
  getFileTypeList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'google_drive_meta_data',
      'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
    }, {}).subscribe(response => {
      // console.log(response);
      this.fileTypeList = response;
      this.fileTypeList = response.filter(item => item.isFileSearch === 1);
      this.fileTypeList.sort(function (a, b) {
        return a.extensionSearchSort - b.extensionSearchSort;
      });
    });
  }

  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  /**
   * Create folder form
   */
  createFolderForm() {
    this.createfolderForm = this._fb.group({
      folder_name: new FormControl(null, [Validators.required, Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      parent_folder_id: new FormControl(this.googleDriveFolder.folder_id, Validators.required),
    });
  }

  createFileForm() {
    this.createfolderForm = this._fb.group({
      file_name: new FormControl(null, [Validators.required, Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP), Validators.pattern(CommonRegex.FILE_NAME_VALIDATE)]),
      folder_id: new FormControl(this.googleDriveFolder.folder_id, Validators.required),
      file_type: new FormControl(null, Validators.required),
    });
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      if (this.typeOfForm === 0) {
        this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_ADD_FOLDER, form.value).subscribe(Response => {
          this.onClose(true);
        });
      } else {
        const fileType = form.value['file_type'];
        const fileTypeInfo = this.fileTypeList.filter(item => item.mimeType === fileType);
        form.value['file_name'] = (fileTypeInfo.length) ? form.value['file_name'] + fileTypeInfo[0].extension : form.value['file_name'];
        this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_ADD_FILE, form.value).subscribe(Response => {
          this.onClose(true);
        });
      }
    }
  }
}
