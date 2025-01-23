import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../contact.model';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-archive-contact',
  templateUrl: './archive-contact.component.html',
  styleUrls: ['./archive-contact.component.scss'],
  // providers: [CommonCrudService]
})
export class ArchiveContactComponent extends BaseComponent implements OnInit {

  // Angular Variables
  @Input() archiveContactRecord: BehaviorSubject<any>;
  @Input() popupStatus: BehaviorSubject<boolean>;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Data Variables
  contact: Contact = null;
  recordSubscriber: any;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // From group variables
  archiveContactForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.recordSubscriber = this.archiveContactRecord.subscribe((value) => {
      if (value) {
        this.contact = value;
      }
    });
    this.createArchiveContactForm();
  }

  /**
   * Close modal method
   */
  onCloseDialog() {
    this.close.emit(false);
  }

  /**
   * Archive form creation
   */
  createArchiveContactForm() {
    this.archiveContactForm = this._fb.group({
      archived_reason: new FormControl('', <any>Validators.required)
    });
  }

  /**
   * Archive contact form submit
   * @param value
   * @param valid
   */
  onArchiveContact(form: FormGroup) {
    if (form.valid) {
      if (this.contact) {
        this._commonCrudService.updateData(AdminAPI.CLIENT_CONTACT_ARCHIVE, this.contact.id, form.value)
          .subscribe((response) => {
            this.handleContactResponse(response);
          });
      }
    }
  }

  /**
   * Handle Contact Response
   * @param response
   */
  handleContactResponse(response: any) {
    this.onCloseDialog();
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
