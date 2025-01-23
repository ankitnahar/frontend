import {AdminUser} from '../../../../utility/shared-model/admin-user.model';

export class GoogleDriveFolder {
  private _id: number;
  private _entity_id: number;
  private _parent_id: number;
  private _year: number;
  private _directory_id: number;
  private _directory_name: string;
  private _directory_path: string;
  private _folder_id: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _make_folder: number;
  private _emptyFolder: number;
  private _folderType: number;
  private _subclient_id: number;

  get folderType(): number {
    return this._folderType;
  }

  set folderType(value: number) {
    this._folderType = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get parent_id(): number {
    return this._parent_id;
  }

  set parent_id(value: number) {
    this._parent_id = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get directory_id(): number {
    return this._directory_id;
  }

  set directory_id(value: number) {
    this._directory_id = value;
  }

  get directory_name(): string {
    return this._directory_name;
  }

  set directory_name(value: string) {
    this._directory_name = value;
  }

  get directory_path(): string {
    return this._directory_path;
  }

  set directory_path(value: string) {
    this._directory_path = value;
  }

  get folder_id(): string {
    return this._folder_id;
  }

  set folder_id(value: string) {
    this._folder_id = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get make_folder(): number {
    return this._make_folder;
  }

  set make_folder(value: number) {
    this._make_folder = value;
  }

  get emptyFolder(): number {
    return this._emptyFolder;
  }

  set emptyFolder(value: number) {
    this._emptyFolder = value;
  }

  get subclient_id(): number {
    return this._subclient_id;
  }

  set subclient_id(value: number) {
    this._subclient_id = value;
  }
}

export class GoogleDriveFile {
  private _id: number;
  private _directory_entity_id: number;
  private _entity_id: number;
  private _file_name: string;
  private _file_id: string;
  private _mime_type: string;
  private _created_on: string;
  private _created_by: AdminUser;
  private _modified_on: string;
  private _modified_by: AdminUser;
  private _itemPasteType: number;
  private _previous_folder_id: string;
  private _size: number;
  private _path: string;
  private _csv_excel_file_id: string;
  private _is_completed: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get directory_entity_id(): number {
    return this._directory_entity_id;
  }

  set directory_entity_id(value: number) {
    this._directory_entity_id = value;
  }

  get entity_id(): number {
    return this._entity_id;
  }

  set entity_id(value: number) {
    this._entity_id = value;
  }

  get file_name(): string {
    return this._file_name;
  }

  set file_name(value: string) {
    this._file_name = value;
  }

  get file_id(): string {
    return this._file_id;
  }

  set file_id(value: string) {
    this._file_id = value;
  }

  get mime_type(): string {
    return this._mime_type;
  }

  set mime_type(value: string) {
    this._mime_type = value;
  }

  get created_on(): string {
    return this._created_on;
  }

  set created_on(value: string) {
    this._created_on = value;
  }

  get created_by(): AdminUser {
    return this._created_by;
  }

  set created_by(value: AdminUser) {
    this._created_by = value;
  }

  get modified_on(): string {
    return this._modified_on;
  }

  set modified_on(value: string) {
    this._modified_on = value;
  }

  get modified_by(): AdminUser {
    return this._modified_by;
  }

  set modified_by(value: AdminUser) {
    this._modified_by = value;
  }

  get itemPasteType(): number {
    return this._itemPasteType;
  }

  set itemPasteType(value: number) {
    this._itemPasteType = value;
  }

  get previous_folder_id(): string {
    return this._previous_folder_id;
  }

  set previous_folder_id(value: string) {
    this._previous_folder_id = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

  get csv_excel_file_id(): string {
    return this._csv_excel_file_id;
  }

  set csv_excel_file_id(value: string) {
    this._csv_excel_file_id = value;
  }

  get is_completed(): number {
    return this._is_completed;
  }

  set is_completed(value: number) {
    this._is_completed = value;
  }
}

export class GoogleDriveMetaDataList {
  private _id: number;
  private _label: string;
  private _icon: string;
  private _mimeType: string;
  private _edit: string;
  private _class: string;
  private _key: number;
  private _isFileCreate: number;
  private _extension: string;
  private _isFileSearch: number;
  private _labelSearch: string;
  private _extensionSearch: string;
  private _extensionSearchSort: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get mimeType(): string {
    return this._mimeType;
  }

  set mimeType(value: string) {
    this._mimeType = value;
  }

  get edit(): string {
    return this._edit;
  }

  set edit(value: string) {
    this._edit = value;
  }

  get class(): string {
    return this._class;
  }

  set class(value: string) {
    this._class = value;
  }

  get key(): number {
    return this._key;
  }

  set key(value: number) {
    this._key = value;
  }

  get isFileCreate(): number {
    return this._isFileCreate;
  }

  set isFileCreate(value: number) {
    this._isFileCreate = value;
  }

  get extension(): string {
    return this._extension;
  }

  set extension(value: string) {
    this._extension = value;
  }

  get isFileSearch(): number {
    return this._isFileSearch;
  }

  set isFileSearch(value: number) {
    this._isFileSearch = value;
  }

  get labelSearch(): string {
    return this._labelSearch;
  }

  set labelSearch(value: string) {
    this._labelSearch = value;
  }

  get extensionSearch(): string {
    return this._extensionSearch;
  }

  set extensionSearch(value: string) {
    this._extensionSearch = value;
  }

  get extensionSearchSort(): number {
    return this._extensionSearchSort;
  }

  set extensionSearchSort(value: number) {
    this._extensionSearchSort = value;
  }
}

export const GoogleDriveMetaData = [
  {
    label: 'PDF File',
    icon: 'images/doc/pdf.svg',
    mimeType: 'application/pdf',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 1,
    isFileCreate: 0,
    extension: '.pdf',
    isFileSearch: 1,
    labelSearch: 'PDFs',
    extensionSearch: 'pdf',
    extensionSearchSort: 2
  },
  {
    label: 'Microsoft Excel',
    icon: 'images/doc/excel.svg',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    edit: 'https://docs.google.com/spreadsheets/d/',
    class: 'black-color',
    key: 2,
    isFileCreate: 1,
    extension: '.xlsx',
    isFileSearch: 1,
    labelSearch: 'Spreadsheets',
    extensionSearch: 'xls,xlsx',
    extensionSearchSort: 4
  },
  {
    label: 'Open Office Excel',
    icon: 'images/doc/excel.svg',
    mimeType: 'application/x-vnd.oasis.opendocument.spreadsheet',
    edit: 'https://docs.google.com/spreadsheets/d/',
    class: 'black-color',
    key: 3,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 0,
    labelSearch: 'Open Office Excel',
    extensionSearch: '',
    extensionSearchSort: 0
  },
  {
    label: 'Microsoft Word Document',
    icon: 'images/doc/word.svg',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    edit: 'https://docs.google.com/document/d/',
    class: 'black-color',
    key: 4,
    isFileCreate: 1,
    extension: '.docx',
    isFileSearch: 1,
    labelSearch: 'Documents',
    extensionSearch: 'doc,docx',
    extensionSearchSort: 3
  },
  {
    label: 'Open Office Doc',
    icon: 'images/doc/word.svg',
    mimeType: 'application/vnd.oasis.opendocument.text',
    edit: 'https://docs.google.com/document/d/',
    class: 'black-color',
    key: 5,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 0,
    labelSearch: 'Open Office Doc',
    extensionSearch: '',
    extensionSearchSort: 0
  },
  {
    label: 'JPEG',
    icon: 'images/doc/photo.svg',
    mimeType: 'image/jpeg',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 6,
    extension: '.jpeg',
    isFileCreate: 0,
    isFileSearch: 1,
    labelSearch: 'Photo & Images',
    extensionSearch: 'jpeg,jpg,png,svg',
    extensionSearchSort: 1
  },
  {
    label: 'PNG',
    icon: 'images/doc/photo.svg',
    mimeType: 'image/png',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 7,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 0,
    labelSearch: 'PNG',
    extensionSearch: '',
    extensionSearchSort: 0
  },
  {
    label: 'SVG',
    icon: 'images/doc/photo.svg',
    mimeType: 'image/svg+xml',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 8,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 0,
    labelSearch: 'SVG',
    extensionSearch: '',
    extensionSearchSort: 0
  },
  {
    label: 'Microsoft CSV',
    icon: 'images/doc/csv.svg',
    mimeType: 'text/csv',
    edit: 'https://docs.google.com/spreadsheets/d/',
    class: 'black-color',
    key: 9,
    isFileCreate: 0,
    extension: '.csv',
    isFileSearch: 1,
    labelSearch: 'CSV File',
    extensionSearch: 'csv',
    extensionSearchSort: 5
  },
  {
    label: 'CSV Text',
    icon: 'images/doc/csv.svg',
    mimeType: 'text/x-comma-separated-values',
    edit: 'https://docs.google.com/spreadsheets/d/',
    class: 'black-color',
    key: 10,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 0,
    labelSearch: 'CSV Text',
    extensionSearch: '',
    extensionSearchSort: 0
  },
  {
    label: 'HTML 5',
    icon: 'images/doc/html-5.svg',
    mimeType: 'text/html',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 11,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 1,
    labelSearch: 'HTML',
    extensionSearch: 'htm,html',
    extensionSearchSort: 8
  },
  {
    label: 'Microsoft Power Point',
    icon: 'images/doc/powerpoint.svg',
    mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    edit: 'https://docs.google.com/presentation/d/',
    class: 'black-color',
    key: 12,
    isFileCreate: 1,
    extension: '.pptx',
    isFileSearch: 1,
    labelSearch: 'Presentations',
    extensionSearch: 'ppt,pptx',
    extensionSearchSort: 6
  },
  {
    label: 'Open Office Power Point',
    icon: 'images/doc/powerpoint.svg',
    mimeType: 'application/vnd.oasis.opendocument.presentation',
    edit: 'https://docs.google.com/presentation/d/',
    class: 'black-color',
    key: 13,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 0,
    labelSearch: 'Open Office Power Point',
    extensionSearch: '',
    extensionSearchSort: 0
  },
  {
    label: 'Text File',
    icon: 'images/doc/format.svg',
    mimeType: 'text/plain',
    edit: 'https://docs.google.com/document/d/',
    class: 'black-color',
    key: 14,
    isFileCreate: 0,
    extension: '.txt',
    isFileSearch: 1,
    labelSearch: 'Text File',
    extensionSearch: 'txt',
    extensionSearchSort: 9
  },
  {
    label: 'Application Zip',
    icon: 'images/doc/zip-format.svg',
    mimeType: 'application/zip',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 15,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 1,
    labelSearch: 'Archive Zip',
    extensionSearch: 'zip,rar',
    extensionSearchSort: 7
  }, {
    label: 'Power Point',
    icon: 'images/doc/powerpoint.svg',
    mimeType: 'application/vnd.ms-powerpoint',
    edit: 'https://docs.google.com/presentation/d/',
    class: 'black-color',
    key: 16,
    isFileCreate: 0,
    extension: '.ppt',
    isFileSearch: 0,
    labelSearch: 'Presentations',
    extensionSearch: 'ppt,pptx',
    extensionSearchSort: 6
  }, {
    label: 'Application Rar',
    icon: 'images/doc/zip-format.svg',
    mimeType: 'application/x-rar',
    edit: 'https://drive.google.com/file/d/',
    class: 'black-color',
    key: 17,
    isFileCreate: 0,
    extension: '',
    isFileSearch: 1,
    labelSearch: 'Archive Zip',
    extensionSearch: 'zip,rar',
    extensionSearchSort: 8
  }
];
