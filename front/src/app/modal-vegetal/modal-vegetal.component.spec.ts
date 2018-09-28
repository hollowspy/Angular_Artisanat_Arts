import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVegetalComponent } from './modal-vegetal.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ModalVegetalComponent', () => {
  let component: ModalVegetalComponent;
  let fixture: ComponentFixture<ModalVegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVegetalComponent ], 
      imports : [
        MatDialogModule
      ], 
      providers : [ 
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVegetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
