import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api-service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {CookieService } from 'ngx-cookie-service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, CookieService], 
      imports : [ 
        RouterTestingModule, 
        HttpClientTestingModule
      ], 
      
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
