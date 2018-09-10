import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
     

  
  getApi(url, admin:number){
    const owner = admin
    console.log('mon owner dans serviced', owner)
    return this.http.post(`/api/${url}`, owner)
  }


  getFicheApi(url, id:number){ 
    return this.http.get(`/api/${url}/${id}`)
  }
}
