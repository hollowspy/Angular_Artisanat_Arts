import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBestiaireComponent } from './fiche-bestiaire.component';

describe('FicheBestiaireComponent', () => {
  let component: FicheBestiaireComponent;
  let fixture: ComponentFixture<FicheBestiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheBestiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheBestiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
