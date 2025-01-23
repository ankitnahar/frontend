import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'checkEmpty'})
export class CheckEmpty implements PipeTransform {
  transform(value: any): string {
    if (value === '' || value === null || value === '0000-00-00' || value === '30-11-1899' || value === '01-01-1970') {
      return '-';
    } else {
      return value;
    }
  }
}

@Pipe({name: 'placeNA'})
export class PlaceNA implements PipeTransform {
  transform(value: any): string {
    if (value === '' || value === null) {
      return 'N/A';
    } else {
      return value;
    }
  }
}

/*
 * Converts newlines into html breaks
*/
@Pipe({name: 'newline'})
export class Newline implements PipeTransform {
  transform(value: string, args: string[]): any {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
}

@Pipe({name: 'decodeHTMLEntities'})
export class DecodeHtmlEntities implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (!value) {
      return;
    }

    const txt = document.createElement('textarea');
    txt.innerHTML = value;
    return txt['value'];
  }
}
