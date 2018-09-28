import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactComponent } from './form-contact.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('FormContactComponent', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContactComponent ], 
      imports: [ FormsModule,
        MatSnackBarModule,
        MatFormFieldModule, 
        MatInputModule, 
        RouterModule,
        RouterTestingModule, 
        HttpClientTestingModule, 
        BrowserAnimationsModule] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
