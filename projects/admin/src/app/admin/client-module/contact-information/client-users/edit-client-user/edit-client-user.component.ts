import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../../../../../../utility/components/base/base.component";
import {ContactRemark, ContactUsersList} from "../../contact/contact.model";
import {Services} from "../../../../../../utility/shared-model/services.model";
import {CommonRegex, ValidationConstantMessage} from "../../../../../../utility/validation";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {CONTACTPOSITION, GLOBALDATAKEYS, yesNo} from "../../../../../../utility/constants/base-constants";
import {AdminUser} from "../../../../../../utility/shared-model/admin-user.model";
import {Clients} from "../../../view-client/view-client.model";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {CommonCrudService} from "../../../../../../utility/shared-service/common-crud.service";
import {SharedService} from "../../../../../../utility/shared-service/shared.service";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";
import {AdminAPI} from "../../../../../../utility/constants/api";
import {AdminRoutes} from "../../../../../../utility/constants/admin-route";
import * as moment from "moment";

@Component({
  selector: 'app-edit-client-user',
  templateUrl: './edit-client-user.component.html',
  styleUrls: ['./edit-client-user.component.scss']
})
export class EditClientUserComponent extends BaseComponent implements OnInit, OnDestroy {

  @ViewChild('addEditContactForm') addEditContactForm;
  @ViewChild('addEditContactRemarksForm') addEditContactRemarksForm;
  // Constant Variables
  contact: ContactUsersList = null;
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
  maxDateValue = new Date();

  constructor(private _router: Router,
              private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService,
              private _sharedObjService: SharedObjService,
  ) {
    super();
  }

  ngOnInit() {
    this.maxDateValue = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    this.contact = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT_CONTACT_USER);
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
   * Create contact form method
   */
  createContactForm() {
    this.addContactForm = this._fb.group({
      // parent_id: new FormControl(((this.contact && this.contact.parent_id && this.contact.parent_id) ? (this.contact.parent_id) : null)),
      entity_id: new FormControl(((this.contact && this.contact.entity_id && this.contact.entity_id) ? (this.contact.entity_id) : null), <any>Validators.required),
      birthdate: new FormControl(((this.contact && this.contact.birthdate) ? this.contact.birthdate : '')),
      first_name: new FormControl(((this.contact && this.contact.first_name) ? this.contact.first_name : ''), [<any>Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      last_name: new FormControl(((this.contact && this.contact.last_name) ? this.contact.last_name : ''), [<any>Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      email: new FormControl(((this.contact && this.contact.email) ? this.contact.email : ''), [<any>Validators.required, <any>Validators.pattern(CommonRegex.EMAIL_ADDRESS_REGEXP)]),
      mobile_no: new FormControl(((this.contact && this.contact.mobile_no) ? this.contact.mobile_no : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP), Validators.maxLength(11)]),
      is_active: new FormControl(((this.contact && this.contact.is_active >= 0) ? +this.contact.is_active : null), <any>Validators.required),
    });

    this.getClientList();
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
      form.value['birthdate'] = moment(form.value['birthdate']).format('YYYY-MM-DD');
      if (this.contact) {
        this._commonCrudService.updateDataWithPut(AdminAPI.CLIENT_CONTACT_CLIENT_EDIT_USERS, this.contact.id, form.value)
          .subscribe((response) => {
            this.handleContactResponse(response);
          });
      } else {
        this._commonCrudService.addData(AdminAPI.CLIENT_CONTACT_CLIENT_ADD_USERS, form.value)
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
