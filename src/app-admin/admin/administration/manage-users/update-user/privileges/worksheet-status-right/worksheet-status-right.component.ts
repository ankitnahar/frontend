import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worksheet-status-right',
  templateUrl: './worksheet-status-right.component.html',
  styleUrls: ['./worksheet-status-right.component.scss']
})
export class WorksheetStatusRightComponent implements OnInit {

  // Constant Variables

  // Data Variables
  emailPrivilegesList: any[] = [];

  // Other Variables

  constructor() {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  initializationMethod() {
    this.emailPrivilegesList = [
      {'srNo': 1, status: 'Not Started'},
      {'srNo': 2, status: 'Waiting for payment'},
      {'srNo': 3, status: 'Awaiting info/ QUERIES'},
      {'srNo': 4, status: 'Final report sent to TO TAM'},
      {'srNo': 5, status: 'Waiting for client confirmation'},
    ];
  }
}
