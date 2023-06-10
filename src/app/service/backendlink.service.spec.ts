import { TestBed } from '@angular/core/testing';

import { BackendlinkService } from './backendlink.service';

describe('BackendlinkService', () => {
  let service: BackendlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
