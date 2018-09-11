import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }


  postAdmin(url:string, form):Observable<any>{
    if (url === null){
      return this.http.post('http://localhost:4000/admin', form)
    } else { 
      return this.http.post(`http://localhost:4000/admin/${url}`, form)
    }
  }

  putAdmin(url:string, form):Observable<any>{
    return this.http.put(`http://localhost:4000/admin/${url}`, form)
  }


}
