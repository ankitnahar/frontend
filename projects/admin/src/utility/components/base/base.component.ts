import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // Form Validation Methods
  isRequiredField(formControlName) {
    return formControlName.hasError('required') && formControlName.touched;
  }

  isDynamicFieldsRequiredField(formControlName) {
    return formControlName.hasError('required') && formControlName.untouched;

  }

  isRequiredTimePickerField(formControlName) {
    return formControlName.hasError('required') && formControlName.untouched;
  }

  isValidField(formControlName) {
    return formControlName.hasError('pattern');
  }

  isValidLength(formControlName) {
    return formControlName.hasError('minlength') || formControlName.hasError('maxlength');
  }

  isValidMinMaxData(formControlName) {
    return formControlName.hasError('min') || formControlName.hasError('max');
  }

  hasError(errorName, formGroup, formControl) {
    return formGroup.hasError(errorName) && formControl.dirty;
  }

  // scroll to top
  onScroll() {
    $('html, body').animate({scrollTop: 0}, 'slow');
  }
}
