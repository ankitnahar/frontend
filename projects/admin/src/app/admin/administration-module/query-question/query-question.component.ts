import {Component, HostListener, OnInit} from '@angular/core';
import {activeInactive, BASE} from '../../../../utility/constants/base-constants';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, PageEvent} from '@angular/material';
import {AdminRoutes} from '../../../../utility/constants/admin-route';
import {ConfirmationDialogComponent} from '../../../../utility/components/confirmation-dialog/confirmation-dialog.component';
import {AddQueryQuestionDialogComponent} from './add-query-question-dialog/add-query-question-dialog.component';
import {CommonCrudService} from '../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../utility/constants/api';
import {CommonFunctions} from '../../../../utility/common-functions';
import {QueryQuestion} from "../../client-module/query-module/query-dashboard-tab/query.model";

@Component({
  selector: 'app-quote-question',
  templateUrl: './query-question.component.html',
  styleUrls: ['./query-question.component.scss']
})
export class QueryQuestionComponent implements OnInit {

  // Listing
  queryQuestionList: QueryQuestion[] = [];
  activeInactiveList = activeInactive.slice(1);

  // Cosntant Variables
  filterForm: FormGroup;
  advanceFilterForm: FormGroup;

  equalJSON = {};
  likeJSON = {};
  inJSON = {};
  findInSetJSON = {};
  orJSON = {};

  // Sorting Params
  sortBy: string;
  sortOrder: string;

  // pagination Data
  pageArray = BASE.PAGINATION_ARRAY;
  pageSize = BASE.PAGINATION_ARRAY[1];
  page: number;
  pageIndex: number;
  totalRecords: number;

  // Mat Paginator Output
  pageEvent: PageEvent;

  // Other Variables
  isOpenFilter = false;

  constructor(private _router: Router,
              private _fb: FormBuilder,
              public dialog: MatDialog,
              private _commonCrudService: CommonCrudService) {
  }

  get queryName(): AbstractControl {
    return this.filterForm.get('question_name');
  }

  get isActive(): AbstractControl {
    return this.filterForm.get('is_active');
  }

  ngOnInit() {
    this.initializationMethod();
  }

  initializationMethod() {
    this.createAdvanceFilterForm();
    this.getQueryQuestion(1, 'id', 'desc');
    // this.yesNoControl = this.yesNoControl.splice(1, 2);
  }

  createAdvanceFilterForm() {
    this.filterForm = this._fb.group({
      question_name: new FormControl(null),
      is_active: new FormControl(null)
    });

    this.advanceFilterForm = this._fb.group({
      question_name: new FormControl(null),
      is_active: new FormControl(null)
    });
  }

  getQueryQuestion(pageNumber: number, key?: string, val?: string) {
    this._commonCrudService.listData(AdminAPI.QUERY_QUESTION_LIST, this.getQueryParams(pageNumber, key, val),
      this.getSearchParam())
      .subscribe((response) => {
        this.handleResponse(response);
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
    const params = {
      pageNumber: page,
      recordsPerPage: this.pageSize
    };
    if (sortKey) {
      params['sortBy'] = sortKey;
    }
    if (sortOrder) {
      params['sortOrder'] = sortOrder;
    }
    return params;
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

    if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !CommonFunctions.isEmpty(filter)) {
      params['compare'] = filter;
    }

    return params;
  }

  /**
   * Handle AM Notes List Response
   * @param response
   */
  handleResponse(response: any) {
    this.queryQuestionList = response.payload.data;
    this.page = response.pager.pageNumber;
    this.pageIndex = this.page - 1;
    this.totalRecords = +response.pager.totalRecords;
    this.sortBy = response.pager.sortBy;
    this.sortOrder = response.pager.sortOrder;
  }

  onToggleFilter() {
    this.isOpenFilter = !this.isOpenFilter;
  }

  resetForm() {
    this.equalJSON = {};
    this.likeJSON = {};
    this.isOpenFilter = false;
    this.createAdvanceFilterForm();
    this.getQueryQuestion(1, 'id', 'desc');
  }

  /**
   * On Add Question
   * @param questionDetail
   */
  onAddQueryQuestionDialog(questionDetail?: QueryQuestion) {
    const dialogRef = this.dialog.open(AddQueryQuestionDialogComponent, {
      panelClass: 'add-form-dialog-container',
      data: {
        queryQuestionData: (questionDetail) ? questionDetail : []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getQueryQuestion(1, 'id', 'desc');
      }
    });
  }

  onConfirmationDialogDeleteQuestion() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to delete this question ?'
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  onConfirmationActiveInactiveDialog(questionDetail: QueryQuestion) {
    const status = questionDetail.is_active === 1 ? 'inactive' : 'active';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: 'Are you sure you want to ' + status + ' this question?'
      }
    });

    dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        const is_active = questionDetail.is_active === 1 ? 0 : 1;
        this._commonCrudService.updateData(AdminAPI.QUERY_QUESTION_UPDATE, questionDetail.id, {
          'is_active': is_active,
          '_method': 'put'
        }).subscribe(Response => {
          if (Response) {
            this.getQueryQuestion(1, 'id', 'desc');
          }
        });
      } else {
        this.getQueryQuestion(1, 'id', 'desc');
      }
    });
  }

  onGoDashboard() {
    this._router.navigate(['/' + AdminRoutes.ADMIN_NEW_HRMS]);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.isOpenFilter = false;
    }
  }

  /**
   * Get Sort Data
   * @param {string} sortKey
   * @param {string} sortVal
   */
  getSortData(sortKey: string, sortVal: string) {
    this.getQueryQuestion(1, sortKey, sortVal);
  }

  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.getQueryQuestion(event.pageIndex + 1, this.sortBy, this.sortOrder);
  }

  /**
   * Set Advance Filter
   * @param {FormGroup} form
   * @param {boolean} flag
   */
  setAdvanceFilter(form: FormGroup, flag: boolean = true) {
    this.equalJSON = {};
    this.likeJSON = {};
    // removing empty key from object
    for (const key in form.value) {
      if (form.value.hasOwnProperty(key)) {
        if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
          delete form.value[key];
        } else {
          if (flag) {
            this.advanceFilterForm.get(key).setValue(form.value[key]);
          }
        }
      }
    }

    if (form.valid && (form.value !== {})) {
      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          if (key === 'is_active') {
            this.equalJSON[key] = form.value[key];
          } else if (key === 'question_name') {
            this.likeJSON[key] = form.value[key];
          }
        }
        this.isOpenFilter = false;
        this.getQueryQuestion(1, 'id', 'desc');
      }
    }
  }

  /**
   * Advance Filter Key Up function
   * @param event
   * @param formValue
   * @param {boolean} isValid
   * @param {boolean} flag
   */
  setAdvanceFilterKeyUp(event, form: FormGroup, flag: boolean) {
    let processToReq = false;
    if (flag) {
      processToReq = true;
    } else {
      if (event.keyCode === 13) {
        processToReq = true;
      }
    }
    if (processToReq) {
      this.filterForm.setValue(
        {
          'question_name': (form.value['question_name']) ? form.value['question_name'] : null,
          'is_active': (form.value['is_active']) ? form.value['is_active'] : null
        });
      this.setAdvanceFilter(form, false);
    }
  }

  /**
   * Delete Form Element
   * @param {string} elementName
   * @param {string} JsonElementName
   */
  onClearTag(elementName: string, JsonElementName?: string) {
    this.filterForm.get(elementName).setValue(null);
    this.advanceFilterForm.get(elementName).setValue(null);
    if (elementName === 'is_active') {
      delete this.equalJSON[elementName];
    } else if (elementName === 'question_name') {
      delete this.likeJSON[elementName];
    }
    this.getQueryQuestion(1, 'id', 'desc');
  }

  /**
   * Export to Excel
   */
  downloadExcel() {
    const params = {'excel': 1, 'records': 'all'};
    this._commonCrudService.downloadExcelData(AdminAPI.QUERY_QUESTION_EXPORT, params, this.getSearchParam(), 'Query question - ', 0).subscribe(response => {
    });
  }
}
