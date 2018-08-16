import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBestiaireComponent } from './form-bestiaire.component';

describe('FormBestiaireComponent', () => {
  let component: FormBestiaireComponent;
  let fixture: ComponentFixture<FormBestiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBestiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBestiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
