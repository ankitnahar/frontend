import {BASE} from './constants/base-constants';
import * as CryptoJS from 'crypto-js';
import * as FileSave from 'file-saver';

export class CommonFunctions {

  public static ENCRYPT_OBJ(value: any): any {
    return CryptoJS.AES.encrypt(JSON.stringify(value), BASE.ENCRIPTION_TOKEN);
  }

  public static DECRYPT_OBJ(value: any): any {
    if (value && value != null) {
      const bytes = CryptoJS.AES.decrypt(value.toString(), BASE.ENCRIPTION_TOKEN);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    }
    return '';
  }

  public static ConvertIntToBoolean(value): boolean {
    if (value === null) {
      return false;
    }
    if (value === 1) {
      return true;
    } else {
      return false;
    }
  }
}

export function IsValidString(stringVal: string): boolean {
  let valid = false;
  if (stringVal && stringVal !== 'null' && stringVal !== null && stringVal !== 'undefined') {
    valid = true;
  }
  return valid;
}

export function FileIsDoc(filename: string): boolean {
  return (filename === 'image/png' || filename === 'image/jpeg' || filename === 'application/pdf');
}

export function Copy(o) {
  return JSON.parse(JSON.stringify(o));
}

export function AppLogger(logValue: any, prefix: string = '') {
  console.log(`<==================================================== ${prefix} ====================================================>`);
  console.log(logValue);
  console.log('<===================================================================================================================>');
}

export function FileIsImage(filename: string): boolean {
  const fileExtension = filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
  return (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'pdf');
}


export function GetDates(startDate, endDate) {
  const dates = [];
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push({'day': currentDate.getDate(), 'isDisable': false});
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

export function CriteriaWithMultipleVal(value, column, operator) {
  return {'column': column, 'values': value, 'operator': operator};
}

export function GetCriteria(value, column, operator) {
  return {'column': column, 'values': [value], 'operator': operator};
}

export function GetAccBal(value) {
  // return Math.floor(value * 100) / 100;
  return value;
}

export function GetCryptoBal(value) {
  return Math.floor(value * 10000) / 10000;
}

export function ClipboardText(value: string): boolean {
  try {
    const inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = value;
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    return true;
  }
  catch (e) {
    return false;
  }
}

export function DownloadPDF(blobData: any, filename: string) {
  const blob = new Blob([blobData], {type: 'application/pdf'});
  FileSave.saveAs(blob, `${filename}.pdf`);
}
