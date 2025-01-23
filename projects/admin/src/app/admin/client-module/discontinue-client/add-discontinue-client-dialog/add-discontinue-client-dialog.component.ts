import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../../../../utility/components/base/base.component';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {AdminAPI} from '../../../../../utility/constants/api';
import {Clients} from '../../view-client/view-client.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {yesNo} from '../../../../../utility/constants/base-constants';
import {SharedObjService} from '../../../../../utility/shared-service/shared-object.service';

@Component({
  selector: 'app-add-discontinue-client-dialog',
  templateUrl: './add-discontinue-client-dialog.component.html'
})
export class AddDiscontinueClientDialogComponent extends BaseComponent implements OnInit {

  clientList: Clients[] = [];
  YesNo = yesNo;
  ticketCounter = 0;
  equalJSON: {};

  // Constant Variables
  validationMsg = new ValidationConstantMessage();

  // Form Variables
  addClientDiscontinueForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddDiscontinueClientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _fb: FormBuilder,
              private _commonCrudService: CommonCrudService, private _sharedObjService: SharedObjService) {
    super();
  }

  ngOnInit() {
    this.createAddClientDiscontinueForm();
    this.getClientList();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  createAddClientDiscontinueForm() {
    this.addClientDiscontinueForm = this._fb.group({
      entity_id: new FormControl(null, <any>Validators.required),
      problem_our_side: new FormControl('', <any>Validators.required),
      discontinue_comment: new FormControl('', <any>Validators.required),
      ticket: new FormControl(0)
    });
  }

  getClientList() {
    this._sharedObjService.getClientList({'records': 'all'}, {'compare': {'equal': {'discontinue_stage': 0}}}).subscribe((response) => {
      this.clientList = response;
    });
  }

  getEntityTicketCounter(event) {
    if (event) {
      this._commonCrudService.listData(AdminAPI.DISCONTINUE_TICKET_COUNT + '/' + event.id, {'counter': 1}, {'compare': {'equal': {'problem_our_side': 1}}}).subscribe((response) => {
        // console.log(response);
        this.ticketCounter = response.payload.data;
      });
    }
  }

  onSumbitDiscontinueEntity(form: FormGroup) {
    this._commonCrudService.addData(AdminAPI.DISCONTINUE_ENTITY_STORE, form.value).subscribe((response) => {
      this.dialogRef.close();
    });
  }
}

