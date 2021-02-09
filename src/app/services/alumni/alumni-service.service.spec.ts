import { TestBed } from '@angular/core/testing';

import { AlumniServiceService } from './alumni-service.service';

describe('AlumniServiceService', () => {
  let service: AlumniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
