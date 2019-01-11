import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Admin } from './../models/admin';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private router : Router, 
              private http: HttpClient, 
              private cookieService: CookieService) { }

   isAuth = false;
   firstName:string = '';
   lastName:string = '';
   id:number = null;
   cookieValue = 'UNKNOWN';
   

  OnAuth(token:string){
    localStorage.setItem('token', token)
  }

  onLogInt(user:Admin){
    console.log('je rentre dans Log IN', user)
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    const id = user.id.toString();
    this.cookieService.set('firstName', this.firstName, 0.001)
    this.cookieService.set('lastName', this.lastName, 0.001)
    this.cookieService.set( 'idconnected', id, 0.001 );
    console.log('servvice auth', this.firstName, this.lastName )
  }

  onOwner(user:Admin){
    console.log('on Onwner', user)
    this.id = user.id;
    console.log('id on Onwer',this.id)
    }

   onLogOut(){
      localStorage.removeItem('token');
      this.cookieService.delete('idconnected')
      this.cookieService.delete('firstName')
      this.cookieService.delete('lastName')
      this.router.navigate(['/auth'])
   }

   postPassword(url:string, form:Admin){
     return this.http.post(`http://localhost:4000/auth/${url}`, form)
   }
   
   getToken(){
     return  localStorage.getItem('token')
   }
}
