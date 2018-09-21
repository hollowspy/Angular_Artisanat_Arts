import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVegetalComponent } from './form-vegetal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('FormVegetalComponent', () => {
  let component: FormVegetalComponent;
  let fixture: ComponentFixture<FormVegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVegetalComponent ],
      imports : [
        ReactiveFormsModule,
        RouterTestingModule, 
        HttpClientTestingModule
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
