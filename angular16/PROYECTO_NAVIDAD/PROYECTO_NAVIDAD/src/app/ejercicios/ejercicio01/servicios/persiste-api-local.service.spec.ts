import { TestBed } from '@angular/core/testing';

import { PersisteApiLocalService } from './persiste-api-local.service';

describe('PersisteApiLocalService', () => {
  let service: PersisteApiLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersisteApiLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
