import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { formAdminComponent } from './formAdmin.component';

import { FormsModule } from '@angular/forms';
import { MatSnackBarModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


describe('formAdminComponent', () => {
  let component: formAdminComponent;
  let fixture: ComponentFixture<formAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ formAdminComponent ], 
      imports : [
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        RouterTestingModule, 
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(formAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
