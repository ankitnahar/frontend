import {TestBed} from '@angular/core/testing';

import {GoogleDriveServiceService} from './google-drive-service.service';

describe('GoogleDriveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleDriveServiceService = TestBed.get(GoogleDriveServiceService);
    expect(service).toBeTruthy();
  });
});
