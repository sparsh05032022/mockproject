import { TestBed } from '@angular/core/testing';

import { ProlistService } from './prolist.service';

describe('ProlistService', () => {
  let service: ProlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
