import { TestBed, inject } from '@angular/core/testing';

import { SistemasService } from './sistemas.service';

describe('SistemasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SistemasService]
    });
  });

  it('should be created', inject([SistemasService], (service: SistemasService) => {
    expect(service).toBeTruthy();
  }));
});
