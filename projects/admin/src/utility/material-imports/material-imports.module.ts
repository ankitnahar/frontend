import { NgModule } from "@angular/core";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  NativeDateAdapter,
} from "@angular/material";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { CountdownModule } from "ngx-countdown";
import { EllipsisModule } from "ngx-ellipsis";

import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatTreeModule } from "@angular/material/tree";

const MY_DATE_API = typeof Intl !== "undefined";

export class CustomDateAdapter extends NativeDateAdapter {
  useUtcForDisplay = true;

  parse(value: any): Date | null {
    if (typeof value === "string" && value.indexOf("-") > -1) {
      const str = value.split("-");
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === "number" ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  format(date: Date, displayFormat: string): string {
    if (displayFormat == "input") {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return this._to2digit(day) + "-" + this._to2digit(month) + "-" + year;
    } else if (displayFormat == "inputMonth") {
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return this._to2digit(month) + "/" + year;
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ("00" + n).slice(-2);
  }
}

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: { month: "short", year: "numeric", day: "numeric" },
  },
  display: {
    // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: "input",
    // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
    monthYearLabel: "inputMonth",
    dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "long" },
  },
};

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    OverlayModule,
    PortalModule,
    MatBadgeModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
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
    MatCardModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    NgSelectModule,
    CountdownModule,
    EllipsisModule,
    MatStepperModule,
    CdkTreeModule,
    MatTreeModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    OverlayModule,
    PortalModule,
    MatBadgeModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
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
    MatCardModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    NgMultiSelectDropDownModule,
    NgSelectModule,
    CountdownModule,
    EllipsisModule,
    MatStepperModule,
    CdkTreeModule,
    MatTreeModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS,
    },
  ],
})
export class MaterialImportsModule {
  /* constructor(private dateAdapter:DateAdapter<Date>) {
     dateAdapter.setLocale('en'); // DD-MM-YYYY
   }*/
}
