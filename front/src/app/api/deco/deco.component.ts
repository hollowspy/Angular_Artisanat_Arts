import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../service/api-service'; 
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';




@Component({
  selector: 'app-deco',
  templateUrl: './deco.component.html',
  styleUrls: ['./deco.component.css']
})
export class DecoComponent implements OnInit {

  deco:any = []

  constructor(private ApiService : ApiService,
              private http : HttpClient) { }

  ngOnInit() {
    this.getDecoData()
  }

  getDecoData(){
    let url = 'http://localhost:4000/api/deco'; 
    console.log('url', url)
    this.http.post(url, null)
    .subscribe((res) => {
      this.deco = res; 
      console.log('déco', this.deco)
    }, (err) => {
      console.log('erreur', err)
    })
  }
}
