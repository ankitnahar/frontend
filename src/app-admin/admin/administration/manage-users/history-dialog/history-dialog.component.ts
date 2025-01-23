import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-history-dialog',
  templateUrl: './history-dialog.component.html',
  styleUrls: ['./history-dialog.component.scss']
})
export class HistoryDialogComponent implements OnInit {

  // Angular Variables
  @Input() dialogStatus;
  @Output() close = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  // Events
  onClose() {
    this.close.emit(false);
  }

  // Esc Event
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      //this.sideBarContainer[0].style.display = "block";
      //this.bodyContainer[0].style.marginLeft = "0rem";
      this.onClose();
    }
  }
}
