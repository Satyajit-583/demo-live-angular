import { TestBed } from '@angular/core/testing';

import { OthermesseageService } from './othermesseage.service';

describe('OthermesseageService', () => {
  let service: OthermesseageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OthermesseageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
