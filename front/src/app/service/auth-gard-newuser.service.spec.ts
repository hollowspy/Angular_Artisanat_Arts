import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { AuthGardServiceNewUser } from './auth-gard-newuser.service';

describe('AuthGardNewuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGardServiceNewUser], 
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
