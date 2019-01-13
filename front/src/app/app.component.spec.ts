import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ColumnArtisanatComponent } from './home/column-artisanat/column-artisanat.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CardMurielComponent } from './home/card-muriel/card-muriel.component';
import { FormContactComponent } from './home/form-contact/form-contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { MatIconModule, MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CookieService } from 'ngx-cookie-service';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        ColumnArtisanatComponent, 
        SearchBarComponent, 
        MenuComponent, 
        CarouselComponent, 
        CardMurielComponent, 
        FormContactComponent, 
        FooterComponent, 
        NavbarComponent, 
        NavbarMobileComponent
        ],
      imports: [RouterModule, 
          RouterTestingModule,  
            MatIconModule,  
            MatSnackBarModule, 
            MatFormFieldModule, 
            MatInputModule,
            FormsModule,
            NgbCarouselModule,
            BrowserAnimationsModule,
            HttpClientTestingModule
      
        ], 
        providers: [CookieService] 
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'front'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Muriel Niedzwiecki');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Muriel Niedzwiecki');
  }));
});
