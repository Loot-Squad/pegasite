import { TestBed } from '@angular/core/testing';

import { Pegas4addressService } from './pegas4address.service';

describe('Pegas4addressService', () => {
  let service: Pegas4addressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pegas4addressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
