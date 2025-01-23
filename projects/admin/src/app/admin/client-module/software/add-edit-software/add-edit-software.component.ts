import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {Software} from '../software.model';
import {Clients} from '../../view-client/view-client.model';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';

@Component({
  selector: 'app-add-edit-software',
  templateUrl: './add-edit-software.component.html',
  providers: [CommonCrudService]
})
export class AddEditSoftwareComponent extends BaseComponent implements OnInit, OnDestroy {

  // Angular variables
  @ViewChild('addEditSoftForm') addEditSoftForm;
  @Input() softwareRecord: BehaviorSubject<any>;
  @Input() softwareMasterList = [];
  @Input() panelStatus: BehaviorSubject<boolean>;
  @Output() onAddUpdate: EventEmitter<boolean> = new EventEmitter(false);

  // Data Variables
  isPanelOpen = false;
  software: Software = null;
  panelSubscriber: any;
  recordSubscriber: any;
  isOpenFilterView = false;

  clientList: Clients[] = [];
  userList: AdminUser[] = [];
  selectedAmNotesRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditAmNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);


  // Form Group Variables
  addEditSoftwareForm: FormGroup;

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  constructor(private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
  ) {
    super();
  }

  ngOnInit() {
    this.recordSubscriber = this.softwareRecord.subscribe((value) => {
      if (value) {
        this.software = value;
        this.getClientList();
      }
    });
    this.panelSubscriber = this.panelStatus.subscribe((value) => {
      this.isPanelOpen = value;
      this.createSoftwareForm();
    });
    this.getClientList();
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
    });
  }

  /**
   * Create software form
   */
  createSoftwareForm() {
    this.addEditSoftwareForm = this._fb.group({
      entity_id: new FormControl(((this.software && this.software.entity_id.id && this.software.entity_id) ? (this.software.entity_id.id) : null), []),
      software_id: new FormControl(((this.software && this.software.software_id.id && this.software.software_id) ? (this.software.software_id.id) : ''), []),
      username: new FormControl(((this.software && this.software.username) ? (this.software.username) : ''), []),
      password: new FormControl(((this.software && this.software.password) ? (this.software.password) : ''), []),
      link: new FormControl(((this.software && this.software.link) ? (this.software.link) : ''), []),
      notes: new FormControl(((this.software && this.software.notes) ? (this.software.notes) : ''), []),
    });
  }

  /**
   * Submit software form
   * @param form
   */
  onSubmitSoftwareForm(form: FormGroup) {
    if (form.valid) {
      form.value['entity_id'] = (form.value['entity_id']).toString();
      if (this.software) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.CLIENT_SOFTWARE_UPDATE, this.software.id, form.value)
          .subscribe((response) => {
            this.handleSoftwareResponse(response);
          });
      } else {
        this._commonCrudService.addData(AdminAPI.CLIENT_SOFTWARE_ADD, form.value)
          .subscribe((response) => {
            this.handleSoftwareResponse(response);
          });
      }
    }
  }

  /**
   * Handle Software Response
   * @param response
   */
  handleSoftwareResponse(response: any) {
    this.addEditSoftForm.resetForm();
    this.onAddUpdate.emit(true);
    this.onClickClear();
  }

  onClickClear() {
    this.isPanelOpen = false;
  }

  changeOpenPanelState() {
    if (!this.isPanelOpen) {
      this.isPanelOpen = true;
    } else if (this.isPanelOpen) {
      this.isPanelOpen = false;
    }
  }

  onClosePanel() {
    this.software = null;
    this.createSoftwareForm();
  }

  ngOnDestroy() {
    if (this.panelSubscriber) {
      this.panelSubscriber.unsubscribe();
    }
    if (this.recordSubscriber) {
      this.recordSubscriber.unsubscribe();
    }
  }
}
