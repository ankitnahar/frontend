import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../utility/validation';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {Address} from '../address.model';
import {ADDRESSSTATE, ADDRESSTYPE, GLOBALDATAKEYS} from '../../../../../../utility/constants/base-constants';
import {Clients} from '../../../view-client/view-client.model';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {SharedObjService} from '../../../../../../utility/shared-service/shared-object.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss'],
  // providers: [CommonCrudService]
})
export class AddAddressComponent extends BaseComponent implements OnInit, OnDestroy {

  // Constant Variables
  address: Address = null;
  clientList: Clients[] = [];
  filteredTradingClientList: Clients[] = [];
  parentClientList: Clients[] = [];
  validationMsg = new ValidationConstantMessage();

  // Form Group Variables
  addAddressForm: FormGroup;
  addressState = ADDRESSSTATE;
  addressType = ADDRESSTYPE;

  constructor(private _router: Router, private _fb: FormBuilder, private _sharedService: SharedService,
              private _commonCrudService: CommonCrudService,
              private _sharedObjService: SharedObjService,
  ) {
    super();
  }

  ngOnInit() {
    this.address = this._sharedService.getClientData(GLOBALDATAKEYS.CONTACTADDRESS);
    this.createAddressForm();
    this.getClientList();
  }

  /**
   * Address form creation
   */
  createAddressForm() {
    this.addAddressForm = this._fb.group({
      parent_id: new FormControl(((this.address && this.address.parent_id && this.address.parent_id) ? (this.address.parent_id) : null)),
      entity_id: new FormControl(((this.address && this.address.entity_id.id && this.address.entity_id) ? (this.address.entity_id.id) : null), <any>Validators.required),
      type: new FormControl(((this.address && this.address.type) ? this.address.type : ''), <any>Validators.required),
      street_address: new FormControl(((this.address && this.address.street_address) ? this.address.street_address : ''), <any>Validators.required),
      suburb: new FormControl(((this.address && this.address.suburb) ? this.address.suburb : '')),
      state_id: new FormControl(((this.address && this.address.state_id) ? this.address.state_id : ''), <any>Validators.required),
      postcode: new FormControl(((this.address && this.address.postcode) ? this.address.postcode : ''), [<any>Validators.pattern(CommonRegex.NUMERIC_REGEXP)])
    });
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
   * On Add/Edit Adress
   * @param {FormGroup} form
   */
  onAddAddress(form: FormGroup) {
    if (form.valid) {
      if (this.address) {
        form.value['_method'] = 'put';
        this._commonCrudService.updateData(AdminAPI.CONTACT_INFORMATION_ADDRESS_UPDATE, this.address.id, form.value)
          .subscribe((response) => {
            this.handleAddressResponse(response);
          });
      } else {
        this._commonCrudService.addData(AdminAPI.CONTACT_INFORMATION_ADDRESS_ADD, form.value)
          .subscribe((response) => {
            this.handleAddressResponse(response);
          });
      }
    }
  }

  /**
   * Handle Address Response
   * @param response
   */
  handleAddressResponse(response: any) {
    this._router.navigate(['/' + AdminRoutes.CONTACT_INFORMATION]);
  }

  /**
   * On contact information page redirect
   */
  onContact() {
    this._router.navigate(['/' + AdminRoutes.CONTACT_INFORMATION]);
  }

  ngOnDestroy() {
    this.address = null;
    this._sharedService.setClientData(GLOBALDATAKEYS.CONTACTADDRESS, null);
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
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
