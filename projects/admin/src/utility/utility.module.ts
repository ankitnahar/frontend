import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, ModuleWithProviders, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { ChartsModule } from "ng2-charts";
import { DragulaModule } from "ng2-dragula";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { NgxPaginationModule } from "ngx-pagination";
import { TagsInputModule } from "ngx-tags-input";
import { GlobalErrorHandler } from "../app/global-error-handler";
import { BaseComponent } from "./components/base/base.component";
import { CommonHistoryDialogComponent } from "./components/common-history-dialog/common-history-dialog.component";
import { CommonUserDialogComponent } from "./components/common-user-dialog/common-user-dialog.component";
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";
import { HistoryDialogComponent } from "./components/history-dialog/history-dialog.component";
import { NoDataComponent } from "./components/no-data/no-data.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ProgressHudComponent } from "./components/progress-hud/progress-hud.component";
import { ValidationComponent } from "./components/validation/validation.component";
import { ActualizableDirective } from "./directives/actualizable.directive";
import { DisableControlDirective } from "./directives/disable-control.directive";
import { ValidMobileDirective } from "./directives/valid-mobile-checks.directive";
import { HttpInterceptors } from "./http-interceptors/index-Interceptor";
import { MaterialImportsModule } from "./material-imports/material-imports.module";
import { AccountNumberMaskPipe } from "./pipe/accountNumberMask.pipe";
import {
  CheckEmpty,
  DecodeHtmlEntities,
  Newline,
  PlaceNA,
} from "./pipe/checkEmpty.pipe";
import {
  DateComparePipe,
  DateCompareWithTodayPipe,
  FormatDateValuePipe,
} from "./pipe/date-compare.pipe";
import { FilterPipe } from "./pipe/filter.pipe";
import { SafeHTMLDirective, SafeURLDirective } from "./pipe/inner-html.pipe";
import { KeysPipe } from "./pipe/keyValue.pipe";
import { NoCommaPipe } from "./pipe/noComma.pipe";
import { TeamListFormate } from "./pipe/team-list-formate.pipe";
import { TeamListJsonFormate } from "./pipe/team-list-json-formate.pipe";
import { APIManager } from "./shared-service/apimanager.service";
import { CommonCrudService } from "./shared-service/common-crud.service";
import { SharedObjService } from "./shared-service/shared-object.service";
import { SharedUserService } from "./shared-service/shared-user.service";
import { SharedService } from "./shared-service/shared.service";

@NgModule({
  imports: [
    NgxExtendedPdfViewerModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
    NgxPaginationModule,
    ChartsModule,
    NgxMaterialTimepickerModule.forRoot(),
    TagsInputModule,
    DragulaModule.forRoot(),
    EditorModule,
    FlexLayoutModule,
  ],
  declarations: [
    ValidationComponent,
    BaseComponent,
    PaginationComponent,
    NoDataComponent,
    ProgressHudComponent,
    CheckEmpty,
    KeysPipe,
    DateCompareWithTodayPipe,
    DateComparePipe,
    TeamListFormate,
    TeamListJsonFormate,
    FilterPipe,
    PlaceNA,
    Newline,
    DecodeHtmlEntities,
    FormatDateValuePipe,
    ValidMobileDirective,
    DisableControlDirective,
    ActualizableDirective,
    ConfirmationDialogComponent,
    HistoryDialogComponent,
    SafeHTMLDirective,
    SafeURLDirective,
    CommonHistoryDialogComponent,
    NoCommaPipe,
    CommonUserDialogComponent,
    AccountNumberMaskPipe,
  ],
  exports: [
    NgxExtendedPdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
    ValidationComponent,
    PaginationComponent,
    ProgressHudComponent,
    NoDataComponent,
    CheckEmpty,
    KeysPipe,
    DateCompareWithTodayPipe,
    DateComparePipe,
    TeamListFormate,
    TeamListJsonFormate,
    FilterPipe,
    PlaceNA,
    Newline,
    DecodeHtmlEntities,
    FormatDateValuePipe,
    ValidMobileDirective,
    DisableControlDirective,
    ActualizableDirective,
    ChartsModule,
    NgxMaterialTimepickerModule,
    TagsInputModule,
    ConfirmationDialogComponent,
    HistoryDialogComponent,
    DragulaModule,
    SafeHTMLDirective,
    SafeURLDirective,
    CommonHistoryDialogComponent,
    NoCommaPipe,
    EditorModule,
    CommonUserDialogComponent,
    AccountNumberMaskPipe,
    FlexLayoutModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    CommonHistoryDialogComponent,
    CommonUserDialogComponent,
  ],
  providers: [
    CommonCrudService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [
        SharedService,
        SharedUserService,
        SharedObjService,
        HttpInterceptors,
        APIManager,
      ],
    };
  }
}
