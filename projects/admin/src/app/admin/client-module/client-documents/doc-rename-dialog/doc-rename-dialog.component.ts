import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {GoogleDriveFile, GoogleDriveFolder, GoogleDriveMetaDataList} from "../google-drive.model";
import {CommonRegex, ValidationConstantMessage} from "../../../../../utility/validation";
import {BaseComponent} from "../../../../../utility/components/base/base.component";

@Component({
  selector: 'app-doc-rename-dialog',
  templateUrl: './doc-rename-dialog.component.html'
})
export class DocRenameDialogComponent extends BaseComponent implements OnInit {
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  createrenameForm: FormGroup;
  googleDriveFolder: GoogleDriveFolder;
  googleDriveFile: GoogleDriveFile;
  typeOfForm = 0;
  fileTypeList: GoogleDriveMetaDataList[] = [];

  constructor(
    public dialogRef: MatDialogRef<DocRenameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
    this.googleDriveFolder = (this.data) ? this.data.googleDriveFolder : null;
    this.googleDriveFile = (this.data) ? (this.data.googleDriveFile) ? this.data.googleDriveFile : null : null;
    this.typeOfForm = (this.data) ? this.data.type : null;
  }

  ngOnInit() {
    this.getFileTypeList();
    if (this.typeOfForm === 0) {
      // Add & Rename Folder Name
      this.createRenameForm();
    } else {
      // Add & Rename File Name
      this.createRenameFile();
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
   * Create rename folder form
   */
  createRenameForm() {
    this.createrenameForm = this._fb.group({
      folder_id: new FormControl(this.googleDriveFolder.folder_id, Validators.required),
      folder_name: new FormControl(this.googleDriveFolder.directory_name, [Validators.required, Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
    });
  }

  /**
   * Create rename file form
   */
  createRenameFile() {
    const fileName = this.googleDriveFile.file_name.slice(0, this.googleDriveFile.file_name.lastIndexOf("."));
    this.createrenameForm = this._fb.group({
      file_id: new FormControl(this.googleDriveFile.file_id, Validators.required),
      file_name: new FormControl(fileName, [Validators.required, Validators.maxLength(75), Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP), Validators.pattern(CommonRegex.FILE_NAME_VALIDATE)]),
      folder_id: new FormControl(this.googleDriveFolder.folder_id, Validators.required),
      file_type: new FormControl(this.googleDriveFile.mime_type, Validators.required)
    });
  }

  /**
   * On Submit Form
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      if (this.typeOfForm === 0) {
        this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_RENAME_FOLDER, form.value).subscribe(Response => {
          this.onClose(true);
        });
      } else {
        const fileType = this.createrenameForm.get('file_type').value;
        const fileTypeInfo = this.fileTypeList.filter(item => item.mimeType === fileType);
        form.value['file_name'] = (fileTypeInfo.length) ? form.value['file_name'] + fileTypeInfo[0].extension : form.value['file_name'];
        this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_RENAME_FILE, form.value).subscribe(Response => {
          this.onClose(true);
        });
      }
    }
  }
}
