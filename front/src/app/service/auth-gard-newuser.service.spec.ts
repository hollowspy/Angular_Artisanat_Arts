import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import {CookieService } from 'ngx-cookie-service';

import { AuthGardServiceNewUser } from './auth-gard-newuser.service';

describe('AuthGardNewuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGardServiceNewUser, CookieService], 
      imports : [
        RouterTestingModule, 
        HttpClientTestingModule,
      ]
    });
  });

  it('should be created', inject([AuthGardServiceNewUser], (service: AuthGardServiceNewUser) => {
    expect(service).toBeTruthy();
  }));
});
