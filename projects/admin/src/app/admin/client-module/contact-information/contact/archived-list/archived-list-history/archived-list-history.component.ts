import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-archived-list-history',
  templateUrl: './archived-list-history.component.html',
  styleUrls: ['./archived-list-history.component.scss']
})
export class ArchivedListHistoryComponent implements OnInit {

  // Angular Variables
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Date variables
  // minStartDate = new Date();
  // maxStartDate;
  // minEndDate = new Date();
  // maxEndDate;
  startDateValue = null;
  endDateValue = null;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Close modal method
   */
  onClose() {
    this.close.emit(false);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      //this.sideBarContainer[0].style.display = "block";
      //this.bodyContainer[0].style.marginLeft = "0rem";
      this.onClose();
    }
  }

}
