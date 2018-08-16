import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { formAdminComponent } from './formAdmin.component';

describe('formAdminComponent', () => {
  let component: formAdminComponent;
  let fixture: ComponentFixture<formAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ formAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(formAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
