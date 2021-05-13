import { TestBed } from '@angular/core/testing';

import { CommonfuncsService } from './commonfuncs.service';

describe('CommonfuncsService', () => {
  let service: CommonfuncsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonfuncsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
