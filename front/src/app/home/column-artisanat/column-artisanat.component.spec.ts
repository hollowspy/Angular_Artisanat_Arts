import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnArtisanatComponent } from './column-artisanat.component';

describe('ColumnArtisanatComponent', () => {
  let component: ColumnArtisanatComponent;
  let fixture: ComponentFixture<ColumnArtisanatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnArtisanatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnArtisanatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
