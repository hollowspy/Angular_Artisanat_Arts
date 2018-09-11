import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

   constructor(private http : HttpClient, 
              private router:Router,
              private authHttp : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };
  
  postApi(url:string, owner:string):Observable<any>{
    const body = new HttpParams()
    .set('owner', owner)
    console.log('admin service', owner)
     return this.http.post(`/api/${url}`, body, this.httpOptions)
  }


  getFicheApi(url:string, id:number):Observable<any>{ 
    return this.http.get(`/api/${url}/${id}`)
  }



}
