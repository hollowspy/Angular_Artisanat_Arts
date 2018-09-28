import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoComponent } from './deco.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('DecoComponent', () => {
  let component: DecoComponent;
  let fixture: ComponentFixture<DecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoComponent ], 
      imports : [
        HttpClientTestingModule, 
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
