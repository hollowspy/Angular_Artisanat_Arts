import { TestBed, inject } from '@angular/core/testing';

import { ValidUploadImageService } from './valid-upload-image.service';

describe('ValidUploadImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidUploadImageService]
    });
  });

  it('should be created', inject([ValidUploadImageService], (service: ValidUploadImageService) => {
    expect(service).toBeTruthy();
  }));
});
