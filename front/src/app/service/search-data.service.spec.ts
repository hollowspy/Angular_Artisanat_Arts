import { TestBed, inject } from '@angular/core/testing';

import { SearchDataService } from './search-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SearchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchDataService], 
      imports : [
        RouterTestingModule, 
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([SearchDataService], (service: SearchDataService) => {
    expect(service).toBeTruthy();
  }));
});
