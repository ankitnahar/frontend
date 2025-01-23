import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, PageEvent} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonRegex, ValidationConstantMessage} from "../../../../../utility/validation";
import {BaseComponent} from "../../../../../utility/components/base/base.component";
import {AudioVideo, GoogleDriveFileType} from "../audio-video.model";
import {AdminAPI} from "../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../utility/shared-service/common-crud.service";
import {BASE} from "../../../../../utility/constants/base-constants";
import {ConfirmationDialogComponent} from "../../../../../utility/components/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-add-audio-link-dialog',
  templateUrl: './add-audio-link-dialog.component.html'
})
export class AddAudioLinkDialogComponent extends BaseComponent implements OnInit {

  // Form Variables
  createAddAudioLinkForm: FormGroup;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  audioVideo: AudioVideo;
  audioTypeList = GoogleDriveFileType;
  entity_id: number;

  // Data Variables
  audioLinkList: AudioVideo[] = [];
  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  constructor(
    public dialogRef: MatDialogRef<AddAudioLinkDialogComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.audioVideo = (this.data) ? this.data.audioVideo : [];
    this.entity_id = (this.data) ? this.data.entity_id : 0;
    this.getAudioVideoList(1);
    this.createAudioLinkForm();
  }

  /**
   * Get Audio Video List
   * @param pageNumber
   * @param key
   * @param val
   */
  getAudioVideoList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_AUDIO_LIST + '/' + this.entity_id, this.getQueryParams(pageNumber, key, val), {}).subscribe((response) => {
      this.audioLinkList = response.payload.data;
      this.page = response.pager.pageNumber;
      this.pageIndex = this.page - 1;
      this.totalRecords = +response.pager.totalRecords;
      this.sortBy = response.pager.sortBy;
      this.sortOrder = response.pager.sortOrder;
    });
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  /**
   * Pagination page change method
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getAudioVideoList(event.pageIndex + 1);
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getAudioVideoList(1, sortKey, sortVal);
  }

  /**
   * On Close
   * @param value
   */
  onClose(value: boolean): void {
    this.dialogRef.close(value);
  }

  /**
   * Create add Audio Link
   */
  createAudioLinkForm() {
    this.createAddAudioLinkForm = this._fb.group({
      document_type: new FormControl((this.audioVideo) ? Number(this.audioVideo.document_type) : null, Validators.required),
      document_name: new FormControl((this.audioVideo) ? this.audioVideo.document_name : null, Validators.required),
      document_link: new FormControl((this.audioVideo) ? this.audioVideo.document_link : null, [Validators.required, <any>Validators.pattern(CommonRegex.WEBSITE)])
    });
  }

  /**
   * On Submit
   * @param form
   */
  onSubmit(form: FormGroup) {
    if (form.valid) {
      if (this.audioVideo) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.GOOGLE_DRIVE_AUDIO_UPDATE, this.audioVideo.id, form.value)
          .subscribe((response) => {
            this.getAudioVideoList(1);
            this.clearForm();
          });
      } else {
        this._commonCrudService.addData(AdminAPI.GOOGLE_DRIVE_AUDIO_ADD + '/' + this.entity_id, form.value)
          .subscribe((response) => {
            this.getAudioVideoList(1);
            this.clearForm();
          });
      }
    }
  }

  /**
   * On Update
   * @param audioVideo
   */
  onUpdate(audioVideo: AudioVideo) {
    this.audioVideo = audioVideo;
    this.createAudioLinkForm();
  }

  /**
   * event for delete audio video
   * @param audioVideo
   */
  onDelete(audioVideo: AudioVideo) {
    let dialogRef;
    dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete audio/video link?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._commonCrudService.deleteData(AdminAPI.GOOGLE_DRIVE_AUDIO_DELETE, audioVideo.id).subscribe(response => {
          this.getAudioVideoList(1);
        });
      }
    });
  }

  /**
   * On Clear
   */
  clearForm() {
    this.audioVideo = null;
    this.createAudioLinkForm();
  }

  /**
   * Get file type name
   * @param type
   */
  getFileTypeName(type: any) {
    const val = this.audioTypeList.filter(elem => elem.key === Number(type));
    return (val.length) ? val[0].label : '';
  }
}
