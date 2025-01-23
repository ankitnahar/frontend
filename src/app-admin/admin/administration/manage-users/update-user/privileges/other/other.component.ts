import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  // Constant Variables

  // Data Variables
  otherPrivilegesList: any[] = [];

  // Other Variables

  constructor() {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  initializationMethod() {
    this.otherPrivilegesList = [
      {'srNo': 1, page: 'Top Menu', other:'Add, Edit, Delete, Holiday'},
      {'srNo': 2, page: 'Bulk User Approval Allocattion', other: 'Convert leave to present'},
      {'srNo': 3, page: 'Signature / Email Config', other:'Approve befree writeoff'},
      {'srNo': 4, page: 'Import blotime records', other:'All user rights'},
      {'srNo': 5, page: 'View client - Field group', other:'Export to excel'},
    ];
  }
}
