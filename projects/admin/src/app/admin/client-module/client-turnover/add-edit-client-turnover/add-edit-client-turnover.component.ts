import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {CommonRegex, ValidationConstantMessage} from '../../../../../utility/validation';
import {ClientTurnover} from '../client-turnover.model';
import {BehaviorSubject} from 'rxjs';
import {Clients} from '../../view-client/view-client.model';
import {AdminUser} from '../../../../../utility/shared-model/admin-user.model';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../utility/constants/api';

@Component({
  selector: 'app-add-edit-client-turnover',
  templateUrl: './add-edit-client-turnover.component.html',
})

export class AddEditClientTurnoverComponent extends BaseComponent implements OnInit, OnDestroy {

  // Angular variables
  @Input() turnoverRecord: BehaviorSubject<any>;
  @Input() panelStatus: BehaviorSubject<boolean>;
  @Input() yearList = [];
  @Output() addUpdateTurnoverEvent: EventEmitter<boolean> = new EventEmitter(false);

  // Data related variables
  isPanelOpen = false;
  clientTurnover: ClientTurnover = null;
  panelSubscriber: any;
  recordSubscriber: any;


  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  addEditTurnoverForm: FormGroup;

  // data variable
  isOpenFilterView = false;
  clientList: Clients[] = [];
  userList: AdminUser[] = [];
  selectedAmNotesRecord: BehaviorSubject<any> = new BehaviorSubject(null);
  isEditAmNotes: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
  ) {
    super();

  }

  ngOnInit() {
    this.recordSubscriber = this.turnoverRecord.subscribe((value) => {
      if (value) {
        this.clientTurnover = value;
        this.getClientList();
      }
    });
    this.panelSubscriber = this.panelStatus.subscribe((value) => {
      this.isPanelOpen = value;
      this.createClientTurnoverForm();
    });
    this.getClientList();
  }

  // Initialization methods
  /**
   * Create client turnover form method
   */
  createClientTurnoverForm() {
    this.addEditTurnoverForm = this._fb.group({
      entity_id: new FormControl(((this.clientTurnover && this.clientTurnover.entity_id &&
        this.clientTurnover.entity_id.id) ? (this.clientTurnover.entity_id.id) : null),
        <any>Validators.required),
      year: new FormControl(((this.clientTurnover && this.clientTurnover.year) ?
        (this.clientTurnover.year) : ''), <any>Validators.required),
      total: new FormControl(((this.clientTurnover && this.clientTurnover.total) ?
        (this.clientTurnover.total) : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      sept_qtr: new FormControl(((this.clientTurnover && this.clientTurnover.sept_qtr) ?
        (this.clientTurnover.sept_qtr) : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      dec_qtr: new FormControl(((this.clientTurnover && this.clientTurnover.dec_qtr) ?
        (this.clientTurnover.dec_qtr) : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      march_qtr: new FormControl(((this.clientTurnover && this.clientTurnover.march_qtr) ?
        (this.clientTurnover.march_qtr) : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
      june_qtr: new FormControl(((this.clientTurnover && this.clientTurnover.june_qtr) ?
        (this.clientTurnover.june_qtr) : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)]),
    });
  }

  /**
   * Get Client List
   */
  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {}).subscribe((response) => {
      this.clientList = response;
    });
  }


  // Page events
  /**
   * Submit turnover method
   * @param form
   */
  onSubmitTurnoverForm(form: FormGroup) {
    if (form.valid) {
      form.value['entity_id'] = (form.value['entity_id']).toString();
      if (this.clientTurnover) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.CLIENT_TURNOVER_DATA, this.clientTurnover.id, form.value)
          .subscribe((response) => {
            this.handleTurnoverResponse(response);
          });
      } else {
        this._commonCrudService.addData(AdminAPI.CLIENT_TURNOVER_DATA, form.value)
          .subscribe((response) => {
            this.handleTurnoverResponse(response);
          });
      }
    }
  }

  handleTurnoverResponse(response: any) {
    this.addUpdateTurnoverEvent.emit(true);
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
    this.clientTurnover = null;
    this.createClientTurnoverForm();
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
