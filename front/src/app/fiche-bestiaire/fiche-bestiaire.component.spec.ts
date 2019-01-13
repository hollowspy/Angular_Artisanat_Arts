import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBestiaireComponent } from './fiche-bestiaire.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material';
import {CookieService } from 'ngx-cookie-service';


describe('FicheBestiaireComponent', () => {
  let component: FicheBestiaireComponent;
  let fixture: ComponentFixture<FicheBestiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheBestiaireComponent ], 
      imports : [
        MatDialogModule,
        RouterTestingModule,
        HttpClientTestingModule, 
        RouterTestingModule
      ],
      providers: [CookieService]
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
