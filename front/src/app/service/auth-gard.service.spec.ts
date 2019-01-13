import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { AuthGardService } from './auth-gard.service';
import {CookieService } from 'ngx-cookie-service';

describe('AuthGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGardService, CookieService], 
      imports : [
        RouterTestingModule, 
        HttpClientTestingModule,
      ]
    });
  });

  it('should be created', inject([AuthGardService], (service: AuthGardService) => {
    expect(service).toBeTruthy();
  }));
});
