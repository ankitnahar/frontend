export class NpsFeedback {
  private _id: number;
  private _is_view: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get is_view(): number {
    return this._is_view;
  }

  set is_view(value: number) {
    this._is_view = value;
  }
}
