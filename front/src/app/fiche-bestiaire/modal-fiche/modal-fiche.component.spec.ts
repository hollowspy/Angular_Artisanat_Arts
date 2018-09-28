import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFicheComponent } from './modal-fiche.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('ModalFicheComponent', () => {
  let component: ModalFicheComponent;
  let fixture: ComponentFixture<ModalFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFicheComponent ], 
      imports : [ 
        MatDialogModule
      ],
      providers : [
        { provide: MatDialogRef, useValue:{} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
       
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
