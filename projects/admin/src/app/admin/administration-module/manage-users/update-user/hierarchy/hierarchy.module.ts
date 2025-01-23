export class TEAMDESIGNATIONWISE {
  private _id: number;
  private _designation_name: string;
  private _parent_id: number;
  private _Seq: number;
  private _is_mandatory: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get designation_name(): string {
    return this._designation_name;
  }

  set designation_name(value: string) {
    this._designation_name = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get Seq(): number {
    return this._Seq;
  }

  set Seq(value: number) {
    this._Seq = value;
  }

  get is_mandatory(): number {
    return this._is_mandatory;
  }

  set is_mandatory(value: number) {
    this._is_mandatory = value;
  }
}
