import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Admin } from './../models/admin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private router : Router, 
              private http: HttpClient) { }

   isAuth = false;
   firstName:string = '';
   lastName:string = '';
   id:number = null;

  OnAuth(token:string){
    localStorage.setItem('token', token)
  }

  onLogInt(user:Admin){
    console.log('je rentre dans Log IN', user)
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    // const id = user.id.toString();
    // localStorage.setItem('idConnected',id)
    console.log('servvice auth', this.firstName, this.lastName )
  }

  onOwner(user:Admin){
    this.id = user.id;
    console.log('id on Onwer', this.id)
    return this.id
  }

   onLogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('idConnected')
      this.router.navigate(['/auth'])
   }

   postPassword(url:string, form:Admin){
     return this.http.post(`http://localhost:4000/auth/${url}`, form)
   }
   
   getToken(){
     return  localStorage.getItem('token')
   }
}
