import { TestBed } from '@angular/core/testing';

import { CovidCasesService } from './covid-cases.service';

describe('CovidCasesService', () => {
  let service: CovidCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
