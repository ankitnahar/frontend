import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
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
    MatAutocompleteModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
})
export class MaterialImportsModule {
}
