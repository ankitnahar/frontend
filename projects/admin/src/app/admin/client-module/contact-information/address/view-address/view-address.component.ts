import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Address} from '../address.model';
import {ADDRESSSTATE, ADDRESSTYPE} from '../../../../../../utility/constants/base-constants';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html'
})
export class ViewAddressComponent implements OnInit {

  // Angular Variables
  @Input() addressRecord: BehaviorSubject<any>;
  @Input() popupStatus: BehaviorSubject<boolean>;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Data Variables
  address: Address = null;
  recordSubscriber: any;
  addressState = ADDRESSSTATE;
  addressType = ADDRESSTYPE;

  constructor() {
  }

  ngOnInit() {
    this.recordSubscriber = this.addressRecord.subscribe((value) => {
      if (value) {
        this.address = value;
      }
    });
  }

  /**
   * Display Address State
   * @param {number} state_id
   * @returns {string}
   */
  getAddressState(state_id: number): string {
    return this.addressState.filter(elem => elem.key === state_id)[0].label;
  }

  /**
   * Display Address Type
   * @param {number} type
   * @returns {string}
   */
  getAddressType(type: number): string {
    return this.addressType.filter(elem => elem.key === type)[0].label;
  }

  /**
   * On view address close dialog
   */
  onCloseDialog() {
    this.address = null;
    this.close.emit(false);
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onCloseDialog();
    }
  }
}
