import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import {CookieService } from 'ngx-cookie-service';


describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CookieService], 
      imports : [
        RouterTestingModule, 
        HttpClientTestingModule, 
       ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
