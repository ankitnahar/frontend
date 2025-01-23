import {Component, Inject, OnInit} from '@angular/core';
import {ValidationConstantMessage} from "../../../../../../../utility/validation";
import {AppConstant, BASE, ToastType} from "../../../../../../../utility/constants/base-constants";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CommonCrudService} from "../../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../../utility/shared-service/shared.service";
import {AdminAPI} from "../../../../../../../utility/constants/api";

@Component({
  selector: 'app-upload-adjustment-dialog',
  templateUrl: './upload-adjustment-dialog.component.html'
})
export class UploadAdjustmentDialogComponent implements OnInit {

  files: any[] = [];
  uploadDoc = new FormData();
  validationMsg = new ValidationConstantMessage();
  url = BASE.IMAGE_PATH;


  constructor(public dialogRef: MatDialogRef<UploadAdjustmentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private _commonCrudService: CommonCrudService, private _sharedService: SharedService
  ) {
  }

  ngOnInit() {
  }


  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event.target.files, $event);  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event) {
    this.prepareFilesList($event.target.files, $event);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>, $event) {
    let i = 0;
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this.uploadFile(item, i);
      i++;
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /**
   * On Upload File
   * @param files
   * @param index
   */
  uploadFile(files: any, index: number) {
    if (files) {
      // console.log(files);
      const filesList = files;
      Object.keys(files).forEach(itemUploadFile => {
        const name = files.name;
        const lastDot = name.lastIndexOf('.');
        const ext = name.substring(lastDot + 1);
        console.log(ext);
        if (ext.toLowerCase() === "csv") {
          if (files.size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED) {
            this.deleteFile(index);
            this._sharedService.setToastMessage(this.validationMsg.VALID_TEINTY_FIVE_MB_IMAGE_SIZE, ToastType.ERROR);
          } else {
            this.uploadDoc.delete('upload');
            this.uploadDoc.append('upload', files);

            if (this.uploadDoc) {
              this._commonCrudService.uploadDocument(AdminAPI.ATTENDANCE_SUMMARY_BALANCE_UPDATE, this.uploadDoc).subscribe(response => {
                this.onClose(true);
              });
            }
          }
        } else {
          this.deleteFile(index);
          this._sharedService.setToastMessage(files.name + ' - ' + this.validationMsg.VALID_DOCUMENT_TYPE, ToastType.ERROR);
        }
      });
    }
  }
  /**
   * On Close dialog
   * @param value
   */
  onClose(value: boolean) {
    this.dialogRef.close(value);
  }
}
