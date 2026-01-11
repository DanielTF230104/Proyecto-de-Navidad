import { TestBed } from '@angular/core/testing';

import { SenalBuscaTFormaApiWebService } from './senal-busca-tforma-api-web.service';

describe('SenalBuscaTFormaApiWebService', () => {
  let service: SenalBuscaTFormaApiWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenalBuscaTFormaApiWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
