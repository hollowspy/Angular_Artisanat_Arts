import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;
  // const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserComponent ],
      imports : [
  ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        MatFormFieldModule, 
        MatInputModule,
        MatIconModule,
        NgbProgressbarModule,
        RouterTestingModule, 
        BrowserAnimationsModule,
        HttpClientTestingModule
      ], 
      // providers: [
      //   // reference the new instance of formBuilder from above
      //   { provide: FormBuilder, useValue: formBuilder }
      // ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
