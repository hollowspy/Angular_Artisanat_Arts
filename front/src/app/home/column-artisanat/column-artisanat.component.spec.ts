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

  it ('should have an A in first Letter Artisanat', () => {
   const letterA = component.artisanat[0]
    expect(letterA).toBe('A')
  })

  it ('should have a T in last letter of Artisanat', () => {
    const lenghtofArtisanat = component.artisanat.length - 1; 
    const lastLetter = component.artisanat[lenghtofArtisanat]; 
    expect(lastLetter).toBe('T')
  })

  it ('should have an A in first Letter Art', () => {
    const letterA = component.art[0]
     expect(letterA).toBe('D\'')
   })
 
   it ('should have a T in last letter of Art', () => {
     const lengthofArt = component.art.length - 1; 
     const lastLetter = component.art[lengthofArt]; 
     expect(lastLetter).toBe('T')
   })
});
