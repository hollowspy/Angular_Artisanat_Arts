import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDecoComponent } from './modal-deco.component';

describe('ModalDecoComponent', () => {
  let component: ModalDecoComponent;
  let fixture: ComponentFixture<ModalDecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
