import { TestBed } from '@angular/core/testing';

import { FooterserviceService } from './footerservice.service';

describe('FooterserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooterserviceService = TestBed.get(FooterserviceService);
    expect(service).toBeTruthy();
  });
});
