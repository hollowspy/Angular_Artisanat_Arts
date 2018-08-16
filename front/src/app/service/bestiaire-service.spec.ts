import { TestBed, inject } from '@angular/core/testing';

import { BestiaireService } from './bestiaire-service';

describe('BestiaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BestiaireService]
    });
  });

  it('should be created', inject([BestiaireService], (service: BestiaireService) => {
    expect(service).toBeTruthy();
  }));
});
