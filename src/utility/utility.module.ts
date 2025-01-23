import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatIconModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidationComponent} from './validation/validation.component';
import {BaseComponent} from './base/base.component';
import {SharedService} from './shared-service/shared.service';
import {SharedUserService} from './shared-service/shared-user.service';
import {APIManager} from './shared-service/apimanager.service';
import {MaterialImportsModule} from './material-imports/material-imports.module';
import {CheckEmpty, PlaceNA} from './pipe/checkEmpty.pipe';
import {HttpInterceptors} from './http-interceptors/index-Interceptor';
import {NoDataComponent} from './no-data/no-data.component';
import {PaginationComponent} from './pagination/pagination.component';
import {SharedObjService} from './shared-service/shared-object.service';
import {ProgressHudComponent} from './progress-hud/progress-hud.component';
import {ValidMobileDirective} from './directives/valid-mobile-checks.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MaterialImportsModule,
    NgxPaginationModule
  ],
  declarations: [
    ValidationComponent,
    BaseComponent,
    PaginationComponent,
    NoDataComponent,
    ProgressHudComponent,
    CheckEmpty,
    PlaceNA,
    ValidMobileDirective
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
    ValidationComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    PaginationComponent,
    ProgressHudComponent,
    NoDataComponent,
    CheckEmpty,
    PlaceNA,
    ValidMobileDirective
  ],
  providers: [
    SharedService,
    SharedUserService,
    SharedObjService,
    HttpInterceptors,
    APIManager
  ]
})

export class UtilityModule {
}
