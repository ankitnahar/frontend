(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-hrms-new-admin-hrms-new-module"],{

/***/ "./src/app/admin/admin-hrms-new/admin-hrms-new.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/admin-hrms-new.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hrms-container\">\r\n  <div class=\"row col-md-12\">\r\n    <div class=\"row col-md-12 PLR-0\">\r\n      <div class=\"col-md-8 PL-0 MT-15\">\r\n        <h3 class=\"bredcum_title\">\r\n          <mat-icon class=\"v-align-middle MR-5\">dashboard</mat-icon>\r\n          My Dashboard\r\n        </h3>\r\n      </div>\r\n      <div class=\"col-md-2 PR-0\">\r\n        <mat-form-field floatLabel=\"never\" *ngIf=\"masterMenuList.length\">\r\n          <mat-select placeholder=\"Months\" (selectionChange)=\"onChangeTypeOfView($event.value)\"\r\n                      [value]=\"masterMenuList[0]['type']\">\r\n            <mat-option *ngFor=\"let masterMenu of masterMenuList;\" [value]=\"masterMenu.type\">{{masterMenu.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-2 PR-0\">\r\n        <mat-form-field floatLabel=\"never\" *ngIf=\"yearMonth.length\">\r\n          <mat-select placeholder=\"Months\" (selectionChange)=\"onChangeGetValue($event.value)\"\r\n                      [value]=\"yearMonth[0]['key']\">\r\n            <mat-option *ngFor=\"let year of yearMonth;\" [value]=\"year.key\">{{year.label}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 PL-0\">\r\n      <mat-card class=\"counter\">\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MB-10\">\r\n              <a (click)=\"attendanceSummary('2', selectedYearMonth, 'adminView', 'status')\" *ngIf=\"typeOfView === 1\">\r\n                <label>{{dashboardDetail?.adminView?.pendingRequest}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('2', selectedYearMonth, 'myView', 'status')\" *ngIf=\"typeOfView === 2\">\r\n                <label>{{dashboardDetail?.myView?.pendingRequest}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('2', selectedYearMonth, 'teamView', 'status')\" *ngIf=\"typeOfView === 3\">\r\n                <label>{{dashboardDetail?.teamView?.pendingRequest}}</label>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>Pending Request</mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 PL-0\">\r\n      <mat-card class=\"counter\">\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MB-10\">\r\n              <a (click)=\"attendanceSummary('3,4', selectedYearMonth, 'adminView', 'status')\" *ngIf=\"typeOfView === 1\">\r\n                <label class=\"l2\">{{dashboardDetail?.adminView?.pendingForApproval}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3,4', selectedYearMonth, 'myView', 'status')\" *ngIf=\"typeOfView === 2\">\r\n                <label class=\"l2\">{{dashboardDetail?.myView?.pendingForApproval}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3,4', selectedYearMonth, 'teamView', 'status')\" *ngIf=\"typeOfView === 3\">\r\n                <label class=\"l2\">{{dashboardDetail?.teamView?.pendingForApproval}}</label>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>Pending Approval</mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 PL-0\">\r\n      <mat-card class=\"counter\">\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MB-10\">\r\n              <a (click)=\"attendanceSummary('6', selectedYearMonth, 'adminView', 'status')\" *ngIf=\"typeOfView === 1\">\r\n                <label class=\"13\">{{dashboardDetail?.adminView?.rejected}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('6', selectedYearMonth, 'myView', 'status')\" *ngIf=\"typeOfView === 2\">\r\n                <label class=\"13\">{{dashboardDetail?.myView?.rejected}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('6', selectedYearMonth, 'teamView', 'status')\" *ngIf=\"typeOfView === 3\">\r\n                <label class=\"13\">{{dashboardDetail?.teamView?.rejected}}</label>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>Rejected</mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 PL-0\">\r\n      <mat-card class=\"counter\">\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MB-10\">\r\n              <a (click)=\"attendanceSummary('5', selectedYearMonth, 'adminView', 'status')\" *ngIf=\"typeOfView === 1\">\r\n                <label class=\"14\">{{dashboardDetail?.adminView?.approved}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('5', selectedYearMonth, 'myView', 'status')\" *ngIf=\"typeOfView === 2\">\r\n                <label class=\"14\">{{dashboardDetail?.myView?.approved}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('5', selectedYearMonth, 'teamView', 'status')\" *ngIf=\"typeOfView === 3\">\r\n                <label class=\"14\">{{dashboardDetail?.teamView?.approved}}</label>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>Approved</mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 PL-0\">\r\n      <mat-card class=\"counter\">\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MB-10\">\r\n              <a (click)=\"attendanceSummary('0', selectedYearMonth, 'adminView', 'stage_id')\" *ngIf=\"typeOfView === 1\">\r\n                <label class=\"15\">{{dashboardDetail?.adminView?.pendingTimesheet}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('0', selectedYearMonth, 'myView', 'stage_id')\" *ngIf=\"typeOfView === 2\">\r\n                <label class=\"15\">{{dashboardDetail?.myView?.pendingTimesheet}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('0', selectedYearMonth, 'teamView', 'stage_id')\" *ngIf=\"typeOfView === 3\">\r\n                <label class=\"15\">{{dashboardDetail?.teamView?.pendingTimesheet}}</label>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>Pending Timesheet</mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 PLR-0\">\r\n      <mat-card class=\"counter\">\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MB-10\">\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'adminView', 'stage_id')\" *ngIf=\"typeOfView === 1\">\r\n                <label class=\"l6\">{{dashboardDetail?.adminView?.approvePendingTimesheet}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'myView', 'stage_id')\" *ngIf=\"typeOfView === 2\">\r\n                <label class=\"l6\">{{dashboardDetail?.myView?.approvePendingTimesheet}}</label>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'teamView', 'stage_id')\" *ngIf=\"typeOfView === 3\">\r\n                <label class=\"l6\">{{dashboardDetail?.teamView?.approvePendingTimesheet}}</label>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n        <mat-card-footer>Approved Timesheet</mat-card-footer>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row col-md-12 MT-15\">\r\n    <div class=\"col-md-4 PL-0\">\r\n      <mat-card class=\"attendance\">\r\n        <mat-card-header>\r\n          <mat-card-title>AL & HW</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content class=\"text-center\">\r\n          <div class=\"row col-md-12 PLR-0 MT-10\">\r\n            <div class=\"col-md-7 PL-0\">\r\n              <mat-card class=\"counter\">\r\n                <mat-card-content class=\"text-center\">\r\n                  <ul>\r\n                    <li class=\"MB-10\">\r\n                      <a (click)=\"onHolidayRequestcount()\"\r\n                         *ngIf=\"typeOfView === 1\">\r\n                        <label class=\"13\">{{dashboardDetail?.adminView?.HoildayRequest}}</label>\r\n                      </a>\r\n                      <a (click)=\"onHolidayRequestcount()\"\r\n                         *ngIf=\"typeOfView === 2\">\r\n                        <label class=\"13\">{{dashboardDetail?.myView?.HoildayRequest}}</label>\r\n                      </a>\r\n                      <a (click)=\"onHolidayRequestcount()\"\r\n                         *ngIf=\"typeOfView === 3\">\r\n                        <label class=\"13\">{{dashboardDetail?.teamView?.HoildayRequest}}</label>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </mat-card-content>\r\n                <mat-card-footer>Holiday Request</mat-card-footer>\r\n              </mat-card>\r\n            </div>\r\n            <div class=\"col-md-5 PLR-0\">\r\n              <mat-card class=\"counter\">\r\n                <mat-card-content class=\"text-center\">\r\n                  <ul>\r\n                    <li class=\"MB-10\">\r\n                      <a (click)=\"onLeaveRequestcount()\"\r\n                         *ngIf=\"typeOfView === 1\">\r\n                        <label class=\"13\">{{dashboardDetail?.adminView?.LeaveRequest}}</label>\r\n                      </a>\r\n                      <a (click)=\"onLeaveRequestcount()\"\r\n                         *ngIf=\"typeOfView === 2\">\r\n                        <label class=\"13\">{{dashboardDetail?.myView?.LeaveRequest}}</label>\r\n                      </a>\r\n                      <a (click)=\"onLeaveRequestcount()\"\r\n                         *ngIf=\"typeOfView === 3\">\r\n                        <label class=\"13\">{{dashboardDetail?.teamView?.LeaveRequest}}</label>\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </mat-card-content>\r\n                <mat-card-footer>Leave Request</mat-card-footer>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"leave_details MT-10\">\r\n        <mat-card-header>\r\n          <mat-card-title><h3>Leave Details</h3>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content class=\"text-center\">\r\n          <div class=\"row\">\r\n            <!--   <div class=\"col-md-12\">\r\n                 <div class=\"summary-section\">\r\n                   <canvas baseChart\r\n                           [datasets]=\"barChartData\"\r\n                           [labels]=\"barChartLabels\"\r\n                           [options]=\"barChartOptions\"\r\n                           [plugins]=\"barChartPlugins\"\r\n                           [legend]=\"barChartLegend\"\r\n                           [chartType]=\"barChartType\"\r\n                           height=\"250\">\r\n                   </canvas>\r\n                 </div>\r\n               </div>-->\r\n            <div class=\"col-md-3 request-count MT-15\">\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'adminView', 'remark')\" *ngIf=\"typeOfView === 1\">\r\n                <h3>{{dashboardDetail?.adminView?.latecoming}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'myView', 'remark')\" *ngIf=\"typeOfView === 2\">\r\n                <h3>{{dashboardDetail?.myView?.latecoming}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'teamView', 'remark')\" *ngIf=\"typeOfView === 3\">\r\n                <h3>{{dashboardDetail?.teamView?.latecoming}}</h3>\r\n              </a>\r\n              <label>Late Coming</label>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 request-count MT-15\">\r\n              <a (click)=\"attendanceSummary('4', selectedYearMonth, 'adminView', 'remark')\" *ngIf=\"typeOfView === 1\">\r\n                <h3>{{dashboardDetail?.adminView?.earlyleaving}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('4', selectedYearMonth, 'myView', 'remark')\" *ngIf=\"typeOfView === 2\">\r\n                <h3>{{dashboardDetail?.myView?.earlyleaving}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('4', selectedYearMonth, 'teamView', 'remark')\" *ngIf=\"typeOfView === 3\">\r\n                <h3>{{dashboardDetail?.teamView?.earlyleaving}}</h3>\r\n              </a>\r\n              <label>Early Leaving</label>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 request-count MT-15\">\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'adminView', 'finalremark')\"\r\n                 *ngIf=\"typeOfView === 1\">\r\n                <h3>{{dashboardDetail?.adminView?.leave}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'myView', 'finalremark')\" *ngIf=\"typeOfView === 2\">\r\n                <h3>{{dashboardDetail?.myView?.leave}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('3', selectedYearMonth, 'teamView', 'finalremark')\"\r\n                 *ngIf=\"typeOfView === 3\">\r\n                <h3>{{dashboardDetail?.teamView?.leave}}</h3>\r\n              </a>\r\n              <label>Leave</label>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 request-count MT-15\">\r\n              <a (click)=\"attendanceSummary('1', selectedYearMonth, 'adminView', 'finalremark')\"\r\n                 *ngIf=\"typeOfView === 1\">\r\n                <h3>{{dashboardDetail?.adminView?.halfday}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('1', selectedYearMonth, 'myView', 'finalremark')\" *ngIf=\"typeOfView === 2\">\r\n                <h3>{{dashboardDetail?.myView?.halfday}}</h3>\r\n              </a>\r\n              <a (click)=\"attendanceSummary('1', selectedYearMonth, 'teamView', 'finalremark')\"\r\n                 *ngIf=\"typeOfView === 3\">\r\n                <h3>{{dashboardDetail?.teamView?.halfday}}</h3>\r\n              </a>\r\n              <label>Half Day</label>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"read_policy MT-10\">\r\n        <mat-card-header>\r\n          <mat-card-title>Quick Links</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content class=\"text-center\">\r\n          <div class=\"list-parent-section\">\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a (click)=\"onAwardeeOfTheMonths()\" class=\"cursor-pointer\">Awardee of the Month</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a (click)=\"onReadPolicies()\" class=\"cursor-pointer\">Read Policies</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\"\r\n                *ngIf=\"isAddTimesheetButtonRights && userData?.user_timesheet_fillup_flag === 1\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3><a (click)=\"onAddTimeSheet()\" class=\"cursor-pointer\">Add Timesheet</a></h3>\r\n              </li>\r\n            </ul>\r\n\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a (click)=\"onDailyReport()\" class=\"cursor-pointer\">Daily Report</a></h3>\r\n              </li>\r\n            </ul>\r\n\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a (click)=\"onTodaysTimesheet()\" class=\"cursor-pointer\">Today's Timesheet</a></h3>\r\n              </li>\r\n            </ul>\r\n\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3 *ngIf=\"isInCompletedWorksheet['view']\"><a (click)=\"onOpenTodaysIncompletedWorksheet()\"\r\n                                                              class=\"cursor-pointer\">Worksheet</a>\r\n                </h3>\r\n                <h3 *ngIf=\"!isInCompletedWorksheet['view']\"><a (click)=\"onWorksheet()\"\r\n                                                               class=\"cursor-pointer\">Worksheet</a></h3>\r\n              </li>\r\n            </ul>\r\n\r\n            <ul class=\"leave-request-list\" *ngIf=\"securityCodeTabData['view']\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a (click)=\"onSecurityCode()\" class=\"cursor-pointer\">Security Code</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a class=\"cursor-pointer\"\r\n                       (click)=\"onHREFURL('https://docs.google.com/spreadsheets/d/10ceidL5LlnUKFlSP7N1Uk957Amq1wM3EkT6Wfus2Dx4/edit?ts=5dbaa7eb#gid=1180721457')\">BK\r\n                  Knowledge Bank</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a class=\"cursor-pointer\"\r\n                       (click)=\"onHREFURL('https://docs.google.com/spreadsheets/d/10ceidL5LlnUKFlSP7N1Uk957Amq1wM3EkT6Wfus2Dx4/edit?ts=5dbaa7eb#gid=1180721457')\">Knowledge Bank - BS-AU</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n\r\n              <li class=\"user-details\">\r\n                <h3><a class=\"cursor-pointer\"\r\n                       (click)=\"onHREFURL('https://docs.google.com/spreadsheets/d/1MJdBlrAL_-zvsiBRJHlz_qVM5QUGSVMovhA84ZIXYUI/edit#gid=1609323003')\">Payroll\r\n                  Knowledge Bank</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\" *ngIf=\"userData.designation_id.designation_id === 7\" >\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3><a class=\"cursor-pointer\" (click)=\"onMsaLink()\" >MSA Links</a></h3>\r\n              </li>\r\n            </ul>\r\n            <ul class=\"leave-request-list\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">keyboard_arrow_right</mat-icon>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3><a class=\"cursor-pointer\" (click)=\"onBrandDocs()\" >Brand Portal</a></h3>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-4 PL-0\">\r\n      <mat-card class=\"attendance\">\r\n        <mat-card-header>\r\n          <mat-card-title>Attendance</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content class=\"text-center\">\r\n          <button *ngIf=\"hrDetail?.punch_in == null\" class=\"btn-primary MR-25 MT-15\"\r\n                  (click)=\"onPunchIn()\">\r\n            Checked - In\r\n          </button>\r\n          <label *ngIf=\"hrDetail?.punch_in != null\" class=\"btn-success MR-25 MT-15\">In:\r\n            {{hrDetail?.punch_in}}</label>\r\n          <button *ngIf=\"hrDetail?.punch_in != null && hrDetail?.punch_out == null\"\r\n                  class=\"btn-orange MR-25 MT-15\" (click)=\"onPunchOut()\">\r\n            Checked - Out\r\n          </button>\r\n          <label *ngIf=\"hrDetail?.punch_out != null\" class=\"btn-orange MR-25 MT-15\">Out:\r\n            {{hrDetail?.punch_out}}</label>\r\n          <ul>\r\n            <li class=\"MT-25 MB-10\">\r\n              <label>{{hrDetail?.date | date : 'dd-MM-yyyy'}}</label>\r\n              <h2 class=\"MT-10\">{{currentWorkingHoursTime}} Hrs</h2>\r\n            </li>\r\n            <li class=\"MB-10\">\r\n              <mat-progress-bar mode=\"determinate\" value=\"{{currentWorkingHours}}\"></mat-progress-bar>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card class=\"attendance MT-10\">\r\n        <mat-card-header>\r\n          <mat-card-title>Daily Motivation</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content class=\"text-center\">\r\n          <ul>\r\n            <li class=\"MT-25 MB-10\">\r\n              <h3 class=\"MT-10 light-orange-color fw-500\">\r\n                <!--<mat-icon class=\"quotation_left\">format_quote</mat-icon>-->\r\n                {{motivation}}\r\n                <!--<mat-icon class=\"quotation_right\">format_quote</mat-icon>-->\r\n              </h3>\r\n            </li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"read_policy MT-10\">\r\n        <mat-card-header>\r\n          <mat-card-title>Holidays</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <div class=\"list-parent-section\">\r\n            <ul class=\"leave-request-list\" *ngFor=\"let policy of readPoliciesHoliday;\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">fiber_manual_record</mat-icon>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3>\r\n                  <a (click)=\"onOpenReadPolicies(policy)\">{{policy?.name}}\r\n                  </a>\r\n                </h3>\r\n                <!--<h3>Last updated on {{policy?.created_on | date : 'dd-MM-yyy HH:mm:ss'}}</h3>-->\r\n              </li>\r\n              <li class=\"view-link cursor-pointer\" (click)=\"onOpenReadPolicies(policy)\">\r\n                <mat-icon>visibility</mat-icon>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"read_policy MT-10\">\r\n        <mat-card-header>\r\n          <mat-card-title>Today's Menu</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <div class=\"list-parent-section\" *ngIf=\"todaysMenu?.menu_name.split(',').length > 0\">\r\n            <ul class=\"leave-request-list\" *ngFor=\"let menuName of todaysMenu?.menu_name.split(',');\">\r\n              <li>\r\n                <mat-icon class=\"user-avtar\">fiber_manual_record</mat-icon>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3>\r\n                  <a >{{menuName}}\r\n                  </a>\r\n                </h3>\r\n              </li>\r\n              <li class=\"view-link cursor-pointer\" (click)=\"onFeedbackMenuReviewDialog(todaysMenu, 1)\">\r\n                <mat-icon class=\"green-color\"  [matTooltip]=\"'Feedback'\">assistant</mat-icon>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"\" *ngIf=\"!todaysMenu || todaysMenu?.menu_name.split(',').length === 0\">\r\n            <span class=\"PL-15 PB-20\">There is no menu today.!</span>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-md-4 PLR-0\">\r\n      <mat-card class=\"hrms_right_blue\">\r\n        <mat-card-title>Birthday</mat-card-title>\r\n        <mat-card-content *ngIf=\"userBirthDayList.length\">\r\n        <span class=\"user_img\" *ngFor=\"let userList of userBirthDayList; let i = index\">\r\n          <img src=\"{{url+userList?.user_image}}\" [matTooltip]=\"userList?.userfullname\" *ngIf=\"userList?.user_image\"/>\r\n          <img src=\"assets/images/user.png\" [matTooltip]=\"userList?.userfullname\" *ngIf=\"!userList?.user_image\"/>\r\n        </span>\r\n        </mat-card-content>\r\n        <mat-card-content *ngIf=\"!userBirthDayList.length\">\r\n          <span class=\"PL-15 PB-20\">No Birthday Today.!</span>\r\n        </mat-card-content>\r\n      </mat-card>\r\n<!--\r\n      <mat-card class=\"hrms_right_blue MT-10\">\r\n        <mat-card-title>Awardee of the Month</mat-card-title>\r\n\r\n        <mat-card-content> <div class=\"row col-md-12 PLR-0 MT-10\">\r\n          <div class=\"col-md-7 PL-0\">\r\n            <mat-card class=\"counter\">\r\n              <mat-card-content class=\"text-center\">\r\n                <ul>\r\n                  <li class=\"MB-10\">\r\n                    <a (click)=\"onAwardeeOfTheMonths()\">\r\n                      <label class=\"13\">2</label>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </mat-card-content>\r\n              <mat-card-footer>Awardee In this Month</mat-card-footer>\r\n            </mat-card>\r\n          </div>\r\n          <div class=\"col-md-5 PLR-0\">\r\n            <mat-card class=\"counter\">\r\n              <mat-card-content class=\"text-center\">\r\n                <ul>\r\n                  <li class=\"MB-10\">\r\n                    <a (click)=\"onLeaveRequestcount()\"\r\n                       *ngIf=\"typeOfView === 1\">\r\n                      <label class=\"13\">{{dashboardDetail?.adminView?.LeaveRequest}}</label>\r\n                    </a>\r\n                    <a (click)=\"onLeaveRequestcount()\"\r\n                       *ngIf=\"typeOfView === 2\">\r\n                      <label class=\"13\">{{dashboardDetail?.myView?.LeaveRequest}}</label>\r\n                    </a>\r\n                    <a (click)=\"onLeaveRequestcount()\"\r\n                       *ngIf=\"typeOfView === 3\">\r\n                      <label class=\"13\">{{dashboardDetail?.teamView?.LeaveRequest}}</label>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </mat-card-content>\r\n              <mat-card-footer>Leave Request</mat-card-footer>\r\n            </mat-card>\r\n          </div>\r\n        </div></mat-card-content>\r\n\r\n        <mat-card-content *ngIf=\"nomineeList.length > 0\">\r\n          <span class=\"user_img\" *ngFor=\"let award of nomineeList; let i = index\">\r\n          <img src=\"{{url+userList?.user_image}}\" matTooltip=\"{{award?.userfullname}} - {{award?.name}} - {{award?.award_month}}\" *ngIf=\"nomineeList?.user_image\"/>\r\n          <img src=\"assets/images/user.png\" matTooltip=\"{{award?.userfullname}} - {{award?.name}} - {{award?.award_month}}\" *ngIf=\"!nomineeList?.user_image\"/>\r\n          </span>\r\n          <span *ngIf=\"nomineeList.length ===0\" class=\"panel-title\">No Awards Found</span>\r\n        </mat-card-content>\r\n        <mat-card-content *ngIf=\"!nomineeList.length\">\r\n          <span class=\"PL-15 PB-20\">No Awardee in this month.!</span>\r\n        </mat-card-content>\r\n      </mat-card>\r\n-->\r\n      <mat-card class=\"hrms_right_blue MT-10\">\r\n        <mat-card-title>Upcoming Holiday's</mat-card-title>\r\n        <mat-card-content>\r\n          <div class=\"upcoming_holiday\">\r\n            <ul class=\"row leave-request-list col-md-12\" *ngFor=\"let holidayList of upcomingHolidayList; let i=index\">\r\n              <li class=\"col-md-1\">\r\n                <mat-icon class=\"user-avtar PT-5\">fiber_manual_record</mat-icon>\r\n              </li>\r\n              <li  class=\"user-details col-md-4 PL-0 PT-5\"><h3 style=\"padding-top: 0;width: 10rem;white-space:break-spaces;\">{{holidayList['description']}}</h3></li>\r\n              <li class=\"col-md-6 PL-0 PT-5\">\r\n                <span\r\n                  class=\"\">{{holidayList['date'] | date : 'dd-MM-yyyy'}}</span><span class=\"PL-5\">{{holidayList['date'] | date : 'EEEE'}}</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card class=\"hrms_right_blue MT-10\">\r\n        <mat-card-title>New Hires</mat-card-title>\r\n        <mat-card-content>\r\n          <div class=\"list-parent-section announcementSection\" *ngIf=\"userNewHireList.length\">\r\n            <ul class=\"leave-request-list\" *ngFor=\"let userList of userNewHireList; let i=index\">\r\n              <li>\r\n                <img src=\"{{url+userList?.user_image}}\" width=\"50\" height=\"50\" *ngIf=\"userList?.user_image\"/>\r\n                <img src=\"assets/images/profile_placeholder.png\" width=\"50\" height=\"50\" *ngIf=\"!userList?.user_image\"/>\r\n              </li>\r\n              <li class=\"user-details\">\r\n                <h3> {{userList?.userfullname}} <span>{{userList?.user_bio_id}} - {{userList?.designation_id?.designation_name}}</span>\r\n                </h3>\r\n                <label> {{userList?.department_id?.department_name}}, {{userList?.location_id?.location_name}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div *ngIf=\"!userNewHireList.length\" class=\"PL-15 PB-20\">No New Hires!</div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/admin-hrms-new.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/admin-hrms-new.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L2FkbWluLWhybXMtbmV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/admin-hrms-new.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/admin-hrms-new.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminHrmsNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHrmsNewComponent", function() { return AdminHrmsNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility/shared-service/shared-user.service */ "./src/utility/shared-service/shared-user.service.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _my_lunch_booking_feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component */ "./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AdminHrmsNewComponent = /** @class */ (function () {
    function AdminHrmsNewComponent(_router, dialog, _fb, _commonCrudService, _sharedService, _sharedUserService, _sharedObjService) {
        this._router = _router;
        this.dialog = dialog;
        this._fb = _fb;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        this._sharedUserService = _sharedUserService;
        this._sharedObjService = _sharedObjService;
        // Array Variables
        this.masterMenuList = [];
        // bar Chart Variables
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.selectedYearMonth = '';
        this.isAddTimesheetButtonRights = false;
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_TIMESHEET;
        this.tabIDInCompleted = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_VIEWINCOMPLETEDWORKSHEET;
        this.securityCodeTabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_8__["ADMINTABACCESS"].WORKFLOW_SECURITIES_CODE;
        this.yearMonth = [];
        this.userBirthDayList = [];
        this.userNewHireList = [];
        this.url = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_10__["BASE"].IMAGE_PATH;
        this.typeOfView = 0;
        this.currentWorkingHours = 0;
        this.maxWorkingHours = 0;
        this.currentWorkingHoursTime = '';
        this.userTimesheetUnits = 0;
        this.upcomingHolidayList = [];
        this.motivation = '';
        this.nomineeList = [];
    }
    AdminHrmsNewComponent.prototype.ngOnInit = function () {
        this.userData = this._sharedUserService.getUser();
        this.isInCompletedWorksheet = this._sharedService.checkUserPrivilegesTabs(this.tabIDInCompleted);
        this.securityCodeTabData = this._sharedService.checkUserPrivilegesTabs(this.securityCodeTabID);
        // this.initializationMethod();
        this.isAddTimesheetButtonRights = this._sharedService.checkUserPrivileges(this.tabID, 'otherRights', 'otherRights', 'button_name', 'add_timesheet', 1);
        this.monthYearList();
        this.getDashboard(null);
        this.getHRDetail();
        this.getTimesheetUnits();
        this.getUserList();
        this.getUserUpcomingHoliday();
        this.getDailyMotivation();
    };
    AdminHrmsNewComponent.prototype.getTodaysMenu = function () {
        var _this = this;
        this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].BOOK_FOOD_DASHBOARD, this.userData.id).subscribe(function (Response) {
            _this.todaysMenu = Response.payload.data;
        });
    };
    AdminHrmsNewComponent.prototype.getDailyMotivation = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].DROPDOWN_LIST, {
            'table': 'motivational',
            'column': 'id,motivation'
        }, {}).subscribe(function (response) {
            var day = new Date().getDate();
            var item = response.filter(function (x) { return x.id === Number(day); });
            _this.motivation = (item.length) ? item[0]["motivation"] : "";
        });
    };
    /**
     * Get User List
     */
    AdminHrmsNewComponent.prototype.getUserList = function () {
        var _this = this;
        this._sharedObjService.getUserList({ 'records': 'all' }, { 'compare': { 'equal': { 'is_active': 1 } } }).subscribe(function (response) {
            var data = response;
            var fifteenDays = moment__WEBPACK_IMPORTED_MODULE_9__().subtract(15, 'days').format('YYYY-MM-DD');
            _this.userBirthDayList = data ? data.filter(function (item) { return moment__WEBPACK_IMPORTED_MODULE_9__(item.user_birthdate).format('MM-DD') === moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format('MM-DD'); }) : [];
            _this.userNewHireList = data ? data.filter(function (item) { return moment__WEBPACK_IMPORTED_MODULE_9__(item.created_on).format('YYYY-MM-DD') >= fifteenDays; }) : [];
            // console.log(this.userNewHireList);
        });
    };
    AdminHrmsNewComponent.prototype.monthYearList = function () {
        var date = new Date();
        var itemDate = date.getDate();
        for (var i = 0; i < 2; i++) {
            if (itemDate > 25) {
                var key = moment__WEBPACK_IMPORTED_MODULE_9__(date, 'YYYY-MM').subtract(moment__WEBPACK_IMPORTED_MODULE_9__["duration"](i - 1, 'month')).format('YYYY-MM');
                var label = moment__WEBPACK_IMPORTED_MODULE_9__(date, 'YYYY-MM').subtract(moment__WEBPACK_IMPORTED_MODULE_9__["duration"](i - 1, 'month')).format('MMM-YYYY');
                this.yearMonth.push({ 'key': key, 'label': label });
            }
            else {
                var key = moment__WEBPACK_IMPORTED_MODULE_9__(date, 'YYYY-MM').subtract(moment__WEBPACK_IMPORTED_MODULE_9__["duration"](i, 'month')).format('YYYY-MM');
                var label = moment__WEBPACK_IMPORTED_MODULE_9__(date, 'YYYY-MM').subtract(moment__WEBPACK_IMPORTED_MODULE_9__["duration"](i, 'month')).format('MMM-YYYY');
                this.yearMonth.push({ 'key': key, 'label': label });
            }
        }
        if (this.yearMonth) {
            this.selectedYearMonth = this.yearMonth[0]['key'];
        }
    };
    AdminHrmsNewComponent.prototype.onApplyLeave = function () {
    };
    AdminHrmsNewComponent.prototype.getHRDetail = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].GETDETAIL, {}).subscribe(function (Response) {
            _this.hrDetail = Response.payload.data;
            var startTime = moment__WEBPACK_IMPORTED_MODULE_9__(_this.hrDetail.shift_from_time, 'HH:mm:ss');
            var endTime = moment__WEBPACK_IMPORTED_MODULE_9__(_this.hrDetail.shift_to_time, 'HH:mm:ss');
            var diffTime = endTime.diff(startTime, 'minute');
            var breakTime = moment__WEBPACK_IMPORTED_MODULE_9__["duration"](_this.hrDetail.allow_break).asMinutes();
            _this.maxWorkingHours = Number(diffTime) - Number(breakTime);
            _this.getCurrentWorkingHours(_this.maxWorkingHours);
        });
    };
    AdminHrmsNewComponent.prototype.getCurrentWorkingHours = function (workingHours) {
        var startTime = moment__WEBPACK_IMPORTED_MODULE_9__(this.hrDetail.punch_in, 'HH:mm:ss');
        var endTime = this.hrDetail.punch_out ? moment__WEBPACK_IMPORTED_MODULE_9__(this.hrDetail.punch_out, 'HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_9__();
        var diffTime = endTime.diff(startTime, 'minute');
        this.currentWorkingHoursTime = moment__WEBPACK_IMPORTED_MODULE_9__["utc"](moment__WEBPACK_IMPORTED_MODULE_9__(endTime, 'DD/MM/YYYY HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_9__(startTime, 'DD/MM/YYYY HH:mm:ss'))).format('HH:mm');
        if (diffTime > workingHours) {
            this.currentWorkingHours = 100;
        }
        else {
            this.currentWorkingHours = Number(diffTime * 100) / Number(workingHours);
        }
    };
    /**
     * Initialization Methods
     */
    AdminHrmsNewComponent.prototype.getDashboard = function (year) {
        var _this = this;
        year = (year === '' || year === null) ? this.yearMonth[0]['key'] : year;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].DASHBOARD, { 'yearMonth': year }, {})
            .subscribe(function (response) {
            _this.masterMenuList = [];
            _this.dashboardDetail = response.payload.data;
            if (_this.dashboardDetail && _this.dashboardDetail.adminView != null) {
                _this.masterMenuList.push({ 'type': 1, 'name': 'Admin' });
            }
            if (_this.dashboardDetail && _this.dashboardDetail.myView != null) {
                _this.masterMenuList.push({ 'type': 2, 'name': 'My View' });
            }
            if (_this.dashboardDetail && _this.dashboardDetail.teamView != null) {
                _this.masterMenuList.push({ 'type': 3, 'name': 'My Team View' });
            }
            if (_this.masterMenuList.length > 0) {
                _this.onChangeTypeOfView(_this.masterMenuList[0]['type']);
            }
            if (year === _this.yearMonth[0]['key']) {
                _this._sharedService.setDashboardData(_this.dashboardDetail);
            }
        });
    };
    AdminHrmsNewComponent.prototype.attendanceSummary = function (status, yearMonth, viewType, type) {
        console.log(status, yearMonth, viewType, type);
        if (status !== '' && yearMonth && viewType && type) {
            var jsonData = {};
            if (type === 'status' || type === 'remark' || type === 'finalremark') {
                if (type === 'status') {
                    jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["convertURLParamToEncode"])({ 'status': status, 'month_year': yearMonth, 'view': viewType });
                }
                else if (type === 'remark') {
                    jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["convertURLParamToEncode"])({ 'remark': status, 'month_year': yearMonth, 'view': viewType });
                }
                else if (type === 'finalremark') {
                    if (status === '3') {
                        jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["convertURLParamToEncode"])({
                            'final_remark': status,
                            // 'remark': 5,
                            'month_year': yearMonth,
                            'view': viewType
                        });
                    }
                    else {
                        jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["convertURLParamToEncode"])({ 'final_remark': status, 'month_year': yearMonth, 'view': viewType });
                    }
                }
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].ATTENDANCE_SUMMARY], { queryParams: jsonData });
            }
            if (type === 'stage_id') {
                if (type === 'stage_id') {
                    jsonData = Object(_utility_common_functions__WEBPACK_IMPORTED_MODULE_11__["convertURLParamToEncode"])({ 'stage_id': status, 'month_year': yearMonth, 'view': viewType });
                }
                this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].HRMS_USER_PENDING_TIMESHEET], { queryParams: jsonData });
            }
        }
    };
    AdminHrmsNewComponent.prototype.onChangeGetValue = function (value) {
        this.selectedYearMonth = value;
        this.getDashboard(value);
    };
    AdminHrmsNewComponent.prototype.onChangeTypeOfView = function (value) {
        this.typeOfView = value;
        // console.log(this.typeOfView);
    };
    AdminHrmsNewComponent.prototype.onDailyReport = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].HRMS_DAILY_REPORT, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onTodaysTimesheet = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_TIMESHEET, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onWorksheet = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_DASHBOARD_TAB, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onHREFURL = function (URL) {
        window.open(URL, '_blank');
    };
    AdminHrmsNewComponent.prototype.onKnowledgeBank = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].KNOWLEDGE_BANK, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onAddTimeSheet = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_ADD_NEW_TODAYS_TIMESHEET, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onOpenTodaysIncompletedWorksheet = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].WORKSHEET_TODAYS_WORKSHEET_VIEW_INCOMPLETED_WORKSHEET, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onPunchIn = function () {
        this.getHRDetail();
    };
    AdminHrmsNewComponent.prototype.onPunchOut = function () {
        var _this = this;
        // console.log(this.dashboardDetail);
        var myPendingRequest = (this.dashboardDetail && this.dashboardDetail.myView) ? this.dashboardDetail.myView.pendingRequest : 0;
        var myTeamPendingRequest = (this.dashboardDetail && this.dashboardDetail.teamView) ? this.dashboardDetail.teamView.pendingForApproval : 0;
        var message = '';
        var messageToDenyPunchOut = '';
        var messageToDenyPunchOutTeam = '';
        if (myPendingRequest > 0) {
            messageToDenyPunchOut += 'Your current pending request is greater than 0. So you can not punch out. Please clear the pending request.';
        }
        if (myTeamPendingRequest > 0) {
            messageToDenyPunchOutTeam += 'Your current team pending request is greater than 0. So you can not punch out. Please clear the pending request.';
        }
        if (this.userTimesheetUnits < 80) {
            message += 'Your current timesheet units is less than 80. ';
        }
        message += 'Are you sure you have completed your daily hours?';
        if (myPendingRequest <= 0 && myTeamPendingRequest <= 0) {
            var dialogConfigData = {
                data: {
                    content: message
                },
                panelClass: 'add-bookkeeping-dialog-panel-container'
            };
            var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], dialogConfigData);
            dialogRef.afterClosed().subscribe(function (value) {
                if (value) {
                    var param = { 'user_id': _this.userData.id, 'type': 0 };
                    _this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].MANUAL_IN_OUT, param).subscribe(function (Response) {
                        _this.getHRDetail();
                    });
                }
            });
        }
        else {
            if (myPendingRequest > 0) {
                var dialogConfigData = {
                    data: {
                        content: messageToDenyPunchOut,
                        ticketButton: true
                    },
                    panelClass: 'add-bookkeeping-dialog-panel-container'
                };
                var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], dialogConfigData);
                dialogRef.afterClosed().subscribe(function (value) {
                });
            }
            if (myTeamPendingRequest > 0) {
                var dialogConfigData = {
                    data: {
                        content: messageToDenyPunchOutTeam,
                        ticketButton: true
                    },
                    panelClass: 'add-bookkeeping-dialog-panel-container'
                };
                var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationDialogComponent"], dialogConfigData);
                dialogRef.afterClosed().subscribe(function (value) {
                });
            }
        }
    };
    AdminHrmsNewComponent.prototype.getTimesheetUnits = function () {
        var _this = this;
        this._sharedService.getTimeSheetUnits().subscribe(function (response) {
            _this.userTimesheetUnits = response;
        });
    };
    /**
     * Get Holiday for this month
     */
    AdminHrmsNewComponent.prototype.getUserUpcomingHoliday = function () {
        var _this = this;
        // console.log(this.userData);
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].HR_USER_UPCOMING_HOLIDAY + '/' + this.userData.shift_id, {}).subscribe(function (response) {
            var data = response.payload.data;
            var dateMonth = new Date();
            dateMonth.setMonth(new Date().getMonth());
            var dateMonthNext = new Date();
            dateMonthNext.setMonth(new Date().getMonth() + 1);
            _this.upcomingHolidayList = data.length ? data.filter(function (item) { return (moment__WEBPACK_IMPORTED_MODULE_9__(item['date'], 'YYYY-MM-DD').format('MM') === moment__WEBPACK_IMPORTED_MODULE_9__(dateMonthNext).format('MM')) || (moment__WEBPACK_IMPORTED_MODULE_9__(item['date'], 'YYYY-MM-DD').format('MM') === moment__WEBPACK_IMPORTED_MODULE_9__(dateMonth).format('MM')); }) : [];
        });
    };
    /**
     * Holiday request count
     */
    AdminHrmsNewComponent.prototype.onHolidayRequestcount = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].APPLY_HOLIDAY_WORKING_LISTING, '_blank');
        });
    };
    /**
     * Leave request count
     */
    AdminHrmsNewComponent.prototype.onLeaveRequestcount = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].APPLY_LEAVE_LISTING, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onAwardeeOfTheMonths = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].AWARDEE_OF_THE_MONTH, '_blank');
        });
    };
    /**
     * user Listing API.
     * @param pageNumber
     * @param key
     * @param val
     */
    AdminHrmsNewComponent.prototype.getAwardList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].AWARD_NOMINEE_LIST_DASHBOARD, {}, {}).subscribe(function (response) {
            _this.nomineeList = response.payload.data;
        });
    };
    /**
     * On Feedback Menu Review Dialog
     * @param foodMaster
     */
    AdminHrmsNewComponent.prototype.onFeedbackMenuReviewDialog = function (foodMasterData, type) {
        var dialogRef = this.dialog.open(_my_lunch_booking_feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackMenuLunchDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                foodMaster: (foodMasterData) ? foodMasterData : [],
                typeOfView: type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AdminHrmsNewComponent.prototype.onMsaLink = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].MSA_LINKS, '_blank');
        });
    };
    AdminHrmsNewComponent.prototype.onBrandDocs = function () {
        this._router.navigate([]).then(function (result) {
            window.open('/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_1__["AdminRoutes"].BRAND_DOCUMENTS, '_blank');
        });
    };
    AdminHrmsNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-hrms-new',
            template: __webpack_require__(/*! ./admin-hrms-new.component.html */ "./src/app/admin/admin-hrms-new/admin-hrms-new.component.html"),
            styles: [__webpack_require__(/*! ./admin-hrms-new.component.scss */ "./src/app/admin/admin-hrms-new/admin-hrms-new.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _utility_shared_service_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["SharedUserService"], _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_14__["SharedObjService"]])
    ], AdminHrmsNewComponent);
    return AdminHrmsNewComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/admin-hrms-new.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/admin-hrms-new.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminHrmsNewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHrmsNewModule", function() { return AdminHrmsNewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _hrms_new_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hrms-new-dashboard-routing.module */ "./src/app/admin/admin-hrms-new/hrms-new-dashboard-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminHrmsNewModule = /** @class */ (function () {
    function AdminHrmsNewModule() {
    }
    AdminHrmsNewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _hrms_new_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrmsNewDashboardRoutingModule"],
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__["UtilityModule"]
            ],
            declarations: []
        })
    ], AdminHrmsNewModule);
    return AdminHrmsNewModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holiday-list-out-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">AWARDEE OF THE MONTH</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"8%\">Sr. No</th>\r\n          <th width=\"45%\">Name</th>\r\n          <th width=\"22%\">Month</th>\r\n          <th width=\"25%\">Award Type</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody *ngIf=\"nomineeList.length > 0\">\r\n          <tr *ngFor=\"let nominee of nomineeList; let i = index\">\r\n            <td width=\"8%\">{{i + 1}}</td>\r\n            <td width=\"45%\">{{nominee?.userfullname}}</td>\r\n            <td width=\"22%\">{{nominee?.award_month}}</td>\r\n            <td width=\"25%\">{{nominee?.name}}</td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"nomineeList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!--<table *ngIf=\"nomineeList.length > 0\">-->\r\n        <!--<tfoot>-->\r\n        <!--<tr>-->\r\n          <!--<td colspan=\"10\">-->\r\n            <!--<mat-paginator [length]=\"totalRecords\"-->\r\n                           <!--[pageSize]=\"pageSize\"-->\r\n                           <!--[pageIndex]=\"pageIndex\"-->\r\n                           <!--[pageSizeOptions]=\"pageArray\"-->\r\n                           <!--(page)=\"onPageChange($event)\">-->\r\n            <!--</mat-paginator>-->\r\n          <!--</td>-->\r\n        <!--</tr>-->\r\n        <!--</tfoot>-->\r\n      <!--</table>-->\r\n    </div>\r\n  </div>\r\n</div>  <!-- End Table -->\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L2F3YXJkZWUtb2YtdGhlLW1vbnRoL2F3YXJkZWUtb2YtdGhlLW1vbnRoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AwardeeOfTheMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardeeOfTheMonthComponent", function() { return AwardeeOfTheMonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AwardeeOfTheMonthComponent = /** @class */ (function () {
    function AwardeeOfTheMonthComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variables
        this.nomineeList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.userList = [];
    }
    AwardeeOfTheMonthComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.equalJSON = { "user_id": this.userInfo.id };
        this.getMyAwardList();
    };
    /**
     * user Listing API.
     * @param pageNumber
     * @param key
     * @param val
     */
    AwardeeOfTheMonthComponent.prototype.getMyAwardList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_NOMINEE_LIST_DASHBOARD, {}, {}).subscribe(function (response) {
            _this.nomineeList = response.payload.data;
        });
    };
    // get function for returning pageNumber and page size at time of listing api
    AwardeeOfTheMonthComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Download Invoice Award
     * @param nominee
     */
    AwardeeOfTheMonthComponent.prototype.onDownloadAward = function (nominee) {
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_PREVIEW + '/' + nominee.id, { 'status_id': 2, 'is_view': 1 }, {}, 'Award ' + nominee.userfullname, 1).subscribe(function (response) {
        });
    };
    // advance filter search operation
    AwardeeOfTheMonthComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object whether its empty or not
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
    AwardeeOfTheMonthComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        // this.getMyAwardList(event.pageIndex + 1);
    };
    /**
     * On home page route
     */
    AwardeeOfTheMonthComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    AwardeeOfTheMonthComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
            }
        }
        // For Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'user_id' || key === 'leave_type' || key === 'status_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                }
            }
            this.getMyAwardList();
        }
    };
    AwardeeOfTheMonthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awardee-of-the-month',
            template: __webpack_require__(/*! ./awardee-of-the-month.component.html */ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.html"),
            styles: [__webpack_require__(/*! ./awardee-of-the-month.component.scss */ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], AwardeeOfTheMonthComponent);
    return AwardeeOfTheMonthComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AwardeeOfTheMonthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardeeOfTheMonthModule", function() { return AwardeeOfTheMonthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _awardee_of_the_month_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awardee-of-the-month.component */ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'awardee-of-the-month',
        component: _awardee_of_the_month_component__WEBPACK_IMPORTED_MODULE_2__["AwardeeOfTheMonthComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var AwardeeOfTheMonthModule = /** @class */ (function () {
    function AwardeeOfTheMonthModule() {
    }
    AwardeeOfTheMonthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_awardee_of_the_month_component__WEBPACK_IMPORTED_MODULE_2__["AwardeeOfTheMonthComponent"]],
            exports: [_awardee_of_the_month_component__WEBPACK_IMPORTED_MODULE_2__["AwardeeOfTheMonthComponent"]]
        })
    ], AwardeeOfTheMonthModule);
    return AwardeeOfTheMonthModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/hrms-new-dashboard-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/hrms-new-dashboard-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: routes, HrmsNewDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmsNewDashboardRoutingModule", function() { return HrmsNewDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _admin_hrms_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-hrms-new.component */ "./src/app/admin/admin-hrms-new/admin-hrms-new.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _hrms_holiday_working_listing_hrms_holiday_working_listing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hrms-holiday-working-listing/hrms-holiday-working-listing.module */ "./src/app/admin/admin-hrms-new/hrms-holiday-working-listing/hrms-holiday-working-listing.module.ts");
/* harmony import */ var _my_profile_my_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-profile/my-profile.module */ "./src/app/admin/admin-hrms-new/my-profile/my-profile.module.ts");
/* harmony import */ var _leave_trackers_leave_trackers_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leave-trackers/leave-trackers.module */ "./src/app/admin/admin-hrms-new/leave-trackers/leave-trackers.module.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _my_award_listing_my_award_listing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-award-listing/my-award-listing.module */ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.module.ts");
/* harmony import */ var _my_lunch_booking_my_lunch_booking_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-lunch-booking/my-lunch-booking.module */ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.module.ts");
/* harmony import */ var _awardee_of_the_month_awardee_of_the_month_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./awardee-of-the-month/awardee-of-the-month.module */ "./src/app/admin/admin-hrms-new/awardee-of-the-month/awardee-of-the-month.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _admin_hrms_new_component__WEBPACK_IMPORTED_MODULE_4__["AdminHrmsNewComponent"]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].APPLY_LEAVE_LISTING_ROUTE,
        loadChildren: './hrms-apply-leave-listing/hrms-apply-leave-listing.module#HrmsApplyLeaveListingModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuard"]]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].APPLY_HOLIDAY_WORKING_LISTING_ROUTE,
        loadChildren: './hrms-holiday-working-listing/hrms-holiday-working-listing.module#HrmsHolidayWorkingListingModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuard"]]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].MY_PROFILE_ROUTE,
        loadChildren: './my-profile/my-profile.module#MyProfileModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuard"]]
    },
    {
        path: _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_3__["AdminRoutes"].LEAVE_TRACKERS_ROUTE,
        loadChildren: './leave-trackers/leave-trackers.module#LeaveTrackersModule',
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_9__["AdminAuthGuard"]]
    }
];
var HrmsNewDashboardRoutingModule = /** @class */ (function () {
    function HrmsNewDashboardRoutingModule() {
    }
    HrmsNewDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"],
                _hrms_holiday_working_listing_hrms_holiday_working_listing_module__WEBPACK_IMPORTED_MODULE_6__["HrmsHolidayWorkingListingModule"],
                _my_profile_my_profile_module__WEBPACK_IMPORTED_MODULE_7__["MyProfileModule"],
                _leave_trackers_leave_trackers_module__WEBPACK_IMPORTED_MODULE_8__["LeaveTrackersModule"],
                _my_award_listing_my_award_listing_module__WEBPACK_IMPORTED_MODULE_10__["MyAwardListingModule"],
                _my_lunch_booking_my_lunch_booking_module__WEBPACK_IMPORTED_MODULE_11__["MyLunchBookingModule"],
                _awardee_of_the_month_awardee_of_the_month_module__WEBPACK_IMPORTED_MODULE_12__["AwardeeOfTheMonthModule"]
            ],
            declarations: [_admin_hrms_new_component__WEBPACK_IMPORTED_MODULE_4__["AdminHrmsNewComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _hrms_holiday_working_listing_hrms_holiday_working_listing_module__WEBPACK_IMPORTED_MODULE_6__["HrmsHolidayWorkingListingModule"]]
        })
    ], HrmsNewDashboardRoutingModule);
    return HrmsNewDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holiday-list-out-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>HRMS</span>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span class=\"active\">MY AWARD LISTING</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Start Table -->\r\n  <div class=\"table-container\">\r\n    <div class=\"table-block\">\r\n      <table>\r\n        <thead>\r\n        <tr>\r\n          <th width=\"5%\">Sr. No</th>\r\n          <th width=\"45%\">Name</th>\r\n          <th width=\"40%\">Award Type</th>\r\n          <th width=\"10%\">Action</th>\r\n        </tr>\r\n        </thead>\r\n      </table>\r\n\r\n      <div class=\"table-body\">\r\n        <table>\r\n          <tbody *ngIf=\"nomineeList.length > 0\">\r\n          <tr *ngFor=\"let nominee of nomineeList; let i = index\">\r\n            <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n            <td width=\"45%\">{{nominee?.userfullname}}\r\n            </td>\r\n            <td width=\"40%\">{{nominee?.name}}</td>\r\n            <td width=\"10%\"><i class=\"material-icons\" (click)=\"onDownloadAward(nominee)\">file_download</i></td>\r\n          </tr>\r\n          </tbody>\r\n          <tbody *ngIf=\"nomineeList.length ===0\" class=\"panel-title\">No Records Found</tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <table *ngIf=\"nomineeList.length > 0\">\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"10\">\r\n            <mat-paginator [length]=\"totalRecords\"\r\n                           [pageSize]=\"pageSize\"\r\n                           [pageIndex]=\"pageIndex\"\r\n                           [pageSizeOptions]=\"pageArray\"\r\n                           (page)=\"onPageChange($event)\">\r\n            </mat-paginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>  <!-- End Table -->\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L215LWF3YXJkLWxpc3RpbmcvbXktYXdhcmQtbGlzdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MyAwardListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardListingComponent", function() { return MyAwardListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyAwardListingComponent = /** @class */ (function () {
    function MyAwardListingComponent(_fb, _router, dialog, _commonCrudService, _sharedObjService, _sharedService) {
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedObjService = _sharedObjService;
        this._sharedService = _sharedService;
        // Data Variables
        this.nomineeList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.userList = [];
    }
    MyAwardListingComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.equalJSON = { "user_id": this.userInfo.id, "send_email": 1 };
        this.getMyAwardList(1);
    };
    /**
     * user Listing API.
     * @param pageNumber
     * @param key
     * @param val
     */
    MyAwardListingComponent.prototype.getMyAwardList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_NOMINEE_LIST + '/' + 2, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.nomineeList = response.payload.data;
            _this.page = response.pager.pageNumber;
            _this.pageIndex = _this.page - 1;
            _this.totalRecords = +response.pager.totalRecords;
            _this.sortBy = response.pager.sortBy;
            _this.sortOrder = response.pager.sortOrder;
        });
    };
    // get function for returning pageNumber and page size at time of listing api
    MyAwardListingComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Download Invoice Award
     * @param nominee
     */
    MyAwardListingComponent.prototype.onDownloadAward = function (nominee) {
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].AWARD_PREVIEW + '/' + nominee.id, { 'status_id': 2, 'is_view': 1 }, {}, 'Award ' + nominee.userfullname, 1).subscribe(function (response) {
        });
    };
    // advance filter search operation
    MyAwardListingComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        // check for the object whether its empty or not
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
    MyAwardListingComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getMyAwardList(event.pageIndex + 1);
    };
    /**
     * On home page route
     */
    MyAwardListingComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MyAwardListingComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { "user_id": this.userInfo.id, "send_email": 1 };
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
            }
        }
        // For Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'user_id' || key === 'leave_type' || key === 'status_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                }
            }
            this.getMyAwardList(1);
        }
    };
    MyAwardListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-award-listing',
            template: __webpack_require__(/*! ./my-award-listing.component.html */ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.html"),
            styles: [__webpack_require__(/*! ./my-award-listing.component.scss */ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_6__["SharedObjService"],
            _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], MyAwardListingComponent);
    return MyAwardListingComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: MyAwardListingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAwardListingModule", function() { return MyAwardListingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_award_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-award-listing.component */ "./src/app/admin/admin-hrms-new/my-award-listing/my-award-listing.component.ts");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'my-award-listing',
        component: _my_award_listing_component__WEBPACK_IMPORTED_MODULE_2__["MyAwardListingComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AdminAuthGuard"]]
    }
];
var MyAwardListingModule = /** @class */ (function () {
    function MyAwardListingModule() {
    }
    MyAwardListingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_5__["UtilityModule"]
            ],
            declarations: [_my_award_listing_component__WEBPACK_IMPORTED_MODULE_2__["MyAwardListingComponent"]],
            exports: [_my_award_listing_component__WEBPACK_IMPORTED_MODULE_2__["MyAwardListingComponent"]]
        })
    ], MyAwardListingModule);
    return MyAwardListingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Start Change InOut Time dialog  -->\r\n<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\" *ngIf=\"typeOfView === 0\">Menu | {{foodMaster?.date | date : 'dd-MM-yyyy'}}</div>\r\n    <div class=\"modal__header__logo\" *ngIf=\"typeOfView === 1\">Menu Feedback | {{foodMaster?.date | date :\r\n      'dd-MM-yyyy'}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n\r\n  <div class=\"modal__body\">\r\n    <!--<app-food-feedback-star-rating></app-food-feedback-star-rating>-->\r\n\r\n    <div class=\"row col-md-12\" *ngIf=\"typeOfView === 0\">\r\n      <div class=\"col-md-12\" *ngFor=\"let item of foodMaster?.menu_name.split(',');\">\r\n        <mat-label class=\"fw-500\">{{item}}</mat-label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row col-md-12\" *ngIf=\"typeOfView === 1\">\r\n      <div class=\"col-md-12\" *ngFor=\"let item of itemArray; let j = index;\">\r\n\r\n        <div class=\"row col-md-12\">\r\n          <div class=\"col-md-4 MT-15 PL-0\">\r\n            <mat-label class=\"fw-500\">{{item.name}}</mat-label>\r\n          </div>\r\n          <div class=\"col-md-8 PL-0\" *ngIf=\"foodMaster?.is_feedback === 0\">\r\n\r\n            <button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;let i = index\" [id]=\"'star_'+i\"\r\n                    (click)=\"onClick(i+1, j)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\r\n              <mat-icon>\r\n                {{showIcon(i, j)}}\r\n              </mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"starCount == null || starCount == 0\">\r\n              Star count is <strong>required</strong> and cannot be zero\r\n            </mat-error>\r\n          </div>\r\n          <div class=\"col-md-8 PL-0\" *ngIf=\"foodMaster?.is_feedback === 1\">\r\n\r\n            <button mat-icon-button [color]=\"color\" *ngFor=\"let ratingId of ratingArr;let i = index\" [id]=\"'star_'+i\"\r\n                    [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\r\n              <mat-icon>\r\n                {{showIcon(i, j)}}\r\n              </mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"starCount == null || starCount == 0\">\r\n              Star count is <strong>required</strong> and cannot be zero\r\n            </mat-error>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-12\">\r\n          <div class=\"col-md-4\"></div>\r\n          <div class=\"col-md-8\">\r\n            <mat-label class=\"fw-500\" *ngIf=\"item.rating > 0\">\r\n              Your rated <span class=\"body-2\">{{item.rating}}</span> / <span class=\"body-2\">{{starCount}}</span>\r\n            </mat-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-form-field *ngIf=\"foodMaster?.is_feedback === 0\">\r\n        <textarea matInput [formControl]=\"comment\" rows=\"3\" placeholder=\"Feedback\"></textarea>\r\n      </mat-form-field>\r\n      <div class=\"row col-md-12 MT-15\" *ngIf=\"foodMaster?.is_feedback === 1\">\r\n        <div class=\"col-md-4\"><mat-label class=\"fw-500\">Feedback</mat-label></div>\r\n        <div class=\"col-md-8\">{{foodMaster?.feedback}}</div>\r\n      </div>\r\n    </div>\r\n    <button *ngIf=\"foodMaster?.is_feedback === 0 && typeOfView === 1\" type=\"submit\" class=\"btn-success MR-5\" (click)=\"onSubmit()\" [disabled]=\"comment.invalid\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: FeedbackMenuLunchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackMenuLunchDialogComponent", function() { return FeedbackMenuLunchDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/pipe/noComma.pipe */ "./src/utility/pipe/noComma.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var FeedbackMenuLunchDialogComponent = /** @class */ (function () {
    function FeedbackMenuLunchDialogComponent(dialogRef, _decimalPipe, _noCommaPipe, data, snackBar, _commonCrudService) {
        this.dialogRef = dialogRef;
        this._decimalPipe = _decimalPipe;
        this._noCommaPipe = _noCommaPipe;
        this.data = data;
        this.snackBar = snackBar;
        this._commonCrudService = _commonCrudService;
        this.typeOfView = 0;
        this.rating = 0;
        this.starCount = 5;
        this.color = 'accent';
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snackBarDuration = 2000;
        this.ratingArr = [];
        this.itemArray = [];
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.totalRating = 0;
    }
    FeedbackMenuLunchDialogComponent.prototype.ngOnInit = function () {
        this.foodMaster = (this.data.foodMaster) ? this.data.foodMaster : [];
        this.typeOfView = (this.data.typeOfView) ? this.data.typeOfView : 0;
        this.getFoodInfo();
        for (var index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    };
    /**
     * Get Food Info
     */
    FeedbackMenuLunchDialogComponent.prototype.getFoodInfo = function () {
        var _this = this;
        if (this.foodMaster.is_feedback !== 1) {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].BOOK_FOOD_USER_SHOW, this.foodMaster.id, {}).subscribe(function (Response) {
                _this.itemArray = Response.payload['mainDish'];
                _this.itemArray.map(function (item) {
                    item['rating'] = 0;
                });
            });
        }
        else {
            this._commonCrudService.getData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].BOOK_FOOD_USER_FEEDBACK, this.foodMaster.id, {}).subscribe(function (Response) {
                if (Response.payload.data && Response.payload.data.food_rating) {
                    _this.itemArray = JSON.parse(Response.payload.data.food_rating);
                }
                if (Response.payload.data.feedback) {
                    _this.foodMaster.feedback = Response.payload.data.feedback;
                }
            });
        }
    };
    FeedbackMenuLunchDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    FeedbackMenuLunchDialogComponent.prototype.onClick = function (rating, index) {
        this.itemArray[index]['rating'] = rating;
        this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
            duration: this.snackBarDuration
        });
        this.ratingUpdated.emit(rating);
        this.totalRating = this.itemArray.reduce(function (pv, cv) {
            return pv + Number(cv.rating);
        }, 0);
        return false;
    };
    FeedbackMenuLunchDialogComponent.prototype.showIcon = function (star, index) {
        if (this.itemArray && this.itemArray[index]['rating'] >= star + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    };
    FeedbackMenuLunchDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.itemArray.reduce(i => i)
        var value = {};
        value['date'] = moment__WEBPACK_IMPORTED_MODULE_4__(this.foodMaster.date).format("YYYY-MM-DD");
        value['user_id'] = this.foodMaster.user_id;
        value['food_menu_id'] = this.foodMaster.food_menu_id;
        value['food_rating'] = JSON.stringify(this.itemArray);
        value['feedback'] = this.comment.value;
        value['total_feedback'] = this._noCommaPipe.transform(this._decimalPipe.transform((this.totalRating / this.itemArray.length), '1.2-2'));
        this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_2__["AdminAPI"].BOOK_FOOD_USER_FEEDBACK, value).subscribe(function (response) {
            _this.onClose();
        });
    };
    FeedbackMenuLunchDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-menu-lunch-dialog',
            template: __webpack_require__(/*! ./feedback-menu-lunch-dialog.component.html */ "./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__["NoCommaPipe"]]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _utility_pipe_noComma_pipe__WEBPACK_IMPORTED_MODULE_7__["NoCommaPipe"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_3__["CommonCrudService"]])
    ], FeedbackMenuLunchDialogComponent);
    return FeedbackMenuLunchDialogComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Food Menu Master Module Container -->\r\n<div class=\"newsletter-container\">\r\n  <!-- Start BreadCrumb Top Header -->\r\n  <div class=\"breadcrumb-top-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 PL-0\">\r\n        <div class=\"breadcrumb-top-header__breadcrumbs\">\r\n          <mat-icon class=\"material-icons cursor-pointer\"><a (click)=\"onGoDashboard()\">home</a></mat-icon>\r\n          <mat-icon>keyboard_arrow_right</mat-icon>\r\n          <span>ADMINISTRATION</span>\r\n          <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          <span>LUNCH BOOKING</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End BreadCrumb Top Header -->\r\n\r\n  <div class=\"with-filter-grid-container\">\r\n    <!-- Start Grid Inner Header -->\r\n    <div class=\"grid-inner-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 inner-header-title\">\r\n          <button class=\"open-dialog-btn\" (click)=\"onBookYourLunch()\">\r\n            <mat-icon class=\"material-icons\">add</mat-icon>\r\n            Book Lunch\r\n          </button>\r\n        </div>\r\n        <div class=\"col-md-8 col-sm-8 col-xs-8\">\r\n          <ul class=\"download-icon\">\r\n            <li>\r\n              <a (click)=\"onToggleFilter()\">\r\n                <span>Filter</span>\r\n                <mat-icon>filter_list</mat-icon>\r\n              </a>\r\n            </li>\r\n\r\n            <li>\r\n              <a (click)=\"downloadExcel()\">\r\n                <span>Excel</span>\r\n                <mat-icon>file_download</mat-icon>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start Grid Filter -->\r\n    <div class=\"filter opacity-0\" [ngClass]=\"{'opacity-1':isOpenFilterView}\">\r\n      <div class=\"filter-action-icon\">\r\n        <span class=\"filter-close\" *ngIf=\"isOpenFilterView\" (click)=\"onCloseFilter()\">Esc <i\r\n          class=\"material-icons\">close</i></span>\r\n      </div>\r\n      <div class=\"grid-filter-container\">\r\n        <div class=\"filter-title\">\r\n          <h3>Advance Filter</h3>\r\n        </div>\r\n        <form [formGroup]=\"filterForm\" (submit)=\"setAdvanceFilter(filterForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"from\" [matDatepicker]=\"DateFrom\"\r\n                       placeholder=\"From\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"DateFrom\"></mat-datepicker-toggle>\r\n                <mat-datepicker #DateFrom></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"to\" [matDatepicker]=\"DateTo\"\r\n                       placeholder=\"To\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"DateTo\"></mat-datepicker-toggle>\r\n                <mat-datepicker #DateTo></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Location\" [multiple]=\"true\" formControlName=\"location_id\">\r\n                  <mat-option *ngFor=\"let location of locationList\" [value]=\"location?.id\">\r\n                    {{ location?.location_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-3 MT-10 text-right\">\r\n              <button type=\"button\" class=\"btn-cancel\" (click)=\"resetFilterForm()\">Clear</button>\r\n              <button type=\"submit\" class=\"btn-primary\">Search</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- End Grid Filter -->\r\n\r\n    <!-- Start Filter Tags -->\r\n    <div class=\"filter-tags\">\r\n      <form [formGroup]=\"advanceFilterForm\">\r\n        <div class=\"tag\" *ngIf=\"userId.value\">\r\n          <span class=\"tag__title\">User Name :</span>\r\n          <span>\r\n               <ng-select [items]=\"userList\"\r\n                          [closeOnSelect]=\"true\"\r\n                          bindLabel=\"userfullname\"\r\n                          placeholder=\"User Name\"\r\n                          bindValue=\"id\"\r\n                          [virtualScroll]=\"true\"\r\n                          [searchable]=\"true\"\r\n                          [hideSelected]=\"true\"\r\n                          formControlName=\"user_id\"\r\n                          (change)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              </ng-select>\r\n          </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('user_id')\">close</i>\r\n        </div>\r\n        <div class=\"tag\" *ngIf=\"fromField.value\">\r\n          <span class=\"tag__title\">From :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"from\" [matDatepicker]=\"FromDate\" (click)=\"FromDate.open()\"\r\n                     placeholder=\"From\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"FromDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #FromDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('from')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"toField.value\">\r\n          <span class=\"tag__title\">To :</span>\r\n          <span>\r\n            <mat-form-field [floatLabel]=\"'never'\">\r\n              <input matInput formControlName=\"to\" [matDatepicker]=\"ToDate\" (click)=\"ToDate.open()\"\r\n                     placeholder=\"To\" (dateChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"ToDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #ToDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </span>\r\n          <mat-icon class=\"material-icons tag__close\" (click)=\"onClearTag('to')\">close</mat-icon>\r\n        </div>\r\n\r\n        <div class=\"tag\" *ngIf=\"locationField.value\">\r\n          <span class=\"tag__title\">Location: </span>\r\n          <span>\r\n             <mat-form-field>\r\n                <mat-select placeholder=\"Location\" [multiple]=\"true\" formControlName=\"location_id\"\r\n                            (selectionChange)=\"setAdvanceFilterKeyUp($event, advanceFilterForm, true)\">\r\n                  <mat-option *ngFor=\"let location of locationList\" [value]=\"location?.id\">\r\n                    {{ location?.location_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </span>\r\n          <i class=\"material-icons tag__close\" (click)=\"onClearTag('location_id')\">close</i>\r\n        </div>\r\n\r\n        <div class=\"clearAll-tags\" *ngIf=\"fromField.value || toField.value || locationField.value\">\r\n          <a (click)=\"resetFilterForm()\">Clear all</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!-- End Filter Tags -->\r\n    <!-- Start Table -->\r\n    <div class=\"table-container\">\r\n      <div class=\"table-block\">\r\n        <table>\r\n          <thead>\r\n          <tr>\r\n            <th width=\"5%\">Sr. No</th>\r\n            <th width=\"10%\">Date</th>\r\n            <th width=\"9%\">Day</th>\r\n            <th width=\"7%\">Location</th>\r\n            <th width=\"10%\">User Name</th>\r\n            <th width=\"10%\">Food Type</th>\r\n            <th width=\"10%\">Status</th>\r\n            <th width=\"5%\">Menu</th>\r\n            <th width=\"5%\">Feedback</th>\r\n            <th width=\"10%\">Created By</th>\r\n            <th width=\"14%\">Created On</th>\r\n            <th width=\"5%\">Action</th>\r\n          </tr>\r\n          </thead>\r\n        </table>\r\n\r\n        <div class=\"table-body\">\r\n          <table>\r\n            <tbody>\r\n            <tr *ngFor=\"let foodmaster of foodMasterList; let i = index\">\r\n              <td width=\"5%\">{{+pageSize * (pageIndex) + i + 1}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{foodmaster?.date | date : 'dd-MM-yyyy'}}</td>\r\n              <td width=\"9%\" class=\"word-break\">{{foodmaster?.date | date : 'EEEE'}}</td>\r\n              <td width=\"7%\" class=\"word-break\">{{foodmaster?.location_name}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{foodmaster?.userfullname}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{getFoodType(foodmaster?.food_type)}}</td>\r\n              <td width=\"10%\" class=\"word-break\">{{foodmaster?.is_cancel == 0 ? 'Booked' : 'Cancel'}}</td>\r\n              <td width=\"5%\" class=\"word-break\">\r\n                <mat-icon class=\"light-orange-color\" [matTooltip]=\"'Menu'\"\r\n                          (click)=\"onFeedbackMenuReviewDialog(foodmaster, 0)\">menu\r\n                </mat-icon>\r\n              </td>\r\n              <td width=\"5%\" class=\"word-break\">\r\n                <mat-icon class=\"green-color\" *ngIf=\"foodmaster?.is_cancel === 0\" [matTooltip]=\"'Feedback'\"\r\n                          (click)=\"onFeedbackMenuReviewDialog(foodmaster, 1)\">\r\n                  assistant\r\n                </mat-icon>\r\n                <span *ngIf=\"foodmaster?.is_cancel !== 0\">NA</span>\r\n              </td>\r\n              <td width=\"10%\" class=\"word-break\">{{foodmaster?.created_by?.created_by}}</td>\r\n              <td width=\"14%\" class=\"word-break\">{{foodmaster?.created_on | date : 'dd-MM-yyyy HH:mm:ss'}}</td>\r\n              <td width=\"5%\" class=\"word-break\">\r\n                <mat-icon\r\n                  *ngIf=\"(foodmaster?.user_id ===  userInfo?.id) && (foodmaster?.is_cancel === 0) && (compareDate(foodmaster?.date) !== -1)\"\r\n                  class=\"red-color\" [matTooltip]=\"'Cancel Booking'\" (click)=\"onDeleteConfirmationDialog(foodmaster)\">\r\n                  block\r\n                </mat-icon>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <table>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mat-paginator [length]=\"totalRecords\" [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\"\r\n                             [pageSizeOptions]=\"pageArray\" (page)=\"onPageChange($event)\">\r\n              </mat-paginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>  <!-- End Table -->\r\n  <!-- End Grid Inner Header -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L215LWx1bmNoLWJvb2tpbmcvbXktbHVuY2gtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MyLunchBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLunchBookingComponent", function() { return MyLunchBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utility/constants/header-constant */ "./src/utility/constants/header-constant.ts");
/* harmony import */ var _utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utility/components/confirmation-dialog/confirmation-dialog.component */ "./src/utility/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_common_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utility/common-functions */ "./src/utility/common-functions.ts");
/* harmony import */ var _feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component */ "./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.ts");
/* harmony import */ var _onbehalf_book_lunch_dialog_onbehalf_book_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component */ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyLunchBookingComponent = /** @class */ (function () {
    function MyLunchBookingComponent(_sharedObjService, _fb, _router, dialog, _commonCrudService, _sharedService) {
        this._sharedObjService = _sharedObjService;
        this._fb = _fb;
        this._router = _router;
        this.dialog = dialog;
        this._commonCrudService = _commonCrudService;
        this._sharedService = _sharedService;
        // Data Variables
        this.foodMasterList = [];
        // pagination Data
        this.pageArray = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY;
        this.pageSize = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["BASE"].PAGINATION_ARRAY[1];
        // Other Variables
        this.isOpenFilterView = false;
        this.isOpenHistoryDialog = false;
        this.equalJSON = {};
        this.likeJSON = {};
        this.inJSON = {};
        this.tabID = _utility_constants_header_constant__WEBPACK_IMPORTED_MODULE_9__["ADMINTABACCESS"].FOOD_MODULE;
        this.CreatedFromValue = null;
        this.CreatedToValue = null;
        this.locationList = [];
        this.foodTypeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["FOOD_TYPE_LIST"];
        this.todaysdate = new Date();
        this.userList = [];
    }
    Object.defineProperty(MyLunchBookingComponent.prototype, "fromField", {
        get: function () {
            return this.filterForm.get('from');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyLunchBookingComponent.prototype, "toField", {
        get: function () {
            return this.filterForm.get('to');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyLunchBookingComponent.prototype, "locationField", {
        get: function () {
            return this.filterForm.get('location_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyLunchBookingComponent.prototype, "userId", {
        // get form control
        get: function () {
            return this.filterForm.get('user_id');
        },
        enumerable: true,
        configurable: true
    });
    MyLunchBookingComponent.prototype.ngOnInit = function () {
        this.userInfo = this._sharedService.getUser();
        this.equalJSON = { "user_id": this.userInfo.id };
        this.tabData = this._sharedService.checkUserPrivilegesTabs(this.tabID);
        this.getFoodMasterList(1, 'date', 'desc');
        this.createAdvanceFilterForm();
        this.getLocationList();
        this.getUserList();
    };
    /**
     * Get User List
     */
    MyLunchBookingComponent.prototype.getUserList = function () {
        var _this = this;
        var params = {};
        if (this.userInfo.designation_id.id === 7) {
            params = {
                'compare': { 'equal': { 'is_active': 1 } },
                'or': {
                    'equal': [{
                            'first_approval_user': this.userInfo.id,
                            'second_approval_user': this.userInfo.id,
                        }]
                }
            };
        }
        else {
            params = {
                'compare': { 'equal': { 'is_active': 1 } },
                'or': {
                    'equal': [{
                            'first_approval_user': this.userInfo.id,
                            'second_approval_user': this.userInfo.id,
                        }]
                }
            };
        }
        this._sharedObjService.getUserList({ 'records': 'all' }, params).subscribe(function (response) {
            _this.userList = response;
            _this.userList.push(_this.userInfo);
        });
    };
    /**
     * Toogle Filter
     */
    MyLunchBookingComponent.prototype.onToggleFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Delete Form Element
     * @param {string} elementName
     * @param {string} JsonElementName
     */
    MyLunchBookingComponent.prototype.onClearTag = function (elementName, JsonElementName) {
        this.filterForm.get(elementName).setValue(null);
        this.advanceFilterForm.get(elementName).setValue(null);
        if (elementName === 'from') {
            this.CreatedFromValue = null;
        }
        else if (elementName === 'to') {
            this.CreatedToValue = null;
        }
        else if (elementName === 'location_id') {
            delete this.inJSON[elementName];
        }
        else if (elementName === 'user_id') {
            delete this.equalJSON[elementName];
        }
        this.equalJSON = { "user_id": this.userInfo.id };
        this.getFoodMasterList(1, 'date', 'desc');
    };
    /**
     * Location List API
     */
    MyLunchBookingComponent.prototype.getLocationList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].LOCATION, { 'records': 'all' }, { 'compare': { 'equal': { 'is_food': 1 } } }).subscribe(function (Response) {
            _this.locationList = Response.payload.data;
        });
    };
    /**
     * Advance Filter Key Up function
     * @param event
     * @param formValue
     * @param {boolean} isValid
     * @param {boolean} flag
     */
    MyLunchBookingComponent.prototype.setAdvanceFilterKeyUp = function (event, form, flag) {
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
            this.filterForm.setValue({
                'from': form.value['from'],
                'to': form.value['to'],
                'user_id': form.value['user_id'],
                'location_id': form.value['location_id']
            });
            this.setAdvanceFilter(form, false);
        }
    };
    /**
     * Export to Excel
     */
    MyLunchBookingComponent.prototype.downloadExcel = function () {
        var params = { 'excel': 1, 'records': 'all' };
        this._commonCrudService.downloadExcelData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].FOOD_MASTER_LIST, params, this.getSearchParam(), 'Food Menu ', 0).subscribe(function (response) {
        });
    };
    /**
     * Get Food Master List
     * @param pageNumber
     * @param key
     * @param val
     */
    MyLunchBookingComponent.prototype.getFoodMasterList = function (pageNumber, key, val) {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BOOK_FOOD_USER_LIST, this.getQueryParams(pageNumber, key, val), this.getSearchParam()).subscribe(function (response) {
            _this.foodMasterList = response.payload.data;
            _this.page = response.pager.pageNumber;
            _this.pageIndex = _this.page - 1;
            _this.totalRecords = +response.pager.totalRecords;
            _this.sortBy = response.pager.sortBy;
            _this.sortOrder = response.pager.sortOrder;
        });
    };
    MyLunchBookingComponent.prototype.createAdvanceFilterForm = function () {
        this.filterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userInfo.id),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.CreatedFromValue),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.CreatedToValue),
            location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
        this.advanceFilterForm = this._fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userInfo.id),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.CreatedFromValue),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.CreatedToValue),
            location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    /**
     * Add Food Module Module
     * */
    MyLunchBookingComponent.prototype.onAddFoodMenuModule = function (foodMaster) {
        this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["GLOBALDATAKEYS"].FOOD_MASTER, null);
        if (foodMaster) {
            this._sharedService.setClientData(_utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_2__["GLOBALDATAKEYS"].FOOD_MASTER, foodMaster);
        }
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].ADD_MENU_LIST]);
    };
    MyLunchBookingComponent.prototype.onFeedback = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].FOOD_MENU_FEEDBACK]);
    };
    /**
     * On Feedback Menu Review Dialog
     * @param foodMaster
     */
    MyLunchBookingComponent.prototype.onFeedbackMenuReviewDialog = function (foodMasterData, type) {
        var dialogRef = this.dialog.open(_feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackMenuLunchDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {
                foodMaster: (foodMasterData) ? foodMasterData : [],
                typeOfView: type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    /**
     * on delete confirmation dialog
     */
    MyLunchBookingComponent.prototype.onDeleteConfirmationDialog = function (foodMaster) {
        var _this = this;
        var dialogRef = this.dialog.open(_utility_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"], {
            data: {
                content: 'Are you sure you want to cancel lunch booking for the selected day?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var params = {};
                params['is_cancel'] = 1;
                params['_method'] = 'put';
                _this._commonCrudService.updateDataWithPut(_utility_constants_api__WEBPACK_IMPORTED_MODULE_7__["AdminAPI"].BOOK_FOOD_USER_LIST, foodMaster.id, params).subscribe(function (response) {
                    _this.getFoodMasterList(1, 'date', 'desc');
                });
            }
        });
    };
    MyLunchBookingComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_8__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    // get function for returning pageNumber and page size at time of listing api
    MyLunchBookingComponent.prototype.getQueryParams = function (page, sortKey, sortOrder) {
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
     * Toogle Filter
     */
    MyLunchBookingComponent.prototype.onOpenFilter = function () {
        this.isOpenFilterView = !this.isOpenFilterView;
    };
    /**
     * Close filter
     */
    MyLunchBookingComponent.prototype.onCloseFilter = function () {
        this.isOpenFilterView = false;
    };
    /**
     * Pagination page change method
     * @param event
     */
    MyLunchBookingComponent.prototype.onPageChange = function (event) {
        this.pageSize = event.pageSize;
        this.getFoodMasterList(event.pageIndex + 1, this.sortBy, this.sortOrder);
    };
    /**
     * Reset All Filters
     */
    MyLunchBookingComponent.prototype.resetFilterForm = function () {
        this.createAdvanceFilterForm();
        this.likeJSON = {};
        this.equalJSON = { "user_id": this.userInfo.id };
        this.inJSON = {};
        this.CreatedToValue = null;
        this.CreatedFromValue = null;
        this.getFoodMasterList(1, 'date', 'desc');
    };
    /**
     * Set Advance Filter
     * @param {FormGroup} form
     * @param {boolean} flag
     */
    MyLunchBookingComponent.prototype.setAdvanceFilter = function (form, flag) {
        if (flag === void 0) { flag = true; }
        this.equalJSON = { "user_id": this.userInfo.id };
        this.likeJSON = {};
        this.inJSON = {};
        // removing empty key from object
        for (var key in form.value) {
            if (form.value.hasOwnProperty(key)) {
                if (form.value[key] === null || form.value[key] === '' || form.value[key] === undefined) {
                    delete form.value[key];
                }
                else {
                    if (flag) {
                        this.advanceFilterForm.get(key).setValue(form.value[key]);
                    }
                }
            }
        }
        if (form.value['from'] !== '' && form.value['from']) {
            this.CreatedFromValue = form.value['from'];
            delete form.value['from'];
        }
        if (form.value['to'] !== '' && form.value['to']) {
            this.CreatedToValue = form.value['to'];
            delete form.value['to'];
        }
        // For Multiple Entity ID
        if (form.valid && (form.value !== {})) {
            for (var key in form.value) {
                if (form.value.hasOwnProperty(key)) {
                    if (key === 'location_id') {
                        this.inJSON[key] = form.value[key].join(",");
                    }
                    else if (key === 'user_id') {
                        this.equalJSON[key] = form.value[key];
                    }
                }
            }
            this.isOpenFilterView = false;
            this.getFoodMasterList(1, 'date', 'desc');
        }
    };
    /**
     * advance filter search operation
     * @returns {{}}
     */
    MyLunchBookingComponent.prototype.getSearchParam = function () {
        var params = {};
        var filter = {};
        if (this.CreatedFromValue) {
            filter['greaterthanequal'] = {};
        }
        if (this.CreatedToValue) {
            filter['lessthanequal'] = {};
        }
        if (this.CreatedFromValue) {
            filter['greaterthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.CreatedFromValue).format('YYYY-MM-DD');
        }
        if (this.CreatedToValue) {
            filter['lessthanequal']['date'] = moment__WEBPACK_IMPORTED_MODULE_11__(this.CreatedToValue).format('YYYY-MM-DD');
        }
        // check for the object wheather its empty or not
        if (Object.keys(this.equalJSON).length !== 0) {
            filter['equal'] = this.equalJSON;
        }
        if (Object.keys(this.likeJSON).length !== 0) {
            filter['like'] = this.likeJSON;
        }
        if (Object.keys(this.equalJSON).length || Object.keys(this.likeJSON).length || !_utility_common_functions__WEBPACK_IMPORTED_MODULE_12__["CommonFunctions"].isEmpty(filter)) {
            params['compare'] = filter;
        }
        if (Object.keys(this.inJSON).length !== 0) {
            params['in'] = this.inJSON;
        }
        return params;
    };
    MyLunchBookingComponent.prototype.onKeydownHandler = function (event) {
        if (event.keyCode === 27) {
            this.isOpenFilterView = false;
        }
    };
    /**
     * Get Food Type
     * @param foodType
     */
    MyLunchBookingComponent.prototype.getFoodType = function (foodType) {
        var val = this.foodTypeList.filter(function (elem) { return elem.key === foodType; });
        return (val.length) ? val[0].label : '';
    };
    MyLunchBookingComponent.prototype.onBookYourLunch = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_onbehalf_book_lunch_dialog_onbehalf_book_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_14__["OnbehalfBookLunchDialogComponent"], {
            panelClass: 'add-form-medium-dialog-container',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getFoodMasterList(1, 'date', 'desc');
            }
        });
    };
    MyLunchBookingComponent.prototype.compareDate = function (date) {
        // With Date object we can compare dates them using the >, <, <= or >=.
        // The ==, !=, ===, and !== operators require to use date.getTime(),
        // so we need to create a new instance of Date with 'new Date()'
        var d1 = moment__WEBPACK_IMPORTED_MODULE_11__(new Date).format('YYYY-MM-DD');
        var d2 = moment__WEBPACK_IMPORTED_MODULE_11__(new Date(date)).format('YYYY-MM-DD');
        console.log(d1, d2);
        // Check if the dates are equal
        // Check if the first is greater than second
        if (d2 >= d1) {
            return 1;
        }
        // Check if the first is less than second
        if (d2 < d1) {
            return -1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MyLunchBookingComponent.prototype, "onKeydownHandler", null);
    MyLunchBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-lunch-booking',
            template: __webpack_require__(/*! ./my-lunch-booking.component.html */ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.html"),
            styles: [__webpack_require__(/*! ./my-lunch-booking.component.scss */ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.scss")]
        }),
        __metadata("design:paramtypes", [_utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_15__["SharedObjService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_5__["CommonCrudService"], _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], MyLunchBookingComponent);
    return MyLunchBookingComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.module.ts ***!
  \**********************************************************************************/
/*! exports provided: MyLunchBookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLunchBookingModule", function() { return MyLunchBookingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_guards/auth.guards */ "./src/app/_guards/auth.guards.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utility/utility.module */ "./src/utility/utility.module.ts");
/* harmony import */ var _my_lunch_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-lunch-booking.component */ "./src/app/admin/admin-hrms-new/my-lunch-booking/my-lunch-booking.component.ts");
/* harmony import */ var _feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component */ "./src/app/admin/admin-hrms-new/my-lunch-booking/feedback-menu-lunch-dialog/feedback-menu-lunch-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _onbehalf_book_lunch_dialog_onbehalf_book_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component */ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'my-lunch-booking',
        component: _my_lunch_booking_component__WEBPACK_IMPORTED_MODULE_5__["MyLunchBookingComponent"],
        canActivate: [_guards_auth_guards__WEBPACK_IMPORTED_MODULE_2__["AdminAuthGuard"]]
    }
];
var MyLunchBookingModule = /** @class */ (function () {
    function MyLunchBookingModule() {
    }
    MyLunchBookingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _utility_utility_module__WEBPACK_IMPORTED_MODULE_4__["UtilityModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            declarations: [_my_lunch_booking_component__WEBPACK_IMPORTED_MODULE_5__["MyLunchBookingComponent"], _feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackMenuLunchDialogComponent"], _onbehalf_book_lunch_dialog_onbehalf_book_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_8__["OnbehalfBookLunchDialogComponent"]],
            entryComponents: [_feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackMenuLunchDialogComponent"], _onbehalf_book_lunch_dialog_onbehalf_book_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_8__["OnbehalfBookLunchDialogComponent"]],
            exports: [_my_lunch_booking_component__WEBPACK_IMPORTED_MODULE_5__["MyLunchBookingComponent"], _feedback_menu_lunch_dialog_feedback_menu_lunch_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackMenuLunchDialogComponent"]]
        })
    ], MyLunchBookingModule);
    return MyLunchBookingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"modal__header\">\r\n    <div class=\"modal__header__logo\">Book Lunch</div>\r\n  </div>\r\n  <div class=\"modal__close\">\r\n    <a><i class=\"material-icons\" (click)=\"onClose()\">close</i></a>\r\n  </div>\r\n  <div class=\"newsletter-container\">\r\n    <!--Start add food form-->\r\n    <div>\r\n      <span class=\"panel-title\">BOOK LUNCH :: You can only select the food type as 'Food for Fasting' if the items are available in the menu list else NOT. Once you will add it can not be removed.!</span>\r\n      <form [formGroup]=\"addFoodForm\" (submit)=\"onSubmit(addFoodForm)\">\r\n        <div class=\"row\">\r\n          <div class=\"row col-md-10 MT-20\">\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Menu Date</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <input matInput [matDatepicker]=\"date\"  [min]=\"startDateValue\" [max]=\"endDateValue\" formControlName=\"date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\r\n                <mat-datepicker #date></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">User Name</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <ng-select [items]=\"userList\"\r\n                         [closeOnSelect]=\"true\"\r\n                         bindLabel=\"userfullname\"\r\n                         placeholder=\"User Name\"\r\n                         bindValue=\"id\"\r\n                         [virtualScroll]=\"true\"\r\n                         [searchable]=\"true\"\r\n                         [hideSelected]=\"true\"\r\n                         formControlName=\"user_id\">\r\n              </ng-select>\r\n              <div class=\"validation-msg\">\r\n                <app-validation *ngIf=\"isRequiredField(addFoodForm.get('user_id'))\"\r\n                                [errMsg]=\"validationMsg.USERNAME_REQUIRED\"></app-validation>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Location</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Location\" [multiple]=\"false\" formControlName=\"location_id\"\r\n                            (selectionChange)=\"getMenuList($event.value)\">\r\n                  <mat-option *ngFor=\"let location of locationList\" [value]=\"location?.id\">\r\n                    {{ location?.location_name }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\" *ngIf=\"foodMasterList && foodMasterList?.id > 0\">\r\n              <mat-label class=\"fw-500\">Menu</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9  MB-5\" *ngIf=\"foodMasterList && foodMasterList?.id > 0\">\r\n              <span class=\"panel-title\">Menu list</span>\r\n              <span class=\"primary-color\" *ngFor=\"let item of foodMasterList?.menu_name?.toString().split(',')\">\r\n            {{item}}\r\n          </span>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 MT-10\">\r\n              <mat-label class=\"fw-500\">Lunch Type</mat-label>\r\n            </div>\r\n            <div class=\"col-md-9 MB-5\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Please Select\" [multiple]=\"false\" formControlName=\"food_type\">\r\n                  <mat-option *ngFor=\"let foodType of foodTypeList\" [value]=\"foodType?.key\">\r\n                    {{ foodType?.label }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-12 text-right PR-0 MTB-20\">\r\n              <button type=\"submit\" class=\"btn-success MR-5\" [disabled]=\"addFoodForm.invalid\">Save</button>\r\n              <!--<button type=\"button\" class=\"btn-default MR-5\" (click)=\"\">cancel</button>-->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6  MT-20\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <!--End add food form-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FkbWluL2FkbWluLWhybXMtbmV3L215LWx1bmNoLWJvb2tpbmcvb25iZWhhbGYtYm9vay1sdW5jaC1kaWFsb2cvb25iZWhhbGYtYm9vay1sdW5jaC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: OnbehalfBookLunchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnbehalfBookLunchDialogComponent", function() { return OnbehalfBookLunchDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utility/validation */ "./src/utility/validation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utility/constants/base-constants */ "./src/utility/constants/base-constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared.service */ "./src/utility/shared-service/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utility/shared-service/common-crud.service */ "./src/utility/shared-service/common-crud.service.ts");
/* harmony import */ var _utility_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../utility/constants/api */ "./src/utility/constants/api.ts");
/* harmony import */ var _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../utility/constants/admin-route */ "./src/utility/constants/admin-route.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../utility/components/base/base.component */ "./src/utility/components/base/base.component.ts");
/* harmony import */ var _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../utility/shared-service/shared-object.service */ "./src/utility/shared-service/shared-object.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var OnbehalfBookLunchDialogComponent = /** @class */ (function (_super) {
    __extends(OnbehalfBookLunchDialogComponent, _super);
    function OnbehalfBookLunchDialogComponent(dialogRef, data, _sharedService, _fb, _router, _commonCrudService, _sharedObjService) {
        var _this = _super.call(this) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this._sharedService = _sharedService;
        _this._fb = _fb;
        _this._router = _router;
        _this._commonCrudService = _commonCrudService;
        _this._sharedObjService = _sharedObjService;
        // Constant Variables
        _this.validationMsg = new _utility_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationConstantMessage"]();
        _this.locationList = [];
        _this.foodTypeList = _utility_constants_base_constants__WEBPACK_IMPORTED_MODULE_3__["FOOD_TYPE_LIST"];
        _this.userList = [];
        _this.endDateValue = new Date();
        _this.startDateValue = new Date();
        return _this;
    }
    OnbehalfBookLunchDialogComponent.prototype.ngOnInit = function () {
        var startDate = new Date();
        this.startDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
        this.endDateValue = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1);
        this.userInfo = this._sharedService.getUser();
        this.createAddFoodForm();
        this.getLocationList();
        this.getUserList();
    };
    OnbehalfBookLunchDialogComponent.prototype.getMenuList = function (value) {
        var _this = this;
        var menuDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.addFoodForm.get("date").value).format("YYYY-MM-DD");
        this.addFoodForm.get("food_menu_id").setValue(null);
        this.addFoodForm.get("food_menu_id").updateValueAndValidity();
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].FOOD_MASTER_LIST, {}, { 'compare': { 'equal': { 'location_id': value, 'date': menuDate } } }).subscribe(function (response) {
            _this.foodMasterList = (response.payload.data && response.payload.data.length) ? response.payload.data[0] : [];
            if (_this.foodMasterList && _this.foodMasterList.id > 0) {
                _this.addFoodForm.get("food_menu_id").setValue(_this.foodMasterList.id);
                _this.addFoodForm.get("food_menu_id").updateValueAndValidity();
            }
        });
    };
    /**
     * Location List API
     */
    OnbehalfBookLunchDialogComponent.prototype.getLocationList = function () {
        var _this = this;
        this._commonCrudService.listData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].LOCATION, { 'records': 'all' }, { 'compare': { 'equal': { 'is_food': 1 } } }).subscribe(function (Response) {
            _this.locationList = Response.payload.data;
        });
    };
    OnbehalfBookLunchDialogComponent.prototype.onAwardMater = function () {
        this._router.navigate([_utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].AWARD_MASTER]);
    };
    OnbehalfBookLunchDialogComponent.prototype.createAddFoodForm = function () {
        this.addFoodForm = this._fb.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userInfo.food_next_date, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            food_menu_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            food_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    OnbehalfBookLunchDialogComponent.prototype.onGoDashboard = function () {
        this._router.navigate(['/' + _utility_constants_admin_route__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"].ADMIN_NEW_HRMS]);
    };
    /** On Submit Form
     * @param form
     */
    OnbehalfBookLunchDialogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            form.value['date'] = moment__WEBPACK_IMPORTED_MODULE_10__(this.addFoodForm.get('date').value).format('YYYY-MM-DD');
            this._commonCrudService.addData(_utility_constants_api__WEBPACK_IMPORTED_MODULE_8__["AdminAPI"].BOOK_FOOD, form.value).subscribe(function (response) {
                _this.onClose();
            });
        }
    };
    OnbehalfBookLunchDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    /**
     * Get User List
     */
    OnbehalfBookLunchDialogComponent.prototype.getUserList = function () {
        var _this = this;
        var params = {};
        if (this.userInfo.designation_id.id === 7) {
            params = {
                'compare': { 'equal': { 'is_active': 1 } },
                'or': {
                    'equal': [{
                            'first_approval_user': this.userInfo.id,
                            'second_approval_user': this.userInfo.id,
                        }]
                }
            };
        }
        else {
            params = {
                'compare': { 'equal': { 'is_active': 1 } },
                'or': {
                    'equal': [{
                            'first_approval_user': this.userInfo.id,
                            'second_approval_user': this.userInfo.id,
                        }]
                }
            };
        }
        this._sharedObjService.getUserList({ 'records': 'all' }, params).subscribe(function (response) {
            _this.userList = response;
        });
    };
    OnbehalfBookLunchDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onbehalf-book-lunch-dialog',
            template: __webpack_require__(/*! ./onbehalf-book-lunch-dialog.component.html */ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.html"),
            styles: [__webpack_require__(/*! ./onbehalf-book-lunch-dialog.component.scss */ "./src/app/admin/admin-hrms-new/my-lunch-booking/onbehalf-book-lunch-dialog/onbehalf-book-lunch-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _utility_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _utility_shared_service_common_crud_service__WEBPACK_IMPORTED_MODULE_7__["CommonCrudService"],
            _utility_shared_service_shared_object_service__WEBPACK_IMPORTED_MODULE_12__["SharedObjService"]])
    ], OnbehalfBookLunchDialogComponent);
    return OnbehalfBookLunchDialogComponent;
}(_utility_components_base_base_component__WEBPACK_IMPORTED_MODULE_11__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=admin-hrms-new-admin-hrms-new-module.js.map