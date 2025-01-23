(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~client-documents-client-documents-module~edit-queries-edit-queries-module~information-requir~5ed0455a"],{

/***/ "./src/app/admin/client-module/client-documents/google-drive.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/client-module/client-documents/google-drive.model.ts ***!
  \****************************************************************************/
/*! exports provided: GoogleDriveFolder, GoogleDriveFile, GoogleDriveMetaDataList, GoogleDriveMetaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDriveFolder", function() { return GoogleDriveFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDriveFile", function() { return GoogleDriveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDriveMetaDataList", function() { return GoogleDriveMetaDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDriveMetaData", function() { return GoogleDriveMetaData; });
var GoogleDriveFolder = /** @class */ (function () {
    function GoogleDriveFolder() {
    }
    Object.defineProperty(GoogleDriveFolder.prototype, "folderType", {
        get: function () {
            return this._folderType;
        },
        set: function (value) {
            this._folderType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "entity_id", {
        get: function () {
            return this._entity_id;
        },
        set: function (value) {
            this._entity_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "parent_id", {
        get: function () {
            return this._parent_id;
        },
        set: function (value) {
            this._parent_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "directory_id", {
        get: function () {
            return this._directory_id;
        },
        set: function (value) {
            this._directory_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "directory_name", {
        get: function () {
            return this._directory_name;
        },
        set: function (value) {
            this._directory_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "directory_path", {
        get: function () {
            return this._directory_path;
        },
        set: function (value) {
            this._directory_path = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "folder_id", {
        get: function () {
            return this._folder_id;
        },
        set: function (value) {
            this._folder_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "created_on", {
        get: function () {
            return this._created_on;
        },
        set: function (value) {
            this._created_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "created_by", {
        get: function () {
            return this._created_by;
        },
        set: function (value) {
            this._created_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "modified_on", {
        get: function () {
            return this._modified_on;
        },
        set: function (value) {
            this._modified_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "modified_by", {
        get: function () {
            return this._modified_by;
        },
        set: function (value) {
            this._modified_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "make_folder", {
        get: function () {
            return this._make_folder;
        },
        set: function (value) {
            this._make_folder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "emptyFolder", {
        get: function () {
            return this._emptyFolder;
        },
        set: function (value) {
            this._emptyFolder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFolder.prototype, "subclient_id", {
        get: function () {
            return this._subclient_id;
        },
        set: function (value) {
            this._subclient_id = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoogleDriveFolder;
}());

var GoogleDriveFile = /** @class */ (function () {
    function GoogleDriveFile() {
    }
    Object.defineProperty(GoogleDriveFile.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "directory_entity_id", {
        get: function () {
            return this._directory_entity_id;
        },
        set: function (value) {
            this._directory_entity_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "entity_id", {
        get: function () {
            return this._entity_id;
        },
        set: function (value) {
            this._entity_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "file_name", {
        get: function () {
            return this._file_name;
        },
        set: function (value) {
            this._file_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "file_id", {
        get: function () {
            return this._file_id;
        },
        set: function (value) {
            this._file_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "mime_type", {
        get: function () {
            return this._mime_type;
        },
        set: function (value) {
            this._mime_type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "created_on", {
        get: function () {
            return this._created_on;
        },
        set: function (value) {
            this._created_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "created_by", {
        get: function () {
            return this._created_by;
        },
        set: function (value) {
            this._created_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "modified_on", {
        get: function () {
            return this._modified_on;
        },
        set: function (value) {
            this._modified_on = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "modified_by", {
        get: function () {
            return this._modified_by;
        },
        set: function (value) {
            this._modified_by = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "itemPasteType", {
        get: function () {
            return this._itemPasteType;
        },
        set: function (value) {
            this._itemPasteType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "previous_folder_id", {
        get: function () {
            return this._previous_folder_id;
        },
        set: function (value) {
            this._previous_folder_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "csv_excel_file_id", {
        get: function () {
            return this._csv_excel_file_id;
        },
        set: function (value) {
            this._csv_excel_file_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveFile.prototype, "is_completed", {
        get: function () {
            return this._is_completed;
        },
        set: function (value) {
            this._is_completed = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoogleDriveFile;
}());

var GoogleDriveMetaDataList = /** @class */ (function () {
    function GoogleDriveMetaDataList() {
    }
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "mimeType", {
        get: function () {
            return this._mimeType;
        },
        set: function (value) {
            this._mimeType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "edit", {
        get: function () {
            return this._edit;
        },
        set: function (value) {
            this._edit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (value) {
            this._class = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "isFileCreate", {
        get: function () {
            return this._isFileCreate;
        },
        set: function (value) {
            this._isFileCreate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "extension", {
        get: function () {
            return this._extension;
        },
        set: function (value) {
            this._extension = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "isFileSearch", {
        get: function () {
            return this._isFileSearch;
        },
        set: function (value) {
            this._isFileSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "labelSearch", {
        get: function () {
            return this._labelSearch;
        },
        set: function (value) {
            this._labelSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "extensionSearch", {
        get: function () {
            return this._extensionSearch;
        },
        set: function (value) {
            this._extensionSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleDriveMetaDataList.prototype, "extensionSearchSort", {
        get: function () {
            return this._extensionSearchSort;
        },
        set: function (value) {
            this._extensionSearchSort = value;
        },
        enumerable: true,
        configurable: true
    });
    return GoogleDriveMetaDataList;
}());

var GoogleDriveMetaData = [
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


/***/ })

}]);
//# sourceMappingURL=default~client-documents-client-documents-module~edit-queries-edit-queries-module~information-requir~5ed0455a.js.map