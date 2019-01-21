import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../service/api-service'; 
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';




@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css']
})
export class DecoComponent implements OnInit {

  results:any = []
  photo = []; 

  constructor(private ApiService : ApiService,
              private http : HttpClient) { }

  imgColA1:string = ''; 
  imgColA2:string = ''; 
  imgColA3:string = '';
  imgColA4:string = ''; 
  imgColA5:string = '';
  imgColB1:string = '';
  imgColB2:string = '';
  imgColB3:string = '';
  imgColB4:string = '';
  imgColB5:string = '';
  imgColC1:string = '';
  imgColC2:string = '';
  imgColC3:string = '';
  imgColC4:string = '';
  imgColC5:string = '';
  imgColD1:string = '';
  imgColD2:string = '';
  imgColD3:string = '';
  imgColD4:string = '';
  imgColD5:string = '';


  ngOnInit() {
    this.getDecoData()
  }

  getDecoData(){
    this.ApiService.postApi('deco', null)
    .subscribe((res) => {
      this.results = res; 
      this.imgColA1 = this.results[0].Aphoto_principale
      this.imgColA2 = this.results[7].Aphoto_annexe2
      this.imgColA3 = this.results[4].Aphoto_annexe2
      this.imgColA4 = this.results[5].Aphoto_principale
      this.imgColA5 = this.results[11].Aphoto_principale
      this.imgColB1 = this.results[1].Aphoto_annexe2
      this.imgColB2 = this.results[2].Aphoto_principale
      this.imgColB3 = this.results[3].Aphoto_annexe2
      this.imgColB4 = this.results[6].Aphoto_principale
      this.imgColB5 = this.results[8].Aphoto_principale
      this.imgColC1 = this.results[3].Aphoto_principale
      this.imgColC2 = this.results[7].Aphoto_principale
      this.imgColC3 = this.results[9].Aphoto_principale
      this.imgColC4 = this.results[1].Aphoto_annexe2
      this.imgColC5 = this.results[2].Aphoto_annexe2
      this.imgColD1 = this.results[6].Aphoto_principale
      this.imgColD2 = this.results[4].Aphoto_principale
      this.imgColD3 = this.results[0].Aphoto_annexe2
      this.imgColD4 = this.results[8].Aphoto_annexe2
      this.imgColD5 =  this.results[10].Aphoto_principale
      console.log('déco', this.results)
      console.log('imgAcol1', this.imgColA1)
    }, (err) => {
      console.log('erreur', err)
    })
  }
}
