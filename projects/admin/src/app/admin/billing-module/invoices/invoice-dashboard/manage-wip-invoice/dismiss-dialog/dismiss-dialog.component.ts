import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AdminAPI} from '../../../../../../../utility/constants/api';
import {AdminRoutes} from '../../../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {CommonCrudService} from '../../../../../../../utility/shared-service/common-crud.service';

@Component({
  selector: 'app-dismiss-dialog',
  templateUrl: './dismiss-dialog.component.html',
  providers: [CommonCrudService]
})
export class DismissDialogComponent implements OnInit {

  dismissForm: FormGroup;
  invoiceId: number;

  constructor(private _router: Router, public dialogRef: MatDialogRef<DismissDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder, private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.createDismissForm();
    this.invoiceId = this.data['id'];
  }

  createDismissForm() {
    this.dismissForm = this._fb.group({
      dismiss_reason: new FormControl(''),
    });
  }

  onSubmitDismissForm(form: FormGroup) {
    if (form.valid) {
      this._commonCrudService.addData(AdminAPI.INVOICE_DISMISS + '/' + this.invoiceId, form.value).subscribe(response => {
        this.onDimissInvoiceList();
      });
      this.onClose();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onDimissInvoiceList() {
    this._router.navigate(['/' + AdminRoutes.INVOICES_DASHBOARD]);
  }
}
