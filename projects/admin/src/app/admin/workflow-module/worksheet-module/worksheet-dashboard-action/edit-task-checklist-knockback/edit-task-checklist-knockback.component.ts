///<reference path="add-timesheet-dialog-knockback/add-timesheet-dialog-knockback.component.ts"/>
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminRoutes} from '../../../../../../utility/constants/admin-route';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component';

import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {AppConstant, category, EXPORTFILETYPE, GLOBALDATAKEYS, outcome, reviewerchecklistAction, reviewerTag, teamMemberchecklistAction, ToastType, WIPInvoiceBillingStatus} from '../../../../../../utility/constants/base-constants';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {CommonRegex, ValidationConstantMessage} from '../../../../../../utility/validation';
import {EmailPreview, WoksheetStatusFlow, WorksheetDocument, WorksheetListing, WorksheetNotes, WorksheetStatus, WorksheetStatusLog} from '../../worksheet-dashboard-tab/worksheet.model';
import {Timesheet} from '../../worksheet-quick-action/todays-timesheet/timesheet.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isValidFileType, isValidFileTypeExt} from '../../../../../../utility/common-functions';
import {BaseComponent} from '../../../../../../utility/components/base/base.component';
import {TrainingList} from '../../worksheet-quick-action/training-list/training-list.model';
import {AddNewRevieweTimesheetDialogComponent} from './add-new-reviewe-timesheet-dialog/add-new-reviewe-timesheet-dialog.component';
import {SpecialNotesData} from '../../../../client-module/view-client/update-client/special-notes/special-notes.model';
import {AddTimesheetDialogKnockbackComponent} from './add-timesheet-dialog-knockback/add-timesheet-dialog-knockback.component';
import * as FileSaver from 'file-saver';
import {ChecklistEmailPreviewDialogComponent} from "../checklist-email-preview-dialog/checklist-email-preview-dialog.component";
import {GoogleDriveMetaDataList} from "../../../../client-module/client-documents/google-drive.model";
import {UploadDocumentsDialogComponent} from "../edit-task-checklist/upload-documents-dialog/upload-documents-dialog.component";
import {SharedObjService} from "../../../../../../utility/shared-service/shared-object.service";

@Component({
  selector: 'app-edit-task-checklist-knockback',
  templateUrl: './edit-task-checklist-knockback.component.html',
  styleUrls: ['./edit-task-checklist-knockback.component.scss'],
  providers: [CommonCrudService]
})

export class EditTaskChecklistKnockbackComponent extends BaseComponent implements OnInit {
// State variables
  validationMsg = new ValidationConstantMessage();
  panelOpenState = false;
  allExpandState = '';
  isFilterView = false;
  isOpenHistoryDialog = false;
  worksheetData: WorksheetListing;
  worksheetNotes: WorksheetNotes[] = [];
  worksheetRevieweNotes: WorksheetNotes[] = [];
  worksheetTAMNotes: WorksheetNotes[] = [];
  specialNotesList: SpecialNotesData[] = [];
  worksheetClientDocument: WorksheetDocument[] = [];
  worksheetInternalDocument: WorksheetDocument[] = [];
  timesheetListing: Timesheet[] = [];
  statusLogList: WorksheetStatusLog[] = [];

  notesForm: FormGroup;
  checklistForm: FormGroup;
  emailPreviewData: EmailPreview;
  worksheetStatusFlow: WoksheetStatusFlow[] = [];
  worksheetStatusWorkFlowList: WorksheetStatus[] = [];
  // Constant Variable
  billingStatusList = WIPInvoiceBillingStatus;
  categoryData = category;
  teamMemberActionList = teamMemberchecklistAction;
  reviewerActionList = reviewerchecklistAction;
  reviewerTagList = reviewerTag;
  flagToSubmit = 0;
  dataArray = [];
  groupArray = [];
  attentionQuestion = [];
  worksheetCommentData = [];
  outcomeData = outcome;
  demoData = 0;
  headerData: any;
  ticketData: any;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  clientDocArray = [];
  internalDocArray = [];
  avtarFiles = [];
  uploadDoc = new FormData();
  fileTypeData = EXPORTFILETYPE;
  noteData: any;
  checked = [];
  dataToSend = [];
  saveDataFlag = [];
  falseFlag: any;
  trueFlag: any;
  headerDataObserver: any;
  worksheetCommentDataRef: any;
  trainingList: TrainingList[] = [];
  trIndex = -1;
  //taskIDForEmailPreview = [1, 2, 5, 23, 47, 50, 51, 52, 53, 54, 57, 389];
  taskIDForEmailPreview = [];
  isChecklistPageRequired = false;
  googleMetaData: GoogleDriveMetaDataList[] = [];

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    public dialog: MatDialog,
    public _sharedObjService: SharedObjService,
    public _commonCrudService: CommonCrudService,
    private _sharedService: SharedService) {
    super();
  }

  ngOnInit() {
    this.worksheetData = this._sharedService.getReviewChecklistData();
    if (this.worksheetData) {
      this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
        'table': 'task',
        'column': 'id,is_email'
      }, {'compare': {'equal': {'id': this.worksheetData.task_id.id}}}).subscribe(response => {
        if (response.length > 0 && response[0].is_email === 1) {
          this.isChecklistPageRequired = true;
        }
      });
      /*  const itemChecklist = this.taskIDForEmailPreview.findIndex(x => x === this.worksheetData.task_id.id);
        // console.log(itemChecklist);
        if (itemChecklist >= 0) {
          this.isChecklistPageRequired = true;
        } else {
          this.isChecklistPageRequired = false;
        }*/
    }
    this.getFileTypeList();
    this.getCheckListData();
    this.getHeaderData();
    this.getDocumentList();
    this.getAccountantNotes(1, 'id', 'desc');
    this.getTimesheetListing();
    this.getTrainingList();
    this.createNotesForm();
    this.createForm();
    this.getWorksheetFlow();
    this.getStatusLogList();
  }

  /**
   * Get Status Log List
   */
  getStatusLogList() {
    this._commonCrudService.listData(AdminAPI.WORKSHEET_STATUS_LOG_LISTING + '/' + this.worksheetData.id, {'records': 'all'}, {}).subscribe(response => {
      const data = response.payload.data;
      const dataLength = data.filter(item => (item.status_id && item.status_id.id === 9));
      this.statusLogList = dataLength.length ? dataLength : [];
      // console.log(this.statusLogList);
    });
  }
  /**
   * Get Worksheet Workflow
   */
  getWorksheetFlow() {
    if (this.worksheetData.service_id <= 0) {
      this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
        'table': 'worksheet_status_flow',
        'column': 'id,master_activity_id,status_from,status_to'
      }, {'compare': {'equal': {'master_activity_id': this.worksheetData.master_activity_id.id, 'status_from': this.worksheetData.status_id.id}}}).subscribe(response => {
        // console.log(response);
        this.worksheetStatusFlow = response;
        // Get Worksheet Status
        this._sharedObjService.getWorksheetStatusRightsWise({'records': 'all'}, {}).subscribe((responseData) => {
          // this.worksheetStatusList = response;
          this.worksheetStatusWorkFlowList = responseData.filter(function (statusList) {
            return response.filter(function (workflowStatusList) {
              return workflowStatusList.status_to === statusList.id && statusList.is_right === 1;
            }).length > 0;
          });
        });
      });
    }
  }

  /**
   * Get File Type List
   */
  getFileTypeList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'google_drive_meta_data',
      'column': 'id,key,label,icon,mimeType,edit,class,isFileCreate,extension,isFileSearch,labelSearch,extensionSearch,extensionSearchSort'
    }, {}).subscribe(response => {
      // console.log(response);
      this.googleMetaData = response;
    });
  }

  /**
   * Expand row table
   * @param i
   */
  openRow(i) {
    this.trIndex = (this.trIndex !== i) ? i : -1;
  }

  getTrainingList() {
    this._commonCrudService.listData(AdminAPI.DROPDOWN_LIST, {
      'table': 'worksheet_traning',
      'column': 'id,traning_name,is_active'
    }, {'compare': {'equal': {'is_active': 1}}}).subscribe(response => {
      this.trainingList = response;
    });
  }

  /**
   * Create Form
   */
  createForm() {
    this.checklistForm = this._fb.group({
      sections: this._fb.array([]),
      attentionQuestions: this._fb.array([]),
      timesheet_fill: new FormControl(null, <any> Validators.required),
      outcome: new FormControl(null),
    });
    // Show Outcome
    if (this.worksheetData.service_id > 0 && this.worksheetData.knockback_count > 0 && this.worksheetData.status_id.id === 2) {
      this.checklistForm.get('outcome').setValidators(<any> Validators.required);
      this.checklistForm.get('outcome').updateValueAndValidity();
    }
  }

  /**
   * Get Header Data
   */
  getHeaderData() {
    this._commonCrudService.listData(AdminAPI.GET_WORKSHEET_HEADER_DATA + '/' + this.worksheetData.id, {'taskchecklistview': 1}, {}).subscribe(response => {
      this.headerData = response.payload.data;
      this.ticketData = response.payload.ticket;
    });
  }

  /**
   * Create Notes Form
   */
  createNotesForm() {
    this.notesForm = this._fb.group({
      notes: new FormControl(null, <any> Validators.required),
    });
  }

  /**
   * On Submit Notes
   */
  submitNotes(form: FormGroup) {
    if (form.valid) {
      form.value['worksheet_id'] = this.worksheetData.id;
      form.value['type'] = 'R';
      this._commonCrudService.addData(AdminAPI.SAVE_DATA_NOTE, form.value).subscribe(response => {
        this.getAccountantNotes(1, 'id', 'desc');
        this.createNotesForm();
      });
    }
  }

  /**
   * Flag to Submit of add & add and new
   * @param type
   */
  flagToSubmitUpdate(type: number, status_id?: number) {
    this.flagToSubmit = type;
    this.worksheetData.status_id.id = status_id;
  }

  /**
   * On Submit Checklist
   * @param form
   */
  submitChecklist(form: FormGroup) {
    form.value['worksheet_id'] = this.worksheetData.id;
    form.value['type'] = 'R';
    form.value['status_id'] = this.worksheetData.status_id.id;
    form.value['is_export'] = 0;
    const group = {};
    const checklist = [];
    const attentionQuestion = form.value['attentionQuestion'];
    const groupData = form.value['sections'];
    if (groupData) {
      groupData.forEach(item => {
        group[item['id']] = item;
        if (item['Questions']) {
          item['Questions'].forEach(itemData => {
            checklist.push(itemData);
          });
        }
      });
    }
    form.value['group'] = JSON.stringify(group);
    form.value['checklist'] = JSON.stringify(checklist);
    // console.log(form.value['checklist']);
    form.value['attentionQuestion'] = JSON.stringify(attentionQuestion);
    // console.log(group, checklist);
    // console.log(this.checklistForm);

    if (this.flagToSubmit === 0) {
      form.value['is_draft'] = 1;
      this._commonCrudService.addData(AdminAPI.WORKSHEET_CHECKLIST_STORE, form.value).subscribe((response) => {
      });
    } else if (this.flagToSubmit === 4) {
      form.value['is_draft'] = 1;
      this._commonCrudService.addData(AdminAPI.WORKSHEET_CHECKLIST_STORE, form.value).subscribe((response) => {
        this.onWorksheet();
      });
    } else if (this.flagToSubmit === 1) {
      form.value['is_draft'] = 0;
      form.value['status_id'] = 9;
      if (form.valid) {
        this._commonCrudService.addData(AdminAPI.WORKSHEET_CHECKLIST_STORE, form.value).subscribe((response) => {
          if (response) {
            this.onWorksheet();
          }
        });
      }
    } else if (this.flagToSubmit === 2) {
      form.value['is_draft'] = 1;
      if (form.valid) {
        this._commonCrudService.addData(AdminAPI.WORKSHEET_CHECKLIST_STORE, form.value).subscribe((response) => {
          if (response) {
            this._router.navigate([AdminRoutes.TASK_CHECKLIST_EMAIL_REVIEW]);
          }
        });
      }
    } else if (this.flagToSubmit === 3) {
      form.value['is_draft'] = 0;
      form.value['status_id'] = 4;
      this._commonCrudService.addData(AdminAPI.WORKSHEET_CHECKLIST_STORE, form.value).subscribe((response) => {
        if (response) {
          this.onWorksheet();
        }
      });
    } else if (this.flagToSubmit === 5) {
      form.value['is_draft'] = 0;
      form.value['status_id'] = this.worksheetData.status_id.id;
      this._commonCrudService.addData(AdminAPI.WORKSHEET_CHECKLIST_STORE, form.value).subscribe((response) => {
        if (response) {
          this.onWorksheet();
        }
      });
    }
    form.value['attentionQuestion'] = attentionQuestion;
  }

  /**
   * Get Document List
   * @param pageNumber
   * @param key
   * @param val
   */
  getDocumentList() {
    // 236210
    this._commonCrudService.listData(AdminAPI.WORKSHEET_DOCUMENT_LIST_DATA + '/' + this.worksheetData.id, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc'
    }, {'compare': {'equal': {'is_deleted': 0}}}).subscribe(response => {
      this.worksheetClientDocument = (response.payload.data.client_doc) ? response.payload.data.client_doc : [];
      this.worksheetInternalDocument = (response.payload.data.internal_doc) ? response.payload.data.internal_doc : [];
    });
  }

  /**
   * Get Timesheet Listing
   * @param pageNumber
   * @param key
   * @param val
   */
  getTimesheetListing(is_validation_check?: number) {
    this._commonCrudService.listData(AdminAPI.TIMESHEET_LISTING, {
      'records': 'all',
      'sortBy': 'id',
      'sortOrder': 'desc',
      'is_checklist_view': 1
    }, {
      // 'compare': {
      //   'equal': {
      //     'worksheet_id': this.worksheetData.id
      //   }
      // }
      'or': {
        'equal': [{
          'worksheet_id': this.worksheetData.id,
          'related_worksheet_id': this.worksheetData.id,
        }]
      }
    }).subscribe(response => {
      this.timesheetListing = response.payload.data;
      // After Timesheet Submit it will check
      if (is_validation_check === 1) {
        const isReviewPending = this.timesheetListing.filter(item => item.is_reviewed === 0);
        if (isReviewPending.length) {
          this.checklistForm.get('timesheet_fill').setValue(null);
          this.checklistForm.get('timesheet_fill').updateValueAndValidity();
        } else {
          this.checklistForm.get('timesheet_fill').setValue(1);
          this.checklistForm.get('timesheet_fill').updateValueAndValidity();
        }
      }
    });
  }

  /**
   * Get Accountant Notes
   * @param pageNumber
   * @param key
   * @param val
   */
  getAccountantNotes(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.GET_ACCOUNTANT_DATA + '/' + this.worksheetData.id, {'records': 'all'}, {}).subscribe(response => {
      this.worksheetNotes = (response.payload.data.processingStaff) ? response.payload.data.processingStaff : [];
      this.worksheetRevieweNotes = (response.payload.data.reviewerStaff) ? response.payload.data.reviewerStaff : [];
      this.worksheetTAMNotes = (response.payload.data.tamStaff) ? response.payload.data.tamStaff : [];
    });

    this._commonCrudService.listData(AdminAPI.CLIENT_SPECIAL_NOTES + '/' + this.worksheetData.entity_id, {'records': 'all'}, {
      'compare': {
        'equal': {
          'service_id': this.worksheetData.service_id,
          'is_active': 1
        }
      }
    }).subscribe(response => {
      this.specialNotesList = response.payload.data;
    });
  }

  getCheckListData() {
    // '420484'; // // 296239;
    this._commonCrudService.getData(AdminAPI.GET_TASK_CHECKLIST, this.worksheetData.id, {'type': 'R'}).subscribe(response => {
      this.handleChecklistResponse(response);
    });
  }

  /**
   * Handle Checklist Response
   * @param response
   */
  handleChecklistResponse(response) {
    const groups = response.payload.group;
    const checklistQuestion = response.payload.data;
    const attentionQuestion = response.payload.attentionQuestion;
    const worksheetComments = response.payload.worksheetCommentData;
    // console.log(worksheetComments);
    // console.log(JSON.stringify(this.dataToSend));
    let i = 0;
    if (groups.length) {
      // If group then add in form
      groups.forEach(keyVal => {
        this.getFilterGroupArray().push(this.initSection(keyVal));

        const getQuestionArray = checklistQuestion[keyVal['id']];
        let j = 0;
        // If Questions of the group then add in form
        if (getQuestionArray.length) {
          getQuestionArray.forEach(itemKey => {
            const Comments = worksheetComments[itemKey['question_id']];
            itemKey['accountantComment'] = [];
            itemKey['reviewerComment'] = [];
            if (Comments) {
              const dataStaffCommentReadOnly = Comments.filter(data => data['staff_type'] === 'P' && data['is_draft'] === 0);
              const dataReviewCommentReadOnly = Comments.filter(data => data['staff_type'] === 'R' && data['is_draft'] === 0);
              const dataStaffCommentSave = Comments.filter(data => data['staff_type'] === 'R' && data['is_draft'] === 1);
              itemKey['accountantComment'] = dataStaffCommentReadOnly;
              itemKey['reviewerComment'] = dataReviewCommentReadOnly;
              itemKey['reviewer_comment'] = (dataStaffCommentSave.length) ? dataStaffCommentSave[0]['comment'] : null;
              itemKey['review_tag_id'] = (dataStaffCommentSave.length) ? dataStaffCommentSave[0]['review_tag_id'] : null;
              itemKey['training_id'] = (dataStaffCommentSave.length) ? dataStaffCommentSave[0]['training_id'] : null;
              // console.log(itemKey['accountantComment']);
            }
            // console.log(itemKey);
            this.getFilterGroupArrayData(i).push(this.initQuestions(itemKey));
            j++;
          });
        }
        // If Group Checked then reviewer action compulsory
        if (keyVal['is_checked'] === 1) {
          this.updateCheckGroupQuestionValidation(i, 1);
        } else {
          this.updateCheckGroupQuestionValidation(i, 0);
        }
        i++;
      });
    }
    // If Attention Questions then add in form
    if (attentionQuestion.length) {
      if (attentionQuestion.length) {
        attentionQuestion.forEach(keyData => {
          this.getFilterAttentionQuestion().push(this.initAttentionQuestions(keyData));
        });
      }
    }
    // console.log(this.checklistForm);
  }

  /**
   * Create Subactivity Group Form
   */
  initSection(item ?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : null),
      name: new FormControl(item ? item['name'] : null),
      is_checked: new FormControl(item ? (item['is_checked'] >= 0 && item['is_checked'] !== null) ? item['is_checked'] : 0 : 0),
      Questions: new FormArray([])
    });
  }

  /**
   * On Show Display Category Item
   * @param item
   */
  initQuestions(item?: any) {
    // console.log(item);
    return this._fb.group({
      id: new FormControl(item ? item['id'] : null),
      question_id: new FormControl(item ? item['question_id'] : null),
      group_id: new FormControl(item ? item['group_id'] : null),
      question_name: new FormControl(item ? item['question_name'] : null),
      help_text: new FormControl(item ? item['help_text'] : null),
      team_member_action: new FormControl(item ? item['team_member_action'] : null, <any> Validators.required),
      team_member_comment: new FormControl(item ? item['team_member_comment'] : null),
      technical_head_action: new FormControl(item ? item['technical_head_action'] : null),
      accountantComment: new FormControl(item ? item['accountantComment'] : 0),
      reviewerComment: new FormControl(item ? item['reviewerComment'] : 0),
      reviewer_action: new FormControl(item ? item['reviewer_action'] ? item['reviewer_action'] : null : null, [<any> Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_ZERO_NUMBER_REGEXP)]),
      reviewer_comment: new FormControl(item ? item['reviewer_comment'] : null, (item['reviewer_action'] === 2 || item['reviewer_action'] === 3) ? [<any> Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)] : null),
      review_tag_id: new FormControl(item ? item['review_tag_id'] : null),
      training_id: new FormControl(item ? this.getArrayToString(item['training_id'], ',') : null, (item['review_tag_id'] === 2) ? <any> Validators.required : null),
    });
  }

  /**
   * On Show Display Category Item
   * @param item
   */
  initAttentionQuestions(item?: any) {
    return this._fb.group({
      id: new FormControl(item ? item['id'] : null),
      question_name: new FormControl(item ? item['question_name'] : null),
      comment: new FormControl(item ? item['comment'] : null),
      is_processing_staff_checked: new FormControl(item ? item['is_processing_staff_checked'] : 0),
      is_reviewer_checked: new FormControl(item ? item['is_reviewer_checked'] : 0),
      review_tag_id: new FormControl(item ? item['review_tag_id'] : 0),
      topic_id: new FormControl(item ? item['topic_id'] : 0)
    });
  }

  /**
   * Get Filter Field Array
   */
  getFilterGroupArray(): FormArray {
    return <FormArray>this.checklistForm.get('sections');
  }

  /**
   * Get Filter Field Array
   */
  getFilterAttentionQuestion(): FormArray {
    return <FormArray>this.checklistForm.get('attentionQuestions');
  }

  /**
   * Get Filter Field Array
   */
  getFilterGroupArrayData(i): FormArray {
    return <FormArray>this.getFilterGroupArray().controls[i].get('Questions');
  }

  /**
   * Open filter method
   */
  onOpenFilter() {
    this.isFilterView = true;
  }

  /**
   * On contact information page redirect
   */
  onWorksheet() {
    this._router.navigate(['/' + AdminRoutes.WORKSHEET_REVIEW_OR_KNOCK_BACK]);
  }

  /**
   * On show history modal
   */
  onShowHistory() {
    this.isOpenHistoryDialog = true;
  }

  /**
   * On file selection
   * @param id
   */
  onFileSelect(id) {
    document.getElementById(id).click();
  }

  /**
   * on file changing
   * @param event
   */
  onUploadDocument(event, id) {
    const workSheetData = this._sharedService.getReviewChecklistData().id;
    if (event.target.files && event.target.files[0]) {
      this.avtarFiles = [];
      const filesList = event.target.files;
      if (filesList.length) {
        let f = 0;
        Object.keys(event.target.files).forEach(itemUploadFile => {
          const name = event.target.files[f].name;
          const lastDot = name.lastIndexOf('.');
          const ext = name.substring(lastDot + 1);
          if (isValidFileType(event.target.files[f].type) || isValidFileTypeExt(ext.toLowerCase())) {
            if (event.target.files[f].size > AppConstant.TWINTY_FIVE_MP_FILE_ALLOWED && id === 1) {
              this._sharedService.setToastMessage(this.validationMsg.VALID_THREE_MB_IMAGE_SIZE, ToastType.ERROR);
            } else {
              this.uploadDoc.delete('worksheet_id');
              this.uploadDoc.delete('document_type');
              this.uploadDoc.delete('document_file');

              this.uploadDoc.append('worksheet_id', workSheetData);
              this.uploadDoc.append('document_type', id);
              this.uploadDoc.append('document_file', event.target.files[f]);
              if (id === 1) {
                this.uploadDoc.append('is_sent', '1');
              } else {
                this.uploadDoc.append('is_sent', '0');
              }
              // const file = event.target.files[0];
              // console.log(event.target.files[0]);
              if (this.uploadDoc) {
                this._commonCrudService.uploadDocument(AdminAPI.WORKSHEET_DOCUMENT_UPLOAD, this.uploadDoc).subscribe(response => {
                  this.getDocumentList();
                });
              }
            }
          } else {
            this._sharedService.setToastMessage(event.target.files[f].name + ' - ' + this.validationMsg.VALID_IMAGE_TYPE, ToastType.ERROR);
          }
          f++;
        });
      }
    }
  }

  /**
   * Delete open confirmation modal
   */
  onConfirmationDialog(response) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete ?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this._commonCrudService.getData(AdminAPI.WORKSHEET_DOCUMENT_DELETE, response.id).subscribe(Response => {
          if (Response) {
            this.getDocumentList();
          }
        });
      }
    });
  }


  /**
   * On open timesheet modal
   */
  openDialog() {
    const dialogRef = this.dialog.open(AddTimesheetDialogKnockbackComponent, {
      panelClass: 'xl-mid-timesheet-dialog-container',
      data: {
        worksheetListData: this.worksheetData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result) {
        if (this.worksheetData.service_id === 2) {
          this.getTimesheetListing(1);
        } else {
          this.checklistForm.get('timesheet_fill').setValue(1);
          this.getTimesheetListing(0);
        }
      }
    });
  }

  /**
   * On open timesheet modal
   */
  openRevieweTimesheetDialog(reviewerTimesheet: Timesheet) {
    const dialogRef = this.dialog.open(AddNewRevieweTimesheetDialogComponent, {
      panelClass: 'xl-mid-timesheet-dialog-container',
      data: {
        timesheetListData: reviewerTimesheet
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result) {
        if (this.worksheetData.service_id === 2) {
          this.getTimesheetListing(1);
        } else {
          this.getTimesheetListing(1);
          this.checklistForm.get('timesheet_fill').setValue(1);
        }
      }
    });
  }

  onEmailPreview() {
    this._commonCrudService.getData(AdminAPI.CHECKLIST_EMAIL_PREVIEW, this.worksheetData.id, {'type': 'P'}).subscribe(response => {
      this.emailPreviewData = response.payload.emailDetail;
      const contentData = this.emailPreviewData.content;
      const dialogRef = this.dialog.open(ChecklistEmailPreviewDialogComponent, {
        panelClass: 'lg-dialog--container',
        data: {
          emailContentData: contentData
        }
      });

      dialogRef.afterClosed().subscribe(result => {

      });
    });

  }

  /**
   * On special notes redirect
   */
  onSpecialNotes(data: WorksheetListing) {
    if (data) {
      this._commonCrudService.getData(AdminAPI.CLIENT_BASIC, data.entity_id, {'tab': 1}).subscribe(response => {
        const clientData = response.payload.data;
        if (clientData) {
          this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, null);
          this._sharedService.setClientData(GLOBALDATAKEYS.CLIENT, clientData);
          this._router.navigate(['/' + AdminRoutes.UPDATE_CLIENT]);
        }
      });
    }
  }

  /**
   *
   * @param worksheetDocument
   */
  downloadDocument(worksheetDocument: WorksheetDocument) {
    if (worksheetDocument) {
      this._commonCrudService.downloadDocument(AdminAPI.WORKSHEET_DOCUMENT_DOWNLOAD + '/' + worksheetDocument.id).subscribe(response => {
        if (response && response.type) {
          const extension = response.type.split('/');
          FileSaver.saveAs(response, worksheetDocument.document_title);
        }
      });
    }
  }

  /**
   * On Check Group
   * @param parent
   * @param value
   */
  onCheckGroup(parent: number, key: string, value: any) {
    if (parent >= 0 && value) {
      this.getFilterGroupArray().controls[parent].get(key).setValue(1);
    } else {
      this.getFilterGroupArray().controls[parent].get(key).setValue(0);
    }
  }

  /**
   * Update & Check group question validation
   * @param parent
   * @param is_checked
   */
  updateCheckGroupQuestionValidation(parent: number, is_checked: number) {
    const GroupQuestions = this.getFilterGroupArrayData(parent).controls;
    if (GroupQuestions) {
      let child = 0;
      GroupQuestions.forEach(item => {
        if (is_checked === 0) {
          item.get('reviewer_action').setValidators(null);
          item.get('reviewer_action').updateValueAndValidity();
        } else if (is_checked === 1) {
          // console.log('ab');
          item.get('reviewer_action').setValidators(<any> Validators.required);
          item.get('reviewer_action').updateValueAndValidity();
        }
        child++;
      });
    }
  }

  /**
   * On Update Value Of Action
   * @param parent
   * @param child
   * @param key
   * @param value
   */
  onUpdateValues(parent: number, child: number, key: string, value: any) {
    // console.log(value);
    if (parent >= 0 && child >= 0 && key !== '') {
      this.getFilterGroupArrayData(parent).controls[child].get(key).setValue(value);
      this.getFilterGroupArrayData(parent).controls[child].get(key).updateValueAndValidity();
      if ((key === 'reviewer_action')) {
        if (value === 2 || value === 3) {
          this.getFilterGroupArrayData(parent).controls[child].get('reviewer_comment').setValidators([<any> Validators.required, <any>Validators.pattern(CommonRegex.NOT_ALLOWED_FIRST_AND_LAST_WHITESPACE_REGEXP)]);
          this.getFilterGroupArrayData(parent).controls[child].get('reviewer_comment').updateValueAndValidity();
        } else {
          this.getFilterGroupArrayData(parent).controls[child].get('reviewer_comment').setValidators(null);
          this.getFilterGroupArrayData(parent).controls[child].get('reviewer_comment').updateValueAndValidity();
        }
      }
      if ((key === 'review_tag_id')) {
        if (value === 2) {
          this.getFilterGroupArrayData(parent).controls[child].get('training_id').setValidators(<any> Validators.required);
          this.getFilterGroupArrayData(parent).controls[child].get('training_id').updateValueAndValidity();
        } else {
          this.getFilterGroupArrayData(parent).controls[child].get('training_id').setValidators(null);
          this.getFilterGroupArrayData(parent).controls[child].get('training_id').updateValueAndValidity();
        }
      }
      // console.log(this.checklistForm);
    }
  }

  /**
   * On Change Attention Question
   * @param index
   * @param key
   * @param value
   */
  onChangeAttentionQuestion(index: number, key: string, value: any) {
    if (value) {
      this.getFilterAttentionQuestion().controls[index].get(key).setValue(1);
    } else {
      this.getFilterAttentionQuestion().controls[index].get(key).setValue(0);
    }
  }

  /**
   * Get Billing Status Name From ID
   * @param status_id
   */
  getBillingStatusName(status_id: number): string {
    const val = this.billingStatusList.filter(elem => elem.key === status_id);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Status List
   * @param {number} cat_id
   * @returns {string}
   */
  getCategoryName(cat_id: number): string {
    const val = this.categoryData.filter(elem => elem.key === Number(cat_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get Attention Question Tags
   * @param status_id
   */
  getAttentionQuestionTag(review_tag_id: number): string {
    const val = this.billingStatusList.filter(elem => elem.key === review_tag_id);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Get Attention Question Topics
   * @param status_id
   */
  getAttentionQuestionTopic(topic_id: number): string {
    const val = this.billingStatusList.filter(elem => elem.key === topic_id);
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Status List
   * @param {number} cat_id
   * @returns {string}
   */
  getTeamMemberAction(action_id: number): string {
    // console.log(action_id);
    const val = this.teamMemberActionList.filter(elem => elem.key === Number(action_id));
    return (val.length) ? val[0].value : '';
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

  /**
   * Display Get Action
   * @param {number} action_id
   * @returns {string}
   */
  getReviewerAction(action_id: number): string {
    const val = this.reviewerActionList.filter(elem => elem.key === Number(action_id));
    return (val.length) ? val[0].value : '';
  }

  /**
   * Display Get Tag List
   * @param {number} tag_id
   * @returns {string}
   */
  getReviewerTag(tag_id: number): string {
    const val = this.reviewerTagList.filter(elem => elem.key === Number(tag_id));
    return (val.length) ? val[0].label : '';
  }

  /**
   * Display Get Training List
   * @param {number} training_id
   * @returns {string}
   */
  getReviewerTraining(training_id: string): string {
    // console.log(training_id);
    if (training_id) {
      const itemData = training_id.split(',');
      const name = [];
      if (itemData) {
        itemData.forEach(item => {
          const val = this.trainingList.filter(elem => elem.id === Number(item));
          if (val.length) {
            name.push(val[0].traning_name);
          }
        });
      }
      if (name.length) {
        return name.join(', ');
      }
    }
  }

  /**
   * On home page route
   */
  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  /**
   * On Change Outcome Value Set form value null or true
   * @param value
   */
  onChangeOutcomeValue(value: any) {
    if (value) {
      this.checklistForm.get('outcome').setValue(true);
    } else {
      this.checklistForm.get('outcome').setValue(null);
    }
  }

  /**
   * On Add Document Open Dialog
   * @param type
   */
  onAddDocumentsDialog(type: number) {
    const dialogRef = this.dialog.open(UploadDocumentsDialogComponent, {
      panelClass: 'xl-large-dialog-container',
      data: {
        clientData: this.worksheetData,
        uploadType: type
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDocumentList();
      }
    });
  }

  /**
   * On Open Document File
   * @param item
   */
  onOpenDocumentFile(item: any) {
    const params = {'file_id': item.file_id};
    this._commonCrudService.listData(AdminAPI.GOOGLE_DRIVE_SHARE_FILE, params).subscribe((response) => {
      console.log(response);
      const url = this.googleMetaData.filter(itemData => itemData.mimeType === item.mime_type);
      if (url.length) {
        if (item.csv_excel_file_id !== null && item.csv_excel_file_id !== '') {
          window.open(url[0].edit + item.csv_excel_file_id, '_blank');
        } else {
          window.open(url[0].edit + item.file_id, '_blank');
        }
      }
    });
  }
}
