import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiaireComponent } from './bestiaire.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('BestiaireComponent', () => {
  let component: BestiaireComponent;
  let fixture: ComponentFixture<BestiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestiaireComponent ], 
      imports : [
       HttpClientTestingModule, 
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
