import {Component, HostListener, Input, OnInit} from '@angular/core';
import {MatDialog, MatSelectChange} from '@angular/material';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Clients} from '../../view-client.model';
import {BASE} from '../../../../../../utility/constants/base-constants';
import {ClientChecklist, ClientQuestions, QuestionViewChecklist} from './client-checklist.model';
import {SharedService} from '../../../../../../utility/shared-service/shared.service';
import {AdminAPI} from '../../../../../../utility/constants/api';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';

export enum Views {
  CLIENT_CHECKLIST, CLIENT_QUESTION, CLIENT_QUESTION_LIST
}

@Component({
  selector: 'app-view-client-checklist',
  templateUrl: './view-client-checklist.component.html',
  styleUrls: ['./view-client-checklist.component.scss'],
})
export class ViewClientChecklistComponent implements OnInit {
  // Angular variables
  @Input() clientInformation: Clients;

  // Constant Variables
  enumView = Views;
  activeView: Views = Views.CLIENT_CHECKLIST;

  // form related variables
  questionFilterForm: FormGroup;
  questionFilterOuterViewForm: FormGroup;

  // Data related variables
  tagList: any[] = [];
  clientChecklistList: ClientChecklist[] = [];
  clientQuestionsList: ClientQuestions[] = [];
  questionViewGroup = [];
  questionViewData = [];
  questionViewObject: any;
  questionViewChecklist: QuestionViewChecklist[] = [];
  isNewChecklist: number;
  availableQuestions = 0;
  checklistArray: any[] = [];
  questionChecklistList: any[] = [];
  questionMasterActivityList: any[] = [];
  questionTaskList: any[] = [];
  equalJSON = {};
  likeJSON = {};
  selectedChecklist: QuestionViewChecklist;

  // Sorting Params for client checklist
  clientChecklistSortBy: string;
  clientChecklistSortOrder: string;
  clientQuestionSortBy: string;
  clientQuestionSortOrder: string;

  // Pagination related variables
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Select value
  selected = 'checklist';

  // State variables
  panelOpenState = false;
  allExpandState = false;
  isFilterView = false;
  isUpdateDisable = true;

  constructor(public dialog: MatDialog,
              private _commonCrudService: CommonCrudService,
              private _sharedService: SharedService) {
  }

// get form control
  get entityChecklistIdField(): AbstractControl {
    return this.questionFilterForm.get('entity_checklist_id');
  }

  get masterActivityIdField(): AbstractControl {
    return this.questionFilterForm.get('master_activity_id');
  }

  get taskIdField(): AbstractControl {
    return this.questionFilterForm.get('task_id');
  }

  get questionField(): AbstractControl {
    return this.questionFilterForm.get('question_name');
  }

  get isApplicableField(): AbstractControl {
    return this.questionFilterForm.get('is_applicable');
  }

  ngOnInit() {
    this.initializeMethod();
  }

// Initialization methods
  initializeMethod() {
    this.createQuestionAdvancedFilterForm();
    this.getClientChecklist();
    const value = {
      url: AdminAPI.CLIENT_CHECKLIST_HISTORY + '/' + this.clientInformation.id,
      params: {},
      searchParams: {},
    };
    this._sharedService.setHistoryURL(value);
  }

  /**
   * Creating advanced filter forms
   */
  createQuestionAdvancedFilterForm() {
    this.questionFilterForm = new FormGroup({
      entity_checklist_id: new FormControl(''),
      master_activity_id: new FormControl(''),
      task_id: new FormControl(''),
      question_name: new FormControl(''),
      is_applicable: new FormControl('')
    });

    this.questionFilterOuterViewForm = new FormGroup({
      entity_checklist_id: new FormControl(''),
      master_activity_id: new FormControl(''),
      task_id: new FormControl(''),
      question_name: new FormControl(''),
      is_applicable: new FormControl('')
    });
  }

  /**
   * getting client checklist List
   */
  getClientChecklist() {
    if (this.clientInformation.is_service) {
      this._commonCrudService.listData(AdminAPI.CLIENT_CHECKLIST_DATA + '/' + this.clientInformation.id, {records: 'all'})
        .subscribe((response) => {
          this.handleClientChecklistResponse(response);
        });
    }
  }

  handleClientChecklistResponse(response: any) {
    this.isNewChecklist = response['payload']['isClientchecklist'];
    this.clientChecklistList = response['payload']['data'];
    this.getChecklistArray();
  }

  /**
   * creating internal checklistArray to pass as param during Add or Update checklist
   */
  getChecklistArray() {
    this.checklistArray = [];
    this.clientChecklistList.forEach((checklist) => {
      const params = {
        checklist_id: checklist.master_checklist_id,
        status: checklist.is_applicable
      };
      this.checklistArray.push(params);
    });
  }

// Api call
  /**
   * getting client question list
   * @param {number} pageNumber
   * @param {string} key
   * @param {string} val
   */
  getClientQuestionsList(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.CLIENT_QUESTIONS_DATA + '/' + this.clientInformation.id,
      this.getClientQuestionsQueryParams(pageNumber, key, val), this.getClientQuestionSearchParams())
      .subscribe((response) => {
        this.handleClientQuestionsResponse(response);
      });
  }

  handleClientQuestionsResponse(response: any) {
    this.clientQuestionsList = response['payload']['data'];
    this.page = response['pager']['pageNumber'];
    this.pageIndex = this.page - 1;
    this.totalRecords = +(response['pager']['totalRecords']);
    this.clientQuestionSortBy = response['pager']['sortBy'];
    this.clientQuestionSortOrder = response['pager']['sortOrder'];
  }

  /**
   * getting respective data to fill in drop-down during client question filter
   */
  getClientQuestionsFilterData() {
    this._commonCrudService.listData(AdminAPI.CLIENT_CHECKLIST_DATA + '/' + this.clientInformation.id, {records: 'all'},
      this.getSearchParam()).subscribe((response) => {
      this.handleClientQuestionFilterResponse(response);
    });
  }

  handleClientQuestionFilterResponse(response: any) {
    const questionFilterDataArray: ClientChecklist[] = response['payload']['data'];
    questionFilterDataArray.forEach((checklist) => {
      const questionChecklistParam = {
        id: checklist.id,
        name: checklist.name
      };
      this.questionChecklistList.push(questionChecklistParam);

      const questionMasterActivityParam = {
        id: checklist.master_activity_id,
        name: checklist.master_activity_name
      };
      this.questionMasterActivityList.push(questionMasterActivityParam);

      const questionLastParam = {
        id: checklist.task_id,
        name: checklist.task_name
      };
      this.questionTaskList.push(questionLastParam);
    });
    this.questionTaskList = this.removeDuplicateItem(this.questionTaskList);
    this.questionMasterActivityList = this.removeDuplicateItem(this.questionMasterActivityList);
    this.questionChecklistList = this.removeDuplicateItem(this.questionChecklistList);
  }

  /**
   * function to removed duplicate entries from passed array and return the same array
   * @param {any[]} inputArray
   * @returns {any[]}
   */
  removeDuplicateItem(inputArray: any[]) {
    inputArray = inputArray.filter((value, index, array) =>
      !array.filter((v, i) => JSON.stringify(value) === JSON.stringify(v) && i < index).length);
    return inputArray;
  }

  /**
   * Getting question list for the view(i.e. questionView), which pop-up after adding or updating checklist
   * @param {number} id
   */
  getQuestionViewList(id: number) {
    this._commonCrudService.listData(AdminAPI.CLIENT_QUESTIONS_VIEW_DATA + '/' + this.clientInformation.id, {},
      this.getQuestionViewSearchParams(id)).subscribe((response) => {
      this.handleQuestionViewResponse(response);
    });
  }

  handleQuestionViewResponse(response: any) {
    this.questionViewChecklist = [];
    this.questionViewGroup = [];
    this.questionViewData = [];
    this.availableQuestions = response['payload']['availableQuestion'];
    const checklistObj = response['payload']['checklist'];
    for (const key in checklistObj) {
      if (checklistObj.hasOwnProperty(key)) {
        this.questionViewChecklist.push(checklistObj[key]);
      }
    }
    if (!(this.selectedChecklist)) {
      this.selectedChecklist = this.questionViewChecklist[0];
    }
    const groupObj = response['payload']['group'];
    for (const key in groupObj) {
      if (groupObj.hasOwnProperty(key)) {
        this.questionViewGroup.push({
          id: key,
          value: groupObj[key]
        });
      }
    }
    const dataObj = response['payload']['data'];
    this.questionViewObject = dataObj;
    for (const key in dataObj) {
      if (dataObj.hasOwnProperty(key)) {
        this.questionViewData.push({
          id: key,
          value: dataObj[key]
        });
      }
    }
    this.activeView = this.enumView.CLIENT_QUESTION_LIST;
  }

// Page Events
  /**
   * Event called on changing checklist on questionView
   * @param {QuestionViewChecklist} checklist
   */
  onChangeQuestionViewChecklist(checklist: QuestionViewChecklist) {
    this.getQuestionViewList(checklist.id);
    this.selectedChecklist = checklist;
  }

  /**
   * Cancel button click event on questionView
   */
  onCancelAddUpdateQuestionView() {
    this.getQuestionViewList(this.selectedChecklist.id);
  }

  /**
   * On change - client question or client checklist event
   * @param event
   */
  onChangeCheckList(event) {
    if (event === 'question') {
      this.questionTaskList = [];
      this.questionMasterActivityList = [];
      this.questionChecklistList = [];
      this.getClientQuestionsList(1);
      this.getClientQuestionsFilterData();
      const value = {
        url: AdminAPI.CLIENT_QUESTION_HISTORY + '/' + this.clientInformation.id,
      };
      this._sharedService.setHistoryURL(value);
      this.activeView = this.enumView.CLIENT_QUESTION;
    } else {
      const value = {
        url: AdminAPI.CLIENT_CHECKLIST_HISTORY + '/' + this.clientInformation.id,
      };
      this._sharedService.setHistoryURL(value);
      this.activeView = this.enumView.CLIENT_CHECKLIST;
    }
  }

  /**
   * Function called when any changes are made on questionView fields
   * @param value
   * @param {number} questionId
   * @param {string} questionTypeId
   * @param {string} keyName
   */
  onChangeQuestion(value: any, questionId: number, questionTypeId: string, keyName: string) {
    for (const key in this.questionViewObject) {
      if (this.questionViewObject.hasOwnProperty(key)) {
        if (key === questionTypeId) {
          const valueArray: any[] = this.questionViewObject[key];
          valueArray.filter((valueObj) => {
            if (this.availableQuestions === 0) {
              if (valueObj['master_checklist_question_id'] === questionId) {
                valueObj[keyName] = value;
              }
            } else {
              if (valueObj['id'] === questionId) {
                valueObj[keyName] = value;
              }
            }
          });
          this.questionViewObject[key] = valueArray;
        }
      }
    }
  }

  /**
   * get client question list based on advanced filter
   * @param {FormGroup} form
   */
  questionAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.likeJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.questionFilterOuterViewForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }
    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if ((key === 'entity_checklist_id') || (key === 'master_activity_id') || (key === 'task_id') || (key === 'is_applicable')) {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'question_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
      }
      this.isFilterView = false;
      this.getClientQuestionsList(1);
    }
  }

  /**
   * Key up event gets called during advanced filter
   * @param event
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  questionAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.questionFilterForm.setValue(
        {
          'entity_checklist_id': form.value['entity_checklist_id'],
          'master_activity_id': form.value['master_activity_id'],
          'task_id': form.value['task_id'],
          'question_name': form.value['question_name'],
          'is_applicable': form.value['is_applicable']
        });
      this.questionAdvanceFilter(form, false);
    }
  }

  /**
   * Function gets called when respective tag got cleared/removed on client question list filter
   * @param {string} elementName
   */
  onClearTag(elementName: string) {
    this.questionFilterForm.get(elementName).setValue('');
    this.questionFilterOuterViewForm.get(elementName).setValue('');
    if ((elementName === 'entity_checklist_id') || (elementName === 'master_activity_id') ||
      (elementName === 'task_id') || (elementName === 'is_applicable')) {
      delete this.equalJSON[elementName];
    } else if (elementName === 'question_name') {
      delete this.likeJSON[elementName];
    }
    this.getClientQuestionsList(1, this.clientQuestionSortBy, this.clientQuestionSortOrder);
  }

  /**
   * Getting sorted client question list
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortClientQuestionsData(sortKey: string, sortVal: string) {
    this.getClientQuestionsList(1, sortKey, sortVal);
  }

  /**
   * Page changed on client question list
   * @param event
   */
  onClientQuestionsListPageChange(event: any) {
    this.pageSize = event.pageSize;
    this.getClientQuestionsList(event.pageIndex + 1, this.clientQuestionSortBy,
      this.clientQuestionSortOrder);
  }

  /**
   * Reset both filter forms and get default client question list
   */
  resetQuestionFilterForm() {
    this.createQuestionAdvancedFilterForm();
    this.likeJSON = {};
    this.equalJSON = {};
    this.getClientQuestionsList(1);
  }

  /**
   * Getting sorted clientChecklistList based on sortKey and sortOrder.
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortClientChecklistData(sortKey: string, sortVal: string) {
    this.clientChecklistSortBy = sortKey;
    this.clientChecklistSortOrder = sortVal;
    const sortedArray = this.clientChecklistList.sort((objOne, objTwo) => {
      if (objOne[sortKey] > objTwo[sortKey]) {
        return 1;
      }
      if (objOne[sortKey] < objTwo[sortKey]) {
        return -1;
      }
      return 0;
    });

    if (sortVal === 'asc') {
      this.clientChecklistList = sortedArray;
    } else {
      this.clientChecklistList = sortedArray.reverse();
    }
  }

  handleAddUpdateChecklistResponse() {
    this.getClientChecklist();
    const id = this.clientChecklistList[0].id;
    this.getQuestionViewList(id);
  }

  /**
   * Event on Changing checklist status -> return updated checklistArray
   * @param id
   * @param {MatSelectChange} event
   */
  onChangeChecklistStatus(id, event: MatSelectChange) {
    const updatedStatus = +(event.value);
    const params = {checklist_id: id, status: updatedStatus};
    const index = this.checklistArray.findIndex((checklist) => (checklist['checklist_id'] === id));
    this.checklistArray[index] = params;
    this.isUpdateDisable = false;
  }

  /**
   * Toogle Filter
   */
  onOpenFilter() {
    this.isFilterView = !this.isFilterView;
  }

  /**
   * Close filter
   */
  onCloseFilter() {
    this.isFilterView = false;
  }


// Angular helpers
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isFilterView = false;
    }
  }

// Helpers
  /**
   * get function for returning pageNumber and page size at time of client question listing api
   * @param {number} page
   * @param {string} sortKey
   * @param {string} sortOrder
   * @returns {{pageNumber: number; recordsPerPage: any}}
   */
  private getClientQuestionsQueryParams(page: number, sortKey?: string, sortOrder?: string) {
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params ['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params ['sortOrder'] = sortOrder;
    }
    return params;
  }

  /**
   * get function for returning advance search params for client question get api
   * @returns {{}}
   */
  private getClientQuestionSearchParams() {
    const params = {};
    const filter = {};
    // check for the object whether it's empty or not
    if (Object.keys(this.equalJSON).length !== 0) {
      filter['equal'] = this.equalJSON;
    }
    if (Object.keys(this.likeJSON).length !== 0) {
      filter['like'] = this.likeJSON;
    }
    if ((Object.keys(this.equalJSON).length) || (Object.keys(this.likeJSON).length)) {
      params['compare'] = filter;
    }
    return params;
  }

  /**
   * return search params for question view list
   * @param {number} id
   * @returns {{compare: {equal: {entity_checklist_id: number}}}}
   */
  private getQuestionViewSearchParams(id: number) {
    return {
      compare: {
        equal: {
          entity_checklist_id: id
        }
      }
    };
  }

  /**
   * return searchParams for client checklist get API
   * @returns {{}}
   */
  private getSearchParam() {
    const params = {};
    const filter = {};
    const filterData = {
      is_applicable: 1
    };
    filter['equal'] = filterData;
    params['compare'] = filter;
    return params;
  }
}
