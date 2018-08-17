import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'
import {map} from 'rxjs/operators';

@Component({selector: 'app-carousel', 
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css'], 
            providers : [NgbCarouselConfig]
          })
export class CarouselComponent implements OnInit {
  images: Array<string>;

  constructor(private _http: HttpClient, 
              config : NgbCarouselConfig) {
              config.interval = 4000
              }

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
        .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
        .subscribe(images => this.images = images);

   }

  photo1 = 'http://p8.storage.canalblog.com/89/41/1101185/85686402_o.jpg'; 
  photo2 = 'http://p1.storage.canalblog.com/15/45/420257/83391386_o.jpg'; 
  photo3 = 'https://mosaiquesylvie.files.wordpress.com/2016/04/tableau-mosaique-voyage-bretagne.jpg'

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}