import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'
import {map} from 'rxjs/operators';
import { ApiService } from '../../service/api-service';

@Component({selector: 'app-carousel', 
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css'], 
            providers : [NgbCarouselConfig]
          })
export class CarouselComponent implements OnInit {
  images: any;
  photo1 : string = ''
  photo2 : string = ''
  photo3 : string = ''

  constructor(private _http: HttpClient,
              private apiService : ApiService,
              config : NgbCarouselConfig) {
              config.interval = 4000
              }

  ngOnInit() {

        this.getCarouselData()        
       }


   getCarouselData(){
    this.apiService.postApi('carousel', null)
    .subscribe(
      (res) => {
        this.images = res
        console.log('fetch ok', this.images)
        this.photo1 = this.images[0].Asource
        this.photo2 = this.images[1].Asource
        this.photo3 = this.images[2].Asource
      }, (err) => {
        console.log('erreur', err)
      }
    )
   }

 



}