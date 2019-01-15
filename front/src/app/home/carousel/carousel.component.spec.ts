import { async, ComponentFixture, TestBed, fakeAsync, inject  } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import {CookieService } from 'ngx-cookie-service';


// class MockInteractWithService{
//   post(){
//     return Observable.of("some Text")
//   }
// }

// describe('CarouselComponent', () => {
//   let component: CarouselComponent;
//   let httpMock : HttpTestingController;
//   let fixture: ComponentFixture<CarouselComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CarouselComponent ], 
//       imports : [
//        NgbCarouselModule, 
//         RouterTestingModule,
//         HttpClientTestingModule
//       ], 
//       providers: [CookieService, CarouselComponent]
//     })
//     .compileComponents();
//     component = TestBed.get(CarouselComponent); 
//     httpMock = TestBed.get(HttpTestingController)
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CarouselComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have 5 photo', done => {
//     component.getCarouselData()
    
//     let nbOfImage = component.images.length - 1
//     expect(nbOfImage).toBe(5); 
//     done()
    
//   })
// });

describe('CarouselComponent(MockBackend)', ()=> {
  let mock, service;
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [ CarouselComponent, {
      provide: XHRBackend, useClass: MockBackend
    }],
    imports: [ HttpClientTestingModule ]
  });
});

beforeEach(inject([BuildService, XHRBackend], (s, b) => {
  service = s;
  mock = b;
}));

it('should subscribe all values correctly', () => {
  let o = service.index();
  let response: any;
  spyOn(service, "index").and.returnValue(Observable.of(response));
  expect(response).toEqual(o);
});



})






