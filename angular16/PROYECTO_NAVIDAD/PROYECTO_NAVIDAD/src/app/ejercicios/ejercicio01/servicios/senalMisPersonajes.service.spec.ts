import { TestBed } from '@angular/core/testing';

import { SenalMisPersonajesService } from './senalMisPersonajes.service';

describe('SenalMisPersonajesService', () => {
  let service: SenalMisPersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenalMisPersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
