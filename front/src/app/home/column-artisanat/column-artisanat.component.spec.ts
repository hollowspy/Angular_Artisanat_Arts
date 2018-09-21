import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnArtisanatComponent } from './column-artisanat.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ColumnArtisanatComponent', () => {
  let component: ColumnArtisanatComponent;
  let fixture: ComponentFixture<ColumnArtisanatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnArtisanatComponent ], 
      imports : [     
        BrowserAnimationsModule,
        RouterTestingModule, 
        HttpClientTestingModule
      ]
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
