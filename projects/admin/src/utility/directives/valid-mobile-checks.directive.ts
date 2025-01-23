import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[valid-mobile-checks]',
  host: {
    '(keypress)': '_onKeypress($event)',
  }
})
export class ValidMobileDirective {

  regexStr = '^[0-9]*$';
  lengthLimit = 10;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent> event;

    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: home, end, left, right
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      // right side number pad
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }

    const ch = String.fromCharCode(e.keyCode);
    const regEx = new RegExp(this.regexStr);
    if (regEx.test(ch))
      return;
    else
      e.preventDefault();
  }

  // key length
  _onKeypress(e) {
    if (e.target.value.length === this.lengthLimit) e.preventDefault();
  }
}
