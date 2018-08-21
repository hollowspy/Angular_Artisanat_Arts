import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFicheComponent } from './modal-fiche.component';

describe('ModalFicheComponent', () => {
  let component: ModalFicheComponent;
  let fixture: ComponentFixture<ModalFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFicheComponent ]
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
