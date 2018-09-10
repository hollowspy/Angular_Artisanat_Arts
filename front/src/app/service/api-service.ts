import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Bestiaire } from '../models/bestiaire.model';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

   constructor(private http : HttpClient, 
              private router:Router,
              private authHttp : HttpClient) { }

  // url = 'http://localhost:4000';
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };
  
  getApi(url, owner){
    const body = new HttpParams()
    .set('owner', owner)
    console.log('admin service', owner)
     return this.http.post(`/api/${url}`, body.toString(), this.httpOptions)
  }


  getFicheApi(url, id:number){ 
    return this.http.get(`/api/${url}/${id}`)
  }
}
