import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBestiaireComponent } from './form-bestiaire.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';


describe('FormBestiaireComponent', () => {
  let component: FormBestiaireComponent;
  let fixture: ComponentFixture<FormBestiaireComponent>;
  // let MdDialogRef = new MatDialogModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBestiaireComponent ], 
      imports : [
        FormsModule, 
         MatDialogModule,
        RouterTestingModule, 
        HttpClientTestingModule

      ],
      providers: [
        { provide: MatDialogRef, useValue:{} },
        { provide: MatSnackBar, useValue:{} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
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
