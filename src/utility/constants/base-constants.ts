export class BASE {
  public static ADMIN_URL = 'http://www.demo-admin-api-url.com/'; // Replace with correct one
  public static CUSTOMER_URL = 'http://www.demo-customer-api-url.com/'; // Replace with correct one
  public static TOAST_TIMEOUT = 3000;
  public static SEARCH_DEBOUNCE_TIME = 300;
  public static PAGINATION_ARRAY: number[] = [20, 30, 40];
  public static ENCRIPTION_TOKEN = 'BDMS';
}

export class HttpStatus {
  public static SUCCESS = 200;
  public static UNAUTHORIZED = 401;
}

export enum ToastType {
  UNKNOWN = 0,
  SUCCESS = 1,
  INFO = 2,
  WARNING = 3,
  ERROR = 4
}

export let ToastConfig = {
  timeOut: BASE.TOAST_TIMEOUT,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  closeButton: true
};
