import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMurielComponent } from './card-muriel.component';

describe('CardMurielComponent', () => {
  let component: CardMurielComponent;
  let fixture: ComponentFixture<CardMurielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMurielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMurielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
