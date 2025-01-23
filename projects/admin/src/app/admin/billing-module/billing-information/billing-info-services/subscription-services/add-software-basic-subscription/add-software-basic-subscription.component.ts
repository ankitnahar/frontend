import {Component, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationConstantMessage} from '../../../../../../../utility/validation';
import {BaseComponent} from '../../../../../../../utility/components/base/base.component';
import {SoftwareMaster} from '../subscription.model';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../../../utility/shared-service/shared.service';
import {ConfirmationDialogComponent} from '../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-software-basic-subscription',
  templateUrl: './add-software-basic-subscription.component.html'
})
export class AddSoftwareBasicSubscriptionComponent extends BaseComponent implements OnInit {
  @ViewChild('addMoreSoftwareForm') addMoreSoftwareForm;
  // Constant Variables
  validationMsg = new ValidationConstantMessage();
  // Angular Variables

  // Data Variables
  softwareList: SoftwareMaster[] = [];

  // Form Group Variables
  addSoftwareForm: FormGroup;
  slideActiveInactive = [];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddSoftwareBasicSubscriptionComponent>,
    private _commonCrudService: CommonCrudService,
    private _sharedService: SharedService,
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
   * Create Account Type Form
   */
  createSoftwareForm() {
    this.addSoftwareForm = this._fb.group({
      software_plan: new FormControl('', <any>Validators.required),
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
        this._commonCrudService.updateDataWithPut(AdminAPI.BILLING_SUBSCRIPTION_SOFTWARE_DATA, form.value['id'], form.value).subscribe(Response => {
          this.getSoftwareList();
          this.createSoftwareForm();
          this.addMoreSoftwareForm.resetForm();
        });
      } else {
        delete(form.value['id']);
        form.value['is_active'] = 1;
        this._commonCrudService.addData(AdminAPI.BILLING_SUBSCRIPTION_SOFTWARE_DATA_ADD, form.value).subscribe(Response => {
          this.getSoftwareList();
          this.createSoftwareForm();
          this.addMoreSoftwareForm.resetForm();
        });
      }
    }
  }

  /**
   * On Edit Software Data
   * @param softwareData
   */
  onEditSoftwareData(softwareData: SoftwareMaster) {
    if (softwareData) {
      this.addSoftwareForm.get('software_plan').setValue(softwareData['software_plan']);
      this.addSoftwareForm.get('id').setValue(softwareData['id']);
    }
  }

  /**
   *  Toggle confirmation Dialog
   */
  openToggleConfirmationDialog(event: any, softwareType: any, id: number) {
    const status = event.checked ? 'Inactive' : 'Active';
    const statusNagetive = !event.checked ? 'Inactive' : 'Active';
    const slideDialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Do you want change status from ' + status + ' to ' + statusNagetive
      }
    });
    slideDialog.afterClosed().subscribe((value) => {
      if (value) {
        this.activeInactiveSoftware(event.checked, softwareType);
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
   * Active Inactive Software Type
   * @param action
   * @param softwareType
   */
  activeInactiveSoftware(action: boolean, softwareType: any[]) {
    const params = {'is_active': action ? 1 : 0};
    this._commonCrudService.updateDataWithPut(AdminAPI.BILLING_SUBSCRIPTION_SOFTWARE_DATA, softwareType['id'], params).subscribe(response => {
      this.softwareList.map(item => {
        if (item['id'] === softwareType['id']) {
          item['is_active'] = item['is_active'] ? 0 : 1;
        }
      });
    });
  }
}
