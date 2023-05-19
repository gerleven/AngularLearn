import { TestBed } from '@angular/core/testing';

import { BookGeneralService } from './book-general.service';

describe('BookGeneralService', () => {
  let service: BookGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
