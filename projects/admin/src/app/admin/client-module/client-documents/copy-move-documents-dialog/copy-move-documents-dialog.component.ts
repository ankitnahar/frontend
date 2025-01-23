import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Clients} from "../../view-client/view-client.model";

@Component({
  selector: 'app-copy-move-documents-dialog',
  templateUrl: './copy-move-documents-dialog.component.html'
})
export class CopyMoveDocumentsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CopyMoveDocumentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  folderData = [];
  clientData: Clients = null;
  selectedFolder = [];
  itemPasteType = 0;

  ngOnInit() {
    this.folderData = (this.data) ? this.data.folderList : [];
    this.clientData = (this.data) ? this.data.clientData : [];
    this.itemPasteType = (this.data) ? this.data.itemPasteType : 0;
  }

  onClose(value: boolean): void {
    this.selectedFolder['result'] = value;
    this.dialogRef.close(this.selectedFolder);
  }

  /**
   * On Select Folder
   * @param id
   * @constructor
   */
  OnSelectFolder(id: string) {
    this.selectedFolder['id'] = id;
  }

}
