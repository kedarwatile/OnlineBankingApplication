import { TestBed } from '@angular/core/testing';

import { FogotPassService } from './fogot-pass.service';

describe('FogotPassService', () => {
  let service: FogotPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FogotPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
