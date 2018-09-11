import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Admin } from './../models/admin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ;

   constructor(private router : Router, 
              private http: HttpClient) { }

   isAuth = false;
   firstName:string = '';
   lastName:string = ''
   

 

  OnAuth(token:string){
    localStorage.setItem('token', token)
  }

  isToken(){
    if (localStorage.getItem("token") === null) {
      alert('Vous devez vous administrer')
     this.router.navigate(['/auth'])
    }
    else{

      console.log('token en place')
    }
  }

  onLogInt(user:Admin){
    console.log('je rentre dans Log IN', user)
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    const id = user.id.toString();
    localStorage.setItem('idConnected',id)
    console.log('servvice auth', this.firstName, this.lastName )
  }

   onLogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('idConnected')
      this.router.navigate(['/auth'])

   }

   postPassword(url:string, form:Admin){
     return this.http.post(`http://localhost:4000/auth/${url}`, form)
   }


}
