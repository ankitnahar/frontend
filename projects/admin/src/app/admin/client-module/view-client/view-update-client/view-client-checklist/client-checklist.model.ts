export class ClientChecklist {
  private _master_activity_id: number;

  get master_activity_id(): number {
    return this._master_activity_id;
  }

  set master_activity_id(value: number) {
    this._master_activity_id = value;
  }

  private _master_activity_name: string;

  get master_activity_name(): string {
    return this._master_activity_name;
  }

  set master_activity_name(value: string) {
    this._master_activity_name = value;
  }

  private _service_id: number;

  get service_id(): number {
    return this._service_id;
  }

  set service_id(value: number) {
    this._service_id = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _task_id: number;

  get task_id(): number {
    return this._task_id;
  }

  set task_id(value: number) {
    this._task_id = value;
  }

  private _task_name: string;

  get task_name(): string {
    return this._task_name;
  }

  set task_name(value: string) {
    this._task_name = value;
  }

  private _master_checklist_id: number;

  get master_checklist_id(): number {
    return this._master_checklist_id;
  }

  set master_checklist_id(value: number) {
    this._master_checklist_id = value;
  }

  private _entity_id: number;

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  private _is_applicable: number;

  get is_applicable(): number {
    return this._is_applicable;
  }

  set is_applicable(value: number) {
    this._is_applicable = value;
  }

  private _created_on: string;

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  private _created_by: number;

  get created_by(): number {
    return this._created_by;
  }

  set created_by(value: number) {
    this._created_by = value;
  }
}

export class ClientQuestions {
  private _checklist_name: string;

  get checklist_name(): string {
    return this._checklist_name;
  }

  set checklist_name(value: string) {
    this._checklist_name = value;
  }

  private _masteractivity_name: string;

  get masteractivity_name(): string {
    return this._masteractivity_name;
  }

  set masteractivity_name(value: string) {
    this._masteractivity_name = value;
  }

  private _task_name: string;

  get task_name(): string {
    return this._task_name;
  }

  set task_name(value: string) {
    this._task_name = value;
  }

  private _question_name: string;

  get question_name(): string {
    return this._question_name;
  }

  set question_name(value: string) {
    this._question_name = value;
  }

  private _is_applicable: number;

  get is_applicable(): number {
    return this._is_applicable;
  }

  set is_applicable(value: number) {
    this._is_applicable = value;
  }
}

export class QuestionViewChecklist {
  private _checklistname: string;
  private _id: number;
  private _masteractivityname: string;
  private _taskname: string;

  get checklistname(): string {
    return this._checklistname;
  }

  set checklistname(value: string) {
    this._checklistname = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get masteractivityname(): string {
    return this._masteractivityname;
  }

  set masteractivityname(value: string) {
    this._masteractivityname = value;
  }

  get taskname(): string {
    return this._taskname;
  }

  set taskname(value: string) {
    this._taskname = value;
  }
}
