import { TestBed } from '@angular/core/testing';

import { DragonBallApiService } from './dragon-ball-api.service';

describe('DragonBallApiService', () => {
  let service: DragonBallApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonBallApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
