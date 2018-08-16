import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestiaireComponent } from './bestiaire.component';

describe('BestiaireComponent', () => {
  let component: BestiaireComponent;
  let fixture: ComponentFixture<BestiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestiaireComponent ]
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
