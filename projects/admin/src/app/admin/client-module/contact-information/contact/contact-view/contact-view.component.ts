import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {Contact, ContactRemark} from '../contact.model';
import {CONTACTPOSITION, yesNo} from '../../../../../../utility/constants/base-constants';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  // providers: [CommonCrudService]
})
export class ContactViewComponent implements OnInit {

  // Angular Variables
  // Data Variables
  contact: Contact = null;
  contactRemark: ContactRemark[] = [];
  bkChecklist = yesNo;
  contactPosition = CONTACTPOSITION;

  constructor(public dialogRef: MatDialogRef<ContactViewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.contact = this.data.contact;
    if (this.contact) {
      this.getRemarks();
    }
  }

  /**
   * Get Contact Remark
   * @param contact_id
   */
  getRemarks() {
    this._commonCrudService.getData(AdminAPI.CLIENT_CONTACT_REMARK, this.contact.id, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc'
    }, {}).subscribe((response) => {
      this.handleContactRemarkResponse(response);
    });
  }

  /**
   * Handle Contact Remark Response
   * @param response
   */
  handleContactRemarkResponse(response) {
    this.contactRemark = response.payload.data;
  }

  /**
   * Close modal method
   */
  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Display BK Checklist State
   * @param {number} is_display_bk_checklist
   * @returns {string}
   */
  getIsBkChecklist(is_display_bk_checklist: number): string {
    return this.bkChecklist.filter(elem => elem.key === is_display_bk_checklist)[0].label;
  }

  /**
   * Display Contact Position
   * @param {number} position_id
   * @returns {string}
   */
  getContactPosition(position_id: number): string {
    return this.contactPosition.filter(elem => elem.key === position_id)[0].label;
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }

  /**
   * Convert json string to array
   * @param field
   * @returns {string[]}
   */
  convertJsonStringToArray(item) {
    if (item.length > 0) {
      return item.split(', ');
    }
  }
}
