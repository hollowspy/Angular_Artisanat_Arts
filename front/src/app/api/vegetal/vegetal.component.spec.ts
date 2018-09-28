import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetalComponent } from './vegetal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material';


describe('VegetalComponent', () => {
  let component: VegetalComponent;
  let fixture: ComponentFixture<VegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetalComponent ], 
      imports : [
        HttpClientTestingModule, 
        RouterTestingModule, 
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
