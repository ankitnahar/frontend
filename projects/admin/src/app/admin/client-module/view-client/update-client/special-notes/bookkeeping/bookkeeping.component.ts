import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Child, SpecialNotesData, SpecialNotesTabs} from '../special-notes.model';
import {Clients} from '../../../view-client.model';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AddBookkeepingDialogComponent} from './add-bookkeeping-dialog/add-bookkeeping-dialog.component';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {ADMINTABACCESS} from '../../../../../../../utility/constants/header-constant';
import {Privilege} from '../../../../../../../utility/shared-model/admin-user.model';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-bookkeeping',
  templateUrl: './bookkeeping.component.html',
  styleUrls: ['./bookkeeping.component.scss'],
})

export class BookkeepingComponent implements OnInit {

  // Angular variables
  @Input() tabInformation: SpecialNotesTabs;
  @Input() clientInfo: Clients;

  // Data related variables
  tabChildData: Child[] = [];
  specialNotesList: SpecialNotesData[] = [];
  selectedType = '1';
  selectedChildOption: any;
  serviceId: any;
  tabID = ADMINTABACCESS.CLIENT_SPECIALNOTES;
  tabData: Privilege | any[];

  constructor(public dialog: MatDialog, private _sharedService: SharedService,
              private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
    this.tabChildData = this.tabInformation['child'] || [];
    this.selectedChildOption = (this.tabInformation.service_id).toString();
    this.serviceId = this.tabInformation.service_id;
    this.getBookkeepingList(this.serviceId);
  }

  // Initialization methods
  /**
   * get List based on selected tab on special note page
   * @param {number} serviceId
   */
  getBookkeepingList(serviceId: number) {
    this._commonCrudService.listData(AdminAPI.CLIENT_SPECIAL_NOTES + '/' + this.clientInfo.id, {records: 'all'},
      this.getSearchParam(serviceId)).subscribe((response) => {
      this.handleSpecialNoteTabResponse(response);
    });
  }

  handleSpecialNoteTabResponse(response) {
    this.specialNotesList = response['payload']['data'];
  }

  // Page events
  /**
   * When changing "Archived" and "Unarchived" special notes type
   */
  onChangeNoteType() {
    this.getBookkeepingList(this.serviceId);
  }

  /**
   * Event when changing child service from drop-down
   */
  onChangeServices() {
    this.serviceId = +(this.selectedChildOption);
    this.getBookkeepingList(this.serviceId);
  }

  /**
   * Open confirmation dialog when deleting special note
   * @param {SpecialNotesData} note
   */
  openConfirmationDialog(note?: SpecialNotesData) {
    const dialogConfigData: any = {
      panelClass: 'add-bookkeeping-dialog-panel-container',
      data: {
        header: 'Special note - Confirmation Dialog',
        content: 'Are you sure you want to delete this note?'
      }
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.onDeleteNote(note);
      }
    });
  }

  /**
   * Delete note method
   * @param note
   */
  onDeleteNote(note: SpecialNotesData) {
    this._commonCrudService.deleteData(AdminAPI.CLIENT_SPECIAL_NOTES, note.id).subscribe(() => {
      this.getBookkeepingList(this.serviceId);
    });
  }

  // Helpers
  /**
   * Get search params for get API
   * @param {number} serviceId
   * @returns {{}}
   */
  getSearchParam(serviceId: number) {
    const params = {};
    const filter = {};
    const filterData = {
      service_id: serviceId.toString(),
      is_active: this.selectedType.toString()
    };
    filter['equal'] = filterData;
    params['compare'] = filter;
    return params;
  }

  /**
   * Open dialog method - on adding or updating special note
   * @param note
   */
  openDialog(note?: SpecialNotesData) {
    const dialogConfigData: any = {
      panelClass: 'add-bookkeeping-dialog-panel-container',
      data: {
        clientInformation: this.clientInfo,
        serviceId: this.serviceId
      }
    };
    if (note) {
      dialogConfigData['data']['specialNote'] = note;
    }
    const dialogRef = this.dialog.open(AddBookkeepingDialogComponent, dialogConfigData);
    dialogRef.afterClosed().subscribe(() => {
      this.getBookkeepingList(this.serviceId);
    });
  }
}
