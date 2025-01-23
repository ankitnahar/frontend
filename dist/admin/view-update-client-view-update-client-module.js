(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-update-client-view-update-client-module"],{

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-worksheet-container\">\r\n  <div class=\"with-filter-grid-container\">\r\n\r\n    <!--Start add Trigger form-->\r\n    <form [formGroup]=\"addAutoWorksheetForm\" class=\"col-md-12\" (submit)=\"SubmitForm(addAutoWorksheetForm)\">\r\n\r\n      <div class=\"with-filter-grid-container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div *ngFor=\"let filterGroup of getworksheetSechduleArray().controls; let i=index;\">\r\n              <span class=\"panel-title ML-0\">{{filterGroup.value['sectionTitle']}}</span>\r\n              <!-- Start Table -->\r\n              <div class=\"table-container\">\r\n                <div class=\"table-block scrollable-grid\">\r\n                  <table>\r\n                    <thead>\r\n                    <tr>\r\n                      <th width=\"15%\">Master activity</th>\r\n                      <th width=\"15%\">Task</th>\r\n                      <th width=\"15%\">Start Date/End Date</th>\r\n                      <th width=\"15%\">Frequency</th>\r\n                      <th width=\"15%\">Due Date</th>\r\n                      <th width=\"15%\">Notes</th>\r\n                      <th width=\"10%\">Create Now?</th>\r\n                    </tr>\r\n                    </thead>\r\n                  </table>\r\n                  <div class=\"table-body\">\r\n                    <table>\r\n                      <tbody>\r\n                      <tr *ngFor=\"let autoworksheetschedule of getFilterFieldArrayData(i).controls; let j = index;\">\r\n                        <td width=\"15%\" class=\"{{j}}\">{{autoworksheetschedule.get('master_name').value}}</td>\r\n                        <td width=\"15%\">{{autoworksheetschedule.get('task_name').value}}</td>\r\n                        <td width=\"15%\">\r\n                          <mat-form-field>\r\n                            <input matInput [matDatepicker]=\"startdate\" placeholder=\"Start Date\"\r\n                                   [formControl]=\"autoworksheetschedule.get('start_date')\" [disableControl]=\"true\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"startdate\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #startdate></mat-datepicker>\r\n                          </mat-form-field>\r\n                          <mat-form-field>\r\n                            <input matInput [matDatepicker]=\"enddate\" placeholder=\"End Date\"\r\n                                   [formControl]=\"autoworksheetschedule.get('end_date')\" [disableControl]=\"true\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"enddate\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #enddate></mat-datepicker>\r\n                          </mat-form-field>\r\n                        </td>\r\n                        <td width=\"15%\">\r\n                          <mat-form-field class=\"grid_select_8rem\" floatLabel=\"never\">\r\n                            <mat-select placeholder=\"Select Frequency\"\r\n                                        (selectionChange)=\"getFreqValue($event.value, i, j)\"\r\n                                        [formControl]=\"autoworksheetschedule.get('frequency_id')\" [disableControl]=\"true\">\r\n                              <mat-option *ngFor=\"let frList of frequencyList\" [value]=\"frList?.id\">\r\n                                {{ frList?.frequency_name}}\r\n                              </mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                          <mat-form-field\r\n                            *ngIf=\"autoworksheetschedule.get('frequency_id').value === 1 || autoworksheetschedule.get('frequency_id').value === 2 || autoworksheetschedule.get('frequency_id').value === 6 || autoworksheetschedule.get('frequency_id').value === 9\">\r\n                            <!-- formControlName=\"frequency_id\" placeholder=\"Frequency\" required (change)=\"getFreqValue($event)\" -->\r\n                            <mat-select [formControl]=\"autoworksheetschedule.get('expert_day')\" placeholder=\"Day\"\r\n                                        [multiple]=\"false\" [disableControl]=\"true\">\r\n                              <mat-option *ngFor=\"let data of dayData;\" [value]=\"data\">{{data}}</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n\r\n                          <mat-form-field\r\n                            *ngIf=\"autoworksheetschedule.get('frequency_id').value === 4 || autoworksheetschedule.get('frequency_id').value === 5\">\r\n                            <mat-select [formControl]=\"autoworksheetschedule.get('expert_month')\" placeholder=\"Month\"\r\n                                        [multiple]=\"false\" [disableControl]=\"true\">\r\n                              <mat-option *ngFor=\"let data of monthData;\" [value]=\"data\">{{data}}</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n\r\n                          <mat-form-field *ngIf=\"autoworksheetschedule.get('frequency_id').value === 10\">\r\n                            <mat-select [formControl]=\"autoworksheetschedule.get('expert_day')\" placeholder=\"Day\"\r\n                                        [multiple]=\"true\" [disableControl]=\"true\">\r\n                              <mat-option *ngFor=\"let data of dayData;\" [value]=\"data\">{{data}}</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n\r\n                          <mat-form-field *ngIf=\"autoworksheetschedule.get('frequency_id').value === 3\">\r\n                            <mat-select [formControl]=\"autoworksheetschedule.get('expert_month')\" placeholder=\"Month\"\r\n                                        [multiple]=\"true\" [disableControl]=\"true\">\r\n                              <mat-option *ngFor=\"let data of monthData;\" [value]=\"data\">{{data}}</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                        </td>\r\n                        <td width=\"15%\">\r\n                          <mat-form-field class=\"grid_select_8rem\" floatLabel=\"never\">\r\n                            <mat-select placeholder=\"Select Due Date\"\r\n                                        [value]=\"autoworksheetschedule.get('due_date_type').value\"\r\n                                        (selectionChange)=\"onChangeDueDate($event.value,i, j)\"\r\n                                        [formControl]=\"autoworksheetschedule.get('due_date_type')\" [disableControl]=\"true\">\r\n                              <mat-option [value]=\"1\">After Days</mat-option>\r\n                              <mat-option [value]=\"2\">On Date of month</mat-option>\r\n                              <mat-option [value]=\"3\">On Particular Date</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                          <mat-form-field *ngIf=\"autoworksheetschedule.get('due_date_type').value === 1\">\r\n                            <input matInput type=\"number\" [formControl]=\"autoworksheetschedule.get('due_after_day')\"\r\n                                   placeholder=\"After days\" [disableControl]=\"true\">\r\n                          </mat-form-field>\r\n                          <mat-form-field *ngIf=\"autoworksheetschedule.get('due_date_type').value === 2\">\r\n                            <mat-select [formControl]=\"autoworksheetschedule.get('due_month_day')\"\r\n                                        placeholder=\"On Date of Month\" [disableControl]=\"true\">\r\n                              <mat-option *ngFor=\"let data of dateData.slice(1)\" [value]=\"data\">{{data}}</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                          <mat-form-field *ngIf=\"autoworksheetschedule.get('due_date_type').value === 3\">\r\n                            <input [formControl]=\"autoworksheetschedule.get('due_on_particular_date')\" matInput\r\n                                   [matDatepicker]=\"particularDate\"\r\n                                   placeholder=\"Date\" [disableControl]=\"true\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"particularDate\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #particularDate></mat-datepicker>\r\n                          </mat-form-field>\r\n                        </td>\r\n                        <td width=\"15%\">\r\n                          <mat-form-field>\r\n                            <textarea [formControl]=\"autoworksheetschedule.get('notes')\" matInput autocomplete=\"off\" placeholder=\"Notes\" [disableControl]=\"true\"></textarea>\r\n                          </mat-form-field>\r\n                        </td>\r\n                        <td width=\"10%\">\r\n                          <mat-checkbox (change)=\"checkGenerate($event.checked,i, j)\"\r\n                                        [disabled]=\"true\"></mat-checkbox>\r\n                        </td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                  <table *ngIf=\"autoWorksheetScheduleList.length\">\r\n                    <tfoot>\r\n                    <tr>\r\n                    </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- End Table -->\r\n      </div>\r\n      <!--End Auto worksheet form-->\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctYXV0by13b3Jrc2hlZXQvdmlldy1hdXRvLXdvcmtzaGVldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ViewAutoWorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAutoWorksheetComponent", function() { return ViewAutoWorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewAutoWorksheetComponent = /** @class */ (function () {
    function ViewAutoWorksheetComponent(cdRef, _fb, _commonCrudService, _sharedService, _router, _sharedObjService) {
        this.cdRef = cdRef;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._router = _router;
        this._sharedObjService = _sharedObjService;
        // Data Variables
        this.autoWorksheetScheduleList = [];
        this.frequencyList = [];
        this.clientData = null;
        this.generateNowEnabled = 0;
        this.dateData = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
        ];
        this.monthData = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.dayData = [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ];
    }
    ViewAutoWorksheetComponent.prototype.ngOnInit = function () {
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_6__["GLOBALDATAKEYS"].CLIENT);
        this.getFrequency();
        this.getPendingWorksheetSchedule();
        this.createAddAutoWorksheetForm();
    };
    ViewAutoWorksheetComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    ViewAutoWorksheetComponent.prototype.getPendingWorksheetSchedule = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].PENDING_WORKSHEET_DATA + '/' + this.clientData.id, {}, {}).subscribe(function (response) {
            _this.autoWorksheetScheduleList = response.payload.data;
            var itemDataValues = Object.entries(_this.autoWorksheetScheduleList);
            if (itemDataValues) {
                var i_1 = 0;
                itemDataValues.forEach(function (key) {
                    var dataItem = {};
                    dataItem['sectionTitle'] = key[0];
                    // console.log(key[1]);
                    _this.getworksheetSechduleArray().push(_this.initSection(dataItem));
                    dataItem['sectionData'] = key[1];
                    var subData = itemDataValues[i_1][1];
                    dataItem['sectionData'].forEach(function (item) {
                        _this.getFilterFieldArrayData(i_1).push(_this.createItem(item));
                    });
                    i_1++;
                });
            }
        });
    };
    /**
     * Create Add Auto Worksheet Form
     */
    ViewAutoWorksheetComponent.prototype.createAddAutoWorksheetForm = function () {
        this.addAutoWorksheetForm = this._fb.group({
            worksheet_sechdule: this._fb.array([]),
        });
    };
    /**
     * Create Subactivity Group Form
     */
    ViewAutoWorksheetComponent.prototype.initSection = function (item) {
        return this._fb.group({
            sectionTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['sectionTitle'] : ''),
            sectionData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
    };
    ViewAutoWorksheetComponent.prototype.createItem = function (item) {
        return this._fb.group({
            master_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['master_name'] : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            task_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['task_name'] : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['id'] : 0),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['master_id'] : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['entity_id'] : null),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['tk_id'] : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['start_date'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['end_date'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['frequency_id'] : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            expert_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((item && item['expert_day'] != null) ? item['frequency_id'] === 10 ? item['expert_day'].split(',') : item['expert_day'] : null),
            expert_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((item && item['expert_month'] != null) ? item['frequency_id'] === 3 ? item['expert_month'].split(',') : item['expert_month'] : null),
            due_date_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? Number(item['due_date_type']) : null),
            due_after_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['due_after_day'] : null),
            due_month_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['due_month_day'] : null),
            due_on_particular_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['due_on_particular_date'] : null),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['notes'] : null),
            is_display_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item ? item['is_display_schedule'] : null),
            generate_now: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item && item['generate_now'] > 0 ? item['generate_now'] : 0)
        });
    };
    /**
     * Get Freq Value
     * @param value
     * @param index
     */
    ViewAutoWorksheetComponent.prototype.getFreqValue = function (value, index, subIndex) {
        this.getFilterFieldArrayData(index).controls[index].get('expert_month').setValue([]);
        this.getFilterFieldArrayData(index).controls[index].get('expert_day').setValue([]);
    };
    /**
     * On change due date
     * @param event
     */
    ViewAutoWorksheetComponent.prototype.onChangeDueDate = function (event, index, subIndex) {
        if (event) {
            var dataItem = Number(this.getFilterFieldArrayData(index).controls[subIndex].get('due_date_type').value);
            // console.log(dataItem);
            this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').setValidators(null);
            this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').setValidators(null);
            this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').setValidators(null);
            this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').updateValueAndValidity();
            this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').updateValueAndValidity();
            this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').updateValueAndValidity();
            if (dataItem === 1) {
                this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.getFilterFieldArrayData(index).controls[subIndex].get('due_after_day').updateValueAndValidity();
            }
            else if (dataItem === 2) {
                this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.getFilterFieldArrayData(index).controls[subIndex].get('due_month_day').updateValueAndValidity();
            }
            else if (dataItem === 3) {
                this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                this.getFilterFieldArrayData(index).controls[subIndex].get('due_on_particular_date').updateValueAndValidity();
            }
        }
    };
    /**
     * Get Worksheet Schedule Array
     */
    ViewAutoWorksheetComponent.prototype.getworksheetSechduleArray = function () {
        return this.addAutoWorksheetForm.get('worksheet_sechdule');
    };
    /**
     * Get Filter Field Array
     */
    ViewAutoWorksheetComponent.prototype.getFilterFieldArrayData = function (i) {
        return this.getworksheetSechduleArray().controls[i].get('sectionData');
    };
    /**
     * Get Frequency List
     */
    ViewAutoWorksheetComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].FREQUENCY, {
            'sortBy': 'sort_order',
            'sortOrder': 'asc',
        }, { 'compare': { 'equal': { 'is_active': 1, 'show_in_worksheet': 1 } } }).subscribe(function (response) {
            // 'show_in_worksheet': 1
            if (response) {
                _this.frequencyList = response.payload.data;
                _this.frequencyList.sort(function (a, b) {
                    return a.sort_order - b.sort_order;
                });
            }
        });
    };
    /**
     *
     * @param form
     * @constructor
     */
    ViewAutoWorksheetComponent.prototype.SubmitForm = function (form) {
        var _this = this;
        var param = {};
        var dataItem = this.addAutoWorksheetForm.get('worksheet_sechdule').value;
        // console.log(dataItem);
        if (dataItem) {
            dataItem.forEach(function (key) {
                if (key['sectionData'].length) {
                    key['sectionData'].forEach(function (item) {
                        // console.log(item);
                        item['start_date'] = (item['start_date'] && item['start_date'] !== '') ? moment__WEBPACK_IMPORTED_MODULE_8__(item['start_date']).format('YYYY-MM-DD') : '';
                        item['end_date'] = (item['end_date'] && item['end_date'] !== '') ? moment__WEBPACK_IMPORTED_MODULE_8__(item['end_date']).format('YYYY-MM-DD') : '';
                        item['expert_day'] = (item['expert_day'] && item["expert_day"] !== "" && item['expert_day'].length) ? Array.isArray(item['expert_day']) ? item['expert_day'].join(',') : item['expert_day'] : item['expert_day'];
                        item['expert_month'] = (item['expert_month'] && item["expert_month"] !== "" && item['expert_month'].length) ? Array.isArray(item['expert_month']) ? item['expert_month'].join(',') : item['expert_month'] : item['expert_month'];
                    });
                }
            });
        }
        param['worksheet_sechdule'] = JSON.stringify(dataItem);
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].PENDING_WORKSHEET_DATA_ADD + '/' + this.clientData.id, param).subscribe(function (response) {
            _this.getPendingWorksheetSchedule();
            _this.createAddAutoWorksheetForm();
            _this.onClient();
        });
    };
    /**
     * Check Generate Button
     * @param value
     * @param index
     */
    ViewAutoWorksheetComponent.prototype.checkGenerate = function (value, index, subIndex) {
        var _this = this;
        if (value) {
            this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').setValue(1);
            this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').updateValueAndValidity();
        }
        else {
            this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').setValue(0);
            this.getFilterFieldArrayData(index).controls[subIndex].get('generate_now').updateValueAndValidity();
        }
        this.generateNowEnabled = 0;
        this.getFilterFieldArrayData(index).controls.forEach(function (item) {
            if (item.get('generate_now').value > 0) {
                _this.generateNowEnabled++;
            }
        });
    };
    /**
     * On view client page redirect
     */
    ViewAutoWorksheetComponent.prototype.onClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].VIEW_CLIENT]);
    };
    ViewAutoWorksheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-auto-worksheet',
            template: __webpack_require__(/*! ./view-auto-worksheet.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.html"),
            styles: [__webpack_require__(/*! ./view-auto-worksheet.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_5__["SharedObjService"]])
    ], ViewAutoWorksheetComponent);
    return ViewAutoWorksheetComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bank-information-container\">\r\n  <div class=\"with-filter-grid-container\">\r\n    <div class=\"grid-inner-header PT-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 leave-type-list\">\r\n          <ul>\r\n            <li class=\"PL-0\">\r\n              <a class=\"red-color list-alignment\">\r\n                <i class=\"material-icons\">fiber_manual_record</i> Inactive bank</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"expand-grid\">\r\n      <div class=\"expand-grid__thead\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"15%\"\r\n                (click)=\"getSortData('bank_name', sortBy === 'bank_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Bank\r\n              <i *ngIf=\"sortBy === 'bank_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'bank_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'bank_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'bank_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('type_name', sortBy === 'type_name' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              A/C type\r\n              <i *ngIf=\"sortBy === 'type_name'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'type_name' && sortOrder === 'asc', 'icon-down' :  sortBy === 'type_name' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'type_name' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"15%\"\r\n                (click)=\"getSortData('is_bank_or_credit_card', sortBy === 'is_bank_or_credit_card' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Bank/CC/Paypal AC\r\n              <i *ngIf=\"sortBy === 'is_bank_or_credit_card'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'is_bank_or_credit_card' && sortOrder === 'asc', 'icon-down' :  sortBy === 'is_bank_or_credit_card' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'is_bank_or_credit_card' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"15%\"\r\n                (click)=\"getSortData('account_no', sortBy === 'account_no' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Account No\r\n              <i *ngIf=\"sortBy === 'account_no'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'account_no' && sortOrder === 'asc', 'icon-down' :  sortBy === 'account_no' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'account_no' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('bank_link', sortBy === 'bank_link' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Bank link?\r\n              <i *ngIf=\"sortBy === 'bank_link'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'bank_link' && sortOrder === 'asc', 'icon-down' :  sortBy === 'bank_link' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'bank_link' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('viewing_rights', sortBy === 'viewing_rights' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Viewing rights?\r\n              <i *ngIf=\"sortBy === 'viewing_rights'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'viewing_rights' && sortOrder === 'asc', 'icon-down' :  sortBy === 'viewing_rights' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'viewing_rights' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\"\r\n                (click)=\"getSortData('auto_feed_up', sortBy === 'auto_feed_up' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Auto Feed?\r\n              <i *ngIf=\"sortBy === 'auto_feed_up'\"\r\n                 [ngClass]=\"{'material-icons': true, 'icon-up' : sortBy === 'auto_feed_up' && sortOrder === 'asc', 'icon-down' :  sortBy === 'auto_feed_up' && sortOrder === 'desc'}\">\r\n                {{sortBy === 'auto_feed_up' ? (sortOrder === 'asc' ? 'arrow_upward':'arrow_downward') : ''}}\r\n              </i>\r\n            </th>\r\n            <th width=\"10%\">Modified By</th>\r\n          </thead>\r\n        </table>\r\n      </div>\r\n      <div class=\"expand-grid__tbody expand-grid-scrollable\">\r\n        <table>\r\n          <tbody *ngFor=\"let bankInformation of bankInformationList; let i = index\"\r\n                 [ngClass]=\"{'red-tr' : bankInformation.is_active === 0}\">\r\n          <tr [ngClass]=\"{'is-active-row' : trIndex === i}\" class=\"hover-icons row-data\">\r\n            <td width=\"5%\">\r\n              <a class=\"open-inner-data\" (click)=\"openRow(i)\"><i [ngClass]=\"{'is-open' : trIndex === i}\"\r\n                                                                 class=\"material-icons\">keyboard_arrow_down</i></a>\r\n              {{i+1}}\r\n            </td>\r\n            <td width=\"15%\" class=\"word-break\">{{bankInformation?.bank_id?.bank_name}}</td>\r\n            <td width=\"10%\" class=\"word-break\">{{bankInformation?.type_id?.type_name}}</td>\r\n            <td width=\"15%\" class=\"word-break\">{{bankInformation?.is_bank_or_credit_card > 0 ?\r\n              getBankAccountDataType(bankInformation?.is_bank_or_credit_card) : ''}}\r\n            </td>\r\n            <td width=\"15%\" class=\"word-break\">{{bankInformation?.account_no}}</td>\r\n            <td width=\"10%\">{{bankInformation?.bank_link !== '' ? getBankLinkDataType(bankInformation?.bank_link) :\r\n              ''}}\r\n            </td>\r\n            <td width=\"10%\">{{bankInformation?.viewing_rights !== '' ?\r\n              getBankLinkDataType(bankInformation?.viewing_rights) : ''}}\r\n            </td>\r\n            <td width=\"10%\">{{bankInformation?.auto_feed_up !== '' ? getBankLinkDataType(bankInformation?.auto_feed_up)\r\n              :\r\n              ''}}\r\n            </td>\r\n            <td width=\"10%\">{{bankInformation?.created_by?.created_by}}\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"trIndex === i\" class=\"inner-data\">\r\n            <div class=\"row PT-10\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>BSB No</div>\r\n                  <div>{{bankInformation?.bsb_notes}}</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Notes</div>\r\n                  <div>{{bankInformation?.notes}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row PT-10\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"inner-data__view\">\r\n                  <div>Follow up notes</div>\r\n                  <div>{{bankInformation?.follow_up_notes}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"expand-grid__tfoot\">\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\"\r\n                             [pageSize]=\"pageSize\"\r\n                             [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\"\r\n                             (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!--end bank information grid-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctYmFuay1pbmZvcm1hdGlvbi92aWV3LWJhbmstaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: Views, ViewBankInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBankInformationComponent", function() { return ViewBankInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_service_apimanager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/apimanager.service */ "./src/utility/shared-service/apimanager.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Views;
(function (Views) {
    Views[Views["ADD_MORE_BANK"] = 0] = "ADD_MORE_BANK";
    Views[Views["ADD_MORE_BANK_ACCOUNT_TYPE"] = 1] = "ADD_MORE_BANK_ACCOUNT_TYPE";
})(Views || (Views = {}));
var ViewBankInformationComponent = /** @class */ (function (_super) {
    __extends(ViewBankInformationComponent, _super);
    function ViewBankInformationComponent(_fb, _apiManager, _router, _sharedService, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._apiManager = _apiManager;
        _this._router = _router;
        _this._sharedService = _sharedService;
        _this._commonCrudService = _commonCrudService;
        _this.panelOpenState = false;
        _this.isOpenHistoryDialog = false;
        // Constant Variables
        _this.enumView = Views;
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_2__["ValidationConstantMessage"]();
        // Data Variables
        _this.bankInformationList = [];
        _this.bankInformationObject = [];
        _this.bankListFilter = [];
        _this.bankTypeListFilter = [];
        _this.bankViewFeed = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["yesNoNa"];
        _this.bankAccounts = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BankCcPaypalAccount"];
        _this.equalJSON = {};
        _this.likeJSON = {};
        _this.inJSON = {};
        // pagination Data
        _this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY;
        _this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["BASE"].PAGINATION_ARRAY[1];
        // State variables
        _this.trIndex = -1;
        return _this;
    }
    ViewBankInformationComponent.prototype.ngOnInit = function () {
        this.initializationMethod();
    };
    /**
     * Initialization Methods
     */
    ViewBankInformationComponent.prototype.initializationMethod = function () {
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].CLIENT);
        this.getBankInformationList(1);
        this.getBankListFilter();
        this.getBankTypeListFilter();
    };
    /**
     * Get Bank filter listing API
     */
    ViewBankInformationComponent.prototype.getBankListFilter = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].BANK_LIST, { 'records': 'all' }).subscribe(function (Response) {
            _this.handleBankListFilterResponse(Response);
        });
    };
    /**
     * Get Bank type filter listing API
     */
    ViewBankInformationComponent.prototype.getBankTypeListFilter = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].BANK_TYPE_LIST, { 'records': 'all' }).subscribe(function (Response) {
            _this.handleBankTypeListFilterResponse(Response);
        });
    };
    /**
     * Bank Information listing API
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    ViewBankInformationComponent.prototype.getBankInformationList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].BANK_INFORMATION_LIST + '/' + this.clientData.id, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (Response) {
            _this.handleBankInformationResponse(Response);
        });
    };
    /**
     * Handle Bank Information Response
     * @param response
     */
    ViewBankInformationComponent.prototype.handleBankInformationResponse = function (response) {
        this.bankInformationList = response.payload.data;
        this.page = response.pager.pageNumber;
        this.pageIndex = this.page - 1;
        this.totalRecords = +response.pager.totalRecords;
        this.sortBy = response.pager.sortBy;
        this.sortOrder = response.pager.sortOrder;
    };
    /**
     * Handle Bank List Filter Response
     * @param response
     */
    ViewBankInformationComponent.prototype.handleBankListFilterResponse = function (response) {
        // assign data to array
        this.bankListFilter = response.payload.data;
    };
    /**
     * Handle Bank Type List Filter Response
     * @param response
     */
    ViewBankInformationComponent.prototype.handleBankTypeListFilterResponse = function (response) {
        // assign data to array
        this.bankTypeListFilter = response.payload.data;
    };
    // Events
    /**
     * Open Bank & Bank Account Type Popup
     * @param dialogName
     */
    ViewBankInformationComponent.prototype.onOpenModal = function (dialogName) {
        switch (dialogName) {
            case 'add-bank':
                this.activeView = this.enumView.ADD_MORE_BANK;
                break;
            case 'add-bank-account-type':
                this.activeView = this.enumView.ADD_MORE_BANK_ACCOUNT_TYPE;
                break;
        }
    };
    /**
     * On Close of Popup
     * Close modal method
     * @param event
     */
    ViewBankInformationComponent.prototype.onCloseDialog = function (event) {
        this.activeView = event;
    };
    /**
     * On Show/Click of Row details page
     * @param i
     */
    ViewBankInformationComponent.prototype.openRow = function (i) {
        this.trIndex = (this.trIndex !== i) ? i : -1;
    };
    /**
     * Esc event for close modal
     * @param event
     */
    ViewBankInformationComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.activeView = null;
        }
    };
    // Events
    /**
     * On Page Change event for grid list
     * @param event
     */
    ViewBankInformationComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getBankInformationList(event.pageIndex + 1);
    };
    /**
     * Display Bank Link / View Right / Auto Feed
     * @param {number} bankLinkType
     * @returns {string}
     */
    ViewBankInformationComponent.prototype.getBankLinkDataType = function (bankLinkType) {
        // return this.bankViewFeed.filter(elem => elem.key === bankLinkType)[0].label;
        var val = this.bankViewFeed.filter(function (elem) { return elem.key === bankLinkType; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * Display Bank Account Type
     * @param {number} bankAccountType
     * @returns {string}
     */
    ViewBankInformationComponent.prototype.getBankAccountDataType = function (bankAccountType) {
        // return this.bankAccounts.filter(elem => elem.key === bankAccountType)[0].label;
        var val = this.bankAccounts.filter(function (elem) { return elem.key === bankAccountType; });
        return (val.length) ? val[0].label : '';
    };
    /**
     * close And Reset from Bank Information Add / Edit Form
     * @param event
     */
    ViewBankInformationComponent.prototype.closeAndReset = function (event) {
        this.panelOpenState = false;
    };
    /**
     * On Bank Information Click Collapse change open panel state value true or false
     * @param event
     */
    ViewBankInformationComponent.prototype.changeOpenPanelState = function (event) {
        if (!this.panelOpenState) {
            this.panelOpenState = true;
        }
        else if (this.panelOpenState) {
            this.panelOpenState = false;
        }
    };
    /**
     * Stop to expand details on Edit & Active Switch button
     * @param event
     */
    ViewBankInformationComponent.prototype.stopToCallDetails = function (event) {
        event.stopPropagation();
    };
    // helper
    /**
     * get function for returning pageNumber and page size at time of listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{}}
     */
    ViewBankInformationComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
        var params = {};
        params = {
            pageNumber: page,
            recordsPerPage: this.pageSize
        };
        sortKey ? params['sortBy'] = sortKey : '';
        sortOrder ? params['sortOrder'] = sortOrder : '';
        return params;
    };
    /**
     * Get Sort Data
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ViewBankInformationComponent.prototype.getSortData = function (sortKey, sortVal) {
        this.getBankInformationList(1, sortKey, sortVal);
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    ViewBankInformationComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addEditBankForm'),
        __metadata("design:type", Object)
    ], ViewBankInformationComponent.prototype, "addEditBankForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewBankInformationComponent.prototype, "onKeydownHandler", null);
    ViewBankInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-bank-information',
            template: __webpack_require__(/*! ./view-bank-information.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.html"),
            styles: [__webpack_require__(/*! ./view-bank-information.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_apimanager_service__WEBPACK_IMPORTED_MODULE_4__["APIManager"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_8__["CommonCrudService"]])
    ], ViewBankInformationComponent);
    return ViewBankInformationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"client-allocation\">\r\n  <div class=\"row client-allocation__header\">\r\n    <div class=\"col-md-3\">\r\n      <b>Role</b>\r\n    </div>\r\n    <div class=\"col-md-3\" *ngFor=\"let rights of otherRights\">\r\n      <b>{{rights['group_name']}}</b>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"designationList.length > 0\">\r\n    <form [formGroup]=\"clientForm\" (submit)=\"onClientSubmit(clientForm.value,clientForm.valid)\">\r\n      <div class=\"client-allocation__body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 PLR-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\" *ngFor=\"let designtion of designationList; let i=index\">\r\n                <mat-form-field>\r\n                  <input matInput [value]=\"designtion?.designation_name\" [formControlName]=\"'designation_'+(i+1)\"\r\n                         [disableControl]=\"true\" class=\"role_disable\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 PLR-0\" *ngFor=\"let rights of otherRights\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\" *ngFor=\"let row of designationList; let i=index\">\r\n                <!--<mat-form-field floatLabel=\"never\">-->\r\n                <!--<mat-select placeholder=\"Please select\" [formControlName]=\"rights['group_name']+'_'+(i+1)\"-->\r\n                <!--(selectionChange)=\"getUserByTeam(designationList[i+1],i+1,rights,$event.value)\">-->\r\n                <!--<mat-option *ngFor=\"let user of userDesignationWise[rights['group_name']+'_'+(i+1)]\" [value]=\"+user?.id\">-->\r\n                <!--{{ user?.userfullname }}-->\r\n                <!--</mat-option>-->\r\n                <!--</mat-select>-->\r\n                <!--</mat-form-field>-->\r\n                <ng-select [items]=\"userDesignationWise[rights['group_name']+'_'+(i+1)]\"\r\n                           bindLabel=\"userfullname\"\r\n                           bindValue=\"id\"\r\n                           placeholder=\"Please select\"\r\n                           [closeOnSelect]=\"true\"\r\n                           [virtualScroll]=\"true\"\r\n                           [disableControl]=\"true\"\r\n                           [searchable]=\"true\"\r\n                           (change)=\"getUserByTeam(designationList[i+1],i+1,rights,$event)\"\r\n                           [formControlName]=\"rights['group_name']+'_'+(i+1)\">\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row MT-20 MB-20\">\r\n        <div class=\"col-md-1\">\r\n          <span class=\"orange-color\">Other Staff:</span>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n          <ng-select [items]=\"otherUserListData\"\r\n                     bindLabel=\"userfullname\"\r\n                     bindValue=\"id\"\r\n                     [multiple]=\"true\"\r\n                     placeholder=\"Other Staff\"\r\n                     [closeOnSelect]=\"true\"\r\n                     [virtualScroll]=\"true\"\r\n                     [searchable]=\"true\"\r\n                     [disableControl]=\"true\"\r\n                     [hideSelected]=\"true\"\r\n                     (change)=\"onSelectUserUpdate($event)\"\r\n                     formControlName=\"other\">\r\n          </ng-select>\r\n          <p class=\"turquoise-color\">\r\n            <mat-icon class=\"v-align-middle\">info</mat-icon>\r\n            If user already allocated in above designation then that user will not be allocated in other staff even if\r\n            you are assigning in other staff.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctY2xpZW50LWFsbG9jYXRpb24vdmlldy1jbGllbnQtYWxsb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: Views, ViewClientAllocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientAllocationComponent", function() { return ViewClientAllocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "../../node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Views;
(function (Views) {
    Views[Views["HISTORY_MODAL"] = 0] = "HISTORY_MODAL";
})(Views || (Views = {}));
var ViewClientAllocationComponent = /** @class */ (function (_super) {
    __extends(ViewClientAllocationComponent, _super);
    function ViewClientAllocationComponent(_fb, _commonCrudService, _sharedService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.enumView = Views;
        // Allocation role array varialbes
        _this.clientData = null;
        _this.designationList = [];
        _this.designationIdList = [];
        _this.userDesignationWise = {};
        _this.inJSON = {};
        _this.entityAllocationList = [];
        _this.entityAllocation = {};
        _this.clientTeamList = [];
        // otherRights = OTHERRIGHTS;
        _this.selectedUserList = [];
        _this.selectedOtherUserList = [];
        _this.userList = [];
        _this.otherUserListData = [];
        // Other Variables
        _this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        _this.removable = true;
        return _this;
    }
    ViewClientAllocationComponent.prototype.ngOnInit = function () {
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].CLIENT);
        this.otherRights = this.tabInformation;
        // console.log(this.otherRights);
        this.getDesignationList();
    };
    /**
     * Create client form method
     */
    ViewClientAllocationComponent.prototype.createClientForm = function () {
        this.group = this._fb.group({});
        this.clientForm = this.addClient();
    };
    /**
     * Designation List API.
     */
    ViewClientAllocationComponent.prototype.getDesignationList = function () {
        var _this = this;
        this._sharedObjService.getDesignationList(this.getSearchParam()).subscribe(function (response) {
            _this.handleDesignationResponse(response);
        });
    };
    ViewClientAllocationComponent.prototype.handleDesignationResponse = function (response) {
        var _this = this;
        /**
         * only those designation comes whose is_display_in_allocation flag is true
         */
        response.map(function (item) {
            if (item.is_display_in_allocation) {
                _this.designationList.push(item);
                _this.designationIdList.push(item.id);
            }
        });
        this.inJSON['designation_id'] = this.designationIdList.join();
        this.createClientForm();
        this.clientTeamList = [];
        /**
         * generate dynamic user list dropsown for the designation wise team.
         * and generate only those team column for which user has rights.
         */
        if (this.otherRights) {
            this.otherRights.map(function (item) {
                // if (this.entityAllocationList[item.service_id]) {
                // console.log(item.service_id);
                _this.clientTeamList.push(item.service_id);
                var i = 1;
                // console.log(item.group_name);
                _this.designationList.forEach(function (control) {
                    _this.group.addControl((item.group_name + '_' + i).toString(), _this._fb.control(null));
                    i++;
                });
                // }
            });
        }
        this.getEntityAllocationList();
        this.getUserList();
    };
    /**
     /**
     * handle entity allocation list API for designation wise user.
     */
    ViewClientAllocationComponent.prototype.getEntityAllocationList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].ENTITY_ALLOCATION_LIST + '/' + this.clientData.id, {}, {}).subscribe(function (Response) {
            _this.handleEntityAllocationResponse(Response);
        });
    };
    ViewClientAllocationComponent.prototype.handleEntityAllocationResponse = function (response) {
        this.entityAllocation = response.payload.data;
        if (response.payload.data['allocation_json']) {
            this.entityAllocationList = JSON.parse(response.payload.data['allocation_json']);
            this.getUserTeamDesignationWise();
        }
    };
    /**
     * get user designation and team wise.
     */
    ViewClientAllocationComponent.prototype.getUserTeamDesignationWise = function () {
        var _this = this;
        this.otherRights.map(function (item) {
            if (_this.entityAllocationList[item.service_id]) {
                var i_1 = 1;
                _this.entityAllocationList[item.service_id].forEach(function (user) {
                    _this.designationList.map(function (designation) {
                        if (Number(designation.id) === Number(user.designation_id)) {
                            // console.log(user);
                            // console.log(designation);
                            // debugger
                            if (Number(user.user_id) > 0) {
                                _this.clientForm.controls[(item.group_name + '_' + i_1)].setValue(Number(user.user_id));
                                _this.clientForm.controls[(item.group_name + '_' + i_1)].patchValue(Number(user.user_id));
                                _this.clientForm.controls[(item.group_name + '_' + i_1)].updateValueAndValidity();
                            }
                            else {
                                _this.clientForm.controls[(item.group_name + '_' + i_1)].setValue(null);
                                _this.clientForm.controls[(item.group_name + '_' + i_1)].updateValueAndValidity();
                            }
                            // console.log(this.clientForm.controls[(item.group_name + '_' + i)]);
                        }
                        else {
                            // this.clientForm.controls[(item.group_name + '_' + i)].setValue(null);
                            // this.clientForm.controls[(item.group_name + '_' + i)].patchValue(null);
                            // this.clientForm.controls[(item.group_name + '_' + i)].updateValueAndValidity();
                        }
                    });
                    i_1++;
                });
            }
        });
    };
    /** user change event for the get user list for the next level of user and fill it designation and team wise.
     * @param designation
     * @param index
     * @param team
     * @param parentId
     */
    ViewClientAllocationComponent.prototype.getUserByTeam = function (designation, index, team, parentId) {
        var _this = this;
        // console.log(designation);
        var designationId = (designation) ? designation.id : 0;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].USER_LIST_DEISGNATION_WISE, this.getQueryParams(designationId, team.service_id, parentId.id), {}).subscribe(function (Response) {
            // console.log(Response);
            _this.userDesignationWise[team.group_name + '_' + (index + 1)] = [];
            _this.userDesignationWise[team.group_name + '_' + (index + 1)] = Response.payload.data;
        });
    };
    /**
     * all user comes in others  . because we are not generating some designation for some user role.
     * so that those user goes into other.
     */
    ViewClientAllocationComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, this.getUserSearchParam()).subscribe(function (response) {
            _this.userList = response;
            // console.log(this.userList);
            // });
            // this._clientAllocationService.getList(AdminAPI.ADMIN_USER, {"records": "all"}, this.getUserSearchParam()).subscribe(Response => {
            // this.userList = Response.payload.data;
            var i = 0;
            _this.designationList.map(function (designation) {
                _this.otherRights.map(function (team) {
                    var userarray = [];
                    _this.userList.map(function (user) {
                        // user.team_id.split(',').indexOf(team.service_id.toString()) !== -1
                        // console.log(user.designation_id.id, designation.id, user.team_id.split(',').indexOf(team.service_id.toString()));
                        if (+user.designation_id.id === +designation.id && user.team_id.split(',').indexOf(team.service_id.toString()) !== -1) {
                            userarray.push(user);
                        }
                        // console.log(user, team);
                        _this.userDesignationWise[team.group_name + '_' + (i + 1)] = userarray;
                        // console.log(this.userDesignationWise[team.group_name + '_' + (i + 1)]);
                    });
                });
                i++;
            });
            _this.getUserTeamDesignationWise();
        });
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.otherUserListData = response;
            if (_this.entityAllocation['other']) {
                _this.entityAllocation['other'] = _this.entityAllocation['other'].split(',');
                _this.otherUserListData.map(function (user) {
                    _this.entityAllocation['other'].map(function (selectedUser) {
                        if (+selectedUser === +user.id) {
                            _this.selectedOtherUserList.push(user.id);
                        }
                    });
                });
                _this.clientForm.get('other').setValue(_this.selectedOtherUserList);
            }
        });
        // this.getUserTeamDesignationWise();
    };
    /**
     * Push form control
     */
    ViewClientAllocationComponent.prototype.addClient = function () {
        var _this = this;
        var i;
        this.designationList.forEach(function (control) {
            i = _this.designationList.indexOf(control) + 1;
            _this.group.addControl(('designation_' + i).toString(), _this._fb.control(control.id));
        });
        this.group.addControl('other', this._fb.control(null));
        return this.group;
    };
    /**
     * submit the client allocation
     * @param formValue
     */
    ViewClientAllocationComponent.prototype.onClientSubmit = function (formValue) {
        var _this = this;
        var formData = [];
        var allocationData = {};
        this.otherRights.map(function (rights) {
            formData = [];
            for (var key in formValue) {
                if (formValue.hasOwnProperty(key)) {
                    var index = void 0;
                    if (key.split('_')[0] === rights.group_name) {
                        index = key.split('_')[1];
                        // if (this.clientForm.get(key).value) {
                        formData.push({
                            'designation_id': _this.clientForm.get('designation_' + index).value,
                            'user_id': (_this.clientForm.get(key).value > 0) ? _this.clientForm.get(key).value : null
                        });
                        // }
                    }
                }
            }
            if (formData.length) {
                allocationData[rights.service_id] = formData;
            }
            else {
                // delete allocationData[rights.service_id];
            }
        });
        var finalJSON = {};
        if (allocationData !== {}) {
            finalJSON['allocation_json'] = JSON.stringify(allocationData);
        }
        if (this.selectedOtherUserList.length) {
            // const otherUserList = [];
            // this.selectedOtherUserList.map(user => {
            //   otherUserList.push(user.id);
            // });
            finalJSON['other'] = this.selectedOtherUserList.join();
        }
        // console.log(formData);
        this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_4__["AdminAPI"].ENTITY_ALLOCATION_LIST, this.clientData.id, finalJSON).subscribe(function (Response) {
            // this.selectedOtherUserList = [];
            // this.getEntityAllocationList();
            _this.designationList = [];
            _this.getDesignationList();
        });
    };
    /**
     * remove the selcted user for array in chip
     * @param user
     */
    ViewClientAllocationComponent.prototype.remove = function (user) {
        var _this = this;
        this.selectedUserList.map(function (item) {
            if (+item.id === +user.id) {
                _this.selectedUserList.splice(_this.selectedUserList.indexOf(item), 1);
                _this.userList.push(item);
            }
        });
    };
    ViewClientAllocationComponent.prototype.filter = function (name) {
        return this.selectedUserList.filter(function (user) {
            return user.userfullname.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    ViewClientAllocationComponent.prototype.selected = function (event) {
        var _this = this;
        var data = event.option.value;
        this.userList.map(function (item) {
            if (item.userfullname === data.userfullname) {
                _this.userList.splice(_this.userList.indexOf(item), 1);
                _this.selectedUserList.push(data);
            }
        });
        this.clientForm.get('other').setValue(event.option.value);
    };
    ViewClientAllocationComponent.prototype.getQueryParams = function (designationId, teamId, parentUserID) {
        var params = {
            'team_id': teamId,
            'designation_id': designationId
        };
        if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isUndefined"])(parentUserID)) {
            params['parent_user_id'] = parentUserID;
        }
        return params;
    };
    ViewClientAllocationComponent.prototype.getSearchParam = function () {
        return {
            'records': 'all',
            'sortBy': 'sort_order',
            'sortOrder': 'asc'
        };
    };
    ViewClientAllocationComponent.prototype.getUserSearchParam = function () {
        var params = {};
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        if (this.clientTeamList.length) {
            params['findinset'] = { 'team_id': this.clientTeamList };
        }
        return params;
    };
    ViewClientAllocationComponent.prototype.onSelectUserUpdate = function (selectedData) {
        if (selectedData) {
            this.selectedOtherUserList = selectedData.map(function (x) { return x.id; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewClientAllocationComponent.prototype, "userInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewClientAllocationComponent.prototype, "tabInformation", void 0);
    ViewClientAllocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-client-allocation',
            template: __webpack_require__(/*! ./view-client-allocation.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.html"),
            styles: [__webpack_require__(/*! ./view-client-allocation.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_9__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"]])
    ], ViewClientAllocationComponent);
    return ViewClientAllocationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"client-checklist-container\"></div>\r\n<div class=\"with-filter-grid-container\">\r\n  <!-- Start Grid Inner Header -->\r\n  <div class=\"grid-inner-header PT-5\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <mat-form-field floatLabel=\"never\">\r\n          <mat-select (selectionChange)=\"onChangeCheckList($event.value)\" [(value)]=\"selected\"\r\n                      placeholder=\"Checklist/ Question\">\r\n            <mat-option value=\"checklist\">Client checklist</mat-option>\r\n            <mat-option value=\"question\">Client question</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-10 text-right MT-5\">\r\n        <ul class=\"download-icon\">\r\n          <li class=\"width-15 MR-20\">\r\n            <a *ngIf=\"activeView == enumView.CLIENT_QUESTION\" class=\"filter-checklist\" (click)=\"onOpenFilter()\">\r\n              <span>Filter</span>\r\n              <i class=\"material-icons\">filter_list</i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- Start Grid Filter -->\r\n  <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1': isFilterView}\">\r\n    <div class=\"filter-action-icon\">\r\n      <span class=\"filter-close\" *ngIf=\"isFilterView\" (click)=\"onCloseQuestionFilter()\">Esc\r\n        <i class=\"material-icons\">close</i>\r\n      </span>\r\n    </div>\r\n    <div class=\"grid-filter-container\">\r\n      <div class=\"filter-title\">\r\n        <h3>Advance Filter</h3>\r\n      </div>\r\n      <form [formGroup]=\"questionFilterForm\" (submit)=\"questionAdvanceFilter(questionFilterForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Checklist name\" formControlName=\"entity_checklist_id\">\r\n                <mat-option *ngFor=\"let checklist of questionChecklistList\" value=\"{{checklist.id}}\">\r\n                  {{checklist.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Master activity\" formControlName=\"master_activity_id\">\r\n                <mat-option *ngFor=\"let activity of questionMasterActivityList\" value=\"{{activity.id}}\">\r\n                  {{activity.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Task\" formControlName=\"task_id\">\r\n                <mat-option *ngFor=\"let task of questionTaskList\" value=\"{{task.id}}\">{{task.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Question\" formControlName=\"question_name\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 MT-10\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Is Applicable\" formControlName=\"is_applicable\">\r\n                <mat-option value=\"0\">Please select</mat-option>\r\n                <mat-option value=\"1\">Applicable</mat-option>\r\n                <mat-option value=\"2\">Not Applicable</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-9 MT-10 text-right\">\r\n            <button type=\"button\" class=\"btn-cancel\" (click)=\"resetQuestionFilterForm()\">Clear</button>\r\n            <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <!-- End Grid Filter -->\r\n\r\n  <!-- Start Filter Tags -->\r\n  <div *ngIf=\"activeView == enumView.CLIENT_QUESTION\" class=\"filter-tags\">\r\n    <form [formGroup]=\"questionFilterOuterViewForm\">\r\n      <div class=\"tag\" *ngIf=\"entityChecklistIdField.value\">\r\n        <span class=\"tag__title\">Checklist name :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Checklist name\" (selectionChange)=\"selectRef.readOnly = false\" readonly #selectRef\r\n                        formControlName=\"entity_checklist_id\"\r\n                        [(ngModel)]=\"entityChecklistIdField.value\"\r\n                        (change)=\"questionAdvanceFilterKeyUp($event, questionFilterOuterViewForm, true)\">\r\n              <mat-option *ngFor=\"let checklist of questionChecklistList\" value=\"{{checklist.id}}\">\r\n                {{checklist.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('entity_checklist_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"masterActivityIdField.value\">\r\n        <span class=\"tag__title\">Master activity :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Master activity\" (selectionChange)=\"selectRef.readOnly = false\" readonly #selectRef\r\n                        formControlName=\"master_activity_id\"\r\n                        [(ngModel)]=\"masterActivityIdField.value\"\r\n                        (change)=\"questionAdvanceFilterKeyUp($event, questionFilterOuterViewForm, true)\">\r\n              <mat-option *ngFor=\"let activity of questionMasterActivityList\" value=\"{{activity.id}}\">\r\n                {{activity.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('master_activity_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"taskIdField.value\">\r\n        <span class=\"tag__title\">Task :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Task\" (selectionChange)=\"selectRef.readOnly = false\" readonly #selectRef\r\n                        formControlName=\"task_id\"\r\n                        [(ngModel)]=\"taskIdField.value\"\r\n                        (change)=\"questionAdvanceFilterKeyUp($event, questionFilterOuterViewForm, true)\">\r\n              <mat-option *ngFor=\"let task of questionTaskList\" value=\"{{task.id}}\">{{task.name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('task_id')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"questionField.value\">\r\n        <span class=\"tag__title\">Question :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Question\" formControlName=\"question_name\" [value]=\"questionField.value\"\r\n                   (keyup)=\"questionAdvanceFilterKeyUp($event, questionFilterOuterViewForm, false)\">\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('question_name')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"tag\" *ngIf=\"isApplicableField.value\">\r\n        <span class=\"tag__title\">Applicable :</span>\r\n        <span>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Is Applicable\" (selectionChange)=\"selectRef.readOnly = false\" readonly #selectRef\r\n                        formControlName=\"is_applicable\"\r\n                        [(ngModel)]=\"isApplicableField.value\"\r\n                        (change)=\"questionAdvanceFilterKeyUp($event, questionFilterOuterViewForm, true)\">\r\n              <mat-option value=\"0\">Please select</mat-option>\r\n              <mat-option value=\"1\">Applicable</mat-option>\r\n              <mat-option value=\"2\">Not Applicable</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </span>\r\n        <i class=\"material-icons tag__close\" (click)=\"onClearTag('is_applicable')\">close</i>\r\n      </div>\r\n\r\n      <div class=\"clearAll-tags\" *ngIf=\"(entityChecklistIdField.value) || (masterActivityIdField.value)\r\n      || (taskIdField.value) || (questionField.value) || (isApplicableField.value)\">\r\n        <a (click)=\"resetQuestionFilterForm()\">Clear all</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- End Filter Tags -->\r\n\r\n\r\n  <!--Client checklist table start-->\r\n  <div *ngIf=\"activeView == enumView.CLIENT_CHECKLIST\">\r\n    <div class=\"table-container table-no-striped\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr No.</th>\r\n            <th width=\"25%\" (click)=\"getSortClientChecklistData('name',\r\n             (clientChecklistSortBy === 'name') ? (clientChecklistSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Checklist name\r\n              <i *ngIf=\"clientChecklistSortBy === 'name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientChecklistSortBy === 'name'),\r\n            'icon-up' : ((clientChecklistSortBy === 'name') && (clientChecklistSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientChecklistSortBy === 'name') ? ((clientChecklistSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"25%\" (click)=\"getSortClientChecklistData('master_activity_name',\r\n             (clientChecklistSortBy === 'master_activity_name') ? (clientChecklistSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Master activity\r\n              <i *ngIf=\"clientChecklistSortBy === 'master_activity_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientChecklistSortBy === 'master_activity_name'),\r\n            'icon-up' : ((clientChecklistSortBy === 'master_activity_name') && (clientChecklistSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientChecklistSortBy === 'master_activity_name') ? ((clientChecklistSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward')\r\n                : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"30%\" (click)=\"getSortClientChecklistData('task_name',\r\n             (clientChecklistSortBy === 'task_name') ? (clientChecklistSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Task name\r\n              <i *ngIf=\"clientChecklistSortBy === 'task_name'\" [ngClass]=\"{'material-icons': true,\r\n            'active' : (clientChecklistSortBy === 'task_name'),\r\n            'icon-up' : ((clientChecklistSortBy === 'task_name') && (clientChecklistSortOrder === 'asc')),\r\n            'icon-down' : true}\">\r\n                {{(clientChecklistSortBy === 'task_name') ? ((clientChecklistSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"15%\">Applicable / Not applicable</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr class=\"hover-icons\"\r\n                *ngFor=\"let clientChecklist of clientChecklistList; let i = index\">\r\n              <td width=\"5%\">{{i + 1}}</td>\r\n              <td width=\"25%\" class=\"word-break\">{{clientChecklist.name}}</td>\r\n              <td width=\"25%\">{{clientChecklist.master_activity_name}}</td>\r\n              <td width=\"30%\" class=\"word-break\">{{clientChecklist.task_name}}</td>\r\n              <td width=\"15%\">\r\n                <div *ngIf=\"(clientChecklist.is_applicable).toString() == 0\">\r\n                  -\r\n                </div>\r\n                <div *ngIf=\"(clientChecklist.is_applicable).toString() == 1\">\r\n                  Applicable\r\n                </div>\r\n                <div *ngIf=\"(clientChecklist.is_applicable).toString() == 2\">\r\n                  Not Applicable\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Client question table start-->\r\n  <div *ngIf=\"activeView == enumView.CLIENT_QUESTION\">\r\n    <div class=\"table-container table-no-striped\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr No.</th>\r\n            <th width=\"15%\" (click)=\"getSortClientQuestionsData('checklist_name',\r\n             (clientQuestionSortBy === 'checklist_name') ? (clientQuestionSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Checklist name\r\n              <i *ngIf=\"clientQuestionSortBy === 'checklist_name'\" [ngClass]=\"{'material-icons': true,\r\n               'active': (clientQuestionSortBy === 'checklist_name'),\r\n               'icon-up' : ((clientQuestionSortBy === 'checklist_name') && (clientQuestionSortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n                {{(clientQuestionSortBy === 'checklist_name') ? ((clientQuestionSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"15%\" (click)=\"getSortClientQuestionsData('masteractivity_name',\r\n             (clientQuestionSortBy === 'masteractivity_name') ? (clientQuestionSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Master activity\r\n              <i *ngIf=\"clientQuestionSortBy === 'masteractivity_name'\" [ngClass]=\"{'material-icons': true,\r\n               'active': (clientQuestionSortBy === 'masteractivity_name'),\r\n               'icon-up' : ((clientQuestionSortBy === 'masteractivity_name') && (clientQuestionSortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n                {{(clientQuestionSortBy === 'masteractivity_name') ? ((clientQuestionSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward')\r\n                : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"20%\" (click)=\"getSortClientQuestionsData('task_name',\r\n             (clientQuestionSortBy === 'task_name') ? (clientQuestionSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Task name\r\n              <i *ngIf=\"clientQuestionSortBy === 'task_name'\" [ngClass]=\"{'material-icons': true,\r\n               'active': (clientQuestionSortBy === 'task_name'),\r\n               'icon-up' : ((clientQuestionSortBy === 'task_name') && (clientQuestionSortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n                {{(clientQuestionSortBy === 'task_name') ? ((clientQuestionSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') : 'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n            <th width=\"45%\" (click)=\"getSortClientQuestionsData('question_name',\r\n             (clientQuestionSortBy === 'question_name') ? (clientQuestionSortOrder === 'asc' ? 'desc' : 'asc') : 'asc')\">\r\n              Question\r\n              <i *ngIf=\"clientQuestionSortBy === 'question_name'\" [ngClass]=\"{'material-icons': true,\r\n               'active': (clientQuestionSortBy === 'question_name'),\r\n               'icon-up' : ((clientQuestionSortBy === 'question_name') && (clientQuestionSortOrder === 'asc')),\r\n               'icon-down' : true}\">\r\n                {{(clientQuestionSortBy === 'question_name') ? ((clientQuestionSortOrder === 'asc') ?\r\n                'arrow_upward':'arrow_downward') :\r\n                'arrow_downward'}}\r\n              </i>\r\n            </th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr class=\"hover-icons\"\r\n                *ngFor=\"let question of clientQuestionsList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"15%\">{{question?.checklist_name}}</td>\r\n              <td width=\"15%\">{{question?.masteractivity_name}}</td>\r\n              <td width=\"20%\">{{question?.task_name}}</td>\r\n              <td width=\"45%\">\r\n                <div>\r\n                  {{question?.question_name}}\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\" (page)=\"onClientQuestionsListPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n      <div *ngIf=\"!(clientQuestionsList.length)\" class=\"panel-title red-color\"> No Data Found!</div>\r\n    </div>\r\n  </div>\r\n  <!--table over-->\r\n\r\n  <!--client checklist question view-->\r\n  <div *ngIf=\"activeView == enumView.CLIENT_QUESTION_LIST\" class=\"checklist-question\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 PR-0\">\r\n        <div class=\"checklist-question__left\">\r\n          <b>Checklist name</b>\r\n          <ul>\r\n            <li *ngFor=\"let checklist of questionViewChecklist\">\r\n              <a [ngClass]=\"{'active': (selectedChecklist.id === checklist.id)}\" [matTooltip]=\"checklist.checklistname\"\r\n                 (click)=\"onChangeQuestionViewChecklist(checklist)\">{{checklist.checklistname}}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <div class=\"checklist-question__right\">\r\n          <div class=\"row MTB-10\">\r\n            <div class=\"col-md-9 PL-0\">\r\n            <span class=\"primary-color\">\r\n              <b>Task Name:</b> {{selectedChecklist.taskname}} |\r\n              <b>Master Activity:</b> {{selectedChecklist.masteractivityname}}\r\n            </span>\r\n            </div>\r\n            <div class=\"col-md-3 PR-0 text-right\">\r\n              <a class=\"cursor-pointer primary-color \" (click)=\"allExpandState = !allExpandState\">\r\n                {{allExpandState ? 'Collapse All' : 'Expand All'}}\r\n              </a>\r\n              <a (click)=\"openDialog()\" class=\"primary-color cursor-pointer ML-15\">\r\n                <i class=\"material-icons\">add</i> Add Question\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <mat-accordion [multi]=\"true\">\r\n            <mat-expansion-panel *ngFor=\"let group of questionViewGroup; let i = index;\" [expanded]=\"allExpandState\"\r\n                                 (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  {{group.value}}\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div *ngFor=\"let questionArray of questionViewData\">\r\n                <div *ngIf=\"questionArray['id'] === group['id']\">\r\n                  <div *ngFor=\"let questionObj of questionArray['value']; let j = index;\" class=\"row MB-10\">\r\n                    <div class=\"col-md-7 PL-0\">\r\n                      <mat-form-field>\r\n                      <textarea rows=\"2\" matInput placeholder=\"Question\" value=\"{{questionObj.question_name}}\"\r\n                                (change)=\"(availableQuestions === 0) ?\r\n                                onChangeQuestion($event['target']['value'], questionObj['master_checklist_question_id'],\r\n                                 questionArray['id'], 'question_name') :\r\n                                onChangeQuestion($event['target']['value'], questionObj['id'],\r\n                      questionArray['id'], 'question_name')\">\r\n                      </textarea>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <mat-form-field>\r\n                      <textarea rows=\"2\" matInput placeholder=\"Help text\" value=\"{{questionObj.help_text}}\" (change)=\"(availableQuestions === 0) ?\r\n                                 onChangeQuestion($event['target']['value'],questionObj['master_checklist_question_id'],\r\n                                  questionArray['id'], 'help_text') :\r\n                                 onChangeQuestion($event['target']['value'], questionObj['id'],\r\n                                 questionArray['id'], 'help_text')\"></textarea>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-1 text-right PR-0 MT-15\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Is Applicable\" [value]=\"(questionObj.is_applicable).toString()\"\r\n                                    (selectionChange)=\"(availableQuestions === 0) ?\r\n                                  onChangeQuestion(+($event.value), questionObj['master_checklist_question_id'],\r\n                                    questionArray['id'], 'is_applicable') :\r\n                                  onChangeQuestion(+($event.value), questionObj['id'],\r\n                                  questionArray['id'], 'is_applicable')\">\r\n                          <mat-option value=\"0\">Please select</mat-option>\r\n                          <mat-option value=\"1\">Applicable</mat-option>\r\n                          <mat-option value=\"2\">Not Applicable</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </div>\r\n        <div class=\"MTB-15 text-right\">\r\n          <button type=\"submit\" class=\"btn-primary\" (click)=\"addUpdateQuestionView()\">\r\n            {{(availableQuestions === 0) ? 'Save' : 'Update'}}\r\n          </button>\r\n          <button type=\"button\" class=\"btn-default\" (click)=\"onCancelAddUpdateQuestionView()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!(clientInformation.is_service)\" class=\"panel-title red-color\">\r\n    No service agreed by client!\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctY2xpZW50LWNoZWNrbGlzdC92aWV3LWNsaWVudC1jaGVja2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: Views, ViewClientChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientChecklistComponent", function() { return ViewClientChecklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_client_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view-client.model */ "./src/app/admin/client-module/view-client/view-client.model.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Views;
(function (Views) {
    Views[Views["CLIENT_CHECKLIST"] = 0] = "CLIENT_CHECKLIST";
    Views[Views["CLIENT_QUESTION"] = 1] = "CLIENT_QUESTION";
    Views[Views["CLIENT_QUESTION_LIST"] = 2] = "CLIENT_QUESTION_LIST";
})(Views || (Views = {}));
var ViewClientChecklistComponent = /** @class */ (function () {
    function ViewClientChecklistComponent(dialog, _commonCrudService, _sharedService) {
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Constant Variables
        this.enumView = Views;
        this.activeView = Views.CLIENT_CHECKLIST;
        // Data related variables
        this.tagList = [];
        this.clientChecklistList = [];
        this.clientQuestionsList = [];
        this.questionViewGroup = [];
        this.questionViewData = [];
        this.questionViewChecklist = [];
        this.availableQuestions = 0;
        this.checklistArray = [];
        this.questionChecklistList = [];
        this.questionMasterActivityList = [];
        this.questionTaskList = [];
        this.equalJSON = {};
        this.likeJSON = {};
        // Pagination related variables
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["BASE"].PAGINATION_ARRAY[1];
        // Select value
        this.selected = 'checklist';
        // State variables
        this.panelOpenState = false;
        this.allExpandState = false;
        this.isFilterView = false;
        this.isUpdateDisable = true;
    }
    Object.defineProperty(ViewClientChecklistComponent.prototype, "entityChecklistIdField", {
        // get form control
        get: function () {
            return this.questionFilterForm.get('entity_checklist_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewClientChecklistComponent.prototype, "masterActivityIdField", {
        get: function () {
            return this.questionFilterForm.get('master_activity_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewClientChecklistComponent.prototype, "taskIdField", {
        get: function () {
            return this.questionFilterForm.get('task_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewClientChecklistComponent.prototype, "questionField", {
        get: function () {
            return this.questionFilterForm.get('question_name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewClientChecklistComponent.prototype, "isApplicableField", {
        get: function () {
            return this.questionFilterForm.get('is_applicable');
        },
        enumerable: true,
        configurable: true
    });
    ViewClientChecklistComponent.prototype.ngOnInit = function () {
        this.initializeMethod();
    };
    // Initialization methods
    ViewClientChecklistComponent.prototype.initializeMethod = function () {
        this.createQuestionAdvancedFilterForm();
        this.getClientChecklist();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_CHECKLIST_HISTORY + '/' + this.clientInformation.id,
            params: {},
            searchParams: {},
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Creating advanced filter forms
     */
    ViewClientChecklistComponent.prototype.createQuestionAdvancedFilterForm = function () {
        this.questionFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            entity_checklist_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            is_applicable: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.questionFilterOuterViewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            entity_checklist_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            master_activity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            task_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            question_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            is_applicable: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    /**
     * getting client checklist List
     */
    ViewClientChecklistComponent.prototype.getClientChecklist = function () {
        var _this = this;
        if (this.clientInformation.is_service) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_CHECKLIST_DATA + '/' + this.clientInformation.id, { records: 'all' })
                .subscribe(function (response) {
                _this.handleClientChecklistResponse(response);
            });
        }
    };
    ViewClientChecklistComponent.prototype.handleClientChecklistResponse = function (response) {
        this.isNewChecklist = response['payload']['isClientchecklist'];
        this.clientChecklistList = response['payload']['data'];
        this.getChecklistArray();
    };
    /**
     * creating internal checklistArray to pass as param during Add or Update checklist
     */
    ViewClientChecklistComponent.prototype.getChecklistArray = function () {
        var _this = this;
        this.checklistArray = [];
        this.clientChecklistList.forEach(function (checklist) {
            var params = {
                checklist_id: checklist.master_checklist_id,
                status: checklist.is_applicable
            };
            _this.checklistArray.push(params);
        });
    };
    // Api call
    /**
     * getting client question list
     * @param {number} pageNumber
     * @param {string} key
     * @param {string} val
     */
    ViewClientChecklistComponent.prototype.getClientQuestionsList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_QUESTIONS_DATA + '/' + this.clientInformation.id, this.getClientQuestionsQueryParams(pageNumber, key, val), this.getClientQuestionSearchParams())
            .subscribe(function (response) {
            _this.handleClientQuestionsResponse(response);
        });
    };
    ViewClientChecklistComponent.prototype.handleClientQuestionsResponse = function (response) {
        this.clientQuestionsList = response['payload']['data'];
        this.page = response['pager']['pageNumber'];
        this.pageIndex = this.page - 1;
        this.totalRecords = +(response['pager']['totalRecords']);
        this.clientQuestionSortBy = response['pager']['sortBy'];
        this.clientQuestionSortOrder = response['pager']['sortOrder'];
    };
    /**
     * getting respective data to fill in drop-down during client question filter
     */
    ViewClientChecklistComponent.prototype.getClientQuestionsFilterData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_CHECKLIST_DATA + '/' + this.clientInformation.id, { records: 'all' }, this.getSearchParam()).subscribe(function (response) {
            _this.handleClientQuestionFilterResponse(response);
        });
    };
    ViewClientChecklistComponent.prototype.handleClientQuestionFilterResponse = function (response) {
        var _this = this;
        var questionFilterDataArray = response['payload']['data'];
        questionFilterDataArray.forEach(function (checklist) {
            var questionChecklistParam = {
                id: checklist.id,
                name: checklist.name
            };
            _this.questionChecklistList.push(questionChecklistParam);
            var questionMasterActivityParam = {
                id: checklist.master_activity_id,
                name: checklist.master_activity_name
            };
            _this.questionMasterActivityList.push(questionMasterActivityParam);
            var questionLastParam = {
                id: checklist.task_id,
                name: checklist.task_name
            };
            _this.questionTaskList.push(questionLastParam);
        });
        this.questionTaskList = this.removeDuplicateItem(this.questionTaskList);
        this.questionMasterActivityList = this.removeDuplicateItem(this.questionMasterActivityList);
        this.questionChecklistList = this.removeDuplicateItem(this.questionChecklistList);
    };
    /**
     * function to removed duplicate entries from passed array and return the same array
     * @param {any[]} inputArray
     * @returns {any[]}
     */
    ViewClientChecklistComponent.prototype.removeDuplicateItem = function (inputArray) {
        inputArray = inputArray.filter(function (value, index, array) {
            return !array.filter(function (v, i) { return JSON.stringify(value) === JSON.stringify(v) && i < index; }).length;
        });
        return inputArray;
    };
    /**
     * Getting question list for the view(i.e. questionView), which pop-up after adding or updating checklist
     * @param {number} id
     */
    ViewClientChecklistComponent.prototype.getQuestionViewList = function (id) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_QUESTIONS_VIEW_DATA + '/' + this.clientInformation.id, {}, this.getQuestionViewSearchParams(id)).subscribe(function (response) {
            _this.handleQuestionViewResponse(response);
        });
    };
    ViewClientChecklistComponent.prototype.handleQuestionViewResponse = function (response) {
        this.questionViewChecklist = [];
        this.questionViewGroup = [];
        this.questionViewData = [];
        this.availableQuestions = response['payload']['availableQuestion'];
        var checklistObj = response['payload']['checklist'];
        for (var key in checklistObj) {
            if (checklistObj.hasOwnProperty(key)) {
                this.questionViewChecklist.push(checklistObj[key]);
            }
        }
        if (!(this.selectedChecklist)) {
            this.selectedChecklist = this.questionViewChecklist[0];
        }
        var groupObj = response['payload']['group'];
        for (var key in groupObj) {
            if (groupObj.hasOwnProperty(key)) {
                this.questionViewGroup.push({
                    id: key,
                    value: groupObj[key]
                });
            }
        }
        var dataObj = response['payload']['data'];
        this.questionViewObject = dataObj;
        for (var key in dataObj) {
            if (dataObj.hasOwnProperty(key)) {
                this.questionViewData.push({
                    id: key,
                    value: dataObj[key]
                });
            }
        }
        this.activeView = this.enumView.CLIENT_QUESTION_LIST;
    };
    // Page Events
    /**
     * Event called on changing checklist on questionView
     * @param {QuestionViewChecklist} checklist
     */
    ViewClientChecklistComponent.prototype.onChangeQuestionViewChecklist = function (checklist) {
        this.getQuestionViewList(checklist.id);
        this.selectedChecklist = checklist;
    };
    /**
     * Cancel button click event on questionView
     */
    ViewClientChecklistComponent.prototype.onCancelAddUpdateQuestionView = function () {
        this.getQuestionViewList(this.selectedChecklist.id);
    };
    /**
     * On change - client question or client checklist event
     * @param event
     */
    ViewClientChecklistComponent.prototype.onChangeCheckList = function (event) {
        if (event === 'question') {
            this.questionTaskList = [];
            this.questionMasterActivityList = [];
            this.questionChecklistList = [];
            this.getClientQuestionsList(1);
            this.getClientQuestionsFilterData();
            var value = {
                url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_QUESTION_HISTORY + '/' + this.clientInformation.id,
            };
            this._sharedService.setHistoryURL(value);
            this.activeView = this.enumView.CLIENT_QUESTION;
        }
        else {
            var value = {
                url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_6__["AdminAPI"].CLIENT_CHECKLIST_HISTORY + '/' + this.clientInformation.id,
            };
            this._sharedService.setHistoryURL(value);
            this.activeView = this.enumView.CLIENT_CHECKLIST;
        }
    };
    /**
     * Function called when any changes are made on questionView fields
     * @param value
     * @param {number} questionId
     * @param {string} questionTypeId
     * @param {string} keyName
     */
    ViewClientChecklistComponent.prototype.onChangeQuestion = function (value, questionId, questionTypeId, keyName) {
        var _this = this;
        for (var key in this.questionViewObject) {
            if (this.questionViewObject.hasOwnProperty(key)) {
                if (key === questionTypeId) {
                    var valueArray = this.questionViewObject[key];
                    valueArray.filter(function (valueObj) {
                        if (_this.availableQuestions === 0) {
                            if (valueObj['master_checklist_question_id'] === questionId) {
                                valueObj[keyName] = value;
                            }
                        }
                        else {
                            if (valueObj['id'] === questionId) {
                                valueObj[keyName] = value;
                            }
                        }
                    });
                    this.questionViewObject[key] = valueArray;
                }
            }
        }
    };
    /**
     * get client question list based on advanced filter
     * @param {FormGroup} form
     */
    ViewClientChecklistComponent.prototype.questionAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.questionFilterOuterViewForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if ((key === 'entity_checklist_id') || (key === 'master_activity_id') || (key === 'task_id') || (key === 'is_applicable')) {
                        this.equalJSON[key] = form.value[key];
                    }
                    else if (key === 'question_name') {
                        this.likeJSON[key] = form.value[key];
                    }
                }
            }
            this.isFilterView = false;
            this.getClientQuestionsList(1);
        }
    };
    /**
     * Key up event gets called during advanced filter
     * @param event
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    ViewClientChecklistComponent.prototype.questionAdvanceFilterKeyUp = function (event, form, flag) {
        var processToReq = false;
        if (flag) {
            processToReq = true;
        }
        else {
            if (event.keyCode === 13) {
                processToReq = true;
            }
        }
        if (processToReq) {
            this.questionFilterForm.setValue({
                'entity_checklist_id': form.value['entity_checklist_id'],
                'master_activity_id': form.value['master_activity_id'],
                'task_id': form.value['task_id'],
                'question_name': form.value['question_name'],
                'is_applicable': form.value['is_applicable']
            });
            this.questionAdvanceFilter(form, false);
        }
    };
    /**
     * Function gets called when respective tag got cleared/removed on client question list filter
     * @param {string} elementName
     */
    ViewClientChecklistComponent.prototype.onClearTag = function (elementName) {
        this.questionFilterForm.get(elementName).setValue('');
        this.questionFilterOuterViewForm.get(elementName).setValue('');
        if ((elementName === 'entity_checklist_id') || (elementName === 'master_activity_id') ||
            (elementName === 'task_id') || (elementName === 'is_applicable')) {
            delete this.equalJSON[elementName];
        }
        else if (elementName === 'question_name') {
            delete this.likeJSON[elementName];
        }
        this.getClientQuestionsList(1, this.clientQuestionSortBy, this.clientQuestionSortOrder);
    };
    /**
     * Getting sorted client question list
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ViewClientChecklistComponent.prototype.getSortClientQuestionsData = function (sortKey, sortVal) {
        this.getClientQuestionsList(1, sortKey, sortVal);
    };
    /**
     * Page changed on client question list
     * @param event
     */
    ViewClientChecklistComponent.prototype.onClientQuestionsListPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getClientQuestionsList(event.pageIndex + 1, this.clientQuestionSortBy, this.clientQuestionSortOrder);
    };
    /**
     * Reset both filter forms and get default client question list
     */
    ViewClientChecklistComponent.prototype.resetQuestionFilterForm = function () {
        this.createQuestionAdvancedFilterForm();
        this.likeJSON = {};
        this.equalJSON = {};
        this.getClientQuestionsList(1);
    };
    /**
     * Getting sorted clientChecklistList based on sortKey and sortOrder.
     * @param {string} sortKey
     * @param {string} sortVal
     */
    ViewClientChecklistComponent.prototype.getSortClientChecklistData = function (sortKey, sortVal) {
        this.clientChecklistSortBy = sortKey;
        this.clientChecklistSortOrder = sortVal;
        var sortedArray = this.clientChecklistList.sort(function (objOne, objTwo) {
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
        }
        else {
            this.clientChecklistList = sortedArray.reverse();
        }
    };
    ViewClientChecklistComponent.prototype.handleAddUpdateChecklistResponse = function () {
        this.getClientChecklist();
        var id = this.clientChecklistList[0].id;
        this.getQuestionViewList(id);
    };
    /**
     * Event on Changing checklist status -> return updated checklistArray
     * @param id
     * @param {MatSelectChange} event
     */
    ViewClientChecklistComponent.prototype.onChangeChecklistStatus = function (id, event) {
        var updatedStatus = +(event.value);
        var params = { checklist_id: id, status: updatedStatus };
        var index = this.checklistArray.findIndex(function (checklist) { return (checklist['checklist_id'] === id); });
        this.checklistArray[index] = params;
        this.isUpdateDisable = false;
    };
    /**
     * Toogle Filter
     */
    ViewClientChecklistComponent.prototype.onOpenFilter = function () {
        this.isFilterView = !this.isFilterView;
    };
    /**
     * Close filter
     */
    ViewClientChecklistComponent.prototype.onCloseFilter = function () {
        this.isFilterView = false;
    };
    // Angular helpers
    ViewClientChecklistComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isFilterView = false;
        }
    };
    // Helpers
    /**
     * get function for returning pageNumber and page size at time of client question listing api
     * @param {number} page
     * @param {string} sortKey
     * @param {string} sortOrder
     * @returns {{pageNumber: number; recordsPerPage: any}}
     */
    ViewClientChecklistComponent.prototype.getClientQuestionsQueryParams = function (page, sortKey, sortOrder) {
        var params = {
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
    };
    /**
     * get function for returning advance search params for client question get api
     * @returns {{}}
     */
    ViewClientChecklistComponent.prototype.getClientQuestionSearchParams = function () {
        var params = {};
        var filter = {};
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
    };
    /**
     * return search params for question view list
     * @param {number} id
     * @returns {{compare: {equal: {entity_checklist_id: number}}}}
     */
    ViewClientChecklistComponent.prototype.getQuestionViewSearchParams = function (id) {
        return {
            compare: {
                equal: {
                    entity_checklist_id: id
                }
            }
        };
    };
    /**
     * return searchParams for client checklist get API
     * @returns {{}}
     */
    ViewClientChecklistComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        var filterData = {
            is_applicable: 1
        };
        filter['equal'] = filterData;
        params['compare'] = filter;
        return params;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _view_client_model__WEBPACK_IMPORTED_MODULE_3__["Clients"])
    ], ViewClientChecklistComponent.prototype, "clientInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ViewClientChecklistComponent.prototype, "onKeydownHandler", null);
    ViewClientChecklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-client-checklist',
            template: __webpack_require__(/*! ./view-client-checklist.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.html"),
            styles: [__webpack_require__(/*! ./view-client-checklist.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ViewClientChecklistComponent);
    return ViewClientChecklistComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/main.model.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/main.model.ts ***!
  \***************************************************************************************************/
/*! exports provided: DYNAMICFIELDS, AgreedTabs, AgreedChildTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMICFIELDS", function() { return DYNAMICFIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreedTabs", function() { return AgreedTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreedChildTabs", function() { return AgreedChildTabs; });
var DYNAMICFIELDS = /** @class */ (function () {
    function DYNAMICFIELDS() {
    }
    Object.defineProperty(DYNAMICFIELDS.prototype, "field_id", {
        get: function () {
            return this._field_id;
        },
        set: function (value) {
            this._field_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "field_helptext", {
        get: function () {
            return this._field_helptext;
        },
        set: function (value) {
            this._field_helptext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "field_name", {
        get: function () {
            return this._field_name;
        },
        set: function (value) {
            this._field_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "field_title", {
        get: function () {
            return this._field_title;
        },
        set: function (value) {
            this._field_title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "field_type", {
        get: function () {
            return this._field_type;
        },
        set: function (value) {
            this._field_type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "field_value", {
        get: function () {
            return this._field_value;
        },
        set: function (value) {
            this._field_value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DYNAMICFIELDS.prototype, "dataArray", {
        get: function () {
            return this._dataArray;
        },
        set: function (value) {
            this._dataArray = value;
        },
        enumerable: true,
        configurable: true
    });
    return DYNAMICFIELDS;
}());

var AgreedTabs = /** @class */ (function () {
    function AgreedTabs() {
    }
    Object.defineProperty(AgreedTabs.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedTabs.prototype, "group_name", {
        get: function () {
            return this._group_name;
        },
        set: function (value) {
            this._group_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedTabs.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedTabs.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedTabs.prototype, "child", {
        get: function () {
            return this._child;
        },
        set: function (value) {
            this._child = value;
        },
        enumerable: true,
        configurable: true
    });
    return AgreedTabs;
}());

var AgreedChildTabs = /** @class */ (function () {
    function AgreedChildTabs() {
    }
    Object.defineProperty(AgreedChildTabs.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedChildTabs.prototype, "group_name", {
        get: function () {
            return this._group_name;
        },
        set: function (value) {
            this._group_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedChildTabs.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgreedChildTabs.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    return AgreedChildTabs;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--basic tab html start-->\r\n<div class=\"view-basic-main-tab-container\">\r\n  <span class=\"panel-title orange-color\">View entity from here</span>\r\n\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 label-span-color\" *ngFor=\"let data of viewDataArray; let i = index;\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\">{{data.key}} :</label>\r\n          <span class=\"col-md-9\">{{data.value}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctbWFpbi1jbGllbnQvdmlldy1iYXNpYy1tYWluL3ZpZXctYmFzaWMtbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ViewBasicMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBasicMainComponent", function() { return ViewBasicMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewBasicMainComponent = /** @class */ (function () {
    function ViewBasicMainComponent(_sharedService, _commonCrudService, _sharedObjService) {
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this.tab = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["VIEWCLIENTTYPE"].BASIC;
        this.mainClientResponse = [];
        this.viewDataArray = [];
        this.clientList = [];
        this.userList = [];
    }
    ViewBasicMainComponent.prototype.ngOnInit = function () {
        this.getUserList();
        this.getEntityList();
        this.getClientDataDetail();
    };
    /**
     * get client data
     */
    ViewBasicMainComponent.prototype.getClientDataDetail = function () {
        var _this = this;
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["GLOBALDATAKEYS"].CLIENT);
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_BASIC, this.clientData.id, { 'tab': this.tab }).subscribe(function (Response) {
            _this.handleMainClientResponse(Response);
        });
    };
    /**
     * Get User List
     */
    ViewBasicMainComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            _this.userList = response;
            _this.getClientDataDetail();
        });
    };
    ViewBasicMainComponent.prototype.getEntityList = function () {
        var _this = this;
        this._sharedObjService.getClientList({ 'records': 'all' }, this.getClientListSearch()).subscribe(function (Response) {
            _this.clientList = Response;
        });
    };
    /**
     *
     * @param response
     */
    ViewBasicMainComponent.prototype.handleMainClientResponse = function (response) {
        var _this = this;
        // assign data to array
        this.mainClientResponse = response.payload.data;
        // console.log(this.mainClientResponse);
        var labelName = '';
        var _loop_1 = function (i) {
            if (i) {
                if (i === 'billing_name') {
                    labelName = i;
                    i = 'Billing Name';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'parent_name') {
                    labelName = i;
                    i = 'Parent Trading Name';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'name') {
                    labelName = i;
                    i = 'Legal Name';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'trading_name') {
                    labelName = i;
                    i = 'Trading Name';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'contract_signed_date') {
                    labelName = i;
                    var dataArr = this_1.mainClientResponse[labelName] ? this_1.mainClientResponse[labelName].split('-') : [];
                    var date = dataArr ? dataArr[2] + '-' + dataArr[1] + '-' + dataArr[0] : '';
                    i = 'Contract Signed Date';
                    this_1.viewDataArray.push({ 'key': i, 'value': date });
                }
                else if (i === 'entity_writeoff') {
                    labelName = i;
                    i = 'Client Write Off';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'reviewer_budgeted_unit') {
                    labelName = i;
                    i = 'Reviewer budgeted unit';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'related_entity') {
                    labelName = i;
                    i = 'Related entity';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'related_entity_id') {
                    labelName = i;
                    i = 'Select Related Entity';
                    var entityName = [];
                    var keyName = this_1.mainClientResponse[labelName];
                    var dataNameArray = this_1.mainClientResponse[labelName] ? this_1.mainClientResponse[labelName].split(',') : [];
                    for (var j in this_1.clientList) {
                        if (j) {
                            var data = this_1.clientList[j].id.toString();
                            if (dataNameArray.indexOf(data) !== -1) {
                                entityName.push(this_1.clientList[j].name);
                            }
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': entityName.toString() });
                }
                else if (i === 'abn_number') {
                    labelName = i;
                    i = 'ABN number';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'abn_branch_code') {
                    labelName = i;
                    i = 'ABN Branch Code';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'abn_register_date') {
                    labelName = i;
                    var dataArr = this_1.mainClientResponse[labelName] ? this_1.mainClientResponse[labelName].split('-') : [];
                    var date = dataArr ? dataArr[2] + '-' + dataArr[1] + '-' + dataArr[0] : '';
                    i = 'Date from when client is registered for ABN';
                    this_1.viewDataArray.push({ 'key': i, 'value': date });
                }
                else if (i === 'tfn_number') {
                    labelName = i;
                    i = 'TFN number';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'business_type') {
                    labelName = i;
                    i = 'Type of Business';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'entity_type') {
                    labelName = i;
                    i = 'Type of Entity';
                    // this.viewDataArray.push({'key': i, 'value': this.mainClientResponse[labelName]});
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["entityType"].length; j++) {
                        if (+_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["entityType"][j].key === +this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["entityType"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'entity_type_ifother' && (this_1.mainClientResponse['entity_type'] === 3)) {
                    labelName = i;
                    i = 'Entity type - Other';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'bk_doneby') {
                    labelName = i;
                    i = 'Bookkeeping Done By';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["bkDoneby"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["bkDoneby"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["bkDoneby"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'bk_doneby_ifother' && (this_1.mainClientResponse['bk_doneby'] === 3)) {
                    labelName = i;
                    i = 'Bookkeeping Done By - Other';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'gst_register') {
                    labelName = i;
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNo"][j].label;
                        }
                    }
                    i = 'Registered For GST?';
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'gst_register_date') {
                    labelName = i;
                    i = 'Date from which client is registered for GST';
                    var dataArr = this_1.mainClientResponse[labelName] ? this_1.mainClientResponse[labelName].split('-') : [];
                    var date = dataArr ? dataArr[2] + '-' + dataArr[1] + '-' + dataArr[0] : '';
                    this_1.viewDataArray.push({ 'key': i, 'value': date });
                }
                else if (i === 'bas_frequency') {
                    labelName = i;
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["basFrequency"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["basFrequency"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["basFrequency"][j].label;
                        }
                    }
                    i = 'BAS Frequency';
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'bas_accrualorcash') {
                    labelName = i;
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["basAccrualorcash"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["basAccrualorcash"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["basAccrualorcash"][j].label;
                        }
                    }
                    i = 'BAS is on Accrual or Cash?';
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'payg_frequency') {
                    labelName = i;
                    var labelData = '';
                    i = 'PAYG Frequency';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["paygFrequency"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["paygFrequency"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["paygFrequency"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'financial_institution_updateon_ato') {
                    labelName = i;
                    i = 'Financial Institution detail updated on ATO?';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoOther"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoOther"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoOther"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'financial_institution_updateon_ato_ifother' && (this_1.mainClientResponse['financial_institution_updateon_ato'] === 2)) {
                    labelName = i;
                    i = 'Financial Institution detail - Other';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'statement_delivery_preference') {
                    labelName = i;
                    i = 'Activity statement delivery preference';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["statementDeliveryPreference"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["statementDeliveryPreference"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["statementDeliveryPreference"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'entity_registerfor_fbt') {
                    labelName = i;
                    i = 'Is this client registered for FBT?';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'entity_registerfor_fueltaxcredit') {
                    labelName = i;
                    i = 'Is this client registered for fuel Tax Credit?';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'group_client_belongsto') {
                    labelName = i;
                    i = 'Group client belongs to?';
                    var labelData_1 = '';
                    var dataKey_1 = this_1.mainClientResponse[labelName];
                    this_1._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_BELONGSTO, { 'records': 'all' }).subscribe(function (Response) {
                        for (var _i = 0, _a = Response.payload.data; _i < _a.length; _i++) {
                            var data = _a[_i];
                            if (data) {
                                if (data.id === dataKey_1) {
                                    labelData_1 = data.name;
                                    _this.viewDataArray.push({ 'key': i, 'value': labelData_1 });
                                }
                            }
                        }
                    });
                }
                else if (i === 'franchise') {
                    labelName = i;
                    i = 'Franchise';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["franchise"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["franchise"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["franchise"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'website') {
                    labelName = i;
                    i = 'Website';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'xero_email_id') {
                    labelName = i;
                    i = 'Xero Email ID';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'myob_email_id') {
                    labelName = i;
                    i = 'Myob Email ID';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'is_dashboard') {
                    labelName = i;
                    i = 'Is Client console visible to client?';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'user_signature') {
                    labelName = i;
                    i = 'User Signature';
                    // console.log(this.userList, this.mainClientResponse[labelName]);
                    var userInfo = this_1.userList.filter(function (item) { return item.id === Number(_this.mainClientResponse[labelName]); });
                    var labelData = (userInfo && userInfo.length) ? userInfo[0].userfullname : '';
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'entity_business_type') {
                    labelName = i;
                    i = 'Business Type';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["CLIENTTYPEINFO"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["CLIENTTYPEINFO"][j].key === Number(this_1.mainClientResponse[labelName])) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["CLIENTTYPEINFO"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'dashboard_reason') {
                    labelName = i;
                    i = 'Reason to not display dashboard to client';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                }
                else if (i === 'is_parent') {
                    labelName = i;
                    i = 'Parent Entity?';
                    var labelData = '';
                    for (var j = 0; j < _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"].length; j++) {
                        if (_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].key === this_1.mainClientResponse[labelName]) {
                            labelData = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["yesNoNa"][j].label;
                        }
                    }
                    this_1.viewDataArray.push({ 'key': i, 'value': labelData });
                }
                else if (i === 'parent_id') {
                    labelName = 'parent_entity';
                    i = 'Select Parent Entity';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName] });
                    /* let entityName = [];
                     const keyName = this.mainClientResponse[labelName];
                     const dataNameArray = this.mainClientResponse[labelName] ? this.mainClientResponse[labelName].split(',') : [];
           
                     for (let j in this.clientList) {
                       if (j) {
                         const data = this.clientList[j].id.toString();
                         if (dataNameArray.indexOf(data) !== -1) {
                           entityName.push(this.clientList[j].name);
                         }
                       }
                     }
                     this.viewDataArray.push({'key': i, 'value': entityName.toString()});
                     */
                }
                else if (i === 'team_type') {
                    labelName = i;
                    i = 'Team Type';
                    var data = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_1__["TEAM_TYPE"].find(function (element) { return element.key === _this.mainClientResponse[labelName]; });
                    this_1.viewDataArray.push({ 'key': i, 'value': data.label });
                }
                else if (i === 'feedback_assignee') {
                    labelName = i;
                    i = 'Feedback Assignee';
                    this_1.viewDataArray.push({ 'key': i, 'value': this_1.mainClientResponse[labelName].userfullname });
                }
            }
        };
        var this_1 = this;
        for (var i in this.mainClientResponse) {
            _loop_1(i);
        }
    };
    /**
     * Get Client List for Related Entity
     * @returns {{}}
     */
    ViewBasicMainComponent.prototype.getClientListSearch = function () {
        var params = {};
        var filter = {};
        filter['notequal'] = { 'discontinue_stage': 2 };
        params['compare'] = filter;
        return params;
    };
    ViewBasicMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-basic-main',
            template: __webpack_require__(/*! ./view-basic-main.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.html"),
            styles: [__webpack_require__(/*! ./view-basic-main.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_4__["SharedObjService"]])
    ], ViewBasicMainComponent);
    return ViewBasicMainComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--basic tab html start-->\r\n<div class=\"view-basic-main-tab-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 PL-0\">\r\n      <span class=\"panel-title\">View {{currentTabName}}</span>\r\n    </div>\r\n    <div class=\"col-md-2\" *ngIf=\"tabChildData.length > 0\">\r\n      <mat-form-field>\r\n        <mat-select [(value)]=\"accountType\" placeholder=\"Select Service\" (selectionChange)=\"onChangeService($event)\">\r\n          <mat-option [value]=\"tab.id\">{{tab.group_name}}</mat-option>\r\n          <mat-option *ngFor=\"let childTabs of tabChildData\" [value]=\"childTabs?.id\">\r\n            {{ childTabs?.group_name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\" *ngIf=\"displayArray.length\">\r\n      <div class=\"col-md-6 label-span-color\" *ngFor=\"let data of displayArray; let i = index;\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\">{{data.key}}:</label>\r\n          <span class=\"col-md-9\">{{data.value}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"accountType === 2\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\">Version Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.version_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> Software Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.software_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"accountType === 3\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> BK Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.bk_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> BK Review Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.bk_review_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"accountType === 4\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> Payroll Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.payroll_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"accountType === 5\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> AP Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.ap_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"accountType === 6\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> AR Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.ar_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"accountType === 7\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> DM Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.dm_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"accountType === 8\">\r\n      <div class=\"col-md-6 label-span-color\">\r\n        <div class=\"MB-10\">\r\n          <label class=\"fw-500\"> Tax Notes:</label>\r\n          <span class=\"col-md-9\"><a (click)=\"onClientServicesNotesDialog(clientData?.tax_notes)\"\r\n                                    class=\"cursor-pointer light-orange-color\"><mat-icon class=\"v-align-middle\">remove_red_eye </mat-icon></a> </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--<span class=\"panel-title orange-color\" *ngIf=\"displayArray.length <=0\">-->\r\n    <!--No Data found.-->\r\n    <!--</span>-->\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctbWFpbi1jbGllbnQvdmlldy1ib29ra2VlcGluZy1tYWluL3ZpZXctYm9va2tlZXBpbmctbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ViewBookkeepingMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookkeepingMainComponent", function() { return ViewBookkeepingMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_shared_service_apimanager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/apimanager.service */ "./src/utility/shared-service/apimanager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _main_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main.model */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/main.model.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _client_info_services_notes_dialog_client_info_services_notes_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../client-info-services-notes-dialog/client-info-services-notes-dialog.component */ "./src/app/admin/client-module/view-client/client-info-services-notes-dialog/client-info-services-notes-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewBookkeepingMainComponent = /** @class */ (function () {
    function ViewBookkeepingMainComponent(_apiManager, _router, _commonCrudService, _sharedService, dialog) {
        this._apiManager = _apiManager;
        this._router = _router;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this.dialog = dialog;
        this.isActiveTab = 0;
        this.mainClientResponse = [];
        this.softwareTab = [];
        this.clientData = null;
        this.fieldList = [];
        this.fieldValue = {};
        this.tabChildData = [];
        this.fieldType = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["FIELDTYPE"];
        this.group = {};
        this.displayArray = [];
    }
    ViewBookkeepingMainComponent.prototype.ngOnInit = function () {
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].CLIENT);
        this.initializeMethod();
    };
    /**
     * Initialization Methods
     */
    ViewBookkeepingMainComponent.prototype.initializeMethod = function () {
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_4__["GLOBALDATAKEYS"].CLIENT);
        this.tabChildData = this.tab['child'] || [];
        this.accountType = this.tab.id;
        this.getFieldValueOfGroup();
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_HISTORY + '/' + this.tab.id,
            params: { 'entity_id': this.clientData.id },
        };
        this._sharedService.setHistoryURL(value);
    };
    // Handle Entity Response for tabs
    ViewBookkeepingMainComponent.prototype.handleMainClientResponse = function (response) {
        // assign data to array
        this.mainClientResponse = response.payload.tabs;
        this.softwareTab = response.payload.group[1];
    };
    ViewBookkeepingMainComponent.prototype.onChangeService = function (event) {
        this.displayArray = [];
        this.accountType = event.value;
        this.getSubFieldValueOfGroup(this.accountType);
        this.currentTabName = (event.source.triggerValue) ? event.source.triggerValue : '';
        var value = {
            url: _utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_HISTORY + '/' + this.accountType,
            params: { 'entity_id': this.clientData.id },
        };
        this._sharedService.setHistoryURL(value);
    };
    /**
     * Get Field Value of that group/tab
     */
    ViewBookkeepingMainComponent.prototype.getSubFieldValueOfGroup = function (tab_id) {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_BASIC, this.clientData.id, { 'tab': tab_id }).subscribe(function (Response) {
            _this.valueJson = Response.payload.data;
            _this.handleFieldValueResponse(Response);
            _this.getSubFieldList(tab_id);
        });
    };
    /**
     * Get Field List for all tabs
     */
    ViewBookkeepingMainComponent.prototype.getSubFieldList = function (tab_id) {
        var _this = this;
        var params = { 'view': 1 };
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].GROUP_WISE_ENTITY_FIELD_LIST, tab_id, params).subscribe(function (Response) {
            _this.handleFieldResponse(Response);
        });
    };
    ViewBookkeepingMainComponent.prototype.handleFieldResponse = function (response) {
        // assign data to array
        this.fieldList = (response.payload.data.fields) ? response.payload.data.fields : [];
        this.generateArray();
    };
    /**
     * Handle Value of that group/tab
     * @param response
     */
    ViewBookkeepingMainComponent.prototype.handleFieldValueResponse = function (response) {
        // assign data to array
        this.fieldValue = (response.payload.data.dynamic_json) ? JSON.parse(response.payload.data.dynamic_json) : [];
        // this.generateArray();
    };
    /**
     * Get Field Value of that group/tab
     */
    ViewBookkeepingMainComponent.prototype.getFieldValueOfGroup = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].CLIENT_BASIC, this.clientData.id, { 'tab': this.tab.id }).subscribe(function (Response) {
            _this.handleFieldValueResponse(Response);
            _this.getFieldList();
            _this.valueJson = Response.payload.data;
            _this.currentTabName = (_this.tab.group_name) ? _this.tab.group_name : '';
        });
    };
    /**
     * Get Field List for all tabs
     */
    ViewBookkeepingMainComponent.prototype.getFieldList = function () {
        var _this = this;
        var params = { 'view': 1 };
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_5__["AdminAPI"].GROUP_WISE_ENTITY_FIELD_LIST, this.tab.id, params).subscribe(function (Response) {
            _this.handleFieldResponse(Response);
        });
    };
    ViewBookkeepingMainComponent.prototype.generateArray = function () {
        var valueData = JSON.parse(this.valueJson.dynamic_json);
        // console.log(valueData);
        for (var i = 0; i < this.fieldList.length; i++) {
            if (this.fieldList[i].id) {
                if (valueData && valueData[this.fieldList[i].id]) {
                    this.displayArray.push({ key: this.fieldList[i].field_title, value: valueData[this.fieldList[i].id] });
                }
            }
        }
    };
    ViewBookkeepingMainComponent.prototype.toHTML = function (input) {
        return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
    };
    ViewBookkeepingMainComponent.prototype.onClientServicesNotesDialog = function (notesData) {
        var dialogRef = this.dialog.open(_client_info_services_notes_dialog_client_info_services_notes_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ClientInfoServicesNotesDialogComponent"], {
            panelClass: 'add-form-dialog-container',
            data: {
                notesInfo: notesData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _main_model__WEBPACK_IMPORTED_MODULE_6__["AgreedTabs"])
    ], ViewBookkeepingMainComponent.prototype, "tab", void 0);
    ViewBookkeepingMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-bookkeeping-main',
            template: __webpack_require__(/*! ./view-bookkeeping-main.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.html"),
            styles: [__webpack_require__(/*! ./view-bookkeeping-main.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_apimanager_service__WEBPACK_IMPORTED_MODULE_1__["APIManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
    ], ViewBookkeepingMainComponent);
    return ViewBookkeepingMainComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main tab client html start-->\r\n<div class=\"special-note-container\">\r\n  <mat-tab-group class=\"demo-tab-group\" (selectedTabChange)=\"onSelectTab($event)\">\r\n    <mat-tab label=\"Basic\">\r\n      <div *ngIf=\"isActiveTab === 0\">\r\n        <app-view-basic-main></app-view-basic-main>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Software\">\r\n      <div *ngIf=\"isActiveTab === 1\">\r\n        <app-view-bookkeeping-main [tab]=\"softwareTab\"></app-view-bookkeeping-main>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab *ngFor=\"let tab of mainClientResponse;let i=index\" [label]=\"tab.group_name\">\r\n      <div *ngIf=\"isActiveTab === (i + 2)\">\r\n        <app-view-bookkeeping-main [tab]=\"tab\"></app-view-bookkeeping-main>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n<!--main tab client html over-->\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctbWFpbi1jbGllbnQvdmlldy1tYWluLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ViewMainClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMainClientComponent", function() { return ViewMainClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_service_apimanager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/apimanager.service */ "./src/utility/shared-service/apimanager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewMainClientComponent = /** @class */ (function (_super) {
    __extends(ViewMainClientComponent, _super);
    function ViewMainClientComponent(_apiManager, _router, _commonCrudService, _sharedService) {
        var _this = _super.call(this) || this;
        _this._apiManager = _apiManager;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        // Data Variables
        _this.isActiveTab = 0;
        _this.tab = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["VIEWCLIENTTYPE"].BASIC;
        _this.mainClientResponse = [];
        _this.softwareTab = [];
        return _this;
    }
    ViewMainClientComponent.prototype.ngOnInit = function () {
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].CLIENT);
        this.initializeMethod();
    };
    /**
     * Initialization Methods
     */
    ViewMainClientComponent.prototype.initializeMethod = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_BASIC, this.clientData.id, { 'tab': this.tab }).subscribe(function (Response) {
            _this.handleMainClientResponse(Response);
        });
    };
    // Handle Entity Response for tabs
    ViewMainClientComponent.prototype.handleMainClientResponse = function (response) {
        // assign data to array
        this.mainClientResponse = response.payload.tabs;
        this.softwareTab = response.payload.group[1];
    };
    /**
     * Change tab function
     * @param tabChangeEvent
     */
    ViewMainClientComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
    };
    ViewMainClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-main-client',
            template: __webpack_require__(/*! ./view-main-client.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.html"),
            styles: [__webpack_require__(/*! ./view-main-client.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_apimanager_service__WEBPACK_IMPORTED_MODULE_2__["APIManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], ViewMainClientComponent);
    return ViewMainClientComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/special-notes.model.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/special-notes.model.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SpecialNotesData, ServiceId, CreatedBy, ModifiedBy, IsActive, ArchiveBy, SpecialNotesTabs, Child */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialNotesData", function() { return SpecialNotesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceId", function() { return ServiceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedBy", function() { return CreatedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifiedBy", function() { return ModifiedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsActive", function() { return IsActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveBy", function() { return ArchiveBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialNotesTabs", function() { return SpecialNotesTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child", function() { return Child; });
var SpecialNotesData = /** @class */ (function () {
    function SpecialNotesData() {
    }
    Object.defineProperty(SpecialNotesData.prototype, "modified_by", {
        get: function () {
            return this._modified_by;
        },
        set: function (value) {
            this._modified_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "modified_on", {
        get: function () {
            return this._modified_on;
        },
        set: function (value) {
            this._modified_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "is_active", {
        get: function () {
            return this._is_active;
        },
        set: function (value) {
            this._is_active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "entity_id", {
        get: function () {
            return this._entity_id;
        },
        set: function (value) {
            this._entity_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (value) {
            this._note = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "expiry_on", {
        get: function () {
            return this._expiry_on;
        },
        set: function (value) {
            this._expiry_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "created_by", {
        get: function () {
            return this._created_by;
        },
        set: function (value) {
            this._created_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesData.prototype, "created_on", {
        get: function () {
            return this._created_on;
        },
        set: function (value) {
            this._created_on = value;
        },
        enumerable: true,
        configurable: true
    });
    return SpecialNotesData;
}());

var ServiceId = /** @class */ (function () {
    function ServiceId() {
    }
    Object.defineProperty(ServiceId.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceId.prototype, "service_name", {
        get: function () {
            return this._service_name;
        },
        set: function (value) {
            this._service_name = value;
        },
        enumerable: true,
        configurable: true
    });
    return ServiceId;
}());

var CreatedBy = /** @class */ (function () {
    function CreatedBy() {
    }
    Object.defineProperty(CreatedBy.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatedBy.prototype, "userfullname", {
        get: function () {
            return this._userfullname;
        },
        set: function (value) {
            this._userfullname = value;
        },
        enumerable: true,
        configurable: true
    });
    return CreatedBy;
}());

var ModifiedBy = /** @class */ (function () {
    function ModifiedBy() {
    }
    Object.defineProperty(ModifiedBy.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModifiedBy.prototype, "userfullname", {
        get: function () {
            return this._userfullname;
        },
        set: function (value) {
            this._userfullname = value;
        },
        enumerable: true,
        configurable: true
    });
    return ModifiedBy;
}());

var IsActive = /** @class */ (function () {
    function IsActive() {
    }
    Object.defineProperty(IsActive.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsActive.prototype, "entity_specialnotes_id", {
        get: function () {
            return this._entity_specialnotes_id;
        },
        set: function (value) {
            this._entity_specialnotes_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsActive.prototype, "archive_by", {
        get: function () {
            return this._archive_by;
        },
        set: function (value) {
            this._archive_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsActive.prototype, "archive_on", {
        get: function () {
            return this._archive_on;
        },
        set: function (value) {
            this._archive_on = value;
        },
        enumerable: true,
        configurable: true
    });
    return IsActive;
}());

var ArchiveBy = /** @class */ (function () {
    function ArchiveBy() {
    }
    Object.defineProperty(ArchiveBy.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchiveBy.prototype, "userfullname", {
        get: function () {
            return this._userfullname;
        },
        set: function (value) {
            this._userfullname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArchiveBy.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    return ArchiveBy;
}());

var SpecialNotesTabs = /** @class */ (function () {
    function SpecialNotesTabs() {
    }
    Object.defineProperty(SpecialNotesTabs.prototype, "service_name", {
        get: function () {
            return this._service_name;
        },
        set: function (value) {
            this._service_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesTabs.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesTabs.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecialNotesTabs.prototype, "child", {
        get: function () {
            return this._child;
        },
        set: function (value) {
            this._child = value;
        },
        enumerable: true,
        configurable: true
    });
    return SpecialNotesTabs;
}());

var Child = /** @class */ (function () {
    function Child() {
    }
    Object.defineProperty(Child.prototype, "service_name", {
        get: function () {
            return this._service_name;
        },
        set: function (value) {
            this._service_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Child.prototype, "service_id", {
        get: function () {
            return this._service_id;
        },
        set: function (value) {
            this._service_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Child.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    return Child;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bookkeeping-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 PL-10\">\r\n    </div>\r\n    <div class=\"col-md-2 inline-fields text-right\">\r\n      <mat-radio-group [(ngModel)]=\"selectedType\" (change)=\"onChangeNoteType()\">\r\n        <mat-radio-button value=\"0\">Archived</mat-radio-button>\r\n        <mat-radio-button value=\"1\">Unarchived</mat-radio-button>\r\n      </mat-radio-group>\r\n\r\n      <mat-form-field *ngIf=\"tabChildData.length !== 0\">\r\n        <mat-select placeholder=\"Account Receivable\" [(ngModel)]=\"selectedChildOption\"\r\n                    (selectionChange)=\"onChangeServices()\">\r\n          <mat-option value=\"{{tabInformation.service_id}}\">{{tabInformation.service_name}}\r\n          </mat-option>\r\n          <mat-option *ngFor=\"let service of tabChildData\" value=\"{{service.service_id}}\">{{service.service_name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"bookkeeping-body\">\r\n    <div class=\"list-view\" *ngFor=\"let note of specialNotesList\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n          <div class=\"list-view__left-content\">\r\n            <h3>{{note.created_by?.userfullname}}</h3>\r\n            <p>{{note.note}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <div class=\"list-view__right-content\">\r\n            <div *ngIf=\"note.modified_by\">\r\n              <label>Updated By:</label>\r\n              <span>{{note.modified_by.userfullname}}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"note.modified_on\">\r\n              <label>Updated On:</label>\r\n              <span>{{note.modified_on | date:'dd-MM-yyyy'}}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"(note.expiry_on) && (note.type !== 1)\">\r\n              <label>Expire On:</label>\r\n              <span>{{note.expiry_on | date:'dd-MM-yyyy'}}</span>\r\n            </div>\r\n\r\n            <div>\r\n              <label>Type:</label>\r\n              <span>{{(note.type === 1) ? 'Permanent' : 'Temporary'}}</span>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"list-view__action-icons\" *ngIf=\"note.is_active === 1\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"list-view__archived-list\">\r\n            <div *ngIf=\"note.archive_by\">\r\n              <label>Archived By:</label>\r\n              <span>{{note.archive_by?.archive_by?.userfullname}}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"note.archive_by\">\r\n              <label>Archived On:</label>\r\n              <span>{{note.archive_by?.archive_on | date:'dd-MM-yyyy'}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"specialNotesList['length'] === 0\">\r\n  <span class=\"panel-title orange-color\" *ngIf=\"specialNotesList['length'] <=0\">\r\n      No Data found.\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctc3BlY2lhbC1ub3Rlcy92aWV3LWJvb2trZWVwaW5nL3ZpZXctYm9va2tlZXBpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ViewBookkeepingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookkeepingComponent", function() { return ViewBookkeepingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _special_notes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../special-notes.model */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/special-notes.model.ts");
/* harmony import */ var _view_client_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../view-client.model */ "./src/app/admin/client-module/view-client/view-client.model.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewBookkeepingComponent = /** @class */ (function (_super) {
    __extends(ViewBookkeepingComponent, _super);
    function ViewBookkeepingComponent(dialog, _commonCrudService) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this._commonCrudService = _commonCrudService;
        // Data related variables
        _this.tabChildData = [];
        _this.specialNotesList = [];
        _this.selectedType = '1';
        return _this;
    }
    ViewBookkeepingComponent.prototype.ngOnInit = function () {
        this.tabChildData = this.tabInformation['child'] || [];
        this.selectedChildOption = (this.tabInformation.service_id).toString();
        this.serviceId = this.tabInformation.service_id;
        this.getBookkeepingList(this.serviceId);
        // this.onChangeNoteType();
    };
    // Initialization methods
    /**
     * get List based on selected tab on special note page
     * @param {number} serviceId
     */
    ViewBookkeepingComponent.prototype.getBookkeepingList = function (serviceId) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_SPECIAL_NOTES + '/' + this.clientInfo.id, { records: 'all' }, this.getSearchParam(serviceId)).subscribe(function (response) {
            _this.handleSpecialNoteTabResponse(response);
        });
    };
    ViewBookkeepingComponent.prototype.handleSpecialNoteTabResponse = function (response) {
        this.specialNotesList = response['payload']['data'];
    };
    // Page events
    /**
     * When changing "Archived" and "Unarchived" special notes type
     */
    ViewBookkeepingComponent.prototype.onChangeNoteType = function () {
        this.getBookkeepingList(this.serviceId);
    };
    /**
     * Event when changing child service from drop-down
     */
    ViewBookkeepingComponent.prototype.onChangeServices = function () {
        this.serviceId = +(this.selectedChildOption);
        this.getBookkeepingList(this.serviceId);
    };
    /**
     * Open confirmation dialog when deleting special note
     * @param {SpecialNotesData} note
     */
    ViewBookkeepingComponent.prototype.openConfirmationDialog = function (note) {
        var _this = this;
        var dialogConfigData = {
            panelClass: 'add-bookkeeping-dialog-panel-container',
            data: {
                header: 'Special note - Confirmation Dialog',
                content: 'Are you sure you want to delete this note?'
            }
        };
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], dialogConfigData);
        dialogRef.afterClosed().subscribe(function (value) {
            if (value) {
                _this.onDeleteNote(note);
            }
        });
    };
    /**
     * Delete note method
     * @param note
     */
    ViewBookkeepingComponent.prototype.onDeleteNote = function (note) {
        var _this = this;
        this._commonCrudService.deleteData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].CLIENT_SPECIAL_NOTES, note.id).subscribe(function () {
            _this.getBookkeepingList(_this.serviceId);
        });
    };
    // Helpers
    /**
     * Get search params for get API
     * @param {number} serviceId
     * @returns {{}}
     */
    ViewBookkeepingComponent.prototype.getSearchParam = function (serviceId) {
        var params = {};
        var filter = {};
        var filterData = {
            service_id: serviceId.toString(),
            is_active: this.selectedType.toString()
        };
        filter['equal'] = filterData;
        params['compare'] = filter;
        return params;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _special_notes_model__WEBPACK_IMPORTED_MODULE_3__["SpecialNotesTabs"])
    ], ViewBookkeepingComponent.prototype, "tabInformation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _view_client_model__WEBPACK_IMPORTED_MODULE_4__["Clients"])
    ], ViewBookkeepingComponent.prototype, "clientInfo", void 0);
    ViewBookkeepingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-bookkeeping',
            template: __webpack_require__(/*! ./view-bookkeeping.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.html"),
            styles: [__webpack_require__(/*! ./view-bookkeeping.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"]])
    ], ViewBookkeepingComponent);
    return ViewBookkeepingComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Admin View Client special notes html view -->\r\n<div class=\"special-note-container\">\r\n  <mat-tab-group class=\"demo-tab-group\" (selectedTabChange)=\"onSelectSpecialNoteTab($event)\">\r\n    <mat-tab *ngFor=\"let tab of tabList; let i = index\" label=\"{{tab.service_name}}\">\r\n      <div *ngIf=\"isActiveTab === i\">\r\n        <app-view-bookkeeping [tabInformation]=\"tab\" [clientInfo]=\"clientInformation\"></app-view-bookkeeping>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n\r\n<div *ngIf=\"!(clientInformation.is_service)\" class=\"panel-title red-color\">\r\n  No service agreed by client!\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctc3BlY2lhbC1ub3Rlcy92aWV3LXNwZWNpYWwtbm90ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ViewSpecialNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpecialNotesComponent", function() { return ViewSpecialNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_client_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view-client.model */ "./src/app/admin/client-module/view-client/view-client.model.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewSpecialNotesComponent = /** @class */ (function () {
    function ViewSpecialNotesComponent(_commonCrudService) {
        this._commonCrudService = _commonCrudService;
        // Data related variables
        this.tabList = [];
        this.isActiveTab = 0;
    }
    ViewSpecialNotesComponent.prototype.ngOnInit = function () {
        this.getSpecialNoteData();
    };
    // Initialization methods
    ViewSpecialNotesComponent.prototype.getSpecialNoteData = function () {
        var _this = this;
        if (this.clientInformation.is_service) {
            this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_3__["AdminAPI"].CLIENT_SPECIAL_NOTES + '/' + this.clientInformation.id, {}, {})
                .subscribe(function (response) {
                _this.handleSpecialNoteResponse(response);
            });
        }
    };
    ViewSpecialNotesComponent.prototype.handleSpecialNoteResponse = function (response) {
        this.tabList = response['payload']['tabs'];
    };
    // Page events
    ViewSpecialNotesComponent.prototype.onSelectSpecialNoteTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _view_client_model__WEBPACK_IMPORTED_MODULE_1__["Clients"])
    ], ViewSpecialNotesComponent.prototype, "clientInformation", void 0);
    ViewSpecialNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-special-notes',
            template: __webpack_require__(/*! ./view-special-notes.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.html"),
            styles: [__webpack_require__(/*! ./view-special-notes.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_2__["CommonCrudService"]])
    ], ViewSpecialNotesComponent);
    return ViewSpecialNotesComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"other-information-container\">\r\n  <div class=\"with-filter-grid-container\">\r\n    <div class=\"MT-10\"></div>\r\n    <!--start other information grid-->\r\n    <span class=\"panel-title orange-color\">Frequency Trigger Information Details</span>\r\n    <span *ngIf=\"triggerInformationData\">\r\n      <span>Start Date : {{triggerInformationData.start_date | date :'dd-MM-yyyy'}}</span>\r\n      <span> End Date : {{triggerInformationData.end_date | date :'dd-MM-yyyy'}}</span>\r\n    </span>\r\n    <!-- Start grid -->\r\n    <br>\r\n    <span class=\"panel-title orange-color\" *ngIf=\"triggerInformationData?.is_stop === 1\"> The frequency of information is marked as stop to trigger the information. </span>\r\n    <!--Start add Trigger form-->\r\n    <form [formGroup]=\"addTriggerInfoForm\" class=\"col-md-9\" (submit)=\"onSavePreview(addTriggerInfoForm)\"\r\n          #triggerInfoFormData=\"ngForm\">\r\n\r\n      <div *ngIf=\"!isPreview\">\r\n        <div class=\"row\">\r\n          <div class=\"row col-md-8 MT-20\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Frequency</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Please Select\" formControlName=\"frequency_id\" disableControl=\"true\">\r\n                  <mat-option *ngFor=\"let frequency of frequencyList\" [value]=\"frequency.id\">\r\n                    {{frequency.frequency_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Trigger Months</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Please Select\" formControlName=\"month\" disableControl=\"true\">\r\n                  <mat-option *ngFor=\"let month of monthList\" [value]=\"month.key\">{{month.label}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Trigger Year</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Please Select\" formControlName=\"year\" disableControl=\"true\">\r\n                  <mat-option *ngFor=\"let year of yearList\" [value]=\"year.key\">{{year.value}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Trigger Date</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Please Select\" formControlName=\"trigger_day\" disableControl=\"true\">\r\n                  <mat-option *ngFor=\"let day of daysList\" [value]=\"day.key\">{{day.value}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!--<div class=\"col-md-12 text-right PR-0 MTB-20\">-->\r\n              <!--<button type=\"submit\" class=\"btn-success MR-5\" [disabled]=\"addTriggerInfoForm.invalid\"-->\r\n                      <!--(click)=\"isConfirmData(0)\">Save & Preview-->\r\n              <!--</button>-->\r\n              <!--<button  *ngIf=\"triggerInformationData?.id > 0\" type=\"submit\" class=\"btn-orange MR-5\" [disabled]=\"triggerInformationData?.is_stop === 1\"-->\r\n                      <!--(click)=\"isConfirmData(2)\">Stop Trigger-->\r\n              <!--</button>-->\r\n              <!--<button type=\"button\" class=\"btn-default MR-5\" (click)=\"resetForm()\">Cancel</button>-->\r\n            <!--</div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--End Trigger details form-->\r\n\r\n      <div class=\"table-container dialog-table-container\" *ngIf=\"isPreview\">\r\n        <div class=\"table-block\">\r\n          <table class=\"PT-0\">\r\n            <thead>\r\n            <tr>\r\n              <th width=\"5%\">Sr. No</th>\r\n              <th width=\"35%\">Frequency</th>\r\n              <th width=\"30%\">Period</th>\r\n              <th width=\"%\">Date</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let triggerinformationlist of triggerInformationList; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{triggerinformationlist['frequency']}}</td>\r\n              <td>{{triggerinformationlist['startDate'] | date : 'dd-MM-yyyy'}} To {{triggerinformationlist['endDate'] |\r\n                date : 'dd-MM-yyyy'}}\r\n              </td>\r\n              <td>{{triggerinformationlist['triggerDate'] | date : 'dd-MM-yyyy'}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn-success MR-5\" [disabled]=\"addTriggerInfoForm.invalid\"\r\n                (click)=\"isConfirmData(1)\">Submit\r\n        </button>\r\n        <button type=\"button\" class=\"btn-primary MR-5\" (click)=\"onClickShowForm()\">Back</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctdHJpZ2dlci1pbmZvcm1hdGlvbi92aWV3LXRyaWdnZXItaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ViewTriggerInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTriggerInformationComponent", function() { return ViewTriggerInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ViewTriggerInformationComponent = /** @class */ (function (_super) {
    __extends(ViewTriggerInformationComponent, _super);
    function ViewTriggerInformationComponent(dialog, _fb, _commonCrudService, _sharedService, _sharedObjService, _router) {
        var _this = _super.call(this) || this;
        _this.dialog = dialog;
        _this._fb = _fb;
        _this._commonCrudService = _commonCrudService;
        _this._sharedService = _sharedService;
        _this._sharedObjService = _sharedObjService;
        _this._router = _router;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_3__["ValidationConstantMessage"]();
        _this.clientData = null;
        _this.frequencyList = [];
        _this.yearList = [];
        _this.currentYear = new Date().getFullYear();
        _this.monthList = [];
        _this.daysList = [];
        _this.isPreview = false;
        _this.triggerInformationList = [];
        _this.isConfirm = 0;
        _this.triggerInformationData = null;
        return _this;
    }
    ViewTriggerInformationComponent.prototype.ngOnInit = function () {
        this.monthList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["LeaveAllowFor"].slice(1, 13);
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].CLIENT);
        this.getFrequency();
        this.getYears();
        this.getDays();
        this.getInformationTriggerData();
        this.createAddTriggerinfoForm();
    };
    /**
     * Get Information Trigger Data
     */
    ViewTriggerInformationComponent.prototype.getInformationTriggerData = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].INFORMATION_REQUIRED_TRIGGER_SHOW + '/' + this.clientData.id, {}).subscribe(function (response) {
            _this.triggerInformationData = response.payload.data;
            _this.createAddTriggerinfoForm();
        });
    };
    /**
     * Get Frequency List
     */
    ViewTriggerInformationComponent.prototype.getFrequency = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].FREQUENCY, {}, { "in": { "id": "3,4,5,6" } }).subscribe(function (response) {
            if (response) {
                _this.frequencyList = response.payload.data;
                // console.log(this.frequencyList);
            }
        });
    };
    /**
     * Create Add Trigger Information
     */
    ViewTriggerInformationComponent.prototype.createAddTriggerinfoForm = function () {
        // console.log(this.triggerInformationData);
        this.addTriggerInfoForm = this._fb.group({
            entity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.clientData.id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            frequency_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.triggerInformationData ? this.triggerInformationData.frequency_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.triggerInformationData ? this.triggerInformationData.month : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.triggerInformationData ? this.triggerInformationData.year : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            trigger_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.triggerInformationData ? this.triggerInformationData.trigger_day : null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    /**
     * on Save Preview
     */
    ViewTriggerInformationComponent.prototype.onSavePreview = function (form) {
        var _this = this;
        if (this.isConfirm === 2) {
            var dialogConfigData = {
                panelClass: '',
                data: {
                    header: 'Stop Trigger Information',
                    content: 'Are you sure you want to stop this information trigger?'
                }
            };
            var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"], dialogConfigData);
            dialogRef.afterClosed().subscribe(function (value) {
                if (value) {
                    _this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].INFORMATION_REQUIRED_TRIGGER_STOP, _this.triggerInformationData.id).subscribe(function (response) {
                        _this.getInformationTriggerData();
                    });
                }
            });
        }
        else {
            if (form.valid) {
                form.value['confirm'] = this.isConfirm;
                form.value['month'] = this.addTriggerInfoForm.get('month').value;
                form.value['year'] = this.addTriggerInfoForm.get('year').value;
                // this._router.navigate([AdminRoutes.UPDATE_CLIENT_TRIGGERINFO_PREVIEW]);
                if (this.isConfirm === 0) {
                    this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].INFORMATION_REQUIRED_TRIGGER_PREVIEW + '/' + 0, form.value).subscribe(function (response) {
                        _this.isPreview = true;
                        _this.triggerInformationList = response.payload.data;
                    });
                }
                else {
                    var id = this.triggerInformationData && this.triggerInformationData.id > 0 ? this.triggerInformationData.id : 0;
                    this._commonCrudService.updateData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_9__["AdminAPI"].INFORMATION_REQUIRED_TRIGGER_PREVIEW, id, form.value).subscribe(function (response) {
                        _this.isPreview = false;
                        _this.resetForm();
                    });
                }
            }
        }
    };
    /**
     * Get Years
     */
    ViewTriggerInformationComponent.prototype.getYears = function () {
        this.currentYear = new Date().getFullYear();
        var defaultYear = 5;
        var diff = this.currentYear + defaultYear;
        for (var i = this.currentYear; i <= diff; i++) {
            var newYear = i;
            this.yearList.push({ 'key': newYear, 'value': newYear });
        }
    };
    /**
     * Get Days
     */
    ViewTriggerInformationComponent.prototype.getDays = function () {
        for (var i = 1; i <= 29; i++) {
            this.daysList.push({ 'key': i, 'value': i });
        }
    };
    /**
     * Hide Show Preview
     */
    ViewTriggerInformationComponent.prototype.onClickShowForm = function () {
        this.isPreview = false;
    };
    /**
     * Reset Form
     */
    ViewTriggerInformationComponent.prototype.resetForm = function () {
        this.triggerInfoFormData.resetForm();
        this.getInformationTriggerData();
        this.createAddTriggerinfoForm();
    };
    /**
     * Is Confirm Submit Button
     * @param value
     */
    ViewTriggerInformationComponent.prototype.isConfirmData = function (value) {
        this.isConfirm = value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('triggerInfoFormData'),
        __metadata("design:type", Object)
    ], ViewTriggerInformationComponent.prototype, "triggerInfoFormData", void 0);
    ViewTriggerInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-trigger-information',
            template: __webpack_require__(/*! ./view-trigger-information.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.html"),
            styles: [__webpack_require__(/*! ./view-trigger-information.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_6__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_8__["SharedObjService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewTriggerInformationComponent);
    return ViewTriggerInformationComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"update-client-container\">\r\n\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>CLIENT</span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\"><a (click)=\"onClient()\">VIEW CLIENT</a></span>\r\n\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">VIEW CLIENT'S INFORMATION | </span>\r\n          <span *ngIf=\"clientData?.is_parent === 0\"> Parent Client : {{clientData?.parent_entity?.trading_name}} | </span>\r\n          <span>{{clientData?.code}} - {{clientData?.name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <!--start tab menu-->\r\n  <div class=\"update-client\">\r\n    <!--<mat-tab-group class=\"demo-tab-group contact-tab\" [selectedIndex]=\"selectedIndexData\"  (selectedTabChange)=\"onSelectTab($event)\">-->\r\n    <mat-tab-group class=\"demo-tab-group contact-tab\" [selectedIndex]=\"selectedIndexData\"\r\n                   (selectedTabChange)=\"onSelectTab($event)\">\r\n      <mat-tab label=\"Main\" *ngIf=\"tabData['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Main'\">\r\n          <app-view-main-client></app-view-main-client>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Client Allocation\" *ngIf=\"tabDataClientAllocation['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Client Allocation'\">\r\n          <app-view-client-allocation [tabInformation]=\"clientTabInfo\"></app-view-client-allocation>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Bank Information\" *ngIf=\"tabDataBank['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Bank Information'\">\r\n          <app-view-bank-information></app-view-bank-information>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Client Checklist\" *ngIf=\"tabDataChecklist['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Client Checklist'\">\r\n          <app-view-client-checklist [clientInformation]=\"clientData\"></app-view-client-checklist>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Special Notes\" *ngIf=\"tabDataNotes['view']\">\r\n        <div *ngIf=\"isActiveTabText === 'Special Notes'\">\r\n          <app-view-special-notes [clientInformation]=\"clientData\"></app-view-special-notes>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Trigger Information\">\r\n        <div *ngIf=\"isActiveTabText === 'Trigger Information'\">\r\n          <app-view-trigger-information></app-view-trigger-information>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Worksheet Schedule\" *ngIf=\"clientData?.discontinue_stage == 0\">\r\n        <div *ngIf=\"isActiveTabText === 'Worksheet Schedule'\">\r\n          <app-view-auto-worksheet></app-view-auto-worksheet>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n  <!--end tab menu-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2NsaWVudC1tb2R1bGUvdmlldy1jbGllbnQvdmlldy11cGRhdGUtY2xpZW50L3ZpZXctdXBkYXRlLWNsaWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: Views, ViewUpdateClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return Views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUpdateClientComponent", function() { return ViewUpdateClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/components/common-history-dialog/common-history-dialog.component */ "./src/utility/components/common-history-dialog/common-history-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Views;
(function (Views) {
    Views[Views["HISTORY_MODAL"] = 0] = "HISTORY_MODAL";
})(Views || (Views = {}));
var ViewUpdateClientComponent = /** @class */ (function () {
    function ViewUpdateClientComponent(_router, dialog, _sharedService, _commonCrudService) {
        var _this = this;
        this._router = _router;
        this.dialog = dialog;
        this._sharedService = _sharedService;
        this._commonCrudService = _commonCrudService;
        // Constant Variables
        this.enumView = Views;
        this.isOpenHistoryDialog = false;
        // State related variables
        this.showHistory = true;
        this.isActiveTab = 0;
        this.isActiveTabText = 'Main';
        this.selectedIndexData = 0;
        this.tabIDCL = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].CLIENT_CLIENTALLOCATION;
        this.tabIDBANK = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].CLIENT_BANKINFORMATION;
        this.tabIDCLCHECK = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].CLIENT_CLIENTCHECKLIST;
        this.tabIDSPNOTE = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].CLIENT_SPECIALNOTES;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_6__["ADMINTABACCESS"].CLIENT_VIEWCLIENT;
        // Don't remove this code.
        this.tabChanged = function (tabChangeEvent) {
            _this.isActiveTab = tabChangeEvent.index;
            _this.isActiveTabText = tabChangeEvent.tab.textLabel;
            if ((tabChangeEvent['index'] === 4) || (tabChangeEvent['index'] === 2)) {
                _this.showHistory = false;
            }
            else {
                _this.showHistory = true;
            }
        };
    }
    ViewUpdateClientComponent.prototype.ngOnInit = function () {
        // To Check Access Rights
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.tabDataClientAllocation = this._sharedService.checkUserPrivilegesTabs(this.tabIDCL);
        this.tabDataBank = this._sharedService.checkUserPrivilegesTabs(this.tabIDBANK);
        this.tabDataChecklist = this._sharedService.checkUserPrivilegesTabs(this.tabIDCLCHECK);
        this.tabDataNotes = this._sharedService.checkUserPrivilegesTabs(this.tabIDSPNOTE);
        this.clientData = this._sharedService.getClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["GLOBALDATAKEYS"].CLIENT);
        /**
         * Code For Change Tab if click from system setup stages
         */
        var ActiveTab = this._sharedService.getRedirectParameter(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["REDIRECTPARAMKEYS"].CLIENT_TAB_ACTIVE);
        if (ActiveTab) {
            this.selectedIndexData = ActiveTab['activeTab'];
            this.isActiveTab = ActiveTab['activeTab'];
            if (this.isActiveTab === 1) {
                this.isActiveTabText = 'Main';
            }
            if (this.isActiveTab === 3) {
                this.isActiveTabText = 'Client Allocation';
            }
        }
        this._sharedService.setRedirectParameter(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_5__["REDIRECTPARAMKEYS"].CLIENT_TAB_ACTIVE, null);
        this.getClientInfo();
    };
    ViewUpdateClientComponent.prototype.getClientInfo = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].CLIENT_BASIC, this.clientData.id, { 'tab': '1' }).subscribe(function (Response) {
            _this.clientTabInfo = (Response.payload.tabs) ? Response.payload.tabs : [];
            // console.log(this.clientTabInfo);
        });
    };
    /**
     * View clinet page redirect
     */
    ViewUpdateClientComponent.prototype.onClient = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].VIEW_CLIENT]);
    };
    ViewUpdateClientComponent.prototype.onSelectTab = function (tabChangeEvent) {
        this.isActiveTab = tabChangeEvent['index'];
        this.isActiveTabText = tabChangeEvent.tab.textLabel;
        if ((tabChangeEvent['index'] === 4) || (tabChangeEvent['index'] === 2)) {
            this.showHistory = false;
        }
        else {
            this.showHistory = true;
        }
    };
    ViewUpdateClientComponent.prototype.onSelectedIndexChange = function (newTabIndex) {
        // console.log(newTabIndex);
        if (this.isActiveTab !== newTabIndex) {
            this.isActiveTab = newTabIndex;
            this.isActiveTabText = newTabIndex.tab.textLabel;
            // this.selectedIndexData = this.tabList[newTabIndex].id;
        }
        else {
            // this.selectedIndexData == newTabIndex;
            // this.selectedInvoiceStatus = this.tabList[this.isActiveTab].id;
        }
    };
    /**
     * Open modal method
     * @param dialogName
     */
    ViewUpdateClientComponent.prototype.onOpenModal = function (dialogName) {
        switch (dialogName) {
            case 'history':
                this.activeView = this.enumView.HISTORY_MODAL;
                break;
        }
    };
    /**
     * Show History Functions
     */
    ViewUpdateClientComponent.prototype.onShowHistory = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(_utility_components_common_history_dialog_common_history_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CommonHistoryDialogComponent"], dialogConfig);
    };
    /**
     * On home page route
     */
    ViewUpdateClientComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_2__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    ViewUpdateClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-update-client',
            template: __webpack_require__(/*! ./view-update-client.component.html */ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.html"),
            styles: [__webpack_require__(/*! ./view-update-client.component.scss */ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"]])
    ], ViewUpdateClientComponent);
    return ViewUpdateClientComponent;
}());



/***/ }),

/***/ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/client-module/view-client/view-update-client/view-update-client.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ViewUpdateClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUpdateClientModule", function() { return ViewUpdateClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _view_update_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-update-client.component */ "./src/app/admin/client-module/view-client/view-update-client/view-update-client.component.ts");
/* harmony import */ var _view_bank_information_view_bank_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-bank-information/view-bank-information.component */ "./src/app/admin/client-module/view-client/view-update-client/view-bank-information/view-bank-information.component.ts");
/* harmony import */ var _view_client_allocation_view_client_allocation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-client-allocation/view-client-allocation.component */ "./src/app/admin/client-module/view-client/view-update-client/view-client-allocation/view-client-allocation.component.ts");
/* harmony import */ var _view_client_checklist_view_client_checklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-client-checklist/view-client-checklist.component */ "./src/app/admin/client-module/view-client/view-update-client/view-client-checklist/view-client-checklist.component.ts");
/* harmony import */ var _view_main_client_view_main_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-main-client/view-main-client.component */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-main-client.component.ts");
/* harmony import */ var _view_special_notes_view_special_notes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-special-notes/view-special-notes.component */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-special-notes.component.ts");
/* harmony import */ var _view_main_client_view_basic_main_view_basic_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-main-client/view-basic-main/view-basic-main.component */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-basic-main/view-basic-main.component.ts");
/* harmony import */ var _view_main_client_view_bookkeeping_main_view_bookkeeping_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-main-client/view-bookkeeping-main/view-bookkeeping-main.component */ "./src/app/admin/client-module/view-client/view-update-client/view-main-client/view-bookkeeping-main/view-bookkeeping-main.component.ts");
/* harmony import */ var _view_special_notes_view_bookkeeping_view_bookkeeping_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-special-notes/view-bookkeeping/view-bookkeeping.component */ "./src/app/admin/client-module/view-client/view-update-client/view-special-notes/view-bookkeeping/view-bookkeeping.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _view_trigger_information_view_trigger_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-trigger-information/view-trigger-information.component */ "./src/app/admin/client-module/view-client/view-update-client/view-trigger-information/view-trigger-information.component.ts");
/* harmony import */ var _view_auto_worksheet_view_auto_worksheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-auto-worksheet/view-auto-worksheet.component */ "./src/app/admin/client-module/view-client/view-update-client/view-auto-worksheet/view-auto-worksheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: _view_update_client_component__WEBPACK_IMPORTED_MODULE_4__["ViewUpdateClientComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_13__["AdminAuthGuard"]]
    },
];
var ViewUpdateClientModule = /** @class */ (function () {
    function ViewUpdateClientModule() {
    }
    ViewUpdateClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _view_update_client_component__WEBPACK_IMPORTED_MODULE_4__["ViewUpdateClientComponent"],
                _view_bank_information_view_bank_information_component__WEBPACK_IMPORTED_MODULE_5__["ViewBankInformationComponent"],
                _view_client_allocation_view_client_allocation_component__WEBPACK_IMPORTED_MODULE_6__["ViewClientAllocationComponent"],
                _view_client_checklist_view_client_checklist_component__WEBPACK_IMPORTED_MODULE_7__["ViewClientChecklistComponent"],
                _view_main_client_view_main_client_component__WEBPACK_IMPORTED_MODULE_8__["ViewMainClientComponent"],
                _view_special_notes_view_special_notes_component__WEBPACK_IMPORTED_MODULE_9__["ViewSpecialNotesComponent"],
                _view_main_client_view_basic_main_view_basic_main_component__WEBPACK_IMPORTED_MODULE_10__["ViewBasicMainComponent"],
                _view_main_client_view_bookkeeping_main_view_bookkeeping_main_component__WEBPACK_IMPORTED_MODULE_11__["ViewBookkeepingMainComponent"],
                _view_special_notes_view_bookkeeping_view_bookkeeping_component__WEBPACK_IMPORTED_MODULE_12__["ViewBookkeepingComponent"],
                _view_trigger_information_view_trigger_information_component__WEBPACK_IMPORTED_MODULE_14__["ViewTriggerInformationComponent"],
                _view_auto_worksheet_view_auto_worksheet_component__WEBPACK_IMPORTED_MODULE_15__["ViewAutoWorksheetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_3__["UtilityModule"]
            ],
            entryComponents: []
        })
    ], ViewUpdateClientModule);
    return ViewUpdateClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-update-client-view-update-client-module.js.map