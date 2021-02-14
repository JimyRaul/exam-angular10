import { TestBed } from '@angular/core/testing';

import { ExamMockService } from './exam-mock.service';

describe('ExamMockService', () => {
  let service: ExamMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
