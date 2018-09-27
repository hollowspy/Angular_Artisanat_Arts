import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'
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
  photo4 : string = ''
  photo5 : string = ''

  constructor(private apiService : ApiService,
              config : NgbCarouselConfig) {
              config.interval = 2000
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
        this.photo4 = this.images[3].Asource
        this.photo5 = this.images[4].Asource
      }, (err) => {
        console.log('erreur', err)
      }
    )
   }

 



}