import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UpdatePasswordComponent } from './update-password.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {CookieService } from 'ngx-cookie-service';


describe('UpdatePasswordComponent', () => {
  let component: UpdatePasswordComponent;
  let fixture: ComponentFixture<UpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordComponent ],
      imports:[
  FormsModule,
        MatSnackBarModule,
        MatFormFieldModule, 
        MatInputModule,
        MatIconModule,
        NgbProgressbarModule,
        BrowserAnimationsModule,
        RouterTestingModule, 
        HttpClientTestingModule], 
      providers: [CookieService] 
    }) 
    .compileComponents();
  }));
  

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
