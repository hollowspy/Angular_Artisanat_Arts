import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVegetalComponent } from './form-vegetal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {CookieService } from 'ngx-cookie-service';

describe('FormVegetalComponent', () => {
  let component: FormVegetalComponent;
  let fixture: ComponentFixture<FormVegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVegetalComponent ],
      imports : [
        MatDialogModule,
        ReactiveFormsModule,
        RouterTestingModule, 
        HttpClientTestingModule
      ],
      providers: [
        CookieService,
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVegetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
