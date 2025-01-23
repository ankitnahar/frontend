import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Clients} from '../../../view-client/view-client.model';
import {Contact, ContactRemark} from '../contact.model';
import {CONTACTPOSITION, GLOBALDATAKEYS, yesNo} from '../../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminUser} from '../../../../../../utility/shared-model/admin-user.model';
import {BehaviorSubject} from 'rxjs';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {Services} from '../../../../../../utility/shared-model/services.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  // providers: [CommonCrudService]
})
export class AddContactComponent extends BaseComponent implements OnInit, OnDestroy {

  @ViewChild('addEditContactForm') addEditContactForm;
  @ViewChild('addEditContactRemarksForm') addEditContactRemarksForm;
  // Constant Variables
  contact: Contact = null;
  teamList: Services[] = [];
  contactRemarkList: ContactRemark[] = [];

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  addContactForm: FormGroup;
  addContactRemarkForm: FormGroup;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  bkChecklist = yesNo;
  contactPosition = CONTACTPOSITION;

  userList: AdminUser[] = [];
  clientList: Clients[] = [];
  parentClientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  selectedAmNotesRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditAmNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isAddNewOptions = false;

  constructor(private _router: Router,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService,
  ) {
    super();
  }

  ngOnInit() {
    this.contact = this._sharedService.getClientData(GLOBALDATAKEYS.CONTACT);
    this.createContactForm();
    this.createContactRemarkForm();
    if (this.contact) {
      this.getRemarks();
    }
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = this.filteredTradingClientList = response;
      this.parentClientList = response.filter(item => item.is_parent === 1);
    });
  }


  /**
   * Default search params for client listing API
   * @returns {{compare: {notequal: {discontinue_stage: number}}}}
   */
  getClientSearchParam() {
    return {
      compare: {
        notequal: {
          discontinue_stage: 2
        }
      }
    };
  }

  /**
   * Get Team List
   */
  getTeamList() {
    this._sharedObjService.getServices({
      'records': 'all',
      // 'sortBy': 'service_name',
      // 'sortOrder': 'asc'
    }, {'compare': {'equal': {'parent_id': 0}}}).subscribe((response) => {
      this.teamList = response;
      // console.log(this.contact);
      if (this.contact) {
        const serviceID = this.getArrayToString(this.contact.service_id, ',');
        this.addContactForm.get('service_id').setValue(serviceID);
      }
    });
  }

  /**
   * Create contact form method
   */
  createContactForm() {
    this.addContactForm = this._fb.group({
      parent_id: new FormControl(((this.contact && this.contact.parent_id && this.contact.parent_id) ? (this.contact.parent_id) : null)),
      entity_id: new FormControl(((this.contact && this.contact.entity_id && this.contact.entity_id) ? (this.contact.entity_id) : null), <any>Validators.required),
      service_id: new FormControl(((this.contact && this.contact.service_id) ? this.contact.service_id.split(',') : []), <any>Validators.required),
      contact_position_id: new FormControl(((this.contact && this.contact.contact_position_id) ? this.contact.contact_position_id : ''), <any>Validators.required),
      first_name: new FormControl(((this.contact && this.contact.first_name) ? this.contact.first_name : ''), [<any>Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      director_number: new FormControl(((this.contact && this.contact.director_number) ? this.contact.director_number : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(11)]),
      contact_person: new FormControl(((this.contact && this.contact.contact_person) ? this.contact.contact_person.toString() : ''), [<any>Validators.required, <any>Validators.pattern(CommonRegex.ALPHABETICS_REGEXP_WITH_SPACE)]),
      is_display_bk_checklist: new FormControl(((this.contact && this.contact.is_display_bk_checklist >= 0) ? +this.contact.is_display_bk_checklist : ''), <any>Validators.required),
      send_newsletter: new FormControl(((this.contact && this.contact.send_newsletter >= 0) ? +this.contact.send_newsletter : ''), <any>Validators.required),
      to: new FormControl(((this.contact && this.contact.to) ? this.contact.to : ''), [<any>Validators.required, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      cc: new FormControl(((this.contact && this.contact.cc) ? this.contact.cc : ''), [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      bcc: new FormControl(((this.contact && this.contact.bcc) ? this.contact.bcc : ''), [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      other_email: new FormControl(((this.contact && this.contact.other_email) ? this.contact.other_email : ''), [<any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]),
      mobile_no: new FormControl(((this.contact && this.contact.mobile_no) ? this.contact.mobile_no : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(11)]),
      office_no: new FormControl(((this.contact && this.contact.office_no) ? this.contact.office_no : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(13)]),
      fax_no: new FormControl(((this.contact && this.contact.fax_no) ? this.contact.fax_no : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(13)]),
      is_feedback_contact: new FormControl(((this.contact && this.contact.is_feedback_contact >= 0) ? this.contact.is_feedback_contact : ''), <any>Validators.required),
      feedback_email: new FormControl(((this.contact && this.contact.feedback_email) ? this.contact.feedback_email : '')),
      from_email: new FormControl(((this.contact && this.contact.from_email) ? this.contact.from_email : '')),
      from_name: new FormControl(((this.contact && this.contact.from_name) ? this.contact.from_name : '')),
      // is_login: new FormControl(((this.contact && this.contact.is_login >= 0) ? +this.contact.is_login : null), <any>Validators.required),
    });
    if (this.contact && this.contact.is_feedback_contact >= 0) {
      this.updateFeedbackEmailValidation(Number(this.contact.is_feedback_contact));
    }
    if (this.contact && this.contact.is_display_bk_checklist >= 0) {
      this.updateFromEmailValidation(Number(this.contact.is_display_bk_checklist));
    }

    this.getClientList();
    this.getTeamList();
  }

  /**
   * Get Contact Remark
   * @param contact_id
   */
  getRemarks() {
    this._commonCrudService.listData(AdminAPI.CLIENT_CONTACT_REMARK + '/' + this.contact.id, {
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
    this.contactRemarkList = response.payload.data;
  }

  /**
   * Create contact form method
   */
  createContactRemarkForm() {
    this.addContactRemarkForm = this._fb.group({
      notes: new FormControl('', <any>Validators.required)
    });
  }

  /**
   * On contact information page redirect
   */
  onContact() {
    this._router.navigate(['/' + AdminRoutes.CONTACT_INFORMATION]);
  }

  /**
   * On Click of Add New & Update New
   * @constructor
   */
  AddNewOptionsRedirect() {
    this.isAddNewOptions = true;
  }

  /**
   * On Add/Edit Contact
   * @param {FormGroup} form
   */
  onAddContact(form: FormGroup) {
    if (form.valid) {
      if (this.contact) {
        this._commonCrudService.updateDataWithPut(AdminAPI.CLIENT_CONTACT, this.contact.id, form.value)
          .subscribe((response) => {
            this.handleContactResponse(response);
          });
      } else {
        this._commonCrudService.addData(AdminAPI.CLIENT_CONTACT, form.value)
          .subscribe((response) => {
            this.handleContactResponse(response);
          });
      }
    }
  }

  /**
   * On Add/Edit Contact Remark
   * @param {FormGroup} form
   */
  onAddContactRemark(form: FormGroup) {
    if (form.valid) {
      form.value['contact_id'] = this.contact.id;
      this._commonCrudService.addData(AdminAPI.CLIENT_CONTACT_REMARK_ADD, form.value)
        .subscribe((response) => {
          this.getRemarks();
          this.createContactRemarkForm();
          this.addEditContactRemarksForm.resetForm();
        });
    }
  }

  /**
   * On Change Contact Remark Status
   * @param {FormGroup} form
   */
  onChangeContactRemarkStatus(action: boolean, contactRemark: ContactRemark) {
    const params = {'is_active': action ? 1 : 0, '_method': 'put'};
    this._commonCrudService.updateData(AdminAPI.CLIENT_CONTACT_REMARK_UPDATE, contactRemark.id, params).subscribe(response => {
      this.contactRemarkList.map(item => {
        if (item.id === contactRemark.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }


  /**
   * Handle Contact Response
   * @param response
   */
  handleContactResponse(response: any) {
    if (this.isAddNewOptions) {
      this._sharedService.setClientData(GLOBALDATAKEYS.CONTACT, null);
      this.contact = null;
      this.createContactForm();
      this.addEditContactForm.resetForm();
    } else {
      this._router.navigate(['/' + AdminRoutes.CONTACT_INFORMATION]);
    }
  }

  /**
   * Get array values from string
   * @param {string} value
   * @param {string} seperator
   * @returns {string[]}
   */
  getArrayToString(value: string, seperator: string) {
    if (value) {
      const valueOne = [];
      value.split(seperator).map(item => {
        valueOne.push(Number(item));
      });
      return valueOne;
    }
  }

  ngOnDestroy() {
    this.contact = null;
    this._sharedService.setClientData(GLOBALDATAKEYS.CONTACT, null);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Update Feedback Validation while click on is feedback contact yes/no
   * @param value
   */
  updateFeedbackEmailValidation(value: number) {
    if (value === 0) {
      this.addContactForm.get('feedback_email').setValidators(null);
      this.addContactForm.get('feedback_email').setValue('');
      this.addContactForm.get('feedback_email').updateValueAndValidity();
    } else {
      this.addContactForm.get('feedback_email').setValidators([<any>Validators.required, <any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]);
      this.addContactForm.get('feedback_email').updateValueAndValidity();
    }
  }

  /**
   * Update Feedback Validation while click on is feedback contact yes/no
   * @param value
   */
  updateFromEmailValidation(value: number) {
    if (value === 0) {
      this.addContactForm.get('from_email').setValidators(null);
      this.addContactForm.get('from_email').setValue('');
      this.addContactForm.get('from_email').updateValueAndValidity();
      this.addContactForm.get('from_name').setValidators(null);
      this.addContactForm.get('from_name').setValue('');
      this.addContactForm.get('from_name').updateValueAndValidity();
    } else {
      this.addContactForm.get('from_email').setValidators([<any>Validators.required, <any>Validators.pattern(CommonRegex.MULTIPLE_EMAIL_ADDRESS_REGEXP)]);
      this.addContactForm.get('from_email').updateValueAndValidity();
      this.addContactForm.get('from_name').setValidators([<any>Validators.required, <any>Validators.maxLength(50)]);
      this.addContactForm.get('from_name').updateValueAndValidity();
    }
  }

  /**
   * On Change Parent Entity
   * @param event
   */
  onChangeParentEntity(event: any) {
    this.clientList = this.filteredTradingClientList;
    if (event && event.id > 0) {
      this.clientList = this.filteredTradingClientList.filter(item => item["parent_id"] === event.id);
    }
  }
}
