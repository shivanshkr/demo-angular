import { TestBed } from '@angular/core/testing';

import { EmailIdService } from './email-id.service';

describe('EmailIdService', () => {
  let service: EmailIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
