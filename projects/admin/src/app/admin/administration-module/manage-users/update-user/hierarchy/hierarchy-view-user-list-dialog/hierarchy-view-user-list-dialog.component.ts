import {Component, Inject, OnInit} from '@angular/core';
import {BASE} from '../../../../../../../utility/constants/base-constants';
import {MAT_DIALOG_DATA, MatDialogRef, PageEvent} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-hierarchy-view-user-list-dialog',
  templateUrl: './hierarchy-view-user-list-dialog.component.html'
})
export class HierarchyViewUserListDialogComponent implements OnInit {

  // Data Variables
  viewUserList = [];
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
    public dialogRef: MatDialogRef<HierarchyViewUserListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, public _router: Router) {
  }

  ngOnInit() {
    this.viewUserList = (this.data.userList) ? this.data.userList : [];
    this.initializationMethod();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
  }
}
