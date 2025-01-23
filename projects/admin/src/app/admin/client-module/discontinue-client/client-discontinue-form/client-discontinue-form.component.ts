import {Component, OnInit} from '@angular/core';
import {AdminRoutes} from '../../../../../utility/constants/admin-route';
import {Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DiscontinueEntity} from '../discontinue-client.model';
import {CommonCrudService} from '../../../../../utility/shared-service/common-crud.service';
import {SharedService} from '../../../../../utility/shared-service/shared.service';
import {GLOBALDATAKEYS} from '../../../../../utility/constants/base-constants';
import {AdminAPI} from '../../../../../utility/constants/api';
import {ValidationConstantMessage} from '../../../../../utility/validation';
import {BaseComponent} from '../../../../../utility/components/base/base.component';

@Component({
  selector: 'app-client-discontinue-form',
  templateUrl: './client-discontinue-form.component.html',
  styleUrls: ['./client-discontinue-form.component.scss']
})
export class ClientDiscontinueFormComponent extends BaseComponent implements OnInit {

  // Data Variables
  clientDiscontinue: DiscontinueEntity;
  clientDiscontinueQuestions = [];
  newDiscontinueQuestions: any[] = [];
  clientDiscontinueStage = 0;
  clientDiscontinueQuestionDetail: any[] = [];
  whoFillup = [];
  addDiscontinueQuestionForm: FormGroup;
  isSave = 0;

  validationMsg = new ValidationConstantMessage();

  constructor(public _router: Router, private _fb: FormBuilder, private _commonCrudService: CommonCrudService, private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.clientDiscontinue = this._sharedService.getDiscontinueClientData(GLOBALDATAKEYS.DISCONTINUE_CLIENT);
    this.clientDiscontinueStage = Number(this.clientDiscontinue.clickedStage['id']);
    this.initializationMethod();
    this.createAddDiscontinueQuestionForm();
    // console.log(this.clientDiscontinue);
  }

  onDicontinueClient() {
    this._router.navigate(['/' + AdminRoutes.DISCONTINUE_CLIENT]);
  }

  /**
   * Initialization Methods
   */
  initializationMethod() {
    this.getDiscontinueQuestion();
  }

  createAddDiscontinueQuestionForm() {
    if (this.clientDiscontinueStage === 5) {
      this.addDiscontinueQuestionForm = this._fb.group({
        question_json: this._fb.array([]),
        discontinue_comment_by_qc: new FormControl((this.clientDiscontinue.discontinue_comment_by_qc !== '') ? this.clientDiscontinue.discontinue_comment_by_qc : null, <any> Validators.required)
      });
    } else if (this.clientDiscontinueStage === 6) {
      this.addDiscontinueQuestionForm = this._fb.group({
        question_json: this._fb.array([]),
        discontinue_comment_by_sales: new FormControl(this.clientDiscontinue.discontinue_comment_by_sales, <any> Validators.required)
      });
    } else {
      this.addDiscontinueQuestionForm = this._fb.group({
        question_json: this._fb.array([])
      });
    }
  }

  getDiscontinueQuestion() {
    this._commonCrudService.listData(AdminAPI.DISCONTINUE_ENTITY_QUESTION + '/' + this.clientDiscontinue.id, {'stage_id': this.clientDiscontinueStage}, {}).subscribe(response => {
      this.handleDiscontinueQuestionResponse(response);
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterFieldArray(): FormArray {
    return <FormArray>this.addDiscontinueQuestionForm.get('question_json');
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * Create Question Group Form
   */
  createQuestionGroup(item ?: any) {
    return this._fb.group({
      discontinue_question_id: new FormControl(item ? item['id'] : ''),
      who_fillup: new FormControl(item ? item['who_fillup'] : ''),
      who_fillup_name: new FormControl(item ? item['who_fillup_name'] : ''),
      name: new FormControl(item ? item['name'] : ''),
      is_checked: new FormControl(item ? ((item['is_checked'] !== 0) ? item['is_checked'] : null) : null, <any> Validators.required),
      notes: new FormControl(item ? item['notes'] : ''),
      type: new FormControl(item ? item['type'] : ''),
      created_by: new FormControl(item ? item['created_by'] : ''),
      created_on: new FormControl(item ? item['created_on'] : ''),
      sr_no: new FormControl(item ? item['sr_no'] : '')
    });
  }

  /**
   * Update Values
   * @param index
   * @param key
   * @param value
   */
  updateValues(index: number, key: string, value: any) {
    this.getFilterFieldArray().controls[index].get(key).setValue(value);
    // this.getFilterFieldArray().controls[index].get('is_checked').setValue(null);
    // console.log(index);
    // if (value) {
    //   this.getFilterFieldArray().controls[index].get('is_checked').setValue(1);
    // } else {
    //   this.getFilterFieldArray().controls[index].get('is_checked').setValue(null);
    // }
    // console.log(this.getFilterFieldArray().controls[index].get('is_checked'));
  }

  updateSaveButton(value: number) {
    this.isSave = value;
  }

  onSumbitDiscontinueQuestion(form: FormGroup) {
    form.value['_method'] = 'put';
    form.value['stage'] = this.clientDiscontinue.clickedStage['id'];

    if (this.isSave === 0) {
      form.value['is_draft'] = 1;
    } else {
      form.value['is_draft'] = 0;
    }
    form.value['entity_id'] = this.clientDiscontinue.entity_id;
    this._commonCrudService.updateData(AdminAPI.DISCONTINUE_ENTITY_QUESTION_UPDATE, this.clientDiscontinue.id, form.value).subscribe((response) => {
      if (this.isSave === 1) {
        this.onDicontinueClient();
      }
    });
  }

  /**
   * Handle New Client Review Question Listing
   * @param response
   */
  handleDiscontinueQuestionResponse(response: any) {
    const dataValue = Object.values(response.payload.data);
    this.whoFillup = Object.keys(response.payload.data);
    // console.log(this.whoFillup);
    if (this.whoFillup.length) {
      let i = 0;
      this.whoFillup.forEach(item => {
        this.newDiscontinueQuestions[i] = [];
        this.newDiscontinueQuestions[i] = dataValue[i];
        let j = 0;
        Object.keys(this.newDiscontinueQuestions[i]).forEach(keyVal => {
          j++;
          this.newDiscontinueQuestions[i][keyVal]['sr_no'] = j;
          this.getFilterFieldArray().push(this.createQuestionGroup(this.newDiscontinueQuestions[i][keyVal]));
          if (this.newDiscontinueQuestions[i][keyVal]['child'] !== []) {
            let k = 0;
            Object.keys(this.newDiscontinueQuestions[i][keyVal]['child']).forEach(keyItem => {
              k++;
              this.newDiscontinueQuestions[i][keyVal]['child'][keyItem]['sr_no'] = j + '.' + k;
              this.getFilterFieldArray().push(this.createQuestionGroup(this.newDiscontinueQuestions[i][keyVal]['child'][keyItem]));
            });
          }
        });
        i++;
      });
    }
    //
    // console.log(this.newDiscontinueQuestions);
    // console.log(this.getFilterFieldArray().controls);
    // console.log(this.addDiscontinueQuestionForm);
  }
}
