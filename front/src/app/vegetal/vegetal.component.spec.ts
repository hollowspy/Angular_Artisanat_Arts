import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetalComponent } from './vegetal.component';

describe('VegetalComponent', () => {
  let component: VegetalComponent;
  let fixture: ComponentFixture<VegetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetalComponent ]
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
