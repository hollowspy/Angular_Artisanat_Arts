import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api-service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService], 
      imports : [ 
        RouterTestingModule, 
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
