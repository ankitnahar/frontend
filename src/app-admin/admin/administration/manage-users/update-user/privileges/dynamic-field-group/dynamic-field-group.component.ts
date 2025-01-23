import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-field-group',
  templateUrl: './dynamic-field-group.component.html',
  styleUrls: ['./dynamic-field-group.component.scss']
})
export class DynamicFieldGroupComponent implements OnInit {

  // Constant Variables

  // Data Variables
  dynamicFieldprivilegesList: any[] = [];

  // Other Variables

  constructor() {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  initializationMethod() {
    this.dynamicFieldprivilegesList = [
      {'srNo': 1, fieldGroup: 'Basic', field: 'Date from when client is registered for ABN'},
      {'srNo': 2, fieldGroup: 'Basic', field: 'Date from when client is registered for GST'},
      {'srNo': 3, fieldGroup: 'Basic', field: 'Type of business'},
      {'srNo': 4, fieldGroup: 'Basic', field: 'Financial Institution detail updated on ATO?'},
      {'srNo': 5, fieldGroup: 'Basic', field: 'Billing name'},
    ];
  }
}
