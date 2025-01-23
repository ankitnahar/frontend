import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-email-rights',
  templateUrl: './form-email-rights.component.html',
  styleUrls: ['./form-email-rights.component.scss']
})
export class FormEmailRightsComponent implements OnInit {

  // input variable
  @Input() pageRightsValue;
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
      {'srNo': 1, email: 'hemadri.p@free.com.au'},
      {'srNo': 2, email: 'jayesh@free.com.au'},
      {'srNo': 3, email: 'alok@free.com.au'},
      {'srNo': 4, email: 'bhavesh@free.com.au'},
      {'srNo': 5, email: 'hasmukh@free.com.au'},
    ];
  }
}
