import {Component, Input, OnInit} from '@angular/core';
import {Clients} from '../../view-client.model';
import {SpecialNotesTabs} from './special-notes.model';
import {MatTabChangeEvent} from '@angular/material';
import {CommonCrudService} from '../../../../../../utility/shared-service/common-crud.service';
import {AdminAPI} from '../../../../../../utility/constants/api';

@Component({
  selector: 'app-view-special-notes',
  templateUrl: './view-special-notes.component.html',
  styleUrls: ['./view-special-notes.component.scss'],
})
export class ViewSpecialNotesComponent implements OnInit {
  // Angular variables
  @Input() clientInformation: Clients;

  // Data related variables
  tabList: SpecialNotesTabs[] = [];
  isActiveTab = 0;

  constructor(private _commonCrudService: CommonCrudService) {
  }

  ngOnInit() {
    this.getSpecialNoteData();
  }

  // Initialization methods
  getSpecialNoteData() {
    if (this.clientInformation.is_service) {
      this._commonCrudService.listData(AdminAPI.CLIENT_SPECIAL_NOTES + '/' + this.clientInformation.id, {}, {})
        .subscribe((response) => {
          this.handleSpecialNoteResponse(response);
        });
    }
  }

  handleSpecialNoteResponse(response: any) {
    this.tabList = response['payload']['tabs'];
  }

  // Page events
  onSelectSpecialNoteTab(tabChangeEvent: MatTabChangeEvent) {
    this.isActiveTab = tabChangeEvent['index'];
  }

}
