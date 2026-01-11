import { TestBed } from '@angular/core/testing';

import { SenalFiltroApiWebService } from './senal-filtro-api-web.service';

describe('SenalFiltroApiWebService', () => {
  let service: SenalFiltroApiWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenalFiltroApiWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
