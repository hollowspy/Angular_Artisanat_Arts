import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVegetalComponent } from './modal-vegetal.component';

describe('ModalVegetalComponent', () => {
  let component: ModalVegetalComponent;
  let fixture: ComponentFixture<ModalVegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVegetalComponent ]
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
