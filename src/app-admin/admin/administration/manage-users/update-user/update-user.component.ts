import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  // Other Variables
  isOpenHistoryDialog = false;

  constructor() { }

  ngOnInit() {
  }

  onShowHistory(){
    this.isOpenHistoryDialog = true;
  }
}
