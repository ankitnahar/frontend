import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateCompare'
})
export class DateComparePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today = new Date();
    let currentTime = new Date();
    let month = currentTime.getMonth() + 1;
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();
    let dataMain = year + '-' + month + '-' + day;

    var d2 = new Date(dataMain);
    var d1 = new Date(value.due_date);

    if (d1.getTime() < d2.getTime()) {
      return true;
    } else {
      return false;
    }
  }
}


@Pipe({
  name: 'formatDateValue'
})

export class FormatDateValuePipe implements PipeTransform {
  transform(value: any, format: string = ''): string {
    if (value === '' || value === null || value === '0000-00-00' || value === '0000-00-00 00:00:00' || value === '30-11-1899' || value === '01-01-1970') {
      return '';
    } else {
      // Try and parse the passed value.
      const momentDate = moment(value);

      // If moment didn't understand the value, return it unformatted.
      if (!momentDate.isValid()) {
        return value;
      }

      // Otherwise, return the date formatted as requested.
      return momentDate.format(format);
    }
  }
}


@Pipe({
  name: 'dateCompareWithToday'
})
export class DateCompareWithTodayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today = new Date();
    let currentTime = new Date();
    let month = currentTime.getMonth() + 1;
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();
    let dataMain = year + '-' + month + '-' + day;

    var d2 = new Date(dataMain);
    var d1 = new Date(value);
    var result = d1.setDate(d1.getDate() + 3);
    d1 = new Date(result);
    if (d1.getTime() < d2.getTime()) {
      return true;
    } else {
      return false;
    }
  }
}
