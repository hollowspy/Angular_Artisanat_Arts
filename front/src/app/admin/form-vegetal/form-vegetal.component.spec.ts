import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVegetalComponent } from './form-vegetal.component';

describe('FormVegetalComponent', () => {
  let component: FormVegetalComponent;
  let fixture: ComponentFixture<FormVegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVegetalComponent ]
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
