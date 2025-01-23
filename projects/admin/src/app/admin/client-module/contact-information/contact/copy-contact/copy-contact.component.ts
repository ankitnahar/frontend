import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../../utility/validation';
import {BehaviorSubject} from 'rxjs';
import {Contact, RelatedEntity} from '../contact.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-copy-contact',
  templateUrl: './copy-contact.component.html'
})
export class CopyContactComponent extends BaseComponent implements OnInit {

  // Form Group variables
  copyContactForm: FormGroup;

  // Validation constants variables
  validationMsg = new ValidationConstantMessage();

  // Angular Variables
  @Input() copyContactRecord: BehaviorSubject<any>;
  @Input() popupStatus: BehaviorSubject<boolean>;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // Data Variables
  contact: Contact = null;
  recordSubscriber: any;
  contactRelateEntityList: RelatedEntity[] = [];
  contactRelateEntityListLength = 0;
  entityID = [];

  constructor(private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.recordSubscriber = this.copyContactRecord.subscribe((value) => {
      if (value) {
        this.contact = value;
      }
    });
    this.createCopyContactForm();
    this.getContactRelatedEntity();
  }

  /**
   * Create copy form creation
   */
  createCopyContactForm() {
    this.copyContactForm = this._fb.group({
      entity_id: new FormControl('')
    });
  }

  /**
   * Get Contact Related Entity ID
   * @param contact_id
   */
  getContactRelatedEntity() {
    this._commonCrudService.getData(AdminAPI.CLIENT_CONTACT_RELATED_ENTITY, this.contact.entity_id).subscribe((response) => {
      this.handleContactRelatedEntityResponse(response);
    });
  }

  /**
   *
   * @param respone
   */
  handleContactRelatedEntityResponse(response) {
    this.contactRelateEntityList = response.payload.data;
  }

  /**
   *
   * @param {boolean} event
   * @constructor
   */
  CheckMinimumOneSelected(event: boolean, relatedEntity: RelatedEntity) {
    if (event) {
      this.contactRelateEntityListLength = this.contactRelateEntityListLength + 1;
      this.entityID.push(relatedEntity.entity_id.id);
    } else {
      this.contactRelateEntityListLength = this.contactRelateEntityListLength - 1;
      const index: number = this.entityID.indexOf(relatedEntity.entity_id.id);
      if (index !== -1) {
        this.entityID.splice(index, 1);
      }
    }
  }

  /**
   * Copy contact method
   * @param value
   * @param valid
   */
  onCopyContact(form: FormGroup) {
    if (form.valid) {
      if (this.contact) {
        form.value['entity_id'] = this.entityID.join();
        this._commonCrudService.addData(AdminAPI.CLIENT_CONTACT_COPY_RELATED_ENTITY + '/' + this.contact.id, form.value)
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
    this.contactRelateEntityListLength = 0;
    this.onCloseDialog();
  }

  /**
   * Close modal method
   */
  onCloseDialog() {
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
