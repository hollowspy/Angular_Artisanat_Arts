import { TestBed, inject } from '@angular/core/testing';

import { UploadImageService } from './upload-image.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UploadImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImageService], 
      imports : [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([UploadImageService], (service: UploadImageService) => {
    expect(service).toBeTruthy();
  }));
});
