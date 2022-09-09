import { TestBed } from '@angular/core/testing';

import { VendorauthService } from './vendorauth.service';

describe('VendorauthService', () => {
  let service: VendorauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
