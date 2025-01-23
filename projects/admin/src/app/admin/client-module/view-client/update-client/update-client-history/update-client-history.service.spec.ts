import {inject, TestBed} from '@angular/core/testing';

import {UpdateClientHistoryService} from './update-client-history.service';

describe('UpdateClientHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateClientHistoryService]
    });
  });

  it('should be created', inject([UpdateClientHistoryService], (service: UpdateClientHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
