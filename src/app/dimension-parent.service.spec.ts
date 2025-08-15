import { TestBed } from '@angular/core/testing';

import { DimensionParentService } from './dimension-parent.service';

describe('DimensionParentService', () => {
  let service: DimensionParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
