import { TestBed, inject } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('SnackbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarService], 
      imports : [
       MatSnackBarModule,
       RouterTestingModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([SnackbarService], (service: SnackbarService) => {
    expect(service).toBeTruthy();
  }));
});
