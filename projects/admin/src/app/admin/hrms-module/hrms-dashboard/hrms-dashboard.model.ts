export class HrmsDashboard {
  private _pendingRequest: number;
  private _pendingForApproval: number;
  private _approved: number;
  private _rejected: number;
  private _latecoming: number;
  private _earlyleaving: number;
  private _halfday: number;
  private _leave: number;
  private _pendingTimesheet: number;
  private _approvePendingTimesheet: number;
  private _myView: CommonDataKeys;
  private _teamView: CommonDataKeys;
  private _adminView: CommonDataKeys;

  get pendingRequest(): number {
    return this._pendingRequest;
  }

  set pendingRequest(value: number) {
    this._pendingRequest = value;
  }

  get pendingForApproval(): number {
    return this._pendingForApproval;
  }

  set pendingForApproval(value: number) {
    this._pendingForApproval = value;
  }

  get approved(): number {
    return this._approved;
  }

  set approved(value: number) {
    this._approved = value;
  }

  get rejected(): number {
    return this._rejected;
  }

  set rejected(value: number) {
    this._rejected = value;
  }

  get latecoming(): number {
    return this._latecoming;
  }

  set latecoming(value: number) {
    this._latecoming = value;
  }

  get earlyleaving(): number {
    return this._earlyleaving;
  }

  set earlyleaving(value: number) {
    this._earlyleaving = value;
  }

  get halfday(): number {
    return this._halfday;
  }

  set halfday(value: number) {
    this._halfday = value;
  }

  get leave(): number {
    return this._leave;
  }

  set leave(value: number) {
    this._leave = value;
  }

  get pendingTimesheet(): number {
    return this._pendingTimesheet;
  }

  set pendingTimesheet(value: number) {
    this._pendingTimesheet = value;
  }

  get approvePendingTimesheet(): number {
    return this._approvePendingTimesheet;
  }

  set approvePendingTimesheet(value: number) {
    this._approvePendingTimesheet = value;
  }

  get myView(): CommonDataKeys {
    return this._myView;
  }

  set myView(value: CommonDataKeys) {
    this._myView = value;
  }

  get teamView(): CommonDataKeys {
    return this._teamView;
  }

  set teamView(value: CommonDataKeys) {
    this._teamView = value;
  }

  get adminView(): CommonDataKeys {
    return this._adminView;
  }

  set adminView(value: CommonDataKeys) {
    this._adminView = value;
  }
}

export class CommonDataKeys {
  private _pendingRequest: number;
  private _pendingForApproval: number;
  private _approved: number;
  private _rejected: number;
  private _latecoming: number;
  private _earlyleaving: number;
  private _halfday: number;
  private _leave: number;
  private _pendingTimesheet: number;
  private _approvePendingTimesheet: number;

  get pendingRequest(): number {
    return this._pendingRequest;
  }

  set pendingRequest(value: number) {
    this._pendingRequest = value;
  }

  get pendingForApproval(): number {
    return this._pendingForApproval;
  }

  set pendingForApproval(value: number) {
    this._pendingForApproval = value;
  }

  get approved(): number {
    return this._approved;
  }

  set approved(value: number) {
    this._approved = value;
  }

  get rejected(): number {
    return this._rejected;
  }

  set rejected(value: number) {
    this._rejected = value;
  }

  get latecoming(): number {
    return this._latecoming;
  }

  set latecoming(value: number) {
    this._latecoming = value;
  }

  get earlyleaving(): number {
    return this._earlyleaving;
  }

  set earlyleaving(value: number) {
    this._earlyleaving = value;
  }

  get halfday(): number {
    return this._halfday;
  }

  set halfday(value: number) {
    this._halfday = value;
  }

  get leave(): number {
    return this._leave;
  }

  set leave(value: number) {
    this._leave = value;
  }

  get pendingTimesheet(): number {
    return this._pendingTimesheet;
  }

  set pendingTimesheet(value: number) {
    this._pendingTimesheet = value;
  }

  get approvePendingTimesheet(): number {
    return this._approvePendingTimesheet;
  }

  set approvePendingTimesheet(value: number) {
    this._approvePendingTimesheet = value;
  }
}

export class HolidayMaster {
  private _id: number;
  private _date: string;
  private _year: number;
  private _description: string;
  private _is_client: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get is_client(): number {
    return this._is_client;
  }

  set is_client(value: number) {
    this._is_client = value;
  }
}
