import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'accountNumberMask'})
export class AccountNumberMaskPipe implements PipeTransform {
  transform(value: any): string {
    if (value !== '' || value !== null) {
      value = value.replace(/\s/g, "");
      value = value.replace(/\d(?=\d{4})/g, "");
      return value;
    } else {
      return value;
    }
  }
}
