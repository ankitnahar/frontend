import {Component, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../../utility/validation';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {PlanType, SoftwareMaster} from '../subscription.model';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';

@Component({
  selector: 'app-add-plan-basic-subscription',
  templateUrl: './add-plan-basic-subscription.component.html'
})
export class AddPlanBasicSubscriptionComponent extends BaseComponent implements OnInit {
  // Constant Variables
  @ViewChild('addMorePlanForm') addMorePlanForm;
  validationMsg = new ValidationConstantMessage();
  // Angular Variables

  // Data Variables
  planType: PlanType[] = [];
  softwareList: SoftwareMaster[] = [];
  // Form Group Variables
  addPlanForm: FormGroup;
  slideActiveInactive = [];

  constructor(
    public dialog: MatDialog,
    private _commonCrudService: CommonCrudService,
    private _sharedService: SharedService,
    public dialogRef: MatDialogRef<AddPlanBasicSubscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.initializationMethod();
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.createSoftwareForm();
    this.getSoftwareList();
    this.getPlanList();
  }

  /**
   * Get Software List
   */
  getSoftwareList() {
    this._commonCrudService.listData(AdminAPI.BILLING_SUBSCRIPTION_SOFTWARE, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc'
    }, {}).subscribe((response) => {
      this.softwareList = response.payload.data;
    });
  }

  /**
   * Get Plan List
   */
  getPlanList() {
    this._commonCrudService.listData(AdminAPI.BILLING_SUBSCRIPTION_PLAN, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc'
    }, {}).subscribe((response) => {
      this.planType = response.payload.data;
    });
  }

  /**
   * Create Account Type Form
   */
  createSoftwareForm() {
    this.addPlanForm = this._fb.group({
      parent_id: new FormControl('', <any>Validators.required),
      software_plan: new FormControl('', <any>Validators.required),
      amount: new FormControl('', [<any>Validators.required, <any>Validators.pattern(CommonRegex.FLOAT_NUMBER_REGEXP)]),
      id: new FormControl(''),
    });
  }

  /**
   * Close modal method
   */
  onClose(): void {
    this.dialogRef.close();
  }

  /**
   * Esc event for close modal
   * @param event
   */
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.onClose();
    }
  }

  /**
   * On Add or Update bank
   * @param formParams
   * @param {boolean} isValid
   * @param bankObject
   */
  onSoftwareSubmit(form: FormGroup) {
    if (form.valid) {
      if (form.value['id'] > 0) {
        this._commonCrudService.updateDataWithPut(AdminAPI.BILLING_SUBSCRIPTION_PLAN_DATA, form.value['id'], form.value).subscribe(Response => {
          this.getPlanList();
          this.createSoftwareForm();
          this.addMorePlanForm.resetForm();
        });
      } else {
        delete(form.value['id']);
        form.value['is_active'] = 1;
        this._commonCrudService.addData(AdminAPI.BILLING_SUBSCRIPTION_PLAN_DATA_ADD, form.value).subscribe(Response => {
          this.getPlanList();
          this.createSoftwareForm();
          this.addMorePlanForm.resetForm();
        });
      }
    }
  }

  /**
   * On Edit PLan Type Data
   * @param planTypeData
   */
  onEditPlanTypeData(planTypeData: PlanType) {
    if (planTypeData) {
      this.addPlanForm.get('parent_id').setValue(planTypeData['parent_id']['id']);
      this.addPlanForm.get('software_plan').setValue(planTypeData['software_plan']);
      this.addPlanForm.get('amount').setValue(planTypeData['amount']);
      this.addPlanForm.get('id').setValue(planTypeData['id']);
    }
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event: any, planType: any, id: number) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactivePlan(event.checked, planType);
      } else {
        if (this.slideActiveInactive[id]) {
          this.slideActiveInactive[id] = false;
        } else {
          this.slideActiveInactive[id] = true;
        }
      }
    });
  }

  /**
   * Active Inactive Plan Type
   * @param action
   * @param planType
   */
  activeInactivePlan(action: boolean, planType: any[]) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.BILLING_SUBSCRIPTION_PLAN_DATA, planType['id'], params).subscribe(response => {
      this.planType.map(item => {
        if (item['id'] === planType['id']) {
          item['is_active'] = item['is_active'] ? 0 : 1;
        }
      });
    });
  }
}
