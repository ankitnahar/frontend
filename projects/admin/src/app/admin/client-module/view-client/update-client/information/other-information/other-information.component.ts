import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, PageEvent} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonRegex, ValidationConstantMessage} from "../../../../../../../utility/validation";
import {BaseComponent} from "../../../../../../../utility/components/base/base.component";
import {AddPartocularTypeDialogComponent} from "./add-partocular-type-dialog/add-partocular-type-dialog.component";
import {OtherAccount, OtherInformation} from "./other-information.model";
import {activeInactive, BASE, GLOBALDATAKEYS, yesNoNa} from "../../../../../../../utility/constants/base-constants";
import {AdminAPI} from "../../../../../../../utility/constants/api";
import {CommonCrudService} from "../../../../../../../utility/shared-service/common-crud.service";
import {Clients} from "../../../view-client.model";
import {SharedService} from "../../../../../../../utility/shared-service/shared.service";

declare var $;

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.scss']
})
export class OtherInformationComponent extends BaseComponent implements OnInit {
  @ViewChild('addOtherInfoFormData') addOtherInfoFormData;

  clientData: Clients;
  // Data Variables
  otherInformationList: OtherInformation[] = [];
  otherInformationObject: OtherInformation[] = [];
  otherParticularList: OtherAccount[] = [];
  isViewAccessList = yesNoNa.slice(1);
  activeInactiveList = activeInactive.slice(1);
// Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Form Variables
  addOtherInfoForm: FormGroup;

  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  constructor(private _sharedService: SharedService, private _fb: FormBuilder, public _router: Router, public dialog: MatDialog, private _commonCrudService: CommonCrudService) {
    super();
  }

  ngOnInit() {
    this.clientData = this._sharedService.getClientData(GLOBALDATAKEYS.CLIENT);
    this.createAddOtherInfoForm([]);
    this.getOtherAccountListing();
    this.getOtherInformationListing(1);
  }

  /**
   * Get Other Information Listing
   */
  getOtherInformationListing(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.OTHER_INFORMATION + '/' + this.clientData.id, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(Response => {
      this.otherInformationList = Response.payload.data;
      this.page = Response.pager.pageNumber;
      this.pageIndex = this.page - 1;
      this.totalRecords = +Response.pager.totalRecords;
    });
  }

  /**
   * Get Other Account Listing
   */
  getOtherAccountListing() {
    this._commonCrudService.listData(AdminAPI.OTHER_ACCOUNT_TYPE, {'records': 'all'}, {'compare': {'equal': {'is_active': 1}}}).subscribe(Response => {
      this.otherParticularList = Response.payload.data;
    });
  }

  /**
   * On Add Particular Item
   */
  onAddParticular() {
    const dialogRef = this.dialog.open(AddPartocularTypeDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.getOtherAccountListing();
    });
  }


  /**
   * Create other info form
   */
  createAddOtherInfoForm(otherInformationData?: any) {
    this.otherInformationObject = (otherInformationData) ? otherInformationData : [];
    this.addOtherInfoForm = this._fb.group({
      otheraccount_id: new FormControl(Object.keys(otherInformationData).length > 0 ? otherInformationData.other_account_id.id : null, <any> Validators.required),
      view_access: new FormControl((otherInformationData) ? otherInformationData.view_access : null, <any> Validators.required),
      befree_comment: new FormControl((otherInformationData) ? otherInformationData.befree_comment : null, [<any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      internal_comment: new FormControl((otherInformationData) ? otherInformationData.internal_comment : null, [<any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]),
      is_active: new FormControl((otherInformationData) ? otherInformationData.is_active : null, <any> Validators.required)
    });
  }

  /**
   * get function for returning pageNumber and page size at time of listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{}}
   */
  getQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    let params = {};
    params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    sortKey ? params ['sortBy'] = sortKey : '';
    sortOrder ? params ['sortOrder'] = sortOrder : '';
    return params;
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getOtherInformationListing(1, sortKey, sortVal);
  }

  /**
   * advance filter search operation
   * @returns {{}}
   */
  getSearchParam() {
    const params = {};
    const filter = {};
    // check for the object wheather its empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length) {
      params['compare'] = filter;
    }
    if (Object.keys(this.inJSON).length !== 0) {
      params['in'] = this.inJSON;
    }
    return params;
  }

  /**
   * On Submit Group
   * @param form
   */
  onSubmit(form: FormGroup) {
    // console.log(form);
    if (form.valid) {
      if (Object.keys(this.otherInformationObject).length > 0) {
        // console.log(this.otherInformationObject);
        this._commonCrudService.updateDataWithPut(AdminAPI.OTHER_INFO_ADD, this.otherInformationObject['id'], form.value).subscribe(Response => {
          this.getOtherInformationListing(1);
          this.addOtherInfoFormData.resetForm();
          this.otherInformationObject = [];
        });
      } else {
        this._commonCrudService.addData(AdminAPI.OTHER_INFO_ADD + '/' + this.clientData.id, form.value).subscribe(Response => {
          this.getOtherInformationListing(1);
          this.addOtherInfoFormData.resetForm();
          this.otherInformationObject = [];
        });
      }
    }
  }

  /**
   * Display is view access
   * @param {number} isViewAccess
   * @returns {string}
   */
  getIsViewAccess(isViewAccess: number): string {
    // console.log(bankLinkType);
    const val = this.isViewAccessList.filter(elem => elem.key === isViewAccess);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Close And Reset Form
   */
  closeAndReset() {
    this.addOtherInfoFormData.resetForm();
    this.otherInformationObject = [];
  }

  /**
   * On Page Change event for grid list
   * @param event
   */
  onPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getOtherInformationListing(event.pageIndex + 1);
  }

  onEditOtherInformation(otherInfo: any) {
    this.onScroll();
    this.createAddOtherInfoForm(otherInfo);
  }

  // scroll to top
  onScroll() {
    $('html, body').animate({scrollTop: 0}, 'slow');
  }

  /**
   * Active & Inactive Other Information from listing
   * @param {boolean} action
   * @param {OtherInformation} otherInfoObject
   */
  activeInactiveOtherInfo(action: boolean, otherInfoObject: OtherInformation) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.OTHER_INFO_ADD, otherInfoObject.id, params).subscribe(response => {
      this.otherInformationList.map(item => {
        if (item.id === otherInfoObject.id) {
          item.is_active = item.is_active ? 0 : 1;
        }
      });
    });
  }
}
