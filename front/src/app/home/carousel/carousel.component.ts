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

  photo1 = 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/60156_100961533299233_374238_n.jpg?_nc_cat=0&oh=68ff1e8fb9c71a8909fd0c9955c76c11&oe=5C0A0EC4'; 
  photo2 = 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/60763_104087692986617_6955830_n.jpg?_nc_cat=0&oh=5c09f026611904961f1acb73bdd589f4&oe=5BF41609'; 
  photo3 = 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/31211762_576899599355318_8727190901987737600_n.jpg?_nc_cat=0&oh=3a2c771181157eb2035fe6503938e03b&oe=5BEEB7EE';

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }
}