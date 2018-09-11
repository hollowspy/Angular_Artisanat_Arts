import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }


  postAdmin(url, form){
    if (url === null){
      return this.http.post('http://localhost:4000/admin', form)
    } else { 
      return this.http.post(`http://localhost:4000/admin/${url}`, form)
    }
  }

  putAdmin(url, form){
    return this.http.put(`http://localhost:4000/admin/${url}`, form)
  }


}
