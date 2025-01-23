import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-rights',
  templateUrl: './page-rights.component.html',
  styleUrls: ['./page-rights.component.scss']
})
export class PageRightsComponent implements OnInit {

  // Constant Variables

  // Data Variables
  privilegesList: any[] = [];

  // Other Variables

  constructor() {
  }

  ngOnInit() {
    this.initializationMethod();
  }

  initializationMethod() {
    this.privilegesList = [
      {'srNo': 1, page: 'Top Menu'},
      {'srNo': 2, page: 'Bulk User Approval Allocattion'},
      {'srNo': 3, page: 'Signature / Email Config'},
      {'srNo': 4, page: 'Import blotime records'},
      {'srNo': 5, page: 'View client - Field group'},
    ];
  }
}
