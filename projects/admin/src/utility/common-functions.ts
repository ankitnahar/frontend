import {BASE} from './constants/base-constants';

import * as CryptoJS from 'crypto-js';
import * as FileSave from 'file-saver';
import * as moment from 'moment';

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

  public static isEmpty(obj): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  public static getTodayDate(): string {
    let date = new Date();
    return (date.getFullYear().toString() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
      + ('0' + (date.getDate())).slice(-2));
  }
}

export function IsValidString(stringVal: string): boolean {
  let valid = false;
  if (stringVal && stringVal !== 'null' && stringVal !== null && stringVal !== 'undefined') {
    valid = true;
  }
  return valid;
}

export function Copy(o) {
  return JSON.parse(JSON.stringify(o));
}

export function isValidImageType(filename: string): boolean {
  return (filename === 'image/png' || filename === 'image/jpeg' || filename === 'image/jpg');
}

export function isValidFileType(filename: string) {
  return (filename === 'image/png'
    || filename === 'image/jpeg'
    || filename === 'image/jpg'
    || filename === 'application/pdf'
    || filename === 'application/vnd.ms-excel'
    || filename === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    || filename === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    || filename === 'application/vnd.ms-word'
    || filename === 'text/plain'
    || filename === 'application/x-rar-compressed'
    || filename === 'application/octet-stream'
    || filename === 'application/zip'
    || filename === 'application/octet-stream'
    || filename === 'application/x-zip-compressed'
    || filename === 'multipart/x-zip'
    || filename === 'application/vnd.google-apps.presentation'
    || filename === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    || filename === 'application/vnd.ms-powerpoint'
  );
}

export function isValidFileTypeExt(filename: string) {
  return (filename === 'rar'
    || filename === 'aba'
  );
}

export function AppLogger(logValue: any, prefix: string = '') {

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


// export function ClipboardText(value: string): boolean {
//   try {
//     const inp = document.createElement('input');
//     document.body.appendChild(inp);
//     inp.value = value;
//     inp.select();
//     document.execCommand('copy', false);
//     inp.remove();
//     return true;
//   }
//   catch (e) {
//     return false;
//   }
// }

export function addTimes(startTime, endTime): string {
  const times = [0, 0, 0];
  const max = times.length;

  const a = (startTime || '').split(':');
  const b = (endTime || '').split(':');

  // normalize time values
  for (let i = 0; i < max; i++) {
    a[i] = isNaN(+a[i]) ? 0 : (+a[i]);
    b[i] = isNaN(+b[i]) ? 0 : (+b[i]);
  }

  // store time values
  for (let i = 0; i < max; i++) {
    times[i] = a[i] + b[i];
  }

  let hours = times[0];
  let minutes = times[1];
  let seconds = times[2];

  if (seconds >= 60) {
    const m = (seconds / 60) << 0;
    minutes += m;
    seconds -= 60 * m;
  }

  if (minutes >= 60) {
    const h = (minutes / 60) << 0;
    hours += h;
    minutes -= 60 * h;
  }

  return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}

export function DownloadPDF(blobData: any, filename: string) {
  const blob = new Blob([blobData], {type: 'application/pdf'});
  FileSave.saveAs(blob, `${filename}.pdf`);
}

export function isValidDocumentType(filename: string): boolean {
  return (filename === 'application/vnd.ms-excel' ||
    filename === 'image/png' || filename === 'image/jpeg' ||
    filename === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    filename === 'image/jpg' || filename === 'application/pdf');
}

/**
 * Download File
 * @param response
 * @param {string} fileName
 * @param {string} fileType
 * @param {string} fileExtension
 * @returns {{}}
 * @constructor
 */
export function DownloadFile(response: any, fileName: string, fileType: string, fileExtension: string) {
  const blob = new Blob([response], {type: fileType});
  const filename = fileName + fileExtension;
  FileSave.saveAs(blob, filename);
  return {};
}

export function getUnitsFromTime(startTime: any, endTime: any) {
  const start = startTime.split(':');
  const end = endTime.split(':');
  const startDate = new Date(0, 0, 0, start[0], start[1], 0);
  const endDate = new Date(0, 0, 0, end[0], end[1], 0);
  let diff = endDate.getTime() - startDate.getTime();
  const hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / 1000 / 60);

  // Convert to befree units
  const temp = ((hours * 60) + minutes) / 60 * 10;
  return Math.round(temp);
}

/**
 * Data Object Convert to Decode Param
 * @param dataObject
 */
export function convertURLParamToDecode(dataObject: any) {
  const returnData = [];
  Object.keys(dataObject).forEach(keyVal => {
    // const keyData = CommonFunctions.DECRYPT_OBJ(keyVal);
    // const keyValue = CommonFunctions.DECRYPT_OBJ(dataObject[keyVal]);
    const keyData = atob(keyVal);
    const keyValue = atob(dataObject[keyVal]);
    returnData[keyData] = keyValue;
  });
  return returnData;
}

export function convertURLParamToDecodeQuote(dataObject: any) {
  const returnData = [];
  Object.keys(dataObject).forEach(keyVal => {
    if (keyVal === 'event') {
      returnData[keyVal] = dataObject[keyVal];
    } else {
      const keyData = atob(keyVal);
      const keyValue = atob(dataObject[keyVal]);
      returnData[keyData] = keyValue;
    }
  });
  return returnData;
}

/**
 * Data Object Convert to Encode Param
 * @param dataObject
 */
export function convertURLParamToEncode(dataObject: any) {
  const returnData = {};
  Object.keys(dataObject).forEach(keyVal => {
    // const keyData = CommonFunctions.ENCRYPT_OBJ(keyVal);
    // const keyValue = CommonFunctions.ENCRYPT_OBJ(dataObject[keyVal]);
    const keyData = btoa(keyVal);
    const keyValue = btoa(dataObject[keyVal]);
    returnData[keyData] = keyValue;
  });
  return returnData;
}

export function isValidDocumentTypeToEditOrView(filename: string) {
  return (filename === 'doc' || filename === 'docx'
    || filename === 'xls' || filename === 'xlsx'
    || filename === 'ppt' || filename === 'pptx'
    || filename === 'pdf' || filename === 'txt' || filename === 'csv'
  );
}

export function isValidDocumentTypeToEditOrViewModeType(filename: string) {
  if (filename === 'doc' || filename === 'docx'
    || filename === 'xls' || filename === 'xlsx'
    || filename === 'ppt' || filename === 'pptx' || filename === 'csv') {
    const returnType = {};
    if (filename === 'doc' || filename === 'docx') {
      returnType['documentType'] = 'text';
    } else if (filename === 'xls' || filename === 'xlsx' || filename === 'csv') {
      returnType['documentType'] = 'spreadsheet';
    } else {
      returnType['documentType'] = 'presentation';
    }
    returnType['mode'] = 'edit';
    return returnType;
  } else {
    const returnType = {};
    returnType['mode'] = 'view';
    returnType['documentType'] = 'text';
    return returnType;
  }
}

/**
 * This function used by to convert file size in kb, mb gb etc
 * @param bytes
 */
export function bytesToSize(bytes: any) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0 || bytes === null || bytes === '') {
    return 0 + ' ' + sizes[0];
  } else {
    const i = Number(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i === 0) {
      return bytes + ' ' + sizes[i];
    } else {
      return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    }
  }
}

export function isValidFileTypeForClientDocument(filename: string) {
  return (filename === 'image/png'
    || filename === 'image/jpeg'
    || filename === 'image/jpg'
    || filename === 'application/pdf'
    || filename === 'application/vnd.ms-excel'
    || filename === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    || filename === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    || filename === 'application/vnd.ms-word'
    || filename === 'text/plain'
    || filename === 'application/octet-stream'
    || filename === 'application/vnd.google-apps.presentation'
    || filename === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    || filename === 'application/vnd.ms-powerpoint'
    || filename === 'application/zip'
    || filename === 'application/x-zip-compressed'
    || filename === 'multipart/x-zip'
    || filename === 'application/vnd.rar'
  );
}

export function getDateRange(startDate, endDate, isMonthYear?): any[] {
  const start = startDate.split('-');
  const end = endDate.split('-');
  const startYear = parseInt(start[0], 10);
  const endYear = parseInt(end[0], 10);
  let dates = [];

  for (let i = startYear; i <= endYear; i++) {
    const endMonth = i !== endYear ? 11 : parseInt(end[1], 10) - 1;
    const startMon = i === startYear ? parseInt(start[1], 10) - 1 : 0;
    for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      const month = j + 1;
      const displayMonth = month < 10 ? '0' + month : month;
      dates.push([i, displayMonth, '01'].join('-'));
    }
  }
  if (isMonthYear === 1) {
    dates = dates.map(item => moment(item).format("MMM-YYYY"));
  }
  return dates;
}
