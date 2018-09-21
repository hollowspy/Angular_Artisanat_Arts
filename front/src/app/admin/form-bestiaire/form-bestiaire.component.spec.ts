import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBestiaireComponent } from './form-bestiaire.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';


describe('FormBestiaireComponent', () => {
  let component: FormBestiaireComponent;
  let fixture: ComponentFixture<FormBestiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBestiaireComponent ], 
      imports : [
        FormsModule, 
        MatDialogModule,
        RouterTestingModule, 
        HttpClientTestingModule

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBestiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
