import { TestBed } from '@angular/core/testing';

import { CourseServieService } from './course-servie.service';

describe('CourseServieService', () => {
  let service: CourseServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
